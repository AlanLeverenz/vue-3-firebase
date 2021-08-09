<template>
  <div class="error" v-if="error">{{ error }}</div>
  <div v-if="playlist" class="playlist-details">

    <!-- playlist information -->
    <div class="playlist-info">
      <div class="cover">
        <img :src="playlist.coverUrl">
      </div>
      <h2>{{ playlist.title }}</h2>
      <p class="username">Created by {{ playlist.userName }}</p>
      <p class="description">{{ playlist.description }}</p>
      <button v-if="ownership" @click="handleDelete">Delete playlist</button>
    </div>

    <!-- song list -->
    <div class="song-list">
      <p>song list here</p>
      <AddSong v-if="ownership" :playlist="playlist"/>
    </div>
    
  </div>
</template>

<script>
import AddSong from '@/components/AddSong.vue'
import useStorage from '@/composables/useStorage'
import useDocument from '@/composables/useDocument'
import getDocument from '@/composables/getDocument'
import getUser from '@/composables/getUser'
import { computed } from '@vue/runtime-core'
import { useRouter } from 'vue-router'


export default {
  // accepting id prop into the details template
  props: ['id'],
  components: { AddSong },
  // passing props to setup method
  setup(props) {
    // using playlist as alias for document
    const { error, document: playlist } = getDocument('playlists', props.id)
    // getUser to determine ownership of playlists
    const { user } = getUser()
    // delete playlist
    const { deleteDoc } = useDocument('playlists', props.id)
    const { deleteImage } = useStorage()
    const router = useRouter()

    const ownership = computed(() => {
      return playlist.value && user.value && user.value.uid == playlist.value.userId
    })

    const handleDelete = async () => {
      await deleteImage(playlist.value.filePath)
      await deleteDoc()
      router.push({ name: 'Home' })
    }

    return { error, playlist, ownership, handleDelete }
  }
}
</script>

<style>
  .playlist-details {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 80px;
  }
  .cover {
    overflow: hidden;
    border-radius: 20px;
    position: relative;
    padding: 160px;
  }
  .cover img {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    min-width: 100%;
    min-height: 100%;
    max-width: 200%;
    max-height: 200%;
  }
  .playlist-info {
    text-align: center;
  }
  .playlist-info h2 {
    text-transform: capitalize;
    font-size: 28px;
    margin-top: 20px;
  }
  .playlist-info p {
    margin-bottom: 20px;
  }
  .username {
    color: #999;
  }
  .description {
    text-align: left;
  }
</style>
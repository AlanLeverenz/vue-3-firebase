<template>
  <div class="chat container">
    <!-- 'this' is the prop in this component -->
    <h2 class="center teal-text">Ninja Chat</h2>
    <div class="card">
      <div class="card-content">
        <ul class="messages" vue-chat-scroll>
          <li v-for="message in messages" :key="message.id">
            <span class="teal-text">{{ message.name }}</span>
            <span class="grey-text text-darken-3 message">{{ message.content }}</span>
            <span class="grey-text time">{{ message.timestamp }}</span>
          </li>
        </ul>
      </div>
      <div class="card-action">
        <!-- need to databind name to the component prop object -->
        <NewMessage :name="name" />
      </div>
    </div>
  </div>
</template>

<script>
import NewMessage from '@/components/NewMessage'
import db from '@/firebase/init'
import moment from 'moment'

export default {
  name: 'Chat',
  props: ['name'],
  components: {
    NewMessage
  },
  data() {
    return {
      messages: []
    }
  },
  created() {
    let ref = db.collection('messages').orderBy('timestamp')
    // listens to whatever changes occur in the firestore db
    ref.onSnapshot(snapshot => {
      // docChanges() is a function in Firebase 5+
      snapshot.docChanges().forEach(change => {
        if(change.type == 'added'){
          let doc = change.doc
          this.messages.push({
            id: doc.id,
            name: doc.data().name,
            content: doc.data().content,
            timestamp: moment(doc.data().timestamp).format('lll')
          })
        }
      })
    })
  }
}
</script>

<style>
  .chat h2 {
    font-size: 2.6em;
    margin-bottom: 40px
  }
  .chat span {
    font-size: 1.4em;
  }
  .chat .time {
    display: block;
    font-size: 0.8em;
  }
  .messages{
    max-height: 300px;
    overflow: auto;
  }
  .messages::-webkit-scrollbar {
    width: 3px;
  }
  .messages::-webkit-scrollbar-track {
    background: #ddd;
  }
  .messages::-webkit-scrollbar-thumb {
    background: #aaa;
  }
</style>
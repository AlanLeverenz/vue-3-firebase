<template>
    <div class="all-friends">
        <h2>All Friends</h2>
        <div v-for="(friend, index) in friends" :key="index">
            <span>{{ friend.name }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AllFriends',
    data() {
        return {
            friends: [
                { name: 'Mario', online: true },
                { name: 'Luigi', online: false },
                { name: 'Toad', online: true },
                { name: 'Bowser', online: false },
            ]
        }
    }
}
</script>

<style>

</style>
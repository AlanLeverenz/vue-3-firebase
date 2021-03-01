// without a template object will get 'render' error
const app = Vue.createApp({
    // data, functions
    data() {
        return {
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: 45
        }
    }
})
// mounts Vue in the html template DOM with id 'app'
app.mount('#app')


// without a template object will get 'render' error
// data object is how page will first render
// () {} invokes something. Otherwise is just a reference.
// "this." in a methods function references the component's data objects.
const app = Vue.createApp({
    // data, functions
    data() {
        return {
            showBooks: true,
            books: [
                { title: 'name of the wind', author: 'patrick rufuss' },
                { title: 'the way of kings', author: 'brandon sanderson' },
                { title: 'the final empire', author: 'brandon sanderson' },
            ],
            x: 0,
            y: 0
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        handleEvent(e, data) {
            console.log(e, e.type)
            if (data) {
                console.log(data)
            }
        },
        handleMousemove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        }
    }
    
})



// mounts Vue in the html template DOM with id 'app'
app.mount('#app')


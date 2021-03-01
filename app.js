// without a template object will get 'render' error
// data object is how page will first render
// () {} invokes something. Otherwise is just a reference.
// "this." in a methods function references the component's data objects.
const app = Vue.createApp({
    // data, functions
    data() {
        return {
            showBooks: true,
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: 45,
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

        // changeTitle(title) {
        //     // this.title = 'Words of Radiance'
        //     // title was passed in from the template
        //     this.title = title
        // }
    }
    
})



// mounts Vue in the html template DOM with id 'app'
app.mount('#app')


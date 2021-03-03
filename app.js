// without a template object will get 'render' error
// data object is how page will first render
// () {} invokes something. Otherwise is just a reference.
// "this." in a methods function references the component's data objects.
const app = Vue.createApp({
    // data, functions
    data() {
        return {
            url: 'http:www.thenetninja.co.uk',
            showBooks: true,
            books: [
                { title: 'name of the wind', author: 'patrick rufuss', img: 'assets/1.png', isFav: true },
                { title: 'the way of kings', author: 'brandon sanderson', img: 'assets/2.png', isFav: false },
                { title: 'the final empire', author: 'brandon sanderson', img: 'assets/3.png', isFav: true },
            ],
            x: 0,
            y: 0
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
            console.log(this.showBooks);
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
        },
        toggleFav(book) {
            book.isFav = !book.isFav
            console.log(book.isFav)
        }
    }
    
})



// mounts Vue in the html template DOM with id 'app'
app.mount('#app')


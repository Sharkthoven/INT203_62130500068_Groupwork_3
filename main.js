const app = {
    data() {
        return {
            msg: 'Photo Gallery',
            photosets: [
                        {url:'img/Beethoven.jpg', alt: "Ludwig V. Beethoven", done: false}, 
                        {url:'img/Chopin.jpg', alt: "Frederic Chopin", done: false},
                        {url:'img/Liszt.jpg', alt: "Franz Liszt", done: false}, 
                        {url:'img/Mozart.jpg', alt: "Joannes A. Mozart", done: false}
                       ],
        }
    },
    computed: {
        numberOfPicture() {
            return this.photosets.length;
        },
        numberOfLiked() {
            return this.photosets.filter(p => p.done).length;
        }
    }
}
Vue.createApp(app).mount('#app')
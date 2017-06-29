
const app = {
    
    
    init(selectors) {
    this.flick = []
    this.max = 0
    this.list = document.querySelector(selectors.listSelector)
    document
        .querySelector('form#flick-form')
        .addEventListener('submit', this.handleSubmit.bind(this))
    },


renderListItem(flick) {
    const item = document.createElement('li')
    const likeButton = document.createElement('button')
    const dislikeButton = document.createElement('button')
    const upButton = document.createElement('button')
    const downButton = document.createElement('button')
    
    //cari tahu cara bikin button keluar di sebelah kanan

    item.textContent = flick.name


return item
},


handleSubmit(ev) {
        ev.preventDefault()
        const f = ev.target
        const flick = {
            id: this.max + 1,
            name: f.flickName.value, 
        }
        const listItem = this.renderListItem(flick)
        this.list.appendChild(listItem)
        this.max ++
        f.reset()
    },
}

app.init({
    formSelector:'form#flick-form',
    listSelector: '#flick-list',
})
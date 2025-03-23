const searchIcon = document.getElementById('search-icon')
const search = document.getElementById('search')
const item = document.getElementById('item')
searchIcon.addEventListener('click' , function(){
    item.style.display  = 'none'
    search.style.display = 'block'
})
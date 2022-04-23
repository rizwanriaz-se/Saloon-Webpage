const bars = document.getElementById('bars')
const dropbar = document.querySelector('.dropbar')

bars.addEventListener('click', function(){
    dropbar.classList.toggle('hidden')
})


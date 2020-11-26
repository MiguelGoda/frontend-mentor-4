const checkbox = document.querySelector('#checkbox')
if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
    console.log('true')
    checkbox.setAttribute('checked', true)
}

checkbox.addEventListener('change', function (event) {
    document.body.classList.toggle('is-dark-mode')
})

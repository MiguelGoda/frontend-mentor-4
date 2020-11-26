const checkbox = document.querySelector('#checkbox')
if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
    console.log('true')
    checkbox.setAttribute('checked', true)
}

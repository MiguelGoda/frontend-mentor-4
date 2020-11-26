<<<<<<< HEAD
console.log(window.matchMedia('(prefers-color-scheme:dark)'))

=======
const checkbox = document.querySelector('#checkbox')
if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
    console.log('true')
    checkbox.setAttribute('checked', true)
}
>>>>>>> 3bcaa132e122d2ed5dd6f52d2b8227ee3099a1dc

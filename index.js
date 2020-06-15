let dropdown = document.querySelectorAll('.dropdown')


function showElements(event){
    
    let target = event.target

    let el = target.nextElementSibling
    
    
    let dd = document.querySelectorAll('.dropdown-menu')
    if (el.classList.contains('show')){
            el.classList.remove('show')
            return
        }
    for (let i = 0; i < dd.length; i++){
        dd[i].classList.remove('show')
    }
    el.classList.add('show')
    
    
}
for (let i = 0; i < dropdown.length; i++){
    dropdown[i].addEventListener('click', showElements)
}
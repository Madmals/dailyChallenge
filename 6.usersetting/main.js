const circlemoveleftright = document.querySelectorAll('.circle')

const linemoveleftright = document.querySelectorAll('.line')

console.log(linemoveleftright)


//click circle move left right

circlemoveleftright.forEach((eachcircle)=>{

eachcircle.addEventListener('click', ()=>
{ eachcircle.classList.toggle('toggle-on')})

})



const des_box = document.querySelector('.des-box')

const description = document.querySelector('.description')

const plus_sign = document.querySelector(".fa-plus")

const quantity = document.getElementById('no')


const plus_quantity = document.querySelector('.increment')

const minus_quantity = document.querySelector('.minus')

const button_cart = document.querySelector(".add-cart")


console.log(+quantity)

des_box.addEventListener('click',()=>{
    description.classList.toggle('hide')
    plus_sign.classList.toggle('hide')
})

plus_quantity.addEventListener('click',()=>{
    quantity.stepUp()
    let e =  quantity.value*4.99
    let d = e.toFixed(2)
button_cart.innerHTML = `
$${d} Add Now
`
    
})

minus_quantity.addEventListener('click',()=>{
    quantity.stepDown()
    let e = quantity.value * 4.99
    let d = e.toFixed(2)

    button_cart.innerHTML = `
$${d} Add Now
`

})


price = quantity.value *2

console.log(price)







const star = document.querySelectorAll('.fa-star')

const cancel = document.querySelector('.cancel')

const container = document.querySelector('.container')



star.forEach((a,index)=>{
    a.addEventListener('click',()=>{
        highlightStar(index);
    })
})

function highlightStar(index){


    star.forEach((eachstar, index2)=>{
        if(index2 <= index ){
            eachstar.classList.add('background')
        }else{
            eachstar.classList.remove('background')
        }
    })
}

cancel.addEventListener('click',()=>{
 container.classList.toggle('X')
})

const today = moment().format('MMMM Do YYYY');
var todays = moment().format('YYYY-MM-DD');



const date =document.getElementById('date')
const datess = document.getElementById('dates')
datess.value =todays

date.innerHTML = today

datess.addEventListener('change',(e)=>{
    date.innerHTML = moment(e.target.value).format('MMMM Do YYYY');
})


//only get of card no format xxxx-xxxx-xxxx-xxxx

function ccformat(value) {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    //replace whitespace/spacebar to "" dan replace selain pada number kepada ""
    const matches = v.match(/\d{4,16}/g)
    const match = matches && matches[0] || ''
    let partof4 = []
    
    for (i=0; i < match.length; i+=4){
        partof4.push(match.substring(i,i+4))
    }

    if(partof4.length){
        return partof4.join('-')
    }else{
        return value
    }

}

//put value at input text area

cardno = document.getElementById('cardno')

cardno.addEventListener('input',(e)=>{
    return cardno.value = ccformat(e.target.value);
    
})




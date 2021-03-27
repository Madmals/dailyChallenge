
// nama = document.querySelector('.name').innerHTML
// gender = document.querySelector('.gender')
// age = document.querySelector('.age')
// city = document.querySelector('.city')
// postcode = document.querySelector('.postcode')
userTextImg = document.getElementById('img-container')
numberContainer = document.querySelector('.number-container')

console.log(userTextImg)

async function getUserRandom() {

    try {
        const res = await axios.get("https://randomuser.me/api/")

        let data = (res.data.results[0])
        // console.log(data.name.last)
        let nama = data.name.last
        let gender = data.gender

        let age = data.dob.age
        let city = data.location.city
        let country = data.location.country

        let dd = `
             <img src="https://images.pexels.com/photos/1838609/pexels-photo-1838609.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="" class="second">
        <h1 class="name">${nama}</h1>
        <p class="gender">${gender}</p> 
        `
        userTextImg.innerHTML = dd

        let aa = `
        
            <h2>${age}</h2>
            <h2>${city}</h2>
            <h2>${country}</h2>
        
        `

        numberContainer.innerHTML = aa




    } catch (error) {
        console.log(error)

    }
}



getUserRandom()


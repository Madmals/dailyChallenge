
const num = document.querySelector(".number")
const card_area = document.querySelector(".card-area")

const image_url = 'https://image.tmdb.org/t/p/w1280'


let urls = ["https://api.themoviedb.org/3/trending/movie/week?api_key=7d01ce9433d80be3efed5507c5508810", "https://api.themoviedb.org/3/genre/movie/list?api_key=7d01ce9433d80be3efed5507c5508810&language=en-US"]





const trending = async () => {

    let res = await fetch(urls[0])
    let data = await res.json()

    each_genre_id = []

    data.results.forEach(eachgenre => {
        each_genre_id.push(eachgenre.genre_ids)
    })



    show_movies(data.results)
    get_rating()

    return each_genre_id

}


trending().then(each_genre_id => {
    each_genre_id.forEach(eachothers => {

        // console.log(eachothers.length)
        tag().then(data_genre => {



            var abbb = []
            data_genre.forEach(eachofgenre => {
                // console.log(Object.values(eachofgenre)[0])
                let test = Object.values(eachofgenre)


//stuck here

                for (let i = 0; i < eachothers.length; i++) {
                    for (let j = 0; j < test.length; j++) {
                        if (eachothers[i] === test[j]) {
                            abbb.push(('a'))
                            console.log(abbb.length)
                            // console.log(test[1])



                        }

                    }
                }


            })

            // const num = document.querySelector(".number")
            // let tag = document.querySelectorAll('.tag')
            // num.innerHTML = 0


            // for (let i = 0; i < abbb.length; i++) {

            //     let newtags = document.createElement('button')
            //     newtags.innerHTML = 'dfdfas'
            //     tag[i].append(newtags)

            // }

            // for(let i=0; i<abbb.length; i++) {
            //     for(j=0; j<abbb[i].length; j++) {
            //         console.log(abbb[i].length)
            //     }
            // }



            // return abbb
            console.log(abbb)
        })
    })


})


let d = () => {
    trending().then(abbb => {
        const num = document.querySelector(".number")
        console.log(num)
        let tag = document.querySelectorAll('.tag')
        num.innerHTML = 0


        for (let i = 0; i < tag.length; i++) {

            let newtags = document.createElement('button')
            newtags.innerHTML = 'dfdfas'
            tag[i].append(newtags)

        }

    })

}




const tag = async () => {
    let res = await fetch(urls[1])
    let data = await res.json()
    let data_genre = data.genres
    // console.log(data.genres)
    return data_genre
}





const show_movies = (movie) => {

    card_area.innerHTML = ``
    movie.forEach(mov => {
        const { title, poster_path, vote_average, release_date } = mov

        card_movie = document.createElement('div')
        card_movie.classList.add('card')

        card_movie.innerHTML = `

                <div class="p-2 number">1</div>
                <div class="img-container">
		
                <img
                    src="${image_url}${poster_path}"
                    alt="">
		</div>
                <div class="text p-1 ">
                    <h3>${title}</h3>
                    <div class="star-area">

                        <p class="rel">${release_date}</p>

                
                        <span class="stars-outer">
			<div class="stars-inner">
            </div>

			</span>
            <div class="voter">${vote_average}</div>

                        </div>


                    <div class="tag">

                    </div>
                    </div>



                </div>
		
		`

        card_area.appendChild(card_movie)


    })
    // show_tag()
}





// const show_tag = () => {


//     let tag = document.querySelectorAll('.tag')

//     tag.forEach(eachtag => {

//         let newtag = document.createElement('button')
//         newtag.innerHTML = 'abu'
//         eachtag.appendChild(newtag)





//     })





// oneoftag.forEach(each => {

// })

// <button type="text" class="btn">Drama</button>

// for (let i = 0; i <= tag.length; i++) {
// tag[i].innerHTML =
// }



// }











const get_rating = () => {
    const rating_total = 10

    let vote_all = document.querySelectorAll(".voter")



    vote_all.forEach(eachvote => {

        // // get percentage
        const star_percentage = (Number(eachvote.textContent) / rating_total) * 100

        // //rounded to 10 decimal
        const star_percentage_rounded = `${Math.round(star_percentage / 10) * 10}%`



        //set width of stars inner to percentage

        let a = document.querySelectorAll(".stars-inner")

        a.forEach((list) => {
            list.style.width = star_percentage_rounded
            // console.log(star_percentage_rounded)
        })

    })


}

const run = async () => {
    await Promise.all([trending(), tag(), d()])
}


run()

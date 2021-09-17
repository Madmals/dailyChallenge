
const artist_val = document.querySelector('.header__con__artist')
const song_val = document.querySelector('.header__con__song')
const search_btn = document.querySelector('.fa-search')
const lyric_con = document.querySelector('.content__con__lyric')


//api lyric
const search_lyric = async () => {

	let songs = song_val.value
	let artist = artist_val.value

	let res = await fetch(`https://api.lyrics.ovh/v1/${artist}/${songs}`)

	let data = await res.json()

	lyric_con.innerHTML = `
	<p class="new_p">
	${data.lyrics}
	</p>
	`
}

search_btn.addEventListener('click', () => {

	search_lyric()
})

//add to collection by creating new obj and append to local storage

const add_btn = document.querySelector('.fa-plus-circle')

add_btn.addEventListener('click', () => {

	const lyric_item = document.querySelector('.new_p')

	if (lyric_con.innerHTML.includes("You don't have any lyric yet") || song_val.value == '' && artist_val.value == '' || song_val.value == '' && artist_val.value != '' || song_val.value != '' && artist_val.value == '') {

		alert('Please insert song name and artist')

	} else {
		let lyrics = localStorage.getItem('lyric')

		if (lyrics === null) {
			lyric_obj = []
		} else {
			lyric_obj = JSON.parse(lyrics)
		}

		console.log(lyric_item)

		let new_object_lyric = {

			// lyric: lyric_item.inn,
			song: song_val.value,
			artist: artist_val.value
		}

		lyric_obj.push(new_object_lyric)

		localStorage.setItem('lyric', JSON.stringify(lyric_obj))

		show_col()
	}

})

//create div from local storage obj

const show_col = () => {
	const sidecol_area = document.querySelector('.aside__body')
	let lyrics = localStorage.getItem('lyric')

	if (lyrics === null) {
		lyric_obj = []
	} else {
		lyric_obj = JSON.parse(lyrics)
	}

	let html = ''

	lyric_obj.forEach((eachobj, index) => {
		html += `
						<div class="aside__list">
					<i class="fas fa-user-astronaut"> ${eachobj.artist} </i>
					<i class="fas fa-music"> ${eachobj.song} </i></span></i>
					<i class="far fa-minus-square"></i>
				</div>
		`
	})

	sidecol_area.innerHTML = html
}

//clear local storage

const clear_all = document.querySelector('.fa-trash-alt')

clear_all.addEventListener('click', () => {
	localStorage.clear()
	show_task()
})


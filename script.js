// fetch data countries from json file :
const loadCountries = async () => {
    fetch("countries.json").then(res => {
        return res.json()
    }).then(countries => {
        //console.log(countries.length)

        countries.map(country => {
            return document.querySelector('#country').innerHTML += 
                `<option id="id" value=${country.id}>${country.name}</option>`
        })

        // for(i = 0; i < countries.length; i++) {
        //     //console.log(countries[i])
        //     document.querySelector('#country').innerHTML += (`
        //         <option id="id" value=${countries[i].id}>
        //             ${countries[i].name}
        //         </option>
        //     `)
        // }
    })
}

document.getElementById('country').addEventListener("click", async function loadCities(e) {
    e.preventDefault()

    const id = e.target.value
    //console.log(id)

    await fetch("cities.json").then(res => {
        return res.json()
    }).then(cities => {
        cities.map(city => {
            if(city.country_id == id) {
                //console.log(city.name)
                return document.querySelector('#cities').innerHTML += (`<option>${city.name}</option>`)
            }
        })
    })

})

// fetch cities by id_country :

// call of function :
loadCountries()
// loadCities()
const listCars = async () => {
    try{
        let res = await axios.get('http://localhost:3000/cars')
        let cars = res.data.cars.reverse()
        let ul = document.querySelector('ul')
        ul.innerHTML = ''
        cars.forEach(car => {
            let li = document.createElement('li')
            li.innerText = car.brand + ' -- ' + car.model + ' ' + car.year
            ul.appendChild(li)
        })
    } catch (error) {
        console.log(error)
    }
}

listCars()

const form = document.querySelector('form')
form.addEventListener('submit', async(event) => {
    event.preventDefault()

    let brandInput = document.querySelector('#brandInput')
    let modelInput = document.querySelector('#modelInput')
    let yearInput = document.querySelector('#yearInput')

    await axios.post(
        'http://localhost:3000/cars', 
        {
            brand: brandInput.value,
            model: modelInput.value,
            year: yearInput.value
        })

    brandInput.value = ''
    modelInput.value = ''
    yearInput.value = ''
    listCars()
})
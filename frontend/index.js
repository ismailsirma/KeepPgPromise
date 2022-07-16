const listUsers = async () => {
    try{
        let res = await axios.get('http://localhost:3000/users')
        let users = res.data.users.reverse()
        let ul = document.querySelector('ul')
        ul.innerHTML = ''
        users.forEach(user => {
            let li = document.createElement('li')
            li.innerText = user.email
            ul.appendChild(li)
        })
    } catch (error) {
        console.log(error)
    }
}

listUsers()

const form = document.querySelector('form')
form.addEventListener('submit', async(event) => {
    event.preventDefault()
    let emailInput = document.querySelector('#emailInput')
    await axios.post('http://localhost:3000/users', {email: emailInput.value})
    emailInput.value = ''
    listUsers()
})

const users = ['admin', "jack", "jocko", "jordan",]

const admin = {
    username: "admin",
    password: "hello",
    name: "Cerbera",
    year: "2022",
}

form = document.getElementById('handshake')
form.addEventListener('submit', handleSubmit);

function handleSubmit (event){
    event.preventDefault();
    let check1 = document.getElementById('uname')
    if (users.includes(check1))
        console.log("Nope")
;
}

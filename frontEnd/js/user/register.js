const register = () => {
let name =document.getElementById('name').value
let lastname = document.getElementById('lastname').value
let email = document.getElementById('email').value
let password = document.getElementById('password').value
let json = {firstname:name,lastname:lastname,email:email,password:password}
post('user/signup',json).then((res) => {
    console.log(res)
    if (res.status===200) {
        console.log(res)
    window.location.replace('login.html')
    } else {
        alert("Couldn't create user")
    }
})
}
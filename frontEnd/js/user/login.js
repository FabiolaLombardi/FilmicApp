const login = () => {
    let email= document.getElementById('email').value 
    let password = document.getElementById('clave').value 
    let json = {email:email,password:password}
    console.log(JSON.stringify(json))
 post('user/login',json).then((res) => {
         console.log(res)
         if (res.status===200) {
             console.log(res)
         window.location.replace('home.html')
         } else {
             alert(res.body)
         }
 })
}
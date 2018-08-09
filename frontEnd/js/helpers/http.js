
    const local = "http://localhost:10036"
 const get = (url) => {
    return new Promise((resolve,reject) => {
            url = `${local}/${url}`
            fetch(url, {
                method: 'GET',
                'credentials':'include'
            })
            .then((res) => res.json())
            .then((data) => {
                resolve(data)
                console.log(data);;
            })
            .catch((err) => {
                    reject(err)
                alert('Error while request...' + err.message);
            })
        })
}


 const post = (url,body) => {
    return new Promise((resolve,reject) => {
            url = `${local}/${url}`
            fetch(url, {
                method: 'POST',
                body:JSON.stringify(body),
                credentials: 'include',
                headers: {
                    'Content-type': 'application/json'
                }
            })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                resolve(data)
                
            })
            .catch((err) => {
                    reject(err)
                alert('Error while request...' + err.message);
            })
        })
}

    const logout = () => {
        get('user/logout').then((res)=>{
            if(res.status==200){
                alert('La sesion fue cerrada exitosamente')
                window.location.replace('login.html')
            }
        })
    }

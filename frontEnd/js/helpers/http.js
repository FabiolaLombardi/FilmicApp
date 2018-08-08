
    const local = "http://localhost:10036"
 const get = (url) => {
    return new Promise((resolve,reject) => {
            url = `${local}/${url}`
            fetch(url, {
                method: 'GET'
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
                withCredentials: 'include',
                credentials: 'same-origin',
                headers: {
                    'Content-type': 'application/json'
                }
            })
            .then((res) => {console.log(res);return res.json()})
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

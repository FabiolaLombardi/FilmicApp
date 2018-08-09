
const dynamic = (page) => {
    let container = document.getElementById('dynamic')
    switch (page) {
        case 1:
            container.innerHtml = "";
            let movieHistory = []
            get('cart/get/record').then((res)=>{
                if(res.status==200){
                    if(res.body[0]){
                    container.innerHTML=''
                    movieHistory=res.body
                    movieHistory.map((movie)=>{
                                container.innerHTML+=`<div class="col-lg-3">
                                <div class="card">
                                    <img class="card-img-top" src="" alt="Card image cap">
                                    <div class="card-body">
                                        <p>Titulo: ${movie.title}</p>
                                        <p>Precio : ${movie.price}</p>
                                    </div>
                                </div>
                            </div>`
                            })
                }
            }else {
                container.innerHTML='<h1>No se han alquilado peliculas </h1>'
            }
            })
            break;
        case 2:
            container.innerHtml = "";
            container.innerHtml = "";
           let currentMovies = []
            get('cart/get/current').then((res)=>{
                if(res.status==200){
                    container.innerHtml=''
                    if(res.body[0]){
                    currentMovies=res.body
                    currentMovies.map((movie)=>{
                                container.innerHTML+=`<div class="col-lg-3">
                                <div class="card">
                                    <img class="card-img-top" src="" alt="Card image cap">
                                    <div class="card-body">
                                        <p>Titulo: ${movie.title}</p>
                                        <p>Precio : ${movie.price}</p>
                                        <button class='btn' onclick='deliver(${movie.id})' >Entregar</button>
                                    </div>
                                    
                                </div>
                            </div>`
                            })
                }
                } else {
                    container.innerHTML='<h1>No hay peliculas actualmente en alquiler </h1>'
                }
            })
            break;

        case 3:
            container.innerHTML = "";
            container.innerHTML = creditCards;
            break;

        case 4:
            container.innerHTML = "";
            container.innerHTML = newPayMethod;
            break;

    }
}

    const deliver = (id) => {
        post('cart/update',{id:id,status:'record'}).then((res)=>{
            console.log(res)
            if(res.status==200){
                window.location.reload()
            }
        })

    }
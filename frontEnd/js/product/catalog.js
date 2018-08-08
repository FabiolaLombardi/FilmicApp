get('category/get/'+window.location.search.split('=')[1]).then((res) => {
    res.body.map((movie,index) =>{
        let container = document.getElementById('movies')
        if(index%4===0){
          container.innerHTML+=`<div class="w-100"></div>`
        }
        container.innerHTML+=`
                          <div class="col-lg-3">
                                      <div class="card" >
                                          <img class="card-img-top" src="${movie.img}" alt="${movie.title} Poster">
                                          <div class="card-body">
                                            <span>${movie.title}</span>
                                            <p>${movie.description}</p>
                                            <p>Precio: ${movie.price}</p>
                                          </div>
                                          <input type="number" class="form-control" placeholder="Qty." id="quantity">
                                          <button class="btn" onclick='addToCart(${movie.id})' id="boton">Anadir al Carrito</button>
                                        </div>
                                  </div>
                      `
    })
})

const addToCart = (id) => {
  let q = document.getElementById('quantity').value
  let json = {id:id,quantity:q}
  post('cart/add',json).then((res) => {
         console.log(res)
         if (res.status===200) {
             console.log(res)
         window.location.replace('home.html')
         } else {
             alert(res.response)
         }
 })

}
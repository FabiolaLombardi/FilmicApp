get('category/get').then((res) => {
    res.body.map((category,index) =>{
        let container = document.getElementById('categorias')
        if(index%3===0){
          container.innerHTML+=`<div class="w-100"></div>`
        }
        container.innerHTML+=`
                      <div class="col-4">
                          <div class="card" >
                              <img class="card-img-top" src="img/Comedia2.jpg" alt="Card image cap">
                              <div class="card-body">
                                <a href="catalog.html?cat=${category.name}" class="btn">Ir a ${category.name}</a>
                              </div>
                            </div>
                      </div>
                      `
    })
})
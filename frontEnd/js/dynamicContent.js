// variables for dynamic rendering on membership page

movieHistory=`<div>
            <div class="col-lg-9" >
            <div class="row">
                <div class="col-lg-3">
                    <div class="card">
                        <img class="card-img-top" src="" alt="Card image cap">
                        <div class="card-body">
                            <a href="#" class="btn">Ir a Categoria</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="card">
                        <img class="card-img-top" src="" alt="Card image cap">
                        <div class="card-body">
                            <a href="#" class="btn">Ir a Categoria</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="card">
                        <img class="card-img-top" src="" alt="Card image cap">
                        <div class="card-body">
                            <a href="#" class="btn">Ir a Categoria</a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>`


    currentMovies=`<div>
        <div class="col-lg-9">
        <div class="row">
            <div class="col-lg-3">
                <div class="card">
                    <img class="card-img-top" src="" alt="Card image cap">
                    <div class="card-body">
                        <a href="#" class="btn">Que lo que 2</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="card">
                    <img class="card-img-top" src="" alt="Card image cap">
                    <div class="card-body">
                        <a href="#" class="btn">Que lo que 2</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="card">
                    <img class="card-img-top" src="" alt="Card image cap">
                    <div class="card-body">
                        <a href="#" class="btn">Que lo que 2</a>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>`;

    creditCards = `<div>
        <div class="col-lg-9">
            <ul class="nav flex-column">
            
                <li nav-item>
                    <a>Tarjeta 1</a>
                </li>
                <li nav-item>
                    <a>Tarjeta 2</a>
                </li>
                <li nav-item>
                    <a>Tarjeta 3</a>
                </li>
            </ul>

        </div>

    
    </div>`

    

   
const dynamic=(page)=>{
    let container=document.getElementById('dynamicContent')
    switch(page){
        case 1:
            console.log(movieHistory);
            container.innerHtml="";
            container.innerHTML=movieHistory;
            break;
        case 2:
            console.log(currentMovies);
            container.innerHtml="";
            container.innerHTML=currentMovies;
            break;

        case 3:
            container.innerHTML="";
            container.innerHTML= creditCards;

    }
}
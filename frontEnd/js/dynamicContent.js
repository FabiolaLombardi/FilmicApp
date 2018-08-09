// variables for dynamic rendering on membership page

movieHistory = `<div>
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


currentMovies = `<div>
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

    
    </div>`;

newPayMethod = `
    <form>
        <div class="form-group">
            <label for="nombre">Nombre</label>
            <input type="text" class="form-control" id="nombre" placeholder="Nombre impreso en la Tarjeta">
        </div>

        <label for="nTarjeta">Nro Tarjeta</label>
        <br>
        <div class="form-row">

            <div class="col">
                <input type="text" class="form-control" id="nTarjeta"
                <small id="Help" class="form-text text-muted">Sin espacios ni caracteres especiales.</small>
            </div>

            <div class="col">
                <input type="text" class="form-control" id="codigo" placeholder="Codigo">
            </div>
        </div>
        <br>

        <label for="cedula">Cedula</label>
        <div class="form-row">
    
            <div class="col-2">
                <select class="form-control" id="type">
                    <option>V</option>
                    <option>E</option>
                    <option>J</option>
                </select>
            </div>

            <div class="col-9">
                <input type="nTarjeta" class="form-control" id="cedula" >
            </div>
        </div>
        <br>
        <label for="fecha">Valida hasta</label>
        <div class="form-row">
  
            <div class="col">
                <select class="form-control" id="month">
                <option>01</option>
                <option>02</option>
                <option>03</option>
                <option>04</option>
                <option>05</option>
                <option>06</option>
                <option>07</option>
                <option>08</option>
                <option>09</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
                </select>
            </div>

            <div class="col">
                <select class="form-control" id="year">
                    <option>18</option>
                    <option>19</option>
                    <option>20</option>
                    <option>21</option>
                    <option>22</option>
                    <option>23</option>
                    <option>24</option>
                    <option>25</option>
                    <option>26</option>
                    <option>27</option>
                    <option>28</option>
                    <option>29</option>
                </select>
            </div>
        </div>
        <br>
  
        <div class="form-group form-check">
            <div class="form-row">

                <div class="col">
                    <input type="checkbox" class="form-check-input" id="Check1">
                    <label class="form-check-label" for="Check1">Visa</label>
                </div>

                <div class="col">
                    <input type="checkbox" class="form-check-input" id="Check2">
                    <label class="form-check-label" for="Check2">MasterCard</label>
                </div>

                <div class="col">
                    <input type="checkbox" class="form-check-input" id="Check3">
                    <label class="form-check-label" for="Check3">American Express</label>
                </div>

            </div>
        </div>
        <button type="submit" class="btn btn-primary center" id="boton">Añadir</button>
    </form>
    `;




const dynamic = (page) => {
    let container = document.getElementById('dynamicContent')
    switch (page) {
        case 1:
            console.log(movieHistory);
            container.innerHtml = "";
            movieHistory = []
            get('cart/get/record').then((res)=>{
                if(res.status==200){
                    movieHistory=res.body
                }
            })
            container.innerHTML = movieHistory;
            break;
        case 2:
            console.log(currentMovies);
            container.innerHtml = "";
            container.innerHTML = currentMovies;
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
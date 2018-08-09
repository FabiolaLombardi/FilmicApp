let jsonArr = [];
    get('cart/get/order').then((res)=>{
        if(res.status==200) {
            jsonArr=res.body

    let item = document.getElementById("item");
    let total = 0
    for(const i in jsonArr){
    let tr = document.createElement("tr");
    let element = `
        <th>${jsonArr[i].title}</th>
        <th>${jsonArr[i].idproduct}</th>
        <th>${jsonArr[i].price}</th>
        
        `;

        tr.innerHTML = element;
        item.appendChild(tr);
        total+=Number(jsonArr[i].price)
    }
        console.log(total)
        document.getElementById('total').innerHTML=total
        }else if(res.status==500){
            document.getElementById('content').innerHTML='<h1>No items have been added to cart</h1>'
        } else {
            alert(res.body)
            window.location.replace('home.html')
        }
        
    })
    console.log(JSON.stringify(jsonArr));

    const buy =() =>{
        jsonArr.map((movie,index,array) => {
            post('cart/update',{id:movie.id,status:'current'}).then((res)=>{
                console.log(res)
                if(array.length-1==index){
                    window.location.replace('carrito.html')
                }
            })

        })
        
    }
const problem1 = document.getElementById("problem1");
var number = 0;
i = 0;
problem1.addEventListener("click", () => {
    while(i<25){
        number += 11
        document.write("<a>"+number+"</a><br>")
        i++;
    }
    document.write("<h1>Reiniciar Pagina para acceder al CRUD</h1>")
});

var ProductsArray = []

function MostrarFormulario(){
    document.getElementById("ListaProductos").style.display="none"
    document.getElementById("FormularioActualizacion").style.display="none"
    document.getElementById("FormularioIngreso").style.display=""
    document.getElementById("txtIdProducto").value="0";
    document.getElementById("txtNombreProducto").value="";
    document.getElementById("cbxCategoria").value="";
    document.getElementById("txtPrecio").value="";
    document.getElementById("txtCantidadProductos").value="";
    document.getElementById("txtFechaPublicacion").value="";
}

function Guardar(){
    let productName = document.getElementById("txtNombreProducto").value;
    let productCategory = document.getElementById("cbxCategoria").value;
    let productPrice = document.getElementById("txtPrecio").value;
    let productQuantity = document.getElementById("txtCantidadProductos").value;
    let productDate = document.getElementById("txtFechaPublicacion").value;

    let Producto={

        Id:Random(),
        "productName":productName,
        "productCategory":productCategory,
        "productPrice":productPrice,
        "productQuantity":productQuantity,
        "productDate":productDate
        };
    let index=ProductsArray.length;
    ProductsArray[index] = Producto;

    AgregarTablaProducto();
    MostrarListaProductos();

}

function AgregarTablaProducto(){
    let index=ProductsArray.length;
    let Producto;
    let htmlRow=""; 
    console.log(ProductsArray)
  
    for(let i=0;i<index;i++){
        Producto = ProductsArray[i];
        htmlRow += "<tr >";
        htmlRow += "<td>"+Producto.productName+"</td>";
        htmlRow += "<td>"+Producto.productCategory+"</td>";
        htmlRow += "<td>"+Producto.productPrice+"</td>";
        htmlRow += "<td>"+Producto.productQuantity+"</td>";
        htmlRow += "<td>"+Producto.productDate+"</td>";
        htmlRow += "<td> <button type='button' class='btn btn-outline-danger'onclick='EliminarProducto("+ Producto.Id +");'>Delete</button>";
        htmlRow += " &nbsp;&nbsp;<button type='button' class='btn btn-outline-info' onclick='EditarProducto("+ Producto.Id +");'>Edit</button></td>";
        htmlRow += "</tr>";
    }
    document.getElementById("tbodyDatosProductos").innerHTML=htmlRow;
}

function EliminarProducto(IdProducto){
    let index=ProductsArray.length;
    let newProductsArray = [];
    let n = 0;
    let Producto;
    for(let i=0;i<index;i++){
        Producto=ProductsArray[i];
        if(Producto.Id != IdProducto){
            newProductsArray[n]=Producto;
            n++
        }
    }
    ProductsArray=newProductsArray
    AgregarTablaProducto();

}

function MostrarListaProductos(){
    document.getElementById("FormularioIngreso").style.display="none";
    document.getElementById("FormularioActualizacion").style.display="none"
    document.getElementById("ListaProductos").style.display="";
    
}

function EditarProducto(IdProducto){
    let Producto = ProductsArray.find(p => p.Id == IdProducto);
    if (Producto){
    document.getElementById("ListaProductos").style.display="none"
    document.getElementById("FormularioIngreso").style.display="none"
    document.getElementById("FormularioActualizacion").style.display=""
    document.getElementById("txtIdProductoAct").value=Producto.Id;
    document.getElementById("txtNombreProductoAct").value=Producto.productName;
    document.getElementById("cbxCategoriaAct").value=Producto.productCategory;
    document.getElementById("txtPrecioAct").value=Producto.productPrice;
    document.getElementById("txtCantidadProductosAct").value=Producto.productQuantity;
    document.getElementById("txtFechaPublicacionAct").value=Producto.productDate;
    } else {
        alert("No hay producto con ese ID")
    }
}

function Actualizar(){
    let IdProducto = document.getElementById("txtIdProductoAct").value
    let newproductName = document.getElementById("txtNombreProductoAct").value;
    let newproductCategory = document.getElementById("cbxCategoriaAct").value
    let newproductPrice = document.getElementById("txtPrecioAct").value
    let newproductQuantity = document.getElementById("txtCantidadProductosAct").value
    let newproductDate = document.getElementById("txtFechaPublicacionAct").value
    let productUpdate = ProductsArray.findIndex(p => p.Id == IdProducto);
    console.log(IdProducto)
    if (productUpdate >= 0) {
        ProductsArray[productUpdate].productName = newproductName
        ProductsArray[productUpdate].productCategory = newproductCategory
        ProductsArray[productUpdate].productPrice = newproductPrice
        ProductsArray[productUpdate].productQuantity = newproductQuantity
        ProductsArray[productUpdate].productDate = newproductDate
        AgregarTablaProducto();
        MostrarListaProductos();
        alert("Producto modificado")
    } else {
        alert("No hay producto con ese ID")
    }
    
}


function Random(){
    let tmpDate = new Date();
    let tmpRandom = tmpDate.getTime();
    return tmpRandom;
}


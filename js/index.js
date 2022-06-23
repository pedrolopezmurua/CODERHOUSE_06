class Categories { // clase
    constructor(id,products_id, name,description,image) { //funcion contructora producto
        this.id = id //atributos
        this.products_id = products_id //atributos
        this.name = name //atributos
        this.description = description //atributos
        this.image = image //atributos
    }
    getId() { //funciones o metodos
        return this.id
    }
    getProductId() { //funciones o metodos
        return this.products_id 
    }
    getName() { //funciones o metodos
        return this.name
    }
    getDescription() { //funciones o metodos
        return this.description
    }
    getImage() { //funciones o metodos
        return this.image
    }
}


class Products { // clase
    constructor(id, sku, name, price, description,image, category, stock) { //funcion contructora producto
        this.id = id //atributos
        this.sku = sku //atributos
        this.name = name //atributos
        this.price = price //atributos
        this.description = description //atributos
        this.image = image //atributos
        this.category = category //atributos
        this.stock = stock //atributos
    }
    getId() { //funciones o metodos
        return this.id
    }
    getSku() { //funciones o metodos
        return this.sku
    }
    getName() { //funciones o metodos
        return this.name
    }
    getPrice() { //funciones o metodos
        return this.price
    }
    getDescription() { //funciones o metodos
        return this.description
    }
    getImage() { //funciones o metodos
        return this.image
    }
    getCategory() { //funciones o metodos
        return this.category
    }
    getStock() { //funciones o metodos
        return this.stock
    }
    getCalcularPrecio() { //funciones o metodos 
        return this.price * this.stock

    }
    getIva() { //funciones o metodos
        return this.price * this.stock * 0.19   //funciones o metodos
    }

}

class OrderDetails { // clase
    constructor(id,order_id,product_id,price, sku, quantity) { //funcion contructora producto
        this.id = id //atributos
        this.order_id = order_id //atributos
        this.product_id = product_id //atributos
        this.price = price //atributos
        this.sku = sku //atributos
        this.quantity = quantity //atributos
    }
    getId() { //funciones o metodos 
        return this.id
    }
    getOrderId() { //funciones o metodos
        return this.order_id
    }
    getProductId() { //funciones o metodos
        return this.product_id
    }
    getPrice() { //funciones o metodos 
        return this.price
    }
    getSku() { //funciones o metodos
        return this.sku
    }
    getQuantity() { //funciones o metodos
        return this.quantity
    }
}

class Orders { // clase
    constructor(id,customer_id, ammount,shipping_address,order_email,order_date,order_status) { //funcion contructora producto
        this.id = id //atributos    
        this.customer_id = customer_id //atributos
        this.ammount = ammount //atributos
        this.shipping_address = shipping_address //atributos
        this.order_email = order_email //atributos
        this.order_date = order_date //atributos
        this.order_status = order_status //atributos
    }
    getId() { //funciones o metodos
        return this.id
    }
    getCustomerId() { //funciones o metodos
        return this.customer_id
    }
    getAmmount() { //funciones o metodos
        return this.ammount
    }
    getShippingAddress() { //funciones o metodos
        return this.shipping_address
    }
    getOrderEmail() { //funciones o metodos
        return this.order_email
    }
    getOrderDate() { //funciones o metodos
        return this.order_date
    }
    getOrderStatus() { //funciones o metodos
        return this.order_status
    }
}

class OrderStatus{
    constructor (id, status){
        this.id = id
        this.status = status
    }
    getId(){
        return this.id
    }
    getStatus(){
        return this.status
    }

}

class Customers { // clase
    constructor(id,email,password,full_name, billing_address, shipping_address, country,phone) { //funcion contructora producto
        this.id = id //atributos
        this.email = email //atributos
        this.password = password //atributos
        this.full_name = full_name //atributos
        this.billing_address = billing_address //atributos
        this.shipping_address = shipping_address //atributos
        this.country = country //atributos
        this.phone = phone //atributos
    }
    getId() { //funciones o metodos
        return this.id
    }
    getEmail() { //funciones o metodos
        return this.email
    }
    getPassword() { //funciones o metodos
        return this.password
    }
    getFullName() { //funciones o metodos
        return this.full_name
    }
    getBillingAddress() { //funciones o metodos
        return this.billing_address
    }
    getShippingAddress() { //funciones o metodos
        return this.shipping_address
    }
    getCountry() { //funciones o metodos
        return this.country
    }
    getPhone() { //funciones o metodos
        return this.phone
    }
}

//crear lista de products en arreglo
const CreateNewProducts =[]
CreateNewProducts.push(new Products(10000,100,"aro plata","$"+25000,"aro de plata 925","./assets/images/aro_plata.jpg",1,50))
CreateNewProducts.push(new Products(100001,101,"aro oro","$"+80000,"aro de oro","./assets/images/aro_oro.jpg",1,50))
CreateNewProducts.push(new Products(100002,102,"aro fantasia","$"+10000,"aro de fantasia","./assets/images/aro_fantasia.jpg",1,50))
CreateNewProducts.push(new Products(100003,103,"Pulsera plata","$"+50000,"pulsera de plata 925","./assets/images/pulsera_plata.jpg",2,50))
CreateNewProducts.push(new Products(100004,104,"Pulsera oro","$"+80000,"pulsera de oro","./assets/images/pulsera_oro.jpg",2,50))
CreateNewProducts.push(new Products(100005,105,"Pulsera fantasia","$"+10000,"Pulsera fantasia","./assets/images/pulsera_fantasia.jpg",2,50))
CreateNewProducts.push(new Products(100006,106,"Anillo Oro","$"+80000,"Anillo de oro","./assets/images/anillo_oro.jpg",3,50))
CreateNewProducts.push(new Products(100007,107,"Anillo Oro","$"+80000,"Anillo de oro","./assets/images/anillo_oro.jpg",3,50))
CreateNewProducts.push(new Products(100008,108,"Anillo Fantasia","$"+50000,"Anillo de fantasia","./assets/images/anillo_tantasia.jpg",3,50))

//crear lista de categories de productos en arreglo
const CreateNewCategories =[]
CreateNewCategories.push(new Categories(1,1000002,"Aros","Categroia de Aros","./assets/images/aro.jpg")) // objetos
CreateNewCategories.push(new Categories(2,1000002,"Pulseras","Categroia de Pulseras","./assets/images/pulsera.jpg")) // objetos
CreateNewCategories.push(new Categories(3,1000003,"Anillos","Categroia de Anillos","./assets/images/anillo.jpg")) // objetos

//crear lista de customers en arreglo
const CreateNewCustomers =[]
CreateNewCustomers.push(new Customers(1,"mail1","passwords","Juan Rogelio Perez Perez","Calle falsa facturar 123","Calle falsa envio encomienda 456","Chile","1234567890"))
CreateNewCustomers.push(new Customers(2,"mail2","passwords2","Juan Rogelio Perez Perez","Calle falsa facturar 123","Calle falsa envio encomienda 456","Chile","1234567890"))
CreateNewCustomers.push(new Customers(3,"mail3","passwords3","Juan Rogelio Perez Perez","Calle falsa facturar 123","Calle falsa envio encomienda 456","Chile","1234567890"))

//crear lista de orders_details en arreglo
const CreateNewOrdersDetails =[]
CreateNewOrdersDetails.push(new OrderDetails(1,1,1,"$100",1000,50))
CreateNewOrdersDetails.push(new OrderDetails(2,2,2,"$200",2000,50))
CreateNewOrdersDetails.push(new OrderDetails(3,3,3,"$300",3000,50))

//crear lista de orders en arreglo
const CreateNewOrders =[]
CreateNewOrders.push(new Orders(1,1,"$100","Calle falsa enviar 123","algo@algo.cl","date","Pendiente"))
CreateNewOrders.push(new Orders(2,2,"$200","Calle falsa enviar 123","test@test.cl","date","Pendiente"))
CreateNewOrders.push(new Orders(3,3,"$300","Calle falsa enviar 123","test@test.cl","date","Pendiente"))

//crear lista de order_status en arreglo
const CreateNewOrderStatus =[]
CreateNewOrderStatus.push(new OrderStatus(1,"Pendiente"))
CreateNewOrderStatus.push(new OrderStatus(2,"Enviado"))
CreateNewOrderStatus.push(new OrderStatus(3,"Entregado"))
CreateNewOrderStatus.push(new OrderStatus(4,"Cancelado"))

 let producto1 = document.getElementById('producto1')
 producto1.innerHTML = CreateNewProducts [0].name
let valor1 = document.getElementById('valor1')
valor1.innerHTML = CreateNewProducts [0].price
 let producto2 = document.getElementById('producto2')
 producto2.innerHTML = CreateNewProducts [1].name
let valor2 = document.getElementById('valor2')
valor2.innerHTML = CreateNewProducts [1].price
let producto3 = document.getElementById('producto3')
producto3.innerHTML = CreateNewProducts [2].nam
let valor3 = document.getElementById('valor3')
valor3.innerHTML = CreateNewProducts [2].price
let producto4 = document.getElementById('producto4')
producto4.innerHTML = CreateNewProducts [3].name
let valor4 = document.getElementById('valor4')
valor4.innerHTML = CreateNewProducts [3].price
let producto5 = document.getElementById('producto5')
producto5.innerHTML = CreateNewProducts [4].name
let valor5 = document.getElementById('valor5')
valor5.innerHTML = CreateNewProducts [4].price
let producto6 = document.getElementById('producto6')
producto6.innerHTML = CreateNewProducts [5].name
let valor6 = document.getElementById('valor6')
valor6.innerHTML = CreateNewProducts [5].price



// //clase agregar al carrito de compras
// class Cart {
//     listaProducts = []   // variable atributo
//     constructor(){
//     }
//     getAddProduct(product){  //funcion declaro solamente
//         this.listaProducts.push(product)
//     }
// }
// const cart = new Cart()
// console.log(cart.listaProducts);



var button = document.getElementById('Button00');

button.addEventListener('click', function() {
    alert('haz realizo un clic')
})


var button = document.getElementById('Button01');

button.addEventListener('click', function() {
    alert('haz realizo un clic')
})


var button = document.getElementById('Button02');

button.addEventListener('click', function() {
    alert('haz realizo un clic')
})

var button = document.getElementById('Button03');

button.addEventListener('click', function() {
    alert('haz realizo un clic')
})

var button = document.getElementById('Button04');

button.addEventListener('click', function() {
    alert('haz realizo un clic')
})

var button = document.getElementById('Button05');

button.addEventListener('click', function() {
    alert('haz realizo un clic')
})


var button = document.getElementById('Button06');

button.addEventListener('click', function() {
    alert('haz comprado ')
})

var button = document.getElementById('Button07');

button.addEventListener('click', function() {
    alert('haz enviado el mensaje ')
})

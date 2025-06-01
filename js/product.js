let products = JSON.parse(localStorage.getItem('products'))
let cartBoxArr = document.querySelector('.cart-box-arr')
let totalPrice
function cart_update() {
    let price_show = document.getElementById('price')
    totalPrice = 0;
    // تفريغ الكارد قبل تعبئته
    cartBoxArr.innerHTML = ''           
         products.forEach(item => {
           let price = item.price
           totalPrice += price;           
           let x =
                    `
                       <div class='row' id="row${item.id}">
                         <span>${item.title}</span>
                         <img src='img/${item.image}'/>
                         <span id="price_in_card">Price : ${item.price}$</span>
                         <button class='del-btn' onclick='deletfromcart(${item.id})'>del</button>
                       </div>
                    ` 
           cartBoxArr.innerHTML +=x           
        });
        price_show.textContent = 'Total Price :  '+totalPrice+'$';
        let product_num = document.querySelector('.badge')
        if (products.length){
            product_num.textContent = products.length
        }else{
            product_num.textContent = ''
        }
        localStorage.setItem('products',JSON.stringify(products))
}

//.............................. deleting the element from the cart by pressing on del btn
function deletfromcart(itemId) {
    products = products.filter(item => item.id !== itemId)
    cart_update()
}
cart_update()

let text = document.getElementById('cart-box-title')
let user_name = localStorage.getItem('first name')
text.textContent = 'welcome '+user_name.toUpperCase()+' '+'here is your cart'
let badge = document.querySelector('.badge')
badge.textContent = products.length

let user_icon = document.getElementById('user-name-icon')
user_icon.textContent = user_name[0].toUpperCase()
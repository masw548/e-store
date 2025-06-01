let span = document.getElementById('user-name-icon');


// index
chickLocal()
// pressing log out btn
let logoutBtn = document.getElementById('logout')
logoutBtn.addEventListener('click', () => {
    let isSure = confirm('you are about to delete your account  Are You Sure?')
    if (isSure) {
        localStorage.clear()
        setTimeout(() => {
            chickLocal()
        }, 100);
    }
})
// chick local function
function chickLocal() {
    let logging = document.querySelector('.log');
    let user = document.querySelector('.user');
    if (localStorage.getItem('email') && localStorage.getItem('password')) {
        logging.style.display = 'none';
        user.style.display = 'block';
        span.textContent = localStorage.getItem('first name')[0].toUpperCase();
    } else {
        logging.style.display = 'block';
        user.style.display = 'none';
        span.textContent = "";
    }
}
// show title over user span icon when hover
span.addEventListener('mouseenter', () => {
    span.title = 'hello, ' + localStorage.getItem('first name').toUpperCase() + ' if you need help press here'
})
// .get data from api.................................................................................................
var data = [
    {
        id: 1,
        price:450,
        title: 'black belt',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus debitis alias molestiae dignissimos voluptates excepturi!',
        image: 'black-belt-woman.avif'
    }, {
        id: 2,
        price:650,
        title: 'black-bag',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus debitis alias molestiae dignissimos voluptates excepturi!',
        image: '2d-black-bag-women-2d.webp'
    }, {
        id: 3,
        price:550,
        title: 'drop earing',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus debitis alias molestiae dignissimos voluptates excepturi!',
        image: '2d-drop-earrings-crystal-women-2d.avif'
    }, {
        id: 4,
        price:950,
        title: 'baige-bag',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus debitis alias molestiae dignissimos voluptates excepturi!',
        image: 'baige-bag-women-3d.avif'
    }, {
        id: 5,
        price:750,
        title: 'black-hat',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus debitis alias molestiae dignissimos voluptates excepturi!',
        image: '3d-hat-women.avif'
    }, {
        id: 6,
        price:250,
        title: 'brown-belt',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus debitis alias molestiae dignissimos voluptates excepturi!',
        image: 'belt-brown-women-3d.avif'
    }, {
        id: 7,
        price:350,
        title: 'foral',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus debitis alias molestiae dignissimos voluptates excepturi!',
        image: '2d-foral-women.avif'
    }, {
        id: 8,
        price:500,
        title: 'pink-bag',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus debitis alias molestiae dignissimos voluptates excepturi!',
        image: 'pink-bag-women-3d.avif'
    }
          ]
// .....get the product from the data and display them on html page..................
let cards = document.querySelector('.card-space')
function drow() {
    let x = data.map((item) => {
        return (
            `
             <div class="box" id='${item.id}'>
               <img class= 'curser card-img'  src="img/${item.image}" alt="">
               <div class="info">
                 <h2>${item.title}</h2>
                 <p>${item.text}</p>
                 <div class='footer'>
                    <button onclick=addtoarray(${item.id})>ADD TO CART</button>
                    <span class='price'>${item.price}$</span>
                 </div>
               </div>
             </div>
            `
        )
    }).join('')
    cards.innerHTML = x;
}
drow()
// .............when HOVERING on images scale the img
let imgs = document.querySelectorAll('.card-img')
imgs.forEach(img => {
    img.addEventListener('mouseover',()=>{
        img.style.transform = 'scale(1.5)'
        img.style.transition = 'transform 0.3s ease'
    })
    img.addEventListener('mouseout', () => {
        img.style.transform = 'scale(1)'; // إعادة الحجم الأصلي عند مغادرة المؤشر
    });
});


// ..............cart icon .............cart-box-title............cart-box
// عرض عنوان للكارت
let cart_title = document.getElementById('cart-box-title')
cart_title.innerHTML = 'hi, '+localStorage.getItem('first name').toUpperCase()+'..'+'<a class="curser this-is-ur-cart-link" href="product.html">this is your cart</a>' 

// عرض كل منتج تم اضافته للكارت على الكارت
let cartBoxArr = document.querySelector('.cart-box-arr')

// .......pressing add to cart.............

// ضمان تحميل اللوكال ستوريج عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    let arr = JSON.parse(localStorage.getItem('products')) || [];
    products = arr;
    cart_update(); 
});

// let arr = JSON.parse(localStorage.getItem('products'))
// let products =arr? arr : [] ;
// cart_update()
// ......................................................function add to array   مع الانيميشن
function addtoarray(itemid) {

   let added_product = data.find((item)=>{
    return item.id === itemid
   })
   products = [...products , added_product]
   cart_update()
    // animation shake
    let cart_icon = document.getElementById('cart-icon')
    cart_icon.classList.remove('shake-animation')
    setTimeout(() => {
        cart_icon.classList.add('shake-animation')
    }, 10);    
}

//............................ update the cart............function....update cart
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

// ................toggle cart.............show hide card.............
function toggle_cart() {
    let cart_box = document.querySelector('.cart-box')    
    if(cart_box.style.display =='block'){
        cart_box.style.display = 'none';
    }else{
        cart_box.style.display = 'block';       
    }
}





//* ------------------------- Khai báo các element ------------------------- *//

const cartContainer = document.querySelector('.cart-container'); //? lớp cha để render từng sản phẩm của cart-list

let products = localStorage.getItem('listproductss'); //? mảng sản phẩm

let listproduct = JSON.parse(products); //? gọi ra từ local storage

let carts = document.querySelectorAll('.add-cart'); //? button khi click vào add to cart

//* ------------------------------------------------------------------------ *//

//* ------------------------- Hàm để show cart ra màn hình ------------------------- *//

function eventListeners() {
    document.getElementById('cart-btn').addEventListener('click', () => {
        cartContainer.classList.toggle('show-cart-container');
    });

}

eventListeners();

//* -------------------------------------------------------------------------------- *//

for (let i = 0; i < carts.length; i++) { //? listen từng sự kiện khi click vào add to cart
    carts[i].addEventListener('click', () => {
        if (localStorage.getItem('nameAccount') == null) {
            alert('Bạn chưa đăng nhập để mua hàng')
            document.getElementById('container-register').style.display='block';
        } else {
            cartNumbers(listproduct[i]);
            totalCost(listproduct[i]);
            displayCart();
        }
    });
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if (productNumbers) {
        document.querySelector('.narbar-menu--items_row #cart-count-info').textContent = productNumbers;
    }
}

function cartNumbers(listproduct, action) { //? truyền tham số là object vừa click

    // alert('Bạn đã thêm sản phẩm ' + listproduct.nameproduct + ' vào giỏ hàng');
    let productNumbers = localStorage.getItem('cartNumbers'); //? khai báo key cartNumber

    productNumbers = parseInt(productNumbers); //? chuyển kiểu int cartNumber

    if (action) {
        localStorage.setItem('cartNumbers', productNumbers - 1);
        document.querySelector('.narbar-menu--items_row #cart-count-info').textContent = productNumbers - 1; //? render tổng sản phẩm ngoài giao diện
    } else if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.narbar-menu--items_row #cart-count-info').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.narbar-menu--items_row #cart-count-info').textContent = 1;
    }
    setItems(listproduct);
}


function setItems(product) { // truyền object sản phẩm đó
    let cartItems = localStorage.getItem('productInCart'); // sản phẩm trong cart
    cartItems = JSON.parse(cartItems);

    if (cartItems != null) {
        let currentProduct = product.tag;


        if (cartItems[currentProduct] == undefined) {
            cartItems = {
                ...cartItems,
                [currentProduct]: product
            }
        }
        cartItems[currentProduct].inCart += 1
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        };
    }
    localStorage.setItem('productInCart', JSON.stringify(cartItems));
}

function totalCost(product, action) {
    let cartCost = localStorage.getItem('totalCost');
    if (action) {
        cartCost = parseInt(cartCost);
        localStorage.setItem('totalCost', cartCost - product.price);
    } else if (cartCost != null) {
        cartCost = parseInt(cartCost); // chuyển kiểu string sang kiểu number
        localStorage.setItem('totalCost', cartCost + product.price);
    } else {
        localStorage.setItem('totalCost', product.price);
    }
}


function displayCart() {
    
    let cartItems = localStorage.getItem('productInCart');
    cartItems = JSON.parse(cartItems);
    let cartCost = localStorage.getItem('totalCost');
    cartCost = parseInt(cartCost);
    let cartContainers = document.querySelector('.cart-containers')
    if (cartItems && cartContainers) {
        cartContainers.innerHTML = '';
        Object.values(cartItems).map(item => {
            cartContainers.innerHTML += `
                <div class="product"><ion-icon name="close-circle"></ion-icon><img src="${item.imagine}" />
                    <span class="sm-hide">${item.nameproduct}</span>
                </div>
                <div class="price sm-hide"><sup>$</sup> ${item.price},00</div>
                <div class="quantity">
                    <button class="button-minus"><i class="fas fa-chevron-up"></i></button>
                        <span class="countOfProduct">${item.inCart}</span>
                    <button class="button-plus"><i class="fas fa-chevron-down"></i></button>   
                </div>
                <div class="total"><sup>$</sup> ${item.inCart * item.price},00</div>
                <div class="btn-del">
                    <button type="button" class="cart-item-del-btn">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            `;
        });
        cartContainers.innerHTML += `
                <div class="cart-total">
                    <h3>Total: </h3>
                    <span id="cart-total-value">$ ${cartCost},00</span>
                </div>  
            `;

        cartContainers.innerHTML += `
                <div class="cart-checkout">
                    <button><i class="fas fa-check">Check out</i></button>
                </div> 
        `;
        
        manageQuantity();
        deleteButtons();
    }
}

// * ======================== QUANTITY CART ======================== * //

function manageQuantity() {
    let decreaseButtons = document.querySelectorAll('.button-minus');
    let increaseButtons = document.querySelectorAll('.button-plus');
    let currentQuantity = 0;
    let currentProduct = '';
    let cartItems = localStorage.getItem('productInCart');
    cartItems = JSON.parse(cartItems);
    for (let i = 0; i < increaseButtons.length; i++) {
        decreaseButtons[i].addEventListener('click', () => {
            console.log(cartItems);
            currentQuantity = decreaseButtons[i].parentElement.querySelector('span').textContent;
            console.log(currentQuantity);
            currentProduct = decreaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLocaleLowerCase().replace(/ /g, '').trim();
            console.log(currentProduct);
            console.log(cartItems[currentProduct])
            if (cartItems[currentProduct].inCart > 1) {
                cartItems[currentProduct].inCart -= 1;
                cartNumbers(cartItems[currentProduct], "button-minus");
                totalCost(cartItems[currentProduct], "button-minus");
                localStorage.setItem('productInCart', JSON.stringify(cartItems));
                displayCart();
            }
        });

        increaseButtons[i].addEventListener('click', () => {
            console.log(cartItems);
            currentQuantity = increaseButtons[i].parentElement.querySelector('span').textContent;
            console.log(currentQuantity);
            currentProduct = increaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLocaleLowerCase().replace(/ /g, '').trim();
            console.log(currentProduct);

            cartItems[currentProduct].inCart += 1;
            cartNumbers(cartItems[currentProduct]);
            totalCost(cartItems[currentProduct]);
            localStorage.setItem('productInCart', JSON.stringify(cartItems));
            displayCart();
        });
    }
}

// * ======================== DELETE CART ======================== * //

function deleteButtons() {
    let deleteButtons = document.querySelectorAll('.cart-item-del-btn');
    let productNumbers = localStorage.getItem('cartNumbers');
    let cartCost = localStorage.getItem("totalCost");
    let cartItems = localStorage.getItem('productInCart');
    cartItems = JSON.parse(cartItems);
    let productName;
    console.log(cartItems);

    for (let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener('click', () => {
            productName = deleteButtons[i].parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent.toLocaleLowerCase().replace(/ /g,'').trim();
            console.log(productName)
            localStorage.setItem('cartNumbers', productNumbers - cartItems[productName].inCart);
            localStorage.setItem('totalCost', cartCost - (cartItems[productName].price * cartItems[productName].inCart));

            delete cartItems[productName];
            localStorage.setItem('productInCart', JSON.stringify(cartItems));

            displayCart();
            onLoadCartNumbers();
        })
    }
}

displayCart();
onLoadCartNumbers();



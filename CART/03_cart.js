
let products = localStorage.getItem('listproducts');

let listproduct = JSON.parse(products);

let carts = document.querySelectorAll('.add-cart');

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumber(listproducts[i]);
        totalCost(listproducts[i]);
    });
}

function onLoadCartNumber() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if (productNumbers) {
        document.querySelector('.narbar-menu--items_row #cart-span').textContent = productNumbers;
    }
}


function cartNumber(listproduct) {

    console.log('The products click is', listproduct);
    alert('Bạn đã thêm sản phẩm vào giỏ hàng');
    let productNumbers = localStorage.getItem('cartNumber');

    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem('cartNumber', productNumbers + 1);
        document.querySelector('.narbar-menu--items_row #cart-span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumber', 1);
        document.querySelector('.narbar-menu--items_row #cart-span').textContent = 1;
    }

    setItems(listproduct);
}

function setItems(product) {
    let cartItems = localStorage.getItem('productInCart');
    cartItems = JSON.parse(cartItems);

    if (cartItems != null) {
        if (cartItems[product.id] == undefined) {
            cartItems = {
                ...cartItems,
                [product.id]: product
            }
        }
        cartItems[product.id].inCart += 1
    } else {
        product.inCart = 1;
        cartItems = {
            [product.id]: product
        }
    }

    localStorage.setItem('productInCart', JSON.stringify(cartItems));
}

function totalCost(product) {
    let cartCost = localStorage.getItem('totalCost');
    if (cartCost != null) {
        cartCost = parseInt(cartCost);  // chuyển kiểu string sang kiểu number
        localStorage.setItem('totalCost', cartCost + product.price);
    } else {
        localStorage.setItem('totalCost', product.price);
    }
}

function displayCart() {
    let cartItems = localStorage.getItem('productInCart');
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector('.products');
    let cartCost = localStorage.getItem('totalCost');

    if (cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="product">
                <i class="fas fa-times-circle"></i>
                <img src="${item.imagine}">
                <span>${item.nameproduct}</span>
            </div>
            <div class="price">${item.price}</div>
            <div class="quantity">
                <i class="fas fa-chevron-left"></i>
                <span>${item.inCart}</span>
                <i class="fas fa-chevron-right"></i>
            </div>
            <div class="total">
                ${item.inCart * item.price}
            </div>
            `;
        });
            productContainer.innerHTML +=  `
                <div class="basketTotalContainer">
                    <h4 class="basketTotalTitle">
                        Basket Total
                    </h4>
                    <h4 class="basketTotal">
                        ${cartCost}
                    </h4>
                </div>     
            `;
            productContainer.innerHTML +=  `
                <div class="btn-buy">
                    <button>BUY</button>
                </div>
            `;
    }

}


displayCart();

onLoadCartNumber();

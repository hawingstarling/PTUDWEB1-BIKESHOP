
// //* ------------------------- Khai báo các element ------------------------- *//

// const cartContainer = document.querySelector('.cart-container');        //? lớp cha để render từng sản phẩm của cart-list
// const cartList = document.querySelector('.cart-list');      //? các cart-list
// const cartTotalValue = document.getElementById('cart-total-value');     //? tổng tiền
// const cartCountInfo = document.getElementById('cart-count-info');   //? số sản phẩm trong giỏ hàng

// let products = localStorage.getItem('listproductss');        //? mảng sản phẩm

// let listproduct = JSON.parse(products);     //? gọi ra từ local storage

// let carts = document.querySelectorAll('.add-cart');     //? button khi click vào add to cart
// console.log(carts);
// //* ------------------------------------------------------------------------ *//

// //* ------------------------- Hàm để show cart ra màn hình ------------------------- *//

// function eventListeners() {
//     document.getElementById('cart-btn').addEventListener('click', () => {
//         cartContainer.classList.toggle('show-cart-container');
//     });

// }

// eventListeners();

// //* -------------------------------------------------------------------------------- *//

// for (let i = 0; i < carts.length; i++) {            //? listen từng sự kiện khi click vào add to cart
//     carts[i].addEventListener('click', () => {
//         cartNumber(listproduct[i]);
//         totalCost(listproduct[i]);
//     });
// }

// function onLoadCartNumber() {
//     let productNumbers = localStorage.getItem('cartNumbers');
//     if (productNumbers) {
//         document.querySelector('.narbar-menu--items_row #cart-span').textContent = productNumbers;
//     }
// }


// function cartNumber(listproduct) {      //? truyền tham số là object vừa click

//     console.log('The products click is', listproduct);
//     alert('Bạn đã thêm sản phẩm vào giỏ hàng');
//     let productNumbers = localStorage.getItem('cartNumber');    //? khai báo key cartNumber

//     productNumbers = parseInt(productNumbers);  //? chuyển kiểu int cartNumber

//     if (productNumbers) {
//         localStorage.setItem('cartNumber', productNumbers + 1);
//         document.querySelector('.narbar-menu--items_row #cart-count-info').textContent = productNumbers + 1;  //? render tổng sản phẩm ngoài giao diện
//     } else {
//         localStorage.setItem('cartNumber', 1);
//         document.querySelector('.narbar-menu--items_row #cart-count-info').textContent = 1;
//     }

//     setItems(listproduct);
// }

// function setItems(product) {    // truyền object sản phẩm đó
//     let cartItems = localStorage.getItem('productInCart');  // sản phẩm trong cart
//     cartItems = JSON.parse(cartItems);

//     if (cartItems != null) {
//         if (cartItems[product.id] == undefined) {
//             cartItems = {
//                 ...cartItems,
//                 [product.id]: product
//             }
//         }
//         cartItems[product.id].inCart += 1
//     } else {
//         product.inCart = 1;
//         cartItems = {
//             [product.id]: product
//         }
//     }
//     localStorage.setItem('productInCart', JSON.stringify(cartItems));
// }

// function totalCost(product) {
//     let cartCost = localStorage.getItem('totalCost');
//     if (cartCost != null) {
//         cartCost = parseInt(cartCost); // chuyển kiểu string sang kiểu number
//         localStorage.setItem('totalCost', cartCost + product.price);
//     } else {
//         localStorage.setItem('totalCost', product.price);
//     }
// }


// function displayCart() {
//     let cartItems = localStorage.getItem('productInCart');
//     cartItems = JSON.parse(cartItems);
//     // let productContainer = document.querySelector('.products');
//     let cartCost = localStorage.getItem('totalCost');

//     if (cartItems && cartContainer) {
//         cartContainer.innerHTML = '';
//         Object.values(cartItems).map(item => {
//             cartContainer.innerHTML += `
//                 <div class="cart-list">
//                     <div class="cart-item">
//                         <img src="${item.imagine}" alt="">
//                         <div class="cart-item-info">
//                             <h3 class="card-item-name">
//                                 ${item.nameproduct}
//                             </h3>
//                             <span class="cart-item-price">
//                                 $${item.price}
//                             </span>
//                         </div
//                         <div class="cart-item-number">
//                             <button class="button-minus"><i class="fas fa-chevron-up"></i></button>
//                             <span class="countOfProduct">${item.inCart}</span>
//                             <button class="button-plus"><i class="fas fa-chevron-down"></i></button>
//                         </div
//                         <button onclick="removeItem(${item.id})" type="button" class="cart-item-del-btn">
//                             <i class="fas fa-times"></i>
//                         </button>
//                     </div>
//                 </div>
//             `;
//         });
//             cartContainer.innerHTML += `
//                 <div class="cart-total">
//                     <h3>Total: </h3>
//                     <span id="cart-total-value">$${cartCost}</span>
//                 </div>  
//             `;
//     }

// }

// // * ============== DELETE CART ============== * //
// // const remove_cart = document.getElementsByClassName('products');


// // console.log(remove_cart.length)
// // for (let i = 0; i < remove_cart.length; i++) {
// //     remove_cart[i].addEventListener("click", removeCart);
// //     console.log(remove_cart[i])
// // }

// // // const product_in_cart = localStorage.getItem('productInCart');

// // function removeCart(event) {
// //     var remove_item = document.getElementsByClassName('btn-remove');
// //     remove_item = event.target
// //     remove_item.grandparent = remove_item.parentElement.parentElement;
// //     remove_item.grandparent.remove();
// //     // var index;
// //     // for (let i = 0; i < product_in_cart.length; i++) {
// //     //     if (product_in_cart[i].id === id) {
// //     //         index = i;
// //     //         break;
// //     //     }
// //     // }
// //     // if (index === undefined) return;
// //     // product_in_cart.splice(index, 1);

// //     const bills = JSON.parse(localStorage.getItem('productInCart'));
// //     Object.keys(bills).forEach(function(key) {
// //         console.log(bills[key].id)
// //     })


// //     localStorage.setItem('productInCart', JSON.stringify(bills));
// // }

// displayCart();
// onLoadCartNumber();
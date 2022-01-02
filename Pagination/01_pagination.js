

// let product = localStorage.getItem('listproductss')

// let listproducts = JSON.parse(product);

// let perPage = 8;
// let currentPage = 1;
// let start = 0;
// let end = perPage;

// const totalPage = Math.ceil(listproducts.length / perPage);

// const btnNext = document.querySelector('.btn-next');
// const btnPrev = document.querySelector('.btn-previous');

// function getCurrentPage(currentPage) {
//     start = (currentPage - 1) * perPage;
//     end = currentPage * perPage;
// }

// function renderProduct() {
//     html = '';
//     const content = listproducts.map((item, index) => {
//         if (index >= start && index < end) {
//             html += '<div class="products-bike" data-item="' + item.types + '">';
//             html +=     '<img src="' + item.imagine + '" alt="" class="img-bike">';
//             html +=     '<div class="detail_bike">';
//             html +=         '<h4 class="name_bike">' + item.nameproduct +'</h4>';
//             html +=         '<p class="price_bike">$' + item.price + '</p>';
//             html +=         '<p>' + item.detail + '</p>';
//             html +=         '<a href="#this-is-menu" onclick="document.getElementById(' + '\'modal-block_menu\'' + ').style.display=' + '\'block\'' + '">MORE DETAIL <span><i class="fas fa-long-arrow-alt-right"></i></span></a>';
//             html +=     '</div>'
//             html += '</div>'
//             return html;
//         }
//     });

//     document.getElementById('product-recent_bike_group').innerHTML = html;
// }

// renderProduct();

// function renderListPage() {
//     let html = '';
//     html += `<button class="active">${1}</button>`;
//     for (let i = 2; i <= totalPage; i++) {
//         html += `<button>${i}</button>`;
//     }
//     document.getElementById('number-page').innerHTML = html;
// }
// renderListPage();

// function changePage() {
//     const currentPages = document.querySelectorAll('#number-page button');
//     for (let i = 0; i < currentPages.length; i++) {
//         currentPages[i].addEventListener('click', () => {
//             const value = i + 1;
//             currentPage = value;
//             getCurrentPage(currentPage);
//             renderProduct();
//         });
//     }
// }
// changePage();

// btnNext.addEventListener('click', () =>{
//     currentPage++;
//     if (currentPage > totalPage) {
//         currentPage = totalPage;
//     }

//     getCurrentPage(currentPage)
//     renderProduct();
// });

// btnPrev.addEventListener('click', () =>{
//     currentPage--;
//     if (currentPage <= 1) {
//         currentPage = 1;
//     } 
//     getCurrentPage(currentPage)
//     renderProduct();
// });


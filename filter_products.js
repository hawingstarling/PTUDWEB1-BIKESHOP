const name_bike = document.querySelectorAll('.name_bike');

const search_item = document.getElementById('search');

const product_bike = document.querySelectorAll('.products-bike');

const filter_button = document.querySelectorAll('#filter_button .btn');

const price_bike = document.querySelectorAll('.price_bike');



/* --------------------------- search -------------------------------- */
search_item.addEventListener('keyup', searchItem);

function searchItem() {
    let valueItem = search_item.value.toLowerCase();
    Array.from(product_bike).forEach(function(ele) {
        let nameItem = ele.querySelector('.detail_bike').firstElementChild.textContent;
        if (nameItem.toLowerCase().indexOf(valueItem) !== -1) {
            ele.style.display = 'block';
        } else {
            ele.style.display = 'none';
        }
    });

    checkEmpty(product_bike);
}

function checkEmpty(element) {
    let count = 0;
    for (let i = 0; i < element.length; i++) {
        if (element[i].style.display === 'block') {
            count++;
        }
    }
    if (count === 0) {
        document.querySelector('#showtext').textContent = 'can\'t find you want bike';
    } else {
        document.querySelector('#showtext').textContent = '';
    }
}

/* --------------------------- filter -------------------------------- */

Array.from(filter_button).forEach(function (element) {
    element.addEventListener('click', function (event) {
        for (let i = 0; i < filter_button.length; i++) {
            filter_button[i].classList.remove('active');
        }
        this.classList.add('active');


        let name_filter = element.dataset.filter;

        Array.from(product_bike).forEach(function (ele) {
            if (ele.dataset.item === name_filter || name_filter === 'all') {
                ele.style.display = 'block';
            } else {
                ele.style.display = 'none';
            }
        });
    });
});
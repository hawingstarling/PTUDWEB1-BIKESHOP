

function taoId() {
    var id = '';

    id = Math.random().toString().substr(2, 10) + '_' + String(new Date().getTime());
    return id;
}


function save() {
    let imagine = document.getElementById('imagine').value;
    let nameproduct = document.getElementById('nameproduct').value;

    let nodePrice = document.getElementById('price');
    let price = parseFloat(nodePrice.value);

    let nodePercent = document.getElementById('percent');
    let percent = parseFloat(nodePercent.value);

    // * Gọi danh sách sản phẩm từ dưới localStorage lên
    let listproducts = localStorage.getItem('listproducts') ? JSON.parse(localStorage.getItem('listproducts')) : [];

    if (imagine && nameproduct && price && percent) {
        listproducts.push({
            imagine: imagine,
            nameproduct : nameproduct,
            price : price,
            percent : percent,
            inCart: 0,
            id: taoId(),
        });
    }

    // var pricePercent = document.getElementById('total');
    // pricePercent.value = calculation();

    localStorage.setItem('listproducts', JSON.stringify(listproducts));
    this.renderListProducts();  
}

function renderListProducts() {
    let listproducts = localStorage.getItem('listproducts') ? JSON.parse(localStorage.getItem('listproducts')) : [];

    if (listproducts.length == 0) {
        document.getElementById('show-product').style.display = 'none';
        return false;
    }
    document.getElementById('show-product').style.display = 'block';

    let tableContent = `<tr>
        <td>No</td>
        <td>Imagine</td>
        <td>Name Products</td>
        <td>Price</td>
        <td>Percent</td>
    </tr>`;
    
    listproducts.forEach((listproduct, index) => {
        index++;

        tableContent += `<tr>
            <td>${index}</td>
            <td>${listproduct.imagine}</td>
            <td>${listproduct.nameproduct}</td>
            <td>${listproduct.price}</td>
            <td>${listproduct.percent}</td>
            <td>
                <a href='#'>Edit</a> | <a href='#' onclick="deleteProduct(${index - 1})">Delete</a>
            </td>
        </tr>`;
    });
    document.getElementById('grid-listproduct').innerHTML = tableContent;
}

function deleteProduct(index) {
    var listproducts = JSON.parse(localStorage.getItem('listproducts'));
    var option = confirm("Bạn chắc chắn có muốn xóa sản phẩm này không?")
    if(!option) {
        return
    }
    listproducts.splice(index, 1);
    localStorage.setItem('listproducts', JSON.stringify(listproducts));
    renderListProducts();
}

function calculation() {
    let price = document.getElementById('price').value;
    let percent = document.getElementById('percent').value;

    let pricePercent = this.price * (1 - this.percent);
    return pricePercent;
}

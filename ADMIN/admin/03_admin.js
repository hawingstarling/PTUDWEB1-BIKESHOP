function inputProduct() {
    var html = '';
    html += '<div class="title-admin">';
    html += 'Input products detail information';
    html += '</div>';
    html += '<form action="" id="form-products">';
    html += '<ul>';
    html += '<li>';
    html += '<div class="imagine">Imagine</div>';
    html += '<input type="text" id="imagine">';
    html += '</li>';
    html += '<li>';
    html += '<div class="name-product">Name Product</div>';
    html += '<input type="text" id="nameproduct">';
    html += '</li>';
    html += '<li>';
    html += '<div class="price">Price</div>';
    html += '<input type="text" id="price">';
    html += '</li>';
    html += '<li>';
    html += '<div class="percent">Percent</div>';
    html += '<input type="text" id="percent">';
    html += '</li>';
    html += '<li>';
    html += '<div class="total-price">Total Price</div>';
    html += '<input type="text" id="total-price" style="background-color: rgb(241, 232, 232); color: orange; font-weight: 600;" disabled>';
    html += '</li>';
    html += '<div id="menu">';
    html += '<div id="btn_register" onclick="save()">Add products</div>';
    html += '</div>';
    html += '</ul>';
    html += '</form>';
    html += '</div>';
    document.getElementById('content-admin').innerHTML = html;
}

function listProduct() {
    let listproducts = localStorage.getItem('listproducts') ? JSON.parse(localStorage.getItem('listproducts')) : [];

    if (listproducts.length == 0) {
        document.getElementById('content-admin').style.display = 'none';
        return false;
    }
    document.getElementById('content-admin').style.display = 'block';

    let html = `<table id="table-admin" border="1" cellspacing='0' cellpadding="5">
                    <caption style="background-color: #4970a3;color: white;height: 30px;padding-top: 8px;">Management Products</caption>
                    <thead id="grid-listproduct">
                    </thead>
                    <tbody id="bodytable">
                    </tbody>
                </table>`
    document.getElementById('content-admin').innerHTML = html;
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
            <td><img src="${listproduct.imagine}" alt="" style="width: 200px; height:100px"></td>
            <td>${listproduct.nameproduct}</td>
            <td>${listproduct.price}</td>
            <td>${listproduct.percent}</td>
            <td>
                <a href='#'>Edit</a> | <a href='#'>Delete</a>
            </td>
        </tr>`;
    });
    document.getElementById('grid-listproduct').innerHTML = tableContent;

}

// onclick="deleteProduct(${i})"
// onclick="editProduct(${i})"

// let dataList = [];
// var currentIndex = -1
// function editProduct() {
//     currentIndex = index

//     product = dataList[index]
//     document.getElementById('product_name').value = product.product_name
//     document.getElementById('manufacturer_name').value = product.manufacturer_name
//     //update select > category name
//     changeManufacturer()

//     document.getElementById('category_name').value = product.category_name
//     document.getElementById('price').value = product.price
//     document.getElementById('quantity').value = product.quantity
//     document.getElementById('total_price').value = product.total_price
// }

// function deleteProduct() {
//     var option = confirm("Ban co chac chan muon xoa san pham nay khong?")
//             if(!option) {
//                 return
//             }

//             dataList.splice(index, 1)

//             listProduct();
// }

function calculation() {
    let price = document.getElementById('price').value;
    let percent = document.getElementById('percent').value;

    let pricePercent = this.price * (1 - this.percent);
    return pricePercent;
}

function listUser() {
    let listusers = localStorage.getItem('listusers') ? JSON.parse(localStorage.getItem('listusers')) : [];

    if (listusers.length == 0) {
        document.getElementById('content-admin').style.display = 'none';
        return false;
    }
    document.getElementById('content-admin').style.display = 'block';

    let html = `<table id="table-admin" border="1" cellspacing='0' cellpadding="5">
                    <caption style="background-color: #4970a3;color: white;height: 30px;padding-top: 8px;">Management Products</caption>
                    <thead id="grid-listproduct">
                    </thead>
                    <tbody id="bodytable">
                    </tbody>
                </table>`
    document.getElementById('content-admin').innerHTML = html;
    let tableContent = `<tr>
        <td>No</td>
        <td>Account</td>
        <td>Password</td>
    </tr>`;

    listusers.forEach((listusers, index) => {
        index++;
        tableContent += `<tr>
            <td>${index}</td>
            <td>${listusers.account}</td>
            <td>${listusers.password}</td>
            <td>
                <a href='#'>Edit</a> | <a href='#'>Delete</a>
            </td>
        </tr>`;
    });
    document.getElementById('grid-listproduct').innerHTML = tableContent;
}
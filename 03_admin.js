function inputProduct() {
    var html = '';
    html += '<div class="title-admin">';
    html +=     'Input products detail information';
    html += '</div>';
    html += '<form action="" id="form-products">';
    html +=     '<ul>';
    html +=         '<li>';
    html +=             '<div class="imagine">Imagine</div>';
    html +=             '<input type="text" id="imagine">';
    html +=         '</li>';
    html +=         '<li>';
    html +=             '<div class="name-product">Name Product</div>';
    html +=             '<input type="text" id="nameproduct">';
    html +=         '</li>';
    html +=         '<li>';
    html +=             '<div class="types-product">Type Product</div>';
    html +=             '<select style="width: 100%; height: 35px" id="typesproduct">';
    html +=                 '<option>--Select--</option>';
    html +=                 '<option>recent</option>';
    html +=                 '<option>selling Bike</option>';
    html +=                 '<option>historic</option>';
    html +=                 '<option>beautiful</option>';
    html +=             '</select>';
    html +=         '</li>';
    html +=         '<li>';
    html +=             '<div class="price">Price</div>';
    html +=             '<input type="text" id="price">';
    html +=         '</li>';
    html +=         '<div id="menu">';
    html +=             '<div id="btn_register" onclick="save()">Add products</div>';
    html +=         '</div>';
    html +=     '</ul>';
    html += '</form>';
    html += '</div>';
    html += '<br>';
    html += '<br>';
    document.getElementById('content-admin').innerHTML = html;
    listProduct();
}

function listProduct() {
    let listproducts = localStorage.getItem('listproducts') ? JSON.parse(localStorage.getItem('listproducts')) : [];

    if (listproducts.length == 0) {
        document.getElementById('content-list-admin').style.display = 'none';
        return false;
    }
    document.getElementById('content-list-admin').style.display = 'block';

    let html = `<table id="table-admin" border="1" cellspacing='0' cellpadding="5" style="width: 100%; text-align: center;">
                    <caption style="background-color: #4970a3;color: white;height: 30px;padding-top: 8px; font-weight: 700;">List Products</caption>
                    <thead id="grid-listproduct">
                    </thead>
                    <tbody id="bodytable">
                    </tbody>
                </table>`
    document.getElementById('content-list-admin').innerHTML = html;
    let tableContent = `<tr>
        <td>No</td>
        <td>Imagine</td>
        <td>Name Products</td>
        <td>Types</td>
        <td>Price</td>
        <td>Percent</td>
    </tr>`;

    listproducts.forEach((listproduct, index) => {
        index++;
        tableContent += `<tr>
            <td>${index}</td>
            <td><img src="${listproduct.imagine}" alt="" style="width: 200px; height:100px"></td>
            <td>${listproduct.nameproduct}</td>
            <td>${listproduct.types}</td>
            <td>${listproduct.price} $</td>
            <td>${listproduct.percent} %</td>
            <td>
                <a href='#' style="border-radius: 3px;border: 1px solid rgb(235, 174, 84);background-color: rgb(235, 174, 84);color: white;padding: 5px;cursor: pointer; padding: 5px 25px; text-decoration:none;" >Edit</a>
                <a href='#' style="border-radius: 3px;border: 1px solid rgb(224, 85, 85);background-color:  rgb(224, 85, 85);color: white;padding: 5px;cursor: pointer; padding: 5px 15px; text-decoration:none;" onclick="deleteProduct(${index - 1})">Delete</a>
            </td>
        </tr>`;
    });
    document.getElementById('grid-listproduct').innerHTML = tableContent;
}

// onclick="editProduct(${index - 1})"

// var position=-1;
// function editProduct(index) {
//     position = index;
//     let listproducts = localStorage.getItem('listproducts') ? JSON.parse(localStorage.getItem('listproducts')) : [];
//     var product = listproducts[index];
//     document.getElementById('imagine').value = product.imagine;
//     document.getElementById('nameproduct').value = product.nameproduct;
//     document.getElementById('typesproduct').value = product.types;
//     document.getElementById('price').value = product.price;
//     document.getElementById('percent').value = product.percent;
//     document.getElementById('total-price').value = product.price * product.percent;
//     document.getElementById('btn_register').innerHTML='Update';
// }

function deleteProduct(index) {
    var listproducts = JSON.parse(localStorage.getItem('listproducts'));
    var option = confirm("Bạn có chắc muốn xóa sản phẩm này không?")
    if(!option) {
        return
    }
    listproducts.splice(index, 1)
    localStorage.setItem('listproducts',JSON.stringify(listproducts));
    listProduct();
}

function calculation() {
    let price = document.getElementById('price').value;
    let percent = document.getElementById('percent').value;

    let pricePercent = this.price * (1 - this.percent);
    return pricePercent;
}

// ======================================== LIST USERS ======================================== //

function listUser() {
    let listusers = localStorage.getItem('listusers') ? JSON.parse(localStorage.getItem('listusers')) : [];

    if (listusers.length == 0) {
        document.getElementById('content-admin').style.display = 'none';
        return false;
    }
    
    document.getElementById('content-admin').style.display = 'block';

    let html = `<table id="table-admin" border="1" cellspacing='0' cellpadding="5">
                    <caption style="background-color: #4970a3;color: white;height: 30px;padding-top: 8px;">List Users</caption>
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
                <button class="listusers-delete"  href='#' onclick="deleteAccount(${index - 1})">Delete</button>
            </td>
        </tr>`;
    });
    document.getElementById('grid-listproduct').innerHTML = tableContent;
    document.getElementById('content-list-admin').style.display = 'none';
}


function deleteAccount(index) {
    var listusers = JSON.parse(localStorage.getItem('listusers'));
    var option = confirm("Bạn có chắc chắn muốn xóa tài khoản này?")
    if(!option) {
        return
    }
    listusers.splice(index, 1);
    localStorage.setItem('listusers',JSON.stringify(listusers));
    listUser();
}

// ======================================== LIST BILL ======================================== //

function listBill() {
    let listbill = localStorage.getItem('productInCart') ? JSON.parse(localStorage.getItem('productInCart')) : [];
    let name = localStorage.getItem("account");
    // let name = JSON.parse(localStorage.getItem('account'));

    if (listbill.length == 0) {
        document.getElementById('content-admin').style.display = 'none';
        return false;
    }
    document.getElementById('content-admin').style.display = 'block';

    let html = `<table id="table-admin" border="1" cellspacing='0' cellpadding="5">
                    <caption style="background-color: #4970a3;color: white;height: 30px;padding-top: 8px;">List Bill</caption>
                    <thead id="grid-listproduct">
                    </thead>
                    <tbody id="bodytable">
                    </tbody>
                </table>`
    document.getElementById('content-admin').innerHTML = html;
    let tableContent = `<tr>
        <td>No</td>
        <td>Customer</td>
        <td>Imagine</td>
        <td>Name Product</td>
        <td>Price</td>
        <td>Cart</td>
    </tr>`;


    Object.values(listbill).map((item, index) => {
        index++;
        tableContent += `<tr>
            <td>${index}</td>
            <td>${name}</td>
            <td><img src="${item.imagine}" alt="" style="width: 200px; height:100px"></td>
            <td>${item.nameproduct}</td>
            <td>${item.price}</td>
            <td>${item.inCart}</td>
        </tr>`;
    });

    document.getElementById('grid-listproduct').innerHTML = tableContent;
    document.getElementById('content-list-admin').style.display = 'none';
}

// var test = JSON.parse(localStorage.getItem('account'));
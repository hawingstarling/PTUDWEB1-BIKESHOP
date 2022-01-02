
// function save() {
//     let imagine = document.getElementsByClassName('img-bike').value;
//     let nameproduct = document.getElementsByClassName('name_bike').value;
//     let nodePrice = document.getElementsByClassName('price_bike');
//     let price = parseFloat(nodePrice.value);

//     // * Gọi danh sách sản phẩm từ dưới localStorage lên
//     let listproducts = localStorage.getItem('listproducts') ? JSON.parse(localStorage.getItem('listproducts')) : [];

//     if (imagine && nameproduct && price) {
//         listproducts.push({
//             imagine: imagine,
//             nameproduct: nameproduct,
//             types: types,
//             detail: detail,
//             price: price,
//             produce: produce,
//             year: year,
//         });
//     }

//     localStorage.setItem('listproducts', JSON.stringify(listproducts));
//     this.listProduct(); 
// }

// ================================ DANH SÁCH SẢN PHẨM ====================================== //

// Random id
function randomId() {
    return Math.floor(Math.random() * 100000);
}

let listproductss = [

    {
        id: randomId(),
        tag: "condorino",
        imagine: "https://www.infabbrica.com/25531-thickbox_default/condorino-classic-vintage-bicycle-for-man.jpg", 
        nameproduct: "Condorino", 
        types: "recent", 
        detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
        price: 250, 
        produce: "China", year: "2021", road: "25km/h",
        inCart: 0
    },

    {
        id: randomId(),
        tag: "hunting",
        imagine: "https://mariposabicycles.ca/wp-content/uploads/2019/12/PENT2534.jpg", 
        nameproduct: "Hunting", 
        types: "recent", 
        detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
        price: 250, 
        produce: "Vietnamese", 
        year: "2020", 
        road: "20km/h",
        inCart:0
    },

    {
        id: randomId(),
        tag: "cinelli",
        imagine: "https://www.pashley.co.uk/images/products/thumbs/main-guv-nor460x460.jpg", 
        nameproduct: "Cinelli", 
        types: "historic", 
        detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
        price: 250, 
        produce: "China",
        year: "2021", 
        road: "15km/h",
        inCart: 0
    },

    {
        id: randomId(),
        tag: "duranta",
        imagine: "https://www.bicyclebd.com/images/products/Duranta%20General%20Bicycle%20Classic.jpg", 
        nameproduct: "Duranta", 
        types: "selling", 
        detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
        price: 250, 
        produce: "China", 
        year: "2021", 
        road: "35km/h",
        inCart: 0
    },

    {
        id: randomId(),
        tag: "cervelo",
        imagine: "https://www.sefiles.net/images/library/large/cervelo-r5-disc-force-etap-axs-381051-12.jpeg", 
        nameproduct: "Cervelo", 
        types: "beautiful", 
        detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
        price: 250, 
        produce: "China", 
        year: "2021", 
        road: "21km/h",
        inCart: 0
    },

    {
        id: randomId(),
        tag: "sole",
        imagine: "http://static.squarespace.com/static/51032baee4b072fcbdc71a7d/51032d54e4b01968a93d7a12/51032d7ee4b01968a93db9c1/1321443662000/NewImage34.png?format=original", 
        nameproduct: "Sole", 
        types: "recent",
        detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
        price: 250, 
        produce: "China", 
        year: "2021", 
        road: "21km/h",
        inCart: 0
    },

    {
        id: randomId(),
        tag: "hanks",
        imagine: "https://cdn.shopify.com/s/files/1/1245/1481/products/Classic_Plus_Side_Profile_web_large.jpg?v=1597774901", 
        nameproduct: "Hanks", 
        types: "selling", 
        detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
        price: 250, 
        produce: "China", 
        year: "2021", 
        road: "21km/h",
        inCart: 0
    },

    {
        id: randomId(),
        tag: "gerfore",
        imagine: "https://cdn.shopify.com/s/files/1/0251/7286/9219/products/700c_MensKentRetro_A_800x800.jpg?v=1623764491", 
        nameproduct: "Gerfore", 
        types: "beaytiful", 
        detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
        price: 250, 
        produce: "China", 
        year: "2021", 
        road: "21km/h",
        inCart: 0
    },

    {
        id: randomId(),
        tag: "tanker",
        imagine: "https://image.made-in-china.com/202f0j00WUHGmjYSrwok/Vintage-Bicycle-Fashion-Antique-Bikes-Vintage-Bike-Aluminum-Women-Road-Bike-City-Bicycle.jpg", 
        nameproduct: "Tanker", 
        types: "selling", 
        detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
        price: 250, 
        produce: "China", 
        year: "2021", 
        road: "21km/h",
        inCart: 0
    },

    {
        id: randomId(),
        tag: "lilia",
        imagine: "https://target.scene7.com/is/image/Target/GUEST_5e9490a2-076a-4774-84f7-c9b2ed1e8e0a?wid=250&hei=250&fmt=pjpeg", 
        nameproduct: "Lilia", 
        types: "historic", 
        detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
        price: 250, 
        produce: "China", 
        year: "2021", 
        road: "21km/h",
        inCart: 0
    },

    {
        id: randomId(),
        tag: "marvelous",
        imagine: "https://i1.wp.com/cycletraveloverload.com/wp-content/uploads/2020/04/Salsa_Vaya_GRX_600-1920x1080-uc-1-1.jpg?resize=640%2C360&ssl=1", 
        nameproduct: "Marvelous", 
        types: "beautiful", 
        detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
        price: 250, 
        produce: "China", 
        year: "2021", 
        road: "21km/h",
        inCart: 0
    },

    {
        id: randomId(),
        tag: "jamestorin",
        imagine: "https://steel-vintage.com/media/catalog/product/cache/17ac0aa85a620128c87b646757083030/m/e/mercier-gray-classic-steel-road-bicycle-1.jpg", 
        nameproduct: "Jamestorin", 
        types: "selling",
        detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
        price: 250, 
        produce: "China", 
        year: "2021", 
        road: "21km/h",
        inCart: 0
    },

    {
        id: randomId(),
        tag: "ciel",
        imagine: "https://i.pinimg.com/originals/72/03/36/7203368f8041ba41bf408f265c2e635d.jpg", 
        nameproduct: "Ciel", 
        types: "historic", 
        detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
        price: 250, 
        produce: "China", 
        year: "2021", 
        road: "21km/h",
        inCart: 0
    },

]

localStorage.setItem('listproductss', JSON.stringify(listproductss));

function printProduct() {
    let products = '';
    listproductss.forEach((listproducts) => {
            products += `
            <div class="products-bike" data-item="${listproducts.types}">
                <img src="${listproducts.imagine}" alt="" class="img-bike">
                <div class="detail_bike">
                    <h4 class="name_bike">${listproducts.nameproduct}</h4>
                    <p class="price_bike">$${listproducts.price}</p>
                    <p>${listproducts.detail}</p>
                <a href="#this-is-menu" onclick="document.getElementById('modal-block_menu').style.display='block'">MORE DETAIL <span><i class="fas fa-long-arrow-alt-right"></i></span></a>
                </div>
                <a href="#" class="add-cart">Add to cart</a>
            </div>
        `
    });
    document.getElementById('product-recent_bike_group').innerHTML += products;
}

printProduct();

function moreDetail() {
    let more_detail = document.querySelectorAll('.detail_bike a');
    for (let i = 0; i < more_detail.length; i++) {
        more_detail[i].addEventListener('click', function() {
            console.log(i)
            detailProduct(i);
        });
    }
}

function detailProduct(index) {
    var detail = '';
        detail +=     '<div id="this-is-menu">';
        detail +=     '<div class="back-to-bike">';
        detail +=         '<div class="close" onclick="document.getElementById(' + '\'modal-block_menu\'' + ').style.display=' + '\'none\'' + '"&times;>';
        detail +=             '<i class="fas fa-chevron-left"></i><span>BACK TO BIKE</span>';
        detail +=         '</div>';
        detail +=     '</div>';
        detail +=     '<div class="menu-detail">';
        detail +=         '<div class="img-detail_bike">';
        detail +=             '<img src="' + listproductss[index].imagine + '" alt="">';
        detail +=         '</div>';
        detail +=         '<div class="content-detail_bike">';
        detail +=             '<div class="detail-bike">';
        detail +=                 '<h4 class="name-bike_detail">' + listproductss[index].nameproduct + '</h4>';
        detail +=                 '<p class="pay-dollar">$' + listproductss[index].price + '</p>';
        detail +=             '</div>';
        detail +=             '<div class="content-bike">';
        detail +=                 '<div class="ability">';
        detail +=                     '<i class="fas fa-road"><span> ' + listproductss[index].road + '</span></i>';
        detail +=                     '<i class="fas fa-calendar-week"><span> ' + listproductss[index].year + '</span></i>';
        detail +=                     '<i class="fas fa-globe"><span> ' + listproductss[index].produce + '</span></i>';
        detail +=                 '</div>';
        detail +=                 '<br>';
        detail +=                 '<p class="content-main_bike">' + listproductss[index].detail + '</p>';
        detail +=             '</div>';
        detail +=         '</div>';
        detail +=     '</div>';
        detail += '</div>';
        document.getElementById('modal-block_menu').innerHTML = detail;
}

moreDetail();


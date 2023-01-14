// my plan to take the user's data as number then calculated in Multificaftion and Devide after that show the result on Multificaion and Devide section respectively.

const inp1 = document.querySelector("#input1");
const inp2 = document.querySelector("#input2");
const errors = document.querySelector(".error_massage");
const timer = document.querySelector(".timer");

const err = (input1, input2) => {
    if ((input1 && input2) == "") {
        return 'Input Field Must Be Filled Up';
    }
    else {
        return "All Right";
    }
}


const multification = () => {
    let valf = parseFloat(inp1.value);
    let vall = parseFloat(inp2.value);
    let mul = valf * vall;
    console.log(mul);
    document.querySelector("#output").innerHTML = `Multification value is ${mul}`;
    errors.innerHTML = err(inp1.value, inp2.value);

}

const devided = () => {
    let valf = parseFloat(inp1.value);
    let vall = parseFloat(inp2.value);
    let mul = valf / vall;
    console.log(mul);
    document.querySelector("#output").innerHTML = `Devided value is : ${mul}`;
}


// bills calculation card
var total_bill = () => {
    var bill_number = document.querySelector(".inp1").value;
    var tax_number = document.querySelector(".inp2").value;
    var discount_number = document.querySelector(".inp3").value;

    let bill = parseFloat(bill_number);
    let tax = parseFloat(tax_number);
    let discount = parseFloat(discount_number);


    // we get the int value of percentage
    let percentageRate = (bill, percentage) => {
        var cal = ((percentage * bill) / 100);
        return cal;
    }

    // main calculation
    let taxMoney = percentageRate(bill, tax);
    let disMoney = percentageRate(bill, discount);

    let mainBill = (bill - disMoney);
    let totalBill = (mainBill + taxMoney);

    // The total bill will be shown by below class
    document.querySelector(".show").innerHTML = `The Total bill is ${Math.round(totalBill)} taka, where Discount is ${disMoney} taka and ${taxMoney} taka tax is included`;

    console.log(totalBill);
}

// rafaell draw programe

var inputfield = document.querySelector(".txt_input_field");
var names = document.querySelector(".names");
var selectedName = document.querySelector(".selected_name");

const txtarr = ["Shorif", "Saif", "Kobir", "Russell", "Kashem", "Azhar", "Abir", "Akhlas", "Alal", "Alos", "Jon"];
names.innerHTML = txtarr;

// random name finding
var randomName = (arr) => {
    var len = arr.length;
    var randomNum = parseInt(Math.random() * len);
    console.log(`Congress Mr: ${arr[randomNum]} Index Number Is ${randomNum}`);
    return (`Congress Mr: ${arr[randomNum]} Index Number Is ${randomNum}`);
}


function selectbtn() {
    selectedName.style.visibility = 'visible';
    selectedName.style.transitionDelay = '3s';
    // console.dir(selectedName.style);

    selectedName.innerHTML = randomName(txtarr);
}




// timer function

setInterval(time, 1000);

function time() {
    const d = new Date();
    timer.innerHTML = d.toLocaleTimeString();
}




// product card 
var more = document.querySelectorAll('.more');
console.log(more);

// var morePage = () => {
//     console.log("btn clicked");
// }

// searching algorithm

var srhArray = ['Shorif Ahmed', 'Yousuf Ahmed', 'Jamal Khan', 'Jalal Khan', 'Jon Data'];

var searchInput = document.querySelector(".search");
var matchValue = document.querySelector(".matchValue");


const searchBtn = (arr) => {
    const srhValue = searchInput.value;
    const valLow = srhValue.toLowerCase();
    for (var i = 0; i < arr.length; i++) {
        var str = arr[i].toString();
        var lower = str.toLowerCase();
        var mh = lower.search(valLow);
        // console.log(show + ' ' + mh);
    }

    // console.log(srhValue);
    // var show = arr[mh];
    var show = mh;

    matchValue.innerHTML = show;
    console.log(show);


}

// var arr = ['Anis','Boris','Choyone','Dalim','Emon','Faruk','Gullam','Helal','Ikbal'];
// var f = (arr) => {
//     for(var i = 0; i< arr.length; i++){
//         var str = arr[i].toString();
//         var lower = str.toLowerCase();
//         var mh = lower.search(/c/);
//         console.log(arr[mh] + ' '+ mh);

//     }
// }


// product cards


//main card
var cardContainer = document.querySelector(".cardContainer");


var productArr = [
    {
        title: "Shirt",
        details: 'it is a good products and everyone wants to buy it.',
        price: 300,
        stock: 'In stock',
    },
    {
        title: "Pants",
        details: 'it is a good products and everyone wants to buy it.',
        price: 400,
        stock: 'In stock',
    },
    {
        title: "Shoe",
        details: 'it is a good products and everyone wants to buy it.',
        price: 500,
        stock: 'Stock Out',
    },
    {
        title: "Shari",
        details: 'it is a good products and everyone wants to buy it.',
        price: 700,
        stock: 'In Stock',
    },
    {
        title: "Farnitrure",
        details: 'it is a good products and everyone wants to buy it.',
        price: 800,
        stock: 'In Stock',
    }

];




//before works

var loopFun = (arr) => {
    var objSort = arr.sort((a, b) => {
        var x = a.title;
        var y = b.title;
        if (x < y) {
            return 1;
        }
        if (x > y) {
            return -1;
        }
    });

    var len = objSort.length;
    // loop creating by for loop
    // for (var i = 0; i < len; i++) {
    //     var fatch = cardContainer.innerHTML;
    //     cardContainer.innerHTML = `  
    //         <div class="cardspd">
    //             <div class="pdimg">
    //                 <img src="" alt="">
    //             </div>
    //             <div class="pdtitle">
    //                 <h3 class="title"> ${arr[i].title}</h3>
    //             </div>
    //             <div class="dit">
    //                 <p class="details">${arr[i].details}</p>

    //             </div>
    //             <div class="pdPrice">
    //                 <p class="price">${`Price Is: ${arr[i].price}`}</p>
    //                 <p class="stock">${arr[i].stock}</p>
    //             </div>
    //             <button class="more" onclick="morePage()">More Details</button>
    //         </div>
    //     ` + fatch;
    // }

    objSort.forEach((v) => {

        var fatch = cardContainer.innerHTML;
        cardContainer.innerHTML = `  
                <div class="cardspd">
                    <div class="pdimg">
                        <img src="" alt="">
                    </div>
                    <div class="pdtitle">
                        <h3 class="title"> ${v.title}</h3>
                    </div>
                    <div class="dit">
                        <p class="details">${v.details}</p>
    
                    </div>
                    <div class="pdPrice">
                        <p class="price">${`Price Is: ${v.price}`}</p>
                        <p class="stock">${v.stock}</p>
                    </div>
                    <button class="more" onclick="morePage()">More Details</button>
                </div>
            
        ` + fatch;
    });
}
loopFun(productArr);
console.log(productArr);

// console.log(morePage(productArr));



// var loopCard = (productArr) => {

//     productArr.map((v) => {
//         var cardspd = document.createElement("div");
//         cardspd.classList.add(".cardspd");
//         cardspd.innerHTML = `
//                 <div class="pdtitle">
//                     <h3 class="title">${v.title}</h3>
//                 </div>
//                 <div class="dit">
//                     <p class="details">${v.details}</p>

//                 </div>
//                 <div class="pdPrice">
//                     <p class="price">${v.price}</p>
//                     <p class="stock">${v.stock}</p>

//                 </div>
//                 <button class="more" onclick="morePage()">More Details</button>
//                 `;
//         cardContainer.appendChild(cardspd);

//         // console.log(v);

//     });


// }
// loopCard(productArr);


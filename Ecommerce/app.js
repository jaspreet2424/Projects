/*Slider items javascript*/ 
const itemLink = document.querySelectorAll('.itemLink');
const slider = document.querySelector('.slideWrapper');

const products = [
    {
        id:1,
        title:"RedTape",
        price : 850,
        colors:[
            {
                code:"#2c7447",
                img:"./img/redtape.jpg",
            },
            {
                code:"#cf4928",
                img:"./img/redtape1.jpg",
            },
        ],
    },
    {
        id:2,
        title:"Tommy",
        price : 1139,
        colors:[
            {
                code:"#ffffff",
                img:"./img/tommy1.jpg",
            },
            {
                code:"#08007e",
                img:"./img/tommy2.jpg",
            },
        ],
    },
    {
        id:3,
        title:"H&M",
        price : 999,
        colors:[
            {
                code:"#08007e",
                img:"./img/h&m1.jpg",
            },
            {
                code:"#d40909",
                img:"./img/h&m2.jpg",
            },
        ],
    },
    {
        id:4,
        title:"Jordan",
        price : 759,
        colors:[
            {
                code:"#3a3939",
                img:"./img/jordan.jpeg",
            },
            {
                code:"#000000",
                img:"./img/jordan1.jpeg",
            },
        ],
    },
    {
        id:5,
        title:"Puma",
        price : 950,
        colors:[
            {
                code:"#ffffff",
                img:"./img/puma1.jpg",
            },
            {
                code:"#05b4d3",
                img:"./img/puma3.jpg",
            },
        ],
    },
    {
        id:6,
        title:"Monte Carlo",
        price : 950,
        colors:[
            {
                code:"#f4fcae",
                img:"./img/montecarlo.jpg",
            },
            {
                code:"#000000",
                img:"./img/montecarlo1.jpg",
            },
        ],
    },
]

let chosenProduct = products[0];

const currentProductImg = document.querySelector('.productBgImg');
const currentProductTitle = document.querySelector('.productTitle');
const currentProductPrice = document.querySelector('.productPrice');
const currentProductDesc = document.querySelector('.productDesc');
const currentProductColor = document.querySelectorAll('.color');
const currentProductSize = document.querySelectorAll('.size');


itemLink.forEach((item , index) =>{
    item.addEventListener('click' , ()=>{

        //change the current slide
        slider.style.transform = `translateX(${-100 * index}vw)`;

        //change the current product
        chosenProduct = products[index];
        //changing title text
        currentProductTitle.textContent = chosenProduct.title;
        //changing price
        currentProductPrice.textContent = "INR-" + chosenProduct.price;

        //selecting first image of each brand on 
        currentProductImg.src = chosenProduct.colors[0].img;

        //changing colors
        currentProductColor.forEach((color , index)=>{
            color.style.backgroundColor = chosenProduct.colors[index].code;
        });
    });
});

//changing the image on clicking the colors
currentProductColor.forEach((color ,index)=>{
    color.addEventListener('click' , ()=>{
        currentProductImg.src = chosenProduct.colors[index].img;
    });
});

//Selecting the size 
currentProductSize.forEach((size , index)=>{
    size.addEventListener('click' , ()=>{
        currentProductSize.forEach((s)=>{
            s.style.backgroundColor = "black";
            s.style.color = "white";
        });
        size.style.backgroundColor = "white";
        size.style.color = "black";
    });
});


/*Payment card javascript*/
const close = document.querySelector('.close');
const productBtn = document.querySelector('.productBtn');
const paymentDetails = document.querySelector('#paymentDetails');

close.addEventListener('click' , ()=>{
    paymentDetails.style.display = "none";
})
productBtn.addEventListener('click' , ()=>{
    paymentDetails.style.display = "block";
})


/*Navbar dropdown javascript */
const dropdown = document.querySelector('#dropdown');
const list = document.querySelector('.brandsLinks');
const closeNav = document.querySelector('.closeNav');
const sliderSec = document.querySelector('.slider-section');

dropdown.addEventListener('click' , ()=>{
    list.classList.toggle('dropDownList');
    closeNav.style.display = "block";
    sliderSec.style.margin = "135px 0 0 0 ";
});

closeNav.addEventListener('click' , ()=>{
    list.classList.toggle('dropDownList');
    closeNav.style.display = "none";
    sliderSec.style.margin = "0 0 0 0 ";
});
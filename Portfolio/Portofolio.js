/*Javascript for navbar*/

const barsIcon = document.getElementById('bar-icon');
const crossIcon = document.getElementById('xmark-icon');
const list = document.getElementById('nav-links-list');

barsIcon.addEventListener('click' , ()=>{
    list.classList.toggle('list-active');

    let child = barsIcon.firstElementChild;
    if(list.classList.contains('list-active')){
        child.classList.replace('fa-solid fa-bars' , 'fa-solid fa-xmark');
    }
    else{
        child.classList.replace('fa-solid fa-xmark' , 'fa solid fa-bars');
    }
});

/*Certificate slideshow */
const slides = document.querySelectorAll('.eachSlide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let counter = 0 ;

slides.forEach((slide , index)=>{
    slide.style.left = `${100 * index}%`;
})

const sliderImage = () =>{
    slides.forEach((slide) =>{
        slide.style.transform = `translateX(-${100 * counter}%)`;
    })
}

const goPrevious = () =>{
    next.style.opacity = "1";
    if(counter <= 0){
        counter = 0;
        sliderImage();
        prev.style.opacity = "0.3";
    }
    else{
        counter--;
        sliderImage();
    }
}
const goNext = () =>{
    prev.style.opacity = "1";
    if(counter >= slides.length-1){
        counter = slides.length-1;
        sliderImage();
        next.style.opacity = "0.3";
    }
    else{
        counter++;
        sliderImage();
    }
}


/*Important links cards */
const card = document.querySelectorAll('.cards');
const pre = document.querySelector('#prevC');
const nxt = document.querySelector('#nextC');
let count = 0 ;

card.forEach((slide , index)=>{
    slide.style.left = `${100 * index}%`;
})

const cardSliderFun = () =>{
    card.forEach((slide) =>{
        slide.style.transform = `translateX(-${100 * count}%)`;
    })
}

const prevCard = () =>{
    nxt.style.opacity = "1";
    if(count <= 0){
        count = 0;
        cardSliderFun();
        pre.style.opacity = "0.3";
    }
    else{
        count--;
        cardSliderFun();
    }
}
const nextCard = () =>{
    pre.style.opacity = "1";
    if(count >= card.length-1){
        count = card.length-1;
        cardSliderFun();
        nxt.style.opacity = "0.3";
    }
    else{
        count++;
        cardSliderFun();
    }
}

/* Show accordion*/
const skill = document.querySelectorAll('.skills');
const arrowBtn = document.querySelector('#arrowBtn');
const toggle = document.querySelector('#toggle');

skill.forEach((skill)=>{
    skill.addEventListener('click' , ()=>{
        skill.classList.toggle('activeDisplay');
    })
});


/*Image resize */
const imageC = document.querySelectorAll('.imageC');
const imgCont = document.querySelector('.resizeImageContainer');
const blockImg = document.querySelector('#blockIcon');
const newImg = document.querySelector('.newImg');

imageC.forEach((img) =>{
    img.addEventListener('click' , ()=>{
        let newSrc = img.getAttribute("src");
        newImg.setAttribute("src", newSrc);
        imgCont.style.display = "block"; 
    });
});

blockImg.addEventListener('click' , ()=>{
    imgCont.style.display = "none";
});
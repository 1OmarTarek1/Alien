//Click on  Toggel  settings gear
document.querySelector(".toggle-settings .fa-gear").onclick = function () {
    //Toggle Class Fa-Spin For Rotation on Self
    this.classList.toggle("fa-spin");
    //Toggle Class Open ON Main Settings box
    document.querySelector(".setting-box").classList.toggle("open"); 
};

//Click on  color  settings gear
document.querySelector(".setting-box .color-icon").onclick = function () {
    //Toggle Class Open ON Main Settings box
    document.querySelector(".option-box").classList.toggle("close"); 
};


//Click on  ul  id 
document.querySelector(".links .icon").onclick = function () {
    //Toggle Class Open ON Main Settings box
    document.querySelector(".header ul ").classList.toggle("close-ul"); 
};


//Switch colors
const colorsLi = document.querySelectorAll(".colors-list li");

//loop on all list items
colorsLi.forEach(li => {

    //click on every list items
    li.addEventListener("click", (e) => {
        
        //set color on root 
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color)
        
    });
    
});


//switch background color
const backgroundcolorsLi = document.querySelectorAll(".background-color-list li");

//loop on all list items
backgroundcolorsLi.forEach(li => {

    //click on every list items
    li.addEventListener("click", (e) => {
        
        //set color on root 
        document.documentElement.style.setProperty('--section-background', e.target.dataset.color)
        
    });
    
});


//switch heading color
const headingLi = document.querySelectorAll(".heading-color-list li");

//loop on all list items
headingLi.forEach(li => {

    //click on every list items
    li.addEventListener("click", (e) => {
        
        //set color on root 
        document.documentElement.style.setProperty('--secondary-color', e.target.dataset.color)
        
    });
    
});

//switch para color
const paraLi = document.querySelectorAll(".para-color-list li");

//loop on all list items
paraLi.forEach(li => {

    //click on every list items
    li.addEventListener("click", (e) => {
        
        //set color on root 
        document.documentElement.style.setProperty('--third-color', e.target.dataset.color)
        
    });
    
});


//select landing page element
let landing = document.querySelector(".landing");

//Get array os imgs
let imgsArray = ["landing.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];

setInterval(() => { 

//get random number 
let randomNumber = Math.floor(Math.random() * imgsArray.length);

//change background image url 
landing.style.backgroundImage = 'url("imgs/' + imgsArray[randomNumber] + '")';

}, 9000 );  

//cheak if theres  local colors
let  mainColors = localStorage.getItem("color_option");

if (mainColors !== null) {
    
    document.documentElement.style.setProperty('--main-color',localStorage.getItem("color_option"));
    
}

//loop on all list items
colorsLi.forEach(li => {
    
    //Click on every list items 
    li.addEventListener("click", (e) => {
        
        //set color on rot
        //document.documentElement.style.setProperty('--main-color', e.tareget.dataset.color);
        
        //set color on local storage
        //localStorage.setItem("color_option,e.tareget.dataset.color")

        //remove active class from all children
      //  e.tareget   .parentElement.querySelectorAll(.active).forEeach(element => {
            
          // element.classlist.remove("active"); 
            
     //   });
        
        //add active class in target
       // e,target.classList.add("active");
    });
});




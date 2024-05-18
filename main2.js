// console.log(document.getElementById("greeting").innerHTML)

// console.log(document.getElementById("greeting").innerHTML = "Start!!!")
// console.log(document.getElementsByClassName("product-item"))

// document.querySelector("p#weather").style.color = '#dedede';
// document.querySelector("p#weather").classList.toggle("redbg")
// document.querySelector("p#weather").style.margin = "100px"
// document.querySelector("p#weather").style.backgroundColor = "red"

// document.querySelector("p#weather").addEventListener("click",function(){alert("p element clicked")})



document.querySelector("#open-nav-menu").addEventListener("click",function(){
    document.querySelector("header nav .wrapper").classList.add("nav-open");
})

document.querySelector("#close-nav-menu").addEventListener("click",function(){
    document.querySelector("header nav .wrapper").classList.remove("nav-open");
})

// Greeting section

function celciusToFahr(temperature) {
    let fahr = (temperature * 9 / 5) + 32;
    return fahr;
}

let currentHour = new Date().getHours();
let greetingText;

if (currentHour < 12) {
    greetingText = "Good morning!";
} else if (currentHour < 19) {
    greetingText = "Good afternoon!";
} else if (currentHour < 24) {
    greetingText = "Good evening!";
} else {
    greetingText = "Welcome!";
}


const weatherCondition = "sunny";
const userLocation = "Mumbai";
let temperature = 35.8975675;
// let weatherText = `The weather is ${weatherCondition} in ${userLocation} and it's ${celciusToFahr(temperature).toFixed(1)} °C outside.`;

// console.log(weatherText);

document.querySelector("#greeting").innerHTML = greetingText;

let celsiusText = `The weather is ${weatherCondition} in ${userLocation} and it's ${temperature.toFixed(1)} °C outside.`;
let fahrText = `The weather is ${weatherCondition} in ${userLocation} and it's ${celciusToFahr(temperature).toFixed(1)} °F outside.`;


// let student = {name : "John", age : 35, country : "Italy"}
// if(student.name == "John") {
//     console.log("Bingo!!!")
// }

document.querySelector(".weather-group").addEventListener("click", function(e){

    if(e.target.id == "celsius") {
        document.querySelector("p#weather").innerHTML = celsiusText;
        // console.log("clicked the celsius button : " + e.target.id);
    } else if(e.target.id == "fahr") {
        document.querySelector("p#weather").innerHTML = fahrText;
        // console.log("clicked the fahr button : " + e.target.id);
    } else {
        console.log(e.target.id);
    }
    

});

setInterval(function(){
    let localTime = new Date();
    document.querySelector("span[data-time=hours]").textContent = localTime.getHours().toString().padStart(2,"0");
    document.querySelector("span[data-time=minutes]").textContent = localTime.getMinutes().toString().padStart(2,"0");
    document.querySelector("span[data-time=seconds]").textContent = localTime.getSeconds().toString().padStart(2,"0");
},1000);

// let animals = ["dog", "cat", "lion", "dino"];
let animal = {"name" : "dog", "color" : "white"};

// for (let a in animal) {
//     console.log(animal[a]);
// }

// let bankAccounts = ["EX_983746", "US_233478", "UK_098765", "EX_098777", "PT_002544"];
// function printEXAccounts() {
//     // write your solution here
//         for(let a in bankAccounts) {
//             if(bankAccounts[a].startsWith("EX")) {
//                 console.log(bankAccounts[a]);
//             }
//         } 
//     }    
//     printEXAccounts();

// let lessons = [
//     {
//       id: "273",
//       title: "Variables",
//       length: 12
//     },
//     {
//      id: "295",
//      title: "Conditionals",
//      length: 12
//     },
//     {
//      id: "299",
//      title: "Functions",
//      length: 12
//     }
//     ]; 
    
    // // use this variable to add the lesson titles
    // let lessonTitles = [];
    
    // // write your code below this line
    
    // lessons.forEach(function(value, index){
    //     console.log(index);
    //     console.log(value.title);
    //     lessonTitles.push(value.title);
    // });
    // console.log(lessonTitles);

    // Gallery Section
// src="./assets/gallery/image1.jpg" alt="Thumbnail Image 1" 

const galleryImages = [
    {
        "src": "./assets/gallery/image1.jpg",
        "alt": "Thumbnail Image 1"
    },
    {
        "src": "./assets/gallery/image2.jpg",
        "alt": "Thumbnail Image 2"
    },
    {
        "src": "./assets/gallery/image3.jpg",
        "alt": "Thumbnail Image 3"
    }
];

/* for (img in galleryImages) {
    console.log(galleryImages[img]);
} */

    let mainImage = document.querySelector("#gallery > img");
    // console.log(mainImage);

    let thumbnails = document.querySelector("#gallery .thumbnails");
    // console.log(thumbnails);
    // console.log("-----------------------------");

    mainImage.src = galleryImages[0].src;
    mainImage.alt = galleryImages[0].alt;

    // <img src="./assets/gallery/image1.jpg" alt="Thumbnail Image 1" data-array-index="0" data-selected="true">
    // <img src="./assets/gallery/image2.jpg" alt="Thumbnail Image 2" data-array-index="1" data-selected="false">
    // <img src="./assets/gallery/image3.jpg" alt="Thumbnail Image 3" data-array-index="2" data-selected="false"></img>

    galleryImages.forEach(function(image, index){
       let thumb = document.createElement("img");
       thumb.src = image.src;
       thumb.alt = image.alt;
       thumb.dataset.arrayIndex = index;
       thumb.dataset.selected = index === 0 ? true : false;

       thumb.addEventListener("click", function(e){
        let selectedIndex = e.target.dataset.arrayIndex;
        let selectedImage = galleryImages[selectedIndex]
        mainImage.src = selectedImage.src;
        mainImage.alt = selectedImage.alt;

        thumbnails.querySelectorAll("img").forEach(function(img) {
            img.dataset.selected = false;
        });
        e.target.dataset.selected = true;

       });

       thumbnails.appendChild(thumb);
    });

    
    const numbers = [45, 4, 9, 16, 25];
    const over18 = numbers.filter(myFunction);
    
    function myFunction(value, index, array) {
      return value > 18;
    }

    let members = [
        {
          name: "John Doe",
          yearOfBirth: 2004
        },
        {
          name: "Maria Alba",
          yearOfBirth: 2007
        },
        {
          name: "Ankit Patel",
          yearOfBirth: 2010
        },
        {
          name: "Mario Gomes",
          yearOfBirth: 1982
        },
        {
          name: "Enzo Alvarez",
          yearOfBirth: 2018
        },
        {
          name: "Jan Hansen",
          yearOfBirth: 1972
        }
        ]; 
        
        // use this variable to store the new array with 18+ years old members only
        let adultMembers = [];
        
        adultMembers = members.filter(over18);
        console.log("-------------------");
        
        function over18(value) {  
          return value.yearOfBirth < (2023 - 18);
        }
        
        console.log(adultMembers);




    

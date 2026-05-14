let images = ["image1.jpg" , "image2.jpg" , "image3.jpg"];
let index = 0;

let slider = document.getElementById("slider");

let nextBtn = document.getElementById("nextBtn");
let prevBtn = document.getElementById("prevBtn");

// التالي 

nextBtn.onclick = function(){
    index++;
    if(index >= images.length){
        index = 0;
    }

   slider.src= images[index];

}

// السابق 

prevBtn.onclick = function(){
    index--;
    if(index < 0){
        index = images.length - 1;

    }
    slider.src= images[index];
}

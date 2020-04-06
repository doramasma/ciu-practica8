let colour;
let lastColor;
let flag;
let radious;

function setup() {
  const canvas = createCanvas(500, 500);
  canvas.position(80,3);
  background(255);
  colour = createColorPicker("black");
  colour.id("colour-picker")
  flag = false;
  radious = 10;

}


document.addEventListener("DOMContentLoaded", (event) => {
  
    const clearButton = document.getElementById('emptyBackground');
    const rubberButton = document.getElementById('rubber');
    const sizeButton = document.getElementById('size');
    const colourButton = document.getElementById('colourButton');
  
  
    clearButton.addEventListener('click', () => {
      clearButton.classList.add("bold");
      setTimeout(() => {clearButton.classList.remove("bold"); }, 200);
      clearBackground();
    })
  
    rubberButton.addEventListener('click', () => {
      flag = !flag; 
      if (flag == true) {
        rubberButton.classList.add("bold");
      } else {
        rubberButton.classList.remove("bold");
      }
    })
  
    sizeButton.addEventListener('click', () => {
      sizeButton.classList.add("bold");
      setTimeout(() => {sizeButton.classList.remove("bold"); }, 200);
      radious += 2;
      if (radious > 20) {
        radious = 1;
      }
        
         
    })
    
    colourButton.addEventListener('click', () => {
      colourButton.classList.add("bold");
      setTimeout(() => {colourButton.classList.remove("bold"); }, 200);
      const picker = document.getElementById('colour-picker');
      picker.click();
        
    })

  
});

function draw() {
 
 
}

function clearBackground() {
  background(255);
  
}

function mouseDragged() {

  if (flag == true) {
     stroke(255);  
  } else {
    stroke(colour.color());  
  }
  
  strokeWeight(radious);
  line(mouseX, mouseY, pmouseX, pmouseY);
  
}




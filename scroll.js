


export function loadImagesScroll(data : string[]){
  let count = 0;
  let called = true;
  console.log(data);
const container = document.getElementById('mainContainerId');

function loadImages(numImages = 5 ){
    console.log("enter");
    let i=0;
     while(i < numImages){
      const image =  document.createElement('img');
      image.src = data[count];
      console.log(image)
      container.appendChild(image)
      count++;
      console.log(count);
     i++;
     console.log(i);
     }   
     }
 if(called){
 loadImages();
 }
 window.addEventListener('scroll',()=>{
    if(window.scrollY + window.innerHeight >= 
    document.documentElement.scrollHeight){
    loadImages();
    called=false;
    }
})
}
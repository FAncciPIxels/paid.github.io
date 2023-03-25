let a,b,c,d,e,f;
var g,h,i,j,k;
//top li>>>>>>>>>>>>>>>
         g = ["#001", "rgba(0,0,0,0.3)", "rgba(0,0,0,0.6)"," rgba(255,255,255,0.6)"]
a= document.getElementById("li-top");
a.addEventListener("mouseenter", function() 
{
  
       this.style.backgroundColor = g[1]
       this.style.border = "1px solid #001"
})
a.addEventListener("mouseleave", function() 
{
       this.style.backgroundColor = g[0]
})




// first search btn >>>>>>>>>>>>>>>>>>>>>
b = document.getElementById("btn");
  b.addEventListener("mouseenter", function () {
       this.style.backgroundColor = g[3]
       // this.style.backdropFilter = "blur(25px)"
       this.style.color = g[0]
  })
   b.addEventListener("mouseleave", function () {
       this.style.backgroundColor = g[0]
      //  this.style.border = "1px solid"
       this.transition = "0.5s"
       this.style.color = g[3]

   })




      d = document.getElementById("top-h1");
    window.addEventListener("pageshow",function () {
      c = document.getElementById("top_text");
      d = document.getElementById("top-h1");
      
       c.classList.add( "topped")
       d.classList.add("top-h1")
    })

  
      //  document.getElementById("#hambuger-menu")
        function cl(x) {
  let sid = document.getElementById("side");
  let n = "100%"

          x.classList.toggle("hamburg");
              sid.classList.toggle("side-hide");
              
  // if (sid.style.marginLeft == n) {
     
    let sdOne = document.getElementById("sd");
    // for (let i = 0; i > sdOne.length;i++) {
    // let sdTwo = document.getElementById("s2");
    // let sdThree = document.getElementById("s3");
    // let sdFour = document.getElementById("s4");
  
            //  sdOne.style.backgroundColor = "red"
              // let chi =sdOne.children;
    // for (let f = 0;f  > sdOne.length;f++) {
              
              sdOne.classList.toggle("side-li-1");
              // sdTwo.classList.toggle("side-li-2");
              // sdThree.classList.toggle("side-li-3");
              // sdFour.classList.toggle("side-li-4");
    }
    // else{
      // sdOne.classList.remove("side-li-1");
    // }
// }
        // }






















          // h = document.createAttribute("class");
            // h.value = "top_li";
            // this.setAttributeNode(h);
            // this.transition = "color 0.9s"




            
    // this.transition = "0.5s"

    //    this.removeAttribute("class")
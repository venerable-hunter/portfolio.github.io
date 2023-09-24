
// supposed to be sticky photos
// function photu(){
    
//     document.querySelectorAll(".elem").forEach(function(elem){
    
//         var rotate=0;
//         var difrot=0;
          
    
//         elem.addEventListener("mousemove",function(dets){
//             difrot= dets.clientY- elem.getBoundingClientRect().top;
//             difrot=dets.clientX-rotate;
//             rotate=dets.clientX;
//             gsap.utils.clamp(-20,20,diff);
//             gsap.to(elem.querySelector("img"),{
    
//                 opacity:1,
//                 ease: Power1,
//                 top:difrot,
//                 left: dets.clientX
//             })
//         })
    
    
//     })
        
//     }


function page1animation(){
    var t1 = gsap.timeline();
    t1.from(".nav",{
        y : '-40',
        duration: 2,
        opacity:0,
        ease:Expo.easeInOut
    })
      .to(".anim",{
        y:0,
        duration:1,
        ease:Expo,
        stagger:.2

      }).from(".page1Links",{
        y : '10',
        duration:'1',
        
        opacity:0,
        ease:Expo.easeInOut
    }).from("#adress",{
        x : '-40',
        duration:'1',
        
        opacity:0,
        ease:Expo.easeInOut

    }).from(".freelance",{
        x : '40',
        duration:'1',
        
        opacity:0,
        ease:Expo.easeInOut

    })

      
}





function followMouse() {
    window.addEventListener("mousemove",function(dets){

        document.querySelector("#circle").style.transform= `translate(${dets.clientX}px,${dets.clientY}px)`
    })
}
page1animation();
followMouse();


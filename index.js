const intro = document.querySelector(".intro")
const video = intro.querySelector("video")


// SCROLL MAGIC

const controller = new ScrollMagic.Controller()

// SCENE 


let scene = new ScrollMagic.Scene({
    duration: 10000,
    trigger: intro,
    triggerHook: 0,

})
.addIndicators()
.setPin(intro)
.addTo(controller)


// VIDEOANIMATION

let accelamount = 0.8
let scrollpost = 0
let delay = 0

scene.on("update", e => {
    scrollpost = e.scrollPos / 100

})


setInterval(()=>{
    delay += (scrollpost - delay) * accelamount
console.log(scrollpost, delay);

video.currentTime = delay
}, 40)




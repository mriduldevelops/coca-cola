function cola() {
  const canvas = document.querySelector("canvas");
  const part3 = document.querySelector("#part3");
  var context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });

  function files(index) {
    const localPaths = [
      "./assets2/Image3.jpg",
      "./assets2/Image4.jpg",
      "./assets2/Image5.jpg",
      "./assets2/Image6.jpg",
      "./assets2/Image7.jpg",
      "./assets2/Image8.jpg",
      "./assets2/Image9.jpg",
      "./assets2/Image10.jpg",
      "./assets2/Image11.jpg",
      "./assets2/Image12.jpg",
      "./assets2/Image13.jpg",
      "./assets2/Image14.jpg",
      "./assets2/Image15.jpg",
      "./assets2/Image16.jpg",
      "./assets2/Image17.jpg",
      "./assets2/Image18.jpg",
    ];

    return localPaths[index];
  }

  const frameCount = 16;

  const images = [];

  const imageSeq = {
    frame: 0,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  images[0].onload = render;

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: "none",
    scrollTrigger: {
      scrub: 2,
      trigger: canvas,
      start: "top 0%",
      end: "bottom 0%",
    },
    onUpdate: render,
  });

  gsap.to(canvas, {
    scrollTrigger: {
      scrub: 2,
      trigger: part3,
      start: "bottom 0%",
      ease: "none",
    },
  });

  ScrollTrigger.create({
    trigger: part3,
    pin: true,
    start: "bottom 100%",
  });
}

cola();

// var loader = document.querySelector("#loader");
// setTimeout(function(){
//   loader.style.top = "-100%"
// }, 9000);
(function () {
  const loader = document.querySelector("#loader");
  gsap.to(loader, { y: "-100%", delay: 7, duration: 3 });
})();

function textAnimation() {
  const text = document.querySelectorAll(".text");

  let tl = gsap.timeline({
    defaults: { ease: "SlowMo.easeOut" },
    scrollTrigger: {
      trigger: "#part2",
      start: "30% 50%",
      end: "50% 50%",
    },
  });
  tl.to(text, { y: 0, duration: 0.7, stagger: 0.2 });
}
textAnimation();
// function camera() {
//   const canvas = document.querySelector("canvas");
//   const context = canvas.getContext("2d");
//   const frameCount = 169;
//   const images = [];

//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;

//   window.addEventListener("resize", function () {
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
//     render();
//   });

//   const imageSeq = {
//     frame: 0,
//   };

//   const imageURLs = Array.from({ length: frameCount }, (_, i) =>
//     `https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/${String(i).padStart(5, '0')}.jpg&w=2048&q=90`
//   );

//   function preloadImages() {
//     imageURLs.forEach((url, i) => {
//       const img = new Image();
//       img.src = url;
//       img.onload = () => {
//         if (i === 0) render();
//       };
//       images.push(img);
//     });
//   }

//   function scaleImage(img, ctx) {
//     const canvas = ctx.canvas;
//     const hRatio = canvas.width / img.width;
//     const vRatio = canvas.height / img.height;
//     const ratio = Math.max(hRatio, vRatio);
//     const centerShift_x = (canvas.width - img.width * ratio) / 2;
//     const centerShift_y = (canvas.height - img.height * ratio) / 2;
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.drawImage(
//       img,
//       0,
//       0,
//       img.width,
//       img.height,
//       centerShift_x,
//       centerShift_y,
//       img.width * ratio,
//       img.height * ratio,
//     );
//   }

//   function render() {
//     scaleImage(images[imageSeq.frame], context);
//   }

//   preloadImages();

//   gsap.to(imageSeq, {
//     frame: frameCount - 1,
//     snap: "frame",
//     ease: "none",
//     scrollTrigger: {
//       scrub: 2,
//       trigger: "canvas",
//       start: "top 0%",
//       end: "bottom 0%",
//     },
//     onUpdate: render,
//   });

//   gsap.to("canvas", {
//     scrollTrigger: {
//       scrub: 2,
//       trigger: "#part3",
//       start: "bottom 0%",
//       ease: "none",
//     },
//   });

//   ScrollTrigger.create({
//     trigger: "#part3",
//     pin: true,
//     start: "bottom 100%",
//   });
// }

// camera();

// var topButton = document.getElementById("back-to-top");
// var foldElem = document.getElementById('top');
// var fold = foldElem.clientHeight;

// background animation
function setupAnimation(bgContainers) {
    let animationDuration = 3000 // CSS uses seconds
    let totalDuration = (animationDuration*bgContainers.length)/1000
    // gen keyframes dynamically
    bgContainers.forEach(function(elem, ind, arr) {
        // get Delay
        // toggleClass and set style properties
        let animDelay = ind*(animationDuration/1000)
        // elem.style['animation-duration'] = `${animationDuration/1000}s`
        elem.style['animation-duration'] = `${totalDuration}s`
        elem.style['animation-delay'] = `${animDelay}s`
        elem.classList.add('top-bg-stack-active')
    })
}


window.addEventListener('load', function() {
    var bgContainers = document.querySelectorAll('.top-bg-stack')
    if (bgContainers) { setupAnimation(bgContainers) }

    // document.styleSheets[0].insertRule('@keyframes flash {from {opacity: 0;} to {opacity: 1}}', 'index-max')
    // let elem = document.querySelector('h2')
    // elem.style['animation'] = 'flash 1s linear infinite'
})


// document.onscroll = function(eve) {
//     var pos = window.scrollY;
//     if (pos > fold) {
//         topButton.style.display = 'block';
//     } else {
//         topButton.style.display = 'none';
//     };
// };
//
// var navLinks = document.querySelectorAll('nav > a');
//
// function slowScrollTop(eve) {
//   #<{(|
//    * the other function only scrolls down
//    |)}>#
//   function scrollUp(time) {
//     window.scrollBy(0, -175);
//     if (window.scrollY > 0) {
//       return window.requestAnimationFrame(scrollUp);
//     };
//   };
//
//   eve.preventDefault();
//   window.requestAnimationFrame(scrollUp);
// };
//
// function slowScroll(eve) {
//   function scrollWindow(time) {
//     window.scrollBy(0, scrollStep);
//     if (window.scrollY < scrollStop) {
//       return window.requestAnimationFrame(scrollWindow);
//     };
//   };
//
//   var scrollTargetId = eve.target.attributes.href.value;
//   var scrollTarget = document.querySelector(scrollTargetId);
//
//   if (!scrollTarget) {
//     return;
//   } else {
//     eve.preventDefault();
//   };
//
//   var scrollStop = scrollTarget.offsetTop
//   var scrollStep = Math.ceil(scrollStop/10)
//   window.requestAnimationFrame(scrollWindow);
// };
//
// for (i=0; i<navLinks.length; i++) {
//   navLinks[i].addEventListener('click', slowScroll);
// };
//
// topButton.addEventListener('click', slowScrollTop);

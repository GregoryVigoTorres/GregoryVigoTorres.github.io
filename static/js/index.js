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
  if (bgContainers) {
    setupAnimation(bgContainers)
  } else {
    console.error('There are no background carousel containers')
  }
})

var topButton = document.getElementById("back-to-top");
var foldElem = document.getElementById('top');
var fold = foldElem.clientHeight;

document.onscroll = function(eve) {
    var pos = window.scrollY;
    if (pos > fold) {
        topButton.style.display = 'block';
    } else {
        topButton.style.display = 'none';
    };
};

var navLinks = document.querySelectorAll('nav > a');

function slowScrollTop(eve) {
  /*
   * the other function only scrolls down
   */
  function scrollUp(time) {
    window.scrollBy(0, -175);
    if (window.scrollY > 0) {
      return window.requestAnimationFrame(scrollUp);
    };
  };

  eve.preventDefault();
  window.requestAnimationFrame(scrollUp);
};

function slowScroll(eve) {
  function scrollWindow(time) {
    window.scrollBy(0, scrollStep);
    if (window.scrollY < scrollStop) {
      return window.requestAnimationFrame(scrollWindow);
    };
  };

  var scrollTargetId = eve.target.attributes.href.value;
  var scrollTarget = document.querySelector(scrollTargetId);

  if (!scrollTarget) {
    return;
  } else {
    eve.preventDefault();
  };

  var scrollStop = scrollTarget.offsetTop
  var scrollStep = Math.ceil(scrollStop/10)
  window.requestAnimationFrame(scrollWindow);
};

for (i=0; i<navLinks.length; i++) {
  navLinks[i].addEventListener('click', slowScroll);
};

topButton.addEventListener('click', slowScrollTop);

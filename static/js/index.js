
var topButton = document.getElementById("back-to-top-link");
var foldElem = document.getElementById('top');
var fold = foldElem.clientHeight;

// var menuButtonContainer = document.getElementById('menu-button-container');
var menuItemList = document.getElementById('menu-items');

document.onscroll = function(eve) {
    var pos = window.scrollY;
    if (pos > fold) {
        topButton.style.display = 'block';
        // menuButtonContainer.style.display = 'block';
    } else {
        topButton.style.display = 'none';
        // menuButtonContainer.style.display = 'none';
    };
};

var navLinks = document.querySelectorAll('nav > a');

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
    return
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

// menuButtonContainer.addEventListener('mouseover', function(eve) {
//     if (menuItemList.style != undefined) {
//         menuItemList.style.display = 'block';
//     };
// });
//
// menuButtonContainer.addEventListener('mouseout', function(eve) {
//     if (menuItemList.style != undefined) {
//         menuItemList.style.display = 'none';
//     };
// });
//
// SMALLER SCREENS
if (window.screen.availWidth < 800) {
    /* move contact links to new container */
    // var contactElems = document.getElementById('contact-links');
    // var contactElemTarget = document.querySelector('#mobile-links-container p');
    // contactElemTarget.insertAdjacentElement('afterend', contactElems);

    // menuButtonContainer.addEventListener('touchmove', function(eve) {
    //     for (i=0; i < menuItemList.children.length; i++) {
    //         // unset background on menu items
    //         menuItemList.children[i].firstElementChild.classList.remove('fake-hover');
    //     };
    //
    //     var currElem = document.elementFromPoint(eve.touches[0].clientX, eve.touches[0].clientY);
    //     if (currElem) {
    //         if (currElem.tagName === 'A' && currElem.className === 'menu-item') {
    //             currElem.classList.add('fake-hover');
    //         }
    //     };
    //     eve.preventDefault();
    // }, false);

    // show/hide container
    // menuButtonContainer.addEventListener('touchstart', function(eve) {
    //     menuItemList.style.display = 'block';
    //     menuButtonContainer.style.width = '50%';
    // }, false);
    //
    // for (i=0; i<menuItemList.children.length; i++) {
    //     menuItemList.children[i].firstElementChild.addEventListener('click', function(eve) {
    //         menuItemList.style.display = 'none';
    //         menuButtonContainer.style.width = 'auto';
    //     }, false);
    // };
}; // responsive things


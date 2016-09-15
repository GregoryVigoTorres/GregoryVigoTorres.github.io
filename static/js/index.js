var comingSoonElem = document.getElementById('coming-soon');
function showComingSoon(callerId) {
  // show the little box centered inside the caller parent
  var callerElem = document.getElementById(callerId);
  var topPos = callerElem.offsetTop; // + (callerElem.clientHeight/4);
  var leftPos = callerElem.offsetLeft + (callerElem.clientWidth/4);

  comingSoonElem.style.top = topPos;
  comingSoonElem.style.left = leftPos;
  comingSoonElem.style.display = 'block';
};

var closeComingSoon = document.getElementById('close-coming-soon');
closeComingSoon.addEventListener('click',  function(eve) {
    comingSoonElem.style.display = 'none';
});

var topButton = document.getElementById("back-to-top-link");
var foldElem = document.getElementById('top');
var fold = foldElem.clientHeight;

var menuButtonContainer = document.getElementById('menu-button-container');
var menuItemList = document.getElementById('menu-items');

document.onscroll = function(eve) {
    var pos = window.scrollY;
    if (pos > fold) {
        topButton.style.display = 'block';
        menuButtonContainer.style.display = 'block';
    } else {
        topButton.style.display = 'none';
        menuButtonContainer.style.display = 'none';
    };
};

menuButtonContainer.addEventListener('mouseover', function(eve) {
    if (menuItemList.style != undefined) {
        menuItemList.style.display = 'block';
    };
});

menuButtonContainer.addEventListener('mouseout', function(eve) {
    if (menuItemList.style != undefined) {
        menuItemList.style.display = 'none';
    };
});

// SMALLER SCREENS
if (window.screen.availWidth < 800) {
    // move contact links to new container
    var contactElems = document.getElementById('contact-links');
    var contactElemTarget = document.querySelector('#mobile-links-container p');
    contactElemTarget.insertAdjacentElement('afterend', contactElems);

    menuButtonContainer.addEventListener('touchmove', function(eve) {
        for (i=0; i < menuItemList.children.length; i++) {
            // unset background on menu items
            menuItemList.children[i].firstElementChild.classList.remove('fake-hover');
        };

        var currElem = document.elementFromPoint(eve.touches[0].clientX, eve.touches[0].clientY);
        if (currElem) {
            if (currElem.tagName === 'A' && currElem.className === 'menu-item') {
                currElem.classList.add('fake-hover');
            }
        };
        eve.preventDefault();
    }, false);

    // show/hide container
    menuButtonContainer.addEventListener('touchstart', function(eve) {
        menuItemList.style.display = 'block';
        menuButtonContainer.style.width = '50%';
    }, false);

    for (i=0; i<menuItemList.children.length; i++) {
        menuItemList.children[i].firstElementChild.addEventListener('click', function(eve) {
            menuItemList.style.display = 'none';
            menuButtonContainer.style.width = 'auto';
        }, false);
    };
}; // responsive things


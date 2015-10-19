
var $container = $('#image-container');

images.forEach(function(img, ind, arr) {
    var $imgContainer = $(document.createElement('div'));
    $imgContainer.addClass("image-container");

    var $listElem = $(document.createElement('li'));
    var imgElem = document.createElement('img');
    imgElem.src = 'static/images/tiny/'+img.filename;
    // console.log(imgElem);
    $listElem.append(imgElem);

    var infoContainer = $(document.createElement("p"));
    infoContainer.addClass("info-container");

    var infoList = $(document.createElement("ul"));
    infoList.addClass("info-list");

    var showElem = $(document.createElement("li"));
    showElem.html("+");
    showElem.addClass("show-hide-info")
    infoList.append(showElem);

    var titleElem = $(document.createElement("li"));
    titleElem.html(img.title);
    infoList.append(titleElem);

    var dateElem = $(document.createElement("li"));
    dateElem.html(img.date);
    infoList.append(dateElem);

    var mediumElem = $(document.createElement("li"));
    mediumElem.html(img.medium);
    infoList.append(mediumElem);

    var dimElem = $(document.createElement("li"));
    dimElem.html(img.dimensions);
    infoList.append(dimElem);

    /* $listElem contains image */
    $imgContainer.append($listElem);
    $imgContainer.append(infoList);
    $container.append($imgContainer);
;})

$(".show-hide-info").click(function(event) {
    var liElems = $(this).siblings()
    liElems.slideToggle(40);
    $(this).parent().toggleClass("info-list-visible");
});

var topButton = $("#up-arrow");

$(document).scroll(function(event) {
    var scrollPos = $('body').scrollTop();
    if (scrollPos > 350) {
        topButton.fadeIn(100);
    } else {
        topButton.fadeOut(100);
    };
});

topButton.click(function(event) {
    $('body').scrollTop(0);
    $('.info-list li:not(.show-hide-info)').hide();
    $('.info-list').removeClass("info-list-visible");
});


// var button = document.getElementById('show-nav-menu');
// var nav = document.getElementsByTagName('nav')[0];
//
// button.addEventListener('click', function(e) {
//     nav.classList.toggle('open');
//     e.stopPropagation();
// });
//
// var pageLinks = nav.getElementsByTagName('a'); 
//
// for (i=0; i<pageLinks.length; i++) {
//     pageLinks[i].addEventListener('click', function(e) {
//         document.getElementsByTagName('nav')[0].classList.remove('open');
//     });
// };

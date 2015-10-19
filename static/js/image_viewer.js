
var $container = $('#image-container');

images.forEach(function(img, ind, arr) {
    var $imgContainer = $(document.createElement('div'));

    var $listElem = $(document.createElement('li'));
    var imgElem = document.createElement('img');
    imgElem.src = 'static/images/tiny/'+img.filename;
    
    console.log(imgElem);

    $listElem.append(imgElem);
    // $listElem.html(img.title);
    // var imgContainer = $(document.createElement("div"));
    // imgContainer.addClass("image-container");
    //
    // var img = document.createElement("img");
    //
    // img.setAttribute("sizes", "(min-width: 350px) 400px, 200px");
    //
    // var src = "static/images/"+val.filename;
    // var srcset = src+" 1920w, static/images/tiny/"+val.filename+" 350w";
    // img.src = src;
    // img.srcset = srcset
    //
    // img.classList.add("thumbnail");
    // imgContainer.append(img);
    //
    // var infoContainer = $(document.createElement("p"));
    // infoContainer.addClass("info-container");
    //
    // var infoList = $(document.createElement("ul"));
    // infoList.addClass("info-list");
    //
    // var showElem = $(document.createElement("li"));
    // showElem.html("+");
    // showElem.addClass("show-hide-info")
    // infoList.append(showElem);
    //
    // var titleElem = $(document.createElement("li"));
    // titleElem.html(val.title);
    // infoList.append(titleElem);
    //
    // var dateElem = $(document.createElement("li"));
    // dateElem.html(val.date);
    // infoList.append(dateElem);
    //
    // var mediumElem = $(document.createElement("li"));
    // mediumElem.html(val.medium);
    // infoList.append(mediumElem);
    //
    // var dimElem = $(document.createElement("li"));
    // dimElem.html(val.dimensions);
    // infoList.append(dimElem);
    //
    // infoContainer.append(infoList);
    $imgContainer.append($listElem);
    $container.append($imgContainer);
;})

// $(".show-hide-info").click(function(event) {
//     var liElems = $(this).siblings()
//     liElems.slideToggle(70);
//     $(this).parent().toggleClass("info-list-visible");
// });
//
// var backToTopBreakpoint = $(".image-container:nth-child(2)").offset().top;
// var topButton = $("#up-arrow");
//
// $(document).scroll(function(event) {
//     var scrollPos = $('body').scrollTop();
//     if (scrollPos > backToTopBreakpoint) {
//         topButton.fadeIn(100);
//     } else {
//         topButton.fadeOut(100);
//     };
// });
//
// topButton.click(function(event) {
//     $('body').scrollTop(0);
//     $('.info-list li:not(.show-hide-info)').hide();
//     $('.info-list').removeClass("info-list-visible");
// });
//
//
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

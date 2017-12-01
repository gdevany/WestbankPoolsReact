"use.strict";

$(function() {
  // $('.projbox').on('click', function(event) {
  //   event.preventDefault();
  //   $('#chosenproj').css('display', 'flex');
  //   $('.projname').text(this.id);
  // })

  // $('img').on('click', function(event) {
  //     event.preventDefault();

// *************************************************************************

  $("#my_nanogallery2").nanogallery2({
    // "thumbnailHeight": 250, "thumbnailWidth": 400,
    thumbnailWidth: '350 XS350 SM600 LA500 XL500', thumbnailHeight: '250 XS250 SM400 LA350 XL350',
    "thumbnailCrop": 0,
    "thumbnailBorderHorizontal": 0,
    "thumbnailBorderVertical": 0,
    "thumbnailL1GutterWidth": 0,
    "thumbnailL1GutterHeight": 40,
    // "thumbnailLabel": { position: 'onBottom' },
    "itemsBaseURL": "./pics/",
    "colorScheme": "light",
    "thumbnailStacksRotateZ": 0.4,
    "galleryBuildInit2": "perspective-origin_50% 150%",
// COOL EFFECTS ON HOVER, ETC:
    // "thumbnailBuildInit2": 'image_scale_0.9',
                    // GOOD ONE   |
                    //           \|/
    "thumbnailHoverEffect2": "image_scale_1.00_1.20"
    // ***THIS IS COOL*** "thumbnailHoverEffect2": "image_scale_1.00_1.20"
    // "thumbnailHoverEffect2": "image_grayscale_0%_100%"
// examples
    // "thumbnailHoverEffect2": "image_rotateZ_0deg_7deg_easeOutQuad_150_hoverin|image_rotateZ_7deg_-7deg_delay160_keyframe_hoverin_easeOutQuad_200|image_rotateZ_-7deg_0deg_delay320_keyframe_hoverin_easeOutQuad_150"
    // "thumbnailStacksTranslateZ": 0.3,
    // "thumbnailStacksRotateX": 0.9,

// *************************************************************************
// $("#my_nanogallery2").nanogallery2({
//       "thumbnailHeight": 100, "thumbnailWidth": 100,
//       "thumbnailL1GutterWidth": 0,
//       "thumbnailL1GutterHeight": 5,
//       "itemsBaseURL": "./pics/",
//       "thumbnailStacksRotateZ": 0.4,
//       "thumbnailBuildInit2": "title_translateY_2px",
//       "galleryBuildInit2": "perspective_8000px",
//       "thumbnailHoverEffect2": "thumbnail_rotateY_0deg_30deg_easeOutQuad_150_hoverin|thumbnail_rotateY_30deg_-30deg_delay160_keyframe_hoverin_easeOutQuad_200|thumbnail_rotateY_-30deg_0deg_delay320_keyframe_hoverin_easeOutQuad_150|title_translateX_0px_20px_easeOutQuad_150_hoverin|title_translateX_20px_-20px_delay160_keyframe_hoverin_easeOutQuad_200|title_translateX_-20px_0px_delay320_keyframe_hoverin_easeOutQuad_150|description_translateX_0px_12px_easeOutQuad_150_hoverin|description_translateX_12px_-12px_delay160_keyframe_hoverin_easeOutQuad_200|description_translateX_-12px_0px_delay320_keyframe_hoverin_easeOutQuad_150"

  });

  $("#my_nanogallery3").nanogallery2({
    // "thumbnailHeight": 250, "thumbnailWidth": 400,
    thumbnailWidth: '350 XS350 SM600 LA500 XL500', thumbnailHeight: '250 XS250 SM400 LA350 XL350',
    "thumbnailCrop": 0,
    "thumbnailBorderHorizontal": 0,
    "thumbnailBorderVertical": 0,
    "thumbnailL1GutterWidth": 0,
    "thumbnailL1GutterHeight": 40,
    // "thumbnailLabel": { position: 'onBottom' },
    "itemsBaseURL": "./pics/",
    "colorScheme": "light",
    "thumbnailStacksRotateZ": 0.4,
    // "galleryBuildInit2": "perspective-origin_50% 150%",
    "thumbnailHoverEffect2": "imageGrayOff"
  });

});

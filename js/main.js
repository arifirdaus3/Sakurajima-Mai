$(document).ready(function() {
  //Init Side Nav
  $(".button-collapse").sideNav();
  //Init Slider
  $(".slider").slider({
    indicators: false,
    height: 950
  });
  //Init Autocomplete
  $(".autocomplete").autocomplete({
    data: {
      Personality: null,
      "Birth Day": null,
      Height: null
    }
  });
  $(".scrollspy").scrollSpy();
});

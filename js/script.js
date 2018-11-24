(function($) {

  const ANIME_SAMPLE = window.ANIME_SAMPLE || {};

  ANIME_SAMPLE.Top = function() {

    const _init = function() {
      animeTweenMax();
      animeVelocity();
      animeCss();
    };

    const animeTweenMax = ()=> {
      $('#js-obj01').waypoint(function(direction){
        if (direction === 'down') {
          TweenMax.to('#js-obj01', 1.5, {
            top: 0,
            opacity: 1
          });
        }
      },{offset : '70%'});
    };

    const animeVelocity = ()=> {
      $('#js-obj02').waypoint(function(direction){
        if (direction === 'down') {
          $(this.element).velocity({
            top: 0,
            opacity: 1
          }, {
            duration: 1500,
            easing: 'ease-out'
          });
        }
      },{offset : '70%'});
    };

    const animeCss = ()=> {
      $('#js-obj03').waypoint(function(direction){
        if (direction === 'down') {
          $(this.element).addClass('is-anime');
        }
      },{offset : '70%'});
    };

    return {
      init: _init
    };

  }();

  ANIME_SAMPLE.Top.init();

})(jQuery);

$(document).ready(function(){
  
  var slider = {
  	el: {
  		slider: $('#slider'),
  		allSlides: $('.slide'),
  		sliderNav: $('.slider-nav'),
  		allNavButtons: $('.slider-nav > a')
  	},

  	timing: 800,
  	slideWidth: 300, // Could measure this - for fluid-based carousel? YES

  	init: function(){
  		// Manually scroll
  		this.el.slider.on('scroll', function(e) {
  			slider.moveSlidePosition(e);
  		});
  		// Or click button
  		this.el.sliderNav.on('click', 'a', function(e){
  			slider.handleNavClick(e, this);
  		});
  	},

  	moveSlidePosition: function(e){
  		this.el.allSlides.css({
  			'background-position': $(e.target).scrollLeft()/6-100 + 'px 0'
  		});
  	},

  	handleNavClick: function(e, el){
  		e.preventDefault();

  		var position = $(el).attr('href').split('-').pop();

  		this.el.slider.animate({
  			scrollLeft: position * this.slideWidth
  		}, this.timing);

  		this.changeActiveNav(el);
  	},

  	changeActiveNav: function(el) {
  		// Remove active from all links
  		this.el.allNavButtons.removeClass('active');

  		// Add to new active link
  		$(el).addClass('active');
  	}
  };

  slider.init();
});
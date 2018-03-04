	$(document).ready(function() {
		var jqArr = $('.game-link').toArray();
		var length = jqArr.length;
		var timer = setInterval(cardAnimate, 100)
		var idx = 0
		function cardAnimate() {
			$(jqArr[idx]).show();
			$(jqArr[idx]).addClass('animated fadeInUp');
			idx++;
			if (idx>=length) {
				clearInterval(timer);
			}
		};
	})
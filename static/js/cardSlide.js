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
				var cardsPerLine = Math.floor($('#viewport-force').width()/300);
				var newViewportHeight = ((idx/cardsPerLine + 1) * 300);
				$('#viewport-force').height(newViewportHeight);
				console.log('idx ' + idx, cardsPerLine, newViewportHeight) 
				clearInterval(timer);
			}
		};
	})
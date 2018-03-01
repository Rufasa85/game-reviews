$(document).ready(function(){
	$('.editBtn').on('click', function(e) {
		e.preventDefault();
		var myUrl = $(this).attr('action');
		var myData = $(this).serialize()
	    // console.log(myUrl);
	    // console.log(myData);
	    $.ajax({
	        method:'PUT',
	        url:myUrl,
	        data:myData
	    }).done(function(){
	        window.location.href=myUrl 
	    });
	})
})
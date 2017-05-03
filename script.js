$(document).ready(function(){
	var url = 'https://api.dribbble.com/v1/shots?access_token=fede790b9ab97de70295279d0a7d99b857fc2353d3df2334433b06a349ded1e9';
	var page = 1;


	var getPost = function(){
		$.ajax({						
			url: url+'&page='+page,
			type: 'GET',
			success: function(resp) {
				//console.log(resp);
				for (var i in resp){
					var shot = resp[i];
					var html = $('<div class="shot"></div>');
					html.append('<p id="header">' +shot.title+ '</p>');
					html.append('<img src="' +shot.images.teaser+ '"/>');
					html.append ('<p>'+shot.description+'</p>');
					html.append('<a href="'+shot.html_url +'"><button type="button" class="btn">Visit Dribbble</button></a>');
					$('#shots').append(html);

				}
				page++;
			}

		});
	}
getPost();
$('#more').on('click', getPost);

});
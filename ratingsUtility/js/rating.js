$(document).ready(function() {
	//ratings
	$('body').on('click', '.ratings > i', function (){
		var c_id = $(this).attr('sl');
		var star = $(this).attr('star');
		if (star < 5) {
			var es_1 = +star + +1;
			//alert(es_1);
			for (var es = es_1; es <= 5; es++) {

				var es_id = "#" + c_id + es;
				$(es_id).removeClass('fa fa-star').addClass('fa fa-star-o');
			}
		}

		for (var fs = 1; fs <= star; fs++) {
			var s_id = '#' + c_id + fs;
			//console.log(s_id);
			$(s_id).removeClass('fa fa-star-o').addClass('fa fa-star');
		}
		var status = '#status-' + c_id;

		if (star == 1) {
			$(status).html('Terrible').css('color', '#A30000').css('font-weight', 'bold');
		} else if (star == 2) {
			$(status).html('Poor').css('color', '#A30000').css('font-weight', 'bold');
		} else if (star == 3) {
			$(status).html('Average').css('color', '#009933').css('font-weight', 'bold');
		} else if (star == 4) {
			$(status).html('Very Good').css('color', '#009933').css('font-weight', 'bold');
		} else if (star == 5) {
			$(status).html('Excellent').css('color', '#009933').css('font-weight', 'bold');
		}
		var selectedRate1 = '#selected-' + c_id;

		$(selectedRate1).val(star);
		//alert(c_id1);
	});
	
	$('body').on('click','#getSelectedratings',function(){
		
		var fullRates=false;
		var averageRating=0;
		$('.given-rating').each(function() {
			var rate_id= '#'+$(this).attr('id');
			var rate_val=$(rate_id).val();
			if(rate_val == "")
			{
				fullRates=false;
				//console.log('Please provide rating for all..');
				$('#status').html('Please provide ratings for all..');
				$('#avgRatings').html('');
				$('#fullratingsData').html('');
			}
			else{
				fullRates=true;
				//console.log(rate_val);
			}

		});
		
		if(fullRates)
		{
			
			 arrayObj = [];
			 var ratingItemsLn=$('.given-rating').length;
			$('.given-rating').each(function() {
				var rate_id1= '#'+$(this).attr('id');
				var rate_val1=$(rate_id1).val();
				var ratingLabel=$(rate_id1).attr('rateLabel');
				//console.log(ratingLabel);
				item = {};
		        item ["ratingLabel"] = ratingLabel;
		        item ["ratingVal"] = rate_val1;		
		        arrayObj.push(item);
		        var currentRateVal = parseInt(rate_val1);
				averageRating = averageRating + currentRateVal;
			});
			console.log('total ratings: '+averageRating);
			averageRating=Math.round(averageRating / ratingItemsLn);
			console.log('averageRating: '+averageRating);
			
			ratingsJson = JSON.stringify(arrayObj);
			
			$('#avgRatings').html('total Average ratings : '+averageRating);
			$('#fullratingsData').html('total Selected ratings Json : '+ratingsJson);
			//console.log(ratingsJson);
			//ratingsJson=jsonObj;
			//ratingsJson = jsonObj;
		
		}
		
	});
	
	
});
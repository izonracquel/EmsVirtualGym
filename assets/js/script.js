$(document).ready(function(){

	$('.calendar').calendar({
		next: '<i class="fa fa-arrow-right"></i>',
		prev: '<i class="fa fa-arrow-left"></i>',
		onDateClick : function(){
			$('.calendar-date-container').not('.date-disabled').not('.date-hide').on('click', function(){
				localStorage.setItem('add-workout-activity-date', $(this).data('stamp'));
				$('.workout-activity-date').html(toDate(localStorage.getItem('add-workout-activity-date'), 'J F d, Y'));
				window.location = '#workout-activity-list';
			});
		}
	});
	
	$('.workout-activity-date').html(toDate(localStorage.getItem('add-workout-activity-date'), 'J F d, Y'));
	$('.activity-refresh').click(function(){
		
	});
	
	$('ul.activity-list li').click(function(){
		if($(this).hasClass('active')){
			$(this).removeClass('active');
		}else{
			$(this).addClass('active');
		}
	});

});
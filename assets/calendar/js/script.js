(function($) {

    $.fn.calendar = function(options){
    	
		this.each(function(i, self){
			
			self = $(self);
			
			var data = {
				
				dataYear : function(){
					if(self.attr('data-year'))
						return parseInt(self.attr('data-year'));
					else
						return parseInt(toDate('', 'Y'));
				},
				dataMonth : function(){
					if(self.attr('data-month'))
						return parseInt(self.attr('data-month'));
					else
						return parseInt(toDate('', 'm'));
				},
				dataDate : function(){
					if(self.attr('data-date'))
						return parseInt(self.attr('data-month'));
					else
						return parseInt(toDate('', 'd'));
				},
				dataView : function(){
					if(self.attr('data-view'))
						return parseInt(self.attr('data-view'));
					else
						return 'month';
				}
			}
			
			var settings = $.extend({
			
				month		 : data.dataMonth(),
				year		 : data.dataYear(),
				date		 : data.dataDate(),
				view		 : data.dataView(),
				next		 : 'next',
				prev		 : 'prev',
				dateDisabled : 'disable',
				onDateClick	 : null,
			}, options);
			
			var actions = {
				getMonth :function(){
					return new Date(settings.year, settings.month-1, 1);
				},
				getToday: function(){
					d = new Date();
					return new Date(d.getFullYear(), d.getMonth(), d.getDate());
				},
				showDate : function(){
					
					date = settings.year + '-' + settings.month + '-' + 1;
					
					self.parent().find('.calendar-month-year-container').find('.year').text(new Date(settings.year, settings.month, settings.date).getFullYear());
					self.parent().find('.calendar-month-year-container').find('.month').text(toDate(new Date(settings.year, settings.month-1, settings.date).getTime(), 'F'));
					
					
					if(settings.view == 'month'){
						firstDisabled = actions.getMonth().getDay(); if(actions.getMonth().getDay() == 0) firstDisabled = 7;
						start = actions.getMonth().getTime() - (firstDisabled * 86400000);
						weeksTxt = "";
						for(i=1; i<=6; i++){
							weekDaysTxt = "";
							for(weekdays=1; weekdays<=7; weekdays++){
								klass = "";
								if(settings.dateDisabled == 'disable'){
									if(actions.getMonth().getMonth() != new Date(start).getMonth()) klass += " date-disabled";
								}else if(settings.dateDisabled == 'hide'){
									if(actions.getMonth().getMonth() != new Date(start).getMonth()) klass += " date-hide";
								}

								if(actions.getToday().getTime() == start) klass += " date-today";
								weekDaysTxt += '<li class="calendar-date-container'+ klass +'" data-stamp="'+ start +'"><span class="calendar-date">'+ new Date(start).getDate() +'</span></li>';
								start += 86400000;
							}
							weeksTxt += '<div class="calendar-week-container"><ul class="calendar-week" data-week="'+ i +'">'+ weekDaysTxt +'</ul></div>';
						}
						self.html(weeksTxt);
					}
					
					settings.onDateClick();
					
				},
				next : function(){
					settings.month += 1;
					actions.showDate();
					
				},
				prev : function(){
					settings.month -= 1;
					actions.showDate();
				},
				nextYear : function(){
					settings.year += 1;
					actions.showDate();
					
				},
				prevYear : function(){
					settings.year -= 1;
					actions.showDate();
				}
			}
			
			self.wrap('<div class="calendar-container"></div>');
			
			selectMonth = '<div class="select-month-container">';
			selectMonth += '<ul>';
			selectMonth += '<li>January</li><li>February</li><li>March</li><li>April</li><li>May</li><li>June</li>';
			selectMonth += '</ul>';
			selectMonth += '</div>';
			
			
			self.parent().prepend('<div class="calendar-week-days-container"><ul class="calendar-week-days"><li class="calendar-days"><span class="calendar-date">Sun</span></li><li class="calendar-days"><span class="calendar-day">Mon</span></li><li class="calendar-days"><span class="calendar-day">Tue</span></li><li class="calendar-days"><span class="calendar-day">Wed</span></li><li class="calendar-days"><span class="calendar-day">Thu</span></li><li class="calendar-days"><span class="calendar-day">Fri</span></li><li class="calendar-days"><span class="calendar-day">Sat</span></li></ul></div>');
			self.parent().prepend('<div class="calendar-month-year-container"></div>');
			self.parent().find('.calendar-month-year-container').append('<div class="calendar-month-container"><div class="calendar-month"><span class="prev">'+ settings.prev +'</span><span class="month"></span><span class="next">'+ settings.next +'</span></div></div><div class="calendar-year-container"><div class="calendar-year"><span class="prev-year">'+ settings.prev +'</span><span class="year"></span><span class="next-year">'+ settings.next +'</span></div></div>');
			
			actions.showDate();
			
			self.parent().find('.next').click(function(){
				actions.next();
			});
			
			self.parent().find('.prev').click(function(){
				actions.prev();
			});
			
			self.parent().find('.next-year').click(function(){
				actions.nextYear();
			});
			
			self.parent().find('.prev-year').click(function(){
				actions.prevYear();
			});
			
		});
    }
 
}(jQuery));



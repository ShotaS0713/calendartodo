// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
//= require jquery
//= require moment
//= require fullcalendar









$(function () {
  // 画面遷移を検知
  $(document).on('turbolinks:load', function () {
    // lengthを呼び出すことで、#calendarが存在していた場合はtrueの処理がされ、無い場合はnillを返す
    if ($('#calendar').length) {
        function eventCalendar() {
            return $('#calendar').fullCalendar({
            });
        };
        function clearCalendar() {
            $('#calendar').html('');
        };

        $(document).on('turbolinks:load', function () {
            eventCalendar();
        });
        $(document).on('turbolinks:before-cache', clearCalendar);

        $('#calendar').fullCalendar({
            eventSources : [
              {
                googleCalendarApiKey: 'AIzaSyAwnwl90LWS95BB3OT-HKptuCALoEjWJAk',
                // url: 'https://www.google.com/calendar/feeds/japanese__ja%40holiday.calendar.google.com/public/basic',
                googleCalendarId: 'shotaaa000@gmail.com',
                rendering: 'background',
                color:"#ffd0d0"
              }
            ],
            events: '/events.json',
            firstDay: 1,
            eventClick: function(item, jsEvent, view) {
              //クリックしたイベントのタイトルが取れる
              alert('Clicked on: ' + item.title);
            },

            header:{
              left:'prev,next,today',
              center:'title,eventListButton',
              right:'month agendaWeek agendaDay'
            },
            
            
            customButtons:{
              eventListButton:{
                  text: 'all events',
                  click:function(){
                    window.location.href = '/events';
                  }
              }
          },
            
            eventDrop: function(item, delta,revertFunc,jsEvent,ui, view) {
              //ドロップした情報
              alert('Clicked on: ' + item.title);
              //ドロップしたことを元に戻したいとき
              revertFunc();
            }



        });
      
    }
  });
})



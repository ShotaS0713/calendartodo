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
            events: '/events.json',
            firstDay: 1,
            // 後で書く
            // googleCalendarApiKey: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',

            // JP Holidays
            // events: 'japanese__ja@holiday.calendar.google.com',

          


        });
      
    }
  });

  
   
});
  
  // $(function() {
  //   $('#calendar').fullCalendar({
  //     eventRender: function(events, element){
  //       if(events.img){
  //         $(element[0])
  //         .css("border-color", "transparent")
  //         .css("background-color", "transparent")
  //         .html('<img class= "photo" src="'+events.img+'" />');
  //         }
  //     },
  //       events:[
  //         {
  //           title: '通常イベント',
  //           start: new Date(y, m, 15)
  //         },
  //         {
  //           title: '画像　イベント',
  //           start: new Date(y, m, 1),
  //           img:"img2.jpg"					
  //       },
  //       {
  //           title: '画像　イベント',
  //           start: new Date(y, m, 2),
  //           img:"img3.jpg"					
  //       }

  //       ]
      
  //   });
  // });

$(document).ready(function () {
  $("#filterTags, #filterOs, #filterType, #filterHardware, #filterPorts, #filterUsers").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $(".dropdown-menu li").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });

  // $('input[name="daterange"]').daterangepicker({
  //   opens: 'left'
  // }, function (start, end, label) {
  //   console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
  // });
  $('input[name="daterange"]').daterangepicker({
    "showWeekNumbers": true,
    ranges: {
      'Today': [moment(), moment()],
      'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
      'Last 7 Days': [moment().subtract(6, 'days'), moment()],
      'Last 30 Days': [moment().subtract(29, 'days'), moment()],
      'This Month': [moment().startOf('month'), moment().endOf('month')],
      'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
    },
    "alwaysShowCalendars": true,
    "startDate": "08/05/2020",
    "endDate": "08/11/2020",
    "opens": "center"
  }, function (start, end, label) {
    console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
  });

  $('[data-toggle="tooltip"]').tooltip(show);

});

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
$(document).ready(function () {
  $("#filterTags, #filterOs, #filterType, #filterHardware, #filterPorts, #filterUsers").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $(".dropdown-menu li").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });

  $('input[name="daterange"]').daterangepicker({
    opens: 'left'
  }, function (start, end, label) {
    console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
  });


  $('[data-toggle="tooltip"]').tooltip(show);

});

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
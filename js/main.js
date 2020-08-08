$(document).ready(function () {
  $("#filterTags, #filterOs, #filterType, #filterHardware, #filterPorts, #filterUsers").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $(".dropdown-menu li").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });

  // $('.datepicker').datepicker();

  $('input[name="dates"]').daterangepicker();
  $('#datepicker').daterangepicker({
    "singleDatePicker": true,
    "showDropdowns": false,
    "locale": {
      "format": "MM/DD/YYYY"
    },
    "opens": "center"
  });

  // $(function () {
  //   $('#datetimepicker4').datetimepicker();
  // });
});
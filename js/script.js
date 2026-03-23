console.log("It works!");

$("#loadBtn").on("click", function () {
  $(".wrapper").addClass("active");
});

$(".wrapper").on("click", function () {
  $(this).removeClass("active");
});

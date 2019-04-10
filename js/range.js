var range=document.querySelector(".filters-range");
var start_num = document.getElementById("lower-cost");

range.addEventListener("input", function(evt) {
    evt.preventDefault();
    start_num.value = range.value;
});

start_num.addEventListener("input", function(evt) {
    evt.preventDefault();
    range.value= start_num.value;
});
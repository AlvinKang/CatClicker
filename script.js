var counter1 = 0;
var counter2 = 0;

var catName1 = "George";
var catName2 = "Piccolo";

$('#cat-name1').text(catName1);
$('#cat-name2').text(catName2);

$('#cat-pic1').click(function() {
	counter1++;
	$('#counter1').text(counter1);
});

$('#cat-pic2').click(function() {
	counter2++;
	$('#counter2').text(counter2);
});
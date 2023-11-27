$(".Part-Two-Yes").hide();
$(".Part-Two-No").hide();
$(".Part-Three-Yes").hide();
$(".Part-Three-No").hide();
$(".Part-Four-Attack").hide();
$(".Part-Four-Tame").hide();
$(".Part-Four-Flee").hide();
$(".Part-Four-Sneak").hide();
$(".Part-Four-Attack1").hide();
$(".Part-Four-Tame1").hide();
$(".Part-Four-Shoot1").hide();
$(".Part-Four-Shoot").hide();
$(".Part-Four-Ram1").hide();
$(".Part-Four-Ram").hide();
$(".back").hide();
$(".dragon-squid").hide();
$(".attack-ending").hide();
$(".flee-ending1").hide();
$(".Part-Four-Tame2").hide();
$(".tamed").hide();
$(".tamed1").hide();
$(".tamed2").hide();
$(".seaweed-ending").hide();
$(".carcass-spot").hide();
$(".Part-Five-Yes").hide();
$(".Part-Five-No").hide();
$(".laboratory").hide();
$(".shipwrecked").hide();
$(".flee-ending2").hide();
$(".Story-Ending-Yes").hide();
$(".Story-Ending-No").hide();
$(".dead-ending").hide();
$(".flee-ending").hide();
$(".sneak-ending").hide();
$(".rejected").hide();

$(".yes-button").click(function() {
	$(".Part-Two-Yes").show();
	$(".title").hide();
    $(".firstImage").hide();
    $(".button").hide();
});

$(".no-button").click(function() {
	$(".Part-Two-No").show();
    $(".title").hide();
    $(".firstImage").hide();
    $(".button").hide();
});

$(".explore-button").click(function() {
	$(".Part-Three-Yes").show();
	$(".Part-Two-Yes").hide();
});

$(".avoid-button").click(function() {
	$(".Part-Two-Yes").hide();
    $(".Part-Four-Flee").hide();
	$(".Part-Three-No").show();
});

$(".attack-button").click(function() {
	$(".Part-Three-No").hide();
	$(".Part-Four-Attack").show();
});

$(".tame-button").click(function() {
	$(".Part-Three-No").hide();
	$(".Part-Four-Tame").show();
});

$(".attack-button1").click(function() {
    $(".Part-Three-Yes").hide();
	$(".Part-Four-Attack1").show();
});

$(".tame-button1").click(function() {
    $(".Part-Three-Yes").hide();
	$(".Part-Four-Tame1").show();
});

$(".flee-button1").click(function() {
	$(".Part-Three-Yes").hide();
	$(".Part-Four-Flee").show();
});

$(".sneak-button1").click(function() {
    $(".Part-Three-Yes").hide();
    $(".dragon-squid").hide();
	$(".Part-Four-Sneak").show();
});

$(".shoot-button").click(function() {
    $(".Part-Four-Attack").hide();
	$(".Part-Four-Shoot").show();
});

$(".shoot-button1").click(function() {
    $(".Part-Four-Attack1").hide();
	$(".Part-Four-Shoot1").show();
});

$(".back-button").click(function() {
    $(".Part-Four-Shoot").hide();
	$(".back").show();
});

$(".continue3").click(function() {
	$(".back").hide();
	$(".dragon-squid").show();
});

$(".whale-button1").click(function() {
    $(".Part-Four-Tame1").hide();
	$(".tamed1").show();
});

$(".whale-button2").click(function() {
    $(".Part-Four-Tame2").hide();
	$(".tamed2").show();
});

$(".cow-button").click(function() {
    $(".Part-Four-Tame").hide();
	$(".tamed").show();
});

$(".tame-button2").click(function() {
    $(".dragon-squid").hide();
	$(".Part-Four-Tame2").show();
});

$(".lab").click(function() {
    $(".tamed1").hide();
    $(".tamed2").hide();
    $(".carcass-spot").hide();
    $(".Part-Four-Shoot1").hide();
	$(".Part-Five-Yes").show();
});

$(".carcass").click(function() {
    $(".Part-Four-Sneak").hide();
	$(".carcass-spot").show();
});

$(".shipwreck").click(function() {
    $(".tamed").hide();
	$(".Part-Five-No").show();
});

$(".break").click(function() {
    $(".laboratory").hide();
    $(".shipwrecked").hide();
	$(".Story-Ending-No").show();
});

$(".search").click(function() {
    $(".laboratory").hide();
    $(".shipwrecked").hide();
	$(".Story-Ending-Yes").show();
});

$(".enter-button").click(function() {
    $(".Part-Five-Yes").hide();
    $(".Part-Five-No").hide();
	$(".laboratory").show();
});

$(".enter-button1").click(function() {
    $(".Part-Five-Yes").hide();
    $(".Part-Five-No").hide();
	$(".shipwrecked").show();
});


$(".continue1").click(function() {
    $(".sneak-ending").hide();
    $(".rejected").hide();
    $(".Part-Four-Shoot").hide();
    $(".Part-Four-Ram1").hide();
    $(".Part-Four-Ram").hide();
    $(".attack-ending").hide();
    $(".flee-ending1").hide();
    $(".seaweed-ending").hide();
    $(".Story-Ending-No").hide();
	$(".dead-ending").show();
});

$(".whale-button").click(function() {
    $(".Part-Four-Tame").hide();
	$(".rejected").show();
});

$(".cow-button1").click(function() {
    $(".Part-Four-Tame1").hide();
    $(".Part-Four-Tame2").hide();
	$(".rejected").show();
});

$(".flee-button").click(function() {
	$(".Part-Three-No").hide();
	$(".flee-ending").show();
});

$(".sneak-button").click(function() {
	$(".Part-Three-No").hide();
	$(".sneak-ending").show();
});

$(".ram-button1").click(function() {
    $(".Part-Four-Attack1").hide();
	$(".Part-Four-Ram1").show();
});

$(".ram-button").click(function() {
	$(".Part-Four-Attack").hide();
	$(".Part-Four-Ram").show();
});

$(".attack-button2").click(function() {
	$(".dragon-squid").hide();
	$(".attack-ending").show();
});

$(".flee-button2").click(function() {
	$(".dragon-squid").hide();
	$(".flee-ending1").show();
});

$(".seaweed").click(function() {
    $(".Part-Four-Sneak").hide();
	$(".seaweed-ending").show();
});

$(".flee-button2").click(function() {
    $(".Part-Five-Yes").hide();
    $(".Part-Five-No").hide();
	$(".flee-ending2").show();
});

$(".reset").click(function() {
    $(".Part-Two-No").hide();
    $(".flee-ending2").hide();
    $(".flee-ending").hide();
    $(".Story-Ending-Yes").hide();
	$(".dead-ending").hide();
    $(".title").show();
    $(".firstImage").show();
    $(".button").show();
});

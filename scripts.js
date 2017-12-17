$(function() {
	console.log("start");

function Button(text) {
	this.text = text || 'Ho ho ho!';
};

Button.prototype = {
	create: function() {
		var self = this;
		this.$element = $('<button>');
		this.$element.text(this.text);
		this.$element.click(function() {
			alert(self.text);
			});
		$('body').append(this.$element);
	}
};

var btn1 = new Button;
var btn2 = new Button('Merry Christmas :)');
var btn3 = new Button('And happy New Year!');

btn1.create();
btn2.create();
btn3.create();
});
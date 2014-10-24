var morselib = require('morselib');
var Morse = morselib.Morse;

/*
** Generate morse and "flash" it
*/
$.generatorButton.addEventListener('click', function(){
	var sentence = Morse.sentenceToMorse($.generatorText.value.toLowerCase());
	Morse.morseSentenceToFlash(sentence);
});

/*
** Open samples list
*/
$.samplesButton.addEventListener('click', function(){
	Alloy.createController('list').getView().open();
});

/*
** Write selected sample in textfield
*/
$.generatorWindow.addEventListener('focus', function(){
	$.generatorText.value = Ti.App.selectedText || '';
});

$.generatorWindow.open();
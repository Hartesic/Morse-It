/*
** Morse lib
*/
var Morse = {
	NappFlashLight: require('dk.napp.flashlight'),
	// Morse alphabet
	letter: {
		'a': '.-',
		'b': '-...',
		'c': '-.-.',
		'd': '-..',
		'e': '.',
		'f': '..-.',
		'g': '--.',
		'h': '....',
		'i': '..',
		'j': '.---',
		'k': '-.-',
		'l': '.-..',
		'm': '--',
		'n': '-.',
		'o': '---',
		'p': '.--.',
		'q': '--.-',
		'r': '.-.',
		's': '...',
		't': '-',
		'u': '..-',
		'v': '...-',
		'w': '.--',
		'x': '-..-',
		'y': '-.--',
		'z': '--..',
		'1': '.----',
		'2': '..---',
		'3': '...--',
		'4': '....-',
		'5': '.....',
		'6': '-....',
		'7': '--...',
		'8': '---..',
		'9': '----.',
		'0': '-----',
		' ': '|',
	},
	// Flash a "line"
	flashLine: function(){
		var time = 600;
		Morse.NappFlashLight.turnFlashLightOn();
		setTimeout(function(){Morse.NappFlashLight.turnFlashLightOff();}, time);
		return time + 200;
	},
	// Flash a "dot"
	flashDot: function(){
		var time = 200;
		Morse.NappFlashLight.turnFlashLightOn();
		setTimeout(function(){Morse.NappFlashLight.turnFlashLightOff();}, time);
		return time + 200;
	},
	// Convert given char to morse
	charToMorse: function(character){
		return Morse.letter[character];
	},
	// Convert given sentence to morse
	sentenceToMorse: function(sentence){
		var morse_sentence = '';
		for (var i = 0; i < sentence.length; i++)
			morse_sentence += /[a-z\s]/.test(sentence[i]) ? Morse.charToMorse(sentence[i]) + '|' : '';
		return morse_sentence;
	},
	// Process given morse symbol
	morseCharToFlash: function(morse){
		if (morse == '-')
			return Morse.flashLine();
		else if (morse == '.')
			return Morse.flashDot();
		else if (morse == '|')
			return 400;
	},
	// Recursivly process every morse symbol in given morse sentence
	morseSentenceToFlash: function(morse, origin){
		if (typeof origin == 'undefined')
			var origin = 0;
		var restTime = Morse.morseCharToFlash(morse[origin]);
		if (origin < morse.length)
			setTimeout(function(){Morse.morseSentenceToFlash(morse, ++origin);}, restTime);
	}
};
exports.Morse = Morse;
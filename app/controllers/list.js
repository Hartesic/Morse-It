/*
** Samples list
*/
var data = [
    {
    		title: 'SOS'
    },
    {
    		title: 'Hello World!'
    },
    {
    		title: 'Tango down!'
    }
];

$.samplesList.data = data;

/*
** Save selected sample and close samples list window
*/
$.samplesList.addEventListener('click', function(e){
	Ti.App.selectedText = data[e.index].title;
	$.listWindow.close();
});
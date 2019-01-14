/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	config.language = 'fa';
	// config.uiColor = '#AADC6E';
    config.font_defaultLabel = 'IRANSans';
    CKEDITOR.on( 'instanceReady', function( ev ) {
        ev.editor.window.$.document.body.style.fontFamily = "IRANSansWeb";
        ev.editor.window.$.document.body.style.fontSize = "13px";
        config.allowedContent = false;


    });

    config.toolbarGroups = [
		{ name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
		{ name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
		{ name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
		{ name: 'forms', groups: [ 'forms' ] },
		'/',
		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
		{ name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi', 'paragraph' ] },
		{ name: 'links', groups: [ 'links' ] },
		{ name: 'insert', groups: [ 'insert' ] },
		'/',
		{ name: 'styles', groups: [ 'styles' ] },
		{ name: 'colors', groups: [ 'colors' ] },
		{ name: 'tools', groups: [ 'tools' ] },
		{ name: 'others', groups: [ 'others' ] },
		{ name: 'about', groups: [ 'about' ] }
	];

	config.removeButtons = 'Save,Preview,NewPage,Form,Checkbox,Radio,TextField,Textarea,Select,HiddenField,CopyFormatting,RemoveFormat,Language,Anchor,Flash,Iframe,ShowBlocks,About,Scayt';
	
	
	config.contentsCss = 'assets/plugins/ckeditor/font.css';
//the next line add the new font to the combobox in CKEditor
config.font_names = 'IRANSans;' + config.font_names;



};

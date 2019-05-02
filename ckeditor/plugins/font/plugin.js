/**
 * @license Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

(function () {

    if (typeof (CKEDITOR) === "undefined") {
        return;
    }

    function addCombo(editor, comboName, styleType, lang, entries, defaultLabel, styleDefinition, order) {
        var config = editor.config,
            style = new CKEDITOR.style(styleDefinition);

        // Gets the list of fonts from the settings.
        var names = entries.split(';'),
            values = [];

        // Create style objects for all fonts.
        var styles = {};
        for (var i = 0; i < names.length; i++) {
            var parts = names[i];

            if (parts) {
                parts = parts.split('/');

                var vars = {},
                    name = names[i] = parts[0];

                vars[styleType] = values[i] = parts[1] || name;

                styles[name] = new CKEDITOR.style(styleDefinition, vars);
                styles[name]._.definition.name = name;
            } else
                names.splice(i--, 1);
        }

        editor.ui.addRichCombo(comboName, {
            label: lang.label,
            title: lang.panelTitle,
            toolbar: 'styles,' + order,
            allowedContent: style,
            requiredContent: style,

            panel: {
                css: [CKEDITOR.skin.getPath('editor')].concat(config.contentsCss),
                multiSelect: false,
                attributes: { 'aria-label': lang.panelTitle }
            },

            init: function () {
                this.startGroup(lang.panelTitle);

                for (var i = 0; i < names.length; i++) {
                    var name = names[i];

                    // Add the tag entry to the panel list.
                    this.add(name, styles[name].buildPreview(), name);
                }
            },

            onClick: function (value) {
                if (editor.config.customStyles) {
                    var range = editor.getSelection().getRanges()[0];
                    var lineElement = editor.elementPath().block;
                    if (lineElement && lineElement.$.innerText.match(/\u200B/g) && range.startOffset === 7) {
                        range.startOffset -= 7;
                        range.select();
                    }

                    editor.focus();
                    editor.fire('saveSnapshot');

                    var style = styles[value];

                    editor[this.getValue() == value ? 'removeStyle' : 'applyStyle'](style);
                    editor.fire('saveSnapshot');
                } else {
                    editor.focus();
                    editor.fire('saveSnapshot');

                    var style = styles[value];

                    editor[this.getValue() == value ? 'removeStyle' : 'applyStyle'](style);
                    editor.fire('saveSnapshot');
                }
            },

            onRender: function () {
                if (styleDefinition.styles['font-family']) {
                    editor.config.fontFamily_styles = styles;
                }
                if (styleDefinition.styles['font-size']) {
                    editor.config.fontSize_styles = styles;
                }

                editor.on('selectionChange', function (ev) {
                    var currentValue = this.getValue();

                    var elementPath = ev.data.path,
                        elements = elementPath.elements;

                    // For each element into the elements path.
                    var valueFound = false;
                    for (var i = 0, element; i < elements.length; i++) {
                        element = elements[i];

                        // Check if the element is removable by any of
                        // the styles.
                        for (var value in styles) {
                            if (styles[value].checkElementMatch(element, true, editor)) {
                                if (value != currentValue) {
                                    this.setValue(value);
                                }
                                valueFound = true;
                            }
                        }
                        if (valueFound) {
                            break;
                        }
                    }

                    //HsPro - improve selection detection
                    if (!valueFound) {
                        CKEDITOR.config.fontSelection.updateFontSelectionThrottle(editor);
                    }
                }, this);
            },

            refresh: function () {
                if (!editor.activeFilter.check(style))
                    this.setState(CKEDITOR.TRISTATE_DISABLED);
            }
        });
    }

    CKEDITOR.plugins.add('font', {
        requires: 'richcombo',
        lang: 'en,no',
        init: function (editor) {
            var config = editor.config;
            var defaultFont = config && config.customStyles && config.customStyles.p.fontFamily;
            var defaultFontSize = config && config.customStyles && config.customStyles.p.fontSize;

            addCombo(editor, 'Font', 'family', editor.lang.font, config.font_names, defaultFont, config.font_style, 30);
            addCombo(editor, 'FontSize', 'size', editor.lang.font.fontSize, config.fontSize_sizes, defaultFontSize, config.fontSize_style, 40);

            //Updated source method (to avoid blinking) in ckeditor -> plugins -> font -> plugins.js > editor.ui.addRichCombo > onRender > part:: this.setValue('', defaultLabel);
            //to call  ck.config.fontSelection.displaySelectedFontSize(ck);
            //If font starts to blink check that method is in place
            //Since ck.on("selectionChange", function (evt) only fires when changed anchor element, need to use jQuery event listening instead
            //also CKEDITOR.setData prevents attaching of events with .on function...  your code adds new listener on every setData()
            // https://stackoverflow.com/questions/16054070/ckeditor-setdata-prevents-attaching-of-events-with-on-function

            editor.on('contentDom', function (evt) {
                var editable = evt.editor.editable();
                editable.attachListener(CKEDITOR.env.ie ? editable : evt.editor.document.getDocumentElement(), 'mouseup', function () {
                    CKEDITOR.config.fontSelection.updateFontSelectionThrottle(evt.editor);
                });
            });
        }
    });

    // CKEDITOR.plugins.add('save',
    //     {
    //         init: function (editor) {
    //             editor.addCommand('save', {
    //                 modes: { wysiwyg: 1, source: 1 },
    //                 exec: function () { }
    //             });
    //             editor.ui.addButton('Save', { label: '', command: 'save' });
    //         }
    //     });


})();

/**
 * The list of fonts names to be displayed in the Font combo in the toolbar.
 * Entries are separated by semi-colons (`';'`), while it's possible to have more
 * than one font for each entry, in the HTML way (separated by comma).
 *
 * A display name may be optionally defined by prefixing the entries with the
 * name and the slash character. For example, `'Arial/Arial, Helvetica, sans-serif'`
 * will be displayed as `'Arial'` in the list, but will be outputted as
 * `'Arial, Helvetica, sans-serif'`.
 *
 *		config.font_names =
 *			'Arial/Arial, Helvetica, sans-serif;' +
 *			'Times New Roman/Times New Roman, Times, serif;' +
 *			'Verdana';
 *
 *		config.font_names = 'Arial;Times New Roman;Verdana';
 *
 * @cfg {String} [font_names=see source]
 * @member CKEDITOR.config
 */

var fonts = [
    'Arial/Arial, Helvetica, sans-serif;',
    'Comic Sans MS/Comic Sans MS, cursive;',
    'Courier New/Courier New, Courier, monospace;',
    'Georgia/Georgia, serif;',
    'Lucida Sans Unicode/Lucida Sans Unicode, Lucida Grande, sans-serif;',
    'Tahoma/Tahoma, Geneva, sans-serif;',
    'Times New Roman/Times New Roman, Times, serif;',
    'Trebuchet MS/Trebuchet MS, Helvetica, sans-serif;',
    'Verdana/Verdana, Geneva, sans-serif;'
]

if (!(/Macintosh|iPad|iPhone|iPod/.test(navigator.userAgent))) {
    fonts.push('Calibri/Calibri;')
}

CKEDITOR.config.font_names = fonts.join('');


/**
 * The text to be displayed in the Font combo is none of the available values
 * matches the current cursor position or text selection.
 *
 *		// If the default site font is Arial, we may making it more explicit to the end user.
 *		config.font_defaultLabel = 'Arial';
 *
 * @cfg {String} [font_defaultLabel='']
 * @member CKEDITOR.config
 */
CKEDITOR.config.font_defaultLabel = '';

/**
 * The style definition to be used to apply the font in the text.
 *
 *		// This is actually the default value for it.
 *		config.font_style = {
 *			element:		'span',
 *			styles:			{ 'font-family': '#(family)' },
 *			overrides:		[ { element: 'font', attributes: { 'face': null } } ]
 *     };
 *
 * @cfg {Object} [font_style=see example]
 * @member CKEDITOR.config
 */
CKEDITOR.config.font_style = {
    element: 'span',
    styles: { 'font-family': '#(family)' },
    overrides: [{
        element: 'font', attributes: { 'face': null }
    }]
};

/**
 * The list of fonts size to be displayed in the Font Size combo in the
 * toolbar. Entries are separated by semi-colons (`';'`).
 *
 * Any kind of "CSS like" size can be used, like `'12px'`, `'2.3em'`, `'130%'`,
 * `'larger'` or `'x-small'`.
 *
 * A display name may be optionally defined by prefixing the entries with the
 * name and the slash character. For example, `'Bigger Font/14px'` will be
 * displayed as `'Bigger Font'` in the list, but will be outputted as `'14px'`.
 *
 *		config.fontSize_sizes = '16/16px;24/24px;48/48px;';
 *
 *		config.fontSize_sizes = '12px;2.3em;130%;larger;x-small';
 *
 *		config.fontSize_sizes = '12 Pixels/12px;Big/2.3em;30 Percent More/130%;Bigger/larger;Very Small/x-small';
 *
 * @cfg {String} [fontSize_sizes=see source]
 * @member CKEDITOR.config
 */
CKEDITOR.config.fontSize_sizes = '8/8px;9/9px;10/10px;11/11px;12/12px;14/14px;16/16px;18/18px;20/20px;22/22px;24/24px;26/26px;28/28px;36/36px;48/48px;72/72px';

/**
 * The text to be displayed in the Font Size combo is none of the available
 * values matches the current cursor position or text selection.
 *
 *		// If the default site font size is 12px, we may making it more explicit to the end user.
 *		config.fontSize_defaultLabel = '12px';
 *
 * @cfg {String} [fontSize_defaultLabel='']
 * @member CKEDITOR.config
 */
CKEDITOR.config.fontSize_defaultLabel = '';

/**
 * The style definition to be used to apply the font size in the text.
 *
 *		// This is actually the default value for it.
 *		config.fontSize_style = {
 *			element:		'span',
 *			styles:			{ 'font-size': '#(size)' },
 *			overrides:		[ { element :'font', attributes: { 'size': null } } ]
 *		};
 *
 * @cfg {Object} [fontSize_style=see example]
 * @member CKEDITOR.config
 */
CKEDITOR.config.fontSize_style = {
    element: 'span',
    styles: { 'font-size': '#(size)' },
    overrides: [{
        element: 'font', attributes: { 'size': null }
    }]
};

/***
 * FAM-4628 CK editor - copy /paste functionality, remember font and fontsize
 * For selected text display calculated font and font-size, if no matchinf found
 * For selection range, if more than one fonts encountered, display empty menu in font drop-down
 */
CKEDITOR.config.selectedFont = {
    isSameFontFamily: true, isSameFontSize: true, isReachedEnd: false, range: null, fontFamily: null, fontSize: null, endNode: null, startNode: null,
    onlyCursor: function () {
        return this.range != null
            && this.range.startContainer.equals(this.range.endContainer)
            && this.range.startOffset == this.range.endOffset;
    },
    init: function () {
        this.isSameFontFamily = true,
            this.isSameFontSize = true,
            this.isReachedEnd = false,
            this.range = null,
            this.fontFamily = null,
            this.fontSize = null,
            this.endNode = null,
            this.startNode = null;
    },
    checkFont: function (testNode) {
        if (testNode != null && testNode.nodeType != null) {
            var testElement = testNode.nodeType == 3 ? $(testNode).parent() : $(testNode);
            var testFontFamily = this.getTopFontFromFontFamily(testElement.css("font-family"));
            var testFontSize = testElement.css("font-size");
            if (testFontFamily != this.fontFamily) {
                this.isSameFontFamily = false;
            }
            if (testFontSize != this.fontSize) {
                this.isSameFontSize = false;
            }
        }
    },
    compareFontRecursive: function (node) {
        if (node) {
            if (node.equals && node.equals(this.endNode)) { //end CKEDITOR.dom.text reached
                this.isReachedEnd = true;

                if (this.endNode) {
                    if (this.endNode.$.nodeName == "TR" || this.endNode.$.nodeName == "TD" || this.endNode.$.nodeName == "TH") {
                        var children = this.endNode.getChildren();
                        if (children != null && children.count) {
                            var childrenCount = children.count();
                            for (var i = 0; i < childrenCount; i++) {
                                var childNode = children.getItem(i);
                                this.compareFontRecursive(childNode);
                            }
                        }
                    }
                    this.checkFont(this.endNode.$);
                }
            }
            else if (node.$ && node.$.nodeType == 3) {//CKEDITOR.dom.text
                this.checkFont(node.$);
            }
            else if (node.getChildren != null) { //CKEDITOR.dom.element
                var children = node.getChildren();
                if (children != null && children.count) {
                    var childrenCount = children.count();
                    for (var i = 0; i < childrenCount; i++) {
                        var childNode = children.getItem(i);
                        this.compareFontRecursive(childNode);
                        if (this.isReachedEnd) {
                            break;
                        }
                    }
                }
            }
        }
    },
    calculateSelectedFontSizeInPoints: function () {
        var fontSizeTmp = ' ';
        if (this.isSameFontSize === true && this.fontSize != null) {
            fontSizeTmp = this.fontSize;

            //Good old IE, sometimes returns us the font sizes from font tags (eg 1,2,3,4,5) and other times the px font size
            if (CKEDITOR.env.ie && fontSizeTmp.indexOf('px') === -1) {
                //So it's a 1,2,3,4,5 in IE
                var fontSizeAsInt = parseInt(fontSizeTmp, 10);
                switch (fontSizeAsInt) {
                    case 1:
                        fontSizeTmp = 7.5;
                        break;
                    case 2:
                        fontSizeTmp = 10;
                        break;
                    case 3:
                        fontSizeTmp = 12;
                        break;
                    case 4:
                        fontSizeTmp = 13.5;
                        break;
                    case 5:
                        fontSizeTmp = 18;
                        break;
                    case 6:
                        fontSizeTmp = 24;
                        break;
                    case 7:
                        fontSizeTmp = 36;
                        break;
                    default:
                        break;
                }
            } else {
                fontSizeTmp = (parseFloat(fontSizeTmp) * 72.0 / 96.0).toFixed(0);
            }
        }
        this.fontSize = fontSizeTmp;
    },
    getTopFontFromFontFamily: function (fontFamily) {
        return fontFamily != null ? fontFamily.replace(/['"]+/g, "").split(',')[0] : ' ';
    },
    calculateSelectedFontFromFontFamily: function () {
        this.fontFamily = this.isSameFontFamily === true ?
            this.fontFamily : ' ';
    },
    checkSelection: function (editor) {
        // console.log("selected font recalculation");
        this.init();
        if (editor) {
            var selection = editor && editor.getSelection();
            if (selection && selection.getRanges().length > 0) {
                var range = selection.getRanges()[0];
                if (range && range.startContainer && range.startContainer.$) {
                    this.range = range;
                    this.startNode = range.startContainer; //CKEDITOR.dom.text
                    this.endNode = range.endContainer; //CKEDITOR.dom.text

                    var testNode = this.startNode;
                    var testElement = testNode.$.nodeType == 3 ? $(testNode.$).parent() : $(testNode.$);
                    this.fontFamily = this.getTopFontFromFontFamily(testElement.css("font-family"));
                    this.fontSize = testElement.css("font-size");

                    while (!this.isReachedEnd && testNode != null && (this.isSameFontFamily || this.isSameFontSize)) {
                        this.compareFontRecursive(testNode);
                        testNode = testNode.getNextSourceNode ? testNode.getNextSourceNode() : null; //CKEDITOR.dom.element
                    }

                    if (!this.isReachedEnd && this.endNode) {
                        this.checkFont(this.endNode.$);
                    }
                }
            }
        }
        this.calculateSelectedFontSizeInPoints();
        this.calculateSelectedFontFromFontFamily();
    }
};

CKEDITOR.config.fontSelection = {
    updateFontSelectionThrottle: _.debounce(function (editor, combo) {
        CKEDITOR.config.selectedFont.checkSelection(editor);
        CKEDITOR.config.fontSelection.updateMenuSelection(editor, combo);
    }, 50, { leading: false, trailing: true }),
    updateMenuSelection: function (editor, combo) {
        var fontMenu = editor.ui.get('Font'), //The fontMenu
            fontSizeMenu = editor.ui.get('FontSize') //the FontSize Menu

        if (fontMenu && fontSizeMenu) {
            var selectedFont = CKEDITOR.config.selectedFont;

            this.updateFontFamily(selectedFont, editor, fontMenu);
            this.updateFontSize(selectedFont, editor, fontSizeMenu);
        }
    },
    updateFontSize: function (selectedFont, editor, fontSizeMenu) {
        // var fontSizeMenuValue = fontSizeMenu.getValue();
        if (selectedFont) {
            this.setRichCombo(editor, fontSizeMenu, selectedFont.fontSize);
        }
    },
    updateFontFamily: function (selectedFont, editor, fontMenu) {
        // var fontMenuValue = fontMenu.getValue();
        if (selectedFont) {
            this.setRichCombo(editor, fontMenu, selectedFont.fontFamily);
        }
    },
    setRichCombo: function (editor, combo, value) {
        var matched = false;
        if (combo && combo._ && combo._.items) {
            //The fun part about this is the list may not exist yet
            if ($.isEmptyObject(combo._.items)) {
                //So it's not present yet!
                combo.createPanel(editor); //This creates it!
            }

            if (value != null && value != "") {
                //Okay so items is now our list, get our value and go through it
                //Loop the object and see if we have a match on any keys
                var valueTest = value;
                if (combo.name === "font") {
                    var valueTest = value.toLowerCase();
                }
                else if (combo.name === "fontsize") {
                    if (typeof value === "number") {
                        valueTest = value.toString();
                    }
                    else {
                        valueTest = value.toLowerCase();
                    }
                }

                $.each(combo._.items, function (index, v) {
                    if (v.toLowerCase() === valueTest) {
                        matched = true;
                        value = v;
                        return false;
                    }
                });
            }

            //If we match it we set it, else we set it's display with nothing selected!
            if (matched) {
                combo.setValue(value);
            }
            else {
                combo.setValue('', value);
            }
        }
    }
};

/*
 * Base64Image Plugin for CKEditor (http://github.com/nmmf/base64image)
 * Created by ALL-INKL.COM - Neue Medien M�nnich - 04. Feb 2014
 * Licensed under the terms of GPL, LGPL and MPL licenses.
 */
(function () {
    if (typeof (CKEDITOR) === "undefined") {
        return;
    }

    CKEDITOR.plugins.add("base64image", {
        lang: ["en", "no"],
        requires: "dialog",
        hidpi: false,
        init: function (editor) {
            var pluginName = 'base64imageDialog';

            editor.ui.addButton("base64image", {
                label: editor.lang.common.image,
                command: pluginName,
                icon: "plugins/base64image/base64image.png",
                toolbar: "insert"
            });
            CKEDITOR.dialog.add(pluginName, this.path + "dialogs/base64image.js");

            var allowed = 'img[alt,!src]{border-style,border-width,float,height,margin,margin-bottom,margin-left,margin-right,margin-top,width}',
                required = 'img[alt,src]';

            editor.addCommand(pluginName, new CKEDITOR.dialogCommand(pluginName, {
                allowedContent: allowed,
                requiredContent: required,
                contentTransformations: [
                    ['img{width}: sizeToStyle', 'img[width]: sizeToAttribute'],
                    ['img{float}: alignmentToStyle', 'img[align]: alignmentToAttribute']
                ]
            }));
            editor.on("doubleclick", function (evt) {
                if (evt.data.element && !evt.data.element.isReadOnly() && evt.data.element.getName() === "img") {
                    evt.data.dialog = pluginName;
                    editor.getSelection().selectElement(evt.data.element);
                }
            });
            if (editor.addMenuItem) {
                editor.addMenuGroup("base64imageGroup");
                editor.addMenuItem("base64imageItem", {
                    label: editor.lang.common.image,
                    icon: "/Public/old/bundle/images/base64image.png",
                    command: pluginName,
                    group: "base64imageGroup"
                });
            }
            if (editor.contextMenu) {
                editor.contextMenu.addListener(function (element, selection) {
                    if (element && element.getName() === "img") {
                        editor.getSelection().selectElement(element);
                        return { base64imageItem: CKEDITOR.TRISTATE_ON };
                    }
                    return null;
                });
            }
        }
    });
})();

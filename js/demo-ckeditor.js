/// <reference types="jquery" />
/// <reference types="ckeditor" />
var MAX_EDITORS = 4;
(function ($) {
    function warn() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.warn.apply(console, args);
    }
    var EditorState = /** @class */ (function () {
        function EditorState(e) {
            this.editor = e;
            this.checkedUsers = {};
        }
        return EditorState;
    }());
    var EDITOR_OPTIONS = {
        width: "100%",
        height: "20%",
        extraPlugins: "flite",
        removePlugins: "registered,pagebreakCmd,pagebreak,indentblock,indent,indentlist,list,pastefromword,flash,showblocks,specialchar,colordialog,div,divarea,templates",
        toolbarGroups: [
            { name: 'document', groups: ['mode', 'document', 'doctools'] },
            { name: 'clipboard', groups: ['clipboard', 'undo'] },
            { name: 'editing', groups: ['find', 'selection', 'spellchecker'] },
            { name: 'forms' },
            '/',
            { name: 'basicstyles', groups: ['basicstyles', 'cleanup'] },
            { name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi'] },
            { name: 'links' },
            { name: 'insert' },
            '/',
            { name: 'styles' },
            { name: 'colors' },
            { name: 'tools' },
            { name: "flite" },
            { name: 'others' },
            { name: 'about' }
        ],
        flite: {
            // set to false if you want change tracking to be off initially
            isTracking: true,
            userStyles: {
                "21": 3,
                "15": 1,
                "18": 2
            },
            // these are the default tooltip values. If you want to use this default configuration, just set flite.tooltips = true;
            tooltips: {
                show: true,
                cssPath: "css/opentip.css",
                delay: 500
            },
            tooltipTemplate: "%a by %u, first edit %t, last edit %T"
        },
        enterMode: CKEDITOR.ENTER_BR,
        autoParagraph: false,
        title: false
    };
    var users = [
        { name: "Fred", id: "18", image: "avatars/fred.png" },
        { name: "Mary", id: "17", image: "avatars/mary.png" },
        { name: "David", id: "15", image: "avatars/david.png" },
        { name: "Syd", id: "21", image: "avatars/syd.png" }
    ];
    var testData = "'<p>Aug 11 2013</p>\n\t\t<p><span class=\"ice-ins ice-cts-1\" data-flite-cid=\"2\" data-time=\"1376218678796\" data-userid=\"15\" data-username=\"David\" >Added by David</span>, then \n\t\t<span class=\"ice-ins ice-cts-2\" data-flite-cid=\"11\" data-time=\"1376218687062\" data-userid=\"18\" data-username=\"Fred\" >added by Fred</span>, \n\t\tsubsequently <span class=\"ice-del ice-cts-3\" data-flite-cid=\"3\" data-time=\"1376243289388\" data-userid=\"21\" data-username=\"Syd\" >deleted by Syd</span>, \n\t\tthen <span class=\"ice-ins ice-cts-3\" data-flite-cid=\"19\" data-time=\"1376218693458\" data-userid=\"21\" data-username=\"Syd\" >added by Syd</span> \n\t\tusing the <b>Track Changes CKEditor Plugin</b>.</p>\n\t\t<p>Aug 11 2000</p>\n\t\t<p><span class=\"ice-ins ice-cts-1\" data-flite-cid=\"21\" data-time=\"966006011847\" data-userid=\"15\" data-username=\"David\" >Added by David</span>, \n\t\tthen <span class=\"ice-ins ice-cts-2\" data-flite-cid=\"111\" data-time=\"966006011847\" data-userid=\"18\" data-username=\"Fred\" >added by Fred</span>, \n\t\tsubsequently <span class=\"ice-del ice-cts-3\" data-flite-cid=\"113\" data-time=\"966006011847\" data-userid=\"21\" data-username=\"Syd\" >deleted by Syd</span>, \n\t\tthen <span class=\"ice-ins ice-cts-3\" data-flite-cid=\"119\" data-time=\"966006011847\" data-userid=\"21\" data-username=\"Syd\" >added by Syd</span> using the <b>Track Changes CKEditor Plugin</b>.</p>'";
    var ckeditorConfigUrl = "../ckeditor-conf.js";
    var Demo = /** @class */ (function () {
        function Demo() {
            this.editorStates = {};
            this.nextEditorId = 1;
            this.editorId = null;
        }
        Demo.prototype.init = function () {
            var _this = this;
            var user, name, html = "", h = "";
            for (var i = 0, len = users.length; i < len; ++i) {
                user = users[i];
                name = "user-" + i;
                h = '<input type="checkbox" class="user-cb" id="' + name + '" name="' + name + '" data-userid="' + user.id + '" /><label for="' + name + '">' + user.name + '</label>';
                html += h;
            }
            this.$select = $("#users-select");
            $("#user-filters").html(html);
            $(".ckeditor-version-name").html(CKEDITOR.version);
            CKEDITOR.timestamp = 0x8999;
            $(".ckeditor-version").html(CKEDITOR.version);
            // Create users dropdown menu
            (function () {
                var select = _this.$select[0];
                $.each(users, function (i, user) {
                    var option = new Option(user.name, String(user.id));
                    select.options[i] = option;
                });
                _this.$select.change(_this.onUserChanged.bind(_this));
                _this.addEditor();
            })();
            $("#add-editor").click(function (event) {
                event.preventDefault();
                _this.addEditor();
            });
            $("#test-data").click(function (event) {
                event.preventDefault();
                var state = _this.editorStates[_this.editorId];
                if (state) {
                    state.editor.setData(testData);
                }
                return false;
            });
            $("#reject-match").click(function (event) {
                event.preventDefault();
                var state = _this.editorStates[_this.editorId];
                if (state) {
                    var checked = _this.getCheckedUsers(), flite = state.editor.plugins.flite;
                    flite.findPlugin(state.editor).rejectAll({ include: checked });
                }
                return false;
            });
            $("#reject-non-match").click(function (event) {
                event.preventDefault();
                var state = _this.editorStates[_this.editorId];
                if (state) {
                    var checked = _this.getCheckedUsers(), flite = state.editor.plugins.flite;
                    flite.findPlugin(state.editor).rejectAll({ exclude: checked });
                }
                return false;
            });
            $("#accept-match").click(function (event) {
                event.preventDefault();
                var state = _this.editorStates[_this.editorId];
                if (state) {
                    var checked = _this.getCheckedUsers(), flite = state.editor.plugins.flite;
                    flite.findPlugin(state.editor).acceptAll({ include: checked });
                }
                return false;
            });
            $("#accept-non-match").click(function (event) {
                event.preventDefault();
                var state = _this.editorStates[_this.editorId];
                if (state) {
                    var checked = _this.getCheckedUsers(), flite = state.editor.plugins.flite;
                    flite.findPlugin(state.editor).acceptAll({ exclude: checked });
                }
                return false;
            });
        };
        Demo.prototype.addEditor = function () {
            if (this.countEditors() >= MAX_EDITORS) {
                warn("Max number of editors reached");
                return;
            }
            var tmpl = jQuery(".editor-tmpl").clone(false), id = "editor-" + this.nextEditorId++;
            tmpl.removeClass("editor-tmpl").addClass("editor-tab");
            tmpl.find("textarea").attr({
                id: id,
                name: id
            });
            jQuery(".editor-tabs").prepend(tmpl);
            this.loadEditor(id, true);
        };
        Demo.prototype.loadEditor = function (id, focus) {
            var _this = this;
            var state = this.editorStates[id], $add = $("#add-editor"), nEditors = this.countEditors() + 1;
            if (state) {
                $('#' + id).val("This editor was <strong>reloaded</strong>");
            }
            jQuery(".editor-container").attr("data-num-editors", nEditors);
            var editor = CKEDITOR.replace(id, EDITOR_OPTIONS);
            if (nEditors >= MAX_EDITORS) {
                $add.attr({
                    "disabled": "disabled",
                    title: "We hope 4 editors are enough to convince you that our plugin works with multiple instances of CKEditor."
                });
            }
            else if ($add.length) {
                $add[0].removeAttribute("disabled");
                $add.attr("title", "Add more CKEditor instances to the page");
            }
            editor.on("loaded", function () {
                var availHeight = $(".editor-tabs").height(), editorHeight = Math.round(availHeight / (nEditors));
                _this.editorStates[id] = new EditorState(editor);
                Object.keys(_this.editorStates).forEach(function (key) {
                    var state = _this.editorStates[key];
                    if (state) {
                        state.editor.resize("100%", editorHeight, false);
                    }
                });
            });
            editor.on("focus", function () {
                _this.onEditorSelected(id);
            });
            editor.on(FLITE.Events.SHOW_HIDE, function (event) {
                var show = event.data.show;
                //			this.$sidebar.find("#show-status").text(show ? "Shown" : "Hidden").toggleClass("on", show);
            });
            // called each time a new instance of an FLITE tracker is created
            editor.on(FLITE.Events.INIT, function (event) {
                var flite = event.data.flite;
                flite.toggleShow(true);
                $(".flite-version").html(flite.version);
            });
            if (focus) {
                editor.on(FLITE.Events.INIT, function (event) {
                    _this.onEditorSelected(id);
                });
                editor.on("loaded", function (e) {
                    _this.onEditorSelected(id);
                });
            }
        };
        Demo.prototype.onEditorSelected = function (id) {
            var state = this.editorStates[this.editorId];
            if (state) {
                var checks = this.getCheckedUsers();
                var c = {};
                checks.forEach(function (e) {
                    c[e] = true;
                });
                state.checkedUsers = c;
                this.findEditorTab(this.editorId).removeClass("is-selected");
            }
            state = this.editorStates[id];
            if (!state) {
                return;
            }
            this.editorId = id;
            this.selectUser(state.userId || users[0].id, true);
            this.setCheckedUsers(state.checkedUsers);
            this.findEditorTab(this.editorId).addClass("is-selected");
            state.editor.focus();
        };
        Demo.prototype.onUserChanged = function (event) {
            var target = event.currentTarget, id = $(target).val();
            this.selectUser(id, false);
            var state = this.editorStates[this.editorId];
            state && state.editor.focus();
        };
        Demo.prototype.selectUser = function (id, inUI) {
            if (inUI === true) {
                return this.$select.val(id).change();
            }
            var i;
            for (i = 0; i < users.length; ++i) {
                if (String(users[i].id) === id) {
                    break;
                }
            }
            var user = users[i];
            var state = this.editorStates[this.editorId];
            if (user && state) {
                state.userId = id;
                var flite = state.editor.plugins.flite;
                flite && flite.findPlugin(state.editor).setUserInfo(user);
                $("#user-picture").attr("src", user.image);
            }
        };
        Demo.prototype.findEditorTab = function (id) {
            return jQuery('#' + id).parent(".editor-tab");
        };
        Demo.prototype.getCheckedUsers = function () {
            var checks = $("#user-filters input:checked"), checked = [];
            checks.each(function (i, e) {
                checked.push(e.getAttribute("data-userid"));
            });
            return checked;
        };
        Demo.prototype.setCheckedUsers = function (checked) {
            var $checks = $("#user-filters input[type=checkbox]");
            checked = checked || {};
            $checks.each(function (i, e) {
                var $e = $(e), id = $e.attr("data-userid");
                $e.prop("checked", id in checked);
            });
        };
        Demo.prototype.countEditors = function () {
            return Object.keys(this.editorStates).filter(function (key) { return key.indexOf("editor-") === 0; }).length;
        };
        return Demo;
    }());
    var demo;
    if (typeof (jQuery) == "undefined" || typeof (CKEDITOR) == "undefined") {
        alert("To run this demo, please install ckeditor in a folder called ckeditor next to the demo file, then install the FLITE plugin as described in the documentation. Thanks.");
    }
    else {
        $(function () {
            demo = new Demo();
            demo.init();
        });
    }
}(jQuery));
//# sourceMappingURL=demo-ckeditor.js.map
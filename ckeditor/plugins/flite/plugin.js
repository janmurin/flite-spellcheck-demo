/*!
 * Source version: FLITE_VERSION 
 * Copyright (C) 2018 LoopIndex - All Rights Reserved
 * You may use, distribute and modify this code under the
 * terms of the LoopIndex Comments CKEditor plugin license.
 * Attributions
 *
 * Rangy library:
 * Copyright 2018, Tim Down
 * https://github.com/timdown/rangy
 * license: MIT
 *
 * jQuery
 * Copyright JS Foundation and other contributors, https://js.foundation/
 * https://github.com/jquery/jquery
 * license: MIT
 *
 * Opentip adapter
 * Copyright (c) 2018, Matias Meno  
 * http://www.opentip.org
 * license: MIT
 *
 * Mutation summary
 * Copyright (c) 2018 Rafael Weinstein
 * https://github.com/rafaelw/mutation-summary
 * license: Apache 
 * 
 * Popper.js
 * Copyright © 2016 Federico Zivolo and contributors

 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the “Software”),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE
 * AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 * 
 * tippy.js
 * Copyright (c) 2017 atomiks
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 *
 * ice code:
 * inspired by work by Matthew DeLambo, The New York Times, CMS Group
 * https://github.com/NYTimes/ice
 *
 * You should have received a copy of the LoopIndex FLITE CKEditor plugin license with
 * this file. If not, please write to: contact@loopindex.com, or visit http://www.loopindex.com
 *
 * written by (David *)Frenkiel (https://github.com/imdfl) 
 *
 * LICENSES
 * 
 * The MIT License (MIT)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * Apache license: see http://www.apache.org/licenses/
 */
!function(e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var i = t[r] = { i: r, l: !1, exports: {} };
        return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
    }

    n.m = e, n.c = t, n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var i in e) n.d(r, i, function(t) {
            return e[t];
        }.bind(null, i));
        return r;
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default;
        } : function() {
            return e;
        };
        return n.d(t, "a", t), t;
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
    }, n.p = "", n(n.s = 0);
}([function(e, t) {
    !function() {
        "use strict";
        !function(e, t) {
            e.FLITE = t.extend(e.FLITE || {}, {
                Logger: function() {
                    var e = { log: !1, debug: !1, warn: !1, error: !1, trace: !1 };
                    return {
                        _logs: [], config: function(n) {
                            t.extend(e, n);
                        }, ignore: function() {
                        }, log: function() {
                            e.log && this._log("log", Array.prototype.slice.call(arguments));
                        }, error: function() {
                            e.error && this._log("error", Array.prototype.slice.call(arguments));
                        }, debug: function() {
                            e.debug && this._log("log", Array.prototype.slice.call(arguments));
                        }, trace: function() {
                            if (e.trace) {
                                var t = Error().stack, n = t ? [t.replace("Error", "Debug:"), "\n"] : [];
                                this._log("log", n.concat(Array.prototype.slice.call(arguments)));
                            }
                        }, warn: function() {
                            this._log("warn", Array.prototype.slice.call(arguments));
                        }, _log: function(e, t) {
                            var n = new Date, r = [n.getMinutes(), n.getSeconds(), n.getMilliseconds()].join(":");
                            t.unshift(r + ">"), this._logs.push({ method: e, logs: t }), this.scheduleDump();
                        }, dump: function() {
                            var e = this._logs;
                            this._logs = [], e.forEach(function(e) {
                                console[e.method].apply(console, e.logs);
                            });
                        }, timeout: null, scheduleDump: function() {
                            this.timeout || (this.timeout = setTimeout(function() {
                                this.timeout = null, this.dump();
                            }.bind(this), 100));
                        }
                    };
                }()
            }), e.exports = e.exports || {};
        }(window || this, window.jQuery), function(e, t) {
            t || console.error("rangy: root is undefined"), t.rangy = e(t), t.Logger.scheduleDump();
        }(function(e) {
            var t = "object", n = "function", r = "undefined",
                i = ["startContainer", "startOffset", "endContainer", "endOffset", "collapsed", "commonAncestorContainer"],
                o = ["setStart", "setStartBefore", "setStartAfter", "setEnd", "setEndBefore", "setEndAfter", "collapse", "selectNode", "selectNodeContents", "compareBoundaryPoints", "deleteContents", "extractContents", "cloneContents", "insertNode", "surroundContents", "cloneRange", "toString", "detach"],
                a = ["boundingHeight", "boundingLeft", "boundingTop", "boundingWidth", "htmlText", "text"],
                s = ["collapse", "compareEndPoints", "duplicate", "moveToElementText", "parentElement", "select", "setEndPoint", "getBoundingClientRect"];

            function l(e, r) {
                var i = typeof e[r];
                return i == n || !(i != t || !e[r]) || "unknown" == i;
            }

            function d(e, n) {
                return !(typeof e[n] != t || !e[n]);
            }

            function c(e, t) {
                return typeof e[t] != r;
            }

            function u(e) {
                return function(t, n) {
                    for (var r = n.length; r--;) if (!e(t, n[r])) return !1;
                    return !0;
                };
            }

            var p = u(l), h = u(d), f = u(c);

            function g(e) {
                return e && p(e, s) && f(e, a);
            }

            function m(e) {
                return d(e, "body") ? e.body : e.getElementsByTagName("body")[0];
            }

            var v, y, _ = {}, N = typeof window != r && typeof document != r, b = {
                isHostMethod: l,
                isHostObject: d,
                isHostProperty: c,
                areHostMethods: p,
                areHostObjects: h,
                areHostProperties: f,
                isTextRange: g,
                getBody: m,
                forEach: [].forEach ? function(e, t) {
                    e.forEach(t);
                } : function(e, t) {
                    for (var n = 0, r = e.length; n < r; ++n) t(e[n], n);
                }
            }, C = {
                version: "1.3.0",
                initialized: !1,
                isBrowser: N,
                supported: !0,
                util: b,
                features: {},
                modules: _,
                config: {
                    alertOnFail: !1,
                    alertOnWarn: !1,
                    preferTextRange: !1,
                    autoInitialize: typeof rangyAutoInitialize == r || rangyAutoInitialize
                }
            };

            function T(e) {
                typeof console != r && l(console, "log") && console.log(e);
            }

            function E(e, t) {
                N && t ? alert(e) : T(e);
            }

            function S(t) {
                e.Logger.log("rangy module fail", t), C.initialized = !0, C.supported = !1, E("Rangy is not supported in this environment. Reason: " + t, C.config.alertOnFail);
            }

            C.fail = S, C.warn = function(e) {
                E("Rangy warning: " + e, C.config.alertOnWarn);
            }, {}.hasOwnProperty ? (b.extend = v = function(e, t, n) {
                var r, i;
                for (var o in t) t.hasOwnProperty(o) && (r = e[o], i = t[o], n && null !== r && "object" == typeof r && null !== i && "object" == typeof i && v(r, i, !0), e[o] = i);
                return t.hasOwnProperty("toString") && (e.toString = t.toString), e;
            }, b.createOptions = function(e, t) {
                var n = {};
                return v(n, t), e && v(n, e), n;
            }) : S("hasOwnProperty not supported"), N || S("Rangy can only run in a browser"), function() {
                var e;
                if (N) {
                    var t = document.createElement("div");
                    t.appendChild(document.createElement("span"));
                    var n = [].slice;
                    try {
                        1 == n.call(t.childNodes, 0)[0].nodeType && (e = function(e) {
                            return n.call(e, 0);
                        });
                    } catch (e) {
                    }
                }
                e || (e = function(e) {
                    for (var t = [], n = 0, r = e.length; n < r; ++n) t[n] = e[n];
                    return t;
                }), b.toArray = e;
            }(), N && (l(document, "addEventListener") ? y = function(e, t, n) {
                e.addEventListener(t, n, !1);
            } : l(document, "attachEvent") ? y = function(e, t, n) {
                e.attachEvent("on" + t, n);
            } : S("Document does not have required addEventListener or attachEvent method"), b.addListener = y);
            var O = [];

            function k(e) {
                return e.message || e.description || String(e);
            }

            function x() {
                if (N && !C.initialized) {
                    var e, t = !1, n = !1;
                    l(document, "createRange") && (e = document.createRange(), p(e, o) && f(e, i) && (t = !0));
                    var r = m(document);
                    if (r && "body" == r.nodeName.toLowerCase()) if (r && l(r, "createTextRange") && g(e = r.createTextRange()) && (n = !0), t || n) {
                        var a;
                        for (var s in C.initialized = !0, C.features = {
                            implementsDomRange: t,
                            implementsTextRange: n
                        }, _) (a = _[s]) instanceof I && a.init(a, C);
                        for (var d = 0, c = O.length; d < c; ++d) try {
                            O[d](C);
                        } catch (e) {
                            T("Rangy init listener threw an exception. Continuing. Detail: " + k(e));
                        }
                    } else S("Neither Range nor TextRange are available"); else S("No body element found");
                }
            }

            function w(e, t, n) {
                n && (e += " in module " + n.name), C.warn("DEPRECATED: " + e + " is deprecated. Please use " + t + " instead.");
            }

            function R(e, t, n, r) {
                e[t] = function() {
                    return w(t, n, r), e[n].apply(e, b.toArray(arguments));
                };
            }

            b.deprecationNotice = w, b.createAliasForDeprecatedMethod = R, C.init = x, C.addInitListener = function(e) {
                C.initialized ? e(C) : O.push(e);
            };
            var D = [];

            function I(e, t, n) {
                this.name = e, this.dependencies = t, this.initialized = !1, this.supported = !1, this.initializer = n;
            }

            function A(e, t, n) {
                var r = new I(e, t, function(t) {
                    if (!0 !== t.initialized) try {
                        n(C, t), t.supported = !0;
                    } catch (t) {
                        T("Module '" + e + "' failed to load: " + k(t)), t.stack && T(t.stack);
                    }
                });
                return _[e] = r, r;
            }

            function L() {
            }

            C.addShimListener = function(e) {
                D.push(e);
            }, N && (C.shim = C.createMissingNativeApi = function(e) {
                e = e || window, x();
                for (var t = 0, n = D.length; t < n; ++t) D[t](e);
            }, R(C, "createMissingNativeApi", "shim")), I.prototype = {
                init: function() {
                    for (var e, t, n = this.dependencies || [], r = 0, i = n.length; r < i; ++r) {
                        if (t = n[r], !((e = _[t]) && e instanceof I)) throw new Error("required module '" + t + "' not found");
                        if (e.init(), !e.supported) throw new Error("required module '" + t + "' not supported");
                    }
                    this.initializer(this), this.initialized = !0;
                }, fail: function(e) {
                    throw this.initialized = !0, this.supported = !1, new Error(e);
                }, warn: function(e) {
                    C.warn("Module " + this.name + ": " + e);
                }, deprecationNotice: function(e, t) {
                    C.warn("DEPRECATED: " + e + " in module " + this.name + " is deprecated. Please use " + t + " instead");
                }, createError: function(e) {
                    return new Error("Error in Rangy " + this.name + " module: " + e);
                }
            }, C.createModule = function(e) {
                var t, n;
                2 === arguments.length ? (t = arguments[1], n = []) : (t = arguments[2], n = arguments[1]);
                var r = A(e, n, t);
                C.initialized && C.supported && r.init();
            }, C.createCoreModule = function(e, t, n) {
                A(e, t, n);
            }, C.RangePrototype = L, C.rangePrototype = new L, C.selectionPrototype = new function() {
            }, C.createCoreModule("DomUtil", [], function(e, t) {
                var n = "undefined", r = e.util, i = r.getBody;
                r.areHostMethods(document, ["createDocumentFragment", "createElement", "createTextNode"]) || t.fail("document missing a Node creation method"), r.isHostMethod(document, "getElementsByTagName") || t.fail("document missing getElementsByTagName method");
                var o = document.createElement("div");
                r.areHostMethods(o, ["insertBefore", "appendChild", "cloneNode"] || !r.areHostObjects(o, ["previousSibling", "nextSibling", "childNodes", "parentNode"])) || t.fail("Incomplete Element implementation"), r.isHostProperty(o, "innerHTML") || t.fail("Element is missing innerHTML property");
                var a = document.createTextNode("test");
                r.areHostMethods(a, ["splitText", "deleteData", "insertData", "appendData", "cloneNode"] || !r.areHostObjects(o, ["previousSibling", "nextSibling", "childNodes", "parentNode"]) || !r.areHostProperties(a, ["data"])) || t.fail("Incomplete Text Node implementation");
                var s = function(e, t) {
                    for (var n = e.length; n--;) if (e[n] === t) return !0;
                    return !1;
                };

                function l(e) {
                    for (var t = 0; e = e.previousSibling;) ++t;
                    return t;
                }

                function d(e, t) {
                    var n, r = [];
                    for (n = e; n; n = n.parentNode) r.push(n);
                    for (n = t; n; n = n.parentNode) if (s(r, n)) return n;
                    return null;
                }

                function c(e, t, n) {
                    for (var r = n ? t : t.parentNode; r;) {
                        if (r === e) return !0;
                        r = r.parentNode;
                    }
                    return !1;
                }

                function u(e, t, n) {
                    for (var r, i = n ? e : e.parentNode; i;) {
                        if ((r = i.parentNode) === t) return i;
                        i = r;
                    }
                    return null;
                }

                function p(e) {
                    var t = e.nodeType;
                    return 3 == t || 4 == t || 8 == t;
                }

                function h(e, t) {
                    var n = t.nextSibling, r = t.parentNode;
                    return n ? r.insertBefore(e, n) : r.appendChild(e), e;
                }

                function f(e) {
                    if (9 == e.nodeType) return e;
                    if (typeof e.ownerDocument != n) return e.ownerDocument;
                    if (typeof e.document != n) return e.document;
                    if (e.parentNode) return f(e.parentNode);
                    throw t.createError("getDocument: no document found for node");
                }

                function g(e) {
                    var r = f(e);
                    if (typeof r.defaultView != n) return r.defaultView;
                    if (typeof r.parentWindow != n) return r.parentWindow;
                    throw t.createError("Cannot get a window object for node");
                }

                function m(e) {
                    if (typeof e.contentDocument != n) return e.contentDocument;
                    if (typeof e.contentWindow != n) return e.contentWindow.document;
                    throw t.createError("getIframeDocument: No Document object found for iframe element");
                }

                function v(e) {
                    return e && r.isHostMethod(e, "setTimeout") && r.isHostObject(e, "document");
                }

                var y, _ = !1;

                function N(e) {
                    try {
                        return e.parentNode, !1;
                    } catch (e) {
                        return !0;
                    }
                }

                function b(e) {
                    if (!e) return "[No node]";
                    if (_ && N(e)) return "[Broken node]";
                    if (p(e)) return "\"" + e.data + "\"";
                    if (1 == e.nodeType) {
                        var t = e.id ? " id=\"" + e.id + "\"" : "";
                        return "<" + e.nodeName + t + ">[index:" + l(e) + ",length:" + e.childNodes.length + "][" + (e.innerHTML || "[innerHTML not supported]").slice(0, 25) + "]";
                    }
                    return e.nodeName;
                }

                function C(e) {
                    this.root = e, this._next = e;
                }

                function T(e, t) {
                    this.node = e, this.offset = t;
                }

                function E(e) {
                    this.code = this[e], this.codeName = e, this.message = "DOMException: " + this.codeName;
                }

                !function() {
                    var t = document.createElement("b");
                    t.innerHTML = "1";
                    var n = t.firstChild;
                    t.innerHTML = "<br />", _ = N(n), e.features.crashyTextNodes = _;
                }(), typeof window.getComputedStyle != n ? y = function(e, t) {
                    return g(e).getComputedStyle(e, null)[t];
                } : typeof document.documentElement.currentStyle != n ? y = function(e, t) {
                    return e.currentStyle ? e.currentStyle[t] : "";
                } : t.fail("No means of obtaining computed style properties found"), C.prototype = {
                    _current: null,
                    hasNext: function() {
                        return !!this._next;
                    },
                    next: function() {
                        var e, t, n = this._current = this._next;
                        if (this._current) if (e = n.firstChild) this._next = e; else {
                            for (t = null; n !== this.root && !(t = n.nextSibling);) n = n.parentNode;
                            this._next = t;
                        }
                        return this._current;
                    },
                    detach: function() {
                        this._current = this._next = this.root = null;
                    }
                }, T.prototype = {
                    equals: function(e) {
                        return !!e && this.node === e.node && this.offset == e.offset;
                    }, inspect: function() {
                        return "[DomPosition(" + b(this.node) + ":" + this.offset + ")]";
                    }, toString: function() {
                        return this.inspect();
                    }
                }, E.prototype = {
                    INDEX_SIZE_ERR: 1,
                    HIERARCHY_REQUEST_ERR: 3,
                    WRONG_DOCUMENT_ERR: 4,
                    NO_MODIFICATION_ALLOWED_ERR: 7,
                    NOT_FOUND_ERR: 8,
                    NOT_SUPPORTED_ERR: 9,
                    INVALID_STATE_ERR: 11,
                    INVALID_NODE_TYPE_ERR: 24
                }, E.prototype.toString = function() {
                    return this.message;
                }, e.dom = {
                    arrayContains: s,
                    isHtmlNamespace: function(e) {
                        var t;
                        return typeof e.namespaceURI == n || null === (t = e.namespaceURI) || "http://www.w3.org/1999/xhtml" == t;
                    },
                    parentElement: function(e) {
                        var t = e.parentNode;
                        return 1 == t.nodeType ? t : null;
                    },
                    getNodeIndex: l,
                    getNodeLength: function(e) {
                        switch (e.nodeType) {
                            case 7:
                            case 10:
                                return 0;
                            case 3:
                            case 8:
                                return e.length;
                            default:
                                return e.childNodes.length;
                        }
                    },
                    getCommonAncestor: d,
                    isAncestorOf: c,
                    isOrIsAncestorOf: function(e, t) {
                        return c(e, t, !0);
                    },
                    getClosestAncestorIn: u,
                    isCharacterDataNode: p,
                    isTextOrCommentNode: function(e) {
                        if (!e) return !1;
                        var t = e.nodeType;
                        return 3 == t || 8 == t;
                    },
                    insertAfter: h,
                    splitDataNode: function(e, t, n) {
                        var r = e.cloneNode(!1);
                        if (r.deleteData(0, t), e.deleteData(t, e.length - t), h(r, e), n) for (var i, o = 0; i = n[o++];) i.node == e && i.offset > t ? (i.node = r, i.offset -= t) : i.node == e.parentNode && i.offset > l(e) && ++i.offset;
                        return r;
                    },
                    getDocument: f,
                    getWindow: g,
                    getIframeWindow: function(e) {
                        if (typeof e.contentWindow != n) return e.contentWindow;
                        if (typeof e.contentDocument != n) return e.contentDocument.defaultView;
                        throw t.createError("getIframeWindow: No Window object found for iframe element");
                    },
                    getIframeDocument: m,
                    getBody: i,
                    isWindow: v,
                    getContentDocument: function(e, t, n) {
                        var i;
                        if (e ? r.isHostProperty(e, "nodeType") ? i = 1 == e.nodeType && "iframe" == e.tagName.toLowerCase() ? m(e) : f(e) : v(e) && (i = e.document) : i = document, !i) throw t.createError(n + "(): Parameter must be a Window object or DOM node");
                        return i;
                    },
                    getRootContainer: function(e) {
                        for (var t; t = e.parentNode;) e = t;
                        return e;
                    },
                    comparePoints: function(e, n, r, i) {
                        var o, a, s, c, p;
                        if (e == r) return n === i ? 0 : n < i ? -1 : 1;
                        if (o = u(r, e, !0)) return n <= l(o) ? -1 : 1;
                        if (o = u(e, r, !0)) return l(o) < i ? -1 : 1;
                        if (!(a = d(e, r))) throw new Error("comparePoints error: nodes have no common ancestor");
                        if ((s = e === a ? a : u(e, a, !0)) === (c = r === a ? a : u(r, a, !0))) throw t.createError("comparePoints got to case 4 and childA and childB are the same!");
                        for (p = a.firstChild; p;) {
                            if (p === s) return -1;
                            if (p === c) return 1;
                            p = p.nextSibling;
                        }
                    },
                    isBrokenNode: N,
                    inspectNode: b,
                    getComputedStyleProperty: y,
                    createTestElement: function(e, t, n) {
                        var r = i(e), o = e.createElement("div");
                        o.contentEditable = "" + !!n, t && (o.innerHTML = t);
                        var a = r.firstChild;
                        return a ? r.insertBefore(o, a) : r.appendChild(o), o;
                    },
                    removeNode: function(e) {
                        return e.parentNode.removeChild(e);
                    },
                    fragmentFromNodeChildren: function(e) {
                        for (var t, n = f(e).createDocumentFragment(); t = e.firstChild;) n.appendChild(t);
                        return n;
                    },
                    createIterator: function(e) {
                        return new C(e);
                    },
                    DomPosition: T
                }, e.DOMException = E;
            }), C.createCoreModule("DomRange", ["DomUtil"], function(t, n) {
                var r = t.dom, i = t.util, o = r.DomPosition, a = t.DOMException, s = r.isCharacterDataNode,
                    l = r.getNodeIndex, d = r.isOrIsAncestorOf, c = r.getDocument, u = r.comparePoints,
                    p = r.splitDataNode, h = r.getClosestAncestorIn, f = r.getNodeLength, g = r.arrayContains,
                    m = r.getRootContainer, v = t.features.crashyTextNodes, y = r.removeNode;

                function _(e, t) {
                    return 3 != e.nodeType && (d(e, t.startContainer) || d(e, t.endContainer));
                }

                function N(e) {
                    return e.document || c(e.startContainer);
                }

                function b(e) {
                    return new o(e.parentNode, l(e));
                }

                function C(e) {
                    return new o(e.parentNode, l(e) + 1);
                }

                function T(e, t, n) {
                    var i = 11 == e.nodeType ? e.firstChild : e;
                    return s(t) ? n == t.length ? r.insertAfter(e, t) : t.parentNode.insertBefore(e, 0 == n ? t : p(t, n)) : n >= t.childNodes.length ? t.appendChild(e) : t.insertBefore(e, t.childNodes[n]), i;
                }

                function E(e, t, n) {
                    if (z(e), z(t), N(t) != N(e)) throw new a("WRONG_DOCUMENT_ERR");
                    var r = u(e.startContainer, e.startOffset, t.endContainer, t.endOffset),
                        i = u(e.endContainer, e.endOffset, t.startContainer, t.startOffset);
                    return n ? r <= 0 && i >= 0 : r < 0 && i > 0;
                }

                function S(e, t, n) {
                    var i, o, a, s;
                    for (n = n || { stop: !1 }; a = e.next();) if (e.isPartiallySelectedSubtree()) {
                        if (!1 === t(a)) return void (n.stop = !0);
                        if (S(s = e.getSubtreeIterator(), t, n), s.detach(), n.stop) return;
                    } else for (i = r.createIterator(a); o = i.next();) if (!1 === t(o)) return void (n.stop = !0);
                }

                function O(e) {
                    for (var t; e.next();) e.isPartiallySelectedSubtree() ? (O(t = e.getSubtreeIterator()), t.detach()) : e.remove();
                }

                function k(e) {
                    for (var t, n, r = N(e.range).createDocumentFragment(); t = e.next();) {
                        if (e.isPartiallySelectedSubtree() ? (t = t.cloneNode(!1), n = e.getSubtreeIterator(), t.appendChild(k(n)), n.detach()) : e.remove(), 10 == t.nodeType) throw new a("HIERARCHY_REQUEST_ERR");
                        r.appendChild(t);
                    }
                    return r;
                }

                function x(e) {
                    return "[" + (void 0 === e.getName ? "Range" : e.getName()) + "(" + r.inspectNode(e.startContainer) + ":" + e.startOffset + ", " + r.inspectNode(e.endContainer) + ":" + e.endOffset + ")]";
                }

                function w(e, t) {
                    if (this.range = e, this.clonePartiallySelectedTextNodes = t, !e.collapsed) {
                        this.sc = e.startContainer, this.so = e.startOffset, this.ec = e.endContainer, this.eo = e.endOffset;
                        var n = e.commonAncestorContainer;
                        this.sc === this.ec && s(this.sc) ? (this.isSingleCharacterDataNode = !0, this._first = this._last = this._next = this.sc) : (this._first = this._next = s(this.sc) ? h(this.sc, n, !0) : this.sc.childNodes[this.so], this._last = s(this.ec) ? h(this.ec, n, !0) : this.ec.childNodes[this.eo - 1]);
                    }
                }

                w.prototype = {
                    _current: null,
                    _next: null,
                    _first: null,
                    _last: null,
                    isSingleCharacterDataNode: !1,
                    reset: function() {
                        this._current = null, this._next = this._first;
                    },
                    hasNext: function() {
                        return !!this._next;
                    },
                    next: function() {
                        var e = this._current = this._next;
                        return e && (this._next = e !== this._last ? e.nextSibling : null, s(e) && this.clonePartiallySelectedTextNodes && (e === this.ec && (e = e.cloneNode(!0)).deleteData(this.eo, e.length - this.eo), this._current === this.sc && (e = e.cloneNode(!0)).deleteData(0, this.so))), e;
                    },
                    remove: function() {
                        var e, t, n = this._current;
                        !s(n) || n !== this.sc && n !== this.ec ? n.parentNode && y(n) : (e = n === this.sc ? this.so : 0) != (t = n === this.ec ? this.eo : n.length) && n.deleteData(e, t - e);
                    },
                    isPartiallySelectedSubtree: function() {
                        return _(this._current, this.range);
                    },
                    getSubtreeIterator: function() {
                        var e;
                        if (this.isSingleCharacterDataNode) (e = this.range.cloneRange()).collapse(!1); else {
                            e = new fe(N(this.range));
                            var t = this._current, n = t, r = 0, i = t, o = f(t);
                            d(t, this.sc) && (n = this.sc, r = this.so), d(t, this.ec) && (i = this.ec, o = this.eo), he(e, n, r, i, o);
                        }
                        return new w(e, this.clonePartiallySelectedTextNodes);
                    },
                    detach: function() {
                        this.range = this._current = this._next = this._first = this._last = this.sc = this.so = this.ec = this.eo = null;
                    }
                };
                var R = [1, 3, 4, 5, 7, 8, 10], D = [2, 9, 11], I = [1, 3, 4, 5, 7, 8, 10, 11], A = [1, 3, 4, 5, 7, 8];

                function L(e) {
                    return function(t, n) {
                        for (var r, i = n ? t : t.parentNode; i;) {
                            if (r = i.nodeType, g(e, r)) return i;
                            i = i.parentNode;
                        }
                        return null;
                    };
                }

                var M = L([9, 11]), P = L([5, 6, 10, 12]), B = L([6, 10, 12]);

                function F(e, t) {
                    if (B(e, t)) throw new a("INVALID_NODE_TYPE_ERR");
                }

                function U(e, t) {
                    if (!g(t, e.nodeType)) throw new a("INVALID_NODE_TYPE_ERR");
                }

                function H(e, t) {
                    if (t < 0 || t > (s(e) ? e.length : e.childNodes.length)) throw new a("INDEX_SIZE_ERR");
                }

                function j(e, t) {
                    if (M(e, !0) !== M(t, !0)) throw new a("WRONG_DOCUMENT_ERR");
                }

                function V(e) {
                    if (P(e, !0)) throw new a("NO_MODIFICATION_ALLOWED_ERR");
                }

                function W(e, t) {
                    if (!e) throw new a(t);
                }

                function X(e, t) {
                    return t <= (s(e) ? e.length : e.childNodes.length);
                }

                function Y(e) {
                    return !!e.startContainer && !!e.endContainer && !(v && (r.isBrokenNode(e.startContainer) || r.isBrokenNode(e.endContainer))) && m(e.startContainer) == m(e.endContainer) && X(e.startContainer, e.startOffset) && X(e.endContainer, e.endOffset);
                }

                function z(e) {
                    if (!Y(e)) throw new Error("Range error: Range is not valid. This usually happens after DOM mutation. Range: (" + e.inspect() + ")");
                }

                var q = document.createElement("style"), $ = !1;
                try {
                    q.innerHTML = "<b>x</b>", $ = 3 == q.firstChild.nodeType;
                } catch (e) {
                }
                t.features.htmlParsingConforms = $;
                var G = $ ? function(e) {
                    var t = this.startContainer, n = c(t);
                    if (!t) throw new a("INVALID_STATE_ERR");
                    var i = null;
                    return 1 == t.nodeType ? i = t : s(t) && (i = r.parentElement(t)), (i = null === i || "HTML" == i.nodeName && r.isHtmlNamespace(c(i).documentElement) && r.isHtmlNamespace(i) ? n.createElement("body") : i.cloneNode(!1)).innerHTML = e, r.fragmentFromNodeChildren(i);
                } : function(e) {
                    var t = N(this).createElement("body");
                    return t.innerHTML = e, r.fragmentFromNodeChildren(t);
                };

                function K(e, t) {
                    z(e);
                    var n = e.startContainer, r = e.startOffset, i = e.endContainer, o = e.endOffset, a = n === i;
                    s(i) && o > 0 && o < i.length && p(i, o, t), s(n) && r > 0 && r < n.length && (n = p(n, r, t), a ? (o -= r, i = n) : i == n.parentNode && o >= l(n) && o++, r = 0), e.setStartAndEnd(n, r, i, o);
                }

                function Q(e) {
                    z(e);
                    var t = e.commonAncestorContainer.parentNode.cloneNode(!1);
                    return t.appendChild(e.cloneContents()), t.innerHTML;
                }

                var J = ["startContainer", "startOffset", "endContainer", "endOffset", "collapsed", "commonAncestorContainer"],
                    Z = 0, ee = 1, te = 2, ne = 3, re = 0, ie = 1, oe = 2, ae = 3, se = function(e, t, n, r, i) {
                        if (!n || isNaN(Number(n))) return !1;
                        var o = e.collapsed;
                        switch (n = Number(n), t) {
                            case"char":
                                return n > 0 ? e.moveCharRight(r, n, i) : e.moveCharLeft(r, -1 * n, i);
                            case"word":
                            default:
                                throw new Error("move by 'word' not implemented");
                        }
                        o && e.collapse(r);
                    };

                function le(e) {
                    e.START_TO_START = Z, e.START_TO_END = ee, e.END_TO_END = te, e.END_TO_START = ne, e.NODE_BEFORE = re, e.NODE_AFTER = ie, e.NODE_BEFORE_AND_AFTER = oe, e.NODE_INSIDE = ae;
                }

                function de(e) {
                    le(e), le(e.prototype);
                }

                function ce(e, t) {
                    return function() {
                        z(this);
                        var n, r = this.startContainer, i = this.startOffset, o = this.commonAncestorContainer,
                            a = new w(this, !0);
                        r !== o && (r = (n = C(h(r, o, !0))).node, i = n.offset), S(a, V), a.reset();
                        var s = e(a);
                        return a.detach(), t(this, r, i, r, i), s;
                    };
                }

                function ue(e, n) {
                    function r(e, t) {
                        return function(n) {
                            U(n, R), U(m(n), D);
                            var r = (e ? b : C)(n);
                            (t ? o : a)(this, r.node, r.offset);
                        };
                    }

                    function o(e, t, r) {
                        var i = e.endContainer, o = e.endOffset;
                        t === e.startContainer && r === e.startOffset || (m(t) == m(i) && 1 != u(t, r, i, o) || (i = t, o = r), n(e, t, r, i, o));
                    }

                    function a(e, t, r) {
                        var i = e.startContainer, o = e.startOffset;
                        t === e.endContainer && r === e.endOffset || (m(t) == m(i) && -1 != u(t, r, i, o) || (i = t, o = r), n(e, i, o, t, r));
                    }

                    var d = function() {
                    };
                    d.prototype = t.rangePrototype, e.prototype = new d, i.extend(e.prototype, {
                        setStart: function(e, t) {
                            F(e, !0), H(e, t), o(this, e, t);
                        },
                        setEnd: function(e, t) {
                            F(e, !0), H(e, t), a(this, e, t);
                        },
                        setStartAndEnd: function() {
                            var e = arguments, t = e[0], r = e[1], i = t, o = r;
                            switch (e.length) {
                                case 3:
                                    o = e[2];
                                    break;
                                case 4:
                                    i = e[2], o = e[3];
                            }
                            n(this, t, r, i, o);
                        },
                        setBoundary: function(e, t, n) {
                            this["set" + (n ? "Start" : "End")](e, t);
                        },
                        setStartBefore: r(!0, !0),
                        setStartAfter: r(!1, !0),
                        setEndBefore: r(!0, !1),
                        setEndAfter: r(!1, !1),
                        collapse: function(e) {
                            z(this), e ? n(this, this.startContainer, this.startOffset, this.startContainer, this.startOffset) : n(this, this.endContainer, this.endOffset, this.endContainer, this.endOffset);
                        },
                        selectNodeContents: function(e) {
                            F(e, !0), n(this, e, 0, e, f(e));
                        },
                        selectNode: function(e) {
                            F(e, !1), U(e, R);
                            var t = b(e), r = C(e);
                            n(this, t.node, t.offset, r.node, r.offset);
                        },
                        extractContents: ce(k, n),
                        deleteContents: ce(O, n),
                        canSurroundContents: function() {
                            z(this), V(this.startContainer), V(this.endContainer);
                            var e = new w(this, !0), t = e._first && _(e._first, this) || e._last && _(e._last, this);
                            return e.detach(), !t;
                        },
                        splitBoundaries: function() {
                            K(this);
                        },
                        splitBoundariesPreservingPositions: function(e) {
                            K(this, e);
                        },
                        normalizeBoundaries: function() {
                            z(this);
                            var e, t = this.startContainer, r = this.startOffset, i = this.endContainer,
                                o = this.endOffset, a = function(e) {
                                    var t = e.nextSibling;
                                    t && t.nodeType == e.nodeType && (i = e, o = e.length, e.appendData(t.data), y(t));
                                }, d = function(e) {
                                    var n = e.previousSibling;
                                    if (n && n.nodeType == e.nodeType) {
                                        t = e;
                                        var a = e.length;
                                        if (r = n.length, e.insertData(0, n.data), y(n), t == i) o += r, i = t; else if (i == e.parentNode) {
                                            var s = l(e);
                                            o == s ? (i = e, o = a) : o > s && o--;
                                        }
                                    }
                                }, c = !0;
                            if (s(i)) o == i.length ? a(i) : 0 == o && (e = i.previousSibling) && e.nodeType == i.nodeType && (o = e.length, t == i && (c = !1), e.appendData(i.data), y(i), i = e); else {
                                if (o > 0) {
                                    var u = i.childNodes[o - 1];
                                    u && s(u) && a(u);
                                }
                                c = !this.collapsed;
                            }
                            if (c) {
                                if (s(t)) 0 == r ? d(t) : r == t.length && (e = t.nextSibling) && e.nodeType == t.nodeType && (i == e && (i = t, o += t.length), t.appendData(e.data), y(e)); else if (r < t.childNodes.length) {
                                    var p = t.childNodes[r];
                                    p && s(p) && d(p);
                                }
                            } else t = i, r = o;
                            n(this, t, r, i, o);
                        },
                        collapseToPoint: function(e, t) {
                            F(e, !0), H(e, t), this.setStartAndEnd(e, t);
                        }
                    }), de(e);
                }

                function pe(e) {
                    e.collapsed = e.startContainer === e.endContainer && e.startOffset === e.endOffset, e.commonAncestorContainer = e.collapsed ? e.startContainer : r.getCommonAncestor(e.startContainer, e.endContainer);
                }

                function he(e, t, n, i, o) {
                    e.startContainer = t, e.startOffset = n, e.endContainer = i, e.endOffset = o, e.document = r.getDocument(t), pe(e);
                }

                function fe(e) {
                    this.startContainer = e, this.startOffset = 0, this.endContainer = e, this.endOffset = 0, this.document = e, pe(this);
                }

                i.extend(t.rangePrototype, {
                    moveStart: function(e, t, n) {
                        return se(this, e, t, !0, n);
                    }, moveEnd: function(e, t, n) {
                        return se(this, e, t, !1, n);
                    }, setRange: function(e, t, n) {
                        e ? this.setStart(t, n) : this.setEnd(t, n);
                    }, moveCharLeft: function(t, n, r) {
                        var i, o, a = this.collapsed;
                        if (t ? (i = this.startContainer, o = this.startOffset) : (i = this.endContainer, o = this.endOffset), i.nodeType === Node.ELEMENT_NODE) if (i.hasChildNodes() && o > 0) {
                            var s = i.childNodes[o - 1], l = e.domUtils.getLastSelectableChild(s, r);
                            if (!(i = l || e.domUtils.getPreviousSelectableNode(s, r))) return !1;
                            o = i.data.length - n;
                        } else o = -1 * n; else o -= n;
                        for (; o < 0;) {
                            if (!(i = e.domUtils.getPreviousSelectableNode(i, r))) return !1;
                            i.nodeType === Node.ELEMENT_NODE ? o++ : o += i.data.length;
                        }
                        return a && this.collapse(t), this.setRange(t, i, o), !0;
                    }, moveCharRight: function(t, n, r) {
                        var i, o, a = this.collapsed;
                        if (t ? (i = this.startContainer, o = this.startOffset) : (i = this.endContainer, o = this.endOffset), i.nodeType === Node.ELEMENT_NODE) {
                            var s = e.domUtils.getNextSelectableNode(i.childNodes[Math.min(o, i.childNodes.length - 1)], r);
                            i = s || e.domUtils.getFirstSelectableChild(e.domUtils.getNextContainer(i, r), r), o = n;
                        } else o += n;
                        if (!i) return !1;
                        var l = o - (i.nodeType === Node.TEXT_NODE ? i.data.length : 1);
                        if (l > 0) {
                            for (; l > 0;) {
                                if (!(i = e.domUtils.getFirstSelectableChild(e.domUtils.getNextContainer(i, r), r))) return !1;
                                if (i.nodeType !== Node.ELEMENT_NODE) {
                                    if (i.data.length >= l) break;
                                    i.data.length > 0 && (l -= i.data.length);
                                } else r && r.filter && r.filter(i) && --l;
                            }
                            o = l;
                        }
                        return a && this.collapse(t), 1 === i.nodeType ? this.setRange(t, i, 0) : this.setRange(t, i, o), !0;
                    }, getHTMLContents: function(e) {
                        e || (e = this.cloneContents());
                        var t = self.env.document.createElement("div");
                        return t.appendChild(e.cloneNode(!0)), t.innerHTML;
                    }, getHTMLContentsObj: function() {
                        return this.cloneContents();
                    }, compareBoundaryPoints: function(e, t) {
                        var n, r, i, o;
                        z(this), j(this.startContainer, t.startContainer);
                        var a = e == ne || e == Z ? "start" : "end", s = e == ee || e == Z ? "start" : "end";
                        return n = this[a + "Container"], r = this[a + "Offset"], i = t[s + "Container"], o = t[s + "Offset"], u(n, r, i, o);
                    }, insertNode: function(e) {
                        if (z(this), U(e, I), V(this.startContainer), d(e, this.startContainer)) throw new a("HIERARCHY_REQUEST_ERR");
                        var t = T(e, this.startContainer, this.startOffset);
                        this.setStartBefore(t);
                    }, cloneContents: function() {
                        var e, t;
                        if (z(this), this.collapsed) return N(this).createDocumentFragment();
                        if (this.startContainer === this.endContainer && s(this.startContainer)) return (e = this.startContainer.cloneNode(!0)).data = e.data.slice(this.startOffset, this.endOffset), (t = N(this).createDocumentFragment()).appendChild(e), t;
                        var n = new w(this, !0);
                        return e = function e(t) {
                            for (var n, r, i, o = N(t.range).createDocumentFragment(); r = t.next();) {
                                if (n = t.isPartiallySelectedSubtree(), r = r.cloneNode(!n), n && (i = t.getSubtreeIterator(), r.appendChild(e(i)), i.detach()), 10 == r.nodeType) throw new a("HIERARCHY_REQUEST_ERR");
                                o.appendChild(r);
                            }
                            return o;
                        }(n), n.detach(), e;
                    }, canSurroundContents: function() {
                        z(this), V(this.startContainer), V(this.endContainer);
                        var e = new w(this, !0), t = e._first && _(e._first, this) || e._last && _(e._last, this);
                        return e.detach(), !t;
                    }, surroundContents: function(e) {
                        if (U(e, A), !this.canSurroundContents()) throw new a("INVALID_STATE_ERR");
                        var t = this.extractContents();
                        if (e.hasChildNodes()) for (; e.lastChild;) e.removeChild(e.lastChild);
                        T(e, this.startContainer, this.startOffset), e.appendChild(t), this.selectNode(e);
                    }, cloneRange: function() {
                        z(this);
                        for (var e, t = new fe(N(this)), n = J.length; n--;) t[e = J[n]] = this[e];
                        return t;
                    }, toString: function() {
                        z(this);
                        var e = this.startContainer;
                        if (e === this.endContainer && s(e)) return 3 == e.nodeType || 4 == e.nodeType ? e.data.slice(this.startOffset, this.endOffset) : "";
                        var t = [], n = new w(this, !0);
                        return S(n, function(e) {
                            3 != e.nodeType && 4 != e.nodeType || t.push(e.data);
                        }), n.detach(), t.join("");
                    }, compareNode: function(e) {
                        z(this);
                        var t = e.parentNode, n = l(e);
                        if (!t) throw new a("NOT_FOUND_ERR");
                        var r = this.comparePoint(t, n), i = this.comparePoint(t, n + 1);
                        return r < 0 ? i > 0 ? oe : re : i > 0 ? ie : ae;
                    }, comparePoint: function(e, t) {
                        return z(this), W(e, "HIERARCHY_REQUEST_ERR"), j(e, this.startContainer), u(e, t, this.startContainer, this.startOffset) < 0 ? -1 : u(e, t, this.endContainer, this.endOffset) > 0 ? 1 : 0;
                    }, createContextualFragment: G, toHtml: function() {
                        return Q(this);
                    }, intersectsNode: function(e, t) {
                        if (z(this), m(e) != function(e) {
                            return m(e.startContainer);
                        }(this)) return !1;
                        var n = e.parentNode, r = l(e);
                        if (!n) return !0;
                        var i = u(n, r, this.endContainer, this.endOffset),
                            o = u(n, r + 1, this.startContainer, this.startOffset);
                        return t ? i <= 0 && o >= 0 : i < 0 && o > 0;
                    }, isPointInRange: function(e, t) {
                        return z(this), W(e, "HIERARCHY_REQUEST_ERR"), j(e, this.startContainer), u(e, t, this.startContainer, this.startOffset) >= 0 && u(e, t, this.endContainer, this.endOffset) <= 0;
                    }, intersectsRange: function(e) {
                        return E(this, e, !1);
                    }, intersectsOrTouchesRange: function(e) {
                        return E(this, e, !0);
                    }, intersection: function(e) {
                        if (this.intersectsRange(e)) {
                            var t = u(this.startContainer, this.startOffset, e.startContainer, e.startOffset),
                                n = u(this.endContainer, this.endOffset, e.endContainer, e.endOffset),
                                r = this.cloneRange();
                            return -1 == t && r.setStart(e.startContainer, e.startOffset), 1 == n && r.setEnd(e.endContainer, e.endOffset), r;
                        }
                        return null;
                    }, union: function(e) {
                        if (this.intersectsOrTouchesRange(e)) {
                            var t = this.cloneRange();
                            return -1 == u(e.startContainer, e.startOffset, this.startContainer, this.startOffset) && t.setStart(e.startContainer, e.startOffset), 1 == u(e.endContainer, e.endOffset, this.endContainer, this.endOffset) && t.setEnd(e.endContainer, e.endOffset), t;
                        }
                        throw new a("Ranges do not intersect");
                    }, containsNode: function(e, t) {
                        return t ? this.intersectsNode(e, !1) : this.compareNode(e) == ae;
                    }, containsNodeContents: function(e) {
                        return this.comparePoint(e, 0) >= 0 && this.comparePoint(e, f(e)) <= 0;
                    }, containsRange: function(e) {
                        var t = this.intersection(e);
                        return null !== t && e.equals(t);
                    }, containsNodeText: function(e) {
                        var t = this.cloneRange();
                        t.selectNode(e);
                        var n = t.getNodes([3]);
                        if (n.length > 0) {
                            t.setStart(n[0], 0);
                            var r = n.pop();
                            return t.setEnd(r, r.length), this.containsRange(t);
                        }
                        return this.containsNodeContents(e);
                    }, getNodes: function(e, t) {
                        return z(this), function(e, t, n) {
                            var r, i = Boolean(t && t.length), o = Boolean(n);
                            i && (r = new RegExp("^(" + t.join("|") + ")$"));
                            var a = [];
                            return S(new w(e, !1), function(t) {
                                if ((!i || r.test(t.nodeType)) && (!o || n(t))) {
                                    var l = e.startContainer;
                                    if (t != l || !s(l) || e.startOffset != l.length) {
                                        var d = e.endContainer;
                                        t == d && s(d) && 0 === e.endOffset || a.push(t);
                                    }
                                }
                            }), a;
                        }(this, e, t);
                    }, getDocument: function() {
                        return N(this);
                    }, collapseBefore: function(e) {
                        this.setEndBefore(e), this.collapse(!1);
                    }, collapseAfter: function(e) {
                        this.setStartAfter(e), this.collapse(!0);
                    }, getBookmark: function(e) {
                        var n = N(this), i = t.createRange(n);
                        e = e || r.getBody(n), i.selectNodeContents(e);
                        var o = this.intersection(i), a = 0, s = 0;
                        return o && (i.setEnd(o.startContainer, o.startOffset), s = (a = i.toString().length) + o.toString().length), {
                            start: a,
                            end: s,
                            containerNode: e
                        };
                    }, moveToBookmark: function(e) {
                        var t = e.containerNode, n = 0;
                        this.setStart(t, 0), this.collapse(!0);
                        for (var r, i, o, a, s = [t], l = !1, d = !1; !d && (r = s.pop());) if (3 == r.nodeType) i = n + r.length, !l && e.start >= n && e.start <= i && (this.setStart(r, e.start - n), l = !0), l && e.end >= n && e.end <= i && (this.setEnd(r, e.end - n), d = !0), n = i; else for (o = (a = r.childNodes).length; o--;) s.push(a[o]);
                    }, getName: function() {
                        return "DomRange";
                    }, equals: function(e) {
                        return fe.rangesEqual(this, e);
                    }, isValid: function() {
                        return Y(this);
                    }, inspect: function() {
                        return x(this);
                    }, detach: function() {
                    }
                }), ue(fe, he), i.extend(fe, {
                    rangeProperties: J,
                    RangeIterator: w,
                    copyComparisonConstants: de,
                    createPrototypeRange: ue,
                    inspect: x,
                    toHtml: Q,
                    getRangeDocument: N,
                    rangesEqual: function(e, t) {
                        return e.startContainer === t.startContainer && e.startOffset === t.startOffset && e.endContainer === t.endContainer && e.endOffset === t.endOffset;
                    }
                }), t.DomRange = fe;
            }), C.createCoreModule("WrappedRange", ["DomRange"], function(e, t) {
                var n, r, i = e.dom, o = e.util, a = i.DomPosition, s = e.DomRange, l = i.getBody,
                    d = i.getContentDocument, c = i.isCharacterDataNode;
                if (e.features.implementsDomRange && function() {
                    var r, a, c = s.rangeProperties;

                    function u(e) {
                        for (var t, n = c.length; n--;) e[t = c[n]] = e.nativeRange[t];
                        e.collapsed = e.startContainer === e.endContainer && e.startOffset === e.endOffset;
                    }

                    n = function(e) {
                        if (!e) throw t.createError("WrappedRange: Range must be specified");
                        this.nativeRange = e, u(this);
                    }, s.createPrototypeRange(n, function(e, t, n, r, i) {
                        var o = e.startContainer !== t || e.startOffset != n,
                            a = e.endContainer !== r || e.endOffset != i, s = !e.equals(e.nativeRange);
                        (o || a || s) && (e.setEnd(r, i), e.setStart(t, n));
                    }), (r = n.prototype).selectNode = function(e) {
                        this.nativeRange.selectNode(e), u(this);
                    }, r.cloneContents = function() {
                        return this.nativeRange.cloneContents();
                    }, r.surroundContents = function(e) {
                        this.nativeRange.surroundContents(e), u(this);
                    }, r.collapse = function(e) {
                        this.nativeRange.collapse(e), u(this);
                    }, r.cloneRange = function() {
                        return new n(this.nativeRange.cloneRange());
                    }, r.refresh = function() {
                        u(this);
                    }, r.toString = function() {
                        return this.nativeRange.toString();
                    };
                    var p = document.createTextNode("test");
                    l(document).appendChild(p);
                    var h = document.createRange();
                    h.setStart(p, 0), h.setEnd(p, 0);
                    try {
                        h.setStart(p, 1), r.setStart = function(e, t) {
                            this.nativeRange.setStart(e, t), u(this);
                        }, r.setEnd = function(e, t) {
                            this.nativeRange.setEnd(e, t), u(this);
                        }, a = function(e) {
                            return function(t) {
                                this.nativeRange[e](t), u(this);
                            };
                        };
                    } catch (e) {
                        r.setStart = function(e, t) {
                            try {
                                this.nativeRange.setStart(e, t);
                            } catch (n) {
                                this.nativeRange.setEnd(e, t), this.nativeRange.setStart(e, t);
                            }
                            u(this);
                        }, r.setEnd = function(e, t) {
                            try {
                                this.nativeRange.setEnd(e, t);
                            } catch (n) {
                                this.nativeRange.setStart(e, t), this.nativeRange.setEnd(e, t);
                            }
                            u(this);
                        }, a = function(e, t) {
                            return function(n) {
                                try {
                                    this.nativeRange[e](n);
                                } catch (r) {
                                    this.nativeRange[t](n), this.nativeRange[e](n);
                                }
                                u(this);
                            };
                        };
                    }
                    r.setStartBefore = a("setStartBefore", "setEndBefore"), r.setStartAfter = a("setStartAfter", "setEndAfter"), r.setEndBefore = a("setEndBefore", "setStartBefore"), r.setEndAfter = a("setEndAfter", "setStartAfter"), r.selectNodeContents = function(e) {
                        this.setStartAndEnd(e, 0, i.getNodeLength(e));
                    }, h.selectNodeContents(p), h.setEnd(p, 3);
                    var f = document.createRange();
                    f.selectNodeContents(p), f.setEnd(p, 4), f.setStart(p, 2), -1 == h.compareBoundaryPoints(h.START_TO_END, f) && 1 == h.compareBoundaryPoints(h.END_TO_START, f) ? r.compareBoundaryPoints = function(e, t) {
                        return e == (t = t.nativeRange || t).START_TO_END ? e = t.END_TO_START : e == t.END_TO_START && (e = t.START_TO_END), this.nativeRange.compareBoundaryPoints(e, t);
                    } : r.compareBoundaryPoints = function(e, t) {
                        return this.nativeRange.compareBoundaryPoints(e, t.nativeRange || t);
                    };
                    var g = document.createElement("div");
                    g.innerHTML = "123";
                    var m = g.firstChild, v = l(document);
                    v.appendChild(g), h.setStart(m, 1), h.setEnd(m, 2), h.deleteContents(), "13" == m.data && (r.deleteContents = function() {
                        this.nativeRange.deleteContents(), u(this);
                    }, r.extractContents = function() {
                        var e = this.nativeRange.extractContents();
                        return u(this), e;
                    }), v.removeChild(g), v = null, o.isHostMethod(h, "createContextualFragment") && (r.createContextualFragment = function(e) {
                        return this.nativeRange.createContextualFragment(e);
                    }), l(document).removeChild(p), r.getName = function() {
                        return "WrappedRange";
                    }, e.WrappedRange = n, e.createNativeRange = function(e) {
                        return (e = d(e, t, "createNativeRange")).createRange();
                    };
                }(), e.features.implementsTextRange) {
                    var u = function(e, t, n, r, o) {
                        var s = e.duplicate();
                        s.collapse(n);
                        var l = s.parentElement();
                        if (i.isOrIsAncestorOf(t, l) || (l = t), !l.canHaveHTML) {
                            var d = new a(l.parentNode, i.getNodeIndex(l));
                            return { boundaryPosition: d, nodeInfo: { nodeIndex: d.offset, containerElement: d.node } };
                        }
                        var u = i.getDocument(l).createElement("span");
                        u.parentNode && i.removeNode(u);
                        for (var p, h, f, g, m, v = n ? "StartToStart" : "StartToEnd", y = o && o.containerElement == l ? o.nodeIndex : 0, _ = l.childNodes.length, N = _, b = N; b == _ ? l.appendChild(u) : l.insertBefore(u, l.childNodes[b]), s.moveToElementText(u), 0 != (p = s.compareEndPoints(v, e)) && y != N;) {
                            if (-1 == p) {
                                if (N == y + 1) break;
                                y = b;
                            } else N = N == y + 1 ? y : b;
                            b = Math.floor((y + N) / 2), l.removeChild(u);
                        }
                        if (m = u.nextSibling, -1 == p && m && c(m)) {
                            var C;
                            if (s.setEndPoint(n ? "EndToStart" : "EndToEnd", e), /[\r\n]/.test(m.data)) {
                                var T = s.duplicate(), E = T.text.replace(/\r\n/g, "\r").length;
                                for (C = T.moveStart("character", E); -1 == (p = T.compareEndPoints("StartToEnd", T));) C++, T.moveStart("character", 1);
                            } else C = s.text.length;
                            g = new a(m, C);
                        } else h = (r || !n) && u.previousSibling, g = (f = (r || n) && u.nextSibling) && c(f) ? new a(f, 0) : h && c(h) ? new a(h, h.data.length) : new a(l, i.getNodeIndex(u));
                        return i.removeNode(u), { boundaryPosition: g, nodeInfo: { nodeIndex: b, containerElement: l } };
                    }, p = function(e, t) {
                        var n, r, o, a, s = e.offset, d = i.getDocument(e.node), u = l(d).createTextRange(),
                            p = c(e.node);
                        return p ? r = (n = e.node).parentNode : (n = s < (a = e.node.childNodes).length ? a[s] : null, r = e.node), (o = d.createElement("span")).innerHTML = "&#feff;", n ? r.insertBefore(o, n) : r.appendChild(o), u.moveToElementText(o), u.collapse(!t), r.removeChild(o), p && u[t ? "moveStart" : "moveEnd"]("character", s), u;
                    };
                    (r = function(e) {
                        this.textRange = e, this.refresh();
                    }).prototype = new s(document), r.prototype.refresh = function() {
                        var e, t, n, r = function(e) {
                            var t = e.parentElement(), n = e.duplicate();
                            n.collapse(!0);
                            var r = n.parentElement();
                            (n = e.duplicate()).collapse(!1);
                            var o = n.parentElement(), a = r == o ? r : i.getCommonAncestor(r, o);
                            return a == t ? a : i.getCommonAncestor(t, a);
                        }(this.textRange);
                        !function(e) {
                            return 0 == e.compareEndPoints("StartToEnd", e);
                        }(this.textRange) ? (e = (n = u(this.textRange, r, !0, !1)).boundaryPosition, t = u(this.textRange, r, !1, !1, n.nodeInfo).boundaryPosition) : t = e = u(this.textRange, r, !0, !0).boundaryPosition, this.setStart(e.node, e.offset), this.setEnd(t.node, t.offset);
                    }, r.prototype.getName = function() {
                        return "WrappedTextRange";
                    }, s.copyComparisonConstants(r);
                    var h = function(e) {
                        if (e.collapsed) return p(new a(e.startContainer, e.startOffset), !0);
                        var t = p(new a(e.startContainer, e.startOffset), !0),
                            n = p(new a(e.endContainer, e.endOffset), !1),
                            r = l(s.getRangeDocument(e)).createTextRange();
                        return r.setEndPoint("StartToStart", t), r.setEndPoint("EndToEnd", n), r;
                    };
                    if (r.rangeToTextRange = h, r.prototype.toTextRange = function() {
                        return h(this);
                    }, e.WrappedTextRange = r, !e.features.implementsDomRange || e.config.preferTextRange) {
                        var f = Function("return this;")();
                        void 0 === f.Range && (f.Range = r), e.createNativeRange = function(e) {
                            return e = d(e, t, "createNativeRange"), l(e).createTextRange();
                        }, e.WrappedRange = r;
                    }
                }
                e.createRange = function(n) {
                    return n = d(n, t, "createRange"), new e.WrappedRange(e.createNativeRange(n));
                }, e.createRangyRange = function(e) {
                    return e = d(e, t, "createRangyRange"), new s(e);
                }, o.createAliasForDeprecatedMethod(e, "createIframeRange", "createRange"), o.createAliasForDeprecatedMethod(e, "createIframeRangyRange", "createRangyRange"), e.addShimListener(function(t) {
                    var n = t.document;
                    void 0 === n.createRange && (n.createRange = function() {
                        return e.createRange(n);
                    }), n = t = null;
                });
            }), C.createCoreModule("WrappedSelection", ["DomRange", "WrappedRange"], function(e, t) {
                e.config.checkSelectionRanges = !0;
                var n, r, i = e.dom, o = e.util, a = o.isHostMethod, s = e.DomRange, l = e.WrappedRange,
                    d = e.DOMException, c = i.DomPosition, u = e.features, p = i.getDocument, h = i.getBody,
                    f = s.rangesEqual;

                function g(e) {
                    return "string" == typeof e ? /^backward(s)?$/i.test(e) : !!e;
                }

                function m(e, n) {
                    if (e) {
                        if (i.isWindow(e)) return e;
                        if (e instanceof V) return e.win;
                        var r = i.getContentDocument(e, t, n);
                        return i.getWindow(r);
                    }
                    return window;
                }

                function v(e) {
                    return m(e, "getDocSelection").document.selection;
                }

                function y(e) {
                    var t = !1;
                    return e.anchorNode && (t = 1 == i.comparePoints(e.anchorNode, e.anchorOffset, e.focusNode, e.focusOffset)), t;
                }

                var _ = a(window, "getSelection"), N = o.isHostObject(document, "selection");
                u.implementsWinGetSelection = _, u.implementsDocSelection = N;
                var b = N && (!_ || e.config.preferTextRange);
                if (b) n = v, e.isSelectionValid = function(e) {
                    var t = m(e, "isSelectionValid").document, n = t.selection;
                    return "None" != n.type || p(n.createRange().parentElement()) == t;
                }; else {
                    if (!_) return t.fail("Neither document.selection or window.getSelection() detected."), !1;
                    n = function(e) {
                        return m(e, "getWinSelection").getSelection();
                    }, e.isSelectionValid = function() {
                        return !0;
                    };
                }
                e.getNativeSelection = n;
                var C = n();
                if (!C) return t.fail("Native selection was null (possibly issue 138?)"), !1;
                var T = e.createNativeRange(document), E = h(document),
                    S = o.areHostProperties(C, ["anchorNode", "focusNode", "anchorOffset", "focusOffset"]);
                u.selectionHasAnchorAndFocus = S;
                var O = a(C, "extend");
                u.selectionHasExtend = O;
                var k = "number" == typeof C.rangeCount;
                u.selectionHasRangeCount = k;
                var x = !1, w = !0, R = O ? function(t, n) {
                    var r = s.getRangeDocument(n), i = e.createRange(r);
                    i.collapseToPoint(n.endContainer, n.endOffset), t.addRange(P(i)), t.extend(n.startContainer, n.startOffset);
                } : null;
                o.areHostMethods(C, ["addRange", "getRangeAt", "removeAllRanges"]) && "number" == typeof C.rangeCount && u.implementsDomRange && function() {
                    var t = window.getSelection();
                    if (t) {
                        for (var n = t.rangeCount, r = n > 1, o = [], a = y(t), s = 0; s < n; ++s) o[s] = t.getRangeAt(s);
                        var l = i.createTestElement(document, "", !1),
                            d = l.appendChild(document.createTextNode("   ")), c = document.createRange();
                        if (c.setStart(d, 1), c.collapse(!0), t.removeAllRanges(), t.addRange(c), w = 1 == t.rangeCount, t.removeAllRanges(), !r) {
                            var u = window.navigator.appVersion.match(/Chrome\/(.*?) /);
                            if (u && parseInt(u[1]) >= 36) x = !1; else {
                                var p = c.cloneRange();
                                c.setStart(d, 0), p.setEnd(d, 3), p.setStart(d, 2), t.addRange(c), t.addRange(p), x = 2 == t.rangeCount;
                            }
                        }
                        for (i.removeNode(l), t.removeAllRanges(), s = 0; s < n; ++s) 0 == s && a ? R ? R(t, o[s]) : (e.warn("Rangy initialization: original selection was backwards but selection has been restored forwards because the browser does not support Selection.extend"), t.addRange(o[s])) : t.addRange(o[s]);
                    }
                }(), u.selectionSupportsMultipleRanges = x, u.collapsedNonEditableSelectionsSupported = w;
                var D, I, A = !1;

                function L(e, t, n) {
                    var r = n ? "end" : "start", i = n ? "start" : "end";
                    e.anchorNode = t[r + "Container"], e.anchorOffset = t[r + "Offset"], e.focusNode = t[i + "Container"], e.focusOffset = t[i + "Offset"];
                }

                function M(e) {
                    e.anchorNode = e.focusNode = null, e.anchorOffset = e.focusOffset = 0, e.rangeCount = 0, e.isCollapsed = !0, e._ranges.length = 0;
                }

                function P(t) {
                    var n;
                    return t instanceof s ? ((n = e.createNativeRange(t.getDocument())).setEnd(t.endContainer, t.endOffset), n.setStart(t.startContainer, t.startOffset)) : t instanceof l ? n = t.nativeRange : u.implementsDomRange && t instanceof i.getWindow(t.startContainer).Range && (n = t), n;
                }

                function B(e) {
                    var n = e.getNodes();
                    if (!function(e) {
                        if (!e.length || 1 != e[0].nodeType) return !1;
                        for (var t = 1, n = e.length; t < n; ++t) if (!i.isAncestorOf(e[0], e[t])) return !1;
                        return !0;
                    }(n)) throw t.createError("getSingleElementFromRange: range " + e.inspect() + " did not consist of a single element");
                    return n[0];
                }

                function F(e) {
                    return !!e && void 0 !== e.text;
                }

                function U(e, t) {
                    var n = new l(t);
                    e._ranges = [n], L(e, n, !1), e.rangeCount = 1, e.isCollapsed = n.collapsed;
                }

                function H(t) {
                    if (t._ranges.length = 0, "None" == t.docSelection.type) M(t); else {
                        var n = t.docSelection.createRange();
                        if (F(n)) U(t, n); else {
                            t.rangeCount = n.length;
                            for (var r, i = p(n.item(0)), o = 0; o < t.rangeCount; ++o) (r = e.createRange(i)).selectNode(n.item(o)), t._ranges.push(r);
                            t.isCollapsed = 1 == t.rangeCount && t._ranges[0].collapsed, L(t, t._ranges[t.rangeCount - 1], !1);
                        }
                    }
                }

                function j(e, n) {
                    for (var r = e.docSelection.createRange(), i = B(n), o = p(r.item(0)), a = h(o).createControlRange(), s = 0, l = r.length; s < l; ++s) a.add(r.item(s));
                    try {
                        a.add(i);
                    } catch (e) {
                        throw t.createError("addRange(): Element within the specified Range could not be added to control selection (does it have layout?)");
                    }
                    a.select(), H(e);
                }

                function V(e, t, n) {
                    this.nativeSelection = e, this.docSelection = t, this._ranges = [], this.win = n, this.refresh();
                }

                function W(e) {
                    e.win = e.anchorNode = e.focusNode = e._ranges = null, e.rangeCount = e.anchorOffset = e.focusOffset = 0, e.detached = !0;
                }

                E && a(E, "createControlRange") && (D = E.createControlRange(), o.areHostProperties(D, ["item", "add"]) && (A = !0)), u.implementsControlRange = A, r = S ? function(e) {
                    return e.anchorNode === e.focusNode && e.anchorOffset === e.focusOffset;
                } : function(e) {
                    return !!e.rangeCount && e.getRangeAt(e.rangeCount - 1).collapsed;
                }, a(C, "getRangeAt") ? I = function(e, t) {
                    try {
                        return e.getRangeAt(t);
                    } catch (e) {
                        return null;
                    }
                } : S && (I = function(t) {
                    var n = p(t.anchorNode), r = e.createRange(n);
                    return r.setStartAndEnd(t.anchorNode, t.anchorOffset, t.focusNode, t.focusOffset), r.collapsed !== this.isCollapsed && r.setStartAndEnd(t.focusNode, t.focusOffset, t.anchorNode, t.anchorOffset), r;
                }), V.prototype = e.selectionPrototype;
                var X = [];

                function Y(e, t) {
                    for (var n, r, i = X.length; i--;) if (r = (n = X[i]).selection, "deleteAll" == t) W(r); else if (n.win == e) return "delete" == t ? (X.splice(i, 1), !0) : r;
                    return "deleteAll" == t && (X.length = 0), null;
                }

                var z = function(e) {
                    if (e && e instanceof V) return e.refresh(), e;
                    var t = Y(e = m(e, "getNativeSelection")), r = n(e), i = N ? v(e) : null;
                    return t ? (t.nativeSelection = r, t.docSelection = i, t.refresh()) : (t = new V(r, i, e), X.push({
                        win: e,
                        selection: t
                    })), t;
                };
                e.getSelection = z, o.createAliasForDeprecatedMethod(e, "getIframeSelection", "getSelection");
                var q, $ = V.prototype;

                function G(e, n) {
                    for (var r, i = p(n[0].startContainer), o = h(i).createControlRange(), a = 0, s = n.length; a < s; ++a) {
                        r = B(n[a]);
                        try {
                            o.add(r);
                        } catch (e) {
                            throw t.createError("setRanges(): Element within one of the specified Ranges could not be added to control selection (does it have layout?)");
                        }
                    }
                    o.select(), H(e);
                }

                if (!b && S && o.areHostMethods(C, ["removeAllRanges", "addRange"])) {
                    $.removeAllRanges = function() {
                        this.nativeSelection.removeAllRanges(), M(this);
                    };
                    var K = function(e, t) {
                        R(e.nativeSelection, t), e.refresh();
                    };
                    $.addRange = k ? function(t, n) {
                        if (A && N && "Control" == this.docSelection.type) j(this, t); else if (g(n) && O) K(this, t); else {
                            var i;
                            x ? i = this.rangeCount : (this.removeAllRanges(), i = 0);
                            var o = P(t).cloneRange();
                            try {
                                this.nativeSelection.addRange(o);
                            } catch (e) {
                                console.error(e, t);
                            }
                            if (this.rangeCount = this.nativeSelection.rangeCount, this.rangeCount == i + 1) {
                                if (e.config.checkSelectionRanges) {
                                    var a = I(this.nativeSelection, this.rangeCount - 1);
                                    a && !f(a, t) && (t = new l(a));
                                }
                                this._ranges[this.rangeCount - 1] = t, L(this, t, Q(this.nativeSelection)), this.isCollapsed = r(this);
                            } else this.refresh();
                        }
                    } : function(e, t) {
                        g(t) && O ? K(this, e) : (this.nativeSelection.addRange(P(e)), this.refresh());
                    }, $.setRanges = function(e) {
                        if (A && N && e.length > 1) G(this, e); else {
                            this.removeAllRanges();
                            for (var t = 0, n = e.length; t < n; ++t) this.addRange(e[t]);
                        }
                    };
                } else {
                    if (!(a(C, "empty") && a(T, "select") && A && b)) return t.fail("No means of selecting a Range or TextRange was found"), !1;
                    $.removeAllRanges = function() {
                        try {
                            if (this.docSelection.empty(), "None" != this.docSelection.type) {
                                var e;
                                if (this.anchorNode) e = p(this.anchorNode); else if ("Control" == this.docSelection.type) {
                                    var t = this.docSelection.createRange();
                                    t.length && (e = p(t.item(0)));
                                }
                                e && (h(e).createTextRange().select(), this.docSelection.empty());
                            }
                        } catch (e) {
                        }
                        M(this);
                    }, $.addRange = function(t) {
                        "Control" == this.docSelection.type ? j(this, t) : (e.WrappedTextRange.rangeToTextRange(t).select(), this._ranges[0] = t, this.rangeCount = 1, this.isCollapsed = this._ranges[0].collapsed, L(this, t, !1));
                    }, $.setRanges = function(e) {
                        this.removeAllRanges();
                        var t = e.length;
                        t > 1 ? G(this, e) : t && this.addRange(e[0]);
                    };
                }
                if ($.getRangeAt = function(e) {
                    if (e < 0 || e >= this.rangeCount) throw new d("INDEX_SIZE_ERR");
                    return this._ranges[e].cloneRange();
                }, b) q = function(t) {
                    var n;
                    e.isSelectionValid(t.win) ? n = t.docSelection.createRange() : (n = h(t.win.document).createTextRange()).collapse(!0), "Control" == t.docSelection.type ? H(t) : F(n) ? U(t, n) : M(t);
                }; else if (a(C, "getRangeAt") && "number" == typeof C.rangeCount) q = function(t) {
                    if (A && N && "Control" == t.docSelection.type) H(t); else if (t._ranges.length = t.rangeCount = t.nativeSelection.rangeCount, t.rangeCount) {
                        for (var n = 0, i = t.rangeCount; n < i; ++n) t._ranges[n] = new e.WrappedRange(t.nativeSelection.getRangeAt(n));
                        L(t, t._ranges[t.rangeCount - 1], Q(t.nativeSelection)), t.isCollapsed = r(t);
                    } else M(t);
                }; else {
                    if (!S || "boolean" != typeof C.isCollapsed || "boolean" != typeof T.collapsed || !u.implementsDomRange) return t.fail("No means of obtaining a Range or TextRange from the user's selection was found"), !1;
                    q = function(e) {
                        var t, n = e.nativeSelection;
                        n.anchorNode ? (t = I(n, 0), e._ranges = [t], e.rangeCount = 1, function(e) {
                            var t = e.nativeSelection;
                            e.anchorNode = t.anchorNode, e.anchorOffset = t.anchorOffset, e.focusNode = t.focusNode, e.focusOffset = t.focusOffset;
                        }(e), e.isCollapsed = r(e)) : M(e);
                    };
                }
                $.refresh = function(e) {
                    var t = e ? this._ranges.slice(0) : null, n = this.anchorNode, r = this.anchorOffset;
                    if (q(this), e) {
                        var i = t.length;
                        if (i != this._ranges.length) return !0;
                        if (this.anchorNode != n || this.anchorOffset != r) return !0;
                        for (; i--;) if (!f(t[i], this._ranges[i])) return !0;
                        return !1;
                    }
                };
                var Q, J = function(e, t) {
                    var n = e.getAllRanges();
                    e.removeAllRanges();
                    for (var r = 0, i = n.length; r < i; ++r) f(t, n[r]) || e.addRange(n[r]);
                    e.rangeCount || M(e);
                };

                function Z(e, t) {
                    if (e.win.document != p(t)) throw new d("WRONG_DOCUMENT_ERR");
                }

                function ee(t) {
                    return function(n, r) {
                        var i;
                        this.rangeCount ? (i = this.getRangeAt(0))["set" + (t ? "Start" : "End")](n, r) : (i = e.createRange(this.win.document)).setStartAndEnd(n, r), this.setSingleRange(i, this.isBackward());
                    };
                }

                function te(e) {
                    var t = [], n = new c(e.anchorNode, e.anchorOffset), r = new c(e.focusNode, e.focusOffset),
                        i = "function" == typeof e.getName ? e.getName() : "Selection";
                    if (void 0 !== e.rangeCount) for (var o = 0, a = e.rangeCount; o < a; ++o) t[o] = s.inspect(e.getRangeAt(o));
                    return "[" + i + "(Ranges: " + t.join(", ") + ")(anchor: " + n.inspect() + ", focus: " + r.inspect() + "]";
                }

                $.removeRange = A && N ? function(e) {
                    if ("Control" == this.docSelection.type) {
                        for (var t = this.docSelection.createRange(), n = B(e), r = p(t.item(0)), i = h(r).createControlRange(), o = !1, a = 0, s = t.length; a < s; ++a) t.item(a) !== n || o ? i.add(t.item(a)) : o = !0;
                        i.select(), H(this);
                    } else J(this, e);
                } : function(e) {
                    J(this, e);
                }, !b && S && u.implementsDomRange ? (Q = y, $.isBackward = function() {
                    return Q(this);
                }) : Q = $.isBackward = function() {
                    return !1;
                }, $.isBackwards = $.isBackward, $.toString = function() {
                    for (var e = [], t = 0, n = this.rangeCount; t < n; ++t) e[t] = "" + this._ranges[t];
                    return e.join("");
                }, $.collapse = function(t, n) {
                    Z(this, t);
                    var r = e.createRange(t);
                    r.collapseToPoint(t, n), this.setSingleRange(r), this.isCollapsed = !0;
                }, $.collapseToStart = function() {
                    if (!this.rangeCount) throw new d("INVALID_STATE_ERR");
                    var e = this._ranges[0];
                    this.collapse(e.startContainer, e.startOffset);
                }, $.collapseToEnd = function() {
                    if (!this.rangeCount) throw new d("INVALID_STATE_ERR");
                    var e = this._ranges[this.rangeCount - 1];
                    this.collapse(e.endContainer, e.endOffset);
                }, $.selectAllChildren = function(t) {
                    Z(this, t);
                    var n = e.createRange(t);
                    n.selectNodeContents(t), this.setSingleRange(n);
                }, $.deleteFromDocument = function() {
                    if (A && N && "Control" == this.docSelection.type) {
                        for (var e, t = this.docSelection.createRange(); t.length;) e = t.item(0), t.remove(e), i.removeNode(e);
                        this.refresh();
                    } else if (this.rangeCount) {
                        var n = this.getAllRanges();
                        if (n.length) {
                            this.removeAllRanges();
                            for (var r = 0, o = n.length; r < o; ++r) n[r].deleteContents();
                            this.addRange(n[o - 1]);
                        }
                    }
                }, $.eachRange = function(e, t) {
                    for (var n = 0, r = this._ranges.length; n < r; ++n) if (e(this.getRangeAt(n))) return t;
                }, $.getAllRanges = function() {
                    var e = [];
                    return this.eachRange(function(t) {
                        e.push(t);
                    }), e;
                }, $.setSingleRange = function(e, t) {
                    this.removeAllRanges(), this.addRange(e, t);
                }, $.callMethodOnEachRange = function(e, t) {
                    var n = [];
                    return this.eachRange(function(r) {
                        n.push(r[e].apply(r, t || []));
                    }), n;
                }, $.setStart = ee(!0), $.setEnd = ee(!1), e.rangePrototype.select = function(e) {
                    z(this.getDocument()).setSingleRange(this, e);
                }, $.changeEachRange = function(e) {
                    var t = [], n = this.isBackward();
                    this.eachRange(function(n) {
                        e(n), t.push(n);
                    }), this.removeAllRanges(), n && 1 == t.length ? this.addRange(t[0], "backward") : this.setRanges(t);
                }, $.containsNode = function(e, t) {
                    return this.eachRange(function(n) {
                        return n.containsNode(e, t);
                    }, !0) || !1;
                }, $.getBookmark = function(e) {
                    return {
                        backward: this.isBackward(),
                        rangeBookmarks: this.callMethodOnEachRange("getBookmark", [e])
                    };
                }, $.moveToBookmark = function(t) {
                    for (var n, r, i = [], o = 0; n = t.rangeBookmarks[o++];) (r = e.createRange(this.win)).moveToBookmark(n), i.push(r);
                    t.backward ? this.setSingleRange(i[0], "backward") : this.setRanges(i);
                }, $.saveRanges = function() {
                    return { backward: this.isBackward(), ranges: this.callMethodOnEachRange("cloneRange") };
                }, $.restoreRanges = function(e) {
                    this.removeAllRanges();
                    for (var t, n = 0; t = e.ranges[n]; ++n) this.addRange(t, e.backward && 0 == n);
                }, $.toHtml = function() {
                    var e = [];
                    return this.eachRange(function(t) {
                        e.push(s.toHtml(t));
                    }), e.join("");
                }, u.implementsTextRange && ($.getNativeTextRange = function() {
                    var n;
                    if (n = this.docSelection) {
                        var r = n.createRange();
                        if (F(r)) return r;
                        throw t.createError("getNativeTextRange: selection is a control selection");
                    }
                    if (this.rangeCount > 0) return e.WrappedTextRange.rangeToTextRange(this.getRangeAt(0));
                    throw t.createError("getNativeTextRange: selection contains no range");
                }), $.getName = function() {
                    return "WrappedSelection";
                }, $.inspect = function() {
                    return te(this);
                }, $.detach = function() {
                    Y(this.win, "delete"), W(this);
                }, V.detachAll = function() {
                    Y(null, "deleteAll");
                }, V.inspect = te, V.isDirectionBackward = g, e.Selection = V, e.selectionPrototype = $, e.addShimListener(function(e) {
                    void 0 === e.getSelection && (e.getSelection = function() {
                        return z(e);
                    }), e = null;
                });
            });
            var M = !1, P = function(e) {
                M || (M = !0, !C.initialized && C.config.autoInitialize && x());
            };
            return N && ("complete" == document.readyState ? P() : (l(document, "addEventListener") && document.addEventListener("DOMContentLoaded", P, !1), y(window, "load", P))), C.isInitialized = function() {
                var t;
                for (var n in this.modules) if (!(t = this.modules[n]) || !t.initialized || !t.supported) return e.Logger.debug("rangy NOT initialized: module", n, "initialized", t.initialized, "supported", t.supported), !1;
                return !0;
            }, C;
        }, window.FLITE), function(e, t) {
            function n(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e;
            }

            for (var r = ["Edge", "Trident", "Firefox"], i = 0, o = 0; o < r.length; o += 1) if (navigator.userAgent.indexOf(r[o]) >= 0) {
                i = 1;
                break;
            }
            var a = Boolean(window.Promise) ? function(e) {
                var t = !1;
                return function() {
                    t || (t = !0, window.Promise.resolve().then(function() {
                        t = !1, e();
                    }));
                };
            } : function(e) {
                var t = !1;
                return function() {
                    t || (t = !0, setTimeout(function() {
                        t = !1, e();
                    }, i));
                };
            };

            function s(e) {
                return e && "[object Function]" === {}.toString.call(e);
            }

            function l(e, t) {
                if (1 !== e.nodeType) return [];
                var n = B(e).defaultView.getComputedStyle(e, null);
                return t ? n[t] : n;
            }

            function d(e) {
                return "HTML" === e.nodeName ? e : e.parentNode || e.host;
            }

            function c(e) {
                if (!e) return document.body;
                switch (e.nodeName) {
                    case"HTML":
                    case"BODY":
                        return B(e).body;
                    case"#document":
                        return e.body;
                }
                var t = l(e), n = t.overflow, r = t.overflowX, i = t.overflowY;
                return /(auto|scroll|overlay)/.test(n + i + r) ? e : c(d(e));
            }

            var u = Boolean(window.MSInputMethodContext && document.documentMode),
                p = /MSIE 10/.test(navigator.userAgent);

            function h(e) {
                return 11 === e ? u : 10 === e ? p : u || p;
            }

            function f(e) {
                if (!e) return document.documentElement;
                for (var t = B(e), n = h(10) ? t.body : null, r = e.offsetParent || null; r === n && e.nextElementSibling;) r = (e = e.nextElementSibling).offsetParent;
                var i = r && r.nodeName;
                return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TH", "TD", "TABLE"].indexOf(r.nodeName) && "static" === l(r, "position") ? f(r) : r : B(e).documentElement;
            }

            function g(e) {
                return null !== e.parentNode ? g(e.parentNode) : e;
            }

            function m(e, t) {
                var n = B(e || t);
                if (!(e && e.nodeType && t && t.nodeType)) return n.documentElement;
                var r = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING, i = r ? e : t, o = r ? t : e,
                    a = n.createRange();
                a.setStart(i, 0), a.setEnd(o, 0);
                var s = a.commonAncestorContainer;
                if (e !== s && t !== s || i.contains(o)) return function(e) {
                    var t = e.nodeName;
                    return "BODY" !== t && ("HTML" === t || f(e.firstElementChild) === e);
                }(s) ? s : f(s);
                var l = g(e);
                return l.host ? m(l.host, t) : m(e, g(t).host);
            }

            function v(e) {
                var t = "top" === (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
                    n = e.nodeName;
                if ("BODY" === n || "HTML" === n) {
                    var r = B(e), i = r.documentElement;
                    return (r.scrollingElement || i)[t];
                }
                return e[t];
            }

            function y(e, t) {
                var n = "x" === t ? "Left" : "Top", r = "Left" === n ? "Right" : "Bottom";
                return parseFloat(e["border" + n + "Width"], 10) + parseFloat(e["border" + r + "Width"], 10);
            }

            function _(e, t, n, r) {
                return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], h(10) ? parseInt(n["offset" + e]) + parseInt(r["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(r["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0);
            }

            function N(e) {
                var t = e.body, n = e.documentElement, r = h(10) && getComputedStyle(n);
                return { height: _("Height", t, n, r), width: _("Width", t, n, r) };
            }

            var b = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
            };

            function C(e) {
                return b({}, e, { right: e.left + e.width, bottom: e.top + e.height });
            }

            function T(e) {
                var t = {};
                try {
                    if (h(10)) {
                        t = e.getBoundingClientRect();
                        var n = v(e, "top"), r = v(e, "left");
                        t.top += n, t.left += r, t.bottom += n, t.right += r;
                    } else t = e.getBoundingClientRect();
                } catch (e) {
                }
                var i = { left: t.left, top: t.top, width: t.right - t.left, height: t.bottom - t.top },
                    o = "HTML" === e.nodeName ? N(B(e)) : {}, a = o.width || e.clientWidth || i.right - i.left,
                    s = o.height || e.clientHeight || i.bottom - i.top, d = e.offsetWidth - a, c = e.offsetHeight - s;
                if (d || c) {
                    var u = l(e);
                    d -= y(u, "x"), c -= y(u, "y"), i.width -= d, i.height -= c;
                }
                return C(i);
            }

            function E(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], r = h(10),
                    i = "HTML" === t.nodeName, o = T(e), a = T(t), s = c(e), d = l(t),
                    u = parseFloat(d.borderTopWidth, 10), p = parseFloat(d.borderLeftWidth, 10);
                n && i && (a.top = Math.max(a.top, 0), a.left = Math.max(a.left, 0));
                var f = C({ top: o.top - a.top - u, left: o.left - a.left - p, width: o.width, height: o.height });
                if (f.marginTop = 0, f.marginLeft = 0, !r && i) {
                    var g = parseFloat(d.marginTop, 10), m = parseFloat(d.marginLeft, 10);
                    f.top -= u - g, f.bottom -= u - g, f.left -= p - m, f.right -= p - m, f.marginTop = g, f.marginLeft = m;
                }
                return (r && !n ? t.contains(s) : t === s && "BODY" !== s.nodeName) && (f = function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], r = v(t, "top"),
                        i = v(t, "left"), o = n ? -1 : 1;
                    return e.top += r * o, e.bottom += r * o, e.left += i * o, e.right += i * o, e;
                }(f, t)), f;
            }

            function S(e) {
                var t = B(e);
                if (!e || !e.parentElement || h()) return t.documentElement;
                for (var n = e.parentElement; n && "none" === l(n, "transform");) n = n.parentElement;
                return n || t.documentElement;
            }

            function O(e, t, n, r) {
                var i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4], o = { top: 0, left: 0 },
                    a = i ? S(e) : m(e, t);
                if ("viewport" === r) o = function(e) {
                    var t = B(e).defaultView, n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        r = B(e).documentElement, i = E(e, r), o = Math.max(r.clientWidth, t.innerWidth || 0),
                        a = Math.max(r.clientHeight, t.innerHeight || 0), s = n ? 0 : v(r), l = n ? 0 : v(r, "left");
                    return C({ top: s - i.top + i.marginTop, left: l - i.left + i.marginLeft, width: o, height: a });
                }(a, i); else {
                    var s = void 0;
                    "scrollParent" === r ? "BODY" === (s = c(d(t))).nodeName && (s = B(e).documentElement) : s = "window" === r ? B(e).documentElement : r;
                    var u = E(s, a, i);
                    if ("HTML" !== s.nodeName || function e(t) {
                        var n = t.nodeName;
                        if ("BODY" === n || "HTML" === n) return !1;
                        if ("fixed" === l(t, "position")) return !0;
                        var r = d(t);
                        return !!r && e(r);
                    }(a)) o = u; else {
                        var p = N(B(e)), h = p.height, f = p.width;
                        o.top += u.top - u.marginTop, o.bottom = h + u.top, o.left += u.left - u.marginLeft, o.right = f + u.left;
                    }
                }
                var g = "number" == typeof (n = n || 0);
                return o.left += g ? n : n.left || 0, o.top += g ? n : n.top || 0, o.right -= g ? n : n.right || 0, o.bottom -= g ? n : n.bottom || 0, o;
            }

            function k(e, t, n, r, i) {
                var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
                if (-1 === e.indexOf("auto")) return e;
                var a = O(n, r, o, i), s = {
                    top: { width: a.width, height: t.top - a.top },
                    right: { width: a.right - t.right, height: a.height },
                    bottom: { width: a.width, height: a.bottom - t.bottom },
                    left: { width: t.left - a.left, height: a.height }
                }, l = Object.keys(s).map(function(e) {
                    return b({ key: e }, s[e], {
                        area: function(e) {
                            return e.width * e.height;
                        }(s[e])
                    });
                }).sort(function(e, t) {
                    return t.area - e.area;
                }), d = l.filter(function(e) {
                    var t = e.width, r = e.height;
                    return t >= n.clientWidth && r >= n.clientHeight;
                }), c = d.length > 0 ? d[0].key : l[0].key, u = e.split("-")[1];
                return c + (u ? "-" + u : "");
            }

            function x(e, t, n) {
                var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                return E(n, r ? S(t) : m(t, n), r);
            }

            function w(e) {
                var t = B(e).defaultView.getComputedStyle(e),
                    n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0),
                    r = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
                return { width: e.offsetWidth + r, height: e.offsetHeight + n };
            }

            function R(e) {
                var t = { left: "right", right: "left", bottom: "top", top: "bottom" };
                return e.replace(/left|right|bottom|top/g, function(e) {
                    return t[e];
                });
            }

            function D(e, t, n) {
                n = n.split("-")[0];
                var r = w(e), i = { width: r.width, height: r.height }, o = -1 !== ["right", "left"].indexOf(n),
                    a = o ? "top" : "left", s = o ? "left" : "top", l = o ? "height" : "width",
                    d = o ? "width" : "height";
                return i[a] = t[a] + t[l] / 2 - r[l] / 2, i[s] = n === s ? t[s] - r[d] : t[R(s)], i;
            }

            function I(e, t) {
                return Array.prototype.find ? e.find(t) : e.filter(t)[0];
            }

            function A(e, t, n) {
                return (void 0 === n ? e : e.slice(0, function(e, t, n) {
                    if (Array.prototype.findIndex) return e.findIndex(function(e) {
                        return e[t] === n;
                    });
                    var r = I(e, function(e) {
                        return e[t] === n;
                    });
                    return e.indexOf(r);
                }(e, "name", n))).forEach(function(e) {
                    e.function;
                    var n = e.function || e.fn;
                    e.enabled && s(n) && (t.offsets.popper = C(t.offsets.popper), t.offsets.reference = C(t.offsets.reference), t = n(t, e));
                }), t;
            }

            function L(e, t) {
                return e.some(function(e) {
                    var n = e.name;
                    return e.enabled && n === t;
                });
            }

            function M(e) {
                for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), r = 0; r < t.length; r++) {
                    var i = t[r], o = i ? "" + i + n : e;
                    if (void 0 !== document.body.style[o]) return o;
                }
                return null;
            }

            function P(e) {
                return B(e).defaultView;
            }

            function B(e) {
                return e ? e.ownerDocument ? e.ownerDocument : e.documentElement || "#document" === e.nodeName ? e : window.document : window.document;
            }

            function F(e, t, n, r) {
                n.updateBound = r, P(e).addEventListener("resize", n.updateBound, { passive: !0 });
                var i = c(e);
                return function e(t, n, r, i) {
                    var o = "BODY" === t.nodeName, a = o ? B(t).defaultView : t;
                    a.addEventListener(n, r, { passive: !0 }), o || e(c(a.parentNode), n, r, i), i.push(a);
                }(i, "scroll", n.updateBound, n.scrollParents), n.scrollElement = i, n.eventsEnabled = !0, n;
            }

            function U() {
                this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = function(e, t) {
                    return P(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function(e) {
                        e.removeEventListener("scroll", t.updateBound);
                    }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t;
                }(this.reference, this.state));
            }

            function H(e) {
                return "" !== e && !isNaN(parseFloat(e)) && isFinite(e);
            }

            function j(e, t) {
                Object.keys(t).forEach(function(n) {
                    var r = "";
                    -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && H(t[n]) && (r = "px"), e.style[n] = t[n] + r;
                });
            }

            var V = /Firefox/i.test(navigator.userAgent);

            function W(e, t, n) {
                var r = I(e, function(e) {
                    return e.name === t;
                }), i = !!r && e.some(function(e) {
                    return e.name === n && e.enabled && e.order < r.order;
                });
                if (!i) ;
                return i;
            }

            var X = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
                Y = X.slice(3);

            function z(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = Y.indexOf(e),
                    r = Y.slice(n + 1).concat(Y.slice(0, n));
                return t ? r.reverse() : r;
            }

            var q = { FLIP: "flip", CLOCKWISE: "clockwise", COUNTERCLOCKWISE: "counterclockwise" };

            function $(e, t, n, r) {
                var i = [0, 0], o = -1 !== ["right", "left"].indexOf(r), a = e.split(/(\+|\-)/).map(function(e) {
                    return e.trim();
                }), s = a.indexOf(I(a, function(e) {
                    return -1 !== e.search(/,|\s/);
                }));
                a[s] && a[s].indexOf(",");
                var l = /\s*,\s*|\s+/,
                    d = -1 !== s ? [a.slice(0, s).concat([a[s].split(l)[0]]), [a[s].split(l)[1]].concat(a.slice(s + 1))] : [a];
                return (d = d.map(function(e, r) {
                    var i = (1 === r ? !o : o) ? "height" : "width", a = !1;
                    return e.reduce(function(e, t) {
                        return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, a = !0, e) : a ? (e[e.length - 1] += t, a = !1, e) : e.concat(t);
                    }, []).map(function(e) {
                        return function(e, t, n, r) {
                            var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/), o = +i[1], a = i[2];
                            if (!o) return e;
                            var s = instance.doc, l = P(instance.reference);
                            if (0 === a.indexOf("%")) {
                                var d = void 0;
                                switch (a) {
                                    case"%p":
                                        d = n;
                                        break;
                                    case"%":
                                    case"%r":
                                    default:
                                        d = r;
                                }
                                return C(d)[t] / 100 * o;
                            }
                            if ("vh" === a || "vw" === a) return ("vh" === a ? Math.max(s.documentElement.clientHeight, l.innerHeight || 0) : Math.max(s.documentElement.clientWidth, l.innerWidth || 0)) / 100 * o;
                            return o;
                        }(e, i, t, n);
                    });
                })).forEach(function(e, t) {
                    e.forEach(function(n, r) {
                        H(n) && (i[t] += n * ("-" === e[r - 1] ? -1 : 1));
                    });
                }), i;
            }

            var G = {
                placement: "bottom", positionFixed: !1, eventsEnabled: !0, removeOnDestroy: !1, onCreate: function() {
                }, onUpdate: function() {
                }, modifiers: {
                    shift: {
                        order: 100, enabled: !0, fn: function(e) {
                            var t = e.placement, r = t.split("-")[0], i = t.split("-")[1];
                            if (i) {
                                var o = e.offsets, a = o.reference, s = o.popper,
                                    l = -1 !== ["bottom", "top"].indexOf(r), d = l ? "left" : "top",
                                    c = l ? "width" : "height",
                                    u = { start: n({}, d, a[d]), end: n({}, d, a[d] + a[c] - s[c]) };
                                e.offsets.popper = b({}, s, u[i]);
                            }
                            return e;
                        }
                    }, offset: {
                        order: 200, enabled: !0, fn: function(e, t) {
                            var n = t.offset, r = e.placement, i = e.offsets, o = i.popper, a = i.reference,
                                s = r.split("-")[0], l = void 0;
                            return l = H(+n) ? [+n, 0] : $(n, o, a, s), "left" === s ? (o.top += l[0], o.left -= l[1]) : "right" === s ? (o.top += l[0], o.left += l[1]) : "top" === s ? (o.left += l[0], o.top -= l[1]) : "bottom" === s && (o.left += l[0], o.top += l[1]), e.popper = o, e;
                        }, offset: 0
                    }, preventOverflow: {
                        order: 300, enabled: !0, fn: function(e, t) {
                            var r = t.boundariesElement || f(e.instance.popper);
                            e.instance.reference === r && (r = f(r));
                            var i = M("transform"), o = e.instance.popper.style, a = o.top, s = o.left, l = o[i];
                            o.top = "", o.left = "", o[i] = "";
                            var d = O(e.instance.popper, e.instance.reference, t.padding, r, e.positionFixed);
                            o.top = a, o.left = s, o[i] = l, t.boundaries = d;
                            var c = t.priority, u = e.offsets.popper, p = {
                                primary: function(e) {
                                    var r = u[e];
                                    return u[e] < d[e] && !t.escapeWithReference && (r = Math.max(u[e], d[e])), n({}, e, r);
                                }, secondary: function(e) {
                                    var r = "right" === e ? "left" : "top", i = u[r];
                                    return u[e] > d[e] && !t.escapeWithReference && (i = Math.min(u[r], d[e] - ("right" === e ? u.width : u.height))), n({}, r, i);
                                }
                            };
                            return c.forEach(function(e) {
                                var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                                u = b({}, u, p[t](e));
                            }), e.offsets.popper = u, e;
                        }, priority: ["left", "right", "top", "bottom"], padding: 5, boundariesElement: "scrollParent"
                    }, keepTogether: {
                        order: 400, enabled: !0, fn: function(e) {
                            var t = e.offsets, n = t.popper, r = t.reference, i = e.placement.split("-")[0],
                                o = Math.floor, a = -1 !== ["top", "bottom"].indexOf(i), s = a ? "right" : "bottom",
                                l = a ? "left" : "top", d = a ? "width" : "height";
                            return n[s] < o(r[l]) && (e.offsets.popper[l] = o(r[l]) - n[d]), n[l] > o(r[s]) && (e.offsets.popper[l] = o(r[s])), e;
                        }
                    }, arrow: {
                        order: 500, enabled: !0, fn: function(e, t) {
                            var r;
                            if (!W(e.instance.modifiers, "arrow", "keepTogether")) return e;
                            var i = t.element;
                            if ("string" == typeof i) {
                                if (!(i = e.instance.popper.querySelector(i))) return e;
                            } else if (!e.instance.popper.contains(i)) return e;
                            var o = e.placement.split("-")[0], a = e.offsets, s = a.popper, d = a.reference,
                                c = -1 !== ["left", "right"].indexOf(o), u = c ? "height" : "width",
                                p = c ? "Top" : "Left", h = p.toLowerCase(), f = c ? "left" : "top",
                                g = c ? "bottom" : "right", m = w(i)[u];
                            d[g] - m < s[h] && (e.offsets.popper[h] -= s[h] - (d[g] - m)), d[h] + m > s[g] && (e.offsets.popper[h] += d[h] + m - s[g]), e.offsets.popper = C(e.offsets.popper);
                            var v = d[h] + d[u] / 2 - m / 2, y = l(e.instance.popper),
                                _ = parseFloat(y["margin" + p], 10), N = parseFloat(y["border" + p + "Width"], 10),
                                b = v - e.offsets.popper[h] - _ - N;
                            return b = Math.max(Math.min(s[u] - m, b), 0), e.arrowElement = i, e.offsets.arrow = (n(r = {}, h, Math.round(b)), n(r, f, ""), r), e;
                        }, element: "[x-arrow]"
                    }, flip: {
                        order: 600, enabled: !0, fn: function(e, t) {
                            if (L(e.instance.modifiers, "inner")) return e;
                            if (e.flipped && e.placement === e.originalPlacement) return e;
                            var n = O(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
                                r = e.placement.split("-")[0], i = R(r), o = e.placement.split("-")[1] || "", a = [];
                            switch (t.behavior) {
                                case q.FLIP:
                                    a = [r, i];
                                    break;
                                case q.CLOCKWISE:
                                    a = z(r);
                                    break;
                                case q.COUNTERCLOCKWISE:
                                    a = z(r, !0);
                                    break;
                                default:
                                    a = t.behavior;
                            }
                            return a.forEach(function(s, l) {
                                if (r !== s || a.length === l + 1) return e;
                                r = e.placement.split("-")[0], i = R(r);
                                var d = e.offsets.popper, c = e.offsets.reference, u = Math.floor,
                                    p = "left" === r && u(d.right) > u(c.left) || "right" === r && u(d.left) < u(c.right) || "top" === r && u(d.bottom) > u(c.top) || "bottom" === r && u(d.top) < u(c.bottom),
                                    h = u(d.left) < u(n.left), f = u(d.right) > u(n.right), g = u(d.top) < u(n.top),
                                    m = u(d.bottom) > u(n.bottom),
                                    v = "left" === r && h || "right" === r && f || "top" === r && g || "bottom" === r && m,
                                    y = -1 !== ["top", "bottom"].indexOf(r),
                                    _ = !!t.flipVariations && (y && "start" === o && h || y && "end" === o && f || !y && "start" === o && g || !y && "end" === o && m);
                                (p || v || _) && (e.flipped = !0, (p || v) && (r = a[l + 1]), _ && (o = function(e) {
                                    return "end" === e ? "start" : "start" === e ? "end" : e;
                                }(o)), e.placement = r + (o ? "-" + o : ""), e.offsets.popper = b({}, e.offsets.popper, D(e.instance.popper, e.offsets.reference, e.placement)), e = A(e.instance.modifiers, e, "flip"));
                            }), e;
                        }, behavior: "flip", padding: 5, boundariesElement: "viewport"
                    }, inner: {
                        order: 700, enabled: !1, fn: function(e) {
                            var t = e.placement, n = t.split("-")[0], r = e.offsets, i = r.popper, o = r.reference,
                                a = -1 !== ["left", "right"].indexOf(n), s = -1 === ["top", "left"].indexOf(n);
                            return i[a ? "left" : "top"] = o[n] - (s ? i[a ? "width" : "height"] : 0), e.placement = R(t), e.offsets.popper = C(i), e;
                        }
                    }, hide: {
                        order: 800, enabled: !0, fn: function(e) {
                            if (!W(e.instance.modifiers, "hide", "preventOverflow")) return e;
                            var t = e.offsets.reference, n = I(e.instance.modifiers, function(e) {
                                return "preventOverflow" === e.name;
                            }).boundaries;
                            if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                                if (!0 === e.hide) return e;
                                e.hide = !0, e.attributes["x-out-of-boundaries"] = "";
                            } else {
                                if (!1 === e.hide) return e;
                                e.hide = !1, e.attributes["x-out-of-boundaries"] = !1;
                            }
                            return e;
                        }
                    }, computeStyle: {
                        order: 850, enabled: !0, fn: function(e, t) {
                            var n = t.x, r = t.y, i = P(e.instance.reference), o = e.offsets.popper,
                                a = I(e.instance.modifiers, function(e) {
                                    return "applyStyle" === e.name;
                                }).gpuAcceleration, s = void 0 !== a ? a : t.gpuAcceleration, l = f(e.instance.popper),
                                d = T(l), c = { position: o.position }, u = function(e, t) {
                                    var n = e.offsets, r = n.popper, i = n.reference, o = Math.round, a = Math.floor,
                                        s = function(e) {
                                            return e;
                                        }, l = o(i.width), d = o(r.width),
                                        c = -1 !== ["left", "right"].indexOf(e.placement),
                                        u = -1 !== e.placement.indexOf("-"), p = t ? c || u || l % 2 == d % 2 ? o : a : s,
                                        h = t ? o : s;
                                    return {
                                        left: p(l % 2 == 1 && d % 2 == 1 && !u && t ? r.left - 1 : r.left),
                                        top: h(r.top),
                                        bottom: h(r.bottom),
                                        right: p(r.right)
                                    };
                                }(e, i.devicePixelRatio < 2 || !V), p = "bottom" === n ? "top" : "bottom",
                                h = "right" === r ? "left" : "right", g = M("transform"), m = void 0, v = void 0;
                            if (v = "bottom" === p ? "HTML" === l.nodeName ? -l.clientHeight + u.bottom : -d.height + u.bottom : u.top, m = "right" === h ? "HTML" === l.nodeName ? -l.clientWidth + u.right : -d.width + u.right : u.left, s && g) c[g] = "translate3d(" + m + "px, " + v + "px, 0)", c[p] = 0, c[h] = 0, c.willChange = "transform"; else {
                                var y = "bottom" === p ? -1 : 1, _ = "right" === h ? -1 : 1;
                                c[p] = v * y, c[h] = m * _, c.willChange = p + ", " + h;
                            }
                            var N = { "x-placement": e.placement };
                            return e.attributes = b({}, N, e.attributes), e.styles = b({}, c, e.styles), e.arrowStyles = b({}, e.offsets.arrow, e.arrowStyles), e;
                        }, gpuAcceleration: !0, x: "bottom", y: "right"
                    }, applyStyle: {
                        order: 900, enabled: !0, fn: function(e) {
                            return j(e.instance.popper, e.styles), function(e, t) {
                                Object.keys(t).forEach(function(n) {
                                    !1 !== t[n] ? e.setAttribute(n, t[n]) : e.removeAttribute(n);
                                });
                            }(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && j(e.arrowElement, e.arrowStyles), e;
                        }, onLoad: function(e, t, n, r, i) {
                            var o = x(i, t, e, n.positionFixed),
                                a = k(n.placement, o, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                            return t.setAttribute("x-placement", a), j(t, { position: n.positionFixed ? "fixed" : "absolute" }), n;
                        }, gpuAcceleration: void 0
                    }
                }
            }, K = function(e, t, n) {
                var r = this;
                n = n || {}, this.scheduleUpdate = function() {
                    return requestAnimationFrame(r.update);
                }, this.update = a(this.update.bind(this)), this.options = b({}, K.Defaults, n), this.state = {
                    isDestroyed: !1,
                    isCreated: !1,
                    scrollParents: []
                }, this.reference = e && e.jquery ? e[0] : e, this.popper = t && t.jquery ? t[0] : t, this.options.modifiers = {}, Object.keys(b({}, K.Defaults.modifiers, n.modifiers)).forEach(function(e) {
                    r.options.modifiers[e] = b({}, K.Defaults.modifiers[e] || {}, n.modifiers ? n.modifiers[e] : {});
                }), this.modifiers = Object.keys(this.options.modifiers).map(function(e) {
                    return b({ name: e }, r.options.modifiers[e]);
                }).sort(function(e, t) {
                    return e.order - t.order;
                }), this.modifiers.forEach(function(e) {
                    e.enabled && s(e.onLoad) && e.onLoad(r.reference, r.popper, r.options, e, r.state);
                }), this.update();
                var i = this.options.eventsEnabled;
                i && this.enableEventListeners(), this.state.eventsEnabled = i;
            };
            K.prototype = {
                update: function() {
                    return function() {
                        if (!this.state.isDestroyed) {
                            var e = {
                                instance: this,
                                styles: {},
                                arrowStyles: {},
                                attributes: {},
                                flipped: !1,
                                offsets: {}
                            };
                            e.offsets.reference = x(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = k(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = D(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = A(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e));
                        }
                    }.call(this);
                }, destroy: function() {
                    return function() {
                        return this.state.isDestroyed = !0, L(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[M("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this;
                    }.call(this);
                }, enableEventListeners: function() {
                    return function() {
                        this.state.eventsEnabled || (this.state = F(this.reference, this.options, this.state, this.scheduleUpdate));
                    }.call(this);
                }, disableEventListeners: function() {
                    return U.call(this);
                }
            }, K.placements = X, K.Defaults = G, K.hasOwnProperty("default") && (K = K.default);
            var Q = ".tippy-iOS{cursor:pointer!important}.tippy-notransition{transition:none}.tippy-popper{transition-timing-function:cubic-bezier(.165,.84,.44,1);max-width:calc(100% - 8px);pointer-events:none;outline:0}.tippy-popper[x-placement^=top] .tippy-backdrop{border-radius:40% 40% 0 0}.tippy-popper[x-placement^=top] .tippy-roundarrow{bottom:-7px;bottom:-6.5px;-webkit-transform-origin:50% 0;transform-origin:50% 0;margin:0 3px}.tippy-popper[x-placement^=top] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(180deg);transform:rotate(180deg)}.tippy-popper[x-placement^=top] .tippy-arrow{border-top:8px solid #333;border-right:8px solid transparent;border-left:8px solid transparent;bottom:-7px;margin:0 3px;-webkit-transform-origin:50% 0;transform-origin:50% 0}.tippy-popper[x-placement^=top] .tippy-backdrop{-webkit-transform-origin:0 25%;transform-origin:0 25%}.tippy-popper[x-placement^=top] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(1) translate(-50%,-55%);transform:scale(1) translate(-50%,-55%)}.tippy-popper[x-placement^=top] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(.2) translate(-50%,-45%);transform:scale(.2) translate(-50%,-45%);opacity:0}.tippy-popper[x-placement^=top] [data-animation=shift-toward][data-state=visible]{-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateY(-20px);transform:translateY(-20px)}.tippy-popper[x-placement^=top] [data-animation=perspective]{-webkit-transform-origin:bottom;transform-origin:bottom}.tippy-popper[x-placement^=top] [data-animation=perspective][data-state=visible]{-webkit-transform:perspective(700px) translateY(-10px) rotateX(0);transform:perspective(700px) translateY(-10px) rotateX(0)}.tippy-popper[x-placement^=top] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:perspective(700px) translateY(0) rotateX(60deg);transform:perspective(700px) translateY(0) rotateX(60deg)}.tippy-popper[x-placement^=top] [data-animation=fade][data-state=visible]{-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=shift-away][data-state=visible]{-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=shift-away][data-state=hidden]{opacity:0;-webkit-transform:translateY(0);transform:translateY(0)}.tippy-popper[x-placement^=top] [data-animation=scale]{-webkit-transform-origin:bottom;transform-origin:bottom}.tippy-popper[x-placement^=top] [data-animation=scale][data-state=visible]{-webkit-transform:translateY(-10px) scale(1);transform:translateY(-10px) scale(1)}.tippy-popper[x-placement^=top] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateY(-10px) scale(.5);transform:translateY(-10px) scale(.5)}.tippy-popper[x-placement^=bottom] .tippy-backdrop{border-radius:0 0 30% 30%}.tippy-popper[x-placement^=bottom] .tippy-roundarrow{top:-7px;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;margin:0 3px}.tippy-popper[x-placement^=bottom] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(0);transform:rotate(0)}.tippy-popper[x-placement^=bottom] .tippy-arrow{border-bottom:8px solid #333;border-right:8px solid transparent;border-left:8px solid transparent;top:-7px;margin:0 3px;-webkit-transform-origin:50% 100%;transform-origin:50% 100%}.tippy-popper[x-placement^=bottom] .tippy-backdrop{-webkit-transform-origin:0 -50%;transform-origin:0 -50%}.tippy-popper[x-placement^=bottom] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(1) translate(-50%,-45%);transform:scale(1) translate(-50%,-45%)}.tippy-popper[x-placement^=bottom] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(.2) translate(-50%);transform:scale(.2) translate(-50%);opacity:0}.tippy-popper[x-placement^=bottom] [data-animation=shift-toward][data-state=visible]{-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateY(20px);transform:translateY(20px)}.tippy-popper[x-placement^=bottom] [data-animation=perspective]{-webkit-transform-origin:top;transform-origin:top}.tippy-popper[x-placement^=bottom] [data-animation=perspective][data-state=visible]{-webkit-transform:perspective(700px) translateY(10px) rotateX(0);transform:perspective(700px) translateY(10px) rotateX(0)}.tippy-popper[x-placement^=bottom] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:perspective(700px) translateY(0) rotateX(-60deg);transform:perspective(700px) translateY(0) rotateX(-60deg)}.tippy-popper[x-placement^=bottom] [data-animation=fade][data-state=visible]{-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=shift-away][data-state=visible]{-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=shift-away][data-state=hidden]{opacity:0;-webkit-transform:translateY(0);transform:translateY(0)}.tippy-popper[x-placement^=bottom] [data-animation=scale]{-webkit-transform-origin:top;transform-origin:top}.tippy-popper[x-placement^=bottom] [data-animation=scale][data-state=visible]{-webkit-transform:translateY(10px) scale(1);transform:translateY(10px) scale(1)}.tippy-popper[x-placement^=bottom] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateY(10px) scale(.5);transform:translateY(10px) scale(.5)}.tippy-popper[x-placement^=left] .tippy-backdrop{border-radius:50% 0 0 50%}.tippy-popper[x-placement^=left] .tippy-roundarrow{right:-12px;-webkit-transform-origin:33.33333333% 50%;transform-origin:33.33333333% 50%;margin:3px 0}.tippy-popper[x-placement^=left] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(90deg);transform:rotate(90deg)}.tippy-popper[x-placement^=left] .tippy-arrow{border-left:8px solid #333;border-top:8px solid transparent;border-bottom:8px solid transparent;right:-7px;margin:3px 0;-webkit-transform-origin:0 50%;transform-origin:0 50%}.tippy-popper[x-placement^=left] .tippy-backdrop{-webkit-transform-origin:50% 0;transform-origin:50% 0}.tippy-popper[x-placement^=left] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(1) translate(-50%,-50%);transform:scale(1) translate(-50%,-50%)}.tippy-popper[x-placement^=left] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(.2) translate(-75%,-50%);transform:scale(.2) translate(-75%,-50%);opacity:0}.tippy-popper[x-placement^=left] [data-animation=shift-toward][data-state=visible]{-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateX(-20px);transform:translateX(-20px)}.tippy-popper[x-placement^=left] [data-animation=perspective]{-webkit-transform-origin:right;transform-origin:right}.tippy-popper[x-placement^=left] [data-animation=perspective][data-state=visible]{-webkit-transform:perspective(700px) translateX(-10px) rotateY(0);transform:perspective(700px) translateX(-10px) rotateY(0)}.tippy-popper[x-placement^=left] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:perspective(700px) translateX(0) rotateY(-60deg);transform:perspective(700px) translateX(0) rotateY(-60deg)}.tippy-popper[x-placement^=left] [data-animation=fade][data-state=visible]{-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=shift-away][data-state=visible]{-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=shift-away][data-state=hidden]{opacity:0;-webkit-transform:translateX(0);transform:translateX(0)}.tippy-popper[x-placement^=left] [data-animation=scale]{-webkit-transform-origin:right;transform-origin:right}.tippy-popper[x-placement^=left] [data-animation=scale][data-state=visible]{-webkit-transform:translateX(-10px) scale(1);transform:translateX(-10px) scale(1)}.tippy-popper[x-placement^=left] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateX(-10px) scale(.5);transform:translateX(-10px) scale(.5)}.tippy-popper[x-placement^=right] .tippy-backdrop{border-radius:0 50% 50% 0}.tippy-popper[x-placement^=right] .tippy-roundarrow{left:-12px;-webkit-transform-origin:66.66666666% 50%;transform-origin:66.66666666% 50%;margin:3px 0}.tippy-popper[x-placement^=right] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.tippy-popper[x-placement^=right] .tippy-arrow{border-right:8px solid #333;border-top:8px solid transparent;border-bottom:8px solid transparent;left:-7px;margin:3px 0;-webkit-transform-origin:100% 50%;transform-origin:100% 50%}.tippy-popper[x-placement^=right] .tippy-backdrop{-webkit-transform-origin:-50% 0;transform-origin:-50% 0}.tippy-popper[x-placement^=right] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(1) translate(-50%,-50%);transform:scale(1) translate(-50%,-50%)}.tippy-popper[x-placement^=right] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(.2) translate(-25%,-50%);transform:scale(.2) translate(-25%,-50%);opacity:0}.tippy-popper[x-placement^=right] [data-animation=shift-toward][data-state=visible]{-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateX(20px);transform:translateX(20px)}.tippy-popper[x-placement^=right] [data-animation=perspective]{-webkit-transform-origin:left;transform-origin:left}.tippy-popper[x-placement^=right] [data-animation=perspective][data-state=visible]{-webkit-transform:perspective(700px) translateX(10px) rotateY(0);transform:perspective(700px) translateX(10px) rotateY(0)}.tippy-popper[x-placement^=right] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:perspective(700px) translateX(0) rotateY(60deg);transform:perspective(700px) translateX(0) rotateY(60deg)}.tippy-popper[x-placement^=right] [data-animation=fade][data-state=visible]{-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=shift-away][data-state=visible]{-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=shift-away][data-state=hidden]{opacity:0;-webkit-transform:translateX(0);transform:translateX(0)}.tippy-popper[x-placement^=right] [data-animation=scale]{-webkit-transform-origin:left;transform-origin:left}.tippy-popper[x-placement^=right] [data-animation=scale][data-state=visible]{-webkit-transform:translateX(10px) scale(1);transform:translateX(10px) scale(1)}.tippy-popper[x-placement^=right] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateX(10px) scale(.5);transform:translateX(10px) scale(.5)}.tippy-tooltip{position:relative;color:#fff;border-radius:.25rem;font-size:.875rem;padding:.3125rem .5625rem;line-height:1.4;text-align:center;will-change:transform;background-color:#333}.tippy-tooltip[data-size=small]{padding:.1875rem .375rem;font-size:.75rem}.tippy-tooltip[data-size=large]{padding:.375rem .75rem;font-size:1rem}.tippy-tooltip[data-animatefill]{overflow:hidden;background-color:transparent}.tippy-tooltip[data-interactive],.tippy-tooltip[data-interactive] path{pointer-events:auto}.tippy-tooltip[data-inertia][data-state=visible]{transition-timing-function:cubic-bezier(.54,1.5,.38,1.11)}.tippy-tooltip[data-inertia][data-state=hidden]{transition-timing-function:ease}.tippy-arrow,.tippy-roundarrow{position:absolute;width:0;height:0}.tippy-roundarrow{width:18px;height:7px;fill:#333;pointer-events:none}.tippy-backdrop{position:absolute;will-change:transform;background-color:#333;border-radius:50%;width:calc(110% + 2rem);left:50%;top:50%;z-index:-1;transition:all cubic-bezier(.46,.1,.52,.98);-webkit-backface-visibility:hidden;backface-visibility:hidden}.tippy-backdrop:after{content:\"\";float:left;padding-top:100%}.tippy-backdrop+.tippy-content{transition-property:opacity;will-change:opacity}.tippy-backdrop+.tippy-content[data-state=visible]{opacity:1}.tippy-backdrop+.tippy-content[data-state=hidden]{opacity:0}";

            function b() {
                return (b = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                    }
                    return e;
                }).apply(this, arguments);
            }

            var J = navigator.userAgent, Z = (/MSIE |Trident\//.test(J), /UCBrowser\//.test(J)),
                ee = /iPhone|iPad|iPod/.test(navigator.platform) && !window.MSStream, te = (G = {
                    a11y: !0,
                    allowHTML: !0,
                    animateFill: !0,
                    animation: "shift-away",
                    appendTo: function(e) {
                        return B(e).body;
                    },
                    aria: "describedby",
                    arrow: !1,
                    arrowType: "sharp",
                    boundary: "scrollParent",
                    content: "",
                    delay: [0, 20],
                    distance: 10,
                    duration: [325, 275],
                    flip: !0,
                    flipBehavior: "flip",
                    flipOnUpdate: !1,
                    followCursor: !1,
                    hideOnClick: !0,
                    ignoreAttributes: !1,
                    inertia: !1,
                    interactive: !1,
                    interactiveBorder: 2,
                    interactiveDebounce: 0,
                    lazy: !0,
                    maxWidth: 350,
                    multiple: !1,
                    offset: 0,
                    onHidden: function() {
                    },
                    onHide: function() {
                    },
                    onMount: function() {
                    },
                    onShow: function() {
                    },
                    onShown: function() {
                    },
                    placement: "top",
                    popperOptions: {},
                    role: "tooltip",
                    showOnInit: !1,
                    size: "regular",
                    sticky: !1,
                    target: "",
                    theme: "dark",
                    touch: !0,
                    touchHold: !1,
                    trigger: "mouseenter focus",
                    updateDuration: 0,
                    wait: null,
                    zIndex: 9999
                }, ["arrow", "arrowType", "boundary", "distance", "flip", "flipBehavior", "flipOnUpdate", "offset", "placement", "popperOptions"]),
                ne = {
                    POPPER: ".tippy-popper",
                    TOOLTIP: ".tippy-tooltip",
                    CONTENT: ".tippy-content",
                    BACKDROP: ".tippy-backdrop",
                    ARROW: ".tippy-arrow",
                    ROUND_ARROW: ".tippy-roundarrow"
                }, re = Element.prototype,
                ie = re.matches || re.matchesSelector || re.webkitMatchesSelector || re.mozMatchesSelector || re.msMatchesSelector;

            function oe(e) {
                return [].slice.call(e);
            }

            function ae(e, t) {
                return (re.closest || function(e) {
                    for (var t = this; t;) {
                        if (ie.call(t, e)) return t;
                        t = t.parentElement;
                    }
                }).call(e, t);
            }

            function se(e, t) {
                for (; e;) {
                    if (t(e)) return e;
                    e = e.parentElement;
                }
            }

            function le(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
            }

            function de(e, t, n) {
                if (Array.isArray(e)) {
                    var r = e[t];
                    return null == r ? n : r;
                }
                return e;
            }

            function a(e, t) {
                var n;
                return function() {
                    var r = this, i = arguments;
                    clearTimeout(n), n = setTimeout(function() {
                        return e.apply(r, i);
                    }, t);
                };
            }

            function ce(e, t) {
                return e && e.modifiers && e.modifiers[t];
            }

            function ue(e, t) {
                return e.indexOf(t) > -1;
            }

            function pe(e, t) {
                return "function" == typeof e ? e.apply(null, t) : e;
            }

            function he(e, t) {
                e.filter(function(e) {
                    return "flip" === e.name;
                })[0].enabled = t;
            }

            function fe(e) {
                return e.createElement("div");
            }

            function ge(e, t) {
                e.innerHTML = t instanceof Element ? t.innerHTML : t;
            }

            function me(e, t) {
                t.content instanceof Element ? (ge(e, ""), e.appendChild(t.content)) : e[t.allowHTML ? "innerHTML" : "textContent"] = t.content;
            }

            function ve(e) {
                return {
                    tooltip: e.querySelector(ne.TOOLTIP),
                    backdrop: e.querySelector(ne.BACKDROP),
                    content: e.querySelector(ne.CONTENT),
                    arrow: e.querySelector(ne.ARROW) || e.querySelector(ne.ROUND_ARROW)
                };
            }

            function ye(e) {
                e.setAttribute("data-inertia", "");
            }

            function _e(e, t) {
                var n = fe(t);
                return "round" === e ? (n.className = "tippy-roundarrow", ge(n, "<svg viewBox=\"0 0 18 7\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0 7s2.021-.015 5.253-4.218C6.584 1.051 7.797.007 9 0c1.203-.007 2.416 1.035 3.761 2.782C16.012 7.005 18 7 18 7H0z\"/></svg>")) : n.className = "tippy-arrow", n;
            }

            function Ne(e) {
                var t = fe(e);
                return t.className = "tippy-backdrop", t.setAttribute("data-state", "hidden"), t;
            }

            function be(e, t) {
                e.setAttribute("tabindex", "-1"), t.setAttribute("data-interactive", "");
            }

            function Ce(e, t) {
                e.forEach(function(e) {
                    e && (e.style.transitionDuration = "".concat(t, "ms"));
                });
            }

            function Te(e, t, n) {
                var r = Z && void 0 !== document.body.style.webkitTransition ? "webkitTransitionEnd" : "transitionend";
                e[t + "EventListener"](r, n);
            }

            function Ee(e) {
                var t = e.getAttribute("x-placement");
                return t ? t.split("-")[0] : "";
            }

            function Se(e, t) {
                e.forEach(function(e) {
                    e && e.setAttribute("data-state", t);
                });
            }

            function Oe(e, t, n) {
                n.split(" ").forEach(function(n) {
                    e.classList[t](n + "-theme");
                });
            }

            function ke(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = t.checkHideOnClick,
                    r = t.exclude, i = t.duration;
                oe(e.querySelectorAll(ne.POPPER)).forEach(function(e) {
                    var t = e._tippy;
                    !t || n && !0 !== t.props.hideOnClick || r && e === r.popper || t.hide(i);
                });
            }

            var xe = { passive: !0 }, we = 4, Re = !1;

            function De(e) {
                var t = B(e.currentTarget || e.target);
                Re || (Re = !0, ee && t.body.classList.add("tippy-iOS"), window.performance && t.addEventListener("mousemove", Ae));
            }

            var Ie = 0;

            function Ae(e) {
                var t = function(e) {
                    return B(e.currentTarget || e.target);
                }(e), n = performance.now();
                n - Ie < 20 && (Re = !1, t.removeEventListener("mousemove", Ae), ee || t.body.classList.remove("tippy-iOS")), Ie = n;
            }

            function Le(e) {
                var t = e.currentTarget || e.target;
                if (!(t instanceof Element)) return ke(B(t));
                var n = ae(t, ne.POPPER);
                if (!(n && n._tippy && n._tippy.props.interactive)) {
                    var r = se(t, function(e) {
                        return e._tippy && e._tippy.reference === e;
                    });
                    if (r) {
                        var i = r._tippy, o = ue(i.props.trigger, "click");
                        if (Re || o) return ke(B(t), { exclude: i, checkHideOnClick: !0 });
                        if (!0 !== i.props.hideOnClick || o) return;
                        i.clearDelayTimeouts();
                    }
                    ke(B(t), { checkHideOnClick: !0 });
                }
            }

            function Me(e) {
                var t = e.currentTarget || e.target, n = (t && t.document || window.document).activeElement;
                n && n.blur && n._tippy && n.blur();
            }

            var Pe = Object.keys(G);

            function Be(e, t) {
                var n = b({}, t, { content: pe(t.content, [e]) }, t.ignoreAttributes ? {} : function(e) {
                    return Pe.reduce(function(t, n) {
                        var r = (e.getAttribute("data-tippy-".concat(n)) || "").trim();
                        if (!r) return t;
                        if ("content" === n) t[n] = r; else try {
                            t[n] = JSON.parse(r);
                        } catch (e) {
                            t[n] = r;
                        }
                        return t;
                    }, {});
                }(e));
                return (n.arrow || Z) && (n.animateFill = !1), n;
            }

            function Fe() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = arguments.length > 1 ? arguments[1] : void 0;
                Object.keys(e).forEach(function(e) {
                    if (!le(t, e)) throw new Error("[tippy]: `".concat(e, "` is not a valid option"));
                });
            }

            var Ue = 1;

            function He(e, n) {
                var r = Be(e, n);
                if (function(e, n) {
                    var r, i = n.head;
                    if ((r = t(i).find("style#tippy-inline-style")).length) return;
                    (r = n.createElement("style")).setAttribute("id", "tippy-inline-style"), r.type = "text/css", r.textContent = e;
                    var o = i.firstChild;
                    i.insertBefore(r, o);
                }(Q, B(e)), !r.multiple && e._tippy) return null;
                var i = {}, o = null, s = 0, l = 0, d = !1, c = function() {
                    }, u = [], p = r.interactiveDebounce > 0 ? a(O, r.interactiveDebounce) : O, f = null, g = Ue++,
                    m = function(e, t, n) {
                        var r = fe(n);
                        r.className = "tippy-popper", r.id = "tippy-".concat(e), r.style.zIndex = t.zIndex, t.role && r.setAttribute("role", t.role);
                        var i = fe(n);
                        i.className = "tippy-tooltip", i.style.maxWidth = t.maxWidth + ("number" == typeof t.maxWidth ? "px" : ""), i.setAttribute("data-size", t.size), i.setAttribute("data-animation", t.animation), i.setAttribute("data-state", "hidden"), Oe(i, "add", t.theme);
                        var o = fe(n);
                        return o.className = "tippy-content", o.setAttribute("data-state", "hidden"), t.interactive && be(r, i), t.arrow && i.appendChild(_e(t.arrowType, n)), t.animateFill && (i.appendChild(Ne(n)), i.setAttribute("data-animatefill", "")), t.inertia && ye(i), me(o, t), i.appendChild(o), r.appendChild(i), r;
                    }(g, r, B(e));
                m.addEventListener("mouseenter", function(e) {
                    y.props.interactive && y.state.isVisible && "mouseenter" === i.type && N(e);
                }), m.addEventListener("mouseleave", function() {
                    y.props.interactive && "mouseenter" === i.type && y.doc.addEventListener("mousemove", p);
                });
                var v = ve(m), y = {
                    id: g,
                    doc: B(e),
                    reference: e,
                    popper: m,
                    popperChildren: v,
                    popperInstance: null,
                    props: r,
                    state: { isEnabled: !0, isVisible: !1, isDestroyed: !1, isMounted: !1, isShown: !1 },
                    clearDelayTimeouts: j,
                    set: V,
                    setContent: function(e) {
                        V({ content: e });
                    },
                    show: W,
                    hide: X,
                    enable: function() {
                        y.state.isEnabled = !0;
                    },
                    disable: function() {
                        y.state.isEnabled = !1;
                    },
                    destroy: Y
                };
                return F(), r.lazy || (I(), y.popperInstance.disableEventListeners()), r.showOnInit && N(), !r.a11y || r.target || function(e) {
                    return !(e instanceof Element) || ie.call(e, "a[href],area[href],button,details,input,textarea,select,iframe,[tabindex]") && !e.hasAttribute("disabled");
                }(e) || e.setAttribute("tabindex", "0"), e._tippy = y, m._tippy = y, y;

                function _(e) {
                    var t = o = e, n = t.clientX, r = t.clientY;
                    if (y.popperInstance) {
                        var i = P(y.reference), a = Ee(y.popper),
                            s = y.props.arrow ? we + ("round" === y.props.arrowType ? 18 : 16) : we,
                            l = ue(["top", "bottom"], a), d = ue(["left", "right"], a), c = l ? Math.max(s, n) : n,
                            u = d ? Math.max(s, r) : r;
                        l && c > s && (c = Math.min(n, i.innerWidth - s)), d && u > s && (u = Math.min(r, i.innerHeight - s));
                        var p = y.reference.getBoundingClientRect(), h = y.props.followCursor, f = "horizontal" === h,
                            g = "vertical" === h;
                        y.popperInstance.reference = {
                            getBoundingClientRect: function() {
                                return {
                                    width: 0,
                                    height: 0,
                                    top: f ? p.top : u,
                                    bottom: f ? p.bottom : u,
                                    left: g ? p.left : c,
                                    right: g ? p.right : c
                                };
                            }, clientWidth: 0, clientHeight: 0
                        }, y.popperInstance.scheduleUpdate(), "initial" === h && y.state.isVisible && T(y.doc);
                    }
                }

                function N(e) {
                    if (j(), !y.state.isVisible) {
                        if (y.props.target) return function(e) {
                            var t = ae(e.target, y.props.target);
                            t && !t._tippy && (He(t, b({}, y.props, {
                                content: pe(n.content, [t]),
                                appendTo: n.appendTo,
                                target: "",
                                showOnInit: !0
                            })), N(e));
                        }(e);
                        if (d = !0, y.props.wait) return y.props.wait(y, e);
                        A() && !y.state.isMounted && y.doc.addEventListener("mousemove", _);
                        var t = de(y.props.delay, 0, G.delay);
                        t ? s = setTimeout(function() {
                            W();
                        }, t) : W();
                    }
                }

                function C() {
                    if (j(), !y.state.isVisible) return T(y.doc);
                    d = !1;
                    var e = de(y.props.delay, 1, G.delay);
                    e ? l = setTimeout(function() {
                        y.state.isVisible && X();
                    }, e) : X();
                }

                function T(e) {
                    e.removeEventListener("mousemove", _);
                }

                function E(e) {
                    e && (e.body.removeEventListener("mouseleave", C), e.removeEventListener("mousemove", p));
                }

                function S(e) {
                    y.state.isEnabled && !D(e) && (y.state.isVisible || (i = e, e instanceof MouseEvent && (o = e)), "click" === e.type && !1 !== y.props.hideOnClick && y.state.isVisible ? C() : N(e));
                }

                function O(e) {
                    var t = se(e.target, function(e) {
                        return e._tippy;
                    }), n = ae(e.target, ne.POPPER) === y.popper, r = t === y.reference;
                    n || r || function(e, t, n, r) {
                        if (!e) return !0;
                        var i = n.clientX, o = n.clientY, a = r.interactiveBorder, s = r.distance,
                            l = t.top - o > ("top" === e ? a + s : a), d = o - t.bottom > ("bottom" === e ? a + s : a),
                            c = t.left - i > ("left" === e ? a + s : a), u = i - t.right > ("right" === e ? a + s : a);
                        return l || d || c || u;
                    }(Ee(y.popper), y.popper.getBoundingClientRect(), e, y.props) && (E(y.doc), C());
                }

                function k(e) {
                    if (!D(e)) {
                        var t = B(e.currentTarget || e.target);
                        if (y.props.interactive) return t.body.addEventListener("mouseleave", C), void t.addEventListener("mousemove", p);
                        C();
                    }
                }

                function x(e) {
                    e.target === y.reference && (y.props.interactive && e.relatedTarget && y.popper.contains(e.relatedTarget) || C());
                }

                function w(e) {
                    ae(e.target, y.props.target) && N(e);
                }

                function R(e) {
                    ae(e.target, y.props.target) && C();
                }

                function D(e) {
                    var t = "ontouchstart" in y.doc.defaultView, n = ue(e.type, "touch"), r = y.props.touchHold;
                    return t && Re && r && !n || Re && !r && n;
                }

                function I() {
                    var e = y.props.popperOptions, t = y.popperChildren, n = t.tooltip, r = t.arrow;
                    y.popperInstance = new K(y.reference, y.popper, b({ placement: y.props.placement }, e, {
                        modifiers: b({}, e ? e.modifiers : {}, {
                            preventOverflow: b({
                                boundariesElement: y.props.boundary,
                                padding: we
                            }, ce(e, "preventOverflow")),
                            arrow: b({ element: r, enabled: !!r }, ce(e, "arrow")),
                            flip: b({
                                enabled: y.props.flip,
                                padding: y.props.distance + we,
                                behavior: y.props.flipBehavior
                            }, ce(e, "flip")),
                            offset: b({ offset: y.props.offset }, ce(e, "offset"))
                        }), onUpdate: function(t) {
                            y.props.flip && !y.props.flipOnUpdate && (t.flipped && (y.popperInstance.options.placement = t.placement), he(y.popperInstance.modifiers, !1));
                            var r = Ee(y.popper), i = n.style;
                            i.top = "", i.bottom = "", i.left = "", i.right = "", i[r] = function(e) {
                                return -(e - 10) + "px";
                            }(y.props.distance);
                            var o = { top: we, bottom: we, left: we, right: we };
                            o[r] = we + y.props.distance, y.popperInstance.modifiers.filter(function(e) {
                                return "preventOverflow" === e.name;
                            })[0].padding = o, e && e.onUpdate && e.onUpdate(t);
                        }
                    }));
                }

                function A() {
                    return y.props.followCursor && !Re && "focus" !== i.type;
                }

                function L(e, t) {
                    function n(e) {
                        e.target === r && (Te(r, "remove", n), t());
                    }

                    if (0 === e) return t();
                    var r = y.popperChildren.tooltip;
                    Te(r, "remove", c), Te(r, "add", n), c = n;
                }

                function M(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    y.reference.addEventListener(e, t, n), u.push({ eventType: e, handler: t, options: n });
                }

                function F() {
                    y.props.touchHold && !y.props.target && (M("touchstart", S, xe), M("touchend", k, xe)), y.props.trigger.trim().split(" ").forEach(function(e) {
                        if ("manual" !== e) if (y.props.target) switch (e) {
                            case"mouseenter":
                                M("mouseover", w), M("mouseout", R);
                                break;
                            case"focus":
                                M("focusin", w), M("focusout", R);
                                break;
                            case"click":
                                M(e, w);
                        } else switch (M(e, S), e) {
                            case"mouseenter":
                                M("mouseleave", k);
                                break;
                            case"focus":
                                M(h ? "focusout" : "blur", x);
                        }
                    });
                }

                function U() {
                    u.forEach(function(e) {
                        var t = e.eventType, n = e.handler, r = e.options;
                        y.reference.removeEventListener(t, n, r);
                    }), u = [];
                }

                function H() {
                    return [y.popperChildren.tooltip, y.popperChildren.backdrop, y.popperChildren.content];
                }

                function j() {
                    clearTimeout(s), clearTimeout(l);
                }

                function V() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    Fe(e, G);
                    var t = y.props, n = Be(y.reference, b({}, y.props, e, { ignoreAttributes: !0 }));
                    n.ignoreAttributes = le(e, "ignoreAttributes") ? e.ignoreAttributes : t.ignoreAttributes, y.props = n, (le(e, "trigger") || le(e, "touchHold")) && (U(), F()), le(e, "interactiveDebounce") && (E(y.doc), p = a(O, e.interactiveDebounce)), function(e, t, n, r) {
                        var i = ve(e), o = i.tooltip, a = i.content, s = i.backdrop, l = i.arrow;
                        e.style.zIndex = n.zIndex, o.setAttribute("data-size", n.size), o.setAttribute("data-animation", n.animation), o.style.maxWidth = n.maxWidth + ("number" == typeof n.maxWidth ? "px" : ""), n.role ? e.setAttribute("role", n.role) : e.removeAttribute("role"), t.content !== n.content && me(a, n), !t.animateFill && n.animateFill ? (o.appendChild(Ne(r)), o.setAttribute("data-animatefill", "")) : t.animateFill && !n.animateFill && (o.removeChild(s), o.removeAttribute("data-animatefill")), !t.arrow && n.arrow ? o.appendChild(_e(n.arrowType, r)) : t.arrow && !n.arrow && o.removeChild(l), t.arrow && n.arrow && t.arrowType !== n.arrowType && o.replaceChild(_e(n.arrowType, r), l), !t.interactive && n.interactive ? be(e, o) : t.interactive && !n.interactive && function(e, t) {
                            e.removeAttribute("tabindex"), t.removeAttribute("data-interactive");
                        }(e, o), !t.inertia && n.inertia ? ye(o) : t.inertia && !n.inertia && function(e) {
                            e.removeAttribute("data-inertia");
                        }(o), t.theme !== n.theme && (Oe(o, "remove", t.theme), Oe(o, "add", n.theme));
                    }(y.popper, t, n, y.doc), y.popperChildren = ve(y.popper), y.popperInstance && (y.popperInstance.update(), te.some(function(t) {
                        return le(e, t);
                    }) && (y.popperInstance.destroy(), I(), y.state.isVisible || y.popperInstance.disableEventListeners(), y.props.followCursor && o && _(o)));
                }

                function W() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : de(y.props.duration, 0, G.duration[0]);
                    if (!y.state.isDestroyed && y.state.isEnabled && (!Re || y.props.touch)) {
                        var t = function(e) {
                            if (null == e) return null;
                            if (e.getRootNode) return e.getRootNode();
                            for (; null !== e.parentNode;) e = e.parentNode;
                            return e;
                        }(y.reference), n = t && t.documentElement;
                        if (!(le(y.reference, "isVirtual") || n && n.contains(y.reference))) return Y();
                        y.reference.hasAttribute("disabled") || !1 !== y.props.onShow(y) && (y.popper.style.visibility = "visible", y.state.isVisible = !0, y.props.interactive && y.reference.classList.add("tippy-active"), Ce([y.popper, y.popperChildren.tooltip, y.popperChildren.backdrop], 0), function(e) {
                            var t = !(A() || "initial" === y.props.followCursor && Re);
                            y.popperInstance ? (A() || (y.popperInstance.scheduleUpdate(), t && y.popperInstance.enableEventListeners()), he(y.popperInstance.modifiers, y.props.flip)) : (I(), t || y.popperInstance.disableEventListeners()), y.popperInstance.reference = y.reference;
                            var n = y.popperChildren.arrow;
                            if (A()) {
                                n && (n.style.margin = "0");
                                var r = de(y.props.delay, 0, G.delay);
                                i.type && _(r && o ? o : i);
                            } else n && (n.style.margin = "");
                            Re && o && "initial" === y.props.followCursor && (_(o), n && (n.style.margin = "0")), function(e, t) {
                                var n = e.popper, r = e.options, i = r.onCreate, o = r.onUpdate;
                                r.onCreate = r.onUpdate = function(e) {
                                    !function(e) {
                                        e.offsetHeight;
                                    }(n), t(), o(e), r.onCreate = i, r.onUpdate = o;
                                };
                            }(y.popperInstance, e);
                            var a = y.props.appendTo;
                            (f = "parent" === a ? y.reference.parentNode : pe(a, [y.reference])).contains(y.popper) || (f.appendChild(y.popper), y.props.onMount(y), y.state.isMounted = !0);
                        }(function() {
                            y.state.isVisible && (A() || y.popperInstance.update(), Ce([y.popper], r.updateDuration), Ce(H(), e), y.popperChildren.backdrop && (y.popperChildren.content.style.transitionDelay = Math.round(e / 12) + "ms"), y.props.sticky && (Ce([y.popper], h ? 0 : y.props.updateDuration), function e() {
                                y.popperInstance && y.popperInstance.scheduleUpdate(), y.state.isMounted ? requestAnimationFrame(e) : Ce([y.popper], 0);
                            }()), Se(H(), "visible"), function(e, t) {
                                L(e, t);
                            }(e, function() {
                                y.popperChildren.tooltip.classList.add("tippy-notransition"), y.props.aria && y.reference.setAttribute("aria-".concat(y.props.aria), y.popper.id), y.props.onShown(y), y.state.isShown = !0;
                            }));
                        }));
                    }
                }

                function X(e) {
                    e = "number" == typeof e ? e : de(y.props.duration, 1, G.duration[1]), !y.state.isDestroyed && y.state.isEnabled && !1 !== y.props.onHide(y) && (y.popperChildren.tooltip.classList.remove("tippy-notransition"), y.props.interactive && y.reference.classList.remove("tippy-active"), y.popper.style.visibility = "hidden", y.state.isVisible = !1, y.state.isShown = !1, Ce(H(), e), Se(H(), "hidden"), function(e, t) {
                        L(e, function() {
                            !y.state.isVisible && f && f.contains(y.popper) && t();
                        });
                    }(e, function() {
                        d || T(y.doc), y.props.aria && y.reference.removeAttribute("aria-".concat(y.props.aria)), y.popperInstance.disableEventListeners(), y.popperInstance.options.placement = y.props.placement, f.removeChild(y.popper), y.props.onHidden(y), y.state.isMounted = !1;
                    }));
                }

                function Y(e) {
                    y.state.isDestroyed || (y.state.isMounted && X(0), U(), delete y.reference._tippy, y.props.target && e && oe(y.reference.querySelectorAll(y.props.target)).forEach(function(e) {
                        e._tippy && e._tippy.destroy();
                    }), y.popperInstance && y.popperInstance.destroy(), y.state.isDestroyed = !0);
                }
            }

            var je = !1;

            function Ve(e, t) {
                if (!e) return null;
                Fe(t, G), je || (!function(e) {
                    var t = B(e), n = t.defaultView;
                    t.addEventListener("click", Le, !0), t.addEventListener("touchstart", De, xe), n.addEventListener("blur", Me);
                }(e), je = !0);
                var n = b({}, G, t);
                return function(e) {
                    return "[object Object]" === {}.toString.call(e) && !e.addEventListener;
                }(e) && function(e) {
                    var t = {
                        isVirtual: !0, attributes: e.attributes || {}, setAttribute: function(t, n) {
                            e.attributes[t] = n;
                        }, getAttribute: function(t) {
                            return e.attributes[t];
                        }, removeAttribute: function(t) {
                            delete e.attributes[t];
                        }, hasAttribute: function(t) {
                            return t in e.attributes;
                        }, addEventListener: function() {
                        }, removeEventListener: function() {
                        }, classList: {
                            classNames: {}, add: function(t) {
                                e.classList.classNames[t] = !0;
                            }, remove: function(t) {
                                delete e.classList.classNames[t];
                            }, contains: function(t) {
                                return t in e.classList.classNames;
                            }
                        }
                    };
                    for (var n in t) e[n] = t[n];
                }(e), [e].reduce(function(e, t) {
                    var r = t && He(t, n);
                    return r && e.push(r), e;
                }, [])[0];
            }

            Ve.version = "4.0.4", Ve.defaults = G, Ve.setDefaults = function(e) {
                Object.keys(e).forEach(function(t) {
                    G[t] = e[t];
                });
            }, Ve.hideAll = ke, Ve.group = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = t.delay,
                    r = void 0 === n ? e[0].props.delay : n, i = t.duration, o = void 0 === i ? 0 : i, a = !1;

                function s(e) {
                    a = e, u();
                }

                function l(t) {
                    t._originalProps.onShow(t), e.forEach(function(e) {
                        e.set({ duration: o }), e.hide();
                    }), s(!0);
                }

                function d(e) {
                    e._originalProps.onHide(e), s(!1);
                }

                function c(e) {
                    e._originalProps.onShown(e), e.set({ duration: e._originalProps.duration });
                }

                function u() {
                    e.forEach(function(e) {
                        e.set({
                            onShow: l,
                            onShown: c,
                            onHide: d,
                            delay: a ? [0, Array.isArray(r) ? r[1] : r] : r,
                            duration: a ? o : e._originalProps.duration
                        });
                    });
                }

                e.forEach(function(e) {
                    e._originalProps = {
                        duration: e.props.duration,
                        onHide: e.props.onHide,
                        onShow: e.props.onShow,
                        onShown: e.props.onShown
                    };
                }), u();
            }, e.tippy = Ve;
        }(window.FLITE, window.jQuery);
        var e = this && this.__extends || function() {
            var e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
                e.__proto__ = t;
            } || function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            };
            return function(t, n) {
                function r() {
                    this.constructor = t;
                }

                e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r);
            };
        }();
        Object.defineProperty(t, "__esModule", { value: !0 }), function(e) {
            e[e.OK = 0] = "OK", e[e.IGNORE = 1] = "IGNORE", e[e.IGNORE_ALL = 2] = "IGNORE_ALL";
        }(o || (o = {})), function(t) {
            var n;
            t || console.error("mutation-summary: global is not defined"), function(e) {
                e[e.STAYED_OUT = 0] = "STAYED_OUT", e[e.ENTERED = 1] = "ENTERED", e[e.STAYED_IN = 2] = "STAYED_IN", e[e.REPARENTED = 3] = "REPARENTED", e[e.REORDERED = 4] = "REORDERED", e[e.EXITED = 5] = "EXITED";
            }(n || (n = {}));
            var r = void 0 !== window.WebKitMutationObserver ? window.WebKitMutationObserver : window.MutationObserver;
            if (!r) throw console.error("DOM Mutation Observers are required."), console.error("https://developer.mozilla.org/en-US/docs/DOM/MutationObserver"), new Error("DOM Mutation Observers are required");
            var i = ["added", "removed", "reordered", "reparented", "valueChanged", "characterDataChanged"],
                a = function() {
                    function e() {
                        this.nodes = [], this.values = [];
                    }

                    return e.prototype.isIndex = function(e) {
                        return +e == e >>> 0;
                    }, e.prototype.nodeId = function(t) {
                        var n = t[e.ID_PROP];
                        return n || (n = t[e.ID_PROP] = e.nextId_++), n;
                    }, e.prototype.set = function(e, t) {
                        var n = this.nodeId(e);
                        this.nodes[n] = e, this.values[n] = t;
                    }, e.prototype.get = function(e) {
                        var t = this.nodeId(e);
                        return this.values[t];
                    }, e.prototype.has = function(e) {
                        return Boolean(this.nodes[this.nodeId(e)]);
                    }, e.prototype.delete = function(e) {
                        var t = this.nodeId(e);
                        delete this.nodes[t], this.values[t] = void 0;
                    }, e.prototype.keys = function() {
                        var e = [];
                        for (var t in this.nodes) this.isIndex(t) && e.push(this.nodes[t]);
                        return e;
                    }, e.ID_PROP = "__mutation_summary_node_map_id__", e.nextId_ = 1, e;
                }();
            var s = function() {
                function e(e, t, n, r, i, o, a, s) {
                    void 0 === t && (t = !1), void 0 === n && (n = !1), void 0 === r && (r = !1), void 0 === i && (i = null), void 0 === o && (o = !1), void 0 === a && (a = null), void 0 === s && (s = null), this.node = e, this.childList = t, this.attributes = n, this.characterData = r, this.oldParentNode = i, this.added = o, this.attributeOldValues = a, this.characterDataOldValue = s, this.isCaseInsensitive = this.node.nodeType === Node.ELEMENT_NODE && this.node instanceof HTMLElement && this.node.ownerDocument instanceof HTMLDocument;
                }

                return e.prototype.getAttributeOldValue = function(e) {
                    if (this.attributeOldValues) return this.isCaseInsensitive && (e = e.toLowerCase()), this.attributeOldValues[e];
                }, e.prototype.getAttributeNamesMutated = function() {
                    var e = [];
                    if (!this.attributeOldValues) return e;
                    for (var t in this.attributeOldValues) e.push(t);
                    return e;
                }, e.prototype.attributeMutated = function(e, t) {
                    this.attributes = !0, this.attributeOldValues = this.attributeOldValues || {}, e in this.attributeOldValues || (this.attributeOldValues[e] = t);
                }, e.prototype.characterDataMutated = function(e) {
                    this.characterData || (this.characterData = !0, this.characterDataOldValue = e);
                }, e.prototype.removedFromParent = function(e) {
                    this.childList = !0, this.added || this.oldParentNode ? (this.added = !1, this.oldParentNode = this.oldParentNode || e) : this.oldParentNode = e;
                }, e.prototype.insertedIntoParent = function() {
                    this.childList = !0, this.added = !0;
                }, e.prototype.getOldParent = function() {
                    if (this.childList) {
                        if (this.oldParentNode) return this.oldParentNode;
                        if (this.added) return null;
                    }
                    return this.node.parentNode;
                }, e;
            }(), l = function() {
                return function() {
                    this.added = new a, this.removed = new a, this.maybeMoved = new a, this.oldPrevious = new a, this.moved = void 0;
                };
            }(), d = function(t) {
                function r(e, n, r) {
                    var i, o, a = t.call(this) || this;
                    r = r || function(e) {
                        return !0;
                    }, a.rootNode = e, a.reachableCache = void 0, a.wasReachableCache = void 0, a.anyParentsChanged = !1, a.anyAttributesChanged = !1, a.anyCharacterDataChanged = !1;
                    for (var s = 0; s < n.length; s++) switch ((o = n[s]).type) {
                        case"childList":
                            a.anyParentsChanged = !0;
                            for (var l = 0; l < o.removedNodes.length; l++) r(i = o.removedNodes[l]) && a.getChange(i).removedFromParent(o.target);
                            for (l = 0; l < o.addedNodes.length; l++) r(i = o.addedNodes[l]) && a.getChange(i).insertedIntoParent();
                            break;
                        case"attributes":
                            a.anyAttributesChanged = !0, r(o.target) && a.getChange(o.target).attributeMutated(o.attributeName, o.oldValue);
                            break;
                        case"characterData":
                            a.anyCharacterDataChanged = !0, r(o.target) && a.getChange(o.target).characterDataMutated(o.oldValue);
                    }
                    return a;
                }

                return e(r, t), r.prototype.getChange = function(e) {
                    var t = this.get(e);
                    return t || (t = new s(e), this.set(e, t)), t;
                }, r.prototype.getOldParent = function(e) {
                    var t = this.get(e);
                    return t ? t.getOldParent() : e.parentNode;
                }, r.prototype.getIsReachable = function(e) {
                    if (e === this.rootNode) return !0;
                    if (!e) return !1;
                    this.reachableCache = this.reachableCache || new a;
                    var t = this.reachableCache.get(e);
                    return void 0 === t && (t = this.getIsReachable(e.parentNode), this.reachableCache.set(e, t)), t;
                }, r.prototype.getWasReachable = function(e) {
                    if (e === this.rootNode) return !0;
                    if (!e) return !1;
                    this.wasReachableCache = this.wasReachableCache || new a;
                    var t = this.wasReachableCache.get(e);
                    return void 0 === t && (t = this.getWasReachable(this.getOldParent(e)), this.wasReachableCache.set(e, t)), t;
                }, r.prototype.reachabilityChange = function(e) {
                    return this.getIsReachable(e) ? this.getWasReachable(e) ? n.STAYED_IN : n.ENTERED : this.getWasReachable(e) ? n.EXITED : n.STAYED_OUT;
                }, r;
            }(a), c = function() {
                function e(e, t, n, r, i, o) {
                    this.rootNode = e, this.mutations = t, this.selectors = n, this.calcReordered = r, this.calcOldPreviousSibling = i, this.nodeFilter = o, this.nodeFilter = this.nodeFilter || function(e) {
                        return !0;
                    }, this.treeChanges = new d(e, t, this.nodeFilter), this.entered = [], this.exited = [], this.stayedIn = new a, this.visited = new a, this.childListChangeMap = void 0, this.characterDataOnly = void 0, this.matchCache = void 0, this.processMutations();
                }

                return e.prototype.processMutations = function() {
                    if (this.treeChanges.anyParentsChanged || this.treeChanges.anyAttributesChanged) for (var e = this.treeChanges.keys(), t = 0; t < e.length; t++) this.visitNode(e[t], void 0);
                }, e.prototype.visitNode = function(e, t) {
                    if (!this.visited.has(e) && this.nodeFilter(e)) {
                        this.visited.set(e, !0);
                        var r = this.treeChanges.get(e), i = t;
                        if ((r && r.childList || void 0 == i) && (i = this.treeChanges.reachabilityChange(e)), i !== n.STAYED_OUT) {
                            if (this.matchabilityChange(e), i === n.ENTERED) this.entered.push(e); else if (i === n.EXITED) this.exited.push(e), this.ensureHasOldPreviousSiblingIfNeeded(e); else if (i === n.STAYED_IN) {
                                var o = n.STAYED_IN;
                                r && r.childList && (r.oldParentNode !== e.parentNode ? (o = n.REPARENTED, this.ensureHasOldPreviousSiblingIfNeeded(e)) : this.calcReordered && this.wasReordered(e) && (o = n.REORDERED)), this.stayedIn.set(e, o);
                            }
                            if (i !== n.STAYED_IN) for (var a = e.firstChild; a; a = a.nextSibling) this.visitNode(a, i);
                        }
                    }
                }, e.prototype.ensureHasOldPreviousSiblingIfNeeded = function(e) {
                    if (this.calcOldPreviousSibling) {
                        this.processChildlistChanges();
                        var t = e.parentNode, n = this.treeChanges.get(e);
                        n && n.oldParentNode && (t = n.oldParentNode);
                        var r = this.childListChangeMap.get(t);
                        r || (r = new l, this.childListChangeMap.set(t, r)), !e.previousSibling && r.oldPrevious.has(e) || r.oldPrevious.set(e, e.previousSibling);
                    }
                }, e.prototype.getChanged = function(e, t, r) {
                    var i, o;
                    this.selectors = t, this.characterDataOnly = r;
                    for (var a = 0; a < this.entered.length; a++) i = this.entered[a], (o = this.matchabilityChange(i)) !== n.ENTERED && o !== n.STAYED_IN || e.added.push(i);
                    var s, l = this.stayedIn.keys();
                    for (a = 0; a < l.length; a++) if (s = (i = l[a]).nodeType === Node.TEXT_NODE && this.stayedIn.get(i) === n.REPARENTED, (o = this.matchabilityChange(i, s ? n.STAYED_IN : null)) === n.ENTERED) e.added.push(i); else if (o === n.EXITED) e.removed.push(i); else if (o === n.STAYED_IN && (e.reparented || e.reordered)) {
                        var d = this.stayedIn.get(i);
                        e.reparented && d === n.REPARENTED ? e.reparented.push(i) : e.reordered && d === n.REORDERED && e.reordered.push(i);
                    }
                    for (a = 0; a < this.exited.length; a++) i = this.exited[a], (o = this.matchabilityChange(i)) !== n.EXITED && o !== n.STAYED_IN || e.removed.push(i);
                }, e.prototype.getOldParentNode = function(e) {
                    var t = this.treeChanges.get(e);
                    if (t && t.childList) return t.oldParentNode ? t.oldParentNode : null;
                    var r = this.treeChanges.reachabilityChange(e);
                    if (r === n.STAYED_OUT || r === n.ENTERED) throw Error("getOldParentNode requested on invalid node.");
                    return e.parentNode;
                }, e.prototype.getOldPreviousSibling = function(e) {
                    var t = e.parentNode, n = this.treeChanges.get(e);
                    n && n.oldParentNode && (t = n.oldParentNode);
                    var r = this.childListChangeMap.get(t);
                    if (!r) throw Error("getOldPreviousSibling requested on invalid node.");
                    return r.oldPrevious.get(e);
                }, e.prototype.getOldAttribute = function(e, t) {
                    var n = this.treeChanges.get(e);
                    if (!n || !n.attributes) throw Error("getOldAttribute requested on invalid node.");
                    var r = n.getAttributeOldValue(t);
                    if (void 0 === r) throw Error("getOldAttribute requested for unchanged attribute name.");
                    return r;
                }, e.prototype.attributeChangedNodes = function(e) {
                    if (!this.treeChanges.anyAttributesChanged) return {};
                    var t, r;
                    if (e) {
                        t = {}, r = {};
                        for (var i = 0; i < e.length; i++) {
                            var o = e[i];
                            t[o] = !0, r[o.toLowerCase()] = o;
                        }
                    }
                    var a, s, l = {}, d = this.treeChanges.keys();
                    for (i = 0; i < d.length; i++) {
                        a = d[i];
                        var c = this.treeChanges.get(a);
                        if (c.attributes && (n.STAYED_IN === this.treeChanges.reachabilityChange(a) && n.STAYED_IN === this.matchabilityChange(a))) {
                            s = a;
                            for (var u = c.getAttributeNamesMutated(), p = void 0, h = 0; h < u.length; h++) p = u[h], (!t || t[p] || c.isCaseInsensitive && r[p]) && c.getAttributeOldValue(p) !== s.getAttribute(p) && (r && c.isCaseInsensitive && (p = r[p]), l[p] = l[p] || [], l[p].push(s));
                        }
                    }
                    return l;
                }, e.prototype.getOldCharacterData = function(e) {
                    var t = this.treeChanges.get(e);
                    if (!t || !t.characterData) throw Error("getOldCharacterData requested on invalid node.");
                    return t.characterDataOldValue;
                }, e.prototype.getCharacterDataChanged = function() {
                    if (!this.treeChanges.anyCharacterDataChanged) return [];
                    for (var e, t, r = this.treeChanges.keys(), i = [], o = 0; o < r.length; o++) e = r[o], n.STAYED_IN === this.treeChanges.reachabilityChange(e) && (t = this.treeChanges.get(e)).characterData && e.textContent != t.characterDataOldValue && i.push(e);
                    return i;
                }, e.prototype.computeMatchabilityChange = function(e, t) {
                    this.matchCache || (this.matchCache = []), this.matchCache[e.uid] || (this.matchCache[e.uid] = new a);
                    var n = this.matchCache[e.uid], r = n.get(t);
                    return void 0 === r && (r = e.matchabilityChange(t, this.treeChanges.get(t)), n.set(t, r)), r;
                }, e.prototype.matchabilityChange = function(e, t) {
                    var r = this;
                    if (this.characterDataOnly) switch (e.nodeType) {
                        case Node.COMMENT_NODE:
                        case Node.TEXT_NODE:
                            return n.STAYED_IN;
                        default:
                            return n.STAYED_OUT;
                    }
                    if (!this.selectors) return n.STAYED_IN;
                    if (e.nodeType !== Node.ELEMENT_NODE) return null === t || void 0 === t ? e.parentNode ? n.STAYED_IN : n.STAYED_OUT : t;
                    for (var i = e, o = this.selectors.map(function(e) {
                        return r.computeMatchabilityChange(e, i);
                    }), a = n.STAYED_OUT, s = 0; a !== n.STAYED_IN && s < o.length;) {
                        switch (o[s]) {
                            case n.STAYED_IN:
                                a = n.STAYED_IN;
                                break;
                            case n.ENTERED:
                                a = a === n.EXITED ? n.STAYED_IN : n.ENTERED;
                                break;
                            case n.EXITED:
                                a = a === n.ENTERED ? n.STAYED_IN : n.EXITED;
                        }
                        s++;
                    }
                    return a;
                }, e.prototype.getChildlistChange = function(e) {
                    var t = this.childListChangeMap.get(e);
                    return t || (t = new l, this.childListChangeMap.set(e, t)), t;
                }, e.prototype.processChildlistChanges = function() {
                    if (!this.childListChangeMap) {
                        var e, t, r, i;
                        this.childListChangeMap = new a;
                        for (var o = function(e, t, n) {
                            !e || n.added.has(e) || n.maybeMoved.has(e) || t && !n.oldPrevious.get(e) && (t && (n.added.has(t) || n.maybeMoved.has(t)) || n.oldPrevious.set(e, t));
                        }, s = 0; s < this.mutations.length; s++) if ("childList" == (e = this.mutations[s]).type && (this.treeChanges.reachabilityChange(e.target) === n.STAYED_IN || this.calcOldPreviousSibling)) {
                            r = this.getChildlistChange(e.target), i = e.previousSibling;
                            for (var l = 0; l < e.removedNodes.length; l++) o(t = e.removedNodes[l], i, r), r.added.has(t) ? r.added.delete(t) : (r.removed.set(t, !0), r.maybeMoved.delete(t)), i = t;
                            o(e.nextSibling, i, r);
                            for (l = 0; l < e.addedNodes.length; l++) t = e.addedNodes[l], r.removed.has(t) ? (r.removed.delete(t), r.maybeMoved.set(t, !0)) : r.added.set(t, !0);
                        }
                    }
                }, e.prototype.wasReordered = function(e) {
                    if (!this.treeChanges.anyParentsChanged) return !1;
                    this.processChildlistChanges();
                    var t = e.parentNode, n = this.treeChanges.get(e);
                    n && n.oldParentNode && (t = n.oldParentNode);
                    var r = this.childListChangeMap.get(t);
                    if (!r) return !1;
                    if (r.moved) return r.moved.get(e);
                    r.moved = new a;
                    var i = new a;

                    function o(e) {
                        if (!e) return !1;
                        if (!r.maybeMoved.has(e)) return !1;
                        var t = r.moved.get(e);
                        return void 0 !== t ? t : (i.has(e) ? t = !0 : (i.set(e, !0), t = function(e) {
                            if (l.has(e)) return l.get(e);
                            var t = e.previousSibling;
                            for (; t && (r.added.has(t) || o(t));) t = t.previousSibling;
                            return l.set(e, t), t;
                        }(e) !== function e(t) {
                            var n = s.get(t);
                            if (void 0 !== n) return n;
                            n = r.oldPrevious.get(t);
                            for (; n && (r.removed.has(n) || o(n));) n = e(n);
                            void 0 === n && (n = t.previousSibling);
                            s.set(t, n);
                            return n;
                        }(e)), i.has(e) ? (i.delete(e), r.moved.set(e, t)) : t = r.moved.get(e), t);
                    }

                    var s = new a;
                    var l = new a;
                    return r.maybeMoved.keys().forEach(o), r.moved.get(e);
                }, e;
            }(), u = function() {
                function e(e, t) {
                    var n = this;
                    if (this.projection = e, this.added = [], this.removed = [], this.reparented = t.all || t.element || t.characterData ? [] : void 0, this.reordered = t.all ? [] : void 0, this.projection = e, e.getChanged(this, t.elementFilter, t.characterData), t.all || t.attribute || t.attributeList) {
                        var r = t.attribute ? [t.attribute] : t.attributeList, i = e.attributeChangedNodes(r);
                        t.attribute ? this.valueChanged = i[t.attribute] || [] : (this.attributeChanged = i, t.attributeList && t.attributeList.forEach(function(e) {
                            n.attributeChanged.hasOwnProperty(e) || (n.attributeChanged[e] = []);
                        }));
                    }
                    if (t.all || t.characterData) {
                        var o = e.getCharacterDataChanged();
                        t.characterData ? this.valueChanged = o : this.characterDataChanged = o;
                    }
                    this.reordered && (this.getOldPreviousSibling = e.getOldPreviousSibling.bind(e));
                }

                return e.prototype.getOldParentNode = function(e) {
                    return this.projection.getOldParentNode(e);
                }, e.prototype.getOldAttribute = function(e, t) {
                    return this.projection.getOldAttribute(e, t);
                }, e.prototype.getOldPreviousSibling = function(e) {
                    return this.projection.getOldPreviousSibling(e);
                }, e.prototype.getOldCharacterData = function(e) {
                    return this.projection.getOldCharacterData(e);
                }, e.prototype.getCharacterDataChanged = function() {
                    return this.projection.getCharacterDataChanged();
                }, e;
            }(), p = /[a-zA-Z_]+/, h = /[a-zA-Z0-9_\-]+/;

            function f(e) {
                return "\"" + e.replace(/"/, "\\\"") + "\"";
            }

            var g = function() {
                function e() {
                }

                return e.prototype.matches = function(e) {
                    if (null === e) return !1;
                    if (void 0 === this.attrValue) return !0;
                    if (!this.contains) return this.attrValue == e;
                    for (var t = e.split(" "), n = 0; n < t.length; n++) if (this.attrValue === t[n]) return !0;
                    return !1;
                }, e.prototype.toString = function() {
                    var e = "[" + this.attrName + "]";
                    return "class" === this.attrName && this.contains ? "." + this.attrValue : "id" !== this.attrName || this.contains ? this.contains ? "[" + this.attrName + "~=" + f(this.attrValue) + "]" : "attrValue" in this ? "[" + this.attrName + "=" + f(this.attrValue) + "]" : e : "#" + this.attrValue;
                }, e;
            }(), m = function() {
                function e() {
                    this.uid = e.nextUid++, this.qualifiers = [];
                }

                return Object.defineProperty(e.prototype, "caseInsensitiveTagName", {
                    get: function() {
                        return this.tagName.toUpperCase();
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(e.prototype, "selectorString", {
                    get: function() {
                        return this.tagName + this.qualifiers.join("");
                    }, enumerable: !0, configurable: !0
                }), e.prototype.isMatching = function(t) {
                    return t[e.matchesSelector](this.selectorString);
                }, e.prototype.wasMatching = function(e, t, n) {
                    if (!t || !t.attributes) return n;
                    var r = t.isCaseInsensitive ? this.caseInsensitiveTagName : this.tagName;
                    if ("*" !== r && r !== e.tagName) return !1;
                    for (var i, o = [], a = !1, s = 0; s < this.qualifiers.length; s++) {
                        i = this.qualifiers[s];
                        var l = t.getAttributeOldValue(i.attrName);
                        o.push(l), a = a || void 0 !== l;
                    }
                    if (!a) return n;
                    for (s = 0; s < this.qualifiers.length; s++) {
                        if (i = this.qualifiers[s], void 0 === (l = o[s]) && (l = e.getAttribute(i.attrName)), !i.matches(l)) return !1;
                    }
                    return !0;
                }, e.prototype.matchabilityChange = function(e, t) {
                    return this.isMatching(e) ? this.wasMatching(e, t, !0) ? n.STAYED_IN : n.ENTERED : this.wasMatching(e, t, !1) ? n.EXITED : n.STAYED_OUT;
                }, e.parseSelectors = function(t) {
                    var n, r, i = [];

                    function o() {
                        n && (r && (n.qualifiers.push(r), r = void 0), i.push(n)), n = new e;
                    }

                    function a() {
                        r && n.qualifiers.push(r), r = new g;
                    }

                    for (var s, l, d = /\s/, c = "Invalid or unsupported selector syntax.", u = 1, f = 0; f < t.length;) switch (l = t[f++], u) {
                        case 1:
                            if (l.match(p)) {
                                o(), n.tagName = l, u = 2;
                                break;
                            }
                            if ("*" === l) {
                                o(), n.tagName = "*", u = 3;
                                break;
                            }
                            if ("." === l) {
                                o(), a(), n.tagName = "*", r.attrName = "class", r.contains = !0, u = 4;
                                break;
                            }
                            if ("#" === l) {
                                o(), a(), n.tagName = "*", r.attrName = "id", u = 4;
                                break;
                            }
                            if ("[" === l) {
                                o(), a(), n.tagName = "*", r.attrName = "", u = 6;
                                break;
                            }
                            if (l.match(d)) break;
                            throw Error(c);
                        case 2:
                            if (l.match(h)) {
                                n.tagName += l;
                                break;
                            }
                            if ("." === l) {
                                a(), r.attrName = "class", r.contains = !0, u = 4;
                                break;
                            }
                            if ("#" === l) {
                                a(), r.attrName = "id", u = 4;
                                break;
                            }
                            if ("[" === l) {
                                a(), r.attrName = "", u = 6;
                                break;
                            }
                            if (l.match(d)) {
                                u = 14;
                                break;
                            }
                            if ("," === l) {
                                u = 1;
                                break;
                            }
                            throw Error(c);
                        case 3:
                            if ("." === l) {
                                a(), r.attrName = "class", r.contains = !0, u = 4;
                                break;
                            }
                            if ("#" === l) {
                                a(), r.attrName = "id", u = 4;
                                break;
                            }
                            if ("[" === l) {
                                a(), r.attrName = "", u = 6;
                                break;
                            }
                            if (l.match(d)) {
                                u = 14;
                                break;
                            }
                            if ("," === l) {
                                u = 1;
                                break;
                            }
                            throw Error(c);
                        case 4:
                            if (l.match(p)) {
                                r.attrValue = l, u = 5;
                                break;
                            }
                            throw Error(c);
                        case 5:
                            if (l.match(h)) {
                                r.attrValue += l;
                                break;
                            }
                            if ("." === l) {
                                a(), r.attrName = "class", r.contains = !0, u = 4;
                                break;
                            }
                            if ("#" === l) {
                                a(), r.attrName = "id", u = 4;
                                break;
                            }
                            if ("[" === l) {
                                a(), u = 6;
                                break;
                            }
                            if (l.match(d)) {
                                u = 14;
                                break;
                            }
                            if ("," === l) {
                                u = 1;
                                break;
                            }
                            throw Error(c);
                        case 6:
                            if (l.match(p)) {
                                r.attrName = l, u = 7;
                                break;
                            }
                            if (l.match(d)) break;
                            throw Error(c);
                        case 7:
                            if (l.match(h)) {
                                r.attrName += l;
                                break;
                            }
                            if (l.match(d)) {
                                u = 8;
                                break;
                            }
                            if ("~" === l) {
                                r.contains = !0, u = 9;
                                break;
                            }
                            if ("=" === l) {
                                r.attrValue = "", u = 11;
                                break;
                            }
                            if ("]" === l) {
                                u = 3;
                                break;
                            }
                            throw Error(c);
                        case 8:
                            if ("~" === l) {
                                r.contains = !0, u = 9;
                                break;
                            }
                            if ("=" === l) {
                                r.attrValue = "", u = 11;
                                break;
                            }
                            if ("]" === l) {
                                u = 3;
                                break;
                            }
                            if (l.match(d)) break;
                            throw Error(c);
                        case 9:
                            if ("=" === l) {
                                r.attrValue = "", u = 11;
                                break;
                            }
                            throw Error(c);
                        case 10:
                            if ("]" === l) {
                                u = 3;
                                break;
                            }
                            if (l.match(d)) break;
                            throw Error(c);
                        case 11:
                            if (l.match(d)) break;
                            if ("\"" === l || "'" === l) {
                                s = l, u = 13;
                                break;
                            }
                            r.attrValue += l, u = 12;
                            break;
                        case 12:
                            if (l.match(d)) {
                                u = 10;
                                break;
                            }
                            if ("]" === l) {
                                u = 3;
                                break;
                            }
                            if ("'" === l || "\"" == l) throw Error(c);
                            r.attrValue += l;
                            break;
                        case 13:
                            if (l === s) {
                                u = 10;
                                break;
                            }
                            r.attrValue += l;
                            break;
                        case 14:
                            if (l.match(d)) break;
                            if ("," === l) {
                                u = 1;
                                break;
                            }
                            throw Error(c);
                    }
                    switch (u) {
                        case 1:
                        case 2:
                        case 3:
                        case 5:
                        case 14:
                            o();
                            break;
                        default:
                            throw Error(c);
                    }
                    if (!i.length) throw Error(c);
                    return i;
                }, e.nextUid = 1, e.matchesSelector = function() {
                    var e = document.createElement("div");
                    return "function" == typeof e.webkitMatchesSelector ? "webkitMatchesSelector" : "function" == typeof e.mozMatchesSelector ? "mozMatchesSelector" : "function" == typeof e.msMatchesSelector ? "msMatchesSelector" : "matchesSelector";
                }(), e;
            }(), v = /^([a-zA-Z:_]+[a-zA-Z0-9_\-:\.]*)$/;

            function y(e) {
                if ("string" != typeof e) throw Error("Invalid request opion. attribute must be a non-zero length string.");
                if (!(e = e.trim())) throw Error("Invalid request opion. attribute must be a non-zero length string.");
                if (!e.match(v)) throw Error("Invalid request option. invalid attribute name: " + e);
                return e;
            }

            function _(e) {
                if (!e.trim().length) throw Error("Invalid request option: elementAttributes must contain at least one attribute.");
                for (var t, n, r = {}, i = {}, o = e.split(/\s+/), a = 0; a < o.length; a++) if (t = o[a]) {
                    if (r[n = (t = y(t)).toLowerCase()]) throw Error("Invalid request option: observing multiple case variations of the same attribute is not supported.");
                    i[t] = !0, r[n] = !0;
                }
                return Object.keys(i);
            }

            var N = function() {
                function e(t, n) {
                    var i = this;
                    this.connected = !1, this.options = e.validateOptions(t), this.observerOptions = e.createObserverOptions(this.options.queries), this.root = this.options.rootNode, this.callback = this.options.callback, this.elementFilter = Array.prototype.concat.apply([], this.options.queries.map(function(e) {
                        return e.elementFilter ? e.elementFilter : [];
                    })), this.elementFilter.length || (this.elementFilter = void 0), this.calcReordered = this.options.queries.some(function(e) {
                        return e.all;
                    }), this.queryValidators = [], e.createQueryValidator && (this.queryValidators = this.options.queries.map(function(t) {
                        return e.createQueryValidator(i.root, t);
                    })), this.observer = new r(function(e) {
                        i.observerCallback(e);
                    }), n && this.reconnect();
                }

                return e.prototype.filterIgnoredMutations = function(e) {
                    if (!this.options.mutationFilter || !e) return e;
                    for (var t, n, r = [], i = this.options.mutationFilter, a = e.length - 1; a >= 0; --a) {
                        if (t = e[a], (n = i(e, a)) === o.IGNORE_ALL) return [];
                        n === o.OK && r.push(t);
                    }
                    return r;
                }, e.createObserverOptions = function(e) {
                    var t, n = { childList: !0, subtree: !0 };

                    function r(e) {
                        n.attributes && !t || (n.attributes = !0, n.attributeOldValue = !0, e ? (t = t || {}, e.forEach(function(e) {
                            t[e] = !0, t[e.toLowerCase()] = !0;
                        })) : t = void 0);
                    }

                    return e.forEach(function(e) {
                        if (e.characterData) return n.characterData = !0, void (n.characterDataOldValue = !0);
                        if (e.all) return r(), n.characterData = !0, void (n.characterDataOldValue = !0);
                        if (e.attribute) r([e.attribute.trim()]); else {
                            var t = function(e, t) {
                                var n = {};
                                return e.forEach(function(e) {
                                    e.qualifiers.forEach(function(e) {
                                        t && "class" === e.attrName || (n[e.attrName] = !0);
                                    });
                                }), Object.keys(n);
                            }(e.elementFilter, !1 === e.classAttribute).concat(e.attributeList || []);
                            t.length && r(t);
                        }
                    }), t && (n.attributeFilter = Object.keys(t)), n;
                }, e.validateOptions = function(t) {
                    for (var n in t) if (!(n in e.optionKeys)) throw Error("Invalid option: " + n);
                    if ("function" != typeof t.callback) throw Error("Invalid options: callback is required and must be a function");
                    if (!t.queries || !t.queries.length) throw Error("Invalid options: queries must contain at least one query request object.");
                    for (var r = {
                        callback: t.callback,
                        mutationFilter: t.mutationFilter,
                        nodeFilter: t.nodeFilter,
                        rootNode: t.rootNode || document,
                        observeOwnChanges: Boolean(t.observeOwnChanges),
                        oldPreviousSibling: Boolean(t.oldPreviousSibling),
                        queries: []
                    }, i = 0; i < t.queries.length; i++) {
                        var o = t.queries[i];
                        if (o.all) {
                            if (Object.keys(o).length > 1) throw Error("Invalid request option. all has no options.");
                            r.queries.push({ all: !0 });
                        } else if ("attribute" in o) {
                            if ((s = { attribute: y(o.attribute) }).elementFilter = m.parseSelectors("*[" + s.attribute + "]"), Object.keys(o).length > 1) throw Error("Invalid request option. attribute has no options.");
                            r.queries.push(s);
                        } else if ("element" in o) {
                            var a = Object.keys(o).length,
                                s = { element: o.element, elementFilter: m.parseSelectors(o.element) };
                            if (o.hasOwnProperty("elementAttributes") && (s.attributeList = _(o.elementAttributes), a--), void 0 !== o.classAttribute && (s.classAttribute = !1 !== o.classAttribute, a--), a > 1) throw Error("Invalid request option. element only allows elementAttributes option.");
                            r.queries.push(s);
                        } else {
                            if (!o.characterData) throw Error("Invalid request option. Unknown query request.");
                            if (Object.keys(o).length > 1) throw Error("Invalid request option. characterData has no options.");
                            r.queries.push({ characterData: !0 });
                        }
                    }
                    return r;
                }, e.prototype.createSummaries = function(e) {
                    var t = this.filterIgnoredMutations(e);
                    if (!t || !t.length) return [];
                    for (var n = new c(this.root, t, this.elementFilter, this.calcReordered, this.options.oldPreviousSibling, this.options.nodeFilter), r = [], i = 0; i < this.options.queries.length; i++) r.push(new u(n, this.options.queries[i]));
                    return r;
                }, e.prototype.checkpointQueryValidators = function() {
                    this.queryValidators.forEach(function(e) {
                        e && e.recordPreviousState();
                    });
                }, e.prototype.runQueryValidators = function(e) {
                    this.queryValidators.forEach(function(t, n) {
                        t && t.validate(e[n]);
                    });
                }, e.prototype.changesToReport = function(e) {
                    return e.some(function(e) {
                        if (i.some(function(t) {
                            return e[t] && e[t].length;
                        })) return !0;
                        if (e.attributeChanged && Object.keys(e.attributeChanged).some(function(t) {
                            return !!e.attributeChanged[t].length;
                        })) return !0;
                        return !1;
                    });
                }, e.prototype.filterSummaries = function(e) {
                    if (e && !(e.length < 2)) {
                        var t, n, r, i = 0;
                        for (e.length; i < length; ++i) if (!((t = e[i].added).length < 1)) for (var o = i + 1; o < e.length; ++o) {
                            r = e[o];
                            for (var a = t.length - 1; a >= 0; --a) r.removed.indexOf(t[a]) >= 0 ? (t.splice(i, 1), r.removed.splice(a, 1)) : (n = r.added.indexOf(t[0])) >= 0 && r.added.splice(n, 1);
                        }
                    }
                }, e.prototype.observerCallback = function(e) {
                    this.options.observeOwnChanges || this.observer.disconnect();
                    var t = this.createSummaries(e);
                    this.runQueryValidators(t), this.options.observeOwnChanges && this.checkpointQueryValidators(), this.changesToReport(t) && (this.filterSummaries(t), this.callback(t)), !this.options.observeOwnChanges && this.connected && (this.checkpointQueryValidators(), this.observer.observe(this.root, this.observerOptions));
                }, e.prototype.reconnect = function() {
                    this.connected || (this.observer.observe(this.root, this.observerOptions), this.connected = !0, this.checkpointQueryValidators());
                }, e.prototype.disconnect = function() {
                    if (!this.connected) return [];
                    var e;
                    try {
                        e = this.takeSummaries(), this.observer.disconnect();
                    } catch (e) {
                        t.Logger.debug("Disconnect: ", e);
                    }
                    return this.connected = !1, e;
                }, e.prototype.takeSummaries = function() {
                    if (!this.connected) throw Error("Not connected");
                    var e = this.createSummaries(this.observer.takeRecords());
                    return this.changesToReport(e) ? e : void 0;
                }, e.NodeMap = a, e.parseElementFilter = m.parseSelectors, e.optionKeys = {
                    callback: !0,
                    queries: !0,
                    rootNode: !0,
                    oldPreviousSibling: !0,
                    observeOwnChanges: !0,
                    mutationFilter: !0,
                    nodeFilter: !0
                }, e;
            }();
            Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function(e) {
                for (var t = (this.document || this.ownerDocument).querySelectorAll(e), n = t.length; --n >= 0 && t.item(n) !== this;) ;
                return n > -1;
            }), t.MutationSummary = N;
        }((window || this).FLITE), Object.defineProperty(t, "__esModule", { value: !0 }), function(e, t) {
            var n, r = function() {
                function t() {
                    this._isComposing = !1, this._compositionEnded = !1;
                }

                return t.prototype.attach = function(e) {
                    e !== this._root && (this._root && this._unlisten(), this._root = e, e && this._listen());
                }, t.prototype.dispose = function() {
                    this._unlisten(), this._root = null;
                }, Object.defineProperty(t.prototype, "root", {
                    get: function() {
                        return this._root;
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "isComposing", {
                    get: function() {
                        return this._isComposing || this._compositionEnded;
                    }, enumerable: !0, configurable: !0
                }), t.prototype._unlisten = function() {
                    if (this._unlistenCB) try {
                        this._unlistenCB(), this._unlistenCB = null;
                    } finally {
                    }
                }, t.prototype._listen = function() {
                    var t = this;
                    this._unlisten();
                    var n = function(n) {
                        e.Logger.debug("Composition start"), t._isComposing = !0;
                    }, r = function(n) {
                        e.Logger.debug("Composition end"), t._isComposing = !1, t._compositionEnded = !0;
                    }, i = function(e) {
                        t._compositionEnded = !1;
                    }, o = function(e) {
                        229 !== e.which && (t._compositionEnded = !1);
                    };
                    this._root.addEventListener("compositionstart", n), this._root.addEventListener("compositionend", r), this._root.addEventListener("keyup", i), this._root.addEventListener("keydown", o), this._unlistenCB = function() {
                        t._root && (t._root.removeEventListener("compositionstart", n), t._root.removeEventListener("compositionend", r), t._root.removeEventListener("keyup", i), t._root.removeEventListener("keydown", o));
                    };
                }, t;
            }(), i = function() {
                function e(t, n) {
                    var r = this;
                    this.callback = n, this.id = String(e.nextId++), e._guards[this.id] = this;
                    var i = null, o = function(a) {
                        t.removeEventListener("keyup", o, !0), delete e._guards[r.id], i && clearTimeout(i);
                        var s = a.keyCode || a.which;
                        8 === s ? n({ backspace: !0, ctrl: a.ctrlKey, shift: a.shiftKey }) : 46 === s && n({
                            del: !0,
                            ctrl: a.ctrlKey,
                            shift: a.shiftKey
                        });
                    };
                    t.addEventListener("keyup", o, !0), i = setTimeout(function() {
                        i = 0, removeEventListener("keyup", o, !0), delete e._guards[r.id], n({
                            backspace: !1,
                            del: !1,
                            ctrl: !1,
                            shift: !1
                        });
                    }, 75);
                }

                return e._guards = {}, e.nextId = 0, e;
            }(), o = function() {
                function o() {
                }

                return Object.defineProperty(o.prototype, "browser", {
                    get: function() {
                        if (this._browser) return t.extend({}, this._browser);
                        var e = navigator.userAgent.toLowerCase(), n = function(e) {
                            e = e.toLowerCase();
                            var t = /(edge)\s*\/?([0-9\.]+)/.exec(e) || /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
                            return { browser: t[1] || "", version: t[2] || "0" };
                        }(e), r = {
                            type: "unknown",
                            version: 0,
                            msie: !1,
                            edge: !1,
                            webkit: !1,
                            safari: !1,
                            firefox: !1
                        };
                        return n.browser && (r[n.browser] = !0, r.version = Number(n.version), r.type = n.browser), r.chrome ? r.webkit = !0 : r.webkit && (r.safari = !0), r.webkit && (r.type = "webkit"), r.firefox = 1 == /firefox/.test(e), r.msie || (r.msie = Boolean(/trident/.test(e))), this._browser = r, t.extend({}, r);
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(o.prototype, "browserType", {
                    get: function() {
                        if (null === this._browserType) {
                            for (var e = ["msie", "firefox", "chrome", "safari"], t = e.length, n = 0; n < t; n++) if (!0 === new RegExp(e[n], "i").test(navigator.userAgent)) return this._browserType = e[n], this._browserType;
                            this._browserType = "other";
                        }
                        return this._browserType;
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(o.prototype, "webkitType", {
                    get: function() {
                        return "webkit" === this.browser.type && (Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") > 0 ? "safari" : "chrome");
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(o.prototype, "Timeout", {
                    get: function() {
                        return a;
                    }, enumerable: !0, configurable: !0
                }), o.prototype.isBrowser = function(e) {
                    return this.browser.type === e;
                }, o.prototype.isFLITEBody = function(e) {
                    return e && Boolean(e.getAttribute("data-flite-body"));
                }, o.prototype.markFLITEBody = function(e) {
                    e && e.setAttribute("data-flite-body", "1");
                }, o.prototype.padString = function(e, t, n, r) {
                    var i;
                    i = null === e || void 0 === e ? "" : String(e);
                    for (var o = (n = String(n)).length, a = i.length; a < t; a += o) r ? i += n : i = n + i;
                    return i;
                }, o.prototype.padNumber = function(e, t) {
                    return this.padString(e, t, "0", !1);
                }, o.prototype.getTagName = function(e) {
                    return e && e.tagName && e.tagName.toLowerCase() || null;
                }, o.prototype.isBRNode = function(e) {
                    return "br" == this.getTagName(e);
                }, o.prototype.printRange = function(e) {
                    if (!e) return "<null range>";
                    var t = ["Range:", n.printNode(e.startContainer), ":", e.startOffset];
                    return e.collapsed || t.push(", end: ", n.printNode(e.endContainer), ":", e.endOffset), t.join(" ");
                }, o.prototype.printNode = function(e) {
                    if (!e) return "<null node>";
                    var t = e.nodeType,
                        n = [t === Node.TEXT_NODE ? "text" : t === Node.ELEMENT_NODE ? e.nodeName : "<" + t + "node>"];
                    return e.id && n.push("#", e.id), e.className && n.push(".", e.className), n.push("(", (t === Node.TEXT_NODE ? e.data : String(e.innerHTML)).substring(0, 10), ")"), n.push("parent:", e.parentNode && e.parentNode.nodeName || "NULL"), n.join("");
                }, o.prototype.stripNode = function(e) {
                    if (e && 1 === e.nodeType) {
                        var n = e, r = t.map(n.attributes, function(e) {
                            return e.name;
                        });
                        t(e).removeClass(), t.each(r, function(e, t) {
                            n.removeAttribute(t);
                        });
                    }
                }, o.prototype.findIndexInArray = function(e, t) {
                    if (!e) return -1;
                    for (var n = 0, r = e.length; n < r; ++n) if (t(e[n])) return n;
                    return -1;
                }, o.prototype.findInArray = function(e, t) {
                    var n = this.findIndexInArray(e, t);
                    return n >= 0 ? e[n] : null;
                }, o.prototype.createCompositionStateTracker = function() {
                    return new r;
                }, o.prototype.createBackspaceGuard = function(e, t) {
                    return new i(e, t);
                }, o.prototype.makeDateLabel = function(e, t, n, r) {
                    new Date;
                    var i = e("MONTHS"), o = "string" == typeof i ? i.split(",") : i;
                    return [o && o[n] || "", t, r].join(" ");
                }, o.prototype.fixSelection = function(e, t) {
                    if (!e || !t || e.collapsed) return e;
                    var n;
                    try {
                        for (; (n = e.endContainer) && n !== t && 0 == e.endOffset && !e.collapsed && (n.previousSibling ? e.setEndBefore(n) : n.parentNode && n.parentNode !== t && e.setEndBefore(n.parentNode), e.endContainer !== n);) ;
                    } catch (e) {
                    }
                    try {
                        for (; (n = e.startContainer) && n !== t && !e.collapsed && ((n = e.startContainer).nodeType == Node.TEXT_NODE ? e.startOffset >= n.nodeValue.length && e.setStartAfter(n) : e.startOffset >= n.childNodes.length && e.setStartAfter(n), e.startContainer != n);) ;
                    } catch (e) {
                    }
                }, o.prototype.convertDateToTimezone = function(t, n) {
                    if (t = t || new Date, !n) return t;
                    try {
                        var r = t.toLocaleString("en-us", { timeZone: n }),
                            i = new Date(Date.parse(r)).getTime() - t.getTime();
                        return new Date(t.getTime() + i);
                    } catch (r) {
                        return e.Logger.error("convertDateToTimezone", n, r), t;
                    }
                }, o.prototype.removeDeadCharactersFrom = function(e) {
                    return e && e.replace(/[\u200B\uFEFF\u00A0]/g, "");
                }, o.prototype.combinePath = function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    return (e || []).filter(Boolean).join("/").replace(/([^\:])\/\//g, "$1/");
                }, o;
            }(), a = function() {
                function e(e, t) {
                    void 0 === e && (e = null), void 0 === t && (t = 0), this._duration = 0, this._callback = null, this._timeout = null, this.set(e, t, !1);
                }

                return e.prototype.set = function(e, t, n) {
                    if (void 0 === n && (n = !0), this.clear(), e) {
                        if (e !== this._callback) {
                            var r = this;
                            this._boundCallback = function() {
                                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                                r._timeout = null, e.apply(null, t);
                            };
                        }
                    } else this._boundCallback = null;
                    this._callback = e, this._duration = t, n && this._boundCallback && (this._timeout = setTimeout(this._boundCallback, this._duration));
                }, e.prototype.start = function() {
                    this._timeout || this.reset(this._duration);
                }, e.prototype.reset = function(e) {
                    void 0 === e && (e = this._duration), this.set(this._callback, e, !0);
                }, e.prototype.clear = function() {
                    this._timeout && (clearTimeout(this._timeout), this._timeout = null);
                }, e;
            }();
            e.utils = n = new o;
        }(window.FLITE, window.jQuery), Object.defineProperty(t, "__esModule", { value: !0 });
        var n, r, i, o, a = { OL: 1, TR: 1, UL: 1, BR: 1, TBODY: 1 }, s = /insert/, l = /ice-ins/;
        !function(e, t) {
            var n = {
                isTracking: !0,
                isVisible: !0,
                debug: { error: !1, log: !1, debug: !1, warn: !1 },
                userStyles: null,
                tooltips: { show: !0, delay: [750, 0], template: "%a by %u %t", useTitle: !1 },
                tooltipTemplate: null,
                contextMenu: !0,
                ignoreSelectors: [],
                userName: null,
                userId: null,
                cssPath: null,
                styleUrls: ["css/flite.css", "css/tippy.css"],
                acceptRejectInReadOnly: !1,
                commands: null,
                timezone: null
            };

            function r(e) {
                return e ? e.replace(/<[^>]*>/g, " ").replace(/[^\x11-\x7F]+/g, "").replace(/\&[\#a-z0-9]+\;/gi, " ").replace(/(\s)\s+/g, "$1") : "";
            }

            var i = function() {
                function i() {
                }

                return Object.defineProperty(i.prototype, "defaultConfig", {
                    get: function() {
                        return t.extend(!0, {}, n);
                    }, enumerable: !0, configurable: !0
                }), i.prototype.upgradeConfig = function(n) {
                    var r = e.pluginUtils.defaultConfig;
                    !(n = n || {}).styleUrls && n.cssPath && (n.styleUrls = [n.cssPath].filter(Boolean), n.styleUrls.length || (n.styleUrls = void 0)), "boolean" == typeof n.tooltips ? n.tooltips = n.tooltips ? r.tooltips : {
                        show: !1,
                        delay: 0,
                        template: null,
                        useTitle: !1
                    } : n.tooltips || (n.tooltips = r.tooltips);
                    var i = n.tooltips, o = i.delay, a = typeof o;
                    return null === o || void 0 === o ? o = r.tooltips.delay : "string" === a || "number" === a ? o = [Number(o), r.tooltips.delay[1]] : t.isArray(o) || (e.Logger.error("invalid type " + a + " for tooltips delay"), o = r.tooltips.delay), n.tooltips.delay = o, n.tooltipTemplate && (i.template = i.template || n.tooltipTemplate), n;
                }, i.prototype.loadCSS = function(n, r, i) {
                    var o = n.getElementsByTagName("head")[0];
                    (r || []).forEach(function(r) {
                        !function(r) {
                            if (r) {
                                var a = "flite-" + r.replace(/[^0-9a-z]+/gi, "_"), s = t(o).find("#" + a);
                                0 === s.length && ((s = n.createElement("link")).setAttribute("rel", "stylesheet"), s.setAttribute("type", "text/css"), s.setAttribute("id", a), s.setAttribute("href", e.utils.combinePath(i, r)), o.appendChild(s));
                            }
                        }(r);
                    });
                }, i.prototype.makeTooltipTitle = function(t) {
                    var n = t.config, r = t.change, i = new Date(r.time), o = new Date(r.lastTime), a = n.template;
                    return a = (a = (a = (a = (a = (a = (a = (a = (a = (a = (a = (a = (a = (a = (a = (a = (a = (a = (a = (a = (a = (a = (a = (a = a.replace(/%a/g, t.localize(t.isInsert ? "CHANGE_TYPE_ADDED" : "CHANGE_TYPE_DELETED"))).replace(/%t/g, e.pluginUtils.relativeDateFormat(i, t.now, t.localize))).replace(/%u/g, r.username)).replace(/%dd/g, e.utils.padNumber(i.getDate(), 2))).replace(/%d/g, String(i.getDate()))).replace(/%mm/g, e.utils.padNumber(i.getMonth() + 1, 2))).replace(/%m/g, String(i.getMonth() + 1))).replace(/%yy/g, e.utils.padNumber(i.getFullYear() % 100, 2))).replace(/%y/g, String(i.getFullYear()))).replace(/%nn/g, e.utils.padNumber(i.getMinutes(), 2))).replace(/%n/g, String(i.getMinutes()))).replace(/%hh/g, e.utils.padNumber(i.getHours(), 2))).replace(/%h/g, String(i.getHours()))).replace(/%T/g, e.pluginUtils.relativeDateFormat(o, t.now, t.localize))).replace(/%DD/g, e.utils.padNumber(o.getDate(), 2))).replace(/%D/g, String(o.getDate()))).replace(/%MM/g, e.utils.padNumber(o.getMonth() + 1, 2))).replace(/%M/g, String(o.getMonth() + 1))).replace(/%YY/g, e.utils.padNumber(o.getFullYear() % 100, 2))).replace(/%Y/g, String(o.getFullYear()))).replace(/%NN/g, e.utils.padNumber(o.getMinutes(), 2))).replace(/%N/g, String(o.getMinutes()))).replace(/%HH/g, e.utils.padNumber(o.getHours(), 2))).replace(/%H/g, String(o.getHours()));
                }, i.prototype.relativeDateFormat = function(t, n, r) {
                    var i, o, a, s = (n = n || new Date).getDate(), l = n.getMonth(), d = n.getFullYear(), c = typeof t;
                    return s == (i = "string" === c || "number" === c ? new Date(i) : t).getDate() && l == i.getMonth() && d == i.getFullYear() ? (o = Math.floor((n.getTime() - i.getTime()) / 6e4)) < 1 ? r("NOW") : o < 2 ? r("MINUTE_AGO") : o < 60 ? r("MINUTES_AGO").replace("%Minutes", String(o)) : (a = i.getHours(), o = i.getMinutes(), r("AT") + " " + e.utils.padNumber(a, 2) + ":" + e.utils.padNumber(o, 2)) : [r("ON"), e.utils.makeDateLabel(r.bind(this), i.getDate(), i.getMonth(), d === i.getFullYear() ? null : i.getFullYear())].join(" ");
                }, Object.defineProperty(i.prototype, "TooltipGuard", {
                    get: function() {
                        return o;
                    }, enumerable: !0, configurable: !0
                }), i.prototype.getEditorOffset = function(e) {
                    var n = { x: 0, y: 0 }, r = e && e.frameElement;
                    if (!r) return n;
                    var i = t(r).offset(), o = t(window);
                    return n.x = i.left + o.scrollLeft(), n.y = i.top + o.scrollTop(), n;
                }, i.prototype.getEditorOffsetString = function(t) {
                    var n = e.pluginUtils.getEditorOffset(t);
                    return [-n.x, -n.y].join(",");
                }, i.prototype.removeTooltipFromNode = function(t) {
                    if (t && 1 === t.nodeType) try {
                        var n = t._tippy || e.tippy(t);
                        n && n.destroy();
                    } finally {
                    }
                }, i.prototype.addTooltipToNode = function(t) {
                    var n = this;
                    if (t.node && 1 === t.node.nodeType && !(t.node.nodeName in a)) {
                        var i = function() {
                            if (!t.change) return "";
                            var n = {
                                change: t.change,
                                now: t.now,
                                isInsert: l.test(t.node.className) || s.test(t.change.type),
                                config: t.config,
                                localize: t.localize
                            };
                            return e.pluginUtils.makeTooltipTitle(n);
                        };
                        t.config.useTitle && t.node.setAttribute("title", r(i()));
                        try {
                            e.tippy(t.node, {
                                content: ".",
                                flipOnUpdate: !0,
                                onShow: function(e) {
                                    return t.config.useTitle ? (t.node.setAttribute("title", r(i())), !1) : (e.set({ followCursor: "initial" }), !1 !== t.canShow() && (e.setContent(i()), void n.hideTooltips(t.node)));
                                },
                                delay: t.config.delay,
                                theme: "dark",
                                arrow: !0,
                                followCursor: "initial",
                                maxWidth: 250,
                                role: "none",
                                appendTo: function() {
                                    return t.node.ownerDocument.body;
                                }
                            });
                        } catch (t) {
                            e.Logger.debug("error while creating tooltip", t);
                        }
                    }
                }, i.prototype.hideTooltips = function(e) {
                    var n = e && e.ownerDocument || e;
                    n && t(n).find(".tippy-popper").each(function(e, n) {
                        var r = n && n._tippy;
                        try {
                            r && r.state.isShown && r.hide(0), t(n).remove();
                        } finally {
                        }
                    });
                }, i.prototype.logEditorEvents = function(t, n, r) {
                    if (n && Boolean(r) !== Boolean(t.editorFireMethod)) {
                        var i = n;
                        if (r) {
                            t.editorFireMethod = i.fire;
                            i.fire = function() {
                                for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                                return function(e) {
                                    return !e || /mouse|selection|click|focus|undo|redo|snapshot|resolvename/i.test(e);
                                }(n[0]) || e.Logger.debug("Editor event " + n[0]), t.editorFireMethod.apply(i, n);
                            };
                        } else i.fire = t.editorFireMethod, t.editorFireMethod = null;
                    }
                }, i;
            }(), o = function() {
                function t(e) {
                    this._duration = e, this._lastEventTime = 0, this._canShow = !0;
                }

                return t.prototype.attach = function(e) {
                    e !== this._doc && (this._doc && this._detach(), e && this._attach(e));
                }, t.prototype.detach = function() {
                    this._detach();
                }, Object.defineProperty(t.prototype, "canShowTooltip", {
                    get: function() {
                        return Date.now() - this._lastEventTime > this._duration;
                    }, enumerable: !0, configurable: !0
                }), t.prototype._detach = function() {
                    if (this._remove) try {
                        this._remove();
                    } finally {
                        this._remove = null;
                    }
                }, t.prototype._attach = function(t) {
                    var n = this;
                    this._doc = t;
                    var r = function() {
                        e.pluginUtils.hideTooltips(t), n._lastEventTime = Date.now();
                    };
                    t.body.addEventListener("keyup", r), t.body.addEventListener("mousedown", r), this._remove = function() {
                        n._doc.body.removeEventListener("keyup", r), n._doc.body.removeEventListener("mousedown", r);
                    };
                }, t;
            }();
            e.pluginUtils = new i;
        }(window.FLITE, window.jQuery), Object.defineProperty(t, "__esModule", { value: !0 }), function(e, t) {
            var n = {
                    meta: !0,
                    input: !0,
                    frame: !0,
                    col: !0,
                    base: !0,
                    area: !0,
                    img: !0,
                    hr: !0,
                    iframe: !0,
                    param: !0,
                    link: !0
                }, r = {
                    body: !0,
                    p: !0,
                    div: !0,
                    table: !0,
                    tbody: !0,
                    tr: !0,
                    td: !0,
                    th: !0,
                    pre: !0,
                    ul: !0,
                    ol: !0,
                    li: !0,
                    fieldset: !0,
                    form: !0,
                    blockquote: !0,
                    dl: !0,
                    dt: !0,
                    dd: !0,
                    dir: !0,
                    center: !0,
                    address: !0,
                    h1: !0,
                    h2: !0,
                    h3: !0,
                    h4: !0,
                    h5: !0,
                    h6: !0
                }, i = function(e) {
                    for (var t = {}, n = 0, r = e.length; n < r; ++n) t[String(e[n])] = 1;
                    return t;
                }(["body", "p", "div", "pre", "u", "b", "s", "sub", "sup", "em", "strong", "span", "i", "li", "td", "th", "blockquote", "dt", "dd", "center", "address", "h1", "h2", "h3", "h4", "h5", "h6", "ins", "del"]),
                o = t.extend({}, n);
            o.br = 1;
            var a = Object.keys(n).join(", ");
            var s = function() {
                function n() {
                    this.wsrgx = /^\s*$/, this.numrgx = /^\d+$/;
                }

                return n.prototype.cleanTextNode = function(t) {
                    return t && t.length && (t.data = e.utils.removeDeadCharactersFrom(t.data)), t;
                }, n.prototype.isEmptyString = function(e) {
                    for (var t, n = e && e.length || 0; n > 0;) if ("​" !== (t = e[--n]) && "\ufeff" !== t && " " !== t) return !1;
                    return !0;
                }, n.prototype.addStubElement = function(e) {
                    o[e] = !0;
                }, n.prototype.createTreeWalker = function(e) {
                    return new l(e);
                }, n.prototype.getKeyChar = function(e) {
                    return String.fromCharCode(e.which);
                }, n.prototype.removeEmptyCharsFromTextNode = function(e) {
                    var t;
                    if (!e || !(t = e.length)) return !1;
                    for (var n = [], r = e.data, i = 0; i < t; ++i) 8203 === r.charCodeAt(i) && n.push(i);
                    if (n.length < 1) return !1;
                    var o = r.split("");
                    for (i = n.length - 1; i >= 0; --i) o.splice(i, 1);
                    return e.data = o.join(""), !0;
                }, n.prototype.getChildrenOfClass = function(e, n, r) {
                    n || (n = document.body);
                    var i = e.split(" ");
                    return i.unshift(r || ""), e = i.join("."), t.makeArray(t(n).find(e));
                }, n.prototype.getElementWidth = function(e) {
                    return e.offsetWidth;
                }, n.prototype.getElementHeight = function(e) {
                    return e.offsetHeight;
                }, n.prototype.getElementDimensions = function(e) {
                    return { width: this.getElementWidth(e), height: this.getElementHeight(e) };
                }, n.prototype.isOnlyChild = function(e) {
                    var t = e && e.parentNode;
                    return t && t.firstChild === e && t.lastChild === e;
                }, n.prototype.insertAfter = function(e, t, n) {
                    return e ? (n = n || t && t.parentNode, t && t.parentNode !== n && (t = null), n ? t ? n.insertBefore(e, t.nextSibling) : n.insertBefore(e, n.firstChild) : void 0) : null;
                }, n.prototype.contents = function(e) {
                    return t.makeArray(t(e).contents());
                }, n.prototype.extractContent = function(e) {
                    for (var t, n = document.createDocumentFragment(); t = e.firstChild;) n.appendChild(t);
                    return n;
                }, n.prototype.getNode = function(e, n) {
                    if (!e) return null;
                    e = e.$ || e;
                    var r = t(e);
                    return e.nodeType !== Node.TEXT_NODE && r.is(n) ? e : r.parents(n)[0] || null;
                }, n.prototype.getParents = function(e, n, r) {
                    for (var i = t(e).parents(n), o = i.length, a = [], s = 0; s < o && i[s] !== r; s++) a.push(i[s]);
                    return a;
                }, n.prototype.getSiblings = function(e, n, r, i) {
                    if (void 0 === r && (r = !1), void 0 === i && (i = null), !0 === r) return "prev" === n ? t(e).prevAll() : t(e).nextAll();
                    var o = [];
                    if ("prev" === n) for (; e.previousSibling && (e = e.previousSibling) !== i;) o.push(e); else for (; e.nextSibling && (e = e.nextSibling) !== i;) o.push(e);
                    return o;
                }, n.prototype.hasClass = function(e, t) {
                    if (!e || 1 !== e.nodeType) return !1;
                    var n = e, r = n.classList || n.className && n.className.split(/\s/);
                    if (r && r.length) for (var i = r.length - 1; i >= 0; --i) if (r[i] === t) return !0;
                    return !1;
                }, n.prototype.getNodeTextContent = function(e) {
                    return t(e).text();
                }, n.prototype.getNodeStubContent = function(e) {
                    return t(e).find(a);
                }, n.prototype.hasNoTextOrStubContent = function(e) {
                    if (!e || 1 !== e.nodeType) return !0;
                    var n = e, r = n && n.tagName && String(n.tagName).toLowerCase();
                    return !!(r && r in i) && (!!this.isEmptyString(n.textContent) && (!e.firstChild || 0 === t(e).find(a).length));
                }, n.prototype.isEmptyTextNode = function(e) {
                    if (!e || Node.TEXT_NODE !== e.nodeType) return !1;
                    var t = e;
                    return 0 === t.length || this.isEmptyString(t.nodeValue);
                }, n.prototype.getNodeLength = function(e) {
                    var t = e && e.nodeType;
                    return 1 === t ? e.childNodes.length : 3 === t ? e.length : 0;
                }, n.prototype.getNodeCharacterLength = function(e) {
                    return this.getNodeTextContent(e).length + t(e).find(a).length;
                }, n.prototype.setNodeTextContent = function(e, n) {
                    return t(e).text(n);
                }, n.prototype.getIframeDocument = function(e) {
                    var t = null;
                    return e.contentDocument ? t = e.contentDocument : e.contentWindow ? t = e.contentWindow.document : e.document && (t = e.document), t;
                }, n.prototype.isBlockElement = function(e) {
                    return e && e.nodeName && e.nodeName.toLowerCase() in r;
                }, n.prototype.isStubElement = function(e) {
                    return e && e.nodeName && e.nodeName.toLowerCase() in o;
                }, n.prototype.isChildOf = function(e, t) {
                    if (!t || 1 !== t.nodeType) return !1;
                    try {
                        for (; e && e.parentNode;) {
                            if (e.parentNode === t) return !0;
                            e = e.parentNode;
                        }
                    } catch (e) {
                    }
                    return !1;
                }, n.prototype.isChildOfTagNames = function(e, t) {
                    try {
                        for (var n = void 0; e && e.parentNode;) {
                            if (e.parentNode && e.parentNode.nodeName) {
                                n = e.parentNode.nodeName.toLowerCase();
                                for (var r = 0; r < t.length; r++) if (n === t[r]) return e.parentNode;
                            }
                            e = e.parentNode;
                        }
                    } catch (e) {
                    }
                    return null;
                }, n.prototype.getElementsBetween = function(e, t) {
                    var n, r, i = [];
                    if (e === t) return i;
                    if (this.isChildOf(t, e)) {
                        n = (r = e).childNodes.length;
                        for (var o = 0; o < n && e.childNodes[o] !== t; o++) {
                            if (!0 === this.isChildOf(t, r.childNodes[o])) return this.arrayMerge(i, this.getElementsBetween(r.childNodes[o], t));
                            i.push(r.childNodes[o]);
                        }
                        return i;
                    }
                    for (var a = e.nextSibling; a;) {
                        if (!0 === this.isChildOf(t, a)) return i = this.arrayMerge(i, this.getElementsBetween(a, t));
                        if (a === t) return i;
                        i.push(a), a = a.nextSibling;
                    }
                    for (var s = this.getParents(e, null, null), l = this.getParents(t, null, null), d = this.arrayDiff(s, l, !0), c = d.length, u = 0; u < c - 1; u++) i = this.arrayMerge(i, this.getSiblings(d[u], "next"));
                    var p = d[d.length - 1];
                    return i = this.arrayMerge(i, this.getElementsBetween(p, t));
                }, n.prototype.walk = function(e, t, n) {
                    e && (n || (n = 0), !1 !== t.call(this, e, n) && (e.childNodes && e.childNodes.length > 0 ? this.walk(e.firstChild, t, n + 1) : e.nextSibling ? this.walk(e.nextSibling, t, n) : e.parentNode && e.parentNode.nextSibling && this.walk(e.parentNode.nextSibling, t, n - 1)));
                }, n.prototype.getCommonAncestor = function(e, t) {
                    for (var n = e; n;) {
                        if (!0 === this.isChildOf(t, n)) return n;
                        n = n.parentNode;
                    }
                    return null;
                }, n.prototype.getNextNode = function(e, t) {
                    if (e) for (; e.parentNode;) {
                        if (e === t) return null;
                        if (e.nextSibling) {
                            if (e.nextSibling.nodeType === Node.TEXT_NODE && 0 === e.nextSibling.length) {
                                e = e.nextSibling;
                                continue;
                            }
                            return this.getFirstChild(e.nextSibling);
                        }
                        e = e.parentNode;
                    }
                    return null;
                }, n.prototype.canContainTextElement = function(e) {
                    return Boolean(e && e.nodeName && e.nodeName.toLowerCase() in i);
                }, n.prototype.getFirstChild = function(e) {
                    return e.nodeType !== Node.ELEMENT_NODE ? null : e.firstChild ? e.firstChild.nodeType === Node.ELEMENT_NODE ? this.getFirstChild(e.firstChild) : e.firstChild : e;
                }, n.prototype.getLastChild = function(e) {
                    return e.nodeType !== Node.ELEMENT_NODE ? null : e.lastChild ? e.lastChild.nodeType === Node.ELEMENT_NODE ? this.getLastChild(e.lastChild) : e.lastChild : e;
                }, n.prototype.getNextContentNode = function(e, t) {
                    if (e) for (; e.parentNode;) {
                        if (e === t) return null;
                        if (e.nextSibling && this.canContainTextElement(this.getBlockParent(e, t))) {
                            if (e.nextSibling.nodeType === Node.TEXT_NODE && this.isEmptyTextNode(e)) {
                                e = e.nextSibling;
                                continue;
                            }
                            return e.nextSibling;
                        }
                        if (e.nextElementSibling) return e.nextElementSibling;
                        e = e.parentNode;
                    }
                    return null;
                }, n.prototype.getPrevNode = function(e, t) {
                    if (e) for (; e.parentNode;) {
                        if (e === t) return null;
                        if (e.previousSibling) {
                            if (e.previousSibling.nodeType === Node.TEXT_NODE && 0 === e.previousSibling.length) {
                                e = e.previousSibling;
                                continue;
                            }
                            return this.getLastChild(e.previousSibling);
                        }
                        e = e.parentNode;
                    }
                    return null;
                }, n.prototype.getPrevContentNode = function(e, t) {
                    if (e) for (; e.parentNode;) {
                        if (e === t) return null;
                        if (e.previousSibling && this.canContainTextElement(this.getBlockParent(e, t))) {
                            if (e.previousSibling.nodeType === Node.TEXT_NODE && 0 === e.previousSibling.length) {
                                e = e.previousSibling;
                                continue;
                            }
                            return e.previousSibling;
                        }
                        if (e.previousElementSibling) return e.previousElementSibling;
                        e = e.parentNode;
                    }
                    return null;
                }, n.prototype._findNextTextContainer = function(e) {
                    for (var t; e;) {
                        if (Node.TEXT_NODE == e.nodeType) return e;
                        for (var n = e.firstChild; n; n = n.nextSibling) if (t = this._findNextTextContainer(n)) return t;
                        if (this.isTextContainer(e)) return e;
                        e = e.nextSibling;
                    }
                    return null;
                }, n.prototype._findPrevTextContainer = function(e) {
                    for (; e;) {
                        if (Node.TEXT_NODE == e.nodeType) return e;
                        for (var t = e.lastChild; t; t = t.previousSibling) {
                            var n = this._findPrevTextContainer(t);
                            if (n) return n;
                        }
                        if (this.isTextContainer(e)) return e;
                        e = e.previousSibling;
                    }
                    return null;
                }, n.prototype.findPrevTextContainer = function(e, t) {
                    if (!e || e == t) return { node: t, offset: 0 };
                    if (e.parentNode && this.isTextContainer(e.parentNode)) return {
                        node: e.parentNode,
                        offset: this.getNodeIndex(e)
                    };
                    for (; e.previousSibling;) {
                        var n = this._findPrevTextContainer(e.previousSibling);
                        if (n) return { node: n, offset: this.getNodeLength(n) };
                        e = e.previousSibling;
                    }
                    return this.findPrevTextContainer(e.parentNode && e.parentNode.previousSibling, t);
                }, n.prototype.findNextTextContainer = function(e, t) {
                    if (!e || e == t) return { node: t, offset: this.getNodeLength(t) };
                    if (e.parentNode && this.isTextContainer(e.parentNode)) return {
                        node: e.parentNode,
                        offset: this.getNodeIndex(e) + 1
                    };
                    for (; e.nextSibling;) {
                        var n = this._findNextTextContainer(e.nextSibling);
                        if (n) return { node: n, offset: 0 };
                        e = e.previousSibling;
                    }
                    return this.findNextTextContainer(e.parentNode && e.parentNode.nextSibling, t);
                }, n.prototype.isTextContainer = function(e) {
                    return e && Node.TEXT_NODE == e.nodeType || (e.nodeName || "").toLowerCase() in i;
                }, n.prototype.getNodeIndex = function(e) {
                    for (var t = 0; e = e.previousSibling;) ++t;
                    return t;
                }, n.prototype.splitTextAt = function(e, t, n, r) {
                    void 0 === r && (r = !1);
                    var i, o = e.length;
                    return t < 0 || t >= o ? null : (t + n >= o && (n = o - t), n === o ? r ? e : null : ((i = t > 0 ? e.splitText(t) : e).length > n && i.splitText(n), i));
                }, n.prototype.isset = function(e) {
                    return void 0 !== e && null !== e;
                }, n.prototype.inArray = function(e, t) {
                    for (var n = t.length, r = 0; r < n; r++) if (e === t[r]) return !0;
                    return !1;
                }, n.prototype.arrayDiff = function(e, t, n) {
                    var r, i = e.length, o = [];
                    for (r = 0; r < i; r++) !1 === this.inArray(e[r], t) && o.push(e[r]);
                    if (!0 !== n) for (i = t.length, r = 0; r < i; r++) !1 === this.inArray(t[r], e) && o.push(t[r]);
                    return o;
                }, n.prototype.arrayMerge = function(e, t) {
                    for (var n = t.length, r = 0; r < n; r++) e.push(t[r]);
                    return e;
                }, n.prototype.getBlockParent = function(e, t) {
                    if (!0 === this.isBlockElement(e)) return e;
                    if (e && e !== t) for (; e.parentNode;) {
                        if (e = e.parentNode, !0 === this.isBlockElement(e)) return e;
                        if (e === t) return null;
                    }
                    return null;
                }, n.prototype.isOnBlockBoundary = function(e, t, n) {
                    return !(!e || !t) && (this.getBlockParent(e, n) || this.isBlockElement(e) && e || null) !== (this.getBlockParent(t, n) || this.isBlockElement(t) && t || null);
                }, n.prototype.mergeContainers = function(e, n) {
                    if (!e || !n) return !1;
                    if (e.nodeType === Node.TEXT_NODE || this.isStubElement(e)) n.appendChild(e); else if (e.nodeType === Node.ELEMENT_NODE) {
                        for (; e.firstChild;) n.appendChild(e.firstChild);
                        t(e).remove();
                    }
                    return !0;
                }, n.prototype.isRangeInElement = function(e, t) {
                    for (var n = e && e.startContainer; n;) {
                        if (n === t) return !0;
                        n = n.parentNode;
                    }
                    return !1;
                }, n.prototype.mergeBlockWithSibling = function(e, n, r) {
                    var i = r ? t(n).next().get(0) : t(n).prev().get(0);
                    return r ? this.mergeContainers(i, n) : this.mergeContainers(n, i), e.collapse(!0), !0;
                }, n.prototype.normalizeNode = function(t) {
                    return t ? e.utils.browser.msie || "function" != typeof t.normalize ? (function e(t) {
                        if (t && t.nodeType === Node.ELEMENT_NODE) for (var n = t.firstChild; n;) {
                            if (n.nodeType === Node.ELEMENT_NODE) e(n); else if (n.nodeType == Node.TEXT_NODE) for (var r; (r = n.nextSibling) && r.nodeType == Node.TEXT_NODE;) {
                                var i = r.nodeValue;
                                null != i && i.length && (n.nodeValue = n.nodeValue + i), t.removeChild(r);
                            }
                            n = n.nextSibling;
                        }
                    }(t), t) : (t.normalize(), t) : null;
                }, n.prototype._getNextContainer = function(e, t) {
                    var n = t && t.root;
                    if (!e || e === n) return null;
                    for (; e.nextSibling;) {
                        if ((e = e.nextSibling).nodeType !== Node.TEXT_NODE) {
                            var r = this.getFirstSelectableChild(e, t);
                            if (null !== r) return r;
                        }
                        if (this.isSelectable(e, t)) return e;
                    }
                    for (; e && !e.nextSibling;) {
                        if (e === n) return null;
                        e = e.parentNode;
                    }
                    if (!e || e === n) return null;
                    if (e = e.nextSibling, this.isSelectable(e, t)) return e;
                    var i = this.getFirstSelectableChild(e, t);
                    return null !== i ? i : this._getNextContainer(e, t);
                }, n.prototype.getNextContainer = function(e, t) {
                    return this._getNextContainer(e, t || {});
                }, n.prototype._getPreviousContainer = function(t, n) {
                    var r = n.root, i = n.nodeFilter;
                    if (!t || t === r) return null;
                    for (; t.previousSibling;) {
                        if ((t = t.previousSibling).nodeType !== Node.TEXT_NODE) {
                            if (!0 === e.domUtils.isStubElement(t)) return t;
                            var o = this.getLastSelectableChild(t, n);
                            if (null !== o) return o;
                        }
                        if (this.isSelectable(t, n)) return t;
                    }
                    do {
                        if (!(t = t.parentNode) || t === r) return null;
                        if (i && i(t)) return t;
                        if (t.previousSibling) break;
                    } while (t);
                    if (t = t.previousSibling, this.isSelectable(t, n)) return t;
                    var a = this.getLastSelectableChild(t, n);
                    return null !== a ? a : this._getPreviousContainer(t, n);
                }, n.prototype.getPreviousContainer = function(e, t) {
                    return this._getPreviousContainer(e, t || {});
                }, n.prototype.getNextSelectableNode = function(t, n) {
                    return void 0 === n && (n = null), e.domUtils.createTreeWalker(n.root).nextNode(t, n);
                }, n.prototype._getPreviousSelectableNode = function(t, n) {
                    return e.domUtils.createTreeWalker(n.root).previousNode(t, n);
                }, n.prototype.getPreviousSelectableNode = function(e, t) {
                    return this._getPreviousSelectableNode(e, t || {});
                }, n.prototype.getFirstSelectableChild = function(e, t) {
                    if (!e) return null;
                    if (!(t = t || {}).excludeSelf) {
                        if (e.nodeType === Node.TEXT_NODE && (!1 !== t.allowEmptyText || !this.isEmptyTextNode(e))) return e;
                        if (t && t.nodeFilter && t.nodeFilter(e)) return e;
                    }
                    var n, r = e.firstChild;
                    for (t = t.excludeSelf ? {
                        root: t.root,
                        excludeSelf: !1,
                        nodeFilter: t.nodeFilter,
                        allowEmptyText: t.allowEmptyText
                    } : t; r;) {
                        if (n = this.getFirstSelectableChild(r, t)) return n;
                        r = r.nextSibling;
                    }
                    return null;
                }, n.prototype.getLastSelectableChild = function(e, t) {
                    if (void 0 === t && (t = null), !e) return null;
                    if (!(t = t || {}).excludeSelf) {
                        if (e.nodeType == Node.TEXT_NODE && (!1 !== t.allowEmptyText || !this.isEmptyTextNode(e))) return e;
                        if (t && t.nodeFilter && t.nodeFilter(e)) return e;
                    }
                    var n, r = e.lastChild;
                    for (t = t.excludeSelf ? {
                        root: t.root,
                        excludeSelf: !1,
                        nodeFilter: t.nodeFilter,
                        allowEmptyText: t.allowEmptyText
                    } : t; r;) {
                        if (n = this.getLastSelectableChild(r, t)) return n;
                        r = r.previousSibling;
                    }
                    return null;
                }, n.prototype.isSelectable = function(e, t) {
                    return !!e && (e.nodeType === Node.TEXT_NODE && !this.isEmptyTextNode(e) || !(!t || !t.nodeFilter) && t.nodeFilter(e));
                }, n.prototype.insertNodeAt = function(e, t, n) {
                    return !(!e || !t || t.nodeType !== Node.ELEMENT_NODE || n < 0) && (t.insertBefore(e, t.childNodes[n]), !0);
                }, n.prototype.matchesSelector = function(e, n) {
                    return !(!e || e.nodeType !== Node.ELEMENT_NODE) && (e.matches ? e.matches(n) : e.msMatchesSelector ? e.msMatchesSelector(n) : t(e).is(n));
                }, n.prototype.findNodeByTagName = function(e, t) {
                    for (var n, r = e && e.length || 0, i = 0; i < r; ++i) if ((n = e[i]).nodeType === Node.ELEMENT_NODE && t.test(n.tagName)) return n;
                    return null;
                }, n.prototype.isAncestorAmong = function(t, n) {
                    for (var r = e.rangy.dom, i = 0; i < t.length; ++i) if (r.isAncestorOf(t[i], n, !1)) return !0;
                    return !1;
                }, n.prototype.isOnRightEdge = function(e, t) {
                    if (!e) return !1;
                    var n = e.nodeType;
                    return Node.TEXT_NODE == n ? t && e.nodeValue && t >= e.nodeValue.length : Node.ELEMENT_NODE == n && (e.childNodes && e.childNodes.length && t >= e.childNodes.length);
                }, n.prototype.isOnLeftEdge = function(e, t) {
                    return Boolean(e && 0 === t);
                }, n;
            }(), l = function() {
                function t(e) {
                    this._root = e, this._isValid = !1;
                }

                return Object.defineProperty(t.prototype, "isValid", {
                    get: function() {
                        return this._isValid;
                    }, enumerable: !0, configurable: !0
                }), t.prototype.previousNode = function(e, t) {
                    if (this._root = t.root || this._root, this.goto(e), !this.isValid) return null;
                    var n = this._findPrevNode(this._current, t, !1, !0);
                    return n && this.goto(n), n;
                }, t.prototype.nextNode = function(e, t) {
                    if (this._root = t.root || this._root, this.goto(e), !this.isValid) return null;
                    var n = this._findNextNode(this._current, t, !1, !0);
                    return n && this.goto(n), n;
                }, t.prototype.goto = function(t) {
                    this._isValid = e.domUtils.isChildOf(t, this._root), this._isValid || (t = null), this._current = t;
                }, t.prototype._findNextNode = function(e, t, n, r) {
                    if (!e || e === this._root) return null;
                    if (n) if (t.depthFirst) {
                        if (i = (!t.visitFilter || t.visitFilter(e)) && e.firstChild && this._findNextNode(e.firstChild, t, !0, !1)) return i;
                        if (!t.nodeFilter || t.nodeFilter(e)) return e;
                    } else {
                        if (!t.nodeFilter || t.nodeFilter(e)) return e;
                        var i;
                        if (i = (!t.visitFilter || t.visitFilter(e)) && e.firstChild && this._findNextNode(e.firstChild, t, !0, !1)) return i;
                    }
                    if (e.nextSibling) {
                        var o = this._findNextNode(e.nextSibling, t, !0, r);
                        if (o) return o;
                    }
                    return e != this._root && e.parentNode ? !t.queryParent || t.nodeFilter && !t.nodeFilter(e.parentNode) ? this._findNextNode(e.parentNode, t, !1, !0) : e.parentNode : null;
                }, t.prototype._findPrevNode = function(e, t, n, r) {
                    if (!e || e === this._root) return null;
                    if (n) if (t.depthFirst) {
                        if (!t.visitFilter || t.visitFilter(e)) if (i = e.lastChild && this._findPrevNode(e.lastChild, t, !0, !1)) return i;
                        if (!t.nodeFilter || t.nodeFilter(e)) return e;
                    } else {
                        if (!t.nodeFilter || t.nodeFilter(e)) return e;
                        var i;
                        if (!t.visitFilter || t.visitFilter(e)) if (i = e.lastChild && this._findPrevNode(e.lastChild, t, !0, !1)) return i;
                    }
                    if (e.previousSibling) {
                        var o = this._findPrevNode(e.previousSibling, t, !0, r);
                        if (o) return o;
                    }
                    return r && e != this._root && e.parentNode ? !t.queryParent || t.nodeFilter && !t.nodeFilter(e.parentNode) ? this._findPrevNode(e.parentNode, t, !1, !0) : e.parentNode : null;
                }, t;
            }();
            e.domUtils = new s;
        }((this || window).FLITE, window.jQuery), Object.defineProperty(t, "__esModule", { value: !0 }), function(e, t) {
            var n = function() {
                function e(e) {
                }

                return e.prototype.init = function(e) {
                }, e.prototype.hideAll = function(e) {
                }, e.prototype.showTooltip = function(e, t, n) {
                    e && e.setAttribute("title", t);
                }, e.prototype.hideTooltip = function(e) {
                    t(e).attr("title", null);
                }, e;
            }();
            e.DefaultTooltips = n;
        }((window || this).FLITE, window.jQuery), Object.defineProperty(t, "__esModule", { value: !0 }), function(e) {
            e || console.error("documentselection: global is not defined");
            var t = function() {
                function t(e) {
                    this.env = e, this._setHook = null, this._selection = null, this.getSelection();
                }

                return Object.defineProperty(t.prototype, "nativeSelection", {
                    get: function() {
                        return this.getSelection().nativeSelection;
                    }, enumerable: !0, configurable: !0
                }), t.prototype.setHook = function(e) {
                    this._setHook = e;
                }, t.prototype.getSelection = function() {
                    return e.rangy.getSelection ? (this._selection ? this._selection.refresh() : this.env.frame ? this._selection = e.rangy.getSelection(this.env.frame) : this._selection = e.rangy.getSelection(null), this._selection) : (e.Logger.log("no getselection, rangy is", Object.keys(e.rangy), "global is", Object.keys(e), "initialized", e.rangy.isInitialized()), null);
                }, t.prototype.createRange = function() {
                    return e.rangy.createRange(this.env.document);
                }, t.prototype.getRangeAt = function(e) {
                    try {
                        return this._selection.refresh(), this._selection.getRangeAt(e);
                    } catch (e) {
                        this._selection = null;
                        try {
                            return this.getSelection().getRangeAt(0);
                        } catch (e) {
                        }
                    }
                    return null;
                }, t.prototype.getRange = function() {
                    return this.getRangeAt(0);
                }, t.prototype.moveLeft = function(e, t, n) {
                    void 0 === e && (e = null), void 0 === t && (t = 1), (e = e || this.getRangeAt(0)) && (e.moveStart("char", -t, n), e.collapse(!0), this.addRange(e));
                }, t.prototype.nudgeLeft = function(t, n) {
                    if ((t = t || this.getRangeAt(0)) && t.collapsed && t.startContainer) {
                        var r = t.startContainer;
                        if (0 === t.startOffset) {
                            var i = e.domUtils.createTreeWalker(n.root).previousNode(r, n);
                            if (i) i !== r && this.collapseAtEnd(i); else {
                                var o = e.domUtils.getFirstSelectableChild(n.root, n);
                                o && this.collapseAtStart(o);
                            }
                        }
                    }
                }, t.prototype.nudgeRight = function(t, n) {
                    var r, i = (t = t || this.getRangeAt(0)) && t.collapsed && t.endContainer;
                    if (i && (1 === i.nodeType ? r = t.endOffset >= i.childNodes.length : 3 === i.nodeType && (r = t.endOffset >= i.length), r)) {
                        var o = e.domUtils.createTreeWalker(n.root).nextNode(i, n);
                        o && o !== i && this.collapseAtStart(o);
                    }
                }, t.prototype.moveRight = function(e, t, n) {
                    void 0 === e && (e = null), void 0 === t && (t = 1), (e = e || this.getRangeAt(0)) && (e.moveStart("char", t, n), e.collapse(!0), this.addRange(e));
                }, t.prototype.collapseBefore = function(t, n) {
                    var r = e.domUtils.createTreeWalker(n.root), i = r.previousNode(t, n);
                    if (!i) return r.isValid && this.setStart(t.parentNode, !0, e.domUtils.getNodeIndex(t)), !1;
                    var o = this.getRange();
                    if (3 === i.nodeType) o.setEnd(i, i.length || 0); else if (1 === i.nodeType) {
                        e.domUtils.isChildOf(t, i) ? o.setEnd(i, 0) : o.setEnd(i.parentNode, e.domUtils.getNodeIndex(i) + 1);
                    }
                    return o.collapse(), this.addRange(o), !0;
                }, t.prototype.collapseAfter = function(t, n) {
                    var r = e.domUtils.createTreeWalker(n.root), i = r.nextNode(t, n);
                    if (!i) return r.isValid && this.setEnd(t.parentNode, !0, e.domUtils.getNodeIndex(t) + 1), !1;
                    var o = this.getRange();
                    return 3 === i.nodeType ? o.setStart(i, 0) : 1 === i.nodeType && o.setStart(i, i.childNodes.length), o.collapse(!0), this.addRange(o), !0;
                }, t.prototype.collapseAtStart = function(e) {
                    return this._collapseAt(e, !0);
                }, t.prototype.collapseAtEnd = function(e) {
                    return this._collapseAt(e, !1);
                }, t.prototype.setStart = function(e, t, n) {
                    if (e && e.ownerDocument && e.parentNode) {
                        var r = this.getRangeAt(0);
                        return !!r && (r.setStart(e, n), t && r.collapse(!0), this.addRange(r), r.startContainer === e);
                    }
                }, t.prototype.setEnd = function(e, t, n) {
                    if (e && e.ownerDocument && e.parentNode) {
                        var r = this.getRangeAt(0);
                        return !!r && (r.setEnd(e, n), t && r.collapse(!1), this.addRange(r), r.endContainer === e);
                    }
                }, t.prototype.addRange = function(e, t) {
                    void 0 === t && (t = !0), this._selection || (this._selection = this.getSelection()), this._selection.setSingleRange(e), !1 !== t && this._setHook && this._setHook(e);
                }, t.prototype.normalize = function(t, n) {
                    var r = this.getRange();
                    if (r && r.collapsed) {
                        var i = r.startContainer;
                        if (1 === i.nodeType) {
                            var o = i.childNodes[r.startOffset];
                            if (!t.nodeFilter(o)) {
                                if (n) {
                                    var a = e.domUtils.getPreviousSelectableNode(o, t);
                                    if (a) return void this.collapseAtEnd(a);
                                }
                                var s = e.domUtils.getFirstSelectableChild(o, t);
                                s && s !== o && this.setStart(s, !0, 0);
                            }
                        }
                    }
                }, t.prototype._selectNodeOrContent = function(e, t) {
                    t.nodeType === Node.TEXT_NODE ? e.selectNode(t) : e.selectNodeContents(t);
                }, t.prototype._collapseAt = function(t, n) {
                    var r = this.getRangeAt(0);
                    if (!r || !t) return !1;
                    try {
                        3 === t.nodeType ? n ? this.setStart(t, !0, 0) : this.setEnd(t, !0, t.length) : (this._selectNodeOrContent(r, t), r.collapse(n), this.addRange(r));
                    } catch (t) {
                        return e.Logger.error("collapseAt", n ? "start" : "end", t), !1;
                    }
                }, t.prototype._getEffectiveStartNode = function(e) {
                    if (!e || 1 !== e.nodeType) return e;
                    var t = e.parentNode;
                    return t && e === t.firstChild ? "LI" === e.nodeName || "TR" === e.nodeName ? e.parentNode : "TD" === e.nodeName && t === (t.parentNode && t.parentNode.firstChild) ? t.parentNode : e : e;
                }, t.prototype._getEffectiveEndNode = function(e) {
                    if (!e || 1 !== e.nodeType) return e;
                    var t = e.parentNode;
                    return t && e === t.lastChild ? "LI" === e.nodeName || "TR" === e.nodeName ? e.parentNode : "TD" === e.nodeName && t === (t.parentNode && t.parentNode.lastChild) ? t.parentNode : e : e;
                }, t;
            }();
            e.Selection = t;
        }((window || this).FLITE), Object.defineProperty(t, "__esModule", { value: !0 }), function(e, t) {
            e || console.error("marker: global is not defined");
            var n = function() {
                function n(e, t, r) {
                    this.env = e, n.removeBookmarks(e.element), this._createBookmark(r);
                }

                return Object.defineProperty(n.prototype, "isOrphan", {
                    get: function() {
                        return !(!this._start || this._start.previousSibling) && (this._end ? !this._end.nextSibling && this._end.previousSibling === this._start : !this._start.nextSibling);
                    }, enumerable: !0, configurable: !0
                }), n.prototype.getNodesInRange = function(t) {
                    if (!this._end || !this._start || this._start.nextSibling === this._end) return [];
                    var n, r = [],
                        i = this._start.ownerDocument.createTreeWalker(t, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT),
                        o = this._end, a = !o.nextSibling;
                    for (i.currentNode = this._start; n = i.nextNode();) if (!e.domUtils.isChildOf(n, this._start)) {
                        if (n === o || n === t) break;
                        !a && e.domUtils.isChildOf(o, n) || r.push(n);
                    }
                    return r;
                }, n.prototype._createBookmark = function(t) {
                    var n, r, i, o = this, a = t.collapsed, s = function(e) {
                        var t = o.env.document.createElement("span");
                        return t.style.display = "none", t.innerHTML = "&nbsp;", t.className = "flite-bookmark flite-bookmark-" + e, t;
                    };
                    this._start = n = s("start"), a || (this._end = r = s("end"), (i = t.cloneRange()).collapse(!1), i.insertNode(r)), (i = t.cloneRange()).collapse(!0), i.insertNode(n), r ? (i.setStart(n.parentNode, e.domUtils.getNodeIndex(n) + 1), i.setEnd(r.parentNode, e.domUtils.getNodeIndex(r))) : (i.setStartAfter(n), i.collapse(!0)), this._range = i;
                }, n.prototype.getRange = function() {
                    return this._range.cloneRange();
                }, Object.defineProperty(n.prototype, "start", {
                    get: function() {
                        return this._start;
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(n.prototype, "end", {
                    get: function() {
                        return this._end;
                    }, enumerable: !0, configurable: !0
                }), n.prototype.collapseAndRemove = function(e, n, r) {
                    var i = t.extend({}, {
                        root: this.env.element, visitFilter: function(e) {
                            return !0;
                        }, nodeFilter: function(e) {
                            return !0;
                        }
                    }, r);
                    n && this._start ? e.collapseBefore(this._start, i) : !n && this._end && e.collapseAfter(this._end, i), this.remove();
                }, n.prototype.remove = function() {
                    this._start && (t([this._start, this.end]).remove(), this._start = this._end = null);
                }, n.prototype._selectBookmark = function(n) {
                    var r = n.getRangeAt(0), i = null, o = null, a = 0, s = null,
                        l = this._start && this._start.parentNode;
                    if (this._start.nextSibling === this.end || 0 === e.domUtils.getElementsBetween(this._start, this.end).length) this.end.nextSibling ? i = e.domUtils.getFirstChild(this.end.nextSibling) : this._start.previousSibling ? (i = e.domUtils.getFirstChild(this._start.previousSibling)).nodeType === Node.TEXT_NODE && (a = i.length) : (this.end.parentNode.appendChild(this.env.document.createTextNode("")), i = e.domUtils.getFirstChild(this.end.nextSibling)); else {
                        if (this._start.nextSibling) i = e.domUtils.getFirstChild(this._start.nextSibling); else {
                            if (!this._start.previousSibling) {
                                var d = this.env.document.createTextNode("");
                                t(this._start).before(d);
                            }
                            a = (i = e.domUtils.getLastChild(this._start.previousSibling)).length;
                        }
                        this.end.previousSibling ? o = e.domUtils.getLastChild(this.end.previousSibling) : (o = e.domUtils.getFirstChild(this.end.nextSibling || this.end), s = 0);
                    }
                    t([this._start, this.end]).remove();
                    try {
                        e.domUtils.normalizeNode(l);
                    } catch (e) {
                    }
                    null === o ? r && (r.setEnd(i, a), r.collapse(!1)) : (r.setStart(i, a), null === s && (s = o.length || 0), r.setEnd(o, s));
                    try {
                        n.addRange(r);
                    } catch (e) {
                    }
                }, n.removeBookmarks = function(e) {
                    t(e).find("span.flite-bookmark").remove();
                }, n;
            }();
            e.DOMMarker = n;
        }((window || this).FLITE, window.jQuery), Object.defineProperty(t, "__esModule", { value: !0 }), function(e) {
            e[e.OK = 0] = "OK", e[e.IGNORE = 1] = "IGNORE", e[e.IGNORE_ALL = 2] = "IGNORE_ALL";
        }(o || (o = {})), function(e) {
            e[e.None = 0] = "None", e[e.Start = 1] = "Start", e[e.Composing = 2] = "Composing";
        }(n || (n = {})), function(e) {
            e[e.inline = 0] = "inline", e[e.block = 1] = "block", e[e.none = 2] = "none";
        }(r || (r = {})), function(e) {
            e[e.Right = 1] = "Right", e[e.Left = 2] = "Left", e[e.None = 0] = "None";
        }(i || (i = {})), function(e) {
            var t, a = "insertType", s = "deleteType", l = "flite-container-only", d = "." + l,
                c = d + ",[data-flite-complex]", u = ":not(." + l + ")", p = { LI: 1, TD: 1, P: 1 },
                h = { LI: 1, P: 1, DIV: 1, H1: 1, H2: 1, H3: 1, H4: 1, H5: 1, H6: 1 }, f = { OL: 1, UL: 1 },
                g = { BR: 1, P: 1, DIV: 1, LI: 1 }, m = { LI: 1, OL: 1, UL: 1 },
                v = { P: 1, DIV: 1, H1: 1, H2: 1, H3: 1, H4: 1, H5: 1, H6: 1 }, y = Object.keys(v).join(","),
                _ = Object.keys(v).join(".flite-container-only:empty,") + ".flite-container-only:empty", N = {
                    div: 1,
                    p: 1,
                    br: 1,
                    table: 1,
                    ol: 1,
                    li: 1,
                    ul: 1,
                    h1: 1,
                    h2: 1,
                    h3: 1,
                    h4: 1,
                    h5: 1,
                    h6: 1,
                    img: 1
                }, b = /^u|ol$/i, C = /li/i, T = [{ start: 0, end: 31 }, { start: 33, end: 40 }, { start: 45, end: 45 }, {
                    start: 91,
                    end: 93
                }, { start: 112, end: 123 }, { start: 144, end: 145 }], E = {
                    attributes: {
                        lite2Created: "data-flite-created",
                        lite2Marked: "data-flite-marked",
                        changeId: "data-flite-cid",
                        userId: "data-userid",
                        userName: "data-username",
                        sessionId: "data-session-id",
                        time: "data-time",
                        lastTime: "data-last-change-time",
                        changeData: "data-changedata"
                    },
                    changeGroupTime: 200,
                    opaqueSelectors: null,
                    classes: { block: "ice-block" },
                    attrValuePrefix: "",
                    mergeBlocks: !1,
                    blockEl: "p",
                    stylePrefix: "cts",
                    changeTypes: {
                        insertType: { alias: "ins", action: "Inserted" },
                        deleteType: { alias: "del", action: "Deleted" }
                    },
                    contentEditable: void 0,
                    isVisible: !0,
                    _changeData: null,
                    handleSelectAll: !1
                };
            !function(e) {
                e[e.Always = 1] = "Always", e[e.NotEmpty = 2] = "NotEmpty";
            }(t || (t = {}));
            var S = [{
                selector: "img,br,.cke_widget_wrapper,li",
                type: t.Always
            }, { selector: "p,div,td,h1,h2,h3,h4,h5,h6", type: t.NotEmpty }], O = function(e) {
                if (!e) return !0;
                var t, n, r = T.length;
                for (t = 0; t < r; ++t) if (e >= (n = T[t]).start && e <= n.end) return !0;
                return !1;
            }, k = function(e) {
                return !(!e || 1 !== e.nodeType || "BR" === e.nodeName) && null !== e.getAttribute("data-mce-bogus");
            }, x = function(e) {
                for (var t, n = e.attributes, r = n && n.length, i = {}, o = 0; o < r; ++o) i[(t = n[o]).name] = t.value;
                return i;
            }, w = (function() {
            }(), function() {
            }(), function() {
                function T(t) {
                    if (this.rootElement = null, this._changes = {}, this._userStyles = {}, this._styleMap = {}, this._uniqueStyleIndex = 0, this._ignoreMutations = !1, this._boundEventHandler = null, this._mutationSummary = null, this._domObserver = null, this._browserType = null, this._batchChangeId = null, this._uniqueIDIndex = 1, this._compositionState = n.None, this._lastInsertTime = 0, !t.element) throw new Error("options.element must be defined for flite construction.");
                    this.$this = $(this), this._summaryGuard = new R, this._lastMutationContext = new D, this._isDeletableCallback = this._isDeletableElement.bind(this), this._params = $.extend(!0, {}, E, t), this._params.timezone && "string" != typeof this._params.timezone && (e.Logger.error("FLITE: Bad timezone configuration", this._params.timezone), this._params.timezone = null), this._insertClassName = this._params.attrValuePrefix + this._params.changeTypes[a].alias, this._deleteClassName = this._params.attrValuePrefix + this._params.changeTypes[s].alias, this._params.opaqueSelectors && e.domUtils.addStubElement(this._params.opaqueSelectors);
                    var r = t.userStyles || {};
                    for (var i in r) if (r.hasOwnProperty(i)) {
                        var o = Number(r[i]);
                        isNaN(o) || (this._userStyles[i] = this._params.stylePrefix + "-" + o, this._uniqueStyleIndex = Math.max(o, this._uniqueStyleIndex), this._styleMap[o] = !0);
                    }
                    this._insertSelector = "." + this._getTrackedNodeClass(a), this._deleteSelector = "." + this._getTrackedNodeClass(s), this._deleteParentSelector = this._deleteSelector + ":not(." + l + ")", this._insertParentSelector = this._insertSelector + ":not(." + l + ")", this._fliteSelector = this._insertSelector + "," + this._deleteSelector, this._fliteTextSelector = "span" + this._insertSelector + ",span" + this._deleteSelector, this._domObserver = null, e.utils.browser.msie ? Object.defineProperty(this, "rootElement", {
                        get: function() {
                            try {
                                return this.hostMethods.getRootElement();
                            } catch (e) {
                                return null;
                            }
                        }, configurable: !0, enumerable: !0
                    }) : Object.defineProperty(this, "rootElement", {
                        get: function() {
                            return this._params.element;
                        }, configurable: !0, enumerable: !0
                    });
                }

                return T.prototype.dispose = function() {
                    this.setIgnoreMutations(!0), this._selection && (this._selection.setHook(null), this._selection = null), this._params = null;
                }, T.prototype.getSelectedNode = function() {
                    var e = this._getNodeAtCaret();
                    return e && e.node;
                }, T.prototype.createNativeRange = function() {
                    return e.rangy.createNativeRange(this._host.document);
                }, T.prototype.fixEmbeddedTrackedSpans = function() {
                }, T.prototype.removeFLITETracking = function(e) {
                    var t = this;
                    if (e && e.nodeType === Node.ELEMENT_NODE) {
                        Object.keys(this.attributes).forEach(function(n) {
                            e.removeAttribute(t.attributes[n]);
                        }), e.removeAttribute("title");
                        var n = $(e);
                        n.removeClass(this._insertClassName).removeClass(this._deleteClassName).removeClass(l);
                        var r = (e.className || "").split(" "), i = this._params.stylePrefix;
                        return r.forEach(function(e) {
                            e && 0 === e.indexOf(i) && n.removeClass(e);
                        }), "" === e.getAttribute("class") && e.removeAttribute("class"), e;
                    }
                }, T.prototype.currentChangeNode = function(t, n) {
                    var r = this._fliteSelector;
                    t = t || this.getSelectedNode();
                    var i = n ? t && e.domUtils.matchesSelector(t, r) : e.domUtils.getNode(t, r);
                    return i;
                }, T.prototype.ignoreNextMutation = function(t) {
                    this._summaryGuard.set(1), t && e.Logger.debug("ignore next mutation after " + t);
                }, T.prototype._unignoreNextMutation = function() {
                    this._summaryGuard.set(-1);
                }, T.prototype.setIgnoreMutations = function(e) {
                    var t = this._ignoreMutations;
                    return e ? this._mutationSummary && this._mutationSummary.disconnect() : this._createMutationObservers(!0), this._ignoreMutations = e, t;
                }, Object.defineProperty(T.prototype, "isVisible", {
                    get: function() {
                        return this._params.isVisible;
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(T.prototype, "contentEditable", {
                    get: function() {
                        return this._params.contentEditable;
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(T.prototype, "currentUser", {
                    get: function() {
                        return { id: this._user && this._user.id, name: this._user && this._user.name };
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(T.prototype, "attributes", {
                    get: function() {
                        return this._params.attributes;
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(T.prototype, "changeTypes", {
                    get: function() {
                        return this._params.changeTypes;
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(T.prototype, "changeData", {
                    get: function() {
                        return this._params._changeData;
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(T.prototype, "sessionId", {
                    get: function() {
                        return this._sessionId;
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(T.prototype, "hostMethods", {
                    get: function() {
                        return this._params.hostMethods;
                    }, enumerable: !0, configurable: !0
                }), T.prototype.toggleChangeTracking = function(e, t) {
                    return e ? this._startTracking(t) : this._stopTracking(), this;
                }, T.prototype.setCurrentUser = function(e) {
                    var t = this, n = { id: e && String(e.id) || "", name: e && String(e.name) || "" };
                    for (var r in this._user = n, this._changes) {
                        var i = this._changes[r];
                        i.userid === n.id && (i.username = n.name);
                    }
                    var o, a = this.getTrackedNodes(), s = this._params.attributes.userId;
                    a.each(function(e, r) {
                        null !== (o = r.getAttribute(s)) && o !== n.id || r.setAttribute(t._params.attributes.userName, n.name);
                    });
                }, T.prototype.setSessionId = function(e) {
                    this._sessionId = e, this._lastChange = null;
                }, T.prototype.prepareForInsertion = function() {
                    var e = this._getCurrentRange(!0), t = e && e.startContainer, n = this._getNodeTrackingContext(t);
                    this._moveCaretOutOfTracking(e, n);
                }, T.prototype.isNodeVisible = function(e) {
                    if (e && e.nodeType === Node.TEXT_NODE && (e = e.parentNode), e) {
                        var t = e.getBoundingClientRect();
                        return t.top > 0 && t.left > 0;
                    }
                }, T.prototype.getWrappingTagName = function(e, t) {
                    var n = this.getNodeWrappingType(e);
                    return n === r.block ? "div" : n === r.inline ? "span" : null;
                }, T.prototype.getNodeWrappingType = function(t) {
                    if (!t || t.nodeType === Node.TEXT_NODE) return r.inline;
                    if ("SPAN" === t.nodeName && !e.domUtils.matchesSelector(t, d)) return r.none;
                    if (e.utils.getTagName(t) in N) return r.none;
                    var n = t && t.nodeType === Node.ELEMENT_NODE && window.getComputedStyle(t), i = n && n.display;
                    return i ? "none" === i ? r.none : i.indexOf("inline") >= 0 ? r.inline : i.indexOf("table") >= 0 || i.indexOf("list") >= 0 ? r.none : r.block : r.none;
                }, T.prototype._markupInsertedNodes = function(t, n) {
                    this._startBatchChange();
                    var r = [];
                    try {
                        var i = n && n.startContainer, o = this._getNodeTrackingContext(i), s = void 0;
                        o.isTracking && this._moveCaretOutOfTracking(n, o);
                        for (var l = [], d = this._params.ignoredInsertSelectors, c = {
                            node: null,
                            changeId: void 0,
                            refNode: null,
                            containerOnly: !1,
                            trackChildren: !1,
                            type: a
                        }, u = 0, p = t.length; u < p; ++u) s = t[u], this._isTrackable(s, d) ? (c.node = s, c.changeId = null, c.containerOnly = s.nodeType !== Node.TEXT_NODE, c.trackChildren = c.containerOnly, s = this._createTrackedNode(c)) : l.push(s), r.push(s);
                        l.length;
                    } catch (t) {
                        e.Logger.error("_insertNode: ", t);
                    } finally {
                        this._endBatchChange(this._batchChangeId, !1);
                    }
                    return r;
                }, T.prototype._moveCaretOutOfTracking = function(t, n) {
                    if (t.collapsed && n.tracksContent) {
                        var r = this.setIgnoreMutations(!0), o = i.None;
                        try {
                            var a = t.startContainer;
                            if (1 === a.nodeType) {
                                var s = a;
                                if (s === n.trackingNode) if (0 === t.startOffset) this._selection.collapseBefore(n.trackingNode, this._isDeletableNoSelfOptions), o = i.Left; else if (t.startOffset >= a.childNodes.length) this._selection.collapseAfter(s, this._isDeletableNoSelfOptions), o = i.Right; else {
                                    var l = this._splitNode(n.trackingNode, n.trackingNode, t.startOffset);
                                    this._selection.collapseAfter(l, this._isDeletableNoSelfOptions), o = i.Left;
                                }
                            } else if (3 === a.nodeType) {
                                var d = a, c = e.domUtils.getNodeIndex(d);
                                l = null;
                                0 === t.startOffset ? (c > 0 ? l = this._splitNode(n.trackingNode, n.trackingNode, c) : this._selection.collapseBefore(n.trackingNode, this._isDeletableNoSelfOptions), o = i.Left) : t.startOffset >= d.length ? c < n.trackingNode.childNodes.length - 1 ? l = this._splitNode(n.trackingNode, n.trackingNode, c + 1) : (this._selection.collapseAfter(n.trackingNode, this._isDeletableWithParentOptions), o = i.Right) : l = this._splitNode(n.trackingNode, d, t.startOffset), l && (t.setStart(l.parentNode, e.domUtils.getNodeIndex(l) + 1), t.collapse(!0), this._selection.addRange(t), o = i.Left);
                            }
                            var u = this._selection.getRange(), p = this._getNodeTrackingContext(u.startContainer);
                            if (p.tracksContent) {
                                var h = e.domUtils.getNodeIndex(p.trackingNode);
                                this._selection.setStart(p.trackingNode.parentNode, !0, o === i.Left ? h + 1 : h);
                            }
                        } finally {
                            this.setIgnoreMutations(r);
                        }
                    }
                }, T.prototype.reload = function(e) {
                    e && (this._loadEditor(e), this.setShowChanges(this.isVisible)), this._loadFromDom();
                }, T.prototype.prepareToCut = function() {
                    var t = this.setIgnoreMutations(!0);
                    try {
                        var n = this._getCurrentRange(!0), r = n.cloneRange();
                        if (!n || n.collapsed) return !1;
                        e.utils.fixSelection(n, this.rootElement);
                        var i = n.cloneContents(), o = i.firstChild, a = i.lastChild;
                        this.hostMethods.beforeEdit(), n.collapse(!1), n.insertNode(i), n.setStartBefore(o), n.setEndAfter(a);
                        var s = this._startBatchChange();
                        try {
                            this._deleteSelection(n, !1, !1), this.ignoreNextMutation("Before cut");
                        } catch (t) {
                            e.Logger.error(t, "While trying to delete selection");
                        } finally {
                            this._endBatchChange(s, !1), this._selection.addRange(r), this._removeTrackingInRange(r);
                        }
                        return !0;
                    } finally {
                        this._summaryGuard.set(1), this.setIgnoreMutations(t);
                    }
                }, T.prototype.prepareToCopy = function() {
                    var e = this._getCurrentRange();
                    if (e && !e.collapsed) {
                        var t = this.setIgnoreMutations(!0);
                        try {
                            this._removeTrackingInRange(e);
                        } finally {
                            this.setIgnoreMutations(t);
                        }
                    }
                }, T.prototype.tryToCut = function() {
                }, T.prototype.setShowChanges = function(e) {
                    var t = this._$element;
                    e = Boolean(e), this._params.isVisible = e, t && (t.toggleClass("FLITE-Tracking", e), this._showTitles(e));
                }, T.prototype.unlistenToEvents = function() {
                    return this.rootElement && this._boundEventHandler && this.rootElement.removeEventListener("keydown", this._boundEventHandler, !0), this._boundEventHandler = null, this;
                }, T.prototype.listenToEvents = function() {
                    return this.rootElement && !this._boundEventHandler && (this._boundEventHandler = this.handleEvent.bind(this), this.rootElement.addEventListener("keydown", this._boundEventHandler, !0)), this;
                }, T.prototype.handleEvent = function(e) {
                    var t = !1;
                    return "keypress" == e.type ? t = this._keyPress(e) : "keydown" == e.type && (t = !this._handleKeyDown(e)), t && (e.stopImmediatePropagation(), e.preventDefault()), !t;
                }, T.prototype.markNodeForPendingInsertion = function(e) {
                    e && e.nodeType === Node.ELEMENT_NODE && (e.setAttribute("data-flite-inserting", "1"), setTimeout(function() {
                        try {
                            e.removeAttribute("data-flite-inserting");
                        } finally {
                        }
                    }, 10));
                }, T.prototype.setMutationContext = function(e, t) {
                    this._lastMutationContext.setContext(e, t);
                }, T.prototype.getMutationContext = function() {
                    return this._lastMutationContext.peekType;
                }, T.prototype.getCleanDOM = function(e, t) {
                    t = $.extend({}, { callback: null, clone: !1, prepare: null }, t);
                    var n = this._fliteSelector;
                    return e ? "string" == typeof e ? e = $("<div>" + e + "</div>")[0] : t.clone && (e = $(e).clone()[0]) : e = t.clone ? $(this.rootElement).clone()[0] : this.rootElement, this._cleanBody(e, n, t);
                }, T.prototype.processNodesForInsert = function(t) {
                    if (!t || !t.length) return [];
                    this.hostMethods.beforeInsert && this.hostMethods.beforeInsert();
                    var n = this._getCurrentRange(!0);
                    if (!n) return [];
                    var r, i = !n.collapsed;
                    try {
                        if (i) {
                            this._deleteContents(!0, n, !0), n = this._getCurrentRange();
                            var o = this._getNodeTrackingContext(n.startContainer);
                            this._moveCaretOutOfTracking(n, o), n = this._getCurrentRange();
                        }
                        r = this._markupInsertedNodes(t, n);
                    } catch (t) {
                        e.Logger.error(t, "while trying to insert nodes"), r = [];
                    }
                    return r;
                }, T.prototype.isInsideChange = function(t, n) {
                    try {
                        return Boolean(this.currentChangeNode(t, n));
                    } catch (t) {
                        return e.Logger.error(t, "While testing if isInsideChange"), !1;
                    }
                }, T.prototype.hasChanges = function() {
                    var e, t = this._changes;
                    for (var n in t) if (t.hasOwnProperty(n) && (e = t[n]) && e.type) return !0;
                    return !1;
                }, T.prototype._createMarkerForTrackedNode = function(t, n) {
                    var r = t.getAttribute(this.attributes.changeId), i = r && this._changes[r];
                    if (!i) return null;
                    try {
                        var o = JSON.stringify(i), a = t.className;
                        return $("<span>&#8203;</span>").attr("data-flite-wrapper-change", o).attr("data-flite-wrapper-selector", n).attr("data-flite-wrapper-classes", a);
                    } catch (t) {
                        return e.Logger.error("wrapTrackedNodes", t), null;
                    }
                }, T.prototype.getChangeForNode = function(e) {
                    if (!e || 1 !== e.nodeType) return null;
                    var t = e.getAttribute(this._params.attributes.changeId), n = t && this.getChange(t);
                    return n ? jQuery.extend({}, n) : null;
                }, T.prototype.wrapTrackedNodes = function(t, n) {
                    for (var r, i, o = this.setIgnoreMutations(!0), a = [], s = 0; s < t.length; ++s) r = t[s], e.domUtils.matchesSelector(r, n) && (i = this._createMarkerForTrackedNode(r, n)) && a.push(i[0]), a.push(r);
                    return this.setIgnoreMutations(o), a;
                }, T.prototype.wrapAllTrackedNodes = function(e, t) {
                    var n = this, r = this.setIgnoreMutations(!0);
                    (e && $(e) || this._$element).find("" + t + this._deleteSelector + "," + t + this._insertSelector).each(function(e, r) {
                        var i = n._createMarkerForTrackedNode(r, t);
                        i && i.insertBefore(r);
                    }), this.setIgnoreMutations(r);
                }, T.prototype.unwrapAllTrackedNodes = function(t) {
                    var n = this;
                    (t && $(t) || this._$element).find("span[data-flite-wrapper-change]").each(function(t, r) {
                        try {
                            var i = JSON.parse(r.getAttribute("data-flite-wrapper-change")),
                                o = r.getAttribute("data-flite-wrapper-selector"), a = r.nextSibling;
                            a && e.domUtils.matchesSelector(a, o) || r.previousSibling && e.domUtils.matchesSelector(r.previousSibling, o) && (a = r.previousSibling), i && i.id && a && 1 === a.nodeType && (n._changes[i.id] = n._changes[i.id] || i, n._addNodeToChange(i.id, a, i.type), $(a).addClass(r.getAttribute("data-flite-wrapper-classes"))), $(r).remove();
                        } catch (t) {
                            e.Logger.error("unrapTrackedNodes", t);
                        }
                    });
                }, T.prototype.getTrackedNodes = function() {
                    return this._$element ? this._$element.find(this._fliteSelector) : $();
                }, T.prototype.countChanges = function(e) {
                    return this._filterChanges(e).count;
                }, T.prototype.acceptAll = function(e) {
                    return this._acceptRejectSome(e, !0);
                }, T.prototype.rejectAll = function(e) {
                    return this._acceptRejectSome(e, !1), !0;
                }, T.prototype.acceptChange = function(e) {
                    this._processChange(e, !0, { isAccept: !0 }), this._removeFLITEArtifacts();
                }, T.prototype.getCurrentUser = function() {
                    var e = this.currentUser || {}, t = null === e.id || void 0 === e.id ? "" : String(e.id);
                    return { name: e.name || "", id: t };
                }, T.prototype.rejectChange = function(e) {
                    return this._processChange(e, !0, { isAccept: !1 }), this._removeFLITEArtifacts(), !0;
                }, T.prototype.getChanges = function(e) {
                    var t = e ? this._filterChanges(e) : this._changes;
                    return $.extend(!0, {}, t);
                }, T.prototype.getContentElement = function() {
                    return null;
                }, T.prototype.getChange = function(e) {
                    return this._changes[e] || null;
                }, T.prototype._cleanBody = function(e, t, n) {
                    var r = this;
                    e = n.prepare ? n.prepare.call(this, e) : e;
                    var i = $(e), o = i.find(t);
                    return $.each(o, function(e, t) {
                        var n = $(t);
                        n.attr(r.attributes.lite2Created) ? r._replaceNodeWithContent(n) : r.removeFLITETracking(t);
                    }), i.find(this._deleteSelector).remove(), e = n.callback ? n.callback.call(this, e) : e;
                }, T.prototype._acceptRejectSome = function(e, t) {
                    var n, r = this, i = function(e, n) {
                        r._processChange(n, !1, { isAccept: t, notify: !1 });
                    }, o = e ? this._filterChanges(e) : {
                        changes: this._changes,
                        count: Object.keys(this._changes).length
                    };
                    for (n in o.changes) this._$element.find("[" + this.attributes.changeId + "=" + n + "]").each(i);
                    this._removeFLITEArtifacts(), o.count && this._triggerChange({ isText: !0 });
                }, T.prototype._forceRefresh = function() {
                    var e = this.rootElement, t = e.style.padding;
                    e.style.padding = "1px" === t ? "2px" : "1px", setTimeout(function() {
                        e.style.padding = t;
                    }, 1);
                }, T.prototype._createTrackedNode = function(e) {
                    var t = e.refNode || e.node, n = e.node, r = e.trackChildren, i = e.containerOnly,
                        o = this.getWrappingTagName(t, null);
                    if (o) {
                        var a = this._host.document.createElement(o);
                        if (n) {
                            var s = n.parentNode;
                            s && s.insertBefore(a, n), a.appendChild(n), n.nodeType !== Node.TEXT_NODE && a.setAttribute("data-flite-complex", "1");
                        }
                        a.setAttribute(this.attributes.lite2Created, "1"), i = this._isOpaqueNode(n), r = !1, n = a;
                    } else n = t;
                    return this._useChange({
                        type: e.type,
                        nodes: [n],
                        changeId: e.changeId,
                        containerOnly: i,
                        ignoredNodes: e.ignoredNodes,
                        trackChildren: i && r
                    }), n;
                }, T.prototype._startTracking = function(e) {
                    return "boolean" == typeof this._params.contentEditable && this.rootElement.setAttribute("contentEditable", String(this._params.contentEditable)), this._loadEditor(e), this.setIgnoreMutations(!1), this._unsubscribeEvents && (this._unsubscribeEvents(), this._unsubscribeEvents = null), this._compositionState = this.hostMethods.getIMECompositionState(), this;
                }, T.prototype._stopTracking = function() {
                    try {
                        this.unlistenToEvents(), this._unsubscribeEvents && (this._unsubscribeEvents(), this._unsubscribeEvents = null), this.setIgnoreMutations(!0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null), this._mutationSummary && (this._mutationSummary.disconnect(), this._mutationSummary = null), this._changes = {};
                    } catch (t) {
                        e.Logger.error(t, "While trying to stop tracking");
                    }
                    return this;
                }, T.prototype._filterChanges = function(e) {
                    var t, n = 0, r = {}, i = e || {}, o = i.filter, a = i.exclude ? $.map(i.exclude, String) : null,
                        s = i.include ? $.map(i.include, String) : null, l = i.verify;
                    for (var d in this._changes) if ((t = this._changes[d]) && t.type) {
                        var c = o && !o({
                            userid: t.userid,
                            time: t.time,
                            data: t.data
                        }) || a && a.indexOf(t.userid) >= 0 || s && s.indexOf(t.userid) < 0;
                        c || (l && (c = !this._$element.find("[" + this.attributes.changeId + "]").length), c || (++n, r[d] = t));
                    }
                    return { count: n, changes: r };
                }, T.prototype._processChange = function(t, n, r) {
                    var i = this;
                    r = r || {};
                    var o, a, s, d, c, u, p, h, f, g = e.domUtils, m = this._$element, v = this._getCurrentRange(!0),
                        y = v && v.cloneRange(), _ = this._deleteSelector, N = this._insertSelector,
                        b = this.setIgnoreMutations(!0), C = !1 !== r.removeChange, T = this._userStyles,
                        E = this.attributes.userId, S = this._deleteClassName, O = this._insertClassName,
                        k = r.isAccept, x = !1 !== r.notify, w = y && y.startContainer;
                    try {
                        if (!t) {
                            if (!y || !y.collapsed) return;
                            t = y.startContainer;
                        }
                        if (o = _, a = N, k || (o = N, a = _), !(s = g.getNode(t, this._fliteSelector))) return;
                        p = s.getAttribute(this.attributes.changeId), c = (d = n ? m.find(o + "[" + this.attributes.changeId + "='" + p + "']") : e.domUtils.matchesSelector(t, o) ? $(t) : $(null)).length, d.each(function(t, n) {
                            var r = $(n), o = n === w, a = o || e.domUtils.isChildOf(w, n);
                            i.hostMethods.onTrackingNodeRemoved(n), r.hasClass(l) && !i._isOpaqueNode(n) ? (o && (i._selection.collapseBefore(n, i._isDeletableNoSelfOptions), w = null), i._acceptDeletedParagraph(r) || i._replaceNodeWithContent(r)) : (a && (i._selection.collapseBefore(n, i._isDeletableNoSelfOptions), w = null), i._removeNode(n));
                        }), c += (d = n ? m.find(a + "[" + this.attributes.changeId + "='" + p + "']") : e.domUtils.matchesSelector(t, a) ? $(t) : $(null)).length, $.each(d, function(t, n) {
                            var r = $(n), o = n === w;
                            o || e.domUtils.isChildOf(w, n);
                            u = n.getAttribute(E), f = null !== u && T[u] || "", i.hostMethods.onTrackingNodeRemoved(n), h = r.contents(), r.removeClass(O).removeClass(S).removeClass(f).attr("title", null), n.getAttribute(i.attributes.lite2Created) ? (o && i._selection.collapseBefore(n, i._isDeletableNoSelfOptions), i._replaceNodeWithContent(r)) : i.removeFLITETracking(n), $.each(h, function(t, n) {
                                var r = Node.TEXT_NODE === n.nodeType && n.nodeValue;
                                r && r.indexOf("  ") >= 0 && (n.nodeValue = r.replace(/  /g, "  ")), e.domUtils.normalizeNode(n.parentNode);
                            });
                        }), C && delete this._changes[p], c > 0 && x && this._triggerChange({ isText: !0 });
                    } finally {
                        !function() {
                            if (w && e.domUtils.isChildOf(w, i.rootElement)) {
                                var t = void 0;
                                t = 3 === w.nodeType ? Math.min(y.startOffset, w.length) : Math.min(y.startOffset, w.childNodes.length), i._selection.setStart(w, !0, t);
                            }
                        }(), this.setIgnoreMutations(b);
                    }
                }, T.prototype._acceptDeletedParagraph = function(e) {
                    var t = e[0], n = t && t.nodeName;
                    if (!(n && n in h)) return !1;
                    var r = t.previousSibling;
                    if (r && r.nodeName in h) {
                        r.lastChild && "BR" === r.lastChild.nodeName && r.removeChild(r.lastChild);
                        var i = e.contents();
                        return $(r).append(i), e.remove(), !0;
                    }
                    return !1;
                }, T.prototype._getTrackedNodeClass = function(e) {
                    return this._params.attrValuePrefix + this._params.changeTypes[e].alias;
                }, T.prototype._loadEditor = function(t) {
                    var n = this;
                    e.Logger.debug("FLITE Trackier loading environment for root element"), this._host = this._host || {}, this._$element = $(t), this._host.element = t, this._host.document = t.ownerDocument, this._host.window = this._host.document.defaultView || window, this._host.frame = this._host.window.frameElement, this._lastChange = null, this._selection = new e.Selection(this._host), this._selection.setHook(this._onRangeChanged.bind(this)), this._loadFromDom();
                    var r = {
                        root: t, nodeFilter: this._isDeletableCallback, visitFilter: function(e) {
                            return !n._isOpaqueNode(e);
                        }, depthFirst: !0
                    };
                    this._isDeletableWithParentOptions = $.extend({}, r, {
                        excludeSelf: !0,
                        queryParent: !0,
                        nodeFilter: function(e) {
                            if (n._isDeletableElement(e)) {
                                var t = n._getNodeTrackingContext(e);
                                return !t.isDelete || !t.isCurrent;
                            }
                            return !1;
                        }
                    }), this._isDeletableOptions = $.extend({}, r, {
                        excludeSelf: !1,
                        queryParent: !1
                    }), this._isDeletableNoSelfOptions = $.extend({}, r, {
                        queryParent: !1,
                        excludeSelf: !0
                    }), this._isDeletableGreedyOptions = $.extend({}, this._isDeletableNoSelfOptions, { depthFirst: !1 });
                }, T.prototype._loadFromDom = function() {
                    var t = this;
                    e.Logger.debug("FLITE Tracker loading changes from DOM"), this._changes = {}, this._uniqueStyleIndex = 0;
                    var n, r = this.currentUser && this.currentUser.id,
                        i = this.currentUser && this.currentUser.name || "", o = (new Date).getTime(),
                        a = new RegExp(this._params.stylePrefix + "-(\\d+)"), s = [];
                    for (var l in this.changeTypes) s.push(this._getTrackedNodeClass(l));
                    var d = new RegExp("(" + s.join("|") + ")");
                    this.unwrapAllTrackedNodes(null);
                    this.getTrackedNodes().each(function(e, s) {
                        for (var l, c, u, p = "", h = s.className.split(" "), f = 0; f < h.length; f++) (n = a.exec(h[f])) && (l = n[0], c = n[1]), (u = d.exec(h[f])) && (p = t._getChangeTypeFromAlias(u[1]));
                        var g = s.getAttribute(t.attributes.changeId) || s.getAttribute("data-cid") || "";
                        if (g && !isNaN(Number(g))) {
                            s.setAttribute(t.attributes.changeId, g);
                            var m, v = s.getAttribute(t.attributes.userId);
                            r && v == r ? (m = i, s.setAttribute(t.attributes.userName, i)) : m = s.getAttribute(t.attributes.userName), t._setUserStyle(v, Number(c)), s.setAttribute(t.attributes.changeId, String(g));
                            var y = parseInt(s.getAttribute(t.attributes.time) || "");
                            isNaN(y) && (y = o);
                            var _ = parseInt(s.getAttribute(t.attributes.lastTime) || "");
                            isNaN(_) && (_ = y);
                            var N = s.getAttribute(t.attributes.sessionId),
                                b = s.getAttribute(t.attributes.changeData) || "";
                            t._changes[g] = {
                                id: g,
                                type: p,
                                style: l,
                                userid: String(v),
                                username: m,
                                time: y,
                                lastTime: _,
                                sessionId: N,
                                data: b
                            }, t._finalizeTrackedNode(s);
                        } else t.removeFLITETracking(s);
                    }), this._triggerChange();
                }, T.prototype._triggerChange = function(e) {
                    this.$this.trigger("change"), e && e.isText && this.$this.trigger("textChange");
                }, T.prototype._finalizeTrackedNode = function(e) {
                    e && e.nodeType === Node.ELEMENT_NODE && this.hostMethods.onTrackingNodeCreated(e);
                }, T.prototype.getNewChangeId = function() {
                    var e;
                    do {
                        e = String(++this._uniqueIDIndex);
                    } while (this._changes[e]);
                    return e;
                }, T.prototype._useChange = function(t) {
                    var n = this, r = t.changeId || this._batchChangeId,
                        i = r && this._changes[r] || this._getCurrentChange();
                    return i || (i = this._createChange(r, t.type), this._changes[i.id] = i, this._lastChange = i, this._triggerChange({ isText: !1 })), r = i.id, this._updateChangeTime(i), t.nodes && $.each(t.nodes, function(o, a) {
                        if (a && a.nodeType === Node.ELEMENT_NODE && a !== n.rootElement) {
                            n._addNodeToChange(r, a, t.type);
                            var s = n._isOpaqueNode(a);
                            if (t.containerOnly || s) {
                                e.domUtils.isBlockElement(a);
                                if (a.className += " " + l, t.trackChildren && a.childNodes.length && !s) for (var d = a, c = [].slice.call(d.childNodes, 0), u = t.ignoredNodes, p = void 0, h = 0, f = c.length; h < f; ++h) {
                                    if (p = c[h], u && u.indexOf(p) >= 0) return;
                                    (p.nodeType !== Node.TEXT_NODE || t.containerOnly) && n._createTrackedNode({
                                        type: t.type,
                                        node: p,
                                        changeId: i.id,
                                        ignoredNodes: u,
                                        refNode: null,
                                        containerOnly: p.nodeType !== Node.TEXT_NODE,
                                        trackChildren: t.trackChildren
                                    });
                                }
                            }
                        }
                    }), i;
                }, T.prototype._createChange = function(e, t) {
                    return {
                        id: this.getNewChangeId(),
                        type: t,
                        time: 0,
                        lastTime: 0,
                        sessionId: this.sessionId,
                        userid: String(this.currentUser.id),
                        username: this.currentUser.name,
                        data: this.changeData || "",
                        style: null
                    };
                }, T.prototype._getCurrentChange = function() {
                    var t = this._lastChange;
                    return t && !this._changes[t.id] && (t = this._lastChange = null), t && this._user ? this._user && t.sessionId === this._sessionId && t.userid === this._user.id ? e.utils.convertDateToTimezone(null, this._params.timezone).getTime() - t.lastTime <= this._params.changeGroupTime ? t : null : void 0 : null;
                }, T.prototype._addNodeToChange = function(t, n, r) {
                    var i, o = this.getChange(t), a = this.attributes, s = $(n), l = this._getTrackedNodeClass(r);
                    o || (e.Logger.warn("addNodeToChange: no change with id", t), o = this._createChange(t, r));
                    var d = ((i = {})[a.changeId] = t, i[a.userName] = o.username, i[a.userId] = this._user && this._user.id || "0", i[a.lite2Marked] = 1, i[a.changeData] = String(o.data || ""), i[a.time] = o.time, i[a.lastTime] = o.lastTime, i[a.sessionId] = o.sessionId || null, i);
                    o.style || (o.style = this._getUserStyle(o.userid)), s.attr(d).addClass(o.style).addClass(l), this.hostMethods.onTrackingNodeCreated(n);
                }, T.prototype._getUserStyle = function(e) {
                    if (null === e || "" === e || void 0 === e) return this._params.stylePrefix;
                    return this._userStyles[e] ? this._userStyles[e] : this._setUserStyle(e, this._getNewStyleId());
                }, T.prototype._setUserStyle = function(e, t) {
                    var n = this._params.stylePrefix + "-" + t;
                    return this._styleMap[t] = !0, this._userStyles[e] = n;
                }, T.prototype._getNewStyleId = function() {
                    for (var e = 1; e < 99999; ++e) if (!this._styleMap[e]) return this._styleMap[e] = !0, e;
                    return 1;
                }, T.prototype._getChangeTypeFromAlias = function(e) {
                    var t, n = null;
                    for (t in this.changeTypes) this.changeTypes.hasOwnProperty(t) && this.changeTypes[t].alias == e && (n = t);
                    return n;
                }, T.prototype._isCurrentUserNode = function(e) {
                    var t = e && e.nodeType === Node.ELEMENT_NODE && e;
                    return Boolean(t && t.getAttribute(this.attributes.userId) === String(this.currentUser.id));
                }, T.prototype._isCurrentSessionNode = function(e) {
                    var t = e && e.nodeType === Node.ELEMENT_NODE && e,
                        n = t && t.getAttribute(this.attributes.userId) === this.currentUser.id;
                    n && this.sessionId && (n = t.getAttribute(this.attributes.sessionId) === this.sessionId);
                    return Boolean(n);
                }, T.prototype._cleanupAroundNode = function(t, n) {
                    for (var r, i = t.parentNode, o = t.nextSibling, a = !1; o;) $(o).is(this._fliteSelector) && e.domUtils.hasNoTextOrStubContent(o) || e.domUtils.isEmptyTextNode(o) ? (a = !0, r = o, o = o.nextSibling, i.removeChild(r)) : o = o.nextSibling;
                    for (o = t.previousSibling; o;) $(o).is(this._fliteSelector) && e.domUtils.hasNoTextOrStubContent(o) || e.domUtils.isEmptyTextNode(o) ? (r = o, a = !0, o = o.previousSibling, i.removeChild(r)) : o = o.previousSibling;
                    return n && e.domUtils.isEmptyTextNode(t) && (a = !0, i.removeChild(t)), a;
                }, T.prototype._getWrappingTrackedNode = function(e, t) {
                    var n = $(e);
                    if (n.is(t)) return e;
                    t.indexOf(u) < 0 && (t = t.split(",").map(function(e) {
                        return e + u;
                    }).join(","));
                    return n.parents(t)[0] || null;
                }, T.prototype._updateChangeTime = function(t) {
                    var n = this._$element.find("[" + this.attributes.changeId + "=" + t.id + "]"),
                        r = this.attributes.lastTime,
                        i = e.utils.convertDateToTimezone(null, this._params.timezone).getTime();
                    t.lastTime = i, t.time || (t.time = i), n.each(function(e, t) {
                        t.setAttribute(r, String(i));
                    });
                }, T.prototype._getCurrentRange = function(t) {
                    void 0 === t && (t = !1);
                    var n = null, r = !1;
                    try {
                        if (t || !this._selection) {
                            r = !0;
                            var i = this.hostMethods.getHostNativeRange();
                            return (n = i && new e.rangy.WrappedRange(i)) && this._selection && this._selection.addRange(n, !1), n;
                        }
                        return (n = this._selection.getRangeAt(0)) && e.domUtils.isRangeInElement(n, this.rootElement) ? n : r ? null : this._getCurrentRange(!0);
                    } catch (t) {
                        return e.Logger.error(t, "While trying to get current range"), n;
                    }
                }, T.prototype._deleteContents = function(e, t, n) {
                    var r, i = !0;
                    if (this.hostMethods.beforeDelete && this.hostMethods.beforeDelete(), t ? this._selection.addRange(t) : t = this._getCurrentRange(!0), !t) return !1;
                    r = this._startBatchChange();
                    try {
                        t.collapsed ? i = this._deleteAtCaret(e, t) : (this._deleteSelection(t, e, n), t = this._getCurrentRange(!0));
                    } finally {
                        this._endBatchChange(r, i);
                    }
                    return i;
                }, T.prototype._deleteAtCaret = function(e, t) {
                    var n = this.setIgnoreMutations(!0), r = !0;
                    try {
                        t = this._cleanupSelection(t, !0), e ? r = this._deleteForward(t) : (this.isNodeVisible(t.startContainer), r = this._deleteBack(t));
                    } finally {
                        this.setIgnoreMutations(n);
                    }
                    return r;
                }, T.prototype._deleteSelection = function(t, n, r) {
                    this.rootElement;
                    var i, o = this.setIgnoreMutations(!0), a = t.cloneRange(),
                        s = new e.DOMMarker(this._host, this._selection, a), l = s.getNodesInRange(this.rootElement),
                        d = this._startBatchChange();
                    try {
                        for (var c = 0; c < l.length; c++) i = l[c], this._markNodeAsDeleted(i, d);
                    } finally {
                        r && s.isOrphan ? this._tryToRestoreCaretInP(s, n) : (s.collapseAndRemove(this._selection, !n, this._isDeletableWithParentOptions), this._removeFLITEArtifacts()), this.setIgnoreMutations(o);
                    }
                }, T.prototype._tryToRestoreCaretInP = function(t, n) {
                    var r = $(t.start).parents(y), i = r[0];
                    (t.collapseAndRemove(this._selection, !n, this._isDeletableWithParentOptions), this._removeFLITEArtifacts(this._$element, !0), i) && (e.domUtils.matchesSelector(i, _) ? (i.appendChild(this._host.document.createElement("br")), this._selection.setStart(i, !0, 0)) : 1 === r.find(">br:only-child").length && this._selection.setStart(i, !0, 0));
                }, T.prototype._markNodeAsDeleted = function(e, t) {
                    if (e && e.parentNode && !this._shouldIgnoreNode(e)) {
                        var n = this._getNodeTrackingContext(e), r = 3 === e.nodeType, i = !r && this._isOpaqueNode(e),
                            o = {
                                changeId: t,
                                ignoreAdjacentTracking: !0,
                                containerOnly: !r && !i,
                                trackingContext: n,
                                trackContent: !1
                            };
                        if (n.isTracking) {
                            if (n.isDelete) return;
                            n.isCurrent ? this._removeNode(e) : this._addDeleteTracking(e, o);
                        } else this._addDeleteTracking(e, o);
                    }
                }, T.prototype._startBatchChange = function() {
                    if (!this._batchChangeId) {
                        var e = this._getCurrentChange();
                        this._batchChangeId = e && e.id || this.getNewChangeId();
                    }
                    return this._batchChangeId;
                }, T.prototype._endBatchChange = function(e, t) {
                    e && e === this._batchChangeId && (this._batchChangeId = null, t && this._triggerChange({ isText: !0 }));
                }, T.prototype._cleanupElementSelection = function(t) {
                    var n, r = t.startContainer, i = r.childNodes.length, o = !1, a = !1;
                    if (i < 1) return e.domUtils.isBlockElement(r) || e.domUtils.isStubElement(r) || (t.setStartBefore(r), t.collapse(!0), this._removeNode(r), o = !0), o;
                    try {
                        if (t.startOffset > 0 ? n = r.childNodes[t.startOffset - 1] : (n = r.firstChild, a = !0), !n) return !1;
                    } catch (e) {
                        return !1;
                    }
                    if (this._cleanupAroundNode(n, a)) return this._cleanupElementSelection(this._getCurrentRange(!0));
                    if (0 === t.startOffset) return !1;
                    var s = e.domUtils.getNodeIndex(n) + 1;
                    return e.domUtils.isEmptyTextNode(n) && (s = Math.max(0, s - 1), r.removeChild(n), o = !0), r.childNodes.length !== i && (t.setStart(r, s), t.setEnd(r, s), o = !0), o;
                }, T.prototype._removeNode = function(e) {
                    var t = e && e.parentNode;
                    t && t.removeChild(e);
                }, T.prototype._cleanupSelection = function(e, t) {
                    var n;
                    return e && e.collapsed && (n = e.startContainer) && (n.nodeType === Node.TEXT_NODE ? this._cleanupTextSelection(n, t) : this._cleanupElementSelection(e)) ? this._getCurrentRange(!0) : e;
                }, T.prototype._cleanupTextSelection = function(t, n) {
                    var r = this._cleanupAroundNode(t, !1);
                    if (e.domUtils.removeEmptyCharsFromTextNode(t) && (r = !0), n && e.domUtils.isEmptyTextNode(t)) {
                        e.domUtils.isEmptyTextNode(t);
                        var i = t.parentNode, o = e.domUtils.getNodeIndex(t);
                        i.removeChild(t), o = Math.max(0, o), this._selection.setStart(i, !0, o), r = !0;
                    }
                    return r;
                }, T.prototype._deleteBRNode = function(e, t) {
                    this._removeFLITEArtifacts();
                    var n = this._getNodeTrackingContext(e),
                        r = e === e.parentNode.lastChild && e === e.parentNode.firstChild && e.parentNode;
                    n.isInsert && n.isCurrent && this._removeNode(e), n.isDelete || this._addDeleteTracking(e, {
                        ignoreAdjacentTracking: !0,
                        move: t,
                        trackingContext: n,
                        containerOnly: !0,
                        trackContent: !1
                    }), this._moveCaret(e, t), r && r.nodeName in v && this._deleteBRNode(e.parentNode, t === i.Right ? t : i.None);
                }, T.prototype._deleteForward = function(t) {
                    var n = this._findNextNodeToDelete(t);
                    if (!n) return !1;
                    if (3 === n.node.nodeType && e.domUtils.isEmptyString(n.node.data)) return !1;
                    if (this.hostMethods.shouldIgnoreDeletedNode(n.node)) return !1;
                    if ("BR" === n.tagName) return e.utils.browser.firefox ? (this._deleteBRNode(n.node, i.Right), !0) : (this._lastMutationContext.setContext("delete-br", n.node), !1);
                    var r = this._getNodeAtCaret(t, !0), o = this._getNodeTrackingContext(r.node),
                        a = n.node === r.node ? o : this._getNodeTrackingContext(n.node);
                    return o.isTracking || a.isTracking ? o.isTracking && !a.isTracking ? o.isDelete && o.isCurrent ? this._assimilateNextChar(o, null, r, n) : this._deleteForwardUntrackedContext(n, t) : o.isTracking && a.isTracking ? a.isDelete ? (this._selection.collapseAfter(a.trackingNode, this._isDeletableNoSelfOptions), !0) : a.isCurrent ? (n.isText || this.ignoreNextMutation("Delete forward in insert"), !1) : o.isDelete && o.isCurrent ? this._assimilateNextChar(o, a, r, n) : this._deleteForwardUntrackedContext(n, t, a) : a.isInsert ? a.isCurrent ? (n.isText || this.ignoreNextMutation("Delete back in insert"), !1) : this._deleteForwardUntrackedContext(n, t, a) : (this._selection.collapseAfter(a.trackingNode, this._isDeletableNoSelfOptions), !0) : this._deleteForwardUntrackedContext(n, t);
                }, T.prototype._deleteBack = function(t) {
                    var n = this._findPreviousNodeToDelete(t);
                    if (!n) return !1;
                    if (3 === n.node.nodeType && e.domUtils.isEmptyString(n.node.data)) return !1;
                    if (this.hostMethods.shouldIgnoreDeletedNode(n.node)) return !1;
                    if (console.log("non editable: ", $(n.node).parents(".mceNonEditable")), "LI" === n.tagName) return this.setMutationContext("backspace-li", null), !1;
                    if ("BR" === n.tagName) return this._deleteBRNode(n.node, i.Left), !0;
                    var r = this._getNodeAtCaret(t), o = this._getNodeTrackingContext(r.node),
                        a = n.node === r.node ? o : this._getNodeTrackingContext(n.node);
                    return o.isTracking || a.isTracking ? o.isTracking && !a.isTracking ? o.isDelete && o.isCurrent ? this._assimilatePrevChar(o, null, r, n) : this._deleteBackUntrackedContext(n, t) : o.isTracking && a.isTracking ? a.isDelete ? (this._selection.collapseBefore(a.trackingNode, this._isDeletableWithParentOptions), !0) : a.isCurrent ? (n.isText || this.ignoreNextMutation("Delete back in insert"), !1) : o.isDelete && o.isCurrent ? this._assimilatePrevChar(o, a, r, n) : this._deleteBackUntrackedContext(n, t, a) : a.isInsert ? a.isCurrent ? (n.isText || this.ignoreNextMutation("Delete back in insert"), !1) : this._deleteBackUntrackedContext(n, t, a) : (this._selection.collapseBefore(a.trackingNode, this._isDeletableNoSelfOptions), !0) : this._deleteBackUntrackedContext(n, t);
                }, T.prototype._assimilatePrevChar = function(t, n, r, o) {
                    if (o.isText) {
                        var a = o.node, s = r.offset, l = r.node, d = e.domUtils.splitTextAt(a, o.offset, 1, !0);
                        if (!d || !l) return !1;
                        if (this._isNextTextSibling(d, l)) {
                            var u = e.domUtils.getFirstSelectableChild(l), p = s > 0 ? s - 1 : 0;
                            u.data = u.data.substr(0, p) + d.data + u.data.substr(p), d.parentNode.removeChild(d), this._selection.setStart(u, !0, s);
                        } else {
                            if (e.domUtils.matchesSelector(l, c) && n && n.trackingNode) {
                                this._splitNode(n.trackingNode, d, 0);
                                var h = $(n.trackingNode);
                                if (!(d = e.domUtils.getFirstSelectableChild(n.trackingNode, {
                                    root: this.rootElement,
                                    allowEmptyText: !1
                                }))) return !1;
                                this._replaceNodeWithContent(h);
                            }
                            this._addDeleteTracking(d, {
                                move: i.Left,
                                containerOnly: !0,
                                changeId: t.changeId,
                                ignoreAdjacentTracking: !0
                            }), this._selection.setStart(d, !0, 0);
                        }
                    } else this._addDeleteTracking(o.node, {
                        move: i.None,
                        containerOnly: !0,
                        changeId: t.changeId,
                        ignoreAdjacentTracking: !0
                    }), this._selection.collapseBefore(o.node, this._isDeletableNoSelfOptions);
                    return !0;
                }, T.prototype._assimilateNextChar = function(t, n, r, o) {
                    var a = o.node;
                    if (a.nodeType === Node.ELEMENT_NODE) return this._markElementAsDeleted(a, t.changeId), this._collapseOnEdgeOf(a, !0, o.isCurrent), !0;
                    var s = o.node, l = r.node, d = e.domUtils.splitTextAt(s, o.offset, 1, !0);
                    if (!d) return !1;
                    if (this._isPrevTextSibling(d, l)) {
                        var u = e.domUtils.getLastSelectableChild(l);
                        u.data += d.data, d.parentNode.removeChild(d), this._selection.setEnd(u, !0, u.length);
                    } else {
                        if (e.domUtils.matchesSelector(l, c)) {
                            if (n && n.trackingNode) {
                                var p = this._splitNode(n.trackingNode, d, 1), h = $(p);
                                if (!(d = e.domUtils.getFirstSelectableChild(p, {
                                    root: this.rootElement,
                                    allowEmptyText: !1
                                }))) return !1;
                                this._replaceNodeWithContent(h);
                            }
                            this._addDeleteTracking(d, {
                                move: i.Left,
                                containerOnly: !1,
                                changeId: t.changeId,
                                ignoreAdjacentTracking: !0
                            });
                        } else this._addDeleteTracking(d, {
                            move: i.None,
                            containerOnly: !1,
                            changeId: t.changeId,
                            ignoreAdjacentTracking: !0
                        });
                        this._selection.setEnd(d, !0, d.length);
                    }
                    return !0;
                },T.prototype._markElementAsDeleted = function(e, t) {
                    var n = { merge: !1, ignoreAdjacentTracking: !0, changeId: t, containerOnly: !0, trackContent: !1 };
                    if (this._addDeleteTracking(e, n), "BR" === e.nodeName) {
                        var r = this.hostMethods.getNewLineNodeName(), i = e.parentNode;
                        if (r && e.parentNode.nodeName === r && e === i.lastChild && i.nextSibling && i.nextSibling.nodeName === r && i.nextSibling.hasChildNodes) return this._addDeleteTracking(i.nextSibling, n), void this._selection.setStart(i.nextSibling.firstChild, !0, 0);
                    }
                },T.prototype._deleteBackUntrackedContext = function(t, n, r) {
                    var o, a = this;
                    if (!t.isText) return this._markElementAsDeleted(t.node, null), this._selection.collapseBefore(t.node, {
                        nodeFilter: this._isDeletableCallback,
                        visitFilter: function(e) {
                            return !a._isOpaqueNode(e);
                        },
                        root: this.rootElement
                    }), !0;
                    if (r) {
                        var s = this._splitNode(r.trackingNode, t.node, t.offset + 1),
                            l = e.domUtils.getLastSelectableChild(s);
                        o = l && e.domUtils.splitTextAt(l, l.length - 1, 1, !0), s.parentNode.insertBefore(o, s.nextSibling), e.domUtils.hasNoTextOrStubContent(r.trackingNode) && $(r.trackingNode).remove();
                    } else o = e.domUtils.splitTextAt(t.node, t.offset, 1, !0);
                    return !!o && (this._addDeleteTracking(o, {
                        range: n,
                        move: i.Left,
                        merge: !0,
                        ignoreAdjacentTracking: !0
                    }), !0);
                },T.prototype._isNextTextSibling = function(t, n) {
                    return !!(t && t.parentNode && n && n.parentNode) && (3 === n.nodeType ? t.nextSibling === n || this._isNextTextSibling(t, n.parentNode) : !!e.domUtils.matchesSelector(n, this._fliteTextSelector) && (t.nextSibling ? t.nextSibling === n : e.domUtils.matchesSelector(t.parentNode, this._fliteTextSelector) && t.parentNode.nextSibling === n));
                },T.prototype._isPrevTextSibling = function(t, n) {
                    return !!(t && t.parentNode && n && n.parentNode) && (3 === n.nodeType ? t.previousSibling === n || this._isPrevTextSibling(t, n.parentNode) : !!e.domUtils.matchesSelector(n, this._fliteTextSelector) && (t.previousSibling ? t.previousSibling === n : e.domUtils.matchesSelector(t.parentNode, this._fliteTextSelector) && t.parentNode.previousSibling === n));
                },T.prototype._deleteForwardUntrackedContext = function(t, n, r) {
                    if (!t.isText) return this._markElementAsDeleted(t.node, null), this._collapseOnEdgeOf(t.node, !0, t.isCurrent), !0;
                    var o;
                    if (r) {
                        var a = this._splitNode(r.trackingNode, t.node, t.offset),
                            s = e.domUtils.getFirstSelectableChild(r.trackingNode);
                        o = s && e.domUtils.splitTextAt(s, 0, 1, !0), a.parentNode.insertBefore(o, a.nextSibling), e.domUtils.hasNoTextOrStubContent(r.trackingNode) && $(r.trackingNode).remove();
                    } else o = e.domUtils.splitTextAt(t.node, t.offset, 1, !0);
                    return !!o && (this._addDeleteTracking(o, {
                        ignoreAdjacentTracking: !0,
                        range: n,
                        move: i.None,
                        merge: !0
                    }), this._selection.setEnd(o, !0, 1), !0);
                },T.prototype._isNodeOfChangeType = function(e, t) {
                    if (!e) return !1;
                    var n = "." + this._getTrackedNodeClass(t);
                    return $(e.$ || e).is(n);
                },T.prototype._isInsertNode = function(e) {
                    return this._isNodeOfChangeType(e, a);
                },T.prototype._isDeleteNode = function(e) {
                    return this._isNodeOfChangeType(e, s);
                },T.prototype.getAdjacentChangeId = function(t, n) {
                    var r,
                        o = n === i.Left ? e.domUtils.getNextNode(t, this.rootElement) : e.domUtils.getPrevNode(t, this.rootElement),
                        a = null;
                    return (r = this._getWrappingTrackedNode(o, this._fliteSelector)) || (this._isInsertNode(o) || this._isDeleteNode(o)) && (r = o), r && this._isCurrentSessionNode(r) && (a = r.getAttribute(this.attributes.changeId)), a;
                },T.prototype._getVoidElement = function(t) {
                    if (!t) return null;
                    var n = t.node, r = !1 !== t.checkEmpty;
                    try {
                        var i = this._getWrappingTrackedNode(n, this._deleteSelector);
                        return !i && Node.TEXT_NODE === n.nodeType && r && "​" == n.nodeValue ? n : i;
                    } catch (t) {
                        return e.Logger.error(t, "While trying to get void element of", n), null;
                    }
                },T.prototype._addDeleteTracking = function(t, n) {
                    if (n = n || {}, t) {
                        var r, o = t.nodeType === Node.TEXT_NODE, a = n.range, l = !1;
                        if (!n.ignoreAdjacentTracking) {
                            var d = n.trackingContext || this._getNodeTrackingContext(t);
                            if (d.isInsert) return this._addDeletionInInsertNode(t, d, n);
                            if (a) {
                                if (d.isDelete && d.isCurrent) return void this._moveCaret(a.startContainer, n && n.move);
                                if (d.isDelete) return this._deleteInDeleted(t, n);
                            }
                        }
                        if (t.previousSibling && e.domUtils.isEmptyTextNode(t.previousSibling) && t.parentNode.removeChild(t.previousSibling), t.nextSibling && e.domUtils.isEmptyTextNode(t.nextSibling) && t.parentNode.removeChild(t.nextSibling), o) {
                            var c = this._getNodeTrackingContext(t.previousSibling),
                                u = this._getNodeTrackingContext(t.nextSibling);
                            if (l = !0, c.isDelete && c.isTextSpan && c.isCurrent) {
                                if ((r = c.trackingNode).appendChild(t), u.isDelete && u.isTextSpan && u.isCurrent) {
                                    var p = e.domUtils.extractContent(u.trackingNode);
                                    r.appendChild(p), u.trackingNode.parentNode.removeChild(u.trackingNode);
                                }
                            } else u.isDelete && u.isTextSpan && u.isCurrent ? (r = u.trackingNode).insertBefore(t, r.firstChild) : l = !1;
                        }
                        if (!l) {
                            var h = n.changeId || o && !n.ignoreAdjacentTracking && this.getAdjacentChangeId(t, n && n.move);
                            r = this._createTrackedNode({
                                type: s,
                                node: t,
                                changeId: h,
                                refNode: null,
                                containerOnly: n.containerOnly,
                                trackChildren: n.trackContent || !1
                            });
                        }
                        return a && (e.domUtils.isStubElement(t) ? a.selectNode(t) : a.selectNodeContents(t), a.collapse(n.move == i.Left), this._selection.addRange(a)), r && (setTimeout(function() {
                            return e.domUtils.normalizeNode(r);
                        }, 0), a && a.refresh()), !0;
                    }
                },T.prototype._addDeletionInInsertNode = function(t, n, r) {
                    var o = r.range;
                    if (n.isCurrent) {
                        if (o) {
                            var a = r.move === i.Left;
                            a ? o.setStartBefore(t) : o.setStartAfter(t), o.collapse(a);
                        }
                        t.parentNode.removeChild(t), e.domUtils.normalizeNode(n.trackingNode);
                        var l = $(n.trackingNode), d = void 0;
                        l.find(".liteBookmark").length > 0 ? ((d = l.clone()).find(".liteBookmark").remove(), d = d[0]) : d = n.trackingNode, e.domUtils.hasNoTextOrStubContent(d) && (o && (o.setStartBefore(n.trackingNode), o.collapse(!0)), this._replaceNodeWithContent($(n.trackingNode)));
                    } else {
                        var c, u = e.domUtils.getNodeIndex(t), p = t.parentNode, h = t === n.trackingNode,
                            f = p.childNodes.length;
                        if (h || p.removeChild(t), c = this._createTrackedNode({
                            type: s,
                            node: t,
                            changeId: null,
                            refNode: null,
                            containerOnly: !1,
                            trackChildren: !1
                        }), !h) {
                            if (u > 0 && u >= f - 1) e.domUtils.insertAfter(c, n.trackingNode); else {
                                if (u > 0) {
                                    var g = this._splitNode(n.trackingNode, p, u);
                                    this._deleteEmptyNode(g);
                                }
                                n.trackingNode.parentNode.insertBefore(c, n.trackingNode);
                            }
                            this._deleteEmptyNode(n.trackingNode);
                        }
                        o && r.move == i.Left && this._selection.collapseBefore(c, this._isDeletableNoSelfOptions), r && r.merge && this._mergeDeleteNode(c), o && o.refresh();
                    }
                    return !0;
                },T.prototype._splitAtCaret = function(t) {
                    if (!t || !t.collapsed) return t;
                    var n = t.startContainer, r = t.cloneRange(), i = t.startOffset;
                    if (n.nodeType === Node.TEXT_NODE) {
                        var o = n;
                        if (i >= o.length) return t;
                        var a = e.domUtils.splitTextAt(o, i, o.length - i, !0);
                        return r.setStart(a.parentNode, e.domUtils.getNodeIndex(a) + 1), r.collapse(!0), r;
                    }
                    var s = n;
                    if (i >= s.childNodes.length) r.setStartAfter(s), r.collapse(!0); else {
                        a = this._splitNode(s, s, i);
                        r.setStart(a, 0);
                    }
                    return r;
                },T.prototype._splitNode = function(t, n, r) {
                    var i, o = t.parentNode, a = e.domUtils.getNodeIndex(t), s = n.ownerDocument.createRange();
                    s.setStart(o, a), s.setEnd(n, r), i = s.extractContents(), o.insertBefore(i, t);
                    var l = t.previousSibling;
                    return this.isInsideChange(t, !0) && this._finalizeTrackedNode(l), l;
                },T.prototype._deleteEmptyNode = function(t) {
                    var n = t && t.parentNode;
                    n && e.domUtils.hasNoTextOrStubContent(t) && n.removeChild(t);
                },T.prototype._handleVoidEl = function(e, t) {
                    var n = e && this._getVoidElement({ node: e, checkEmpty: !1 });
                    return !(!n || this._getWrappingTrackedNode(n, this._deleteSelector)) && (t.collapse(!0), !0);
                },T.prototype._deleteInDeleted = function(t, n) {
                    var r = n.range, o = n.move === i.Left, a = !1;
                    if (e.domUtils.normalizeNode(t), o) {
                        for (var s = e.domUtils.getPrevContentNode(t, this.rootElement); !a;) this._getWrappingTrackedNode(s, this._deleteSelector) ? s = e.domUtils.getPrevContentNode(s, this.rootElement) : a = !0;
                        if (s) {
                            var l = e.domUtils.getLastSelectableChild(s);
                            l && (s = l), r.setStart(s, e.domUtils.getNodeCharacterLength(s)), r.collapse(!0);
                        }
                    } else {
                        for (var d = e.domUtils.getNextContentNode(t, this.rootElement); !a;) this._getWrappingTrackedNode(d, this._deleteSelector) ? d = e.domUtils.getNextContentNode(d, this.rootElement) : a = !0;
                        d && this._selection.collapseAtStart(d);
                    }
                    return !0;
                },T.prototype._mergeDeleteNode = function(t) {
                    var n, r;
                    this._isCurrentSessionNode(n = this._getWrappingTrackedNode(t.previousSibling, this._deleteSelector)) ? (r = e.domUtils.extractContent(t), t.parentNode.removeChild(t), n.appendChild(r), this._mergeDeleteNode(n)) : this._isCurrentSessionNode(n = this._getWrappingTrackedNode(t.nextSibling, this._deleteSelector)) && (r = e.domUtils.extractContent(n), t.parentNode.removeChild(n), t.appendChild(r), this._mergeDeleteNode(t));
                },T.prototype._showTitles = function(e) {
                    var t = this, n = this.getTrackedNodes();
                    e ? $(n).each(function(e, n) {
                        t._finalizeTrackedNode(n);
                    }) : $(n).removeAttr("title");
                },T.prototype._handleSpecialKey = function(e) {
                    var t = !1;
                    switch (e) {
                        case 8:
                            t = this._deleteContents(!1, null, !1);
                            break;
                        case 46:
                            t = this._deleteContents(!0, null, !1);
                    }
                    return t;
                },T.prototype._keyPress = function(t) {
                    var n = null;
                    if (t.ctrlKey || t.metaKey) return !1;
                    var r = t.keyCode || t.which;
                    switch (r) {
                        case 32:
                            return this._insertText(" ");
                        case 8:
                        case 46:
                            return this._handleSpecialKey(r);
                        case 13:
                            return this._handleEnter();
                        default:
                            if (O(r)) return !1;
                            if (n = t.char || String.fromCharCode(r)) {
                                var i = e.utils.browser.msie ? n : null;
                                return this._insertText(i);
                            }
                            return !1;
                    }
                },T.prototype._handleEnter = function() {
                    var e = this._getCurrentRange(!0);
                    if (e) {
                        if (this.hostMethods.getIMECompositionState() !== n.None) return !0;
                        if (this._lastMutationContext.setContext("enter"), e.collapsed) {
                            var t = this._getNodeTrackingContext(e.startContainer);
                            this._moveCaretOutOfTracking(e, t);
                        } else this._deleteContents(!1, null, !1);
                        return !1;
                    }
                },T.prototype._handleEditKey = function(e) {
                    switch (e.which || e.keyCode) {
                        case 120:
                        case 88:
                            if ((!0 === e.ctrlKey || !0 === e.metaKey) && this._params.handleCut) return this.prepareToCut(), !0;
                            break;
                        case 67:
                        case 99:
                            if (!0 === e.ctrlKey || !0 === e.metaKey) return this.prepareToCopy(), !0;
                    }
                    return !1;
                },T.prototype._insertText = function(t) {
                    if (this.hostMethods.getIMECompositionState() !== n.None) {
                        var r = this._getCurrentRange(), i = r.collapsed && r.startContainer,
                            o = i && this._getNodeTrackingContext(i);
                        if (o.tracksContent && o.isCurrent) return !0;
                    }
                    this.hostMethods.beforeInsert && this.hostMethods.beforeInsert();
                    var a = this._getCurrentRange(!0), s = this._startBatchChange(), l = this.setIgnoreMutations(!0),
                        d = Boolean(a && !a.collapsed), c = !1;
                    try {
                        d && (this._deleteContents(!1, a, !0), a = this._getCurrentRange()), a && (this._moveRangeToValidTrackingPos(a), c = this._doInsertText(t, a));
                    } catch (t) {
                        e.Logger.error(t, "while trying to insert nodes");
                    } finally {
                        this.setIgnoreMutations(l), this._endBatchChange(s, Boolean(t || c));
                    }
                    return c;
                },T.prototype._doInsertText = function(e, t) {
                    var n = t.startContainer, r = this._host.document, i = !1, o = null,
                        s = this._getNodeTrackingContext(n);
                    if (s.isInsert && s.isCurrent) if (s.tracksContent) this._prepareSelectionForInsert(null, t, r, !0); else {
                        var l = this._createTrackedNode({
                            type: a,
                            node: null,
                            changeId: null,
                            refNode: null,
                            containerOnly: !1,
                            trackChildren: !1
                        });
                        t.insertNode(l), this._prepareSelectionForInsert(l, t, r, !0);
                    } else {
                        l = this._createTrackedNode({
                            type: a,
                            node: null,
                            changeId: null,
                            refNode: null,
                            containerOnly: !1,
                            trackChildren: !1
                        });
                        if (s.isTracking && s.tracksContent) {
                            if (3 === n.nodeType) {
                                var d = this._splitNode(s.trackingNode, n, t.startOffset);
                                o = s.trackingNode, this._selection.collapseAfter(d, this._isDeletableNoSelfOptions);
                            } else (o = n.childNodes && n.childNodes[t.startOffset] || n) !== n ? this._splitNode(n, n, t.startOffset) : this._selection.collapseBefore(n, this._isDeletableNoSelfOptions), o = n, this._selection.collapseBefore(o, this._isDeletableNoSelfOptions);
                            t = this._selection.getRangeAt(0);
                        }
                        if (o ? o.parentNode.insertBefore(l, o) : t.insertNode(l), e) {
                            i = !0;
                            var c = r.createTextNode(e);
                            l.appendChild(c), this._selection.collapseAtEnd(c);
                        } else this._prepareSelectionForInsert(l, t, r, !0);
                    }
                    return i;
                },T.prototype._prepareSelectionForInsert = function(e, t, n, r) {
                    if (r) {
                        var i = e || t.startContainer;
                        if (t.collapsed && i && i.nodeType === Node.TEXT_NODE && i.length) return;
                        var o = n.createTextNode(" ");
                        e ? e.appendChild(o) : t.insertNode(o), this._selection.setStart(o, !1, 0), this._selection.setEnd(o, !1, 1);
                    } else e && (t.selectNodeContents(e), this._selection.addRange(t));
                },T.prototype._handleKeyDown = function(e) {
                    return !!this._handleEditKey(e) || !this._keyPress(e);
                },T.prototype._moveRangeToValidTrackingPos = function(t) {
                    if (t) for (var n, r, i, o, a = null, s = [], l = !1; !l;) {
                        if (!(r = t.startContainer) || s.indexOf(r) >= 0) return;
                        if (s.push(r), n = this._getVoidElement({ node: r, checkEmpty: !1 })) {
                            if (n !== r && s.indexOf(n) >= 0) return;
                            s.push(n);
                        } else l = e.domUtils.isTextContainer(r);
                        if (!l) {
                            null === a && (a = !e.domUtils.isOnRightEdge(t.startContainer, t.startOffset)), o = (i = a ? e.domUtils.findPrevTextContainer(n || r, this.rootElement) : e.domUtils.findNextTextContainer(n || r, this.rootElement)).node;
                            try {
                                a ? t.setStart(o, i.offset) : t.setEnd(o, i.offset), t.collapse(a);
                            } catch (t) {
                                e.Logger.error(t, "While trying to move range to valid tracking position");
                                break;
                            }
                        }
                    }
                },T.prototype._restoreAndMarkDeletedNode = function(t, n, r) {
                    if (!t || t.nodeType === Node.TEXT_NODE && e.domUtils.isEmptyTextNode(t)) return !1;
                    r && r.parentNode !== n && (r = null);
                    var i = this._isOpaqueNode(t), o = t.nodeType === Node.ELEMENT_NODE && "SPAN" === t.nodeName;
                    if (!i && o && t.firstChild) {
                        for (var a = !0, s = t.firstChild; s && a; s = s.nextSibling) s.nodeType === Node.TEXT_NODE && e.domUtils.isEmptyTextNode(s) || (a = !1);
                        if (a) return !1;
                    }
                    var l = this._getNodeTrackingContext(t);
                    return (!l.isInsert || !l.isCurrent) && (e.domUtils.insertAfter(t, r, n), r ? r.nextSibling ? n.insertBefore(t, r.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), this._addDeleteTracking(t, {
                        containerOnly: i || !o,
                        trackContent: !i && !o,
                        ignoreAdjacentTracking: !0,
                        trackingContext: l
                    }), !0);
                },T.prototype._onMutationSummary = function(t) {
                    var n = this, r = this.rootElement && this.rootElement.ownerDocument;
                    if (r) if (this._summaryGuard.shouldIgnore(t)) e.Logger.debug("Ignoring mutations", this._summaryGuard); else {
                        var i = this._getCurrentRange(!0);
                        e.Logger.debug("on dom mutation summary, ", t);
                        var o, a, s, l, d, c, u = !1, p = this._startBatchChange(), h = [], f = !1,
                            g = this._lastMutationContext.peekType;
                        try {
                            var m = this._processSpecialMutation(t);
                            if (m) return u = m.changedDOM, void (m.restoreCaret || (i = null));
                            for (var v = 0, y = t.length; v < y; ++v) {
                                var _ = void 0;
                                if ((l = (o = t[v]).added || []).forEach(function(e) {
                                    n._isValidFLITENode(e) || n.removeFLITETracking(e);
                                }), d = this._restoreDeletedHierarchy(o.removed, o), l = this._restoreAddedHierarchy(l), this._handleIdenticalChanges(l, d)) e.Logger.debug("Identical change, ignoring"); else if (this._restoreList(o) || this._processNewParagraph(o) || this._processDeletedLastLI(o) || this._processNewList(o) || this._processAddedListItem(o) || this._processAddedBreakDiv(o)) u = !0; else {
                                    c = o.reparented || [];
                                    for (var N = 0, b = d.length; N < b; ++N) a = d[N], this._shouldRestoreNode(a, o.getOldParentNode(a)) && (e.domUtils.isAncestorAmong(h, a) ? h.push(a) : (s = o.getOldParentNode(a)) && s.ownerDocument === r && this._restoreAndMarkDeletedNode(a, s, o.getOldPreviousSibling(a)) && (u = !0, h.push(a), c.length && a.nodeType === Node.ELEMENT_NODE && (_ = a.querySelectorAll("*")) && _.length && (h = h.concat([].slice.apply(_)))));
                                    u = this._restoreReparented(o, h) || u, h.forEach(function(e) {
                                        n._removeHostArtifacts(e);
                                    });
                                    for (var C = 0, T = l.length; C < T; ++C) u = this._tryToTrackAddedNode(l[C], o.reparented) || u;
                                    var E = o.getCharacterDataChanged();
                                    E && E.length;
                                }
                            }
                        } catch (t) {
                            e.Logger.error("While analyzing mutation summary", t);
                        } finally {
                            f = Boolean(h && h.length), this._endBatchChange(p, !1), i && i.collapsed && (e.rangy.dom.isAncestorOf(this.rootElement, i.startContainer, !0) ? this._selection.setStart(i.startContainer, !0, i.startOffset) : f = !0), f && e.utils.createBackspaceGuard(this.rootElement, function(e) {
                                n._cleanupSelection(n._getCurrentRange(!0), !0), e.backspace ? n._selection.nudgeLeft(null, n._isDeletableOptions) : e.del ? n._selection.nudgeRight(null, n._isDeletableOptions) : n._selection.normalize(n._isDeletableOptions, "outdent" === g);
                            }), u && this.hostMethods.updateLastUndo();
                        }
                    }
                },T.prototype._restoreReparented = function(t, n) {
                    for (var r, i, o = !1, a = t.reparented && this._restoreDeletedHierarchy(t.reparented, t) || [], s = 0, l = a.length; s < l; ++s) r = a[s], (i = t.getOldParentNode(r)) && n.indexOf(i) >= 0 && (this._restoreIntoLI(r, i, t.getOldPreviousSibling(r)) || e.domUtils.insertAfter(r, t.getOldPreviousSibling(r), i), o = !0);
                    return o;
                },T.prototype._processSpecialMutation = function(t) {
                    var n = { changedDOM: !1, restoreCaret: !0 }, r = this._lastMutationContext.type,
                        i = this._lastMutationContext.data;
                    switch (r) {
                        case"backspace-li":
                        case"delete-li":
                            this._handleDeletedListItem(t, r), n.restoreCaret = !1;
                            break;
                        case"insert-element":
                            this._handleInsertedElement(t, i);
                            break;
                        case"add-style":
                            this._handleAddedStyle(t, i), n.restoreCaret = !1;
                            break;
                        case"remove-style":
                            this._handleRemovedStyle(t, i), n.restoreCaret = !1;
                            break;
                        case"paste":
                            n.restoreCaret = !1, this._updateAfterPaste(t);
                            break;
                        case"insert-list":
                            this._handleInsertedList(t) && (n.restoreCaret = !1, n.changedDOM = !0);
                            break;
                        case"remove-list":
                            this._loadFromDom(), n.restoreCaret = !1;
                            break;
                        case"enter":
                            this._handleEnterMutation(t) && (n.changedDOM = !0);
                            break;
                        case"delete-br":
                            var o = this._handleDeleteBreak(t);
                            o.handled && (n.changedDOM = !0, n.restoreCaret = o.restoreCaret);
                            break;
                        default:
                            return null;
                    }
                    return e.Logger.debug("Processed special mutation", r), n;
                },T.prototype._handleDeletedListItem = function(t, n) {
                    var r = this, i = t[0];
                    if (!this._restoreList(i)) {
                        var o, a = this.rootElement && this.rootElement.ownerDocument, s = i.added, l = [];
                        if (this._restoreDeletedHierarchy(i.removed, i).forEach(function(t) {
                            if (r._shouldRestoreNode(t, i.getOldParentNode(t))) if (e.domUtils.isAncestorAmong(l, t)) l.push(t); else {
                                var n = i.getOldParentNode(t);
                                n && n.ownerDocument === a && r._restoreAndMarkDeletedNode(t, n, i.getOldPreviousSibling(t)) && "LI" === t.nodeName && (o = t);
                            }
                        }), o) {
                            s.forEach(function(e) {
                                o.insertBefore(e, o.firstChild);
                            }), this._restoreReparented(i, i.removed);
                            var d = $(o.parentNode);
                            d.find("br[data-mce-bogus]").each(function(e, t) {
                                t.nextSibling && t.parentNode.appendChild(t);
                            }), d.find("li>br~br[data-mce-bogus]").remove(), "delete-li" === n ? this._selection.collapseAtStart(o) : this._selection.collapseBefore(o, this._isDeletableNoSelfOptions);
                        }
                    }
                },T.prototype._handleInsertedElement = function(e, t) {
                    var n, r;
                    if (t && t.element && (n = e[0])) for (var i = n.added, o = n.added.concat(n.removed).concat(n.reparented || []), a = 0; a < i.length; ++a) 1 === (r = i[a]).nodeType && r.nodeName === t.element && this._tryToTrackAddedNode(r, o);
                },T.prototype._handleAddedStyle = function(e, t) {
                    var n, r;
                    if (t && t.element && (n = e[0])) for (var i = n.added, o = 0; o < i.length; ++o) 1 === (r = i[o]).nodeType && (r.nodeName.toLowerCase(), t.element);
                },T.prototype._handleRemovedStyle = function(e, t) {
                    var n, r;
                    if (t && t.element && (n = e[0])) for (var i = n.removed, o = 0; o < i.length; ++o) 1 === (r = i[o]).nodeType && (r.nodeName.toLowerCase(), t.element);
                },T.prototype._handleDeleteBreak = function(t) {
                    var n, r, i = { handled: !1, restoreCaret: !0 };
                    if (1 !== t.length) return i;
                    for (var o = t[0], a = o.removed, s = [], l = this.rootElement && this.rootElement.ownerDocument, d = 0; d < a.length; ++d) if ((n = a[d]).nodeName in g) {
                        var c = o.getOldParentNode(n);
                        c && c.ownerDocument === l && this._restoreAndMarkDeletedNode(n, c, o.getOldPreviousSibling(n)) && (s.push(n), i.handled = !0, "LI" === n.nodeName && (r = n));
                    }
                    if (this._restoreReparented(o, s), r) {
                        var u = e.domUtils.getFirstSelectableChild(n, this._isDeletableNoSelfOptions);
                        u && (this._selection.setStart(u, !0, 0), i.restoreCaret = !1);
                    }
                    return i;
                },T.prototype._updateAfterPaste = function(e) {
                    for (var t = 0, n = e.length; t < n; ++t) for (var r = e[t].added, i = void 0, o = 0, a = r.length; o < a; ++o) i = r[o], this._isValidFLITENode(i) && (this._finalizeTrackedNode(i), this._fixAddedChildren(i));
                    this.unwrapAllTrackedNodes(null);
                },T.prototype._fixAddedChildren = function(t) {
                    var n = this, r = $(t);
                    if (e.domUtils.matchesSelector(t, "TD,LI")) {
                        var i = t.getAttribute(this.attributes.changeId);
                        i && r.find("BR").each(function(e, t) {
                            n._addNodeToChange(i, t, a);
                        });
                    }
                    r.find("span." + this._insertClassName + ">br").each(function(e, t) {
                        n._replaceNodeWithContent($(t.parentNode));
                    });
                },T.prototype._handleInsertedList = function(e) {
                    if (1 !== e.length) return !1;
                    for (var t, n, r = e[0], i = r.reparented || [], o = r.added, a = o.concat(i), s = !1, l = 0, d = o.length; l < d; ++l) if ((t = o[l]).nodeName in m) if (s = this._tryToTrackAddedNode(o[l], a) || s, "LI" !== t.nodeName) n = t; else {
                        var c = t.firstChild;
                        c && !c.nextSibling && this._selection.setStart(t, !0, 0);
                    }
                    if (s && n) for (l = 0, d = i.length; l < d; ++l) "LI" === (t = i[l]).nodeName && t.parentNode === n && this._tryToTrackAddedNode(i[l], a);
                    return s;
                },T.prototype._handleEnterMutation = function(e) {
                    if (1 !== e.length) return !1;
                    var t = e[0], n = this.hostMethods.getNewLineNodeName();
                    if (!n) return !1;
                    for (var r, i = t.added, o = i.concat(t.reparented || []), a = !1, s = i.length - 1; s >= 0; --s) (r = i[s]).nodeName !== n && "LI" !== r.nodeName && "BR" !== r.nodeName || (a = !0, this._tryToTrackAddedNode(r, o));
                    return a;
                },T.prototype._handleIdenticalChanges = function(t, n) {
                    var r, i, o = t.length, a = n.length, s = o - a;
                    if (s < -1 || s > 1) return !1;
                    o > a ? (r = t.slice(), i = n.slice()) : (r = n, i = t);
                    for (var l, d, c, u = null, p = [], h = 0; h < r.length; ++h) {
                        l = r[h], c = !1;
                        for (var f = 0; f < i.length && !c; ++f) d = i[f], 3 === l.nodeType ? 3 === d.nodeType && l.data === d.data && (c = !0) : 1 === l.nodeType && 1 === d.nodeType && d.nodeName === l.nodeName && l.innerHTML === d.innerHTML && (c = !0), c && (p.push({
                            n1: l,
                            n2: d
                        }), i.splice(f, 1));
                        if (!c) {
                            if (e.domUtils.getNodeCharacterLength(l) || u) return !1;
                            u = l;
                        }
                    }
                    return p.forEach(function(e) {
                        e.n1.parentNode && !e.n2.parentNode ? e.n1.parentNode.replaceChild(e.n2, e.n1) : e.n2.parentNode && !e.n1.parentNode && e.n2.parentNode.replaceChild(e.n1, e.n2);
                    }), p.length > 0;
                },T.prototype._restoreIntoLI = function(t, n, r) {
                    if ("LI" !== n.nodeName) return !1;
                    if (r && r.parentNode === n) return e.domUtils.insertAfter(t, r, n), !0;
                    for (var i = n.firstChild; i; i = i.nextSibling) if ("BR" === i.nodeName) return n.insertBefore(t, i), !0;
                    return n.appendChild(t), !0;
                },T.prototype._shouldRestoreNode = function(t, n) {
                    if (t.nodeType !== Node.ELEMENT_NODE) return !0;
                    var r = e.domUtils.matchesSelector(t, this._insertSelector) ? t : this._getWrappingTrackedNode(n, this._insertSelector);
                    return !this._isCurrentSessionNode(r);
                },T.prototype._tryToTrackAddedNode = function(t, n) {
                    if (!this._isTrackable(t, this._params.ignoredSelectors)) return !1;
                    var r = this._getNodeTrackingContext(t), i = !0;
                    return r.isTracking ? r.isInsert && !r.isCurrent ? this._createTrackedNode({
                        type: a,
                        node: t,
                        changeId: null,
                        ignoredNodes: n,
                        refNode: null,
                        containerOnly: !1,
                        trackChildren: !1
                    }) : i = !1 : this._createTrackedNode({
                        type: a,
                        node: t,
                        changeId: null,
                        refNode: null,
                        containerOnly: e.domUtils.isBlockElement(t),
                        trackChildren: !0,
                        ignoredNodes: n
                    }), this._fixAddedChildren(t), i;
                },T.prototype._restoreAddedHierarchy = function(t) {
                    var n, r, i;
                    if (!t || (n = t.length) < 2) return t;
                    for (var o = [], a = [], s = 0; s < n; ++s) (i = t[s]).nodeType === Node.TEXT_NODE && e.domUtils.isEmptyString(i.nodeValue) || (r = i.parentNode) && t.indexOf(r) < 0 && (i.nodeType === Node.ELEMENT_NODE && i.getAttribute("data-flite-inserting") ? a.push(i) : o.push(i));
                    return a.length ? a : o;
                },T.prototype._restoreDeletedHierarchy = function(e, t) {
                    if (!e || !e.length) return [];
                    e = e.slice();
                    for (var n, r, i, o, a, s = function(t) {
                        for (var n = e.length - 1; n >= 0; --n) if (e[n] === t) return n;
                        return -1;
                    }, l = 0; l < e.length; ++l) n = e[l], (r = t.getOldParentNode(n)) && (r !== n.parentNode ? (o = s(r)) >= 0 && o > l && (e.splice(o, 1), e.splice(l, 0, r), --l) : (e.splice(l, 1), l--));
                    for (l = 0; l < e.length; ++l) n = e[l], (i = t.getOldPreviousSibling(n)) && (a = s(i)) > l && (e.splice(a, 1), e.splice(l, 0, i), --l);
                    if (t.li_restored_) return e;
                    t.li_restored_ = 1;
                    var d = function(e, n) {
                        if (!(n >= e.length - 1)) {
                            var r, i, o = e[n];
                            if (o.nodeType !== Node.ELEMENT_NODE) return d(e, n + 1);
                            for (var a = n + 1; a < e.length; ++a) r = e[a], t.getOldParentNode(r) === o && (d(e, n + 1), (i = t.getOldPreviousSibling(r)) && i.parentNode !== o && (i = null), o.insertBefore(r, i && i.nextSibling), e.splice(a, 1), a--);
                        }
                    };
                    return d(e, 0), e;
                },T.prototype._createMutationObservers = function(t) {
                    var n = this;
                    if (this._mutationSummary) t && this._mutationSummary.reconnect(); else {
                        var r = {
                            callback: this._onMutationSummary.bind(this),
                            rootNode: this.rootElement,
                            oldPreviousSibling: !0,
                            observeOwnChanges: !1,
                            mutationFilter: this._filterMutations,
                            nodeFilter: function(e) {
                                return !n._shouldIgnoreNode(e);
                            },
                            queries: []
                        };
                        r.mutationFilter = r.mutationFilter.bind(this), this._params.trackedDeleteSelectors && r.queries.push({
                            element: this._params.trackedDeleteSelectors,
                            classAttribute: !1
                        }), this._params.trackedInsertSelectors && r.queries.push({ element: this._params.trackedInsertSelectors }), this._mutationSummary = new e.MutationSummary(r, t);
                    }
                },T.prototype._removeTrackingInRange = function(t) {
                    var n = this, r = Date.now() % 1e6, i = "." + this._insertClassName + ",." + this._deleteClassName,
                        o = {}, a = "data-flite-class";
                    t.getNodes(null, function(e) {
                        var t, s, l = null;
                        if (s = (l = e.nodeType == Node.TEXT_NODE ? $(e).parents(i) : (t = $(e)).is(i) ? t : t.parents(i)) && l[0]) {
                            var d = x(s), c = s.className, u = String(r++);
                            return o[u] = {
                                attributes: d,
                                className: c
                            }, n.removeFLITETracking(s), s.setAttribute(a, u), !0;
                        }
                        return !1;
                    });
                    var s = this.rootElement;
                    setTimeout(function() {
                        $(s).find("[" + a + "]").each(function(t, n) {
                            var r = n.getAttribute(a), i = o[r] || {};
                            r ? (delete o[r], Object.keys(i.attributes || {}).forEach(function(e) {
                                n.setAttribute(e, i.attributes[e]);
                            }), n.setAttribute("class", i.className), n.removeAttribute(a)) : e.Logger.warn("missing save data for node");
                        });
                    }, 10);
                },T.prototype._isOpaqueNode = function(t) {
                    return !(!t || t.nodeType !== Node.ELEMENT_NODE) && (this._params.opaqueSelectors && e.domUtils.matchesSelector(t, this._params.opaqueSelectors));
                },T.prototype._isTrackable = function(t, n) {
                    return !!t && (t.nodeType === Node.TEXT_NODE || t.nodeType === Node.ELEMENT_NODE && (!n || !e.domUtils.matchesSelector(t, n)));
                },T.prototype._processAddedListItem = function(t) {
                    if (0 !== t.removed.length || 0 !== t.reparented.length || 1 !== t.added.length) return !1;
                    var n = t.added[0];
                    if ("li" !== e.utils.getTagName(n)) return !1;
                    var r = this._getNodeTrackingContext(n);
                    if (r.isInsert) {
                        if (r.isCurrent) return !0;
                        this._splitNode(n.parentNode, n, 0), this._createTrackedNode({
                            type: a,
                            node: n,
                            changeId: null,
                            refNode: null,
                            containerOnly: !0,
                            trackChildren: !1
                        });
                    } else r.isDelete ? (this._splitNode(n.parentNode, n, 0), this._createTrackedNode({
                        type: a,
                        node: n,
                        changeId: null,
                        refNode: null,
                        containerOnly: !0,
                        trackChildren: !1
                    })) : this._createTrackedNode({
                        type: a,
                        node: n,
                        changeId: null,
                        refNode: null,
                        containerOnly: !0,
                        trackChildren: !1
                    });
                    return $(n).addClass(l), !0;
                },T.prototype._processNewList = function(t) {
                    var n = t.added, r = t.removed, i = n && n.length;
                    r && r.length;
                    if (2 !== i) return !1;
                    var o = e.domUtils.findNodeByTagName(n, b), s = o && e.domUtils.findNodeByTagName(n, C);
                    if (!o) return !1;
                    var l = this._getNodeTrackingContext(o);
                    return !(!l.isInsert || !l.isCurrent) || (this._createTrackedNode({
                        type: a,
                        node: o,
                        changeId: null,
                        refNode: null,
                        containerOnly: !0,
                        trackChildren: !1
                    }), s && this._createTrackedNode({
                        type: a,
                        node: s,
                        changeId: null,
                        refNode: null,
                        containerOnly: !0,
                        trackChildren: !1
                    }), !0);
                },T.prototype._processNewParagraph = function(e) {
                    var t = e.added, n = this.hostMethods.getNewLineNodeName();
                    if (!n || "BR" === n) return !1;
                    if (2 !== t.length) return !1;
                    var r = t[0], i = t[1];
                    if (e.removed && e.removed.length) return !1;
                    if (r.nodeName !== n || i.nodeName !== n) return !1;
                    for (var o = null, a = e.reparented.length - 1; a >= 0 && !o; --a) e.reparented[a].parentNode === i ? o = r : e.reparented[0].parentNode === r && (o = i);
                    return o || (o = i.childNodes.length > r.childNodes.length ? r : i), this._tryToTrackAddedNode(o, e.reparented), !0;
                },T.prototype._processDeletedLastLI = function(t) {
                    var n = t.added && 1 === t.added.length && t.added[0], r = n && n.nodeName,
                        i = this.hostMethods.getNewLineNodeName(),
                        o = t.removed && 1 === t.removed.length && t.removed[0];
                    if (r !== i || "li" !== e.utils.getTagName(o) || o.firstChild) return !1;
                    var s = this._getNodeTrackingContext(n);
                    if (s.isInsert && s.isCurrent) return !0;
                    s.isDelete && this._splitNode(n.parentNode, n, 0);
                    var l = this._createTrackedNode({
                        type: a,
                        node: n,
                        changeId: null,
                        refNode: null,
                        containerOnly: !0,
                        trackChildren: !1
                    }), d = e.domUtils.getFirstSelectableChild(l, this._isDeletableOptions);
                    return this._selection.setStart(d || l, !0, 0), !0;
                },T.prototype._processAddedBreakDiv = function(t) {
                    var n = t.added, r = n && n.length, i = t.removed && t.removed.length;
                    if (r < 1 || 0 !== i) return !1;
                    var o = n[0];
                    return !("div" !== e.utils.getTagName(o) || !o.childNodes || 1 !== o.childNodes.length || "br" !== e.utils.getTagName(o.firstChild)) && (this._tryToTrackAddedNode(o, t.reparented), !0);
                },T.prototype._restoreList = function(t) {
                    var n = t.added, r = t.removed, i = this.hostMethods.getNewLineNodeName(), o = i ? 1 : 0,
                        a = n && n.length, s = r && r.length;
                    if (a < o || !s) return !1;
                    for (var l, d, c, u, p = 0, h = 0; h < s; ++h) {
                        if (l = r[h], !d && b.test(l.nodeName)) {
                            if (d = l, (c = this._getNodeTrackingContext(d)).isInsert && c.isCurrent) return !1;
                            break;
                        }
                        "LI" === l.nodeName && 0 === l.children.length && (e.utils.findInArray(t.reparented, function(e) {
                            return t.getOldParentNode(e) === l;
                        }) || ++p);
                    }
                    if (!d && 1 !== p) return !1;
                    var f = 0, g = 0;
                    for (h = n.length - 1; h >= 0; --h) (l = n[h]).nodeType === Node.ELEMENT_NODE && (l.nodeName === i ? ++f : d && l.nodeName === d.nodeName && ++g);
                    if (f === o && 1 === p && !d) return !1;
                    if (f < o) return !1;
                    if (u = t.getOldParentNode(d), !this._shouldRestoreNode(d, u)) return !0;
                    this._restoreDeletedHierarchy(t.removed, t);
                    var m = t.getOldPreviousSibling(d);
                    e.domUtils.insertAfter(d, m, u), this._removeHostArtifacts(d), g ? this._addDeleteTracking(d.firstChild, {
                        trackingContext: c,
                        containerOnly: !0
                    }) : this._addDeleteTracking(d, { trackingContext: c, containerOnly: !0, trackContent: !0 });
                    var v = [d].concat($(d).find("*").toArray());
                    for (h = t.added.length - 1; h >= 0; --h) (u = (l = t.added[h]).parentNode) && u.removeChild(l);
                    this._restoreReparented(t, v);
                    var y = d.querySelectorAll("li");
                    if (y && y.length) {
                        var _ = e.domUtils.getFirstSelectableChild(y.item(0), this._isDeletableNoSelfOptions);
                        _ && this._selection.setStart(_, !0, 0);
                    }
                    return !0;
                },T.prototype._filterMutations = function(e, t) {
                    var n = e && e[t];
                    if (!n) return o.IGNORE;
                    if ("childList" !== n.type) return o.IGNORE;
                    var r = this.hostMethods.shouldIgnoreMutation(e, t);
                    if (r !== o.OK) return r;
                    var i = this._shouldIgnoreMutationNodeList(n.addedNodes);
                    return i === o.IGNORE_ALL || i === o.OK ? i : this._shouldIgnoreMutationNodeList(n.removedNodes);
                },T.prototype._shouldIgnoreMutationNodeList = function(e) {
                    if (!e || !e.length) return o.IGNORE;
                    for (var t, n = e.length - 1; n >= 0; --n) {
                        (t = e[n]).className;
                        if (!this._shouldIgnoreNode(t)) return o.OK;
                    }
                    return o.IGNORE;
                },T.prototype._shouldIgnoreNode = function(t) {
                    if (!t) return !0;
                    if (t.nodeType === Node.TEXT_NODE && e.domUtils.isEmptyString(t.nodeValue)) return !0;
                    if (t.nodeType !== Node.ELEMENT_NODE) return t.nodeType !== Node.TEXT_NODE;
                    if (t.style && "none" === t.style.display) return !0;
                    var n = this._params.ignoredSelectors;
                    if (n) {
                        if (e.domUtils.matchesSelector(t, n)) return !0;
                        if (1 === t.childNodes.length && t.firstChild && t.firstChild.nodeType === Node.ELEMENT_NODE && e.domUtils.matchesSelector(t.firstChild, n)) return !0;
                        for (var r = this.rootElement, i = t.parentNode; i && i !== r; i = i.parentNode) if (i.nodeType === Node.ELEMENT_NODE && e.domUtils.matchesSelector(i, n)) return !0;
                    }
                    return !1;
                },T.prototype.tryToExtractNestedTrack = function(e, t) {
                },T.prototype._findNextNodeToDelete = function(t) {
                    var n = t.startContainer, r = n, i = t.cloneRange();
                    if (!i.collapsed) return null;
                    if (n.nodeType === Node.ELEMENT_NODE) {
                        if (k(n)) return i.setEndAfter(n), i.collapse(!1), this._findNextNodeToDelete(i);
                        if (i.endOffset >= n.childNodes.length) return (a = e.domUtils.getNextSelectableNode(n, this._isDeletableGreedyOptions)) ? {
                            node: a,
                            offset: 0,
                            isText: 3 === a.nodeType,
                            tagName: a.nodeName,
                            isCurrent: !1
                        } : null;
                        var o = n.childNodes[i.endOffset];
                        if (!(n = this._isDeletableElement(o) ? o : e.domUtils.getFirstSelectableChild(o, this._isDeletableGreedyOptions))) return null;
                        if (n.nodeType !== Node.TEXT_NODE) return {
                            node: n,
                            offset: 0,
                            isText: !1,
                            tagName: n.nodeName,
                            isCurrent: e.rangy.dom.isAncestorOf(n, r, !0)
                        };
                        i.setStart(n, 0), i.collapse(!0);
                    }
                    if (n.nodeType === Node.TEXT_NODE) {
                        if (i.endOffset < n.length) return {
                            node: n,
                            offset: i.endOffset,
                            isText: !0,
                            isCurrent: !1,
                            tagName: null
                        };
                        var a;
                        if (!(a = e.domUtils.getNextSelectableNode(n, this._isDeletableGreedyOptions))) return null;
                        if (a && a !== n) {
                            if (e.domUtils.isEmptyTextNode(a) || k(a)) return i.setEnd(a, e.domUtils.getNodeLength(a)), i.collapse(), this._findNextNodeToDelete(i);
                            var s = a.nodeType === Node.TEXT_NODE;
                            return {
                                node: a,
                                offset: 0,
                                isText: s,
                                tagName: a.nodeName,
                                isCurrent: !s && e.rangy.dom.isAncestorOf(a, r, !0)
                            };
                        }
                    }
                    return null;
                },T.prototype._findPreviousNodeToDelete = function(t) {
                    var n = t.endContainer, r = t.startOffset, i = n, o = t.cloneRange();
                    if (!o.collapsed) return null;
                    if (n.nodeType === Node.ELEMENT_NODE) {
                        if (0 === r) {
                            if (this._isDeletableElement(n, !0)) return {
                                node: n,
                                offset: 0,
                                isText: !1,
                                isCurrent: !0,
                                tagName: n.nodeName
                            };
                            if (!(n = e.domUtils.getPreviousSelectableNode(n, this._isDeletableWithParentOptions))) return null;
                            o.setStart(n, 3 === n.nodeType ? n.length : 0);
                        }
                        if (n.nodeType === Node.ELEMENT_NODE) {
                            if (e.domUtils.isStubElement(n)) return {
                                node: n,
                                offset: 0,
                                isText: !1,
                                isCurrent: !1,
                                tagName: n.nodeName
                            };
                            var a = n.childNodes[o.endOffset - 1];
                            if (!(n = e.domUtils.getLastSelectableChild(a, this._isDeletableNoSelfOptions)) && this._isDeletableElement(a) && (n = a), !n) return null;
                            if (n.nodeType !== Node.TEXT_NODE) return "BR" === n.nodeName && n === n.parentNode.lastChild && n.previousSibling && n.parentNode.nodeName in p ? (o.setStartBefore(n), o.collapse(!0), this._findPreviousNodeToDelete(o)) : {
                                node: n,
                                offset: 0,
                                isText: !1,
                                tagName: n.nodeName,
                                isCurrent: e.rangy.dom.isAncestorOf(n, i, !0)
                            };
                            o.setStart(n, n.length || 0), o.collapse(!0);
                        }
                    }
                    if (n && n.nodeType === Node.TEXT_NODE) {
                        if (o.startOffset > 0) return {
                            node: n,
                            offset: o.startOffset - 1,
                            tagName: null,
                            isText: !0,
                            isCurrent: !1
                        };
                        var s = e.domUtils.getPreviousSelectableNode(o.startContainer, this._isDeletableWithParentOptions);
                        if (s) {
                            var l = s.nodeType === Node.TEXT_NODE;
                            return {
                                node: s,
                                offset: l ? s.length - 1 : 0,
                                tagName: l ? null : s.nodeName,
                                isText: l,
                                isCurrent: !l && e.rangy.dom.isAncestorOf(s, i, !0)
                            };
                        }
                    }
                    return null;
                },T.prototype._getNodeTrackingContext = function(t) {
                    var n, r = {
                        isTracking: !1,
                        isCurrentUser: !1,
                        isCurrentSession: !0,
                        isCurrent: !1,
                        trackingNode: null,
                        isDelete: !1,
                        isInsert: !1,
                        changeId: null,
                        isTextSpan: !1,
                        tracksContent: !1
                    };
                    return t && (n = this._isOpaqueNode(t) && e.domUtils.matchesSelector(t.parentNode, this._fliteSelector) ? t.parentNode : this._getWrappingTrackedNode(t, this._fliteSelector)) && (n !== t || e.domUtils.isTextContainer(t) || this._isDeletableElement(t)) ? (r.isTracking = !0, r.isCurrentUser = this._isCurrentUserNode(n), r.trackingNode = n, r.isDelete = e.domUtils.matchesSelector(n, this._deleteSelector), r.isInsert = !r.isDelete, r.isTextSpan = e.domUtils.matchesSelector(n, "span:not(." + l + ")"), r.changeId = n.getAttribute(this.attributes.changeId), this.sessionId && (r.isCurrentSession = n.getAttribute(this.attributes.sessionId) === this.sessionId), r.isCurrent = r.isCurrentSession && r.isCurrentUser, r.tracksContent = !e.domUtils.hasClass(n, l), r) : r;
                },T.prototype._removeHostArtifacts = function(e) {
                    e && e.nodeType === Node.ELEMENT_NODE && $(e).find("[data-cke-bookmark],[data-cke-hidden-sel]").remove();
                },T.prototype._removeFLITEArtifacts = function(t, n) {
                    if (void 0 === t && (t = this._$element), void 0 === n && (n = !0), t && t.length) {
                        var r = this.setIgnoreMutations(!0);
                        try {
                            t.find("[class='']").each(function(e, t) {
                                t.removeAttribute("class");
                            }), t.find(["span", this._insertSelector, ":empty,span", this._deleteSelector, ":empty"].join("")).each(function(e, t) {
                                t.parentNode && t.parentNode.removeChild(t);
                            }), n || t.find(_).each(function(e, t) {
                                t.parentNode && t.parentNode.removeChild(t);
                            }), t.find("table:empty, tbody:empty, tr:empty, ul:empty, ol:empty").remove();
                            var i = function(t, n) {
                                1 === n.nodeType ? $(n).contents().each(i) : 3 === n.nodeType && e.domUtils.isEmptyTextNode(n) && n.parentNode.removeChild(n);
                            };
                            i(0, this.rootElement);
                        } finally {
                            this.setIgnoreMutations(r);
                            var o = this._getCurrentRange(!0);
                            if (o && o.collapsed && !this._isDeletableElement(o.startContainer)) {
                                var a = e.domUtils.getFirstSelectableChild(o.startContainer, this._isDeletableWithParentOptions);
                                a && this._selection.setStart(a, !0, 0);
                            }
                        }
                    }
                },T.prototype._isValidFLITENode = function(e) {
                    if (!e || e.nodeType !== Node.ELEMENT_NODE) return !1;
                    var t = $(e);
                    return Boolean((t.hasClass(this._deleteClassName) || t.hasClass(this._insertClassName)) && t.attr(this.attributes.changeId) && t.attr(this.attributes.userId));
                },T.prototype._replaceNodeWithContent = function(e) {
                    var t = e[0], n = t && t.parentNode;
                    if (n && t.nodeType === Node.ELEMENT_NODE) {
                        var r = !1, i = e.contents();
                        i.length ? ("LI" === t.nodeName && n.nodeName in f && (r = !0, t === t.parentNode.firstChild && t.parentNode !== this.rootElement ? (e.parent().before(i), this._removeNode(t)) : t.previousSibling ? ($(t.previousSibling).append(i), this._removeNode(t)) : r = !1), r || e.replaceWith(i)) : e.remove();
                    }
                },T.prototype._restoreCaret = function(t) {
                    var n = t && t.node;
                    if (!n || !e.rangy.dom.isAncestorOf(this.rootElement, n, !1)) return !1;
                    try {
                        if (n.previousSibling !== t.prev || n.nextSibling !== t.next || n.parentNode !== t.parent) return !1;
                        if (n.nodeType === Node.TEXT_NODE) this._selection.setStart(n, !0, t.offset); else {
                            var r = this._getCurrentRange();
                            r && (r.setStartBefore(n), this._selection.addRange(r));
                        }
                        return !0;
                    } catch (e) {
                        return !1;
                    }
                },T.prototype._getNodeAtCaret = function(t, n) {
                    void 0 === t && (t = null), void 0 === n && (n = !1), t = t || this._getCurrentRange();
                    var r = { node: null, offset: 0, parent: null, prev: null, next: null, isBack: n };
                    if (!t || !t.collapsed) return r;

                    function i(e, t) {
                        return {
                            node: e,
                            offset: t,
                            prev: e.previousSibling,
                            next: e.nextSibling,
                            parent: e.parentNode,
                            isBack: n
                        };
                    }

                    if (t.endContainer.nodeType === Node.TEXT_NODE) {
                        if (t.endOffset || !n) return i(t.endContainer, n ? t.endOffset - 1 : t.endOffset);
                        var o = e.domUtils.getPreviousSelectableNode(t.endContainer, this._isDeletableOptions);
                        return o ? o.nodeType === Node.ELEMENT_NODE ? i(o, 0) : i(o, o.length) : r;
                    }
                    if (this._isOpaqueNode(t.endContainer)) return i(t.endContainer, 0);
                    if (t.endOffset || !n) {
                        var a = n ? t.endOffset - 1 : t.endOffset;
                        return a < 0 || a >= t.endContainer.childNodes.length ? 0 === a ? i(t.endContainer, 0) : r : i(t.endContainer.childNodes[a], a);
                    }
                    return r;
                },T.prototype._moveCaret = function(e, t) {
                    e && (t === i.Left ? this._selection.collapseBefore(e, this._isDeletableNoSelfOptions) : t === i.Right && this._selection.collapseAfter(e, this._isDeletableNoSelfOptions));
                },T.prototype._isDeletableElement = function(n, r) {
                    if (void 0 === r && (r = !1), !n) return !1;
                    if (n.nodeType === Node.TEXT_NODE && !e.domUtils.isEmptyTextNode(n)) return !0;
                    if (n.nodeType !== Node.ELEMENT_NODE) return !1;
                    if (k(n)) return !1;
                    for (var i, o = $(n), a = 0, s = S.length; a < s; ++a) if (i = S[a], o.is(i.selector)) {
                        if (i.type === t.Always) return !0;
                        if (i.type === t.NotEmpty) return r || !e.domUtils.hasNoTextOrStubContent(n);
                    }
                    return !1;
                },T.prototype._findDeletableParent = function(e, t) {
                    for (; e && e !== t;) {
                        if (e = e.parentNode, this._isDeletableElement(e, !0)) return e;
                        if (e.previousSibling) return null;
                    }
                    return null;
                },T.prototype._onRangeChanged = function(e) {
                    this._params.hostMethods && this._params.hostMethods.setHostRange && this._params.hostMethods.setHostRange(e.nativeRange);
                },T.prototype._collapseOnEdgeOf = function(t, n, r) {
                    var i,
                        o = !r && !e.domUtils.isStubElement(t) && e.domUtils.matchesSelector(t, d) && !this._isOpaqueNode(t.firstChild),
                        a = { root: this.rootElement, filter: this._isDeletableCallback, excludeSelf: !0 };
                    if (n) {
                        if (i = o && e.domUtils.getFirstSelectableChild(t, a)) return void this._selection.collapseAtStart(i);
                        this._selection.collapseAfter(t, this._isDeletableNoSelfOptions);
                    } else {
                        if (i = !r && o && e.domUtils.getLastSelectableChild(t, a)) return void this._selection.collapseAtEnd(i);
                        this._selection.collapseBefore(t, this._isDeletableOptions);
                    }
                },T;
            }()), R = function() {
                function e() {
                    this.ignoreCount = 0, this.timeout = null;
                }

                return e.prototype.set = function(e) {
                    var t = this;
                    this.timeout && clearTimeout(this.timeout), this.ignoreCount += e;
                    var n = this.ignoreCount;
                    this.timeout = setTimeout(function() {
                        t.timeout = null, t.ignoreCount = Math.max(t.ignoreCount - n, 0);
                    }, 35);
                }, e.prototype.shouldIgnore = function(e) {
                    var t = this.ignoreCount > 0;
                    return t && this.ignoreCount--, 0 === this.ignoreCount && this.timeout && (clearTimeout(this.timeout), this.timeout = null), t;
                }, e;
            }(), D = function() {
                function t() {
                    var t = this;
                    this._type = "none", this._data = null, this._timer = new e.utils.Timeout(function() {
                        t._type = "none";
                    }, 500);
                }

                return t.prototype.setContext = function(t, n) {
                    e.Logger.debug("set mutation context", t), this._type = t, this._data = n, this._timer.reset();
                }, Object.defineProperty(t.prototype, "data", {
                    get: function() {
                        return this._data;
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "type", {
                    get: function() {
                        var e = this._type;
                        return this._type = "none", e;
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "peekType", {
                    get: function() {
                        return this._type;
                    }, enumerable: !0, configurable: !0
                }), t;
            }();
            e.InlineChangeEditor = w;
        }(window.FLITE || window), Object.defineProperty(t, "__esModule", { value: !0 }), function(e) {
            e[e.OK = 0] = "OK", e[e.IGNORE = 1] = "IGNORE", e[e.IGNORE_ALL = 2] = "IGNORE_ALL";
        }(o || (o = {}));
        var d = {
                Events: {
                    INIT: "flite:init",
                    ACCEPT: "flite:accept",
                    REJECT: "flite:reject",
                    SHOW_HIDE: "flite:showHide",
                    TRACKING: "flite:tracking",
                    CHANGE: "flite:change",
                    HOVER_IN: "flite:hover-in",
                    HOVER_OUT: "flite:hover-out"
                },
                Commands: {
                    TOGGLE_TRACKING: "flite-toggletracking",
                    TOGGLE_SHOW: "flite-toggleshow",
                    ACCEPT_ALL: "flite-acceptall",
                    REJECT_ALL: "flite-rejectall",
                    ACCEPT_ONE: "flite-acceptone",
                    REJECT_ONE: "flite-rejectone",
                    TOGGLE_TOOLTIPS: "flite-toggletooltips"
                }
            }, c = {
                applyFormatting: 1,
                bold: 1,
                underline: 1,
                italic: 1,
                superscript: 1,
                strike: 1,
                subscript: 1,
                removeFormat: 1
            }, u = { cellMerge: 1, cellMergeRight: 1, cellMergeDown: 1, cellVerticalSplit: 1, cellHorizontalSplit: 1 },
            p = { indent: 1, outdent1: 1 }, h = { bulletedlist: 1, numberedlist: 1 }, f = {
                deleteClass: "ice-del",
                insertClass: "ice-ins",
                containerOnlyClass: "flite-container-only",
                attributes: {
                    lite2Created: "data-flite-created",
                    lite2Marked: "data-flite-marked",
                    changeId: "data-flite-cid",
                    userId: "data-userid",
                    userName: "data-username",
                    sessionId: "data-session-id",
                    changeData: "data-changedata",
                    time: "data-time",
                    lastTime: "data-last-change-time"
                },
                ignoredSelectors: "[data-track-changes-ignore],[data-cke-temp],[data-cke-bookmark],[data-cke-magic-line],.cke-temp,.flite-bookmark,.cke_widget_wrapper>*,.tippy-popper,.tippy-tooltip,.tippy-content,.tippy-arrow",
                ignoredInsertSelectors: "[data-cke-temp]",
                ignoredDeleteSelectors: "[data-cke-temp]",
                trackedInsertSelectors: "",
                trackedDeleteSelectors: "*.cke_widget_wrapper,*.cke_widget_inline,.cke_widget_placeholder,table,tr,br,td,ul,ol,li,p,div,span,img,code,strong,em,u,h1,h2,h3,h4,h5,tt,del,ins,sup,sub,kbd",
                opaqueSelectors: ".cke_widget_wrapper,.cke_widget_placeholder,.cke_widget_element",
                stylePrefix: "ice-cts",
                preserveOnPaste: "p"
            }, g = new RegExp("(?:^|s)(?:" + f.deleteClass + "|" + f.insertClass + ")(?:s|$)"), m = /^[\s\r\n]*$/,
            v = [{ regex: /[\s]*title=\"[^\"]+\"/g, replace: "" }, {
                regex: /[\s]*data-selected=\"[^\"]+\"/g,
                replace: ""
            }], y = [], _ = [CKEDITOR.CTRL + 88, CKEDITOR.CTRL + 120, CKEDITOR.SHIFT + 46];

        function N(e) {
            var t = e;
            return t && t.className && g.test(t.className);
        }

        function b(e, t) {
            e.className = t.className;
            var n = t.attributes;
            if (n && n.length) for (var r = 0, i = n.length; r < i; ++r) e.setAttribute(n[r].name, n[r].value);
            return e;
        }

        function C(e, t, n) {
            var r = "string" == typeof e ? t.ownerDocument.createTextNode(e) : e, i = t.ownerDocument.createElement(n);
            return i.appendChild(r), b(i, t), i.setAttribute(f.attributes.lite2Created, "1"), i;
        }

        function T(e) {
            if (!e || !e.length) return [];
            var t = [];
            return e.forEach(function(e) {
                t = t.concat(function e(t) {
                    var n, r;
                    if (t.nodeType === Node.ELEMENT_NODE) {
                        var i = t.childNodes;
                        for (n = 0; n < i.length; ++n) if (e(r = i[n]), N(r)) {
                            for (; r.firstChild;) t.insertBefore(r.firstChild, r);
                            t.removeChild(r);
                        }
                    }
                    return N(t) ? jQuery.makeArray(t.childNodes) : [t];
                }(e));
            }), t;
        }

        function E(e) {
            var t = e;
            return t && t.$ && "function" == typeof t.getDocument ? t.$ : e;
        }

        function S(e) {
            for (var t = y.length; t--;) {
                if (y[t].editor === e) return t;
            }
            return -1;
        }

        function O(e) {
            var t = S(e);
            return t >= 0 ? y[t] : null;
        }

        function k(e) {
            var t = O(e);
            return t && t.plugin;
        }

        !function(e, t) {
            !function() {
                var r = {
                    icons: "flite-acceptall,flite-acceptone,flite-rejectall,flite-rejectone,flite-toggleshow,flite-toggletracking",
                    hidpi: !0,
                    version: "1.2.04",
                    lang: ["en", "de", "fr", "pt-br", "nl", "no"],
                    init: function(r) {
                        if (function() {
                            var e = parseFloat(CKEDITOR.version),
                                t = (isNaN(e), CKEDITOR.dom.selection && CKEDITOR.dom.selection.prototype);
                            t && !t.isCollapsed && (t.isCollapsed = function() {
                                var e = this.getNative && this.getNative();
                                return e && e.isCollapsed;
                            });
                        }(), !O(r)) {
                            var i = this.path, o = new n(i), a = t.extend(!0, {}, r.config.flite || {});
                            e.Logger.config(a.debug), function(e, t) {
                                y.push({ plugin: t, editor: e });
                            }(r, o), o.init(r, a), r.on("destroy", function(t) {
                                try {
                                    var n = S(t);
                                    if (n >= 0) {
                                        var r = y[n];
                                        r.plugin && r.plugin.destroy(), y.splice(n, 1);
                                    }
                                } catch (t) {
                                    e.Logger.error("editor destroy:", t);
                                }
                            });
                        }
                    },
                    findPlugin: function(e) {
                        return k(e);
                    },
                    startNewSession: function(e) {
                        var t = k(e);
                        t ? t.startNewSession() : i("startNewSession: plugin not found");
                    }
                };
                CKEDITOR.plugins.add("flite", r);
            }();
            var n = function() {
                function n(t) {
                    this._path = t, this.editorFireMethod = null, this._domLoaded = !1, this._tracker = null, this._onReadyTimeout = null, this._isVisible = !0, this._liteCommandNames = [], this._isTracking = !0, this._trackingState = null, this._sessionId = null, this._onReadyInterval = null, this._canAcceptReject = !0, this._removeBindings = [], this._compositionTracker = e.utils.createCompositionStateTracker();
                }

                return Object.defineProperty(n.prototype, "path", {
                    get: function() {
                        return this._path;
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(n.prototype, "version", {
                    get: function() {
                        return "1.2.04";
                    }, enumerable: !0, configurable: !0
                }), n.prototype.init = function(n, r) {
                    var i = this;
                    e.Logger.debug("Plugin init start");
                    var o = n.lang.flite;
                    this._canAcceptReject = !0, this._removeBindings = [], r = e.pluginUtils.upgradeConfig(r), this._config = t.extend(!0, {}, e.pluginUtils.defaultConfig, { tooltips: { template: "%a " + o.BY + " %u %t" } }, r);
                    var a = "flite";
                    n.ui.addToolbarGroup(a), this._setPluginFeatures(n, f), this._changeTimeout = null, this._notifyChange = this._notifyChange.bind(this), this._notifyTextChange = this._notifyTextChange.bind(this), this.setUserInfo(null);
                    var s = !0 === r.acceptRejectInReadOnly, l = [{
                        command: d.Commands.TOGGLE_TRACKING,
                        exec: this._onToggleTracking,
                        title: o.TOGGLE_TRACKING,
                        trackingOnly: !1
                    }, {
                        command: d.Commands.TOGGLE_SHOW,
                        exec: this._onToggleShow,
                        title: o.TOGGLE_SHOW,
                        readOnly: !0
                    }, {
                        command: d.Commands.ACCEPT_ALL,
                        exec: this._onAcceptAll,
                        title: o.ACCEPT_ALL,
                        readOnly: s
                    }, {
                        command: d.Commands.REJECT_ALL,
                        exec: this._onRejectAll,
                        title: o.REJECT_ALL,
                        readOnly: s
                    }, {
                        command: d.Commands.ACCEPT_ONE,
                        exec: this._onAcceptOne,
                        title: o.ACCEPT_ONE,
                        readOnly: s
                    }, {
                        command: d.Commands.REJECT_ONE,
                        exec: this._onRejectOne,
                        title: o.REJECT_ONE,
                        readOnly: s
                    }, { command: d.Commands.TOGGLE_TOOLTIPS, title: "", exec: this._onToggleTooltips, readOnly: !0 }];
                    this._isTracking = !1 !== r.isTracking, n.on("contentDom", this._onDomLoaded.bind(this)), n.on("dataReady", this._onAfterSetData.bind(this));
                    var c = r.commands || [d.Commands.TOGGLE_TRACKING, d.Commands.TOGGLE_SHOW, d.Commands.ACCEPT_ALL, d.Commands.REJECT_ALL, d.Commands.ACCEPT_ONE, d.Commands.REJECT_ONE],
                        u = this;

                    function p(e) {
                        if (n.addCommand(e.command, {
                            exec: e.exec.bind(u),
                            readOnly: e.readOnly || !1,
                            startDisabled: e.command !== d.Commands.TOGGLE_SHOW && e.command !== d.Commands.TOGGLE_TRACKING
                        }), e.title && c.indexOf(e.command) >= 0) {
                            var t = u._commandNameToUIName(e.command);
                            n.ui.addButton(t, {
                                label: e.title,
                                command: e.command,
                                toolbar: a
                            }), !1 !== e.trackingOnly && u._liteCommandNames.push(e.command);
                        }
                    }

                    e.Logger.debug("FLITE Adding toolbar commands");
                    for (var h = 0, g = l.length; h < g; ++h) p(l[h]);
                    if (!1 !== r.contextMenu) {
                        if (n.addMenuItems) {
                            n.addMenuGroup(a, 50);
                            var m = {};
                            c.indexOf(d.Commands.ACCEPT_ONE) >= 0 && (m[d.Commands.ACCEPT_ONE] = {
                                label: o.ACCEPT_ONE,
                                command: d.Commands.ACCEPT_ONE,
                                group: a,
                                order: 1
                            }), c.indexOf(d.Commands.REJECT_ONE) >= 0 && (m[d.Commands.REJECT_ONE] = {
                                label: o.REJECT_ONE,
                                command: d.Commands.REJECT_ONE,
                                group: a,
                                order: 2
                            }), n.addMenuItems(m);
                        }
                        n.contextMenu && n.contextMenu.addListener(function(e) {
                            for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                            if (e && i._tracker && i._tracker.currentChangeNode(e.$)) {
                                var r = {};
                                return r[d.Commands.ACCEPT_ONE] = CKEDITOR.TRISTATE_OFF, r[d.Commands.REJECT_ONE] = CKEDITOR.TRISTATE_OFF, r;
                            }
                            return null;
                        });
                    }
                    e.Logger.debug("FLITE initializing tooltips"), this._initTooltips(), this._triggerOnReady();
                }, n.prototype.toggleTracking = function(t, n) {
                    e.Logger.debug("Toggle tracking to ", t), "boolean" == typeof n && (n = { notify: n }), n = n || {};
                    var r = void 0 === t ? !this._isTracking : t, i = this._editor, o = this._editor.lang.flite,
                        a = this._config.allowQuitWithChanges || n && n.force;
                    if (!r && this._isTracking && !a && (this._tracker && this._tracker.countChanges({ verify: !0 }))) return window.alert(o.PENDING_CHANGES);
                    this._isTracking = r, this._setCommandsState(this._liteCommandNames, r ? CKEDITOR.TRISTATE_OFF : CKEDITOR.TRISTATE_DISABLED), this._updateTrackingState(n.force), this._onTrackerChange(null), this.toggleShow(r, !1), this._setCommandsState(d.Commands.TOGGLE_TRACKING, r ? CKEDITOR.TRISTATE_ON : CKEDITOR.TRISTATE_OFF);
                    var s = i.ui.get(this._commandNameToUIName(d.Commands.TOGGLE_TRACKING));
                    s && this._setButtonTitle(s, r ? o.STOP_TRACKING : o.START_TRACKING), !1 !== n.notify && i.fire(d.Events.TRACKING, {
                        tracking: r,
                        flite: this
                    });
                }, n.prototype.toggleShow = function(t, n) {
                    e.Logger.debug("Toggle show to ", t);
                    var r = void 0 === t ? !this._isVisible : t, i = this._editor.lang.flite;
                    try {
                        this._isVisible = r, this._isTracking && this._setCommandsState(d.Commands.TOGGLE_SHOW, r ? CKEDITOR.TRISTATE_ON : CKEDITOR.TRISTATE_OFF), this._tracker && this._tracker.setShowChanges(r && this._isTracking);
                        var o = this._editor.ui.get(this._commandNameToUIName(d.Commands.TOGGLE_SHOW));
                        o && this._setButtonTitle(o, r ? i.HIDE_TRACKED : i.SHOW_TRACKED), !1 !== n && this._editor.fire(d.Events.SHOW_HIDE, {
                            show: r,
                            flite: this
                        });
                    } catch (t) {
                        e.Logger.error("toggleShow:", t);
                    }
                }, Object.defineProperty(n.prototype, "isVisible", {
                    get: function() {
                        return this._isVisible;
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(n.prototype, "isTracking", {
                    get: function() {
                        return this._isTracking;
                    }, enumerable: !0, configurable: !0
                }), n.prototype.acceptAll = function(e) {
                    this._tracker.acceptAll(e), this._editor.fire(d.Events.ACCEPT, { flite: this, options: e });
                }, n.prototype.rejectAll = function(e) {
                    this._tracker.rejectAll(e) && this._editor.fire(d.Events.REJECT, { flite: this, options: e });
                }, n.prototype.setUserInfo = function(n) {
                    e.Logger.debug("Set user info"), this._user = t.extend(!0, {}, {
                        name: String(this._config.userName || "user"),
                        id: String(this._config.userId || "0")
                    }, n && { name: n.name, id: n.id }), n && this._tracker && this._tracker.setCurrentUser(n);
                }, n.prototype.getUserInfo = function() {
                    return this._tracker ? this._tracker.getCurrentUser() : { name: "", id: "" };
                }, n.prototype.countChanges = function(e) {
                    return this._tracker && this._tracker.countChanges(e) || 0;
                }, n.prototype.enableAcceptReject = function(e) {
                    this._canAcceptReject = Boolean(e), this._onTrackerChange(null);
                }, n.prototype.startNewSession = function() {
                    var e = new Date;
                    this._sessionId = String.fromCharCode(65 + Math.round(26 * Math.random())) + e.getDate() + e.getDay() + e.getHours() + e.getMinutes() + e.getMilliseconds(), this._tracker && this._tracker.setSessionId(this._sessionId);
                }, n.prototype.getCleanMarkup = function(e) {
                    null !== e && void 0 !== e || (e = this._editor && this._editor.getData() || "");
                    for (var t = v.length - 1; t >= 0; --t) e = e.replace(v[t].regex, v[t].replace);
                    return e;
                }, n.prototype.getCleanText = function() {
                    var e = this._getDocument();
                    if (!e) return "";
                    var t = this._editor.getData(), n = e.createElement("DIV");
                    n.innerHTML = t;
                    var r = [];
                    r.push(""), this._getCleanText(n, r);
                    var i = r.join("\n");
                    return i = i.replace(/&nbsp(;)?/gi, " ");
                }, n.prototype.acceptChange = function(e) {
                    var t = E(e);
                    t && this._tracker && (this._tracker.acceptChange(t), this._editor.fire(d.Events.ACCEPT, { flite: this }), this._onSelectionChanged(null));
                }, n.prototype.rejectChange = function(e) {
                    var t = E(e);
                    t && this._tracker && this._tracker.rejectChange(t) && (this._editor.fire(d.Events.REJECT, { flite: this }), this._onSelectionChanged(null));
                }, n.prototype.getChanges = function(e) {
                    return this._tracker && this._tracker.getChanges(e) || {};
                }, n.prototype._getCleanText = function(e, t) {
                    var n = e.getAttribute("class");
                    if (!(n && n.indexOf(f.deleteClass) >= 0)) {
                        var r, i;
                        (r = e.nodeName && "BR" === e.nodeName.toUpperCase() || "block" === jQuery(e).css("display")) && (m.test(t[t.length - 1]) ? t[t.length - 1] = "" : t.push(""));
                        for (var o = e.firstChild; o; o = o.nextSibling) 3 === (i = o.nodeType) ? t[t.length - 1] += String(o.nodeValue) : 1 !== i && 9 !== i && 11 !== i || this._getCleanText(o, t);
                        r && t.push("");
                    }
                }, n.prototype._onDomLoaded = function(t) {
                    e.Logger.debug("FLITE DOM Loaded handler"), this._domLoaded = !0, this._editor = t.editor;
                    var n = this._editor.editable();
                    n.attachListener(n, "mousedown", this._onMouseDown, this, null, 1), n.attachListener(n, "keypress", this._onKeyPress, this, null, 1);
                    var r = this._getDocument();
                    r && (this._tooltipGuard.attach(r), r.body.addEventListener("mscontrolselect", function(e) {
                        return e.preventDefault(), !1;
                    })), this._hideTooltip(null), this._triggerOnReady();
                }, n.prototype.destroy = function() {
                    try {
                        this.toggleShow(!1, !1), this._compositionTracker && (this._compositionTracker.dispose(), this._compositionTracker = null), this._tooltipGuard && (this._tooltipGuard.detach(), this._tooltipGuard = null), this._releaseEventBindings();
                    } catch (t) {
                        e.Logger.error("while destroying editor", t);
                    }
                }, n.prototype.logEditorEvents = function(t) {
                    e.pluginUtils.logEditorEvents(this, this._editor, t);
                }, n.prototype._onReady = function() {
                    if (!this._domLoaded || !e.rangy.isInitialized()) return e.Logger.debug("FLITE on ready, domloaded", this._domLoaded, "Rangy state", e.rangy.isInitialized(), "interval", this._onReadyInterval), void (this._onReadyInterval || (e.Logger.debug("Setting interval to call onReady again"), this._onReadyInterval = window.setInterval(this._onReady.bind(this), 100)));
                    this._onReadyInterval && (e.Logger.debug("Clearing onready interval"), clearInterval(this._onReadyInterval), this._onReadyInterval = null), e.Logger.debug("Calling FLITE afterReady"), this._afterReady();
                }, n.prototype._getBody = function() {
                    try {
                        return this._editor.editable().$;
                    } catch (e) {
                        return null;
                    }
                }, n.prototype._getDocument = function() {
                    return this._editor && this._editor.document && this._editor.document.$;
                }, n.prototype._afterReady = function() {
                    var t = this, n = this._editor, r = n.document.$, o = this._getBody(), a = this._config,
                        s = this._hideTooltip.bind(this);
                    e.Logger.debug("Plugin after ready handler"), e.pluginUtils.loadCSS(r, this._config.styleUrls, this.path);
                    var l = n.applyStyle;
                    this._compositionTracker.attach(o), "function" != typeof l || l.__data_flite__ || (n.applyStyle = function() {
                        for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                        if (t._trackingState && t._tracker) {
                            var r = e[0];
                            r ? t._tracker.setMutationContext("add-style", { element: r && r.element }) : t._tracker.ignoreNextMutation("Overriding apply style");
                        }
                        l.apply(t._editor, e);
                    }, n.applyStyle.__data_flite__ = 1);
                    var c = n.removeStyle;
                    if ("function" != typeof c || c.__data_flite__ || (n.removeStyle = function() {
                        for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                        if (t._trackingState && t._tracker) {
                            var r = e[0];
                            r ? t._tracker.setMutationContext("remove-style", { element: r && r.element }) : t._tracker.ignoreNextMutation("Overriding remove style");
                        }
                        c.apply(t._editor, e);
                    }, n.removeStyle.__data_flite__ = 1), this._tracker && (e.Logger.debug("After ready disposing of previous tracker"), e.utils.isFLITEBody(o) || (this._tracker.toggleChangeTracking(!1, null), jQuery(this._tracker).unbind(), this._tracker.dispose(), this._tracker = null)), e.utils.markFLITEBody(o), !this._tracker) {
                        var u = {
                            element: o,
                            handleCut: !0,
                            timezone: this._config.timezone,
                            mergeBlocks: !1,
                            changeGroupTime: 200,
                            opaqueSelectors: void 0,
                            userStyles: a.userStyles,
                            changeTypes: {
                                insertType: { alias: f.insertClass, action: "Inserted" },
                                deleteType: { alias: f.deleteClass, action: "Deleted" }
                            },
                            hostMethods: {
                                getRootElement: function() {
                                    return t._getBody();
                                },
                                getHostRange: this._getHostRange.bind(this),
                                shouldIgnoreDeletedNode: function(e) {
                                    return !1;
                                },
                                getHostNativeRange: this._getHostNativeRange.bind(this),
                                setHostRange: this._setHostRange.bind(this),
                                beforeEdit: this._beforeEdit.bind(this),
                                beforeDelete: s,
                                beforeInsert: s,
                                getNewLineNodeName: this._getNewLineNodeName.bind(this),
                                updateLastUndo: this._updateLastUndo.bind(this),
                                getLocalizedString: this._getLocalizedString.bind(this),
                                shouldIgnoreMutation: this._shouldIgnoreMutation.bind(this),
                                getIMECompositionState: function() {
                                    return t._compositionTracker.isComposing ? 2 : 0;
                                },
                                onTrackingNodeCreated: this._onTrackingNodeCreated.bind(this),
                                onTrackingNodeRemoved: this._onTrackingNodeRemoved.bind(this)
                            },
                            attributes: void 0,
                            classes: void 0,
                            ignoredInsertSelectors: void 0,
                            ignoredDeleteSelectors: void 0,
                            trackedDeleteSelectors: void 0,
                            trackedInsertSelectors: void 0,
                            ignoredSelectors: f.ignoredSelectors + (this._config.ignoreSelectors ? "," + String(this._config.ignoreSelectors) : ""),
                            attrValuePrefix: void 0,
                            blockEl: void 0,
                            stylePrefix: void 0,
                            contentEditable: void 0,
                            isVisible: this._isVisible,
                            _changeData: void 0,
                            handleSelectAll: void 0
                        };
                        jQuery.extend(u, f), e.Logger.debug("Creating tracker"), this._tracker = new e.InlineChangeEditor(u);
                    }
                    try {
                        this.setUserInfo(this._user), this.toggleTracking(this._isTracking, { force: !0 }), this._updateTrackingState(!0), jQuery(this._tracker).on("change", this._onTrackerChange.bind(this)).on("textChange", this._onTrackerTextChanged.bind(this)), n.fire(d.Events.INIT, { flite: this }), this._onSelectionChanged(null), this._onTrackerChange(null);
                    } catch (n) {
                        i("FLITE plugin init:", n);
                    }
                }, n.prototype._addBinding = function(e, t, n, r) {
                    void 0 === r && (r = 10), this._removeBindings.push(e.on(t, n, this, null, r));
                }, n.prototype._releaseEventBindings = function() {
                    var e = this._removeBindings.filter(Boolean);
                    this._removeBindings = [];
                    for (var t = e.length - 1; t >= 0; --t) e[t].removeListener();
                }, n.prototype._onToggleShow = function() {
                    this.toggleShow();
                }, n.prototype._onDialogShow = function(e) {
                    var t = this;
                    if (this._isTracking) {
                        var n = e.data, r = n && n.getName && n.getName();
                        if ("find" === r || "replace" === r) var i = this._tracker.setIgnoreMutations(!0),
                            o = this._editor.on("dialogHide", function(e) {
                                var n = e.data;
                                (n && n.getName && n.getName()) === r && o.removeListener(), t._tracker.setIgnoreMutations(i);
                            });
                    }
                }, n.prototype._onKeyDown = function(e) {
                    if (this._tracker) {
                        var t = e.data.domEvent && e.data.domEvent.$;
                        return !t || this._tracker.handleEvent(t);
                    }
                    return !0;
                }, n.prototype._onToggleTracking = function() {
                    this.toggleTracking();
                }, n.prototype._onRejectAll = function() {
                    this.rejectAll(null);
                }, n.prototype._onAcceptAll = function() {
                    this.acceptAll(null);
                }, n.prototype._onAcceptOne = function() {
                    var e = this._tracker.currentChangeNode(this._getSelectedNode());
                    return this.acceptChange(e);
                }, n.prototype._onRejectOne = function() {
                    var e = this._tracker.currentChangeNode(this._getSelectedNode());
                    return this.rejectChange(e);
                }, n.prototype._onToggleTooltips = function() {
                }, n.prototype._getSelectedNode = function() {
                    var e = this._editor.getSelection(), t = e && e.getSelectedElement();
                    if (t) return t.$;
                    if (this._tracker) {
                        var n = this._tracker.getSelectedNode();
                        if (n) return n;
                    }
                    if (!e) return null;
                    var r = e && (e.isCollapsed() ? e.getStartElement() : e.getCommonAncestor());
                    return r && r.$ || null;
                }, n.prototype._setButtonTitle = function(e, t) {
                    jQuery("#" + e._.id).attr("title", t);
                }, n.prototype._onAfterCommand = function(t) {
                    var n = this._tracker && this._isTracking && t.data && t.data.name;
                    e.Logger.debug("after command", n), "undo" === n || "redo" === n ? this._tracker.reload(null) : "source" === n && this._updateTrackingState(!1);
                }, n.prototype._onBeforeCommand = function(t) {
                    var n = this;
                    if (this._tracker && this.isTracking) {
                        var i = t.data && t.data.name;
                        if (e.Logger.debug("before command", i), "cut" === i) a(this._editor, "copy") && this._tracker.prepareToCut(); else if ("copy" === i) a(this._editor, "copy") && this._tracker.prepareToCopy(); else if ("undo" === i || "redo" === i) {
                            var o = this._tracker.setIgnoreMutations(!0);
                            new r(this._editor, i, function(e) {
                                n._tracker && n._tracker.setIgnoreMutations(o);
                            });
                        } else if (i in h) {
                            var s = this._getSelectedNode(),
                                l = e.domUtils.matchesSelector(s, "li,ol,ul,li *,ol *, ul *");
                            this._tracker.setMutationContext(l ? "remove-list" : "insert-list", null);
                        } else i in u ? this._tracker.ignoreNextMutation("Command " + i) : i in p ? (this._tracker.setMutationContext("indent" === i ? "indent" : "outdent"), this._tracker.ignoreNextMutation("Command " + i)) : this._testFormattingCommand(t);
                    }
                }, n.prototype._onModeChange = function() {
                    this._updateTrackingState(!1), setTimeout(this._onTrackerChange.bind(this), 0);
                }, n.prototype._onKeyPress = function(e) {
                    (function(e) {
                        return _.indexOf(e) >= 0;
                    })(e && e.data && e.data.getKeystroke()) && e.stop();
                }, n.prototype._onMouseDown = function() {
                    this._hideTooltip(null);
                }, n.prototype._onBeforeGetData = function() {
                    if (this._hideTooltip(null), this._tracker) {
                        this._tracker.wrapAllTrackedNodes(null, ".cke_widget_wrapper");
                        var e = this._editor.editable().getData();
                        this._editor.setData(e, null, !0);
                    }
                }, n.prototype._onAfterSetData = function() {
                    if (this._hideTooltip(null), this._tracker && this._trackingState) {
                        var t = this._getBody();
                        this._processContent(), this._tracker.reload(e.utils.isFLITEBody(t) ? null : t);
                    }
                }, n.prototype._onReadOnly = function() {
                    this._updateTrackingState(!1);
                }, n.prototype._updateTrackingState = function(e) {
                    var t = this;
                    if (this._tracker) {
                        var n = this._isTracking && "wysiwyg" === this._editor.mode && !this._editor.readOnly;
                        if ((n !== this._trackingState || e) && (this._trackingState = n, this._tracker.toggleChangeTracking(n, this._getBody()), this._releaseEventBindings(), n)) {
                            var r = this._editor, i = this._editor.editable();
                            this._addBinding(r, "key", this._onKeyDown), this._addBinding(r, "afterCommandExec", this._onAfterCommand), this._addBinding(r, "beforeCommandExec", this._onBeforeCommand), this._addBinding(r, "paste", this._onInsertHtml, 1), this._addBinding(r, "beforeGetData", this._onBeforeGetData), this._addBinding(r, "beoreUndoImage", this._onBeforeGetData), this._addBinding(r, "mode", this._onModeChange, 1), this._addBinding(r, "readOnly", this._onReadOnly), this._addBinding(i, "keyup", this._onSelectionChanged), this._addBinding(i, "click", this._onSelectionChanged), this._addBinding(this._editor, "selectionChange", this._onSelectionChanged), this._addBinding(r, "insertHtml", this._onInsertHtml, 1), this._addBinding(r, "insertText", this._onInsertText, 1), this._addBinding(r, "insertElement", this._onInsertElement, 1), i.on("drop", function(e) {
                                t._tracker && t._tracker.ignoreNextMutation("Drop");
                            }), this._addBinding(r, "dialogShow", this._onDialogShow), this._removeBindings.push(i.on("beforeUndoImage", function() {
                                var e = t._tracker.setIgnoreMutations(!0), n = i.on("afterUndoImage", function() {
                                    t._tracker.setIgnoreMutations(e), n.removeListener();
                                });
                            }));
                        }
                    }
                }, n.prototype._prepareNodesForPaste = function(e) {
                    if (!(this._tracker && this._isTracking && e && e.length)) return null;
                    var t = null;
                    return e.length && (e = T(e), t = this._tracker.processNodesForInsert(e)), t;
                }, n.prototype._onInsertHtml = function(e) {
                    var n = this._getDocument(), r = e && e.data, i = r && r.dataValue;
                    if (!i) return !0;
                    var o = t(n.createElement("div")), a = this._editor.getSelection().getRanges(), s = a && a[0];
                    o.html(String(i));
                    var l = o.find("[data-flite-inserted]");
                    if (!l.length) {
                        var d = this._tracker.getCleanDOM(o[0], null);
                        if (!d.innerHTML) return !0;
                        var c = jQuery.makeArray(d.childNodes), u = this._prepareNodesForPaste(c);
                        if (u && u.length) try {
                            t(u[0]).attr("data-flite-inserted", "1");
                            var p, h = (u = this._tracker.wrapTrackedNodes(u, ".cke_widget_wrapper")).map(function(e) {
                                return e.nodeType === Node.TEXT_NODE ? e.data : e.outerHTML;
                            }).join("");
                            r.dataValue = h, this._tracker.setMutationContext("paste");
                            var f = function() {
                                p && (p.removeListener(), p = null), g && (clearTimeout(g), g = null);
                            };
                            p = this._editor.on("afterInsertHtml", f);
                            var g = setTimeout(f, 1);
                            if (s && s.collapsed) {
                                var m = this._editor.getSelection().getRanges();
                                (function(e, t) {
                                    if (!e || !t) return !1;
                                    if (e.collapsed !== t.collapsed) return !1;
                                    try {
                                        return e.startContainer.$ === t.startContainer.$ && e.endContainer.$ === t.endContainer.$ && e.startOffset === t.startOffset && e.endOffset === t.endOffset;
                                    } catch (e) {
                                        return !1;
                                    }
                                })(s, m && m[0]) && this._editor.getSelection().selectRanges(a);
                            }
                        } catch (e) {
                        }
                        return !0;
                    }
                    l.attr("data-flite-inserted", null);
                }, n.prototype._onInsertText = function(e) {
                    if (!(this._tracker && this._isTracking && e && e.data)) return !0;
                    var t = this._editor.editable(), n = t.transformPlainTextToHtml,
                        r = n ? n.call(t, e.data) : CKEDITOR.tools.transformPlainTextToHtml(e.data, this._editor.activeEnterMode);
                    return !r || (e.cancel(), e.stop(), this._editor.insertHtml(r), !1);
                }, n.prototype._onInsertElement = function(e) {
                    var t = e && e.data && e.data.$, n = this._getDocument();
                    if (!t || !n || !this._tracker) return !0;
                    this._tracker.markNodeForPendingInsertion(t);
                    var r = this._prepareNodesForPaste([t]);
                    if (this._tracker.prepareForInsertion(), !r || !r.length) return !0;
                    if (this._tracker.ignoreNextMutation("Insert element"), 1 === r.length) e.data.$ = r[0]; else {
                        var i = n.createElement("div");
                        r.forEach(function(e) {
                            i.appendChild(e);
                        }), e.cancel(), e.stop(), this._editor.insertHtml(i.innerHTML, "html", null);
                    }
                    return !0;
                }, n.prototype._setCommandsState = function(e, t) {
                    "string" == typeof e && (e = e.split(","));
                    for (var n = e.length - 1; n >= 0; --n) {
                        var r = this._editor.getCommand(e[n]);
                        r && r.setState(t);
                    }
                }, n.prototype._onSelectionChanged = function(e) {
                    var t = this._isTracking && this._tracker && this._tracker.isInsideChange(this._getSelectedNode(), !1) && this._canAcceptReject ? CKEDITOR.TRISTATE_OFF : CKEDITOR.TRISTATE_DISABLED;
                    this._setCommandsState([d.Commands.ACCEPT_ONE, d.Commands.REJECT_ONE], t), this._hideTooltip(null);
                }, n.prototype._onTrackerChange = function(e) {
                    var t = this._isTracking && this._tracker && this._tracker.hasChanges() && this._canAcceptReject ? CKEDITOR.TRISTATE_OFF : CKEDITOR.TRISTATE_DISABLED;
                    this._setCommandsState([d.Commands.ACCEPT_ALL, d.Commands.REJECT_ALL], t), this._onSelectionChanged(null), e && this._triggerChange();
                }, n.prototype._onTrackerTextChanged = function() {
                    this._editor.fire("change"), this._editor.fire("saveSnapshot");
                }, n.prototype._triggerChange = function() {
                    this._changeTimeout || (this._changeTimeout = setTimeout(this._notifyChange, 1));
                }, n.prototype._notifyChange = function() {
                    this._changeTimeout = null, this._editor.fire(d.Events.CHANGE, { flite: this });
                }, n.prototype._notifyTextChange = function() {
                    this._changeTimeout = null, this._editor.fire("change", { flite: this });
                }, n.prototype._processContent = function() {
                    var e = this._getBody(), n = (t(e), this);
                    f.attributes;

                    function r(r, i) {
                        var o = t(e).find(r), a = n._tracker.getWrappingTagName(null, i);
                        o.each(function(e, t) {
                            for (var n, r = t.firstChild, i = t.parentNode, o = []; r;) n = 3 === r.nodeType ? C(r, t, a) : b(r, t), o.push(n), r = r.nextSibling;
                            o.forEach(function(e) {
                                i.insertBefore(e, t);
                            }), i.removeChild(t);
                        });
                    }

                    e && (e.ownerDocument, r("ins." + f.insertClass, !0), r("del." + f.deleteClass, !1));
                }, n.prototype._commandNameToUIName = function(e) {
                    return e.replace(".", "_");
                }, n.prototype._setPluginFeatures = function(e, t) {
                    if (e && e.filter && e.filter.addFeature) {
                        var n = function(e) {
                            var t = {};
                            return e.forEach(function(e) {
                                t[e] = !0;
                            }), t;
                        };
                        try {
                            var r = void 0, o = void 0;
                            r = {}, (o = {}).classes = n([t.deleteClass, t.insertClass, t.stylePrefix + "*", t.containerOnlyClass]), o.attributes = n(function() {
                                var e = ["title", "data-cid", "data-flite-wrapper-change", "data-flite-wrapper-classes", "data-flite-wrapper-selector"];
                                for (var n in t.attributes) if (t.attributes.hasOwnProperty(n)) {
                                    var r = t.attributes[n];
                                    "string" == typeof r && 0 === r.indexOf("data-") && e.push(r);
                                }
                                return e;
                            }()), r[t.insertTag] = o, r[t.deleteTag] = CKEDITOR.tools.clone(o), r.ins = CKEDITOR.tools.clone(o), r.del = CKEDITOR.tools.clone(o), r["*"] = CKEDITOR.tools.clone(o), r.br = CKEDITOR.tools.clone(o), r.br.propertiesOnly = !0, r.span = CKEDITOR.tools.clone(o), r["span span.cke_widget_wrapper"] = !0, e.filter.addFeature({
                                name: "flite-features",
                                allowedContent: r
                            });
                        } catch (e) {
                            i(e);
                        }
                    }
                }, n.prototype._setHostRange = function(e) {
                    if (e && this._isTracking) try {
                        var t = this._editor && this._editor.getSelection();
                        if (t) {
                            var n = t.getRanges(), r = n && n[0];
                            r || (r = this._editor.createRange()), (r.startContainer && r.startContainer.$ !== e.startContainer || r.endContainer && r.endContainer.$ !== e.endContainer || r.startOffset !== e.startOffset || r.endOffset !== e.endOffset) && (r.setStart(new CKEDITOR.dom.node(e.startContainer), e.startOffset), r.setEnd(new CKEDITOR.dom.node(e.endContainer), e.endOffset), e.collapsed && r.collapse(!0), t.selectRanges([r]));
                        }
                    } catch (e) {
                        i("setHostRange: " + String(e));
                    }
                }, n.prototype._getHostNativeRange = function() {
                    var t;
                    try {
                        var n = this._editor && this._editor.getSelection();
                        if (!n) return null;
                        var r = n.getNative();
                        if (!(t = r && r.rangeCount && r.getRangeAt(0))) {
                            var i = n.getRanges();
                            if (i && i.length) {
                                var o = i[0];
                                (t = this._tracker.createNativeRange()).setStart(o.startContainer.$, o.startOffset), t.setEnd(o.endContainer.$, o.endOffset);
                            }
                        }
                    } catch (t) {
                        e.Logger.error("getHostNativeRange:", t);
                    }
                    return t;
                }, n.prototype._beforeEdit = function() {
                    this._editor.fire("saveSnapshot");
                }, n.prototype._getHostRange = function() {
                    var e = this._editor && this._editor.getSelection(), t = e && e.getRanges();
                    return t && t[0] || null;
                }, n.prototype._onTrackingNodeCreated = function(t) {
                    e.pluginUtils.addTooltipToNode({
                        node: t,
                        localize: this._getLocalizedString.bind(this),
                        change: this._tracker && this._tracker.getChangeForNode(t),
                        config: this._config.tooltips,
                        canShow: this._canShowCallback,
                        offset: function() {
                            return null;
                        },
                        now: e.utils.convertDateToTimezone(null, this._config.timezone)
                    });
                }, n.prototype._onTrackingNodeRemoved = function(t) {
                    e.pluginUtils.removeTooltipFromNode(t);
                }, n.prototype._hideTooltip = function(t) {
                    e.pluginUtils.hideTooltips(t || this._getDocument());
                }, n.prototype._beforeInsert = function() {
                    this._editor.fire("saveSnapshot");
                }, n.prototype._afterInsert = function() {
                    this._editor;
                }, n.prototype._getLocalizedString = function(e) {
                    return (this._editor && this._editor.lang.flite)[e] || e;
                }, n.prototype._updateLastUndo = function() {
                    this._editor && this._editor.undoManager.update();
                }, n.prototype._getNewLineNodeName = function() {
                    if (!this._editor) return null;
                    var e = this._editor.activeEnterMode;
                    return e == CKEDITOR.ENTER_P ? "P" : e == CKEDITOR.ENTER_DIV ? "DIV" : "BR";
                }, n.prototype._triggerOnReady = function() {
                    e.Logger.debug("FLITE Triggering onReady"), this._onReadyTimeout && (e.Logger.debug("clearing previous onready timeout"), clearTimeout(this._onReadyTimeout));
                    var t = this;
                    this._onReadyTimeout = setTimeout(function() {
                        e.Logger.debug("FLITE onReady timeout called"), t._onReadyTimeout = null, t._onReady();
                    }, 5);
                }, n.prototype._testFormattingCommand = function(e) {
                    var t = e && e.data && e.data.name;
                    t && t in c && this._tracker.ignoreNextMutation("Formatting command " + t);
                }, n.prototype._initTooltips = function() {
                    var t = this;
                    this._canShowCallback = function() {
                        return t._tooltipGuard.canShowTooltip;
                    }, this._tooltipGuard = new e.pluginUtils.TooltipGuard(750);
                }, n.prototype._shouldIgnoreNode = function(e, t) {
                    return e && 1 === e.nodeType && e.className.indexOf("scayt-misspell-word") >= 0 ? o.IGNORE_ALL : o.OK;
                }, n.prototype._shouldIgnoreMutation = function(e, t) {
                    var n = e[t];
                    if (!n) return o.IGNORE;
                    for (var r, i = n.addedNodes, a = 0; i && a < i.length; ++a) if ((r = this._shouldIgnoreNode(i[a], !0)) !== o.OK) return r;
                    for (var s = n.removedNodes, l = 0; s && l < s.length; ++l) if ((r = this._shouldIgnoreNode(s[l], !1)) !== o.OK) return r;
                    return o.OK;
                }, n;
            }(), r = function() {
                function e(t, n, r) {
                    var i, o, a = this;
                    this.callback = r, this.id = String(e.nextId++), e._guards[this.id] = this;
                    var s = function() {
                        i && (i.removeListener(), i = null), o && (clearTimeout(o), o = null), delete e._guards[a.id];
                    };
                    i = t.on("afterCommandExec", function(e) {
                        n && n !== e.data.name || (s(), r());
                    }), o = setTimeout(function() {
                        o = 0, s();
                    }, 1);
                }

                return e._guards = {}, e.nextId = 0, e;
            }();

            function i() {
                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                e.Logger.error.apply(e.Logger, t);
            }

            function a(e, t) {
                if (CKEDITOR.env.ie) return function(e, t) {
                    var n, r = e.document, i = r.getBody(), o = !1, a = function() {
                        o = !0;
                    };
                    return i.on(t, a), n = (CKEDITOR.env.version > 7 ? r.$ : r.$.selection.createRange()).execCommand(t, !1), i.removeListener(t, a), n || o;
                }(e, t);
                try {
                    return e.document.$.execCommand(t, !1, null);
                } catch (e) {
                    return !1;
                }
            }
        }(window.FLITE, window.jQuery);
    }();
}]);

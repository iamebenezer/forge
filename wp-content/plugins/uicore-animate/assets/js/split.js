"use strict";

function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _defineProperties(e, t) {
    for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, _toPropertyKey(i.key), i)
    }
}

function _createClass(e, t, n) {
    return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e
}

function _toPropertyKey(e) {
    e = _toPrimitive(e, "string");
    return "symbol" == _typeof(e) ? e : String(e)
}

function _toPrimitive(e, t) {
    if ("object" != _typeof(e) || !e) return e;
    var n = e[Symbol.toPrimitive];
    if (void 0 === n) return ("string" === t ? String : Number)(e);
    n = n.call(e, t || "default");
    if ("object" != _typeof(n)) return n;
    throw new TypeError("@@toPrimitive must return a primitive value.")
}

function _inherits(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(e, "prototype", {
        writable: !1
    }), t && _setPrototypeOf(e, t)
}

function _setPrototypeOf(e, t) {
    return (_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
        return e.__proto__ = t, e
    })(e, t)
}

function _createSuper(n) {
    var i = _isNativeReflectConstruct();
    return function() {
        var e, t = _getPrototypeOf(n);
        return _possibleConstructorReturn(this, i ? (e = _getPrototypeOf(this).constructor, Reflect.construct(t, arguments, e)) : t.apply(this, arguments))
    }
}

function _possibleConstructorReturn(e, t) {
    if (t && ("object" === _typeof(t) || "function" == typeof t)) return t;
    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(e)
}

function _assertThisInitialized(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function _isNativeReflectConstruct() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
    } catch (e) {
        return !1
    }
}

function _getPrototypeOf(e) {
    return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
    })(e)
}
var root = document,
    createText = root.createTextNode.bind(root);

function setProperty(e, t, n) {
    e.style.setProperty(t, n)
}

function appendChild(e, t) {
    return e.appendChild(t)
}

function createElement(e, t, n, i) {
    var r = root.createElement("span");
    return t && (r.className = t), n && (i || r.setAttribute("data-" + t, n), r.textContent = n), e && appendChild(e, r) || r
}

function getData(e, t) {
    return e.getAttribute("data-" + t)
}

function $(e, t) {
    return e && 0 != e.length ? e.nodeName ? [e] : [].slice.call(e[0].nodeName ? e : (t || root).querySelectorAll(e)) : []
}

function Array2D(e) {
    for (var t = []; e--;) t[e] = [];
    return t
}

function each(e, t) {
    e && e.some(t)
}

function selectFrom(t) {
    return function(e) {
        return t[e]
    }
}

function index(e, t, n) {
    var t = "--" + t,
        i = t + "-index";
    each(n, function(e, t) {
        Array.isArray(e) ? each(e, function(e) {
            setProperty(e, i, t)
        }) : setProperty(e, i, t)
    }), setProperty(e, t + "-total", n.length)
}
var plugins = {};

function resolvePlugins(t, e, n) {
    var i = n.indexOf(t);
    if (-1 == i) {
        n.unshift(t);
        var r = plugins[t];
        if (!r) throw new Error("plugin not loaded: " + t);
        each(r.depends, function(e) {
            resolvePlugins(e, t, n)
        })
    } else {
        r = n.indexOf(e);
        n.splice(i, 1), n.splice(r, 0, t)
    }
    return n
}

function createPlugin(e, t, n, i) {
    return {
        by: e,
        depends: t,
        key: n,
        split: i
    }
}

function resolve(e) {
    return resolvePlugins(e, 0, []).map(selectFrom(plugins))
}

function add(e) {
    plugins[e.by] = e
}

function splitText(e, n, i, r, o) {
    var s = 5 < arguments.length && void 0 !== arguments[5] && arguments[5],
        a = (e.normalize(), []),
        l = document.createDocumentFragment(),
        u = (r && a.push(e.previousSibling), []);
    return $(e.childNodes).some(function(e) {
        var t;
        1 === e.nodeType && (e.classList.contains("ui-e-highlight-image") || e.classList.contains("ui-e-highlight-icon") || "IMG" == e.nodeName) && a.push(e), e.tagName && !e.hasChildNodes() ? u.push(e) : e.childNodes && e.childNodes.length ? (u.push(e), a.push.apply(a, splitText(e, n, i, r, o))) : (t = (e = e.wholeText || "").trim()).length && (" " === e[0] && u.push(createText(" ")), each(t.split(i), function(e, t) {
            t && o && u.push(createElement(l, "whitespace", " ", o));
            t = createElement(l, n, e);
            s && "char" === n && ((e = root.createElement("span")).className = "ui-e-cut", e.appendChild(t), t = e), a.push(t), u.push(t)
        }), " " === e[e.length - 1]) && u.push(createText(" "))
    }), each(u, function(e) {
        appendChild(l, e)
    }), e.innerHTML = "", appendChild(e, l), a
}
var _ = 0;

function copy(e, t) {
    for (var n in t) e[n] = t[n];
    return e
}
var WORDS = "words",
    wordPlugin = createPlugin(WORDS, _, "word", function(e, t) {
        return splitText(e, "word", /\s+/, 0, 1, t.isCut)
    }),
    CHARS = "chars",
    charPlugin = createPlugin(CHARS, [WORDS], "char", function(e, n, t) {
        var i = [];
        return each(t[WORDS], function(e, t) {
            i.push.apply(i, splitText(e, "char", "", !1, n.whitespace && t, n.isCut))
        }), i
    });

function Splitting(t) {
    var s = (t = t || {}).key;
    return $(t.target || "[data-splitting]").map(function(i) {
        var e, r, o = i["🍌"];
        return !t.force && o || (o = i["🍌"] = {
            el: i
        }, e = resolve(e = (e = t.by || getData(i, "splitting")) && "true" != e ? e : CHARS), r = copy({}, t), each(e, function(e) {
            var t, n;
            e.split && (t = e.by, n = (s ? "-" + s : "") + e.key, e = e.split(i, r, o), n && index(i, n, e), o[t] = e, i.classList.add(t))
        }), i.classList.add("splitting")), o
    })
}

function html(e) {
    var t = (e = e || {}).target = createElement();
    return t.innerHTML = e.content, Splitting(e), t.outerHTML
}

function detectGrid(e, t, n) {
    var t = $(t.matching || e.children, e),
        i = {};
    return each(t, function(e) {
        var t = Math.round(e[n]);
        (i[t] || (i[t] = [])).push(e)
    }), Object.keys(i).map(Number).sort(byNumber).map(selectFrom(i))
}

function byNumber(e, t) {
    return e - t
}
Splitting.html = html, Splitting.add = add;
var linePlugin = createPlugin("lines", [WORDS], "line", function(e, t, n) {
    return detectGrid(e, {
        matching: n[WORDS]
    }, "offsetTop", t.isCut)
});
add(wordPlugin), add(charPlugin), add(linePlugin), window.addEventListener("DOMContentLoaded", function() {
    var t = function() {
        _inherits(t, elementorModules.frontend.handlers.Base);
        var e = _createSuper(t);

        function t() {
            return _classCallCheck(this, t), e.apply(this, arguments)
        }
        return _createClass(t, [{
            key: "bindEvents",
            value: function() {
                var e = this;
                "ui-split-animate" === this.getElementSettings("ui_animate_split") && (jQuery(this.$element).css("opacity", 0), elementorFrontend.isEditMode() ? (this.unsplit(), setTimeout(function() {
                    e.split()
                }, 20), setTimeout(function() {
                    e.animate()
                }, 80)) : (this.split(), this.animate()))
            }
        }, {
            key: "onElementChange",
            value: function(e) {
                var t = this,
                    n = "ui-split-animate" === this.getElementSettings("ui_animate_split");
                "ui_animate_split" === e && n && (this.unsplit(), setTimeout(function() {
                    t.split()
                }, 80)), "ui_animate_split_by" === e && n && (this.unsplit(), setTimeout(function() {
                    t.split()
                }, 80)), n ? -1 !== e.indexOf("ui_animate") && (this.unsplit(), setTimeout(function() {
                    t.split()
                }, 80), this.$element.find("." + this.get_split(!1)).attr("class", this.get_split(!1) + ""), setTimeout(function() {
                    t.animate()
                }, 100)) : "ui_animate_split" === e && this.unsplit()
            }
        }, {
            key: "split",
            value: function() {
                var e = !1,
                    t = this.get_split(),
                    n = this.$element.find(".elementor-widget-container > *:not(style):not(.ui-e-highlight-icon):not(.ui-e-highlight-image)"),
                    i = (0 == n.length && (this.$element.find(".elementor-widget-container").wrapInner('<div class="elementor-text-editor"></div>'), n = this.$element.find(".elementor-widget-container > *:not(style)")), this.getElementSettings("ui_animate_split_style")); - 1 !== i.indexOf("cut") && (i = i.replace(" cut", ""), n.addClass("ui-e-cut"), e = !0), Splitting({
                    target: n,
                    by: t,
                    key: "ui-",
                    isCut: e
                }), n.addClass("ui-e-" + i)
            }
        }, {
            key: "unsplit",
            value: function() {
                console.log("unsplit");
                var e = this.$element.find(".elementor-widget-container > *:not(style)")[0],
                    t = e.innerHTML;
                this.$element.find(".elementor-widget-container > *:not(style)")[0].innerHTML = t.replace(/<span class="whitespace">(\s)<\/span>/g, "$1").replace(/<span class="char" data-char="\S+" style="--char-index:\s?\d+;">(\S+)<\/span>/g, "$1").replace(/ aria-hidden="true"/g, "").replace(/<span class="word" data-word="\S+" style="--word-index:\s?\d+;( --line-index:\s?\d+;)?">(\S+)<\/span>/g, "$2"), e.classList.remove("splitting")
            }
        }, {
            key: "animate",
            value: function() {
                var e = this,
                    t = jQuery(this.$element),
                    n = this.getElementSettings("ui_animate_split_style"),
                    i = this.$element.find("." + this.get_split(!1)),
                    r = this.$element.find(".elementor-widget-container > *:not(style)");
                i.removeClass(n), r.addClass("ui-e-" + n), "undefined" != typeof Waypoint ? new Waypoint({
                    element: r,
                    handler: function(e) {
                        t.css("opacity", 1), setTimeout(function() {
                            r.removeClass("ui-e-" + n)
                        }, 100), i.addClass("ui-e-animated"), i.addClass(n)
                    },
                    offset: "90%"
                }) : (t.css("opacity", 1), setTimeout(function() {
                    r.removeClass("ui-e-" + n)
                }, 200), i.addClass("ui-e-animated"), i.addClass(n)), setTimeout(function() {
                    jQuery(e.$element).removeClass("elementor-invisible")
                }, 1)
            }
        }, {
            key: "get_split",
            value: function() {
                var e = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0],
                    t = this.getElementSettings("ui_animate_split_by");
                return e ? t : (t = "lines" === t ? "words" : t).slice(0, -1)
            }
        }]), t
    }();
    jQuery(window).on("elementor/frontend/init", function() {
        function e(e) {
            elementorFrontend.elementsHandler.addHandler(t, {
                $element: e
            })
        }
        elementorFrontend.hooks.addAction("frontend/element_ready/heading.default", e), elementorFrontend.hooks.addAction("frontend/element_ready/text-editor.default", e), elementorFrontend.hooks.addAction("frontend/element_ready/uicore-the-title.default", e), elementorFrontend.hooks.addAction("frontend/element_ready/uicore-page-description.default", e), elementorFrontend.hooks.addAction("frontend/element_ready/highlighted-text.default", e)
    })
}, !1);
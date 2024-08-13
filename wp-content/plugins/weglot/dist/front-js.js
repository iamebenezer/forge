! function(e) {
    var t = {};

    function o(n) {
        if (t[n]) return t[n].exports;
        var r = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(r.exports, r, r.exports, o), r.l = !0, r.exports
    }
    o.m = e, o.c = t, o.d = function(e, t, n) {
        o.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, o.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, o.t = function(e, t) {
        if (1 & t && (e = o(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (o.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var r in e) o.d(n, r, function(t) {
                return e[t]
            }.bind(null, r));
        return n
    }, o.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return o.d(t, "a", t), t
    }, o.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, o.p = "/dist/", o(o.s = 0)
}([function(e, t) {
    function o() {
        const e = document.querySelectorAll(".weglot-custom-switcher-ajax");
        Array.prototype.forEach.call(e, (function(e, t) {
            let o = null,
                n = null,
                r = null,
                l = null;
            "" !== e.getAttribute("data-wg-target") && (r = e.getAttribute("data-wg-target")), "" !== e.getAttribute("data-wg-sibling") && (l = e.getAttribute("data-wg-sibling")), r && (n = document.querySelector(r)), l && (o = document.querySelector(l)), null != n && null != o ? (n.insertBefore(e, o), e.classList.remove("weglot-custom-switcher-ajax")) : n && null == o ? (n.insertBefore(e, n.firstChild), e.classList.remove("weglot-custom-switcher-ajax")) : o && null == n && (o.parentNode.insertBefore(e, o), e.classList.remove("weglot-custom-switcher-ajax"))
        }))
    }
    setTimeout(() => {
        "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", () => o()) : o()
    }, 1500), document.addEventListener("DOMContentLoaded", (function(e) {
        const t = document.querySelector(".country-selector");
        if (!t) return;
        const o = function(e) {
                let t = 0,
                    o = 0;
                do {
                    t += e.offsetTop || 0, o += e.offsetLeft || 0, e = e.offsetParent
                } while (e);
                return {
                    top: t,
                    left: o
                }
            }(t).top,
            n = document.body,
            r = document.documentElement,
            l = Math.max(n.scrollHeight, n.offsetHeight, r.clientHeight, r.scrollHeight, r.offsetHeight),
            c = window.getComputedStyle(t).getPropertyValue("position");
        window.getComputedStyle(t).getPropertyValue("bottom"), window.getComputedStyle(t).getPropertyValue("top");
        if (("fixed" !== c && o > l / 2 || "fixed" === c && o > 100) && (t.className += " weglot-invert"), function() {
                try {
                    return window.frameElement || window.self !== window.top
                } catch (e) {
                    return !1
                }
            }()) {
            const e = document.querySelectorAll(".weglot-dropdown");
            null !== e && [].forEach.call(e, (function(e) {
                e.style.display = "none"
            }))
        }
        document.addEventListener("click", e => {
            null == e.target.closest(".country-selector.close_outside_click") && document.querySelectorAll(".country-selector.close_outside_click.weglot-dropdown input").forEach(e => {
                e.checked = !1
            })
        });
        const s = document.getElementsByClassName("country-selector"),
            u = e => !e.className.includes("closed");
        let i;
        if (s.length > 0) {
            const e = document.getElementsByClassName("wgcurrent");
            for (let t of s) {
                const o = {
                        ENTER: 13,
                        ESCAPE: 27,
                        ARROWUP: 38,
                        ARROWDOWN: 40
                    },
                    n = () => {
                        const {
                            bottom: e = 0
                        } = t.getBoundingClientRect();
                        return e > window.innerHeight / 2
                    },
                    r = () => {
                        t.classList.remove("closed"), document.querySelectorAll(".country-selector.weglot-dropdown input").checked = !0, t.setAttribute("aria-expanded", "true")
                    },
                    l = () => {
                        t.classList.add("closed"), document.querySelectorAll(".country-selector.weglot-dropdown input").checked = !1, t.setAttribute("aria-expanded", "false"), i && (i.classList.remove("focus"), i = null)
                    },
                    c = e => {
                        getLangNameFromCode(e);
                        t.setAttribute("aria-label", "Language selected: " + e)
                    },
                    s = () => {
                        t.classList.contains("closed") ? r() : l(), i && i.classList.remove("focus"), i = null
                    };
                t.addEventListener("keydown", n => {
                    if (n.keyCode !== o.ENTER) {
                        if (n.keyCode === o.ARROWDOWN || n.keyCode === o.ARROWUP) return n.preventDefault(), void d(n.keyCode);
                        n.keyCode === o.ESCAPE && u(t) && (n.preventDefault(), l(), t.focus())
                    } else {
                        for (var r = 0; r < e.length; r++) e[r].click();
                        if (i) {
                            const e = i.getAttribute("data-l");
                            c(e), t.focus()
                        }
                        s()
                    }
                }), t.addEventListener("mousedown", e => {
                    if (i) {
                        const e = i.getAttribute("data-l");
                        c(e), t.focus()
                    }
                    s()
                }), t.className.includes("open_hover") && (t.addEventListener("mouseenter", e => {
                    if (i) {
                        const e = i.getAttribute("data-l");
                        c(e), t.focus()
                    }
                    s(), t.querySelector("input.weglot_choice").checked = !0
                }), t.addEventListener("mouseleave", e => {
                    if (i) {
                        const e = i.getAttribute("data-l");
                        c(e), t.focus()
                    }
                    s(), t.querySelector("input.weglot_choice").checked = !1
                }));
                const d = c => {
                    const s = c === o.ARROWDOWN ? "nextSibling" : "previousSibling",
                        d = n();
                    if (i && u(t)) i[s] ? (i.classList.remove("focus"), i = i[s], i.classList.add("focus"), i.childNodes[0].focus(), i.scrollIntoView({
                        block: "center"
                    })) : (c === o.ARROWUP && !d || c === o.ARROWDOWN && d) && (l(), t.focus());
                    else {
                        const n = d ? "ul li.wg-li:last-child" : "ul li.wg-li";
                        for (var a = 0; a < e.length; a++) i = e[a].parentNode.querySelector(n);
                        if (!i) return;
                        i.classList.add("focus"), i.childNodes[0].focus(), i.scrollIntoView({
                            block: "center"
                        });
                        const l = c === o.ARROWUP && d || c === o.ARROWDOWN && !d;
                        !u(t) && l && r()
                    }
                }
            }
        }
        return !1
    }))
}]);
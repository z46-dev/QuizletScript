(self.webpackChunk_quizlet_web_index = self.webpackChunk_quizlet_web_index || []).push([
    ["immutable"], {
        "./node_modules/immutable/dist/immutable.js": function (t, e) {
            ! function (t) {
                "use strict";
                var e = "delete",
                    r = 5,
                    n = 1 << r,
                    i = n - 1,
                    o = {};

                function u() {
                    return {
                        value: !1
                    }
                }

                function s(t) {
                    t && (t.value = !0)
                }

                function a() {}

                function c(t) {
                    return void 0 === t.size && (t.size = t.__iterate(h)),
                        t.size
                }

                function f(t, e) {
                    if ("number" != typeof e) {
                        var r = e >>> 0;
                        if ("" + r !== e || 4294967295 === r)
                            return NaN;
                        e = r
                    }
                    return e < 0 ? c(t) + e : e
                }

                function h() {
                    return !0
                }

                function p(t, e, r) {
                    return (0 === t && !y(t) || void 0 !== r && t <= -r) && (void 0 === e || void 0 !== r && e >= r)
                }

                function _(t, e) {
                    return v(t, e, 0)
                }

                function l(t, e) {
                    return v(t, e, e)
                }

                function v(t, e, r) {
                    return void 0 === t ? r : y(t) ? e === 1 / 0 ? e : 0 | Math.max(0, e + t) : void 0 === e || e === t ? t : 0 | Math.min(e, t)
                }

                function y(t) {
                    return t < 0 || 0 === t && 1 / t == -1 / 0
                }
                var d = "@@__IMMUTABLE_ITERABLE__@@";

                function m(t) {
                    return Boolean(t && t[d])
                }
                var g = "@@__IMMUTABLE_KEYED__@@";

                function w(t) {
                    return Boolean(t && t[g])
                }
                var b = "@@__IMMUTABLE_INDEXED__@@";

                function S(t) {
                    return Boolean(t && t[b])
                }

                function z(t) {
                    return w(t) || S(t)
                }
                var I = function (t) {
                        return m(t) ? t : F(t)
                    },
                    O = function (t) {
                        function e(t) {
                            return w(t) ? t : G(t)
                        }
                        return t && (e.__proto__ = t),
                            e.prototype = Object.create(t && t.prototype),
                            e.prototype.constructor = e,
                            e
                    }(I),
                    x = function (t) {
                        function e(t) {
                            return S(t) ? t : Z(t)
                        }
                        return t && (e.__proto__ = t),
                            e.prototype = Object.create(t && t.prototype),
                            e.prototype.constructor = e,
                            e
                    }(I),
                    M = function (t) {
                        function e(t) {
                            return m(t) && !z(t) ? t : $(t)
                        }
                        return t && (e.__proto__ = t),
                            e.prototype = Object.create(t && t.prototype),
                            e.prototype.constructor = e,
                            e
                    }(I);
                I.Keyed = O,
                    I.Indexed = x,
                    I.Set = M;
                var E = "@@__IMMUTABLE_SEQ__@@";

                function j(t) {
                    return Boolean(t && t[E])
                }
                var q = "@@__IMMUTABLE_RECORD__@@";

                function D(t) {
                    return Boolean(t && t[q])
                }

                function k(t) {
                    return m(t) || D(t)
                }
                var A = "@@__IMMUTABLE_ORDERED__@@";

                function R(t) {
                    return Boolean(t && t[A])
                }
                var U = 0,
                    K = 1,
                    T = 2,
                    B = "function" == typeof Symbol && Symbol.iterator,
                    C = "@@iterator",
                    L = B || C,
                    N = function (t) {
                        this.next = t
                    };

                function P(t, e, r, n) {
                    var i = 0 === t ? e : 1 === t ? r : [e, r];
                    return n ? n.value = i : n = {
                            value: i,
                            done: !1
                        },
                        n
                }

                function W() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }

                function H(t) {
                    return !!Y(t)
                }

                function J(t) {
                    return t && "function" == typeof t.next
                }

                function V(t) {
                    var e = Y(t);
                    return e && e.call(t)
                }

                function Y(t) {
                    var e = t && (B && t[B] || t[C]);
                    if ("function" == typeof e)
                        return e
                }
                N.prototype.toString = function () {
                        return "[Iterator]"
                    },
                    N.KEYS = U,
                    N.VALUES = K,
                    N.ENTRIES = T,
                    N.prototype.inspect = N.prototype.toSource = function () {
                        return this.toString()
                    },
                    N.prototype[L] = function () {
                        return this
                    };
                var Q = Object.prototype.hasOwnProperty;

                function X(t) {
                    return !(!Array.isArray(t) && "string" != typeof t) || t && "object" == typeof t && Number.isInteger(t.length) && t.length >= 0 && (0 === t.length ? 1 === Object.keys(t).length : t.hasOwnProperty(t.length - 1))
                }
                var F = function (t) {
                        function e(t) {
                            return null == t ? it() : k(t) ? t.toSeq() : st(t)
                        }
                        return t && (e.__proto__ = t),
                            e.prototype = Object.create(t && t.prototype),
                            e.prototype.constructor = e,
                            e.prototype.toSeq = function () {
                                return this
                            },
                            e.prototype.toString = function () {
                                return this.__toString("Seq {", "}")
                            },
                            e.prototype.cacheResult = function () {
                                return !this._cache && this.__iterateUncached && (this._cache = this.entrySeq().toArray(),
                                        this.size = this._cache.length),
                                    this
                            },
                            e.prototype.__iterate = function (t, e) {
                                var r = this._cache;
                                if (r) {
                                    for (var n = r.length, i = 0; i !== n;) {
                                        var o = r[e ? n - ++i : i++];
                                        if (!1 === t(o[1], o[0], this))
                                            break
                                    }
                                    return i
                                }
                                return this.__iterateUncached(t, e)
                            },
                            e.prototype.__iterator = function (t, e) {
                                var r = this._cache;
                                if (r) {
                                    var n = r.length,
                                        i = 0;
                                    return new N((function () {
                                        if (i === n)
                                            return W();
                                        var o = r[e ? n - ++i : i++];
                                        return P(t, o[0], o[1])
                                    }))
                                }
                                return this.__iteratorUncached(t, e)
                            },
                            e
                    }(I),
                    G = function (t) {
                        function e(t) {
                            return null == t ? it().toKeyedSeq() : m(t) ? w(t) ? t.toSeq() : t.fromEntrySeq() : D(t) ? t.toSeq() : ot(t)
                        }
                        return t && (e.__proto__ = t),
                            e.prototype = Object.create(t && t.prototype),
                            e.prototype.constructor = e,
                            e.prototype.toKeyedSeq = function () {
                                return this
                            },
                            e
                    }(F),
                    Z = function (t) {
                        function e(t) {
                            return null == t ? it() : m(t) ? w(t) ? t.entrySeq() : t.toIndexedSeq() : D(t) ? t.toSeq().entrySeq() : ut(t)
                        }
                        return t && (e.__proto__ = t),
                            e.prototype = Object.create(t && t.prototype),
                            e.prototype.constructor = e,
                            e.of = function () {
                                return e(arguments)
                            },
                            e.prototype.toIndexedSeq = function () {
                                return this
                            },
                            e.prototype.toString = function () {
                                return this.__toString("Seq [", "]")
                            },
                            e
                    }(F),
                    $ = function (t) {
                        function e(t) {
                            return (m(t) && !z(t) ? t : Z(t)).toSetSeq()
                        }
                        return t && (e.__proto__ = t),
                            e.prototype = Object.create(t && t.prototype),
                            e.prototype.constructor = e,
                            e.of = function () {
                                return e(arguments)
                            },
                            e.prototype.toSetSeq = function () {
                                return this
                            },
                            e
                    }(F);
                F.isSeq = j,
                    F.Keyed = G,
                    F.Set = $,
                    F.Indexed = Z,
                    F.prototype[E] = !0;
                var tt = function (t) {
                        function e(t) {
                            this._array = t,
                                this.size = t.length
                        }
                        return t && (e.__proto__ = t),
                            e.prototype = Object.create(t && t.prototype),
                            e.prototype.constructor = e,
                            e.prototype.get = function (t, e) {
                                return this.has(t) ? this._array[f(this, t)] : e
                            },
                            e.prototype.__iterate = function (t, e) {
                                for (var r = this._array, n = r.length, i = 0; i !== n;) {
                                    var o = e ? n - ++i : i++;
                                    if (!1 === t(r[o], o, this))
                                        break
                                }
                                return i
                            },
                            e.prototype.__iterator = function (t, e) {
                                var r = this._array,
                                    n = r.length,
                                    i = 0;
                                return new N((function () {
                                    if (i === n)
                                        return W();
                                    var o = e ? n - ++i : i++;
                                    return P(t, o, r[o])
                                }))
                            },
                            e
                    }(Z),
                    et = function (t) {
                        function e(t) {
                            var e = Object.keys(t);
                            this._object = t,
                                this._keys = e,
                                this.size = e.length
                        }
                        return t && (e.__proto__ = t),
                            e.prototype = Object.create(t && t.prototype),
                            e.prototype.constructor = e,
                            e.prototype.get = function (t, e) {
                                return void 0 === e || this.has(t) ? this._object[t] : e
                            },
                            e.prototype.has = function (t) {
                                return Q.call(this._object, t)
                            },
                            e.prototype.__iterate = function (t, e) {
                                for (var r = this._object, n = this._keys, i = n.length, o = 0; o !== i;) {
                                    var u = n[e ? i - ++o : o++];
                                    if (!1 === t(r[u], u, this))
                                        break
                                }
                                return o
                            },
                            e.prototype.__iterator = function (t, e) {
                                var r = this._object,
                                    n = this._keys,
                                    i = n.length,
                                    o = 0;
                                return new N((function () {
                                    if (o === i)
                                        return W();
                                    var u = n[e ? i - ++o : o++];
                                    return P(t, u, r[u])
                                }))
                            },
                            e
                    }(G);
                et.prototype[A] = !0;
                var rt, nt = function (t) {
                    function e(t) {
                        this._collection = t,
                            this.size = t.length || t.size
                    }
                    return t && (e.__proto__ = t),
                        e.prototype = Object.create(t && t.prototype),
                        e.prototype.constructor = e,
                        e.prototype.__iterateUncached = function (t, e) {
                            if (e)
                                return this.cacheResult().__iterate(t, e);
                            var r = V(this._collection),
                                n = 0;
                            if (J(r))
                                for (var i; !(i = r.next()).done && !1 !== t(i.value, n++, this);)
                            ;
                            return n
                        },
                        e.prototype.__iteratorUncached = function (t, e) {
                            if (e)
                                return this.cacheResult().__iterator(t, e);
                            var r = V(this._collection);
                            if (!J(r))
                                return new N(W);
                            var n = 0;
                            return new N((function () {
                                var e = r.next();
                                return e.done ? e : P(t, n++, e.value)
                            }))
                        },
                        e
                }(Z);

                function it() {
                    return rt || (rt = new tt([]))
                }

                function ot(t) {
                    var e = Array.isArray(t) ? new tt(t) : H(t) ? new nt(t) : void 0;
                    if (e)
                        return e.fromEntrySeq();
                    if ("object" == typeof t)
                        return new et(t);
                    throw new TypeError("Expected Array or collection object of [k, v] entries, or keyed object: " + t)
                }

                function ut(t) {
                    var e = at(t);
                    if (e)
                        return e;
                    throw new TypeError("Expected Array or collection object of values: " + t)
                }

                function st(t) {
                    var e = at(t);
                    if (e)
                        return e;
                    if ("object" == typeof t)
                        return new et(t);
                    throw new TypeError("Expected Array or collection object of values, or keyed object: " + t)
                }

                function at(t) {
                    return X(t) ? new tt(t) : H(t) ? new nt(t) : void 0
                }
                var ct = "@@__IMMUTABLE_MAP__@@";

                function ft(t) {
                    return Boolean(t && t[ct])
                }

                function ht(t) {
                    return ft(t) && R(t)
                }

                function pt(t) {
                    return Boolean(t && "function" == typeof t.equals && "function" == typeof t.hashCode)
                }

                function _t(t, e) {
                    if (t === e || t != t && e != e)
                        return !0;
                    if (!t || !e)
                        return !1;
                    if ("function" == typeof t.valueOf && "function" == typeof e.valueOf) {
                        if ((t = t.valueOf()) === (e = e.valueOf()) || t != t && e != e)
                            return !0;
                        if (!t || !e)
                            return !1
                    }
                    return !!(pt(t) && pt(e) && t.equals(e))
                }
                var lt = "function" == typeof Math.imul && -2 === Math.imul(4294967295, 2) ? Math.imul : function (t, e) {
                    var r = 65535 & (t |= 0),
                        n = 65535 & (e |= 0);
                    return r * n + ((t >>> 16) * n + r * (e >>> 16) << 16 >>> 0) | 0
                };

                function vt(t) {
                    return t >>> 1 & 1073741824 | 3221225471 & t
                }
                var yt = Object.prototype.valueOf;

                function dt(t) {
                    switch (typeof t) {
                    case "boolean":
                        return t ? 1108378657 : 1108378656;
                    case "number":
                        return mt(t);
                    case "string":
                        return t.length > jt ? gt(t) : wt(t);
                    case "object":
                    case "function":
                        return null === t ? 1108378658 : "function" == typeof t.hashCode ? vt(t.hashCode(t)) : (t.valueOf !== yt && "function" == typeof t.valueOf && (t = t.valueOf(t)),
                            bt(t));
                    case "undefined":
                        return 1108378659;
                    default:
                        if ("function" == typeof t.toString)
                            return wt(t.toString());
                        throw new Error("Value type " + typeof t + " cannot be hashed.")
                    }
                }

                function mt(t) {
                    if (t != t || t === 1 / 0)
                        return 0;
                    var e = 0 | t;
                    for (e !== t && (e ^= 4294967295 * t); t > 4294967295;)
                        e ^= t /= 4294967295;
                    return vt(e)
                }

                function gt(t) {
                    var e = kt[t];
                    return void 0 === e && (e = wt(t),
                            Dt === qt && (Dt = 0,
                                kt = {}),
                            Dt++,
                            kt[t] = e),
                        e
                }

                function wt(t) {
                    for (var e = 0, r = 0; r < t.length; r++)
                        e = 31 * e + t.charCodeAt(r) | 0;
                    return vt(e)
                }

                function bt(t) {
                    var e;
                    if (xt && void 0 !== (e = Ot.get(t)))
                        return e;
                    if (void 0 !== (e = t[Et]))
                        return e;
                    if (!zt) {
                        if (void 0 !== (e = t.propertyIsEnumerable && t.propertyIsEnumerable[Et]))
                            return e;
                        if (void 0 !== (e = It(t)))
                            return e
                    }
                    if (e = ++Mt,
                        1073741824 & Mt && (Mt = 0),
                        xt)
                        Ot.set(t, e);
                    else {
                        if (void 0 !== St && !1 === St(t))
                            throw new Error("Non-extensible objects are not allowed as keys.");
                        if (zt)
                            Object.defineProperty(t, Et, {
                                enumerable: !1,
                                configurable: !1,
                                writable: !1,
                                value: e
                            });
                        else if (void 0 !== t.propertyIsEnumerable && t.propertyIsEnumerable === t.constructor.prototype.propertyIsEnumerable)
                            t.propertyIsEnumerable = function () {
                                return this.constructor.prototype.propertyIsEnumerable.apply(this, arguments)
                            },
                            t.propertyIsEnumerable[Et] = e;
                        else {
                            if (void 0 === t.nodeType)
                                throw new Error("Unable to set a non-enumerable property on object.");
                            t[Et] = e
                        }
                    }
                    return e
                }
                var St = Object.isExtensible,
                    zt = function () {
                        try {
                            return Object.defineProperty({}, "@", {}),
                                !0
                        } catch (t) {
                            return !1
                        }
                    }();

                function It(t) {
                    if (t && t.nodeType > 0)
                        switch (t.nodeType) {
                        case 1:
                            return t.uniqueID;
                        case 9:
                            return t.documentElement && t.documentElement.uniqueID
                        }
                }
                var Ot, xt = "function" == typeof WeakMap;
                xt && (Ot = new WeakMap);
                var Mt = 0,
                    Et = "__immutablehash__";
                "function" == typeof Symbol && (Et = Symbol(Et));
                var jt = 16,
                    qt = 255,
                    Dt = 0,
                    kt = {},
                    At = function (t) {
                        function e(t, e) {
                            this._iter = t,
                                this._useKeys = e,
                                this.size = t.size
                        }
                        return t && (e.__proto__ = t),
                            e.prototype = Object.create(t && t.prototype),
                            e.prototype.constructor = e,
                            e.prototype.get = function (t, e) {
                                return this._iter.get(t, e)
                            },
                            e.prototype.has = function (t) {
                                return this._iter.has(t)
                            },
                            e.prototype.valueSeq = function () {
                                return this._iter.valueSeq()
                            },
                            e.prototype.reverse = function () {
                                var t = this,
                                    e = Ct(this, !0);
                                return this._useKeys || (e.valueSeq = function () {
                                        return t._iter.toSeq().reverse()
                                    }),
                                    e
                            },
                            e.prototype.map = function (t, e) {
                                var r = this,
                                    n = Bt(this, t, e);
                                return this._useKeys || (n.valueSeq = function () {
                                        return r._iter.toSeq().map(t, e)
                                    }),
                                    n
                            },
                            e.prototype.__iterate = function (t, e) {
                                var r = this;
                                return this._iter.__iterate((function (e, n) {
                                    return t(e, n, r)
                                }), e)
                            },
                            e.prototype.__iterator = function (t, e) {
                                return this._iter.__iterator(t, e)
                            },
                            e
                    }(G);
                At.prototype[A] = !0;
                var Rt = function (t) {
                        function e(t) {
                            this._iter = t,
                                this.size = t.size
                        }
                        return t && (e.__proto__ = t),
                            e.prototype = Object.create(t && t.prototype),
                            e.prototype.constructor = e,
                            e.prototype.includes = function (t) {
                                return this._iter.includes(t)
                            },
                            e.prototype.__iterate = function (t, e) {
                                var r = this,
                                    n = 0;
                                return e && c(this),
                                    this._iter.__iterate((function (i) {
                                        return t(i, e ? r.size - ++n : n++, r)
                                    }), e)
                            },
                            e.prototype.__iterator = function (t, e) {
                                var r = this,
                                    n = this._iter.__iterator(K, e),
                                    i = 0;
                                return e && c(this),
                                    new N((function () {
                                        var o = n.next();
                                        return o.done ? o : P(t, e ? r.size - ++i : i++, o.value, o)
                                    }))
                            },
                            e
                    }(Z),
                    Ut = function (t) {
                        function e(t) {
                            this._iter = t,
                                this.size = t.size
                        }
                        return t && (e.__proto__ = t),
                            e.prototype = Object.create(t && t.prototype),
                            e.prototype.constructor = e,
                            e.prototype.has = function (t) {
                                return this._iter.includes(t)
                            },
                            e.prototype.__iterate = function (t, e) {
                                var r = this;
                                return this._iter.__iterate((function (e) {
                                    return t(e, e, r)
                                }), e)
                            },
                            e.prototype.__iterator = function (t, e) {
                                var r = this._iter.__iterator(K, e);
                                return new N((function () {
                                    var e = r.next();
                                    return e.done ? e : P(t, e.value, e.value, e)
                                }))
                            },
                            e
                    }($),
                    Kt = function (t) {
                        function e(t) {
                            this._iter = t,
                                this.size = t.size
                        }
                        return t && (e.__proto__ = t),
                            e.prototype = Object.create(t && t.prototype),
                            e.prototype.constructor = e,
                            e.prototype.entrySeq = function () {
                                return this._iter.toSeq()
                            },
                            e.prototype.__iterate = function (t, e) {
                                var r = this;
                                return this._iter.__iterate((function (e) {
                                    if (e) {
                                        ee(e);
                                        var n = m(e);
                                        return t(n ? e.get(1) : e[1], n ? e.get(0) : e[0], r)
                                    }
                                }), e)
                            },
                            e.prototype.__iterator = function (t, e) {
                                var r = this._iter.__iterator(K, e);
                                return new N((function () {
                                    for (;;) {
                                        var e = r.next();
                                        if (e.done)
                                            return e;
                                        var n = e.value;
                                        if (n) {
                                            ee(n);
                                            var i = m(n);
                                            return P(t, i ? n.get(0) : n[0], i ? n.get(1) : n[1], e)
                                        }
                                    }
                                }))
                            },
                            e
                    }(G);

                function Tt(t) {
                    var e = ne(t);
                    return e._iter = t,
                        e.size = t.size,
                        e.flip = function () {
                            return t
                        },
                        e.reverse = function () {
                            var e = t.reverse.apply(this);
                            return e.flip = function () {
                                    return t.reverse()
                                },
                                e
                        },
                        e.has = function (e) {
                            return t.includes(e)
                        },
                        e.includes = function (e) {
                            return t.has(e)
                        },
                        e.cacheResult = ie,
                        e.__iterateUncached = function (e, r) {
                            var n = this;
                            return t.__iterate((function (t, r) {
                                return !1 !== e(r, t, n)
                            }), r)
                        },
                        e.__iteratorUncached = function (e, r) {
                            if (e === T) {
                                var n = t.__iterator(e, r);
                                return new N((function () {
                                    var t = n.next();
                                    if (!t.done) {
                                        var e = t.value[0];
                                        t.value[0] = t.value[1],
                                            t.value[1] = e
                                    }
                                    return t
                                }))
                            }
                            return t.__iterator(e === K ? U : K, r)
                        },
                        e
                }

                function Bt(t, e, r) {
                    var n = ne(t);
                    return n.size = t.size,
                        n.has = function (e) {
                            return t.has(e)
                        },
                        n.get = function (n, i) {
                            var u = t.get(n, o);
                            return u === o ? i : e.call(r, u, n, t)
                        },
                        n.__iterateUncached = function (n, i) {
                            var o = this;
                            return t.__iterate((function (t, i, u) {
                                return !1 !== n(e.call(r, t, i, u), i, o)
                            }), i)
                        },
                        n.__iteratorUncached = function (n, i) {
                            var o = t.__iterator(T, i);
                            return new N((function () {
                                var i = o.next();
                                if (i.done)
                                    return i;
                                var u = i.value,
                                    s = u[0];
                                return P(n, s, e.call(r, u[1], s, t), i)
                            }))
                        },
                        n
                }

                function Ct(t, e) {
                    var r = this,
                        n = ne(t);
                    return n._iter = t,
                        n.size = t.size,
                        n.reverse = function () {
                            return t
                        },
                        t.flip && (n.flip = function () {
                            var e = Tt(t);
                            return e.reverse = function () {
                                    return t.flip()
                                },
                                e
                        }),
                        n.get = function (r, n) {
                            return t.get(e ? r : -1 - r, n)
                        },
                        n.has = function (r) {
                            return t.has(e ? r : -1 - r)
                        },
                        n.includes = function (e) {
                            return t.includes(e)
                        },
                        n.cacheResult = ie,
                        n.__iterate = function (r, n) {
                            var i = this,
                                o = 0;
                            return n && c(t),
                                t.__iterate((function (t, u) {
                                    return r(t, e ? u : n ? i.size - ++o : o++, i)
                                }), !n)
                        },
                        n.__iterator = function (n, i) {
                            var o = 0;
                            i && c(t);
                            var u = t.__iterator(T, !i);
                            return new N((function () {
                                var t = u.next();
                                if (t.done)
                                    return t;
                                var s = t.value;
                                return P(n, e ? s[0] : i ? r.size - ++o : o++, s[1], t)
                            }))
                        },
                        n
                }

                function Lt(t, e, r, n) {
                    var i = ne(t);
                    return n && (i.has = function (n) {
                                var i = t.get(n, o);
                                return i !== o && !!e.call(r, i, n, t)
                            },
                            i.get = function (n, i) {
                                var u = t.get(n, o);
                                return u !== o && e.call(r, u, n, t) ? u : i
                            }
                        ),
                        i.__iterateUncached = function (i, o) {
                            var u = this,
                                s = 0;
                            return t.__iterate((function (t, o, a) {
                                    if (e.call(r, t, o, a))
                                        return s++,
                                            i(t, n ? o : s - 1, u)
                                }), o),
                                s
                        },
                        i.__iteratorUncached = function (i, o) {
                            var u = t.__iterator(T, o),
                                s = 0;
                            return new N((function () {
                                for (;;) {
                                    var o = u.next();
                                    if (o.done)
                                        return o;
                                    var a = o.value,
                                        c = a[0],
                                        f = a[1];
                                    if (e.call(r, f, c, t))
                                        return P(i, n ? c : s++, f, o)
                                }
                            }))
                        },
                        i
                }

                function Nt(t, e, r) {
                    var n = Je().asMutable();
                    return t.__iterate((function (i, o) {
                            n.update(e.call(r, i, o, t), 0, (function (t) {
                                return t + 1
                            }))
                        })),
                        n.asImmutable()
                }

                function Pt(t, e, r) {
                    var n = w(t),
                        i = (R(t) ? Ur() : Je()).asMutable();
                    t.__iterate((function (o, u) {
                        i.update(e.call(r, o, u, t), (function (t) {
                            return (t = t || []).push(n ? [u, o] : o),
                                t
                        }))
                    }));
                    var o = re(t);
                    return i.map((function (e) {
                        return te(t, o(e))
                    })).asImmutable()
                }

                function Wt(t, e, r, n) {
                    var i = t.size;
                    if (p(e, r, i))
                        return t;
                    var o = _(e, i),
                        u = l(r, i);
                    if (o != o || u != u)
                        return Wt(t.toSeq().cacheResult(), e, r, n);
                    var s, a = u - o;
                    a == a && (s = a < 0 ? 0 : a);
                    var c = ne(t);
                    return c.size = 0 === s ? s : t.size && s || void 0,
                        !n && j(t) && s >= 0 && (c.get = function (e, r) {
                            return (e = f(this, e)) >= 0 && e < s ? t.get(e + o, r) : r
                        }),
                        c.__iterateUncached = function (e, r) {
                            var i = this;
                            if (0 === s)
                                return 0;
                            if (r)
                                return this.cacheResult().__iterate(e, r);
                            var u = 0,
                                a = !0,
                                c = 0;
                            return t.__iterate((function (t, r) {
                                    if (!a || !(a = u++ < o))
                                        return c++,
                                            !1 !== e(t, n ? r : c - 1, i) && c !== s
                                })),
                                c
                        },
                        c.__iteratorUncached = function (e, r) {
                            if (0 !== s && r)
                                return this.cacheResult().__iterator(e, r);
                            if (0 === s)
                                return new N(W);
                            var i = t.__iterator(e, r),
                                u = 0,
                                a = 0;
                            return new N((function () {
                                for (; u++ < o;)
                                    i.next();
                                if (++a > s)
                                    return W();
                                var t = i.next();
                                return n || e === K || t.done ? t : P(e, a - 1, e === U ? void 0 : t.value[1], t)
                            }))
                        },
                        c
                }

                function Ht(t, e, r) {
                    var n = ne(t);
                    return n.__iterateUncached = function (n, i) {
                            var o = this;
                            if (i)
                                return this.cacheResult().__iterate(n, i);
                            var u = 0;
                            return t.__iterate((function (t, i, s) {
                                    return e.call(r, t, i, s) && ++u && n(t, i, o)
                                })),
                                u
                        },
                        n.__iteratorUncached = function (n, i) {
                            var o = this;
                            if (i)
                                return this.cacheResult().__iterator(n, i);
                            var u = t.__iterator(T, i),
                                s = !0;
                            return new N((function () {
                                if (!s)
                                    return W();
                                var t = u.next();
                                if (t.done)
                                    return t;
                                var i = t.value,
                                    a = i[0],
                                    c = i[1];
                                return e.call(r, c, a, o) ? n === T ? t : P(n, a, c, t) : (s = !1,
                                    W())
                            }))
                        },
                        n
                }

                function Jt(t, e, r, n) {
                    var i = ne(t);
                    return i.__iterateUncached = function (i, o) {
                            var u = this;
                            if (o)
                                return this.cacheResult().__iterate(i, o);
                            var s = !0,
                                a = 0;
                            return t.__iterate((function (t, o, c) {
                                    if (!s || !(s = e.call(r, t, o, c)))
                                        return a++,
                                            i(t, n ? o : a - 1, u)
                                })),
                                a
                        },
                        i.__iteratorUncached = function (i, o) {
                            var u = this;
                            if (o)
                                return this.cacheResult().__iterator(i, o);
                            var s = t.__iterator(T, o),
                                a = !0,
                                c = 0;
                            return new N((function () {
                                var t, o, f;
                                do {
                                    if ((t = s.next()).done)
                                        return n || i === K ? t : P(i, c++, i === U ? void 0 : t.value[1], t);
                                    var h = t.value;
                                    o = h[0],
                                        f = h[1],
                                        a && (a = e.call(r, f, o, u))
                                } while (a);
                                return i === T ? t : P(i, o, f, t)
                            }))
                        },
                        i
                }

                function Vt(t, e) {
                    var r = w(t),
                        n = [t].concat(e).map((function (t) {
                            return m(t) ? r && (t = O(t)) : t = r ? ot(t) : ut(Array.isArray(t) ? t : [t]),
                                t
                        })).filter((function (t) {
                            return 0 !== t.size
                        }));
                    if (0 === n.length)
                        return t;
                    if (1 === n.length) {
                        var i = n[0];
                        if (i === t || r && w(i) || S(t) && S(i))
                            return i
                    }
                    var o = new tt(n);
                    return r ? o = o.toKeyedSeq() : S(t) || (o = o.toSetSeq()),
                        (o = o.flatten(!0)).size = n.reduce((function (t, e) {
                            if (void 0 !== t) {
                                var r = e.size;
                                if (void 0 !== r)
                                    return t + r
                            }
                        }), 0),
                        o
                }

                function Yt(t, e, r) {
                    var n = ne(t);
                    return n.__iterateUncached = function (i, o) {
                            if (o)
                                return this.cacheResult().__iterate(i, o);
                            var u = 0,
                                s = !1;

                            function a(t, c) {
                                t.__iterate((function (t, o) {
                                    return (!e || c < e) && m(t) ? a(t, c + 1) : (u++,
                                            !1 === i(t, r ? o : u - 1, n) && (s = !0)),
                                        !s
                                }), o)
                            }
                            return a(t, 0),
                                u
                        },
                        n.__iteratorUncached = function (n, i) {
                            if (i)
                                return this.cacheResult().__iterator(n, i);
                            var o = t.__iterator(n, i),
                                u = [],
                                s = 0;
                            return new N((function () {
                                for (; o;) {
                                    var t = o.next();
                                    if (!1 === t.done) {
                                        var a = t.value;
                                        if (n === T && (a = a[1]),
                                            e && !(u.length < e) || !m(a))
                                            return r ? t : P(n, s++, a, t);
                                        u.push(o),
                                            o = a.__iterator(n, i)
                                    } else
                                        o = u.pop()
                                }
                                return W()
                            }))
                        },
                        n
                }

                function Qt(t, e, r) {
                    var n = re(t);
                    return t.toSeq().map((function (i, o) {
                        return n(e.call(r, i, o, t))
                    })).flatten(!0)
                }

                function Xt(t, e) {
                    var r = ne(t);
                    return r.size = t.size && 2 * t.size - 1,
                        r.__iterateUncached = function (r, n) {
                            var i = this,
                                o = 0;
                            return t.__iterate((function (t) {
                                    return (!o || !1 !== r(e, o++, i)) && !1 !== r(t, o++, i)
                                }), n),
                                o
                        },
                        r.__iteratorUncached = function (r, n) {
                            var i, o = t.__iterator(K, n),
                                u = 0;
                            return new N((function () {
                                return (!i || u % 2) && (i = o.next()).done ? i : u % 2 ? P(r, u++, e) : P(r, u++, i.value, i)
                            }))
                        },
                        r
                }

                function Ft(t, e, r) {
                    e || (e = oe);
                    var n = w(t),
                        i = 0,
                        o = t.toSeq().map((function (e, n) {
                            return [n, e, i++, r ? r(e, n, t) : e]
                        })).valueSeq().toArray();
                    return o.sort((function (t, r) {
                            return e(t[3], r[3]) || t[2] - r[2]
                        })).forEach(n ? function (t, e) {
                                o[e].length = 2
                            } :
                            function (t, e) {
                                o[e] = t[1]
                            }
                        ),
                        n ? G(o) : S(t) ? Z(o) : $(o)
                }

                function Gt(t, e, r) {
                    if (e || (e = oe),
                        r) {
                        var n = t.toSeq().map((function (e, n) {
                            return [e, r(e, n, t)]
                        })).reduce((function (t, r) {
                            return Zt(e, t[1], r[1]) ? r : t
                        }));
                        return n && n[0]
                    }
                    return t.reduce((function (t, r) {
                        return Zt(e, t, r) ? r : t
                    }))
                }

                function Zt(t, e, r) {
                    var n = t(r, e);
                    return 0 === n && r !== e && (null == r || r != r) || n > 0
                }

                function $t(t, e, r, n) {
                    var i = ne(t),
                        o = new tt(r).map((function (t) {
                            return t.size
                        }));
                    return i.size = n ? o.max() : o.min(),
                        i.__iterate = function (t, e) {
                            for (var r, n = this.__iterator(K, e), i = 0; !(r = n.next()).done && !1 !== t(r.value, i++, this);)
                            ;
                            return i
                        },
                        i.__iteratorUncached = function (t, i) {
                            var o = r.map((function (t) {
                                    return t = I(t),
                                        V(i ? t.reverse() : t)
                                })),
                                u = 0,
                                s = !1;
                            return new N((function () {
                                var r;
                                return s || (r = o.map((function (t) {
                                            return t.next()
                                        })),
                                        s = n ? r.every((function (t) {
                                            return t.done
                                        })) : r.some((function (t) {
                                            return t.done
                                        }))),
                                    s ? W() : P(t, u++, e.apply(null, r.map((function (t) {
                                        return t.value
                                    }))))
                            }))
                        },
                        i
                }

                function te(t, e) {
                    return t === e ? t : j(t) ? e : t.constructor(e)
                }

                function ee(t) {
                    if (t !== Object(t))
                        throw new TypeError("Expected [K, V] tuple: " + t)
                }

                function re(t) {
                    return w(t) ? O : S(t) ? x : M
                }

                function ne(t) {
                    return Object.create((w(t) ? G : S(t) ? Z : $).prototype)
                }

                function ie() {
                    return this._iter.cacheResult ? (this._iter.cacheResult(),
                        this.size = this._iter.size,
                        this) : F.prototype.cacheResult.call(this)
                }

                function oe(t, e) {
                    return void 0 === t && void 0 === e ? 0 : void 0 === t ? 1 : void 0 === e ? -1 : t > e ? 1 : t < e ? -1 : 0
                }

                function ue(t, e) {
                    e = e || 0;
                    for (var r = Math.max(0, t.length - e), n = new Array(r), i = 0; i < r; i++)
                        n[i] = t[i + e];
                    return n
                }

                function se(t, e) {
                    if (!t)
                        throw new Error(e)
                }

                function ae(t) {
                    se(t !== 1 / 0, "Cannot perform this action with an infinite size.")
                }

                function ce(t) {
                    if (X(t) && "string" != typeof t)
                        return t;
                    if (R(t))
                        return t.toArray();
                    throw new TypeError("Invalid keyPath: expected Ordered Collection or Array: " + t)
                }

                function fe(t) {
                    return t && ("function" != typeof t.constructor || "Object" === t.constructor.name)
                }

                function he(t) {
                    return "object" == typeof t && (k(t) || Array.isArray(t) || fe(t))
                }

                function pe(t) {
                    try {
                        return "string" == typeof t ? JSON.stringify(t) : String(t)
                    } catch (e) {
                        return JSON.stringify(t)
                    }
                }

                function _e(t, e) {
                    return k(t) ? t.has(e) : he(t) && Q.call(t, e)
                }

                function le(t, e, r) {
                    return k(t) ? t.get(e, r) : _e(t, e) ? "function" == typeof t.get ? t.get(e) : t[e] : r
                }

                function ve(t) {
                    if (Array.isArray(t))
                        return ue(t);
                    var e = {};
                    for (var r in t)
                        Q.call(t, r) && (e[r] = t[r]);
                    return e
                }

                function ye(t, e) {
                    if (!he(t))
                        throw new TypeError("Cannot update non-data-structure value: " + t);
                    if (k(t)) {
                        if (!t.remove)
                            throw new TypeError("Cannot update immutable value without .remove() method: " + t);
                        return t.remove(e)
                    }
                    if (!Q.call(t, e))
                        return t;
                    var r = ve(t);
                    return Array.isArray(r) ? r.splice(e, 1) : delete r[e],
                        r
                }

                function de(t, e, r) {
                    if (!he(t))
                        throw new TypeError("Cannot update non-data-structure value: " + t);
                    if (k(t)) {
                        if (!t.set)
                            throw new TypeError("Cannot update immutable value without .set() method: " + t);
                        return t.set(e, r)
                    }
                    if (Q.call(t, e) && r === t[e])
                        return t;
                    var n = ve(t);
                    return n[e] = r,
                        n
                }

                function me(t, e, r, n) {
                    n || (n = r,
                        r = void 0);
                    var i = ge(k(t), t, ce(e), 0, r, n);
                    return i === o ? r : i
                }

                function ge(t, e, r, n, i, u) {
                    var s = e === o;
                    if (n === r.length) {
                        var a = s ? i : e,
                            c = u(a);
                        return c === a ? e : c
                    }
                    if (!s && !he(e))
                        throw new TypeError("Cannot update within non-data-structure value in path [" + r.slice(0, n).map(pe) + "]: " + e);
                    var f = r[n],
                        h = s ? o : le(e, f, o),
                        p = ge(h === o ? t : k(h), h, r, n + 1, i, u);
                    return p === h ? e : p === o ? ye(e, f) : de(s ? t ? nr() : {} : e, f, p)
                }

                function we(t, e, r) {
                    return me(t, e, o, (function () {
                        return r
                    }))
                }

                function be(t, e) {
                    return we(this, t, e)
                }

                function Se(t, e) {
                    return me(t, e, (function () {
                        return o
                    }))
                }

                function ze(t) {
                    return Se(this, t)
                }

                function Ie(t, e, r, n) {
                    return me(t, [e], r, n)
                }

                function Oe(t, e, r) {
                    return 1 === arguments.length ? t(this) : Ie(this, t, e, r)
                }

                function xe(t, e, r) {
                    return me(this, t, e, r)
                }

                function Me() {
                    for (var t = [], e = arguments.length; e--;)
                        t[e] = arguments[e];
                    return je(this, t)
                }

                function Ee(t) {
                    for (var e = [], r = arguments.length - 1; r-- > 0;)
                        e[r] = arguments[r + 1];
                    if ("function" != typeof t)
                        throw new TypeError("Invalid merger function: " + t);
                    return je(this, e, t)
                }

                function je(t, e, r) {
                    for (var n = [], i = 0; i < e.length; i++) {
                        var u = O(e[i]);
                        0 !== u.size && n.push(u)
                    }
                    return 0 === n.length ? t : 0 !== t.toSeq().size || t.__ownerID || 1 !== n.length ? t.withMutations((function (t) {
                        for (var e = r ? function (e, n) {
                                    Ie(t, n, o, (function (t) {
                                        return t === o ? e : r(t, e, n)
                                    }))
                                } :
                                function (e, r) {
                                    t.set(r, e)
                                }, i = 0; i < n.length; i++)
                            n[i].forEach(e)
                    })) : t.constructor(n[0])
                }

                function qe(t) {
                    for (var e = [], r = arguments.length - 1; r-- > 0;)
                        e[r] = arguments[r + 1];
                    return Ue(t, e)
                }

                function De(t, e) {
                    for (var r = [], n = arguments.length - 2; n-- > 0;)
                        r[n] = arguments[n + 2];
                    return Ue(e, r, t)
                }

                function ke(t) {
                    for (var e = [], r = arguments.length - 1; r-- > 0;)
                        e[r] = arguments[r + 1];
                    return Re(t, e)
                }

                function Ae(t, e) {
                    for (var r = [], n = arguments.length - 2; n-- > 0;)
                        r[n] = arguments[n + 2];
                    return Re(e, r, t)
                }

                function Re(t, e, r) {
                    return Ue(t, e, Ke(r))
                }

                function Ue(t, e, r) {
                    if (!he(t))
                        throw new TypeError("Cannot merge into non-data-structure value: " + t);
                    if (k(t))
                        return "function" == typeof r && t.mergeWith ? t.mergeWith.apply(t, [r].concat(e)) : t.merge ? t.merge.apply(t, e) : t.concat.apply(t, e);
                    for (var n = Array.isArray(t), i = t, o = n ? x : O, u = n ? function (e) {
                                i === t && (i = ve(i)),
                                    i.push(e)
                            } :
                            function (e, n) {
                                var o = Q.call(i, n),
                                    u = o && r ? r(i[n], e, n) : e;
                                o && u === i[n] || (i === t && (i = ve(i)),
                                    i[n] = u)
                            }, s = 0; s < e.length; s++)
                        o(e[s]).forEach(u);
                    return i
                }

                function Ke(t) {
                    function e(r, n, i) {
                        return he(r) && he(n) ? Ue(r, [n], e) : t ? t(r, n, i) : n
                    }
                    return e
                }

                function Te() {
                    for (var t = [], e = arguments.length; e--;)
                        t[e] = arguments[e];
                    return Re(this, t)
                }

                function Be(t) {
                    for (var e = [], r = arguments.length - 1; r-- > 0;)
                        e[r] = arguments[r + 1];
                    return Re(this, e, t)
                }

                function Ce(t) {
                    for (var e = [], r = arguments.length - 1; r-- > 0;)
                        e[r] = arguments[r + 1];
                    return me(this, t, nr(), (function (t) {
                        return Ue(t, e)
                    }))
                }

                function Le(t) {
                    for (var e = [], r = arguments.length - 1; r-- > 0;)
                        e[r] = arguments[r + 1];
                    return me(this, t, nr(), (function (t) {
                        return Re(t, e)
                    }))
                }

                function Ne(t) {
                    var e = this.asMutable();
                    return t(e),
                        e.wasAltered() ? e.__ensureOwner(this.__ownerID) : this
                }

                function Pe() {
                    return this.__ownerID ? this : this.__ensureOwner(new a)
                }

                function We() {
                    return this.__ensureOwner()
                }

                function He() {
                    return this.__altered
                }
                Rt.prototype.cacheResult = At.prototype.cacheResult = Ut.prototype.cacheResult = Kt.prototype.cacheResult = ie;
                var Je = function (t) {
                    function e(e) {
                        return null == e ? nr() : ft(e) && !R(e) ? e : nr().withMutations((function (r) {
                            var n = t(e);
                            ae(n.size),
                                n.forEach((function (t, e) {
                                    return r.set(e, t)
                                }))
                        }))
                    }
                    return t && (e.__proto__ = t),
                        e.prototype = Object.create(t && t.prototype),
                        e.prototype.constructor = e,
                        e.of = function () {
                            for (var t = [], e = arguments.length; e--;)
                                t[e] = arguments[e];
                            return nr().withMutations((function (e) {
                                for (var r = 0; r < t.length; r += 2) {
                                    if (r + 1 >= t.length)
                                        throw new Error("Missing value for key: " + t[r]);
                                    e.set(t[r], t[r + 1])
                                }
                            }))
                        },
                        e.prototype.toString = function () {
                            return this.__toString("Map {", "}")
                        },
                        e.prototype.get = function (t, e) {
                            return this._root ? this._root.get(0, void 0, t, e) : e
                        },
                        e.prototype.set = function (t, e) {
                            return ir(this, t, e)
                        },
                        e.prototype.remove = function (t) {
                            return ir(this, t, o)
                        },
                        e.prototype.deleteAll = function (t) {
                            var e = I(t);
                            return 0 === e.size ? this : this.withMutations((function (t) {
                                e.forEach((function (e) {
                                    return t.remove(e)
                                }))
                            }))
                        },
                        e.prototype.clear = function () {
                            return 0 === this.size ? this : this.__ownerID ? (this.size = 0,
                                this._root = null,
                                this.__hash = void 0,
                                this.__altered = !0,
                                this) : nr()
                        },
                        e.prototype.sort = function (t) {
                            return Ur(Ft(this, t))
                        },
                        e.prototype.sortBy = function (t, e) {
                            return Ur(Ft(this, e, t))
                        },
                        e.prototype.map = function (t, e) {
                            return this.withMutations((function (r) {
                                r.forEach((function (n, i) {
                                    r.set(i, t.call(e, n, i, r))
                                }))
                            }))
                        },
                        e.prototype.__iterator = function (t, e) {
                            return new $e(this, t, e)
                        },
                        e.prototype.__iterate = function (t, e) {
                            var r = this,
                                n = 0;
                            return this._root && this._root.iterate((function (e) {
                                    return n++,
                                        t(e[1], e[0], r)
                                }), e),
                                n
                        },
                        e.prototype.__ensureOwner = function (t) {
                            return t === this.__ownerID ? this : t ? rr(this.size, this._root, t, this.__hash) : 0 === this.size ? nr() : (this.__ownerID = t,
                                this.__altered = !1,
                                this)
                        },
                        e
                }(O);
                Je.isMap = ft;
                var Ve = Je.prototype;
                Ve[ct] = !0,
                    Ve[e] = Ve.remove,
                    Ve.removeAll = Ve.deleteAll,
                    Ve.setIn = be,
                    Ve.removeIn = Ve.deleteIn = ze,
                    Ve.update = Oe,
                    Ve.updateIn = xe,
                    Ve.merge = Ve.concat = Me,
                    Ve.mergeWith = Ee,
                    Ve.mergeDeep = Te,
                    Ve.mergeDeepWith = Be,
                    Ve.mergeIn = Ce,
                    Ve.mergeDeepIn = Le,
                    Ve.withMutations = Ne,
                    Ve.wasAltered = He,
                    Ve.asImmutable = We,
                    Ve["@@transducer/init"] = Ve.asMutable = Pe,
                    Ve["@@transducer/step"] = function (t, e) {
                        return t.set(e[0], e[1])
                    },
                    Ve["@@transducer/result"] = function (t) {
                        return t.asImmutable()
                    };
                var Ye = function (t, e) {
                    this.ownerID = t,
                        this.entries = e
                };
                Ye.prototype.get = function (t, e, r, n) {
                        for (var i = this.entries, o = 0, u = i.length; o < u; o++)
                            if (_t(r, i[o][0]))
                                return i[o][1];
                        return n
                    },
                    Ye.prototype.update = function (t, e, r, n, i, u, a) {
                        for (var c = i === o, f = this.entries, h = 0, p = f.length; h < p && !_t(n, f[h][0]); h++)
                        ;
                        var _ = h < p;
                        if (_ ? f[h][1] === i : c)
                            return this;
                        if (s(a),
                            (c || !_) && s(u),
                            !c || 1 !== f.length) {
                            if (!_ && !c && f.length >= vr)
                                return ar(t, f, n, i);
                            var l = t && t === this.ownerID,
                                v = l ? f : ue(f);
                            return _ ? c ? h === p - 1 ? v.pop() : v[h] = v.pop() : v[h] = [n, i] : v.push([n, i]),
                                l ? (this.entries = v,
                                    this) : new Ye(t, v)
                        }
                    };
                var Qe = function (t, e, r) {
                    this.ownerID = t,
                        this.bitmap = e,
                        this.nodes = r
                };
                Qe.prototype.get = function (t, e, n, o) {
                        void 0 === e && (e = dt(n));
                        var u = 1 << ((0 === t ? e : e >>> t) & i),
                            s = this.bitmap;
                        return 0 == (s & u) ? o : this.nodes[hr(s & u - 1)].get(t + r, e, n, o)
                    },
                    Qe.prototype.update = function (t, e, n, u, s, a, c) {
                        void 0 === n && (n = dt(u));
                        var f = (0 === e ? n : n >>> e) & i,
                            h = 1 << f,
                            p = this.bitmap,
                            _ = 0 != (p & h);
                        if (!_ && s === o)
                            return this;
                        var l = hr(p & h - 1),
                            v = this.nodes,
                            y = _ ? v[l] : void 0,
                            d = or(y, t, e + r, n, u, s, a, c);
                        if (d === y)
                            return this;
                        if (!_ && d && v.length >= yr)
                            return fr(t, v, p, f, d);
                        if (_ && !d && 2 === v.length && ur(v[1 ^ l]))
                            return v[1 ^ l];
                        if (_ && d && 1 === v.length && ur(d))
                            return d;
                        var m = t && t === this.ownerID,
                            g = _ ? d ? p : p ^ h : p | h,
                            w = _ ? d ? pr(v, l, d, m) : lr(v, l, m) : _r(v, l, d, m);
                        return m ? (this.bitmap = g,
                            this.nodes = w,
                            this) : new Qe(t, g, w)
                    };
                var Xe = function (t, e, r) {
                    this.ownerID = t,
                        this.count = e,
                        this.nodes = r
                };
                Xe.prototype.get = function (t, e, n, o) {
                        void 0 === e && (e = dt(n));
                        var u = (0 === t ? e : e >>> t) & i,
                            s = this.nodes[u];
                        return s ? s.get(t + r, e, n, o) : o
                    },
                    Xe.prototype.update = function (t, e, n, u, s, a, c) {
                        void 0 === n && (n = dt(u));
                        var f = (0 === e ? n : n >>> e) & i,
                            h = s === o,
                            p = this.nodes,
                            _ = p[f];
                        if (h && !_)
                            return this;
                        var l = or(_, t, e + r, n, u, s, a, c);
                        if (l === _)
                            return this;
                        var v = this.count;
                        if (_) {
                            if (!l && --v < dr)
                                return cr(t, p, v, f)
                        } else
                            v++;
                        var y = t && t === this.ownerID,
                            d = pr(p, f, l, y);
                        return y ? (this.count = v,
                            this.nodes = d,
                            this) : new Xe(t, v, d)
                    };
                var Fe = function (t, e, r) {
                    this.ownerID = t,
                        this.keyHash = e,
                        this.entries = r
                };
                Fe.prototype.get = function (t, e, r, n) {
                        for (var i = this.entries, o = 0, u = i.length; o < u; o++)
                            if (_t(r, i[o][0]))
                                return i[o][1];
                        return n
                    },
                    Fe.prototype.update = function (t, e, r, n, i, u, a) {
                        void 0 === r && (r = dt(n));
                        var c = i === o;
                        if (r !== this.keyHash)
                            return c ? this : (s(a),
                                s(u),
                                sr(this, t, e, r, [n, i]));
                        for (var f = this.entries, h = 0, p = f.length; h < p && !_t(n, f[h][0]); h++)
                        ;
                        var _ = h < p;
                        if (_ ? f[h][1] === i : c)
                            return this;
                        if (s(a),
                            (c || !_) && s(u),
                            c && 2 === p)
                            return new Ge(t, this.keyHash, f[1 ^ h]);
                        var l = t && t === this.ownerID,
                            v = l ? f : ue(f);
                        return _ ? c ? h === p - 1 ? v.pop() : v[h] = v.pop() : v[h] = [n, i] : v.push([n, i]),
                            l ? (this.entries = v,
                                this) : new Fe(t, this.keyHash, v)
                    };
                var Ge = function (t, e, r) {
                    this.ownerID = t,
                        this.keyHash = e,
                        this.entry = r
                };
                Ge.prototype.get = function (t, e, r, n) {
                        return _t(r, this.entry[0]) ? this.entry[1] : n
                    },
                    Ge.prototype.update = function (t, e, r, n, i, u, a) {
                        var c = i === o,
                            f = _t(n, this.entry[0]);
                        return (f ? i === this.entry[1] : c) ? this : (s(a),
                            c ? void s(u) : f ? t && t === this.ownerID ? (this.entry[1] = i,
                                this) : new Ge(t, this.keyHash, [n, i]) : (s(u),
                                sr(this, t, e, dt(n), [n, i])))
                    },
                    Ye.prototype.iterate = Fe.prototype.iterate = function (t, e) {
                        for (var r = this.entries, n = 0, i = r.length - 1; n <= i; n++)
                            if (!1 === t(r[e ? i - n : n]))
                                return !1
                    },
                    Qe.prototype.iterate = Xe.prototype.iterate = function (t, e) {
                        for (var r = this.nodes, n = 0, i = r.length - 1; n <= i; n++) {
                            var o = r[e ? i - n : n];
                            if (o && !1 === o.iterate(t, e))
                                return !1
                        }
                    },
                    Ge.prototype.iterate = function (t, e) {
                        return t(this.entry)
                    };
                var Ze, $e = function (t) {
                    function e(t, e, r) {
                        this._type = e,
                            this._reverse = r,
                            this._stack = t._root && er(t._root)
                    }
                    return t && (e.__proto__ = t),
                        e.prototype = Object.create(t && t.prototype),
                        e.prototype.constructor = e,
                        e.prototype.next = function () {
                            for (var t = this._type, e = this._stack; e;) {
                                var r = e.node,
                                    n = e.index++,
                                    i = void 0;
                                if (r.entry) {
                                    if (0 === n)
                                        return tr(t, r.entry)
                                } else if (r.entries) {
                                    if (n <= (i = r.entries.length - 1))
                                        return tr(t, r.entries[this._reverse ? i - n : n])
                                } else if (n <= (i = r.nodes.length - 1)) {
                                    var o = r.nodes[this._reverse ? i - n : n];
                                    if (o) {
                                        if (o.entry)
                                            return tr(t, o.entry);
                                        e = this._stack = er(o, e)
                                    }
                                    continue
                                }
                                e = this._stack = this._stack.__prev
                            }
                            return W()
                        },
                        e
                }(N);

                function tr(t, e) {
                    return P(t, e[0], e[1])
                }

                function er(t, e) {
                    return {
                        node: t,
                        index: 0,
                        __prev: e
                    }
                }

                function rr(t, e, r, n) {
                    var i = Object.create(Ve);
                    return i.size = t,
                        i._root = e,
                        i.__ownerID = r,
                        i.__hash = n,
                        i.__altered = !1,
                        i
                }

                function nr() {
                    return Ze || (Ze = rr(0))
                }

                function ir(t, e, r) {
                    var n, i;
                    if (t._root) {
                        var s = u(),
                            a = u();
                        if (n = or(t._root, t.__ownerID, 0, void 0, e, r, s, a),
                            !a.value)
                            return t;
                        i = t.size + (s.value ? r === o ? -1 : 1 : 0)
                    } else {
                        if (r === o)
                            return t;
                        i = 1,
                            n = new Ye(t.__ownerID, [
                                [e, r]
                            ])
                    }
                    return t.__ownerID ? (t.size = i,
                        t._root = n,
                        t.__hash = void 0,
                        t.__altered = !0,
                        t) : n ? rr(i, n) : nr()
                }

                function or(t, e, r, n, i, u, a, c) {
                    return t ? t.update(e, r, n, i, u, a, c) : u === o ? t : (s(c),
                        s(a),
                        new Ge(e, n, [i, u]))
                }

                function ur(t) {
                    return t.constructor === Ge || t.constructor === Fe
                }

                function sr(t, e, n, o, u) {
                    if (t.keyHash === o)
                        return new Fe(e, o, [t.entry, u]);
                    var s, a = (0 === n ? t.keyHash : t.keyHash >>> n) & i,
                        c = (0 === n ? o : o >>> n) & i,
                        f = a === c ? [sr(t, e, n + r, o, u)] : (s = new Ge(e, o, u),
                            a < c ? [t, s] : [s, t]);
                    return new Qe(e, 1 << a | 1 << c, f)
                }

                function ar(t, e, r, n) {
                    t || (t = new a);
                    for (var i = new Ge(t, dt(r), [r, n]), o = 0; o < e.length; o++) {
                        var u = e[o];
                        i = i.update(t, 0, void 0, u[0], u[1])
                    }
                    return i
                }

                function cr(t, e, r, n) {
                    for (var i = 0, o = 0, u = new Array(r), s = 0, a = 1, c = e.length; s < c; s++,
                        a <<= 1) {
                        var f = e[s];
                        void 0 !== f && s !== n && (i |= a,
                            u[o++] = f)
                    }
                    return new Qe(t, i, u)
                }

                function fr(t, e, r, i, o) {
                    for (var u = 0, s = new Array(n), a = 0; 0 !== r; a++,
                        r >>>= 1)
                        s[a] = 1 & r ? e[u++] : void 0;
                    return s[i] = o,
                        new Xe(t, u + 1, s)
                }

                function hr(t) {
                    return t = (t = (858993459 & (t -= t >> 1 & 1431655765)) + (t >> 2 & 858993459)) + (t >> 4) & 252645135,
                        t += t >> 8,
                        127 & (t += t >> 16)
                }

                function pr(t, e, r, n) {
                    var i = n ? t : ue(t);
                    return i[e] = r,
                        i
                }

                function _r(t, e, r, n) {
                    var i = t.length + 1;
                    if (n && e + 1 === i)
                        return t[e] = r,
                            t;
                    for (var o = new Array(i), u = 0, s = 0; s < i; s++)
                        s === e ? (o[s] = r,
                            u = -1) : o[s] = t[s + u];
                    return o
                }

                function lr(t, e, r) {
                    var n = t.length - 1;
                    if (r && e === n)
                        return t.pop(),
                            t;
                    for (var i = new Array(n), o = 0, u = 0; u < n; u++)
                        u === e && (o = 1),
                        i[u] = t[u + o];
                    return i
                }
                var vr = n / 4,
                    yr = n / 2,
                    dr = n / 4,
                    mr = "@@__IMMUTABLE_LIST__@@";

                function gr(t) {
                    return Boolean(t && t[mr])
                }
                var wr = function (t) {
                    function e(e) {
                        var i = Mr();
                        if (null == e)
                            return i;
                        if (gr(e))
                            return e;
                        var o = t(e),
                            u = o.size;
                        return 0 === u ? i : (ae(u),
                            u > 0 && u < n ? xr(0, u, r, null, new Sr(o.toArray())) : i.withMutations((function (t) {
                                t.setSize(u),
                                    o.forEach((function (e, r) {
                                        return t.set(r, e)
                                    }))
                            })))
                    }
                    return t && (e.__proto__ = t),
                        e.prototype = Object.create(t && t.prototype),
                        e.prototype.constructor = e,
                        e.of = function () {
                            return this(arguments)
                        },
                        e.prototype.toString = function () {
                            return this.__toString("List [", "]")
                        },
                        e.prototype.get = function (t, e) {
                            if ((t = f(this, t)) >= 0 && t < this.size) {
                                var r = Dr(this, t += this._origin);
                                return r && r.array[t & i]
                            }
                            return e
                        },
                        e.prototype.set = function (t, e) {
                            return Er(this, t, e)
                        },
                        e.prototype.remove = function (t) {
                            return this.has(t) ? 0 === t ? this.shift() : t === this.size - 1 ? this.pop() : this.splice(t, 1) : this
                        },
                        e.prototype.insert = function (t, e) {
                            return this.splice(t, 0, e)
                        },
                        e.prototype.clear = function () {
                            return 0 === this.size ? this : this.__ownerID ? (this.size = this._origin = this._capacity = 0,
                                this._level = r,
                                this._root = this._tail = null,
                                this.__hash = void 0,
                                this.__altered = !0,
                                this) : Mr()
                        },
                        e.prototype.push = function () {
                            var t = arguments,
                                e = this.size;
                            return this.withMutations((function (r) {
                                kr(r, 0, e + t.length);
                                for (var n = 0; n < t.length; n++)
                                    r.set(e + n, t[n])
                            }))
                        },
                        e.prototype.pop = function () {
                            return kr(this, 0, -1)
                        },
                        e.prototype.unshift = function () {
                            var t = arguments;
                            return this.withMutations((function (e) {
                                kr(e, -t.length);
                                for (var r = 0; r < t.length; r++)
                                    e.set(r, t[r])
                            }))
                        },
                        e.prototype.shift = function () {
                            return kr(this, 1)
                        },
                        e.prototype.concat = function () {
                            for (var e = arguments, r = [], n = 0; n < arguments.length; n++) {
                                var i = e[n],
                                    o = t("string" != typeof i && H(i) ? i : [i]);
                                0 !== o.size && r.push(o)
                            }
                            return 0 === r.length ? this : 0 !== this.size || this.__ownerID || 1 !== r.length ? this.withMutations((function (t) {
                                r.forEach((function (e) {
                                    return e.forEach((function (e) {
                                        return t.push(e)
                                    }))
                                }))
                            })) : this.constructor(r[0])
                        },
                        e.prototype.setSize = function (t) {
                            return kr(this, 0, t)
                        },
                        e.prototype.map = function (t, e) {
                            var r = this;
                            return this.withMutations((function (n) {
                                for (var i = 0; i < r.size; i++)
                                    n.set(i, t.call(e, n.get(i), i, n))
                            }))
                        },
                        e.prototype.slice = function (t, e) {
                            var r = this.size;
                            return p(t, e, r) ? this : kr(this, _(t, r), l(e, r))
                        },
                        e.prototype.__iterator = function (t, e) {
                            var r = e ? this.size : 0,
                                n = Or(this, e);
                            return new N((function () {
                                var i = n();
                                return i === Ir ? W() : P(t, e ? --r : r++, i)
                            }))
                        },
                        e.prototype.__iterate = function (t, e) {
                            for (var r, n = e ? this.size : 0, i = Or(this, e);
                                (r = i()) !== Ir && !1 !== t(r, e ? --n : n++, this);)
                            ;
                            return n
                        },
                        e.prototype.__ensureOwner = function (t) {
                            return t === this.__ownerID ? this : t ? xr(this._origin, this._capacity, this._level, this._root, this._tail, t, this.__hash) : 0 === this.size ? Mr() : (this.__ownerID = t,
                                this.__altered = !1,
                                this)
                        },
                        e
                }(x);
                wr.isList = gr;
                var br = wr.prototype;
                br[mr] = !0,
                    br[e] = br.remove,
                    br.merge = br.concat,
                    br.setIn = be,
                    br.deleteIn = br.removeIn = ze,
                    br.update = Oe,
                    br.updateIn = xe,
                    br.mergeIn = Ce,
                    br.mergeDeepIn = Le,
                    br.withMutations = Ne,
                    br.wasAltered = He,
                    br.asImmutable = We,
                    br["@@transducer/init"] = br.asMutable = Pe,
                    br["@@transducer/step"] = function (t, e) {
                        return t.push(e)
                    },
                    br["@@transducer/result"] = function (t) {
                        return t.asImmutable()
                    };
                var Sr = function (t, e) {
                    this.array = t,
                        this.ownerID = e
                };
                Sr.prototype.removeBefore = function (t, e, n) {
                        if (n === e ? 1 << e : 0 === this.array.length)
                            return this;
                        var o = n >>> e & i;
                        if (o >= this.array.length)
                            return new Sr([], t);
                        var u, s = 0 === o;
                        if (e > 0) {
                            var a = this.array[o];
                            if ((u = a && a.removeBefore(t, e - r, n)) === a && s)
                                return this
                        }
                        if (s && !u)
                            return this;
                        var c = qr(this, t);
                        if (!s)
                            for (var f = 0; f < o; f++)
                                c.array[f] = void 0;
                        return u && (c.array[o] = u),
                            c
                    },
                    Sr.prototype.removeAfter = function (t, e, n) {
                        if (n === (e ? 1 << e : 0) || 0 === this.array.length)
                            return this;
                        var o, u = n - 1 >>> e & i;
                        if (u >= this.array.length)
                            return this;
                        if (e > 0) {
                            var s = this.array[u];
                            if ((o = s && s.removeAfter(t, e - r, n)) === s && u === this.array.length - 1)
                                return this
                        }
                        var a = qr(this, t);
                        return a.array.splice(u + 1),
                            o && (a.array[u] = o),
                            a
                    };
                var zr, Ir = {};

                function Or(t, e) {
                    var i = t._origin,
                        o = t._capacity,
                        u = Ar(o),
                        s = t._tail;
                    return a(t._root, t._level, 0);

                    function a(t, e, r) {
                        return 0 === e ? c(t, r) : f(t, e, r)
                    }

                    function c(t, r) {
                        var a = r === u ? s && s.array : t && t.array,
                            c = r > i ? 0 : i - r,
                            f = o - r;
                        return f > n && (f = n),
                            function () {
                                if (c === f)
                                    return Ir;
                                var t = e ? --f : c++;
                                return a && a[t]
                            }
                    }

                    function f(t, u, s) {
                        var c, f = t && t.array,
                            h = s > i ? 0 : i - s >> u,
                            p = 1 + (o - s >> u);
                        return p > n && (p = n),
                            function () {
                                for (;;) {
                                    if (c) {
                                        var t = c();
                                        if (t !== Ir)
                                            return t;
                                        c = null
                                    }
                                    if (h === p)
                                        return Ir;
                                    var n = e ? --p : h++;
                                    c = a(f && f[n], u - r, s + (n << u))
                                }
                            }
                    }
                }

                function xr(t, e, r, n, i, o, u) {
                    var s = Object.create(br);
                    return s.size = e - t,
                        s._origin = t,
                        s._capacity = e,
                        s._level = r,
                        s._root = n,
                        s._tail = i,
                        s.__ownerID = o,
                        s.__hash = u,
                        s.__altered = !1,
                        s
                }

                function Mr() {
                    return zr || (zr = xr(0, 0, r))
                }

                function Er(t, e, r) {
                    if ((e = f(t, e)) != e)
                        return t;
                    if (e >= t.size || e < 0)
                        return t.withMutations((function (t) {
                            e < 0 ? kr(t, e).set(0, r) : kr(t, 0, e + 1).set(e, r)
                        }));
                    e += t._origin;
                    var n = t._tail,
                        i = t._root,
                        o = u();
                    return e >= Ar(t._capacity) ? n = jr(n, t.__ownerID, 0, e, r, o) : i = jr(i, t.__ownerID, t._level, e, r, o),
                        o.value ? t.__ownerID ? (t._root = i,
                            t._tail = n,
                            t.__hash = void 0,
                            t.__altered = !0,
                            t) : xr(t._origin, t._capacity, t._level, i, n) : t
                }

                function jr(t, e, n, o, u, a) {
                    var c, f = o >>> n & i,
                        h = t && f < t.array.length;
                    if (!h && void 0 === u)
                        return t;
                    if (n > 0) {
                        var p = t && t.array[f],
                            _ = jr(p, e, n - r, o, u, a);
                        return _ === p ? t : ((c = qr(t, e)).array[f] = _,
                            c)
                    }
                    return h && t.array[f] === u ? t : (a && s(a),
                        c = qr(t, e),
                        void 0 === u && f === c.array.length - 1 ? c.array.pop() : c.array[f] = u,
                        c)
                }

                function qr(t, e) {
                    return e && t && e === t.ownerID ? t : new Sr(t ? t.array.slice() : [], e)
                }

                function Dr(t, e) {
                    if (e >= Ar(t._capacity))
                        return t._tail;
                    if (e < 1 << t._level + r) {
                        for (var n = t._root, o = t._level; n && o > 0;)
                            n = n.array[e >>> o & i],
                            o -= r;
                        return n
                    }
                }

                function kr(t, e, n) {
                    void 0 !== e && (e |= 0),
                        void 0 !== n && (n |= 0);
                    var o = t.__ownerID || new a,
                        u = t._origin,
                        s = t._capacity,
                        c = u + e,
                        f = void 0 === n ? s : n < 0 ? s + n : u + n;
                    if (c === u && f === s)
                        return t;
                    if (c >= f)
                        return t.clear();
                    for (var h = t._level, p = t._root, _ = 0; c + _ < 0;)
                        p = new Sr(p && p.array.length ? [void 0, p] : [], o),
                        _ += 1 << (h += r);
                    _ && (c += _,
                        u += _,
                        f += _,
                        s += _);
                    for (var l = Ar(s), v = Ar(f); v >= 1 << h + r;)
                        p = new Sr(p && p.array.length ? [p] : [], o),
                        h += r;
                    var y = t._tail,
                        d = v < l ? Dr(t, f - 1) : v > l ? new Sr([], o) : y;
                    if (y && v > l && c < s && y.array.length) {
                        for (var m = p = qr(p, o), g = h; g > r; g -= r) {
                            var w = l >>> g & i;
                            m = m.array[w] = qr(m.array[w], o)
                        }
                        m.array[l >>> r & i] = y
                    }
                    if (f < s && (d = d && d.removeAfter(o, 0, f)),
                        c >= v)
                        c -= v,
                        f -= v,
                        h = r,
                        p = null,
                        d = d && d.removeBefore(o, 0, c);
                    else if (c > u || v < l) {
                        for (_ = 0; p;) {
                            var b = c >>> h & i;
                            if (b !== v >>> h & i)
                                break;
                            b && (_ += (1 << h) * b),
                                h -= r,
                                p = p.array[b]
                        }
                        p && c > u && (p = p.removeBefore(o, h, c - _)),
                            p && v < l && (p = p.removeAfter(o, h, v - _)),
                            _ && (c -= _,
                                f -= _)
                    }
                    return t.__ownerID ? (t.size = f - c,
                        t._origin = c,
                        t._capacity = f,
                        t._level = h,
                        t._root = p,
                        t._tail = d,
                        t.__hash = void 0,
                        t.__altered = !0,
                        t) : xr(c, f, h, p, d)
                }

                function Ar(t) {
                    return t < n ? 0 : t - 1 >>> r << r
                }
                var Rr, Ur = function (t) {
                    function e(t) {
                        return null == t ? Tr() : ht(t) ? t : Tr().withMutations((function (e) {
                            var r = O(t);
                            ae(r.size),
                                r.forEach((function (t, r) {
                                    return e.set(r, t)
                                }))
                        }))
                    }
                    return t && (e.__proto__ = t),
                        e.prototype = Object.create(t && t.prototype),
                        e.prototype.constructor = e,
                        e.of = function () {
                            return this(arguments)
                        },
                        e.prototype.toString = function () {
                            return this.__toString("OrderedMap {", "}")
                        },
                        e.prototype.get = function (t, e) {
                            var r = this._map.get(t);
                            return void 0 !== r ? this._list.get(r)[1] : e
                        },
                        e.prototype.clear = function () {
                            return 0 === this.size ? this : this.__ownerID ? (this.size = 0,
                                this._map.clear(),
                                this._list.clear(),
                                this) : Tr()
                        },
                        e.prototype.set = function (t, e) {
                            return Br(this, t, e)
                        },
                        e.prototype.remove = function (t) {
                            return Br(this, t, o)
                        },
                        e.prototype.wasAltered = function () {
                            return this._map.wasAltered() || this._list.wasAltered()
                        },
                        e.prototype.__iterate = function (t, e) {
                            var r = this;
                            return this._list.__iterate((function (e) {
                                return e && t(e[1], e[0], r)
                            }), e)
                        },
                        e.prototype.__iterator = function (t, e) {
                            return this._list.fromEntrySeq().__iterator(t, e)
                        },
                        e.prototype.__ensureOwner = function (t) {
                            if (t === this.__ownerID)
                                return this;
                            var e = this._map.__ensureOwner(t),
                                r = this._list.__ensureOwner(t);
                            return t ? Kr(e, r, t, this.__hash) : 0 === this.size ? Tr() : (this.__ownerID = t,
                                this._map = e,
                                this._list = r,
                                this)
                        },
                        e
                }(Je);

                function Kr(t, e, r, n) {
                    var i = Object.create(Ur.prototype);
                    return i.size = t ? t.size : 0,
                        i._map = t,
                        i._list = e,
                        i.__ownerID = r,
                        i.__hash = n,
                        i
                }

                function Tr() {
                    return Rr || (Rr = Kr(nr(), Mr()))
                }

                function Br(t, e, r) {
                    var i, u, s = t._map,
                        a = t._list,
                        c = s.get(e),
                        f = void 0 !== c;
                    if (r === o) {
                        if (!f)
                            return t;
                        a.size >= n && a.size >= 2 * s.size ? (i = (u = a.filter((function (t, e) {
                                return void 0 !== t && c !== e
                            }))).toKeyedSeq().map((function (t) {
                                return t[0]
                            })).flip().toMap(),
                            t.__ownerID && (i.__ownerID = u.__ownerID = t.__ownerID)) : (i = s.remove(e),
                            u = c === a.size - 1 ? a.pop() : a.set(c, void 0))
                    } else if (f) {
                        if (r === a.get(c)[1])
                            return t;
                        i = s,
                            u = a.set(c, [e, r])
                    } else
                        i = s.set(e, a.size),
                        u = a.set(a.size, [e, r]);
                    return t.__ownerID ? (t.size = i.size,
                        t._map = i,
                        t._list = u,
                        t.__hash = void 0,
                        t) : Kr(i, u)
                }
                Ur.isOrderedMap = ht,
                    Ur.prototype[A] = !0,
                    Ur.prototype[e] = Ur.prototype.remove;
                var Cr = "@@__IMMUTABLE_STACK__@@";

                function Lr(t) {
                    return Boolean(t && t[Cr])
                }
                var Nr = function (t) {
                    function e(t) {
                        return null == t ? Jr() : Lr(t) ? t : Jr().pushAll(t)
                    }
                    return t && (e.__proto__ = t),
                        e.prototype = Object.create(t && t.prototype),
                        e.prototype.constructor = e,
                        e.of = function () {
                            return this(arguments)
                        },
                        e.prototype.toString = function () {
                            return this.__toString("Stack [", "]")
                        },
                        e.prototype.get = function (t, e) {
                            var r = this._head;
                            for (t = f(this, t); r && t--;)
                                r = r.next;
                            return r ? r.value : e
                        },
                        e.prototype.peek = function () {
                            return this._head && this._head.value
                        },
                        e.prototype.push = function () {
                            var t = arguments;
                            if (0 === arguments.length)
                                return this;
                            for (var e = this.size + arguments.length, r = this._head, n = arguments.length - 1; n >= 0; n--)
                                r = {
                                    value: t[n],
                                    next: r
                                };
                            return this.__ownerID ? (this.size = e,
                                this._head = r,
                                this.__hash = void 0,
                                this.__altered = !0,
                                this) : Hr(e, r)
                        },
                        e.prototype.pushAll = function (e) {
                            if (0 === (e = t(e)).size)
                                return this;
                            if (0 === this.size && Lr(e))
                                return e;
                            ae(e.size);
                            var r = this.size,
                                n = this._head;
                            return e.__iterate((function (t) {
                                    r++,
                                    n = {
                                        value: t,
                                        next: n
                                    }
                                }), !0),
                                this.__ownerID ? (this.size = r,
                                    this._head = n,
                                    this.__hash = void 0,
                                    this.__altered = !0,
                                    this) : Hr(r, n)
                        },
                        e.prototype.pop = function () {
                            return this.slice(1)
                        },
                        e.prototype.clear = function () {
                            return 0 === this.size ? this : this.__ownerID ? (this.size = 0,
                                this._head = void 0,
                                this.__hash = void 0,
                                this.__altered = !0,
                                this) : Jr()
                        },
                        e.prototype.slice = function (e, r) {
                            if (p(e, r, this.size))
                                return this;
                            var n = _(e, this.size);
                            if (l(r, this.size) !== this.size)
                                return t.prototype.slice.call(this, e, r);
                            for (var i = this.size - n, o = this._head; n--;)
                                o = o.next;
                            return this.__ownerID ? (this.size = i,
                                this._head = o,
                                this.__hash = void 0,
                                this.__altered = !0,
                                this) : Hr(i, o)
                        },
                        e.prototype.__ensureOwner = function (t) {
                            return t === this.__ownerID ? this : t ? Hr(this.size, this._head, t, this.__hash) : 0 === this.size ? Jr() : (this.__ownerID = t,
                                this.__altered = !1,
                                this)
                        },
                        e.prototype.__iterate = function (t, e) {
                            var r = this;
                            if (e)
                                return new tt(this.toArray()).__iterate((function (e, n) {
                                    return t(e, n, r)
                                }), e);
                            for (var n = 0, i = this._head; i && !1 !== t(i.value, n++, this);)
                                i = i.next;
                            return n
                        },
                        e.prototype.__iterator = function (t, e) {
                            if (e)
                                return new tt(this.toArray()).__iterator(t, e);
                            var r = 0,
                                n = this._head;
                            return new N((function () {
                                if (n) {
                                    var e = n.value;
                                    return n = n.next,
                                        P(t, r++, e)
                                }
                                return W()
                            }))
                        },
                        e
                }(x);
                Nr.isStack = Lr;
                var Pr, Wr = Nr.prototype;

                function Hr(t, e, r, n) {
                    var i = Object.create(Wr);
                    return i.size = t,
                        i._head = e,
                        i.__ownerID = r,
                        i.__hash = n,
                        i.__altered = !1,
                        i
                }

                function Jr() {
                    return Pr || (Pr = Hr(0))
                }
                Wr[Cr] = !0,
                    Wr.shift = Wr.pop,
                    Wr.unshift = Wr.push,
                    Wr.unshiftAll = Wr.pushAll,
                    Wr.withMutations = Ne,
                    Wr.wasAltered = He,
                    Wr.asImmutable = We,
                    Wr["@@transducer/init"] = Wr.asMutable = Pe,
                    Wr["@@transducer/step"] = function (t, e) {
                        return t.unshift(e)
                    },
                    Wr["@@transducer/result"] = function (t) {
                        return t.asImmutable()
                    };
                var Vr = "@@__IMMUTABLE_SET__@@";

                function Yr(t) {
                    return Boolean(t && t[Vr])
                }

                function Qr(t) {
                    return Yr(t) && R(t)
                }

                function Xr(t, e) {
                    if (t === e)
                        return !0;
                    if (!m(e) || void 0 !== t.size && void 0 !== e.size && t.size !== e.size || void 0 !== t.__hash && void 0 !== e.__hash && t.__hash !== e.__hash || w(t) !== w(e) || S(t) !== S(e) || R(t) !== R(e))
                        return !1;
                    if (0 === t.size && 0 === e.size)
                        return !0;
                    var r = !z(t);
                    if (R(t)) {
                        var n = t.entries();
                        return e.every((function (t, e) {
                            var i = n.next().value;
                            return i && _t(i[1], t) && (r || _t(i[0], e))
                        })) && n.next().done
                    }
                    var i = !1;
                    if (void 0 === t.size)
                        if (void 0 === e.size)
                            "function" == typeof t.cacheResult && t.cacheResult();
                        else {
                            i = !0;
                            var u = t;
                            t = e,
                                e = u
                        }
                    var s = !0,
                        a = e.__iterate((function (e, n) {
                            if (r ? !t.has(e) : i ? !_t(e, t.get(n, o)) : !_t(t.get(n, o), e))
                                return s = !1,
                                    !1
                        }));
                    return s && t.size === a
                }

                function Fr(t, e) {
                    var r = function (r) {
                        t.prototype[r] = e[r]
                    };
                    return Object.keys(e).forEach(r),
                        Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(e).forEach(r),
                        t
                }

                function Gr(t) {
                    if (!t || "object" != typeof t)
                        return t;
                    if (!m(t)) {
                        if (!he(t))
                            return t;
                        t = F(t)
                    }
                    if (w(t)) {
                        var e = {};
                        return t.__iterate((function (t, r) {
                                e[r] = Gr(t)
                            })),
                            e
                    }
                    var r = [];
                    return t.__iterate((function (t) {
                            r.push(Gr(t))
                        })),
                        r
                }
                var Zr = function (t) {
                    function e(e) {
                        return null == e ? nn() : Yr(e) && !R(e) ? e : nn().withMutations((function (r) {
                            var n = t(e);
                            ae(n.size),
                                n.forEach((function (t) {
                                    return r.add(t)
                                }))
                        }))
                    }
                    return t && (e.__proto__ = t),
                        e.prototype = Object.create(t && t.prototype),
                        e.prototype.constructor = e,
                        e.of = function () {
                            return this(arguments)
                        },
                        e.fromKeys = function (t) {
                            return this(O(t).keySeq())
                        },
                        e.intersect = function (t) {
                            return (t = I(t).toArray()).length ? tn.intersect.apply(e(t.pop()), t) : nn()
                        },
                        e.union = function (t) {
                            return (t = I(t).toArray()).length ? tn.union.apply(e(t.pop()), t) : nn()
                        },
                        e.prototype.toString = function () {
                            return this.__toString("Set {", "}")
                        },
                        e.prototype.has = function (t) {
                            return this._map.has(t)
                        },
                        e.prototype.add = function (t) {
                            return en(this, this._map.set(t, t))
                        },
                        e.prototype.remove = function (t) {
                            return en(this, this._map.remove(t))
                        },
                        e.prototype.clear = function () {
                            return en(this, this._map.clear())
                        },
                        e.prototype.map = function (t, e) {
                            var r = this,
                                n = [],
                                i = [];
                            return this.forEach((function (o) {
                                    var u = t.call(e, o, o, r);
                                    u !== o && (n.push(o),
                                        i.push(u))
                                })),
                                this.withMutations((function (t) {
                                    n.forEach((function (e) {
                                            return t.remove(e)
                                        })),
                                        i.forEach((function (e) {
                                            return t.add(e)
                                        }))
                                }))
                        },
                        e.prototype.union = function () {
                            for (var e = [], r = arguments.length; r--;)
                                e[r] = arguments[r];
                            return 0 === (e = e.filter((function (t) {
                                return 0 !== t.size
                            }))).length ? this : 0 !== this.size || this.__ownerID || 1 !== e.length ? this.withMutations((function (r) {
                                for (var n = 0; n < e.length; n++)
                                    t(e[n]).forEach((function (t) {
                                        return r.add(t)
                                    }))
                            })) : this.constructor(e[0])
                        },
                        e.prototype.intersect = function () {
                            for (var e = [], r = arguments.length; r--;)
                                e[r] = arguments[r];
                            if (0 === e.length)
                                return this;
                            e = e.map((function (e) {
                                return t(e)
                            }));
                            var n = [];
                            return this.forEach((function (t) {
                                    e.every((function (e) {
                                        return e.includes(t)
                                    })) || n.push(t)
                                })),
                                this.withMutations((function (t) {
                                    n.forEach((function (e) {
                                        t.remove(e)
                                    }))
                                }))
                        },
                        e.prototype.subtract = function () {
                            for (var e = [], r = arguments.length; r--;)
                                e[r] = arguments[r];
                            if (0 === e.length)
                                return this;
                            e = e.map((function (e) {
                                return t(e)
                            }));
                            var n = [];
                            return this.forEach((function (t) {
                                    e.some((function (e) {
                                        return e.includes(t)
                                    })) && n.push(t)
                                })),
                                this.withMutations((function (t) {
                                    n.forEach((function (e) {
                                        t.remove(e)
                                    }))
                                }))
                        },
                        e.prototype.sort = function (t) {
                            return On(Ft(this, t))
                        },
                        e.prototype.sortBy = function (t, e) {
                            return On(Ft(this, e, t))
                        },
                        e.prototype.wasAltered = function () {
                            return this._map.wasAltered()
                        },
                        e.prototype.__iterate = function (t, e) {
                            var r = this;
                            return this._map.__iterate((function (e) {
                                return t(e, e, r)
                            }), e)
                        },
                        e.prototype.__iterator = function (t, e) {
                            return this._map.__iterator(t, e)
                        },
                        e.prototype.__ensureOwner = function (t) {
                            if (t === this.__ownerID)
                                return this;
                            var e = this._map.__ensureOwner(t);
                            return t ? this.__make(e, t) : 0 === this.size ? this.__empty() : (this.__ownerID = t,
                                this._map = e,
                                this)
                        },
                        e
                }(M);
                Zr.isSet = Yr;
                var $r, tn = Zr.prototype;

                function en(t, e) {
                    return t.__ownerID ? (t.size = e.size,
                        t._map = e,
                        t) : e === t._map ? t : 0 === e.size ? t.__empty() : t.__make(e)
                }

                function rn(t, e) {
                    var r = Object.create(tn);
                    return r.size = t ? t.size : 0,
                        r._map = t,
                        r.__ownerID = e,
                        r
                }

                function nn() {
                    return $r || ($r = rn(nr()))
                }
                tn[Vr] = !0,
                    tn[e] = tn.remove,
                    tn.merge = tn.concat = tn.union,
                    tn.withMutations = Ne,
                    tn.asImmutable = We,
                    tn["@@transducer/init"] = tn.asMutable = Pe,
                    tn["@@transducer/step"] = function (t, e) {
                        return t.add(e)
                    },
                    tn["@@transducer/result"] = function (t) {
                        return t.asImmutable()
                    },
                    tn.__empty = nn,
                    tn.__make = rn;
                var on, un = function (t) {
                    function e(t, r, n) {
                        if (!(this instanceof e))
                            return new e(t, r, n);
                        if (se(0 !== n, "Cannot step a Range by 0"),
                            t = t || 0,
                            void 0 === r && (r = 1 / 0),
                            n = void 0 === n ? 1 : Math.abs(n),
                            r < t && (n = -n),
                            this._start = t,
                            this._end = r,
                            this._step = n,
                            this.size = Math.max(0, Math.ceil((r - t) / n - 1) + 1),
                            0 === this.size) {
                            if (on)
                                return on;
                            on = this
                        }
                    }
                    return t && (e.__proto__ = t),
                        e.prototype = Object.create(t && t.prototype),
                        e.prototype.constructor = e,
                        e.prototype.toString = function () {
                            return 0 === this.size ? "Range []" : "Range [ " + this._start + "..." + this._end + (1 !== this._step ? " by " + this._step : "") + " ]"
                        },
                        e.prototype.get = function (t, e) {
                            return this.has(t) ? this._start + f(this, t) * this._step : e
                        },
                        e.prototype.includes = function (t) {
                            var e = (t - this._start) / this._step;
                            return e >= 0 && e < this.size && e === Math.floor(e)
                        },
                        e.prototype.slice = function (t, r) {
                            return p(t, r, this.size) ? this : (t = _(t, this.size),
                                (r = l(r, this.size)) <= t ? new e(0, 0) : new e(this.get(t, this._end), this.get(r, this._end), this._step))
                        },
                        e.prototype.indexOf = function (t) {
                            var e = t - this._start;
                            if (e % this._step == 0) {
                                var r = e / this._step;
                                if (r >= 0 && r < this.size)
                                    return r
                            }
                            return -1
                        },
                        e.prototype.lastIndexOf = function (t) {
                            return this.indexOf(t)
                        },
                        e.prototype.__iterate = function (t, e) {
                            for (var r = this.size, n = this._step, i = e ? this._start + (r - 1) * n : this._start, o = 0; o !== r && !1 !== t(i, e ? r - ++o : o++, this);)
                                i += e ? -n : n;
                            return o
                        },
                        e.prototype.__iterator = function (t, e) {
                            var r = this.size,
                                n = this._step,
                                i = e ? this._start + (r - 1) * n : this._start,
                                o = 0;
                            return new N((function () {
                                if (o === r)
                                    return W();
                                var u = i;
                                return i += e ? -n : n,
                                    P(t, e ? r - ++o : o++, u)
                            }))
                        },
                        e.prototype.equals = function (t) {
                            return t instanceof e ? this._start === t._start && this._end === t._end && this._step === t._step : Xr(this, t)
                        },
                        e
                }(Z);

                function sn(t, e, r) {
                    for (var n = ce(e), i = 0; i !== n.length;)
                        if ((t = le(t, n[i++], o)) === o)
                            return r;
                    return t
                }

                function an(t, e) {
                    return sn(this, t, e)
                }

                function cn(t, e) {
                    return sn(t, e, o) !== o
                }

                function fn(t) {
                    return cn(this, t)
                }

                function hn() {
                    ae(this.size);
                    var t = {};
                    return this.__iterate((function (e, r) {
                            t[r] = e
                        })),
                        t
                }
                I.isIterable = m,
                    I.isKeyed = w,
                    I.isIndexed = S,
                    I.isAssociative = z,
                    I.isOrdered = R,
                    I.Iterator = N,
                    Fr(I, {
                        toArray: function () {
                            ae(this.size);
                            var t = new Array(this.size || 0),
                                e = w(this),
                                r = 0;
                            return this.__iterate((function (n, i) {
                                    t[r++] = e ? [i, n] : n
                                })),
                                t
                        },
                        toIndexedSeq: function () {
                            return new Rt(this)
                        },
                        toJS: function () {
                            return Gr(this)
                        },
                        toKeyedSeq: function () {
                            return new At(this, !0)
                        },
                        toMap: function () {
                            return Je(this.toKeyedSeq())
                        },
                        toObject: hn,
                        toOrderedMap: function () {
                            return Ur(this.toKeyedSeq())
                        },
                        toOrderedSet: function () {
                            return On(w(this) ? this.valueSeq() : this)
                        },
                        toSet: function () {
                            return Zr(w(this) ? this.valueSeq() : this)
                        },
                        toSetSeq: function () {
                            return new Ut(this)
                        },
                        toSeq: function () {
                            return S(this) ? this.toIndexedSeq() : w(this) ? this.toKeyedSeq() : this.toSetSeq()
                        },
                        toStack: function () {
                            return Nr(w(this) ? this.valueSeq() : this)
                        },
                        toList: function () {
                            return wr(w(this) ? this.valueSeq() : this)
                        },
                        toString: function () {
                            return "[Collection]"
                        },
                        __toString: function (t, e) {
                            return 0 === this.size ? t + e : t + " " + this.toSeq().map(this.__toStringMapper).join(", ") + " " + e
                        },
                        concat: function () {
                            for (var t = [], e = arguments.length; e--;)
                                t[e] = arguments[e];
                            return te(this, Vt(this, t))
                        },
                        includes: function (t) {
                            return this.some((function (e) {
                                return _t(e, t)
                            }))
                        },
                        entries: function () {
                            return this.__iterator(T)
                        },
                        every: function (t, e) {
                            ae(this.size);
                            var r = !0;
                            return this.__iterate((function (n, i, o) {
                                    if (!t.call(e, n, i, o))
                                        return r = !1,
                                            !1
                                })),
                                r
                        },
                        filter: function (t, e) {
                            return te(this, Lt(this, t, e, !0))
                        },
                        find: function (t, e, r) {
                            var n = this.findEntry(t, e);
                            return n ? n[1] : r
                        },
                        forEach: function (t, e) {
                            return ae(this.size),
                                this.__iterate(e ? t.bind(e) : t)
                        },
                        join: function (t) {
                            ae(this.size),
                                t = void 0 !== t ? "" + t : ",";
                            var e = "",
                                r = !0;
                            return this.__iterate((function (n) {
                                    r ? r = !1 : e += t,
                                        e += null != n ? n.toString() : ""
                                })),
                                e
                        },
                        keys: function () {
                            return this.__iterator(U)
                        },
                        map: function (t, e) {
                            return te(this, Bt(this, t, e))
                        },
                        reduce: function (t, e, r) {
                            return vn(this, t, e, r, arguments.length < 2, !1)
                        },
                        reduceRight: function (t, e, r) {
                            return vn(this, t, e, r, arguments.length < 2, !0)
                        },
                        reverse: function () {
                            return te(this, Ct(this, !0))
                        },
                        slice: function (t, e) {
                            return te(this, Wt(this, t, e, !0))
                        },
                        some: function (t, e) {
                            return !this.every(mn(t), e)
                        },
                        sort: function (t) {
                            return te(this, Ft(this, t))
                        },
                        values: function () {
                            return this.__iterator(K)
                        },
                        butLast: function () {
                            return this.slice(0, -1)
                        },
                        isEmpty: function () {
                            return void 0 !== this.size ? 0 === this.size : !this.some((function () {
                                return !0
                            }))
                        },
                        count: function (t, e) {
                            return c(t ? this.toSeq().filter(t, e) : this)
                        },
                        countBy: function (t, e) {
                            return Nt(this, t, e)
                        },
                        equals: function (t) {
                            return Xr(this, t)
                        },
                        entrySeq: function () {
                            var t = this;
                            if (t._cache)
                                return new tt(t._cache);
                            var e = t.toSeq().map(dn).toIndexedSeq();
                            return e.fromEntrySeq = function () {
                                    return t.toSeq()
                                },
                                e
                        },
                        filterNot: function (t, e) {
                            return this.filter(mn(t), e)
                        },
                        findEntry: function (t, e, r) {
                            var n = r;
                            return this.__iterate((function (r, i, o) {
                                    if (t.call(e, r, i, o))
                                        return n = [i, r],
                                            !1
                                })),
                                n
                        },
                        findKey: function (t, e) {
                            var r = this.findEntry(t, e);
                            return r && r[0]
                        },
                        findLast: function (t, e, r) {
                            return this.toKeyedSeq().reverse().find(t, e, r)
                        },
                        findLastEntry: function (t, e, r) {
                            return this.toKeyedSeq().reverse().findEntry(t, e, r)
                        },
                        findLastKey: function (t, e) {
                            return this.toKeyedSeq().reverse().findKey(t, e)
                        },
                        first: function (t) {
                            return this.find(h, null, t)
                        },
                        flatMap: function (t, e) {
                            return te(this, Qt(this, t, e))
                        },
                        flatten: function (t) {
                            return te(this, Yt(this, t, !0))
                        },
                        fromEntrySeq: function () {
                            return new Kt(this)
                        },
                        get: function (t, e) {
                            return this.find((function (e, r) {
                                return _t(r, t)
                            }), void 0, e)
                        },
                        getIn: an,
                        groupBy: function (t, e) {
                            return Pt(this, t, e)
                        },
                        has: function (t) {
                            return this.get(t, o) !== o
                        },
                        hasIn: fn,
                        isSubset: function (t) {
                            return t = "function" == typeof t.includes ? t : I(t),
                                this.every((function (e) {
                                    return t.includes(e)
                                }))
                        },
                        isSuperset: function (t) {
                            return (t = "function" == typeof t.isSubset ? t : I(t)).isSubset(this)
                        },
                        keyOf: function (t) {
                            return this.findKey((function (e) {
                                return _t(e, t)
                            }))
                        },
                        keySeq: function () {
                            return this.toSeq().map(yn).toIndexedSeq()
                        },
                        last: function (t) {
                            return this.toSeq().reverse().first(t)
                        },
                        lastKeyOf: function (t) {
                            return this.toKeyedSeq().reverse().keyOf(t)
                        },
                        max: function (t) {
                            return Gt(this, t)
                        },
                        maxBy: function (t, e) {
                            return Gt(this, e, t)
                        },
                        min: function (t) {
                            return Gt(this, t ? gn(t) : bn)
                        },
                        minBy: function (t, e) {
                            return Gt(this, e ? gn(e) : bn, t)
                        },
                        rest: function () {
                            return this.slice(1)
                        },
                        skip: function (t) {
                            return 0 === t ? this : this.slice(Math.max(0, t))
                        },
                        skipLast: function (t) {
                            return 0 === t ? this : this.slice(0, -Math.max(0, t))
                        },
                        skipWhile: function (t, e) {
                            return te(this, Jt(this, t, e, !0))
                        },
                        skipUntil: function (t, e) {
                            return this.skipWhile(mn(t), e)
                        },
                        sortBy: function (t, e) {
                            return te(this, Ft(this, e, t))
                        },
                        take: function (t) {
                            return this.slice(0, Math.max(0, t))
                        },
                        takeLast: function (t) {
                            return this.slice(-Math.max(0, t))
                        },
                        takeWhile: function (t, e) {
                            return te(this, Ht(this, t, e))
                        },
                        takeUntil: function (t, e) {
                            return this.takeWhile(mn(t), e)
                        },
                        update: function (t) {
                            return t(this)
                        },
                        valueSeq: function () {
                            return this.toIndexedSeq()
                        },
                        hashCode: function () {
                            return this.__hash || (this.__hash = Sn(this))
                        }
                    });
                var pn = I.prototype;
                pn[d] = !0,
                    pn[L] = pn.values,
                    pn.toJSON = pn.toArray,
                    pn.__toStringMapper = pe,
                    pn.inspect = pn.toSource = function () {
                        return this.toString()
                    },
                    pn.chain = pn.flatMap,
                    pn.contains = pn.includes,
                    Fr(O, {
                        flip: function () {
                            return te(this, Tt(this))
                        },
                        mapEntries: function (t, e) {
                            var r = this,
                                n = 0;
                            return te(this, this.toSeq().map((function (i, o) {
                                return t.call(e, [o, i], n++, r)
                            })).fromEntrySeq())
                        },
                        mapKeys: function (t, e) {
                            var r = this;
                            return te(this, this.toSeq().flip().map((function (n, i) {
                                return t.call(e, n, i, r)
                            })).flip())
                        }
                    });
                var _n = O.prototype;
                _n[g] = !0,
                    _n[L] = pn.entries,
                    _n.toJSON = hn,
                    _n.__toStringMapper = function (t, e) {
                        return pe(e) + ": " + pe(t)
                    },
                    Fr(x, {
                        toKeyedSeq: function () {
                            return new At(this, !1)
                        },
                        filter: function (t, e) {
                            return te(this, Lt(this, t, e, !1))
                        },
                        findIndex: function (t, e) {
                            var r = this.findEntry(t, e);
                            return r ? r[0] : -1
                        },
                        indexOf: function (t) {
                            var e = this.keyOf(t);
                            return void 0 === e ? -1 : e
                        },
                        lastIndexOf: function (t) {
                            var e = this.lastKeyOf(t);
                            return void 0 === e ? -1 : e
                        },
                        reverse: function () {
                            return te(this, Ct(this, !1))
                        },
                        slice: function (t, e) {
                            return te(this, Wt(this, t, e, !1))
                        },
                        splice: function (t, e) {
                            var r = arguments.length;
                            if (e = Math.max(e || 0, 0),
                                0 === r || 2 === r && !e)
                                return this;
                            t = _(t, t < 0 ? this.count() : this.size);
                            var n = this.slice(0, t);
                            return te(this, 1 === r ? n : n.concat(ue(arguments, 2), this.slice(t + e)))
                        },
                        findLastIndex: function (t, e) {
                            var r = this.findLastEntry(t, e);
                            return r ? r[0] : -1
                        },
                        first: function (t) {
                            return this.get(0, t)
                        },
                        flatten: function (t) {
                            return te(this, Yt(this, t, !1))
                        },
                        get: function (t, e) {
                            return (t = f(this, t)) < 0 || this.size === 1 / 0 || void 0 !== this.size && t > this.size ? e : this.find((function (e, r) {
                                return r === t
                            }), void 0, e)
                        },
                        has: function (t) {
                            return (t = f(this, t)) >= 0 && (void 0 !== this.size ? this.size === 1 / 0 || t < this.size : -1 !== this.indexOf(t))
                        },
                        interpose: function (t) {
                            return te(this, Xt(this, t))
                        },
                        interleave: function () {
                            var t = [this].concat(ue(arguments)),
                                e = $t(this.toSeq(), Z.of, t),
                                r = e.flatten(!0);
                            return e.size && (r.size = e.size * t.length),
                                te(this, r)
                        },
                        keySeq: function () {
                            return un(0, this.size)
                        },
                        last: function (t) {
                            return this.get(-1, t)
                        },
                        skipWhile: function (t, e) {
                            return te(this, Jt(this, t, e, !1))
                        },
                        zip: function () {
                            return te(this, $t(this, wn, [this].concat(ue(arguments))))
                        },
                        zipAll: function () {
                            return te(this, $t(this, wn, [this].concat(ue(arguments)), !0))
                        },
                        zipWith: function (t) {
                            var e = ue(arguments);
                            return e[0] = this,
                                te(this, $t(this, t, e))
                        }
                    });
                var ln = x.prototype;

                function vn(t, e, r, n, i, o) {
                    return ae(t.size),
                        t.__iterate((function (t, o, u) {
                            i ? (i = !1,
                                r = t) : r = e.call(n, r, t, o, u)
                        }), o),
                        r
                }

                function yn(t, e) {
                    return e
                }

                function dn(t, e) {
                    return [e, t]
                }

                function mn(t) {
                    return function () {
                        return !t.apply(this, arguments)
                    }
                }

                function gn(t) {
                    return function () {
                        return -t.apply(this, arguments)
                    }
                }

                function wn() {
                    return ue(arguments)
                }

                function bn(t, e) {
                    return t < e ? 1 : t > e ? -1 : 0
                }

                function Sn(t) {
                    if (t.size === 1 / 0)
                        return 0;
                    var e = R(t),
                        r = w(t),
                        n = e ? 1 : 0;
                    return zn(t.__iterate(r ? e ? function (t, e) {
                            n = 31 * n + In(dt(t), dt(e)) | 0
                        } :
                        function (t, e) {
                            n = n + In(dt(t), dt(e)) | 0
                        } :
                        e ? function (t) {
                            n = 31 * n + dt(t) | 0
                        } :
                        function (t) {
                            n = n + dt(t) | 0
                        }
                    ), n)
                }

                function zn(t, e) {
                    return e = lt(e, 3432918353),
                        e = lt(e << 15 | e >>> -15, 461845907),
                        e = lt(e << 13 | e >>> -13, 5),
                        e = lt((e = (e + 3864292196 | 0) ^ t) ^ e >>> 16, 2246822507),
                        e = vt((e = lt(e ^ e >>> 13, 3266489909)) ^ e >>> 16)
                }

                function In(t, e) {
                    return t ^ e + 2654435769 + (t << 6) + (t >> 2) | 0
                }
                ln[b] = !0,
                    ln[A] = !0,
                    Fr(M, {
                        get: function (t, e) {
                            return this.has(t) ? t : e
                        },
                        includes: function (t) {
                            return this.has(t)
                        },
                        keySeq: function () {
                            return this.valueSeq()
                        }
                    }),
                    M.prototype.has = pn.includes,
                    M.prototype.contains = M.prototype.includes,
                    Fr(G, O.prototype),
                    Fr(Z, x.prototype),
                    Fr($, M.prototype);
                var On = function (t) {
                    function e(t) {
                        return null == t ? jn() : Qr(t) ? t : jn().withMutations((function (e) {
                            var r = M(t);
                            ae(r.size),
                                r.forEach((function (t) {
                                    return e.add(t)
                                }))
                        }))
                    }
                    return t && (e.__proto__ = t),
                        e.prototype = Object.create(t && t.prototype),
                        e.prototype.constructor = e,
                        e.of = function () {
                            return this(arguments)
                        },
                        e.fromKeys = function (t) {
                            return this(O(t).keySeq())
                        },
                        e.prototype.toString = function () {
                            return this.__toString("OrderedSet {", "}")
                        },
                        e
                }(Zr);
                On.isOrderedSet = Qr;
                var xn, Mn = On.prototype;

                function En(t, e) {
                    var r = Object.create(Mn);
                    return r.size = t ? t.size : 0,
                        r._map = t,
                        r.__ownerID = e,
                        r
                }

                function jn() {
                    return xn || (xn = En(Tr()))
                }
                Mn[A] = !0,
                    Mn.zip = ln.zip,
                    Mn.zipWith = ln.zipWith,
                    Mn.__empty = jn,
                    Mn.__make = En;
                var qn = function (t, e) {
                    var r, n = function (o) {
                            var u = this;
                            if (o instanceof n)
                                return o;
                            if (!(this instanceof n))
                                return new n(o);
                            if (!r) {
                                r = !0;
                                var s = Object.keys(t),
                                    a = i._indices = {};
                                i._name = e,
                                    i._keys = s,
                                    i._defaultValues = t;
                                for (var c = 0; c < s.length; c++) {
                                    var f = s[c];
                                    a[f] = c,
                                        i[f] ? "object" == typeof console && console.warn && console.warn("Cannot define " + An(this) + ' with property "' + f + '" since that property name is part of the Record API.') : Un(i, f)
                                }
                            }
                            this.__ownerID = void 0,
                                this._values = wr().withMutations((function (t) {
                                    t.setSize(u._keys.length),
                                        O(o).forEach((function (e, r) {
                                            t.set(u._indices[r], e === u._defaultValues[r] ? void 0 : e)
                                        }))
                                }))
                        },
                        i = n.prototype = Object.create(Dn);
                    return i.constructor = n,
                        e && (n.displayName = e),
                        n
                };
                qn.prototype.toString = function () {
                        for (var t, e = An(this) + " { ", r = this._keys, n = 0, i = r.length; n !== i; n++)
                            e += (n ? ", " : "") + (t = r[n]) + ": " + pe(this.get(t));
                        return e + " }"
                    },
                    qn.prototype.equals = function (t) {
                        return this === t || t && this._keys === t._keys && Rn(this).equals(Rn(t))
                    },
                    qn.prototype.hashCode = function () {
                        return Rn(this).hashCode()
                    },
                    qn.prototype.has = function (t) {
                        return this._indices.hasOwnProperty(t)
                    },
                    qn.prototype.get = function (t, e) {
                        if (!this.has(t))
                            return e;
                        var r = this._indices[t],
                            n = this._values.get(r);
                        return void 0 === n ? this._defaultValues[t] : n
                    },
                    qn.prototype.set = function (t, e) {
                        if (this.has(t)) {
                            var r = this._values.set(this._indices[t], e === this._defaultValues[t] ? void 0 : e);
                            if (r !== this._values && !this.__ownerID)
                                return kn(this, r)
                        }
                        return this
                    },
                    qn.prototype.remove = function (t) {
                        return this.set(t)
                    },
                    qn.prototype.clear = function () {
                        var t = this._values.clear().setSize(this._keys.length);
                        return this.__ownerID ? this : kn(this, t)
                    },
                    qn.prototype.wasAltered = function () {
                        return this._values.wasAltered()
                    },
                    qn.prototype.toSeq = function () {
                        return Rn(this)
                    },
                    qn.prototype.toJS = function () {
                        return Gr(this)
                    },
                    qn.prototype.entries = function () {
                        return this.__iterator(T)
                    },
                    qn.prototype.__iterator = function (t, e) {
                        return Rn(this).__iterator(t, e)
                    },
                    qn.prototype.__iterate = function (t, e) {
                        return Rn(this).__iterate(t, e)
                    },
                    qn.prototype.__ensureOwner = function (t) {
                        if (t === this.__ownerID)
                            return this;
                        var e = this._values.__ensureOwner(t);
                        return t ? kn(this, e, t) : (this.__ownerID = t,
                            this._values = e,
                            this)
                    },
                    qn.isRecord = D,
                    qn.getDescriptiveName = An;
                var Dn = qn.prototype;

                function kn(t, e, r) {
                    var n = Object.create(Object.getPrototypeOf(t));
                    return n._values = e,
                        n.__ownerID = r,
                        n
                }

                function An(t) {
                    return t.constructor.displayName || t.constructor.name || "Record"
                }

                function Rn(t) {
                    return ot(t._keys.map((function (e) {
                        return [e, t.get(e)]
                    })))
                }

                function Un(t, e) {
                    try {
                        Object.defineProperty(t, e, {
                            get: function () {
                                return this.get(e)
                            },
                            set: function (t) {
                                se(this.__ownerID, "Cannot set on an immutable record."),
                                    this.set(e, t)
                            }
                        })
                    } catch (r) {}
                }
                Dn[q] = !0,
                    Dn[e] = Dn.remove,
                    Dn.deleteIn = Dn.removeIn = ze,
                    Dn.getIn = an,
                    Dn.hasIn = pn.hasIn,
                    Dn.merge = Me,
                    Dn.mergeWith = Ee,
                    Dn.mergeIn = Ce,
                    Dn.mergeDeep = Te,
                    Dn.mergeDeepWith = Be,
                    Dn.mergeDeepIn = Le,
                    Dn.setIn = be,
                    Dn.update = Oe,
                    Dn.updateIn = xe,
                    Dn.withMutations = Ne,
                    Dn.asMutable = Pe,
                    Dn.asImmutable = We,
                    Dn[L] = Dn.entries,
                    Dn.toJSON = Dn.toObject = pn.toObject,
                    Dn.inspect = Dn.toSource = function () {
                        return this.toString()
                    };
                var Kn, Tn = function (t) {
                    function e(t, r) {
                        if (!(this instanceof e))
                            return new e(t, r);
                        if (this._value = t,
                            this.size = void 0 === r ? 1 / 0 : Math.max(0, r),
                            0 === this.size) {
                            if (Kn)
                                return Kn;
                            Kn = this
                        }
                    }
                    return t && (e.__proto__ = t),
                        e.prototype = Object.create(t && t.prototype),
                        e.prototype.constructor = e,
                        e.prototype.toString = function () {
                            return 0 === this.size ? "Repeat []" : "Repeat [ " + this._value + " " + this.size + " times ]"
                        },
                        e.prototype.get = function (t, e) {
                            return this.has(t) ? this._value : e
                        },
                        e.prototype.includes = function (t) {
                            return _t(this._value, t)
                        },
                        e.prototype.slice = function (t, r) {
                            var n = this.size;
                            return p(t, r, n) ? this : new e(this._value, l(r, n) - _(t, n))
                        },
                        e.prototype.reverse = function () {
                            return this
                        },
                        e.prototype.indexOf = function (t) {
                            return _t(this._value, t) ? 0 : -1
                        },
                        e.prototype.lastIndexOf = function (t) {
                            return _t(this._value, t) ? this.size : -1
                        },
                        e.prototype.__iterate = function (t, e) {
                            for (var r = this.size, n = 0; n !== r && !1 !== t(this._value, e ? r - ++n : n++, this);)
                            ;
                            return n
                        },
                        e.prototype.__iterator = function (t, e) {
                            var r = this,
                                n = this.size,
                                i = 0;
                            return new N((function () {
                                return i === n ? W() : P(t, e ? n - ++i : i++, r._value)
                            }))
                        },
                        e.prototype.equals = function (t) {
                            return t instanceof e ? _t(this._value, t._value) : Xr(t)
                        },
                        e
                }(Z);

                function Bn(t, e) {
                    return Cn([], e || Ln, t, "", e && e.length > 2 ? [] : void 0, {
                        "": t
                    })
                }

                function Cn(t, e, r, n, i, o) {
                    var u = Array.isArray(r) ? Z : fe(r) ? G : null;
                    if (u) {
                        if (~t.indexOf(r))
                            throw new TypeError("Cannot convert circular structure to Immutable");
                        t.push(r),
                            i && "" !== n && i.push(n);
                        var s = e.call(o, n, u(r).map((function (n, o) {
                            return Cn(t, e, n, o, i, r)
                        })), i && i.slice());
                        return t.pop(),
                            i && i.pop(),
                            s
                    }
                    return r
                }

                function Ln(t, e) {
                    return w(e) ? e.toMap() : e.toList()
                }
                var Nn = "4.0.0-rc.11",
                    Pn = {
                        version: Nn,
                        Collection: I,
                        Iterable: I,
                        Seq: F,
                        Map: Je,
                        OrderedMap: Ur,
                        List: wr,
                        Stack: Nr,
                        Set: Zr,
                        OrderedSet: On,
                        Record: qn,
                        Range: un,
                        Repeat: Tn,
                        is: _t,
                        fromJS: Bn,
                        hash: dt,
                        isImmutable: k,
                        isCollection: m,
                        isKeyed: w,
                        isIndexed: S,
                        isAssociative: z,
                        isOrdered: R,
                        isValueObject: pt,
                        isSeq: j,
                        isList: gr,
                        isMap: ft,
                        isOrderedMap: ht,
                        isStack: Lr,
                        isSet: Yr,
                        isOrderedSet: Qr,
                        isRecord: D,
                        get: le,
                        getIn: sn,
                        has: _e,
                        hasIn: cn,
                        merge: qe,
                        mergeDeep: ke,
                        mergeWith: De,
                        mergeDeepWith: Ae,
                        remove: ye,
                        removeIn: Se,
                        set: de,
                        setIn: we,
                        update: Ie,
                        updateIn: me
                    },
                    Wn = I;
                t.default = Pn,
                    t.version = Nn,
                    t.Collection = I,
                    t.Iterable = Wn,
                    t.Seq = F,
                    t.Map = Je,
                    t.OrderedMap = Ur,
                    t.List = wr,
                    t.Stack = Nr,
                    t.Set = Zr,
                    t.OrderedSet = On,
                    t.Record = qn,
                    t.Range = un,
                    t.Repeat = Tn,
                    t.is = _t,
                    t.fromJS = Bn,
                    t.hash = dt,
                    t.isImmutable = k,
                    t.isCollection = m,
                    t.isKeyed = w,
                    t.isIndexed = S,
                    t.isAssociative = z,
                    t.isOrdered = R,
                    t.isValueObject = pt,
                    t.get = le,
                    t.getIn = sn,
                    t.has = _e,
                    t.hasIn = cn,
                    t.merge = qe,
                    t.mergeDeep = ke,
                    t.mergeWith = De,
                    t.mergeDeepWith = Ae,
                    t.remove = ye,
                    t.removeIn = Se,
                    t.set = de,
                    t.setIn = we,
                    t.update = Ie,
                    t.updateIn = me,
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    })
            }(e)
        },
        "./node_modules/redux-immutable/dist/combineReducers.js": (t, e, r) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n, i = r("./node_modules/immutable/dist/immutable.js"),
                o = (n = i) && n.__esModule ? n : {
                    default: n
                },
                u = r("./node_modules/redux-immutable/dist/utilities/index.js");
            e.default = function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.default.Map,
                        r = Object.keys(t);
                    return function () {
                        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e(),
                            i = arguments[1];
                        return n.withMutations((function (e) {
                            r.forEach((function (r) {
                                var n = (0,
                                    t[r])(e.get(r), i);
                                (0,
                                    u.validateNextState)(n, r, i),
                                e.set(r, n)
                            }))
                        }))
                    }
                },
                t.exports = e.default
        },
        "./node_modules/redux-immutable/dist/index.js": (t, e, r) => {
            "use strict";
            e.U = void 0;
            var n, i = r("./node_modules/redux-immutable/dist/combineReducers.js"),
                o = (n = i) && n.__esModule ? n : {
                    default: n
                };
            e.U = o.default
        },
        "./node_modules/redux-immutable/dist/utilities/getStateName.js": (t, e) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                e.default = function (t) {
                    return t && "@@redux/INIT" === t.type ? "initialState argument passed to createStore" : "previous state received by the reducer"
                },
                t.exports = e.default
        },
        "./node_modules/redux-immutable/dist/utilities/getUnexpectedInvocationParameterMessage.js": (t, e, r) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = o(r("./node_modules/immutable/dist/immutable.js")),
                i = o(r("./node_modules/redux-immutable/dist/utilities/getStateName.js"));

            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            e.default = function (t, e, r) {
                    var o = Object.keys(e);
                    if (!o.length)
                        return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
                    var u = (0,
                        i.default)(r);
                    if (n.default.isImmutable ? !n.default.isImmutable(t) : !n.default.Iterable.isIterable(t))
                        return "The " + u + ' is of unexpected type. Expected argument to be an instance of Immutable.Collection or Immutable.Record with the following properties: "' + o.join('", "') + '".';
                    var s = t.toSeq().keySeq().toArray().filter((function (t) {
                        return !e.hasOwnProperty(t)
                    }));
                    return s.length > 0 ? "Unexpected " + (1 === s.length ? "property" : "properties") + ' "' + s.join('", "') + '" found in ' + u + '. Expected to find one of the known reducer property names instead: "' + o.join('", "') + '". Unexpected properties will be ignored.' : null
                },
                t.exports = e.default
        },
        "./node_modules/redux-immutable/dist/utilities/index.js": (t, e, r) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                e.validateNextState = e.getUnexpectedInvocationParameterMessage = e.getStateName = void 0;
            var n = u(r("./node_modules/redux-immutable/dist/utilities/getStateName.js")),
                i = u(r("./node_modules/redux-immutable/dist/utilities/getUnexpectedInvocationParameterMessage.js")),
                o = u(r("./node_modules/redux-immutable/dist/utilities/validateNextState.js"));

            function u(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            e.getStateName = n.default,
                e.getUnexpectedInvocationParameterMessage = i.default,
                e.validateNextState = o.default
        },
        "./node_modules/redux-immutable/dist/utilities/validateNextState.js": (t, e) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                e.default = function (t, e, r) {
                    if (void 0 === t)
                        throw new Error('Reducer "' + e + '" returned undefined when handling "' + r.type + '" action. To ignore an action, you must explicitly return the previous state.')
                },
                t.exports = e.default
        }
    }
]);
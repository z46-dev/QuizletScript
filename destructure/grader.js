(self.webpackChunk_quizlet_web_index = self.webpackChunk_quizlet_web_index || []).push([
    ["grader"], {
        "./node_modules/@quizlet/grader/quizlet-shared-kotlin-grader.js": function (n, t, r) {
            var i, e, u;
            e = [t, r("./node_modules/@quizlet/kotlin-stdlib/kotlin-kotlin-stdlib-js-ir.js"), r("./node_modules/@quizlet/pinyin-converter/quizlet-shared-kotlin-pinyin-converter.js"), r("./node_modules/@quizlet/utils/quizlet-shared-kotlin-utils.js")],
                void 0 === (u = "function" == typeof (i = function (n, t, r, i) {
                    "use strict";
                    var e, u, o, l, a, h, _, s, c, f, v, d, g, j, w, p, $, k, y, m, b, q, z, C, A, S, E, N, F, x, G, O, T, R = Math.imul,
                        P = t.$_$.fa,
                        I = t.$_$.kb,
                        L = t.$_$.pa,
                        M = t.$_$.p4,
                        W = t.$_$.be,
                        D = t.$_$.ee,
                        J = t.$_$.ha,
                        B = t.$_$.ge,
                        K = t.$_$.jb,
                        Y = t.$_$.a,
                        H = t.$_$.cf,
                        U = t.$_$.a8,
                        Q = t.$_$.z8,
                        V = t.$_$.n1,
                        X = t.$_$.f,
                        Z = t.$_$.o1,
                        nn = t.$_$.da,
                        tn = t.$_$.na,
                        rn = t.$_$.ud,
                        en = t.$_$.v,
                        un = t.$_$.d6,
                        on = t.$_$.ue,
                        ln = t.$_$.gf,
                        an = t.$_$.o5,
                        hn = t.$_$.ua,
                        _n = t.$_$.nd,
                        sn = t.$_$.ob,
                        cn = t.$_$.w,
                        fn = t.$_$.k8,
                        vn = r.$_$.a,
                        dn = i.$_$.l,
                        gn = t.$_$.j,
                        jn = t.$_$.cc,
                        wn = t.$_$.hc,
                        pn = t.$_$.kc,
                        $n = i.$_$.k,
                        kn = t.$_$.m6,
                        yn = t.$_$.dd,
                        mn = t.$_$.l2,
                        bn = t.$_$.i2,
                        qn = t.$_$.pd,
                        zn = t.$_$.e7,
                        Cn = t.$_$.bb;

                    function An(n, t) {
                        return oi(li(n))
                    }

                    function Sn(n, t, r, i) {
                        for (var e = null, u = n.f2g_1, o = 0, l = u.length; o < l;) {
                            var a = u[o];
                            o = o + 1 | 0;
                            var h = a.k2g(t, r, i);
                            if (h.l2g_1)
                                return h;
                            var _ = h.m2g_1;
                            e = null == _ ? e : _
                        }
                        return new Yn(!1, e)
                    }

                    function En(n) {
                        this.f2g_1 = n
                    }

                    function Nn() {}

                    function Fn(n, t, r, i, e, u, o) {
                        return 0 != (1 & e) && (n = null),
                            0 != (4 & e) && (r = null),
                            Kn.call(o, n, t, r, i),
                            o
                    }

                    function xn(n, t, r, i, e, u) {
                        return Fn(n, t, r, i, e, u, Object.create(Kn.prototype))
                    }

                    function Gn(n, t, r, i, e) {
                        return Kn.call(e, n, At().r2g(t), r, i),
                            e
                    }

                    function On(n, t, r, i, e, u, o) {
                        return 0 != (1 & e) && (n = null),
                            0 != (2 & e) && (t = !0),
                            0 != (4 & e) && (r = null),
                            0 != (8 & e) && (i = Nt().s2g_1),
                            Gn(n, t, r, i, o),
                            o
                    }

                    function Tn(n, t, r, i, e, u) {
                        return On(n, t, r, i, e, u, Object.create(Kn.prototype))
                    }

                    function Rn(n, t, r, i, e) {
                        var u;
                        return Nt(),
                            u = Jn(i),
                            Kn.call(e, n, t, r, u),
                            e
                    }

                    function Pn(n, t, r, i) {
                        return Rn(n, t, r, i, Object.create(Kn.prototype))
                    }

                    function In(n, t, r, i, e, u, o) {
                        return 0 != (1 & e) && (n = null),
                            0 != (4 & e) && (r = null),
                            Rn(n, t, r, i, o),
                            o
                    }

                    function Ln(n, t, r, i, e, u) {
                        return In(n, t, r, i, e, u, Object.create(Kn.prototype))
                    }

                    function Mn(n, t, r, i, e) {
                        var u, o = At().r2g(t);
                        return Nt(),
                            u = Bn(i),
                            Kn.call(e, n, o, r, u),
                            e
                    }

                    function Wn(n, t, r, i, e, u, o) {
                        return 0 != (1 & e) && (n = null),
                            0 != (2 & e) && (t = !0),
                            0 != (4 & e) && (r = null),
                            Mn(n, t, r, i, o),
                            o
                    }

                    function Dn(n, t, r, i, e, u) {
                        return Wn(n, t, r, i, e, u, Object.create(Kn.prototype))
                    }

                    function Jn(n) {
                        return function (t, r) {
                            return new W(n(t), n(r))
                        }
                    }

                    function Bn(n) {
                        return function (t, r) {
                            return new W(n(t), n(r))
                        }
                    }

                    function Kn(n, t, r, i) {
                        this.t2g_1 = n,
                            this.u2g_1 = t,
                            this.v2g_1 = r,
                            this.w2g_1 = i
                    }

                    function Yn(n, t) {
                        this.l2g_1 = n,
                            this.m2g_1 = t
                    }

                    function Hn(n, t, r, i, e, u, o) {
                        return null == t.v2g_1 ? null : r !== i && e === u ? yi(t.x2g(o) ? bt() : mt(), t.v2g_1) : null
                    }

                    function Un(n, t, r, i, e, u, o) {
                        var l;
                        return 0 != (2 & e) && (t = "en"),
                            0 != (4 & e) && (r = "en"),
                            0 != (8 & e) && (l = [],
                                M(),
                                i = l),
                            nt.call(o, n, t, r, i),
                            o
                    }

                    function Qn(n, t, r, i, e, u) {
                        return Un(n, t, r, i, e, u, Object.create(nt.prototype))
                    }

                    function Vn() {
                        e = this
                    }

                    function Xn() {
                        return null == e && new Vn,
                            e
                    }

                    function Zn(n, t, r, i) {
                        var e = n.e2h(t, r, i);
                        return new Yn(e.b5() === e.c5(), e.oc())
                    }

                    function nt(n, t, r, i) {
                        Xn(),
                            this.g2g_1 = n,
                            this.h2g_1 = t,
                            this.i2g_1 = r,
                            this.j2g_1 = i
                    }

                    function tt(n, t, r) {
                        this.h2h_1 = n,
                            this.i2h_1 = t,
                            this.j2h_1 = r
                    }

                    function rt() {
                        return ot(),
                            u
                    }

                    function it() {
                        return ot(),
                            o
                    }

                    function et() {
                        return ot(),
                            l
                    }

                    function ut() {
                        return ot(),
                            a
                    }

                    function ot() {
                        h || (h = !0,
                            u = U(["de", "chem", "math"]),
                            o = U(["chem", "math"]),
                            l = Q(it(), U(["photo", "??"])),
                            Q(et(), U(["akk", "ja", "ja-ka", "zh-CN", "zh-TW"])),
                            a = U(["ja", "ja-ka", "zh-CN", "zh-TW"]))
                    }

                    function lt() {
                        _ = this;
                        var n, t = this;
                        n = V("[\\s\\uFEFF\\xA0\\u3000\\u200B-\\u200D]+"),
                            t.n2h_1 = n;
                        var r, i = this;
                        r = V('[%.,;!¿#$/:\\[\\]_\\\\"¡]'),
                            i.o2h_1 = r;
                        var e, u = this;
                        e = V("\\*([^*]+)\\*"),
                            u.p2h_1 = e;
                        var o, l = this;
                        o = V("^[\\s\\uFEFF\\xA0\\u3000\\u200B-\\u200D]+|[\\s\\uFEFF\\u0240\\u3000\\u200B-\\u200D]+$"),
                            l.q2h_1 = o;
                        var a, h = this;
                        a = V("(\\s+-+\\s+)"),
                            h.r2h_1 = a;
                        var s, c = this;
                        s = V("[()]"),
                            c.s2h_1 = s;
                        var f, v = this;
                        f = V("[(\\[)\\]]"),
                            v.t2h_1 = f;
                        var d, g = this;
                        d = V("[,;/]"),
                            g.u2h_1 = d;
                        var j, w = this;
                        j = V("([+&])"),
                            w.v2h_1 = j;
                        var p, $ = this,
                            k = X();
                        p = Z("^(the|a|an) ", k),
                            $.w2h_1 = p;
                        var y, m = this,
                            b = X();
                        y = Z("^(la|une|un|le) ", b),
                            m.x2h_1 = y;
                        var q, z = this,
                            C = X();
                        q = Z("^(una|la|un|el) ", C),
                            z.y2h_1 = q;
                        var A, S = this,
                            E = X(),
                            N = Z("^(la|une) ", E),
                            F = X();
                        A = [N, Z("^(le|un) ", F)],
                            S.z2h_1 = A;
                        var x, G = this,
                            O = X(),
                            T = Z("^(el|un) ", O),
                            R = X();
                        x = [T, Z("^(la|una) ", R)],
                            G.a2i_1 = x;
                        var P, I = this;
                        P = V("ß"),
                            I.b2i_1 = P;
                        var L, M = this;
                        L = V("\\s-"),
                            M.c2i_1 = L;
                        var W, D = this;
                        W = V("-\\s"),
                            D.d2i_1 = W;
                        var J, B = this;
                        J = V("\\s="),
                            B.e2i_1 = J;
                        var K, Y = this;
                        K = V("=\\s"),
                            Y.f2i_1 = K;
                        var H, U = this;
                        H = V("\\d+"),
                            U.g2i_1 = H;
                        var Q, nn = this;
                        Q = V("(?!\\b)-\\b"),
                            nn.h2i_1 = Q;
                        var tn, rn = this;
                        tn = V("\\b-(?!\\b)"),
                            rn.i2i_1 = tn
                    }

                    function at() {
                        return null == _ && new lt,
                            _
                    }

                    function ht(n, t, r, i) {
                        this.y2g_1 = n,
                            this.z2g_1 = t,
                            this.a2h_1 = r,
                            this.b2h_1 = i
                    }

                    function _t() {
                        v = this
                    }

                    function st() {
                        return ft(),
                            null == v && new _t,
                            v
                    }

                    function ct() {
                        return [dt(), gt(), jt()]
                    }

                    function ft() {
                        if (d)
                            return M();
                        d = !0,
                            s = new vt("ACCEPT_PARTIAL_ANSWERS", 0, "accept_partial_answers"),
                            c = new vt("ACCEPT_ANSWERS_WITH_TYPOS", 1, "accept_answers_with_typos"),
                            f = new vt("ACCEPT_SMART_GRADING", 2, "accept_smart_grading"),
                            st()
                    }

                    function vt(n, t, r) {
                        rn.call(this, n, t),
                            this.o2i_1 = r
                    }

                    function dt() {
                        return ft(),
                            s
                    }

                    function gt() {
                        return ft(),
                            c
                    }

                    function jt() {
                        return ft(),
                            f
                    }

                    function wt() {
                        w = this
                    }

                    function pt() {
                        return kt(),
                            null == w && new wt,
                            w
                    }

                    function $t() {
                        return [mt(), bt()]
                    }

                    function kt() {
                        if (p)
                            return M();
                        p = !0,
                            g = new yt("ENABLE_ONE_TO_MAKE_ANSWER_CORRECT", 0, "enable_one_to_make_answer_correct"),
                            j = new yt("DISABLE_ONE_TO_MAKE_ANSWER_INCORRECT", 1, "disable_one_to_make_answer_incorrect"),
                            pt()
                    }

                    function yt(n, t, r) {
                        rn.call(this, n, t),
                            this.r2i_1 = r
                    }

                    function mt() {
                        return kt(),
                            g
                    }

                    function bt() {
                        return kt(),
                            j
                    }

                    function qt(n, t, r) {
                        return !0
                    }

                    function zt(n, t, r) {
                        return !1
                    }

                    function Ct() {
                        $ = this,
                            this.p2g_1 = qt,
                            this.q2g_1 = zt
                    }

                    function At() {
                        return null == $ && new Ct,
                            $
                    }

                    function St(n, t) {
                        return new W(n, t)
                    }

                    function Et() {
                        k = this,
                            this.s2g_1 = St
                    }

                    function Nt() {
                        return null == k && new Et,
                            k
                    }

                    function Ft() {
                        y = this;
                        var n, t = this,
                            r = [ar().s2i_1, ar().u2i_1, ar().v2i_1],
                            i = ar().f2j_1;
                        n = r.concat(i),
                            t.k2j_1 = n
                    }

                    function xt() {
                        return null == y && new Ft,
                            y
                    }

                    function Gt(n, t, r, i) {
                        var e, u = on(ni(r, t));
                        return e = t.qj(i, u),
                            ln(r, e)
                    }

                    function Ot() {
                        var n = function (n) {
                            return oi(n)
                        };
                        return n.callableName = "stripMarkdown",
                            n
                    }

                    function Tt(n, t) {
                        var r, i = bi(n);
                        return r = bi(t),
                            new W(i, r)
                    }

                    function Rt() {
                        var n = function (n) {
                            return li(n)
                        };
                        return n.callableName = "normalizeSimilarCharacters",
                            n
                    }

                    function Pt(n, t, r) {
                        return "de" === r.y2g_1
                    }

                    function It(n) {
                        return at().b2i_1.qj(n, "ss")
                    }

                    function Lt(n, t, r) {
                        var i = r.b5(),
                            e = r.c5(),
                            u = r.oc();
                        return "en" === e && "fr" === i && !ti(at().w2h_1, u)
                    }

                    function Mt(n, t) {
                        var r;
                        n: {
                            for (var i = at().z2h_1, e = 0, u = i.length; e < u;) {
                                var o = i[e];
                                if (e = e + 1 | 0,
                                    o.lj(n) && o.lj(t)) {
                                    r = o;
                                    break n
                                }
                            }
                            r = null
                        }
                        var l = r;
                        return null != l ? Gt(ar(), l, n, t) : ln(n, t)
                    }

                    function Wt(n, t, r) {
                        var i = r.b5(),
                            e = r.c5();
                        return r.oc(),
                            "en" === e && "es" === i && !at().w2h_1.lj(n)
                    }

                    function Dt(n, t) {
                        var r;
                        n: {
                            for (var i = at().a2i_1, e = 0, u = i.length; e < u;) {
                                var o = i[e];
                                if (e = e + 1 | 0,
                                    o.lj(n) && o.lj(t)) {
                                    r = o;
                                    break n
                                }
                            }
                            r = null
                        }
                        var l = r;
                        return null != l ? Gt(ar(), l, n, t) : ln(n, t)
                    }

                    function Jt(n, t, r) {
                        var i = r.b5(),
                            e = r.c5(),
                            u = r.oc();
                        return !("fr" !== e || "en" !== i || !ti(at().x2h_1, u) || !at().w2h_1.lj(t) || at().w2h_1.lj(n))
                    }

                    function Bt(n) {
                        return at().w2h_1.qj(n, " ")
                    }

                    function Kt(n, t, r) {
                        var i = r.b5(),
                            e = r.c5(),
                            u = r.oc();
                        return !("es" !== e || "en" !== i || !ti(at().y2h_1, u) || !at().w2h_1.lj(t) || at().w2h_1.lj(n))
                    }

                    function Yt(n, t) {
                        var r;
                        return r = at().w2h_1.qj(t, " "),
                            ln(n, r)
                    }

                    function Ht(n, t, r) {
                        var i = r.b5(),
                            e = r.c5(),
                            u = r.oc(),
                            o = at().w2h_1.mj(t, 0, 2, null),
                            l = at().w2h_1.mj(n, 0, 2, null);
                        return "fr" === e && "en" === i && !ti(at().x2h_1, u) && null != o && null != l && !J(o.zj().i(1), l.zj().i(1))
                    }

                    function Ut(n, t) {
                        return Gt(ar(), at().w2h_1, n, t)
                    }

                    function Qt(n, t, r) {
                        var i = r.b5(),
                            e = r.c5(),
                            u = r.oc(),
                            o = at().w2h_1.mj(t, 0, 2, null),
                            l = at().w2h_1.mj(n, 0, 2, null);
                        return "es" === e && "en" === i && !ti(at().y2h_1, u) && null != o && null != l && !J(o.zj().i(1), l.zj().i(1))
                    }

                    function Vt(n, t) {
                        return Gt(ar(), at().w2h_1, n, t)
                    }

                    function Xt(n, t, r) {
                        var i = r.b5(),
                            e = r.c5(),
                            u = r.oc();
                        return !("fr" !== e || "en" !== i || ti(at().x2h_1, u) || !at().w2h_1.lj(t) || at().w2h_1.lj(n))
                    }

                    function Zt(n, t) {
                        var r;
                        return r = at().w2h_1.qj(t, ""),
                            ln(n, r)
                    }

                    function nr(n, t, r) {
                        var i = r.b5(),
                            e = r.c5(),
                            u = r.oc();
                        return !("es" !== e || "en" !== i || ti(at().y2h_1, u) || !at().w2h_1.lj(t) || at().w2h_1.lj(n))
                    }

                    function tr(n, t) {
                        var r;
                        return r = at().w2h_1.qj(t, ""),
                            ln(n, r)
                    }

                    function rr(n) {
                        return function (t, r) {
                            for (var i = new W(t, r), e = n, u = 0, o = e.length; u < o;) {
                                var l = e[u];
                                u = u + 1 | 0;
                                var a = i;
                                i = l(a.b5(), a.c5())
                            }
                            return i
                        }
                    }

                    function ir(n) {
                        return function (t, r, i) {
                            return !n(t, r, i)
                        }
                    }

                    function er(n) {
                        return function (t, r) {
                            for (var i = new W(t, r), e = n, u = 0, o = e.length; u < o;) {
                                var l = e[u];
                                u = u + 1 | 0;
                                var a = i;
                                i = l(a.b5(), a.c5())
                            }
                            return i
                        }
                    }

                    function ur(n) {
                        return function (t, r, i) {
                            return !n(t, r, i)
                        }
                    }

                    function or(n) {
                        return function (t, r) {
                            for (var i = new W(t, r), e = n, u = 0, o = e.length; u < o;) {
                                var l = e[u];
                                u = u + 1 | 0;
                                var a = i;
                                i = l(a.b5(), a.c5())
                            }
                            return i
                        }
                    }

                    function lr() {
                        m = this,
                            this.s2i_1 = Dn("AlwaysStripMarkdownClause", !0, null, Ot(), 4, null);
                        var n = this,
                            t = pr().w2j_1;
                        n.t2i_1 = xn("Reorder fragments if they match answer fragments", t, null, Gr().j2k_1, 4, null);
                        var r, i = this;
                        Nt(),
                            r = Tt,
                            i.u2i_1 = Tn("AlwaysUnicodeNormalizeCharactersClause", !0, null, r, 4, null),
                            this.v2i_1 = Dn("AlwaysNormalizeSimilarCharactersClause", !0, null, Rt(), 4, null);
                        var e = Pt;
                        this.w2i_1 = Ln("NormalizeSharpSInAnswerForGerman", e, null, It, 4, null);
                        var u = Lt;
                        this.x2i_1 = xn("NoArticleOnEnglishPromptForFrench", u, null, Mt, 4, null);
                        var o = Wt;
                        this.y2i_1 = xn("NoArticleOnEnglishPromptForSpanish", o, null, Dt, 4, null);
                        var l = Jt;
                        this.z2i_1 = Ln("NoArticleOnEnglishAnswerForFrench", l, null, Bt, 4, null);
                        var a = Kt;
                        this.a2j_1 = xn("NoArticleOnEnglishAnswerForSpanish", a, null, Yt, 4, null);
                        var h = Ht;
                        this.b2j_1 = xn("NoArticleOnFrenchPrompt", h, null, Ut, 4, null);
                        var _ = Qt;
                        this.c2j_1 = xn("NoArticleOnSpanishPrompt", _, null, Vt, 4, null);
                        var s = Xt;
                        this.d2j_1 = xn("NoArticlesAnywhereForFrench", s, null, Zt, 4, null);
                        var c = nr;
                        this.e2j_1 = xn("NoArticlesAnywhereForSpanish", c, null, tr, 4, null);
                        var f, v = this;
                        f = [this.x2i_1, this.y2i_1, this.z2i_1, this.a2j_1, this.b2j_1, this.c2j_1, this.d2j_1, this.e2j_1],
                            v.f2j_1 = f;
                        var d = this,
                            g = dt(),
                            j = pr().x2j_1,
                            w = Gr().j2k_1;
                        d.g2j_1 = new Kn("Insert missing answer fragments", j, g, w);
                        var p, $ = this;
                        Nt(),
                            p = rr([Gr().b2k_1, Gr().c2k_1, Gr().d2k_1]),
                            $.h2j_1 = p;
                        var k, y = this,
                            b = (At(),
                                ir(pr().s2j_1));
                        Nt(),
                            k = er([this.h2j_1, Gr().g2k_1]),
                            y.i2j_1 = xn("Normalize and remove irrelevant characters, including parentheses", b, null, k, 4, null);
                        var q, z = this,
                            C = (At(),
                                ur(pr().s2j_1));
                        Nt(),
                            q = or([this.h2j_1, Gr().z2j_1, Gr().g2k_1]),
                            z.j2j_1 = xn("Normalize and remove irrelevant characters, including parentheses and content in parentheses", C, null, q, 4, null)
                    }

                    function ar() {
                        return null == m && new lr,
                            m
                    }

                    function hr(n, t) {
                        for (var r = at().u2h_1.tj(n, 0), i = en(an(r, 10)), e = r.j(); e.l();) {
                            var u = e.k();
                            i.a(ei(u))
                        }
                        for (var o = i, l = en(an(o, 10)), a = o.j(); a.l();) {
                            var h, _ = a.k();
                            h = sn(_n(hn(_) ? _ : D())),
                                l.a(h)
                        }
                        for (var s = l, c = en(an(s, 10)), f = s.j(); f.l();) {
                            var v = f.k();
                            c.a(ui(v))
                        }
                        for (var d = c, g = cn(), j = d.j(); j.l();) {
                            var w = j.k();
                            nn(w) > 0 && g.a(w)
                        }
                        return g
                    }

                    function _r(n, t, r) {
                        var i = r.b5();
                        return rt().t(i)
                    }

                    function sr(n, t, r) {
                        var i = r.b5();
                        return ut().t(i)
                    }

                    function cr(n, t, r) {
                        var i = r.b5();
                        return it().t(i)
                    }

                    function fr(n, t, r) {
                        return !!at().t2h_1.lj(n) || at().t2h_1.lj(t)
                    }

                    function vr(n, t, r) {
                        return "zh-pi" === r.b5()
                    }

                    function dr(n, t, r) {
                        return !!at().u2h_1.lj(n) || at().u2h_1.lj(t)
                    }

                    function gr(n, t, r) {
                        var i = hr(n, pr()),
                            e = hr(t, pr());
                        return !e.h() && J(fn(i), fn(e))
                    }

                    function jr(n, t, r) {
                        var i = hr(n, pr()),
                            e = hr(t, pr());
                        return !e.h() && i.m1(e)
                    }

                    function wr() {
                        b = this,
                            this.q2j_1 = _r,
                            this.r2j_1 = sr,
                            this.s2j_1 = cr,
                            this.t2j_1 = fr,
                            this.u2j_1 = vr,
                            this.v2j_1 = dr,
                            this.w2j_1 = gr,
                            this.x2j_1 = jr
                    }

                    function pr() {
                        return null == b && new wr,
                            b
                    }

                    function $r(n, t) {
                        var r, i = vn().convert(n);
                        return r = vn().convert(t),
                            new W(i, r)
                    }

                    function kr(n, t) {
                        var r, i = dn(n);
                        return r = dn(t),
                            new W(i, r)
                    }

                    function yr(n, t) {
                        var r, i = n.toLowerCase();
                        return r = t.toLowerCase(),
                            new W(i, r)
                    }

                    function mr(n, t) {
                        var r, i = at().v2h_1.qj(n, "and");
                        return r = at().v2h_1.qj(t, "and"),
                            new W(i, r)
                    }

                    function br(n, t) {
                        var r, i = at().h2i_1.qj(n, ""),
                            e = at().i2i_1.qj(i, ""),
                            u = at().h2i_1.qj(t, "");
                        return r = at().i2i_1.qj(u, ""),
                            new W(e, r)
                    }

                    function qr(n, t) {
                        var r, i = at().r2h_1.qj(n, " ");
                        return r = at().r2h_1.qj(t, " "),
                            new W(i, r)
                    }

                    function zr(n, t) {
                        for (var r = at().u2h_1.tj(n, 0), i = en(an(r, 10)), e = r.j(); e.l();) {
                            var u;
                            u = ii(e.k()),
                                i.a(u)
                        }
                        for (var o, l = fn(i), a = gn(l, ",", null, null, 0, null, null, 62, null), h = at().u2h_1.tj(t, 0), _ = en(an(h, 10)), s = h.j(); s.l();) {
                            var c;
                            c = ii(s.k()),
                                _.a(c)
                        }
                        var f = fn(_);
                        return o = gn(f, ",", null, null, 0, null, null, 62, null),
                            new W(a, o)
                    }

                    function Cr(n, t) {
                        var r, i = ei(n);
                        return r = ei(t),
                            new W(i, r)
                    }

                    function Ar(n, t) {
                        var r, i = at().s2h_1.qj(n, "");
                        return r = at().s2h_1.qj(t, ""),
                            new W(i, r)
                    }

                    function Sr(n, t) {
                        var r, i = at().n2h_1.qj(n, "");
                        return r = at().n2h_1.qj(t, ""),
                            new W(i, r)
                    }

                    function Er(n, t) {
                        var r, i = ii(n);
                        return r = ii(t),
                            new W(i, r)
                    }

                    function Nr(n, t) {
                        return new W(n, n)
                    }

                    function Fr(n, t) {
                        var r, i = ui(n),
                            e = at().c2i_1.qj(i, "-"),
                            u = at().d2i_1.qj(e, "-"),
                            o = at().e2i_1.qj(u, "="),
                            l = at().f2i_1.qj(o, "="),
                            a = ui(t),
                            h = at().c2i_1.qj(a, "-"),
                            _ = at().d2i_1.qj(h, "-"),
                            s = at().e2i_1.qj(_, "=");
                        return r = at().f2i_1.qj(s, "="),
                            new W(l, r)
                    }

                    function xr() {
                        q = this;
                        var n, t = this;
                        Nt(),
                            n = $r,
                            t.y2j_1 = n;
                        var r, i = this;
                        Nt(),
                            r = kr,
                            i.z2j_1 = r;
                        var e, u = this;
                        Nt(),
                            e = yr,
                            u.a2k_1 = e;
                        var o, l = this;
                        Nt(),
                            o = mr,
                            l.b2k_1 = o;
                        var a, h = this;
                        Nt(),
                            a = br,
                            h.c2k_1 = a;
                        var _, s = this;
                        Nt(),
                            _ = qr,
                            s.d2k_1 = _;
                        var c, f = this;
                        Nt(),
                            c = zr,
                            f.e2k_1 = c;
                        var v, d = this;
                        Nt(),
                            v = Cr,
                            d.f2k_1 = v;
                        var g, j = this;
                        Nt(),
                            g = Ar,
                            j.g2k_1 = g;
                        var w, p = this;
                        Nt(),
                            w = Sr,
                            p.h2k_1 = w;
                        var $, k = this;
                        Nt(),
                            $ = Er,
                            k.i2k_1 = $,
                            this.j2k_1 = Nr;
                        var y, m = this;
                        Nt(),
                            y = Fr,
                            m.k2k_1 = y
                    }

                    function Gr() {
                        return null == q && new xr,
                            q
                    }

                    function Or() {
                        return Dr(),
                            z
                    }

                    function Tr() {
                        return Dr(),
                            C
                    }

                    function Rr(n) {
                        return Dr(),
                            n.length > 5
                    }

                    function Pr(n, t) {
                        Dr();
                        var r = at().g2i_1.oj(n, 0, 2, null),
                            i = at().g2i_1.oj(t, 0, 2, null);
                        if (jn(r) !== jn(i))
                            return !1;
                        var e = pn(wn(r, Mr)),
                            u = pn(wn(i, Wr));
                        return J(e, u)
                    }

                    function Ir(n, t) {
                        Dr();
                        var r = $n(n, t);
                        return 1 === r || r / nn(n) <= .15
                    }

                    function Lr(n, t, r) {
                        return Dr(),
                            !(!Rr(n) || !Pr(n, t)) && Ir(n, t)
                    }

                    function Mr(n) {
                        return Dr(),
                            n.p2()
                    }

                    function Wr(n) {
                        return Dr(),
                            n.p2()
                    }

                    function Dr() {
                        A || (A = !0,
                            z = Lr,
                            C = new Kn("LevenshteinPlus", Or(), gt(), Gr().j2k_1))
                    }

                    function Jr() {
                        return Ur(),
                            S
                    }

                    function Br() {
                        return Ur(),
                            E
                    }

                    function Kr(n) {
                        return Ur(),
                            at().w2h_1.qj(n, "")
                    }

                    function Yr(n, t, r) {
                        Ur();
                        var i = r.b5();
                        return "en" === r.c5() && "en" === i && (!!at().w2h_1.lj(n) || at().w2h_1.lj(t))
                    }

                    function Hr() {
                        var n = function (n) {
                            return Kr(n)
                        };
                        return n.callableName = "removeEnglishArticles",
                            n
                    }

                    function Ur() {
                        if (N)
                        ;
                        else {
                            N = !0,
                                S = Yr;
                            var n = gt(),
                                t = Jr();
                            E = Pn("NoArticlesForEnglishForLevenshteinPlus", t, n, Hr())
                        }
                    }

                    function Qr(n) {
                        return function (t, r, i) {
                            return !n(t, r, i)
                        }
                    }

                    function Vr(n) {
                        return function (t, r, i) {
                            return !n(t, r, i)
                        }
                    }

                    function Xr() {
                        F = this;
                        var n, t = this,
                            r = (At(),
                                xn("Convert to lower case", Qr(pr().q2j_1), null, Gr().a2k_1, 4, null)),
                            i = xn("Convert pinyin", pr().u2j_1, null, Gr().y2j_1, 4, null),
                            e = xn("Remove whitespace if we do not care about it", pr().r2j_1, null, Gr().h2k_1, 4, null),
                            u = ar().t2i_1,
                            o = ar().w2i_1;
                        At(),
                            n = [r, i, e, u, o, xn("Convert to lower case if not case sensitive", Vr(pr().q2j_1), null, Gr().a2k_1, 4, null), ar().g2j_1, Tn("Always remove punctuation", !1, null, Gr().f2k_1, 6, null), Tn("Trim leading and trailing whitespace regardless of language", !1, null, Gr().i2k_1, 6, null), Tn("postProcess", !1, null, Gr().k2k_1, 6, null), Br(), Tr()],
                            t.m2j_1 = n;
                        var l, a = this,
                            h = [ar().i2j_1],
                            _ = this.m2j_1;
                        l = h.concat(_),
                            a.n2j_1 = Qn("Include content in parentheses", null, null, l, 6, null);
                        var s, c = this,
                            f = [ar().j2j_1],
                            v = this.m2j_1;
                        s = f.concat(v),
                            c.o2j_1 = Qn("Ignore content in parentheses", null, null, s, 6, null);
                        var d, g = this;
                        d = [this.n2j_1, this.o2j_1],
                            g.p2j_1 = d
                    }

                    function Zr() {
                        return null == F && new Xr,
                            F
                    }

                    function ni(n, t) {
                        if (null == n || null == t)
                            return null;
                        var r = t.mj(n, 0, 2, null),
                            i = null == r ? null : r.kk();
                        return null == i ? null : kn(i)
                    }

                    function ti(n, t) {
                        var r, i = t;
                        return null != (r = null == i || null == n ? null : n.lj(i)) && r
                    }

                    function ri() {
                        return _i(),
                            x
                    }

                    function ii(n) {
                        _i();
                        var t, r = n;
                        return null == (t = null == r ? null : at().q2h_1.qj(r, "")) ? "" : t
                    }

                    function ei(n) {
                        return _i(),
                            at().o2h_1.qj(n, "")
                    }

                    function ui(n) {
                        return _i(),
                            at().n2h_1.qj(n, " ")
                    }

                    function oi(n) {
                        return _i(),
                            at().p2h_1.rj(n, ai)
                    }

                    function li(n) {
                        _i();
                        var t = yn(n);
                        return gn(t, "", null, null, 0, null, hi, 30, null)
                    }

                    function ai(n) {
                        return _i(),
                            n.kk().i(1)
                    }

                    function hi(n) {
                        _i();
                        var t = ri().d3(n);
                        return null == t ? mn(n.ma_1) : t
                    }

                    function _i() {
                        G || (G = !0,
                            x = zn([ln(new qn(bn(8217)), "'"), ln(new qn(bn(8217)), "'"), ln(new qn(bn(8216)), "'"), ln(new qn(bn(180)), "'"), ln(new qn(bn(8221)), '"'), ln(new qn(bn(8220)), '"'), ln(new qn(bn(8230)), "..."), ln(new qn(bn(9)), " "), ln(new qn(bn(8194)), " "), ln(new qn(bn(0)), ""), ln(new qn(bn(8211)), "-"), ln(new qn(bn(173)), ""), ln(new qn(bn(12305)), "] "), ln(new qn(bn(12304)), " ["), ln(new qn(bn(215)), "x"), ln(new qn(bn(537)), "ş"), ln(new qn(bn(339)), "oe"), ln(new qn(bn(230)), "ae"), ln(new qn(bn(198)), "AE"), ln(new qn(bn(1072)), "a"), ln(new qn(bn(1040)), "A"), ln(new qn(bn(1077)), "e"), ln(new qn(bn(1045)), "E"), ln(new qn(bn(1089)), "c"), ln(new qn(bn(1057)), "C"), ln(new qn(bn(1091)), "y"), ln(new qn(bn(1059)), "Y"), ln(new qn(bn(12288)), " "), ln(new qn(bn(12289)), ","), ln(new qn(bn(12290)), "."), ln(new qn(bn(12316)), "~"), ln(new qn(bn(65292)), ", "), ln(new qn(bn(65294)), ". "), ln(new qn(bn(65281)), "! "), ln(new qn(bn(65311)), "? "), ln(new qn(bn(65307)), "; "), ln(new qn(bn(65306)), ": "), ln(new qn(bn(65288)), " ("), ln(new qn(bn(65289)), ") "), ln(new qn(bn(65374)), "~ ")]))
                    }

                    function si() {
                        O = this
                    }

                    function ci() {
                        return null == O && new si,
                            O
                    }

                    function fi(n) {
                        this.l2k_1 = n
                    }

                    function vi(n) {
                        var t = n.answerLanguage,
                            r = null == t ? "" : t,
                            i = n.promptLanguage,
                            e = null == i ? "" : i,
                            u = n.promptText,
                            o = null == u ? "" : u,
                            l = n.gradingSettings,
                            a = null == l ? null : gi(l);
                        return new ht(r, e, o, null == a ? new tt(!1, !1, !1) : a)
                    }

                    function di(n) {
                        var t = n,
                            r = {};
                        r.isCorrect = t.l2g_1;
                        var i = t.m2g_1;
                        return r.suggestion = null == i ? null : ji(i),
                            r
                    }

                    function gi(n) {
                        var t, r, i, e = n[dt().o2i_1],
                            u = null != (t = Cn(e) ? e : null) && t,
                            o = n[gt().o2i_1],
                            l = null != (r = Cn(o) ? o : null) && r,
                            a = n[jt().o2i_1];
                        return i = Cn(a) ? a : null,
                            new tt(u, l, null != i && i)
                    }

                    function ji(n) {
                        if (null == n)
                            return null;
                        var t = n,
                            r = {};
                        return r.action = t.m2k_1,
                            r.suggestedSetting = t.n2k_1,
                            r
                    }

                    function wi() {
                        T = this
                    }

                    function pi() {
                        return null == T && new wi,
                            T
                    }

                    function $i(n, t, r) {
                        var i = vi(r);
                        return pr().q2j_1(n, t, i)
                    }

                    function ki(n, t, r) {
                        return mi.call(r, n.r2i_1, t.o2i_1),
                            r
                    }

                    function yi(n, t) {
                        return ki(n, t, Object.create(mi.prototype))
                    }

                    function mi(n, t) {
                        this.m2k_1 = n,
                            this.n2k_1 = t,
                            this.o2k_1 = on(pt().l2i(this.m2k_1)),
                            this.p2k_1 = on(st().l2i(this.n2k_1))
                    }

                    function bi(n) {
                        return qi(n)
                    }

                    function qi(n) {
                        var t = "function" == typeof "".normalize ? n.normalize() : n;
                        return null != t && "string" == typeof t ? t : D()
                    }

                    function zi(n) {
                        Object.defineProperty(n, "DefaultGraderFactoryJs", {
                                configurable: !0,
                                get: ci
                            }),
                            n.GraderJs = fi,
                            Object.defineProperty(n, "LearnModeGraderFactoryJs", {
                                configurable: !0,
                                get: pi
                            }),
                            n.isCaseSensitive = $i
                    }
                    return I(Nn, "IGrader", L, void 0, void 0, void 0, void 0, []),
                        I(En, "Grader", P, void 0, [Nn], void 0, void 0, []),
                        I(Kn, "GradingClause", P, void 0, void 0, void 0, void 0, []),
                        I(Yn, "GradingResult", P, void 0, void 0, void 0, void 0, []),
                        I(Vn, "Companion", K, void 0, void 0, void 0, void 0, []),
                        I(nt, "GradingRule", P, void 0, void 0, void 0, void 0, []),
                        I(tt, "GradingSettings", P, void 0, void 0, void 0, void 0, []),
                        I(lt, "RegexDefinitions", K, void 0, void 0, void 0, void 0, []),
                        I(ht, "SubmissionContext", P, void 0, void 0, void 0, void 0, []),
                        I(_t, "Companion", K, void 0, void 0, void 0, void 0, []),
                        I(vt, "GradingSetting", P, rn, void 0, void 0, void 0, []),
                        I(wt, "Companion", K, void 0, void 0, void 0, void 0, []),
                        I(yt, "GradingSettingsSuggestionAction", P, rn, void 0, void 0, void 0, []),
                        I(Ct, "Conditions", K, void 0, void 0, void 0, void 0, []),
                        I(Et, "Transforms", K, void 0, void 0, void 0, void 0, []),
                        I(Ft, "GraderFactory", K, void 0, void 0, void 0, void 0, []),
                        I(lr, "ClauseImpls", K, void 0, void 0, void 0, void 0, []),
                        I(wr, "ConditionImpls", K, void 0, void 0, void 0, void 0, []),
                        I(xr, "TransformImpls", K, void 0, void 0, void 0, void 0, []),
                        I(Xr, "StudyModeRules", K, void 0, void 0, void 0, void 0, []),
                        I(si, "DefaultGraderFactoryJs", K, void 0, void 0, void 0, void 0, []),
                        I(fi, "GraderJs", P, void 0, void 0, void 0, void 0, []),
                        I(wi, "LearnModeGraderFactoryJs", K, void 0, void 0, void 0, void 0, []),
                        I(mi, "GradingSettingsSuggestion", P, void 0, void 0, void 0, void 0, []),
                        En.prototype.n2g = function (n, t, r) {
                            return this.o2g(n, t, r).l2g_1
                        },
                        En.prototype.o2g = function (n, t, r) {
                            return Sn(this, An(n, this), An(t, this), r)
                        },
                        Kn.prototype.x2g = function (n) {
                            return null == this.v2g_1 || n.c2h(this.v2g_1)
                        },
                        Yn.prototype.toString = function () {
                            return "GradingResult(isCorrect=" + this.l2g_1 + ", suggestion=" + this.m2g_1 + ")"
                        },
                        Yn.prototype.hashCode = function () {
                            var n = 0 | this.l2g_1;
                            return n = R(n, 31) + (null == this.m2g_1 ? 0 : this.m2g_1.hashCode()) | 0
                        },
                        Yn.prototype.equals = function (n) {
                            if (this === n)
                                return !0;
                            if (!(n instanceof Yn))
                                return !1;
                            var t = n instanceof Yn ? n : D();
                            return this.l2g_1 === t.l2g_1 && !!J(this.m2g_1, t.m2g_1)
                        },
                        Vn.prototype.d2h = function (n, t, r) {
                            var i = t,
                                e = i.b5(),
                                u = i.c5(),
                                o = n.u2g_1(e, u, r) ? n.w2g_1(e, u) : new W(e, u),
                                l = o.b5(),
                                a = o.c5(),
                                h = Hn(this, n, e, u, l, a, r);
                            return !n.x2g(r) && (l = e,
                                    a = u),
                                new B(l, a, h)
                        },
                        nt.prototype.f2h = function (n) {
                            var t, r = "(Prefixed) " + this.g2g_1;
                            return t = Y([n, this.j2g_1]),
                                new nt(r, this.h2g_1, this.i2g_1, t)
                        },
                        nt.prototype.k2g = function (n, t, r) {
                            return Zn(this, n, t, new ht(this.h2g_1, this.i2g_1, "", new tt(!1, !1, !1)).g2h(r))
                        },
                        nt.prototype.e2h = function (n, t, r) {
                            for (var i = this.j2g_1, e = new B(n, t, null), u = i, o = 0, l = u.length; o < l;) {
                                var a = u[o];
                                o = o + 1 | 0;
                                var h = e,
                                    _ = Xn().d2h(a, h, r),
                                    s = _.b5(),
                                    c = _.c5(),
                                    f = _.oc(),
                                    v = h.nc_1;
                                e = new B(s, c, null == v ? f : v)
                            }
                            return e
                        },
                        tt.prototype.c2h = function (n) {
                            var t;
                            switch (n.r1_1) {
                            case 0:
                                t = this.h2h_1;
                                break;
                            case 1:
                                t = this.i2h_1;
                                break;
                            case 2:
                                t = this.j2h_1;
                                break;
                            default:
                                H()
                            }
                            return t
                        },
                        tt.prototype.k2h = function (n) {
                            return new tt(!!this.h2h_1 || n.h2h_1, !!this.i2h_1 || n.i2h_1, !!this.j2h_1 || n.j2h_1)
                        },
                        tt.prototype.l2h = function (n, t, r) {
                            return new tt(n, t, r)
                        },
                        tt.prototype.m2h = function (n, t, r, i, e) {
                            return 0 != (1 & i) && (n = this.h2h_1),
                                0 != (2 & i) && (t = this.i2h_1),
                                0 != (4 & i) && (r = this.j2h_1),
                                this.l2h(n, t, r)
                        },
                        tt.prototype.toString = function () {
                            return "GradingSettings(acceptsPartialAnswer=" + this.h2h_1 + ", acceptsAnswersWithTypos=" + this.i2h_1 + ", acceptsSmartGrading=" + this.j2h_1 + ")"
                        },
                        tt.prototype.hashCode = function () {
                            var n = 0 | this.h2h_1;
                            return n = R(n, 31) + (0 | this.i2h_1) | 0,
                                n = R(n, 31) + (0 | this.j2h_1) | 0
                        },
                        tt.prototype.equals = function (n) {
                            if (this === n)
                                return !0;
                            if (!(n instanceof tt))
                                return !1;
                            var t = n instanceof tt ? n : D();
                            return this.h2h_1 === t.h2h_1 && this.i2h_1 === t.i2h_1 && this.j2h_1 === t.j2h_1
                        },
                        ht.prototype.g2h = function (n) {
                            var t, r = n.y2g_1,
                                i = 0 === nn(r) ? this.y2g_1 : n.y2g_1;
                            if (null == n.z2g_1)
                                t = !0;
                            else {
                                var e = n.z2g_1;
                                t = 0 === nn(e)
                            }
                            var u, o = t ? this.z2g_1 : n.z2g_1;
                            if (null == n.a2h_1)
                                u = !0;
                            else {
                                var l = n.a2h_1;
                                u = 0 === nn(l)
                            }
                            return new ht(i, o, u ? this.a2h_1 : n.a2h_1, this.b2h_1.k2h(n.b2h_1))
                        },
                        ht.prototype.c2h = function (n) {
                            return this.b2h_1.c2h(n)
                        },
                        ht.prototype.b5 = function () {
                            return this.y2g_1
                        },
                        ht.prototype.c5 = function () {
                            return this.z2g_1
                        },
                        ht.prototype.oc = function () {
                            return this.a2h_1
                        },
                        ht.prototype.j2i = function (n, t, r, i) {
                            return new ht(n, t, r, i)
                        },
                        ht.prototype.k2i = function (n, t, r, i, e, u) {
                            return 0 != (1 & e) && (n = this.y2g_1),
                                0 != (2 & e) && (t = this.z2g_1),
                                0 != (4 & e) && (r = this.a2h_1),
                                0 != (8 & e) && (i = this.b2h_1),
                                this.j2i(n, t, r, i)
                        },
                        ht.prototype.toString = function () {
                            return "SubmissionContext(answerLanguage=" + this.y2g_1 + ", promptLanguage=" + this.z2g_1 + ", promptText=" + this.a2h_1 + ", gradingSettings=" + this.b2h_1 + ")"
                        },
                        ht.prototype.hashCode = function () {
                            var n = tn(this.y2g_1);
                            return n = R(n, 31) + (null == this.z2g_1 ? 0 : tn(this.z2g_1)) | 0,
                                n = R(n, 31) + (null == this.a2h_1 ? 0 : tn(this.a2h_1)) | 0,
                                n = R(n, 31) + this.b2h_1.hashCode() | 0
                        },
                        ht.prototype.equals = function (n) {
                            if (this === n)
                                return !0;
                            if (!(n instanceof ht))
                                return !1;
                            var t = n instanceof ht ? n : D();
                            return this.y2g_1 === t.y2g_1 && this.z2g_1 == t.z2g_1 && this.a2h_1 == t.a2h_1 && !!this.b2h_1.equals(t.b2h_1)
                        },
                        _t.prototype.l2i = function (n) {
                            var t;
                            n: {
                                for (var r = ct(), i = 0, e = r.length; i < e;) {
                                    var u = r[i];
                                    if (i = i + 1 | 0,
                                        u.o2i_1 === n) {
                                        t = u;
                                        break n
                                    }
                                }
                                t = null
                            }
                            return t
                        },
                        wt.prototype.l2i = function (n) {
                            var t;
                            n: {
                                for (var r = $t(), i = 0, e = r.length; i < e;) {
                                    var u = r[i];
                                    if (i = i + 1 | 0,
                                        u.r2i_1 === n) {
                                        t = u;
                                        break n
                                    }
                                }
                                t = null
                            }
                            return t
                        },
                        Ct.prototype.r2g = function (n) {
                            return n ? this.p2g_1 : this.q2g_1
                        },
                        Ft.prototype.l2j = function () {
                            for (var n = Zr().p2j_1, t = en(n.length), r = n, i = 0, e = r.length; i < e;) {
                                var u, o = r[i];
                                i = i + 1 | 0,
                                    u = o.f2h(xt().k2j_1.slice()),
                                    t.a(u)
                            }
                            return new En(un(t))
                        },
                        si.prototype.create = function () {
                            return new fi(xt().l2j())
                        },
                        fi.prototype.grade = function (n, t, r) {
                            return this.l2k_1.n2g(n, t, vi(r))
                        },
                        fi.prototype.gradeWithSuggestions = function (n, t, r) {
                            return di(this.l2k_1.o2g(n, t, vi(r)))
                        },
                        wi.prototype.create = function () {
                            return new fi(xt().l2j())
                        },
                        mi.prototype.toString = function () {
                            return "GradingSettingsSuggestion(action=" + this.m2k_1 + ", suggestedSetting=" + this.n2k_1 + ")"
                        },
                        mi.prototype.hashCode = function () {
                            var n = tn(this.m2k_1);
                            return n = R(n, 31) + tn(this.n2k_1) | 0
                        },
                        mi.prototype.equals = function (n) {
                            if (this === n)
                                return !0;
                            if (!(n instanceof mi))
                                return !1;
                            var t = n instanceof mi ? n : D();
                            return this.m2k_1 === t.m2k_1 && this.n2k_1 === t.n2k_1
                        },
                        zi(n),
                        n.$jsExportAll$ = zi,
                        n.$_$ = n.$_$ || {},
                        n.$_$.a = tt,
                        n.$_$.b = ht,
                        n.$_$.c = En,
                        n.$_$.d = Nn,
                        n.$_$.e = xt,
                        n.$_$.f = bi,
                        n
                }) ? i.apply(t, e) : i) || (n.exports = u)
        }
    }
]);
(self.webpackChunk_quizlet_web_index = self.webpackChunk_quizlet_web_index || []).push([["study_modes_core"], {
    "./node_modules/@quizlet/study-modes-core/quizlet-shared-kotlin-study-modes-core.js": function(t, n, i) {
        var e, r, o;
        r = [n, i("./node_modules/@quizlet/kotlin-stdlib/kotlin-kotlin-stdlib-js-ir.js"), i("./node_modules/@quizlet/quizlet-shared-config/quizlet-shared-kotlin-quizlet-shared-config.js"), i("./node_modules/@quizlet/quizlet-data/quizlet-shared-kotlin-quizlet-data.js"), i("./node_modules/@quizlet/grader/quizlet-shared-kotlin-grader.js"), i("./node_modules/@quizlet/koin-core/core-koin-core-js-ir.js"), i("./node_modules/@quizlet/utils/quizlet-shared-kotlin-utils.js"), i("./node_modules/@quizlet/serialization-utils/quizlet-shared-kotlin-serialization-utils.js"), i("./node_modules/@quizlet/kotlinx-serialization-core/kotlinx-serialization-kotlinx-serialization-core-js-ir.js"), i("./node_modules/@quizlet/dependency-injection-core/quizlet-shared-kotlin-dependency-injection-core.js"), i("./node_modules/@quizlet/experiment-manager/quizlet-shared-kotlin-experiment-manager.js"), i("./node_modules/@quizlet/quizlet-api-models/quizlet-shared-kotlin-quizlet-api-models.js"), i("./node_modules/@quizlet/kotlinx-coroutines-core/kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js")],
        e = function(t, n, i, e, r, o, u, s, a, l, h, _, c) {
            "use strict";
            var f, d, p, v, y, w, b, g, k, $, m, j, q, C, x, S, z, T, M, I, A, O, E, R, Q, G, P, D, L, B, N, F, W, U, V, H, Y, K, Z, X, J, tt, nt, it, et, rt, ot, ut, st, at, lt, ht, _t, ct, ft, dt, pt, vt, yt, wt, bt, gt, kt, $t, mt, jt, qt, Ct, xt, St, zt, Tt, Mt, It, At, Ot, Et, Rt, Qt, Gt, Pt, Dt, Lt, Bt, Nt, Ft, Wt, Ut, Vt, Ht, Yt, Kt, Zt, Xt, Jt, tn, nn, en, rn, on, un, sn, an, ln, hn, _n, cn, fn, dn, pn, vn, yn, wn, bn, gn, kn, $n, mn, jn, qn, Cn, xn, Sn, zn, Tn, Mn, In, An, On, En, Rn, Qn, Gn, Pn, Dn, Ln, Bn, Nn, Fn, Wn, Un, Vn, Hn, Yn, Kn, Zn, Xn, Jn, ti, ni, ii, ei, ri, oi, ui, si, ai, li, hi, _i, ci, fi, di, pi, vi, yi, wi, bi, gi, ki, $i, mi, ji, qi, Ci, xi, Si, zi, Ti, Mi, Ii, Ai, Oi, Ei, Ri, Qi, Gi, Pi, Di, Li, Bi, Ni, Fi, Wi, Ui, Vi, Hi, Yi, Ki, Zi, Xi, Ji, te, ne, ie, ee, re, oe, ue, se, ae, le, he, _e, ce, fe, de, pe, ve, ye, we, be, ge, ke, $e, me, je, qe, Ce, xe, Se, ze, Te, Me, Ie, Ae, Oe, Ee, Re, Qe, Ge, Pe, De, Le, Be, Ne, Fe, We, Ue, Ve, He, Ye, Ke, Ze, Xe, Je, tr, nr, ir, er, rr, or, ur, sr, ar, lr, hr, _r, cr, fr, dr, pr, vr, yr, wr, br, gr, kr, $r, mr, jr, qr, Cr, xr, Sr, zr, Tr, Mr, Ir, Ar, Or, Er, Rr, Qr, Gr, Pr, Dr, Lr, Br, Nr, Fr, Wr, Ur, Vr, Hr, Yr, Kr = Math.imul, Zr = n.$_$.ee, Xr = n.$_$.fa, Jr = n.$_$.kb, to = n.$_$.p4, no = n.$_$.ud, io = i.$_$.a2, eo = n.$_$.gf, ro = i.$_$.w1, oo = i.$_$.z1, uo = i.$_$.x1, so = i.$_$.r1, ao = n.$_$.e7, lo = n.$_$.b7, ho = i.$_$.d2, _o = i.$_$.b2, co = i.$_$.c2, fo = e.$_$.a, po = r.$_$.e, vo = o.$_$.e, yo = o.$_$.b, wo = n.$_$.i6, bo = r.$_$.c, go = n.$_$.e, ko = o.$_$.h, $o = o.$_$.m, mo = o.$_$.i, jo = o.$_$.n, qo = r.$_$.d, Co = o.$_$.q, xo = u.$_$.f, So = u.$_$.e, zo = o.$_$.a, To = o.$_$.l, Mo = e.$_$.b, Io = n.$_$.yd, Ao = o.$_$.j, Oo = n.$_$.d, Eo = o.$_$.c, Ro = n.$_$.wd, Qo = o.$_$.d, Go = n.$_$.da, Po = n.$_$.ca, Do = n.$_$.l2, Lo = n.$_$.ob, Bo = i.$_$.c, No = n.$_$.c7, Fo = n.$_$.tb, Wo = n.$_$.e1, Uo = i.$_$.t1, Vo = u.$_$.j, Ho = i.$_$.v1, Yo = i.$_$.q1, Ko = i.$_$.y1, Zo = i.$_$.s1, Xo = i.$_$.y2, Jo = i.$_$.w2, tu = i.$_$.x2, nu = u.$_$.h, iu = n.$_$.ia, eu = n.$_$.z9, ru = s.$_$.c, ou = n.$_$.jb, uu = n.$_$.h, su = n.$_$.af, au = a.$_$.o2, lu = l.$_$.b, hu = h.$_$.a, _u = n.$_$.ha, cu = a.$_$.d, fu = n.$_$.pa, du = a.$_$.n2, pu = a.$_$.r, vu = a.$_$.g, yu = a.$_$.h2, wu = a.$_$.i2, bu = a.$_$.q2, gu = n.$_$.y1, ku = _.$_$.w1, $u = a.$_$.y, mu = a.$_$.u, ju = n.$_$.zd, qu = n.$_$.ff, Cu = a.$_$.t, xu = n.$_$.d2, Su = n.$_$.a2, zu = n.$_$.q1, Tu = n.$_$.oa, Mu = n.$_$.mb, Iu = n.$_$.u9, Au = n.$_$.g9, Ou = i.$_$.j, Eu = i.$_$.k, Ru = c.$_$.h, Qu = n.$_$.ya, Gu = c.$_$.c, Pu = i.$_$.k3, Du = r.$_$.b, Lu = o.$_$.g, Bu = r.$_$.a, Nu = n.$_$.ac, Fu = n.$_$.ma, Wu = n.$_$.v8, Uu = n.$_$.u7, Vu = u.$_$.i, Hu = n.$_$.w, Yu = n.$_$.cf, Ku = n.$_$.f5, Zu = n.$_$.a7, Xu = n.$_$.o5, Ju = n.$_$.v, ts = n.$_$.j8, ns = n.$_$.f6, is = n.$_$.z6, es = n.$_$.r7, rs = n.$_$.g6, os = n.$_$.la, us = n.$_$.na, ss = n.$_$.rd, as = n.$_$.e9, ls = n.$_$.q7, hs = n.$_$.ga, _s = n.$_$.h6, cs = n.$_$.n6, fs = i.$_$.n, ds = i.$_$.n2, ps = i.$_$.v2, vs = n.$_$.s4, ys = n.$_$.l5, ws = i.$_$.g2, bs = n.$_$.f4, gs = n.$_$.s7, ks = n.$_$.b8, $s = n.$_$.y8, ms = n.$_$.j6, js = n.$_$.w8, qs = n.$_$.x8, Cs = i.$_$.f, xs = n.$_$.t7, Ss = n.$_$.k6, zs = i.$_$.b, Ts = n.$_$.o6, Ms = _.$_$.r, Is = _.$_$.t, As = _.$_$.u, Os = n.$_$.j7, Es = _.$_$.w, Rs = n.$_$.bf, Qs = n.$_$.zb, Gs = _.$_$.f1, Ps = i.$_$.n1, Ds = i.$_$.o1, Ls = n.$_$.o8, Bs = i.$_$.l1, Ns = n.$_$.e8, Fs = n.$_$.r8, Ws = i.$_$.p1, Us = i.$_$.m1, Vs = _.$_$.x, Hs = _.$_$.y, Ys = _.$_$.s, Ks = n.$_$.z7, Zs = n.$_$.m5, Xs = n.$_$.u8, Js = _.$_$.k, ta = n.$_$.h1, na = n.$_$.a8, ia = n.$_$.xb, ea = i.$_$.u1, ra = n.$_$.u6, oa = i.$_$.z2, ua = n.$_$.ua, sa = n.$_$.nd, aa = n.$_$.n1, la = n.$_$.hb, ha = n.$_$.h8, _a = n.$_$.j, ca = n.$_$.pd, fa = n.$_$.d7, da = _.$_$.g, pa = _.$_$.b, va = _.$_$.f, ya = a.$_$.t2, wa = _.$_$.j, ba = a.$_$.s2, ga = _.$_$.e, ka = n.$_$.re, $a = n.$_$.b, ma = a.$_$.f3, ja = a.$_$.z2, qa = _.$_$.d, Ca = _.$_$.d1, xa = a.$_$.w2, Sa = s.$_$.d, za = n.$_$.f8, Ta = i.$_$.g, Ma = a.$_$.f2, Ia = i.$_$.w3, Aa = i.$_$.v3, Oa = _.$_$.i1, Ea = _.$_$.j1, Ra = _.$_$.l1, Qa = a.$_$.j2, Ga = _.$_$.q, Pa = _.$_$.m, Da = _.$_$.n, La = _.$_$.o, Ba = _.$_$.p, Na = _.$_$.o1, Fa = _.$_$.p1, Wa = _.$_$.q1, Ua = _.$_$.r1, Va = i.$_$.t3, Ha = i.$_$.u3, Ya = i.$_$.z3, Ka = i.$_$.y3, Za = i.$_$.b4, Xa = a.$_$.v, Ja = _.$_$.t1, tl = i.$_$.p3, nl = _.$_$.s1, il = i.$_$.a4, el = i.$_$.c4, rl = a.$_$.c, ol = a.$_$.s, ul = n.$_$.f1, sl = n.$_$.ue, al = n.$_$.ze, ll = n.$_$.o7, hl = n.$_$.p6, _l = n.$_$.n7, cl = i.$_$.e, fl = n.$_$.n5, dl = i.$_$.d, pl = i.$_$.i2, vl = u.$_$.d, yl = a.$_$.k2, wl = i.$_$.o3, bl = n.$_$.qd, gl = i.$_$.r3, kl = i.$_$.l4, $l = _.$_$.x1, ml = n.$_$.r, jl = n.$_$.b9, ql = n.$_$.h7, Cl = n.$_$.vc, xl = u.$_$.k, Sl = n.$_$.pb, zl = n.$_$.f7, Tl = n.$_$.q5, Ml = n.$_$.i2, Il = n.$_$.aa, Al = n.$_$.q, Ol = n.$_$.c1, El = n.$_$.q6, Rl = n.$_$.be, Ql = n.$_$.k5, Gl = n.$_$.k, Pl = u.$_$.l, Dl = n.$_$.xd, Ll = n.$_$.x1, Bl = _.$_$.l, Nl = _.$_$.v, Fl = n.$_$.g8, Wl = n.$_$.v6, Ul = i.$_$.k2, Vl = i.$_$.h2, Hl = n.$_$.uc, Yl = n.$_$.mc, Kl = n.$_$.pc, Zl = n.$_$.bd, Xl = n.$_$.zc, Jl = n.$_$.rc, th = n.$_$.fb, nh = n.$_$.fe, ih = n.$_$.ka, eh = n.$_$.ad, rh = n.$_$.ye, oh = n.$_$.f, uh = n.$_$.o1, sh = n.$_$.wb, ah = n.$_$.hc, lh = n.$_$.gc, hh = n.$_$.l7, _h = n.$_$.i8, ch = n.$_$.kc, fh = n.$_$.s, dh = n.$_$.l, ph = n.$_$.tc, vh = n.$_$.cc, yh = n.$_$.qc, wh = _.$_$.e1, bh = _.$_$.c, gh = r.$_$.f, kh = u.$_$.c, $h = s.$_$.e, mh = s.$_$.f, jh = i.$_$.k4, qh = _.$_$.y1, Ch = a.$_$.x;
            function xh(t, n, i, e) {
                return 0 != (1 & i) && (t = wo()),
                0 != (2 & i) && (n = Vu()),
                null == e ? this.d32(t, n) : e(t, n)
            }
            function Sh() {
                return this.r32() === this.s32()
            }
            function zh() {
                return this.r32() / this.s32() * 100
            }
            function Th(t, n, i, e) {
                return 0 != (2 & i) && (n = null),
                null == e ? this.q3c(t, n) : e(t, n)
            }
            function Mh(t, n, i, e) {
                return 0 != (2 & i) && (n = null),
                null == e ? this.t3c(t, n) : e(t, n)
            }
            function Ih(t, n, i, e) {
                return 0 != (2 & i) && (n = null),
                null == e ? this.v3c(t, n) : e(t, n)
            }
            function Ah(t, n, i, e) {
                return 0 != (2 & i) && (n = null),
                null == e ? this.x3c(t, n) : e(t, n)
            }
            function Oh() {
                return u_(),
                f
            }
            function Eh() {
                return u_(),
                d
            }
            function Rh() {
                return u_(),
                p
            }
            function Qh() {
                return u_(),
                v
            }
            function Gh() {
                return u_(),
                y
            }
            function Ph(t, n) {
                this.q2k_1 = t,
                this.r2k_1 = n
            }
            function Dh() {
                if (g)
                    return to();
                g = !0,
                w = new Lh("PRODUCTION",0,1),
                b = new Lh("RECOGNITION",1,2)
            }
            function Lh(t, n, i) {
                no.call(this, t, n),
                this.u2k_1 = i
            }
            function Bh() {
                if (m)
                    return to();
                m = !0,
                new Nh("TRIVIAL",0,1),
                k = new Nh("EASY",1,2),
                new Nh("MEDIUM",2,3),
                $ = new Nh("HARD",3,4)
            }
            function Nh(t, n, i) {
                no.call(this, t, n),
                this.x2k_1 = i
            }
            function Fh() {
                if (x)
                    return to();
                x = !0,
                j = new Wh("PRIMARY_TEXT",0,0),
                q = new Wh("SECONDARY_TEXT",1,1),
                C = new Wh("LOCATION",2,2)
            }
            function Wh(t, n, i) {
                no.call(this, t, n),
                this.a2l_1 = i
            }
            function Uh() {
                return S
            }
            function Vh() {
                return z
            }
            function Hh() {
                return T
            }
            function Yh() {
                return M
            }
            function Kh() {
                return I
            }
            function Zh() {
                return A
            }
            function Xh() {
                return O
            }
            function Jh() {
                return Dh(),
                w
            }
            function t_() {
                return Dh(),
                b
            }
            function n_() {
                return Bh(),
                k
            }
            function i_() {
                return Bh(),
                $
            }
            function e_() {
                return Fh(),
                j
            }
            function r_() {
                return Fh(),
                q
            }
            function o_() {
                return Fh(),
                C
            }
            function u_() {
                E || (E = !0,
                f = ao([eo(io(), new Ph(Jh(),i_())), eo(ro(), new Ph(t_(),n_())), eo(oo(), new Ph(t_(),n_())), eo(uo(), new Ph(Jh(),i_())), eo(so(), new Ph(Jh(),i_()))]),
                lo([o_(), e_(), r_()]),
                ao([eo(e_(), lo([o_(), r_()])), eo(r_(), lo([e_(), o_()])), eo(o_(), lo([e_(), r_()]))]),
                d = lo([io(), ro(), uo(), so()]),
                p = lo([ho(), _o(), co()]),
                lo([t_(), Jh()]),
                lo([Jh(), t_()]),
                v = new Mk(1,1),
                y = new Gk(1,1))
            }
            function s_() {
                return c_(),
                R
            }
            function a_(t) {
                var n;
                c_(),
                t.h11([fo()]);
                var i, e, r = l_(po()), o = vo().i10_1, u = yo(), s = wo();
                e = new ko(o,go(bo),null,r,u,s);
                var a, l, h = new $o(e);
                t.i11(h),
                t.a11_1 && t.l11(h),
                i = new mo(t,h),
                n = jo(i, null),
                Co(n, go(qo));
                var _, c = h_, f = vo().i10_1, d = yo(), p = wo();
                _ = new ko(f,go(xo),null,c,d,p);
                var v = new $o(_);
                t.i11(v),
                t.a11_1 && t.l11(v),
                l = new mo(t,v),
                a = jo(l, null),
                Co(a, go(So));
                var y, w, b = __, g = vo().i10_1, k = zo(), $ = wo();
                w = new ko(g,go(yd),null,b,k,$);
                var m = new To(w);
                return t.i11(m),
                y = new mo(t,m),
                Co(y, go(hd)),
                to()
            }
            function l_(t) {
                return function(n, i) {
                    return t.l2j()
                }
            }
            function h_(t, n) {
                return c_(),
                new xo
            }
            function __(t, n) {
                c_();
                var i, e = t.i12(go(qo), null, null), r = t.i12(go(So), null, null);
                try {
                    i = t.g12(go(Mo), null, null)
                } catch (a) {
                    if (!(a instanceof Ro))
                        throw a;
                    if (!(a instanceof Ao || a instanceof Io))
                        throw a;
                    var o = t.h12()
                      , u = "|- Encountered " + Oo(a).ph() + ": Falling back to null!"
                      , s = Eo();
                    o.xz(s) && o.wz(s, u),
                    i = null
                }
                return new yd(e,r,i)
            }
            function c_() {
                Q || (Q = !0,
                R = Qo(!1, a_, 1, null))
            }
            function f_() {
                return z_(),
                G
            }
            function d_(t) {
                var n;
                if (z_(),
                Go(t) > 0) {
                    var i, e = Po(t, 0);
                    i = Do(e).toLowerCase(),
                    n = Lo(i) + t.substring(1)
                } else
                    n = t;
                return n
            }
            function p_(t, n, i, e, r, o, u, s, a, l) {
                return 0 != (32 & s) && (o = null),
                0 != (64 & s) && (u = null),
                w_.call(l, t, n, i, e, r, o, u),
                l
            }
            function v_(t, n, i, e, r, o, u, s, a) {
                return p_(t, n, i, e, r, o, u, s, a, Object.create(w_.prototype))
            }
            function y_() {
                if (H)
                    return to();
                H = !0;
                for (var t = Bo(), n = Fo(No(t.length), 16), i = Wo(n), e = t, r = 0, o = e.length; r < o; ) {
                    var u = e[r];
                    r = r + 1 | 0;
                    var s = eo(u.q1_1, u.n20_1);
                    i.d5(s.z4_1, s.a5_1)
                }
                v_("TERM_SIDE", 0, 1, "enum", 2, i, null, 64, null);
                for (var a = [io(), Uo(), ro(), oo()], l = Fo(No(a.length), 16), h = Wo(l), _ = a, c = 0, f = _.length; c < f; ) {
                    var d = _[c];
                    c = c + 1 | 0;
                    var p = eo(d_(d.q1_1), d.a1z_1);
                    h.d5(p.z4_1, p.a5_1)
                }
                P = v_("TEST_QUESTION_TYPES", 1, 2, "bitmask", 15, null, h, 32, null),
                D = v_("TEST_QUESTION_COUNT", 2, 3, "int", 20, null, null, 96, null);
                var v = Vo(!1);
                v_("SHUFFLE", 3, 4, "boolean", v, null, null, 96, null);
                var y = Vo(!0);
                v_("INSTANT_FEEDBACK", 4, 5, "boolean", y, null, null, 96, null);
                var w = Vo(!1);
                v_("TAP_TO_PLAY_AUDIO", 5, 6, "boolean", w, null, null, 96, null),
                v_("TEST_SELECTED_ONLY_QUESTION_COUNT", 6, 7, "int", 0, null, null, 96, null);
                for (var b = [io(), Uo(), ro(), oo(), uo(), Ho(), Yo(), Ko(), Zo(), so()], g = Fo(No(b.length), 16), k = Wo(g), $ = b, m = 0, j = $.length; m < j; ) {
                    var q = $[m];
                    m = m + 1 | 0;
                    var C = eo(d_(q.q1_1), q.a1z_1);
                    k.d5(C.z4_1, C.a5_1)
                }
                L = v_("ASSISTANT_MODE_QUESTION_TYPES", 7, 8, "bitmask", 85, null, k, 32, null);
                var x = Vo(!1);
                v_("ASSISTANT_MODE_WORD_SIDE", 8, 9, "boolean", x, null, null, 96, null);
                var S = Vo(!0);
                v_("ASSISTANT_MODE_DEFINITION_SIDE", 9, 10, "boolean", S, null, null, 96, null);
                var z = Vo(!0);
                B = v_("ASSISTANT_MODE_WRITTEN_WORD_SIDE", 10, 11, "boolean", z, null, null, 96, null);
                var T = Vo(!0);
                N = v_("ASSISTANT_MODE_WRITTEN_DEFINITION_SIDE", 11, 12, "boolean", T, null, null, 96, null),
                F = v_("PROMPT_TERM_SIDES", 12, 13, "bitmask", 22, null, b_(), 32, null),
                W = v_("ANSWER_TERM_SIDES", 13, 14, "bitmask", 22, null, b_(), 32, null),
                v_("MATCH_MODE_SIDES", 14, 15, "bitmask", 22, null, b_(), 32, null),
                U = v_("TEST_PROMPT_TERM_SIDES", 15, 16, "bitmask", 22, null, b_(), 32, null),
                V = v_("TEST_ANSWER_TERM_SIDES", 16, 17, "bitmask", 22, null, b_(), 32, null);
                var M = Vo(!0);
                v_("TEST_SHOW_IMAGES", 17, 18, "boolean", M, null, null, 96, null);
                var I = Vo(!0);
                v_("LIVE_PLAY_MUSIC", 18, 19, "boolean", I, null, null, 96, null);
                var A = Vo(!1);
                v_("FLEXIBLE_GRADING_ACCEPT_PARTIAL_ANSWERS", 19, 20, "boolean", A, null, null, 96, null);
                var O = Vo(!1);
                v_("FLEXIBLE_GRADING_ACCEPT_ANSWERS_WITH_TYPOS", 20, 21, "boolean", O, null, null, 96, null)
            }
            function w_(t, n, i, e, r, o, u) {
                no.call(this, t, n),
                this.d2l_1 = i,
                this.e2l_1 = e,
                this.f2l_1 = r,
                this.g2l_1 = o,
                this.h2l_1 = u
            }
            function b_() {
                return z_(),
                f_()
            }
            function g_() {
                return y_(),
                P
            }
            function k_() {
                return y_(),
                D
            }
            function $_() {
                return y_(),
                L
            }
            function m_() {
                return y_(),
                B
            }
            function j_() {
                return y_(),
                N
            }
            function q_() {
                return y_(),
                F
            }
            function C_() {
                return y_(),
                W
            }
            function x_() {
                return y_(),
                U
            }
            function S_() {
                return y_(),
                V
            }
            function z_() {
                if (Y)
                    ;
                else {
                    Y = !0;
                    for (var t = [Xo(), Jo(), tu()], n = Fo(No(t.length), 16), i = Wo(n), e = t, r = 0, o = e.length; r < o; ) {
                        var u = e[r];
                        r = r + 1 | 0;
                        var s = eo(d_(u.q1_1), nu(u.n20_1).gb());
                        i.d5(s.z4_1, s.a5_1)
                    }
                    G = i
                }
            }
            function T_(t, n, i, e, r, o, u) {
                iu(this, t, void 0),
                this.i2l_1 = t,
                this.expectedAnswerStudiableItemId = n,
                this.actualAnswerStudiableItemId = i,
                this.answerHistoryStudiableItemIds = e,
                this.remainingStudiableItemIdsInRound = r,
                this.incorrectStudiableItemIdsInRound = o,
                this.studiableItemIdsAnsweredSinceRoundStart = u,
                eu(this, T_)
            }
            function M_() {
                return A_()
            }
            function I_() {
                tt = this,
                ru.call(this, "ContinueStudyingExtensionTaskVariant", R_())
            }
            function A_() {
                return Q_(),
                null == tt && new I_,
                tt
            }
            function O_() {
                nt = this;
                var t = this
                  , n = uu();
                t.p2l_1 = su(n, M_)
            }
            function E_() {
                return Q_(),
                null == nt && new O_,
                nt
            }
            function R_() {
                return [L_(), B_(), N_(), F_()]
            }
            function Q_() {
                if (it)
                    return to();
                it = !0,
                K = new G_("Control",0,"control"),
                Z = new G_("OriginalBehavior",1,"originalBehavior"),
                X = new G_("OptimalBehavior",2,"optimalBehavior"),
                J = new G_("OptimalBehaviorWrittenOrMCQ",3,"optimalBehaviorWrittenOrMcq"),
                E_()
            }
            function G_(t, n, i) {
                no.call(this, t, n),
                this.s2l_1 = i
            }
            function P_() {
                et = this,
                this.t2l_1 = "continue_studying_from_tasks"
            }
            function D_() {
                return null == et && new P_,
                et
            }
            function L_() {
                return Q_(),
                K
            }
            function B_() {
                return Q_(),
                Z
            }
            function N_() {
                return Q_(),
                X
            }
            function F_() {
                return Q_(),
                J
            }
            function W_() {
                return V_()
            }
            function U_() {
                ut = this,
                ru.call(this, "FlexibleLearnVariant", K_())
            }
            function V_() {
                return Z_(),
                null == ut && new U_,
                ut
            }
            function H_() {
                st = this;
                var t = this
                  , n = uu();
                t.u2l_1 = su(n, W_)
            }
            function Y_() {
                return Z_(),
                null == st && new H_,
                st
            }
            function K_() {
                return [nc(), ic()]
            }
            function Z_() {
                if (at)
                    return to();
                at = !0,
                rt = new X_("Control",0,"control"),
                ot = new X_("Experiment",1,"experiment"),
                Y_()
            }
            function X_(t, n, i) {
                no.call(this, t, n),
                this.x2l_1 = i
            }
            function J_() {
                lt = this,
                this.y2l_1 = "flexible_learn"
            }
            function tc() {
                return null == lt && new J_,
                lt
            }
            function nc() {
                return Z_(),
                rt
            }
            function ic() {
                return Z_(),
                ot
            }
            function ec() {
                return oc()
            }
            function rc() {
                ct = this,
                ru.call(this, "GranularStudyDirectionVariant", ac())
            }
            function oc() {
                return lc(),
                null == ct && new rc,
                ct
            }
            function uc() {
                ft = this;
                var t = this
                  , n = uu();
                t.z2l_1 = su(n, ec)
            }
            function sc() {
                return lc(),
                null == ft && new uc,
                ft
            }
            function ac() {
                return [fc(), dc()]
            }
            function lc() {
                if (dt)
                    return to();
                dt = !0,
                ht = new hc("Control",0,"control"),
                _t = new hc("GranularStudyDirection",1,"granularStudyDirection"),
                sc()
            }
            function hc(t, n, i) {
                no.call(this, t, n),
                this.c2m_1 = i
            }
            function _c() {
                pt = this,
                this.d2m_1 = "GranularStudyDirection[default,subscriptions,ads]"
            }
            function cc() {
                return null == pt && new _c,
                pt
            }
            function fc() {
                return lc(),
                ht
            }
            function dc() {
                return lc(),
                _t
            }
            function pc(t) {
                return function(n, i) {
                    return t
                }
            }
            function vc(t) {
                return function(n) {
                    var i, e = pc(t), r = vo().i10_1, o = yo(), u = wo();
                    i = new ko(r,go(ZC),null,e,o,u);
                    var s = new $o(i);
                    return n.i11(s),
                    n.a11_1 && n.l11(s),
                    new mo(n,s),
                    to()
                }
            }
            function yc(t) {
                return function() {
                    return Qo(!1, vc(t), 1, null)
                }
            }
            function wc() {
                vt = this
            }
            function bc() {
                return null == vt && new wc,
                vt
            }
            function gc(t) {
                var n, i = null, e = null == i ? null : i.i12(go(ZC), null, null);
                if (null == e) {
                    var r, o = lu().p12(), u = null == o ? null : o.az_1, s = null == u ? null : u.mz_1;
                    if (null == s)
                        r = null;
                    else {
                        var a;
                        try {
                            a = s.g12(go(ZC), null, null)
                        } catch (j) {
                            if (!(j instanceof Ro))
                                throw j;
                            if (!(j instanceof Ao || j instanceof Io))
                                throw j;
                            var l = s.h12()
                              , h = "|- Encountered " + Oo(j).ph() + ": Falling back to null!"
                              , _ = Eo();
                            l.xz(_) && l.wz(_, h),
                            a = null
                        }
                        r = a
                    }
                    n = r
                } else
                    n = e;
                var c, f = n, d = null, p = null == d ? null : d.i12(go(hu), null, null);
                if (null == p) {
                    var v, y = lu().p12(), w = null == y ? null : y.az_1, b = null == w ? null : w.mz_1;
                    if (null == b)
                        v = null;
                    else {
                        var g;
                        try {
                            g = b.g12(go(hu), null, null)
                        } catch (j) {
                            if (!(j instanceof Ro))
                                throw j;
                            if (!(j instanceof Ao || j instanceof Io))
                                throw j;
                            var k = b.h12()
                              , $ = "|- Encountered " + Oo(j).ph() + ": Falling back to null!"
                              , m = Eo();
                            k.xz(m) && k.wz(m, $),
                            g = null
                        }
                        v = g
                    }
                    c = v
                } else
                    c = p;
                return new kc(f,c).u2f(t)
            }
            function kc(t, n) {
                this.f2m_1 = t,
                this.g2m_1 = n
            }
            function $c() {
                return jc()
            }
            function mc() {
                gt = this,
                ru.call(this, "RandomizeInitialTermOrderVariant", xc())
            }
            function jc() {
                return Sc(),
                null == gt && new mc,
                gt
            }
            function qc() {
                kt = this;
                var t = this
                  , n = uu();
                t.m2m_1 = su(n, $c)
            }
            function Cc() {
                return Sc(),
                null == kt && new qc,
                kt
            }
            function xc() {
                return [Ic(), Ac(), Oc()]
            }
            function Sc() {
                if ($t)
                    return to();
                $t = !0,
                yt = new zc("Control",0,"control"),
                wt = new zc("Randomize",1,"randomize"),
                bt = new zc("RoundRandomize",2,"round_randomize"),
                Cc()
            }
            function zc(t, n, i) {
                no.call(this, t, n),
                this.p2m_1 = i
            }
            function Tc() {
                mt = this,
                this.q2m_1 = "randomize_initial_term_order"
            }
            function Mc() {
                return null == mt && new Tc,
                mt
            }
            function Ic() {
                return Sc(),
                yt
            }
            function Ac() {
                return Sc(),
                wt
            }
            function Oc() {
                return Sc(),
                bt
            }
            function Ec() {
                return Qc()
            }
            function Rc() {
                Ct = this,
                ru.call(this, "SimpleHintsVariant", Dc())
            }
            function Qc() {
                return Lc(),
                null == Ct && new Rc,
                Ct
            }
            function Gc() {
                xt = this;
                var t = this
                  , n = uu();
                t.r2m_1 = su(n, Ec)
            }
            function Pc() {
                return Lc(),
                null == xt && new Gc,
                xt
            }
            function Dc() {
                return [Wc(), Uc()]
            }
            function Lc() {
                if (St)
                    return to();
                St = !0,
                jt = new Bc("Control",0,"control"),
                qt = new Bc("SimpleHints",1,"simpleHints"),
                Pc()
            }
            function Bc(t, n, i) {
                no.call(this, t, n),
                this.u2m_1 = i
            }
            function Nc() {
                zt = this,
                this.v2m_1 = "SimpleHints[default,subscriptions,ads]"
            }
            function Fc() {
                return null == zt && new Nc,
                zt
            }
            function Wc() {
                return Lc(),
                jt
            }
            function Uc() {
                return Lc(),
                qt
            }
            function Vc() {
                return Yc()
            }
            function Hc() {
                It = this,
                ru.call(this, "StudyDirectionDefaultsVariant", Xc())
            }
            function Yc() {
                return Jc(),
                null == It && new Hc,
                It
            }
            function Kc() {
                At = this;
                var t = this
                  , n = uu();
                t.w2m_1 = su(n, Vc)
            }
            function Zc() {
                return Jc(),
                null == At && new Kc,
                At
            }
            function Xc() {
                return [rf(), of()]
            }
            function Jc() {
                if (Ot)
                    return to();
                Ot = !0,
                Tt = new tf("Control",0,"control"),
                Mt = new tf("NewHeuristic",1,"newHeuristic"),
                Zc()
            }
            function tf(t, n, i) {
                no.call(this, t, n),
                this.z2m_1 = i
            }
            function nf() {
                Et = this,
                this.a2n_1 = "study_direction_defaults"
            }
            function ef() {
                return null == Et && new nf,
                Et
            }
            function rf() {
                return Jc(),
                Tt
            }
            function of() {
                return Jc(),
                Mt
            }
            function uf() {
                Rt = this
            }
            function sf() {
                return null == Rt && new uf,
                Rt
            }
            function af() {
                sf()
            }
            function lf(t, n, i, e) {
                return 0 != (1 & n) && (t = !1),
                yf.call(e, t),
                e
            }
            function hf(t, n, i) {
                return lf(t, n, i, Object.create(yf.prototype))
            }
            function _f() {
                Qt = this
            }
            function cf() {
                return null == Qt && new _f,
                Qt
            }
            function ff() {
                Gt = this;
                var t = new du("assistantMode.grading.LocalGradedAnswerMetadata",this,1);
                t.b1d("wasSmartGradingUsed", !0),
                this.b2n_1 = t
            }
            function df() {
                return null == Gt && new ff,
                Gt
            }
            function pf(t, n, i, e) {
                if (0 != (0 & t) && bu(t, 0, df().b2n_1),
                e.d2n_1 = 0 != (1 & t) && n,
                e.d2n_1)
                    throw gu(Lo("wasSmartGradingUsed should always be false in a locally graded answer"));
                return e
            }
            function vf(t, n, i) {
                return pf(t, n, i, Object.create(yf.prototype))
            }
            function yf(t) {
                if (cf(),
                this.d2n_1 = t,
                this.d2n_1)
                    throw gu(Lo("wasSmartGradingUsed should always be false in a locally graded answer"))
            }
            function wf(t, n, i, e, r, o, u, s, a) {
                return 0 != (16 & u) && (r = null),
                0 != (32 & u) && (o = !0),
                Cf.call(a, t, n, i, e, r, o),
                a
            }
            function bf(t, n, i, e, r, o, u, s) {
                return wf(t, n, i, e, r, o, u, s, Object.create(Cf.prototype))
            }
            function gf() {
                Pt = this
            }
            function kf() {
                return null == Pt && new gf,
                Pt
            }
            function $f() {
                Dt = this;
                var t = new du("assistantMode.grading.SmartGradedAnswerMetadata",this,6);
                t.b1d("longtextGradingResult", !1),
                t.b1d("wasRequestSuccess", !1),
                t.b1d("logStartTimestamp", !1),
                t.b1d("logEndTimestamp", !1),
                t.b1d("logGradedResultTimestamp", !0),
                t.b1d("wasSmartGradingUsed", !0),
                this.e2n_1 = t
            }
            function mf() {
                return null == Dt && new $f,
                Dt
            }
            function jf(t, n, i, e, r, o, u, s, a) {
                return 15 != (15 & t) && bu(t, 15, mf().e2n_1),
                a.g2n_1 = n,
                a.h2n_1 = i,
                a.i2n_1 = e,
                a.j2n_1 = r,
                a.k2n_1 = 0 == (16 & t) ? null : o,
                a.l2n_1 = 0 == (32 & t) || u,
                a
            }
            function qf(t, n, i, e, r, o, u, s) {
                return jf(t, n, i, e, r, o, u, s, Object.create(Cf.prototype))
            }
            function Cf(t, n, i, e, r, o) {
                kf(),
                this.g2n_1 = t,
                this.h2n_1 = n,
                this.i2n_1 = i,
                this.j2n_1 = e,
                this.k2n_1 = r,
                this.l2n_1 = o
            }
            function xf() {
                Lt = this
            }
            function Sf() {
                return null == Lt && new xf,
                Lt
            }
            function zf() {
                Bt = this;
                var t = new du("MatchingGameAnswerPair",this,2);
                t.b1d("firstIndex", !1),
                t.b1d("secondIndex", !1),
                this.m2n_1 = t
            }
            function Tf() {
                return null == Bt && new zf,
                Bt
            }
            function Mf(t, n, i, e, r) {
                return 3 != (3 & t) && bu(t, 3, Tf().m2n_1),
                r.o2n_1 = n,
                r.p2n_1 = i,
                r
            }
            function If(t, n, i, e) {
                return Mf(t, n, i, e, Object.create(Af.prototype))
            }
            function Af(t, n) {
                Sf(),
                this.o2n_1 = t,
                this.p2n_1 = n
            }
            function Of(t, n) {
                this.q2n_1 = t,
                this.r2n_1 = n
            }
            function Ef() {}
            function Rf(t, n, i) {
                return Ff.call(i, Mu(t), Mu(n)),
                i
            }
            function Qf(t, n) {
                return Rf(t, n, Object.create(Ff.prototype))
            }
            function Gf() {
                Nt = this
            }
            function Pf() {
                return null == Nt && new Gf,
                Nt
            }
            function Df() {
                Ft = this;
                var t = new du("ExpectedMatchQuestionPair",this,2);
                t.b1d("promptIndex", !1),
                t.b1d("optionIndex", !1),
                this.z2n_1 = t
            }
            function Lf() {
                return null == Ft && new Df,
                Ft
            }
            function Bf(t, n, i, e, r) {
                return 3 != (3 & t) && bu(t, 3, Lf().z2n_1),
                r.b2o_1 = n,
                r.c2o_1 = i,
                r
            }
            function Nf(t, n, i, e) {
                return Bf(t, n, i, e, Object.create(Ff.prototype))
            }
            function Ff(t, n) {
                Pf(),
                this.b2o_1 = t,
                this.c2o_1 = n
            }
            function Wf(t, n, i) {
                var e = Mu(t)
                  , r = n;
                return Jf.call(i, e, null == r ? null : Mu(r)),
                i
            }
            function Uf(t, n) {
                return Wf(t, n, Object.create(Jf.prototype))
            }
            function Vf() {
                Wt = this
            }
            function Hf() {
                return null == Wt && new Vf,
                Wt
            }
            function Yf() {
                Ut = this;
                var t = new du("UserMatchQuestionPair",this,2);
                t.b1d("promptIndex", !1),
                t.b1d("optionIndex", !1),
                this.d2o_1 = t
            }
            function Kf() {
                return null == Ut && new Yf,
                Ut
            }
            function Zf(t, n, i, e, r) {
                return 3 != (3 & t) && bu(t, 3, Kf().d2o_1),
                r.f2o_1 = n,
                r.g2o_1 = i,
                r
            }
            function Xf(t, n, i, e) {
                return Zf(t, n, i, e, Object.create(Jf.prototype))
            }
            function Jf(t, n) {
                Hf(),
                this.f2o_1 = t,
                this.g2o_1 = n
            }
            function td(t, n, i) {
                this.h2o_1 = t,
                this.i2o_1 = n,
                this.j2o_1 = i
            }
            function nd(t, n, i, e) {
                Iu.call(this, e),
                this.t2o_1 = t,
                this.u2o_1 = n,
                this.v2o_1 = i
            }
            function id(t, n) {
                this.y2o_1 = t,
                this.z2o_1 = n
            }
            function ed(t, n, i) {
                this.i2p_1 = t,
                this.j2p_1 = n,
                this.k2p_1 = i
            }
            function rd(t) {
                sd.call(this),
                this.l2p_1 = t
            }
            function od() {
                Vt = this,
                sd.call(this)
            }
            function ud() {
                return null == Vt && new od,
                Vt
            }
            function sd() {}
            function ad(t) {
                this.n2p_1 = t
            }
            function ld(t, n, i) {
                this.p2p_1 = t,
                this.q2p_1 = n,
                this.r2p_1 = i
            }
            function hd() {}
            function _d(t, n) {
                return t.b2h_1.j2h_1 && !t.b2h_1.i2h_1 ? t.k2i(null, null, null, t.b2h_1.m2h(!1, !0, !1, 5, null), 7, null) : t
            }
            function cd(t, n, i, e, r, o, u) {
                var s = new vd(t,n,i,e,r,o,u);
                return s.w8_1 = to(),
                s.x8_1 = null,
                s.b9()
            }
            function fd(t, n, i, e, r) {
                this.r2q_1 = t,
                this.s2q_1 = n,
                this.t2q_1 = i,
                this.u2q_1 = e,
                Iu.call(this, r)
            }
            function dd(t, n, i, e, r) {
                var o = new fd(t,n,i,e,r)
                  , u = function(t, n) {
                    return o.w2q(t, n)
                };
                return u.$arity = 1,
                u
            }
            function pd(t, n, i, e, r) {
                Iu.call(this, r),
                this.f2r_1 = t,
                this.g2r_1 = n,
                this.h2r_1 = i,
                this.i2r_1 = e
            }
            function vd(t, n, i, e, r, o, u) {
                Iu.call(this, u),
                this.b2q_1 = t,
                this.c2q_1 = n,
                this.d2q_1 = i,
                this.e2q_1 = e,
                this.f2q_1 = r,
                this.g2q_1 = o
            }
            function yd(t, n, i) {
                this.m2r_1 = t,
                this.n2r_1 = n,
                this.o2r_1 = i
            }
            function wd(t, n) {
                this.p2r_1 = t,
                this.q2r_1 = n
            }
            function bd(t) {
                return md(),
                t.y2r_1.p2()
            }
            function gd() {
                var t = null
                  , n = null == t ? null : t.i12(go(hd), null, null);
                return null == n ? lu().ot().az_1.mz_1.i12(go(hd), null, null) : n
            }
            function kd(t, n, i, e) {
                Iu.call(this, e),
                this.h2s_1 = t,
                this.i2s_1 = n,
                this.j2s_1 = i
            }
            function $d(t, n, i, e, r, o) {
                this.s2r_1 = t,
                this.t2r_1 = n,
                this.u2r_1 = i,
                this.v2r_1 = e,
                this.w2r_1 = r,
                this.x2r_1 = o;
                var u, s = this, a = Lu().m12();
                u = su(a, gd),
                s.y2r_1 = u
            }
            function md() {
                return Fu("smarterGrader", 1, Nu, (function(t) {
                    return bd(t)
                }
                ), null)
            }
            function jd() {
                Ht = this,
                this.s2s_1 = .8,
                this.t2s_1 = "by_difficulty",
                this.u2s_1 = "by_optimal_correctness"
            }
            function qd() {
                return null == Ht && new jd,
                Ht
            }
            function Cd(t, n, i) {
                if (i.h())
                    return n;
                for (var e = Wu(n), r = i.j(); r.l(); ) {
                    var o, u = r.k();
                    t: {
                        for (var s = e.j(); s.l(); ) {
                            var a = s.k();
                            if (a.v2s_1.equals(u.e2t_1)) {
                                o = a;
                                break t
                            }
                        }
                        throw xu("Collection contains no element matching the predicate.")
                    }
                    var l = o;
                    Uu(e, Qd(l)),
                    u.a2t_1 || e.a(l)
                }
                return e
            }
            function xd(t, n, i) {
                var e, r = i.y2s_1, o = null == r ? io() : r;
                t: {
                    for (var u = n.g2t_1.j(); u.l(); ) {
                        var s = u.k();
                        if (PC(s).equals(i.v2s_1)) {
                            e = s;
                            break t
                        }
                    }
                    throw xu("Collection contains no element matching the predicate.")
                }
                return ov(o, new uj(new Am(e,qS(i.x2s_1),i.x2s_1,i.z2s_1)), n, null, 8, null)
            }
            function Sd(t, n, i, e, r) {
                for (var o = g$(KS(r.g2t_1, n), e, i.m2t_1, i.n2t_1, Vu()), u = Hu(), s = o.j(); s.l(); ) {
                    var a = s.k();
                    e.z2t(a.q2t_1, a.r2t_1) && u.a(a)
                }
                return zd(t, u, e, t.a2u_1)
            }
            function zd(t, n, i, e) {
                var r;
                switch (e.r1_1) {
                case 0:
                    r = !0;
                    break;
                case 1:
                case 2:
                    r = !1;
                    break;
                default:
                    Yu()
                }
                for (var o = r, u = Hu(), s = n.j(); s.l(); ) {
                    var a;
                    a = Td(t, i, s.k(), o),
                    Ku(u, a)
                }
                return Md(t, u, Uh())
            }
            function Td(t, n, i, e) {
                for (var r = n.b2u(i), o = Hu(), u = r.j(); u.l(); ) {
                    var s = u.k();
                    Ad(t).t(s) && o.a(s)
                }
                var a = o;
                a.h() && (a = r.t(ro()) ? Zu(ro()) : Zu(uo()));
                for (var l = a, h = Ju(Xu(l, 10)), _ = l.j(); _.l(); ) {
                    var c, f = _.k(), d = t$(i.s2t_1, f, !1), p = Id(t, d, e), v = p.c2u_1, y = p.d2u_1;
                    c = new Ed(i.q2t_1,i.r2t_1,new qC(d,"2.0.0","RPL",v,y),p.c2u_1,f),
                    h.a(c)
                }
                return h
            }
            function Md(t, n, i) {
                var e;
                e = new Rd(Gd);
                for (var r = ts(n, e), o = wo(), u = Ju(Xu(n, 10)), s = n.j(); s.l(); ) {
                    var a;
                    a = s.k().e2u_1,
                    u.a(a)
                }
                var l = ns(u).f();
                t: for (; o.f() < Math.min(i, l); ) {
                    for (var h = o, _ = Ju(Xu(h, 10)), c = h.j(); c.l(); ) {
                        var f;
                        f = c.k().v2s_1,
                        _.a(f)
                    }
                    var d = ns(_)
                      , p = is(r);
                    d.t(p.e2u_1) || (o = es(o, new Pm(p.e2u_1,qS(p.f2u_1),p.f2u_1,p.i2u_1,p.g2u_1))),
                    r = rs(r, 1)
                }
                return o
            }
            function Id(t, n, i) {
                var e;
                if (i) {
                    var r = 1 - n;
                    qd(),
                    e = new Od(r,"by_difficulty")
                } else {
                    var o;
                    if (qd(),
                    n <= .8) {
                        var u = -.78125 * n * n + 1.25 * n + .5;
                        qd(),
                        o = new Od(u,"by_optimal_correctness")
                    } else {
                        var s = -25 * n * n + 40 * n - 15;
                        qd(),
                        o = new Od(s,"by_optimal_correctness")
                    }
                    e = o
                }
                return e
            }
            function Ad(t) {
                var n;
                switch (t.a2u_1.r1_1) {
                case 1:
                case 0:
                    n = Zu(io());
                    break;
                case 2:
                    n = lo([io(), ro()]);
                    break;
                default:
                    Yu()
                }
                return n
            }
            function Od(t, n) {
                this.c2u_1 = t,
                this.d2u_1 = n
            }
            function Ed(t, n, i, e, r) {
                this.e2u_1 = t,
                this.f2u_1 = n,
                this.g2u_1 = i,
                this.h2u_1 = e,
                this.i2u_1 = r
            }
            function Rd(t) {
                this.j2u_1 = t
            }
            function Qd(t) {
                return function(n) {
                    return n.v2s_1.equals(t.v2s_1)
                }
            }
            function Gd(t, n) {
                var i, e = t.h2u_1;
                return i = n.h2u_1,
                as(e, i)
            }
            function Pd(t) {
                qd(),
                this.a2u_1 = t
            }
            function Dd() {
                if (Xt)
                    return to();
                Xt = !0,
                Yt = new Ld("BY_PCORRECT",0),
                Kt = new Ld("BY_OPTIMAL_TARGET",1),
                Zt = new Ld("BY_OPTIMAL_TARGET_WRITTEN_OR_MCQ",2)
            }
            function Ld(t, n) {
                no.call(this, t, n)
            }
            function Bd() {
                return Dd(),
                Yt
            }
            function Nd() {
                return Dd(),
                Kt
            }
            function Fd() {
                return Dd(),
                Zt
            }
            function Wd() {
                Jt = this,
                this.f2v_1 = new Vd(new ju(0,0),new ju(0,0))
            }
            function Ud() {
                return null == Jt && new Wd,
                Jt
            }
            function Vd(t, n) {
                Ud(),
                this.g2v_1 = t,
                this.h2v_1 = n
            }
            function Hd(t, n, i, e, r) {
                return i ? Yd(t, n, r) : e ? Kd(t, r) : Ud().f2v_1
            }
            function Yd(t, n, i) {
                for (var e = ts(t, ez()), r = Hu(), o = e.j(); o.l(); ) {
                    var u = o.k();
                    u.c2t_1.equals(i) && r.a(u)
                }
                var s = r
                  , a = Hu()
                  , l = s.j();
                t: for (; l.l(); ) {
                    var h = l.k();
                    if (!h.a2t_1)
                        break t;
                    a.a(h)
                }
                var _, c = a;
                if (Qu(c, vs) && c.h())
                    _ = 0;
                else {
                    for (var f = 0, d = c.j(); d.l(); )
                        fS(d.k()).x2k_1 >= n.x2k_1 && ys(f = f + 1 | 0);
                    _ = f
                }
                for (var p = _, v = Hu(), y = s.j(); y.l(); ) {
                    var w = y.k();
                    fS(w).x2k_1 >= n.x2k_1 && v.a(w)
                }
                var b = v
                  , g = p - 1 | 0
                  , k = Math.max(0, g)
                  , $ = b.h() ? 2 : 1 + k | 0
                  , m = Math.min($, p);
                return new Vd(Mu($),Mu(m))
            }
            function Kd(t, n) {
                for (var i = Hu(), e = t.j(); e.l(); ) {
                    var r = e.k();
                    r.b2t_1.equals(n) && i.a(r)
                }
                var o = ts(i, ez())
                  , u = Hu()
                  , s = o.j();
                t: for (; s.l(); ) {
                    var a = s.k();
                    if (!a.a2t_1)
                        break t;
                    u.a(a)
                }
                var l = 1
                  , h = u.f()
                  , _ = Math.min(1, h);
                return new Vd(Mu(l),Mu(_))
            }
            function Zd(t, n, i, e, r) {
                return Xd(t, n, i, e, r)
            }
            function Xd(t, n, i, e, r) {
                var o, u = Im(e, t.w2s_1, t.x2s_1, null, 8, null);
                if (n.equals(so())) {
                    var s = i.m2v(u)
                      , a = null == s ? null : new fj(s,u);
                    if (null == a)
                        throw Su("Eligible question for Fill In The Blank Question expected: " + e + ".id");
                    o = a
                } else if (_u(null == r ? null : r.j2v_1, ws())) {
                    var l = i.i2v(PC(e), r)
                      , h = null == l ? null : new cj(l,u);
                    if (null == h)
                        throw Su("Eligible question for Alternative Question expected: " + e + ".id");
                    o = h
                } else
                    o = new uj(u);
                return rv(n, o, i, r)
            }
            function Jd(t, n, i, e) {
                var r = t.g2t_1
                  , o = gs(r, bs());
                return ks(es(Ux(o, n, i, t, e - 1 | 0, !1, !1, !1), o))
            }
            function tp(t, n, i, e) {
                for (var r = hy().n2v(t, !0, !0), o = r.g2t_1, u = Hu(), s = o.j(); s.l(); ) {
                    var a = s.k()
                      , l = np(a, i) && np(a, e) ? ov(n, new uj(Im(a, i, e, null, 8, null)), r, null, 8, null).d2v() : null;
                    null == l || (u.a(l),
                    to())
                }
                return u
            }
            function np(t, n) {
                var i;
                switch (n.r1_1) {
                case 0:
                case 1:
                    i = !0;
                    break;
                case 2:
                    i = !(null == t.e2w_1);
                    break;
                default:
                    Yu()
                }
                return i
            }
            function ip() {
                return kp(),
                tn
            }
            function ep() {
                return kp(),
                nn
            }
            function rp(t, n, i) {
                return bp.call(i, t, $s(n.l2t_1), $s(n.m2t_1), $s(n.n2t_1), $s(n.o2t_1), $s(n.p2t_1)),
                i
            }
            function op(t, n) {
                return rp(t, n, Object.create(bp.prototype))
            }
            function up(t, n, i) {
                return bp.call(i, t, $s(n.n2w_1), $s(n.o2w_1), $s(n.p2w_1), $s(n.p2w_1), $s(n.n2w_1)),
                i
            }
            function sp(t, n) {
                return up(t, n, Object.create(bp.prototype))
            }
            function ap(t, n) {
                for (var i = js(ms()), e = n.j(); e.l(); ) {
                    var r = e.k()
                      , o = i.d3(r.r25_1)
                      , u = js(null == o ? ms() : o)
                      , s = r.w25_1;
                    u.d5(s, r);
                    var a = r.r25_1;
                    i.d5(a, u)
                }
                return i
            }
            function lp(t, n, i, e, r) {
                for (var o = Wo(Fo(No(Xu(i, 10)), 16)), u = i.j(); u.l(); ) {
                    var s, a = u.k(), l = qs(n);
                    if (l.t(so()) && !l.t(Cs(so()))) {
                        var h = Cs(so());
                        l.a(h)
                    }
                    a.equals(co()) && xs(l, wp(r)),
                    s = l,
                    o.d5(a, s)
                }
                return o
            }
            function hp(t, n, i, e, r, o) {
                for (var u = r.y(), s = Fo(No(Xu(u, 10)), 16), a = Wo(s), l = u.j(); l.l(); ) {
                    for (var h = l.k(), _ = h.n2(), c = h.p2(), f = Hu(), d = i.j(); d.l(); ) {
                        var p = d.k();
                        !p.equals(_) && f.a(p)
                    }
                    for (var v = f, y = Wo(Fo(No(Xu(v, 10)), 16)), w = v.j(); w.l(); ) {
                        for (var b, g = w.k(), k = Hu(), $ = c.j(); $.l(); ) {
                            var m = $.k();
                            _p(t, o, n, $s(e), _, g, m) && k.a(m)
                        }
                        b = $s(k),
                        y.d5(g, b)
                    }
                    var j = eo(_, y);
                    a.d5(j.z4_1, j.a5_1)
                }
                return a
            }
            function _p(t, n, i, e, r, o, u) {
                return !(o.equals(co()) && !e.t(u)) && dp(t, Im(i, o, r, null, 8, null), n, u)
            }
            function cp(t, n, i, e) {
                var r = fp(t, n, i, e);
                if (null != r)
                    return r;
                var o = yp(t, n, i);
                if (null == o)
                    return !0;
                var u = o;
                switch (e.r1_1) {
                case 2:
                    return u.x25_1;
                case 0:
                    return u.y25_1;
                case 4:
                    return u.z25_1;
                default:
                    return !0
                }
            }
            function fp(t, n, i, e) {
                var r = t.w2t_1.s2w(n);
                if (null == r)
                    return null;
                var o = r;
                if (e.equals(ro())) {
                    if (null != o.e2w_1)
                        return i.equals(co());
                    if (null != o.l2w_1)
                        return i.equals(o.l2w_1.w2w_1);
                    var u = o.g2w_1;
                    if (!0 === (null == u ? null : !u.h()))
                        return i.equals(ho());
                    var s = o.h2w_1;
                    if (!0 === (null == s ? null : !s.h()))
                        return i.equals(_o())
                }
                return null
            }
            function dp(t, n, i, e) {
                var r, o = n, u = o.b5(), s = o.c5(), a = o.oc();
                if (!u.c2x(lo([s, a])))
                    return !1;
                switch (e.r1_1) {
                case 10:
                    r = i.d2x(n);
                    break;
                case 0:
                    r = !!u.c2x(lo([s, a])) && Sz(u, a);
                    break;
                case 2:
                    r = !DC(n.y2w_1, n).h() || i.e2x(a);
                    break;
                case 3:
                    r = !!i.e2x(a) && HS(u, s, i);
                    break;
                case 1:
                case 4:
                    r = !0;
                    break;
                default:
                    r = !1
                }
                return r
            }
            function pp(t, n) {
                var i = n.u2v_1;
                return !(0 !== Go(i) || null == n.z2v_1)
            }
            function vp(t, n, i, e, r, o, u) {
                for (var s = lp(t, i, r, o, u), a = n.g2t_1, l = Fo(No(Xu(a, 10)), 16), h = Wo(l), _ = a.j(); _.l(); ) {
                    var c = _.k()
                      , f = eo(c.o2v_1, hp(t, c, e, u, s, n));
                    h.d5(f.z4_1, f.a5_1)
                }
                return h
            }
            function yp(t, n, i) {
                var e = t.x2t_1.d3(n);
                return null == e ? null : e.d3(i)
            }
            function wp(t) {
                return function(n) {
                    return !t.t(n)
                }
            }
            function bp(t, n, i, e, r, o) {
                this.w2t_1 = t,
                this.x2t_1 = ap(this, this.w2t_1.f2x()),
                this.y2t_1 = vp(this, this.w2t_1, n, i, e, r, o)
            }
            function gp() {
                return Fu("entries", 1, Nu, (function(t) {
                    return t.y()
                }
                ), null)
            }
            function kp() {
                en || (en = !0,
                tn = new Wq(_o(),ho()),
                nn = new Wq(ho(),_o()))
            }
            function $p(t, n) {
                var i;
                switch (n.r1_1) {
                case 1:
                    i = mp(t);
                    break;
                case 0:
                    i = jp(t);
                    break;
                default:
                    throw gu("Cannot create audio for card side: " + n)
                }
                return i
            }
            function mp(t) {
                var n = t.y2v_1
                  , i = null == n ? t.w2v_1 : n
                  , e = t.y2v_1
                  , r = null == e ? t.x2v_1 : e;
                return null == i || null == r ? null : new Ms(i,r)
            }
            function jp(t) {
                var n = t.t2v_1
                  , i = null == n ? t.r2v_1 : n
                  , e = t.t2v_1
                  , r = null == e ? t.s2v_1 : e;
                return null == i || null == r ? null : new Ms(i,r)
            }
            function qp(t) {
                return Sp(t.c2w_1)
            }
            function Cp(t) {
                return Sp(t.d2w_1)
            }
            function xp(t) {
                var n = t.e2w_1;
                if (null == n)
                    throw Su(Lo("Cannot create location attribute without diagramShape"));
                var i = t.f2w_1;
                return new Is(t.e2w_1.r2x_1,null == i ? null : ZS(i))
            }
            function Sp(t) {
                return new As(t.t2x(),t.u2x(),t.v2x())
            }
            function zp(t, n) {
                var i;
                switch (n.r1_1) {
                case 0:
                    i = Os([qp(t)]);
                    break;
                case 1:
                    i = Os([Cp(t)]);
                    break;
                case 2:
                    i = Os([xp(t)]);
                    break;
                default:
                    Yu()
                }
                var e, r = i;
                switch (n.r1_1) {
                case 0:
                    e = jp(t);
                    break;
                case 1:
                    e = mp(t);
                    break;
                case 2:
                    e = null;
                    break;
                default:
                    Yu()
                }
                var o = e;
                return null != o && r.a(o),
                n.equals(_o()) && null != t.z2v_1 && r.a(t.z2v_1),
                r
            }
            function Tp(t, n) {
                return new Es(zp(t, n))
            }
            function Mp(t) {
                return new Es(XS(t))
            }
            function Ip(t, n) {
                for (var i = Ju(Xu(t, 10)), e = t.j(); e.l(); ) {
                    var r;
                    r = Tp(e.k(), n),
                    i.a(r)
                }
                return i
            }
            function Ap(t, n) {
                return Rm(t, Ep(), Rp(), n, null, 16, null)
            }
            function Op(t, n, i, e) {
                return 0 != (2 & i) && (n = null),
                Ap(t, n)
            }
            function Ep() {
                return Qp(),
                rn
            }
            function Rp() {
                return Qp(),
                on
            }
            function Qp() {
                un || (un = !0,
                rn = ho(),
                on = _o(),
                uo())
            }
            function Gp(t) {
                return Yp(),
                t.z2x_1.p2()
            }
            function Pp(t) {
                return new lg(t.b2y_1,Fp(t.c2y_1, t),null,Lp(t))
            }
            function Dp(t) {
                return new Yb(t.b2y_1,t.c2y_1,Lp(t))
            }
            function Lp(t) {
                return Vq(PC(t.a2y_1.y2w_1), t.a2y_1.z2w_1, t.a2y_1.a2x_1, t.y2x_1, null, null, null, 112, null)
            }
            function Bp(t) {
                return new $d(Np(t.c2y_1, t),t.c2y_1,wo(),Np(t.b2y_1, t),Fp(t.b2y_1, t),Fp(t.c2y_1, t))
            }
            function Np(t, n) {
                var i;
                t: {
                    for (var e = t.z26_1.j(); e.l(); ) {
                        var r = e.k();
                        if (r instanceof As) {
                            i = r;
                            break t
                        }
                    }
                    throw xu("Collection contains no element matching the predicate.")
                }
                return (i instanceof As ? i : Zr()).t27_1
            }
            function Fp(t, n) {
                var i;
                t: {
                    for (var e = t.z26_1.j(); e.l(); ) {
                        var r = e.k();
                        if (r instanceof As) {
                            i = r;
                            break t
                        }
                    }
                    throw xu("Collection contains no element matching the predicate.")
                }
                return (i instanceof As ? i : Zr()).u27_1
            }
            function Wp(t) {
                return new ad(t.c2y_1)
            }
            function Up(t) {
                return function() {
                    return "Expected question type: " + io() + " or " + uo() + ". Actual: " + t
                }
            }
            function Vp(t, n, i) {
                gv.call(this, t),
                this.x2x_1 = n,
                this.y2x_1 = i,
                this.z2x_1 = Rs(Up(t));
                var e = !!t.equals(io()) || t.equals(uo())
                  , r = Hp(this);
                if (!e) {
                    var o = r();
                    throw gu(Lo(o))
                }
                this.a2y_1 = this.x2x_1.f2y_1,
                this.b2y_1 = this.x2x_1.e2y_1.n25_1,
                this.c2y_1 = this.x2x_1.e2y_1.o25_1
            }
            function Hp(t) {
                return Fu("unsupportedQuestionTypeExceptionMessage", 0, Qs, (function() {
                    return Gp(t)
                }
                ), null)
            }
            function Yp() {
                return Fu("unsupportedQuestionTypeExceptionMessage", 1, Nu, (function(t) {
                    return Gp(t)
                }
                ), null)
            }
            function Kp(t, n) {
                var i = n.l2w_1;
                if (null != i) {
                    var e = (_u(i.v2w_1, ho()),
                    n.c2w_1.u2x());
                    return new Es(Zu(Gs(i.t2w_1, e, null, 4, null)))
                }
                return Tp(n, t.k2y_1.t2y())
            }
            function Zp(t, n) {
                var i = n.l2w_1;
                if (_u(null == i ? null : i.w2w_1, t.k2y_1.u2y())) {
                    var e = FC(NC(i), i.x2w_1)
                      , r = (_u(i.w2w_1, ho()),
                    n.c2w_1.u2x());
                    return new Es(Zu(Gs(e, r, null, 4, null)))
                }
                return Tp(n, t.k2y_1.u2y())
            }
            function Xp(t, n) {
                var i = n.l2w_1;
                if (!(null == i || !_u(i.w2w_1, t.k2y_1.u2y())) && i.u2w_1.f() >= 2) {
                    for (var e = hM(i), r = Ju(Xu(e, 10)), o = e.j(); o.l(); ) {
                        var u;
                        u = lM(o.k(), (_u(i.w2w_1, ho()),
                        n.c2w_1.u2x()), i.x2w_1),
                        r.a(u)
                    }
                    return r
                }
                return BC(n, t.k2y_1.u2y())
            }
            function Jp(t, n) {
                return null != n.l2w_1 && _u(n.l2w_1.w2w_1, t.k2y_1.u2y()) ? Ds() : Ps()
            }
            function tv(t, n) {
                for (var i = t.k2y_1.v2y().i(0), e = i.m2w_1, r = Zp(t, i), o = Xp(t, i), u = Ju(Xu(o, 10)), s = o.j(); s.l(); ) {
                    var a;
                    a = Mp(s.k().z23_1),
                    u.a(a)
                }
                var l = Wu(u);
                if (l.f() > 0 && null != e && e <= l.f()) {
                    var h = Jp(t, i);
                    if (l.f() < t.m2y_1) {
                        for (var _ = l, c = Ju(Xu(_, 10)), f = _.j(); f.l(); ) {
                            var d;
                            f.k(),
                            d = h,
                            c.a(d)
                        }
                        var p = Wu(c);
                        return p.a(h),
                        l.x3(i.m2w_1, r),
                        p.v(i.m2w_1, Bs()),
                        new nv(l,r,Fs(p))
                    }
                    for (var v = l = Wu(Ls(ks(l), t.m2y_1 - 1 | 0)), y = Ju(Xu(v, 10)), w = v.j(); w.l(); ) {
                        var b;
                        b = new iv(w.k(),h),
                        y.a(b)
                    }
                    var g = Wu(y);
                    g.a(new iv(r,Bs())),
                    Ns(g);
                    for (var k = g, $ = Ju(Xu(k, 10)), m = k.j(); m.l(); ) {
                        var j;
                        j = m.k().w2y_1,
                        $.a(j)
                    }
                    for (var q = $, C = r, x = g, S = Ju(Xu(x, 10)), z = x.j(); z.l(); ) {
                        var T;
                        T = z.k().x2y_1,
                        S.a(T)
                    }
                    return new nv(q,C,S)
                }
                var M, I = Ls(ks(l), t.l2y_1 - 1 | 0), A = I.h() ? t.l2y_1 - 1 | 0 : I.f(), O = Jp(t, i), E = A - I.f() | 0, R = Math.max(0, E);
                if (R > 0) {
                    var Q, G = n.y2y(t.k2y_1.s2y_1), P = null == G ? null : G.s26_1;
                    if (null == P)
                        Q = null;
                    else {
                        for (var D = Ju(Xu(P, 10)), L = P.j(); L.l(); ) {
                            var B;
                            B = Mp(L.k().z23_1),
                            D.a(B)
                        }
                        Q = D
                    }
                    var N = Q
                      , F = null == N ? wo() : N;
                    M = Ls(F, R)
                } else
                    M = wo();
                for (var W = M, U = Ju(Xu(I, 10)), V = I.j(); V.l(); ) {
                    var H;
                    H = new iv(V.k(),O),
                    U.a(H)
                }
                for (var Y = U, K = Ju(Xu(W, 10)), Z = W.j(); Z.l(); ) {
                    var X;
                    X = new iv(Z.k(),Ws()),
                    K.a(X)
                }
                var J = Wu(ls(Y, K))
                  , tt = A - J.f() | 0;
                R = Math.max(0, tt);
                for (var nt = Ip(Ux(i, t.k2y_1.t2y(), t.k2y_1.u2y(), n, R, !0, !1, !1), t.k2y_1.u2y()), it = J, et = Ju(Xu(nt, 10)), rt = nt.j(); rt.l(); ) {
                    var ot;
                    ot = new iv(rt.k(),Us()),
                    et.a(ot)
                }
                Ku(it, et);
                for (var ut = J, st = Ju(Xu(ut, 10)), at = ut.j(); at.l(); ) {
                    var lt;
                    lt = at.k().w2y_1,
                    st.a(lt)
                }
                var ht, _t = st;
                if (Vs(r) && Hs(r)) {
                    var ct;
                    t: if (Qu(_t, vs) && _t.h())
                        ct = !0;
                    else {
                        for (var ft = _t.j(); ft.l(); ) {
                            var dt = ft.k();
                            if (Vs(dt)) {
                                ct = !1;
                                break t
                            }
                        }
                        ct = !0
                    }
                    ht = ct
                } else
                    ht = !1;
                if (ht) {
                    for (var pt, vt = r, yt = r.z26_1, wt = Hu(), bt = yt.j(); bt.l(); ) {
                        var gt = bt.k();
                        !(gt instanceof Ys) && wt.a(gt)
                    }
                    pt = wt,
                    r = vt.a27(pt)
                }
                J.a(new iv(r,Bs())),
                Ns(J);
                for (var kt = J, $t = Ju(Xu(kt, 10)), mt = kt.j(); mt.l(); ) {
                    var jt;
                    jt = mt.k().w2y_1,
                    $t.a(jt)
                }
                for (var qt = $t, Ct = r, xt = J, St = Ju(Xu(xt, 10)), zt = xt.j(); zt.l(); ) {
                    var Tt;
                    Tt = zt.k().x2y_1,
                    St.a(Tt)
                }
                return new nv(qt,Ct,St)
            }
            function nv(t, n, i) {
                this.z2y_1 = t,
                this.a2z_1 = n,
                this.b2z_1 = i
            }
            function iv(t, n) {
                this.w2y_1 = t,
                this.x2y_1 = n
            }
            function ev(t, n) {
                gv.call(this, ro()),
                this.k2y_1 = t,
                this.l2y_1 = 4,
                this.m2y_1 = 6,
                this.n2y_1 = Kp(this, this.k2y_1.v2y().i(0)),
                this.o2y_1 = cz(this.k2y_1.v2y().i(0).o2v_1),
                this.p2y_1 = tv(this, n);
                var i = this
                  , e = this.o2y_1
                  , r = this.k2y_1.t2y()
                  , o = this.k2y_1.u2y()
                  , u = this.p2y_1.b2z_1
                  , s = Vq(e, r, o, null, this.k2y_1.s2y_1.b2x_1, u, null, 72, null)
                  , a = this.n2y_1
                  , l = this.p2y_1.z2y_1;
                i.q2y_1 = new Bb(a,null,l,!0,s),
                this.r2y_1 = this.p2y_1.c2z()
            }
            function rv(t, n, i, e) {
                if (n instanceof cj)
                    return new Vp(t,n,e);
                var r;
                switch (t.r1_1) {
                case 0:
                    r = new Tv(n instanceof uj ? n : Zr(),i);
                    break;
                case 2:
                    r = n instanceof lj ? new av(n) : new ev(n instanceof uj ? n : Zr(),i);
                    break;
                case 3:
                    r = new xv(n instanceof uj ? n : Zr(),i);
                    break;
                case 1:
                    r = new mv(n instanceof aj ? n : Zr());
                    break;
                case 9:
                    r = new bv(n instanceof aj ? n : Zr());
                    break;
                case 4:
                case 8:
                    r = new dv(n instanceof uj ? n : Zr(),t);
                    break;
                case 7:
                    r = new qv(n instanceof uj ? n : Zr(),i);
                    break;
                case 6:
                case 5:
                    throw gu("Unsupported question type: " + t);
                case 10:
                    r = new lv(n instanceof fj ? n : Zr());
                    break;
                default:
                    Yu()
                }
                return r
            }
            function ov(t, n, i, e, r, o) {
                return 0 != (8 & r) && (e = null),
                rv(t, n, i, e)
            }
            function uv(t) {
                this.d2z_1 = t
            }
            function sv(t, n) {
                var i, e = t.z24_1;
                return i = n.z24_1,
                as(e, i)
            }
            function av(t) {
                gv.call(this, ro()),
                this.f2z_1 = t,
                this.g2z_1 = this.f2z_1.l2z_1,
                this.h2z_1 = this.g2z_1.h24_1,
                this.i2z_1 = this.g2z_1.i24_1;
                var n, i, e = this, r = ks(this.g2z_1.j24_1);
                i = new uv(sv),
                n = ts(r, i),
                e.j2z_1 = n;
                for (var o = this, u = Vq(this.g2z_1.e24_1, null, null, null, null, null, null, 120, null), s = Mp(this.h2z_1), a = Mp(this.i2z_1), l = this.j2z_1, h = Ju(Xu(l, 10)), _ = l.j(); _.l(); ) {
                    var c;
                    c = Mp(_.k().a25_1),
                    h.a(c)
                }
                var f, d = h, p = this.j2z_1;
                if (Qu(p, vs) && p.h())
                    f = 0;
                else {
                    for (var v = 0, y = p.j(); y.l(); )
                        y.k().y24_1 && ys(v = v + 1 | 0);
                    f = v
                }
                var w = 1 === f;
                o.k2z_1 = new Bb(s,a,d,w,u)
            }
            function lv(t) {
                gv.call(this, so()),
                this.n2z_1 = t,
                this.o2z_1 = this.n2z_1.u2z_1,
                this.p2z_1 = this.n2z_1.t2z_1;
                var n, i = this.p2z_1.i26_1, e = this.p2z_1.h26_1;
                if (this.n2z_1.u2z_1.a2x_1.equals(co()))
                    throw gu(Lo("FillInTheBlank only supports WORD and DEFINITION answer sides"));
                if (1 !== i.f())
                    throw gu(Lo("FillInTheBlank only supports 1 answer per question"));
                if (!(e instanceof Js))
                    throw n = "FillInTheBlank only supports text keyphrases. Received: " + e + " for " + Lo(PC(this.o2z_1.y2w_1)),
                    gu(Lo(n));
                var r = _v(this.p2z_1, this.o2z_1)
                  , o = r.b5()
                  , u = r.c5();
                this.q2z_1 = o,
                this.r2z_1 = u
            }
            function hv(t, n) {
                this.w2z_1 = t,
                this.x2z_1 = n
            }
            function _v(t, n) {
                var i, e = n, r = e.b5(), o = e.oc(), u = t.i26_1;
                i = new cv(fv);
                for (var s = ts(u, i), a = Hu(), l = js(ms()), h = r.y2z(o).t2x(), _ = r.y2z(o).u2x(), c = 0, f = Ju(Xu(s, 10)), d = 0, p = s.j(); p.l(); ) {
                    var v = p.k()
                      , y = d;
                    d = y + 1 | 0;
                    var w = Zs(y)
                      , b = v
                      , g = b.b5()
                      , k = b.c5();
                    if (0 !== g) {
                        var $, m = c;
                        $ = h.substring(m, g);
                        var j = new ok(Gs($, _, null, 4, null));
                        a.a(j)
                    }
                    var q = g + k | 0
                      , C = h.substring(g, q)
                      , x = new Xg(_,Mu(w));
                    a.a(x);
                    var S = Mu(w)
                      , z = new Js(C,_,null,null,null);
                    l.d5(S, z),
                    c = g + k | 0,
                    f.a(to())
                }
                if (c < h.length) {
                    var T, M = c;
                    T = h.substring(M);
                    var I = new ok(Gs(T, _, null, 4, null));
                    a.a(I)
                }
                return new hv(a,l)
            }
            function cv(t) {
                this.z2z_1 = t
            }
            function fv(t, n) {
                var i, e = t.v26_1;
                return i = n.v26_1,
                as(e, i)
            }
            function dv(t, n) {
                gv.call(this, n),
                this.b30_1 = t,
                this.c30_1 = cs(this.b30_1.v2y()),
                this.d30_1 = Tp(this.c30_1, this.b30_1.t2y()),
                this.e30_1 = Tp(this.c30_1, this.b30_1.u2y()),
                this.f30_1 = cz(this.c30_1.o2v_1);
                var i = this
                  , e = this.b30_1.t2y()
                  , r = this.b30_1.u2y();
                i.g30_1 = new Yb(this.d30_1,this.e30_1,Vq(this.f30_1, e, r, null, this.b30_1.s2y_1.b2x_1, null, null, 104, null))
            }
            function pv(t, n, i) {
                for (var e = cs(n.v2y()), r = n.t2y(), o = n.u2y(), u = i.h30(e, r), s = Hu(), a = u.j(); a.l(); ) {
                    var l = a.k();
                    !l.equals(e) && s.a(l)
                }
                for (var h = s, _ = Ju(Xu(h, 10)), c = h.j(); c.l(); ) {
                    var f;
                    f = AS(c.k(), o),
                    _.a(f)
                }
                var d = _
                  , p = YS(r) ? e.y2z(r) : null
                  , v = e.y2z(o).u2x();
                return new $d(AS(e, o),Tp(e, o),d,null == p ? null : p.t2x(),null == p ? null : p.u2x(),v)
            }
            function vv(t) {
                for (var n = ta(), i = 0, e = t.o30_1.j(); e.l(); ) {
                    var r = e.k()
                      , o = i;
                    i = o + 1 | 0;
                    for (var u = Zs(o), s = 0, a = t.o30_1.j(); a.l(); ) {
                        var l = a.k()
                          , h = s;
                        s = h + 1 | 0;
                        var _ = Zs(h);
                        if (u !== _) {
                            var c;
                            t: {
                                var f = t.j30_1.q30_1;
                                if (Qu(f, vs) && f.h())
                                    c = !1;
                                else {
                                    for (var d = f.j(); d.l(); ) {
                                        var p = d.k()
                                          , v = Tp(p, t.j30_1.r30_1)
                                          , y = Tp(p, t.j30_1.s30_1);
                                        if (_u(na([r, l]), na([v, y]))) {
                                            c = !0;
                                            break t
                                        }
                                    }
                                    c = !1
                                }
                            }
                            c && n.a(new Af(u,_))
                        }
                    }
                }
                return n
            }
            function yv(t) {
                for (var n = t.m30_1, i = Ju(Xu(n, 10)), e = 0, r = n.j(); r.l(); ) {
                    var o, u = r.k(), s = e;
                    e = s + 1 | 0;
                    var a = Zs(s);
                    o = eo(a, t.n30_1.i(u)),
                    i.a(o)
                }
                return Xs(i)
            }
            function wv(t) {
                return ks(ia(0, Kr(t.j30_1.q30_1.f(), 2)))
            }
            function bv(t) {
                gv.call(this, ea()),
                this.j30_1 = t,
                this.k30_1 = Ip(Fs(this.j30_1.q30_1), this.j30_1.r30_1),
                this.l30_1 = Ip(Fs(this.j30_1.q30_1), this.j30_1.s30_1),
                this.m30_1 = wv(this),
                this.n30_1 = ls(this.k30_1, this.l30_1);
                for (var n, i = this, e = this.m30_1, r = Ju(Xu(e, 10)), o = e.j(); o.l(); ) {
                    var u, s = o.k();
                    u = this.n30_1.i(s),
                    r.a(u)
                }
                n = r,
                i.o30_1 = n,
                this.p30_1 = new Eb(this.o30_1,Vq(null, this.j30_1.r30_1, this.j30_1.s30_1, null, null, null, null, 120, null))
            }
            function gv(t) {
                this.c2v_1 = t
            }
            function kv(t) {
                return ks(ra(t.u30_1.q30_1))
            }
            function $v(t, n) {
                for (var i = Ju(Xu(n, 10)), e = n.j(); e.l(); ) {
                    var r, o = e.k();
                    r = Tp(t.u30_1.q30_1.i(o), t.u30_1.s30_1),
                    i.a(r)
                }
                return i
            }
            function mv(t) {
                gv.call(this, Uo()),
                this.u30_1 = t,
                this.v30_1 = Ip(Fs(this.u30_1.q30_1), this.u30_1.r30_1),
                this.w30_1 = kv(this);
                var n, i = this, e = ra(this.v30_1), r = Ju(Xu(e, 10)), o = e.d1_1, u = e.e1_1;
                if (o <= u)
                    do {
                        var s, a = o;
                        o = o + 1 | 0,
                        s = this.w30_1.w(a),
                        r.a(s)
                    } while (a !== u);
                n = r,
                i.x30_1 = n,
                this.y30_1 = $v(this, this.w30_1),
                this.z30_1 = $v(this, Fs(ra(this.v30_1))),
                this.a31_1 = new Sb(this.v30_1,this.y30_1,Vq(null, this.u30_1.r30_1, this.u30_1.s30_1, null, null, null, null, 120, null))
            }
            function jv(t) {
                for (var n = Tp(t.e31_1, t.c31_1.t2y()), i = n.z26_1, e = Hu(), r = i.j(); r.l(); ) {
                    var o = r.k();
                    !o.q27().equals(oa()) && e.a(o)
                }
                var u = Wu(e)
                  , s = $p(t.e31_1, t.c31_1.u2y());
                return null != s && u.a(s),
                n.a27(u)
            }
            function qv(t, n) {
                gv.call(this, Ko()),
                this.c31_1 = t,
                this.d31_1 = n,
                this.e31_1 = this.c31_1.v2y().i(0),
                this.f31_1 = jv(this),
                this.g31_1 = Tp(this.e31_1, this.c31_1.u2y()),
                this.h31_1 = PC(this.e31_1);
                var i, e = this;
                t: {
                    for (var r = this.g31_1.z26_1.j(); r.l(); ) {
                        var o = r.k();
                        if (o instanceof As) {
                            i = o;
                            break t
                        }
                    }
                    throw xu("Collection contains no element matching the predicate.")
                }
                var u = (i instanceof As ? i : Zr()).u27_1
                  , s = this.c31_1.t2y()
                  , a = this.c31_1.u2y();
                e.i31_1 = new Bg(this.f31_1,u,Vq(this.h31_1, s, a, null, this.c31_1.s2y_1.b2x_1, null, null, 104, null))
            }
            function Cv(t, n, i) {
                var e = t.k31_1.v2y().i(0);
                return Tp(n ? e : cs(Ux(e, t.k31_1.t2y(), t.k31_1.u2y(), i, 1, !0, !1, !1)), t.k31_1.u2y())
            }
            function xv(t, n) {
                gv.call(this, oo()),
                this.k31_1 = t,
                this.l31_1 = this.k31_1.v2y().i(0),
                this.m31_1 = Tp(this.l31_1, this.k31_1.t2y()),
                this.n31_1 = bs().z9() >= .5,
                this.o31_1 = Cv(this, this.n31_1, n),
                this.p31_1 = PC(this.l31_1);
                var i = this
                  , e = this.k31_1.t2y()
                  , r = this.k31_1.u2y();
                i.q31_1 = new ig(this.m31_1,this.o31_1,Vq(this.p31_1, e, r, null, this.k31_1.s2y_1.b2x_1, null, null, 104, null))
            }
            function Sv(t) {
                if (!zv(t))
                    return null;
                var n;
                switch (t.s31_1.u2y().r1_1) {
                case 0:
                    n = t.u31_1.c2w_1;
                    break;
                case 1:
                    n = t.u31_1.d2w_1;
                    break;
                case 2:
                    return null;
                default:
                    Yu()
                }
                var i = n
                  , e = Mv(i.t2x());
                return null == e ? null : new Es(Zu(new As(e,i.u2x(),null)))
            }
            function zv(t) {
                return !!_u(gc(Fc()), Uc()) && null === t.u31_1.l2w_1
            }
            function Tv(t, n) {
                gv.call(this, io()),
                this.s31_1 = t,
                this.t31_1 = n,
                this.u31_1 = this.s31_1.v2y().i(0),
                this.v31_1 = Tp(this.u31_1, this.s31_1.t2y()),
                this.w31_1 = Tp(this.u31_1, this.s31_1.u2y()),
                this.x31_1 = PC(this.u31_1);
                var i, e = this;
                t: {
                    for (var r = this.w31_1.z26_1.j(); r.l(); ) {
                        var o = r.k();
                        if (o instanceof As) {
                            i = o;
                            break t
                        }
                    }
                    throw xu("Collection contains no element matching the predicate.")
                }
                var u = (i instanceof As ? i : Zr()).u27_1
                  , s = Sv(this)
                  , a = this.s31_1.t2y()
                  , l = this.s31_1.u2y();
                e.y31_1 = new lg(this.v31_1,u,s,Vq(this.x31_1, a, l, null, this.s31_1.s2y_1.b2x_1, null, null, 104, null))
            }
            function Mv(t) {
                var n = Lo(sa(ua(t) ? t : Zr()));
                if (n.length <= 3)
                    return null;
                var i = aa("\\s+").tj(n, 0)
                  , e = "________";
                if (i.f() >= 3) {
                    var r, o = i.f() / 3;
                    r = Math.floor(o);
                    var u = la(r)
                      , s = ha(i, ia(0, u));
                    return _a(s, " ", null, null, 0, null, null, 62, null) + " " + e
                }
                var a = Po(n, 0);
                return "" + new ca(a) + e
            }
            function Iv() {
                return Ov()
            }
            function Av() {
                cn = this,
                ru.call(this, "StudyMode", Qv())
            }
            function Ov() {
                return Gv(),
                null == cn && new Av,
                cn
            }
            function Ev() {
                fn = this;
                var t = this
                  , n = uu();
                t.z31_1 = su(n, Iv)
            }
            function Rv() {
                return Gv(),
                null == fn && new Ev,
                fn
            }
            function Qv() {
                return [Dv(), Lv(), Bv(), Nv(), Fv()]
            }
            function Gv() {
                if (dn)
                    return to();
                dn = !0,
                sn = new Pv("LEARN",0,"LEARN"),
                an = new Pv("ANDROID_WRITE",1,"ANDROID_WRITE"),
                ln = new Pv("IOS_WRITE",2,"IOS_WRITE"),
                hn = new Pv("WEB_WRITE",3,"WEB_WRITE"),
                _n = new Pv("SPELL",4,"SPELL"),
                Rv()
            }
            function Pv(t, n, i) {
                no.call(this, t, n),
                this.c32_1 = i
            }
            function Dv() {
                return Gv(),
                sn
            }
            function Lv() {
                return Gv(),
                an
            }
            function Bv() {
                return Gv(),
                ln
            }
            function Nv() {
                return Gv(),
                hn
            }
            function Fv() {
                return Gv(),
                _n
            }
            function Wv() {}
            function Uv() {}
            function Vv() {}
            function Hv(t, n) {
                var i;
                t: {
                    for (var e = t.v32_1.p24_1.j(); e.l(); ) {
                        var r = e.k();
                        if (r.s24_1.equals(n)) {
                            i = r;
                            break t
                        }
                    }
                    i = null
                }
                return null == i ? null : new Zv(i)
            }
            function Yv(t) {
                Kv.call(this),
                this.v32_1 = t
            }
            function Kv() {}
            function Zv(t) {
                this.x32_1 = t
            }
            function Xv(t) {
                this.d33_1 = t
            }
            function Jv() {
                return ny(),
                pn
            }
            function ty() {
                return ny(),
                vn
            }
            function ny() {
                if (yn)
                    ;
                else {
                    var t;
                    yn = !0;
                    var n, i = new ya, e = go(wa), r = new ba(e,null), o = go(ga), u = ma($a(go(ga), ka([]), !1));
                    n = Qu(u, ja) ? u : Zr(),
                    r.i1l(o, n),
                    to();
                    var s, a = go(qa), l = ma($a(go(qa), ka([]), !1));
                    s = Qu(l, ja) ? l : Zr(),
                    r.i1l(a, s),
                    to(),
                    r.j1l(i);
                    var h, _ = go(kb), c = new ba(_,null), f = go(Sb), d = ma($a(go(Sb), ka([]), !1));
                    h = Qu(d, ja) ? d : Zr(),
                    c.i1l(f, h),
                    to();
                    var p, v = go(Eb), y = ma($a(go(Eb), ka([]), !1));
                    p = Qu(y, ja) ? y : Zr(),
                    c.i1l(v, p),
                    to();
                    var w, b = go(Bb), g = ma($a(go(Bb), ka([]), !1));
                    w = Qu(g, ja) ? g : Zr(),
                    c.i1l(b, w),
                    to();
                    var k, $ = go(Yb), m = ma($a(go(Yb), ka([]), !1));
                    k = Qu(m, ja) ? m : Zr(),
                    c.i1l($, k),
                    to();
                    var j, q = go(ig), C = ma($a(go(ig), ka([]), !1));
                    j = Qu(C, ja) ? C : Zr(),
                    c.i1l(q, j),
                    to();
                    var x, S = go(lg), z = ma($a(go(lg), ka([]), !1));
                    x = Qu(z, ja) ? z : Zr(),
                    c.i1l(S, x),
                    to();
                    var T, M = go(wg), I = ma($a(go(wg), ka([]), !1));
                    T = Qu(I, ja) ? I : Zr(),
                    c.i1l(M, T),
                    to(),
                    c.j1l(i);
                    var A, O = go(bg), E = new ba(O,null), R = go(Sg), Q = ma($a(go(Sg), ka([]), !1));
                    A = Qu(Q, ja) ? Q : Zr(),
                    E.i1l(R, A),
                    to();
                    var G, P = go(Eg), D = ma($a(go(Eg), ka([]), !1));
                    G = Qu(D, ja) ? D : Zr(),
                    E.i1l(P, G),
                    to();
                    var L, B = go(Sb), N = ma($a(go(Sb), ka([]), !1));
                    L = Qu(N, ja) ? N : Zr(),
                    E.i1l(B, L),
                    to();
                    var F, W = go(Eb), U = ma($a(go(Eb), ka([]), !1));
                    F = Qu(U, ja) ? U : Zr(),
                    E.i1l(W, F),
                    to();
                    var V, H = go(Bb), Y = ma($a(go(Bb), ka([]), !1));
                    V = Qu(Y, ja) ? Y : Zr(),
                    E.i1l(H, V),
                    to();
                    var K, Z = go(Yb), X = ma($a(go(Yb), ka([]), !1));
                    K = Qu(X, ja) ? X : Zr(),
                    E.i1l(Z, K),
                    to();
                    var J, tt = go(ig), nt = ma($a(go(ig), ka([]), !1));
                    J = Qu(nt, ja) ? nt : Zr(),
                    E.i1l(tt, J),
                    to();
                    var it, et = go(lg), rt = ma($a(go(lg), ka([]), !1));
                    it = Qu(rt, ja) ? rt : Zr(),
                    E.i1l(et, it),
                    to();
                    var ot, ut = go(Bg), st = ma($a(go(Bg), ka([]), !1));
                    ot = Qu(st, ja) ? st : Zr(),
                    E.i1l(ut, ot),
                    to();
                    var at, lt = go(wg), ht = ma($a(go(wg), ka([]), !1));
                    at = Qu(ht, ja) ? ht : Zr(),
                    E.i1l(lt, at),
                    to(),
                    E.j1l(i);
                    var _t, ct = go(Iy), ft = new ba(ct,null), dt = go(Py), pt = ma($a(go(Py), ka([]), !1));
                    _t = Qu(pt, ja) ? pt : Zr(),
                    ft.i1l(dt, _t),
                    to();
                    var vt, yt = go(Uy), wt = ma($a(go(Uy), ka([]), !1));
                    vt = Qu(wt, ja) ? wt : Zr(),
                    ft.i1l(yt, vt),
                    to();
                    var bt, gt = go(Jy), kt = ma($a(go(Jy), ka([]), !1));
                    bt = Qu(kt, ja) ? kt : Zr(),
                    ft.i1l(gt, bt),
                    to();
                    var $t, mt = go(uw), jt = ma($a(go(uw), ka([]), !1));
                    $t = Qu(jt, ja) ? jt : Zr(),
                    ft.i1l(mt, $t),
                    to();
                    var qt, Ct = go(fw), xt = ma($a(go(fw), ka([]), !1));
                    qt = Qu(xt, ja) ? xt : Zr(),
                    ft.i1l(Ct, qt),
                    to(),
                    ft.j1l(i);
                    var St, zt = go(kj), Tt = new ba(zt,null), Mt = go(Sj), It = ma($a(go(Sj), ka([]), !1));
                    St = Qu(It, ja) ? It : Zr(),
                    Tt.i1l(Mt, St),
                    to();
                    var At, Ot = go(Ej), Et = ma($a(go(Ej), ka([]), !1));
                    At = Qu(Et, ja) ? Et : Zr(),
                    Tt.i1l(Ot, At),
                    to();
                    var Rt, Qt = go(Bj), Gt = ma($a(go(Bj), ka([]), !1));
                    Rt = Qu(Gt, ja) ? Gt : Zr(),
                    Tt.i1l(Qt, Rt),
                    to();
                    var Pt, Dt = go(Yj), Lt = ma($a(go(Yj), ka([]), !1));
                    Pt = Qu(Lt, ja) ? Lt : Zr(),
                    Tt.i1l(Dt, Pt),
                    to();
                    var Bt, Nt = go(rq), Ft = ma($a(go(rq), ka([]), !1));
                    Bt = Qu(Ft, ja) ? Ft : Zr(),
                    Tt.i1l(Nt, Bt),
                    to();
                    var Wt, Ut = go(_q), Vt = ma($a(go(_q), ka([]), !1));
                    Wt = Qu(Vt, ja) ? Vt : Zr(),
                    Tt.i1l(Ut, Wt),
                    to();
                    var Ht, Yt = go(wq), Kt = ma($a(go(wq), ka([]), !1));
                    Ht = Qu(Kt, ja) ? Kt : Zr(),
                    Tt.i1l(Yt, Ht),
                    to(),
                    Tt.j1l(i);
                    var Zt, Xt = go(Ef), Jt = new ba(Xt,null), tn = go(Ff), nn = ma($a(go(Ff), ka([]), !1));
                    Zt = Qu(nn, ja) ? nn : Zr(),
                    Jt.i1l(tn, Zt),
                    to();
                    var en, rn = go(Jf), on = ma($a(go(Jf), ka([]), !1));
                    en = Qu(on, ja) ? on : Zr(),
                    Jt.i1l(rn, en),
                    to(),
                    Jt.j1l(i),
                    t = i.o1b(),
                    pn = t,
                    vn = Sa(xa(Jv(), Ca()))
                }
            }
            function iy(t, n) {
                this.e33_1 = t,
                this.f33_1 = n
            }
            function ey(t, n, i) {
                t.h33_1 = n,
                t.i33_1 = i
            }
            function ry() {
                wn = this,
                this.h33_1 = null,
                this.i33_1 = null
            }
            function oy() {
                return null == wn && new ry,
                wn
            }
            function uy(t, n, i, e) {
                oy().j33_1 = t;
                for (var r = !1, o = t.l33_1, u = Hu(), s = o.j(); s.l(); ) {
                    var a = s.k();
                    a instanceof qa && u.a(a)
                }
                for (var l = u, h = Ju(Xu(l, 10)), _ = 0, c = l.j(); c.l(); ) {
                    var f, d = c.k(), p = _;
                    _ = p + 1 | 0;
                    var v = Zs(p)
                      , y = !!e || !r && v >= QS()
                      , w = new Yv(d).w32(i, t.m33_1, y);
                    null != w.l2w_1 && (r = !0),
                    f = w,
                    h.a(f)
                }
                for (var b = h, g = t.l33_1, k = Hu(), $ = g.j(); $.l(); ) {
                    var m = $.k();
                    m instanceof ga && k.a(m)
                }
                return vz(b, k, t.n33_1)
            }
            function sy(t, n, i) {
                var e, r = t.w23();
                if (null == r)
                    throw e = "Study Mode " + t.s23_1 + " does not have an associated QuestionType.",
                    Su(Lo(e));
                var o, u = r, s = i.d3(t.r23_1);
                if (null == s)
                    throw o = "Missing card with id " + Lo(t.r23_1),
                    gu(Lo(o));
                var a = s
                  , l = za(t.u23_1);
                if (null == l)
                    throw gu(Lo("This shim can only handle 2-sided card answers"));
                var h = l
                  , _ = za(t.v23_1);
                if (null == _)
                    throw gu(Lo("This shim can only handle 2-sided card answers"));
                var c, f = _, d = a.q24(h);
                if (null == d)
                    throw c = "Missing card side with id " + Lo(h),
                    Su(Lo(c));
                var p, v = d, y = a.q24(f);
                if (null == y)
                    throw p = "Missing card side with id " + Lo(f),
                    Su(Lo(p));
                var w = y;
                return new _m(Ta(t.p23_1),v.s24_1,w.s24_1,u,t.r23_1,t.t23_1)
            }
            function ay(t) {
                return function(n, i) {
                    return uy(n, hy(), i, t)
                }
            }
            function ly() {
                bn = this
            }
            function hy() {
                return null == bn && new ly,
                bn
            }
            function _y() {
                gn = this
            }
            function cy() {
                return null == gn && new _y,
                gn
            }
            function fy() {
                kn = this;
                var t = new du("assistantMode.refactored.types.AdsSettings",this,4);
                t.b1d("numCardsToShowAds", !1),
                t.b1d("numCardsPriorToPreloadAds", !0),
                t.b1d("minShownInterval", !0),
                t.b1d("maxNumAds", !0),
                this.q33_1 = t
            }
            function dy() {
                return null == kn && new fy,
                kn
            }
            function py(t, n, i, e, r, o, u) {
                return 1 != (1 & t) && bu(t, 1, dy().q33_1),
                u.s33_1 = n,
                u.t33_1 = 0 == (2 & t) ? 2 : i,
                u.u33_1 = 0 == (4 & t) ? null : e,
                u.v33_1 = 0 == (8 & t) ? null : r,
                u
            }
            function vy(t, n, i, e, r, o) {
                return py(t, n, i, e, r, o, Object.create(yy.prototype))
            }
            function yy() {}
            function wy() {
                $n = this
            }
            function by() {
                return null == $n && new wy,
                $n
            }
            function gy() {
                mn = this;
                var t = new du("assistantMode.refactored.types.AdsState",this,2);
                t.b1d("shouldShowAds", !1),
                t.b1d("shouldPreloadAds", !1),
                this.w33_1 = t
            }
            function ky() {
                return null == mn && new gy,
                mn
            }
            function $y(t, n, i, e, r) {
                return 3 != (3 & t) && bu(t, 3, ky().w33_1),
                r.y33_1 = n,
                r.z33_1 = i,
                r
            }
            function my(t, n, i, e) {
                return $y(t, n, i, e, Object.create(jy.prototype))
            }
            function jy(t, n) {
                by(),
                this.y33_1 = t,
                this.z33_1 = n
            }
            function qy() {
                jn = this
            }
            function Cy() {
                return null == jn && new qy,
                jn
            }
            function xy() {
                qn = this;
                var t = new du("assistantMode.refactored.types.AssistantGradingSettings",this,3);
                t.b1d("acceptsPartialAnswer", !1),
                t.b1d("acceptsAnswersWithTypos", !1),
                t.b1d("acceptsSmartGrading", !1),
                this.a34_1 = t
            }
            function Sy() {
                return null == qn && new xy,
                qn
            }
            function zy(t, n, i, e, r, o) {
                return 7 != (7 & t) && bu(t, 7, Sy().a34_1),
                o.p2s_1 = n,
                o.q2s_1 = i,
                o.r2s_1 = e,
                o
            }
            function Ty(t, n, i, e, r) {
                return zy(t, n, i, e, r, Object.create(My.prototype))
            }
            function My() {}
            function Iy() {}
            function Ay() {
                Cn = this
            }
            function Oy() {
                return null == Cn && new Ay,
                Cn
            }
            function Ey() {
                xn = this;
                var t = new du("WebWriteMasteryBuckets",this,3);
                t.b1d("remaining", !1),
                t.b1d("incorrect", !1),
                t.b1d("correct", !1),
                this.c34_1 = t
            }
            function Ry() {
                return null == xn && new Ey,
                xn
            }
            function Qy(t, n, i, e, r, o) {
                return 7 != (7 & t) && bu(t, 7, Ry().c34_1),
                o.e34_1 = n,
                o.f34_1 = i,
                o.g34_1 = e,
                o
            }
            function Gy(t, n, i, e, r) {
                return Qy(t, n, i, e, r, Object.create(Py.prototype))
            }
            function Py(t, n, i) {
                Oy(),
                this.e34_1 = t,
                this.f34_1 = n,
                this.g34_1 = i
            }
            function Dy() {
                Sn = this
            }
            function Ly() {
                return null == Sn && new Dy,
                Sn
            }
            function By() {
                zn = this;
                var t = new du("AndroidWriteMasteryBuckets",this,2);
                t.b1d("correctZeroTimes", !1),
                t.b1d("correctOneTime", !1),
                this.h34_1 = t
            }
            function Ny() {
                return null == zn && new By,
                zn
            }
            function Fy(t, n, i, e, r) {
                return 3 != (3 & t) && bu(t, 3, Ny().h34_1),
                r.j34_1 = n,
                r.k34_1 = i,
                r
            }
            function Wy(t, n, i, e) {
                return Fy(t, n, i, e, Object.create(Uy.prototype))
            }
            function Uy(t, n) {
                Ly(),
                this.j34_1 = t,
                this.k34_1 = n
            }
            function Vy() {
                Tn = this
            }
            function Hy() {
                return null == Tn && new Vy,
                Tn
            }
            function Yy() {
                Mn = this;
                var t = new du("IosWriteMasteryBuckets",this,3);
                t.b1d("correctZeroTimes", !1),
                t.b1d("correctOneTime", !1),
                t.b1d("correctTwoTimes", !1),
                this.l34_1 = t
            }
            function Ky() {
                return null == Mn && new Yy,
                Mn
            }
            function Zy(t, n, i, e, r, o) {
                return 7 != (7 & t) && bu(t, 7, Ky().l34_1),
                o.n34_1 = n,
                o.o34_1 = i,
                o.p34_1 = e,
                o
            }
            function Xy(t, n, i, e, r) {
                return Zy(t, n, i, e, r, Object.create(Jy.prototype))
            }
            function Jy(t, n, i) {
                Hy(),
                this.n34_1 = t,
                this.o34_1 = n,
                this.p34_1 = i
            }
            function tw() {
                In = this
            }
            function nw() {
                return null == In && new tw,
                In
            }
            function iw() {
                An = this;
                var t = new du("SpellMasteryBuckets",this,3);
                t.b1d("correctZeroTimes", !1),
                t.b1d("correctOneTime", !1),
                t.b1d("correctTwoTimes", !1),
                this.q34_1 = t
            }
            function ew() {
                return null == An && new iw,
                An
            }
            function rw(t, n, i, e, r, o) {
                return 7 != (7 & t) && bu(t, 7, ew().q34_1),
                o.s34_1 = n,
                o.t34_1 = i,
                o.u34_1 = e,
                o
            }
            function ow(t, n, i, e, r) {
                return rw(t, n, i, e, r, Object.create(uw.prototype))
            }
            function uw(t, n, i) {
                nw(),
                this.s34_1 = t,
                this.t34_1 = n,
                this.u34_1 = i
            }
            function sw() {
                On = this
            }
            function aw() {
                return null == On && new sw,
                On
            }
            function lw() {
                En = this;
                var t = new du("FlashcardsMasteryBuckets",this,2);
                t.b1d("remaining", !1),
                t.b1d("completed", !1),
                this.v34_1 = t
            }
            function hw() {
                return null == En && new lw,
                En
            }
            function _w(t, n, i, e, r) {
                return 3 != (3 & t) && bu(t, 3, hw().v34_1),
                r.x34_1 = n,
                r.y34_1 = i,
                r
            }
            function cw(t, n, i, e) {
                return _w(t, n, i, e, Object.create(fw.prototype))
            }
            function fw(t, n) {
                aw(),
                this.x34_1 = t,
                this.y34_1 = n
            }
            function dw(t, n, i, e, r, o) {
                return 0 != (2 & e) && (n = null),
                0 != (4 & e) && (i = null),
                $w.call(o, t, n, i),
                o
            }
            function pw(t, n, i, e, r) {
                return dw(t, n, i, e, r, Object.create($w.prototype))
            }
            function vw() {
                Rn = this
            }
            function yw() {
                return null == Rn && new vw,
                Rn
            }
            function ww() {
                Qn = this;
                var t = new du("assistantMode.refactored.types.QuestionSource",this,3);
                t.b1d("studiableMetadataType", !1),
                t.b1d("studiableMetadataCategory", !0),
                t.b1d("studiableMetadataRank", !0),
                this.z34_1 = t
            }
            function bw() {
                return null == Qn && new ww,
                Qn
            }
            function gw(t, n, i, e, r, o) {
                return 1 != (1 & t) && bu(t, 1, bw().z34_1),
                o.j2v_1 = n,
                o.k2v_1 = 0 == (2 & t) ? null : i,
                o.l2v_1 = 0 == (4 & t) ? null : e,
                o
            }
            function kw(t, n, i, e, r) {
                return gw(t, n, i, e, r, Object.create($w.prototype))
            }
            function $w(t, n, i) {
                yw(),
                this.j2v_1 = t,
                this.k2v_1 = n,
                this.l2v_1 = i
            }
            function mw(t, n) {
                var i = n.k2v_1;
                if (null == i)
                    throw Su(Lo("studiableMetadataCategory should not be null on an Alternative question"));
                var e = n.l2v_1;
                if (null == e)
                    throw Su(Lo("studiableMetadataRank should not be null on an Alternative question"));
                var r = n.l2v_1;
                return null != r && null != t.l25_1 && t.m25_1 <= r
            }
            function jw() {
                Gn = this
            }
            function qw() {
                return null == Gn && new jw,
                Gn
            }
            function Cw() {
                Pn = this;
                var t = new du("assistantMode.refactored.types.TaskRoundProgress",this,2);
                t.b1d("numItemsCompleted", !1),
                t.b1d("numTotalItems", !1),
                this.b35_1 = t
            }
            function xw() {
                return null == Pn && new Cw,
                Pn
            }
            function Sw(t, n, i, e, r) {
                return 3 != (3 & t) && bu(t, 3, xw().b35_1),
                r.d35_1 = n,
                r.e35_1 = i,
                r
            }
            function zw(t, n, i, e) {
                return Sw(t, n, i, e, Object.create(Tw.prototype))
            }
            function Tw(t, n) {
                qw(),
                this.d35_1 = t,
                this.e35_1 = n
            }
            function Mw() {
                Dn = this
            }
            function Iw() {
                return null == Dn && new Mw,
                Dn
            }
            function Aw() {
                Ln = this;
                var t = new du("assistantMode.refactored.types.RoundProgress",this,2);
                t.b1d("numerator", !1),
                t.b1d("denominator", !1),
                this.f35_1 = t
            }
            function Ow() {
                return null == Ln && new Aw,
                Ln
            }
            function Ew(t, n, i, e, r) {
                return 3 != (3 & t) && bu(t, 3, Ow().f35_1),
                r.h35_1 = n,
                r.i35_1 = i,
                r
            }
            function Rw(t, n, i, e) {
                return Ew(t, n, i, e, Object.create(Qw.prototype))
            }
            function Qw(t, n) {
                Iw(),
                this.h35_1 = t,
                this.i35_1 = n
            }
            function Gw() {
                Bn = this
            }
            function Pw() {
                return null == Bn && new Gw,
                Bn
            }
            function Dw() {
                Nn = this;
                var t = new du("assistantMode.refactored.types.StudiableData",this,3);
                t.b1d("studiableItems", !1),
                t.b1d("setIdToDiagramImage", !0),
                t.b1d("studiableMetadataByType", !0),
                this.j35_1 = t
            }
            function Lw() {
                return null == Nn && new Dw,
                Nn
            }
            function Bw(t, n, i, e, r, o) {
                return 1 != (1 & t) && bu(t, 1, Lw().j35_1),
                o.l33_1 = n,
                o.m33_1 = 0 == (2 & t) ? ms() : i,
                o.n33_1 = 0 == (4 & t) ? ms() : e,
                o
            }
            function Nw(t, n, i, e, r) {
                return Bw(t, n, i, e, r, Object.create(Fw.prototype))
            }
            function Fw(t, n, i) {
                Pw(),
                this.l33_1 = t,
                this.m33_1 = n,
                this.n33_1 = i
            }
            function Ww() {
                Fn = this
            }
            function Uw() {
                return null == Fn && new Ww,
                Fn
            }
            function Vw() {
                Wn = this;
                var t = new du("assistantMode.refactored.types.StudyEngineSettings",this,6);
                t.b1d("studySettings", !1),
                t.b1d("gradingSettings", !1),
                t.b1d("studyLearnSettings", !1),
                t.b1d("experimentConfiguration", !1),
                t.b1d("studyMode", !1),
                t.b1d("shouldFetchStudiableMetadata", !1),
                this.n35_1 = t
            }
            function Hw() {
                return null == Wn && new Vw,
                Wn
            }
            function Yw(t, n, i, e, r, o, u, s, a) {
                return 63 != (63 & t) && bu(t, 63, Hw().n35_1),
                a.p35_1 = n,
                a.q35_1 = i,
                a.r35_1 = e,
                a.s35_1 = r,
                a.t35_1 = o,
                a.u35_1 = u,
                a
            }
            function Kw(t, n, i, e, r, o, u, s) {
                return Yw(t, n, i, e, r, o, u, s, Object.create(Zw.prototype))
            }
            function Zw() {}
            function Xw() {
                Un = this;
                var t = new du("assistantMode.refactored.types.StudyLearnSettings",this,4);
                t.b1d("showTasks", !1),
                t.b1d("shouldInterleaveQuestions", !1),
                t.b1d("crossModeResetTimestamp", !0),
                t.b1d("shouldFallbackToFlashcardsForLongText", !0),
                this.w35_1 = t
            }
            function Jw() {
                return null == Un && new Xw,
                Un
            }
            function tb(t, n, i, e, r, o, u) {
                return 3 != (3 & t) && bu(t, 3, Jw().w35_1),
                u.y35_1 = n,
                u.z35_1 = i,
                u.a36_1 = 0 == (4 & t) ? null : e,
                u.b36_1 = 0 == (8 & t) || r,
                u
            }
            function nb(t, n, i, e, r, o) {
                return tb(t, n, i, e, r, o, Object.create(ib.prototype))
            }
            function ib() {}
            function eb(t, n, i, e, r, o, u, s) {
                return 0 != (16 & o) && (r = Eh()),
                _b.call(s, t, n, i, e, r),
                s
            }
            function rb(t, n, i, e, r, o, u) {
                return eb(t, n, i, e, r, o, u, Object.create(_b.prototype))
            }
            function ob() {
                Vn = this
            }
            function ub() {
                return null == Vn && new ob,
                Vn
            }
            function sb() {
                Hn = this;
                var t = new du("assistantMode.refactored.types.StudySettings.NSidedCardSettings",this,5);
                t.b1d("enabledQuestionTypes", !1),
                t.b1d("enabledPromptSides", !1),
                t.b1d("enabledAnswerSides", !1),
                t.b1d("enabledWrittenAnswerSides", !1),
                t.b1d("enabledLocationQuestionTypes", !0),
                this.c36_1 = t
            }
            function ab() {
                return null == Hn && new sb,
                Hn
            }
            function lb(t, n, i, e, r, o, u, s) {
                return 15 != (15 & t) && bu(t, 15, ab().c36_1),
                s.e36_1 = n,
                s.f36_1 = i,
                s.g36_1 = e,
                s.h36_1 = r,
                s.i36_1 = 0 == (16 & t) ? Eh() : o,
                s
            }
            function hb(t, n, i, e, r, o, u) {
                return lb(t, n, i, e, r, o, u, Object.create(_b.prototype))
            }
            function _b(t, n, i, e, r) {
                ub(),
                this.e36_1 = t,
                this.f36_1 = n,
                this.g36_1 = i,
                this.h36_1 = e,
                this.i36_1 = r
            }
            function cb() {
                Yn = this
            }
            function fb() {
                return null == Yn && new cb,
                Yn
            }
            function db() {
                Kn = this;
                var t = new du("assistantMode.refactored.types.StudySettings",this,6);
                t.b1d("knowledgeLevel", !1),
                t.b1d("nSidedCardSettings", !1),
                t.b1d("shuffle", !1),
                t.b1d("studyPathGoal", !1),
                t.b1d("taskSequence", !1),
                t.b1d("userLanguageCode", !1),
                this.j36_1 = t
            }
            function pb() {
                return null == Kn && new db,
                Kn
            }
            function vb(t, n, i, e, r, o, u, s, a) {
                return 63 != (63 & t) && bu(t, 63, pb().j36_1),
                a.l36_1 = n,
                a.m36_1 = i,
                a.n36_1 = e,
                a.o36_1 = r,
                a.p36_1 = o,
                a.q36_1 = u,
                a
            }
            function yb(t, n, i, e, r, o, u, s) {
                return vb(t, n, i, e, r, o, u, s, Object.create(wb.prototype))
            }
            function wb(t, n, i, e, r, o) {
                fb(),
                this.l36_1 = t,
                this.m36_1 = n,
                this.n36_1 = i,
                this.o36_1 = e,
                this.p36_1 = r,
                this.q36_1 = o
            }
            function bb() {
                Zn = this
            }
            function gb() {
                return null == Zn && new bb,
                Zn
            }
            function kb() {
                gb()
            }
            function $b() {
                Xn = this
            }
            function mb() {
                return null == Xn && new $b,
                Xn
            }
            function jb() {
                Jn = this;
                var t = new du("SeparatedOptionMatchingQuestion",this,4);
                t.b1d("prompts", !1),
                t.b1d("options", !1),
                t.b1d("metadata", !1),
                t.b1d("questionType", !0),
                this.s36_1 = t
            }
            function qb() {
                return null == Jn && new jb,
                Jn
            }
            function Cb(t, n, i, e, r, o, u) {
                return 7 != (7 & t) && bu(t, 7, qb().s36_1),
                u.u36_1 = n,
                u.v36_1 = i,
                u.w36_1 = e,
                u.x36_1 = 0 == (8 & t) ? Uo() : r,
                u
            }
            function xb(t, n, i, e, r, o) {
                return Cb(t, n, i, e, r, o, Object.create(Sb.prototype))
            }
            function Sb(t, n, i) {
                mb(),
                this.u36_1 = t,
                this.v36_1 = n,
                this.w36_1 = i,
                this.x36_1 = Uo()
            }
            function zb() {
                ti = this
            }
            function Tb() {
                return null == ti && new zb,
                ti
            }
            function Mb() {
                ni = this;
                var t = new du("MixedOptionMatchingQuestion",this,3);
                t.b1d("options", !1),
                t.b1d("metadata", !1),
                t.b1d("questionType", !0),
                this.y36_1 = t
            }
            function Ib() {
                return null == ni && new Mb,
                ni
            }
            function Ab(t, n, i, e, r, o) {
                return 3 != (3 & t) && bu(t, 3, Ib().y36_1),
                o.a37_1 = n,
                o.b37_1 = i,
                o.c37_1 = 0 == (4 & t) ? ea() : e,
                o
            }
            function Ob(t, n, i, e, r) {
                return Ab(t, n, i, e, r, Object.create(Eb.prototype))
            }
            function Eb(t, n) {
                Tb(),
                this.a37_1 = t,
                this.b37_1 = n,
                this.c37_1 = ea()
            }
            function Rb() {
                ii = this
            }
            function Qb() {
                return null == ii && new Rb,
                ii
            }
            function Gb() {
                ei = this;
                var t = new du("MultipleChoiceQuestion",this,6);
                t.b1d("prompt", !1),
                t.b1d("hint", !1),
                t.b1d("options", !1),
                t.b1d("hasExactlyOneCorrectAnswer", !1),
                t.b1d("metadata", !1),
                t.b1d("questionType", !0),
                this.d37_1 = t
            }
            function Pb() {
                return null == ei && new Gb,
                ei
            }
            function Db(t, n, i, e, r, o, u, s, a) {
                return 31 != (31 & t) && bu(t, 31, Pb().d37_1),
                a.f37_1 = n,
                a.g37_1 = i,
                a.h37_1 = e,
                a.i37_1 = r,
                a.j37_1 = o,
                a.k37_1 = 0 == (32 & t) ? ro() : u,
                a
            }
            function Lb(t, n, i, e, r, o, u, s) {
                return Db(t, n, i, e, r, o, u, s, Object.create(Bb.prototype))
            }
            function Bb(t, n, i, e, r) {
                Qb(),
                this.f37_1 = t,
                this.g37_1 = n,
                this.h37_1 = i,
                this.i37_1 = e,
                this.j37_1 = r,
                this.k37_1 = ro()
            }
            function Nb() {
                ri = this
            }
            function Fb() {
                return null == ri && new Nb,
                ri
            }
            function Wb() {
                oi = this;
                var t = new du("RevealSelfAssessmentQuestion",this,4);
                t.b1d("front", !1),
                t.b1d("back", !1),
                t.b1d("metadata", !1),
                t.b1d("questionType", !0),
                this.l37_1 = t
            }
            function Ub() {
                return null == oi && new Wb,
                oi
            }
            function Vb(t, n, i, e, r, o, u) {
                return 7 != (7 & t) && bu(t, 7, Ub().l37_1),
                u.n37_1 = n,
                u.o37_1 = i,
                u.p37_1 = e,
                u.q37_1 = 0 == (8 & t) ? uo() : r,
                u
            }
            function Hb(t, n, i, e, r, o) {
                return Vb(t, n, i, e, r, o, Object.create(Yb.prototype))
            }
            function Yb(t, n, i) {
                Fb(),
                this.n37_1 = t,
                this.o37_1 = n,
                this.p37_1 = i,
                this.q37_1 = uo()
            }
            function Kb() {
                ui = this
            }
            function Zb() {
                return null == ui && new Kb,
                ui
            }
            function Xb() {
                si = this;
                var t = new du("TrueFalseQuestion",this,4);
                t.b1d("prompt", !1),
                t.b1d("goesWith", !1),
                t.b1d("metadata", !1),
                t.b1d("questionType", !0),
                this.r37_1 = t
            }
            function Jb() {
                return null == si && new Xb,
                si
            }
            function tg(t, n, i, e, r, o, u) {
                return 7 != (7 & t) && bu(t, 7, Jb().r37_1),
                u.t37_1 = n,
                u.u37_1 = i,
                u.v37_1 = e,
                u.w37_1 = 0 == (8 & t) ? oo() : r,
                u
            }
            function ng(t, n, i, e, r, o) {
                return tg(t, n, i, e, r, o, Object.create(ig.prototype))
            }
            function ig(t, n, i) {
                Zb(),
                this.t37_1 = t,
                this.u37_1 = n,
                this.v37_1 = i,
                this.w37_1 = oo()
            }
            function eg() {
                ai = this
            }
            function rg() {
                return null == ai && new eg,
                ai
            }
            function og() {
                li = this;
                var t = new du("WrittenQuestion",this,5);
                t.b1d("prompt", !1),
                t.b1d("answerLanguageCode", !1),
                t.b1d("hint", !1),
                t.b1d("metadata", !1),
                t.b1d("questionType", !0),
                this.x37_1 = t
            }
            function ug() {
                return null == li && new og,
                li
            }
            function sg(t, n, i, e, r, o, u, s) {
                return 15 != (15 & t) && bu(t, 15, ug().x37_1),
                s.z37_1 = n,
                s.a38_1 = i,
                s.b38_1 = e,
                s.c38_1 = r,
                s.d38_1 = 0 == (16 & t) ? io() : o,
                s
            }
            function ag(t, n, i, e, r, o, u) {
                return sg(t, n, i, e, r, o, u, Object.create(lg.prototype))
            }
            function lg(t, n, i, e) {
                rg(),
                this.z37_1 = t,
                this.a38_1 = n,
                this.b38_1 = i,
                this.c38_1 = e,
                this.d38_1 = io()
            }
            function hg(t, n, i, e, r, o, u, s) {
                return 0 != (16 & o) && (r = null),
                wg.call(s, t, n, i, e, r),
                s
            }
            function _g(t, n, i, e, r, o, u) {
                return hg(t, n, i, e, r, o, u, Object.create(wg.prototype))
            }
            function cg() {
                hi = this
            }
            function fg() {
                return null == hi && new cg,
                hi
            }
            function dg() {
                _i = this;
                var t = new du("FillInTheBlankQuestion",this,6);
                t.b1d("prompt", !1),
                t.b1d("segments", !1),
                t.b1d("metadata", !1),
                t.b1d("modelVersion", !1),
                t.b1d("algorithm", !0),
                t.b1d("questionType", !0),
                this.e38_1 = t
            }
            function pg() {
                return null == _i && new dg,
                _i
            }
            function vg(t, n, i, e, r, o, u, s, a) {
                return 15 != (15 & t) && bu(t, 15, pg().e38_1),
                a.g38_1 = n,
                a.h38_1 = i,
                a.i38_1 = e,
                a.j38_1 = r,
                a.k38_1 = 0 == (16 & t) ? null : o,
                a.l38_1 = 0 == (32 & t) ? so() : u,
                a
            }
            function yg(t, n, i, e, r, o, u, s) {
                return vg(t, n, i, e, r, o, u, s, Object.create(wg.prototype))
            }
            function wg(t, n, i, e, r) {
                fg(),
                this.g38_1 = t,
                this.h38_1 = n,
                this.i38_1 = i,
                this.j38_1 = e,
                this.k38_1 = r,
                this.l38_1 = so()
            }
            function bg() {}
            function gg(t, n, i, e, r, o, u, s) {
                return 0 != (16 & o) && (r = iC(null, 1, null)),
                Sg.call(s, t, n, i, e, r),
                s
            }
            function kg(t, n, i, e, r, o, u) {
                return gg(t, n, i, e, r, o, u, Object.create(Sg.prototype))
            }
            function $g() {
                ci = this
            }
            function mg() {
                return null == ci && new $g,
                ci
            }
            function jg() {
                fi = this;
                var t = new du("Checkpoint",this,5);
                t.b1d("progressState", !1),
                t.b1d("hasCompletedStudying", !1),
                t.b1d("roundResults", !1),
                t.b1d("checkpointNumber", !1),
                t.b1d("metadata", !0),
                this.m38_1 = t
            }
            function qg() {
                return null == fi && new jg,
                fi
            }
            function Cg(t, n, i, e, r, o, u, s) {
                return 15 != (15 & t) && bu(t, 15, qg().m38_1),
                s.o38_1 = n,
                s.p38_1 = i,
                s.q38_1 = e,
                s.r38_1 = r,
                s.s38_1 = 0 == (16 & t) ? iC(null, 1, null) : o,
                s
            }
            function xg(t, n, i, e, r, o, u) {
                return Cg(t, n, i, e, r, o, u, Object.create(Sg.prototype))
            }
            function Sg(t, n, i, e, r) {
                mg(),
                this.o38_1 = t,
                this.p38_1 = n,
                this.q38_1 = i,
                this.r38_1 = e,
                this.s38_1 = r
            }
            function zg() {
                di = this
            }
            function Tg() {
                return null == di && new zg,
                di
            }
            function Mg() {
                pi = this;
                var t = new du("LearnPaywall",this,2);
                t.b1d("checkpoint", !1),
                t.b1d("metadata", !0),
                this.t38_1 = t
            }
            function Ig() {
                return null == pi && new Mg,
                pi
            }
            function Ag(t, n, i, e, r) {
                return 1 != (1 & t) && bu(t, 1, Ig().t38_1),
                r.v38_1 = n,
                r.w38_1 = 0 == (2 & t) ? _C(null, 1, null) : i,
                r
            }
            function Og(t, n, i, e) {
                return Ag(t, n, i, e, Object.create(Eg.prototype))
            }
            function Eg(t, n) {
                Tg(),
                this.v38_1 = t,
                this.w38_1 = n
            }
            function Rg() {
                vi = this
            }
            function Qg() {
                return null == vi && new Rg,
                vi
            }
            function Gg() {
                yi = this;
                var t = new du("SpellingQuestion",this,4);
                t.b1d("prompt", !1),
                t.b1d("answerLanguageCode", !1),
                t.b1d("metadata", !1),
                t.b1d("questionType", !0),
                this.x38_1 = t
            }
            function Pg() {
                return null == yi && new Gg,
                yi
            }
            function Dg(t, n, i, e, r, o, u) {
                return 7 != (7 & t) && bu(t, 7, Pg().x38_1),
                u.z38_1 = n,
                u.a39_1 = i,
                u.b39_1 = e,
                u.c39_1 = 0 == (8 & t) ? Ko() : r,
                u
            }
            function Lg(t, n, i, e, r, o) {
                return Dg(t, n, i, e, r, o, Object.create(Bg.prototype))
            }
            function Bg(t, n, i) {
                Qg(),
                this.z38_1 = t,
                this.a39_1 = n,
                this.b39_1 = i,
                this.c39_1 = Ko()
            }
            function Ng() {
                wi = this
            }
            function Fg() {
                return null == wi && new Ng,
                wi
            }
            function Wg() {
                Fg()
            }
            function Ug() {
                bi = this
            }
            function Vg() {
                return null == bi && new Ug,
                bi
            }
            function Hg() {
                gi = this;
                var t = new du("FITBWrittenBlankSegment",this,2);
                t.b1d("answerLanguageCode", !1),
                t.b1d("blankId", !1),
                this.d39_1 = t
            }
            function Yg() {
                return null == gi && new Hg,
                gi
            }
            function Kg(t, n, i, e, r) {
                return 3 != (3 & t) && bu(t, 3, Yg().d39_1),
                r.f39_1 = n,
                r.g39_1 = i,
                r
            }
            function Zg(t, n, i, e) {
                return Kg(t, n, i, e, Object.create(Xg.prototype))
            }
            function Xg(t, n) {
                Vg(),
                this.f39_1 = t,
                this.g39_1 = n
            }
            function Jg() {
                ki = this
            }
            function tk() {
                return null == ki && new Jg,
                ki
            }
            function nk() {
                $i = this;
                var t = new du("FITBTextSegment",this,1);
                t.b1d("text", !1),
                this.h39_1 = t
            }
            function ik() {
                return null == $i && new nk,
                $i
            }
            function ek(t, n, i, e) {
                return 1 != (1 & t) && bu(t, 1, ik().h39_1),
                e.j39_1 = n,
                e
            }
            function rk(t, n, i) {
                return ek(t, n, i, Object.create(ok.prototype))
            }
            function ok(t) {
                tk(),
                this.j39_1 = t
            }
            function uk(t, n, i) {
                return dk.call(i, n.n39(), t, n.o39()),
                i
            }
            function sk(t, n) {
                return uk(t, n, Object.create(dk.prototype))
            }
            function ak() {
                mi = this
            }
            function lk() {
                return null == mi && new ak,
                mi
            }
            function hk() {
                ji = this;
                var t = new du("assistantMode.refactored.types.TaskWithProgress",this,3);
                t.b1d("progressByQuestionType", !1),
                t.b1d("task", !1),
                t.b1d("totalProgress", !1),
                this.p39_1 = t
            }
            function _k() {
                return null == ji && new hk,
                ji
            }
            function ck(t, n, i, e, r, o) {
                return 7 != (7 & t) && bu(t, 7, _k().p39_1),
                o.r39_1 = n,
                o.s39_1 = i,
                o.t39_1 = e,
                o
            }
            function fk(t, n, i, e, r) {
                return ck(t, n, i, e, r, Object.create(dk.prototype))
            }
            function dk(t, n, i) {
                lk(),
                this.r39_1 = t,
                this.s39_1 = n,
                this.t39_1 = i
            }
            function pk(t, n, i, e, r, o, u, s, a, l) {
                return 0 != (32 & s) && (o = null),
                0 != (64 & s) && (u = !1),
                mk.call(l, t, n, i, e, r, o, u),
                l
            }
            function vk(t, n, i, e, r, o, u, s, a) {
                return pk(t, n, i, e, r, o, u, s, a, Object.create(mk.prototype))
            }
            function yk() {
                qi = this
            }
            function wk() {
                return null == qi && new yk,
                qi
            }
            function bk() {
                Ci = this;
                var t = new du("assistantMode.refactored.types.Task",this,7);
                t.b1d("questionTypes", !1),
                t.b1d("optional", !1),
                t.b1d("correctnessRequirement", !1),
                t.b1d("feedbackDelay", !1),
                t.b1d("termCoverage", !1),
                t.b1d("questionSource", !0),
                t.b1d("isSkipped", !0),
                this.u39_1 = t
            }
            function gk() {
                return null == Ci && new bk,
                Ci
            }
            function kk(t, n, i, e, r, o, u, s, a, l) {
                return 31 != (31 & t) && bu(t, 31, gk().u39_1),
                l.w39_1 = n,
                l.x39_1 = i,
                l.y39_1 = e,
                l.z39_1 = r,
                l.a3a_1 = o,
                l.b3a_1 = 0 == (32 & t) ? null : u,
                l.c3a_1 = 0 != (64 & t) && s,
                l
            }
            function $k(t, n, i, e, r, o, u, s, a) {
                return kk(t, n, i, e, r, o, u, s, a, Object.create(mk.prototype))
            }
            function mk(t, n, i, e, r, o, u) {
                wk(),
                this.w39_1 = t,
                this.x39_1 = n,
                this.y39_1 = i,
                this.z39_1 = e,
                this.a3a_1 = r,
                this.b3a_1 = o,
                this.c3a_1 = u
            }
            function jk(t, n) {
                var i;
                t: if (Qu(t, vs) && t.h())
                    i = !1;
                else {
                    for (var e = t.j(); e.l(); )
                        if (e.k().w39_1.t(n)) {
                            i = !0;
                            break t
                        }
                    i = !1
                }
                return i
            }
            function qk() {
                xi = this
            }
            function Ck() {
                return null == xi && new qk,
                xi
            }
            function xk() {
                Si = this;
                var t = new du("assistantMode.refactored.types.TaskQuestionTypeProgress",this,2);
                t.b1d("numItemsCompleted", !1),
                t.b1d("numTotalItems", !1),
                this.f3a_1 = t
            }
            function Sk() {
                return null == Si && new xk,
                Si
            }
            function zk(t, n, i, e, r) {
                return 3 != (3 & t) && bu(t, 3, Sk().f3a_1),
                r.h3a_1 = n,
                r.i3a_1 = i,
                r
            }
            function Tk(t, n, i, e) {
                return zk(t, n, i, e, Object.create(Mk.prototype))
            }
            function Mk(t, n) {
                Ck(),
                this.h3a_1 = t,
                this.i3a_1 = n
            }
            function Ik() {
                zi = this
            }
            function Ak() {
                return null == zi && new Ik,
                zi
            }
            function Ok() {
                Ti = this;
                var t = new du("assistantMode.refactored.types.TaskProgress",this,2);
                t.b1d("numItemsCompleted", !1),
                t.b1d("numTotalItems", !1),
                this.j3a_1 = t
            }
            function Ek() {
                return null == Ti && new Ok,
                Ti
            }
            function Rk(t, n, i, e, r) {
                return 3 != (3 & t) && bu(t, 3, Ek().j3a_1),
                r.l3a_1 = n,
                r.m3a_1 = i,
                r
            }
            function Qk(t, n, i, e) {
                return Rk(t, n, i, e, Object.create(Gk.prototype))
            }
            function Gk(t, n) {
                Ak(),
                this.l3a_1 = t,
                this.m3a_1 = n
            }
            function Pk(t, n) {
                this.n3a_1 = t,
                this.o3a_1 = n
            }
            function Dk(t, n) {
                this.p3a_1 = t,
                this.q3a_1 = n
            }
            function Lk() {
                Mi = this
            }
            function Bk() {
                return null == Mi && new Lk,
                Mi
            }
            function Nk() {
                Ii = this;
                var t = new du("assistantMode.refactored.types.TotalProgress",this,2);
                t.b1d("masteryBuckets", !1),
                t.b1d("studyProgress", !1),
                this.r3a_1 = t
            }
            function Fk() {
                return null == Ii && new Nk,
                Ii
            }
            function Wk(t, n, i, e, r) {
                return 3 != (3 & t) && bu(t, 3, Fk().r3a_1),
                r.t3a_1 = n,
                r.u3a_1 = i,
                r
            }
            function Uk(t, n, i, e) {
                return Wk(t, n, i, e, Object.create(Vk.prototype))
            }
            function Vk(t, n) {
                Bk(),
                this.t3a_1 = t,
                this.u3a_1 = n
            }
            function Hk(t) {
                var n;
                if (Qu(t, vs) && t.h())
                    n = 0;
                else {
                    for (var i = 0, e = t.j(); e.l(); )
                        US(e.k()) && ys(i = i + 1 | 0);
                    n = i
                }
                return n
            }
            function Yk(t) {
                for (var n = ul(), i = t.j(); i.l(); ) {
                    var e, r = i.k(), o = r.e2t_1, u = n.d3(o);
                    if (null == u) {
                        var s = Hu();
                        n.d5(o, s),
                        e = s
                    } else
                        e = u;
                    e.a(r)
                }
                for (var a = n.f3(), l = Ju(Xu(a, 10)), h = a.j(); h.l(); ) {
                    var _, c, f = h.k().j();
                    if (f.l()) {
                        var d = f.k();
                        if (f.l()) {
                            var p = d.f2t_1;
                            do {
                                var v = f.k()
                                  , y = v.f2t_1;
                                hs(p, y) > 0 && (d = v,
                                p = y)
                            } while (f.l());
                            c = d
                        } else
                            c = d
                    } else
                        c = null;
                    _ = sl(c),
                    l.a(_)
                }
                var w, b = l;
                w = new Kk(Zk);
                for (var g = ts(b, w), k = Ju(Xu(g, 10)), $ = g.j(); $.l(); ) {
                    var m, j = $.k();
                    m = new xq(j.e2t_1,j.a2t_1),
                    k.a(m)
                }
                return k
            }
            function Kk(t) {
                this.v3a_1 = t
            }
            function Zk(t, n) {
                var i, e = t.f2t_1;
                return i = n.f2t_1,
                as(e, i)
            }
            function Xk() {
                return d$(),
                Ai
            }
            function Jk() {
                return d$(),
                Oi
            }
            function t$(t, n, i) {
                d$();
                var e = n$(n, i);
                return e * t / (1 - (1 - e) * t)
            }
            function n$(t, n) {
                d$();
                var i = t.equals(Yo()) && !0 !== n ? Xk().d3(io()) : Xk().d3(t);
                if (null == i)
                    throw Su(Lo("value is undefined"));
                return i
            }
            function i$(t) {
                d$();
                var n = r$(t).x3a_1;
                if (null == n)
                    throw Su(Lo("recursiveComputeScore did not return a score"));
                var i = n;
                if (al(i))
                    throw Su(Lo("recursiveComputeScore returned NaN"));
                return i
            }
            function e$(t, n) {
                this.w3a_1 = t,
                this.x3a_1 = n
            }
            function r$(t) {
                if (d$(),
                t.h()) {
                    for (var n = Rh(), i = Ju(Xu(n, 10)), e = n.j(); e.l(); ) {
                        var r, o = e.k();
                        r = eo(o, new o$(null,m$())),
                        i.a(r)
                    }
                    return new e$(Xs(i),null)
                }
                var u = r$(rs(t, 1)).b5()
                  , s = is(t)
                  , a = u$(u, s.z3a_1)
                  , l = a.b5()
                  , h = a.c5();
                null == l && (l = !0 === s.y3a_1 ? j$() : q$());
                for (var _ = a$(h, l, s.a3b_1, s.g3b_1.d3(s.z3a_1), s.d3b_1, s.e3b_1), c = _.b5(), f = _.c5(), d = jS(s.z3a_1), p = Ju(Xu(d, 10)), v = d.j(); v.l(); ) {
                    var y, w = v.k(), b = u$(u, w), g = b.b5(), k = b.c5();
                    y = null != g ? a$(k, g, s.a3b_1, s.g3b_1.d3(w), s.d3b_1, s.f3b_1).j3b_1 : null,
                    p.a(y)
                }
                for (var $ = p, m = Ju(Xu($, 10)), j = $.j(); j.l(); ) {
                    var q, C = j.k();
                    q = null != C && 0 !== C ? 1 - C * C$() : 1,
                    m.a(q)
                }
                for (var x = 1, S = m.j(); S.l(); )
                    x *= S.k();
                var z = c + (1 - c) * (1 - x);
                if ((z = z < 0 ? 0 : z) > 0)
                    if (!0 === s.y3a_1 && (1 - z) * x$() >= 1e-5) {
                        var T = l
                          , M = l * (1 - f)
                          , I = (1 - c) * x$()
                          , A = S$();
                        l = T + M * Math.pow(I, A),
                        h += h * (1 - f) * (1 - z) * z$()
                    } else if (!0 !== s.y3a_1 && z * T$() >= 1e-5) {
                        var O = l
                          , E = l * (1 / (1 - f))
                          , R = c * T$()
                          , Q = M$();
                        l = O - E * Math.pow(R, Q),
                        h += h * (1 / (1 - f)) * z * I$()
                    }
                return new e$(ll(u, eo(s.z3a_1, new o$(l,h))),z)
            }
            function o$(t, n) {
                this.h3b_1 = t,
                this.i3b_1 = n
            }
            function u$(t, n) {
                d$();
                var i = t.d3(n);
                if (null == i)
                    throw Su(Lo("Current state is null for answer side: " + n));
                return i
            }
            function s$(t, n) {
                this.j3b_1 = t,
                this.k3b_1 = n
            }
            function a$(t, n, i, e, r, o) {
                d$();
                var u = l$(i, e, r, t, n, o)
                  , s = (1 - u) * h$(i, r);
                return new s$(u + s,s)
            }
            function l$(t, n, i, e, r, o) {
                return d$(),
                null == n ? _$(t, o) : t$(n <= 0 ? 1 : c$(e, r, n), t, i)
            }
            function h$(t, n) {
                if (d$(),
                t.equals(so()) || t.equals(io()) || t.equals(Yo()) && !0 !== n)
                    return 0;
                if (t.equals(Yo()) && !0 === n)
                    return 0;
                if (t.equals(uo()))
                    return 0;
                if (t.equals(ro()))
                    return .25;
                if (t.equals(Ho()))
                    return .2;
                if (t.equals(oo()))
                    return .5;
                throw Su("Cannot determine random guess correct probability for unrecognized question type: " + t)
            }
            function _$(t, n) {
                d$();
                var i = (f$(t) - h$(t, !1)) / (1 - h$(t, !1));
                return n && t.equals(io()) && (i += (1 - i) * A$()),
                i
            }
            function c$(t, n, i) {
                if (d$(),
                t < -1e3)
                    return 1;
                var e = -t
                  , r = -n
                  , o = 1 + Math.exp(e) * i
                  , u = -Math.exp(r);
                return Math.pow(o, u)
            }
            function f$(t) {
                d$();
                var n = Jk().d3(t);
                if (null == n)
                    throw Su(Lo("Cannot determine initial answer correct probability for unrecognized question type: " + t));
                return n
            }
            function d$() {
                Ei || (Ei = !0,
                Ai = ao([eo(io(), 1), eo(ro(), 2.05527348979), eo(oo(), 1.96165431908), eo(uo(), .765450452372), eo(Ho(), 1.82685233786), eo(Yo(), 6.83879309464), eo(so(), 1)]),
                Oi = ao([eo(io(), .662573556200577), eo(ro(), .8705655009881929), eo(oo(), .8777463068695633), eo(uo(), .7004481612133597), eo(Ho(), .7997362050328207), eo(Yo(), .662573556200577), eo(so(), .6)]))
            }
            function p$(t, n, i, e, r) {
                for (var o = Hu(), u = t.j(); u.l(); ) {
                    var s = u.k();
                    (s.b2t_1.equals(n) || s.c2t_1.equals(n)) && o.a(s)
                }
                for (var a = ts(o, rz()), l = Ju(Xu(a, 10)), h = a.j(); h.l(); ) {
                    var _, c = h.k(), f = v$(c.f2t_1, a);
                    _ = new gm(c.a2t_1,c.c2t_1,c.d2t_1,c.e2t_1,c.f2t_1,!1,!1,!1,f),
                    l.a(_)
                }
                var d = l
                  , p = bm(null, n, e, i, r, null, !1, !1, v$(r, a), 33, null);
                return i$(es(d, p))
            }
            function v$(t, n) {
                for (var i = Rh(), e = Wo(Fo(No(Xu(i, 10)), 16)), r = i.j(); r.l(); ) {
                    var o, u = r.k();
                    o = y$(t, w$(n, u)),
                    e.d5(u, o)
                }
                return e
            }
            function y$(t, n) {
                var i = b$(t, n);
                if (null == i)
                    return null;
                var e = i;
                return .001 * t.sa(e).mh()
            }
            function w$(t, n) {
                for (var i = Hu(), e = t.j(); e.l(); ) {
                    var r = e.k();
                    r.c2t_1.equals(n) && i.a(r)
                }
                return i
            }
            function b$(t, n) {
                var i;
                t: {
                    for (var e = Ju(Xu(n, 10)), r = n.j(); r.l(); ) {
                        var o;
                        o = r.k().f2t_1,
                        e.a(o)
                    }
                    for (var u = e, s = u.s(u.f()); s.g2(); ) {
                        var a = s.i2();
                        if (a.c1(t) < 0) {
                            i = a;
                            break t
                        }
                    }
                    i = null
                }
                return i
            }
            function g$(t, n, i, e, r) {
                for (var o = ns(ls(i, e)), u = Hu(), s = o.j(); s.l(); ) {
                    var a;
                    a = k$(s.k(), t, n, r),
                    Ku(u, a)
                }
                return u
            }
            function k$(t, n, i, e) {
                for (var r = Ju(n.f()), o = n.y().j(); o.l(); ) {
                    var u, s = o.k();
                    u = $$(s.n2(), t, s.p2(), i, e),
                    r.a(u)
                }
                return r
            }
            function $$(t, n, i, e, r) {
                var o, u = e.n2x(t, n), s = e.o2x(t, n), a = !u.h(), l = !s.h();
                if (a) {
                    var h = gS(u);
                    if (null == h)
                        throw Su(Lo("Should have hardestEnabledQuestionType when side is answerable"));
                    o = h
                } else {
                    if (!l)
                        return new Mq(t,n,1,new ju(0,0),new ju(0,0));
                    o = ro()
                }
                var _ = o
                  , c = cS(_)
                  , f = p$(i, n, t, _, r)
                  , d = Hd(i, c, a, l, n);
                return new Mq(t,n,f,d.b5(),d.c5())
            }
            function m$() {
                return Ri
            }
            function j$() {
                return Qi
            }
            function q$() {
                return Gi
            }
            function C$() {
                return Pi
            }
            function x$() {
                return Di
            }
            function S$() {
                return Li
            }
            function z$() {
                return Bi
            }
            function T$() {
                return Ni
            }
            function M$() {
                return Fi
            }
            function I$() {
                return Wi
            }
            function A$() {
                return Ui
            }
            function O$(t, n, i, e, r, o, u, s, a, l) {
                return 0 != (1 & s) && (t = null),
                0 != (2 & s) && (n = null),
                0 != (4 & s) && (i = null),
                0 != (32 & s) && (o = null),
                0 != (64 & s) && (u = null),
                R$.call(l, t, n, i, e, r, o, u),
                l
            }
            function E$(t, n, i, e, r, o, u, s, a) {
                return O$(t, n, i, e, r, o, u, s, a, Object.create(R$.prototype))
            }
            function R$(t, n, i, e, r, o, u) {
                Q$.call(this),
                this.l3b_1 = t,
                this.m3b_1 = n,
                this.n3b_1 = i,
                this.o3b_1 = e,
                this.p3b_1 = r,
                this.q3b_1 = o,
                this.r3b_1 = u
            }
            function Q$() {}
            function G$(t) {
                var n;
                if (null != t.s3b())
                    n = B$(t);
                else {
                    if (null == t.t3b())
                        throw Su("The generated " + Oo(t).ph() + " step must be a question or checkpoint: " + t);
                    n = N$(t)
                }
                return n
            }
            function P$(t, n, i, e, r, o, u, s, a, l, h, _) {
                return 0 != (1 & l) && (t = null),
                0 != (2 & l) && (n = null),
                0 != (4 & l) && (i = null),
                0 != (8 & l) && (e = null),
                0 != (16 & l) && (r = null),
                0 != (32 & l) && (o = null),
                L$.call(_, t, n, i, e, r, o, u, s, a),
                _
            }
            function D$(t, n, i, e, r, o, u, s, a, l, h) {
                return P$(t, n, i, e, r, o, u, s, a, l, h, Object.create(L$.prototype))
            }
            function L$(t, n, i, e, r, o, u, s, a) {
                Q$.call(this),
                this.u3b_1 = t,
                this.v3b_1 = n,
                this.w3b_1 = i,
                this.x3b_1 = e,
                this.y3b_1 = r,
                this.z3b_1 = o,
                this.a3c_1 = u,
                this.b3c_1 = s,
                this.c3c_1 = a
            }
            function B$(t) {
                var n = t.s3b();
                if (null == n)
                    throw Su(Lo("Question missing for Step " + t));
                return n
            }
            function N$(t) {
                var n = t.t3b();
                if (null == n)
                    throw Su(Lo("Checkpoint missing for Step " + t));
                return n
            }
            function F$(t, n, i) {
                W$.call(this),
                this.d3c_1 = t,
                this.e3c_1 = n,
                this.f3c_1 = i
            }
            function W$() {}
            function U$(t, n) {
                t.l3c_1.y3(n),
                t.k3c_1.y3(n)
            }
            function V$(t, n, i) {
                this.g3c_1 = t,
                this.h3c_1 = n,
                this.i3c_1 = i;
                var e, r = this;
                e = ta(),
                r.j3c_1 = e;
                var o, u = this;
                o = ta(),
                u.k3c_1 = o,
                this.l3c_1 = qs(this.g3c_1)
            }
            function H$(t, n) {
                this.k39_1 = t,
                this.l39_1 = n;
                for (var i, e = this, r = t.w39_1, o = Wo(Fo(No(Xu(r, 10)), 16)), u = r.j(); u.l(); ) {
                    var s, a = u.k();
                    s = new V$(n,t,a),
                    o.d5(a, s)
                }
                i = o,
                e.m39_1 = i
            }
            function Y$() {}
            function K$() {}
            function Z$(t, n) {
                var i, e = t.i26_1;
                if (Qu(e, vs) && e.h())
                    i = !1;
                else {
                    for (var r = e.j(); r.l(); ) {
                        var o = r.k()
                          , u = o.b5()
                          , s = o.c5();
                        if ((u + s | 0) > n.length)
                            return !1;
                        var a, l = t.h26_1, h = u + s | 0;
                        return a = n,
                        Vx((l instanceof Js ? l : Zr()).r22_1) === Vx(a.substring(u, h))
                    }
                    i = !1
                }
                return i
            }
            function X$(t, n, i, e, r, o, u, s, a, l, h) {
                return nm.call(h, t.a24(), t.b3d(), t.c3d(), t.d3d(), t.e3d(), t.f3d(), t.g3d(), t.h3d(), t.i3d(), t.j3d(), t.k3d(), t.l3d(), t.m3d(), t.n3d(), n, i, e, r, t.o3d(), t.p3d(), o, u, s, a, l),
                h
            }
            function J$(t, n, i, e, r, o, u, s, a, l) {
                return X$(t, n, i, e, r, o, u, s, a, l, Object.create(nm.prototype))
            }
            function tm(t, n) {
                var i;
                switch (n.r1_1) {
                case 0:
                case 1:
                    var e, r = AS(t, n);
                    e = Lo(sa(ua(r) ? r : Zr())),
                    i = Go(e) > 0;
                    break;
                default:
                    throw Su("Invalid textual cardSide: " + n)
                }
                return i
            }
            function nm(t, n, i, e, r, o, u, s, a, l, h, _, c, f, d, p, v, y, w, b, g, k, $, m, j) {
                this.o2v_1 = t,
                this.p2v_1 = n,
                this.q2v_1 = i,
                this.r2v_1 = e,
                this.s2v_1 = r,
                this.t2v_1 = o,
                this.u2v_1 = u,
                this.v2v_1 = s,
                this.w2v_1 = a,
                this.x2v_1 = l,
                this.y2v_1 = h,
                this.z2v_1 = _,
                this.a2w_1 = c,
                this.b2w_1 = f,
                this.c2w_1 = d,
                this.d2w_1 = p,
                this.e2w_1 = v,
                this.f2w_1 = y,
                this.g2w_1 = w,
                this.h2w_1 = b,
                this.i2w_1 = g,
                this.j2w_1 = k,
                this.k2w_1 = $,
                this.l2w_1 = m,
                this.m2w_1 = j
            }
            function im() {}
            function em(t, n, i, e, r, o, u, s) {
                return 0 != (8 & o) && (e = null),
                0 != (16 & o) && (r = null),
                om.call(s, t, n, i, e, r),
                s
            }
            function rm(t, n, i, e, r, o, u) {
                return em(t, n, i, e, r, o, u, Object.create(om.prototype))
            }
            function om(t, n, i, e, r) {
                im.call(this),
                this.t3d_1 = t,
                this.u3d_1 = n,
                this.v3d_1 = i,
                this.w3d_1 = e,
                this.x3d_1 = r
            }
            function um(t) {
                return function() {
                    return zz(t.y3d_1, t.a3e_1, t.b3e_1, t.c3e_1)
                }
            }
            function sm(t) {
                return function() {
                    return Nz(t.y3d_1, t.a3e_1, t.s3d())
                }
            }
            function am(t, n, i, e, r) {
                im.call(this),
                this.y3d_1 = t,
                this.z3d_1 = n,
                this.a3e_1 = i,
                this.b3e_1 = e,
                this.c3e_1 = r,
                this.d3e_1 = Rs(um(this)),
                this.e3e_1 = Rs(sm(this))
            }
            function lm() {
                return Fu("entity", 1, Nu, (function(t) {
                    return t.s3d()
                }
                ), null)
            }
            function hm() {
                return Fu("partOfSpeech", 1, Nu, (function(t) {
                    return t.r3d()
                }
                ), null)
            }
            function _m(t, n, i, e, r, o) {
                this.a2t_1 = t,
                this.b2t_1 = n,
                this.c2t_1 = i,
                this.d2t_1 = e,
                this.e2t_1 = r,
                this.f2t_1 = o
            }
            function cm(t, n) {
                var i, e;
                e = new vm(ym),
                i = ts(t, e);
                for (var r = fl(i, n), o = Ju(Xu(r, 10)), u = r.j(); u.l(); ) {
                    var s, a, l = u.k();
                    if (Qu(l, vs) && l.h())
                        a = 0;
                    else {
                        for (var h = 0, _ = l.j(); _.l(); )
                            _.k().a2t_1 && ys(h = h + 1 | 0);
                        a = h
                    }
                    s = a / l.f(),
                    o.a(s)
                }
                return o
            }
            function fm(t) {
                for (var n = ul(), i = t.j(); i.l(); ) {
                    var e, r = i.k(), o = r.e2t_1, u = n.d3(o);
                    if (null == u) {
                        var s = Hu();
                        n.d5(o, s),
                        e = s
                    } else
                        e = u;
                    e.a(r)
                }
                for (var a = n, l = Wo(No(a.f())), h = a.y().j(); h.l(); ) {
                    var _, c, f = h.k(), d = f.n2(), p = f.p2();
                    if (Qu(p, vs) && p.h())
                        c = 0;
                    else {
                        for (var v = 0, y = p.j(); y.l(); )
                            !y.k().a2t_1 && ys(v = v + 1 | 0);
                        c = v
                    }
                    _ = c,
                    l.d5(d, _)
                }
                for (var w = l.y(), b = ul(), g = w.j(); g.l(); ) {
                    var k, $ = g.k(), m = $.p2(), j = b.d3(m);
                    if (null == j) {
                        var q = Hu();
                        b.d5(m, q),
                        k = q
                    } else
                        k = j;
                    k.a($)
                }
                for (var C = b, x = Wo(No(C.f())), S = C.y().j(); S.l(); ) {
                    for (var z, T = S.k(), M = T.n2(), I = T.p2(), A = Ju(Xu(I, 10)), O = I.j(); O.l(); ) {
                        var E;
                        E = O.k().n2(),
                        A.a(E)
                    }
                    z = A,
                    x.d5(M, z)
                }
                return x
            }
            function dm(t, n) {
                return !(null == t || !t.a2t_1 && n.y39_1)
            }
            function pm(t, n) {
                if (null != t) {
                    for (var i = n.w39_1.t(t.d2t_1), e = n.w39_1, r = Hu(), o = e.j(); o.l(); ) {
                        var u, s = o.k();
                        u = dl(s),
                        Ku(r, u)
                    }
                    var a = r.t(t.d2t_1);
                    return !!i || a
                }
                return !1
            }
            function vm(t) {
                this.i3e_1 = t
            }
            function ym(t, n) {
                var i, e = t.f2t_1;
                return i = n.f2t_1,
                as(e, i)
            }
            function wm(t, n, i, e, r, o, u, s, a, l, h, _) {
                return 0 != (1 & l) && (t = null),
                0 != (32 & l) && (o = null),
                gm.call(_, t, n, i, e, r, o, u, s, a),
                _
            }
            function bm(t, n, i, e, r, o, u, s, a, l, h) {
                return wm(t, n, i, e, r, o, u, s, a, l, h, Object.create(gm.prototype))
            }
            function gm(t, n, i, e, r, o, u, s, a) {
                this.y3a_1 = t,
                this.z3a_1 = n,
                this.a3b_1 = i,
                this.b3b_1 = e,
                this.c3b_1 = r,
                this.d3b_1 = o,
                this.e3b_1 = u,
                this.f3b_1 = s,
                this.g3b_1 = a
            }
            function km(t, n, i, e, r, o) {
                return 0 != (1 & e) && (t = null),
                0 != (2 & e) && (n = null),
                0 != (4 & e) && (i = null),
                zm.call(o, t, n, i),
                o
            }
            function $m(t, n, i, e, r) {
                return km(t, n, i, e, r, Object.create(zm.prototype))
            }
            function mm() {
                Vi = this
            }
            function jm() {
                return null == Vi && new mm,
                Vi
            }
            function qm() {
                Hi = this;
                var t = new du("assistantMode.types.AssistantGradingSettingsSuggestion",this,3);
                t.b1d("acceptsPartialAnswer", !0),
                t.b1d("acceptsAnswersWithTypos", !0),
                t.b1d("acceptsSmartGrading", !0),
                this.j3e_1 = t
            }
            function Cm() {
                return null == Hi && new qm,
                Hi
            }
            function xm(t, n, i, e, r, o) {
                return 0 != (0 & t) && bu(t, 0, Cm().j3e_1),
                o.l3e_1 = 0 == (1 & t) ? null : n,
                o.m3e_1 = 0 == (2 & t) ? null : i,
                o.n3e_1 = 0 == (4 & t) ? null : e,
                o
            }
            function Sm(t, n, i, e, r) {
                return xm(t, n, i, e, r, Object.create(zm.prototype))
            }
            function zm(t, n, i) {
                jm(),
                this.l3e_1 = t,
                this.m3e_1 = n,
                this.n3e_1 = i
            }
            function Tm(t) {
                if (null == t)
                    return null;
                var n;
                switch (t.o2k_1.r1_1) {
                case 1:
                    n = !1;
                    break;
                case 0:
                    n = !0;
                    break;
                default:
                    Yu()
                }
                var i, e = n;
                switch (t.p2k_1.r1_1) {
                case 0:
                    i = $m(e, null, null, 6, null);
                    break;
                case 1:
                    i = $m(null, e, null, 5, null);
                    break;
                case 2:
                    i = $m(null, null, e, 3, null);
                    break;
                default:
                    Yu()
                }
                return i
            }
            function Mm(t, n, i, e, r, o, u) {
                return 0 != (8 & r) && (e = null),
                Am.call(u, t, n, i, e),
                u
            }
            function Im(t, n, i, e, r, o) {
                return Mm(t, n, i, e, r, o, Object.create(Am.prototype))
            }
            function Am(t, n, i, e) {
                this.y2w_1 = t,
                this.z2w_1 = n,
                this.a2x_1 = i,
                this.b2x_1 = e
            }
            function Om(t) {
                return Rm(t.y2w_1.o2v_1, t.z2w_1, t.a2x_1, null, null, 24, null)
            }
            function Em(t, n, i, e, r, o, u, s) {
                return 0 != (8 & o) && (e = null),
                0 != (16 & o) && (r = null),
                Pm.call(s, t, n, i, e, r),
                s
            }
            function Rm(t, n, i, e, r, o, u) {
                return Em(t, n, i, e, r, o, u, Object.create(Pm.prototype))
            }
            function Qm() {
                Yi = this
            }
            function Gm() {
                return null == Yi && new Qm,
                Yi
            }
            function Pm(t, n, i, e, r) {
                Gm(),
                this.v2s_1 = t,
                this.w2s_1 = n,
                this.x2s_1 = i,
                this.y2s_1 = e,
                this.z2s_1 = r
            }
            function Dm(t, n, i) {
                this.q2x_1 = t,
                this.r2x_1 = n,
                this.s2x_1 = i
            }
            function Lm(t, n, i, e, r, o, u) {
                return 0 != (4 & r) && (i = null),
                Ym.call(u, t, n, i, e),
                u
            }
            function Bm(t, n, i, e, r, o) {
                return Lm(t, n, i, e, r, o, Object.create(Ym.prototype))
            }
            function Nm() {
                Ki = this
            }
            function Fm() {
                return null == Ki && new Nm,
                Ki
            }
            function Wm() {
                Zi = this;
                var t = new du("assistantMode.types.GradedAnswer",this,4);
                t.b1d("isCorrect", !1),
                t.b1d("feedback", !1),
                t.b1d("gradingSettingsSuggestion", !0),
                t.b1d("metadata", !1),
                this.q3e_1 = t
            }
            function Um() {
                return null == Zi && new Wm,
                Zi
            }
            function Vm(t, n, i, e, r, o, u) {
                return 11 != (11 & t) && bu(t, 11, Um().q3e_1),
                u.a2p_1 = n,
                u.b2p_1 = i,
                u.c2p_1 = 0 == (4 & t) ? null : e,
                u.d2p_1 = r,
                u
            }
            function Hm(t, n, i, e, r, o) {
                return Vm(t, n, i, e, r, o, Object.create(Ym.prototype))
            }
            function Ym(t, n, i, e) {
                Fm(),
                this.a2p_1 = t,
                this.b2p_1 = n,
                this.c2p_1 = i,
                this.d2p_1 = e
            }
            function Km(t, n, i, e, r, o, u) {
                return 0 != (8 & r) && (e = null),
                rj.call(u, t, n, i, e),
                u
            }
            function Zm(t, n, i, e, r, o) {
                return Km(t, n, i, e, r, o, Object.create(rj.prototype))
            }
            function Xm() {
                Xi = this
            }
            function Jm() {
                return null == Xi && new Xm,
                Xi
            }
            function tj() {
                Ji = this;
                var t = new du("assistantMode.types.Feedback",this,4);
                t.b1d("submittedAnswer", !1),
                t.b1d("expectedAnswer", !1),
                t.b1d("expectedAnswerDescription", !1),
                t.b1d("explanations", !0),
                this.s3e_1 = t
            }
            function nj() {
                return null == Ji && new tj,
                Ji
            }
            function ij(t, n, i, e, r, o, u) {
                return 7 != (7 & t) && bu(t, 7, nj().s3e_1),
                u.e2p_1 = n,
                u.f2p_1 = i,
                u.g2p_1 = e,
                u.h2p_1 = 0 == (8 & t) ? null : r,
                u
            }
            function ej(t, n, i, e, r, o) {
                return ij(t, n, i, e, r, o, Object.create(rj.prototype))
            }
            function rj(t, n, i, e) {
                Jm(),
                this.e2p_1 = t,
                this.f2p_1 = n,
                this.g2p_1 = i,
                this.h2p_1 = e
            }
            function oj(t, n, i, e, r) {
                this.l2t_1 = t,
                this.m2t_1 = n,
                this.n2t_1 = i,
                this.o2t_1 = e,
                this.p2t_1 = r
            }
            function uj(t) {
                hj.call(this),
                this.s2y_1 = t
            }
            function sj() {}
            function aj(t, n, i) {
                hj.call(this),
                this.q30_1 = t,
                this.r30_1 = n,
                this.s30_1 = i
            }
            function lj(t) {
                sj.call(this),
                this.l2z_1 = t
            }
            function hj() {
                sj.call(this)
            }
            function _j(t, n) {
                sj.call(this),
                this.v3e_1 = t
            }
            function cj(t, n) {
                _j.call(this, t, n),
                this.e2y_1 = t,
                this.f2y_1 = n,
                this.g2y_1 = ws()
            }
            function fj(t, n) {
                _j.call(this, t, n),
                this.t2z_1 = t,
                this.u2z_1 = n,
                this.v2z_1 = pl()
            }
            function dj(t, n) {
                this.w3e_1 = t,
                this.x3e_1 = n
            }
            function pj(t) {
                this.y3e_1 = t
            }
            function vj(t, n) {
                pj.call(this, t),
                this.b3f_1 = t,
                this.c3f_1 = n
            }
            function yj(t, n) {
                pj.call(this, t),
                this.e3f_1 = t,
                this.f3f_1 = n
            }
            function wj(t, n) {
                var i;
                t: {
                    for (var e = t.j(); e.l(); ) {
                        var r = e.k();
                        if (r.z3e().equals(n)) {
                            i = r;
                            break t
                        }
                    }
                    throw xu("Collection contains no element matching the predicate.")
                }
                for (var o = vM(n, vl((i instanceof yj ? i : Zr()).f3f_1)), u = Ju(Xu(o, 10)), s = o.j(); s.l(); ) {
                    var a, l, h = s.k();
                    t: {
                        for (var _ = Bo(), c = 0, f = _.length; c < f; ) {
                            var d = _[c];
                            if (c = c + 1 | 0,
                            d.xy() === h) {
                                l = d;
                                break t
                            }
                        }
                        throw xu("Array contains no element matching the predicate.")
                    }
                    a = l,
                    u.a(a)
                }
                return u
            }
            function bj() {
                te = this
            }
            function gj() {
                return null == te && new bj,
                te
            }
            function kj() {
                gj()
            }
            function $j() {
                ne = this
            }
            function mj() {
                return null == ne && new $j,
                ne
            }
            function jj() {
                ie = this;
                var t = new du("StringAnswer",this,1);
                t.b1d("value", !1),
                this.g3f_1 = t
            }
            function qj() {
                return null == ie && new jj,
                ie
            }
            function Cj(t, n, i, e) {
                return 1 != (1 & t) && bu(t, 1, qj().g3f_1),
                kj.call(e),
                e.o2s_1 = n,
                e
            }
            function xj(t, n, i) {
                return Cj(t, n, i, Object.create(Sj.prototype))
            }
            function Sj(t) {
                mj(),
                kj.call(this),
                this.o2s_1 = t
            }
            function zj() {
                ee = this
            }
            function Tj() {
                return null == ee && new zj,
                ee
            }
            function Mj() {
                re = this;
                var t = new du("BooleanAnswer",this,1);
                t.b1d("value", !1),
                this.i3f_1 = t
            }
            function Ij() {
                return null == re && new Mj,
                re
            }
            function Aj(t, n, i, e) {
                return 1 != (1 & t) && bu(t, 1, Ij().i3f_1),
                kj.call(e),
                e.r2r_1 = n,
                e
            }
            function Oj(t, n, i) {
                return Aj(t, n, i, Object.create(Ej.prototype))
            }
            function Ej(t) {
                Tj(),
                kj.call(this),
                this.r2r_1 = t
            }
            function Rj() {
                oe = this
            }
            function Qj() {
                return null == oe && new Rj,
                oe
            }
            function Gj() {
                ue = this;
                var t = new du("MatchingAnswer",this,1);
                t.b1d("value", !1),
                this.k3f_1 = t
            }
            function Pj() {
                return null == ue && new Gj,
                ue
            }
            function Dj(t, n, i, e) {
                return 1 != (1 & t) && bu(t, 1, Pj().k3f_1),
                kj.call(e),
                e.k2o_1 = n,
                e
            }
            function Lj(t, n, i) {
                return Dj(t, n, i, Object.create(Bj.prototype))
            }
            function Bj(t) {
                Qj(),
                kj.call(this),
                this.k2o_1 = t
            }
            function Nj() {
                se = this
            }
            function Fj() {
                return null == se && new Nj,
                se
            }
            function Wj() {
                ae = this;
                var t = new du("MatchingGameAnswer",this,1);
                t.b1d("value", !1),
                this.m3f_1 = t
            }
            function Uj() {
                return null == ae && new Wj,
                ae
            }
            function Vj(t, n, i, e) {
                return 1 != (1 & t) && bu(t, 1, Uj().m3f_1),
                kj.call(e),
                e.t2n_1 = n,
                e
            }
            function Hj(t, n, i) {
                return Vj(t, n, i, Object.create(Yj.prototype))
            }
            function Yj(t) {
                Fj(),
                kj.call(this),
                this.t2n_1 = t
            }
            function Kj(t, n) {
                return rq.call(n, Mu(t)),
                n
            }
            function Zj(t) {
                return Kj(t, Object.create(rq.prototype))
            }
            function Xj() {
                le = this
            }
            function Jj() {
                return null == le && new Xj,
                le
            }
            function tq() {
                he = this;
                var t = new du("OptionIndexAnswer",this,1);
                t.b1d("value", !1),
                this.o3f_1 = t
            }
            function nq() {
                return null == he && new tq,
                he
            }
            function iq(t, n, i, e) {
                return 1 != (1 & t) && bu(t, 1, nq().o3f_1),
                bq.call(e),
                e.x2o_1 = n,
                e
            }
            function eq(t, n, i) {
                return iq(t, n, i, Object.create(rq.prototype))
            }
            function rq(t) {
                Jj(),
                bq.call(this),
                this.x2o_1 = t
            }
            function oq() {
                _e = this
            }
            function uq() {
                return null == _e && new oq,
                _e
            }
            function sq() {
                ce = this;
                var t = new du("OptionIndicesAnswer",this,1);
                t.b1d("value", !1),
                this.q3f_1 = t
            }
            function aq() {
                return null == ce && new sq,
                ce
            }
            function lq(t, n, i, e) {
                return 1 != (1 & t) && bu(t, 1, aq().q3f_1),
                bq.call(e),
                e.s3f_1 = n,
                e
            }
            function hq(t, n, i) {
                return lq(t, n, i, Object.create(_q.prototype))
            }
            function _q(t) {
                uq(),
                bq.call(this),
                this.s3f_1 = t
            }
            function cq() {
                fe = this
            }
            function fq() {
                return null == fe && new cq,
                fe
            }
            function dq() {
                de = this;
                var t = new du("RevealSelfAssessmentAnswer",this,1);
                t.b1d("value", !1),
                this.t3f_1 = t
            }
            function pq() {
                return null == de && new dq,
                de
            }
            function vq(t, n, i, e) {
                return 1 != (1 & t) && bu(t, 1, pq().t3f_1),
                kj.call(e),
                e.o2p_1 = n,
                e
            }
            function yq(t, n, i) {
                return vq(t, n, i, Object.create(wq.prototype))
            }
            function wq(t) {
                fq(),
                kj.call(this),
                this.o2p_1 = t
            }
            function bq() {
                kj.call(this)
            }
            function gq(t, n, i, e, r) {
                this.x2u_1 = t,
                this.y2u_1 = n,
                this.z2u_1 = i,
                this.a2v_1 = e,
                this.b2v_1 = r
            }
            function kq() {
                pe = this
            }
            function $q() {
                return null == pe && new kq,
                pe
            }
            function mq() {
                ve = this;
                var t = new du("assistantMode.types.RoundResultItem",this,2);
                t.b1d("studiableItemId", !1),
                t.b1d("isCorrect", !1),
                this.v3f_1 = t
            }
            function jq() {
                return null == ve && new mq,
                ve
            }
            function qq(t, n, i, e, r) {
                return 3 != (3 & t) && bu(t, 3, jq().v3f_1),
                r.x3f_1 = n,
                r.y3f_1 = i,
                r
            }
            function Cq(t, n, i, e) {
                return qq(t, n, i, e, Object.create(xq.prototype))
            }
            function xq(t, n) {
                $q(),
                this.x3f_1 = t,
                this.y3f_1 = n
            }
            function Sq(t, n, i, e, r, o, u, s, a, l, h, _, c, f) {
                return 0 != (1 & _) && (t = null),
                0 != (2 & _) && (n = null),
                0 != (4 & _) && (i = null),
                0 != (8 & _) && (e = null),
                0 != (16 & _) && (r = null),
                0 != (64 & _) && (u = null),
                0 != (128 & _) && (s = null),
                0 != (256 & _) && (a = null),
                0 != (512 & _) && (l = null),
                0 != (1024 & _) && (h = null),
                Tq.call(f, t, n, i, e, r, o, u, s, a, l, h),
                f
            }
            function zq(t, n, i, e, r, o, u, s, a, l, h, _, c) {
                return Sq(t, n, i, e, r, o, u, s, a, l, h, _, c, Object.create(Tq.prototype))
            }
            function Tq(t, n, i, e, r, o, u, s, a, l, h) {
                this.m2u_1 = t,
                this.n2u_1 = n,
                this.o2u_1 = i,
                this.p2u_1 = e,
                this.q2u_1 = r,
                this.r2u_1 = o,
                this.s2u_1 = u,
                this.t2u_1 = s,
                this.u2u_1 = a,
                this.v2u_1 = l,
                this.w2u_1 = h
            }
            function Mq(t, n, i, e, r) {
                this.q2t_1 = t,
                this.r2t_1 = n,
                this.s2t_1 = i,
                this.t2t_1 = e,
                this.u2t_1 = r,
                this.v2t_1 = this.u2t_1.c1(this.t2t_1) >= 0
            }
            function Iq() {
                return Oq()
            }
            function Aq() {
                $e = this,
                ru.call(this, "SequencingConfiguration", Qq())
            }
            function Oq() {
                return Gq(),
                null == $e && new Aq,
                $e
            }
            function Eq() {
                me = this;
                var t = this
                  , n = uu();
                t.c3g_1 = su(n, Iq)
            }
            function Rq() {
                return Gq(),
                null == me && new Eq,
                me
            }
            function Qq() {
                return [Dq(), Lq(), Bq(), Nq(), Fq()]
            }
            function Gq() {
                if (je)
                    return to();
                je = !0,
                ye = new Pq("LEARN",0,"LEARN"),
                we = new Pq("WEB_WRITE",1,"WEB_WRITE"),
                be = new Pq("ANDROID_WRITE",2,"ANDROID_WRITE"),
                ge = new Pq("IOS_WRITE",3,"IOS_WRITE"),
                ke = new Pq("SPELL",4,"SPELL"),
                Rq()
            }
            function Pq(t, n, i) {
                no.call(this, t, n),
                this.f3g_1 = i
            }
            function Dq() {
                return Gq(),
                ye
            }
            function Lq() {
                return Gq(),
                we
            }
            function Bq() {
                return Gq(),
                be
            }
            function Nq() {
                return Gq(),
                ge
            }
            function Fq() {
                return Gq(),
                ke
            }
            function Wq(t, n) {
                this.h2x_1 = t,
                this.i2x_1 = n
            }
            function Uq(t, n, i, e, r, o, u, s, a, l) {
                return 0 != (8 & s) && (e = null),
                0 != (16 & s) && (r = null),
                0 != (32 & s) && (o = null),
                0 != (64 & s) && (u = null),
                tC.call(l, t, n, i, e, r, o, u),
                l
            }
            function Vq(t, n, i, e, r, o, u, s, a) {
                return Uq(t, n, i, e, r, o, u, s, a, Object.create(tC.prototype))
            }
            function Hq() {
                qe = this
            }
            function Yq() {
                return null == qe && new Hq,
                qe
            }
            function Kq() {
                Ce = this;
                var t = new du("QuestionMetadata",this,7);
                t.b1d("studiableItemId", !1),
                t.b1d("promptSide", !1),
                t.b1d("answerSide", !1),
                t.b1d("questionSource", !0),
                t.b1d("questionScoringInferenceMetadata", !0),
                t.b1d("optionGenerationSource", !0),
                t.b1d("meteringData", !0),
                this.g3g_1 = t
            }
            function Zq() {
                return null == Ce && new Kq,
                Ce
            }
            function Xq(t, n, i, e, r, o, u, s, a, l) {
                return 7 != (7 & t) && bu(t, 7, Zq().g3g_1),
                l.i3g_1 = n,
                l.j3g_1 = i,
                l.k3g_1 = e,
                l.l3g_1 = 0 == (8 & t) ? null : r,
                l.m3g_1 = 0 == (16 & t) ? null : o,
                l.n3g_1 = 0 == (32 & t) ? null : u,
                l.o3g_1 = 0 == (64 & t) ? null : s,
                l
            }
            function Jq(t, n, i, e, r, o, u, s, a) {
                return Xq(t, n, i, e, r, o, u, s, a, Object.create(tC.prototype))
            }
            function tC(t, n, i, e, r, o, u) {
                Yq(),
                this.i3g_1 = t,
                this.j3g_1 = n,
                this.k3g_1 = i,
                this.l3g_1 = e,
                this.m3g_1 = r,
                this.n3g_1 = o,
                this.o3g_1 = u
            }
            function nC(t, n, i, e) {
                return 0 != (1 & n) && (t = null),
                lC.call(e, t),
                e
            }
            function iC(t, n, i) {
                return nC(t, n, i, Object.create(lC.prototype))
            }
            function eC() {
                xe = this
            }
            function rC() {
                return null == xe && new eC,
                xe
            }
            function oC() {
                Se = this;
                var t = new du("CheckpointMetadata",this,1);
                t.b1d("meteringData", !0),
                this.q3g_1 = t
            }
            function uC() {
                return null == Se && new oC,
                Se
            }
            function sC(t, n, i, e) {
                return 0 != (0 & t) && bu(t, 0, uC().q3g_1),
                e.s3g_1 = 0 == (1 & t) ? null : n,
                e
            }
            function aC(t, n, i) {
                return sC(t, n, i, Object.create(lC.prototype))
            }
            function lC(t) {
                rC(),
                this.s3g_1 = t
            }
            function hC(t, n, i, e) {
                return 0 != (1 & n) && (t = null),
                wC.call(e, t),
                e
            }
            function _C(t, n, i) {
                return hC(t, n, i, Object.create(wC.prototype))
            }
            function cC() {
                ze = this
            }
            function fC() {
                return null == ze && new cC,
                ze
            }
            function dC() {
                Te = this;
                var t = new du("PaywallMetadata",this,1);
                t.b1d("meteringData", !0),
                this.t3g_1 = t
            }
            function pC() {
                return null == Te && new dC,
                Te
            }
            function vC(t, n, i, e) {
                return 0 != (0 & t) && bu(t, 0, pC().t3g_1),
                e.v3g_1 = 0 == (1 & t) ? null : n,
                e
            }
            function yC(t, n, i) {
                return vC(t, n, i, Object.create(wC.prototype))
            }
            function wC(t) {
                fC(),
                this.v3g_1 = t
            }
            function bC() {
                Me = this
            }
            function gC() {
                return null == Me && new bC,
                Me
            }
            function kC() {
                Ie = this;
                var t = new du("assistantMode.types.QuestionScoringInferenceMetadata",this,5);
                t.b1d("currentScore", !1),
                t.b1d("modelVersion", !1),
                t.b1d("modelName", !1),
                t.b1d("priorityScore", !0),
                t.b1d("priorityMethod", !0),
                this.w3g_1 = t
            }
            function $C() {
                return null == Ie && new kC,
                Ie
            }
            function mC(t, n, i, e, r, o, u, s) {
                return 7 != (7 & t) && bu(t, 7, $C().w3g_1),
                s.y3g_1 = n,
                s.z3g_1 = i,
                s.a3h_1 = e,
                s.b3h_1 = 0 == (8 & t) ? null : r,
                s.c3h_1 = 0 == (16 & t) ? null : o,
                s
            }
            function jC(t, n, i, e, r, o, u) {
                return mC(t, n, i, e, r, o, u, Object.create(qC.prototype))
            }
            function qC(t, n, i, e, r) {
                gC(),
                this.y3g_1 = t,
                this.z3g_1 = n,
                this.a3h_1 = i,
                this.b3h_1 = e,
                this.c3h_1 = r
            }
            function CC(t, n, i, e, r) {
                return 0 != (1 & i) && (t = !1),
                0 != (2 & i) && (n = null),
                OC.call(r, t, n),
                r
            }
            function xC(t, n, i, e) {
                return CC(t, n, i, e, Object.create(OC.prototype))
            }
            function SC() {
                Ae = this
            }
            function zC() {
                return null == Ae && new SC,
                Ae
            }
            function TC() {
                Oe = this;
                var t = new du("TestGeneratorOutputMetadata",this,2);
                t.b1d("isRetriedTest", !0),
                t.b1d("meteringData", !0),
                this.d3h_1 = t
            }
            function MC() {
                return null == Oe && new TC,
                Oe
            }
            function IC(t, n, i, e, r) {
                return 0 != (0 & t) && bu(t, 0, MC().d3h_1),
                r.f3h_1 = 0 != (1 & t) && n,
                r.g3h_1 = 0 == (2 & t) ? null : i,
                r
            }
            function AC(t, n, i, e) {
                return IC(t, n, i, e, Object.create(OC.prototype))
            }
            function OC(t, n) {
                zC(),
                this.f3h_1 = t,
                this.g3h_1 = n
            }
            function EC(t, n, i, e, r) {
                return 0 != (2 & i) && (n = null),
                QC.call(r, t, n),
                r
            }
            function RC(t, n, i, e) {
                return EC(t, n, i, e, Object.create(QC.prototype))
            }
            function QC(t, n) {
                this.j3h_1 = t,
                this.k3h_1 = n
            }
            function GC(t, n, i, e, r, o, u, s, a, l, h, _, c, f, d, p) {
                this.l3h_1 = t,
                this.m3h_1 = n,
                this.n3h_1 = i,
                this.o3h_1 = e,
                this.p3h_1 = r,
                this.q3h_1 = o,
                this.r3h_1 = u,
                this.s3h_1 = s,
                this.t3h_1 = a,
                this.u3h_1 = l,
                this.v3h_1 = h,
                this.w3h_1 = _,
                this.x3h_1 = c,
                this.y3h_1 = f,
                this.z3h_1 = d,
                this.a3i_1 = p
            }
            function PC(t) {
                return cz(t.a24())
            }
            function DC(t, n) {
                var i = LC(t, n);
                return null != i ? i : BC(t, n.a2x_1)
            }
            function LC(t, n) {
                var i = t.l2w_1;
                if (_u(null == i ? null : i.w2w_1, n.a2x_1)) {
                    for (var e = hM(t.l2w_1), r = Ju(Xu(e, 10)), o = e.j(); o.l(); ) {
                        var u;
                        u = lM(o.k(), _u(t.l2w_1.w2w_1, ho()) ? t.c2w_1.u2x() : t.d2w_1.u2x(), t.l2w_1.x2w_1),
                        r.a(u)
                    }
                    return r
                }
                return null
            }
            function BC(t, n) {
                var i;
                switch (n.r1_1) {
                case 0:
                    var e = t.o3d();
                    i = null == e ? wo() : e;
                    break;
                case 1:
                    var r = t.p3d();
                    i = null == r ? wo() : r;
                    break;
                default:
                    i = wo()
                }
                return i
            }
            function NC(t) {
                var n;
                t: {
                    for (var i = t.u2w_1.j(); i.l(); ) {
                        var e = i.k();
                        if (e.d3i_1) {
                            n = e;
                            break t
                        }
                    }
                    n = null
                }
                var r = n;
                if (null == r)
                    throw gu("MCQ must have one correct option");
                return r
            }
            function FC(t, n) {
                return n ? t.b3i_1 + " " + t.c3i_1 : t.c3i_1
            }
            function WC() {
                Ee = this
            }
            function UC() {
                return null == Ee && new WC,
                Ee
            }
            function VC() {
                Re = this;
                var t = new du("assistantMode.types.aliases.ExperimentConfiguration",this,5);
                t.b1d("continue_studying_from_tasks", !0),
                t.b1d("randomize_initial_term_order", !0),
                t.b1d("study_direction_defaults", !0),
                t.b1d("flexible_learn", !0),
                t.b1d("granular_study_direction", !0),
                this.f3i_1 = t
            }
            function HC() {
                return null == Re && new VC,
                Re
            }
            function YC(t, n, i, e, r, o, u, s) {
                return 0 != (0 & t) && bu(t, 0, HC().f3i_1),
                s.h2m_1 = 0 == (1 & t) ? null : n,
                s.i2m_1 = 0 == (2 & t) ? null : i,
                s.j2m_1 = 0 == (4 & t) ? null : e,
                s.k2m_1 = 0 == (8 & t) ? null : r,
                s.l2m_1 = 0 == (16 & t) ? null : o,
                s
            }
            function KC(t, n, i, e, r, o, u) {
                return YC(t, n, i, e, r, o, u, Object.create(ZC.prototype))
            }
            function ZC(t, n, i, e, r) {
                UC(),
                this.h2m_1 = t,
                this.i2m_1 = n,
                this.j2m_1 = i,
                this.k2m_1 = e,
                this.l2m_1 = r
            }
            function XC(t, n, i, e, r) {
                return 0 != (2 & i) && (n = xC(!1, null, 3, null)),
                ux.call(r, t, n),
                r
            }
            function JC(t, n, i, e) {
                return XC(t, n, i, e, Object.create(ux.prototype))
            }
            function tx() {
                Qe = this
            }
            function nx() {
                return null == Qe && new tx,
                Qe
            }
            function ix() {
                Ge = this;
                var t = new du("Test",this,2);
                t.b1d("questions", !1),
                t.b1d("metadata", !0),
                this.h3i_1 = t
            }
            function ex() {
                return null == Ge && new ix,
                Ge
            }
            function rx(t, n, i, e, r) {
                return 1 != (1 & t) && bu(t, 1, ex().h3i_1),
                r.j3i_1 = n,
                r.k3i_1 = 0 == (2 & t) ? xC(!1, null, 3, null) : i,
                r
            }
            function ox(t, n, i, e) {
                return rx(t, n, i, e, Object.create(ux.prototype))
            }
            function ux(t, n) {
                nx(),
                this.j3i_1 = t,
                this.k3i_1 = n
            }
            function sx() {
                Pe = this
            }
            function ax() {
                return null == Pe && new sx,
                Pe
            }
            function lx() {
                De = this;
                var t = new du("GradedTestResult",this,3);
                t.b1d("gradePercentage", !1),
                t.b1d("gradedAnswers", !1),
                t.b1d("metadata", !0),
                this.n3i_1 = t
            }
            function hx() {
                return null == De && new lx,
                De
            }
            function _x(t, n, i, e, r, o) {
                return 3 != (3 & t) && bu(t, 3, hx().n3i_1),
                o.p3i_1 = n,
                o.q3i_1 = i,
                o.r3i_1 = 0 == (4 & t) ? xC(!1, null, 3, null) : e,
                o
            }
            function cx(t, n, i, e, r) {
                return _x(t, n, i, e, r, Object.create(fx.prototype))
            }
            function fx(t, n, i) {
                ax(),
                this.p3i_1 = t,
                this.q3i_1 = n,
                this.r3i_1 = i
            }
            function dx() {
                Le = this
            }
            function px() {
                return null == Le && new dx,
                Le
            }
            function vx() {
                px()
            }
            function yx() {
                Be = this
            }
            function wx() {
                return null == Be && new yx,
                Be
            }
            function bx() {
                wx()
            }
            function gx() {
                Ne = this
            }
            function kx() {
                return null == Ne && new gx,
                Ne
            }
            function $x() {
                Fe = this;
                var t = new du("TestPaywall",this,1);
                t.b1d("metadata", !0),
                this.s3i_1 = t
            }
            function mx() {
                return null == Fe && new $x,
                Fe
            }
            function jx(t, n, i, e) {
                return 0 != (0 & t) && bu(t, 0, mx().s3i_1),
                e.u3i_1 = 0 == (1 & t) ? xC(!1, null, 3, null) : n,
                e
            }
            function qx(t, n, i) {
                return jx(t, n, i, Object.create(Cx.prototype))
            }
            function Cx(t) {
                kx(),
                this.u3i_1 = t
            }
            function xx(t, n, i, e, r, o, u, s) {
                return 0 != (16 & o) && (r = null),
                Ex.call(s, t, n, i, e, r),
                s
            }
            function Sx(t, n, i, e, r, o, u) {
                return xx(t, n, i, e, r, o, u, Object.create(Ex.prototype))
            }
            function zx() {
                We = this
            }
            function Tx() {
                return null == We && new zx,
                We
            }
            function Mx() {
                Ue = this;
                var t = new du("assistantMode.types.test.TestSettings",this,5);
                t.b1d("enabledQuestionTypes", !1),
                t.b1d("enabledPromptSides", !1),
                t.b1d("enabledAnswerSides", !1),
                t.b1d("numQuestions", !1),
                t.b1d("studiableItemIds", !0),
                this.v3i_1 = t
            }
            function Ix() {
                return null == Ue && new Mx,
                Ue
            }
            function Ax(t, n, i, e, r, o, u, s) {
                return 15 != (15 & t) && bu(t, 15, Ix().v3i_1),
                s.n2w_1 = n,
                s.o2w_1 = i,
                s.p2w_1 = e,
                s.q2w_1 = r,
                s.r2w_1 = 0 == (16 & t) ? null : o,
                s
            }
            function Ox(t, n, i, e, r, o, u) {
                return Ax(t, n, i, e, r, o, u, Object.create(Ex.prototype))
            }
            function Ex(t, n, i, e, r) {
                Tx(),
                this.n2w_1 = t,
                this.o2w_1 = n,
                this.p2w_1 = i,
                this.q2w_1 = e,
                this.r2w_1 = r
            }
            function Rx() {
                return Px(),
                Ve
            }
            function Qx(t, n, i) {
                return Px(),
                !(!Gx(t) || !Gx(n)) && Rx().t(i)
            }
            function Gx(t) {
                return Px(),
                (Go(t) > 0 ? ml(t, [" "], !1, 0, 6, null).f() : 0) >= 3
            }
            function Px() {
                He || (He = !0,
                Ve = na(["en", "en-US", "en-GB", "es", "de", "fr"]))
            }
            function Dx(t, n, i) {
                return wS(t, i) == wS(n, i)
            }
            function Lx(t, n, i) {
                if (n.equals(co())) {
                    var e = i.d3(t.a24())
                      , r = null == e ? null : e.r2x_1
                      , o = null == r ? null : us(r);
                    return null == o ? null : o.toString()
                }
                var u = AS(t, n)
                  , s = Lo(sa(ua(u) ? u : Zr())).toLowerCase()
                  , a = RS(t, n);
                return Go(s) > 0 || null != a ? s + "/_/_/" + us(null == a ? "" : a) : null
            }
            function Bx(t, n) {
                if (null != n) {
                    for (var i = Hu(), e = t.j(); e.l(); ) {
                        var r = e.k();
                        r.g22().c1(n) > 0 && i.a(r)
                    }
                    return i
                }
                return t
            }
            function Nx(t, n, i, e, r, o, u, s) {
                var a = Hu()
                  , l = t.j();
                t: for (; l.l(); ) {
                    var h = l.k();
                    if (!Fx(h, r, o, u, !1, !1, !1) || Wx(a, h, u) || Wx(a, h, o) || a.a(h),
                    a.f() >= n)
                        break t
                }
                var _ = t.j();
                t: for (; _.l(); ) {
                    var c = _.k();
                    if (a.f() >= n)
                        break t;
                    !Fx(c, r, o, u, i, e, s) || !e && Wx(a, c, u) || !i && Wx(a, c, o) || c.equals(r) || a.t(c) || a.a(c)
                }
                return a
            }
            function Fx(t, n, i, e, r, o, u) {
                if (n.o2v_1.equals(t.o2v_1))
                    return !1;
                if (e.equals(co())) {
                    var s = t.e2w_1
                      , a = null == s ? null : s.q2x_1
                      , l = n.e2w_1;
                    if (!_u(a, null == l ? null : l.q2x_1))
                        return !1
                }
                return !(!r && Dx(n, t, i) || !o && Dx(n, t, e) || !u && !t.q3d(e))
            }
            function Wx(t, n, i) {
                var e;
                t: if (Qu(t, vs) && t.h())
                    e = !1;
                else {
                    for (var r = t.j(); r.l(); )
                        if (Dx(r.k(), n, i)) {
                            e = !0;
                            break t
                        }
                    e = !1
                }
                return e
            }
            function Ux(t, n, i, e, r, o, u, s) {
                if (r <= 0)
                    return wo();
                var a = ks(e.g2t_1)
                  , l = Nx(Hx(Fs(Ls(a, 30)), t, n, i), r, o, u, t, n, i, s);
                return l.f() < r && (l = Nx(ls(l, Fs(a)), r, o, u, t, n, i, s)),
                l
            }
            function Vx(t) {
                return Lo(sa(ua(t) ? t : Zr())).toLowerCase()
            }
            function Hx(t, n, i, e) {
                for (var r = Yx(es(t, n), lo([i, e])), o = Ju(Xu(t, 10)), u = t.j(); u.l(); ) {
                    var s;
                    s = Zx(n, u.k(), i, e, r),
                    o.a(s)
                }
                var a, l = Xx(o), h = jl(t, l);
                a = new sS(aS);
                for (var _ = ts(h, a), c = Ju(Xu(_, 10)), f = _.j(); f.l(); ) {
                    var d;
                    d = f.k().z4_1,
                    c.a(d)
                }
                return c
            }
            function Yx(t, n) {
                for (var i = Wo(Fo(No(Xu(n, 10)), 16)), e = n.j(); e.l(); ) {
                    for (var r, o = e.k(), u = Fo(No(Xu(t, 10)), 16), s = Wo(u), a = t.j(); a.l(); ) {
                        var l = a.k()
                          , h = eo(PC(l), Jx(l, o));
                        s.d5(h.z4_1, h.a5_1)
                    }
                    r = s,
                    i.d5(o, r)
                }
                return i
            }
            function Kx(t, n, i, e, r, o, u, s, a, l) {
                this.z3i_1 = t,
                this.a3j_1 = n,
                this.b3j_1 = i,
                this.c3j_1 = e,
                this.d3j_1 = r,
                this.e3j_1 = o,
                this.f3j_1 = u,
                this.g3j_1 = s,
                this.h3j_1 = a,
                this.i3j_1 = l
            }
            function Zx(t, n, i, e, r) {
                var o = tS(t, n, i, r)
                  , u = tS(t, n, e, r)
                  , s = nS(t, n, i, r)
                  , a = nS(t, n, e, r)
                  , l = iS(t, n, i)
                  , h = iS(t, n, e)
                  , _ = eS(t, n, e);
                return new Kx(u,o,s,a,l,h,rS(t, n, i),rS(t, n, e),_,n.p2v_1)
            }
            function Xx(t) {
                for (var n = Ju(Xu(t, 10)), i = t.j(); i.l(); ) {
                    var e;
                    e = i.k().a3j_1,
                    n.a(e)
                }
                for (var r = oS(n), o = Ju(Xu(t, 10)), u = t.j(); u.l(); ) {
                    var s;
                    s = u.k().z3i_1,
                    o.a(s)
                }
                for (var a = oS(o), l = Ju(Xu(t, 10)), h = t.j(); h.l(); ) {
                    var _;
                    _ = h.k().b3j_1,
                    l.a(_)
                }
                for (var c = oS(l), f = Ju(Xu(t, 10)), d = t.j(); d.l(); ) {
                    var p;
                    p = d.k().c3j_1,
                    f.a(p)
                }
                for (var v, y = [r, a, c, oS(f)].slice(), w = lS(), b = Ju(y.length), g = y, k = 0, $ = g.length; k < $; ) {
                    var m = g[k];
                    k = k + 1 | 0,
                    b.a(w(m))
                }
                var j = ql(b);
                if (null != j) {
                    for (var q = j, C = Ju(q), x = Ju(y.length), S = y, z = 0, T = S.length; z < T; ) {
                        var M, I = S[z];
                        z = z + 1 | 0,
                        M = I.j(),
                        x.a(M)
                    }
                    for (var A = x, O = 0; O < q; ) {
                        for (var E, R = Ju(Xu(A, 10)), Q = A.j(); Q.l(); ) {
                            var G;
                            G = Q.k().k(),
                            R.a(G)
                        }
                        E = R,
                        C.a(E),
                        O = O + 1 | 0
                    }
                    v = C
                } else
                    v = wo();
                var P, D = v, L = t.j(), B = D.j(), N = Xu(t, 10), F = Xu(D, 10);
                P = Math.min(N, F);
                for (var W = Ju(P); L.l() && B.l(); ) {
                    var U, V = L.k(), H = B.k();
                    U = V.d3j_1 + 2 * V.e3j_1 + V.f3j_1 + 2 * V.g3j_1 + V.h3j_1 + .25 * H.i(0) + .3 * H.i(1) + .15 * H.i(2) + .2 * H.i(3),
                    W.a(U)
                }
                return W
            }
            function Jx(t, n) {
                return YS(n) ? Vx(AS(t, n)) : null
            }
            function tS(t, n, i, e) {
                if (!YS(i))
                    return 0;
                var r = uS(t, i, e)
                  , o = uS(n, i, e);
                if (null == r != (null == o))
                    return 1;
                if (null == r)
                    return 0;
                if (null == o)
                    return 0;
                var u = Cl(r, 15)
                  , s = Cl(o, 15)
                  , a = xl(u, s);
                if (0 === Go(u))
                    return 0 === Go(s) ? 0 : 1;
                var l = 1 * a
                  , h = u.length
                  , _ = s.length;
                return l / Math.max(h, _)
            }
            function nS(t, n, i, e) {
                var r = uS(t, i, e)
                  , o = uS(n, i, e);
                if (null == r != (null == o))
                    return 1;
                if (null == r)
                    return 0;
                if (null == o)
                    return 0;
                var u = Sl(r.length - o.length | 0);
                if (0 === Go(r))
                    return 0 === Go(o) ? 0 : 1;
                var s = 1 * u
                  , a = r.length
                  , l = o.length;
                return s / Math.max(a, l)
            }
            function iS(t, n, i) {
                return _u(CS(t, i), CS(n, i)) ? 0 : 1
            }
            function eS(t, n, i) {
                return !(null == RS(t, i)) == !(null == RS(n, i)) ? 0 : 1
            }
            function rS(t, n, i) {
                var e = yS(t, i)
                  , r = yS(n, i);
                return _u(na([e, r]), na([OT(), ET()])) ? .75 : _u(e, r) ? 0 : 1
            }
            function oS(t) {
                var n = sl(zl(t));
                if (0 === n)
                    return t;
                for (var i = Ju(Xu(t, 10)), e = t.j(); e.l(); ) {
                    var r;
                    r = e.k() / n,
                    i.a(r)
                }
                return i
            }
            function uS(t, n, i) {
                var e = i.d3(n);
                if (null == e)
                    throw zu("Card side " + n + " missing in normalizedTextMap");
                return e.d3(PC(t))
            }
            function sS(t) {
                this.j3j_1 = t
            }
            function aS(t, n) {
                var i, e = t.a5_1;
                return i = n.a5_1,
                as(e, i)
            }
            function lS() {
                return Fu("size", 1, Nu, (function(t) {
                    return t.f()
                }
                ), null)
            }
            function hS(t, n) {
                for (var i = Ju(Xu(t, 10)), e = t.j(); e.l(); ) {
                    var r;
                    r = e.k().c2w_1.u2x(),
                    i.a(r)
                }
                for (var o = i, u = Ju(Xu(t, 10)), s = t.j(); s.l(); ) {
                    var a;
                    a = s.k().d2w_1.u2x(),
                    u.a(a)
                }
                var l, h, _ = u;
                t: if (Qu(o, vs) && o.h())
                    h = !1;
                else {
                    for (var c = o.j(); c.l(); )
                        if (_S(c.k()) === _S(n)) {
                            h = !0;
                            break t
                        }
                    h = !1
                }
                if (h)
                    l = !0;
                else {
                    var f;
                    t: if (Qu(_, vs) && _.h())
                        f = !1;
                    else {
                        for (var d = _.j(); d.l(); )
                            if (_S(d.k()) === _S(n)) {
                                f = !0;
                                break t
                            }
                        f = !1
                    }
                    l = f
                }
                if (l) {
                    for (var p = o.j(); p.l(); ) {
                        var v = p.k();
                        if (_S(v) !== _S(n) && !Tl(Dz(), v))
                            return ho()
                    }
                    for (var y = _.j(); y.l(); ) {
                        var w = y.k();
                        if (_S(w) !== _S(n) && !Tl(Dz(), w))
                            return _o()
                    }
                }
                return null
            }
            function _S(t) {
                var n = Il([Ml(45)]);
                return Al(t, n, !1, 0, 6, null).i(0)
            }
            function cS(t) {
                var n = Oh().d3(t)
                  , i = null == n ? null : n.r2k_1;
                if (null == i)
                    throw Su(Lo("Cannot get difficulty level for unsupported question type"));
                return i
            }
            function fS(t) {
                return cS(t.d2t_1.equals(Yo()) && t.a2t_1 ? io() : t.d2t_1)
            }
            function dS(t) {
                for (var n = pS(t), i = 0, e = Ol(), r = 0, o = Ol(), u = t.j(); u.l(); ) {
                    var s = u.k();
                    Sz(s, ho()) && (e.a(s.p2v_1),
                    i = i + 1 | 0),
                    Sz(s, _o()) && (o.a(s.u2v_1),
                    r = r + 1 | 0)
                }
                return El([eo(ho(), vS(e, i, n)), eo(_o(), vS(o, r, n))])
            }
            function pS(t) {
                for (var n = Ol(), i = 0, e = t.j(); e.l(); ) {
                    var r = e.k();
                    (Sz(r, ho()) || Sz(r, _o())) && (n.a(new Rl(r.i2w_1,r.j2w_1)),
                    i = i + 1 | 0)
                }
                return i - n.f() | 0
            }
            function vS(t, n, i) {
                return ((n - t.f() | 0) - i | 0) > 2
            }
            function yS(t, n) {
                switch (n.r1_1) {
                case 0:
                    return t.c2w_1.s3d();
                case 1:
                    return t.d2w_1.s3d();
                default:
                    return null
                }
            }
            function wS(t, n) {
                var i;
                switch (n.r1_1) {
                case 0:
                    i = t.i2w_1;
                    break;
                case 1:
                    i = t.j2w_1;
                    break;
                case 2:
                    i = t.k2w_1;
                    break;
                default:
                    Yu()
                }
                return i
            }
            function bS() {
                return kS(),
                Ye
            }
            function gS(t) {
                var n;
                kS();
                t: {
                    for (var i = bS().j(); i.l(); ) {
                        var e = i.k();
                        if (t.t(e)) {
                            n = e;
                            break t
                        }
                    }
                    n = null
                }
                return n
            }
            function kS() {
                Ke || (Ke = !0,
                Ye = lo([io(), so(), uo(), Ho(), ro(), oo(), Yo()]))
            }
            function $S(t) {
                var n = mS(t);
                return sl(n.d3(ho())) >= sl(n.d3(_o())) ? ho() : _o()
            }
            function mS(t) {
                for (var n = Rh(), i = Wo(Fo(No(Xu(n, 10)), 16)), e = n.j(); e.l(); ) {
                    for (var r, o = e.k(), u = Hu(), s = t.j(); s.l(); ) {
                        var a = s.k();
                        Sz(a, o) && u.a(a)
                    }
                    for (var l = u, h = Ju(Xu(l, 10)), _ = l.j(); _.l(); ) {
                        var c;
                        c = OS(_.k(), o),
                        h.a(c)
                    }
                    r = Ql($s(h)),
                    i.d5(o, r)
                }
                return i
            }
            function jS(t) {
                for (var n = Rh(), i = Hu(), e = n.j(); e.l(); ) {
                    var r = e.k();
                    !r.equals(t) && i.a(r)
                }
                return i
            }
            function qS(t) {
                var n;
                switch (t.r1_1) {
                case 0:
                    n = _o();
                    break;
                case 1:
                    n = ho();
                    break;
                default:
                    throw Su("Card side is not a text side")
                }
                return n
            }
            function CS(t, n) {
                switch (n.r1_1) {
                case 0:
                    return t.c2w_1.r3d();
                case 1:
                    return t.d2w_1.r3d();
                default:
                    return null
                }
            }
            function xS(t) {
                var n = t;
                return null == n ? ho() : n
            }
            function SS() {
                return IS(),
                Ze
            }
            function zS() {
                return IS(),
                Xe
            }
            function TS(t) {
                IS();
                for (var n = Ju(Xu(t, 10)), i = t.j(); i.l(); ) {
                    var e;
                    e = i.k().p2v_1.toLowerCase(),
                    n.a(e)
                }
                for (var r = n, o = Ju(Xu(t, 10)), u = t.j(); u.l(); ) {
                    var s;
                    s = u.k().u2v_1.toLowerCase(),
                    o.a(s)
                }
                var a = o
                  , l = MS(r, zS())
                  , h = MS(r, SS())
                  , _ = MS(a, zS())
                  , c = MS(a, SS());
                return (l > .5 || h > .2) && (_ > .5 || c > .2) || (l > .5 || h > .2) && (_ > .5 || c > .2) || (l > .5 || h > .2) && (_ > .5 || c > .2) ? null : l > .5 && _ < .3 || h > .2 && c < .1 ? ho() : _ > .5 && l < .3 || c > .2 && h < .1 ? _o() : null
            }
            function MS(t, n) {
                IS();
                for (var i = Ju(Xu(t, 10)), e = t.j(); e.l(); ) {
                    var r, o, u = e.k();
                    t: if (Qu(n, vs) && n.h())
                        o = !1;
                    else {
                        for (var s = n.j(); s.l(); ) {
                            var a = s.k();
                            if (Gl(u, a, !1, 2, null)) {
                                o = !0;
                                break t
                            }
                        }
                        o = !1
                    }
                    r = o,
                    i.a(r)
                }
                var l, h = i;
                if (0 === h.f())
                    return 0;
                if (Qu(h, vs) && h.h())
                    l = 0;
                else {
                    for (var _ = 0, c = h.j(); c.l(); )
                        c.k() && ys(_ = _ + 1 | 0);
                    l = _
                }
                return l / h.f()
            }
            function IS() {
                Je || (Je = !0,
                Ze = lo(["___", "?"]),
                Xe = lo(["why", "what", "which", "when", "where", "how", "provide", "categorize", "compare", "contrast", "select", "choose", "match", "give", "list", "define", "describe", "explain", "evaluate"]))
            }
            function AS(t, n) {
                var i;
                switch (n.r1_1) {
                case 0:
                    i = t.b3d();
                    break;
                case 1:
                    i = t.g3d();
                    break;
                default:
                    throw Su("Unrecognized textual card side: " + n)
                }
                return i
            }
            function OS(t, n) {
                var i = Pl(ES(t, n));
                return Lo(sa(ua(i) ? i : Zr())).length
            }
            function ES(t, n) {
                var i;
                switch (n.r1_1) {
                case 0:
                    i = t.b3d();
                    break;
                case 1:
                    i = t.g3d();
                    break;
                default:
                    throw zu("Unrecognized textual card side: " + n)
                }
                return i
            }
            function RS(t, n) {
                var i;
                if (n.equals(_o())) {
                    var e = t.l3d();
                    i = null == e ? null : e.e28_1
                } else
                    i = null;
                return i
            }
            function QS() {
                return tr
            }
            function GS(t, n, i, e, r, o, u) {
                var s, a = "en" === i & "en" === n ? ls(JT(), tM()) : JT(), l = u ? null : nM(t.b3d(), t.g3d(), a), h = null == l ? null : l.u2w_1;
                if (null == h)
                    s = null;
                else {
                    var _;
                    t: {
                        for (var c = 0, f = h.j(); f.l(); ) {
                            if (f.k().d3i_1) {
                                _ = c;
                                break t
                            }
                            c = c + 1 | 0
                        }
                        _ = -1
                    }
                    s = _
                }
                return PS(t, n, i, e, r, o, l, s)
            }
            function PS(t, n, i, e, r, o, u, s) {
                var a = o ? new DS(rm(t.b3d(), t.c3d(), n, null, null, 24, null),rm(t.g3d(), t.h3d(), i, null, null, 24, null)) : new DS(new am(t.b3d(),t.c3d(),n,t.g3d(),i),new am(t.g3d(),t.h3d(),i,t.b3d(),n))
                  , l = a.b5()
                  , h = a.c5()
                  , _ = Lx(t, ho(), e)
                  , c = Lx(t, _o(), e)
                  , f = Lx(t, co(), e)
                  , d = e.d3(t.a24())
                  , p = r.d3(t.m3d());
                return J$(t, l, h, d, p, _, c, f, u, s)
            }
            function DS(t, n) {
                this.k3j_1 = t,
                this.l3j_1 = n
            }
            function LS() {
                nr = this,
                this.m3j_1 = "Validation error"
            }
            function BS() {
                return null == nr && new LS,
                nr
            }
            function NS(t) {
                BS(),
                BS(),
                Ll("Validation error: " + t, this),
                eu(this, NS)
            }
            function FS(t) {
                var n = t.l2t_1;
                if (n.h())
                    throw new NS("`enabledQuestionTypes` must contain at least one value");
                if (ns(n).f() !== n.f())
                    throw new NS("enabledQuestionTypes should be unique");
                for (var i = n.j(); i.l(); ) {
                    var e = i.k();
                    if (!Eh().t(e))
                        throw new NS("Unrecognized question type: " + e)
                }
            }
            function WS() {
                return VS(),
                ir
            }
            function US(t) {
                return VS(),
                !!t.a2t_1 || WS().t(t.d2t_1)
            }
            function VS() {
                er || (er = !0,
                ir = Zu(io()))
            }
            function HS(t, n, i) {
                var e;
                switch (n.r1_1) {
                case 0:
                    e = 1 === i.h30(t, ho()).f();
                    break;
                case 1:
                    e = 1 === i.h30(t, _o()).f();
                    break;
                case 2:
                    e = !0;
                    break;
                default:
                    Yu()
                }
                return e
            }
            function YS(t) {
                return !!t.equals(ho()) || t.equals(_o())
            }
            function KS(t, n) {
                for (var i = ul(), e = n.j(); e.l(); ) {
                    var r, o = e.k(), u = o.e2t_1, s = i.d3(u);
                    if (null == s) {
                        var a = Hu();
                        i.d5(u, a),
                        r = a
                    } else
                        r = s;
                    r.a(o)
                }
                for (var l = i, h = Fo(No(Xu(t, 10)), 16), _ = Wo(h), c = t.j(); c.l(); ) {
                    var f = c.k()
                      , d = PC(f)
                      , p = l.d3(PC(f))
                      , v = eo(d, null == p ? wo() : p);
                    _.d5(v.z4_1, v.a5_1)
                }
                return _
            }
            function ZS(t) {
                return new Ys(t.y22_1,t.z22_1,t.a23_1)
            }
            function XS(t) {
                var n;
                t: if (Qu(t, vs) && t.h())
                    n = !1;
                else {
                    for (var i = t.j(); i.l(); )
                        if (i.k()instanceof pa) {
                            n = !0;
                            break t
                        }
                    n = !1
                }
                for (var e = n, r = Hu(), o = t.j(); o.l(); ) {
                    var u;
                    u = JS(o.k(), e),
                    Ku(r, u)
                }
                return r
            }
            function JS(t, n) {
                var i, e = t;
                if (e instanceof Js)
                    i = tz(t, n);
                else if (e instanceof da)
                    i = Zu(ZS(t));
                else if (e instanceof pa)
                    i = Zu(nz(t));
                else if (e instanceof Bl)
                    i = Zu(iz(t));
                else {
                    if (e instanceof va)
                        throw gu("DiagramShapeValues are not supported at this time");
                    Yu()
                }
                return i
            }
            function tz(t, n) {
                var i, e = new As(t.r22_1,t.s22_1,t.v22_1);
                if (n || null == t.t22_1 || null == t.u22_1)
                    i = Zu(e);
                else {
                    var r = new Ms(sl(t.t22_1),sl(t.u22_1));
                    i = lo([e, r])
                }
                return i
            }
            function nz(t) {
                return new Ms(t.g23_1,t.g23_1)
            }
            function iz(t) {
                return new Nl(t.j23_1,t.k23_1,t.l23_1,t.m23_1)
            }
            function ez() {
                return lz(),
                rr
            }
            function rz() {
                return lz(),
                or
            }
            function oz(t) {
                this.n3j_1 = t
            }
            function uz(t) {
                this.o3j_1 = t
            }
            function sz(t, n) {
                lz();
                var i, e = n.g22();
                return i = t.g22(),
                as(e, i)
            }
            function az(t, n) {
                lz();
                var i, e = t.g22();
                return i = n.g22(),
                as(e, i)
            }
            function lz() {
                var t, n;
                ur || (ur = !0,
                t = new oz(sz),
                rr = t,
                n = new uz(az),
                or = n)
            }
            function hz(t, n, i, e, r) {
                for (var o = t.t(io()) ? i.t(ho()) && i.t(_o()) ? e : i : wo(), u = Hu(), s = r.j(); s.l(); ) {
                    var a = s.k();
                    t.t(a) && u.a(a)
                }
                return new oj(t,n,i,o,u)
            }
            function _z(t) {
                return t
            }
            function cz(t) {
                return t
            }
            function fz(t) {
                var n, i = t;
                return i instanceof rq ? n = Ks(t.x2o_1.gb()) : i instanceof _q ? n = t.s3f_1 : null == i ? n = Ss() : Yu(),
                n
            }
            function dz(t) {
                return 1 === t.f() ? Zj(Fl(t)) : new _q(t)
            }
            function pz(t, n, i, e) {
                wz.call(e),
                e.g2t_1 = t;
                for (var r, o = e, u = e.g2t_1, s = Fo(No(Xu(u, 10)), 16), a = Wo(s), l = u.j(); l.l(); ) {
                    var h, _ = l.k();
                    h = _.o2v_1,
                    a.d5(h, _)
                }
                return r = a,
                o.j2t_1 = r,
                e.k2t_1 = yz(e, e.g2t_1),
                e.h2t_1 = n,
                e.i2t_1 = i,
                e
            }
            function vz(t, n, i) {
                return pz(t, n, i, Object.create(wz.prototype))
            }
            function yz(t, n) {
                for (var i = Rh(), e = Wo(Fo(No(Xu(i, 10)), 16)), r = i.j(); r.l(); ) {
                    for (var o, u = r.k(), s = ul(), a = n.j(); a.l(); ) {
                        var l, h = a.k(), _ = wS(h, u), c = s.d3(_);
                        if (null == c) {
                            var f = Hu();
                            s.d5(_, f),
                            l = f
                        } else
                            l = c;
                        l.a(h)
                    }
                    o = s,
                    e.d5(u, o)
                }
                return e
            }
            function wz() {}
            function bz(t, n) {
                if (null == n)
                    return t;
                for (var i = t.g2t_1, e = Hu(), r = i.j(); r.l(); ) {
                    var o = r.k();
                    n.t(o.o2v_1) && e.a(o)
                }
                for (var u = e, s = t.h2t_1, a = Hu(), l = s.j(); l.l(); ) {
                    var h = l.k();
                    n.t(h.e24_1) && a.a(h)
                }
                return vz(u, a, t.i2t_1)
            }
            function gz() {
                return jz(),
                sr
            }
            function kz(t) {
                this.v3j_1 = t
            }
            function $z(t, n) {
                jz();
                var i, e = t.v2t_1;
                return i = n.v2t_1,
                as(e, i)
            }
            function mz(t) {
                return function(n, i) {
                    var e, r = t.compare(n, i);
                    if (0 !== r)
                        e = r;
                    else {
                        var o, u = n.s2t_1;
                        o = i.s2t_1,
                        e = as(u, o)
                    }
                    return e
                }
            }
            function jz() {
                var t, n;
                ar || (ar = !0,
                n = new kz($z),
                t = new kz(mz(n)),
                sr = t)
            }
            function qz(t, n, i) {
                if (!Sz(t, n))
                    return !1;
                var e = OS(t, n);
                return i && n.equals(ho()) ? e < Kh() : i && n.equals(_o()) ? e < Zh() : e < Xh()
            }
            function Cz(t, n, i, e, r) {
                return 0 != (2 & e) && (i = !1),
                qz(t, n, i)
            }
            function xz(t, n, i) {
                return i ? Cz(t, n, !1, 2, null) : Sz(t, n)
            }
            function Sz(t, n) {
                return !(!n.equals(ho()) && !n.equals(_o())) && OS(t, n) > 0
            }
            function zz(t, n, i, e) {
                var r = new pT(t,n,i,e);
                return r.q3k() ? DT() : r.p3k() ? GT() : r.o3k() ? PT() : r.n3k() ? AT() : r.m3k() ? OT() : r.l3k() ? ET() : r.k3k() ? RT() : r.j3k() ? QT() : r.i3k() || r.h3k() ? GT() : r.g3k() ? AT() : r.f3k() ? PT() : r.e3k() ? GT() : null
            }
            function Tz() {
                return Pz(),
                lr
            }
            function Mz() {
                return Pz(),
                hr
            }
            function Iz() {
                return Pz(),
                _r
            }
            function Az() {
                return Pz(),
                cr
            }
            function Oz() {
                return Pz(),
                fr
            }
            function Ez() {
                return Pz(),
                dr
            }
            function Rz() {
                return Pz(),
                pr
            }
            function Qz() {
                return Pz(),
                vr
            }
            function Gz() {
                return Pz(),
                yr
            }
            function Pz() {
                wr || (wr = !0,
                lr = na(["king", "queen", "president", "general", "archduke", "archduchess", "emperor", "emperess", "csar", "tsar", "tzar"]),
                hr = na(["ruler", "philosopher", "minister", "chief", "father", "explorer", "governor", "commander", "secretary", "author", "writer", "dictator", "senator", "inventor", "scientist", "negotiator", "liberator", "poet", "pharaoh", "conquistador", "statesman", "teacher", "duke", "duchess", "magistrate", "caliph", "knight", "wife", "mother", "father", "scion", "mayor", "chancellor", "reporter", "cartoonist", "muckraker", "lawyer", "doctor", "nurse", "navigator", "sailor", "soldier", "sergeant", "captain", "lieutenant", "admiral", "physicist", "engineer", "mathemetician", "husband", "son", "actor", "evolutionist", "thinker", "preacher", "bishop", "grandson", "daughter", "mathematician", "composer", "cosmonaut", "historian", "scholar", "architect", "astronomer", "astronaut", "prophet", "journalist", "activist"]),
                _r = na(["who", "leader", "leaders", "he", "person", "led", "created", "wrote", "founded", "founder", "established", "became", "his", "wanted", "built", "developed", "invented", "ruled", "helped", "born", "discovered", "life", "criticized", "assassinated", "organized", "whose", "elected", "rule", "supported", "woman", "lived", "worked", "killed", "death", "served", "owned", "she", "claimed", "painted", "protest", "promoted", "lord", "trained", "traveled", "studied", "died", "advocated", "improved", "merchant", "commanded", "whom", "suffagette", "priest", "healer", "designed"]),
                cr = na(["war", "battle", "conflict", "fought", "victory", "turning point", "defeated", "attack", "bloodiest", "struggle", "lasting", "began", "ended", "decisive", "offensive", "event", "fight", "attacked", "lasted", "period", "revolution", "revolt", "revolts", "genocide", "famine", "flood"]),
                fr = na(["declaration", "treaty", "bill", "valitution", "covenant", "proclamation", "agreement", "concordance", "law", "deal", "pact", "act", "acts", "statute", "decree", "charter", "amendment", "papers", "accords", "resolution", "petition", "policy", "manifesto", "order", "edict", "plan", "code", "system"]),
                dr = na(["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"]),
                pr = na(["st", "nd", "rd", "th"]),
                vr = na(["organization", "congress", "church", "kingdom", "empire", "state", "nation", "society", "party", "group", "bloc", "conference", "forces", "movement", "community", "commune", "revolutionaries", "supporters", "assembly", "coalition", "bureau", "family", "committee", "city"]),
                yr = na(["theory", "hypothesis", "religion"]))
            }
            function Dz() {
                return Fz(),
                br
            }
            function Lz() {
                return Fz(),
                gr
            }
            function Bz() {
                return Fz(),
                kr
            }
            function Nz(t, n, i) {
                if (Fz(),
                _u(i, GT()) || _u(i, AT()) || _u(i, RT()) || _u(i, QT()) || _u(i, PT()))
                    return NT();
                var e = Lo(sa(ua(t) ? t : Zr())).toLowerCase()
                  , r = aa("\\.|, |\\(|\\)|\\[|\\]").qj(e, "")
                  , o = aa("\\s+").tj(r, 0);
                if ("es" === n) {
                    if (Lz().t(o.i(0)))
                        return NT();
                    var u = Hl(e, 2);
                    if (1 === o.f() && Bz().t(u))
                        return FT()
                } else {
                    var s;
                    if ("en" === n) {
                        var a;
                        t: {
                            for (var l = Dz(), h = 0, _ = l.length; h < _; ) {
                                var c = l[h];
                                if (h = h + 1 | 0,
                                c === n) {
                                    a = !0;
                                    break t
                                }
                            }
                            a = !1
                        }
                        s = !a
                    } else
                        s = !1;
                    if (s) {
                        var f, d, p, v;
                        t: if (Qu(o, vs) && o.h())
                            f = !1;
                        else {
                            for (var y = o.j(); y.l(); ) {
                                var w = y.k();
                                if ("n" === w || "noun" === w) {
                                    f = !0;
                                    break t
                                }
                            }
                            f = !1
                        }
                        if (f)
                            return NT();
                        t: if (Qu(o, vs) && o.h())
                            d = !1;
                        else {
                            for (var b = o.j(); b.l(); ) {
                                var g = b.k();
                                if ("adj" === g || "adjective" === g) {
                                    d = !0;
                                    break t
                                }
                            }
                            d = !1
                        }
                        if (d)
                            return WT();
                        t: if (Qu(o, vs) && o.h())
                            p = !1;
                        else {
                            for (var k = o.j(); k.l(); ) {
                                var $ = k.k();
                                if ("v" === $ || "verb" === $) {
                                    p = !0;
                                    break t
                                }
                            }
                            p = !1
                        }
                        if (p)
                            return FT();
                        t: if (Qu(o, vs) && o.h())
                            v = !1;
                        else {
                            for (var m = o.j(); m.l(); ) {
                                var j = m.k();
                                if ("adv" === j || "adverb" === j) {
                                    v = !0;
                                    break t
                                }
                            }
                            v = !1
                        }
                        if (v)
                            return UT()
                    }
                }
                return null
            }
            function Fz() {
                $r || ($r = !0,
                br = ["chem", "math", "photo", "??"],
                gr = lo(["el", "la", "un", "una"]),
                kr = lo(["ar", "er", "ir"]))
            }
            function Wz() {
                return TT(),
                kT(),
                mr.p2()
            }
            function Uz() {
                return TT(),
                $T(),
                jr.p2()
            }
            function Vz() {
                return TT(),
                mT(),
                qr.p2()
            }
            function Hz() {
                return TT(),
                jT(),
                Cr.p2()
            }
            function Yz() {
                return TT(),
                qT(),
                xr.p2()
            }
            function Kz(t) {
                return CT(),
                t.a3k_1.p2()
            }
            function Zz(t) {
                return xT(),
                t.b3k_1.p2()
            }
            function Xz(t) {
                return ST(),
                t.c3k_1.p2()
            }
            function Jz(t) {
                return zT(),
                t.d3k_1.p2()
            }
            function tT(t, n) {
                return Wz().qj(t, "")
            }
            function nT(t, n) {
                var i, e = Yl(t);
                return null == (i = null == (null == e ? null : new ca(e)) ? null : Kl(e)) || i
            }
            function iT(t, n, i, e) {
                var r;
                t: {
                    var o = Ls(t, e);
                    if (Qu(o, vs) && o.h())
                        r = !1;
                    else {
                        for (var u = o.j(); u.l(); ) {
                            var s = u.k();
                            if (i.t(s)) {
                                r = !0;
                                break t
                            }
                        }
                        r = !1
                    }
                }
                return r
            }
            function eT(t, n, i, e, r, o) {
                return 0 != (4 & r) && (e = 6),
                iT(t, n, i, e)
            }
            function rT(t, n) {
                var i = Zl(n);
                if (null == i)
                    return !1;
                var e, r, o = i;
                500 <= o && o <= 2050 ? (r = Xl(n),
                e = o === (null == r ? null : la(r))) : e = !1;
                return e
            }
            function oT(t, n) {
                var i;
                t: {
                    var e = ml(n, ["-"], !1, 0, 6, null);
                    if (Qu(e, vs) && e.h())
                        i = !0;
                    else {
                        for (var r = e.j(); r.l(); )
                            if (!rT(t, r.k())) {
                                i = !1;
                                break t
                            }
                        i = !0
                    }
                }
                return i
            }
            function uT(t, n) {
                var i = Zl(n);
                return null != i && i >= 0
            }
            function sT(t, n) {
                var i;
                t: {
                    var e = ml(n, ["-"], !1, 0, 6, null);
                    if (Qu(e, vs) && e.h())
                        i = !0;
                    else {
                        for (var r = e.j(); r.l(); )
                            if (!uT(t, r.k())) {
                                i = !1;
                                break t
                            }
                        i = !0
                    }
                }
                return i
            }
            function aT(t, n) {
                var i;
                t: {
                    var e = Rz();
                    if (Qu(e, vs) && e.h())
                        i = !1;
                    else {
                        for (var r = e.j(); r.l(); ) {
                            var o = r.k()
                              , u = Zl(Jl(n, o))
                              , s = th(0, 31);
                            if (null != u && s.ha(u)) {
                                i = !0;
                                break t
                            }
                        }
                        i = !1
                    }
                }
                return i
            }
            function lT(t) {
                return ih("npTokens", Qs, !1, (function() {
                    return nh()
                }
                )),
                t.p2()
            }
            function hT(t) {
                return function() {
                    return t.w3j_1.toLowerCase()
                }
            }
            function _T(t) {
                return function() {
                    var n = Kz(t);
                    return Uz().tj(n, 9)
                }
            }
            function cT(t) {
                return function() {
                    return t.y3j_1.toLowerCase()
                }
            }
            function fT(t) {
                return function() {
                    var n = Xz(t);
                    return Uz().tj(n, 9)
                }
            }
            function dT(t, n) {
                return function() {
                    for (var i = Ju(Xu(t, 10)), e = t.j(); e.l(); ) {
                        var r;
                        r = tT(e.k(), n),
                        i.a(r)
                    }
                    return i
                }
            }
            function pT(t, n, i, e) {
                this.w3j_1 = t,
                this.x3j_1 = n,
                this.y3j_1 = i,
                this.z3j_1 = e,
                this.a3k_1 = Rs(hT(this)),
                this.b3k_1 = Rs(_T(this)),
                this.c3k_1 = Rs(cT(this)),
                this.d3k_1 = Rs(fT(this))
            }
            function vT() {
                return TT(),
                aa("\\.|,")
            }
            function yT() {
                return TT(),
                aa("[\\s,]+")
            }
            function wT() {
                return TT(),
                aa("\\s+")
            }
            function bT() {
                return TT(),
                aa("\\s+")
            }
            function gT() {
                return TT(),
                aa("[\\s, .]+")
            }
            function kT() {
                return Fu("stripPunctuationRegex", 0, Qs, (function() {
                    return Wz()
                }
                ), null)
            }
            function $T() {
                return Fu("anyTokenMatchesRegex", 0, Qs, (function() {
                    return Uz()
                }
                ), null)
            }
            function mT() {
                return Fu("isApparentDateRegex", 0, Qs, (function() {
                    return Vz()
                }
                ), null)
            }
            function jT() {
                return Fu("textIsApparentBeliefSystemRegex", 0, Qs, (function() {
                    return Hz()
                }
                ), null)
            }
            function qT() {
                return Fu("isApparentCourtCaseRegex", 0, Qs, (function() {
                    return Yz()
                }
                ), null)
            }
            function CT() {
                return Fu("textLowercase", 1, Nu, (function(t) {
                    return Kz(t)
                }
                ), null)
            }
            function xT() {
                return Fu("textTokens", 1, Nu, (function(t) {
                    return Zz(t)
                }
                ), null)
            }
            function ST() {
                return Fu("oppositeTextLowercase", 1, Nu, (function(t) {
                    return Xz(t)
                }
                ), null)
            }
            function zT() {
                return Fu("oppositeTextTokens", 1, Nu, (function(t) {
                    return Jz(t)
                }
                ), null)
            }
            function TT() {
                Sr || (Sr = !0,
                mr = Rs(vT),
                jr = Rs(yT),
                qr = Rs(wT),
                Cr = Rs(bT),
                xr = Rs(gT))
            }
            function MT() {
                if (Qr)
                    return to();
                Qr = !0,
                zr = new IT("EVENT",0,"event"),
                Tr = new IT("DATE",1,"date"),
                Mr = new IT("NUMBER",2,"number"),
                Ir = new IT("DOCUMENT",3,"document"),
                Ar = new IT("COURT_CASE",4,"court_case"),
                Or = new IT("NAME",5,"name"),
                Er = new IT("ORGANIZATION",6,"organization"),
                Rr = new IT("BELIEF_SYSTEM",7,"belief_system")
            }
            function IT(t, n, i) {
                no.call(this, t, n),
                this.t3k_1 = i
            }
            function AT() {
                return MT(),
                zr
            }
            function OT() {
                return MT(),
                Tr
            }
            function ET() {
                return MT(),
                Mr
            }
            function RT() {
                return MT(),
                Ir
            }
            function QT() {
                return MT(),
                Ar
            }
            function GT() {
                return MT(),
                Or
            }
            function PT() {
                return MT(),
                Er
            }
            function DT() {
                return MT(),
                Rr
            }
            function LT() {
                if (Br)
                    return to();
                Br = !0,
                Gr = new BT("NOUN",0,"noun"),
                Pr = new BT("VERB",1,"verb"),
                Dr = new BT("ADJECTIVE",2,"adjective"),
                Lr = new BT("ADVERB",3,"adverb")
            }
            function BT(t, n, i) {
                no.call(this, t, n),
                this.w3k_1 = i
            }
            function NT() {
                return LT(),
                Gr
            }
            function FT() {
                return LT(),
                Pr
            }
            function WT() {
                return LT(),
                Dr
            }
            function UT() {
                return LT(),
                Lr
            }
            function VT(t) {
                return lo([t.sj().d1_1, t.sj().e1_1 + 1 | 0])
            }
            function HT(t, n, i, e, r) {
                return 0 != (2 & i) && (n = !1),
                XT.call(r, t, n),
                r
            }
            function YT(t, n, i, e) {
                return HT(t, n, i, e, Object.create(XT.prototype))
            }
            function KT() {
                Nr = this;
                var t, n = this, i = oh();
                t = uh("(?:(?:\\n|^|\\b)(?:the answer is|correct answer|correct response)[\\.\\):\\-]?|(?:\\n|^|\\b)(?:answer|ans)[\\.\\):\\-|\\n|$])", i),
                n.x3k_1 = t;
                var e, r = this, o = "(?::$|\\?$|^answer$|^ans$|correct answer|following choices|following options|(?:select|choose|which of|write the|type the|the following)\\b.*:$|which of the following|all of the following except|circle items that|^answer is|(?:select|choose) all |which\\s\\w+\\s(?:indicates|statement))", u = oh();
                e = uh(o, u),
                r.y3k_1 = e;
                var s, a = this;
                s = aa("\\s*(?:,|and|\\n)\\s*"),
                a.z3k_1 = s;
                var l, h = this, _ = oh();
                l = uh("explanation:", _),
                h.a3l_1 = l;
                var c, f = this, d = oh();
                c = uh("\\bcorrect\\b", d),
                f.b3l_1 = c;
                var p, v = this;
                p = aa("[^\\w]"),
                v.c3l_1 = p;
                var y, w = this;
                y = aa("\\s+"),
                w.d3l_1 = y,
                this.e3l_1 = lo([lo(["1", "2", "3", "4", "5", "6"]), lo(["a", "b", "c", "d", "e", "f"]), lo(["a", "c", "b", "d"]), lo(["i", "ii", "iii", "iv", "v", "vi"])])
            }
            function ZT() {
                return null == Nr && new KT,
                Nr
            }
            function XT(t, n) {
                ZT(),
                this.h3l_1 = t,
                this.i3l_1 = n
            }
            function JT() {
                return iM(),
                Fr
            }
            function tM() {
                return iM(),
                Wr
            }
            function nM(t, n, i) {
                iM();
                for (var e = i.j(); e.l(); ) {
                    var r = e.k().v3l(t, n);
                    if (null != r)
                        return r
                }
                return null
            }
            function iM() {
                if (Ur)
                    ;
                else {
                    Ur = !0;
                    var t, n = YT(aa("(?:\\n|^|\\b)(\\(?[a-fA-F]\\.)"), !1, 2, null), i = YT(aa("(?:\\n|^|\\b)(\\(?[a-fA-F]\\))"), !1, 2, null), e = YT(aa("(?:\\n|^|\\b)(\\(?[a-fA-F]:)"), !1, 2, null), r = YT(aa("(?:\\n|^)(\\(?[a-fA-F])\\b"), !1, 2, null), o = YT(aa("(?:\\n|^|\\b)(\\(?[1-6]\\.)"), !1, 2, null), u = YT(aa("(?:\\n|^|\\b)(\\(?[1-6]\\))"), !1, 2, null), s = YT(aa("(?:\\n|^|\\b)(\\(?[1-6]:)"), !1, 2, null), a = YT(aa("(?:\\n|^)(\\(?[1-6])\\b'"), !1, 2, null), l = YT(aa("(?:\\n|^|\\b)(\\(?[iv]{1,3}\\.)"), !1, 2, null), h = YT(aa("(?:\\n|^|\\b)(\\(?[iv]{1,3}\\))"), !1, 2, null), _ = YT(aa("(?:\\n|^|\\b)(\\(?[iv]{1,3}:)"), !1, 2, null), c = YT(aa("(?:\\n|^)(\\(?[iv]{1,3})\\b"), !1, 2, null);
                    t = aa("(\\n[-\\*]?)"),
                    Fr = lo([n, i, e, r, o, u, s, a, l, h, _, c, new XT(t,!0)]),
                    Wr = Zu(new _M),
                    ls(JT(), tM())
                }
            }
            function eM(t, n, i, e, r, o, u, s) {
                return 0 != (4 & o) && (i = null),
                0 != (8 & o) && (e = null),
                0 != (16 & o) && (r = !1),
                oM.call(s, t, n, i, e, r),
                s
            }
            function rM(t, n, i, e, r, o, u) {
                return eM(t, n, i, e, r, o, u, Object.create(oM.prototype))
            }
            function oM(t, n, i, e, r) {
                this.t2w_1 = t,
                this.u2w_1 = n,
                this.v2w_1 = i,
                this.w2w_1 = e,
                this.x2w_1 = r
            }
            function uM(t, n, i, e, r, o, u) {
                return 0 != (4 & r) && (i = !1),
                0 != (8 & r) && (e = null),
                aM.call(u, t, n, i, e),
                u
            }
            function sM(t, n, i, e, r, o) {
                return uM(t, n, i, e, r, o, Object.create(aM.prototype))
            }
            function aM(t, n, i, e) {
                this.b3i_1 = t,
                this.c3i_1 = n,
                this.d3i_1 = i,
                this.e3i_1 = e
            }
            function lM(t, n, i) {
                var e = FC(t, i);
                return new bh(Zu(wh(e, n, null, null, null, 16, null)))
            }
            function hM(t) {
                for (var n = t.u2w_1, i = Hu(), e = n.j(); e.l(); ) {
                    var r = e.k();
                    !r.d3i_1 && i.a(r)
                }
                return i
            }
            function _M() {
                this.y3l_1 = "true",
                this.z3l_1 = "false",
                this.a3m_1 = "t",
                this.b3m_1 = "f",
                this.c3m_1 = "yes",
                this.d3m_1 = "no",
                this.e3m_1 = lo(["t or f", "t/f", "yes or no", "yes/no", "?"]),
                this.f3m_1 = lo(["what", "which", "how", "f o v", "v o f", "v/f", "f/v", "why", "explain"]);
                var t, n = this;
                t = aa("\\w+"),
                n.g3m_1 = t;
                var i, e = this;
                i = aa("\\s*($|\\n|\\.|,|;|:|\\s+\\(|-)"),
                e.h3m_1 = i;
                var r, o = this;
                r = aa("(^(no|t|f)[-|\\.]?\\s+\\w+(\\n|$))|(^(no|t|f)[-|\\.]\\w+)"),
                o.i3m_1 = r;
                var u, s = this;
                u = aa("^(t|f)\\s?\\n"),
                s.j3m_1 = u
            }
            function cM() {
                return pM(),
                Vr
            }
            function fM() {
                return pM(),
                Hr
            }
            function dM(t) {
                pM();
                var n, i = cM();
                n = gh(t).toLowerCase();
                var e = i.qj(n, "")
                  , r = Lo(sa(ua(e) ? e : Zr()));
                return r = fM().qj(r, " ")
            }
            function pM() {
                var t, n;
                Yr || (Yr = !0,
                t = aa("[.()\\]:*]"),
                Vr = t,
                n = aa("\\s+"),
                Hr = n)
            }
            function vM(t, n) {
                for (var i = wM(t, n), e = bM(t), r = i.e3(), o = Hu(), u = r.j(); u.l(); ) {
                    var s = u.k()
                      , a = o;
                    o = !0 === i.d3(s) ? Wu(es(a, hl(e, s))) : a
                }
                return o
            }
            function yM(t) {
                return new kh(0).wy(t.slice())
            }
            function wM(t, n) {
                for (var i = bM(t), e = i.e3(), r = ul(), o = e.j(); o.l(); ) {
                    var u = o.k()
                      , s = r
                      , a = n.ha(hl(i, u));
                    s.d5(u, a),
                    r = s
                }
                return r
            }
            function bM(t) {
                return sl(t.h2l_1)
            }
            function gM(t, n) {
                return $h(ty(), t, n)
            }
            function kM(t, n) {
                return mh(ty(), t, n)
            }
            function $M(t) {
                return gM(Ch(jh().f1o(), qh().f1o()), t)
            }
            function mM(t) {
                var n = t.assistantMode || (t.assistantMode = {});
                (n.exceptions || (n.exceptions = {})).UnknownAnswerException = T_
            }
            return Jr(Ph, "QuestionTypeInfo", Xr, void 0, void 0, void 0, void 0, []),
            Jr(Lh, "QuestionCategory", Xr, no, void 0, void 0, void 0, []),
            Jr(Nh, "DifficultyLevel", Xr, no, void 0, void 0, void 0, []),
            Jr(Wh, "CardSideRole", Xr, no, void 0, void 0, void 0, []),
            Jr(w_, "StudySetting", Xr, no, void 0, void 0, void 0, []),
            Jr(T_, "UnknownAnswerException", Xr, Error, void 0, void 0, void 0, []),
            Jr(I_, "Serializer", ou, ru, void 0, void 0, void 0, []),
            Jr(O_, "Companion", ou, void 0, [au], void 0, void 0, []),
            Jr(G_, "ContinueStudyingExtensionTaskVariant", Xr, no, void 0, void 0, {
                0: E_
            }, []),
            Jr(P_, "ContinueStudyingFromTasksExperiment", ou, void 0, void 0, void 0, void 0, []),
            Jr(U_, "Serializer", ou, ru, void 0, void 0, void 0, []),
            Jr(H_, "Companion", ou, void 0, [au], void 0, void 0, []),
            Jr(X_, "FlexibleLearnVariant", Xr, no, void 0, void 0, {
                0: Y_
            }, []),
            Jr(J_, "FlexibleLearnExperiment", ou, void 0, void 0, void 0, void 0, []),
            Jr(rc, "Serializer", ou, ru, void 0, void 0, void 0, []),
            Jr(uc, "Companion", ou, void 0, [au], void 0, void 0, []),
            Jr(hc, "GranularStudyDirectionVariant", Xr, no, void 0, void 0, {
                0: sc
            }, []),
            Jr(_c, "GranularStudyDirectionExperiment", ou, void 0, void 0, void 0, void 0, []),
            Jr(wc, "ExperimentConfigurationProvider", ou, void 0, void 0, void 0, void 0, []),
            Jr(kc, "LegacyExperimentManager", Xr, void 0, [hu], void 0, void 0, []),
            Jr(mc, "Serializer", ou, ru, void 0, void 0, void 0, []),
            Jr(qc, "Companion", ou, void 0, [au], void 0, void 0, []),
            Jr(zc, "RandomizeInitialTermOrderVariant", Xr, no, void 0, void 0, {
                0: Cc
            }, []),
            Jr(Tc, "RandomizeInitialTermOrderExperiment", ou, void 0, void 0, void 0, void 0, []),
            Jr(Rc, "Serializer", ou, ru, void 0, void 0, void 0, []),
            Jr(Gc, "Companion", ou, void 0, [au], void 0, void 0, []),
            Jr(Bc, "SimpleHintsVariant", Xr, no, void 0, void 0, {
                0: Pc
            }, []),
            Jr(Nc, "SimpleHintsExperiment", ou, void 0, void 0, void 0, void 0, []),
            Jr(Hc, "Serializer", ou, ru, void 0, void 0, void 0, []),
            Jr(Kc, "Companion", ou, void 0, [au], void 0, void 0, []),
            Jr(tf, "StudyDirectionDefaultsVariant", Xr, no, void 0, void 0, {
                0: Zc
            }, []),
            Jr(nf, "StudyDirectionDefaultsExperiment", ou, void 0, void 0, void 0, void 0, []),
            Jr(uf, "Companion", ou, void 0, [au], void 0, void 0, []),
            Jr(af, "GradedAnswerMetadata", fu, void 0, void 0, void 0, {
                0: sf
            }, []),
            Jr(_f, "Companion", ou, void 0, void 0, void 0, void 0, []),
            Jr(ff, "$serializer", ou, void 0, [wu], void 0, void 0, []),
            Jr(yf, "LocalGradedAnswerMetadata", Xr, void 0, [af], void 0, {
                0: df
            }, []),
            Jr(gf, "Companion", ou, void 0, void 0, void 0, void 0, []),
            Jr($f, "$serializer", ou, void 0, [wu], void 0, void 0, []),
            Jr(Cf, "SmartGradedAnswerMetadata", Xr, void 0, [af], void 0, {
                0: mf
            }, []),
            Jr(xf, "Companion", ou, void 0, void 0, void 0, void 0, []),
            Jr(zf, "$serializer", ou, void 0, [wu], void 0, void 0, []),
            Jr(Af, "MatchingGameAnswerPair", Xr, void 0, void 0, void 0, {
                0: Tf
            }, []),
            Jr(Of, "MatchingGameGrader", Xr, void 0, void 0, void 0, void 0, [2]),
            Jr(Ef, "MatchQuestionPair", fu, void 0, void 0, void 0, void 0, []),
            Jr(Gf, "Companion", ou, void 0, void 0, void 0, void 0, []),
            Jr(Df, "$serializer", ou, void 0, [wu], void 0, void 0, []),
            Jr(Ff, "ExpectedMatchQuestionPair", Xr, void 0, [Ef], void 0, {
                0: Lf
            }, []),
            Jr(Vf, "Companion", ou, void 0, void 0, void 0, void 0, []),
            Jr(Yf, "$serializer", ou, void 0, [wu], void 0, void 0, []),
            Jr(Jf, "UserMatchQuestionPair", Xr, void 0, [Ef], void 0, {
                0: Kf
            }, []),
            Jr(td, "MatchingQuestionGrader", Xr, void 0, void 0, void 0, void 0, [2]),
            Jr(nd, "$gradeCOROUTINE$0", Xr, Iu, void 0, void 0, void 0, []),
            Jr(id, "MatchingQuestionAnswerGrader", Xr, void 0, void 0, void 0, void 0, [2]),
            Jr(ed, "MultipleChoiceGrader", Xr, void 0, void 0, void 0, void 0, [2]),
            Jr(sd, "QuestionGraderSettings", Xr, void 0, void 0, void 0, void 0, []),
            Jr(rd, "Written", Xr, sd, void 0, void 0, void 0, []),
            Jr(od, "None", ou, sd, void 0, void 0, void 0, []),
            Jr(ad, "RevealSelfAssessmentGrader", Xr, void 0, void 0, void 0, void 0, [2]),
            Jr(ld, "SmarterGraderResult", Xr, void 0, void 0, void 0, void 0, []),
            Jr(hd, "SmarterGrader", fu, void 0, void 0, void 0, void 0, [3]),
            Jr(fd, "SmarterGraderImpl$attemptSmartGrading$slambda", Xr, Iu, void 0, void 0, void 0, [1]),
            Jr(pd, "$gradeAnswerCOROUTINE$1", Xr, Iu, void 0, void 0, void 0, []),
            Jr(vd, "$attemptSmartGradingCOROUTINE$2", Xr, Iu, void 0, void 0, void 0, []),
            Jr(yd, "SmarterGraderImpl", Xr, void 0, [hd], void 0, void 0, [3, 5]),
            Jr(wd, "TrueFalseGrader", Xr, void 0, void 0, void 0, void 0, [2]),
            Jr(kd, "$gradeCOROUTINE$3", Xr, Iu, void 0, void 0, void 0, []),
            Jr($d, "WrittenGrader", Xr, void 0, void 0, void 0, void 0, [2]),
            Jr(jd, "Companion", ou, void 0, void 0, void 0, void 0, []),
            Jr(Od, "PriorityScore", Xr, void 0, void 0, void 0, void 0, []),
            Jr(Ed, "ScoredCardSideType", Xr, void 0, void 0, void 0, void 0, []),
            Jr(Rd, "sam$kotlin_Comparator$0", Xr, void 0, [ss], void 0, void 0, []),
            Jr(Pd, "PostCompletionStudy", Xr, void 0, void 0, void 0, void 0, []),
            Jr(Ld, "QuestionRankingMethod", Xr, no, void 0, void 0, void 0, []),
            Jr(Wd, "Companion", ou, void 0, void 0, void 0, void 0, []),
            Jr(Vd, "CardSideProgressInfo", Xr, void 0, void 0, void 0, void 0, []),
            Jr(bp, "QuestionTypeApplicability", Xr, void 0, void 0, void 0, void 0, []),
            Jr(gv, "QuestionGenerator", Xr, void 0, void 0, void 0, void 0, []),
            Jr(Vp, "AlternativeQuestionGenerator", Xr, gv, void 0, void 0, void 0, []),
            Jr(nv, "OptionsWithAnswer", Xr, void 0, void 0, void 0, void 0, []),
            Jr(iv, "PairOptionAndSource", Xr, void 0, void 0, void 0, void 0, []),
            Jr(ev, "CardMultipleChoiceQuestionGenerator", Xr, gv, void 0, void 0, void 0, []),
            Jr(uv, "sam$kotlin_Comparator$0", Xr, void 0, [ss], void 0, void 0, []),
            Jr(av, "CustomMultipleChoiceQuestionGenerator", Xr, gv, void 0, void 0, void 0, []),
            Jr(lv, "FillInTheBlankQuestionGenerator", Xr, gv, void 0, void 0, void 0, []),
            Jr(hv, "FillInTheBlankQuestionSegmentsAndExpectedAnswersMap", Xr, void 0, void 0, void 0, void 0, []),
            Jr(cv, "sam$kotlin_Comparator$0", Xr, void 0, [ss], void 0, void 0, []),
            Jr(dv, "FlashcardQuestionGenerator", Xr, gv, void 0, void 0, void 0, []),
            Jr(bv, "MixedOptionMatchingQuestionGenerator", Xr, gv, void 0, void 0, void 0, []),
            Jr(mv, "SeparatedOptionMatchingQuestionGenerator", Xr, gv, void 0, void 0, void 0, []),
            Jr(qv, "SpellingQuestionGenerator", Xr, gv, void 0, void 0, void 0, []),
            Jr(xv, "TrueFalseQuestionGenerator", Xr, gv, void 0, void 0, void 0, []),
            Jr(Tv, "WrittenQuestionGenerator", Xr, gv, void 0, void 0, void 0, []),
            Jr(Av, "Serializer", ou, ru, void 0, void 0, void 0, []),
            Jr(Ev, "Companion", ou, void 0, [au], void 0, void 0, []),
            Jr(Pv, "StudyMode", Xr, no, void 0, void 0, {
                0: Rv
            }, []),
            Jr(Wv, "IStudyEngine", fu, void 0, void 0, void 0, void 0, [1]),
            Jr(Uv, "ITaskGenerator", fu, void 0, void 0, void 0, void 0, [2]),
            Jr(Vv, "Progress", fu, void 0, void 0, void 0, void 0, []),
            Jr(Kv, "AnnotatedStudiableItem", Xr, void 0, void 0, void 0, void 0, []),
            Jr(Yv, "AnnotatedCard", Xr, Kv, void 0, void 0, void 0, []),
            Jr(Zv, "AnnotatedCardSide", Xr, void 0, void 0, void 0, void 0, []),
            Jr(Xv, "AnnotatedCardSideDistractor", Xr, void 0, void 0, void 0, void 0, []),
            Jr(iy, "Input", Xr, void 0, void 0, void 0, void 0, []),
            Jr(ry, "DataCache", ou, void 0, void 0, void 0, void 0, []),
            Jr(ly, "AssistantInputShim", ou, void 0, void 0, void 0, void 0, []),
            Jr(_y, "Companion", ou, void 0, void 0, void 0, void 0, []),
            Jr(fy, "$serializer", ou, void 0, [wu], void 0, void 0, []),
            Jr(yy, "AdsSettings", Xr, void 0, void 0, void 0, {
                0: dy
            }, []),
            Jr(wy, "Companion", ou, void 0, void 0, void 0, void 0, []),
            Jr(gy, "$serializer", ou, void 0, [wu], void 0, void 0, []),
            Jr(jy, "AdsState", Xr, void 0, void 0, void 0, {
                0: ky
            }, []),
            Jr(qy, "Companion", ou, void 0, void 0, void 0, void 0, []),
            Jr(xy, "$serializer", ou, void 0, [wu], void 0, void 0, []),
            Jr(My, "AssistantGradingSettings", Xr, void 0, void 0, void 0, {
                0: Sy
            }, []),
            Jr(Iy, "MasteryBuckets", fu, void 0, void 0, void 0, void 0, []),
            Jr(Ay, "Companion", ou, void 0, void 0, void 0, void 0, []),
            Jr(Ey, "$serializer", ou, void 0, [wu], void 0, void 0, []),
            Jr(Py, "WebWriteMasteryBuckets", Xr, void 0, [Iy], void 0, {
                0: Ry
            }, []),
            Jr(Dy, "Companion", ou, void 0, void 0, void 0, void 0, []),
            Jr(By, "$serializer", ou, void 0, [wu], void 0, void 0, []),
            Jr(Uy, "AndroidWriteMasteryBuckets", Xr, void 0, [Iy], void 0, {
                0: Ny
            }, []),
            Jr(Vy, "Companion", ou, void 0, void 0, void 0, void 0, []),
            Jr(Yy, "$serializer", ou, void 0, [wu], void 0, void 0, []),
            Jr(Jy, "IosWriteMasteryBuckets", Xr, void 0, [Iy], void 0, {
                0: Ky
            }, []),
            Jr(tw, "Companion", ou, void 0, void 0, void 0, void 0, []),
            Jr(iw, "$serializer", ou, void 0, [wu], void 0, void 0, []),
            Jr(uw, "SpellMasteryBuckets", Xr, void 0, [Iy], void 0, {
                0: ew
            }, []),
            Jr(sw, "Companion", ou, void 0, void 0, void 0, void 0, []),
            Jr(lw, "$serializer", ou, void 0, [wu], void 0, void 0, []),
            Jr(fw, "FlashcardsMasteryBuckets", Xr, void 0, [Iy], void 0, {
                0: hw
            }, []),
            Jr(vw, "Companion", ou, void 0, void 0, void 0, void 0, []),
            Jr(ww, "$serializer", ou, void 0, [wu], void 0, void 0, []),
            Jr($w, "QuestionSource", Xr, void 0, void 0, void 0, {
                0: bw
            }, []),
            Jr(jw, "Companion", ou, void 0, void 0, void 0, void 0, []),
            Jr(Cw, "$serializer", ou, void 0, [wu], void 0, void 0, []),
            Jr(Tw, "TaskRoundProgress", Xr, void 0, [Vv], void 0, {
                0: xw
            }, []),
            Jr(Mw, "Companion", ou, void 0, void 0, void 0, void 0, []),
            Jr(Aw, "$serializer", ou, void 0, [wu], void 0, void 0, []),
            Jr(Qw, "RoundProgress", Xr, void 0, void 0, void 0, {
                0: Ow
            }, []),
            Jr(Gw, "Companion", ou, void 0, void 0, void 0, void 0, []),
            Jr(Dw, "$serializer", ou, void 0, [wu], void 0, void 0, []),
            Jr(Fw, "StudiableData", Xr, void 0, void 0, void 0, {
                0: Lw
            }, []),
            Jr(Ww, "Companion", ou, void 0, void 0, void 0, void 0, []),
            Jr(Vw, "$serializer", ou, void 0, [wu], void 0, void 0, []),
            Jr(Zw, "StudyEngineSettings", Xr, void 0, void 0, void 0, {
                0: Hw
            }, []),
            Jr(Xw, "$serializer", ou, void 0, [wu], void 0, void 0, []),
            Jr(ib, "StudyLearnSettings", Xr, void 0, void 0, void 0, {
                0: Jw
            }, []),
            Jr(ob, "Companion", ou, void 0, void 0, void 0, void 0, []),
            Jr(sb, "$serializer", ou, void 0, [wu], void 0, void 0, []),
            Jr(_b, "NSidedCardSettings", Xr, void 0, void 0, void 0, {
                0: ab
            }, []),
            Jr(cb, "Companion", ou, void 0, void 0, void 0, void 0, []),
            Jr(db, "$serializer", ou, void 0, [wu], void 0, void 0, []),
            Jr(wb, "StudySettings", Xr, void 0, void 0, void 0, {
                0: pb
            }, []),
            Jr(bb, "Companion", ou, void 0, [au], void 0, void 0, []),
            Jr(bg, "StudyStep", fu, void 0, void 0, void 0, void 0, []),
            Jr(kb, "Question", fu, void 0, [bg], void 0, {
                0: gb
            }, []),
            Jr($b, "Companion", ou, void 0, void 0, void 0, void 0, []),
            Jr(jb, "$serializer", ou, void 0, [wu], void 0, void 0, []),
            Jr(Sb, "SeparatedOptionMatchingQuestion", Xr, void 0, [kb], void 0, {
                0: qb
            }, []),
            Jr(zb, "Companion", ou, void 0, void 0, void 0, void 0, []),
            Jr(Mb, "$serializer", ou, void 0, [wu], void 0, void 0, []),
            Jr(Eb, "MixedOptionMatchingQuestion", Xr, void 0, [kb], void 0, {
                0: Ib
            }, []),
            Jr(Rb, "Companion", ou, void 0, void 0, void 0, void 0, []),
            Jr(Gb, "$serializer", ou, void 0, [wu], void 0, void 0, []),
            Jr(Bb, "MultipleChoiceQuestion", Xr, void 0, [kb], void 0, {
                0: Pb
            }, []),
            Jr(Nb, "Companion", ou, void 0, void 0, void 0, void 0, []),
            Jr(Wb, "$serializer", ou, void 0, [wu], void 0, void 0, []),
            Jr(Yb, "RevealSelfAssessmentQuestion", Xr, void 0, [kb], void 0, {
                0: Ub
            }, []),
            Jr(Kb, "Companion", ou, void 0, void 0, void 0, void 0, []),
            Jr(Xb, "$serializer", ou, void 0, [wu], void 0, void 0, []),
            Jr(ig, "TrueFalseQuestion", Xr, void 0, [kb], void 0, {
                0: Jb
            }, []),
            Jr(eg, "Companion", ou, void 0, void 0, void 0, void 0, []),
            Jr(og, "$serializer", ou, void 0, [wu], void 0, void 0, []),
            Jr(lg, "WrittenQuestion", Xr, void 0, [kb], void 0, {
                0: ug
            }, []),
            Jr(cg, "Companion", ou, void 0, void 0, void 0, void 0, []),
            Jr(dg, "$serializer", ou, void 0, [wu], void 0, void 0, []),
            Jr(wg, "FillInTheBlankQuestion", Xr, void 0, [kb], void 0, {
                0: pg
            }, []),
            Jr($g, "Companion", ou, void 0, void 0, void 0, void 0, []),
            Jr(jg, "$serializer", ou, void 0, [wu], void 0, void 0, []),
            Jr(Sg, "Checkpoint", Xr, void 0, [bg], void 0, {
                0: qg
            }, []),
            Jr(zg, "Companion", ou, void 0, void 0, void 0, void 0, []),
            Jr(Mg, "$serializer", ou, void 0, [wu], void 0, void 0, []),
            Jr(Eg, "LearnPaywall", Xr, void 0, [bg], void 0, {
                0: Ig
            }, []),
            Jr(Rg, "Companion", ou, void 0, void 0, void 0, void 0, []),
            Jr(Gg, "$serializer", ou, void 0, [wu], void 0, void 0, []),
            Jr(Bg, "SpellingQuestion", Xr, void 0, [kb], void 0, {
                0: Pg
            }, []),
            Jr(Ng, "Companion", ou, void 0, [au], void 0, void 0, []),
            Jr(Wg, "FillInTheBlankSegment", fu, void 0, void 0, void 0, {
                0: Fg
            }, []),
            Jr(Ug, "Companion", ou, void 0, void 0, void 0, void 0, []),
            Jr(Hg, "$serializer", ou, void 0, [wu], void 0, void 0, []),
            Jr(Xg, "FITBWrittenBlankSegment", Xr, void 0, [Wg], void 0, {
                0: Yg
            }, []),
            Jr(Jg, "Companion", ou, void 0, void 0, void 0, void 0, []),
            Jr(nk, "$serializer", ou, void 0, [wu], void 0, void 0, []),
            Jr(ok, "FITBTextSegment", Xr, void 0, [Wg], void 0, {
                0: ik
            }, []),
            Jr(ak, "Companion", ou, void 0, void 0, void 0, void 0, []),
            Jr(hk, "$serializer", ou, void 0, [wu], void 0, void 0, []),
            Jr(dk, "TaskWithProgress", Xr, void 0, void 0, void 0, {
                0: _k
            }, []),
            Jr(yk, "Companion", ou, void 0, void 0, void 0, void 0, []),
            Jr(bk, "$serializer", ou, void 0, [wu], void 0, void 0, []),
            Jr(mk, "Task", Xr, void 0, void 0, void 0, {
                0: gk
            }, []),
            Jr(qk, "Companion", ou, void 0, void 0, void 0, void 0, []),
            Jr(xk, "$serializer", ou, void 0, [wu], void 0, void 0, []),
            Jr(Mk, "TaskQuestionTypeProgress", Xr, void 0, [Vv], void 0, {
                0: Sk
            }, []),
            Jr(Ik, "Companion", ou, void 0, void 0, void 0, void 0, []),
            Jr(Ok, "$serializer", ou, void 0, [wu], void 0, void 0, []),
            Jr(Gk, "TaskProgress", Xr, void 0, [Vv], void 0, {
                0: Ek
            }, []),
            Jr(Pk, "TaskSequenceProgress", Xr, void 0, [Vv], void 0, void 0, []),
            Jr(Dk, "TaskQuestionTypePair", Xr, void 0, void 0, void 0, void 0, []),
            Jr(Lk, "Companion", ou, void 0, void 0, void 0, void 0, []),
            Jr(Nk, "$serializer", ou, void 0, [wu], void 0, void 0, []),
            Jr(Vk, "TotalProgress", Xr, void 0, void 0, void 0, {
                0: Fk
            }, []),
            Jr(Kk, "sam$kotlin_Comparator$0", Xr, void 0, [ss], void 0, void 0, []),
            Jr(e$, "ComputedScore", Xr, void 0, void 0, void 0, void 0, []),
            Jr(o$, "DecayConstants", Xr, void 0, void 0, void 0, void 0, []),
            Jr(s$, "ProbabilityPredictions", Xr, void 0, void 0, void 0, void 0, []),
            Jr(Q$, "Step", Xr, void 0, void 0, void 0, void 0, []),
            Jr(R$, "AssistantStep", Xr, Q$, void 0, void 0, void 0, []),
            Jr(L$, "TaskStep", Xr, Q$, void 0, void 0, void 0, []),
            Jr(W$, "StepData", Xr, void 0, void 0, void 0, void 0, []),
            Jr(F$, "TaskStepData", Xr, W$, void 0, void 0, void 0, []),
            Jr(Y$, "ITaskProgressBuckets", fu, void 0, void 0, void 0, void 0, []),
            Jr(V$, "TaskProgressBuckets", Xr, void 0, [Y$], void 0, void 0, []),
            Jr(K$, "ITaskProgressTracker", fu, void 0, void 0, void 0, void 0, []),
            Jr(H$, "TaskProgressTracker", Xr, void 0, [K$], void 0, void 0, []),
            Jr(nm, "AnnotatedTerm", Xr, void 0, void 0, void 0, void 0, []),
            Jr(im, "AnnotatedText", Xr, void 0, void 0, void 0, void 0, []),
            Jr(om, "StaticAnnotatedText", Xr, im, void 0, void 0, void 0, []),
            Jr(am, "LazyAnnotatedText", Xr, im, void 0, void 0, void 0, []),
            Jr(_m, "Answer", Xr, void 0, void 0, void 0, void 0, []),
            Jr(vm, "sam$kotlin_Comparator$0", Xr, void 0, [ss], void 0, void 0, []),
            Jr(gm, "AnswerFeatures", Xr, void 0, void 0, void 0, void 0, []),
            Jr(mm, "Companion", ou, void 0, void 0, void 0, void 0, []),
            Jr(qm, "$serializer", ou, void 0, [wu], void 0, void 0, []),
            Jr(zm, "AssistantGradingSettingsSuggestion", Xr, void 0, void 0, void 0, {
                0: Cm
            }, []),
            Jr(Am, "CardEdge", Xr, void 0, void 0, void 0, void 0, []),
            Jr(Qm, "Companion", ou, void 0, void 0, void 0, void 0, []),
            Jr(Pm, "CardEdgeId", Xr, void 0, void 0, void 0, void 0, []),
            Jr(Dm, "DiagramShape", Xr, void 0, void 0, void 0, void 0, []),
            Jr(Nm, "Companion", ou, void 0, void 0, void 0, void 0, []),
            Jr(Wm, "$serializer", ou, void 0, [wu], void 0, void 0, []),
            Jr(Ym, "GradedAnswer", Xr, void 0, void 0, void 0, {
                0: Um
            }, []),
            Jr(Xm, "Companion", ou, void 0, void 0, void 0, void 0, []),
            Jr(tj, "$serializer", ou, void 0, [wu], void 0, void 0, []),
            Jr(rj, "Feedback", Xr, void 0, void 0, void 0, {
                0: nj
            }, []),
            Jr(oj, "NormalizedOptions", Xr, void 0, void 0, void 0, void 0, []),
            Jr(sj, "QuestionConfig", Xr, void 0, void 0, void 0, void 0, []),
            Jr(hj, "CardQuestionConfig", Xr, sj, void 0, void 0, void 0, []),
            Jr(uj, "SingleCardQuestionConfig", Xr, hj, void 0, void 0, void 0, []),
            Jr(aj, "MultiCardQuestionConfig", Xr, hj, void 0, void 0, void 0, []),
            Jr(lj, "CustomMultipleChoiceQuestionConfig", Xr, sj, void 0, void 0, void 0, []),
            Jr(_j, "StudiableMetadataQuestionConfig", Xr, sj, void 0, void 0, void 0, []),
            Jr(cj, "AlternativeQuestionConfig", Xr, _j, void 0, void 0, void 0, []),
            Jr(fj, "FillInTheBlankQuestionConfig", Xr, _j, void 0, void 0, void 0, []),
            Jr(dj, "QuestionTypeStudiableItemTuple", Xr, void 0, void 0, void 0, void 0, []),
            Jr(pj, "RecommendedConfigurationItem", Xr, void 0, void 0, void 0, void 0, []),
            Jr(vj, "RecommendedConfigurationBoolean", Xr, pj, void 0, void 0, void 0, []),
            Jr(yj, "RecommendedConfigurationInt", Xr, pj, void 0, void 0, void 0, []),
            Jr(bj, "Companion", ou, void 0, void 0, void 0, void 0, []),
            Jr(kj, "ResponseType", Xr, void 0, void 0, void 0, void 0, []),
            Jr($j, "Companion", ou, void 0, void 0, void 0, void 0, []),
            Jr(jj, "$serializer", ou, void 0, [wu], void 0, void 0, []),
            Jr(Sj, "StringAnswer", Xr, kj, void 0, void 0, {
                0: qj
            }, []),
            Jr(zj, "Companion", ou, void 0, void 0, void 0, void 0, []),
            Jr(Mj, "$serializer", ou, void 0, [wu], void 0, void 0, []),
            Jr(Ej, "BooleanAnswer", Xr, kj, void 0, void 0, {
                0: Ij
            }, []),
            Jr(Rj, "Companion", ou, void 0, void 0, void 0, void 0, []),
            Jr(Gj, "$serializer", ou, void 0, [wu], void 0, void 0, []),
            Jr(Bj, "MatchingAnswer", Xr, kj, void 0, void 0, {
                0: Pj
            }, []),
            Jr(Nj, "Companion", ou, void 0, void 0, void 0, void 0, []),
            Jr(Wj, "$serializer", ou, void 0, [wu], void 0, void 0, []),
            Jr(Yj, "MatchingGameAnswer", Xr, kj, void 0, void 0, {
                0: Uj
            }, []),
            Jr(Xj, "Companion", ou, void 0, void 0, void 0, void 0, []),
            Jr(tq, "$serializer", ou, void 0, [wu], void 0, void 0, []),
            Jr(bq, "SingleOrMultiIndexAnswer", Xr, kj, void 0, void 0, void 0, []),
            Jr(rq, "OptionIndexAnswer", Xr, bq, void 0, void 0, {
                0: nq
            }, []),
            Jr(oq, "Companion", ou, void 0, void 0, void 0, void 0, []),
            Jr(sq, "$serializer", ou, void 0, [wu], void 0, void 0, []),
            Jr(_q, "OptionIndicesAnswer", Xr, bq, void 0, void 0, {
                0: aq
            }, []),
            Jr(cq, "Companion", ou, void 0, void 0, void 0, void 0, []),
            Jr(dq, "$serializer", ou, void 0, [wu], void 0, void 0, []),
            Jr(wq, "RevealSelfAssessmentAnswer", Xr, kj, void 0, void 0, {
                0: pq
            }, []),
            Jr(gq, "RoundOutline", Xr, void 0, void 0, void 0, void 0, []),
            Jr(kq, "Companion", ou, void 0, void 0, void 0, void 0, []),
            Jr(mq, "$serializer", ou, void 0, [wu], void 0, void 0, []),
            Jr(xq, "RoundResultItem", Xr, void 0, void 0, void 0, {
                0: jq
            }, []),
            Jr(Tq, "SavedState", Xr, void 0, void 0, void 0, void 0, []),
            Jr(Mq, "ScoredCardSide", Xr, void 0, [bl], void 0, void 0, []),
            Jr(Aq, "Serializer", ou, ru, void 0, void 0, void 0, []),
            Jr(Eq, "Companion", ou, void 0, [au], void 0, void 0, []),
            Jr(Pq, "SequencingConfiguration", Xr, no, void 0, void 0, {
                0: Rq
            }, []),
            Jr(Wq, "SidePair", Xr, void 0, void 0, void 0, void 0, []),
            Jr(Hq, "Companion", ou, void 0, void 0, void 0, void 0, []),
            Jr(Kq, "$serializer", ou, void 0, [wu], void 0, void 0, []),
            Jr(tC, "QuestionMetadata", Xr, void 0, void 0, void 0, {
                0: Zq
            }, []),
            Jr(eC, "Companion", ou, void 0, void 0, void 0, void 0, []),
            Jr(oC, "$serializer", ou, void 0, [wu], void 0, void 0, []),
            Jr(lC, "CheckpointMetadata", Xr, void 0, void 0, void 0, {
                0: uC
            }, []),
            Jr(cC, "Companion", ou, void 0, void 0, void 0, void 0, []),
            Jr(dC, "$serializer", ou, void 0, [wu], void 0, void 0, []),
            Jr(wC, "PaywallMetadata", Xr, void 0, void 0, void 0, {
                0: pC
            }, []),
            Jr(bC, "Companion", ou, void 0, void 0, void 0, void 0, []),
            Jr(kC, "$serializer", ou, void 0, [wu], void 0, void 0, []),
            Jr(qC, "QuestionScoringInferenceMetadata", Xr, void 0, void 0, void 0, {
                0: $C
            }, []),
            Jr(SC, "Companion", ou, void 0, void 0, void 0, void 0, []),
            Jr(TC, "$serializer", ou, void 0, [wu], void 0, void 0, []),
            Jr(OC, "TestGeneratorOutputMetadata", Xr, void 0, void 0, void 0, {
                0: MC
            }, []),
            Jr(QC, "TaskQuestionTypeSourceTuple", Xr, void 0, void 0, void 0, void 0, []),
            Jr(GC, "Term", Xr, void 0, void 0, void 0, void 0, []),
            Jr(WC, "Companion", ou, void 0, void 0, void 0, void 0, []),
            Jr(VC, "$serializer", ou, void 0, [wu], void 0, void 0, []),
            Jr(ZC, "ExperimentConfiguration", Xr, void 0, void 0, void 0, {
                0: HC
            }, []),
            Jr(tx, "Companion", ou, void 0, void 0, void 0, void 0, []),
            Jr(ix, "$serializer", ou, void 0, [wu], void 0, void 0, []),
            Jr(bx, "TestGeneratorOutput", fu, void 0, void 0, void 0, {
                0: wx
            }, []),
            Jr(vx, "TestOrPaywall", fu, void 0, [bx], void 0, {
                0: px
            }, []),
            Jr(ux, "Test", Xr, void 0, [vx], void 0, {
                0: ex
            }, []),
            Jr(sx, "Companion", ou, void 0, void 0, void 0, void 0, []),
            Jr(lx, "$serializer", ou, void 0, [wu], void 0, void 0, []),
            Jr(fx, "GradedTestResult", Xr, void 0, [bx], void 0, {
                0: hx
            }, []),
            Jr(dx, "Companion", ou, void 0, [au], void 0, void 0, []),
            Jr(yx, "Companion", ou, void 0, [au], void 0, void 0, []),
            Jr(gx, "Companion", ou, void 0, void 0, void 0, void 0, []),
            Jr($x, "$serializer", ou, void 0, [wu], void 0, void 0, []),
            Jr(Cx, "TestPaywall", Xr, void 0, [vx], void 0, {
                0: mx
            }, []),
            Jr(zx, "Companion", ou, void 0, void 0, void 0, void 0, []),
            Jr(Mx, "$serializer", ou, void 0, [wu], void 0, void 0, []),
            Jr(Ex, "TestSettings", Xr, void 0, void 0, void 0, {
                0: Ix
            }, []),
            Jr(Kx, "DistanceMetrics", Xr, void 0, void 0, void 0, void 0, []),
            Jr(sS, "sam$kotlin_Comparator$0", Xr, void 0, [ss], void 0, void 0, []),
            Jr(DS, "Texts", Xr, void 0, void 0, void 0, void 0, []),
            Jr(LS, "Companion", ou, void 0, void 0, void 0, void 0, []),
            Jr(NS, "AssistantValidationError", Xr, Dl, void 0, void 0, void 0, []),
            Jr(oz, "sam$kotlin_Comparator$0", Xr, void 0, [ss], void 0, void 0, []),
            Jr(uz, "sam$kotlin_Comparator$0", Xr, void 0, [ss], void 0, void 0, []),
            Jr(wz, "StudyableMaterialDataSource", Xr, void 0, void 0, void 0, void 0, []),
            Jr(kz, "sam$kotlin_Comparator$0", Xr, void 0, [ss], void 0, void 0, []),
            Jr(pT, "TextEntityLabelClassifier", Xr, void 0, void 0, void 0, void 0, []),
            Jr(IT, "TextEntityLabel", Xr, no, void 0, void 0, void 0, []),
            Jr(BT, "TextPartOfSpeechLabel", Xr, no, void 0, void 0, void 0, []),
            Jr(KT, "Companion", ou, void 0, void 0, void 0, void 0, []),
            Jr(XT, "McqParser", Xr, void 0, void 0, void 0, void 0, []),
            Jr(oM, "MultipleChoiceQuestion", Xr, void 0, void 0, void 0, void 0, []),
            Jr(aM, "Option", Xr, void 0, void 0, void 0, void 0, []),
            Jr(_M, "TrueFalseParser", Xr, void 0, void 0, void 0, void 0, []),
            Ph.prototype.toString = function() {
                return "QuestionTypeInfo(category=" + this.q2k_1 + ", difficulty=" + this.r2k_1 + ")"
            }
            ,
            Ph.prototype.hashCode = function() {
                var t = this.q2k_1.hashCode();
                return t = Kr(t, 31) + this.r2k_1.hashCode() | 0
            }
            ,
            Ph.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof Ph))
                    return !1;
                var n = t instanceof Ph ? t : Zr();
                return !!this.q2k_1.equals(n.q2k_1) && !!this.r2k_1.equals(n.r2k_1)
            }
            ,
            T_.prototype.jc = function() {
                return this.i2l_1
            }
            ,
            T_.prototype.j2l = function() {
                return this.expectedAnswerStudiableItemId
            }
            ,
            T_.prototype.k2l = function() {
                return this.actualAnswerStudiableItemId
            }
            ,
            T_.prototype.l2l = function() {
                return this.answerHistoryStudiableItemIds
            }
            ,
            T_.prototype.m2l = function() {
                return this.remainingStudiableItemIdsInRound
            }
            ,
            T_.prototype.n2l = function() {
                return this.incorrectStudiableItemIdsInRound
            }
            ,
            T_.prototype.o2l = function() {
                return this.studiableItemIdsAnsweredSinceRoundStart
            }
            ,
            Object.defineProperty(T_.prototype, "message", {
                configurable: !0,
                get: function() {
                    return this.jc()
                }
            }),
            O_.prototype.f1o = function() {
                return this.p2l_1.p2()
            }
            ,
            O_.prototype.m1d = function(t) {
                return this.f1o()
            }
            ,
            G_.prototype.p2 = function() {
                return this.s2l_1
            }
            ,
            P_.prototype.z2f = function() {
                return this.t2l_1
            }
            ,
            P_.prototype.x2f = function(t) {
                var n;
                t: {
                    for (var i = R_(), e = 0, r = i.length; e < r; ) {
                        var o = i[e];
                        if (e = e + 1 | 0,
                        o.p2() == t) {
                            n = o;
                            break t
                        }
                    }
                    n = null
                }
                return n
            }
            ,
            H_.prototype.f1o = function() {
                return this.u2l_1.p2()
            }
            ,
            H_.prototype.m1d = function(t) {
                return this.f1o()
            }
            ,
            X_.prototype.p2 = function() {
                return this.x2l_1
            }
            ,
            J_.prototype.z2f = function() {
                return this.y2l_1
            }
            ,
            J_.prototype.x2f = function(t) {
                var n;
                t: {
                    for (var i = K_(), e = 0, r = i.length; e < r; ) {
                        var o = i[e];
                        if (e = e + 1 | 0,
                        o.p2() == t) {
                            n = o;
                            break t
                        }
                    }
                    n = null
                }
                return n
            }
            ,
            uc.prototype.f1o = function() {
                return this.z2l_1.p2()
            }
            ,
            uc.prototype.m1d = function(t) {
                return this.f1o()
            }
            ,
            hc.prototype.p2 = function() {
                return this.c2m_1
            }
            ,
            _c.prototype.z2f = function() {
                return this.d2m_1
            }
            ,
            _c.prototype.x2f = function(t) {
                var n;
                t: {
                    for (var i = ac(), e = 0, r = i.length; e < r; ) {
                        var o = i[e];
                        if (e = e + 1 | 0,
                        o.p2() == t) {
                            n = o;
                            break t
                        }
                    }
                    n = null
                }
                return n
            }
            ,
            wc.prototype.e2m = function(t) {
                lu().q12(yc(t))
            }
            ,
            kc.prototype.u2f = function(t) {
                var n, i = t;
                if (_u(i, D_())) {
                    var e = this.f2m_1
                      , r = null == e ? null : e.h2m_1;
                    n = r instanceof no ? r : null
                } else if (_u(i, Mc())) {
                    var o = this.f2m_1
                      , u = null == o ? null : o.i2m_1;
                    n = u instanceof no ? u : null
                } else if (_u(i, ef())) {
                    var s = this.f2m_1
                      , a = null == s ? null : s.j2m_1;
                    n = a instanceof no ? a : null
                } else if (_u(i, tc())) {
                    var l = this.f2m_1
                      , h = null == l ? null : l.k2m_1;
                    n = h instanceof no ? h : null
                } else if (_u(i, cc())) {
                    var _ = this.f2m_1
                      , c = null == _ ? null : _.l2m_1;
                    n = c instanceof no ? c : null
                } else
                    n = null;
                var f, d = n;
                if (null == d) {
                    var p = this.g2m_1;
                    f = null == p ? null : p.u2f(t)
                } else
                    f = d;
                return f
            }
            ,
            qc.prototype.f1o = function() {
                return this.m2m_1.p2()
            }
            ,
            qc.prototype.m1d = function(t) {
                return this.f1o()
            }
            ,
            zc.prototype.p2 = function() {
                return this.p2m_1
            }
            ,
            Tc.prototype.z2f = function() {
                return this.q2m_1
            }
            ,
            Tc.prototype.x2f = function(t) {
                var n;
                t: {
                    for (var i = xc(), e = 0, r = i.length; e < r; ) {
                        var o = i[e];
                        if (e = e + 1 | 0,
                        o.p2() == t) {
                            n = o;
                            break t
                        }
                    }
                    n = null
                }
                return n
            }
            ,
            Gc.prototype.f1o = function() {
                return this.r2m_1.p2()
            }
            ,
            Gc.prototype.m1d = function(t) {
                return this.f1o()
            }
            ,
            Bc.prototype.p2 = function() {
                return this.u2m_1
            }
            ,
            Nc.prototype.z2f = function() {
                return this.v2m_1
            }
            ,
            Nc.prototype.x2f = function(t) {
                var n;
                t: {
                    for (var i = Dc(), e = 0, r = i.length; e < r; ) {
                        var o = i[e];
                        if (e = e + 1 | 0,
                        o.p2() == t) {
                            n = o;
                            break t
                        }
                    }
                    n = null
                }
                return n
            }
            ,
            Kc.prototype.f1o = function() {
                return this.w2m_1.p2()
            }
            ,
            Kc.prototype.m1d = function(t) {
                return this.f1o()
            }
            ,
            tf.prototype.p2 = function() {
                return this.z2m_1
            }
            ,
            nf.prototype.z2f = function() {
                return this.a2n_1
            }
            ,
            nf.prototype.x2f = function(t) {
                var n;
                t: {
                    for (var i = Xc(), e = 0, r = i.length; e < r; ) {
                        var o = i[e];
                        if (e = e + 1 | 0,
                        o.p2() == t) {
                            n = o;
                            break t
                        }
                    }
                    n = null
                }
                return n
            }
            ,
            uf.prototype.f1o = function() {
                var t, n = go(af), i = [go(yf), go(Cf)];
                return t = [df(), mf()],
                cu("assistantMode.grading.GradedAnswerMetadata", n, i, t, [])
            }
            ,
            uf.prototype.m1d = function(t) {
                return this.f1o()
            }
            ,
            ff.prototype.y12 = function() {
                return this.b2n_1
            }
            ,
            ff.prototype.d1d = function() {
                return [pu()]
            }
            ,
            ff.prototype.l13 = function(t) {
                var n = this.b2n_1
                  , i = !0
                  , e = 0
                  , r = 0
                  , o = !1
                  , u = t.g16(n);
                if (u.v16())
                    o = u.i16(n, 0),
                    r |= 1;
                else
                    for (; i; )
                        switch (e = u.w16(n)) {
                        case -1:
                            i = !1;
                            break;
                        case 0:
                            o = u.i16(n, 0),
                            r |= 1;
                            break;
                        default:
                            throw vu(e)
                        }
                return u.h16(n),
                vf(r, o, null)
            }
            ,
            ff.prototype.c2n = function(t, n) {
                var i = this.b2n_1
                  , e = t.g16(i);
                (e.a18(i, 0) || !1 !== n.d2n_1) && e.l17(i, 0, n.d2n_1),
                e.h16(i)
            }
            ,
            ff.prototype.i13 = function(t, n) {
                return this.c2n(t, n instanceof yf ? n : Zr())
            }
            ,
            yf.prototype.toString = function() {
                return "LocalGradedAnswerMetadata(wasSmartGradingUsed=" + this.d2n_1 + ")"
            }
            ,
            yf.prototype.hashCode = function() {
                return 0 | this.d2n_1
            }
            ,
            yf.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof yf))
                    return !1;
                var n = t instanceof yf ? t : Zr();
                return this.d2n_1 === n.d2n_1
            }
            ,
            $f.prototype.y12 = function() {
                return this.e2n_1
            }
            ,
            $f.prototype.d1d = function() {
                return [$u(ku()), pu(), mu(), mu(), $u(mu()), pu()]
            }
            ,
            $f.prototype.l13 = function(t) {
                var n = this.e2n_1
                  , i = !0
                  , e = 0
                  , r = 0
                  , o = null
                  , u = !1
                  , s = new ju(0,0)
                  , a = new ju(0,0)
                  , l = null
                  , h = !1
                  , _ = t.g16(n);
                if (_.v16())
                    o = _.u16(n, 0, ku(), o),
                    r |= 1,
                    u = _.i16(n, 1),
                    r |= 2,
                    s = _.m16(n, 2),
                    r |= 4,
                    a = _.m16(n, 3),
                    r |= 8,
                    l = _.u16(n, 4, mu(), l),
                    r |= 16,
                    h = _.i16(n, 5),
                    r |= 32;
                else
                    for (; i; )
                        switch (e = _.w16(n)) {
                        case -1:
                            i = !1;
                            break;
                        case 0:
                            o = _.u16(n, 0, ku(), o),
                            r |= 1;
                            break;
                        case 1:
                            u = _.i16(n, 1),
                            r |= 2;
                            break;
                        case 2:
                            s = _.m16(n, 2),
                            r |= 4;
                            break;
                        case 3:
                            a = _.m16(n, 3),
                            r |= 8;
                            break;
                        case 4:
                            l = _.u16(n, 4, mu(), l),
                            r |= 16;
                            break;
                        case 5:
                            h = _.i16(n, 5),
                            r |= 32;
                            break;
                        default:
                            throw vu(e)
                        }
                return _.h16(n),
                qf(r, o, u, s, a, l, h, null)
            }
            ,
            $f.prototype.f2n = function(t, n) {
                var i = this.e2n_1
                  , e = t.g16(i);
                e.w17(i, 0, ku(), n.g2n_1),
                e.l17(i, 1, n.h2n_1),
                e.p17(i, 2, n.i2n_1),
                e.p17(i, 3, n.j2n_1),
                (e.a18(i, 4) || null != n.k2n_1) && e.w17(i, 4, mu(), n.k2n_1),
                (e.a18(i, 5) || !0 !== n.l2n_1) && e.l17(i, 5, n.l2n_1),
                e.h16(i)
            }
            ,
            $f.prototype.i13 = function(t, n) {
                return this.f2n(t, n instanceof Cf ? n : Zr())
            }
            ,
            Cf.prototype.toString = function() {
                return "SmartGradedAnswerMetadata(longtextGradingResult=" + this.g2n_1 + ", wasRequestSuccess=" + this.h2n_1 + ", logStartTimestamp=" + Lo(this.i2n_1) + ", logEndTimestamp=" + Lo(this.j2n_1) + ", logGradedResultTimestamp=" + qu(this.k2n_1) + ", wasSmartGradingUsed=" + this.l2n_1 + ")"
            }
            ,
            Cf.prototype.hashCode = function() {
                var t = null == this.g2n_1 ? 0 : this.g2n_1.hashCode();
                return t = Kr(t, 31) + (0 | this.h2n_1) | 0,
                t = Kr(t, 31) + this.i2n_1.hashCode() | 0,
                t = Kr(t, 31) + this.j2n_1.hashCode() | 0,
                t = Kr(t, 31) + (null == this.k2n_1 ? 0 : this.k2n_1.hashCode()) | 0,
                t = Kr(t, 31) + (0 | this.l2n_1) | 0
            }
            ,
            Cf.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof Cf))
                    return !1;
                var n = t instanceof Cf ? t : Zr();
                return !!(_u(this.g2n_1, n.g2n_1) && this.h2n_1 === n.h2n_1 && this.i2n_1.equals(n.i2n_1) && this.j2n_1.equals(n.j2n_1) && _u(this.k2n_1, n.k2n_1) && this.l2n_1 === n.l2n_1)
            }
            ,
            zf.prototype.y12 = function() {
                return this.m2n_1
            }
            ,
            zf.prototype.d1d = function() {
                return [Cu(), Cu()]
            }
            ,
            zf.prototype.l13 = function(t) {
                var n = this.m2n_1
                  , i = !0
                  , e = 0
                  , r = 0
                  , o = 0
                  , u = 0
                  , s = t.g16(n);
                if (s.v16())
                    o = s.l16(n, 0),
                    r |= 1,
                    u = s.l16(n, 1),
                    r |= 2;
                else
                    for (; i; )
                        switch (e = s.w16(n)) {
                        case -1:
                            i = !1;
                            break;
                        case 0:
                            o = s.l16(n, 0),
                            r |= 1;
                            break;
                        case 1:
                            u = s.l16(n, 1),
                            r |= 2;
                            break;
                        default:
                            throw vu(e)
                        }
                return s.h16(n),
                If(r, o, u, null)
            }
            ,
            zf.prototype.n2n = function(t, n) {
                var i = this.m2n_1
                  , e = t.g16(i);
                e.o17(i, 0, n.o2n_1),
                e.o17(i, 1, n.p2n_1),
                e.h16(i)
            }
            ,
            zf.prototype.i13 = function(t, n) {
                return this.n2n(t, n instanceof Af ? n : Zr())
            }
            ,
            Af.prototype.toString = function() {
                return "MatchingGameAnswerPair(firstIndex=" + this.o2n_1 + ", secondIndex=" + this.p2n_1 + ")"
            }
            ,
            Af.prototype.hashCode = function() {
                var t = this.o2n_1;
                return t = Kr(t, 31) + this.p2n_1 | 0
            }
            ,
            Af.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof Af))
                    return !1;
                var n = t instanceof Af ? t : Zr();
                return this.o2n_1 === n.o2n_1 && this.p2n_1 === n.p2n_1
            }
            ,
            Of.prototype.s2n = function(t, n, i) {
                if (!(t instanceof Yj))
                    throw gu(Lo("MatchingGameGrader expected MatchingGameAnswer, but received " + t));
                if (!(n instanceof od))
                    throw gu(Lo("MatchingGameGrader expected QuestionGraderSettings.None, but received " + n));
                var e, r = t.t2n_1, o = this.q2n_1.t(r);
                t: {
                    for (var u = this.q2n_1.j(); u.l(); ) {
                        var s = u.k();
                        if (s.o2n_1 === r.o2n_1) {
                            e = s;
                            break t
                        }
                    }
                    throw xu("Collection contains no element matching the predicate.")
                }
                var a, l = e, h = this.r2n_1.d3(l.o2n_1);
                if (null == h)
                    throw a = "MatchingGameGrader could not find question element for option index " + l.o2n_1,
                    Su(Lo(a));
                var _ = h;
                return Bm(o, Zm(t, gj().u2n(l), _, null, 8, null), null, hf(!1, 1, null), 4, null)
            }
            ,
            Of.prototype.v2n = function(t) {
                return ud()
            }
            ,
            Of.prototype.w2n = function() {
                throw zu("There is no specific expected answer for Match game because there are multiple 'prompts' and 'answers'. Use grader.grade() to get expectedAnswer for a specific prompt.")
            }
            ,
            Of.prototype.toString = function() {
                return "MatchingGameGrader(validMatches=" + this.q2n_1 + ", expectedMatchElements=" + this.r2n_1 + ")"
            }
            ,
            Of.prototype.hashCode = function() {
                var t = Tu(this.q2n_1);
                return t = Kr(t, 31) + Tu(this.r2n_1) | 0
            }
            ,
            Of.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof Of))
                    return !1;
                var n = t instanceof Of ? t : Zr();
                return !!_u(this.q2n_1, n.q2n_1) && !!_u(this.r2n_1, n.r2n_1)
            }
            ,
            Df.prototype.y12 = function() {
                return this.z2n_1
            }
            ,
            Df.prototype.d1d = function() {
                return [mu(), mu()]
            }
            ,
            Df.prototype.l13 = function(t) {
                var n = this.z2n_1
                  , i = !0
                  , e = 0
                  , r = 0
                  , o = new ju(0,0)
                  , u = new ju(0,0)
                  , s = t.g16(n);
                if (s.v16())
                    o = s.m16(n, 0),
                    r |= 1,
                    u = s.m16(n, 1),
                    r |= 2;
                else
                    for (; i; )
                        switch (e = s.w16(n)) {
                        case -1:
                            i = !1;
                            break;
                        case 0:
                            o = s.m16(n, 0),
                            r |= 1;
                            break;
                        case 1:
                            u = s.m16(n, 1),
                            r |= 2;
                            break;
                        default:
                            throw vu(e)
                        }
                return s.h16(n),
                Nf(r, o, u, null)
            }
            ,
            Df.prototype.a2o = function(t, n) {
                var i = this.z2n_1
                  , e = t.g16(i);
                e.p17(i, 0, n.b2o_1),
                e.p17(i, 1, n.c2o_1),
                e.h16(i)
            }
            ,
            Df.prototype.i13 = function(t, n) {
                return this.a2o(t, n instanceof Ff ? n : Zr())
            }
            ,
            Ff.prototype.x2n = function() {
                return this.b2o_1
            }
            ,
            Ff.prototype.y2n = function() {
                return this.c2o_1
            }
            ,
            Ff.prototype.toString = function() {
                return "ExpectedMatchQuestionPair(promptIndex=" + Lo(this.b2o_1) + ", optionIndex=" + Lo(this.c2o_1) + ")"
            }
            ,
            Ff.prototype.hashCode = function() {
                var t = this.b2o_1.hashCode();
                return t = Kr(t, 31) + this.c2o_1.hashCode() | 0
            }
            ,
            Ff.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof Ff))
                    return !1;
                var n = t instanceof Ff ? t : Zr();
                return !!this.b2o_1.equals(n.b2o_1) && !!this.c2o_1.equals(n.c2o_1)
            }
            ,
            Yf.prototype.y12 = function() {
                return this.d2o_1
            }
            ,
            Yf.prototype.d1d = function() {
                return [mu(), $u(mu())]
            }
            ,
            Yf.prototype.l13 = function(t) {
                var n = this.d2o_1
                  , i = !0
                  , e = 0
                  , r = 0
                  , o = new ju(0,0)
                  , u = null
                  , s = t.g16(n);
                if (s.v16())
                    o = s.m16(n, 0),
                    r |= 1,
                    u = s.u16(n, 1, mu(), u),
                    r |= 2;
                else
                    for (; i; )
                        switch (e = s.w16(n)) {
                        case -1:
                            i = !1;
                            break;
                        case 0:
                            o = s.m16(n, 0),
                            r |= 1;
                            break;
                        case 1:
                            u = s.u16(n, 1, mu(), u),
                            r |= 2;
                            break;
                        default:
                            throw vu(e)
                        }
                return s.h16(n),
                Xf(r, o, u, null)
            }
            ,
            Yf.prototype.e2o = function(t, n) {
                var i = this.d2o_1
                  , e = t.g16(i);
                e.p17(i, 0, n.f2o_1),
                e.w17(i, 1, mu(), n.g2o_1),
                e.h16(i)
            }
            ,
            Yf.prototype.i13 = function(t, n) {
                return this.e2o(t, n instanceof Jf ? n : Zr())
            }
            ,
            Jf.prototype.x2n = function() {
                return this.f2o_1
            }
            ,
            Jf.prototype.y2n = function() {
                return this.g2o_1
            }
            ,
            Jf.prototype.toString = function() {
                return "UserMatchQuestionPair(promptIndex=" + Lo(this.f2o_1) + ", optionIndex=" + qu(this.g2o_1) + ")"
            }
            ,
            Jf.prototype.hashCode = function() {
                var t = this.f2o_1.hashCode();
                return t = Kr(t, 31) + (null == this.g2o_1 ? 0 : this.g2o_1.hashCode()) | 0
            }
            ,
            Jf.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof Jf))
                    return !1;
                var n = t instanceof Jf ? t : Zr();
                return !!this.f2o_1.equals(n.f2o_1) && !!_u(this.g2o_1, n.g2o_1)
            }
            ,
            td.prototype.s2n = function(t, n, i) {
                if (!(t instanceof Bj))
                    throw gu(Lo("MatchingQuestionGrader expected MatchingAnswer, but received " + t));
                if (!(n instanceof od))
                    throw gu(Lo("MatchingQuestionGrader expected QuestionGraderSettings.None, but received " + n));
                var e = t.k2o_1.x2n().gb()
                  , r = t.k2o_1.y2n()
                  , o = null == r ? null : r.gb();
                return Bm(null != o && this.j2o_1.t(Qf(e, o)), Zm(t, new Bj(Qf(e, this.i2o_1.i(e))), this.h2o_1.i(e), null, 8, null), null, hf(!1, 1, null), 4, null)
            }
            ,
            td.prototype.v2n = function(t) {
                return ud()
            }
            ,
            td.prototype.w2n = function() {
                throw zu("There is no specific expected answer for match questions because there are multiple prompts and answers. Use grader.grade() to get expectedAnswer for a specific prompt.")
            }
            ,
            td.prototype.toString = function() {
                return "MatchingQuestionGrader(expectedAnswerDescriptions=" + this.h2o_1 + ", expectedAnswerIndexes=" + this.i2o_1 + ", validMatches=" + this.j2o_1 + ")"
            }
            ,
            td.prototype.hashCode = function() {
                var t = Tu(this.h2o_1);
                return t = Kr(t, 31) + Tu(this.i2o_1) | 0,
                t = Kr(t, 31) + Tu(this.j2o_1) | 0
            }
            ,
            td.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof td))
                    return !1;
                var n = t instanceof td ? t : Zr();
                return !!_u(this.h2o_1, n.h2o_1) && !!_u(this.i2o_1, n.i2o_1) && !!_u(this.j2o_1, n.j2o_1)
            }
            ,
            nd.prototype.b9 = function() {
                var t = this.w8_1;
                t: for (; ; )
                    try {
                        switch (this.u8_1) {
                        case 0:
                            this.v8_1 = 2;
                            var n = this.u2o_1;
                            if (!(null == n || n instanceof rq)) {
                                var i = "MatchingQuestionAnswerGrader expected OptionIndexAnswer?, but received " + this.u2o_1;
                                throw gu(Lo(i))
                            }
                            if (!(this.v2o_1 instanceof od)) {
                                var e = "MatchingQuestionAnswerGrader expected QuestionGraderSettings.None, but received " + this.v2o_1;
                                throw gu(Lo(e))
                            }
                            var r = this
                              , o = this.u2o_1
                              , u = null == o ? null : o.x2o_1;
                            if (r.w2o_1 = Uf(this.t2o_1.z2o_1, null == u ? null : u.gb()),
                            this.u8_1 = 1,
                            (t = this.t2o_1.y2o_1.s2n(new Bj(this.w2o_1), this.v2o_1, this)) === Au())
                                return t;
                            continue t;
                        case 1:
                            var s = t
                              , a = s.b2p_1
                              , l = a.f2p_1;
                            if (!(l instanceof Bj))
                                throw gu(Lo("MatchingQuestionAnswerGrader expected answer to be MatchingAnswer, but got " + l));
                            var h = l.k2o_1;
                            if (!(h instanceof Ff))
                                throw gu(Lo("MatchingQuestionAnswerGrader expected feedback Answer to be ExpectedMatchQuestionPair but got " + h));
                            var _ = new rq(h.c2o_1)
                              , c = Zm(this.u2o_1, _, a.g2p_1, null, 8, null);
                            return Bm(s.a2p_1, c, null, hf(!1, 1, null), 4, null);
                        case 2:
                            throw this.x8_1
                        }
                    } catch (f) {
                        if (2 === this.v8_1)
                            throw f;
                        this.u8_1 = this.v8_1,
                        this.x8_1 = f
                    }
            }
            ,
            id.prototype.s2n = function(t, n, i) {
                var e = new nd(this,t,n,i);
                return e.w8_1 = to(),
                e.x8_1 = null,
                e.b9()
            }
            ,
            id.prototype.v2n = function(t) {
                return ud()
            }
            ,
            id.prototype.w2n = function() {
                throw zu("There is no specific expected answer for match questions because there are multiple prompts & answers. Use grader.grade() to get expectedAnswer for a specific prompt.")
            }
            ,
            id.prototype.toString = function() {
                return "MatchingQuestionAnswerGrader(grader=" + this.y2o_1 + ", promptIndex=" + this.z2o_1 + ")"
            }
            ,
            id.prototype.hashCode = function() {
                var t = this.y2o_1.hashCode();
                return t = Kr(t, 31) + this.z2o_1 | 0
            }
            ,
            id.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof id))
                    return !1;
                var n = t instanceof id ? t : Zr();
                return !!this.y2o_1.equals(n.y2o_1) && this.z2o_1 === n.z2o_1
            }
            ,
            ed.prototype.s2n = function(t, n, i) {
                if (!(null == t || t instanceof bq))
                    throw gu(Lo("MultipleChoiceGrader expected SingleOrMultiIndexAnswer? but received " + t));
                if (!(n instanceof od))
                    throw gu(Lo("MultipleChoiceGrader expected QuestionGraderSettings.None, but received " + n));
                var e = fz(t);
                return Bm(_u(e, this.i2p_1), new rj(t,this.w2n(),this.j2p_1,this.k2p_1), null, hf(!1, 1, null), 4, null)
            }
            ,
            ed.prototype.v2n = function(t) {
                return ud()
            }
            ,
            ed.prototype.w2n = function() {
                return dz(this.i2p_1)
            }
            ,
            ed.prototype.toString = function() {
                return "MultipleChoiceGrader(correctOptionIndices=" + this.i2p_1 + ", expectedAnswerDescription=" + this.j2p_1 + ", explanations=" + this.k2p_1 + ")"
            }
            ,
            ed.prototype.hashCode = function() {
                var t = Tu(this.i2p_1);
                return t = Kr(t, 31) + (null == this.j2p_1 ? 0 : this.j2p_1.hashCode()) | 0,
                t = Kr(t, 31) + (null == this.k2p_1 ? 0 : Tu(this.k2p_1)) | 0
            }
            ,
            ed.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof ed))
                    return !1;
                var n = t instanceof ed ? t : Zr();
                return !!_u(this.i2p_1, n.i2p_1) && !!_u(this.j2p_1, n.j2p_1) && !!_u(this.k2p_1, n.k2p_1)
            }
            ,
            rd.prototype.m2p = function(t) {
                return new rd(t)
            }
            ,
            rd.prototype.toString = function() {
                return "Written(writtenGraderSettings=" + this.l2p_1 + ")"
            }
            ,
            rd.prototype.hashCode = function() {
                return this.l2p_1.hashCode()
            }
            ,
            rd.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof rd))
                    return !1;
                var n = t instanceof rd ? t : Zr();
                return !!this.l2p_1.equals(n.l2p_1)
            }
            ,
            ad.prototype.s2n = function(t, n, i) {
                if (!(null == t || t instanceof wq))
                    throw gu(Lo("RevealSelfAssessmentGrader expected RevealSelfAssessmentAnswer? but received " + t));
                if (!(n instanceof od))
                    throw gu(Lo("RevealSelfAssessmentGrader expected QuestionGraderSettings.None, but received " + n));
                var e, r = Zm(t, this.w2n(), this.n2p_1, null, 8, null);
                if (null == t)
                    return Bm(!1, r, null, hf(!1, 1, null), 4, null);
                if (!t.o2p_1.equals(Eu()) && !t.o2p_1.equals(Ou()))
                    throw e = "Unexpected answer for RevealSelfAssessmentGrader. Expected KNOW or DO_NOT_KNOW, but received " + t.o2p_1.q1_1,
                    gu(Lo(e));
                return Bm(t.o2p_1.equals(Eu()), r, null, hf(!1, 1, null), 4, null)
            }
            ,
            ad.prototype.v2n = function(t) {
                return ud()
            }
            ,
            ad.prototype.w2n = function() {
                return new wq(Eu())
            }
            ,
            ld.prototype.toString = function() {
                return "SmarterGraderResult(isCorrect=" + this.p2p_1 + ", suggestion=" + this.q2p_1 + ", gradedAnswerMetadata=" + this.r2p_1 + ")"
            }
            ,
            ld.prototype.hashCode = function() {
                var t = 0 | this.p2p_1;
                return t = Kr(t, 31) + (null == this.q2p_1 ? 0 : this.q2p_1.hashCode()) | 0,
                t = Kr(t, 31) + Tu(this.r2p_1) | 0
            }
            ,
            ld.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof ld))
                    return !1;
                var n = t instanceof ld ? t : Zr();
                return this.p2p_1 === n.p2p_1 && !!_u(this.q2p_1, n.q2p_1) && !!_u(this.r2p_1, n.r2p_1)
            }
            ,
            fd.prototype.w2q = function(t, n) {
                var i = this.s2e(t, n);
                return i.w8_1 = to(),
                i.x8_1 = null,
                i.b9()
            }
            ,
            fd.prototype.c9 = function(t, n) {
                return this.w2q(null != t && Qu(t, Ru) ? t : Zr(), n)
            }
            ,
            fd.prototype.b9 = function() {
                var t = this.w8_1;
                t: for (; ; )
                    try {
                        switch (this.u8_1) {
                        case 0:
                            if (this.v8_1 = 2,
                            this.u8_1 = 1,
                            (t = this.r2q_1.b2e(this.s2q_1, this.t2q_1, this.u2q_1, this)) === Au())
                                return t;
                            continue t;
                        case 1:
                            return t;
                        case 2:
                            throw this.x8_1
                        }
                    } catch (n) {
                        if (2 === this.v8_1)
                            throw n;
                        this.u8_1 = this.v8_1,
                        this.x8_1 = n
                    }
            }
            ,
            fd.prototype.s2e = function(t, n) {
                var i = new fd(this.r2q_1,this.s2q_1,this.t2q_1,this.u2q_1,n);
                return i.v2q_1 = t,
                i
            }
            ,
            pd.prototype.b9 = function() {
                var t = this.w8_1;
                t: for (; ; )
                    try {
                        switch (this.u8_1) {
                        case 0:
                            if (this.v8_1 = 3,
                            this.j2r_1 = this.f2r_1.m2r_1.o2g(this.g2r_1, this.h2r_1, _d(this.i2r_1, this.f2r_1)),
                            this.k2r_1 = Qx(this.h2r_1, this.g2r_1, this.i2r_1.y2g_1),
                            null != this.f2r_1.o2r_1 && this.i2r_1.b2h_1.j2h_1 && this.k2r_1 && !this.j2r_1.l2g_1) {
                                if (this.u8_1 = 1,
                                (t = cd(this.f2r_1, this.f2r_1.o2r_1, this.g2r_1, this.h2r_1, this.j2r_1, this.i2r_1.y2g_1, this)) === Au())
                                    return t;
                                continue t
                            }
                            this.l2r_1 = new ld(this.j2r_1.l2g_1,this.j2r_1.m2g_1,hf(!1, 1, null)),
                            this.u8_1 = 2;
                            continue t;
                        case 1:
                            this.l2r_1 = t,
                            this.u8_1 = 2;
                            continue t;
                        case 2:
                            return this.l2r_1;
                        case 3:
                            throw this.x8_1
                        }
                    } catch (n) {
                        if (3 === this.v8_1)
                            throw n;
                        this.u8_1 = this.v8_1,
                        this.x8_1 = n
                    }
            }
            ,
            vd.prototype.b9 = function() {
                var t = this.w8_1;
                t: for (; ; )
                    try {
                        switch (this.u8_1) {
                        case 0:
                            this.v8_1 = 3,
                            this.h2q_1 = this.b2q_1.n2r_1.zy(),
                            this.v8_1 = 2,
                            this.u8_1 = 1;
                            var n = new ju(1e3,0);
                            if ((t = Gu(n, dd(this.c2q_1, this.e2q_1, this.d2q_1, this.g2q_1, null), this)) === Au())
                                return t;
                            continue t;
                        case 1:
                            var i = t
                              , e = this.b2q_1.n2r_1.zy()
                              , r = this
                              , o = _u(null == i ? null : i.i2a_1, Pu())
                              , u = this.b2q_1.n2r_1.zy();
                            r.i2q_1 = new ld(o,null,bf(i, !0, this.h2q_1, u, e, !1, 32, null)),
                            this.v8_1 = 3,
                            this.u8_1 = 4;
                            continue t;
                        case 2:
                            if (this.v8_1 = 3,
                            this.x8_1 instanceof Ro) {
                                this.x8_1;
                                var s = this
                                  , a = this.b2q_1.n2r_1.zy();
                                s.i2q_1 = new ld(this.f2q_1.l2g_1,this.f2q_1.m2g_1,bf(null, !1, this.h2q_1, a, null, !1, 48, null)),
                                this.u8_1 = 4;
                                continue t
                            }
                            throw this.x8_1;
                        case 3:
                            throw this.x8_1;
                        case 4:
                            return this.v8_1 = 3,
                            this.i2q_1
                        }
                    } catch (l) {
                        if (3 === this.v8_1)
                            throw l;
                        this.u8_1 = this.v8_1,
                        this.x8_1 = l
                    }
            }
            ,
            yd.prototype.s2p = function(t, n, i, e) {
                var r = new pd(this,t,n,i,e);
                return r.w8_1 = to(),
                r.x8_1 = null,
                r.b9()
            }
            ,
            wd.prototype.s2n = function(t, n, i) {
                if (!(null == t || t instanceof Ej))
                    throw gu(Lo("TrueFalseGrader expected BooleanAnswer?, but received " + t));
                if (!(n instanceof od))
                    throw gu(Lo("TrueFalseGrader expected QuestionGraderSettings.None, but received " + n));
                return Bm((null == t ? null : t.r2r_1) === this.p2r_1, Zm(t, this.w2n(), this.q2r_1, null, 8, null), null, hf(!1, 1, null), 4, null)
            }
            ,
            wd.prototype.v2n = function(t) {
                return ud()
            }
            ,
            wd.prototype.w2n = function() {
                return new Ej(this.p2r_1)
            }
            ,
            wd.prototype.toString = function() {
                return "TrueFalseGrader(correctOption=" + this.p2r_1 + ", expectedAnswerDescription=" + this.q2r_1 + ")"
            }
            ,
            wd.prototype.hashCode = function() {
                var t = 0 | this.p2r_1;
                return t = Kr(t, 31) + this.q2r_1.hashCode() | 0
            }
            ,
            wd.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof wd))
                    return !1;
                var n = t instanceof wd ? t : Zr();
                return this.p2r_1 === n.p2r_1 && !!this.q2r_1.equals(n.q2r_1)
            }
            ,
            kd.prototype.b9 = function() {
                var t = this.w8_1;
                t: for (; ; )
                    try {
                        switch (this.u8_1) {
                        case 0:
                            this.v8_1 = 5;
                            var n = this.i2s_1;
                            if (!(null == n || n instanceof Sj)) {
                                var i = "WrittenGrader expected StringAnswer?, but received " + this.i2s_1;
                                throw gu(Lo(i))
                            }
                            if (!(this.j2s_1 instanceof rd)) {
                                var e = "WrittenGrader expected QuestionGraderSettings.Written, but received " + this.j2s_1;
                                throw gu(Lo(e))
                            }
                            var r = this
                              , o = this.h2s_1.w2n();
                            if (r.k2s_1 = Zm(this.i2s_1, o, this.h2s_1.t2r_1, null, 8, null),
                            null == this.i2s_1)
                                return new Ym(!1,this.k2s_1,null,hf(!1, 1, null));
                            if (this.u8_1 = 1,
                            (t = bd(this.h2s_1).s2p(this.h2s_1.s2r_1, this.i2s_1.o2s_1, new Du(this.h2s_1.x2r_1,this.h2s_1.w2r_1,this.h2s_1.v2r_1,this.j2s_1.l2p_1), this)) === Au())
                                return t;
                            continue t;
                        case 1:
                            this.l2s_1 = t,
                            this.m2s_1 = this.h2s_1.u2r_1.j(),
                            this.u8_1 = 2;
                            continue t;
                        case 2:
                            if (!this.m2s_1.l()) {
                                this.u8_1 = 4;
                                continue t
                            }
                            if (this.n2s_1 = this.m2s_1.k(),
                            this.u8_1 = 3,
                            (t = bd(this.h2s_1).s2p(this.n2s_1, this.i2s_1.o2s_1, new Du(this.h2s_1.x2r_1,this.h2s_1.w2r_1,this.h2s_1.v2r_1,this.j2s_1.l2p_1), this)) === Au())
                                return t;
                            continue t;
                        case 3:
                            var u = t;
                            if (u.p2p_1)
                                return new Ym(!0,this.k2s_1,Tm(u.q2p_1),u.r2p_1);
                            this.u8_1 = 2;
                            continue t;
                        case 4:
                            return new Ym(this.l2s_1.p2p_1,this.k2s_1,Tm(this.l2s_1.q2p_1),this.l2s_1.r2p_1);
                        case 5:
                            throw this.x8_1
                        }
                    } catch (s) {
                        if (5 === this.v8_1)
                            throw s;
                        this.u8_1 = this.v8_1,
                        this.x8_1 = s
                    }
            }
            ,
            $d.prototype.s2n = function(t, n, i) {
                var e = new kd(this,t,n,i);
                return e.w8_1 = to(),
                e.x8_1 = null,
                e.b9()
            }
            ,
            $d.prototype.v2n = function(t) {
                return new rd(new Bu(t.p2s_1,t.q2s_1,t.r2s_1))
            }
            ,
            $d.prototype.w2n = function() {
                return new Sj(this.s2r_1)
            }
            ,
            Od.prototype.toString = function() {
                return "PriorityScore(score=" + this.c2u_1 + ", method=" + this.d2u_1 + ")"
            }
            ,
            Od.prototype.hashCode = function() {
                var t = os(this.c2u_1);
                return t = Kr(t, 31) + us(this.d2u_1) | 0
            }
            ,
            Od.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof Od))
                    return !1;
                var n = t instanceof Od ? t : Zr();
                return !!_u(this.c2u_1, n.c2u_1) && this.d2u_1 === n.d2u_1
            }
            ,
            Ed.prototype.toString = function() {
                return "ScoredCardSideType(studiableItemId=" + Lo(this.e2u_1) + ", answerSide=" + this.f2u_1 + ", questionScoringInferenceMetadata=" + this.g2u_1 + ", priorityScore=" + this.h2u_1 + ", questionType=" + this.i2u_1 + ")"
            }
            ,
            Ed.prototype.hashCode = function() {
                var t = this.e2u_1.hashCode();
                return t = Kr(t, 31) + this.f2u_1.hashCode() | 0,
                t = Kr(t, 31) + this.g2u_1.hashCode() | 0,
                t = Kr(t, 31) + os(this.h2u_1) | 0,
                t = Kr(t, 31) + this.i2u_1.hashCode() | 0
            }
            ,
            Ed.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof Ed))
                    return !1;
                var n = t instanceof Ed ? t : Zr();
                return !!(this.e2u_1.equals(n.e2u_1) && this.f2u_1.equals(n.f2u_1) && this.g2u_1.equals(n.g2u_1) && _u(this.h2u_1, n.h2u_1) && this.i2u_1.equals(n.i2u_1))
            }
            ,
            Rd.prototype.h9 = function(t, n) {
                return this.j2u_1(t, n)
            }
            ,
            Rd.prototype.compare = function(t, n) {
                return this.h9(t, n)
            }
            ,
            Pd.prototype.k2u = function(t, n, i, e, r, o) {
                var u, s = o.l2u(), a = Uh(), l = Math.min(s, a), h = ls(n, i.r2u_1), _ = Hk(h), c = i.m2u_1, f = null == c ? null : c.x2u_1, d = null == f ? Sd(this, t, e, r, o) : f;
                d = Cd(this, d, n);
                var p = n.j();
                if (p.l()) {
                    var v = p.k();
                    if (p.l()) {
                        var y = v.f2t_1;
                        do {
                            var w = p.k()
                              , b = w.f2t_1;
                            hs(y, b) < 0 && (v = w,
                            y = b)
                        } while (p.l());
                        u = v
                    } else
                        u = v
                } else
                    u = null;
                var g = u;
                null != g && !d.h() && cs(d).v2s_1.equals(g.e2t_1) && (d = _s(d, 1));
                var k = !h.h() && d.h()
                  , $ = k ? kg(fs(), !0, Yk(h), null, null, 16, null) : null
                  , m = null;
                k || (m = xd(this, o, cs(d)));
                var j = new mk(Ad(this),!1,!0,ds(),ps(),null,!1)
                  , q = D$(null == m ? null : m.d2v(), $, null, _, _ / l * 100, l, j, 100, 100, 4, null)
                  , C = k ? wo() : h;
                return new F$(q,zq(k ? null : new gq(d,e.l2t_1,e.n2t_1,e.o2t_1,Vu()), null, null, !0, null, C, null, null, null, !0, this, 470, null),null == m ? null : m.e2v())
            }
            ,
            Vd.prototype.b5 = function() {
                return this.g2v_1
            }
            ,
            Vd.prototype.c5 = function() {
                return this.h2v_1
            }
            ,
            Vd.prototype.toString = function() {
                return "CardSideProgressInfo(numMaxDifficultyQuestionsRequired=" + Lo(this.g2v_1) + ", numMaxDifficultyQuestionsAnswered=" + Lo(this.h2v_1) + ")"
            }
            ,
            Vd.prototype.hashCode = function() {
                var t = this.g2v_1.hashCode();
                return t = Kr(t, 31) + this.h2v_1.hashCode() | 0
            }
            ,
            Vd.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof Vd))
                    return !1;
                var n = t instanceof Vd ? t : Zr();
                return !!this.g2v_1.equals(n.g2v_1) && !!this.h2v_1.equals(n.h2v_1)
            }
            ,
            bp.prototype.g2x = function(t, n, i, e) {
                var r, o = i.o2w_1, u = i.p2w_1, s = !(1 !== o.f() || !o.i(0).equals(ep().h2x_1) || 1 !== u.f()) && u.i(0).equals(ep().i2x_1);
                return r = !!(t.equals(io()) && s && pp(this, n)) && !dp(this, Im(n, ep().h2x_1, ep().i2x_1, null, 8, null), e, t),
                !!r && dp(this, Im(n, ip().h2x_1, ip().i2x_1, null, 8, null), e, t)
            }
            ,
            bp.prototype.j2x = function(t) {
                var n = this.y2t_1.d3(t.v2s_1);
                if (null == n)
                    throw gu(Lo("Required value was null."));
                var i = n.d3(t.x2s_1)
                  , e = null == i ? null : i.d3(t.w2s_1);
                return null == e ? Ss() : e
            }
            ,
            bp.prototype.b2u = function(t) {
                for (var n = zs(), i = Hu(), e = n, r = 0, o = e.length; r < o; ) {
                    var u, s = e[r];
                    r = r + 1 | 0,
                    u = this.j2x(Rm(t.q2t_1, s, t.r2t_1, null, null, 24, null)),
                    Ku(i, u)
                }
                return $s(i)
            }
            ,
            bp.prototype.k2x = function(t) {
                for (var n = this.j2x(t), i = Hu(), e = n.j(); e.l(); ) {
                    var r = e.k();
                    cp(this, t.v2s_1, t.x2s_1, r) && i.a(r)
                }
                return $s(i)
            }
            ,
            bp.prototype.l2x = function(t, n) {
                return this.j2x(t).t(n)
            }
            ,
            bp.prototype.m2x = function(t, n) {
                return this.k2x(t).t(n)
            }
            ,
            bp.prototype.n2x = function(t, n) {
                var i = this.y2t_1.d3(t);
                if (null == i)
                    throw gu(Lo("Required value was null."));
                var e = i.d3(n)
                  , r = null == e ? null : e.f3()
                  , o = null == r ? null : Ts(r);
                return $s(null == o ? Ss() : o)
            }
            ,
            bp.prototype.o2x = function(t, n) {
                var i = this.y2t_1.d3(t);
                if (null == i)
                    throw gu(Lo("Required value was null."));
                for (var e = i.f3(), r = gp(), o = Hu(), u = e.j(); u.l(); ) {
                    var s = r(u.k());
                    Ku(o, s)
                }
                for (var a = o, l = Hu(), h = a.j(); h.l(); ) {
                    var _ = h.k();
                    _.n2().equals(n) && l.a(_)
                }
                for (var c = l, f = Hu(), d = c.j(); d.l(); ) {
                    var p;
                    p = d.k().p2(),
                    Ku(f, p)
                }
                return $s(f)
            }
            ,
            bp.prototype.z2t = function(t, n) {
                var i = this.y2t_1.d3(t)
                  , e = null == i ? null : i.e3();
                return (null == e ? wo() : e).t(n)
            }
            ,
            bp.prototype.p2x = function(t) {
                return this.y2t_1.x2(t.v2s_1)
            }
            ,
            Vp.prototype.d2v = function() {
                var t;
                switch (this.c2v_1.r1_1) {
                case 0:
                    t = Pp(this);
                    break;
                case 4:
                    t = Dp(this);
                    break;
                default:
                    throw gu(Gp(this))
                }
                return t
            }
            ,
            Vp.prototype.e2v = function() {
                var t;
                switch (this.c2v_1.r1_1) {
                case 0:
                    t = Bp(this);
                    break;
                case 4:
                    t = Wp(this);
                    break;
                default:
                    throw gu(Gp(this))
                }
                return t
            }
            ,
            Vp.prototype.h2y = function() {
                return Zu(PC(this.a2y_1.y2w_1))
            }
            ,
            nv.prototype.c2z = function() {
                var t = this.z2y_1.w(this.a2z_1);
                if (!(t >= 0))
                    throw gu(Lo("Could not find correct option"));
                return t
            }
            ,
            nv.prototype.toString = function() {
                return "OptionsWithAnswer(options=" + this.z2y_1 + ", answer=" + this.a2z_1 + ", optionsSource=" + this.b2z_1 + ")"
            }
            ,
            nv.prototype.hashCode = function() {
                var t = Tu(this.z2y_1);
                return t = Kr(t, 31) + this.a2z_1.hashCode() | 0,
                t = Kr(t, 31) + (null == this.b2z_1 ? 0 : Tu(this.b2z_1)) | 0
            }
            ,
            nv.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof nv))
                    return !1;
                var n = t instanceof nv ? t : Zr();
                return !!_u(this.z2y_1, n.z2y_1) && !!this.a2z_1.equals(n.a2z_1) && !!_u(this.b2z_1, n.b2z_1)
            }
            ,
            iv.prototype.toString = function() {
                return "PairOptionAndSource(option=" + this.w2y_1 + ", optionSource=" + this.x2y_1 + ")"
            }
            ,
            iv.prototype.hashCode = function() {
                var t = this.w2y_1.hashCode();
                return t = Kr(t, 31) + this.x2y_1.hashCode() | 0
            }
            ,
            iv.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof iv))
                    return !1;
                var n = t instanceof iv ? t : Zr();
                return !!this.w2y_1.equals(n.w2y_1) && !!this.x2y_1.equals(n.x2y_1)
            }
            ,
            ev.prototype.d2v = function() {
                return this.q2y_1
            }
            ,
            ev.prototype.e2v = function() {
                return new ed(Ks(this.r2y_1),Tp(cs(this.k2y_1.v2y()), this.k2y_1.u2y()),null)
            }
            ,
            ev.prototype.h2y = function() {
                for (var t = this.k2y_1.v2y(), n = Ju(Xu(t, 10)), i = t.j(); i.l(); ) {
                    var e;
                    e = i.k().o2v_1,
                    n.a(e)
                }
                return n
            }
            ,
            uv.prototype.h9 = function(t, n) {
                return this.d2z_1(t, n)
            }
            ,
            uv.prototype.compare = function(t, n) {
                return this.h9(t, n)
            }
            ,
            av.prototype.d2v = function() {
                return this.k2z_1
            }
            ,
            av.prototype.e2v = function() {
                for (var t = this.j2z_1, n = Hu(), i = 0, e = t.j(); e.l(); ) {
                    var r = e.k()
                      , o = i;
                    i = o + 1 | 0;
                    var u = Zs(o)
                      , s = r.y24_1 ? u : null;
                    null == s || (n.a(s),
                    to())
                }
                for (var a = $s(n), l = this.j2z_1, h = Ju(Xu(l, 10)), _ = 0, c = l.j(); c.l(); ) {
                    var f, d = c.k(), p = _;
                    _ = p + 1 | 0;
                    var v = Zs(p);
                    f = eo(v, Mp(d.b25_1)),
                    h.a(f)
                }
                return new ed(a,null,Xs(h))
            }
            ,
            av.prototype.h2y = function() {
                return Zu(this.f2z_1.l2z_1.e24_1)
            }
            ,
            lv.prototype.d2v = function() {
                var t = Tp(this.o2z_1.y2w_1, this.o2z_1.z2w_1)
                  , n = Vq(PC(this.o2z_1.y2w_1), this.o2z_1.z2w_1, this.o2z_1.a2x_1, null, this.o2z_1.b2x_1, null, null, 104, null);
                return _g(t, this.q2z_1, n, this.p2z_1.g26_1, null, 16, null)
            }
            ,
            lv.prototype.e2v = function() {
                var t, n = this.r2z_1.d3(new ju(0,0));
                if (null == n)
                    throw t = "Cannot get expected answer for Fill In The Blank grader. Segments: " + this.q2z_1 + "; expected answers map: " + this.r2z_1,
                    Su(Lo(t));
                var i = n;
                return new $d(i.r22_1,new Es(Zu(Gs(i.r22_1, i.s22_1, null, 4, null))),wo(),null,null,i.s22_1)
            }
            ,
            lv.prototype.h2y = function() {
                return Zu(PC(this.o2z_1.y2w_1))
            }
            ,
            hv.prototype.b5 = function() {
                return this.w2z_1
            }
            ,
            hv.prototype.c5 = function() {
                return this.x2z_1
            }
            ,
            hv.prototype.toString = function() {
                return "FillInTheBlankQuestionSegmentsAndExpectedAnswersMap(segments=" + this.w2z_1 + ", expectedAnswersMap=" + this.x2z_1 + ")"
            }
            ,
            hv.prototype.hashCode = function() {
                var t = Tu(this.w2z_1);
                return t = Kr(t, 31) + Tu(this.x2z_1) | 0
            }
            ,
            hv.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof hv))
                    return !1;
                var n = t instanceof hv ? t : Zr();
                return !!_u(this.w2z_1, n.w2z_1) && !!_u(this.x2z_1, n.x2z_1)
            }
            ,
            cv.prototype.h9 = function(t, n) {
                return this.z2z_1(t, n)
            }
            ,
            cv.prototype.compare = function(t, n) {
                return this.h9(t, n)
            }
            ,
            dv.prototype.d2v = function() {
                return this.g30_1
            }
            ,
            dv.prototype.e2v = function() {
                return new ad(Tp(this.c30_1, this.b30_1.u2y()))
            }
            ,
            dv.prototype.h2y = function() {
                for (var t = this.b30_1.v2y(), n = Ju(Xu(t, 10)), i = t.j(); i.l(); ) {
                    var e;
                    e = i.k().o2v_1,
                    n.a(e)
                }
                return n
            }
            ,
            bv.prototype.d2v = function() {
                return this.p30_1
            }
            ,
            bv.prototype.e2v = function() {
                return new Of(vv(this),yv(this))
            }
            ,
            bv.prototype.i2y = function() {
                return this.j30_1.q30_1.f()
            }
            ,
            bv.prototype.h2y = function() {
                for (var t = this.m30_1, n = Ju(Xu(t, 10)), i = t.j(); i.l(); ) {
                    var e, r = i.k() % this.j30_1.q30_1.f() | 0;
                    e = this.j30_1.q30_1.i(r).o2v_1,
                    n.a(e)
                }
                return n
            }
            ,
            gv.prototype.i2y = function() {
                return 1
            }
            ,
            mv.prototype.d2v = function() {
                return this.a31_1
            }
            ,
            mv.prototype.e2v = function() {
                for (var t = Hu(), n = 0, i = this.v30_1.j(); i.l(); ) {
                    var e = i.k()
                      , r = n;
                    n = r + 1 | 0;
                    for (var o = Zs(r), u = 0, s = this.y30_1.j(); s.l(); ) {
                        var a = s.k()
                          , l = u;
                        u = l + 1 | 0;
                        for (var h = Zs(l), _ = this.u30_1.q30_1, c = Hu(), f = _.j(); f.l(); ) {
                            var d = f.k()
                              , p = Tp(d, this.u30_1.r30_1)
                              , v = Tp(d, this.u30_1.s30_1);
                            e.equals(p) && a.equals(v) && c.a(d)
                        }
                        c.f() > 0 && t.a(Qf(o, h))
                    }
                }
                return new td(Fs(this.z30_1),this.x30_1,t)
            }
            ,
            mv.prototype.i2y = function() {
                return this.v30_1.f()
            }
            ,
            mv.prototype.h2y = function() {
                for (var t = this.u30_1.q30_1, n = Ju(Xu(t, 10)), i = t.j(); i.l(); ) {
                    var e;
                    e = i.k().o2v_1,
                    n.a(e)
                }
                return n
            }
            ,
            qv.prototype.d2v = function() {
                return this.i31_1
            }
            ,
            qv.prototype.e2v = function() {
                return pv(this, this.c31_1, this.d31_1)
            }
            ,
            qv.prototype.h2y = function() {
                for (var t = this.c31_1.v2y(), n = Ju(Xu(t, 10)), i = t.j(); i.l(); ) {
                    var e;
                    e = i.k().o2v_1,
                    n.a(e)
                }
                return n
            }
            ,
            xv.prototype.d2v = function() {
                return this.q31_1
            }
            ,
            xv.prototype.e2v = function() {
                return new wd(this.n31_1,Tp(this.l31_1, this.k31_1.u2y()))
            }
            ,
            xv.prototype.h2y = function() {
                for (var t = this.k31_1.v2y(), n = Ju(Xu(t, 10)), i = t.j(); i.l(); ) {
                    var e;
                    e = i.k().o2v_1,
                    n.a(e)
                }
                return n
            }
            ,
            Tv.prototype.d2v = function() {
                return this.y31_1
            }
            ,
            Tv.prototype.e2v = function() {
                return pv(this, this.s31_1, this.t31_1)
            }
            ,
            Tv.prototype.h2y = function() {
                for (var t = this.s31_1.v2y(), n = Ju(Xu(t, 10)), i = t.j(); i.l(); ) {
                    var e;
                    e = i.k().o2v_1,
                    n.a(e)
                }
                return n
            }
            ,
            Ev.prototype.f1o = function() {
                return this.z31_1.p2()
            }
            ,
            Ev.prototype.m1d = function(t) {
                return this.f1o()
            }
            ,
            Pv.prototype.p2 = function() {
                return this.c32_1
            }
            ,
            Yv.prototype.w32 = function(t, n, i) {
                var e = _z(this.v32_1.m24_1)
                  , r = Hv(this, ho());
                if (null == r)
                    throw Su(Lo("All Cards must have a word side"));
                var o = r
                  , u = Hv(this, _o());
                if (null == u)
                    throw Su(Lo("All Cards must have a definition side"));
                var s = u
                  , a = Hv(this, co())
                  , l = o.y32();
                if (null == l)
                    throw Su(Lo("Word side must have text"));
                var h = l
                  , _ = s.y32();
                if (null == _)
                    throw Su(Lo("Definition side must have text"));
                var c, f = _;
                if (null === a)
                    c = ms();
                else {
                    var d, p = a.z32();
                    if (null == p)
                        d = null;
                    else {
                        var v = this.v32_1.n24_1
                          , y = _z(this.v32_1.m24_1);
                        d = new Dm(v,p.d23_1,y)
                    }
                    var w = d;
                    if (null == w)
                        throw Su(Lo("Location side must have a diagram shape"));
                    c = fa(eo(e, w))
                }
                var b, g = c, k = o.a33(), $ = null == k ? null : k.g23_1, m = s.a33(), j = null == m ? null : m.g23_1, q = s.b33(), C = null == q ? null : ZS(q), x = o.c33();
                if (null == x)
                    b = null;
                else {
                    for (var S = Ju(Xu(x, 10)), z = x.j(); z.l(); ) {
                        var T;
                        T = z.k().d33_1,
                        S.a(T)
                    }
                    b = S
                }
                var M, I = b, A = s.c33();
                if (null == A)
                    M = null;
                else {
                    for (var O = Ju(Xu(A, 10)), E = A.j(); E.l(); ) {
                        var R;
                        R = E.k().d33_1,
                        O.a(R)
                    }
                    M = O
                }
                return GS(new GC(e,h.r22_1,h.v22_1,h.t22_1,h.u22_1,$,f.r22_1,f.v22_1,f.t22_1,f.u22_1,j,C,I,M,this.v32_1.n24_1,null), h.s22_1, f.s22_1, g, n, t, i)
            }
            ,
            Yv.prototype.toString = function() {
                return "AnnotatedCard(studiableItem=" + this.v32_1 + ")"
            }
            ,
            Yv.prototype.hashCode = function() {
                return this.v32_1.hashCode()
            }
            ,
            Yv.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof Yv))
                    return !1;
                var n = t instanceof Yv ? t : Zr();
                return !!this.v32_1.equals(n.v32_1)
            }
            ,
            Zv.prototype.y32 = function() {
                var t;
                t: {
                    for (var n = this.x32_1.t24_1.j(); n.l(); ) {
                        var i = n.k();
                        if (i instanceof Js) {
                            t = i;
                            break t
                        }
                    }
                    t = null
                }
                return t instanceof Js ? t : null
            }
            ,
            Zv.prototype.b33 = function() {
                var t;
                t: {
                    for (var n = this.x32_1.t24_1.j(); n.l(); ) {
                        var i = n.k();
                        if (i instanceof da) {
                            t = i;
                            break t
                        }
                    }
                    t = null
                }
                return t instanceof da ? t : null
            }
            ,
            Zv.prototype.a33 = function() {
                var t;
                t: {
                    for (var n = this.x32_1.t24_1.j(); n.l(); ) {
                        var i = n.k();
                        if (i instanceof pa) {
                            t = i;
                            break t
                        }
                    }
                    t = null
                }
                return t instanceof pa ? t : null
            }
            ,
            Zv.prototype.z32 = function() {
                var t;
                t: {
                    for (var n = this.x32_1.t24_1.j(); n.l(); ) {
                        var i = n.k();
                        if (i instanceof va) {
                            t = i;
                            break t
                        }
                    }
                    t = null
                }
                return t instanceof va ? t : null
            }
            ,
            Zv.prototype.c33 = function() {
                var t, n = this.x32_1.u24_1;
                if (null == n)
                    t = null;
                else {
                    for (var i = Ju(Xu(n, 10)), e = n.j(); e.l(); ) {
                        var r;
                        r = new Xv(e.k()),
                        i.a(r)
                    }
                    t = i
                }
                return t
            }
            ,
            Zv.prototype.toString = function() {
                return "AnnotatedCardSide(cardSide=" + this.x32_1 + ")"
            }
            ,
            Zv.prototype.hashCode = function() {
                return this.x32_1.hashCode()
            }
            ,
            Zv.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof Zv))
                    return !1;
                var n = t instanceof Zv ? t : Zr();
                return !!this.x32_1.equals(n.x32_1)
            }
            ,
            Xv.prototype.toString = function() {
                return "AnnotatedCardSideDistractor(distractor=" + this.d33_1 + ")"
            }
            ,
            Xv.prototype.hashCode = function() {
                return this.d33_1.hashCode()
            }
            ,
            Xv.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof Xv))
                    return !1;
                var n = t instanceof Xv ? t : Zr();
                return !!this.d33_1.equals(n.d33_1)
            }
            ,
            iy.prototype.g33 = function(t) {
                return !(!this.e33_1.equals(t.e33_1) || !t.f33_1 && this.f33_1)
            }
            ,
            iy.prototype.toString = function() {
                return "Input(studiableData=" + this.e33_1 + ", skipTextClassification=" + this.f33_1 + ")"
            }
            ,
            iy.prototype.hashCode = function() {
                var t = this.e33_1.hashCode();
                return t = Kr(t, 31) + (0 | this.f33_1) | 0
            }
            ,
            iy.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof iy))
                    return !1;
                var n = t instanceof iy ? t : Zr();
                return !!this.e33_1.equals(n.e33_1) && this.f33_1 === n.f33_1
            }
            ,
            ry.prototype.k33 = function(t, n) {
                var i = this.h33_1;
                if (!0 === (null == i ? null : i.g33(t))) {
                    var e = this.i33_1;
                    if (null == e)
                        throw Su(Lo("Missing lastStudyableMaterialDataSource, but have matching studiableData."));
                    return e
                }
                var r = n(t.e33_1, t.f33_1);
                return ey(this, t, r),
                r
            }
            ,
            ly.prototype.n2v = function(t, n, i) {
                var e = oy()
                  , r = new iy(t,n);
                return e.k33(r, ay(i))
            }
            ,
            ly.prototype.o33 = function(t, n, i, e, r) {
                return 0 != (1 & e) && (n = !1),
                this.n2v(t, n, i)
            }
            ,
            ly.prototype.p33 = function(t, n) {
                if (t.h())
                    return wo();
                for (var i = Fo(No(Xu(n, 10)), 16), e = Wo(i), r = n.j(); r.l(); ) {
                    var o, u = r.k();
                    o = u.m24_1,
                    e.d5(o, u)
                }
                for (var s = e, a = Hu(), l = t.j(); l.l(); ) {
                    var h, _ = l.k(), c = s.d3(_.r23_1);
                    t: {
                        var f = _.v23_1;
                        if (Qu(f, vs) && f.h())
                            h = !0;
                        else {
                            for (var d = f.j(); d.l(); ) {
                                var p = d.k();
                                if (null == (null == c ? null : c.q24(p))) {
                                    h = !1;
                                    break t
                                }
                            }
                            h = !0
                        }
                    }
                    var v, y = h;
                    t: {
                        var w = _.u23_1;
                        if (Qu(w, vs) && w.h())
                            v = !0;
                        else {
                            for (var b = w.j(); b.l(); ) {
                                var g = b.k();
                                if (null == (null == c ? null : c.q24(g))) {
                                    v = !1;
                                    break t
                                }
                            }
                            v = !0
                        }
                    }
                    null != c && y && v && a.a(_)
                }
                for (var k = a, $ = Ju(Xu(k, 10)), m = k.j(); m.l(); ) {
                    var j;
                    j = sy(m.k(), hy(), s),
                    $.a(j)
                }
                return $
            }
            ,
            _y.prototype.f1o = function() {
                return dy()
            }
            ,
            fy.prototype.y12 = function() {
                return this.q33_1
            }
            ,
            fy.prototype.d1d = function() {
                return [Cu(), Cu(), $u(Cu()), $u(Cu())]
            }
            ,
            fy.prototype.l13 = function(t) {
                var n = this.q33_1
                  , i = !0
                  , e = 0
                  , r = 0
                  , o = 0
                  , u = 0
                  , s = null
                  , a = null
                  , l = t.g16(n);
                if (l.v16())
                    o = l.l16(n, 0),
                    r |= 1,
                    u = l.l16(n, 1),
                    r |= 2,
                    s = l.u16(n, 2, Cu(), s),
                    r |= 4,
                    a = l.u16(n, 3, Cu(), a),
                    r |= 8;
                else
                    for (; i; )
                        switch (e = l.w16(n)) {
                        case -1:
                            i = !1;
                            break;
                        case 0:
                            o = l.l16(n, 0),
                            r |= 1;
                            break;
                        case 1:
                            u = l.l16(n, 1),
                            r |= 2;
                            break;
                        case 2:
                            s = l.u16(n, 2, Cu(), s),
                            r |= 4;
                            break;
                        case 3:
                            a = l.u16(n, 3, Cu(), a),
                            r |= 8;
                            break;
                        default:
                            throw vu(e)
                        }
                return l.h16(n),
                vy(r, o, u, s, a, null)
            }
            ,
            fy.prototype.r33 = function(t, n) {
                var i = this.q33_1
                  , e = t.g16(i);
                e.o17(i, 0, n.s33_1),
                (e.a18(i, 1) || 2 !== n.t33_1) && e.o17(i, 1, n.t33_1),
                (e.a18(i, 2) || null != n.u33_1) && e.w17(i, 2, Cu(), n.u33_1),
                (e.a18(i, 3) || null != n.v33_1) && e.w17(i, 3, Cu(), n.v33_1),
                e.h16(i)
            }
            ,
            fy.prototype.i13 = function(t, n) {
                return this.r33(t, n instanceof yy ? n : Zr())
            }
            ,
            yy.prototype.toString = function() {
                return "AdsSettings(numCardsToShowAds=" + this.s33_1 + ", numCardsPriorToPreloadAds=" + this.t33_1 + ", minShownInterval=" + this.u33_1 + ", maxNumAds=" + this.v33_1 + ")"
            }
            ,
            yy.prototype.hashCode = function() {
                var t = this.s33_1;
                return t = Kr(t, 31) + this.t33_1 | 0,
                t = Kr(t, 31) + (null == this.u33_1 ? 0 : this.u33_1) | 0,
                t = Kr(t, 31) + (null == this.v33_1 ? 0 : this.v33_1) | 0
            }
            ,
            yy.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof yy))
                    return !1;
                var n = t instanceof yy ? t : Zr();
                return this.s33_1 === n.s33_1 && this.t33_1 === n.t33_1 && this.u33_1 == n.u33_1 && this.v33_1 == n.v33_1
            }
            ,
            wy.prototype.f1o = function() {
                return ky()
            }
            ,
            gy.prototype.y12 = function() {
                return this.w33_1
            }
            ,
            gy.prototype.d1d = function() {
                return [pu(), pu()]
            }
            ,
            gy.prototype.l13 = function(t) {
                var n = this.w33_1
                  , i = !0
                  , e = 0
                  , r = 0
                  , o = !1
                  , u = !1
                  , s = t.g16(n);
                if (s.v16())
                    o = s.i16(n, 0),
                    r |= 1,
                    u = s.i16(n, 1),
                    r |= 2;
                else
                    for (; i; )
                        switch (e = s.w16(n)) {
                        case -1:
                            i = !1;
                            break;
                        case 0:
                            o = s.i16(n, 0),
                            r |= 1;
                            break;
                        case 1:
                            u = s.i16(n, 1),
                            r |= 2;
                            break;
                        default:
                            throw vu(e)
                        }
                return s.h16(n),
                my(r, o, u, null)
            }
            ,
            gy.prototype.x33 = function(t, n) {
                var i = this.w33_1
                  , e = t.g16(i);
                e.l17(i, 0, n.y33_1),
                e.l17(i, 1, n.z33_1),
                e.h16(i)
            }
            ,
            gy.prototype.i13 = function(t, n) {
                return this.x33(t, n instanceof jy ? n : Zr())
            }
            ,
            jy.prototype.toString = function() {
                return "AdsState(shouldShowAds=" + this.y33_1 + ", shouldPreloadAds=" + this.z33_1 + ")"
            }
            ,
            jy.prototype.hashCode = function() {
                var t = 0 | this.y33_1;
                return t = Kr(t, 31) + (0 | this.z33_1) | 0
            }
            ,
            jy.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof jy))
                    return !1;
                var n = t instanceof jy ? t : Zr();
                return this.y33_1 === n.y33_1 && this.z33_1 === n.z33_1
            }
            ,
            qy.prototype.f1o = function() {
                return Sy()
            }
            ,
            xy.prototype.y12 = function() {
                return this.a34_1
            }
            ,
            xy.prototype.d1d = function() {
                return [pu(), pu(), pu()]
            }
            ,
            xy.prototype.l13 = function(t) {
                var n = this.a34_1
                  , i = !0
                  , e = 0
                  , r = 0
                  , o = !1
                  , u = !1
                  , s = !1
                  , a = t.g16(n);
                if (a.v16())
                    o = a.i16(n, 0),
                    r |= 1,
                    u = a.i16(n, 1),
                    r |= 2,
                    s = a.i16(n, 2),
                    r |= 4;
                else
                    for (; i; )
                        switch (e = a.w16(n)) {
                        case -1:
                            i = !1;
                            break;
                        case 0:
                            o = a.i16(n, 0),
                            r |= 1;
                            break;
                        case 1:
                            u = a.i16(n, 1),
                            r |= 2;
                            break;
                        case 2:
                            s = a.i16(n, 2),
                            r |= 4;
                            break;
                        default:
                            throw vu(e)
                        }
                return a.h16(n),
                Ty(r, o, u, s, null)
            }
            ,
            xy.prototype.b34 = function(t, n) {
                var i = this.a34_1
                  , e = t.g16(i);
                e.l17(i, 0, n.p2s_1),
                e.l17(i, 1, n.q2s_1),
                e.l17(i, 2, n.r2s_1),
                e.h16(i)
            }
            ,
            xy.prototype.i13 = function(t, n) {
                return this.b34(t, n instanceof My ? n : Zr())
            }
            ,
            My.prototype.toString = function() {
                return "AssistantGradingSettings(acceptsPartialAnswer=" + this.p2s_1 + ", acceptsAnswersWithTypos=" + this.q2s_1 + ", acceptsSmartGrading=" + this.r2s_1 + ")"
            }
            ,
            My.prototype.hashCode = function() {
                var t = 0 | this.p2s_1;
                return t = Kr(t, 31) + (0 | this.q2s_1) | 0,
                t = Kr(t, 31) + (0 | this.r2s_1) | 0
            }
            ,
            My.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof My))
                    return !1;
                var n = t instanceof My ? t : Zr();
                return this.p2s_1 === n.p2s_1 && this.q2s_1 === n.q2s_1 && this.r2s_1 === n.r2s_1
            }
            ,
            Ey.prototype.y12 = function() {
                return this.c34_1
            }
            ,
            Ey.prototype.d1d = function() {
                return [new Ma(mu()), new Ma(mu()), new Ma(mu())]
            }
            ,
            Ey.prototype.l13 = function(t) {
                var n = this.c34_1
                  , i = !0
                  , e = 0
                  , r = 0
                  , o = null
                  , u = null
                  , s = null
                  , a = t.g16(n);
                if (a.v16())
                    o = a.s16(n, 0, new Ma(mu()), o),
                    r |= 1,
                    u = a.s16(n, 1, new Ma(mu()), u),
                    r |= 2,
                    s = a.s16(n, 2, new Ma(mu()), s),
                    r |= 4;
                else
                    for (; i; )
                        switch (e = a.w16(n)) {
                        case -1:
                            i = !1;
                            break;
                        case 0:
                            o = a.s16(n, 0, new Ma(mu()), o),
                            r |= 1;
                            break;
                        case 1:
                            u = a.s16(n, 1, new Ma(mu()), u),
                            r |= 2;
                            break;
                        case 2:
                            s = a.s16(n, 2, new Ma(mu()), s),
                            r |= 4;
                            break;
                        default:
                            throw vu(e)
                        }
                return a.h16(n),
                Gy(r, o, u, s, null)
            }
            ,
            Ey.prototype.d34 = function(t, n) {
                var i = this.c34_1
                  , e = t.g16(i);
                e.v17(i, 0, new Ma(mu()), n.e34_1),
                e.v17(i, 1, new Ma(mu()), n.f34_1),
                e.v17(i, 2, new Ma(mu()), n.g34_1),
                e.h16(i)
            }
            ,
            Ey.prototype.i13 = function(t, n) {
                return this.d34(t, n instanceof Py ? n : Zr())
            }
            ,
            Py.prototype.toString = function() {
                return "WebWriteMasteryBuckets(remaining=" + this.e34_1 + ", incorrect=" + this.f34_1 + ", correct=" + this.g34_1 + ")"
            }
            ,
            Py.prototype.hashCode = function() {
                var t = Tu(this.e34_1);
                return t = Kr(t, 31) + Tu(this.f34_1) | 0,
                t = Kr(t, 31) + Tu(this.g34_1) | 0
            }
            ,
            Py.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof Py))
                    return !1;
                var n = t instanceof Py ? t : Zr();
                return !!_u(this.e34_1, n.e34_1) && !!_u(this.f34_1, n.f34_1) && !!_u(this.g34_1, n.g34_1)
            }
            ,
            By.prototype.y12 = function() {
                return this.h34_1
            }
            ,
            By.prototype.d1d = function() {
                return [new Ma(mu()), new Ma(mu())]
            }
            ,
            By.prototype.l13 = function(t) {
                var n = this.h34_1
                  , i = !0
                  , e = 0
                  , r = 0
                  , o = null
                  , u = null
                  , s = t.g16(n);
                if (s.v16())
                    o = s.s16(n, 0, new Ma(mu()), o),
                    r |= 1,
                    u = s.s16(n, 1, new Ma(mu()), u),
                    r |= 2;
                else
                    for (; i; )
                        switch (e = s.w16(n)) {
                        case -1:
                            i = !1;
                            break;
                        case 0:
                            o = s.s16(n, 0, new Ma(mu()), o),
                            r |= 1;
                            break;
                        case 1:
                            u = s.s16(n, 1, new Ma(mu()), u),
                            r |= 2;
                            break;
                        default:
                            throw vu(e)
                        }
                return s.h16(n),
                Wy(r, o, u, null)
            }
            ,
            By.prototype.i34 = function(t, n) {
                var i = this.h34_1
                  , e = t.g16(i);
                e.v17(i, 0, new Ma(mu()), n.j34_1),
                e.v17(i, 1, new Ma(mu()), n.k34_1),
                e.h16(i)
            }
            ,
            By.prototype.i13 = function(t, n) {
                return this.i34(t, n instanceof Uy ? n : Zr())
            }
            ,
            Uy.prototype.toString = function() {
                return "AndroidWriteMasteryBuckets(correctZeroTimes=" + this.j34_1 + ", correctOneTime=" + this.k34_1 + ")"
            }
            ,
            Uy.prototype.hashCode = function() {
                var t = Tu(this.j34_1);
                return t = Kr(t, 31) + Tu(this.k34_1) | 0
            }
            ,
            Uy.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof Uy))
                    return !1;
                var n = t instanceof Uy ? t : Zr();
                return !!_u(this.j34_1, n.j34_1) && !!_u(this.k34_1, n.k34_1)
            }
            ,
            Yy.prototype.y12 = function() {
                return this.l34_1
            }
            ,
            Yy.prototype.d1d = function() {
                return [new Ma(mu()), new Ma(mu()), new Ma(mu())]
            }
            ,
            Yy.prototype.l13 = function(t) {
                var n = this.l34_1
                  , i = !0
                  , e = 0
                  , r = 0
                  , o = null
                  , u = null
                  , s = null
                  , a = t.g16(n);
                if (a.v16())
                    o = a.s16(n, 0, new Ma(mu()), o),
                    r |= 1,
                    u = a.s16(n, 1, new Ma(mu()), u),
                    r |= 2,
                    s = a.s16(n, 2, new Ma(mu()), s),
                    r |= 4;
                else
                    for (; i; )
                        switch (e = a.w16(n)) {
                        case -1:
                            i = !1;
                            break;
                        case 0:
                            o = a.s16(n, 0, new Ma(mu()), o),
                            r |= 1;
                            break;
                        case 1:
                            u = a.s16(n, 1, new Ma(mu()), u),
                            r |= 2;
                            break;
                        case 2:
                            s = a.s16(n, 2, new Ma(mu()), s),
                            r |= 4;
                            break;
                        default:
                            throw vu(e)
                        }
                return a.h16(n),
                Xy(r, o, u, s, null)
            }
            ,
            Yy.prototype.m34 = function(t, n) {
                var i = this.l34_1
                  , e = t.g16(i);
                e.v17(i, 0, new Ma(mu()), n.n34_1),
                e.v17(i, 1, new Ma(mu()), n.o34_1),
                e.v17(i, 2, new Ma(mu()), n.p34_1),
                e.h16(i)
            }
            ,
            Yy.prototype.i13 = function(t, n) {
                return this.m34(t, n instanceof Jy ? n : Zr())
            }
            ,
            Jy.prototype.toString = function() {
                return "IosWriteMasteryBuckets(correctZeroTimes=" + this.n34_1 + ", correctOneTime=" + this.o34_1 + ", correctTwoTimes=" + this.p34_1 + ")"
            }
            ,
            Jy.prototype.hashCode = function() {
                var t = Tu(this.n34_1);
                return t = Kr(t, 31) + Tu(this.o34_1) | 0,
                t = Kr(t, 31) + Tu(this.p34_1) | 0
            }
            ,
            Jy.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof Jy))
                    return !1;
                var n = t instanceof Jy ? t : Zr();
                return !!_u(this.n34_1, n.n34_1) && !!_u(this.o34_1, n.o34_1) && !!_u(this.p34_1, n.p34_1)
            }
            ,
            iw.prototype.y12 = function() {
                return this.q34_1
            }
            ,
            iw.prototype.d1d = function() {
                return [new Ma(mu()), new Ma(mu()), new Ma(mu())]
            }
            ,
            iw.prototype.l13 = function(t) {
                var n = this.q34_1
                  , i = !0
                  , e = 0
                  , r = 0
                  , o = null
                  , u = null
                  , s = null
                  , a = t.g16(n);
                if (a.v16())
                    o = a.s16(n, 0, new Ma(mu()), o),
                    r |= 1,
                    u = a.s16(n, 1, new Ma(mu()), u),
                    r |= 2,
                    s = a.s16(n, 2, new Ma(mu()), s),
                    r |= 4;
                else
                    for (; i; )
                        switch (e = a.w16(n)) {
                        case -1:
                            i = !1;
                            break;
                        case 0:
                            o = a.s16(n, 0, new Ma(mu()), o),
                            r |= 1;
                            break;
                        case 1:
                            u = a.s16(n, 1, new Ma(mu()), u),
                            r |= 2;
                            break;
                        case 2:
                            s = a.s16(n, 2, new Ma(mu()), s),
                            r |= 4;
                            break;
                        default:
                            throw vu(e)
                        }
                return a.h16(n),
                ow(r, o, u, s, null)
            }
            ,
            iw.prototype.r34 = function(t, n) {
                var i = this.q34_1
                  , e = t.g16(i);
                e.v17(i, 0, new Ma(mu()), n.s34_1),
                e.v17(i, 1, new Ma(mu()), n.t34_1),
                e.v17(i, 2, new Ma(mu()), n.u34_1),
                e.h16(i)
            }
            ,
            iw.prototype.i13 = function(t, n) {
                return this.r34(t, n instanceof uw ? n : Zr())
            }
            ,
            uw.prototype.toString = function() {
                return "SpellMasteryBuckets(correctZeroTimes=" + this.s34_1 + ", correctOneTime=" + this.t34_1 + ", correctTwoTimes=" + this.u34_1 + ")"
            }
            ,
            uw.prototype.hashCode = function() {
                var t = Tu(this.s34_1);
                return t = Kr(t, 31) + Tu(this.t34_1) | 0,
                t = Kr(t, 31) + Tu(this.u34_1) | 0
            }
            ,
            uw.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof uw))
                    return !1;
                var n = t instanceof uw ? t : Zr();
                return !!_u(this.s34_1, n.s34_1) && !!_u(this.t34_1, n.t34_1) && !!_u(this.u34_1, n.u34_1)
            }
            ,
            lw.prototype.y12 = function() {
                return this.v34_1
            }
            ,
            lw.prototype.d1d = function() {
                return [new Ma(mu()), new Ma(mu())]
            }
            ,
            lw.prototype.l13 = function(t) {
                var n = this.v34_1
                  , i = !0
                  , e = 0
                  , r = 0
                  , o = null
                  , u = null
                  , s = t.g16(n);
                if (s.v16())
                    o = s.s16(n, 0, new Ma(mu()), o),
                    r |= 1,
                    u = s.s16(n, 1, new Ma(mu()), u),
                    r |= 2;
                else
                    for (; i; )
                        switch (e = s.w16(n)) {
                        case -1:
                            i = !1;
                            break;
                        case 0:
                            o = s.s16(n, 0, new Ma(mu()), o),
                            r |= 1;
                            break;
                        case 1:
                            u = s.s16(n, 1, new Ma(mu()), u),
                            r |= 2;
                            break;
                        default:
                            throw vu(e)
                        }
                return s.h16(n),
                cw(r, o, u, null)
            }
            ,
            lw.prototype.w34 = function(t, n) {
                var i = this.v34_1
                  , e = t.g16(i);
                e.v17(i, 0, new Ma(mu()), n.x34_1),
                e.v17(i, 1, new Ma(mu()), n.y34_1),
                e.h16(i)
            }
            ,
            lw.prototype.i13 = function(t, n) {
                return this.w34(t, n instanceof fw ? n : Zr())
            }
            ,
            fw.prototype.toString = function() {
                return "FlashcardsMasteryBuckets(remaining=" + this.x34_1 + ", completed=" + this.y34_1 + ")"
            }
            ,
            fw.prototype.hashCode = function() {
                var t = Tu(this.x34_1);
                return t = Kr(t, 31) + Tu(this.y34_1) | 0
            }
            ,
            fw.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof fw))
                    return !1;
                var n = t instanceof fw ? t : Zr();
                return !!_u(this.x34_1, n.x34_1) && !!_u(this.y34_1, n.y34_1)
            }
            ,
            ww.prototype.y12 = function() {
                return this.z34_1
            }
            ,
            ww.prototype.d1d = function() {
                return [Ia(), $u(Aa()), $u(Cu())]
            }
            ,
            ww.prototype.l13 = function(t) {
                var n = this.z34_1
                  , i = !0
                  , e = 0
                  , r = 0
                  , o = null
                  , u = null
                  , s = null
                  , a = t.g16(n);
                if (a.v16())
                    o = a.s16(n, 0, Ia(), o),
                    r |= 1,
                    u = a.u16(n, 1, Aa(), u),
                    r |= 2,
                    s = a.u16(n, 2, Cu(), s),
                    r |= 4;
                else
                    for (; i; )
                        switch (e = a.w16(n)) {
                        case -1:
                            i = !1;
                            break;
                        case 0:
                            o = a.s16(n, 0, Ia(), o),
                            r |= 1;
                            break;
                        case 1:
                            u = a.u16(n, 1, Aa(), u),
                            r |= 2;
                            break;
                        case 2:
                            s = a.u16(n, 2, Cu(), s),
                            r |= 4;
                            break;
                        default:
                            throw vu(e)
                        }
                return a.h16(n),
                kw(r, o, u, s, null)
            }
            ,
            ww.prototype.a35 = function(t, n) {
                var i = this.z34_1
                  , e = t.g16(i);
                e.v17(i, 0, Ia(), n.j2v_1),
                (e.a18(i, 1) || null != n.k2v_1) && e.w17(i, 1, Aa(), n.k2v_1),
                (e.a18(i, 2) || null != n.l2v_1) && e.w17(i, 2, Cu(), n.l2v_1),
                e.h16(i)
            }
            ,
            ww.prototype.i13 = function(t, n) {
                return this.a35(t, n instanceof $w ? n : Zr())
            }
            ,
            $w.prototype.toString = function() {
                return "QuestionSource(studiableMetadataType=" + this.j2v_1 + ", studiableMetadataCategory=" + this.k2v_1 + ", studiableMetadataRank=" + this.l2v_1 + ")"
            }
            ,
            $w.prototype.hashCode = function() {
                var t = this.j2v_1.hashCode();
                return t = Kr(t, 31) + (null == this.k2v_1 ? 0 : this.k2v_1.hashCode()) | 0,
                t = Kr(t, 31) + (null == this.l2v_1 ? 0 : this.l2v_1) | 0
            }
            ,
            $w.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof $w))
                    return !1;
                var n = t instanceof $w ? t : Zr();
                return !!this.j2v_1.equals(n.j2v_1) && !!_u(this.k2v_1, n.k2v_1) && this.l2v_1 == n.l2v_1
            }
            ,
            jw.prototype.f1o = function() {
                return xw()
            }
            ,
            Cw.prototype.y12 = function() {
                return this.b35_1
            }
            ,
            Cw.prototype.d1d = function() {
                return [Cu(), Cu()]
            }
            ,
            Cw.prototype.l13 = function(t) {
                var n = this.b35_1
                  , i = !0
                  , e = 0
                  , r = 0
                  , o = 0
                  , u = 0
                  , s = t.g16(n);
                if (s.v16())
                    o = s.l16(n, 0),
                    r |= 1,
                    u = s.l16(n, 1),
                    r |= 2;
                else
                    for (; i; )
                        switch (e = s.w16(n)) {
                        case -1:
                            i = !1;
                            break;
                        case 0:
                            o = s.l16(n, 0),
                            r |= 1;
                            break;
                        case 1:
                            u = s.l16(n, 1),
                            r |= 2;
                            break;
                        default:
                            throw vu(e)
                        }
                return s.h16(n),
                zw(r, o, u, null)
            }
            ,
            Cw.prototype.c35 = function(t, n) {
                var i = this.b35_1
                  , e = t.g16(i);
                e.o17(i, 0, n.d35_1),
                e.o17(i, 1, n.e35_1),
                e.h16(i)
            }
            ,
            Cw.prototype.i13 = function(t, n) {
                return this.c35(t, n instanceof Tw ? n : Zr())
            }
            ,
            Tw.prototype.r32 = function() {
                return this.d35_1
            }
            ,
            Tw.prototype.s32 = function() {
                return this.e35_1
            }
            ,
            Tw.prototype.toString = function() {
                return "TaskRoundProgress(numItemsCompleted=" + this.d35_1 + ", numTotalItems=" + this.e35_1 + ")"
            }
            ,
            Tw.prototype.hashCode = function() {
                var t = this.d35_1;
                return t = Kr(t, 31) + this.e35_1 | 0
            }
            ,
            Tw.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof Tw))
                    return !1;
                var n = t instanceof Tw ? t : Zr();
                return this.d35_1 === n.d35_1 && this.e35_1 === n.e35_1
            }
            ,
            Mw.prototype.f1o = function() {
                return Ow()
            }
            ,
            Aw.prototype.y12 = function() {
                return this.f35_1
            }
            ,
            Aw.prototype.d1d = function() {
                return [Cu(), Cu()]
            }
            ,
            Aw.prototype.l13 = function(t) {
                var n = this.f35_1
                  , i = !0
                  , e = 0
                  , r = 0
                  , o = 0
                  , u = 0
                  , s = t.g16(n);
                if (s.v16())
                    o = s.l16(n, 0),
                    r |= 1,
                    u = s.l16(n, 1),
                    r |= 2;
                else
                    for (; i; )
                        switch (e = s.w16(n)) {
                        case -1:
                            i = !1;
                            break;
                        case 0:
                            o = s.l16(n, 0),
                            r |= 1;
                            break;
                        case 1:
                            u = s.l16(n, 1),
                            r |= 2;
                            break;
                        default:
                            throw vu(e)
                        }
                return s.h16(n),
                Rw(r, o, u, null)
            }
            ,
            Aw.prototype.g35 = function(t, n) {
                var i = this.f35_1
                  , e = t.g16(i);
                e.o17(i, 0, n.h35_1),
                e.o17(i, 1, n.i35_1),
                e.h16(i)
            }
            ,
            Aw.prototype.i13 = function(t, n) {
                return this.g35(t, n instanceof Qw ? n : Zr())
            }
            ,
            Qw.prototype.toString = function() {
                return "RoundProgress(numerator=" + this.h35_1 + ", denominator=" + this.i35_1 + ")"
            }
            ,
            Qw.prototype.hashCode = function() {
                var t = this.h35_1;
                return t = Kr(t, 31) + this.i35_1 | 0
            }
            ,
            Qw.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof Qw))
                    return !1;
                var n = t instanceof Qw ? t : Zr();
                return this.h35_1 === n.h35_1 && this.i35_1 === n.i35_1
            }
            ,
            Gw.prototype.f1o = function() {
                return Lw()
            }
            ,
            Dw.prototype.y12 = function() {
                return this.j35_1
            }
            ,
            Dw.prototype.d1d = function() {
                var t, n = go(wa), i = [go(qa), go(ga)];
                t = [Oa(), Ea()];
                var e, r = new Ma(cu("assistantMode.refactored.modelTypes.StudiableItem", n, i, t, [])), o = new Qa(mu(),Ra()), u = Ia(), s = go(Ga), a = [go(Pa), go(Da), go(La), go(Ba)];
                return e = [Na(), Fa(), Wa(), Ua()],
                [r, o, new Qa(u,new Ma(cu("assistantMode.refactored.types.StudiableMetadata", s, a, e, [])))]
            }
            ,
            Dw.prototype.l13 = function(t) {
                var n = this.j35_1
                  , i = !0
                  , e = 0
                  , r = 0
                  , o = null
                  , u = null
                  , s = null
                  , a = t.g16(n);
                if (a.v16()) {
                    var l, h = go(wa), _ = [go(qa), go(ga)], c = [Oa(), Ea()];
                    l = [],
                    o = a.s16(n, 0, new Ma(cu("assistantMode.refactored.modelTypes.StudiableItem", h, _, c, l)), o),
                    r |= 1,
                    u = a.s16(n, 1, new Qa(mu(),Ra()), u),
                    r |= 2;
                    var f, d = Ia(), p = go(Ga), v = [go(Pa), go(Da), go(La), go(Ba)], y = [Na(), Fa(), Wa(), Ua()];
                    f = [],
                    s = a.s16(n, 2, new Qa(d,new Ma(cu("assistantMode.refactored.types.StudiableMetadata", p, v, y, f))), s),
                    r |= 4
                } else
                    for (; i; )
                        switch (e = a.w16(n)) {
                        case -1:
                            i = !1;
                            break;
                        case 0:
                            var w, b = go(wa), g = [go(qa), go(ga)], k = [Oa(), Ea()];
                            w = [],
                            o = a.s16(n, 0, new Ma(cu("assistantMode.refactored.modelTypes.StudiableItem", b, g, k, w)), o),
                            r |= 1;
                            break;
                        case 1:
                            u = a.s16(n, 1, new Qa(mu(),Ra()), u),
                            r |= 2;
                            break;
                        case 2:
                            var $, m = Ia(), j = go(Ga), q = [go(Pa), go(Da), go(La), go(Ba)], C = [Na(), Fa(), Wa(), Ua()];
                            $ = [],
                            s = a.s16(n, 2, new Qa(m,new Ma(cu("assistantMode.refactored.types.StudiableMetadata", j, q, C, $))), s),
                            r |= 4;
                            break;
                        default:
                            throw vu(e)
                        }
                return a.h16(n),
                Nw(r, o, u, s, null)
            }
            ,
            Dw.prototype.k35 = function(t, n) {
                var i, e = this.j35_1, r = t.g16(e), o = go(wa), u = [go(qa), go(ga)], s = [Oa(), Ea()];
                if (i = [],
                r.v17(e, 0, new Ma(cu("assistantMode.refactored.modelTypes.StudiableItem", o, u, s, i)), n.l33_1),
                !r.a18(e, 1) && _u(n.m33_1, ms()) || r.v17(e, 1, new Qa(mu(),Ra()), n.m33_1),
                r.a18(e, 2) || !_u(n.n33_1, ms())) {
                    var a, l = Ia(), h = go(Ga), _ = [go(Pa), go(Da), go(La), go(Ba)], c = [Na(), Fa(), Wa(), Ua()];
                    a = [],
                    r.v17(e, 2, new Qa(l,new Ma(cu("assistantMode.refactored.types.StudiableMetadata", h, _, c, a))), n.n33_1)
                }
                r.h16(e)
            }
            ,
            Dw.prototype.i13 = function(t, n) {
                return this.k35(t, n instanceof Fw ? n : Zr())
            }
            ,
            Fw.prototype.l35 = function(t, n, i) {
                return new Fw(t,n,i)
            }
            ,
            Fw.prototype.m35 = function(t, n, i, e, r) {
                return 0 != (1 & e) && (t = this.l33_1),
                0 != (2 & e) && (n = this.m33_1),
                0 != (4 & e) && (i = this.n33_1),
                this.l35(t, n, i)
            }
            ,
            Fw.prototype.toString = function() {
                return "StudiableData(studiableItems=" + this.l33_1 + ", setIdToDiagramImage=" + this.m33_1 + ", studiableMetadataByType=" + this.n33_1 + ")"
            }
            ,
            Fw.prototype.hashCode = function() {
                var t = Tu(this.l33_1);
                return t = Kr(t, 31) + Tu(this.m33_1) | 0,
                t = Kr(t, 31) + Tu(this.n33_1) | 0
            }
            ,
            Fw.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof Fw))
                    return !1;
                var n = t instanceof Fw ? t : Zr();
                return !!_u(this.l33_1, n.l33_1) && !!_u(this.m33_1, n.m33_1) && !!_u(this.n33_1, n.n33_1)
            }
            ,
            Ww.prototype.f1o = function() {
                return Hw()
            }
            ,
            Vw.prototype.y12 = function() {
                return this.n35_1
            }
            ,
            Vw.prototype.d1d = function() {
                return [pb(), Sy(), $u(Jw()), $u(HC()), Ov(), pu()]
            }
            ,
            Vw.prototype.l13 = function(t) {
                var n = this.n35_1
                  , i = !0
                  , e = 0
                  , r = 0
                  , o = null
                  , u = null
                  , s = null
                  , a = null
                  , l = null
                  , h = !1
                  , _ = t.g16(n);
                if (_.v16())
                    o = _.s16(n, 0, pb(), o),
                    r |= 1,
                    u = _.s16(n, 1, Sy(), u),
                    r |= 2,
                    s = _.u16(n, 2, Jw(), s),
                    r |= 4,
                    a = _.u16(n, 3, HC(), a),
                    r |= 8,
                    l = _.s16(n, 4, Ov(), l),
                    r |= 16,
                    h = _.i16(n, 5),
                    r |= 32;
                else
                    for (; i; )
                        switch (e = _.w16(n)) {
                        case -1:
                            i = !1;
                            break;
                        case 0:
                            o = _.s16(n, 0, pb(), o),
                            r |= 1;
                            break;
                        case 1:
                            u = _.s16(n, 1, Sy(), u),
                            r |= 2;
                            break;
                        case 2:
                            s = _.u16(n, 2, Jw(), s),
                            r |= 4;
                            break;
                        case 3:
                            a = _.u16(n, 3, HC(), a),
                            r |= 8;
                            break;
                        case 4:
                            l = _.s16(n, 4, Ov(), l),
                            r |= 16;
                            break;
                        case 5:
                            h = _.i16(n, 5),
                            r |= 32;
                            break;
                        default:
                            throw vu(e)
                        }
                return _.h16(n),
                Kw(r, o, u, s, a, l, h, null)
            }
            ,
            Vw.prototype.o35 = function(t, n) {
                var i = this.n35_1
                  , e = t.g16(i);
                e.v17(i, 0, pb(), n.p35_1),
                e.v17(i, 1, Sy(), n.q35_1),
                e.w17(i, 2, Jw(), n.r35_1),
                e.w17(i, 3, HC(), n.s35_1),
                e.v17(i, 4, Ov(), n.t35_1),
                e.l17(i, 5, n.u35_1),
                e.h16(i)
            }
            ,
            Vw.prototype.i13 = function(t, n) {
                return this.o35(t, n instanceof Zw ? n : Zr())
            }
            ,
            Zw.prototype.v35 = function() {
                var t;
                switch (this.t35_1.r1_1) {
                case 0:
                    t = Dq();
                    break;
                case 1:
                    t = Bq();
                    break;
                case 2:
                    t = Nq();
                    break;
                case 3:
                    t = Lq();
                    break;
                case 4:
                    t = Fq();
                    break;
                default:
                    Yu()
                }
                return t
            }
            ,
            Zw.prototype.toString = function() {
                return "StudyEngineSettings(studySettings=" + this.p35_1 + ", gradingSettings=" + this.q35_1 + ", studyLearnSettings=" + this.r35_1 + ", experimentConfiguration=" + this.s35_1 + ", studyMode=" + this.t35_1 + ", shouldFetchStudiableMetadata=" + this.u35_1 + ")"
            }
            ,
            Zw.prototype.hashCode = function() {
                var t = this.p35_1.hashCode();
                return t = Kr(t, 31) + this.q35_1.hashCode() | 0,
                t = Kr(t, 31) + (null == this.r35_1 ? 0 : this.r35_1.hashCode()) | 0,
                t = Kr(t, 31) + (null == this.s35_1 ? 0 : this.s35_1.hashCode()) | 0,
                t = Kr(t, 31) + this.t35_1.hashCode() | 0,
                t = Kr(t, 31) + (0 | this.u35_1) | 0
            }
            ,
            Zw.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof Zw))
                    return !1;
                var n = t instanceof Zw ? t : Zr();
                return !!(this.p35_1.equals(n.p35_1) && this.q35_1.equals(n.q35_1) && _u(this.r35_1, n.r35_1) && _u(this.s35_1, n.s35_1) && this.t35_1.equals(n.t35_1) && this.u35_1 === n.u35_1)
            }
            ,
            Xw.prototype.y12 = function() {
                return this.w35_1
            }
            ,
            Xw.prototype.d1d = function() {
                return [pu(), pu(), $u(mu()), pu()]
            }
            ,
            Xw.prototype.l13 = function(t) {
                var n = this.w35_1
                  , i = !0
                  , e = 0
                  , r = 0
                  , o = !1
                  , u = !1
                  , s = null
                  , a = !1
                  , l = t.g16(n);
                if (l.v16())
                    o = l.i16(n, 0),
                    r |= 1,
                    u = l.i16(n, 1),
                    r |= 2,
                    s = l.u16(n, 2, mu(), s),
                    r |= 4,
                    a = l.i16(n, 3),
                    r |= 8;
                else
                    for (; i; )
                        switch (e = l.w16(n)) {
                        case -1:
                            i = !1;
                            break;
                        case 0:
                            o = l.i16(n, 0),
                            r |= 1;
                            break;
                        case 1:
                            u = l.i16(n, 1),
                            r |= 2;
                            break;
                        case 2:
                            s = l.u16(n, 2, mu(), s),
                            r |= 4;
                            break;
                        case 3:
                            a = l.i16(n, 3),
                            r |= 8;
                            break;
                        default:
                            throw vu(e)
                        }
                return l.h16(n),
                nb(r, o, u, s, a, null)
            }
            ,
            Xw.prototype.x35 = function(t, n) {
                var i = this.w35_1
                  , e = t.g16(i);
                e.l17(i, 0, n.y35_1),
                e.l17(i, 1, n.z35_1),
                (e.a18(i, 2) || null != n.a36_1) && e.w17(i, 2, mu(), n.a36_1),
                (e.a18(i, 3) || !0 !== n.b36_1) && e.l17(i, 3, n.b36_1),
                e.h16(i)
            }
            ,
            Xw.prototype.i13 = function(t, n) {
                return this.x35(t, n instanceof ib ? n : Zr())
            }
            ,
            ib.prototype.toString = function() {
                return "StudyLearnSettings(showTasks=" + this.y35_1 + ", shouldInterleaveQuestions=" + this.z35_1 + ", crossModeResetTimestamp=" + qu(this.a36_1) + ", shouldFallbackToFlashcardsForLongText=" + this.b36_1 + ")"
            }
            ,
            ib.prototype.hashCode = function() {
                var t = 0 | this.y35_1;
                return t = Kr(t, 31) + (0 | this.z35_1) | 0,
                t = Kr(t, 31) + (null == this.a36_1 ? 0 : this.a36_1.hashCode()) | 0,
                t = Kr(t, 31) + (0 | this.b36_1) | 0
            }
            ,
            ib.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof ib))
                    return !1;
                var n = t instanceof ib ? t : Zr();
                return this.y35_1 === n.y35_1 && this.z35_1 === n.z35_1 && !!_u(this.a36_1, n.a36_1) && this.b36_1 === n.b36_1
            }
            ,
            sb.prototype.y12 = function() {
                return this.c36_1
            }
            ,
            sb.prototype.d1d = function() {
                return [new Ma(Va()), new Ma(Ha()), new Ma(Ha()), new Ma(Ha()), new Ma(Va())]
            }
            ,
            sb.prototype.l13 = function(t) {
                var n = this.c36_1
                  , i = !0
                  , e = 0
                  , r = 0
                  , o = null
                  , u = null
                  , s = null
                  , a = null
                  , l = null
                  , h = t.g16(n);
                if (h.v16())
                    o = h.s16(n, 0, new Ma(Va()), o),
                    r |= 1,
                    u = h.s16(n, 1, new Ma(Ha()), u),
                    r |= 2,
                    s = h.s16(n, 2, new Ma(Ha()), s),
                    r |= 4,
                    a = h.s16(n, 3, new Ma(Ha()), a),
                    r |= 8,
                    l = h.s16(n, 4, new Ma(Va()), l),
                    r |= 16;
                else
                    for (; i; )
                        switch (e = h.w16(n)) {
                        case -1:
                            i = !1;
                            break;
                        case 0:
                            o = h.s16(n, 0, new Ma(Va()), o),
                            r |= 1;
                            break;
                        case 1:
                            u = h.s16(n, 1, new Ma(Ha()), u),
                            r |= 2;
                            break;
                        case 2:
                            s = h.s16(n, 2, new Ma(Ha()), s),
                            r |= 4;
                            break;
                        case 3:
                            a = h.s16(n, 3, new Ma(Ha()), a),
                            r |= 8;
                            break;
                        case 4:
                            l = h.s16(n, 4, new Ma(Va()), l),
                            r |= 16;
                            break;
                        default:
                            throw vu(e)
                        }
                return h.h16(n),
                hb(r, o, u, s, a, l, null)
            }
            ,
            sb.prototype.d36 = function(t, n) {
                var i = this.c36_1
                  , e = t.g16(i);
                e.v17(i, 0, new Ma(Va()), n.e36_1),
                e.v17(i, 1, new Ma(Ha()), n.f36_1),
                e.v17(i, 2, new Ma(Ha()), n.g36_1),
                e.v17(i, 3, new Ma(Ha()), n.h36_1),
                !e.a18(i, 4) && _u(n.i36_1, Eh()) || e.v17(i, 4, new Ma(Va()), n.i36_1),
                e.h16(i)
            }
            ,
            sb.prototype.i13 = function(t, n) {
                return this.d36(t, n instanceof _b ? n : Zr())
            }
            ,
            _b.prototype.toString = function() {
                return "NSidedCardSettings(enabledQuestionTypes=" + this.e36_1 + ", enabledPromptSides=" + this.f36_1 + ", enabledAnswerSides=" + this.g36_1 + ", enabledWrittenAnswerSides=" + this.h36_1 + ", enabledLocationQuestionTypes=" + this.i36_1 + ")"
            }
            ,
            _b.prototype.hashCode = function() {
                var t = Tu(this.e36_1);
                return t = Kr(t, 31) + Tu(this.f36_1) | 0,
                t = Kr(t, 31) + Tu(this.g36_1) | 0,
                t = Kr(t, 31) + Tu(this.h36_1) | 0,
                t = Kr(t, 31) + Tu(this.i36_1) | 0
            }
            ,
            _b.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof _b))
                    return !1;
                var n = t instanceof _b ? t : Zr();
                return !!(_u(this.e36_1, n.e36_1) && _u(this.f36_1, n.f36_1) && _u(this.g36_1, n.g36_1) && _u(this.h36_1, n.h36_1) && _u(this.i36_1, n.i36_1))
            }
            ,
            cb.prototype.f1o = function() {
                return pb()
            }
            ,
            db.prototype.y12 = function() {
                return this.j36_1
            }
            ,
            db.prototype.d1d = function() {
                return [$u(Ya()), ab(), pu(), $u(Ka()), $u(Za()), Xa()]
            }
            ,
            db.prototype.l13 = function(t) {
                var n = this.j36_1
                  , i = !0
                  , e = 0
                  , r = 0
                  , o = null
                  , u = null
                  , s = !1
                  , a = null
                  , l = null
                  , h = null
                  , _ = t.g16(n);
                if (_.v16())
                    o = _.u16(n, 0, Ya(), o),
                    r |= 1,
                    u = _.s16(n, 1, ab(), u),
                    r |= 2,
                    s = _.i16(n, 2),
                    r |= 4,
                    a = _.u16(n, 3, Ka(), a),
                    r |= 8,
                    l = _.u16(n, 4, Za(), l),
                    r |= 16,
                    h = _.q16(n, 5),
                    r |= 32;
                else
                    for (; i; )
                        switch (e = _.w16(n)) {
                        case -1:
                            i = !1;
                            break;
                        case 0:
                            o = _.u16(n, 0, Ya(), o),
                            r |= 1;
                            break;
                        case 1:
                            u = _.s16(n, 1, ab(), u),
                            r |= 2;
                            break;
                        case 2:
                            s = _.i16(n, 2),
                            r |= 4;
                            break;
                        case 3:
                            a = _.u16(n, 3, Ka(), a),
                            r |= 8;
                            break;
                        case 4:
                            l = _.u16(n, 4, Za(), l),
                            r |= 16;
                            break;
                        case 5:
                            h = _.q16(n, 5),
                            r |= 32;
                            break;
                        default:
                            throw vu(e)
                        }
                return _.h16(n),
                yb(r, o, u, s, a, l, h, null)
            }
            ,
            db.prototype.k36 = function(t, n) {
                var i = this.j36_1
                  , e = t.g16(i);
                e.w17(i, 0, Ya(), n.l36_1),
                e.v17(i, 1, ab(), n.m36_1),
                e.l17(i, 2, n.n36_1),
                e.w17(i, 3, Ka(), n.o36_1),
                e.w17(i, 4, Za(), n.p36_1),
                e.t17(i, 5, n.q36_1),
                e.h16(i)
            }
            ,
            db.prototype.i13 = function(t, n) {
                return this.k36(t, n instanceof wb ? n : Zr())
            }
            ,
            wb.prototype.toString = function() {
                return "StudySettings(knowledgeLevel=" + this.l36_1 + ", nSidedCardSettings=" + this.m36_1 + ", shuffle=" + this.n36_1 + ", studyPathGoal=" + this.o36_1 + ", taskSequence=" + this.p36_1 + ", userLanguageCode=" + this.q36_1 + ")"
            }
            ,
            wb.prototype.hashCode = function() {
                var t = null == this.l36_1 ? 0 : this.l36_1.hashCode();
                return t = Kr(t, 31) + this.m36_1.hashCode() | 0,
                t = Kr(t, 31) + (0 | this.n36_1) | 0,
                t = Kr(t, 31) + (null == this.o36_1 ? 0 : this.o36_1.hashCode()) | 0,
                t = Kr(t, 31) + (null == this.p36_1 ? 0 : this.p36_1.hashCode()) | 0,
                t = Kr(t, 31) + us(this.q36_1) | 0
            }
            ,
            wb.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof wb))
                    return !1;
                var n = t instanceof wb ? t : Zr();
                return !!(_u(this.l36_1, n.l36_1) && this.m36_1.equals(n.m36_1) && this.n36_1 === n.n36_1 && _u(this.o36_1, n.o36_1) && _u(this.p36_1, n.p36_1) && this.q36_1 === n.q36_1)
            }
            ,
            bb.prototype.f1o = function() {
                var t, n = go(kb), i = [go(wg), go(Eb), go(Bb), go(Yb), go(Sb), go(Bg), go(ig), go(lg)];
                return t = [pg(), Ib(), Pb(), Ub(), qb(), Pg(), Jb(), ug()],
                cu("assistantMode.refactored.types.Question", n, i, t, [])
            }
            ,
            bb.prototype.m1d = function(t) {
                return this.f1o()
            }
            ,
            jb.prototype.y12 = function() {
                return this.s36_1
            }
            ,
            jb.prototype.d1d = function() {
                return [new Ma(Ja()), new Ma(Ja()), Zq(), Va()]
            }
            ,
            jb.prototype.l13 = function(t) {
                var n = this.s36_1
                  , i = !0
                  , e = 0
                  , r = 0
                  , o = null
                  , u = null
                  , s = null
                  , a = null
                  , l = t.g16(n);
                if (l.v16())
                    o = l.s16(n, 0, new Ma(Ja()), o),
                    r |= 1,
                    u = l.s16(n, 1, new Ma(Ja()), u),
                    r |= 2,
                    s = l.s16(n, 2, Zq(), s),
                    r |= 4,
                    a = l.s16(n, 3, Va(), a),
                    r |= 8;
                else
                    for (; i; )
                        switch (e = l.w16(n)) {
                        case -1:
                            i = !1;
                            break;
                        case 0:
                            o = l.s16(n, 0, new Ma(Ja()), o),
                            r |= 1;
                            break;
                        case 1:
                            u = l.s16(n, 1, new Ma(Ja()), u),
                            r |= 2;
                            break;
                        case 2:
                            s = l.s16(n, 2, Zq(), s),
                            r |= 4;
                            break;
                        case 3:
                            a = l.s16(n, 3, Va(), a),
                            r |= 8;
                            break;
                        default:
                            throw vu(e)
                        }
                return l.h16(n),
                xb(r, o, u, s, a, null)
            }
            ,
            jb.prototype.t36 = function(t, n) {
                var i = this.s36_1
                  , e = t.g16(i);
                e.v17(i, 0, new Ma(Ja()), n.u36_1),
                e.v17(i, 1, new Ma(Ja()), n.v36_1),
                e.v17(i, 2, Zq(), n.w36_1),
                !e.a18(i, 3) && n.x36_1.equals(Uo()) || e.v17(i, 3, Va(), n.x36_1),
                e.h16(i)
            }
            ,
            jb.prototype.i13 = function(t, n) {
                return this.t36(t, n instanceof Sb ? n : Zr())
            }
            ,
            Sb.prototype.r36 = function() {
                return this.w36_1
            }
            ,
            Sb.prototype.w23 = function() {
                return this.x36_1
            }
            ,
            Sb.prototype.toString = function() {
                return "SeparatedOptionMatchingQuestion(prompts=" + this.u36_1 + ", options=" + this.v36_1 + ", metadata=" + this.w36_1 + ")"
            }
            ,
            Sb.prototype.hashCode = function() {
                var t = Tu(this.u36_1);
                return t = Kr(t, 31) + Tu(this.v36_1) | 0,
                t = Kr(t, 31) + this.w36_1.hashCode() | 0
            }
            ,
            Sb.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof Sb))
                    return !1;
                var n = t instanceof Sb ? t : Zr();
                return !!_u(this.u36_1, n.u36_1) && !!_u(this.v36_1, n.v36_1) && !!this.w36_1.equals(n.w36_1)
            }
            ,
            Mb.prototype.y12 = function() {
                return this.y36_1
            }
            ,
            Mb.prototype.d1d = function() {
                return [new Ma(Ja()), Zq(), Va()]
            }
            ,
            Mb.prototype.l13 = function(t) {
                var n = this.y36_1
                  , i = !0
                  , e = 0
                  , r = 0
                  , o = null
                  , u = null
                  , s = null
                  , a = t.g16(n);
                if (a.v16())
                    o = a.s16(n, 0, new Ma(Ja()), o),
                    r |= 1,
                    u = a.s16(n, 1, Zq(), u),
                    r |= 2,
                    s = a.s16(n, 2, Va(), s),
                    r |= 4;
                else
                    for (; i; )
                        switch (e = a.w16(n)) {
                        case -1:
                            i = !1;
                            break;
                        case 0:
                            o = a.s16(n, 0, new Ma(Ja()), o),
                            r |= 1;
                            break;
                        case 1:
                            u = a.s16(n, 1, Zq(), u),
                            r |= 2;
                            break;
                        case 2:
                            s = a.s16(n, 2, Va(), s),
                            r |= 4;
                            break;
                        default:
                            throw vu(e)
                        }
                return a.h16(n),
                Ob(r, o, u, s, null)
            }
            ,
            Mb.prototype.z36 = function(t, n) {
                var i = this.y36_1
                  , e = t.g16(i);
                e.v17(i, 0, new Ma(Ja()), n.a37_1),
                e.v17(i, 1, Zq(), n.b37_1),
                !e.a18(i, 2) && n.c37_1.equals(ea()) || e.v17(i, 2, Va(), n.c37_1),
                e.h16(i)
            }
            ,
            Mb.prototype.i13 = function(t, n) {
                return this.z36(t, n instanceof Eb ? n : Zr())
            }
            ,
            Eb.prototype.r36 = function() {
                return this.b37_1
            }
            ,
            Eb.prototype.w23 = function() {
                return this.c37_1
            }
            ,
            Eb.prototype.toString = function() {
                return "MixedOptionMatchingQuestion(options=" + this.a37_1 + ", metadata=" + this.b37_1 + ")"
            }
            ,
            Eb.prototype.hashCode = function() {
                var t = Tu(this.a37_1);
                return t = Kr(t, 31) + this.b37_1.hashCode() | 0
            }
            ,
            Eb.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof Eb))
                    return !1;
                var n = t instanceof Eb ? t : Zr();
                return !!_u(this.a37_1, n.a37_1) && !!this.b37_1.equals(n.b37_1)
            }
            ,
            Gb.prototype.y12 = function() {
                return this.d37_1
            }
            ,
            Gb.prototype.d1d = function() {
                return [Ja(), $u(Ja()), new Ma(Ja()), pu(), Zq(), Va()]
            }
            ,
            Gb.prototype.l13 = function(t) {
                var n = this.d37_1
                  , i = !0
                  , e = 0
                  , r = 0
                  , o = null
                  , u = null
                  , s = null
                  , a = !1
                  , l = null
                  , h = null
                  , _ = t.g16(n);
                if (_.v16())
                    o = _.s16(n, 0, Ja(), o),
                    r |= 1,
                    u = _.u16(n, 1, Ja(), u),
                    r |= 2,
                    s = _.s16(n, 2, new Ma(Ja()), s),
                    r |= 4,
                    a = _.i16(n, 3),
                    r |= 8,
                    l = _.s16(n, 4, Zq(), l),
                    r |= 16,
                    h = _.s16(n, 5, Va(), h),
                    r |= 32;
                else
                    for (; i; )
                        switch (e = _.w16(n)) {
                        case -1:
                            i = !1;
                            break;
                        case 0:
                            o = _.s16(n, 0, Ja(), o),
                            r |= 1;
                            break;
                        case 1:
                            u = _.u16(n, 1, Ja(), u),
                            r |= 2;
                            break;
                        case 2:
                            s = _.s16(n, 2, new Ma(Ja()), s),
                            r |= 4;
                            break;
                        case 3:
                            a = _.i16(n, 3),
                            r |= 8;
                            break;
                        case 4:
                            l = _.s16(n, 4, Zq(), l),
                            r |= 16;
                            break;
                        case 5:
                            h = _.s16(n, 5, Va(), h),
                            r |= 32;
                            break;
                        default:
                            throw vu(e)
                        }
                return _.h16(n),
                Lb(r, o, u, s, a, l, h, null)
            }
            ,
            Gb.prototype.e37 = function(t, n) {
                var i = this.d37_1
                  , e = t.g16(i);
                e.v17(i, 0, Ja(), n.f37_1),
                e.w17(i, 1, Ja(), n.g37_1),
                e.v17(i, 2, new Ma(Ja()), n.h37_1),
                e.l17(i, 3, n.i37_1),
                e.v17(i, 4, Zq(), n.j37_1),
                !e.a18(i, 5) && n.k37_1.equals(ro()) || e.v17(i, 5, Va(), n.k37_1),
                e.h16(i)
            }
            ,
            Gb.prototype.i13 = function(t, n) {
                return this.e37(t, n instanceof Bb ? n : Zr())
            }
            ,
            Bb.prototype.r36 = function() {
                return this.j37_1
            }
            ,
            Bb.prototype.w23 = function() {
                return this.k37_1
            }
            ,
            Bb.prototype.toString = function() {
                return "MultipleChoiceQuestion(prompt=" + this.f37_1 + ", hint=" + this.g37_1 + ", options=" + this.h37_1 + ", hasExactlyOneCorrectAnswer=" + this.i37_1 + ", metadata=" + this.j37_1 + ")"
            }
            ,
            Bb.prototype.hashCode = function() {
                var t = this.f37_1.hashCode();
                return t = Kr(t, 31) + (null == this.g37_1 ? 0 : this.g37_1.hashCode()) | 0,
                t = Kr(t, 31) + Tu(this.h37_1) | 0,
                t = Kr(t, 31) + (0 | this.i37_1) | 0,
                t = Kr(t, 31) + this.j37_1.hashCode() | 0
            }
            ,
            Bb.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof Bb))
                    return !1;
                var n = t instanceof Bb ? t : Zr();
                return !!(this.f37_1.equals(n.f37_1) && _u(this.g37_1, n.g37_1) && _u(this.h37_1, n.h37_1) && this.i37_1 === n.i37_1 && this.j37_1.equals(n.j37_1))
            }
            ,
            Wb.prototype.y12 = function() {
                return this.l37_1
            }
            ,
            Wb.prototype.d1d = function() {
                return [Ja(), Ja(), Zq(), Va()]
            }
            ,
            Wb.prototype.l13 = function(t) {
                var n = this.l37_1
                  , i = !0
                  , e = 0
                  , r = 0
                  , o = null
                  , u = null
                  , s = null
                  , a = null
                  , l = t.g16(n);
                if (l.v16())
                    o = l.s16(n, 0, Ja(), o),
                    r |= 1,
                    u = l.s16(n, 1, Ja(), u),
                    r |= 2,
                    s = l.s16(n, 2, Zq(), s),
                    r |= 4,
                    a = l.s16(n, 3, Va(), a),
                    r |= 8;
                else
                    for (; i; )
                        switch (e = l.w16(n)) {
                        case -1:
                            i = !1;
                            break;
                        case 0:
                            o = l.s16(n, 0, Ja(), o),
                            r |= 1;
                            break;
                        case 1:
                            u = l.s16(n, 1, Ja(), u),
                            r |= 2;
                            break;
                        case 2:
                            s = l.s16(n, 2, Zq(), s),
                            r |= 4;
                            break;
                        case 3:
                            a = l.s16(n, 3, Va(), a),
                            r |= 8;
                            break;
                        default:
                            throw vu(e)
                        }
                return l.h16(n),
                Hb(r, o, u, s, a, null)
            }
            ,
            Wb.prototype.m37 = function(t, n) {
                var i = this.l37_1
                  , e = t.g16(i);
                e.v17(i, 0, Ja(), n.n37_1),
                e.v17(i, 1, Ja(), n.o37_1),
                e.v17(i, 2, Zq(), n.p37_1),
                !e.a18(i, 3) && n.q37_1.equals(uo()) || e.v17(i, 3, Va(), n.q37_1),
                e.h16(i)
            }
            ,
            Wb.prototype.i13 = function(t, n) {
                return this.m37(t, n instanceof Yb ? n : Zr())
            }
            ,
            Yb.prototype.r36 = function() {
                return this.p37_1
            }
            ,
            Yb.prototype.w23 = function() {
                return this.q37_1
            }
            ,
            Yb.prototype.toString = function() {
                return "RevealSelfAssessmentQuestion(front=" + this.n37_1 + ", back=" + this.o37_1 + ", metadata=" + this.p37_1 + ")"
            }
            ,
            Yb.prototype.hashCode = function() {
                var t = this.n37_1.hashCode();
                return t = Kr(t, 31) + this.o37_1.hashCode() | 0,
                t = Kr(t, 31) + this.p37_1.hashCode() | 0
            }
            ,
            Yb.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof Yb))
                    return !1;
                var n = t instanceof Yb ? t : Zr();
                return !!this.n37_1.equals(n.n37_1) && !!this.o37_1.equals(n.o37_1) && !!this.p37_1.equals(n.p37_1)
            }
            ,
            Xb.prototype.y12 = function() {
                return this.r37_1
            }
            ,
            Xb.prototype.d1d = function() {
                return [Ja(), Ja(), Zq(), Va()]
            }
            ,
            Xb.prototype.l13 = function(t) {
                var n = this.r37_1
                  , i = !0
                  , e = 0
                  , r = 0
                  , o = null
                  , u = null
                  , s = null
                  , a = null
                  , l = t.g16(n);
                if (l.v16())
                    o = l.s16(n, 0, Ja(), o),
                    r |= 1,
                    u = l.s16(n, 1, Ja(), u),
                    r |= 2,
                    s = l.s16(n, 2, Zq(), s),
                    r |= 4,
                    a = l.s16(n, 3, Va(), a),
                    r |= 8;
                else
                    for (; i; )
                        switch (e = l.w16(n)) {
                        case -1:
                            i = !1;
                            break;
                        case 0:
                            o = l.s16(n, 0, Ja(), o),
                            r |= 1;
                            break;
                        case 1:
                            u = l.s16(n, 1, Ja(), u),
                            r |= 2;
                            break;
                        case 2:
                            s = l.s16(n, 2, Zq(), s),
                            r |= 4;
                            break;
                        case 3:
                            a = l.s16(n, 3, Va(), a),
                            r |= 8;
                            break;
                        default:
                            throw vu(e)
                        }
                return l.h16(n),
                ng(r, o, u, s, a, null)
            }
            ,
            Xb.prototype.s37 = function(t, n) {
                var i = this.r37_1
                  , e = t.g16(i);
                e.v17(i, 0, Ja(), n.t37_1),
                e.v17(i, 1, Ja(), n.u37_1),
                e.v17(i, 2, Zq(), n.v37_1),
                !e.a18(i, 3) && n.w37_1.equals(oo()) || e.v17(i, 3, Va(), n.w37_1),
                e.h16(i)
            }
            ,
            Xb.prototype.i13 = function(t, n) {
                return this.s37(t, n instanceof ig ? n : Zr())
            }
            ,
            ig.prototype.r36 = function() {
                return this.v37_1
            }
            ,
            ig.prototype.w23 = function() {
                return this.w37_1
            }
            ,
            ig.prototype.toString = function() {
                return "TrueFalseQuestion(prompt=" + this.t37_1 + ", goesWith=" + this.u37_1 + ", metadata=" + this.v37_1 + ")"
            }
            ,
            ig.prototype.hashCode = function() {
                var t = this.t37_1.hashCode();
                return t = Kr(t, 31) + this.u37_1.hashCode() | 0,
                t = Kr(t, 31) + this.v37_1.hashCode() | 0
            }
            ,
            ig.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof ig))
                    return !1;
                var n = t instanceof ig ? t : Zr();
                return !!this.t37_1.equals(n.t37_1) && !!this.u37_1.equals(n.u37_1) && !!this.v37_1.equals(n.v37_1)
            }
            ,
            og.prototype.y12 = function() {
                return this.x37_1
            }
            ,
            og.prototype.d1d = function() {
                return [Ja(), Xa(), $u(Ja()), Zq(), Va()]
            }
            ,
            og.prototype.l13 = function(t) {
                var n = this.x37_1
                  , i = !0
                  , e = 0
                  , r = 0
                  , o = null
                  , u = null
                  , s = null
                  , a = null
                  , l = null
                  , h = t.g16(n);
                if (h.v16())
                    o = h.s16(n, 0, Ja(), o),
                    r |= 1,
                    u = h.q16(n, 1),
                    r |= 2,
                    s = h.u16(n, 2, Ja(), s),
                    r |= 4,
                    a = h.s16(n, 3, Zq(), a),
                    r |= 8,
                    l = h.s16(n, 4, Va(), l),
                    r |= 16;
                else
                    for (; i; )
                        switch (e = h.w16(n)) {
                        case -1:
                            i = !1;
                            break;
                        case 0:
                            o = h.s16(n, 0, Ja(), o),
                            r |= 1;
                            break;
                        case 1:
                            u = h.q16(n, 1),
                            r |= 2;
                            break;
                        case 2:
                            s = h.u16(n, 2, Ja(), s),
                            r |= 4;
                            break;
                        case 3:
                            a = h.s16(n, 3, Zq(), a),
                            r |= 8;
                            break;
                        case 4:
                            l = h.s16(n, 4, Va(), l),
                            r |= 16;
                            break;
                        default:
                            throw vu(e)
                        }
                return h.h16(n),
                ag(r, o, u, s, a, l, null)
            }
            ,
            og.prototype.y37 = function(t, n) {
                var i = this.x37_1
                  , e = t.g16(i);
                e.v17(i, 0, Ja(), n.z37_1),
                e.t17(i, 1, n.a38_1),
                e.w17(i, 2, Ja(), n.b38_1),
                e.v17(i, 3, Zq(), n.c38_1),
                !e.a18(i, 4) && n.d38_1.equals(io()) || e.v17(i, 4, Va(), n.d38_1),
                e.h16(i)
            }
            ,
            og.prototype.i13 = function(t, n) {
                return this.y37(t, n instanceof lg ? n : Zr())
            }
            ,
            lg.prototype.r36 = function() {
                return this.c38_1
            }
            ,
            lg.prototype.w23 = function() {
                return this.d38_1
            }
            ,
            lg.prototype.toString = function() {
                return "WrittenQuestion(prompt=" + this.z37_1 + ", answerLanguageCode=" + this.a38_1 + ", hint=" + this.b38_1 + ", metadata=" + this.c38_1 + ")"
            }
            ,
            lg.prototype.hashCode = function() {
                var t = this.z37_1.hashCode();
                return t = Kr(t, 31) + us(this.a38_1) | 0,
                t = Kr(t, 31) + (null == this.b38_1 ? 0 : this.b38_1.hashCode()) | 0,
                t = Kr(t, 31) + this.c38_1.hashCode() | 0
            }
            ,
            lg.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof lg))
                    return !1;
                var n = t instanceof lg ? t : Zr();
                return !!this.z37_1.equals(n.z37_1) && this.a38_1 === n.a38_1 && !!_u(this.b38_1, n.b38_1) && !!this.c38_1.equals(n.c38_1)
            }
            ,
            dg.prototype.y12 = function() {
                return this.e38_1
            }
            ,
            dg.prototype.d1d = function() {
                var t, n = Ja(), i = go(Wg), e = [go(Xg), go(ok)];
                return t = [Yg(), ik()],
                [n, new Ma(cu("assistantMode.refactored.types.FillInTheBlankSegment", i, e, t, [])), Zq(), Xa(), $u(Xa()), Va()]
            }
            ,
            dg.prototype.l13 = function(t) {
                var n = this.e38_1
                  , i = !0
                  , e = 0
                  , r = 0
                  , o = null
                  , u = null
                  , s = null
                  , a = null
                  , l = null
                  , h = null
                  , _ = t.g16(n);
                if (_.v16()) {
                    o = _.s16(n, 0, Ja(), o),
                    r |= 1;
                    var c, f = go(Wg), d = [go(Xg), go(ok)], p = [Yg(), ik()];
                    c = [],
                    u = _.s16(n, 1, new Ma(cu("assistantMode.refactored.types.FillInTheBlankSegment", f, d, p, c)), u),
                    r |= 2,
                    s = _.s16(n, 2, Zq(), s),
                    r |= 4,
                    a = _.q16(n, 3),
                    r |= 8,
                    l = _.u16(n, 4, Xa(), l),
                    r |= 16,
                    h = _.s16(n, 5, Va(), h),
                    r |= 32
                } else
                    for (; i; )
                        switch (e = _.w16(n)) {
                        case -1:
                            i = !1;
                            break;
                        case 0:
                            o = _.s16(n, 0, Ja(), o),
                            r |= 1;
                            break;
                        case 1:
                            var v, y = go(Wg), w = [go(Xg), go(ok)], b = [Yg(), ik()];
                            v = [],
                            u = _.s16(n, 1, new Ma(cu("assistantMode.refactored.types.FillInTheBlankSegment", y, w, b, v)), u),
                            r |= 2;
                            break;
                        case 2:
                            s = _.s16(n, 2, Zq(), s),
                            r |= 4;
                            break;
                        case 3:
                            a = _.q16(n, 3),
                            r |= 8;
                            break;
                        case 4:
                            l = _.u16(n, 4, Xa(), l),
                            r |= 16;
                            break;
                        case 5:
                            h = _.s16(n, 5, Va(), h),
                            r |= 32;
                            break;
                        default:
                            throw vu(e)
                        }
                return _.h16(n),
                yg(r, o, u, s, a, l, h, null)
            }
            ,
            dg.prototype.f38 = function(t, n) {
                var i = this.e38_1
                  , e = t.g16(i);
                e.v17(i, 0, Ja(), n.g38_1);
                var r, o = go(Wg), u = [go(Xg), go(ok)], s = [Yg(), ik()];
                r = [],
                e.v17(i, 1, new Ma(cu("assistantMode.refactored.types.FillInTheBlankSegment", o, u, s, r)), n.h38_1),
                e.v17(i, 2, Zq(), n.i38_1),
                e.t17(i, 3, n.j38_1),
                (e.a18(i, 4) || null != n.k38_1) && e.w17(i, 4, Xa(), n.k38_1),
                !e.a18(i, 5) && n.l38_1.equals(so()) || e.v17(i, 5, Va(), n.l38_1),
                e.h16(i)
            }
            ,
            dg.prototype.i13 = function(t, n) {
                return this.f38(t, n instanceof wg ? n : Zr())
            }
            ,
            wg.prototype.r36 = function() {
                return this.i38_1
            }
            ,
            wg.prototype.w23 = function() {
                return this.l38_1
            }
            ,
            wg.prototype.toString = function() {
                return "FillInTheBlankQuestion(prompt=" + this.g38_1 + ", segments=" + this.h38_1 + ", metadata=" + this.i38_1 + ", modelVersion=" + this.j38_1 + ", algorithm=" + this.k38_1 + ")"
            }
            ,
            wg.prototype.hashCode = function() {
                var t = this.g38_1.hashCode();
                return t = Kr(t, 31) + Tu(this.h38_1) | 0,
                t = Kr(t, 31) + this.i38_1.hashCode() | 0,
                t = Kr(t, 31) + us(this.j38_1) | 0,
                t = Kr(t, 31) + (null == this.k38_1 ? 0 : us(this.k38_1)) | 0
            }
            ,
            wg.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof wg))
                    return !1;
                var n = t instanceof wg ? t : Zr();
                return !!this.g38_1.equals(n.g38_1) && !!_u(this.h38_1, n.h38_1) && !!this.i38_1.equals(n.i38_1) && this.j38_1 === n.j38_1 && this.k38_1 == n.k38_1
            }
            ,
            jg.prototype.y12 = function() {
                return this.m38_1
            }
            ,
            jg.prototype.d1d = function() {
                return [tl(), pu(), $u(new Ma(jq())), $u(Cu()), uC()]
            }
            ,
            jg.prototype.l13 = function(t) {
                var n = this.m38_1
                  , i = !0
                  , e = 0
                  , r = 0
                  , o = null
                  , u = !1
                  , s = null
                  , a = null
                  , l = null
                  , h = t.g16(n);
                if (h.v16())
                    o = h.s16(n, 0, tl(), o),
                    r |= 1,
                    u = h.i16(n, 1),
                    r |= 2,
                    s = h.u16(n, 2, new Ma(jq()), s),
                    r |= 4,
                    a = h.u16(n, 3, Cu(), a),
                    r |= 8,
                    l = h.s16(n, 4, uC(), l),
                    r |= 16;
                else
                    for (; i; )
                        switch (e = h.w16(n)) {
                        case -1:
                            i = !1;
                            break;
                        case 0:
                            o = h.s16(n, 0, tl(), o),
                            r |= 1;
                            break;
                        case 1:
                            u = h.i16(n, 1),
                            r |= 2;
                            break;
                        case 2:
                            s = h.u16(n, 2, new Ma(jq()), s),
                            r |= 4;
                            break;
                        case 3:
                            a = h.u16(n, 3, Cu(), a),
                            r |= 8;
                            break;
                        case 4:
                            l = h.s16(n, 4, uC(), l),
                            r |= 16;
                            break;
                        default:
                            throw vu(e)
                        }
                return h.h16(n),
                xg(r, o, u, s, a, l, null)
            }
            ,
            jg.prototype.n38 = function(t, n) {
                var i = this.m38_1
                  , e = t.g16(i);
                e.v17(i, 0, tl(), n.o38_1),
                e.l17(i, 1, n.p38_1),
                e.w17(i, 2, new Ma(jq()), n.q38_1),
                e.w17(i, 3, Cu(), n.r38_1),
                (!!e.a18(i, 4) || !n.s38_1.equals(iC(null, 1, null))) && e.v17(i, 4, uC(), n.s38_1),
                e.h16(i)
            }
            ,
            jg.prototype.i13 = function(t, n) {
                return this.n38(t, n instanceof Sg ? n : Zr())
            }
            ,
            Sg.prototype.r36 = function() {
                return this.s38_1
            }
            ,
            Sg.prototype.toString = function() {
                return "Checkpoint(progressState=" + this.o38_1 + ", hasCompletedStudying=" + this.p38_1 + ", roundResults=" + this.q38_1 + ", checkpointNumber=" + this.r38_1 + ", metadata=" + this.s38_1 + ")"
            }
            ,
            Sg.prototype.hashCode = function() {
                var t = this.o38_1.hashCode();
                return t = Kr(t, 31) + (0 | this.p38_1) | 0,
                t = Kr(t, 31) + (null == this.q38_1 ? 0 : Tu(this.q38_1)) | 0,
                t = Kr(t, 31) + (null == this.r38_1 ? 0 : this.r38_1) | 0,
                t = Kr(t, 31) + this.s38_1.hashCode() | 0
            }
            ,
            Sg.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof Sg))
                    return !1;
                var n = t instanceof Sg ? t : Zr();
                return !!this.o38_1.equals(n.o38_1) && this.p38_1 === n.p38_1 && !!_u(this.q38_1, n.q38_1) && this.r38_1 == n.r38_1 && !!this.s38_1.equals(n.s38_1)
            }
            ,
            Mg.prototype.y12 = function() {
                return this.t38_1
            }
            ,
            Mg.prototype.d1d = function() {
                return [$u(qg()), pC()]
            }
            ,
            Mg.prototype.l13 = function(t) {
                var n = this.t38_1
                  , i = !0
                  , e = 0
                  , r = 0
                  , o = null
                  , u = null
                  , s = t.g16(n);
                if (s.v16())
                    o = s.u16(n, 0, qg(), o),
                    r |= 1,
                    u = s.s16(n, 1, pC(), u),
                    r |= 2;
                else
                    for (; i; )
                        switch (e = s.w16(n)) {
                        case -1:
                            i = !1;
                            break;
                        case 0:
                            o = s.u16(n, 0, qg(), o),
                            r |= 1;
                            break;
                        case 1:
                            u = s.s16(n, 1, pC(), u),
                            r |= 2;
                            break;
                        default:
                            throw vu(e)
                        }
                return s.h16(n),
                Og(r, o, u, null)
            }
            ,
            Mg.prototype.u38 = function(t, n) {
                var i = this.t38_1
                  , e = t.g16(i);
                e.w17(i, 0, qg(), n.v38_1),
                (!!e.a18(i, 1) || !n.w38_1.equals(_C(null, 1, null))) && e.v17(i, 1, pC(), n.w38_1),
                e.h16(i)
            }
            ,
            Mg.prototype.i13 = function(t, n) {
                return this.u38(t, n instanceof Eg ? n : Zr())
            }
            ,
            Eg.prototype.r36 = function() {
                return this.w38_1
            }
            ,
            Eg.prototype.toString = function() {
                return "LearnPaywall(checkpoint=" + this.v38_1 + ", metadata=" + this.w38_1 + ")"
            }
            ,
            Eg.prototype.hashCode = function() {
                var t = null == this.v38_1 ? 0 : this.v38_1.hashCode();
                return t = Kr(t, 31) + this.w38_1.hashCode() | 0
            }
            ,
            Eg.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof Eg))
                    return !1;
                var n = t instanceof Eg ? t : Zr();
                return !!_u(this.v38_1, n.v38_1) && !!this.w38_1.equals(n.w38_1)
            }
            ,
            Gg.prototype.y12 = function() {
                return this.x38_1
            }
            ,
            Gg.prototype.d1d = function() {
                return [Ja(), Xa(), Zq(), Va()]
            }
            ,
            Gg.prototype.l13 = function(t) {
                var n = this.x38_1
                  , i = !0
                  , e = 0
                  , r = 0
                  , o = null
                  , u = null
                  , s = null
                  , a = null
                  , l = t.g16(n);
                if (l.v16())
                    o = l.s16(n, 0, Ja(), o),
                    r |= 1,
                    u = l.q16(n, 1),
                    r |= 2,
                    s = l.s16(n, 2, Zq(), s),
                    r |= 4,
                    a = l.s16(n, 3, Va(), a),
                    r |= 8;
                else
                    for (; i; )
                        switch (e = l.w16(n)) {
                        case -1:
                            i = !1;
                            break;
                        case 0:
                            o = l.s16(n, 0, Ja(), o),
                            r |= 1;
                            break;
                        case 1:
                            u = l.q16(n, 1),
                            r |= 2;
                            break;
                        case 2:
                            s = l.s16(n, 2, Zq(), s),
                            r |= 4;
                            break;
                        case 3:
                            a = l.s16(n, 3, Va(), a),
                            r |= 8;
                            break;
                        default:
                            throw vu(e)
                        }
                return l.h16(n),
                Lg(r, o, u, s, a, null)
            }
            ,
            Gg.prototype.y38 = function(t, n) {
                var i = this.x38_1
                  , e = t.g16(i);
                e.v17(i, 0, Ja(), n.z38_1),
                e.t17(i, 1, n.a39_1),
                e.v17(i, 2, Zq(), n.b39_1),
                !e.a18(i, 3) && n.c39_1.equals(Ko()) || e.v17(i, 3, Va(), n.c39_1),
                e.h16(i)
            }
            ,
            Gg.prototype.i13 = function(t, n) {
                return this.y38(t, n instanceof Bg ? n : Zr())
            }
            ,
            Bg.prototype.r36 = function() {
                return this.b39_1
            }
            ,
            Bg.prototype.w23 = function() {
                return this.c39_1
            }
            ,
            Bg.prototype.toString = function() {
                return "SpellingQuestion(prompt=" + this.z38_1 + ", answerLanguageCode=" + this.a39_1 + ", metadata=" + this.b39_1 + ")"
            }
            ,
            Bg.prototype.hashCode = function() {
                var t = this.z38_1.hashCode();
                return t = Kr(t, 31) + us(this.a39_1) | 0,
                t = Kr(t, 31) + this.b39_1.hashCode() | 0
            }
            ,
            Bg.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof Bg))
                    return !1;
                var n = t instanceof Bg ? t : Zr();
                return !!this.z38_1.equals(n.z38_1) && this.a39_1 === n.a39_1 && !!this.b39_1.equals(n.b39_1)
            }
            ,
            Ng.prototype.f1o = function() {
                var t, n = go(Wg), i = [go(Xg), go(ok)];
                return t = [Yg(), ik()],
                cu("assistantMode.refactored.types.FillInTheBlankSegment", n, i, t, [])
            }
            ,
            Ng.prototype.m1d = function(t) {
                return this.f1o()
            }
            ,
            Hg.prototype.y12 = function() {
                return this.d39_1
            }
            ,
            Hg.prototype.d1d = function() {
                return [Xa(), mu()]
            }
            ,
            Hg.prototype.l13 = function(t) {
                var n = this.d39_1
                  , i = !0
                  , e = 0
                  , r = 0
                  , o = null
                  , u = new ju(0,0)
                  , s = t.g16(n);
                if (s.v16())
                    o = s.q16(n, 0),
                    r |= 1,
                    u = s.m16(n, 1),
                    r |= 2;
                else
                    for (; i; )
                        switch (e = s.w16(n)) {
                        case -1:
                            i = !1;
                            break;
                        case 0:
                            o = s.q16(n, 0),
                            r |= 1;
                            break;
                        case 1:
                            u = s.m16(n, 1),
                            r |= 2;
                            break;
                        default:
                            throw vu(e)
                        }
                return s.h16(n),
                Zg(r, o, u, null)
            }
            ,
            Hg.prototype.e39 = function(t, n) {
                var i = this.d39_1
                  , e = t.g16(i);
                e.t17(i, 0, n.f39_1),
                e.p17(i, 1, n.g39_1),
                e.h16(i)
            }
            ,
            Hg.prototype.i13 = function(t, n) {
                return this.e39(t, n instanceof Xg ? n : Zr())
            }
            ,
            Xg.prototype.toString = function() {
                return "FITBWrittenBlankSegment(answerLanguageCode=" + this.f39_1 + ", blankId=" + Lo(this.g39_1) + ")"
            }
            ,
            Xg.prototype.hashCode = function() {
                var t = us(this.f39_1);
                return t = Kr(t, 31) + this.g39_1.hashCode() | 0
            }
            ,
            Xg.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof Xg))
                    return !1;
                var n = t instanceof Xg ? t : Zr();
                return this.f39_1 === n.f39_1 && !!this.g39_1.equals(n.g39_1)
            }
            ,
            nk.prototype.y12 = function() {
                return this.h39_1
            }
            ,
            nk.prototype.d1d = function() {
                return [nl()]
            }
            ,
            nk.prototype.l13 = function(t) {
                var n = this.h39_1
                  , i = !0
                  , e = 0
                  , r = 0
                  , o = null
                  , u = t.g16(n);
                if (u.v16())
                    o = u.s16(n, 0, nl(), o),
                    r |= 1;
                else
                    for (; i; )
                        switch (e = u.w16(n)) {
                        case -1:
                            i = !1;
                            break;
                        case 0:
                            o = u.s16(n, 0, nl(), o),
                            r |= 1;
                            break;
                        default:
                            throw vu(e)
                        }
                return u.h16(n),
                rk(r, o, null)
            }
            ,
            nk.prototype.i39 = function(t, n) {
                var i = this.h39_1
                  , e = t.g16(i);
                e.v17(i, 0, nl(), n.j39_1),
                e.h16(i)
            }
            ,
            nk.prototype.i13 = function(t, n) {
                return this.i39(t, n instanceof ok ? n : Zr())
            }
            ,
            ok.prototype.toString = function() {
                return "FITBTextSegment(text=" + this.j39_1 + ")"
            }
            ,
            ok.prototype.hashCode = function() {
                return this.j39_1.hashCode()
            }
            ,
            ok.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof ok))
                    return !1;
                var n = t instanceof ok ? t : Zr();
                return !!this.j39_1.equals(n.j39_1)
            }
            ,
            ak.prototype.f1o = function() {
                return _k()
            }
            ,
            hk.prototype.y12 = function() {
                return this.p39_1
            }
            ,
            hk.prototype.d1d = function() {
                return [new Qa(Va(),Sk()), gk(), Ek()]
            }
            ,
            hk.prototype.l13 = function(t) {
                var n = this.p39_1
                  , i = !0
                  , e = 0
                  , r = 0
                  , o = null
                  , u = null
                  , s = null
                  , a = t.g16(n);
                if (a.v16())
                    o = a.s16(n, 0, new Qa(Va(),Sk()), o),
                    r |= 1,
                    u = a.s16(n, 1, gk(), u),
                    r |= 2,
                    s = a.s16(n, 2, Ek(), s),
                    r |= 4;
                else
                    for (; i; )
                        switch (e = a.w16(n)) {
                        case -1:
                            i = !1;
                            break;
                        case 0:
                            o = a.s16(n, 0, new Qa(Va(),Sk()), o),
                            r |= 1;
                            break;
                        case 1:
                            u = a.s16(n, 1, gk(), u),
                            r |= 2;
                            break;
                        case 2:
                            s = a.s16(n, 2, Ek(), s),
                            r |= 4;
                            break;
                        default:
                            throw vu(e)
                        }
                return a.h16(n),
                fk(r, o, u, s, null)
            }
            ,
            hk.prototype.q39 = function(t, n) {
                var i = this.p39_1
                  , e = t.g16(i);
                e.v17(i, 0, new Qa(Va(),Sk()), n.r39_1),
                e.v17(i, 1, gk(), n.s39_1),
                e.v17(i, 2, Ek(), n.t39_1),
                e.h16(i)
            }
            ,
            hk.prototype.i13 = function(t, n) {
                return this.q39(t, n instanceof dk ? n : Zr())
            }
            ,
            dk.prototype.toString = function() {
                return "TaskWithProgress(progressByQuestionType=" + this.r39_1 + ", task=" + this.s39_1 + ", totalProgress=" + this.t39_1 + ")"
            }
            ,
            dk.prototype.hashCode = function() {
                var t = Tu(this.r39_1);
                return t = Kr(t, 31) + this.s39_1.hashCode() | 0,
                t = Kr(t, 31) + this.t39_1.hashCode() | 0
            }
            ,
            dk.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof dk))
                    return !1;
                var n = t instanceof dk ? t : Zr();
                return !!_u(this.r39_1, n.r39_1) && !!this.s39_1.equals(n.s39_1) && !!this.t39_1.equals(n.t39_1)
            }
            ,
            bk.prototype.y12 = function() {
                return this.u39_1
            }
            ,
            bk.prototype.d1d = function() {
                return [new Ma(Va()), pu(), pu(), il(), el(), $u(bw()), pu()]
            }
            ,
            bk.prototype.l13 = function(t) {
                var n = this.u39_1
                  , i = !0
                  , e = 0
                  , r = 0
                  , o = null
                  , u = !1
                  , s = !1
                  , a = null
                  , l = null
                  , h = null
                  , _ = !1
                  , c = t.g16(n);
                if (c.v16())
                    o = c.s16(n, 0, new Ma(Va()), o),
                    r |= 1,
                    u = c.i16(n, 1),
                    r |= 2,
                    s = c.i16(n, 2),
                    r |= 4,
                    a = c.s16(n, 3, il(), a),
                    r |= 8,
                    l = c.s16(n, 4, el(), l),
                    r |= 16,
                    h = c.u16(n, 5, bw(), h),
                    r |= 32,
                    _ = c.i16(n, 6),
                    r |= 64;
                else
                    for (; i; )
                        switch (e = c.w16(n)) {
                        case -1:
                            i = !1;
                            break;
                        case 0:
                            o = c.s16(n, 0, new Ma(Va()), o),
                            r |= 1;
                            break;
                        case 1:
                            u = c.i16(n, 1),
                            r |= 2;
                            break;
                        case 2:
                            s = c.i16(n, 2),
                            r |= 4;
                            break;
                        case 3:
                            a = c.s16(n, 3, il(), a),
                            r |= 8;
                            break;
                        case 4:
                            l = c.s16(n, 4, el(), l),
                            r |= 16;
                            break;
                        case 5:
                            h = c.u16(n, 5, bw(), h),
                            r |= 32;
                            break;
                        case 6:
                            _ = c.i16(n, 6),
                            r |= 64;
                            break;
                        default:
                            throw vu(e)
                        }
                return c.h16(n),
                $k(r, o, u, s, a, l, h, _, null)
            }
            ,
            bk.prototype.v39 = function(t, n) {
                var i = this.u39_1
                  , e = t.g16(i);
                e.v17(i, 0, new Ma(Va()), n.w39_1),
                e.l17(i, 1, n.x39_1),
                e.l17(i, 2, n.y39_1),
                e.v17(i, 3, il(), n.z39_1),
                e.v17(i, 4, el(), n.a3a_1),
                (e.a18(i, 5) || null != n.b3a_1) && e.w17(i, 5, bw(), n.b3a_1),
                (e.a18(i, 6) || !1 !== n.c3a_1) && e.l17(i, 6, n.c3a_1),
                e.h16(i)
            }
            ,
            bk.prototype.i13 = function(t, n) {
                return this.v39(t, n instanceof mk ? n : Zr())
            }
            ,
            mk.prototype.d3a = function(t, n, i, e, r, o, u) {
                return new mk(t,n,i,e,r,o,u)
            }
            ,
            mk.prototype.e3a = function(t, n, i, e, r, o, u, s, a) {
                return 0 != (1 & s) && (t = this.w39_1),
                0 != (2 & s) && (n = this.x39_1),
                0 != (4 & s) && (i = this.y39_1),
                0 != (8 & s) && (e = this.z39_1),
                0 != (16 & s) && (r = this.a3a_1),
                0 != (32 & s) && (o = this.b3a_1),
                0 != (64 & s) && (u = this.c3a_1),
                this.d3a(t, n, i, e, r, o, u)
            }
            ,
            mk.prototype.toString = function() {
                return "Task(questionTypes=" + this.w39_1 + ", optional=" + this.x39_1 + ", correctnessRequirement=" + this.y39_1 + ", feedbackDelay=" + this.z39_1 + ", termCoverage=" + this.a3a_1 + ", questionSource=" + this.b3a_1 + ", isSkipped=" + this.c3a_1 + ")"
            }
            ,
            mk.prototype.hashCode = function() {
                var t = Tu(this.w39_1);
                return t = Kr(t, 31) + (0 | this.x39_1) | 0,
                t = Kr(t, 31) + (0 | this.y39_1) | 0,
                t = Kr(t, 31) + this.z39_1.hashCode() | 0,
                t = Kr(t, 31) + this.a3a_1.hashCode() | 0,
                t = Kr(t, 31) + (null == this.b3a_1 ? 0 : this.b3a_1.hashCode()) | 0,
                t = Kr(t, 31) + (0 | this.c3a_1) | 0
            }
            ,
            mk.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof mk))
                    return !1;
                var n = t instanceof mk ? t : Zr();
                return !!(_u(this.w39_1, n.w39_1) && this.x39_1 === n.x39_1 && this.y39_1 === n.y39_1 && this.z39_1.equals(n.z39_1) && this.a3a_1.equals(n.a3a_1) && _u(this.b3a_1, n.b3a_1) && this.c3a_1 === n.c3a_1)
            }
            ,
            xk.prototype.y12 = function() {
                return this.f3a_1
            }
            ,
            xk.prototype.d1d = function() {
                return [Cu(), Cu()]
            }
            ,
            xk.prototype.l13 = function(t) {
                var n = this.f3a_1
                  , i = !0
                  , e = 0
                  , r = 0
                  , o = 0
                  , u = 0
                  , s = t.g16(n);
                if (s.v16())
                    o = s.l16(n, 0),
                    r |= 1,
                    u = s.l16(n, 1),
                    r |= 2;
                else
                    for (; i; )
                        switch (e = s.w16(n)) {
                        case -1:
                            i = !1;
                            break;
                        case 0:
                            o = s.l16(n, 0),
                            r |= 1;
                            break;
                        case 1:
                            u = s.l16(n, 1),
                            r |= 2;
                            break;
                        default:
                            throw vu(e)
                        }
                return s.h16(n),
                Tk(r, o, u, null)
            }
            ,
            xk.prototype.g3a = function(t, n) {
                var i = this.f3a_1
                  , e = t.g16(i);
                e.o17(i, 0, n.h3a_1),
                e.o17(i, 1, n.i3a_1),
                e.h16(i)
            }
            ,
            xk.prototype.i13 = function(t, n) {
                return this.g3a(t, n instanceof Mk ? n : Zr())
            }
            ,
            Mk.prototype.r32 = function() {
                return this.h3a_1
            }
            ,
            Mk.prototype.s32 = function() {
                return this.i3a_1
            }
            ,
            Mk.prototype.toString = function() {
                return "TaskQuestionTypeProgress(numItemsCompleted=" + this.h3a_1 + ", numTotalItems=" + this.i3a_1 + ")"
            }
            ,
            Mk.prototype.hashCode = function() {
                var t = this.h3a_1;
                return t = Kr(t, 31) + this.i3a_1 | 0
            }
            ,
            Mk.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof Mk))
                    return !1;
                var n = t instanceof Mk ? t : Zr();
                return this.h3a_1 === n.h3a_1 && this.i3a_1 === n.i3a_1
            }
            ,
            Ok.prototype.y12 = function() {
                return this.j3a_1
            }
            ,
            Ok.prototype.d1d = function() {
                return [Cu(), Cu()]
            }
            ,
            Ok.prototype.l13 = function(t) {
                var n = this.j3a_1
                  , i = !0
                  , e = 0
                  , r = 0
                  , o = 0
                  , u = 0
                  , s = t.g16(n);
                if (s.v16())
                    o = s.l16(n, 0),
                    r |= 1,
                    u = s.l16(n, 1),
                    r |= 2;
                else
                    for (; i; )
                        switch (e = s.w16(n)) {
                        case -1:
                            i = !1;
                            break;
                        case 0:
                            o = s.l16(n, 0),
                            r |= 1;
                            break;
                        case 1:
                            u = s.l16(n, 1),
                            r |= 2;
                            break;
                        default:
                            throw vu(e)
                        }
                return s.h16(n),
                Qk(r, o, u, null)
            }
            ,
            Ok.prototype.k3a = function(t, n) {
                var i = this.j3a_1
                  , e = t.g16(i);
                e.o17(i, 0, n.l3a_1),
                e.o17(i, 1, n.m3a_1),
                e.h16(i)
            }
            ,
            Ok.prototype.i13 = function(t, n) {
                return this.k3a(t, n instanceof Gk ? n : Zr())
            }
            ,
            Gk.prototype.r32 = function() {
                return this.l3a_1
            }
            ,
            Gk.prototype.s32 = function() {
                return this.m3a_1
            }
            ,
            Gk.prototype.toString = function() {
                return "TaskProgress(numItemsCompleted=" + this.l3a_1 + ", numTotalItems=" + this.m3a_1 + ")"
            }
            ,
            Gk.prototype.hashCode = function() {
                var t = this.l3a_1;
                return t = Kr(t, 31) + this.m3a_1 | 0
            }
            ,
            Gk.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof Gk))
                    return !1;
                var n = t instanceof Gk ? t : Zr();
                return this.l3a_1 === n.l3a_1 && this.m3a_1 === n.m3a_1
            }
            ,
            Pk.prototype.r32 = function() {
                return this.n3a_1
            }
            ,
            Pk.prototype.s32 = function() {
                return this.o3a_1
            }
            ,
            Pk.prototype.toString = function() {
                return "TaskSequenceProgress(numItemsCompleted=" + this.n3a_1 + ", numTotalItems=" + this.o3a_1 + ")"
            }
            ,
            Pk.prototype.hashCode = function() {
                var t = this.n3a_1;
                return t = Kr(t, 31) + this.o3a_1 | 0
            }
            ,
            Pk.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof Pk))
                    return !1;
                var n = t instanceof Pk ? t : Zr();
                return this.n3a_1 === n.n3a_1 && this.o3a_1 === n.o3a_1
            }
            ,
            Dk.prototype.b5 = function() {
                return this.p3a_1
            }
            ,
            Dk.prototype.c5 = function() {
                return this.q3a_1
            }
            ,
            Dk.prototype.toString = function() {
                return "TaskQuestionTypePair(task=" + this.p3a_1 + ", questionType=" + this.q3a_1 + ")"
            }
            ,
            Dk.prototype.hashCode = function() {
                var t = this.p3a_1.hashCode();
                return t = Kr(t, 31) + this.q3a_1.hashCode() | 0
            }
            ,
            Dk.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof Dk))
                    return !1;
                var n = t instanceof Dk ? t : Zr();
                return !!this.p3a_1.equals(n.p3a_1) && !!this.q3a_1.equals(n.q3a_1)
            }
            ,
            Lk.prototype.f1o = function() {
                return Fk()
            }
            ,
            Nk.prototype.y12 = function() {
                return this.r3a_1
            }
            ,
            Nk.prototype.d1d = function() {
                var t = go(Iy);
                return [rl(t, []), ol()]
            }
            ,
            Nk.prototype.l13 = function(t) {
                var n = this.r3a_1
                  , i = !0
                  , e = 0
                  , r = 0
                  , o = null
                  , u = 0
                  , s = t.g16(n);
                if (s.v16()) {
                    var a, l = go(Iy);
                    a = [],
                    o = s.s16(n, 0, rl(l, a), o),
                    r |= 1,
                    u = s.o16(n, 1),
                    r |= 2
                } else
                    for (; i; )
                        switch (e = s.w16(n)) {
                        case -1:
                            i = !1;
                            break;
                        case 0:
                            var h, _ = go(Iy);
                            h = [],
                            o = s.s16(n, 0, rl(_, h), o),
                            r |= 1;
                            break;
                        case 1:
                            u = s.o16(n, 1),
                            r |= 2;
                            break;
                        default:
                            throw vu(e)
                        }
                return s.h16(n),
                Uk(r, o, u, null)
            }
            ,
            Nk.prototype.s3a = function(t, n) {
                var i, e = this.r3a_1, r = t.g16(e), o = go(Iy);
                i = [],
                r.v17(e, 0, rl(o, i), n.t3a_1),
                r.r17(e, 1, n.u3a_1),
                r.h16(e)
            }
            ,
            Nk.prototype.i13 = function(t, n) {
                return this.s3a(t, n instanceof Vk ? n : Zr())
            }
            ,
            Vk.prototype.toString = function() {
                return "TotalProgress(masteryBuckets=" + this.t3a_1 + ", studyProgress=" + this.u3a_1 + ")"
            }
            ,
            Vk.prototype.hashCode = function() {
                var t = Tu(this.t3a_1);
                return t = Kr(t, 31) + os(this.u3a_1) | 0
            }
            ,
            Vk.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof Vk))
                    return !1;
                var n = t instanceof Vk ? t : Zr();
                return !!_u(this.t3a_1, n.t3a_1) && !!_u(this.u3a_1, n.u3a_1)
            }
            ,
            Kk.prototype.h9 = function(t, n) {
                return this.v3a_1(t, n)
            }
            ,
            Kk.prototype.compare = function(t, n) {
                return this.h9(t, n)
            }
            ,
            e$.prototype.b5 = function() {
                return this.w3a_1
            }
            ,
            e$.prototype.toString = function() {
                return "ComputedScore(state=" + this.w3a_1 + ", pCorrect=" + this.x3a_1 + ")"
            }
            ,
            e$.prototype.hashCode = function() {
                var t = Tu(this.w3a_1);
                return t = Kr(t, 31) + (null == this.x3a_1 ? 0 : os(this.x3a_1)) | 0
            }
            ,
            e$.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof e$))
                    return !1;
                var n = t instanceof e$ ? t : Zr();
                return !!_u(this.w3a_1, n.w3a_1) && !!_u(this.x3a_1, n.x3a_1)
            }
            ,
            o$.prototype.b5 = function() {
                return this.h3b_1
            }
            ,
            o$.prototype.c5 = function() {
                return this.i3b_1
            }
            ,
            o$.prototype.toString = function() {
                return "DecayConstants(tau=" + this.h3b_1 + ", scale=" + this.i3b_1 + ")"
            }
            ,
            o$.prototype.hashCode = function() {
                var t = null == this.h3b_1 ? 0 : os(this.h3b_1);
                return t = Kr(t, 31) + os(this.i3b_1) | 0
            }
            ,
            o$.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof o$))
                    return !1;
                var n = t instanceof o$ ? t : Zr();
                return !!_u(this.h3b_1, n.h3b_1) && !!_u(this.i3b_1, n.i3b_1)
            }
            ,
            s$.prototype.b5 = function() {
                return this.j3b_1
            }
            ,
            s$.prototype.c5 = function() {
                return this.k3b_1
            }
            ,
            s$.prototype.toString = function() {
                return "ProbabilityPredictions(pCorrect=" + this.j3b_1 + ", pGuess=" + this.k3b_1 + ")"
            }
            ,
            s$.prototype.hashCode = function() {
                var t = os(this.j3b_1);
                return t = Kr(t, 31) + os(this.k3b_1) | 0
            }
            ,
            s$.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof s$))
                    return !1;
                var n = t instanceof s$ ? t : Zr();
                return !!_u(this.j3b_1, n.j3b_1) && !!_u(this.k3b_1, n.k3b_1)
            }
            ,
            R$.prototype.s3b = function() {
                return this.l3b_1
            }
            ,
            R$.prototype.t3b = function() {
                return this.m3b_1
            }
            ,
            R$.prototype.toString = function() {
                return "AssistantStep(question=" + this.l3b_1 + ", checkpoint=" + this.m3b_1 + ", roundProgress=" + this.n3b_1 + ", studyProgress=" + this.o3b_1 + ", masteryBuckets=" + this.p3b_1 + ", completedRoundUnits=" + this.q3b_1 + ", totalRoundUnits=" + this.r3b_1 + ")"
            }
            ,
            R$.prototype.hashCode = function() {
                var t = null == this.l3b_1 ? 0 : Tu(this.l3b_1);
                return t = Kr(t, 31) + (null == this.m3b_1 ? 0 : this.m3b_1.hashCode()) | 0,
                t = Kr(t, 31) + (null == this.n3b_1 ? 0 : os(this.n3b_1)) | 0,
                t = Kr(t, 31) + os(this.o3b_1) | 0,
                t = Kr(t, 31) + Tu(this.p3b_1) | 0,
                t = Kr(t, 31) + (null == this.q3b_1 ? 0 : this.q3b_1) | 0,
                t = Kr(t, 31) + (null == this.r3b_1 ? 0 : this.r3b_1) | 0
            }
            ,
            R$.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof R$))
                    return !1;
                var n = t instanceof R$ ? t : Zr();
                return !!(_u(this.l3b_1, n.l3b_1) && _u(this.m3b_1, n.m3b_1) && _u(this.n3b_1, n.n3b_1) && _u(this.o3b_1, n.o3b_1) && _u(this.p3b_1, n.p3b_1) && this.q3b_1 == n.q3b_1 && this.r3b_1 == n.r3b_1)
            }
            ,
            L$.prototype.s3b = function() {
                return this.u3b_1
            }
            ,
            L$.prototype.t3b = function() {
                return this.v3b_1
            }
            ,
            L$.prototype.toString = function() {
                return "TaskStep(question=" + this.u3b_1 + ", checkpoint=" + this.v3b_1 + ", taskQuestionType=" + this.w3b_1 + ", completedRoundUnits=" + this.x3b_1 + ", roundProgress=" + this.y3b_1 + ", totalRoundUnits=" + this.z3b_1 + ", task=" + this.a3c_1 + ", taskProgress=" + this.b3c_1 + ", taskSequenceProgress=" + this.c3c_1 + ")"
            }
            ,
            L$.prototype.hashCode = function() {
                var t = null == this.u3b_1 ? 0 : Tu(this.u3b_1);
                return t = Kr(t, 31) + (null == this.v3b_1 ? 0 : this.v3b_1.hashCode()) | 0,
                t = Kr(t, 31) + (null == this.w3b_1 ? 0 : this.w3b_1.hashCode()) | 0,
                t = Kr(t, 31) + (null == this.x3b_1 ? 0 : this.x3b_1) | 0,
                t = Kr(t, 31) + (null == this.y3b_1 ? 0 : os(this.y3b_1)) | 0,
                t = Kr(t, 31) + (null == this.z3b_1 ? 0 : this.z3b_1) | 0,
                t = Kr(t, 31) + this.a3c_1.hashCode() | 0,
                t = Kr(t, 31) + os(this.b3c_1) | 0,
                t = Kr(t, 31) + os(this.c3c_1) | 0
            }
            ,
            L$.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof L$))
                    return !1;
                var n = t instanceof L$ ? t : Zr();
                return !!(_u(this.u3b_1, n.u3b_1) && _u(this.v3b_1, n.v3b_1) && _u(this.w3b_1, n.w3b_1) && this.x3b_1 == n.x3b_1 && _u(this.y3b_1, n.y3b_1) && this.z3b_1 == n.z3b_1 && this.a3c_1.equals(n.a3c_1) && _u(this.b3c_1, n.b3c_1) && _u(this.c3c_1, n.c3c_1))
            }
            ,
            F$.prototype.toString = function() {
                return "TaskStepData(step=" + this.d3c_1 + ", savedState=" + this.e3c_1 + ", grader=" + this.f3c_1 + ")"
            }
            ,
            F$.prototype.hashCode = function() {
                var t = this.d3c_1.hashCode();
                return t = Kr(t, 31) + (null == this.e3c_1 ? 0 : this.e3c_1.hashCode()) | 0,
                t = Kr(t, 31) + (null == this.f3c_1 ? 0 : Tu(this.f3c_1)) | 0
            }
            ,
            F$.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof F$))
                    return !1;
                var n = t instanceof F$ ? t : Zr();
                return !!this.d3c_1.equals(n.d3c_1) && !!_u(this.e3c_1, n.e3c_1) && !!_u(this.f3c_1, n.f3c_1)
            }
            ,
            V$.prototype.m3c = function(t) {
                pm(t, this.h3c_1) && (U$(this, t.e2t_1),
                dm(t, this.h3c_1) ? this.j3c_1.a(t.e2t_1) : this.k3c_1.a(t.e2t_1))
            }
            ,
            V$.prototype.n3c = function(t) {
                var n = this.j3c_1
                  , i = t;
                return $s(Ls(n, null == i ? this.j3c_1.f() : i))
            }
            ,
            V$.prototype.o3c = function(t) {
                var n = this.k3c_1
                  , i = t;
                return $s(Ls(n, null == i ? this.k3c_1.f() : i))
            }
            ,
            V$.prototype.p3c = function(t) {
                var n = this.l3c_1
                  , i = t;
                return $s(Ls(n, null == i ? this.l3c_1.f() : i))
            }
            ,
            V$.prototype.q3c = function(t, n) {
                var i;
                switch (t.r1_1) {
                case 0:
                    i = this.n3c(n);
                    break;
                case 1:
                    i = this.o3c(n);
                    break;
                default:
                    i = this.p3c(n)
                }
                for (var e = i, r = Ju(Xu(e, 10)), o = e.j(); o.l(); ) {
                    var u;
                    u = new dj(o.k(),this.i3c_1),
                    r.a(u)
                }
                return r
            }
            ,
            V$.prototype.i32 = function() {
                return this.h3c_1.c3a_1 || this.g3c_1.h() ? Qh() : new Mk(this.j3c_1.f(),this.g3c_1.f())
            }
            ,
            V$.prototype.s3c = function() {
                return this.i32().t32()
            }
            ,
            H$.prototype.t3c = function(t, n) {
                var i = this.m39_1.d3(t)
                  , e = null == i ? null : i.n3c(n);
                return null == e ? Ss() : e
            }
            ,
            H$.prototype.v3c = function(t, n) {
                var i = this.m39_1.d3(t)
                  , e = null == i ? null : i.o3c(n);
                return null == e ? Ss() : e
            }
            ,
            H$.prototype.x3c = function(t, n) {
                var i = this.m39_1.d3(t)
                  , e = null == i ? null : i.p3c(n);
                return null == e ? Ss() : e
            }
            ,
            H$.prototype.n39 = function() {
                for (var t = this.k39_1.w39_1, n = Wo(Fo(No(Xu(t, 10)), 16)), i = t.j(); i.l(); ) {
                    var e, r = i.k();
                    e = hl(this.m39_1, r).i32(),
                    n.d5(r, e)
                }
                return n
            }
            ,
            H$.prototype.z3c = function() {
                return this.o39().u32()
            }
            ,
            H$.prototype.o39 = function() {
                var t = this.n39();
                if (this.k39_1.c3a_1 || this.l39_1.h())
                    return Gh();
                for (var n = t.e3(), i = Ju(Xu(n, 10)), e = n.j(); e.l(); ) {
                    var r, o = e.k(), u = this.u3c(o, null, 2, null);
                    r = _l(u, this.w3c(o, null, 2, null)),
                    i.a(r)
                }
                return new Gk($s(Ts(i)).f(),this.l39_1.f())
            }
            ,
            H$.prototype.s3c = function() {
                var t;
                t: {
                    var n = this.k39_1.w39_1;
                    if (Qu(n, vs) && n.h())
                        t = !0;
                    else {
                        for (var i = n.j(); i.l(); ) {
                            var e = i.k();
                            if (!hl(this.m39_1, e).s3c()) {
                                t = !1;
                                break t
                            }
                        }
                        t = !0
                    }
                }
                return t
            }
            ,
            H$.prototype.a3d = function(t, n) {
                hl(this.m39_1, n).m3c(t)
            }
            ,
            nm.prototype.a24 = function() {
                return this.o2v_1
            }
            ,
            nm.prototype.b3d = function() {
                return this.p2v_1
            }
            ,
            nm.prototype.c3d = function() {
                return this.q2v_1
            }
            ,
            nm.prototype.d3d = function() {
                return this.r2v_1
            }
            ,
            nm.prototype.e3d = function() {
                return this.s2v_1
            }
            ,
            nm.prototype.f3d = function() {
                return this.t2v_1
            }
            ,
            nm.prototype.g3d = function() {
                return this.u2v_1
            }
            ,
            nm.prototype.h3d = function() {
                return this.v2v_1
            }
            ,
            nm.prototype.i3d = function() {
                return this.w2v_1
            }
            ,
            nm.prototype.j3d = function() {
                return this.x2v_1
            }
            ,
            nm.prototype.k3d = function() {
                return this.y2v_1
            }
            ,
            nm.prototype.l3d = function() {
                return this.z2v_1
            }
            ,
            nm.prototype.m3d = function() {
                return this.a2w_1
            }
            ,
            nm.prototype.n3d = function() {
                return this.b2w_1
            }
            ,
            nm.prototype.o3d = function() {
                return this.g2w_1
            }
            ,
            nm.prototype.p3d = function() {
                return this.h2w_1
            }
            ,
            nm.prototype.y2z = function(t) {
                var n;
                switch (t.r1_1) {
                case 0:
                    n = this.c2w_1;
                    break;
                case 1:
                    n = this.d2w_1;
                    break;
                default:
                    throw Su("Unrecognized textual card side: " + t)
                }
                return n
            }
            ,
            nm.prototype.q3d = function(t) {
                var n;
                switch (t.r1_1) {
                case 0:
                    n = tm(this, t);
                    break;
                case 1:
                    n = !(!tm(this, t) && null == this.z2v_1);
                    break;
                case 2:
                    n = !(null == this.e2w_1);
                    break;
                default:
                    Yu()
                }
                return n
            }
            ,
            nm.prototype.c2x = function(t) {
                var n;
                t: if (Qu(t, vs) && t.h())
                    n = !0;
                else {
                    for (var i = t.j(); i.l(); ) {
                        var e = i.k();
                        if (!this.q3d(e)) {
                            n = !1;
                            break t
                        }
                    }
                    n = !0
                }
                return n
            }
            ,
            nm.prototype.toString = function() {
                return "AnnotatedTerm(id=" + Lo(this.o2v_1) + ", word=" + this.p2v_1 + ", wordRichText=" + this.q2v_1 + ", _wordTtsUrl=" + this.r2v_1 + ", _wordSlowTtsUrl=" + this.s2v_1 + ", _wordAudioUrl=" + this.t2v_1 + ", definition=" + this.u2v_1 + ", definitionRichText=" + this.v2v_1 + ", _definitionTtsUrl=" + this.w2v_1 + ", _definitionSlowTtsUrl=" + this.x2v_1 + ", _definitionAudioUrl=" + this.y2v_1 + ", definitionImage=" + this.z2v_1 + ", setId=" + Lo(this.a2w_1) + ", rank=" + qu(this.b2w_1) + ", wordText=" + this.c2w_1 + ", definitionText=" + this.d2w_1 + ", diagramShape=" + this.e2w_1 + ", diagramImage=" + this.f2w_1 + ", wordDistractors=" + this.g2w_1 + ", definitionDistractors=" + this.h2w_1 + ", wordEquivalenceKey=" + this.i2w_1 + ", definitionEquivalenceKey=" + this.j2w_1 + ", locationEquivalenceKey=" + this.k2w_1 + ", parsedMcq=" + this.l2w_1 + ", indexOfMcqKey=" + this.m2w_1 + ")"
            }
            ,
            nm.prototype.hashCode = function() {
                var t = this.o2v_1.hashCode();
                return t = Kr(t, 31) + us(this.p2v_1) | 0,
                t = Kr(t, 31) + (null == this.q2v_1 ? 0 : this.q2v_1.hashCode()) | 0,
                t = Kr(t, 31) + (null == this.r2v_1 ? 0 : us(this.r2v_1)) | 0,
                t = Kr(t, 31) + (null == this.s2v_1 ? 0 : us(this.s2v_1)) | 0,
                t = Kr(t, 31) + (null == this.t2v_1 ? 0 : us(this.t2v_1)) | 0,
                t = Kr(t, 31) + us(this.u2v_1) | 0,
                t = Kr(t, 31) + (null == this.v2v_1 ? 0 : this.v2v_1.hashCode()) | 0,
                t = Kr(t, 31) + (null == this.w2v_1 ? 0 : us(this.w2v_1)) | 0,
                t = Kr(t, 31) + (null == this.x2v_1 ? 0 : us(this.x2v_1)) | 0,
                t = Kr(t, 31) + (null == this.y2v_1 ? 0 : us(this.y2v_1)) | 0,
                t = Kr(t, 31) + (null == this.z2v_1 ? 0 : this.z2v_1.hashCode()) | 0,
                t = Kr(t, 31) + this.a2w_1.hashCode() | 0,
                t = Kr(t, 31) + (null == this.b2w_1 ? 0 : this.b2w_1.hashCode()) | 0,
                t = Kr(t, 31) + Tu(this.c2w_1) | 0,
                t = Kr(t, 31) + Tu(this.d2w_1) | 0,
                t = Kr(t, 31) + (null == this.e2w_1 ? 0 : this.e2w_1.hashCode()) | 0,
                t = Kr(t, 31) + (null == this.f2w_1 ? 0 : this.f2w_1.hashCode()) | 0,
                t = Kr(t, 31) + (null == this.g2w_1 ? 0 : Tu(this.g2w_1)) | 0,
                t = Kr(t, 31) + (null == this.h2w_1 ? 0 : Tu(this.h2w_1)) | 0,
                t = Kr(t, 31) + (null == this.i2w_1 ? 0 : us(this.i2w_1)) | 0,
                t = Kr(t, 31) + (null == this.j2w_1 ? 0 : us(this.j2w_1)) | 0,
                t = Kr(t, 31) + (null == this.k2w_1 ? 0 : us(this.k2w_1)) | 0,
                t = Kr(t, 31) + (null == this.l2w_1 ? 0 : this.l2w_1.hashCode()) | 0,
                t = Kr(t, 31) + (null == this.m2w_1 ? 0 : this.m2w_1) | 0
            }
            ,
            nm.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof nm))
                    return !1;
                var n = t instanceof nm ? t : Zr();
                return !!(this.o2v_1.equals(n.o2v_1) && this.p2v_1 === n.p2v_1 && _u(this.q2v_1, n.q2v_1) && this.r2v_1 == n.r2v_1 && this.s2v_1 == n.s2v_1 && this.t2v_1 == n.t2v_1 && this.u2v_1 === n.u2v_1 && _u(this.v2v_1, n.v2v_1) && this.w2v_1 == n.w2v_1 && this.x2v_1 == n.x2v_1 && this.y2v_1 == n.y2v_1 && _u(this.z2v_1, n.z2v_1) && this.a2w_1.equals(n.a2w_1) && _u(this.b2w_1, n.b2w_1) && _u(this.c2w_1, n.c2w_1) && _u(this.d2w_1, n.d2w_1) && _u(this.e2w_1, n.e2w_1) && _u(this.f2w_1, n.f2w_1) && _u(this.g2w_1, n.g2w_1) && _u(this.h2w_1, n.h2w_1) && this.i2w_1 == n.i2w_1 && this.j2w_1 == n.j2w_1 && this.k2w_1 == n.k2w_1 && _u(this.l2w_1, n.l2w_1) && this.m2w_1 == n.m2w_1)
            }
            ,
            om.prototype.t2x = function() {
                return this.t3d_1
            }
            ,
            om.prototype.v2x = function() {
                return this.u3d_1
            }
            ,
            om.prototype.u2x = function() {
                return this.v3d_1
            }
            ,
            om.prototype.s3d = function() {
                return this.w3d_1
            }
            ,
            om.prototype.r3d = function() {
                return this.x3d_1
            }
            ,
            om.prototype.toString = function() {
                return "StaticAnnotatedText(plainText=" + this.t3d_1 + ", richText=" + this.u3d_1 + ", languageCode=" + this.v3d_1 + ", entity=" + this.w3d_1 + ", partOfSpeech=" + this.x3d_1 + ")"
            }
            ,
            om.prototype.hashCode = function() {
                var t = us(this.t3d_1);
                return t = Kr(t, 31) + (null == this.u3d_1 ? 0 : this.u3d_1.hashCode()) | 0,
                t = Kr(t, 31) + us(this.v3d_1) | 0,
                t = Kr(t, 31) + (null == this.w3d_1 ? 0 : this.w3d_1.hashCode()) | 0,
                t = Kr(t, 31) + (null == this.x3d_1 ? 0 : this.x3d_1.hashCode()) | 0
            }
            ,
            om.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof om))
                    return !1;
                var n = t instanceof om ? t : Zr();
                return this.t3d_1 === n.t3d_1 && !!_u(this.u3d_1, n.u3d_1) && this.v3d_1 === n.v3d_1 && !!_u(this.w3d_1, n.w3d_1) && !!_u(this.x3d_1, n.x3d_1)
            }
            ,
            am.prototype.t2x = function() {
                return this.y3d_1
            }
            ,
            am.prototype.v2x = function() {
                return this.z3d_1
            }
            ,
            am.prototype.u2x = function() {
                return this.a3e_1
            }
            ,
            am.prototype.s3d = function() {
                return lm(),
                this.d3e_1.p2()
            }
            ,
            am.prototype.r3d = function() {
                return hm(),
                this.e3e_1.p2()
            }
            ,
            am.prototype.toString = function() {
                return "LazyAnnotatedText(plainText=" + this.y3d_1 + ", richText=" + this.z3d_1 + ", languageCode=" + this.a3e_1 + ", oppositeSidePlainText=" + this.b3e_1 + ", oppositeSideLanguageCode=" + this.c3e_1 + ")"
            }
            ,
            am.prototype.hashCode = function() {
                var t = us(this.y3d_1);
                return t = Kr(t, 31) + (null == this.z3d_1 ? 0 : this.z3d_1.hashCode()) | 0,
                t = Kr(t, 31) + us(this.a3e_1) | 0,
                t = Kr(t, 31) + us(this.b3e_1) | 0,
                t = Kr(t, 31) + us(this.c3e_1) | 0
            }
            ,
            am.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof am))
                    return !1;
                var n = t instanceof am ? t : Zr();
                return this.y3d_1 === n.y3d_1 && !!_u(this.z3d_1, n.z3d_1) && this.a3e_1 === n.a3e_1 && this.b3e_1 === n.b3e_1 && this.c3e_1 === n.c3e_1
            }
            ,
            _m.prototype.g22 = function() {
                return this.f2t_1
            }
            ,
            _m.prototype.f3e = function() {
                var t = cl(this.d2t_1);
                if (!t.equals(this.d2t_1)) {
                    var n = new ju(0,0);
                    return this.g3e(!1, null, null, t, n, new ju(0,0), 55, null)
                }
                return this
            }
            ,
            _m.prototype.h3e = function(t, n, i, e, r, o) {
                return new _m(t,n,i,e,r,o)
            }
            ,
            _m.prototype.g3e = function(t, n, i, e, r, o, u, s) {
                return 0 != (1 & u) && (t = this.a2t_1),
                0 != (2 & u) && (n = this.b2t_1),
                0 != (4 & u) && (i = this.c2t_1),
                0 != (8 & u) && (e = this.d2t_1),
                0 != (16 & u) && (r = this.e2t_1),
                0 != (32 & u) && (o = this.f2t_1),
                this.h3e(t, n, i, e, r, o)
            }
            ,
            _m.prototype.toString = function() {
                return "Answer(isCorrect=" + this.a2t_1 + ", promptSide=" + this.b2t_1 + ", answerSide=" + this.c2t_1 + ", questionType=" + this.d2t_1 + ", studiableItemId=" + Lo(this.e2t_1) + ", timestamp=" + Lo(this.f2t_1) + ")"
            }
            ,
            _m.prototype.hashCode = function() {
                var t = 0 | this.a2t_1;
                return t = Kr(t, 31) + this.b2t_1.hashCode() | 0,
                t = Kr(t, 31) + this.c2t_1.hashCode() | 0,
                t = Kr(t, 31) + this.d2t_1.hashCode() | 0,
                t = Kr(t, 31) + this.e2t_1.hashCode() | 0,
                t = Kr(t, 31) + this.f2t_1.hashCode() | 0
            }
            ,
            _m.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof _m))
                    return !1;
                var n = t instanceof _m ? t : Zr();
                return !!(this.a2t_1 === n.a2t_1 && this.b2t_1.equals(n.b2t_1) && this.c2t_1.equals(n.c2t_1) && this.d2t_1.equals(n.d2t_1) && this.e2t_1.equals(n.e2t_1) && this.f2t_1.equals(n.f2t_1))
            }
            ,
            vm.prototype.h9 = function(t, n) {
                return this.i3e_1(t, n)
            }
            ,
            vm.prototype.compare = function(t, n) {
                return this.h9(t, n)
            }
            ,
            gm.prototype.toString = function() {
                return "AnswerFeatures(isCorrect=" + this.y3a_1 + ", answerSide=" + this.z3a_1 + ", questionType=" + this.a3b_1 + ", studiableItemId=" + Lo(this.b3b_1) + ", timestamp=" + Lo(this.c3b_1) + ", showedHint=" + this.d3b_1 + ", userAnswerLangMatch=" + this.e3b_1 + ", userPromptLangMatch=" + this.f3b_1 + ", delaySecondsByAnswerSide=" + this.g3b_1 + ")"
            }
            ,
            gm.prototype.hashCode = function() {
                var t = null == this.y3a_1 ? 0 : 0 | this.y3a_1;
                return t = Kr(t, 31) + this.z3a_1.hashCode() | 0,
                t = Kr(t, 31) + this.a3b_1.hashCode() | 0,
                t = Kr(t, 31) + this.b3b_1.hashCode() | 0,
                t = Kr(t, 31) + this.c3b_1.hashCode() | 0,
                t = Kr(t, 31) + (null == this.d3b_1 ? 0 : 0 | this.d3b_1) | 0,
                t = Kr(t, 31) + (0 | this.e3b_1) | 0,
                t = Kr(t, 31) + (0 | this.f3b_1) | 0,
                t = Kr(t, 31) + Tu(this.g3b_1) | 0
            }
            ,
            gm.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof gm))
                    return !1;
                var n = t instanceof gm ? t : Zr();
                return !!(this.y3a_1 == n.y3a_1 && this.z3a_1.equals(n.z3a_1) && this.a3b_1.equals(n.a3b_1) && this.b3b_1.equals(n.b3b_1) && this.c3b_1.equals(n.c3b_1) && this.d3b_1 == n.d3b_1 && this.e3b_1 === n.e3b_1 && this.f3b_1 === n.f3b_1 && _u(this.g3b_1, n.g3b_1))
            }
            ,
            qm.prototype.y12 = function() {
                return this.j3e_1
            }
            ,
            qm.prototype.d1d = function() {
                return [$u(pu()), $u(pu()), $u(pu())]
            }
            ,
            qm.prototype.l13 = function(t) {
                var n = this.j3e_1
                  , i = !0
                  , e = 0
                  , r = 0
                  , o = null
                  , u = null
                  , s = null
                  , a = t.g16(n);
                if (a.v16())
                    o = a.u16(n, 0, pu(), o),
                    r |= 1,
                    u = a.u16(n, 1, pu(), u),
                    r |= 2,
                    s = a.u16(n, 2, pu(), s),
                    r |= 4;
                else
                    for (; i; )
                        switch (e = a.w16(n)) {
                        case -1:
                            i = !1;
                            break;
                        case 0:
                            o = a.u16(n, 0, pu(), o),
                            r |= 1;
                            break;
                        case 1:
                            u = a.u16(n, 1, pu(), u),
                            r |= 2;
                            break;
                        case 2:
                            s = a.u16(n, 2, pu(), s),
                            r |= 4;
                            break;
                        default:
                            throw vu(e)
                        }
                return a.h16(n),
                Sm(r, o, u, s, null)
            }
            ,
            qm.prototype.k3e = function(t, n) {
                var i = this.j3e_1
                  , e = t.g16(i);
                (e.a18(i, 0) || null != n.l3e_1) && e.w17(i, 0, pu(), n.l3e_1),
                (e.a18(i, 1) || null != n.m3e_1) && e.w17(i, 1, pu(), n.m3e_1),
                (e.a18(i, 2) || null != n.n3e_1) && e.w17(i, 2, pu(), n.n3e_1),
                e.h16(i)
            }
            ,
            qm.prototype.i13 = function(t, n) {
                return this.k3e(t, n instanceof zm ? n : Zr())
            }
            ,
            zm.prototype.toString = function() {
                return "AssistantGradingSettingsSuggestion(acceptsPartialAnswer=" + this.l3e_1 + ", acceptsAnswersWithTypos=" + this.m3e_1 + ", acceptsSmartGrading=" + this.n3e_1 + ")"
            }
            ,
            zm.prototype.hashCode = function() {
                var t = null == this.l3e_1 ? 0 : 0 | this.l3e_1;
                return t = Kr(t, 31) + (null == this.m3e_1 ? 0 : 0 | this.m3e_1) | 0,
                t = Kr(t, 31) + (null == this.n3e_1 ? 0 : 0 | this.n3e_1) | 0
            }
            ,
            zm.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof zm))
                    return !1;
                var n = t instanceof zm ? t : Zr();
                return this.l3e_1 == n.l3e_1 && this.m3e_1 == n.m3e_1 && this.n3e_1 == n.n3e_1
            }
            ,
            Am.prototype.b5 = function() {
                return this.y2w_1
            }
            ,
            Am.prototype.c5 = function() {
                return this.z2w_1
            }
            ,
            Am.prototype.oc = function() {
                return this.a2x_1
            }
            ,
            Am.prototype.toString = function() {
                return "CardEdge(term=" + this.y2w_1 + ", promptSide=" + this.z2w_1 + ", answerSide=" + this.a2x_1 + ", questionScoringInferenceMetadata=" + this.b2x_1 + ")"
            }
            ,
            Am.prototype.hashCode = function() {
                var t = this.y2w_1.hashCode();
                return t = Kr(t, 31) + this.z2w_1.hashCode() | 0,
                t = Kr(t, 31) + this.a2x_1.hashCode() | 0,
                t = Kr(t, 31) + (null == this.b2x_1 ? 0 : this.b2x_1.hashCode()) | 0
            }
            ,
            Am.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof Am))
                    return !1;
                var n = t instanceof Am ? t : Zr();
                return !!(this.y2w_1.equals(n.y2w_1) && this.z2w_1.equals(n.z2w_1) && this.a2x_1.equals(n.a2x_1) && _u(this.b2x_1, n.b2x_1))
            }
            ,
            Pm.prototype.o3e = function(t, n, i, e, r) {
                return new Pm(t,n,i,e,r)
            }
            ,
            Pm.prototype.p3e = function(t, n, i, e, r, o, u) {
                return 0 != (1 & o) && (t = this.v2s_1),
                0 != (2 & o) && (n = this.w2s_1),
                0 != (4 & o) && (i = this.x2s_1),
                0 != (8 & o) && (e = this.y2s_1),
                0 != (16 & o) && (r = this.z2s_1),
                this.o3e(t, n, i, e, r)
            }
            ,
            Pm.prototype.toString = function() {
                return "CardEdgeId(studiableItemId=" + Lo(this.v2s_1) + ", promptSide=" + this.w2s_1 + ", answerSide=" + this.x2s_1 + ", questionType=" + this.y2s_1 + ", questionScoringInferenceMetadata=" + this.z2s_1 + ")"
            }
            ,
            Pm.prototype.hashCode = function() {
                var t = this.v2s_1.hashCode();
                return t = Kr(t, 31) + this.w2s_1.hashCode() | 0,
                t = Kr(t, 31) + this.x2s_1.hashCode() | 0,
                t = Kr(t, 31) + (null == this.y2s_1 ? 0 : this.y2s_1.hashCode()) | 0,
                t = Kr(t, 31) + (null == this.z2s_1 ? 0 : this.z2s_1.hashCode()) | 0
            }
            ,
            Pm.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof Pm))
                    return !1;
                var n = t instanceof Pm ? t : Zr();
                return !!(this.v2s_1.equals(n.v2s_1) && this.w2s_1.equals(n.w2s_1) && this.x2s_1.equals(n.x2s_1) && _u(this.y2s_1, n.y2s_1) && _u(this.z2s_1, n.z2s_1))
            }
            ,
            Dm.prototype.toString = function() {
                return "DiagramShape(setId=" + Lo(this.q2x_1) + ", shape=" + this.r2x_1 + ", termId=" + Lo(this.s2x_1) + ")"
            }
            ,
            Dm.prototype.hashCode = function() {
                var t = this.q2x_1.hashCode();
                return t = Kr(t, 31) + us(this.r2x_1) | 0,
                t = Kr(t, 31) + this.s2x_1.hashCode() | 0
            }
            ,
            Dm.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof Dm))
                    return !1;
                var n = t instanceof Dm ? t : Zr();
                return !!this.q2x_1.equals(n.q2x_1) && this.r2x_1 === n.r2x_1 && !!this.s2x_1.equals(n.s2x_1)
            }
            ,
            Nm.prototype.f1o = function() {
                return Um()
            }
            ,
            Wm.prototype.y12 = function() {
                return this.q3e_1
            }
            ,
            Wm.prototype.d1d = function() {
                var t, n = pu(), i = nj(), e = $u(Cm()), r = go(af), o = [go(yf), go(Cf)];
                return t = [df(), mf()],
                [n, i, e, cu("assistantMode.grading.GradedAnswerMetadata", r, o, t, [])]
            }
            ,
            Wm.prototype.l13 = function(t) {
                var n = this.q3e_1
                  , i = !0
                  , e = 0
                  , r = 0
                  , o = !1
                  , u = null
                  , s = null
                  , a = null
                  , l = t.g16(n);
                if (l.v16()) {
                    o = l.i16(n, 0),
                    r |= 1,
                    u = l.s16(n, 1, nj(), u),
                    r |= 2,
                    s = l.u16(n, 2, Cm(), s),
                    r |= 4;
                    var h, _ = go(af), c = [go(yf), go(Cf)], f = [df(), mf()];
                    h = [],
                    a = l.s16(n, 3, cu("assistantMode.grading.GradedAnswerMetadata", _, c, f, h), a),
                    r |= 8
                } else
                    for (; i; )
                        switch (e = l.w16(n)) {
                        case -1:
                            i = !1;
                            break;
                        case 0:
                            o = l.i16(n, 0),
                            r |= 1;
                            break;
                        case 1:
                            u = l.s16(n, 1, nj(), u),
                            r |= 2;
                            break;
                        case 2:
                            s = l.u16(n, 2, Cm(), s),
                            r |= 4;
                            break;
                        case 3:
                            var d, p = go(af), v = [go(yf), go(Cf)], y = [df(), mf()];
                            d = [],
                            a = l.s16(n, 3, cu("assistantMode.grading.GradedAnswerMetadata", p, v, y, d), a),
                            r |= 8;
                            break;
                        default:
                            throw vu(e)
                        }
                return l.h16(n),
                Hm(r, o, u, s, a, null)
            }
            ,
            Wm.prototype.r3e = function(t, n) {
                var i = this.q3e_1
                  , e = t.g16(i);
                e.l17(i, 0, n.a2p_1),
                e.v17(i, 1, nj(), n.b2p_1),
                (e.a18(i, 2) || null != n.c2p_1) && e.w17(i, 2, Cm(), n.c2p_1);
                var r, o = go(af), u = [go(yf), go(Cf)], s = [df(), mf()];
                r = [],
                e.v17(i, 3, cu("assistantMode.grading.GradedAnswerMetadata", o, u, s, r), n.d2p_1),
                e.h16(i)
            }
            ,
            Wm.prototype.i13 = function(t, n) {
                return this.r3e(t, n instanceof Ym ? n : Zr())
            }
            ,
            Ym.prototype.toString = function() {
                return "GradedAnswer(isCorrect=" + this.a2p_1 + ", feedback=" + this.b2p_1 + ", gradingSettingsSuggestion=" + this.c2p_1 + ", metadata=" + this.d2p_1 + ")"
            }
            ,
            Ym.prototype.hashCode = function() {
                var t = 0 | this.a2p_1;
                return t = Kr(t, 31) + this.b2p_1.hashCode() | 0,
                t = Kr(t, 31) + (null == this.c2p_1 ? 0 : this.c2p_1.hashCode()) | 0,
                t = Kr(t, 31) + Tu(this.d2p_1) | 0
            }
            ,
            Ym.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof Ym))
                    return !1;
                var n = t instanceof Ym ? t : Zr();
                return this.a2p_1 === n.a2p_1 && !!this.b2p_1.equals(n.b2p_1) && !!_u(this.c2p_1, n.c2p_1) && !!_u(this.d2p_1, n.d2p_1)
            }
            ,
            tj.prototype.y12 = function() {
                return this.s3e_1
            }
            ,
            tj.prototype.d1d = function() {
                var t = go(kj)
                  , n = $u(rl(t, []))
                  , i = go(kj);
                return [n, rl(i, []), $u(Ja()), $u(new Qa(Cu(),Ja()))]
            }
            ,
            tj.prototype.l13 = function(t) {
                var n = this.s3e_1
                  , i = !0
                  , e = 0
                  , r = 0
                  , o = null
                  , u = null
                  , s = null
                  , a = null
                  , l = t.g16(n);
                if (l.v16()) {
                    var h, _ = go(kj);
                    h = [],
                    o = l.u16(n, 0, rl(_, h), o),
                    r |= 1;
                    var c, f = go(kj);
                    c = [],
                    u = l.s16(n, 1, rl(f, c), u),
                    r |= 2,
                    s = l.u16(n, 2, Ja(), s),
                    r |= 4,
                    a = l.u16(n, 3, new Qa(Cu(),Ja()), a),
                    r |= 8
                } else
                    for (; i; )
                        switch (e = l.w16(n)) {
                        case -1:
                            i = !1;
                            break;
                        case 0:
                            var d, p = go(kj);
                            d = [],
                            o = l.u16(n, 0, rl(p, d), o),
                            r |= 1;
                            break;
                        case 1:
                            var v, y = go(kj);
                            v = [],
                            u = l.s16(n, 1, rl(y, v), u),
                            r |= 2;
                            break;
                        case 2:
                            s = l.u16(n, 2, Ja(), s),
                            r |= 4;
                            break;
                        case 3:
                            a = l.u16(n, 3, new Qa(Cu(),Ja()), a),
                            r |= 8;
                            break;
                        default:
                            throw vu(e)
                        }
                return l.h16(n),
                ej(r, o, u, s, a, null)
            }
            ,
            tj.prototype.t3e = function(t, n) {
                var i, e = this.s3e_1, r = t.g16(e), o = go(kj);
                i = [],
                r.w17(e, 0, rl(o, i), n.e2p_1);
                var u, s = go(kj);
                u = [],
                r.v17(e, 1, rl(s, u), n.f2p_1),
                r.w17(e, 2, Ja(), n.g2p_1),
                (r.a18(e, 3) || null != n.h2p_1) && r.w17(e, 3, new Qa(Cu(),Ja()), n.h2p_1),
                r.h16(e)
            }
            ,
            tj.prototype.i13 = function(t, n) {
                return this.t3e(t, n instanceof rj ? n : Zr())
            }
            ,
            rj.prototype.toString = function() {
                return "Feedback(submittedAnswer=" + this.e2p_1 + ", expectedAnswer=" + this.f2p_1 + ", expectedAnswerDescription=" + this.g2p_1 + ", explanations=" + this.h2p_1 + ")"
            }
            ,
            rj.prototype.hashCode = function() {
                var t = null == this.e2p_1 ? 0 : Tu(this.e2p_1);
                return t = Kr(t, 31) + Tu(this.f2p_1) | 0,
                t = Kr(t, 31) + (null == this.g2p_1 ? 0 : this.g2p_1.hashCode()) | 0,
                t = Kr(t, 31) + (null == this.h2p_1 ? 0 : Tu(this.h2p_1)) | 0
            }
            ,
            rj.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof rj))
                    return !1;
                var n = t instanceof rj ? t : Zr();
                return !!(_u(this.e2p_1, n.e2p_1) && _u(this.f2p_1, n.f2p_1) && _u(this.g2p_1, n.g2p_1) && _u(this.h2p_1, n.h2p_1))
            }
            ,
            oj.prototype.b5 = function() {
                return this.l2t_1
            }
            ,
            oj.prototype.oc = function() {
                return this.n2t_1
            }
            ,
            oj.prototype.u3e = function() {
                return this.o2t_1
            }
            ,
            oj.prototype.toString = function() {
                return "NormalizedOptions(enabledQuestionTypes=" + this.l2t_1 + ", enabledPromptSides=" + this.m2t_1 + ", enabledAnswerSides=" + this.n2t_1 + ", enabledWrittenAnswerSides=" + this.o2t_1 + ", enabledLocationQuestionTypes=" + this.p2t_1 + ")"
            }
            ,
            oj.prototype.hashCode = function() {
                var t = Tu(this.l2t_1);
                return t = Kr(t, 31) + Tu(this.m2t_1) | 0,
                t = Kr(t, 31) + Tu(this.n2t_1) | 0,
                t = Kr(t, 31) + Tu(this.o2t_1) | 0,
                t = Kr(t, 31) + Tu(this.p2t_1) | 0
            }
            ,
            oj.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof oj))
                    return !1;
                var n = t instanceof oj ? t : Zr();
                return !!(_u(this.l2t_1, n.l2t_1) && _u(this.m2t_1, n.m2t_1) && _u(this.n2t_1, n.n2t_1) && _u(this.o2t_1, n.o2t_1) && _u(this.p2t_1, n.p2t_1))
            }
            ,
            uj.prototype.v2y = function() {
                return Zu(this.s2y_1.y2w_1)
            }
            ,
            uj.prototype.u2y = function() {
                return this.s2y_1.a2x_1
            }
            ,
            uj.prototype.t2y = function() {
                return this.s2y_1.z2w_1
            }
            ,
            uj.prototype.toString = function() {
                return "SingleCardQuestionConfig(cardEdge=" + this.s2y_1 + ")"
            }
            ,
            uj.prototype.hashCode = function() {
                return this.s2y_1.hashCode()
            }
            ,
            uj.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof uj))
                    return !1;
                var n = t instanceof uj ? t : Zr();
                return !!this.s2y_1.equals(n.s2y_1)
            }
            ,
            aj.prototype.v2y = function() {
                return this.q30_1
            }
            ,
            aj.prototype.b5 = function() {
                return this.q30_1
            }
            ,
            aj.prototype.c5 = function() {
                return this.r30_1
            }
            ,
            aj.prototype.toString = function() {
                return "MultiCardQuestionConfig(cards=" + this.q30_1 + ", promptSide=" + this.r30_1 + ", answerSide=" + this.s30_1 + ")"
            }
            ,
            aj.prototype.hashCode = function() {
                var t = Tu(this.q30_1);
                return t = Kr(t, 31) + this.r30_1.hashCode() | 0,
                t = Kr(t, 31) + this.s30_1.hashCode() | 0
            }
            ,
            aj.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof aj))
                    return !1;
                var n = t instanceof aj ? t : Zr();
                return !!_u(this.q30_1, n.q30_1) && !!this.r30_1.equals(n.r30_1) && !!this.s30_1.equals(n.s30_1)
            }
            ,
            lj.prototype.toString = function() {
                return "CustomMultipleChoiceQuestionConfig(customMultipleChoiceQuestion=" + this.l2z_1 + ")"
            }
            ,
            lj.prototype.hashCode = function() {
                return this.l2z_1.hashCode()
            }
            ,
            lj.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof lj))
                    return !1;
                var n = t instanceof lj ? t : Zr();
                return !!this.l2z_1.equals(n.l2z_1)
            }
            ,
            cj.prototype.toString = function() {
                return "AlternativeQuestionConfig(alternativeQuestionStudiableMetadata=" + this.e2y_1 + ", cardEdge=" + this.f2y_1 + ")"
            }
            ,
            cj.prototype.hashCode = function() {
                var t = this.e2y_1.hashCode();
                return t = Kr(t, 31) + this.f2y_1.hashCode() | 0
            }
            ,
            cj.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof cj))
                    return !1;
                var n = t instanceof cj ? t : Zr();
                return !!this.e2y_1.equals(n.e2y_1) && !!this.f2y_1.equals(n.f2y_1)
            }
            ,
            fj.prototype.toString = function() {
                return "FillInTheBlankQuestionConfig(fillInTheBlankQuestionStudiableMetadata=" + this.t2z_1 + ", cardEdge=" + this.u2z_1 + ")"
            }
            ,
            fj.prototype.hashCode = function() {
                var t = this.t2z_1.hashCode();
                return t = Kr(t, 31) + this.u2z_1.hashCode() | 0
            }
            ,
            fj.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof fj))
                    return !1;
                var n = t instanceof fj ? t : Zr();
                return !!this.t2z_1.equals(n.t2z_1) && !!this.u2z_1.equals(n.u2z_1)
            }
            ,
            dj.prototype.b5 = function() {
                return this.w3e_1
            }
            ,
            dj.prototype.c5 = function() {
                return this.x3e_1
            }
            ,
            dj.prototype.toString = function() {
                return "QuestionTypeStudiableItemTuple(studiableItemId=" + Lo(this.w3e_1) + ", questionType=" + this.x3e_1 + ")"
            }
            ,
            dj.prototype.hashCode = function() {
                var t = this.w3e_1.hashCode();
                return t = Kr(t, 31) + this.x3e_1.hashCode() | 0
            }
            ,
            dj.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof dj))
                    return !1;
                var n = t instanceof dj ? t : Zr();
                return !!this.w3e_1.equals(n.w3e_1) && !!this.x3e_1.equals(n.x3e_1)
            }
            ,
            pj.prototype.z3e = function() {
                return this.y3e_1
            }
            ,
            vj.prototype.z3e = function() {
                return this.b3f_1
            }
            ,
            vj.prototype.toString = function() {
                return "RecommendedConfigurationBoolean(studySetting=" + this.b3f_1 + ", value=" + this.c3f_1 + ")"
            }
            ,
            vj.prototype.hashCode = function() {
                var t = this.b3f_1.hashCode();
                return t = Kr(t, 31) + (0 | this.c3f_1) | 0
            }
            ,
            vj.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof vj))
                    return !1;
                var n = t instanceof vj ? t : Zr();
                return !!this.b3f_1.equals(n.b3f_1) && this.c3f_1 === n.c3f_1
            }
            ,
            yj.prototype.z3e = function() {
                return this.e3f_1
            }
            ,
            yj.prototype.toString = function() {
                return "RecommendedConfigurationInt(studySetting=" + this.e3f_1 + ", value=" + this.f3f_1 + ")"
            }
            ,
            yj.prototype.hashCode = function() {
                var t = this.e3f_1.hashCode();
                return t = Kr(t, 31) + this.f3f_1 | 0
            }
            ,
            yj.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof yj))
                    return !1;
                var n = t instanceof yj ? t : Zr();
                return !!this.e3f_1.equals(n.e3f_1) && this.f3f_1 === n.f3f_1
            }
            ,
            bj.prototype.u2n = function(t) {
                return new Yj(t)
            }
            ,
            jj.prototype.y12 = function() {
                return this.g3f_1
            }
            ,
            jj.prototype.d1d = function() {
                return [Xa()]
            }
            ,
            jj.prototype.l13 = function(t) {
                var n = this.g3f_1
                  , i = !0
                  , e = 0
                  , r = 0
                  , o = null
                  , u = t.g16(n);
                if (u.v16())
                    o = u.q16(n, 0),
                    r |= 1;
                else
                    for (; i; )
                        switch (e = u.w16(n)) {
                        case -1:
                            i = !1;
                            break;
                        case 0:
                            o = u.q16(n, 0),
                            r |= 1;
                            break;
                        default:
                            throw vu(e)
                        }
                return u.h16(n),
                xj(r, o, null)
            }
            ,
            jj.prototype.h3f = function(t, n) {
                var i = this.g3f_1
                  , e = t.g16(i);
                e.t17(i, 0, n.o2s_1),
                e.h16(i)
            }
            ,
            jj.prototype.i13 = function(t, n) {
                return this.h3f(t, n instanceof Sj ? n : Zr())
            }
            ,
            Sj.prototype.toString = function() {
                return "StringAnswer(value=" + this.o2s_1 + ")"
            }
            ,
            Sj.prototype.hashCode = function() {
                return us(this.o2s_1)
            }
            ,
            Sj.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof Sj))
                    return !1;
                var n = t instanceof Sj ? t : Zr();
                return this.o2s_1 === n.o2s_1
            }
            ,
            Mj.prototype.y12 = function() {
                return this.i3f_1
            }
            ,
            Mj.prototype.d1d = function() {
                return [pu()]
            }
            ,
            Mj.prototype.l13 = function(t) {
                var n = this.i3f_1
                  , i = !0
                  , e = 0
                  , r = 0
                  , o = !1
                  , u = t.g16(n);
                if (u.v16())
                    o = u.i16(n, 0),
                    r |= 1;
                else
                    for (; i; )
                        switch (e = u.w16(n)) {
                        case -1:
                            i = !1;
                            break;
                        case 0:
                            o = u.i16(n, 0),
                            r |= 1;
                            break;
                        default:
                            throw vu(e)
                        }
                return u.h16(n),
                Oj(r, o, null)
            }
            ,
            Mj.prototype.j3f = function(t, n) {
                var i = this.i3f_1
                  , e = t.g16(i);
                e.l17(i, 0, n.r2r_1),
                e.h16(i)
            }
            ,
            Mj.prototype.i13 = function(t, n) {
                return this.j3f(t, n instanceof Ej ? n : Zr())
            }
            ,
            Ej.prototype.toString = function() {
                return "BooleanAnswer(value=" + this.r2r_1 + ")"
            }
            ,
            Ej.prototype.hashCode = function() {
                return 0 | this.r2r_1
            }
            ,
            Ej.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof Ej))
                    return !1;
                var n = t instanceof Ej ? t : Zr();
                return this.r2r_1 === n.r2r_1
            }
            ,
            Gj.prototype.y12 = function() {
                return this.k3f_1
            }
            ,
            Gj.prototype.d1d = function() {
                var t = go(Ef);
                return [rl(t, [])]
            }
            ,
            Gj.prototype.l13 = function(t) {
                var n = this.k3f_1
                  , i = !0
                  , e = 0
                  , r = 0
                  , o = null
                  , u = t.g16(n);
                if (u.v16()) {
                    var s, a = go(Ef);
                    s = [],
                    o = u.s16(n, 0, rl(a, s), o),
                    r |= 1
                } else
                    for (; i; )
                        switch (e = u.w16(n)) {
                        case -1:
                            i = !1;
                            break;
                        case 0:
                            var l, h = go(Ef);
                            l = [],
                            o = u.s16(n, 0, rl(h, l), o),
                            r |= 1;
                            break;
                        default:
                            throw vu(e)
                        }
                return u.h16(n),
                Lj(r, o, null)
            }
            ,
            Gj.prototype.l3f = function(t, n) {
                var i, e = this.k3f_1, r = t.g16(e), o = go(Ef);
                i = [],
                r.v17(e, 0, rl(o, i), n.k2o_1),
                r.h16(e)
            }
            ,
            Gj.prototype.i13 = function(t, n) {
                return this.l3f(t, n instanceof Bj ? n : Zr())
            }
            ,
            Bj.prototype.toString = function() {
                return "MatchingAnswer(value=" + this.k2o_1 + ")"
            }
            ,
            Bj.prototype.hashCode = function() {
                return Tu(this.k2o_1)
            }
            ,
            Bj.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof Bj))
                    return !1;
                var n = t instanceof Bj ? t : Zr();
                return !!_u(this.k2o_1, n.k2o_1)
            }
            ,
            Wj.prototype.y12 = function() {
                return this.m3f_1
            }
            ,
            Wj.prototype.d1d = function() {
                return [Tf()]
            }
            ,
            Wj.prototype.l13 = function(t) {
                var n = this.m3f_1
                  , i = !0
                  , e = 0
                  , r = 0
                  , o = null
                  , u = t.g16(n);
                if (u.v16())
                    o = u.s16(n, 0, Tf(), o),
                    r |= 1;
                else
                    for (; i; )
                        switch (e = u.w16(n)) {
                        case -1:
                            i = !1;
                            break;
                        case 0:
                            o = u.s16(n, 0, Tf(), o),
                            r |= 1;
                            break;
                        default:
                            throw vu(e)
                        }
                return u.h16(n),
                Hj(r, o, null)
            }
            ,
            Wj.prototype.n3f = function(t, n) {
                var i = this.m3f_1
                  , e = t.g16(i);
                e.v17(i, 0, Tf(), n.t2n_1),
                e.h16(i)
            }
            ,
            Wj.prototype.i13 = function(t, n) {
                return this.n3f(t, n instanceof Yj ? n : Zr())
            }
            ,
            Yj.prototype.toString = function() {
                return "MatchingGameAnswer(value=" + this.t2n_1 + ")"
            }
            ,
            Yj.prototype.hashCode = function() {
                return this.t2n_1.hashCode()
            }
            ,
            Yj.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof Yj))
                    return !1;
                var n = t instanceof Yj ? t : Zr();
                return !!this.t2n_1.equals(n.t2n_1)
            }
            ,
            tq.prototype.y12 = function() {
                return this.o3f_1
            }
            ,
            tq.prototype.d1d = function() {
                return [mu()]
            }
            ,
            tq.prototype.l13 = function(t) {
                var n = this.o3f_1
                  , i = !0
                  , e = 0
                  , r = 0
                  , o = new ju(0,0)
                  , u = t.g16(n);
                if (u.v16())
                    o = u.m16(n, 0),
                    r |= 1;
                else
                    for (; i; )
                        switch (e = u.w16(n)) {
                        case -1:
                            i = !1;
                            break;
                        case 0:
                            o = u.m16(n, 0),
                            r |= 1;
                            break;
                        default:
                            throw vu(e)
                        }
                return u.h16(n),
                eq(r, o, null)
            }
            ,
            tq.prototype.p3f = function(t, n) {
                var i = this.o3f_1
                  , e = t.g16(i);
                e.p17(i, 0, n.x2o_1),
                e.h16(i)
            }
            ,
            tq.prototype.i13 = function(t, n) {
                return this.p3f(t, n instanceof rq ? n : Zr())
            }
            ,
            rq.prototype.toString = function() {
                return "OptionIndexAnswer(value=" + Lo(this.x2o_1) + ")"
            }
            ,
            rq.prototype.hashCode = function() {
                return this.x2o_1.hashCode()
            }
            ,
            rq.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof rq))
                    return !1;
                var n = t instanceof rq ? t : Zr();
                return !!this.x2o_1.equals(n.x2o_1)
            }
            ,
            sq.prototype.y12 = function() {
                return this.q3f_1
            }
            ,
            sq.prototype.d1d = function() {
                return [new yl(Cu())]
            }
            ,
            sq.prototype.l13 = function(t) {
                var n = this.q3f_1
                  , i = !0
                  , e = 0
                  , r = 0
                  , o = null
                  , u = t.g16(n);
                if (u.v16())
                    o = u.s16(n, 0, new yl(Cu()), o),
                    r |= 1;
                else
                    for (; i; )
                        switch (e = u.w16(n)) {
                        case -1:
                            i = !1;
                            break;
                        case 0:
                            o = u.s16(n, 0, new yl(Cu()), o),
                            r |= 1;
                            break;
                        default:
                            throw vu(e)
                        }
                return u.h16(n),
                hq(r, o, null)
            }
            ,
            sq.prototype.r3f = function(t, n) {
                var i = this.q3f_1
                  , e = t.g16(i);
                e.v17(i, 0, new yl(Cu()), n.s3f_1),
                e.h16(i)
            }
            ,
            sq.prototype.i13 = function(t, n) {
                return this.r3f(t, n instanceof _q ? n : Zr())
            }
            ,
            _q.prototype.toString = function() {
                return "OptionIndicesAnswer(value=" + this.s3f_1 + ")"
            }
            ,
            _q.prototype.hashCode = function() {
                return Tu(this.s3f_1)
            }
            ,
            _q.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof _q))
                    return !1;
                var n = t instanceof _q ? t : Zr();
                return !!_u(this.s3f_1, n.s3f_1)
            }
            ,
            cq.prototype.f1o = function() {
                return pq()
            }
            ,
            dq.prototype.y12 = function() {
                return this.t3f_1
            }
            ,
            dq.prototype.d1d = function() {
                return [wl()]
            }
            ,
            dq.prototype.l13 = function(t) {
                var n = this.t3f_1
                  , i = !0
                  , e = 0
                  , r = 0
                  , o = null
                  , u = t.g16(n);
                if (u.v16())
                    o = u.s16(n, 0, wl(), o),
                    r |= 1;
                else
                    for (; i; )
                        switch (e = u.w16(n)) {
                        case -1:
                            i = !1;
                            break;
                        case 0:
                            o = u.s16(n, 0, wl(), o),
                            r |= 1;
                            break;
                        default:
                            throw vu(e)
                        }
                return u.h16(n),
                yq(r, o, null)
            }
            ,
            dq.prototype.u3f = function(t, n) {
                var i = this.t3f_1
                  , e = t.g16(i);
                e.v17(i, 0, wl(), n.o2p_1),
                e.h16(i)
            }
            ,
            dq.prototype.i13 = function(t, n) {
                return this.u3f(t, n instanceof wq ? n : Zr())
            }
            ,
            wq.prototype.toString = function() {
                return "RevealSelfAssessmentAnswer(value=" + this.o2p_1 + ")"
            }
            ,
            wq.prototype.hashCode = function() {
                return this.o2p_1.hashCode()
            }
            ,
            wq.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof wq))
                    return !1;
                var n = t instanceof wq ? t : Zr();
                return !!this.o2p_1.equals(n.o2p_1)
            }
            ,
            gq.prototype.toString = function() {
                return "RoundOutline(cardEdges=" + this.x2u_1 + ", enabledQuestions=" + this.y2u_1 + ", enabledAnswerSides=" + this.z2u_1 + ", enabledWrittenAnswerSides=" + this.a2v_1 + ", timestamp=" + Lo(this.b2v_1) + ")"
            }
            ,
            gq.prototype.hashCode = function() {
                var t = Tu(this.x2u_1);
                return t = Kr(t, 31) + Tu(this.y2u_1) | 0,
                t = Kr(t, 31) + Tu(this.z2u_1) | 0,
                t = Kr(t, 31) + Tu(this.a2v_1) | 0,
                t = Kr(t, 31) + this.b2v_1.hashCode() | 0
            }
            ,
            gq.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof gq))
                    return !1;
                var n = t instanceof gq ? t : Zr();
                return !!(_u(this.x2u_1, n.x2u_1) && _u(this.y2u_1, n.y2u_1) && _u(this.z2u_1, n.z2u_1) && _u(this.a2v_1, n.a2v_1) && this.b2v_1.equals(n.b2v_1))
            }
            ,
            mq.prototype.y12 = function() {
                return this.v3f_1
            }
            ,
            mq.prototype.d1d = function() {
                return [mu(), pu()]
            }
            ,
            mq.prototype.l13 = function(t) {
                var n = this.v3f_1
                  , i = !0
                  , e = 0
                  , r = 0
                  , o = new ju(0,0)
                  , u = !1
                  , s = t.g16(n);
                if (s.v16())
                    o = s.m16(n, 0),
                    r |= 1,
                    u = s.i16(n, 1),
                    r |= 2;
                else
                    for (; i; )
                        switch (e = s.w16(n)) {
                        case -1:
                            i = !1;
                            break;
                        case 0:
                            o = s.m16(n, 0),
                            r |= 1;
                            break;
                        case 1:
                            u = s.i16(n, 1),
                            r |= 2;
                            break;
                        default:
                            throw vu(e)
                        }
                return s.h16(n),
                Cq(r, o, u, null)
            }
            ,
            mq.prototype.w3f = function(t, n) {
                var i = this.v3f_1
                  , e = t.g16(i);
                e.p17(i, 0, n.x3f_1),
                e.l17(i, 1, n.y3f_1),
                e.h16(i)
            }
            ,
            mq.prototype.i13 = function(t, n) {
                return this.w3f(t, n instanceof xq ? n : Zr())
            }
            ,
            xq.prototype.toString = function() {
                return "RoundResultItem(studiableItemId=" + Lo(this.x3f_1) + ", isCorrect=" + this.y3f_1 + ")"
            }
            ,
            xq.prototype.hashCode = function() {
                var t = this.x3f_1.hashCode();
                return t = Kr(t, 31) + (0 | this.y3f_1) | 0
            }
            ,
            xq.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof xq))
                    return !1;
                var n = t instanceof xq ? t : Zr();
                return !!this.x3f_1.equals(n.x3f_1) && this.y3f_1 === n.y3f_1
            }
            ,
            Tq.prototype.z3f = function(t, n, i, e, r, o, u, s, a, l, h) {
                return new Tq(t,n,i,e,r,o,u,s,a,l,h)
            }
            ,
            Tq.prototype.a3g = function(t, n, i, e, r, o, u, s, a, l, h, _, c) {
                return 0 != (1 & _) && (t = this.m2u_1),
                0 != (2 & _) && (n = this.n2u_1),
                0 != (4 & _) && (i = this.o2u_1),
                0 != (8 & _) && (e = this.p2u_1),
                0 != (16 & _) && (r = this.q2u_1),
                0 != (32 & _) && (o = this.r2u_1),
                0 != (64 & _) && (u = this.s2u_1),
                0 != (128 & _) && (s = this.t2u_1),
                0 != (256 & _) && (a = this.u2u_1),
                0 != (512 & _) && (l = this.v2u_1),
                0 != (1024 & _) && (h = this.w2u_1),
                this.z3f(t, n, i, e, r, o, u, s, a, l, h)
            }
            ,
            Tq.prototype.toString = function() {
                return "SavedState(roundOutline=" + this.m2u_1 + ", scoredCardSides=" + this.n2u_1 + ", roundStartStudyProgress=" + this.o2u_1 + ", hasCompletedStudying=" + this.p2u_1 + ", progressResetTimestamp=" + qu(this.q2u_1) + ", answersSinceRoundStart=" + this.r2u_1 + ", task=" + this.s2u_1 + ", taskSequenceProgress=" + this.t2u_1 + ", currentTaskProgress=" + this.u2u_1 + ", hasSeenCompletionScreen=" + this.v2u_1 + ", postCompletionStudy=" + this.w2u_1 + ")"
            }
            ,
            Tq.prototype.hashCode = function() {
                var t = null == this.m2u_1 ? 0 : this.m2u_1.hashCode();
                return t = Kr(t, 31) + (null == this.n2u_1 ? 0 : Tu(this.n2u_1)) | 0,
                t = Kr(t, 31) + (null == this.o2u_1 ? 0 : os(this.o2u_1)) | 0,
                t = Kr(t, 31) + (null == this.p2u_1 ? 0 : 0 | this.p2u_1) | 0,
                t = Kr(t, 31) + (null == this.q2u_1 ? 0 : this.q2u_1.hashCode()) | 0,
                t = Kr(t, 31) + Tu(this.r2u_1) | 0,
                t = Kr(t, 31) + (null == this.s2u_1 ? 0 : this.s2u_1.hashCode()) | 0,
                t = Kr(t, 31) + (null == this.t2u_1 ? 0 : os(this.t2u_1)) | 0,
                t = Kr(t, 31) + (null == this.u2u_1 ? 0 : this.u2u_1.hashCode()) | 0,
                t = Kr(t, 31) + (null == this.v2u_1 ? 0 : 0 | this.v2u_1) | 0,
                t = Kr(t, 31) + (null == this.w2u_1 ? 0 : Tu(this.w2u_1)) | 0
            }
            ,
            Tq.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof Tq))
                    return !1;
                var n = t instanceof Tq ? t : Zr();
                return !!(_u(this.m2u_1, n.m2u_1) && _u(this.n2u_1, n.n2u_1) && _u(this.o2u_1, n.o2u_1) && this.p2u_1 == n.p2u_1 && _u(this.q2u_1, n.q2u_1) && _u(this.r2u_1, n.r2u_1) && _u(this.s2u_1, n.s2u_1) && _u(this.t2u_1, n.t2u_1) && _u(this.u2u_1, n.u2u_1) && this.v2u_1 == n.v2u_1 && _u(this.w2u_1, n.w2u_1))
            }
            ,
            Mq.prototype.b3g = function(t) {
                return gz().compare(this, t)
            }
            ,
            Mq.prototype.tb = function(t) {
                return this.b3g(t instanceof Mq ? t : Zr())
            }
            ,
            Mq.prototype.toString = function() {
                return "ScoredCardSide(studiableItemId=" + Lo(this.q2t_1) + ", answerSide=" + this.r2t_1 + ", currentScore=" + this.s2t_1 + ", numMaxDifficultyQuestionsRequired=" + Lo(this.t2t_1) + ", numMaxDifficultyQuestionsAnswered=" + Lo(this.u2t_1) + ")"
            }
            ,
            Mq.prototype.hashCode = function() {
                var t = this.q2t_1.hashCode();
                return t = Kr(t, 31) + this.r2t_1.hashCode() | 0,
                t = Kr(t, 31) + os(this.s2t_1) | 0,
                t = Kr(t, 31) + this.t2t_1.hashCode() | 0,
                t = Kr(t, 31) + this.u2t_1.hashCode() | 0
            }
            ,
            Mq.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof Mq))
                    return !1;
                var n = t instanceof Mq ? t : Zr();
                return !!(this.q2t_1.equals(n.q2t_1) && this.r2t_1.equals(n.r2t_1) && _u(this.s2t_1, n.s2t_1) && this.t2t_1.equals(n.t2t_1) && this.u2t_1.equals(n.u2t_1))
            }
            ,
            Eq.prototype.f1o = function() {
                return this.c3g_1.p2()
            }
            ,
            Eq.prototype.m1d = function(t) {
                return this.f1o()
            }
            ,
            Pq.prototype.p2 = function() {
                return this.f3g_1
            }
            ,
            Wq.prototype.b5 = function() {
                return this.h2x_1
            }
            ,
            Wq.prototype.c5 = function() {
                return this.i2x_1
            }
            ,
            Wq.prototype.toString = function() {
                return "SidePair(promptSide=" + this.h2x_1 + ", answerSide=" + this.i2x_1 + ")"
            }
            ,
            Wq.prototype.hashCode = function() {
                var t = this.h2x_1.hashCode();
                return t = Kr(t, 31) + this.i2x_1.hashCode() | 0
            }
            ,
            Wq.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof Wq))
                    return !1;
                var n = t instanceof Wq ? t : Zr();
                return !!this.h2x_1.equals(n.h2x_1) && !!this.i2x_1.equals(n.i2x_1)
            }
            ,
            Kq.prototype.y12 = function() {
                return this.g3g_1
            }
            ,
            Kq.prototype.d1d = function() {
                return [$u(mu()), $u(Ha()), $u(Ha()), $u(bw()), $u($C()), $u(new Ma(gl())), $u(new Qa(kl(),$l()))]
            }
            ,
            Kq.prototype.l13 = function(t) {
                var n = this.g3g_1
                  , i = !0
                  , e = 0
                  , r = 0
                  , o = null
                  , u = null
                  , s = null
                  , a = null
                  , l = null
                  , h = null
                  , _ = null
                  , c = t.g16(n);
                if (c.v16())
                    o = c.u16(n, 0, mu(), o),
                    r |= 1,
                    u = c.u16(n, 1, Ha(), u),
                    r |= 2,
                    s = c.u16(n, 2, Ha(), s),
                    r |= 4,
                    a = c.u16(n, 3, bw(), a),
                    r |= 8,
                    l = c.u16(n, 4, $C(), l),
                    r |= 16,
                    h = c.u16(n, 5, new Ma(gl()), h),
                    r |= 32,
                    _ = c.u16(n, 6, new Qa(kl(),$l()), _),
                    r |= 64;
                else
                    for (; i; )
                        switch (e = c.w16(n)) {
                        case -1:
                            i = !1;
                            break;
                        case 0:
                            o = c.u16(n, 0, mu(), o),
                            r |= 1;
                            break;
                        case 1:
                            u = c.u16(n, 1, Ha(), u),
                            r |= 2;
                            break;
                        case 2:
                            s = c.u16(n, 2, Ha(), s),
                            r |= 4;
                            break;
                        case 3:
                            a = c.u16(n, 3, bw(), a),
                            r |= 8;
                            break;
                        case 4:
                            l = c.u16(n, 4, $C(), l),
                            r |= 16;
                            break;
                        case 5:
                            h = c.u16(n, 5, new Ma(gl()), h),
                            r |= 32;
                            break;
                        case 6:
                            _ = c.u16(n, 6, new Qa(kl(),$l()), _),
                            r |= 64;
                            break;
                        default:
                            throw vu(e)
                        }
                return c.h16(n),
                Jq(r, o, u, s, a, l, h, _, null)
            }
            ,
            Kq.prototype.h3g = function(t, n) {
                var i = this.g3g_1
                  , e = t.g16(i);
                e.w17(i, 0, mu(), n.i3g_1),
                e.w17(i, 1, Ha(), n.j3g_1),
                e.w17(i, 2, Ha(), n.k3g_1),
                (e.a18(i, 3) || null != n.l3g_1) && e.w17(i, 3, bw(), n.l3g_1),
                (e.a18(i, 4) || null != n.m3g_1) && e.w17(i, 4, $C(), n.m3g_1),
                (e.a18(i, 5) || null != n.n3g_1) && e.w17(i, 5, new Ma(gl()), n.n3g_1),
                (e.a18(i, 6) || null != n.o3g_1) && e.w17(i, 6, new Qa(kl(),$l()), n.o3g_1),
                e.h16(i)
            }
            ,
            Kq.prototype.i13 = function(t, n) {
                return this.h3g(t, n instanceof tC ? n : Zr())
            }
            ,
            tC.prototype.p3g = function(t) {
                this.o3g_1 = t
            }
            ,
            tC.prototype.toString = function() {
                return "QuestionMetadata(studiableItemId=" + qu(this.i3g_1) + ", promptSide=" + this.j3g_1 + ", answerSide=" + this.k3g_1 + ", questionSource=" + this.l3g_1 + ", questionScoringInferenceMetadata=" + this.m3g_1 + ", optionGenerationSource=" + this.n3g_1 + ", meteringData=" + this.o3g_1 + ")"
            }
            ,
            tC.prototype.hashCode = function() {
                var t = null == this.i3g_1 ? 0 : this.i3g_1.hashCode();
                return t = Kr(t, 31) + (null == this.j3g_1 ? 0 : this.j3g_1.hashCode()) | 0,
                t = Kr(t, 31) + (null == this.k3g_1 ? 0 : this.k3g_1.hashCode()) | 0,
                t = Kr(t, 31) + (null == this.l3g_1 ? 0 : this.l3g_1.hashCode()) | 0,
                t = Kr(t, 31) + (null == this.m3g_1 ? 0 : this.m3g_1.hashCode()) | 0,
                t = Kr(t, 31) + (null == this.n3g_1 ? 0 : Tu(this.n3g_1)) | 0,
                t = Kr(t, 31) + (null == this.o3g_1 ? 0 : Tu(this.o3g_1)) | 0
            }
            ,
            tC.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof tC))
                    return !1;
                var n = t instanceof tC ? t : Zr();
                return !!(_u(this.i3g_1, n.i3g_1) && _u(this.j3g_1, n.j3g_1) && _u(this.k3g_1, n.k3g_1) && _u(this.l3g_1, n.l3g_1) && _u(this.m3g_1, n.m3g_1) && _u(this.n3g_1, n.n3g_1) && _u(this.o3g_1, n.o3g_1))
            }
            ,
            oC.prototype.y12 = function() {
                return this.q3g_1
            }
            ,
            oC.prototype.d1d = function() {
                return [$u(new Qa(kl(),$l()))]
            }
            ,
            oC.prototype.l13 = function(t) {
                var n = this.q3g_1
                  , i = !0
                  , e = 0
                  , r = 0
                  , o = null
                  , u = t.g16(n);
                if (u.v16())
                    o = u.u16(n, 0, new Qa(kl(),$l()), o),
                    r |= 1;
                else
                    for (; i; )
                        switch (e = u.w16(n)) {
                        case -1:
                            i = !1;
                            break;
                        case 0:
                            o = u.u16(n, 0, new Qa(kl(),$l()), o),
                            r |= 1;
                            break;
                        default:
                            throw vu(e)
                        }
                return u.h16(n),
                aC(r, o, null)
            }
            ,
            oC.prototype.r3g = function(t, n) {
                var i = this.q3g_1
                  , e = t.g16(i);
                (e.a18(i, 0) || null != n.s3g_1) && e.w17(i, 0, new Qa(kl(),$l()), n.s3g_1),
                e.h16(i)
            }
            ,
            oC.prototype.i13 = function(t, n) {
                return this.r3g(t, n instanceof lC ? n : Zr())
            }
            ,
            lC.prototype.p3g = function(t) {
                this.s3g_1 = t
            }
            ,
            lC.prototype.toString = function() {
                return "CheckpointMetadata(meteringData=" + this.s3g_1 + ")"
            }
            ,
            lC.prototype.hashCode = function() {
                return null == this.s3g_1 ? 0 : Tu(this.s3g_1)
            }
            ,
            lC.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof lC))
                    return !1;
                var n = t instanceof lC ? t : Zr();
                return !!_u(this.s3g_1, n.s3g_1)
            }
            ,
            dC.prototype.y12 = function() {
                return this.t3g_1
            }
            ,
            dC.prototype.d1d = function() {
                return [$u(new Qa(kl(),$l()))]
            }
            ,
            dC.prototype.l13 = function(t) {
                var n = this.t3g_1
                  , i = !0
                  , e = 0
                  , r = 0
                  , o = null
                  , u = t.g16(n);
                if (u.v16())
                    o = u.u16(n, 0, new Qa(kl(),$l()), o),
                    r |= 1;
                else
                    for (; i; )
                        switch (e = u.w16(n)) {
                        case -1:
                            i = !1;
                            break;
                        case 0:
                            o = u.u16(n, 0, new Qa(kl(),$l()), o),
                            r |= 1;
                            break;
                        default:
                            throw vu(e)
                        }
                return u.h16(n),
                yC(r, o, null)
            }
            ,
            dC.prototype.u3g = function(t, n) {
                var i = this.t3g_1
                  , e = t.g16(i);
                (e.a18(i, 0) || null != n.v3g_1) && e.w17(i, 0, new Qa(kl(),$l()), n.v3g_1),
                e.h16(i)
            }
            ,
            dC.prototype.i13 = function(t, n) {
                return this.u3g(t, n instanceof wC ? n : Zr())
            }
            ,
            wC.prototype.p3g = function(t) {
                this.v3g_1 = t
            }
            ,
            wC.prototype.toString = function() {
                return "PaywallMetadata(meteringData=" + this.v3g_1 + ")"
            }
            ,
            wC.prototype.hashCode = function() {
                return null == this.v3g_1 ? 0 : Tu(this.v3g_1)
            }
            ,
            wC.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof wC))
                    return !1;
                var n = t instanceof wC ? t : Zr();
                return !!_u(this.v3g_1, n.v3g_1)
            }
            ,
            kC.prototype.y12 = function() {
                return this.w3g_1
            }
            ,
            kC.prototype.d1d = function() {
                return [ol(), Xa(), Xa(), $u(ol()), $u(Xa())]
            }
            ,
            kC.prototype.l13 = function(t) {
                var n = this.w3g_1
                  , i = !0
                  , e = 0
                  , r = 0
                  , o = 0
                  , u = null
                  , s = null
                  , a = null
                  , l = null
                  , h = t.g16(n);
                if (h.v16())
                    o = h.o16(n, 0),
                    r |= 1,
                    u = h.q16(n, 1),
                    r |= 2,
                    s = h.q16(n, 2),
                    r |= 4,
                    a = h.u16(n, 3, ol(), a),
                    r |= 8,
                    l = h.u16(n, 4, Xa(), l),
                    r |= 16;
                else
                    for (; i; )
                        switch (e = h.w16(n)) {
                        case -1:
                            i = !1;
                            break;
                        case 0:
                            o = h.o16(n, 0),
                            r |= 1;
                            break;
                        case 1:
                            u = h.q16(n, 1),
                            r |= 2;
                            break;
                        case 2:
                            s = h.q16(n, 2),
                            r |= 4;
                            break;
                        case 3:
                            a = h.u16(n, 3, ol(), a),
                            r |= 8;
                            break;
                        case 4:
                            l = h.u16(n, 4, Xa(), l),
                            r |= 16;
                            break;
                        default:
                            throw vu(e)
                        }
                return h.h16(n),
                jC(r, o, u, s, a, l, null)
            }
            ,
            kC.prototype.x3g = function(t, n) {
                var i = this.w3g_1
                  , e = t.g16(i);
                e.r17(i, 0, n.y3g_1),
                e.t17(i, 1, n.z3g_1),
                e.t17(i, 2, n.a3h_1),
                (e.a18(i, 3) || null != n.b3h_1) && e.w17(i, 3, ol(), n.b3h_1),
                (e.a18(i, 4) || null != n.c3h_1) && e.w17(i, 4, Xa(), n.c3h_1),
                e.h16(i)
            }
            ,
            kC.prototype.i13 = function(t, n) {
                return this.x3g(t, n instanceof qC ? n : Zr())
            }
            ,
            qC.prototype.toString = function() {
                return "QuestionScoringInferenceMetadata(currentScore=" + this.y3g_1 + ", modelVersion=" + this.z3g_1 + ", modelName=" + this.a3h_1 + ", priorityScore=" + this.b3h_1 + ", priorityMethod=" + this.c3h_1 + ")"
            }
            ,
            qC.prototype.hashCode = function() {
                var t = os(this.y3g_1);
                return t = Kr(t, 31) + us(this.z3g_1) | 0,
                t = Kr(t, 31) + us(this.a3h_1) | 0,
                t = Kr(t, 31) + (null == this.b3h_1 ? 0 : os(this.b3h_1)) | 0,
                t = Kr(t, 31) + (null == this.c3h_1 ? 0 : us(this.c3h_1)) | 0
            }
            ,
            qC.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof qC))
                    return !1;
                var n = t instanceof qC ? t : Zr();
                return !!_u(this.y3g_1, n.y3g_1) && this.z3g_1 === n.z3g_1 && this.a3h_1 === n.a3h_1 && !!_u(this.b3h_1, n.b3h_1) && this.c3h_1 == n.c3h_1
            }
            ,
            TC.prototype.y12 = function() {
                return this.d3h_1
            }
            ,
            TC.prototype.d1d = function() {
                return [pu(), $u(new Qa(kl(),$l()))]
            }
            ,
            TC.prototype.l13 = function(t) {
                var n = this.d3h_1
                  , i = !0
                  , e = 0
                  , r = 0
                  , o = !1
                  , u = null
                  , s = t.g16(n);
                if (s.v16())
                    o = s.i16(n, 0),
                    r |= 1,
                    u = s.u16(n, 1, new Qa(kl(),$l()), u),
                    r |= 2;
                else
                    for (; i; )
                        switch (e = s.w16(n)) {
                        case -1:
                            i = !1;
                            break;
                        case 0:
                            o = s.i16(n, 0),
                            r |= 1;
                            break;
                        case 1:
                            u = s.u16(n, 1, new Qa(kl(),$l()), u),
                            r |= 2;
                            break;
                        default:
                            throw vu(e)
                        }
                return s.h16(n),
                AC(r, o, u, null)
            }
            ,
            TC.prototype.e3h = function(t, n) {
                var i = this.d3h_1
                  , e = t.g16(i);
                (e.a18(i, 0) || !1 !== n.f3h_1) && e.l17(i, 0, n.f3h_1),
                (e.a18(i, 1) || null != n.g3h_1) && e.w17(i, 1, new Qa(kl(),$l()), n.g3h_1),
                e.h16(i)
            }
            ,
            TC.prototype.i13 = function(t, n) {
                return this.e3h(t, n instanceof OC ? n : Zr())
            }
            ,
            OC.prototype.p3g = function(t) {
                this.g3h_1 = t
            }
            ,
            OC.prototype.h3h = function(t, n) {
                return new OC(t,n)
            }
            ,
            OC.prototype.i3h = function(t, n, i, e) {
                return 0 != (1 & i) && (t = this.f3h_1),
                0 != (2 & i) && (n = this.g3h_1),
                this.h3h(t, n)
            }
            ,
            OC.prototype.toString = function() {
                return "TestGeneratorOutputMetadata(isRetriedTest=" + this.f3h_1 + ", meteringData=" + this.g3h_1 + ")"
            }
            ,
            OC.prototype.hashCode = function() {
                var t = 0 | this.f3h_1;
                return t = Kr(t, 31) + (null == this.g3h_1 ? 0 : Tu(this.g3h_1)) | 0
            }
            ,
            OC.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof OC))
                    return !1;
                var n = t instanceof OC ? t : Zr();
                return this.f3h_1 === n.f3h_1 && !!_u(this.g3h_1, n.g3h_1)
            }
            ,
            QC.prototype.b5 = function() {
                return this.j3h_1
            }
            ,
            QC.prototype.c5 = function() {
                return this.k3h_1
            }
            ,
            QC.prototype.toString = function() {
                return "TaskQuestionTypeSourceTuple(questionType=" + this.j3h_1 + ", questionSource=" + this.k3h_1 + ")"
            }
            ,
            QC.prototype.hashCode = function() {
                var t = this.j3h_1.hashCode();
                return t = Kr(t, 31) + (null == this.k3h_1 ? 0 : this.k3h_1.hashCode()) | 0
            }
            ,
            QC.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof QC))
                    return !1;
                var n = t instanceof QC ? t : Zr();
                return !!this.j3h_1.equals(n.j3h_1) && !!_u(this.k3h_1, n.k3h_1)
            }
            ,
            GC.prototype.a24 = function() {
                return this.l3h_1
            }
            ,
            GC.prototype.b3d = function() {
                return this.m3h_1
            }
            ,
            GC.prototype.c3d = function() {
                return this.n3h_1
            }
            ,
            GC.prototype.d3d = function() {
                return this.o3h_1
            }
            ,
            GC.prototype.e3d = function() {
                return this.p3h_1
            }
            ,
            GC.prototype.f3d = function() {
                return this.q3h_1
            }
            ,
            GC.prototype.g3d = function() {
                return this.r3h_1
            }
            ,
            GC.prototype.h3d = function() {
                return this.s3h_1
            }
            ,
            GC.prototype.i3d = function() {
                return this.t3h_1
            }
            ,
            GC.prototype.j3d = function() {
                return this.u3h_1
            }
            ,
            GC.prototype.k3d = function() {
                return this.v3h_1
            }
            ,
            GC.prototype.l3d = function() {
                return this.w3h_1
            }
            ,
            GC.prototype.o3d = function() {
                return this.x3h_1
            }
            ,
            GC.prototype.p3d = function() {
                return this.y3h_1
            }
            ,
            GC.prototype.m3d = function() {
                return this.z3h_1
            }
            ,
            GC.prototype.n3d = function() {
                return this.a3i_1
            }
            ,
            GC.prototype.toString = function() {
                return "Term(id=" + Lo(this.l3h_1) + ", word=" + this.m3h_1 + ", wordRichText=" + this.n3h_1 + ", _wordTtsUrl=" + this.o3h_1 + ", _wordSlowTtsUrl=" + this.p3h_1 + ", _wordAudioUrl=" + this.q3h_1 + ", definition=" + this.r3h_1 + ", definitionRichText=" + this.s3h_1 + ", _definitionTtsUrl=" + this.t3h_1 + ", _definitionSlowTtsUrl=" + this.u3h_1 + ", _definitionAudioUrl=" + this.v3h_1 + ", definitionImage=" + this.w3h_1 + ", wordDistractors=" + this.x3h_1 + ", definitionDistractors=" + this.y3h_1 + ", setId=" + Lo(this.z3h_1) + ", rank=" + qu(this.a3i_1) + ")"
            }
            ,
            GC.prototype.hashCode = function() {
                var t = this.l3h_1.hashCode();
                return t = Kr(t, 31) + us(this.m3h_1) | 0,
                t = Kr(t, 31) + (null == this.n3h_1 ? 0 : this.n3h_1.hashCode()) | 0,
                t = Kr(t, 31) + (null == this.o3h_1 ? 0 : us(this.o3h_1)) | 0,
                t = Kr(t, 31) + (null == this.p3h_1 ? 0 : us(this.p3h_1)) | 0,
                t = Kr(t, 31) + (null == this.q3h_1 ? 0 : us(this.q3h_1)) | 0,
                t = Kr(t, 31) + us(this.r3h_1) | 0,
                t = Kr(t, 31) + (null == this.s3h_1 ? 0 : this.s3h_1.hashCode()) | 0,
                t = Kr(t, 31) + (null == this.t3h_1 ? 0 : us(this.t3h_1)) | 0,
                t = Kr(t, 31) + (null == this.u3h_1 ? 0 : us(this.u3h_1)) | 0,
                t = Kr(t, 31) + (null == this.v3h_1 ? 0 : us(this.v3h_1)) | 0,
                t = Kr(t, 31) + (null == this.w3h_1 ? 0 : this.w3h_1.hashCode()) | 0,
                t = Kr(t, 31) + (null == this.x3h_1 ? 0 : Tu(this.x3h_1)) | 0,
                t = Kr(t, 31) + (null == this.y3h_1 ? 0 : Tu(this.y3h_1)) | 0,
                t = Kr(t, 31) + this.z3h_1.hashCode() | 0,
                t = Kr(t, 31) + (null == this.a3i_1 ? 0 : this.a3i_1.hashCode()) | 0
            }
            ,
            GC.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof GC))
                    return !1;
                var n = t instanceof GC ? t : Zr();
                return !!(this.l3h_1.equals(n.l3h_1) && this.m3h_1 === n.m3h_1 && _u(this.n3h_1, n.n3h_1) && this.o3h_1 == n.o3h_1 && this.p3h_1 == n.p3h_1 && this.q3h_1 == n.q3h_1 && this.r3h_1 === n.r3h_1 && _u(this.s3h_1, n.s3h_1) && this.t3h_1 == n.t3h_1 && this.u3h_1 == n.u3h_1 && this.v3h_1 == n.v3h_1 && _u(this.w3h_1, n.w3h_1) && _u(this.x3h_1, n.x3h_1) && _u(this.y3h_1, n.y3h_1) && this.z3h_1.equals(n.z3h_1) && _u(this.a3i_1, n.a3i_1))
            }
            ,
            VC.prototype.y12 = function() {
                return this.f3i_1
            }
            ,
            VC.prototype.d1d = function() {
                return [$u(A_()), $u(jc()), $u(Yc()), $u(V_()), $u(oc())]
            }
            ,
            VC.prototype.l13 = function(t) {
                var n = this.f3i_1
                  , i = !0
                  , e = 0
                  , r = 0
                  , o = null
                  , u = null
                  , s = null
                  , a = null
                  , l = null
                  , h = t.g16(n);
                if (h.v16())
                    o = h.u16(n, 0, A_(), o),
                    r |= 1,
                    u = h.u16(n, 1, jc(), u),
                    r |= 2,
                    s = h.u16(n, 2, Yc(), s),
                    r |= 4,
                    a = h.u16(n, 3, V_(), a),
                    r |= 8,
                    l = h.u16(n, 4, oc(), l),
                    r |= 16;
                else
                    for (; i; )
                        switch (e = h.w16(n)) {
                        case -1:
                            i = !1;
                            break;
                        case 0:
                            o = h.u16(n, 0, A_(), o),
                            r |= 1;
                            break;
                        case 1:
                            u = h.u16(n, 1, jc(), u),
                            r |= 2;
                            break;
                        case 2:
                            s = h.u16(n, 2, Yc(), s),
                            r |= 4;
                            break;
                        case 3:
                            a = h.u16(n, 3, V_(), a),
                            r |= 8;
                            break;
                        case 4:
                            l = h.u16(n, 4, oc(), l),
                            r |= 16;
                            break;
                        default:
                            throw vu(e)
                        }
                return h.h16(n),
                KC(r, o, u, s, a, l, null)
            }
            ,
            VC.prototype.g3i = function(t, n) {
                var i = this.f3i_1
                  , e = t.g16(i);
                (e.a18(i, 0) || null != n.h2m_1) && e.w17(i, 0, A_(), n.h2m_1),
                (e.a18(i, 1) || null != n.i2m_1) && e.w17(i, 1, jc(), n.i2m_1),
                (e.a18(i, 2) || null != n.j2m_1) && e.w17(i, 2, Yc(), n.j2m_1),
                (e.a18(i, 3) || null != n.k2m_1) && e.w17(i, 3, V_(), n.k2m_1),
                (e.a18(i, 4) || null != n.l2m_1) && e.w17(i, 4, oc(), n.l2m_1),
                e.h16(i)
            }
            ,
            VC.prototype.i13 = function(t, n) {
                return this.g3i(t, n instanceof ZC ? n : Zr())
            }
            ,
            ZC.prototype.toString = function() {
                return "ExperimentConfiguration(continueStudyingFromTasks=" + this.h2m_1 + ", randomizeInitialTermOrder=" + this.i2m_1 + ", studyDirectionDefaults=" + this.j2m_1 + ", flexibleLearn=" + this.k2m_1 + ", granularStudyDirection=" + this.l2m_1 + ")"
            }
            ,
            ZC.prototype.hashCode = function() {
                var t = null == this.h2m_1 ? 0 : this.h2m_1.hashCode();
                return t = Kr(t, 31) + (null == this.i2m_1 ? 0 : this.i2m_1.hashCode()) | 0,
                t = Kr(t, 31) + (null == this.j2m_1 ? 0 : this.j2m_1.hashCode()) | 0,
                t = Kr(t, 31) + (null == this.k2m_1 ? 0 : this.k2m_1.hashCode()) | 0,
                t = Kr(t, 31) + (null == this.l2m_1 ? 0 : this.l2m_1.hashCode()) | 0
            }
            ,
            ZC.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof ZC))
                    return !1;
                var n = t instanceof ZC ? t : Zr();
                return !!(_u(this.h2m_1, n.h2m_1) && _u(this.i2m_1, n.i2m_1) && _u(this.j2m_1, n.j2m_1) && _u(this.k2m_1, n.k2m_1) && _u(this.l2m_1, n.l2m_1))
            }
            ,
            tx.prototype.f1o = function() {
                return ex()
            }
            ,
            ix.prototype.y12 = function() {
                return this.h3i_1
            }
            ,
            ix.prototype.d1d = function() {
                var t = go(kb);
                return [new Ma(rl(t, [])), MC()]
            }
            ,
            ix.prototype.l13 = function(t) {
                var n = this.h3i_1
                  , i = !0
                  , e = 0
                  , r = 0
                  , o = null
                  , u = null
                  , s = t.g16(n);
                if (s.v16()) {
                    var a, l = go(kb);
                    a = [],
                    o = s.s16(n, 0, new Ma(rl(l, a)), o),
                    r |= 1,
                    u = s.s16(n, 1, MC(), u),
                    r |= 2
                } else
                    for (; i; )
                        switch (e = s.w16(n)) {
                        case -1:
                            i = !1;
                            break;
                        case 0:
                            var h, _ = go(kb);
                            h = [],
                            o = s.s16(n, 0, new Ma(rl(_, h)), o),
                            r |= 1;
                            break;
                        case 1:
                            u = s.s16(n, 1, MC(), u),
                            r |= 2;
                            break;
                        default:
                            throw vu(e)
                        }
                return s.h16(n),
                ox(r, o, u, null)
            }
            ,
            ix.prototype.i3i = function(t, n) {
                var i, e = this.h3i_1, r = t.g16(e), o = go(kb);
                i = [],
                r.v17(e, 0, new Ma(rl(o, i)), n.j3i_1),
                (!!r.a18(e, 1) || !n.k3i_1.equals(xC(!1, null, 3, null))) && r.v17(e, 1, MC(), n.k3i_1),
                r.h16(e)
            }
            ,
            ix.prototype.i13 = function(t, n) {
                return this.i3i(t, n instanceof ux ? n : Zr())
            }
            ,
            ux.prototype.r36 = function() {
                return this.k3i_1
            }
            ,
            ux.prototype.l3i = function(t, n) {
                return new ux(t,n)
            }
            ,
            ux.prototype.m3i = function(t, n, i, e) {
                return 0 != (1 & i) && (t = this.j3i_1),
                0 != (2 & i) && (n = this.k3i_1),
                this.l3i(t, n)
            }
            ,
            ux.prototype.toString = function() {
                return "Test(questions=" + this.j3i_1 + ", metadata=" + this.k3i_1 + ")"
            }
            ,
            ux.prototype.hashCode = function() {
                var t = Tu(this.j3i_1);
                return t = Kr(t, 31) + this.k3i_1.hashCode() | 0
            }
            ,
            ux.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof ux))
                    return !1;
                var n = t instanceof ux ? t : Zr();
                return !!_u(this.j3i_1, n.j3i_1) && !!this.k3i_1.equals(n.k3i_1)
            }
            ,
            sx.prototype.f1o = function() {
                return hx()
            }
            ,
            lx.prototype.y12 = function() {
                return this.n3i_1
            }
            ,
            lx.prototype.d1d = function() {
                return [ol(), new Ma(Um()), MC()]
            }
            ,
            lx.prototype.l13 = function(t) {
                var n = this.n3i_1
                  , i = !0
                  , e = 0
                  , r = 0
                  , o = 0
                  , u = null
                  , s = null
                  , a = t.g16(n);
                if (a.v16())
                    o = a.o16(n, 0),
                    r |= 1,
                    u = a.s16(n, 1, new Ma(Um()), u),
                    r |= 2,
                    s = a.s16(n, 2, MC(), s),
                    r |= 4;
                else
                    for (; i; )
                        switch (e = a.w16(n)) {
                        case -1:
                            i = !1;
                            break;
                        case 0:
                            o = a.o16(n, 0),
                            r |= 1;
                            break;
                        case 1:
                            u = a.s16(n, 1, new Ma(Um()), u),
                            r |= 2;
                            break;
                        case 2:
                            s = a.s16(n, 2, MC(), s),
                            r |= 4;
                            break;
                        default:
                            throw vu(e)
                        }
                return a.h16(n),
                cx(r, o, u, s, null)
            }
            ,
            lx.prototype.o3i = function(t, n) {
                var i = this.n3i_1
                  , e = t.g16(i);
                e.r17(i, 0, n.p3i_1),
                e.v17(i, 1, new Ma(Um()), n.q3i_1),
                (!!e.a18(i, 2) || !n.r3i_1.equals(xC(!1, null, 3, null))) && e.v17(i, 2, MC(), n.r3i_1),
                e.h16(i)
            }
            ,
            lx.prototype.i13 = function(t, n) {
                return this.o3i(t, n instanceof fx ? n : Zr())
            }
            ,
            fx.prototype.r36 = function() {
                return this.r3i_1
            }
            ,
            fx.prototype.toString = function() {
                return "GradedTestResult(gradePercentage=" + this.p3i_1 + ", gradedAnswers=" + this.q3i_1 + ", metadata=" + this.r3i_1 + ")"
            }
            ,
            fx.prototype.hashCode = function() {
                var t = os(this.p3i_1);
                return t = Kr(t, 31) + Tu(this.q3i_1) | 0,
                t = Kr(t, 31) + this.r3i_1.hashCode() | 0
            }
            ,
            fx.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof fx))
                    return !1;
                var n = t instanceof fx ? t : Zr();
                return !!_u(this.p3i_1, n.p3i_1) && !!_u(this.q3i_1, n.q3i_1) && !!this.r3i_1.equals(n.r3i_1)
            }
            ,
            dx.prototype.f1o = function() {
                var t, n = go(vx), i = [go(ux), go(Cx)];
                return t = [ex(), mx()],
                cu("assistantMode.types.test.TestOrPaywall", n, i, t, [])
            }
            ,
            dx.prototype.m1d = function(t) {
                return this.f1o()
            }
            ,
            yx.prototype.f1o = function() {
                var t, n = go(bx), i = [go(fx), go(ux), go(Cx)];
                return t = [hx(), ex(), mx()],
                cu("assistantMode.types.test.TestGeneratorOutput", n, i, t, [])
            }
            ,
            yx.prototype.m1d = function(t) {
                return this.f1o()
            }
            ,
            $x.prototype.y12 = function() {
                return this.s3i_1
            }
            ,
            $x.prototype.d1d = function() {
                return [MC()]
            }
            ,
            $x.prototype.l13 = function(t) {
                var n = this.s3i_1
                  , i = !0
                  , e = 0
                  , r = 0
                  , o = null
                  , u = t.g16(n);
                if (u.v16())
                    o = u.s16(n, 0, MC(), o),
                    r |= 1;
                else
                    for (; i; )
                        switch (e = u.w16(n)) {
                        case -1:
                            i = !1;
                            break;
                        case 0:
                            o = u.s16(n, 0, MC(), o),
                            r |= 1;
                            break;
                        default:
                            throw vu(e)
                        }
                return u.h16(n),
                qx(r, o, null)
            }
            ,
            $x.prototype.t3i = function(t, n) {
                var i = this.s3i_1
                  , e = t.g16(i);
                (!!e.a18(i, 0) || !n.u3i_1.equals(xC(!1, null, 3, null))) && e.v17(i, 0, MC(), n.u3i_1),
                e.h16(i)
            }
            ,
            $x.prototype.i13 = function(t, n) {
                return this.t3i(t, n instanceof Cx ? n : Zr())
            }
            ,
            Cx.prototype.r36 = function() {
                return this.u3i_1
            }
            ,
            Cx.prototype.toString = function() {
                return "TestPaywall(metadata=" + this.u3i_1 + ")"
            }
            ,
            Cx.prototype.hashCode = function() {
                return this.u3i_1.hashCode()
            }
            ,
            Cx.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof Cx))
                    return !1;
                var n = t instanceof Cx ? t : Zr();
                return !!this.u3i_1.equals(n.u3i_1)
            }
            ,
            zx.prototype.f1o = function() {
                return Ix()
            }
            ,
            Mx.prototype.y12 = function() {
                return this.v3i_1
            }
            ,
            Mx.prototype.d1d = function() {
                return [new Ma(Va()), new Ma(Ha()), new Ma(Ha()), Cu(), $u(new Ma(mu()))]
            }
            ,
            Mx.prototype.l13 = function(t) {
                var n = this.v3i_1
                  , i = !0
                  , e = 0
                  , r = 0
                  , o = null
                  , u = null
                  , s = null
                  , a = 0
                  , l = null
                  , h = t.g16(n);
                if (h.v16())
                    o = h.s16(n, 0, new Ma(Va()), o),
                    r |= 1,
                    u = h.s16(n, 1, new Ma(Ha()), u),
                    r |= 2,
                    s = h.s16(n, 2, new Ma(Ha()), s),
                    r |= 4,
                    a = h.l16(n, 3),
                    r |= 8,
                    l = h.u16(n, 4, new Ma(mu()), l),
                    r |= 16;
                else
                    for (; i; )
                        switch (e = h.w16(n)) {
                        case -1:
                            i = !1;
                            break;
                        case 0:
                            o = h.s16(n, 0, new Ma(Va()), o),
                            r |= 1;
                            break;
                        case 1:
                            u = h.s16(n, 1, new Ma(Ha()), u),
                            r |= 2;
                            break;
                        case 2:
                            s = h.s16(n, 2, new Ma(Ha()), s),
                            r |= 4;
                            break;
                        case 3:
                            a = h.l16(n, 3),
                            r |= 8;
                            break;
                        case 4:
                            l = h.u16(n, 4, new Ma(mu()), l),
                            r |= 16;
                            break;
                        default:
                            throw vu(e)
                        }
                return h.h16(n),
                Ox(r, o, u, s, a, l, null)
            }
            ,
            Mx.prototype.w3i = function(t, n) {
                var i = this.v3i_1
                  , e = t.g16(i);
                e.v17(i, 0, new Ma(Va()), n.n2w_1),
                e.v17(i, 1, new Ma(Ha()), n.o2w_1),
                e.v17(i, 2, new Ma(Ha()), n.p2w_1),
                e.o17(i, 3, n.q2w_1),
                (e.a18(i, 4) || null != n.r2w_1) && e.w17(i, 4, new Ma(mu()), n.r2w_1),
                e.h16(i)
            }
            ,
            Mx.prototype.i13 = function(t, n) {
                return this.w3i(t, n instanceof Ex ? n : Zr())
            }
            ,
            Ex.prototype.x3i = function(t, n, i, e, r) {
                return new Ex(t,n,i,e,r)
            }
            ,
            Ex.prototype.y3i = function(t, n, i, e, r, o, u) {
                return 0 != (1 & o) && (t = this.n2w_1),
                0 != (2 & o) && (n = this.o2w_1),
                0 != (4 & o) && (i = this.p2w_1),
                0 != (8 & o) && (e = this.q2w_1),
                0 != (16 & o) && (r = this.r2w_1),
                this.x3i(t, n, i, e, r)
            }
            ,
            Ex.prototype.toString = function() {
                return "TestSettings(enabledQuestionTypes=" + this.n2w_1 + ", enabledPromptSides=" + this.o2w_1 + ", enabledAnswerSides=" + this.p2w_1 + ", numQuestions=" + this.q2w_1 + ", studiableItemIds=" + this.r2w_1 + ")"
            }
            ,
            Ex.prototype.hashCode = function() {
                var t = Tu(this.n2w_1);
                return t = Kr(t, 31) + Tu(this.o2w_1) | 0,
                t = Kr(t, 31) + Tu(this.p2w_1) | 0,
                t = Kr(t, 31) + this.q2w_1 | 0,
                t = Kr(t, 31) + (null == this.r2w_1 ? 0 : Tu(this.r2w_1)) | 0
            }
            ,
            Ex.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof Ex))
                    return !1;
                var n = t instanceof Ex ? t : Zr();
                return !!(_u(this.n2w_1, n.n2w_1) && _u(this.o2w_1, n.o2w_1) && _u(this.p2w_1, n.p2w_1) && this.q2w_1 === n.q2w_1 && _u(this.r2w_1, n.r2w_1))
            }
            ,
            Kx.prototype.toString = function() {
                return "DistanceMetrics(answerNormalizedEditDistance=" + this.z3i_1 + ", promptNormalizedEditDistance=" + this.a3j_1 + ", promptNormalizedLengthDistance=" + this.b3j_1 + ", answerNormalizedLengthDistance=" + this.c3j_1 + ", promptPartOfSpeechDistance=" + this.d3j_1 + ", answerPartOfSpeechDistance=" + this.e3j_1 + ", promptTextClassificationDistance=" + this.f3j_1 + ", answerTextClassificationDistance=" + this.g3j_1 + ", definitionImageDistance=" + this.h3j_1 + ", optionWord=" + this.i3j_1 + ")"
            }
            ,
            Kx.prototype.hashCode = function() {
                var t = os(this.z3i_1);
                return t = Kr(t, 31) + os(this.a3j_1) | 0,
                t = Kr(t, 31) + os(this.b3j_1) | 0,
                t = Kr(t, 31) + os(this.c3j_1) | 0,
                t = Kr(t, 31) + os(this.d3j_1) | 0,
                t = Kr(t, 31) + os(this.e3j_1) | 0,
                t = Kr(t, 31) + os(this.f3j_1) | 0,
                t = Kr(t, 31) + os(this.g3j_1) | 0,
                t = Kr(t, 31) + os(this.h3j_1) | 0,
                t = Kr(t, 31) + (null == this.i3j_1 ? 0 : us(this.i3j_1)) | 0
            }
            ,
            Kx.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof Kx))
                    return !1;
                var n = t instanceof Kx ? t : Zr();
                return !!(_u(this.z3i_1, n.z3i_1) && _u(this.a3j_1, n.a3j_1) && _u(this.b3j_1, n.b3j_1) && _u(this.c3j_1, n.c3j_1) && _u(this.d3j_1, n.d3j_1) && _u(this.e3j_1, n.e3j_1) && _u(this.f3j_1, n.f3j_1) && _u(this.g3j_1, n.g3j_1) && _u(this.h3j_1, n.h3j_1) && this.i3j_1 == n.i3j_1)
            }
            ,
            sS.prototype.h9 = function(t, n) {
                return this.j3j_1(t, n)
            }
            ,
            sS.prototype.compare = function(t, n) {
                return this.h9(t, n)
            }
            ,
            DS.prototype.b5 = function() {
                return this.k3j_1
            }
            ,
            DS.prototype.c5 = function() {
                return this.l3j_1
            }
            ,
            DS.prototype.toString = function() {
                return "Texts(wordText=" + this.k3j_1 + ", definitionText=" + this.l3j_1 + ")"
            }
            ,
            DS.prototype.hashCode = function() {
                var t = Tu(this.k3j_1);
                return t = Kr(t, 31) + Tu(this.l3j_1) | 0
            }
            ,
            DS.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof DS))
                    return !1;
                var n = t instanceof DS ? t : Zr();
                return !!_u(this.k3j_1, n.k3j_1) && !!_u(this.l3j_1, n.l3j_1)
            }
            ,
            oz.prototype.h9 = function(t, n) {
                return this.n3j_1(t, n)
            }
            ,
            oz.prototype.compare = function(t, n) {
                return this.h9(t, n)
            }
            ,
            uz.prototype.h9 = function(t, n) {
                return this.o3j_1(t, n)
            }
            ,
            uz.prototype.compare = function(t, n) {
                return this.h9(t, n)
            }
            ,
            wz.prototype.p3j = function(t) {
                var n = this.k2t_1.d3(t);
                if (null == n)
                    throw Su(Lo("Missing term side equivalence map for card side: " + t));
                var i, e = n;
                if (e.h())
                    i = 0;
                else {
                    for (var r = 0, o = e.y().j(); o.l(); )
                        null != o.k().n2() && (r = r + 1 | 0);
                    i = r
                }
                return i
            }
            ,
            wz.prototype.e2x = function(t) {
                return this.p3j(t) > 1
            }
            ,
            wz.prototype.h30 = function(t, n) {
                var i = this.k2t_1.d3(n);
                if (null == i)
                    throw Su(Lo("Missing term side equivalence map for term side: " + n));
                var e, r = i.d3(wS(t, n));
                if (null == r)
                    throw e = "Missing term in list of terms equivalent to itself: " + Lo(t.o2v_1),
                    Su(Lo(e));
                return r
            }
            ,
            wz.prototype.q3j = function() {
                return !this.h2t_1.h()
            }
            ,
            wz.prototype.r3j = function() {
                return !this.h2t_1.h() && this.g2t_1.h()
            }
            ,
            wz.prototype.d2x = function(t) {
                var n = this.m2v(t);
                return null != n && !n.i26_1.h() && Z$(n, t.y2w_1.y2z(t.a2x_1).t2x())
            }
            ,
            wz.prototype.m2v = function(t) {
                var n, i = this.i2t_1.d3(pl());
                if (null == i)
                    n = null;
                else {
                    var e;
                    t: {
                        for (var r = i.j(); r.l(); ) {
                            var o = r.k();
                            if (o.f22().equals(PC(t.y2w_1)) && (o instanceof La ? o : Zr()).j26_1.equals(t.a2x_1)) {
                                e = o;
                                break t
                            }
                        }
                        e = null
                    }
                    n = e
                }
                return null == n || n instanceof La ? n : Zr()
            }
            ,
            wz.prototype.s3j = function() {
                for (var t = this.g2t_1, n = Ju(Xu(t, 10)), i = t.j(); i.l(); ) {
                    var e;
                    e = PC(i.k()),
                    n.a(e)
                }
                for (var r = $s(n), o = this.i2t_1.d3(pl()), u = null == o ? wo() : o, s = Ju(Xu(u, 10)), a = u.j(); a.l(); ) {
                    var l;
                    l = a.k().f22(),
                    s.a(l)
                }
                var h = $s(s);
                return !Wl(r, h).h()
            }
            ,
            wz.prototype.y2y = function(t) {
                var n, i = this.i2t_1.d3(Ul());
                if (null == i)
                    n = null;
                else {
                    var e;
                    t: {
                        for (var r = i.j(); r.l(); ) {
                            var o = r.k();
                            if (!(o instanceof Ba))
                                throw gu(Lo("Expected MLMCQDistractorStudiableMetadata, but got " + o));
                            if (o.f22().equals(PC(t.y2w_1)) && o.r26_1.equals(t.a2x_1)) {
                                e = o;
                                break t
                            }
                        }
                        e = null
                    }
                    n = e
                }
                return null == n || n instanceof Ba ? n : Zr()
            }
            ,
            wz.prototype.f2x = function() {
                for (var t = this.i2t_1.d3(Vl()), n = null == t ? wo() : t, i = Hu(), e = n.j(); e.l(); ) {
                    var r = e.k();
                    r instanceof Da && i.a(r)
                }
                return i
            }
            ,
            wz.prototype.l2u = function() {
                return this.g2t_1.f() + this.h2t_1.f() | 0
            }
            ,
            wz.prototype.t3j = function(t, n) {
                var i, e = this.i2t_1.d3(n.j2v_1);
                if (null == e)
                    i = null;
                else {
                    for (var r = Hu(), o = e.j(); o.l(); ) {
                        var u = o.k();
                        u.f22().equals(t) && r.a(u)
                    }
                    i = r
                }
                var s = i;
                return null == s ? wo() : s
            }
            ,
            wz.prototype.i2v = function(t, n) {
                var i;
                t: {
                    for (var e = this.t3j(t, n), r = Hu(), o = e.j(); o.l(); ) {
                        var u = o.k();
                        u instanceof Pa && r.a(u)
                    }
                    for (var s = r.j(); s.l(); ) {
                        var a = s.k();
                        if (mw(a, n)) {
                            i = a;
                            break t
                        }
                    }
                    i = null
                }
                return i
            }
            ,
            wz.prototype.u3j = function() {
                var t;
                t: {
                    var n = this.g2t_1;
                    if (Qu(n, vs) && n.h())
                        t = !1;
                    else {
                        for (var i = n.j(); i.l(); )
                            if (null != i.k().l2w_1) {
                                t = !0;
                                break t
                            }
                        t = !1
                    }
                }
                return t
            }
            ,
            wz.prototype.s2w = function(t) {
                return this.j2t_1.d3(t)
            }
            ,
            kz.prototype.h9 = function(t, n) {
                return this.v3j_1(t, n)
            }
            ,
            kz.prototype.compare = function(t, n) {
                return this.h9(t, n)
            }
            ,
            pT.prototype.m3k = function() {
                if ("math" === this.x3j_1 || "chem" === this.x3j_1)
                    return !1;
                var t = Kz(this)
                  , n = Vz().tj(t, 0);
                if (n.f() >= 5)
                    return !1;
                var i, e, r, o = Rs(dT(n, this));
                t: if (Qu(n, vs) && n.h())
                    i = !1;
                else {
                    for (var u = n.j(); u.l(); )
                        if (oT(this, u.k())) {
                            i = !0;
                            break t
                        }
                    i = !1
                }
                if (i)
                    return !0;
                t: {
                    var s = lT(o);
                    if (Qu(s, vs) && s.h())
                        r = !1;
                    else {
                        for (var a = s.j(); a.l(); ) {
                            var l = a.k();
                            if ("bc" === l || "ad" === l) {
                                r = !0;
                                break t
                            }
                        }
                        r = !1
                    }
                }
                if (r) {
                    var h;
                    t: if (Qu(n, vs) && n.h())
                        h = !1;
                    else {
                        for (var _ = n.j(); _.l(); )
                            if (sT(this, _.k())) {
                                h = !0;
                                break t
                            }
                        h = !1
                    }
                    e = h
                } else
                    e = !1;
                if (e)
                    return !0;
                if ("en" === this.x3j_1) {
                    var c, f;
                    t: {
                        var d = lT(o);
                        if (Qu(d, vs) && d.h())
                            f = !1;
                        else {
                            for (var p = d.j(); p.l(); ) {
                                var v = p.k();
                                if (Ez().t(v)) {
                                    f = !0;
                                    break t
                                }
                            }
                            f = !1
                        }
                    }
                    if (f) {
                        var y;
                        t: if (Qu(n, vs) && n.h())
                            y = !1;
                        else {
                            for (var w = n.j(); w.l(); )
                                if (aT(this, w.k())) {
                                    y = !0;
                                    break t
                                }
                            y = !1
                        }
                        c = y
                    } else
                        c = !1;
                    if (c)
                        return !0
                }
                return !1
            }
            ,
            pT.prototype.q3k = function() {
                if ("en" !== this.x3j_1)
                    return !1;
                var t, n = Kz(this);
                t = Hz().tj(n, 0);
                var i, e = Ls(t, 6);
                t: if (Qu(e, vs) && e.h())
                    i = !1;
                else {
                    for (var r = e.j(); r.l(); ) {
                        var o = r.k();
                        if ("ism" === Hl(o, 3)) {
                            i = !0;
                            break t
                        }
                    }
                    i = !1
                }
                return !!i || eT(Zz(this), this, Gz(), 0, 4, null)
            }
            ,
            pT.prototype.p3k = function() {
                return "en" === this.x3j_1 && !!nT(this.w3j_1, this) && eT(Zz(this), this, Tz(), 0, 4, null)
            }
            ,
            pT.prototype.h3k = function() {
                return "en" === this.x3j_1 && (!!nT(this.w3j_1, this) && (!!eT(Jz(this), this, Mz(), 0, 4, null) || eT(Jz(this), this, Tz(), 0, 4, null)))
            }
            ,
            pT.prototype.i3k = function() {
                return "en" === this.x3j_1 && !!nT(this.w3j_1, this) && eT(Zz(this), this, Iz(), 0, 4, null)
            }
            ,
            pT.prototype.e3k = function() {
                return "en" === this.x3j_1 && !!nT(this.w3j_1, this) && eT(Jz(this), this, Iz(), 0, 4, null)
            }
            ,
            pT.prototype.n3k = function() {
                return "en" === this.x3j_1 && eT(Zz(this), this, Az(), 0, 4, null)
            }
            ,
            pT.prototype.g3k = function() {
                return "en" === this.z3j_1 && eT(Jz(this), this, Az(), 0, 4, null)
            }
            ,
            pT.prototype.k3k = function() {
                return "en" === this.x3j_1 && eT(Zz(this), this, Oz(), 0, 4, null)
            }
            ,
            pT.prototype.j3k = function() {
                if ("en" !== this.x3j_1)
                    return !1;
                var t, n = Kz(this);
                t = Yz().tj(n, 0);
                var i, e = Ls(t, 10), r = th(1, e.f() - 2 | 0), o = r.d1_1, u = r.e1_1, s = e.w("vs");
                if (o <= s && s <= u)
                    i = !0;
                else {
                    var a = r.d1_1
                      , l = r.e1_1
                      , h = e.w("v");
                    i = a <= h && h <= l
                }
                return i
            }
            ,
            pT.prototype.o3k = function() {
                return "en" === this.x3j_1 && !!nT(this.w3j_1, this) && eT(Zz(this), this, Qz(), 0, 4, null)
            }
            ,
            pT.prototype.f3k = function() {
                return "en" === this.x3j_1 && !!nT(this.w3j_1, this) && iT(Jz(this), this, Qz(), 8)
            }
            ,
            pT.prototype.l3k = function() {
                var t, n = this.w3j_1;
                if (null != Xl(n)) {
                    var i = this.w3j_1
                      , e = eh(i);
                    t = !rh(e)
                } else
                    t = !1;
                return t
            }
            ,
            KT.prototype.f3l = function(t, n) {
                var i = sh(ia(0, t.f()), n)
                  , e = Ju(Xu(i, 10))
                  , r = i.d1_1
                  , o = i.e1_1
                  , u = i.f1_1;
                if (u > 0 && r <= o || u < 0 && o <= r)
                    do {
                        var s, a = r;
                        r = r + u | 0,
                        s = t.r(a, a + n | 0),
                        e.a(s)
                    } while (a !== o);
                return e
            }
            ,
            KT.prototype.g3l = function(t, n) {
                var i = t.oj(n, 0, 2, null)
                  , e = Zu(0)
                  , r = ls(hh(e, lh(ah(i, VT))), Zu(n.length))
                  , o = ia(0, r.f() - 1 | 0)
                  , u = Ju(Xu(o, 10))
                  , s = o.d1_1
                  , a = o.e1_1;
                if (s <= a)
                    do {
                        var l, h = s;
                        s = s + 1 | 0;
                        var _ = r.i(h)
                          , c = r.i(h + 1 | 0);
                        l = n.substring(_, c),
                        u.a(l)
                    } while (h !== a);
                return u
            }
            ,
            XT.prototype.j3l = function(t) {
                var n, i = ZT().g3l(this.h3l_1, t), e = i.f() % 2 | 0;
                if (1 != (e + (2 & ((2 ^ e) & (0 | e | -e)) >> 31) | 0))
                    return null;
                t: {
                    for (var r = _h(i, sh(ia(1, i.f()), 2)), o = Ju(Xu(r, 10)), u = r.j(); u.l(); ) {
                        var s, a = u.k();
                        s = this.h3l_1.pj(a),
                        o.a(s)
                    }
                    var l = o;
                    if (Qu(l, vs) && l.h())
                        n = !0;
                    else {
                        for (var h = l.j(); h.l(); )
                            if (null == h.k()) {
                                n = !1;
                                break t
                            }
                        n = !0
                    }
                }
                if (!n)
                    return null;
                for (var _ = i.i(0), c = Lo(sa(ua(_) ? _ : Zr())), f = ZT().f3l(ha(i, ia(1, i.f())), 2), d = Ju(Xu(f, 10)), p = f.j(); p.l(); ) {
                    var v, y = p.k(), w = y.i(0), b = Lo(sa(ua(w) ? w : Zr())), g = y.i(1);
                    v = sM(b, Lo(sa(ua(g) ? g : Zr())), !1, null, 12, null),
                    d.a(v)
                }
                var k = d;
                if (this.i3l_1) {
                    for (var $ = k, m = Hu(), j = $.j(); j.l(); ) {
                        var q = j.k();
                        dM(q.c3i_1).length > 0 && m.a(q)
                    }
                    k = m
                }
                return rM(c, k, null, null, !1, 28, null)
            }
            ,
            XT.prototype.k3l = function(t) {
                var n = t
                  , i = n
                  , e = ZT().x3k_1.uj(i, 0, 2, null);
                2 === e.f() && (n = e.i(1));
                var r = n
                  , o = ZT().a3l_1.uj(r, 0, 2, null);
                return 2 === o.f() && (n = o.i(0)),
                n
            }
            ,
            XT.prototype.l3l = function(t, n) {
                var i = dM(this.k3l(n));
                if (0 === i.length)
                    return !1;
                var e, r = ch(this.h3l_1.oj(n, 0, 2, null));
                if (1 === r.f() && r.i(0).kk().i(0) === t.b3i_1)
                    return !0;
                if (i === dM(t.b3i_1) || i === dM(t.c3i_1) || i === dM(t.b3i_1 + t.c3i_1) || ZT().c3l_1.uj(i, 0, 2, null).i(0) === dM(t.b3i_1) && !this.i3l_1)
                    e = !0;
                else {
                    var o = dM(t.c3i_1);
                    e = fh(i, o, !1, 2, null)
                }
                return !!e
            }
            ,
            XT.prototype.m3l = function(t, n) {
                var i = n
                  , e = null
                  , r = i
                  , o = ZT().x3k_1.uj(r, 0, 2, null);
                if (2 === o.f() && (i = o.i(1)),
                Gl(i, t.c3i_1, !1, 2, null)) {
                    var u = dh(i, t.c3i_1, 0, !1, 6, null)
                      , s = ph(i, ia(u + t.c3i_1.length | 0, i.length));
                    e = Lo(sa(ua(s) ? s : Zr()))
                }
                return null != e && e.length > 0 ? e : null
            }
            ,
            XT.prototype.n3l = function(t, n) {
                return this.l3l(t, n) ? t.o3l(null, null, !0, this.m3l(t, n), 3, null) : t
            }
            ,
            XT.prototype.p3l = function(t, n) {
                var i = this.k3l(n);
                if (dM(i),
                !(ch(this.h3l_1.oj(i, 0, 2, null)).f() > 1) || this.i3l_1) {
                    for (var e = t.u2w_1, r = Ju(Xu(e, 10)), o = e.j(); o.l(); ) {
                        var u, s = o.k();
                        u = this.n3l(s, n),
                        r.a(u)
                    }
                    var a = r;
                    return t.q3l(null, a, null, null, !1, 29, null)
                }
                var l, h = this.j3l("Pseudo prompt\n" + n), _ = null == h ? null : h.u2w_1;
                if (null == _)
                    l = null;
                else {
                    for (var c = Hu(), f = _.j(); f.l(); ) {
                        var d = f.k();
                        null != ZT().b3l_1.mj(d.c3i_1, 0, 2, null) && c.a(d)
                    }
                    l = c
                }
                var p = l;
                if (1 === (null == p ? null : p.f())) {
                    for (var v = dM(p.i(0).b3i_1), y = t.u2w_1, w = Ju(Xu(y, 10)), b = y.j(); b.l(); ) {
                        var g, k = b.k();
                        g = dM(k.b3i_1) === dM(v) ? k.o3l(null, null, !0, null, 11, null) : k,
                        w.a(g)
                    }
                    var $ = w;
                    return t.q3l(null, $, null, null, !1, 29, null)
                }
                return t
            }
            ,
            XT.prototype.r3l = function(t, n) {
                if (t.u2w_1.f() < 2 || t.u2w_1.f() > 6)
                    return !1;
                var i;
                t: {
                    var e = t.u2w_1;
                    if (Qu(e, vs) && e.h())
                        i = !1;
                    else {
                        for (var r = e.j(); r.l(); ) {
                            var o = r.k();
                            if (Gl(o.c3i_1, "___", !1, 2, null)) {
                                i = !0;
                                break t
                            }
                        }
                        i = !1
                    }
                }
                if (i)
                    return !1;
                for (var u = this.k3l(n), s = dM(u), a = t.u2w_1, l = Ju(Xu(a, 10)), h = a.j(); h.l(); ) {
                    var _;
                    _ = dM(h.k().c3i_1),
                    l.a(_)
                }
                var c, f, d = $s(l);
                t: {
                    var p = t.u2w_1;
                    if (Qu(p, vs) && p.h())
                        c = !1;
                    else {
                        for (var v = p.j(); v.l(); )
                            if (0 === v.k().c3i_1.length) {
                                c = !0;
                                break t
                            }
                        c = !1
                    }
                }
                if (c)
                    return !1;
                if (Qu(d, vs) && d.h())
                    f = 0;
                else {
                    for (var y = 0, w = d.j(); w.l(); ) {
                        var b = w.k();
                        Gl(s, b, !1, 2, null) && ys(y = y + 1 | 0)
                    }
                    f = y
                }
                if (f > 1) {
                    for (var g = ml(n, ["\n"], !1, 0, 6, null), k = Ju(Xu(g, 10)), $ = g.j(); $.l(); ) {
                        var m;
                        m = dM($.k()),
                        k.a(m)
                    }
                    for (var j = $s(k), q = ZT().g3l(this.h3l_1, n), C = Ju(Xu(q, 10)), x = q.j(); x.l(); ) {
                        var S;
                        S = dM(x.k()),
                        C.a(S)
                    }
                    var z, T = $s(C);
                    if (z = 1 !== Wl(j, d).f() && 1 !== Wl(T, d).f() && null == ZT().x3k_1.mj(n, 0, 2, null),
                    !!z && (1 !== vh(this.h3l_1.oj(u, 0, 2, null)) || this.i3l_1))
                        return !1
                }
                for (var M = t.u2w_1, I = Ju(Xu(M, 10)), A = M.j(); A.l(); ) {
                    var O;
                    O = dM(A.k().b3i_1),
                    I.a(O)
                }
                var E, R = I;
                if (this.i3l_1)
                    E = !1;
                else {
                    var Q = ZT().z3k_1;
                    E = Wl($s(Q.uj(u, 0, 2, null)), $s(R)).f() > 1
                }
                if (E)
                    return !1;
                if (this.i3l_1 && 1 === $s(R).f())
                    return !0;
                for (var G = ZT().e3l_1.j(); G.l(); ) {
                    var P, D = G.k(), L = D.f(), B = R.f();
                    if (P = Math.min(L, B),
                    _u(R, ha(D, ia(0, P))))
                        return !0
                }
                return !1
            }
            ,
            XT.prototype.s3l = function(t) {
                var n;
                t: {
                    var i = t.u2w_1;
                    if (Qu(i, vs) && i.h())
                        n = !1;
                    else {
                        for (var e = i.j(); e.l(); )
                            if (e.k().c3i_1.length < 2) {
                                n = !0;
                                break t
                            }
                        n = !1
                    }
                }
                if (n)
                    return t;
                for (var r = t, o = r.u2w_1, u = Ju(Xu(o, 10)), s = o.j(); s.l(); ) {
                    var a, l = s.k();
                    a = Po(l.c3i_1, 0),
                    u.a(new ca(a))
                }
                var h = u;
                if (1 === $s(h).f() && na([new ca(Ml(46)), new ca(Ml(41)), new ca(Ml(58))]).t(h.i(0))) {
                    for (var _ = r, c = r.u2w_1, f = Ju(Xu(c, 10)), d = c.j(); d.l(); ) {
                        var p, v = d.k(), y = v.b3i_1 + ph(v.c3i_1, ia(0, 1)), w = ph(v.c3i_1, ia(1, v.c3i_1.length)), b = Lo(sa(ua(w) ? w : Zr()));
                        p = v.o3l(y, b, !1, null, 12, null),
                        f.a(p)
                    }
                    var g = f;
                    r = _.q3l(null, g, null, null, !1, 29, null)
                }
                if (this.i3l_1 && r.u2w_1.f() > 0) {
                    for (var k = r.u2w_1, $ = Ju(Xu(k, 10)), m = k.j(); m.l(); ) {
                        var j, q = m.k();
                        j = ZT().y3k_1.mj(q.c3i_1, 0, 2, null),
                        $.a(j)
                    }
                    var C, x = $;
                    t: {
                        for (var S = x.s(x.f()); S.g2(); )
                            if (null != S.i2()) {
                                C = S.h2();
                                break t
                            }
                        C = -1
                    }
                    var z = C;
                    if (z >= 0 && z < (r.u2w_1.f() - 2 | 0)) {
                        for (var T = ha(r.u2w_1, ia(0, z + 1 | 0)), M = Ju(Xu(T, 10)), I = T.j(); I.l(); ) {
                            var A;
                            A = I.k().c3i_1,
                            M.a(A)
                        }
                        var O = Fs(M)
                          , E = _a(O, "\n", null, null, 0, null, null, 62, null)
                          , R = r
                          , Q = r.t2w_1 + "\n" + E
                          , G = ha(r.u2w_1, ia(z + 1 | 0, r.u2w_1.f()));
                        r = R.q3l(Q, G, null, null, !1, 28, null)
                    }
                }
                return r
            }
            ,
            XT.prototype.t3l = function(t) {
                for (var n = t.u2w_1, i = Ju(Xu(n, 10)), e = n.j(); e.l(); ) {
                    var r;
                    r = dM(e.k().c3i_1),
                    i.a(r)
                }
                for (var o = i, u = t.u2w_1, s = Ju(Xu(u, 10)), a = u.j(); a.l(); ) {
                    var l;
                    l = dM(a.k().b3i_1),
                    s.a(l)
                }
                for (var h = s, _ = o.j(); _.l(); ) {
                    var c = _.k()
                      , f = ZT().d3l_1
                      , d = $s(f.uj(c, 0, 2, null));
                    if (Wl(h, d).f() > 1)
                        return !0
                }
                return !1
            }
            ,
            XT.prototype.u3l = function(t, n) {
                var i = this.j3l(t);
                if (null != i) {
                    if (i = this.s3l(i),
                    !this.r3l(i, n))
                        return null;
                    var e, r = i.t2w_1;
                    if (0 === Go(r) || _u(new ca(yh(i.t2w_1)), new ca(Ml(40))))
                        return null;
                    var o = (i = this.p3l(i, n)).u2w_1;
                    if (Qu(o, vs) && o.h())
                        e = 0;
                    else {
                        for (var u = 0, s = o.j(); s.l(); )
                            s.k().d3i_1 && ys(u = u + 1 | 0);
                        e = u
                    }
                    return 1 !== e ? null : i = i.q3l(null, null, null, null, this.t3l(i), 15, null)
                }
                return null
            }
            ,
            XT.prototype.v3l = function(t, n) {
                var i, e = this.u3l(t, n);
                if (null == e)
                    i = null;
                else {
                    var r = ho()
                      , o = _o();
                    i = e.q3l(null, null, r, o, !1, 19, null)
                }
                var u, s = i;
                if (null == s) {
                    var a, l = this.u3l(n, t);
                    if (null == l)
                        a = null;
                    else {
                        var h = _o()
                          , _ = ho();
                        a = l.q3l(null, null, h, _, !1, 19, null)
                    }
                    u = a
                } else
                    u = s;
                return u
            }
            ,
            oM.prototype.w3l = function(t, n, i, e, r) {
                return new oM(t,n,i,e,r)
            }
            ,
            oM.prototype.q3l = function(t, n, i, e, r, o, u) {
                return 0 != (1 & o) && (t = this.t2w_1),
                0 != (2 & o) && (n = this.u2w_1),
                0 != (4 & o) && (i = this.v2w_1),
                0 != (8 & o) && (e = this.w2w_1),
                0 != (16 & o) && (r = this.x2w_1),
                this.w3l(t, n, i, e, r)
            }
            ,
            oM.prototype.toString = function() {
                return "MultipleChoiceQuestion(prompt=" + this.t2w_1 + ", options=" + this.u2w_1 + ", promptSide=" + this.v2w_1 + ", answerSide=" + this.w2w_1 + ", renderTags=" + this.x2w_1 + ")"
            }
            ,
            oM.prototype.hashCode = function() {
                var t = us(this.t2w_1);
                return t = Kr(t, 31) + Tu(this.u2w_1) | 0,
                t = Kr(t, 31) + (null == this.v2w_1 ? 0 : this.v2w_1.hashCode()) | 0,
                t = Kr(t, 31) + (null == this.w2w_1 ? 0 : this.w2w_1.hashCode()) | 0,
                t = Kr(t, 31) + (0 | this.x2w_1) | 0
            }
            ,
            oM.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof oM))
                    return !1;
                var n = t instanceof oM ? t : Zr();
                return this.t2w_1 === n.t2w_1 && !!_u(this.u2w_1, n.u2w_1) && !!_u(this.v2w_1, n.v2w_1) && !!_u(this.w2w_1, n.w2w_1) && this.x2w_1 === n.x2w_1
            }
            ,
            aM.prototype.x3l = function(t, n, i, e) {
                return new aM(t,n,i,e)
            }
            ,
            aM.prototype.o3l = function(t, n, i, e, r, o) {
                return 0 != (1 & r) && (t = this.b3i_1),
                0 != (2 & r) && (n = this.c3i_1),
                0 != (4 & r) && (i = this.d3i_1),
                0 != (8 & r) && (e = this.e3i_1),
                this.x3l(t, n, i, e)
            }
            ,
            aM.prototype.toString = function() {
                return "Option(tag=" + this.b3i_1 + ", text=" + this.c3i_1 + ", isCorrect=" + this.d3i_1 + ", explanation=" + this.e3i_1 + ")"
            }
            ,
            aM.prototype.hashCode = function() {
                var t = us(this.b3i_1);
                return t = Kr(t, 31) + us(this.c3i_1) | 0,
                t = Kr(t, 31) + (0 | this.d3i_1) | 0,
                t = Kr(t, 31) + (null == this.e3i_1 ? 0 : us(this.e3i_1)) | 0
            }
            ,
            aM.prototype.equals = function(t) {
                if (this === t)
                    return !0;
                if (!(t instanceof aM))
                    return !1;
                var n = t instanceof aM ? t : Zr();
                return this.b3i_1 === n.b3i_1 && this.c3i_1 === n.c3i_1 && this.d3i_1 === n.d3i_1 && this.e3i_1 == n.e3i_1
            }
            ,
            _M.prototype.k3m = function(t, n, i) {
                for (var e = Ju(Xu(i, 10)), r = i.j(); r.l(); ) {
                    var o, u = r.k();
                    o = !!(!!(t === u.z4_1 & n === u.a5_1) | !!(t === u.a5_1 & n === u.z4_1)),
                    e.a(o)
                }
                var s, a = e;
                t: if (Qu(a, vs) && a.h())
                    s = !1;
                else {
                    for (var l = a.j(); l.l(); )
                        if (l.k()) {
                            s = !0;
                            break t
                        }
                    s = !1
                }
                return s
            }
            ,
            _M.prototype.l3m = function(t, n) {
                return ch(this.g3m_1.oj(t, 0, 2, null)).f() >= n
            }
            ,
            _M.prototype.m3m = function(t, n, i, e) {
                return 0 != (2 & i) && (n = 4),
                this.l3m(t, n)
            }
            ,
            _M.prototype.n3m = function(t) {
                var n;
                return n = aa("_{3,}|\\.{3,}"),
                !ch(n.oj(t, 0, 2, null)).h()
            }
            ,
            _M.prototype.o3m = function(t, n) {
                if (this.n3m(t) || !this.m3m(t, 0, 2, null))
                    return null;
                for (var i = this.h3m_1.uj(n, 0, 2, null), e = Hu(), r = i.j(); r.l(); ) {
                    var o = r.k();
                    null != this.g3m_1.mj(o, 0, 2, null) && e.a(o)
                }
                for (var u = e, s = Ju(Xu(u, 10)), a = u.j(); a.l(); ) {
                    var l;
                    l = dM(a.k()),
                    s.a(l)
                }
                var h = s
                  , _ = dM(t)
                  , c = lo([new Rl(!0,this.y3l_1), new Rl(!1,this.z3l_1), new Rl(!0,this.a3m_1), new Rl(!1,this.b3m_1), new Rl(!0,this.c3m_1), new Rl(!1,this.d3m_1)]).j();
                t: for (; c.l(); ) {
                    var f = c.k()
                      , d = f.z4_1
                      , p = f.a5_1;
                    if (!h.h() && p === cs(h)) {
                        if (h.f() > 1 && this.k3m(h.i(0), h.i(1), lo([new Rl(this.y3l_1,this.z3l_1), new Rl(this.c3m_1,this.d3m_1), new Rl(this.a3m_1,this.b3m_1)])))
                            continue t;
                        if (p === this.y3l_1 || p === this.z3l_1) {
                            var v = sM("", "True", d, null, 8, null);
                            return rM(t, lo([v, sM("", "False", !d, null, 8, null)]), null, null, !1, 28, null)
                        }
                        if (p === this.a3m_1 || p === this.b3m_1) {
                            var y;
                            n: {
                                var w = this.e3m_1;
                                if (Qu(w, vs) && w.h())
                                    y = !1;
                                else {
                                    for (var b = w.j(); b.l(); ) {
                                        var g = b.k();
                                        if (Gl(_, g, !1, 2, null)) {
                                            y = !0;
                                            break n
                                        }
                                    }
                                    y = !1
                                }
                            }
                            var k, $ = !!y || this.l3m(_, 7);
                            n: {
                                var m = this.f3m_1;
                                if (Qu(m, vs) && m.h())
                                    k = !1;
                                else {
                                    for (var j = m.j(); j.l(); ) {
                                        var q = j.k();
                                        if (Gl(_, q, !1, 2, null)) {
                                            k = !0;
                                            break n
                                        }
                                    }
                                    k = !1
                                }
                            }
                            var C = !!($ & !k)
                              , x = 1 === h.f()
                              , S = n.toLowerCase();
                            if (C & !!(x | !ch(this.j3m_1.oj(S, 0, 2, null)).h())) {
                                var z = sM("", "True", d, null, 8, null);
                                return rM(t, lo([z, sM("", "False", !d, null, 8, null)]), null, null, !1, 28, null)
                            }
                        }
                        if (p === this.c3m_1 || p === this.d3m_1) {
                            var T;
                            n: {
                                var M = this.e3m_1;
                                if (Qu(M, vs) && M.h())
                                    T = !1;
                                else {
                                    for (var I = M.j(); I.l(); ) {
                                        var A = I.k();
                                        if (Gl(_, A, !1, 2, null)) {
                                            T = !0;
                                            break n
                                        }
                                    }
                                    T = !1
                                }
                            }
                            var O, E = !!T || this.l3m(_, 7);
                            n: {
                                var R = this.f3m_1;
                                if (Qu(R, vs) && R.h())
                                    O = !1;
                                else {
                                    for (var Q = R.j(); Q.l(); ) {
                                        var G = Q.k();
                                        if (Gl(_, G, !1, 2, null)) {
                                            O = !0;
                                            break n
                                        }
                                    }
                                    O = !1
                                }
                            }
                            var P = !!(E & !O)
                              , D = n.toLowerCase();
                            if (P & !!ch(this.i3m_1.oj(D, 0, 2, null)).h()) {
                                var L = sM("", "Yes", d, null, 8, null);
                                return rM(t, lo([L, sM("", "No", !d, null, 8, null)]), null, null, !1, 28, null)
                            }
                        }
                    }
                }
                return null
            }
            ,
            _M.prototype.v3l = function(t, n) {
                var i, e = this.o3m(t, n);
                if (null == e)
                    i = null;
                else {
                    var r = ho()
                      , o = _o();
                    i = e.q3l(null, null, r, o, !1, 19, null)
                }
                var u, s = i;
                if (null == s) {
                    var a, l = this.o3m(n, t);
                    if (null == l)
                        a = null;
                    else {
                        var h = _o()
                          , _ = ho();
                        a = l.q3l(null, null, _, h, !1, 19, null)
                    }
                    u = a
                } else
                    u = s;
                return u
            }
            ,
            ff.prototype.e1d = yu,
            $f.prototype.e1d = yu,
            zf.prototype.e1d = yu,
            Df.prototype.e1d = yu,
            Yf.prototype.e1d = yu,
            fy.prototype.e1d = yu,
            gy.prototype.e1d = yu,
            xy.prototype.e1d = yu,
            Ey.prototype.e1d = yu,
            By.prototype.e1d = yu,
            Yy.prototype.e1d = yu,
            iw.prototype.e1d = yu,
            lw.prototype.e1d = yu,
            ww.prototype.e1d = yu,
            Cw.prototype.e1d = yu,
            Aw.prototype.e1d = yu,
            Dw.prototype.e1d = yu,
            Vw.prototype.e1d = yu,
            Xw.prototype.e1d = yu,
            sb.prototype.e1d = yu,
            db.prototype.e1d = yu,
            jb.prototype.e1d = yu,
            Mb.prototype.e1d = yu,
            Gb.prototype.e1d = yu,
            Wb.prototype.e1d = yu,
            Xb.prototype.e1d = yu,
            og.prototype.e1d = yu,
            dg.prototype.e1d = yu,
            jg.prototype.e1d = yu,
            Mg.prototype.e1d = yu,
            Gg.prototype.e1d = yu,
            Hg.prototype.e1d = yu,
            nk.prototype.e1d = yu,
            hk.prototype.e1d = yu,
            bk.prototype.e1d = yu,
            xk.prototype.e1d = yu,
            Mk.prototype.t32 = Sh,
            Ok.prototype.e1d = yu,
            Gk.prototype.u32 = zh,
            Pk.prototype.u32 = zh,
            Nk.prototype.e1d = yu,
            V$.prototype.r3c = Th,
            H$.prototype.u3c = Mh,
            H$.prototype.w3c = Ih,
            H$.prototype.y3c = Ah,
            qm.prototype.e1d = yu,
            Wm.prototype.e1d = yu,
            tj.prototype.e1d = yu,
            jj.prototype.e1d = yu,
            Mj.prototype.e1d = yu,
            Gj.prototype.e1d = yu,
            Wj.prototype.e1d = yu,
            tq.prototype.e1d = yu,
            sq.prototype.e1d = yu,
            dq.prototype.e1d = yu,
            mq.prototype.e1d = yu,
            Kq.prototype.e1d = yu,
            oC.prototype.e1d = yu,
            dC.prototype.e1d = yu,
            kC.prototype.e1d = yu,
            TC.prototype.e1d = yu,
            VC.prototype.e1d = yu,
            ix.prototype.e1d = yu,
            lx.prototype.e1d = yu,
            $x.prototype.e1d = yu,
            Mx.prototype.e1d = yu,
            S = 7,
            z = 10,
            T = .2,
            M = 10,
            I = 30,
            A = 90,
            O = 60,
            Ri = -3.51706760045,
            Qi = 3.86991863068,
            Gi = 3.54103122648,
            Pi = .378245635733,
            Di = .396606246542,
            Li = .887589628199,
            Bi = .00643324313615,
            Ni = .294149151118,
            Fi = 1.39704082213,
            Wi = -.0544722896411,
            Ui = .193564029233,
            tr = 20,
            mM(t),
            t.$jsExportAll$ = mM,
            t.$_$ = t.$_$ || {},
            t.$_$.a = s_,
            t.$_$.b = T_,
            t.$_$.c = gc,
            t.$_$.d = Of,
            t.$_$.e = rd,
            t.$_$.f = Pd,
            t.$_$.g = tp,
            t.$_$.h = ip,
            t.$_$.i = Zd,
            t.$_$.j = Jd,
            t.$_$.k = Wv,
            t.$_$.l = Uv,
            t.$_$.m = gM,
            t.$_$.n = ty,
            t.$_$.o = kM,
            t.$_$.p = jy,
            t.$_$.q = Uy,
            t.$_$.r = Sg,
            t.$_$.s = fw,
            t.$_$.t = Jy,
            t.$_$.u = Eg,
            t.$_$.v = Eb,
            t.$_$.w = $w,
            t.$_$.x = kb,
            t.$_$.y = Qw,
            t.$_$.z = uw,
            t.$_$.a1 = wb,
            t.$_$.b1 = bg,
            t.$_$.c1 = Gk,
            t.$_$.d1 = Dk,
            t.$_$.e1 = Tw,
            t.$_$.f1 = Pk,
            t.$_$.g1 = Vk,
            t.$_$.h1 = Py,
            t.$_$.i1 = jk,
            t.$_$.j1 = Hk,
            t.$_$.k1 = Yk,
            t.$_$.l1 = R$,
            t.$_$.m1 = F$,
            t.$_$.n1 = L$,
            t.$_$.o1 = G$,
            t.$_$.p1 = H$,
            t.$_$.q1 = id,
            t.$_$.r1 = td,
            t.$_$.s1 = fx,
            t.$_$.t1 = bx,
            t.$_$.u1 = vx,
            t.$_$.v1 = Cx,
            t.$_$.w1 = ux,
            t.$_$.x1 = hj,
            t.$_$.y1 = lj,
            t.$_$.z1 = Dm,
            t.$_$.a2 = aj,
            t.$_$.b2 = dj,
            t.$_$.c2 = vj,
            t.$_$.d2 = yj,
            t.$_$.e2 = kj,
            t.$_$.f2 = gq,
            t.$_$.g2 = Wq,
            t.$_$.h2 = uj,
            t.$_$.i2 = _j,
            t.$_$.j2 = QC,
            t.$_$.k2 = GC,
            t.$_$.l2 = cm,
            t.$_$.m2 = wj,
            t.$_$.n2 = fm,
            t.$_$.o2 = PC,
            t.$_$.p2 = dm,
            t.$_$.q2 = pm,
            t.$_$.r2 = Om,
            t.$_$.s2 = NS,
            t.$_$.t2 = QS,
            t.$_$.u2 = qz,
            t.$_$.v2 = Bx,
            t.$_$.w2 = bz,
            t.$_$.x2 = hS,
            t.$_$.y2 = dS,
            t.$_$.z2 = wS,
            t.$_$.a3 = $S,
            t.$_$.b3 = qS,
            t.$_$.c3 = xS,
            t.$_$.d3 = TS,
            t.$_$.e3 = OS,
            t.$_$.f3 = GS,
            t.$_$.g3 = hz,
            t.$_$.h3 = WS,
            t.$_$.i3 = Nx,
            t.$_$.j3 = xz,
            t.$_$.k3 = _z,
            t.$_$.l3 = cz,
            t.$_$.m3 = ZS,
            t.$_$.n3 = FS,
            t.$_$.o3 = Vh,
            t.$_$.p3 = Yh,
            t.$_$.q3 = Hh,
            t.$_$.r3 = Uh,
            t.$_$.s3 = Rh,
            t.$_$.t3 = C_,
            t.$_$.u3 = $_,
            t.$_$.v3 = j_,
            t.$_$.w3 = m_,
            t.$_$.x3 = q_,
            t.$_$.y3 = S_,
            t.$_$.z3 = x_,
            t.$_$.a4 = k_,
            t.$_$.b4 = g_,
            t.$_$.c4 = L_,
            t.$_$.d4 = ic,
            t.$_$.e4 = dc,
            t.$_$.f4 = Oc,
            t.$_$.g4 = of,
            t.$_$.h4 = Fd,
            t.$_$.i4 = Nd,
            t.$_$.j4 = Bd,
            t.$_$.k4 = Dv,
            t.$_$.l4 = Bq,
            t.$_$.m4 = Nq,
            t.$_$.n4 = Dq,
            t.$_$.o4 = Fq,
            t.$_$.p4 = Lq,
            t.$_$.q4 = Op,
            t.$_$.r4 = ov,
            t.$_$.s4 = xh,
            t.$_$.t4 = sp,
            t.$_$.u4 = op,
            t.$_$.v4 = sk,
            t.$_$.w4 = vz,
            t.$_$.x4 = kg,
            t.$_$.y4 = pw,
            t.$_$.z4 = rb,
            t.$_$.a5 = vk,
            t.$_$.b5 = E$,
            t.$_$.c5 = D$,
            t.$_$.d5 = JC,
            t.$_$.e5 = Sx,
            t.$_$.f5 = Im,
            t.$_$.g5 = Rm,
            t.$_$.h5 = iC,
            t.$_$.i5 = _C,
            t.$_$.j5 = zq,
            t.$_$.k5 = RC,
            t.$_$.l5 = xC,
            t.$_$.m5 = D_,
            t.$_$.n5 = bc,
            t.$_$.o5 = tc,
            t.$_$.p5 = cc,
            t.$_$.q5 = Mc,
            t.$_$.r5 = ef,
            t.$_$.s5 = ud,
            t.$_$.t5 = hy,
            t.$_$.u5 = cy,
            t.$_$.v5 = by,
            t.$_$.w5 = Cy,
            t.$_$.x5 = Ub,
            t.$_$.y5 = Iw,
            t.$_$.z5 = Pw,
            t.$_$.a6 = Uw,
            t.$_$.b6 = fb,
            t.$_$.c6 = qw,
            t.$_$.d6 = lk,
            t.$_$.e6 = Fk,
            t.$_$.f6 = Bk,
            t.$_$.g6 = Ov,
            t.$_$.h6 = ax,
            t.$_$.i6 = nx,
            t.$_$.j6 = px,
            t.$_$.k6 = Tx,
            t.$_$.l6 = Fm,
            t.$_$.m6 = fq,
            t.$_$.n6 = $M,
            t.$_$.o6 = yM,
            t
        }
        ,
        void 0 === (o = "function" == typeof e ? e.apply(n, r) : e) || (t.exports = o)
    }
}]);

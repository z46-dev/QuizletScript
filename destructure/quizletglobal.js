(self.webpackChunk_quizlet_web_index = self.webpackChunk_quizlet_web_index || []).push([["quizlet_global"], {
    "./app/j/global/quizlet_global.entry.ts": (e, t, o) => {
        "use strict";
        var n = o("./node_modules/domready/ready.js")
            , s = o.n(n)
            , i = (o("./node_modules/console-polyfill/index.js"),
                o("./app/j/global/Quizlet.ts"))
            , a = o("./app/j/search_redesign/utils/logging.ts")
            , r = o("./app/j/config/enums.ts")
            , l = o("./app/j/tracking/AnalyticsTrackingHelper.ts")
            , c = o("./app/j/utils/Cookie.ts");
        var d = o("./app/j/utils/AppSessionLogger.ts")
            , u = o("./app/j/utils/log-event.ts")
            , _ = o("./app/j/utils/log-page-action.ts")
            , p = o("./app/j/utils/log-share-events.ts")
            , g = o("./app/j/utils/logSubscriptionEvent.ts")
            , m = o("./app/j/utils/navigationHandlers.ts")
            , E = o("./app/j/utils/obfuscate.ts")
            , S = o("./app/j/utils/Visitor.ts");
        window.Visitor = S.Z,
            window.Cookie = c.ZP,
            window.logPageAction = _.Z,
            window.obfuscate = E.Z,
            window.Quizlet.navigateOnClickHandler = m.u4,
            window.Quizlet.logSubscriptionEvent = g.ZP,
            window.logClickTextbookResult = a.FC,
            window.logClickExplanationQuestionResult = a.UH,
            window.logClickCourseResult = a.nx,
            window.logClickUserResult = a.vk,
            window.logClickClassResult = a.nq,
            window.logSearchInputLocation = a.SV,
            window.logEvent = u.Z;
        const f = ["click", "keyup"];
        (0,
            d.xq)(i.Z.extraSessionUUIDs, i.Z.actionString),
            s()((() => {
                !function () {
                    for (const e in f)
                        window.document.addEventListener(f[e], (() => {
                            (0,
                                d.wf)(f[e]),
                                (0,
                                    d.xQ)()
                        }
                        ), !0)
                }(),
                    function () {
                        const e = c.ZP.read(r.VjB.TRACKING__SERVER_TO_CLIENT_EVENTS);
                        e && (c.ZP.dispose(r.VjB.TRACKING__SERVER_TO_CLIENT_EVENTS),
                            e.split(";").forEach((e => {
                                const t = JSON.parse(atob(e));
                                t && "signup" === t.event && (0,
                                    l.I$)(t),
                                    t && "transaction" === t.event && (0,
                                        l.Jl)(t),
                                    t && "after-login" === t.event && (0,
                                        l.G7)()
                            }
                            )))
                    }(),
                    (0,
                        p.ZP)(window.location.href, p.jU)
            }
            ));
        var b = o("./node_modules/immer/dist/immer.cjs.production.min.js")
            , T = o("./app/j/utils/log-pageload-events.ts")
            , j = o("./app/j/utils/logPerfEvent.ts");
        o("./node_modules/core-js/modules/es.array.iterator.js"),
            o("./node_modules/core-js/modules/web.dom-collections.iterator.js"),
            o("./app/j/assembly/buttons/index.ts"),
            o("./app/j/assembly/buttons/types.ts"),
            o("./app/j/compatibility/logger/useLogger.ts"),
            o("./node_modules/react/index.js"),
            o("./node_modules/react/jsx-runtime.js");
        o("./.linaria-cache/app/j/banners/SiteBanner.linaria.css");
        o("./app/j/assembly/AssemblyIcon.tsx");
        o("./.linaria-cache/app/j/banners/SiteLocaleBanner.linaria.css");
        o("./.linaria-cache/app/j/footer/styles/SiteFooter.linaria.css"),
            window._assetBaseURL && (o.p = window._assetBaseURL);
        (0,
            b.enableAllPlugins)(),
            s()((() => {
                QLoad("dom")
            }
            )),
            (0,
                T.Ps)(j.Z)
    }
    ,
    "./app/j/search_redesign/utils/logging.ts": (e, t, o) => {
        "use strict";
        o.d(t, {
            $_: () => D,
            Bk: () => I,
            DO: () => V,
            FC: () => N,
            O$: () => v,
            PP: () => w,
            PX: () => M,
            Pk: () => x,
            SV: () => F,
            UH: () => O,
            W_: () => h,
            Xq: () => m,
            Xv: () => b,
            Yl: () => L,
            _2: () => R,
            bB: () => T,
            cU: () => E,
            fn: () => j,
            jX: () => f,
            kt: () => U,
            lW: () => B,
            nR: () => C,
            nq: () => H,
            nx: () => k,
            qE: () => S,
            rQ: () => y,
            uJ: () => g,
            vk: () => P,
            yF: () => A
        });
        var n = o("./node_modules/lodash/get.js")
            , s = o.n(n)
            , i = o("./node_modules/lodash/difference.js")
            , a = o.n(i)
            , r = o("./app/j/compatibility/logger/classComponentLoggers.ts")
            , l = o("./app/j/compatibility/logger/getLoggerConfig.ts")
            , c = o("./app/j/config/enums.ts")
            , d = o("./app/j/constants/SearchEventConstants.ts")
            , u = o("./app/j/global/Rollbar.ts")
            , _ = o("./app/j/utils/SearchEventLogger.ts")
            , p = o("./app/j/utils/VisibilityObserver.ts");
        let g;
        function m(e, t, o) {
            const n = ".SearchResultsPage-explanationsResult" === e;
            (0,
                p.n)([e], (e => {
                    const i = e.target.attributes
                        , r = Object.values(i).map((e => e.name))
                        , l = a()(["data-item-id", "data-model-type", "data-page-depth", "data-page-number", "data-relevance-score", "data-purchasable-type"], r);
                    if (l.length && n)
                        return void (Math.random() < .01 && u.Z.warning("Search result is missing the following attributes: [" + l + "]. Search Impression will not be logged."));
                    const d = {
                        modelId: Number(s()(i.getNamedItem("data-item-id"), "value")),
                        modelType: Number(s()(i.getNamedItem("data-model-type"), "value", c.BYJ.SET)),
                        pageDepth: Number(s()(i.getNamedItem("data-page-depth"), "value")),
                        pageNumber: Number(s()(i.getNamedItem("data-page-number"), "value")),
                        relevanceScore: Number(s()(i.getNamedItem("data-relevance-score"), "value")),
                        purchasableType: c.Uo4[s()(i.getNamedItem("data-purchasable-type"), "value", "FREE")]
                    }
                        , p = i.getNamedItem("data-other");
                    p && (d.other = p.value),
                        _.ZP.logSearchImpression(d, t, o)
                }
                ), 0, !0)
        }
        function E(e, t, o, n, s) {
            void 0 === o && (o = {}),
                void 0 === n && (n = {}),
                void 0 === s && (s = c.VjB.SEARCH__SESSION_LOGGING);
            const i = (0,
                _.zg)(s);
            i && (0,
                _.hl)(e, {
                    ...i,
                    ...o
                }, t, n)
        }
        function S(e, t, o, n, s) {
            void 0 === o && (o = {}),
                void 0 === n && (n = {}),
                void 0 === s && (s = c.VjB.SEARCH__SESSION_LOGGING);
            if ((0,
                _.zg)(s))
                E(e, t, o, n, s);
            else {
                const { loggers: s } = t;
                if (s && s.logEvent) {
                    const t = {
                        ...o,
                        action: e,
                        platform: "WEB"
                    };
                    s.logEvent(d.Z.tables.SEARCH_EVENTS, {
                        ...t,
                        search_session_id: 0,
                        version: 0
                    }, {
                        includeUserDetails: !0,
                        ...n
                    })
                }
            }
        }
        function f(e, t) {
            const o = (0,
                _.zg)()
                , { loggers: n, loggerConfig: s } = t;
            n && n.logPageAction ? n.logPageAction("search_redesign_tabs_data", {
                ...o,
                ...e
            }) : s && (0,
                r.Pv)(s, "search_redesign_tabs_data", {
                    ...o,
                    ...e
                })
        }
        function b(e, t, o) {
            E(e.toUpperCase(), o, t)
        }
        function T(e, t) {
            E("CLICK_SEARCH_TAB", t, {
                tab: e
            }, {
                sendSooner: !0
            })
        }
        function j(e, t, o) {
            void 0 !== o ? E("CLICK_TERM_STUDY_SET_PREVIEW", t, {
                target_object_id: e.id,
                target_object_type: c.Lcb.SET,
                source_model_id: o.id,
                source_model_type: c.Lcb.TERM,
                term_id: o.id,
                set_id: e.id
            }) : E("CLICK_STUDY_SET_PREVIEW", t, {
                target_object_id: e.id,
                target_object_type: c.Lcb.SET,
                source_model_id: e.id,
                source_model_type: c.Lcb.SET
            })
        }
        function v(e, t, o) {
            E("CLICK_CLOSE_TERM_STUDY_SET_PREVIEW", o, {
                term_id: e,
                set_id: t
            })
        }
        function h(e, t) {
            E("LOAD_MORE_STUDIABLE_ITEMS", t, {
                target_object_id: e.id,
                target_object_type: c.Lcb.SET
            })
        }
        function C(e, t) {
            E("SHOW_NO_RESULTS_RETURNED", t, {
                collection_type_str: e
            })
        }
        function I(e, t, o) {
            E(e, o, {
                ...t
            }, {
                sendSooner: !0
            })
        }
        function L(e, t) {
            E("HIT_MWEB_APPLY_FILTERS", t, {
                filters: e
            })
        }
        function y(e) {
            E("HIT_MWEB_CLEAR_ALL_FILTERS", e)
        }
        function R(e) {
            E("HIT_MWEB_CLICK_FILTER_BUTTON", e)
        }
        function w(e) {
            E("HIT_MWEB_CLICK_CLOSE_FILTER_MODAL_BUTTON", e)
        }
        function N(e, t, o) {
            void 0 === o && (o = {
                loggerConfig: (0,
                    l.c)()
            }),
                E("HIT_TEXTBOOK_RESULT", o, {
                    textbook_id: e,
                    textbook_isbn: t
                }, {
                    sendSooner: !0
                })
        }
        function O(e, t) {
            void 0 === t && (t = {
                loggerConfig: (0,
                    l.c)()
            }),
                E("HIT_EXPLANATION_QUESTION_RESULT", t, {
                    question_id: e
                }, {
                    sendSooner: !0
                })
        }
        function A(e, t) {
            void 0 === t && (t = {
                loggerConfig: (0,
                    l.c)()
            }),
                E("HIT_SET_RESULT", t, {
                    set_id: e
                }, {
                    sendSooner: !0
                })
        }
        function U(e, t, o) {
            void 0 === o && (o = {
                loggerConfig: (0,
                    l.c)()
            }),
                E("HIT_TERM_RESULT", o, {
                    term_id: e,
                    set_id: t
                }, {
                    sendSooner: !0
                })
        }
        function k(e, t, o) {
            void 0 === o && (o = {
                loggerConfig: (0,
                    l.c)()
            }),
                E("HIT_COURSE_RESULT", o, {
                    course_id: e,
                    school_id: t
                }, {
                    sendSooner: !0
                })
        }
        function P(e, t) {
            void 0 === t && (t = {
                loggerConfig: (0,
                    l.c)()
            }),
                E("HIT_USER_RESULT", t, {
                    clicked_user_id: e
                }, {
                    sendSooner: !0
                })
        }
        function H(e, t) {
            void 0 === t && (t = {
                loggerConfig: (0,
                    l.c)()
            }),
                E("HIT_CLASS_RESULT", t, {
                    class_id: e
                }, {
                    sendSooner: !0
                })
        }
        function B(e, t, o, n) {
            E("HIT_REVEAL_ALL_STEPS", n, {
                solution_id: e,
                target_object_id: t,
                target_object_type: o === c.BYJ.EXPLANATION_QUESTION ? c.Lcb.QUESTION : c.Lcb.TEXTBOOK
            })
        }
        function x(e, t, o) {
            E("HIT_CHAPTER", o, {
                chapter_id: e,
                textbook_isbn: t
            })
        }
        function V(e, t, o) {
            E("HIT_EXERCISE", o, {
                exercise_id: e,
                textbook_isbn: t
            })
        }
        function F(e, t, o) {
            void 0 === o && (o = c.VjB.SEARCH__SESSION_LOGGING),
                E("SEARCH_INPUT_SUBMIT_LOCATION", t, {
                    location: e
                }, {
                    sendSooner: !0
                }, o)
        }
        function M(e, t) {
            E("CLICK_VIEW_ALL_LINK", t, {
                collection_type_str: c._ly.ALL,
                module_type: e
            }, {
                sendSooner: !0
            })
        }
        function D(e, t) {
            E(e, t, {}, {
                sendSooner: !0
            })
        }
        !function (e) {
            e.GLOBAL_NAV = "global_nav",
                e.SEARCH_PAGE_HEADER = "search_page_header"
        }(g || (g = {}))
    }
    ,
    "./app/j/tracking/AnalyticsTrackingHelper.ts": (e, t, o) => {
        "use strict";
        o.d(t, {
            F6: () => l,
            G7: () => S,
            I$: () => c,
            Jl: () => d,
            Kx: () => r,
            Nh: () => g,
            Op: () => i,
            PM: () => p,
            WR: () => _,
            hY: () => f,
            jz: () => u,
            rY: () => E,
            xi: () => m
        });
        var n = o("./app/j/config/enums.ts")
            , s = (o("./app/j/global/Rollbar.ts"),
                o("./app/j/tracking/BrazeHelper.ts"));
        let i;
        !function (e) {
            e.PRODUCT = "product",
                e.PRODUCT_GROUP = "product_group"
        }(i || (i = {}));
        const a = e => {
            const t = window;
            t.dataLayer && t.dataLayer.push(e)
        }
            , r = () => {
                a({
                    event: "initiatecheckout"
                })
            }
            , l = (e, t, o, s, i) => {
                i === n.k9q.MONTHLY ? ((e, t, o) => {
                    a({
                        event: "MonthlyPurchase",
                        action: "Start",
                        value: Math.round(e),
                        valueFB: null == e ? void 0 : e.toFixed(2),
                        productType: o,
                        currency: (t || "").toUpperCase(),
                        nonInteraction: !0
                    })
                }
                )(e, t, o) : s ? ((e, t, o) => {
                    a({
                        event: "FreeTrial",
                        action: "Start",
                        value: Math.round(e),
                        valueFB: null == e ? void 0 : e.toFixed(2),
                        productType: o,
                        currency: (t || "").toUpperCase(),
                        nonInteraction: !0
                    })
                }
                )(e, t, o) : ((e, t, o) => {
                    const n = {
                        action: "Complete",
                        valueFB: null == e ? void 0 : e.toFixed(2),
                        value: Math.round(e),
                        productType: o,
                        currency: (t || "").toUpperCase(),
                        nonInteraction: !0
                    };
                    a({
                        ...n,
                        event: "AnnualPurchase"
                    }),
                        a({
                            ...n,
                            event: "AnnualPurchase " + o
                        })
                }
                )(e, t, o)
            }
            , c = e => {
                a(e)
            }
            , d = e => {
                a(e)
            }
            , u = e => {
                a({
                    event: "ViewContent",
                    ...e
                })
            }
            , _ = e => {
                a({
                    event: "ViewContent",
                    ...e
                })
            }
            , p = e => {
                a({
                    event: "study-set-create",
                    studySetSource: e
                })
            }
            , g = e => {
                a({
                    event: "study-set-publish",
                    studySetSource: e
                })
            }
            , m = e => {
                const t = {
                    event: "product-impressions",
                    ecommerce: {
                        currencyCode: e.currentCode,
                        impressions: e.impressions
                    }
                };
                a(t)
            }
            , E = e => {
                const t = {
                    event: "product-click",
                    ecommerce: {
                        currencyCode: e.currentCode,
                        click: {
                            actionField: {
                                list: "categories"
                            },
                            products: e.productClick[0]
                        }
                    }
                };
                a(t)
            }
            , S = () => {
                a({
                    event: "after-login"
                })
            }
            , f = () => {
                s.Is()
            }
    }
    ,
    "./app/j/utils/obfuscate.ts": (e, t, o) => {
        "use strict";
        function n(e, t) {
            let o = "";
            for (let n = 0, s = e.length; n < s; n++)
                o += "-" + (e.charCodeAt(n) + t % (n + 1));
            return o.substr(1)
        }
        o.d(t, {
            Z: () => n
        })
    }
    ,
    "./node_modules/console-polyfill/index.js": function () {
        !function (e) {
            "use strict";
            e.console || (e.console = {});
            for (var t, o, n = e.console, s = function () { }, i = ["memory"], a = "assert,clear,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn".split(","); t = i.pop();)
                n[t] || (n[t] = {});
            for (; o = a.pop();)
                n[o] || (n[o] = s)
        }("undefined" == typeof window ? this : window)
    },
    "./node_modules/lodash/_baseDifference.js": (e, t, o) => {
        var n = o("./node_modules/lodash/_SetCache.js")
            , s = o("./node_modules/lodash/_arrayIncludes.js")
            , i = o("./node_modules/lodash/_arrayIncludesWith.js")
            , a = o("./node_modules/lodash/_arrayMap.js")
            , r = o("./node_modules/lodash/_baseUnary.js")
            , l = o("./node_modules/lodash/_cacheHas.js");
        e.exports = function (e, t, o, c) {
            var d = -1
                , u = s
                , _ = !0
                , p = e.length
                , g = []
                , m = t.length;
            if (!p)
                return g;
            o && (t = a(t, r(o))),
                c ? (u = i,
                    _ = !1) : t.length >= 200 && (u = l,
                        _ = !1,
                        t = new n(t));
            e: for (; ++d < p;) {
                var E = e[d]
                    , S = null == o ? E : o(E);
                if (E = c || 0 !== E ? E : 0,
                    _ && S == S) {
                    for (var f = m; f--;)
                        if (t[f] === S)
                            continue e;
                    g.push(E)
                } else
                    u(t, S, c) || g.push(E)
            }
            return g
        }
    }
    ,
    "./node_modules/lodash/difference.js": (e, t, o) => {
        var n = o("./node_modules/lodash/_baseDifference.js")
            , s = o("./node_modules/lodash/_baseFlatten.js")
            , i = o("./node_modules/lodash/_baseRest.js")
            , a = o("./node_modules/lodash/isArrayLikeObject.js")
            , r = i((function (e, t) {
                return a(e) ? n(e, s(t, 1, a, !0)) : []
            }
            ));
        e.exports = r
    }
    ,
    "./.linaria-cache/app/j/banners/SiteBanner.linaria.css": (e, t, o) => {
        "use strict";
        o.r(t)
    }
    ,
    "./.linaria-cache/app/j/banners/SiteLocaleBanner.linaria.css": (e, t, o) => {
        "use strict";
        o.r(t)
    }
    ,
    "./.linaria-cache/app/j/footer/styles/SiteFooter.linaria.css": (e, t, o) => {
        "use strict";
        o.r(t)
    }
}, e => {
    e.O(0, ["react", "redux", "common"], (() => {
        return t = "./app/j/global/quizlet_global.entry.ts",
            e(e.s = t);
        var t
    }
    ));
    e.O()
}
]);

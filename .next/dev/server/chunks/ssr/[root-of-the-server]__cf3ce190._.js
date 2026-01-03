module.exports = [
"[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react/jsx-dev-runtime", () => require("react/jsx-dev-runtime"));

module.exports = mod;
}),
"[externals]/react [external] (react, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react", () => require("react"));

module.exports = mod;
}),
"[externals]/react/jsx-runtime [external] (react/jsx-runtime, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react/jsx-runtime", () => require("react/jsx-runtime"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/pages-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/pages-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/pages-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/pages-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/sites/Dgroup/src/styles/Header.module.css [ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "Header-module__9ZqozG__active",
  "hamburger": "Header-module__9ZqozG__hamburger",
  "hamburgerLines": "Header-module__9ZqozG__hamburgerLines",
  "header": "Header-module__9ZqozG__header",
  "logo": "Header-module__9ZqozG__logo",
  "nav": "Header-module__9ZqozG__nav",
  "navItem": "Header-module__9ZqozG__navItem",
  "navLink": "Header-module__9ZqozG__navLink",
  "navList": "Header-module__9ZqozG__navList",
  "navOpen": "Header-module__9ZqozG__navOpen",
  "scrolled": "Header-module__9ZqozG__scrolled",
  "scrolledLink": "Header-module__9ZqozG__scrolledLink",
});
}),
"[project]/sites/Dgroup/src/components/Header.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sites$2f$Dgroup$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sites/Dgroup/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sites$2f$Dgroup$2f$src$2f$styles$2f$Header$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/sites/Dgroup/src/styles/Header.module.css [ssr] (css module)");
"use client";
;
;
;
;
const Header = ()=>{
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const handleScroll = ()=>{
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return ()=>window.removeEventListener("scroll", handleScroll);
    }, []);
    const navItems = [
        {
            name: "About",
            href: "/about-us"
        },
        , 
    ];
    const toggleMenu = ()=>{
        setIsMenuOpen(!isMenuOpen);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("header", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$sites$2f$Dgroup$2f$src$2f$styles$2f$Header$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].header} ${isScrolled ? __TURBOPACK__imported__module__$5b$project$5d2f$sites$2f$Dgroup$2f$src$2f$styles$2f$Header$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].scrolled : ""}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "container flex items-center justify-between ",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sites$2f$Dgroup$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$sites$2f$Dgroup$2f$src$2f$styles$2f$Header$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].logo,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                        src: "/images/compny-logo.png",
                        alt: "Tables and a sofa"
                    }, void 0, false, {
                        fileName: "[project]/sites/Dgroup/src/components/Header.jsx",
                        lineNumber: 35,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/sites/Dgroup/src/components/Header.jsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$sites$2f$Dgroup$2f$src$2f$styles$2f$Header$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].hamburger} ${isMenuOpen ? __TURBOPACK__imported__module__$5b$project$5d2f$sites$2f$Dgroup$2f$src$2f$styles$2f$Header$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].active : ""}`,
                    onClick: toggleMenu,
                    "aria-label": "Toggle menu",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$sites$2f$Dgroup$2f$src$2f$styles$2f$Header$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].hamburgerLines
                        }, void 0, false, {
                            fileName: "[project]/sites/Dgroup/src/components/Header.jsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$sites$2f$Dgroup$2f$src$2f$styles$2f$Header$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].hamburgerLines
                        }, void 0, false, {
                            fileName: "[project]/sites/Dgroup/src/components/Header.jsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$sites$2f$Dgroup$2f$src$2f$styles$2f$Header$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].hamburgerLines
                        }, void 0, false, {
                            fileName: "[project]/sites/Dgroup/src/components/Header.jsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/sites/Dgroup/src/components/Header.jsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("nav", {
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$sites$2f$Dgroup$2f$src$2f$styles$2f$Header$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].nav} ${isMenuOpen ? __TURBOPACK__imported__module__$5b$project$5d2f$sites$2f$Dgroup$2f$src$2f$styles$2f$Header$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].navOpen : ""}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$sites$2f$Dgroup$2f$src$2f$styles$2f$Header$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].navList,
                        children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$sites$2f$Dgroup$2f$src$2f$styles$2f$Header$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].navItem,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sites$2f$Dgroup$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: item.href,
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$sites$2f$Dgroup$2f$src$2f$styles$2f$Header$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].navLink} ${isScrolled ? __TURBOPACK__imported__module__$5b$project$5d2f$sites$2f$Dgroup$2f$src$2f$styles$2f$Header$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].scrolledLink : ""}`,
                                    onClick: ()=>setIsMenuOpen(false),
                                    children: item.name
                                }, void 0, false, {
                                    fileName: "[project]/sites/Dgroup/src/components/Header.jsx",
                                    lineNumber: 54,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, item.name, false, {
                                fileName: "[project]/sites/Dgroup/src/components/Header.jsx",
                                lineNumber: 53,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/sites/Dgroup/src/components/Header.jsx",
                        lineNumber: 51,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/sites/Dgroup/src/components/Header.jsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/sites/Dgroup/src/components/Header.jsx",
            lineNumber: 32,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/sites/Dgroup/src/components/Header.jsx",
        lineNumber: 31,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Header;
}),
"[project]/sites/Dgroup/src/components/Layout.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Layout
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sites$2f$Dgroup$2f$src$2f$components$2f$Header$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sites/Dgroup/src/components/Header.jsx [ssr] (ecmascript)");
;
;
function Layout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sites$2f$Dgroup$2f$src$2f$components$2f$Header$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/sites/Dgroup/src/components/Layout.jsx",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true);
}
}),
"[project]/sites/Dgroup/src/pages/_app.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>App
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sites$2f$Dgroup$2f$src$2f$components$2f$Layout$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sites/Dgroup/src/components/Layout.jsx [ssr] (ecmascript)");
;
;
;
function App({ Component, pageProps }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sites$2f$Dgroup$2f$src$2f$components$2f$Layout$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Component, {
            ...pageProps
        }, void 0, false, {
            fileName: "[project]/sites/Dgroup/src/pages/_app.js",
            lineNumber: 7,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/sites/Dgroup/src/pages/_app.js",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__cf3ce190._.js.map
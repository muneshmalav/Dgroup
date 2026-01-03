module.exports = [
"[project]/sites/Dgroup/src/styles/HeroBanner.module.css [ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "HeroBanner": "HeroBanner-module__-dglqW__HeroBanner",
  "dark__overlay": "HeroBanner-module__-dglqW__dark__overlay",
  "whitegrid": "HeroBanner-module__-dglqW__whitegrid",
});
}),
"[project]/sites/Dgroup/src/components/HeroBanner.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroBanner
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sites$2f$Dgroup$2f$src$2f$styles$2f$HeroBanner$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/sites/Dgroup/src/styles/HeroBanner.module.css [ssr] (css module)");
;
;
function HeroBanner({ overlay, whitegrid, heroBannerData }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$sites$2f$Dgroup$2f$src$2f$styles$2f$HeroBanner$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].HeroBanner} ${overlay ? __TURBOPACK__imported__module__$5b$project$5d2f$sites$2f$Dgroup$2f$src$2f$styles$2f$HeroBanner$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].dark__overlay : ""} ${whitegrid ? __TURBOPACK__imported__module__$5b$project$5d2f$sites$2f$Dgroup$2f$src$2f$styles$2f$HeroBanner$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].whitegrid : ""} relative HeroBanner flex items-center h-screen ${heroBannerData?.styles ? heroBannerData?.styles : ""}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "absolute top-0 right-0 left-0 w-[100%] h-[100%] z-[1]",
                children: heroBannerData.video ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("video", {
                    autoPlay: true,
                    loop: true,
                    muted: true,
                    playsInline: true,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("source", {
                        src: heroBannerData.src,
                        type: "video/mp4"
                    }, void 0, false, {
                        fileName: "[project]/sites/Dgroup/src/components/HeroBanner.jsx",
                        lineNumber: 15,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/sites/Dgroup/src/components/HeroBanner.jsx",
                    lineNumber: 14,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                    className: "h-[100%] w-[100%]",
                    src: heroBannerData.src,
                    alt: heroBannerData.alt,
                    loading: "lazy"
                }, void 0, false, {
                    fileName: "[project]/sites/Dgroup/src/components/HeroBanner.jsx",
                    lineNumber: 18,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/sites/Dgroup/src/components/HeroBanner.jsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "container",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "z-[4] relative max-w-[1200px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h5", {
                            className: "text-white capitalize font-black mb-[20px]",
                            children: heroBannerData.heading
                        }, void 0, false, {
                            fileName: "[project]/sites/Dgroup/src/components/HeroBanner.jsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                            className: "text-white capitalize font-black",
                            children: heroBannerData.title
                        }, void 0, false, {
                            fileName: "[project]/sites/Dgroup/src/components/HeroBanner.jsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/sites/Dgroup/src/components/HeroBanner.jsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/sites/Dgroup/src/components/HeroBanner.jsx",
                lineNumber: 27,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/sites/Dgroup/src/components/HeroBanner.jsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
}),
"[project]/sites/Dgroup/src/pages/about-us/index.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AboutUs
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sites$2f$Dgroup$2f$src$2f$components$2f$HeroBanner$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sites/Dgroup/src/components/HeroBanner.jsx [ssr] (ecmascript)");
;
;
function AboutUs() {
    const overlay = true;
    const whitegrid = true;
    const heroBannerData = {
        heading: "Hello! I'm Ajay — Your Web Experience Developer",
        title: "About Us",
        src: "/images/allmix.mp4",
        alt: "Working Paper",
        video: true
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "body",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sites$2f$Dgroup$2f$src$2f$components$2f$HeroBanner$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                whitegrid: whitegrid,
                overlay: overlay,
                heroBannerData: heroBannerData
            }, void 0, false, {
                fileName: "[project]/sites/Dgroup/src/pages/about-us/index.jsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Footer, {}, void 0, false, {
                fileName: "[project]/sites/Dgroup/src/pages/about-us/index.jsx",
                lineNumber: 16,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/sites/Dgroup/src/pages/about-us/index.jsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__5ff54904._.js.map
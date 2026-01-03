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
"[project]/sites/Dgroup/src/styles/Countdown.module.css [ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "bgImg": "Countdown-module__kXCIOG__bgImg",
  "countdown": "Countdown-module__kXCIOG__countdown",
  "countdownWrapper": "Countdown-module__kXCIOG__countdownWrapper",
  "imacVideo": "Countdown-module__kXCIOG__imacVideo",
  "intro": "Countdown-module__kXCIOG__intro",
  "newYearText": "Countdown-module__kXCIOG__newYearText",
  "pop": "Countdown-module__kXCIOG__pop",
});
}),
"[project]/sites/Dgroup/src/components/Countdown.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Countdown
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sites$2f$Dgroup$2f$src$2f$styles$2f$Countdown$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/sites/Dgroup/src/styles/Countdown.module.css [ssr] (css module)");
;
;
;
function Countdown() {
    const [timeLeft, setTimeLeft] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])({});
    const [isNewYear, setIsNewYear] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    // ⭐ Yahan target date change kar sakte ho easily
    const targetDate = new Date("December 31, 2025 23:59:59").getTime();
    // Example: Dusre saal ke liye → new Date("December 31, 2026 23:59:59").getTime();
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const calculateTimeLeft = ()=>{
            const now = new Date().getTime();
            const difference = targetDate - now;
            if (difference <= 0) {
                setIsNewYear(true);
                setTimeLeft({});
                return;
            }
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor(difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
            const minutes = Math.floor(difference % (1000 * 60 * 60) / (1000 * 60));
            const seconds = Math.floor(difference % (1000 * 60) / 1000);
            setTimeLeft({
                days,
                hours,
                minutes,
                seconds
            });
            setIsNewYear(false);
        };
        // Pehli baar immediately calculate karo
        calculateTimeLeft();
        // Har second update karo
        const timer = setInterval(calculateTimeLeft, 1000);
        // Cleanup on unmount
        return ()=>clearInterval(timer);
    }, [
        targetDate
    ]); // targetDate change hone par dobara effect chalega
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
        className: `countdown ${__TURBOPACK__imported__module__$5b$project$5d2f$sites$2f$Dgroup$2f$src$2f$styles$2f$Countdown$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].countdown}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: `bgImg ${__TURBOPACK__imported__module__$5b$project$5d2f$sites$2f$Dgroup$2f$src$2f$styles$2f$Countdown$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].bgImg}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("video", {
                    className: `imacVideo ${__TURBOPACK__imported__module__$5b$project$5d2f$sites$2f$Dgroup$2f$src$2f$styles$2f$Countdown$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].imacVideo}`,
                    autoPlay: true,
                    loop: true,
                    muted: true,
                    playsInline: true,
                    poster: "/images/new2026.mp4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("source", {
                        src: "/images/new2026.mp4",
                        type: "video/mp4"
                    }, void 0, false, {
                        fileName: "[project]/sites/Dgroup/src/components/Countdown.jsx",
                        lineNumber: 53,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/sites/Dgroup/src/components/Countdown.jsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/sites/Dgroup/src/components/Countdown.jsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: `intro max-w-[1000px] m-auto ${__TURBOPACK__imported__module__$5b$project$5d2f$sites$2f$Dgroup$2f$src$2f$styles$2f$Countdown$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].intro}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                            children: "⏳ Countdown to Midnight Welcome 2026 ✨"
                        }, void 0, false, {
                            fileName: "[project]/sites/Dgroup/src/components/Countdown.jsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/sites/Dgroup/src/components/Countdown.jsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: `countdownWrapper sm:max-w-auto sm:m-auto flex-wrap ${__TURBOPACK__imported__module__$5b$project$5d2f$sites$2f$Dgroup$2f$src$2f$styles$2f$Countdown$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].countdownWrapper}`,
                        id: "countdownWrapper",
                        children: isNewYear ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$sites$2f$Dgroup$2f$src$2f$styles$2f$Countdown$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].newYearText,
                            children: "🎉 Happy New Year 2026! 🎉"
                        }, void 0, false, {
                            fileName: "[project]/sites/Dgroup/src/components/Countdown.jsx",
                            lineNumber: 65,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    children: [
                                        timeLeft.days !== undefined ? timeLeft.days : "--",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            children: "Days"
                                        }, void 0, false, {
                                            fileName: "[project]/sites/Dgroup/src/components/Countdown.jsx",
                                            lineNumber: 70,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/sites/Dgroup/src/components/Countdown.jsx",
                                    lineNumber: 68,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    children: [
                                        timeLeft.hours !== undefined ? String(timeLeft.hours).padStart(2, "0") : "--",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            children: "Hours"
                                        }, void 0, false, {
                                            fileName: "[project]/sites/Dgroup/src/components/Countdown.jsx",
                                            lineNumber: 74,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/sites/Dgroup/src/components/Countdown.jsx",
                                    lineNumber: 72,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    children: [
                                        timeLeft.minutes !== undefined ? String(timeLeft.minutes).padStart(2, "0") : "--",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            children: "Minutes"
                                        }, void 0, false, {
                                            fileName: "[project]/sites/Dgroup/src/components/Countdown.jsx",
                                            lineNumber: 78,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/sites/Dgroup/src/components/Countdown.jsx",
                                    lineNumber: 76,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    children: [
                                        timeLeft.seconds !== undefined ? String(timeLeft.seconds).padStart(2, "0") : "--",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            children: "Seconds"
                                        }, void 0, false, {
                                            fileName: "[project]/sites/Dgroup/src/components/Countdown.jsx",
                                            lineNumber: 82,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/sites/Dgroup/src/components/Countdown.jsx",
                                    lineNumber: 80,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/sites/Dgroup/src/components/Countdown.jsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/sites/Dgroup/src/components/Countdown.jsx",
                lineNumber: 57,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/sites/Dgroup/src/components/Countdown.jsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
}),
"[project]/sites/Dgroup/src/pages/portfolio/index.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>portfolio
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sites$2f$Dgroup$2f$src$2f$components$2f$HeroBanner$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sites/Dgroup/src/components/HeroBanner.jsx [ssr] (ecmascript)");
// import Footer from "@/components/Footer";
var __TURBOPACK__imported__module__$5b$project$5d2f$sites$2f$Dgroup$2f$src$2f$components$2f$Countdown$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sites/Dgroup/src/components/Countdown.jsx [ssr] (ecmascript)");
;
;
;
function portfolio() {
    const whitegrid = false;
    const overlay = false;
    const heroBannerData = {
        heading: "",
        title: "🎉 Happy New Year 2026 🎉 A Fresh Start Begins Today ✨",
        styles: "!h-full",
        src: "/images/new2026sky.mp4",
        alt: "Nature",
        video: true
    };
    const heroBannerDatas = {
        heading: "",
        title: "",
        styles: "h-full",
        src: "/images/amazingfireworks.mp4",
        alt: "Nature",
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
                fileName: "[project]/sites/Dgroup/src/pages/portfolio/index.jsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sites$2f$Dgroup$2f$src$2f$components$2f$Countdown$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/sites/Dgroup/src/pages/portfolio/index.jsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sites$2f$Dgroup$2f$src$2f$components$2f$HeroBanner$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                whitegrid: whitegrid,
                overlay: overlay,
                heroBannerData: heroBannerDatas
            }, void 0, false, {
                fileName: "[project]/sites/Dgroup/src/pages/portfolio/index.jsx",
                lineNumber: 28,
                columnNumber: 8
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/sites/Dgroup/src/pages/portfolio/index.jsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__9cca3e4c._.js.map
/*! For license information please see 11.d37dd56d.iframe.bundle.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"./node_modules/@ionic/core/components/md.transition.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"mdTransitionAnimation",(function(){return mdTransitionAnimation}));var _animation_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@ionic/core/components/animation.js"),_index4_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@ionic/core/components/index4.js");const mdTransitionAnimation=(_,opts)=>{var _a,_b,_c;const backDirection="back"===opts.direction,enteringEl=opts.enteringEl,leavingEl=opts.leavingEl,ionPageElement=Object(_index4_js__WEBPACK_IMPORTED_MODULE_1__.e)(enteringEl),enteringToolbarEle=ionPageElement.querySelector("ion-toolbar"),rootTransition=Object(_animation_js__WEBPACK_IMPORTED_MODULE_0__.a)();if(rootTransition.addElement(ionPageElement).fill("both").beforeRemoveClass("ion-page-invisible"),backDirection?rootTransition.duration((null!==(_a=opts.duration)&&void 0!==_a?_a:0)||200).easing("cubic-bezier(0.47,0,0.745,0.715)"):rootTransition.duration((null!==(_b=opts.duration)&&void 0!==_b?_b:0)||280).easing("cubic-bezier(0.36,0.66,0.04,1)").fromTo("transform","translateY(40px)","translateY(0px)").fromTo("opacity",.01,1),enteringToolbarEle){const enteringToolBar=Object(_animation_js__WEBPACK_IMPORTED_MODULE_0__.a)();enteringToolBar.addElement(enteringToolbarEle),rootTransition.addAnimation(enteringToolBar)}if(leavingEl&&backDirection){rootTransition.duration((null!==(_c=opts.duration)&&void 0!==_c?_c:0)||200).easing("cubic-bezier(0.47,0,0.745,0.715)");const leavingPage=Object(_animation_js__WEBPACK_IMPORTED_MODULE_0__.a)();leavingPage.addElement(Object(_index4_js__WEBPACK_IMPORTED_MODULE_1__.e)(leavingEl)).onFinish((currentStep=>{1===currentStep&&leavingPage.elements.length>0&&leavingPage.elements[0].style.setProperty("display","none")})).fromTo("transform","translateY(0px)","translateY(40px)").fromTo("opacity",1,0),rootTransition.addAnimation(leavingPage)}return rootTransition}}}]);
//# sourceMappingURL=11.d37dd56d.iframe.bundle.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about-us/about-us.component.css":
/*!*************************************************!*\
  !*** ./src/app/about-us/about-us.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contant{\n  font-family: Roboto;\n    font-size: 16px;\n    font-weight: 400;\n}\n\n.head{\n  font-family: Roboto;\n  font-size: 33px;\n  font-weight: 400;\n  line-height: 1.18;\n  color: #212529;\n}\n\n.bg_img1 {\n  background: url('newChkBg.png')no-repeat center center;\n  background-size: cover;\n  width:100%;\n  height: 100vh;\n}\n\n.bg_img{\n  background: url('bulding_img.png')no-repeat center center;\n  background-size: cover;\n  width:100%;\n  height: 100vh;\n}\n\n.head{\n  font-family: GeezaPro;\nfont-size: 60px;\ncolor: #ffffff;\n\n}\n\n.font-center{\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 100%;\n  text-align: center;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n\n/* only for iphone 5s */\n\n/* @media only screen and (max-width: 320px) {\n\n} */\n\n@media screen and (min-device-width: 320px) and (max-device-width: 760px){\n  .head{\n    font-family: GeezaPro;\n    font-size: 50px;\n    color: #ffffff;\n    \n    }\n\n    .font-center{\n      position: absolute;\n      top: 60%;\n      left: 50%;\n      width: 100%;\n      text-align: center;\n      -webkit-transform: translate(-50%, -50%);\n              transform: translate(-50%, -50%);\n    }\n}\n"

/***/ }),

/***/ "./src/app/about-us/about-us.component.html":
/*!**************************************************!*\
  !*** ./src/app/about-us/about-us.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-bg-ar [head]=\"head\" [bg]=\"bg\" [nav_arabic]=\"nav_arabic\"></app-nav-bg-ar>\n\n\n\n\n<div>\n  <div class=\"container-fluid\">\n    <br>\n    <div class=\"card\">\n      <div class=\"row my-3 ml-2 mr-2 mr-sm-0 mr-md-0\">\n       \n        <div class=\"col-md-6 text-justify\">\n          <div>\n            <p class=\"contant\">Sharjah Asset Management Holding (SAMH), the investment arm of the government of Sharjah, and Apleona\n              HSG\n              Facility Management, a German leading company in FM and Technical Services have founded a joint venture\n              in\n              2016 to provide various technical related services to all types of properties within the public and\n              private\n              sectors in the Emirate of Sharjah.</p>\n\n            <p class=\"contant\">\n              The scope of the JV includes Integrated Facility Management, Small and Medium construction project\n              management, HSE related scopes such as Fire Prevention strategies, HSE inspection and Training, Security\n              Systems integration, landscaping, etc.\n            </p>\n\n            <h3 class=\"head\">Vision</h3>\n          \n\n           <p class=\"contant\">To be among the best facility management service providers in the Middle East, influencing the over all\n              FM\n              industry in high quality and modern practices.</p>\n\n               <h3 class=\"head\">Mission</h3>\n\n            <p class=\"m-0 contant\">Utilizing the latest worldwide technologies and the best human resources to achieve\n              sustainable business\n              and\n              an enviable reputation in the local and regional markets.</p> \n          </div>\n        </div>\n\n        <div class=\"col-md-6\">\n          <div class=\"mt-2 mt-md-0 d-md-flex align-items-md-center h-100 justify-content-md-end text-center\">\n            <img src=\"/assets/group-4.png\" style=\"width: 80%; height:auto;\" />\n          </div>\n        </div>\n      </div>\n    </div>\n    <br>\n  </div>\n</div>\n\n\n<app-loginv2></app-loginv2>"

/***/ }),

/***/ "./src/app/about-us/about-us.component.ts":
/*!************************************************!*\
  !*** ./src/app/about-us/about-us.component.ts ***!
  \************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ng2_simple_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-simple-global */ "./node_modules/ng2-simple-global/index.js");
/* harmony import */ var ng2_simple_global__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_simple_global__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent(translate, apiService, router, sg) {
        this.translate = translate;
        this.apiService = apiService;
        this.router = router;
        this.sg = sg;
        this.navbarOpen = false;
        this.head = "About Us";
        this.bg = "bg_img1";
        this.nav_arabic = "/aboutus-arabic";
        this.Lang = {};
        this.model = {};
        this.data = {};
    }
    //  props : Props ={
    //   head:"aboutus-arabic"
    // }
    AboutUsComponent.prototype.toggleNavbar = function () {
        this.navbarOpen = !this.navbarOpen;
    };
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    AboutUsComponent.prototype.switchLanguage = function (language) {
        this.translate.use(language);
    };
    AboutUsComponent.prototype.newsletter = function (model) {
        var _this = this;
        this.apiService.newsletter(model).subscribe(function (response) {
            _this.data = response;
            console.log(_this.data);
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()(_this.data.Message + "<br>" + "اشتركت بنجاح في النشرة الإخبارية");
        });
    };
    ;
    AboutUsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-us',
            template: __webpack_require__(/*! ./about-us.component.html */ "./src/app/about-us/about-us.component.html"),
            styles: [__webpack_require__(/*! ./about-us.component.css */ "./src/app/about-us/about-us.component.css")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ng2_simple_global__WEBPACK_IMPORTED_MODULE_5__["SimpleGlobal"]])
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "./src/app/aboutus-arabic/aboutus-arabic.component.css":
/*!*************************************************************!*\
  !*** ./src/app/aboutus-arabic/aboutus-arabic.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* ==============footer style start ========= */\n.container1 {\n  background: black;\n  color: white\n}\n.footer {\n  /* position: fixed; */\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background-color: black;\n  color: white;\n  text-align: center;\n  /* height: 75px; */\n}\n.container {\n  background: black;\n  color: white\n}\n.social:hover {\n  -webkit-transform: scale(1.1);\n  -moz-transform: scale(1.1);\n  -o-transform: scale(1.1);\n}\n.social {\n  -webkit-transform: scale(0.8);\n  /* Browser Variations: */\n\n  -moz-transform: scale(0.8);\n  -o-transform: scale(0.8);\n  -webkit-transition-duration: 0.5s;\n  -moz-transition-duration: 0.5s;\n  -o-transition-duration: 0.5s;\n}\n.fa {\n  padding: 20px;\n  font-size: 30px;\n  width: 30px;\n  text-align: center;\n  text-decoration: none;\n  border-radius: 50%;\n}\n.img-thumbnail {\n  background: black;\n  border-color: black\n}\n.home {\n  font-family: Roboto-Bold;\n  font-size: 16px;\n  line-height: 14px;\n  letter-spacing: 0;\n}\n.about {\n  font-family: Roboto;\n  font-size: 13px;\n  line-height: 15px;\n  letter-spacing: 0;\n}\n/* ===========================footer style end================ */\nnav {\n  width: 100%;\n  height: 50px;\n  background: rgba(0, 0, 0, .8);\n  border-top: 1px solid rgba(255, 255);\n  border-bottom: 1px solid rgba(255, 255);\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0px;\n  z-index: 99;\n}\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: sans-serif;\n  /* background: #000; */\n}\nheader {\n  padding: 10px 100px;\n  box-sizing: border-box;\n}\nsection {\n  width: 100%;\n  height: 100vh;\n}\n.dropdown {\n  float: left;\n  overflow: hidden;\n}\n.dropdown .dropbtn {\n  font-size: 16px;\n  border: none;\n  outline: none;\n  color: white;\n  padding: 14px 16px;\n  background-color: inherit;\n  font-family: Roboto;\n  margin: 0;\n}\n.navbar a:hover,\n.dropdown:hover .dropbtn {\n  /* background-color: red; */\n}\n.dropdown-content {\n  display: block;\n  position: absolute;\n  background-color: red;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n}\n.dropdown-content a {\n  float: none;\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n  text-align: left;\n}\n.dropdown-content a:hover {\n  background-color: #ddd;\n}\nul {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\nul li a {\n  text-decoration: none;\n  color: #e74c3c;\n  font-family: Roboto;\n  /* font-size: 18px; */\n}\n.navigation {\n  background-color: #35353500;\n  /* width: 75%; */\n  margin: 20px auto;\n  min-height: 50px;\n}\n.navigation>li {\n  float: left;\n  padding: 4 10px;\n}\n.navigation>li>a {\n  line-height: 50px;\n  color: #FFF;\n}\n.navigation .menu {\n  position: relative\n}\n.navigation .menu .submenu {\n  position: absolute;\n  /* width: 200px; */\n  box-shadow: 0px 1px 1px #CCC;\n  display: none;\n  transition: all .5s ease-in-out;\n}\n.navigation .menu:hover .submenu {\n  display: block\n}\n.navigation .menu .submenu:before {\n  content: \"\";\n  position: absolute;\n  display: block;\n  border-width: 0 6px 6px 6px;\n  border-style: solid;\n  border-color: #FFF transparent;\n  top: -6px;\n  left: 5px\n}\n.navigation .menu .submenu li {\n  padding: 5px 10px;\n  transition: all .5s ease-in-out;\n}\n.navigation .menu .submenu li:hover {\n  background-color: #e74c3c;\n}\n.navigation .menu .submenu li:hover a {\n  color: #FFF;\n  /* padding: 0 11px; */\n}\n.dropdown:hover .dropdown-content {\n  display: block;\n}\nnav {\n  width: 100%;\n  height: 50px;\n  background: rgba(0, 0, 0, .8);\n  border-top: 1px solid rgba(255, 255);\n  border-bottom: 1px solid rgba(255, 255);\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0px;\n  z-index: 99\n}\nnav ul {\n  display: flex;\n  margin: 0px;\n  padding: 0px;\n  float: right;\n}\nnav ul li {\n  list-style: none;\n}\nnav ul {\n  display: flex;\n\n  padding: 0px;\n  /* float: ; */\n}\nnav ul li a {\n  display: block;\n  color: #fff;\n  padding: 0 35px;\n  text-decoration: none;\n  text-transform: uppercase;\n  font-weight: bold;\n  line-height: 50px;\n\n}\n.intro-2 {\n    background: url(\"/assets/aboutus.png\")no-repeat center center;\n    background-size: cover;\n    height: 635px;\n }\n.aboutus {\n    background: url(\"/assets/group-4.png\")no-repeat center center;\n    /* background-size: cover; */\n    height: 330px;\n    border-radius: 18px;\n  \n    \n }\n.Sharjah-Asset-Manage {\n  /* width: 535px; */\n  /* height: 283px; */\n  font-family: GeezaPro;\n  font-size: 16px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #333\n\n}\n.spacer {\n  height: 100px;\n}\n.Who-We-Are-Aman-is-a {\n    width: 733px;\n    height: 459px;\n    font-family: GeezaPro;\n    font-size: 18px;\n    text-align: justify;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: var(--black);\n  }\n.Who-We-Are-Aman-is-a .text-style-1 {\n    font-size: 24px;\n  }\n/* ===align= start=========== */\n.about-us{\n    width: 280px;\n    height: 100px;\n    font-family: GeezaPro;\n    font-size: 60px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #ffffff;\n  }\n/* ============Navbar start======= */\n.homeservice{\n    width: 220px;\n    height: 52px;\n    font-family: GeezaPro;\n    font-size: 18px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #ffffff;\n  }\n.about-us1{\n    \n      width: 143px;\n      height: 52px;\n      font-family: GeezaPro;\n      font-size: 18px;\n      font-weight: normal;\n      font-style: normal;\n      font-stretch: normal;\n      line-height: normal;\n      letter-spacing: normal;\n      color: #ffffff;\n      margin-right: -39px;\n    \n  }\n.services{\n    width: 70px;\n    height: 49px;\n    font-family: GeezaPro;\n    font-size: 18px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #ffffff;\n  }\n.supplier{\n    width: 100px;\n    height: 25px;\n    font-family: GeezaPro;\n    font-size: 18px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #ffffff;\n  }\n.contactus{\n  width: 224px;\n  height: 76px;\n  font-family: GeezaPro;\n  font-size: 18px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #ffffff;\n  margin-right: -137px\n}\n.Rectangle-2 {\n  height: 35px;\n    width: 100px;\n  border-radius: 5px;\n  background-color: #ff0000;\n}\n/* ========== navabar end=========== */\n.content{\n  /* width: 535px; */\n  /* height: 127px; */\n  font-family: GeezaPro;\n  font-size: 18px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: right;\n  color: var(--black);\n}\n.vision{\n  /* width: 535px; */\n  /* height: 26px; */\n  font-family: GeezaPro;\n  font-size: 18px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: right;\n  /* color: var(--black); */\n}\n.vision-content{\n  /* width: 519px; */\n  /* height: 61px; */\n  font-family: GeezaPro;\n  font-size: 18px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: right;\n  /* color: var(--black); */\n}\n.mission {\n  /* width: 56px; */\n  height: 40px;\n  font-family: GeezaPro;\n  font-size: 18px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 2.22;\n  letter-spacing: normal;\n  text-align: right;\n  color: var(--black);\n}\n.mission-content{\n  /* width: 561px; */\n  height: 130px;\n  font-family: GeezaPro;\n  font-size: 18px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: right;\n  color: var(--black);\n}\n.Rectangle-5-Copy {\n  width: 292px;\n  height: 59px;\n  border-radius: 8px;\n  background-color: #f34235;\n}\n/* =footer start== */\n.footer1{\n  width: 90px;\n  height: 190px;\n  font-family: GeezaPro;\n  font-size: 12px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.67;\n  letter-spacing: normal;\n  color: #ffffff;\n}\n.navfooter{\n  width: 63px;\n  height: 9px;\n  font-family: GeezaPro;\n  font-size: 12px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.67;\n  letter-spacing: normal;\n  color: #ffffff;\n  margin-right: 25px;\n}\n.footer2{\n  width: 281px;\n  height: 164px;\n  font-family: GeezaPro;\n  font-size: 12px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 2.25;\n  letter-spacing: normal;\n  color: #ffffff;\n}\n.subscribe{\n  width: 144px;\n  height: 29px;\n  font-family: GeezaPro;\n  font-size: 12px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #ffffff;\n}\n.lastfoot{\n  width: 1209px;\n  height: 30px;\n  font-family: GeezaPro;\n  font-size: 12px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #9b9b9b;\n}\n/* =foter end== */\n/* ===Mobile navbar start=========== */\n@media screen and (min-width: 320px) and (max-width: 767px){\n  .nav-bg {\n    background-color: rgba(0, 0, 0, 0.65) !important;\n  }\n\n\n\n  \n  .pt-120{\n    position: relative !important;\n    left: 306px !important;\n\n  }\n  .mt-414{\n    margin-top: 3px !important;\n  }\n\n  .mr-5, .mx-5 {\n    margin-right: 4rem!important;\n}\n\n.pad_12{\n  padding: 0 12px;\n}\n\n}\n@media screen and (max-width: 768px){\n  .nav-bg {\n    /* background-color: rgba(0, 0, 0, 0.65) !important; */\n  }\n\n  .navbar-expand-md .navbar-nav .nav-link {\n    padding-right: .0rem !important;\n    padding-left: .0rem !important;\n}\n\n  .pt-120{\n    position: relative !important;\n    left: 232px \n\n  }\n  .mt-414{\n    margin-top: 3px !important;\n  }\n\n  .mr-5, .mx-5 {\n    margin-right: 5rem!important;\n}\n\n\n\n\nli[_ngcontent-c1] {\n  float: left;\n  padding: 0 12px !important;\n}\n\n\n}\n@media screen and (max-width: 1024px){\n  .nav-bg {\n    /* background-color: rgba(0, 0, 0, 0.65) !important; */\n  }\n\n\n\n  .pt-120{\n    position: relative !important;\n    left: 302px \n\n  }\n  .mt-414{\n    margin-top: 3px !important;\n  }\n\n  .mr-5, .mx-5 {\n    margin-right: 6rem!important;\n}\n\n\n\n\nli[_ngcontent-c1] {\n  float: left;\n  padding: 0 12px !important;\n}\n\n\n}\n/* =========Mobile navbar End========== */\n/* ======= align end======= */\n/* ===========HEADING STYLE=========== */\n.saned_para{\n  font-size:16px;\n  color: #333; \n  font-family: GeezaPro;\n}\n.saned_heading{\n  font-size: 37px;\n  font-family: GeezaPro;\n  color: #212529 !important;\n\n}\n/* ==============HEADING STYLE========== */"

/***/ }),

/***/ "./src/app/aboutus-arabic/aboutus-arabic.component.html":
/*!**************************************************************!*\
  !*** ./src/app/aboutus-arabic/aboutus-arabic.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <button (click)=\"switchLanguage('arabic')\">Arabic</button>\n<button (click)=\"switchLanguage('en')\">English</button> -->\n\n<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js\"></script>\n<script src=\"//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n<link href=\"https://fonts.googleapis.com/css?family=Roboto\" rel=\"stylesheet\">\n<style>\n  @import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');\n\n  section.sec1 {\n    background: url(natures-temples.png);\n    background-size: cover;\n  }\n\n  section.banner {\n    background: url(Group.png);\n    background-size: cover;\n    margin-left: 15px;\n  }\n\n  section.sec2 {\n    padding: 100px;\n    box-sizing: border-box;\n  }\n</style>\n\n\n<app-nav-bg [head]=\"head\" [bg]=\"bg\" [nav_arabic]=\"nav_arabic\"></app-nav-bg>\n\n\n<div class=\"container-fluid\" dir=\"rtl\">\n  <!-- <h3 class=\"col-sm-12 Welcome-to-Aman-port\"><b>“Caring for the nation by helping protect lives and property from fire and life safety events is our primary goal.“</b></h3> -->\n\n  <div class=\"card my-4 container-fluid col-md-12\" style=\"border-radius: 18px;\n    background: white;\" dir=\"rtl\">\n    <br>\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <!-- <h4><b>Who We Are</b></h4> -->\n        <br>\n        <div class=\"saned_para text-justify\">\n          <p dir=\"rtl\" class=\"\">\n            قامت شركة الشارقة لإدارة الأصول ، الذراع الاستثماري لحكومة الشارقة، وشركة أبليونا اتش اس جي لإدارة المرافق ،\n            وهي شركة ألمانية رائدة في إدارة المرافق والخدمات الفنية، بتأسيس مشروع مشترك في عام 2016 لتقديم خدمات فنية\n            متنوعة لجميع أنواع الأصول ضمن القطاعين العام والخاص في إمارة الشارقة.\n          </p>\n          <!-- <h4><b>What We Do</b></h4> -->\n\n          <p class=\"saned_para\">\n            يشمل نطاق المشروع المشترك إدارة المرافق المتكاملة، وإدارة مشروعات البناء الصغيرة والمتوسطة، والنواحي\n            المتعلقة بالصحة والسلامة والبيئة مثل استراتيجيات الوقاية من الحرائق والتدريب على أساسيات السلامة، وتوفير\n            رجال الأمن المدربين، وما إلى ذلك.\n          </p>\n\n          <a class=\"saned_heading\">\n            رؤية\n          </a>\n          <!-- <h3 class=\"saned_heading\">رؤية</h3> -->\n          <p class=\"saned_para\">\n\n            أن نكون من بين أفضل مقدمي خدمات إدارة المرافق في الشرق الأوسط ، حيث نؤثر على جميع صناعات ال FM في الجودة\n            العالية والممارسات الحديثة.\n\n          </p>\n\n\n          <a class=\"saned_heading\">\n            مهمة\n          </a>\n\n          <p class=\"saned_para\">\n            الاستفادة من أحدث التقنيات العالمية وأفضل الموارد البشرية لتحقيق أعمال مستدامة وسمعة تحسد عليها في\n            الأسواق المحلية والإقليمية.\n\n          </p>\n        </div>\n      </div>\n      <div class=\"col-md-1\"></div>\n\n\n\n      <div class=\"col-md-5\">\n        <img src=\"/assets/group-4.png\" style=\"width:100%; height: auto;\" />\n      </div>\n\n    </div>\n\n  </div>\n</div>\n\n<app-footer></app-footer>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/aboutus-arabic/aboutus-arabic.component.ts":
/*!************************************************************!*\
  !*** ./src/app/aboutus-arabic/aboutus-arabic.component.ts ***!
  \************************************************************/
/*! exports provided: AboutusArabicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutusArabicComponent", function() { return AboutusArabicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ng2_simple_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-simple-global */ "./node_modules/ng2-simple-global/index.js");
/* harmony import */ var ng2_simple_global__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_simple_global__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AboutusArabicComponent = /** @class */ (function () {
    function AboutusArabicComponent(apiService, router, sg) {
        this.apiService = apiService;
        this.router = router;
        this.sg = sg;
        this.navbarOpen = false;
        this.head = "معلومات عنا";
        this.bg = "bg_img1";
        this.nav_arabic = "/about-us";
        this.model = {};
        this.data = {};
        this.Lang = {};
    }
    AboutusArabicComponent.prototype.toggleNavbar = function () {
        this.navbarOpen = !this.navbarOpen;
    };
    AboutusArabicComponent.prototype.ngOnInit = function () {
    };
    AboutusArabicComponent.prototype.newsletter = function (model) {
        var _this = this;
        this.apiService.newsletter(model).subscribe(function (response) {
            _this.data = response;
            console.log(_this.data);
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()(_this.data.Message + "<br>" + "اشتركت بنجاح في النشرة الإخبارية");
        });
    };
    ;
    AboutusArabicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-aboutus-arabic',
            template: __webpack_require__(/*! ./aboutus-arabic.component.html */ "./src/app/aboutus-arabic/aboutus-arabic.component.html"),
            styles: [__webpack_require__(/*! ./aboutus-arabic.component.css */ "./src/app/aboutus-arabic/aboutus-arabic.component.css")]
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["APIService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ng2_simple_global__WEBPACK_IMPORTED_MODULE_4__["SimpleGlobal"]])
    ], AboutusArabicComponent);
    return AboutusArabicComponent;
}());



/***/ }),

/***/ "./src/app/amanservices-arabic/amanservices-arabic.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/amanservices-arabic/amanservices-arabic.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".setWidth{\n  width: 80%;\n}\n\n  .setButton {\n    width: 292px;\n    height: 59px;\n    border-radius: 8px;\n    background-color: #f34235;\n    }\n\n  .para{\n      font-size:16px;\n      color: #333; \n      font-family: GeezaPro;\n    }\n\n  .head{\n      font-size: 29px;\n      font-family: GeezaPro;\n    \n    }\n\n  .Rectangle-5-Copy {\n      width: 290px !important;\n      height: 59px !important;\n      border-radius: 8px !important;\n      background-color: #f34235 !important;\n      color: #fbfbfb !important;\n    }\n\n  @media screen and (min-width: 320px) and (max-width: 767px){\n  .setWidth{\n    width: 100%;\n  }\n\n  .setButton {\n    width: 150px;\n    height: 50px;\n    border-radius: 8px;\n    background-color: #f34235;\n    }\n}"

/***/ }),

/***/ "./src/app/amanservices-arabic/amanservices-arabic.component.html":
/*!************************************************************************!*\
  !*** ./src/app/amanservices-arabic/amanservices-arabic.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-bg [head]=\"head\" [bg]=\"bg\" [nav_arabic]=\"nav_arabic\"></app-nav-bg>\n\n<div>\n    <div class=\"container-fluid\" dir=\"rtl\">\n        <div class=\"card my-4\">\n            <div class=\"row my-4 mx-2\">\n\n                <div class=\"col-md-1 text-left \">\n                    <img src=\"/assets/noun-connection-657013.png\" srcset=\"/assets/noun-connection-657013@2x.png 2x,\n                        /assets/noun-connection-657013@3x.png 3x\" class=\"img-fluid mx-3 mx-sm-0 mx-md-0\">\n                </div>\n                <div class=\"col-md-5 text-justify \">\n                    <div class=\"setWidth\">\n                        <h2 class=\"head\">نبذة عن أمان</h2>\n\n                        <p class=\"para\">لضمان الاستجابة السريعة لحالات الطوارئ الناجمة عن الحرائق ، أطلقت هيئة الوقاية\n                            والسلامى بالشراكة مع شركة ساند مشروع \"أمان\". ويهدف أمان لحماية الأرواح والممتلكات من خلال\n                            إنشاء اتصال آمن وموثوق بين جميع أنظمة مكافحة الحرائق في جميع الأصول في الشارقة مع محطة\n                            المراقبة المركزية التي يتم مراقبتها باستمرار لتحديد حالات الطوارئ والاستجابة لها على الفور\n                            عن طريق الدفاع المدني.</p>\n                    </div>\n                </div>\n\n\n\n                <div class=\"col-md-1 text-left pr-4\">\n                    <img src=\"/assets/2.png\" srcset=\"/assets/2@2x.png 2x,\n                        /assets/2@3x.png 3x\" class=\"img-fluid mx-3 mx-sm-0 mx-md-0\">\n                </div>\n                <div class=\"col-md-5 text-justify\">\n                    <div class=\"setWidth\">\n                        <h2 class=\"head\">الأهداف المرجوة من أمان</h2>\n                        <p class=\"para\">من أهم الأهداف المرجوه من أمان تعزيز جودة الحياة في إمارة الشارقة من خلال تطبيق\n                            أعلى\n                            المعايير\n                            المعترف بها دوليًا لضمان حماية وسلامة الأفراد والممتلكات وتقليل فترة الإستجابة للحرائق\n                            والتقليل\n                            من\n                            الإعتماد على العامل البشري.</p>\n                    </div>\n                </div>\n\n\n\n\n                <div class=\"col-md-1 text-left pr-4\">\n                    <img src=\"./assets/3.png\" srcset=\"./assets/3@2x.png 2x,\n                        ./assets/3@3x.png 3x\" class=\"img-fluid mx-3 mx-sm-0 mx-md-0\">\n                </div>\n                <div class=\"col-md-5 text-justify\">\n                    <div class=\"setWidth\">\n                        <h2 class=\"head\">المعلومات التقنية عن أمان</h2>\n                        <p class=\"para\">أمان هو نظام الاتصالات يعمل على مدار الساعة بلا توقف وهو قادر على الآتي:</p>\n\n                        <ul class=\"para\">\n                            <li>الربط مع جميع أنظمة الحرائق المتوافرة في المنشآت.</li>\n                            <li>يمكن تثبيته في العديد من الأنظمة في مختلف تطبيقات المنشأت.</li>\n                            <li>يمكن استخدامها بسهولة وصيانتها في ظروف مختلفة.</li>\n                            <li>يمكن دمجها مع غرف التحكم المركزية لمحطة المراقبة من خلال النظام الموحد للاتصالات\n                                المتنقلة والشبكة الهاتفية العمومية.</li>\n                            <li>التوسع المستقبلي لتشمل تطبيقا المصاعد وغيرها.</li>\n\n                        </ul>\n\n                        <p class=\"para\">يسهّل تطبيق أمان الإلكتروني التابع لهيئة الوقاية والسلامة على ملاك ومدراء\n                            المباني التسجيل في\n                            النظام وطلب الحصول على الخدمات </p>\n\n                        <p class=\"para\">يمكن التواصل مع الجهات المعنية عن طريق الاتصال التابع لنا على مدار اليوم طوال\n                            أيام الأسبوع\n                            والإجابة عن أي استفسارات على الرقم التالي: 600515152</p>\n\n                        <p>الموقع الإلكتروني و تطبيق الجوال قيد التنفيذ وسيتم إنجازها قريبا.</p>\n                    </div>\n                </div>\n\n\n\n\n                <div class=\"col-md-1 text-left pr-4\">\n                    <img src=\"/assets/4.png\" srcset=\"/assets/4@2x.png 2x, /assets/4@3x.png 3x\"\n                        class=\"img-fluid mx-3 mx-sm-0 mx-md-0\">\n                </div>\n                <div class=\"col-md-5 text-justify\">\n                    <div class=\"setWidth\">\n                        <h2 class=\"head\">الرسوم</h2>\n                        <p class=\"para\">تشمل الرسوم الثابتة لملاك المباني ما يلي: </p>\n\n                        <ul class=\"para\">\n                            <li>قييمان للمباني مع تقارير مخصصة يقدمها فنيو أمان.</li>\n                            <li>جهاز الاتصال مع صندوق يركب على الحائط للحماية.</li>\n                            <li>تركيب جهاز الاتصال.</li>\n                            <li>بطاقة SIM ورسوم خدمة لمدة سنة واحدة من تاريخ التركيب.</li>\n                            <li>إغلاق التقرير بعد التثبيت الناجح.</li>\n                            <li>عامين من الصيانة على الجهاز.</li>\n                            <li>تسجيل مجاني ودخول غير محدود إلى التطبيق والبرامج المتعلقة بالنظام.</li>\n                        </ul>\n                    </div>\n                </div>\n\n\n\n            </div>\n\n            <div class=\"my-3 text-center\">\n                <a href=\"http://eservices.spsa.ae/register_ar\" target=\"_blank\">\n                    <button type=\"submit\" class=\"Rectangle-5-Copy\" routerLink=\"register-form-arabic\">سجل هنا</button>\n                </a>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<app-footer></app-footer>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/amanservices-arabic/amanservices-arabic.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/amanservices-arabic/amanservices-arabic.component.ts ***!
  \**********************************************************************/
/*! exports provided: AmanservicesArabicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmanservicesArabicComponent", function() { return AmanservicesArabicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ng2_simple_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-simple-global */ "./node_modules/ng2-simple-global/index.js");
/* harmony import */ var ng2_simple_global__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_simple_global__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AmanservicesArabicComponent = /** @class */ (function () {
    function AmanservicesArabicComponent(apiService, router, sg) {
        this.apiService = apiService;
        this.router = router;
        this.sg = sg;
        this.navbarOpen = false;
        this.head = "أمـــــان";
        this.bg = "bg_img";
        this.nav_arabic = "/amanservices";
        this.model = {};
        this.data = {};
        this.Lang = {};
    }
    AmanservicesArabicComponent.prototype.toggleNavbar = function () {
        this.navbarOpen = !this.navbarOpen;
    };
    AmanservicesArabicComponent.prototype.ngOnInit = function () {
    };
    AmanservicesArabicComponent.prototype.newsletter = function (model) {
        var _this = this;
        this.apiService.newsletter(model).subscribe(function (response) {
            _this.data = response;
            console.log(_this.data);
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()(_this.data.Message + "<br>" + "اشتركت بنجاح في النشرة الإخبارية");
        });
    };
    ;
    AmanservicesArabicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-amanservices-arabic',
            template: __webpack_require__(/*! ./amanservices-arabic.component.html */ "./src/app/amanservices-arabic/amanservices-arabic.component.html"),
            styles: [__webpack_require__(/*! ./amanservices-arabic.component.css */ "./src/app/amanservices-arabic/amanservices-arabic.component.css")]
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["APIService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ng2_simple_global__WEBPACK_IMPORTED_MODULE_4__["SimpleGlobal"]])
    ], AmanservicesArabicComponent);
    return AmanservicesArabicComponent;
}());



/***/ }),

/***/ "./src/app/amanservices/amanservices.component.css":
/*!*********************************************************!*\
  !*** ./src/app/amanservices/amanservices.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');\n\n.intro-2 {\n  background: url(\"/assets/hero_image.png\")no-repeat center center;\n  background-size: cover;\n  height: 635px;\n}\n\n/* ==============footer style start ========= */\n\n.container1 {\n  background: black;\n  color: white\n}\n\n.footer {\n  /* position: fixed; */\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background-color: black;\n  color: white;\n  text-align: center;\n  /* height: 75px; */\n}\n\n.container {\n  background: black;\n  color: white\n}\n\n.social:hover {\n  -webkit-transform: scale(1.1);\n  -moz-transform: scale(1.1);\n  -o-transform: scale(1.1);\n}\n\n.social {\n  -webkit-transform: scale(0.8);\n  /* Browser Variations: */\n\n  -moz-transform: scale(0.8);\n  -o-transform: scale(0.8);\n  -webkit-transition-duration: 0.5s;\n  -moz-transition-duration: 0.5s;\n  -o-transition-duration: 0.5s;\n}\n\n.fa {\n  padding: 20px;\n  font-size: 30px;\n  width: 30px;\n  text-align: center;\n  text-decoration: none;\n  border-radius: 50%;\n}\n\n.img-thumbnail {\n  background: black;\n  border-color: black\n}\n\n.home {\n  font-family: Roboto-Bold;\n  font-size: 16px;\n  line-height: 14px;\n  letter-spacing: 0;\n}\n\n.about {\n  font-family: Roboto;\n  font-size: 13px;\n  line-height: 15px;\n  letter-spacing: 0;\n}\n\n/* ===========================footer style end================ */\n\nnav {\n  width: 100%;\n  height: 50px;\n  background: rgba(0, 0, 0, .8);\n  border-top: 1px solid rgba(255, 255);\n  border-bottom: 1px solid rgba(255, 255);\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0px;\n  z-index: 99;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: sans-serif;\n  /* background: #000; */\n}\n\nheader {\n  padding: 10px 100px;\n  box-sizing: border-box;\n}\n\nsection {\n  width: 100%;\n  height: 100vh;\n}\n\n.dropdown {\n  float: left;\n  overflow: hidden;\n}\n\n.dropdown .dropbtn {\n  font-size: 16px;\n  border: none;\n  outline: none;\n  color: white;\n  padding: 14px 16px;\n  background-color: inherit;\n  font-family: Roboto;\n  margin: 0;\n}\n\n.navbar a:hover,\n.dropdown:hover .dropbtn {\n  /* background-color: red; */\n}\n\n.dropdown-content {\n  display: block;\n  position: absolute;\n  background-color: red;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n}\n\n.dropdown-content a {\n  float: none;\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n  text-align: left;\n}\n\n.dropdown-content a:hover {\n  background-color: #ddd;\n}\n\nul {\n  padding: 0;\n  margin: 0;\n  list-style: bullets;\n}\n\nul li a {\n  text-decoration: none;\n  color: #e74c3c;\n  font-family: Roboto;\n  /* font-size: 18px; */\n}\n\n.navigation {\n  background-color: #35353500;\n  width: 75%;\n  margin: 20px auto;\n  min-height: 50px;\n}\n\n.navigation>li {\n  float: left;\n  padding: 0 20px;\n}\n\n.navigation>li>a {\n  line-height: 50px;\n  color: #FFF;\n}\n\n.navigation .menu {\n  position: relative\n}\n\n.navigation .menu .submenu {\n  position: absolute;\n  /* width: 200px; */\n  box-shadow: 0px 1px 1px #CCC;\n  display: none;\n  transition: all .5s ease-in-out;\n\n}\n\n.navigation .menu:hover .submenu {\n  display: block;\n\n}\n\n.navigation .menu .submenu:before {\n  content: \"\";\n  position: absolute;\n  display: block;\n  border-width: 0 6px 6px 6px;\n  border-style: solid;\n  border-color: #FFF transparent;\n  top: -6px;\n  right: 5px;\n\n}\n\n.dropdown:hover .dropdown-content {\n  display: block;\n}\n\nnav {\n  width: 100%;\n  height: 50px;\n  background: rgba(0, 0, 0, .8);\n  border-top: 1px solid rgba(255, 255);\n  border-bottom: 1px solid rgba(255, 255);\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0px;\n  z-index: 99\n}\n\nnav ul {\n  display: flex;\n  margin: 0px;\n  padding: 0px;\n  float: right;\n  list-style: \"circle\";\n}\n\nnav ul li {\n  list-style: circle;\n}\n\nnav ul {\n  display: flex;\n  list-style: circle;\n  padding: 0px;\n  /* float: ; */\n}\n\nnav ul li a {\n  display: block;\n  color: #fff;\n  padding: 0 20px;\n  text-decoration: none;\n  text-transform: uppercase;\n  font-weight: bold;\n  line-height: 50px;\n\n}\n\n.aboutus {\n  background: url(\"/assets/group-4.png\")no-repeat center center;\n  /* background-size: cover; */\n  height: 330px;\n  border-radius: 18px;\n  \n}\n\n/* ===========aliign start============ */\n\n/* ====================responsive================= */\n\n.mt_20{\nmargin-top: 0px;\n}\n\n.wt_237{\nwidth: 237px;\n}\n\n.wt-con{\nwidth: 232px;\n}\n\n.wt_140{\nwidth: 140% !important;\n}\n\n/* mobile media query */\n\n@media screen and (min-device-width: 320px) and (max-device-width: 760px){\n.nav-bg {\nbackground-color: rgba(0, 0, 0, 0.65) !important;\n}\n\n.pt-120{\nposition: relative;\nright: 153px;\n}\n.mt-414{\nmargin-top: 0px !important;\n}\n.ft_18 {\nfont-size: 18px;\n}\n\n\n\n}\n\n/* css for ipad */\n\n@media screen and (min-device-width: 768px) and (max-device-width: 1022px){\n.nav-bg {\n/* background-color: rgba(0, 0, 0, 0.65) !important; */\n}\n.maxwt_19{\nmax-width: 19%;\n}\n.wt_135{\nwidth: 135px !important;\n}\n.map_wt{\nwidth: 175px !important;\n}\n.ml_135{\nmargin-left: 0px !important;\n}\n.ml_16{\nmargin-left: -16px !important;\n}\n.logo_wt{\nwidth: 109px;\n}\n.col-sm-2{\nwidth : 0% ! important;\n}\n\n.mt_20{\n\n  margin-top: 4px !important; \n\nshape-margin: 0px !important;\n}\n\n.ht_80{\nheight:54px !important\n}\n\n.pt-120{\nposition: relative;\nright: 79px;\n}\n.mt-414{\nmargin-top:0px !important;\n}\n\n.ml-5, .mx-5 {\nmargin-left: 2.2rem !important;\n}\n\n.pad_0{\npadding:0 0px !important;\n}\n.ft_18 {\n\n\nfont-size: 30px;\n}\n\n.wt_106{\nwidth: 106% !important;\n}\n\n\n}\n\n@media screen and (max-device-width: 1024px){\n.nav-bg {\n/* background-color: rgba(0, 0, 0, 0.65) !important; */\n}\n.maxwt_19{\nmax-width: 19%;\n}\n.wt_135{\nwidth: 135px !important;\n}\n.map_wt{\nwidth: 175px !important;\n}\n.ml_135{\nmargin-left: 0px !important;\n}\n/* .ml_16{\nmargin-left: -16px !important;\n} */\n.logo_wt{\nwidth: 109px;\n}\n.col-sm-2{\n/* width : 0% ! important; */\n}\n\n.mt_20{\n\n  margin-top: 4px !important; \n\nshape-margin: 0px !important;\n}\n\n/* .ht_80{\nheight:54px !important\n} */\n\n.pt-120{\nposition: relative;\n/* right: 79px; */\n}\n.mt-414{\nmargin-top:0px !important;\n}\n\n.ml-5, .mx-5 {\nmargin-left: 2.2rem !important;\n}\n\n.pad_0{\npadding:0 0px !important;\n}\n.ft_18 {\nfont-size: 30px;\n}\n\n.wt_106{\nwidth: 106% !important;\n}\n\n\n}\n\n/* =============mobile============ */\n\n.Sign-In {\nwidth: 57px;\nheight: 24px;\nfont-family: Roboto;\nfont-size: 15px;\nfont-weight: normal;\nfont-style: normal;\nfont-stretch: normal;\nline-height: normal;\nletter-spacing: normal;\ncolor: #ffffff;\n}\n\n.Rectangle-2-Copy-2 {\nwidth: 1440px;\nheight: 311px;\nbox-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);\nbackground-image: linear-gradient(65deg, var(--black), var(--black));\n}\n\n.Subscribe {\nwidth: 54px;\nheight: 14px;\nopacity: 0.82;\nfont-family: Roboto;\nfont-size: 12px;\nfont-weight: 500;\nfont-style: normal;\nfont-stretch: normal;\nline-height: normal;\nletter-spacing: normal;\ncolor: #ff0000;\n}\n\n.Enter-your-mail-id {\nwidth: 92px;\nheight: 14px;\nopacity: 0.82;\nfont-family: Roboto;\nfont-size: 12px;\nfont-weight: 300;\nfont-style: normal;\nfont-stretch: normal;\nline-height: normal;\nletter-spacing: normal;\ncolor: #ffffff;\n}\n\n.Shape {\nwidth: 17px;\nheight: 17px;\nbackground-color: #ffffff;\n}\n\n.arabic{\nwidth: 28px;\nheight: 49px;\nfont-family: GeezaPro;\nfont-size: 12px;\nfont-weight: normal;\nfont-style: normal;\nfont-stretch: normal;\nline-height: normal;\nletter-spacing: normal;\ncolor: #ffffff;\n}\n\n.Oval {\nwidth: 9px;\nheight: 9px;\nbackground-color: #ff1100;\n}\n\n.English {\nwidth: 40px;\nheight: 28px;\nfont-family: Roboto;\nfont-size: 12px;\nfont-weight: 500;\nfont-style: normal;\nfont-stretch: normal;\nline-height: normal;\nletter-spacing: normal;\ncolor: #ff1100;\n}\n\n/* ===========navbar start========= */\n\n/* .Rectangle-2 {\nheight: 35px;\n  width: 100px;\n  padding: 0;\nborder-radius: 5px;\nbackground-color: #ff0000;\n}\n.Contact-Us {\nwidth: 90px;\nheight: 24px;\nfont-family: Roboto;\nfont-size: 18px;\nfont-weight: normal;\nfont-style: normal;\nfont-stretch: normal;\nline-height: normal;\nletter-spacing: normal;\ncolor: #ffffff;\n}\n.Suppliers {\nwidth: 77px;\nheight: 24px;\nfont-family: Roboto;\nfont-size: 18px;\nfont-weight: normal;\nfont-style: normal;\nfont-stretch: normal;\nline-height: normal;\nletter-spacing: normal;\ncolor: #ffffff;\n}\n.Services {\nwidth: 70px;\nheight: 24px;\nfont-family: Roboto;\nfont-size: 18px;\nfont-weight: normal;\nfont-style: normal;\nfont-stretch: normal;\nline-height: normal;\nletter-spacing: normal;\ncolor: #ffffff;\n}\n.About-Us-Copy {\nwidth: 75px;\nheight: 24px;\nfont-family: Roboto;\nfont-size: 18px;\nfont-weight: normal;\nfont-style: normal;\nfont-stretch: normal;\nline-height: normal;\nletter-spacing: normal;\ncolor: #ffffff;\n}\n.Home-Copy {\nwidth: 49px;\nheight: 24px;\nfont-family: Roboto;\nfont-size: 18px;\nfont-weight: normal;\nfont-style: normal;\nfont-stretch: normal;\nline-height: normal;\nletter-spacing: normal;\ncolor: #ffffff;\n} */\n\n/* ======navbar end===== */\n\n.Rectangle-5-Copy {\nwidth: 239px;\nheight: 59px;\nborder-radius: 8px;\nbackground-color: #f34235;\n}\n\n.Mission {\nwidth: 79px;\nheight: 48px;\nfont-family: Roboto;\nfont-size: 18px;\nfont-weight: bold;\nfont-style: normal;\nfont-stretch: normal;\nline-height: 2.22;\nletter-spacing: normal;\ncolor: var(--black);\n}\n\n.Utilizing-the-latest {\n/* width: 518px; */\nheight: 100px;\nfont-family: Roboto;\nfont-size: 16px;\nfont-weight: normal;\nfont-style: normal;\nfont-stretch: normal;\nline-height: normal;\nletter-spacing: normal;\ncolor: var(--black);\n}\n\n.To-be-among-the-best {\n/* width: 519px; */\n/* height: 81px; */\nfont-family: Roboto;\nfont-size: 16px;\nfont-weight: normal;\nfont-style: normal;\nfont-stretch: normal;\nline-height: normal;\nletter-spacing: normal;\ncolor: var(--black);\n}\n\n.Vision {\nwidth: 65px;\nheight: 40px;\nfont-family: Roboto;\nfont-size: 18px;\nfont-weight: bold;\nfont-style: normal;\nfont-stretch: normal;\nline-height: 2.22;\nletter-spacing: normal;\ncolor: var(--black);\n}\n\n.Sharjah-Asset-Manage {\n/* width: 535px; */\n/* height: 283px; */\nfont-family: Roboto;\nfont-size: 16px;\nfont-weight: normal;\nfont-style: normal;\nfont-stretch: normal;\nline-height: normal;\nletter-spacing: normal;\n/* color: black */\n}\n\n.reg{\nbackground-color: #ff0000; \nwidth: -webkit-min-content; \nwidth: -moz-min-content; \nwidth: min-content;\npadding: 8px 20px;\n        margin-left:14px;\n        margin-top: -10px;\n        width:123px;\n        height: 41px;\n        border-radius: 5px;\n}\n\n/* ===========align end============== */\n\n.spacer {\nheight: 100px;\n}\n\n.Who-We-Are-Aman-is-a {\n  /* width: 733px; */\n  height: 459px;\n  font-family: Roboto;\n  font-size: 16px;\n  text-align: justify;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: var(--black);\n}\n\n.Who-We-Are-Aman-is-a .text-style-1 {\n  font-size: 24px;\n}\n\n/* //====================text font size */\n\n.WHAT-IS-Aman- {\n  width: 313px;\nheight: 53px;\nfont-family: Roboto;\nfont-size: 33px;\nfont-weight: normal;\nfont-style: normal;\nfont-stretch: normal;\nline-height: 1.18;\nletter-spacing: normal;\ncolor: var(--black);\n}\n\n.Sharjah-Asset-Manage {\n  /* width: 535px; */\n  /* height: 283px; */\n  font-family: Roboto;\n  font-size: 16px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  /* color: black */\n}\n\n/* //====================text font size */"

/***/ }),

/***/ "./src/app/amanservices/amanservices.component.html":
/*!**********************************************************!*\
  !*** ./src/app/amanservices/amanservices.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-bg-ar [head]=\"head\" [bg]=\"bg\" [nav_arabic]=\"nav_arabic\"></app-nav-bg-ar>\n\n<br>\n<div class=\"container-fluid\">\n\n  <div class=\"card\" style=\"border-radius: 18px; background: white;\">\n    <br>\n    <div class=\"row mx-2\">\n\n      <div class=\"col-md-1\">\n\n        <img src=\"/assets/noun-connection-657013.png\" srcset=\"/assets/noun-connection-657013@2x.png 2x,\n                /assets/noun-connection-657013@3x.png 3x\" class=\"layer\">\n      </div>\n      <div class=\"col-md-5\">\n        <a class=\"WHAT-IS-Aman-\">Description</a>\n        <br>\n        <p class=\"Sharjah-Asset-Manage text-justify mt-2\">\n          <font color=\"#343a40\">To ensure fast response to fire\n            emergencies, SPSA partnered\n            with\n            SANED have initiated “AMAN” project. AMAN, aims to protect lives and properties by establishing a safe and\n            reliable connection between all firefighting systems in all properties in Sharjah, with the central\n            monitoring station that is continuously monitored to identify and respond to emergencies instantly ensuring\n            the safety of people and assets.</font>\n        </p>\n      </div>\n      <div class=\"ml-5\"></div>\n\n      <div class=\"col-md-1\">\n        <img src=\"/assets/2.png\" srcset=\"/assets/2@2x.png 2x,\n                  /assets/2@3x.png 3x\" class=\"layer\">\n\n      </div>\n\n      <div class=\"col-md-4 \">\n        <a class=\"WHAT-IS-Aman-\">Objectives</a>\n        <br>\n        <p class=\"Sharjah-Asset-Manage text-justify mt-2\">\n          <font color=\"#343a40\">\n            Enhance the quality of life in the Emirate of Sharjah by applying the highest internationally recognized\n            standards to ensure the protection and safety of individuals and properties. The mission is a <b>Zero Harm\n              Environment</b>.</font>\n        </p>\n\n      </div>\n\n\n\n\n\n\n\n\n\n\n\n    </div>\n    <!-- ====test======== -->\n\n\n\n    <!-- ===================gdgdg-= -->\n\n    <div class=\"row ml-2\">\n\n\n\n      <!-- =====test==== -->\n      <div class=\"row col-md-12\">\n        <div class=\"col-md-1\">\n          <img src=\"./assets/3.png\" srcset=\"./assets/3@2x.png 2x,\n                    ./assets/3@3x.png 3x\" class=\"img-responsive\">\n        </div>\n        <div class=\"col-md-5\">\n          <a class=\"WHAT-IS-Aman-\">Technical Information</a>\n          <!-- <h5><b>Technical Information</b></h5> -->\n          <p class=\"Sharjah-Asset-Manage text-justify mt-2\">The 24/7 communication system is: </p>\n\n\n          <ul class=\"ml-4 text-justify\">\n            <li>able to be integrated into a standard FACP of the building.</li>\n            <li>able to be installed in several configurations throughout various building type applications.</li>\n            <li>able to be readily used and maintained in varying conditions by operating property owners.</li>\n            <li>able to be integrated in to the central monitoring station communication system through GSM and PSTN\n            </li>\n            <li>able to be scalable for future expansion</li>\n          </ul>\n\n          <br>\n          <p lass=\"AMAN-is-a-first-of-i text-justify\"> The user friendly SPSA Mobile App and AMAN online registration\n            portal make it easy to register for your\n            service and will walk you through all the requirements.</p>\n\n          <p lass=\"AMAN-is-a-first-of-i text-justify\"> Our 24x7 call centre is happy to answer any questions: 600 515152\n          </p>\n\n          <i>Website and Mobile App coming soon.</i>\n\n        </div>\n        <!-- <div class=\"col-md-1\"></div> -->\n        <div class=\"ml-5\"></div>\n        <div class=\"mr-4\"></div>\n        <div class=\"col-md-1\">\n          <img src=\"/assets/4.png\" srcset=\"/assets/4@2x.png 2x,\n                    /assets/4@3x.png 3x\" class=\"img-responsive\">\n        </div>\n\n\n        <div class=\"col-md-4 \">\n          <a class=\"WHAT-IS-Aman-\">Commercial Information</a>\n\n\n          <p class=\"Sharjah-Asset-Manage text-justify mt-2\">\n            Included in the fixed fee for Building Owners are the following: </p>\n\n\n          <ul class=\"ml-4\">\n            <li>Two building assessments with custom reports provided by AMAN technicians</li>\n            <li>The communicator device with a surface mount enclosure</li>\n            <li>Installation of the communicator</li>\n            <li>SIM card</li>\n            <li>Close out report after successful installation</li>\n            <li>Two years of maintenance on the communicator</li>\n            <li> One year service fee of SIM card</li>\n            <li>Free registration & unlimited access to the application and software</li>\n          </ul>\n\n        </div>\n      </div>\n      <br>\n\n      <div class=\"col-md-4\"></div>\n\n\n    </div>\n\n\n    <div class=\"my-3 text-center\">\n      <a href=\"http://eservices.spsa.ae/register_en\" target=\"_blank\">\n        <button type=\"submit\" href=\"\" class=\"Rectangle-5-Copy\" routerLink=\"/http://eservices.spsa.ae\">\n          <font color=\"white\">Register\n            Here</font>\n        </button></a>\n    </div>\n\n  </div>\n\n</div>\n\n<br>\n<app-loginv2></app-loginv2>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/amanservices/amanservices.component.ts":
/*!********************************************************!*\
  !*** ./src/app/amanservices/amanservices.component.ts ***!
  \********************************************************/
/*! exports provided: AmanservicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmanservicesComponent", function() { return AmanservicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ng2_simple_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-simple-global */ "./node_modules/ng2-simple-global/index.js");
/* harmony import */ var ng2_simple_global__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_simple_global__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AmanservicesComponent = /** @class */ (function () {
    function AmanservicesComponent(apiService, router, sg) {
        this.apiService = apiService;
        this.router = router;
        this.sg = sg;
        this.navbarOpen = false;
        this.head = "Aman";
        this.bg = "bg_img";
        this.nav_arabic = "/amanservices-arabic";
        this.Lang = {};
        this.model = {};
        this.data = {};
    }
    AmanservicesComponent.prototype.toggleNavbar = function () {
        this.navbarOpen = !this.navbarOpen;
    };
    AmanservicesComponent.prototype.ngOnInit = function () {
    };
    AmanservicesComponent.prototype.newsletter = function (model) {
        var _this = this;
        this.apiService.newsletter(model).subscribe(function (response) {
            _this.data = response;
            console.log(_this.data);
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()(_this.data.Message + "<br>" + "اشتركت بنجاح في النشرة الإخبارية");
        });
    };
    ;
    AmanservicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-amanservices',
            template: __webpack_require__(/*! ./amanservices.component.html */ "./src/app/amanservices/amanservices.component.html"),
            styles: [__webpack_require__(/*! ./amanservices.component.css */ "./src/app/amanservices/amanservices.component.css")]
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["APIService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ng2_simple_global__WEBPACK_IMPORTED_MODULE_4__["SimpleGlobal"]])
    ], AmanservicesComponent);
    return AmanservicesComponent;
}());



/***/ }),

/***/ "./src/app/api.service.ts":
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/*! exports provided: APIService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APIService", function() { return APIService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var APIService = /** @class */ (function () {
    function APIService(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = 'http://saned.ae';
    }
    APIService.prototype.Subscribe = function (contact) {
        return this.httpClient.post("http://saned.ae/api/subscribe", contact);
    };
    APIService.prototype.createContact = function (contact) {
        return this.httpClient.post(this.API_URL + "/register", contact);
    };
    APIService.prototype.forgetotpverification = function (contact) {
        return this.httpClient.post(this.API_URL + "/forgetotpverification", contact);
    };
    APIService.prototype.supplierregister = function (contact) {
        console.log("enter in to the supplier register");
        return this.httpClient.post("http://saned.ae/api/supplierregistration", contact);
    };
    APIService.prototype.newsletter = function (contact) {
        return this.httpClient.post(this.API_URL + "/newsletter-Residents", contact);
    };
    APIService.prototype.sendotp = function (contact) {
        return this.httpClient.post(this.API_URL + "/emailotp", contact);
    };
    APIService.prototype.forgetpassword = function (contact) {
        return this.httpClient.post(this.API_URL + "/forgetpassword", contact);
    };
    APIService.prototype.supplieremailotpverification = function (contact) {
        return this.httpClient.post(this.API_URL + "/supplieremailotpverification", contact);
    };
    APIService.prototype.emailotpverification = function (contact) {
        return this.httpClient.post(this.API_URL + "/emailotpverification", contact);
    };
    APIService.prototype.login = function (contact) {
        return this.httpClient.post(this.API_URL + "/login", contact);
    };
    APIService.prototype.fetchContact = function () {
        return this.httpClient.get(this.API_URL + "/readUserData/");
    };
    APIService.prototype.getRepoIssued = function (sort, order, page) {
        var href = 'https://api.github.com/search/issues';
        var requestUrl = href + "?q=repo:angular/material2&sort=" + sort + "&order=" + order + "&page=" + (page + 1);
        return this.httpClient.get(requestUrl);
    };
    APIService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], APIService);
    return APIService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet>\n    <link href=\"https://fonts.googleapis.com/css?family=Roboto\" rel=\"stylesheet\">\n\n</router-outlet>\n<!-- <app-footer></app-footer> -->"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(translate) {
        this.translate = translate;
        this.user = {};
        translate.setDefaultLang('en');
    }
    AppComponent.prototype.resolved = function (captchaResponse) {
        console.log("Resolved captcha with response " + captchaResponse + ":");
    };
    AppComponent.prototype.switchLanguage = function (language) {
        this.translate.use(language);
    };
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _register_form_register_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-form/register-form.component */ "./src/app/register-form/register-form.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-recaptcha */ "./node_modules/ng-recaptcha/index.js");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng_recaptcha__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/about-us/about-us.component.ts");
/* harmony import */ var _facilitymanagement_facilitymanagement_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./facilitymanagement/facilitymanagement.component */ "./src/app/facilitymanagement/facilitymanagement.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _recaptcha_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./recaptcha.directive */ "./src/app/recaptcha.directive.ts");
/* harmony import */ var _loginv2_loginv2_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./loginv2/loginv2.component */ "./src/app/loginv2/loginv2.component.ts");
/* harmony import */ var ng2_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng2-datepicker */ "./node_modules/ng2-datepicker/dist/bundles/ng2-datepicker.umd.js");
/* harmony import */ var ng2_datepicker__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(ng2_datepicker__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _amanservices_amanservices_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./amanservices/amanservices.component */ "./src/app/amanservices/amanservices.component.ts");
/* harmony import */ var _salamaservices_salamaservices_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./salamaservices/salamaservices.component */ "./src/app/salamaservices/salamaservices.component.ts");
/* harmony import */ var _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./contactus/contactus.component */ "./src/app/contactus/contactus.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _confirmpassvalidator_directive__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./confirmpassvalidator.directive */ "./src/app/confirmpassvalidator.directive.ts");
/* harmony import */ var ng2_simple_global__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng2-simple-global */ "./node_modules/ng2-simple-global/index.js");
/* harmony import */ var ng2_simple_global__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(ng2_simple_global__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _login_arbic_login_arbic_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./login-arbic/login-arbic.component */ "./src/app/login-arbic/login-arbic.component.ts");
/* harmony import */ var _register_form_arabic_register_form_arabic_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./register-form-arabic/register-form-arabic.component */ "./src/app/register-form-arabic/register-form-arabic.component.ts");
/* harmony import */ var _salamaservices_arabic_salamaservices_arabic_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./salamaservices-arabic/salamaservices-arabic.component */ "./src/app/salamaservices-arabic/salamaservices-arabic.component.ts");
/* harmony import */ var _amanservices_arabic_amanservices_arabic_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./amanservices-arabic/amanservices-arabic.component */ "./src/app/amanservices-arabic/amanservices-arabic.component.ts");
/* harmony import */ var _aboutus_arabic_aboutus_arabic_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./aboutus-arabic/aboutus-arabic.component */ "./src/app/aboutus-arabic/aboutus-arabic.component.ts");
/* harmony import */ var _contactus_arabic_contactus_arabic_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./contactus-arabic/contactus-arabic.component */ "./src/app/contactus-arabic/contactus-arabic.component.ts");
/* harmony import */ var _supplier_register_supplier_register_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./supplier-register/supplier-register.component */ "./src/app/supplier-register/supplier-register.component.ts");
/* harmony import */ var _sitemap_sitemap_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./sitemap/sitemap.component */ "./src/app/sitemap/sitemap.component.ts");
/* harmony import */ var _supplier_register_arabic_supplier_register_arabic_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./supplier-register-arabic/supplier-register-arabic.component */ "./src/app/supplier-register-arabic/supplier-register-arabic.component.ts");
/* harmony import */ var _sitemap_arabic_sitemap_arabic_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./sitemap-arabic/sitemap-arabic.component */ "./src/app/sitemap-arabic/sitemap-arabic.component.ts");
/* harmony import */ var _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./privacy/privacy.component */ "./src/app/privacy/privacy.component.ts");
/* harmony import */ var _privacy_arabic_privacy_arabic_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./privacy-arabic/privacy-arabic.component */ "./src/app/privacy-arabic/privacy-arabic.component.ts");
/* harmony import */ var _navbararabic_navbararabic_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./navbararabic/navbararabic.component */ "./src/app/navbararabic/navbararabic.component.ts");
/* harmony import */ var _facilityarabic_facilityarabic_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./facilityarabic/facilityarabic.component */ "./src/app/facilityarabic/facilityarabic.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _commingsoon_commingsoon_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./commingsoon/commingsoon.component */ "./src/app/commingsoon/commingsoon.component.ts");
/* harmony import */ var _nav_bg_nav_bg_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./nav-bg/nav-bg.component */ "./src/app/nav-bg/nav-bg.component.ts");
/* harmony import */ var _nav_bg_ar_nav_bg_ar_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./nav-bg-ar/nav-bg-ar.component */ "./src/app/nav-bg-ar/nav-bg-ar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










































//routing page while refreshing




var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    //{ path: 'home', redirectTo: '', pathMatch: 'full' },
    { path: 'register-form', component: _register_form_register_form_component__WEBPACK_IMPORTED_MODULE_5__["RegisterFormComponent"] },
    { path: 'facilityarabic', component: _facilityarabic_facilityarabic_component__WEBPACK_IMPORTED_MODULE_38__["FacilityarabicComponent"] },
    { path: 'about-us', component: _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_8__["AboutUsComponent"] },
    { path: 'facilitymanagement', component: _facilitymanagement_facilitymanagement_component__WEBPACK_IMPORTED_MODULE_9__["facilitymanagementComponent"] },
    { path: 'home', component: _login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"] },
    { path: 'contactus', component: _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_21__["ContactusComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_22__["ContactComponent"] },
    { path: 'amanservices', component: _amanservices_amanservices_component__WEBPACK_IMPORTED_MODULE_19__["AmanservicesComponent"] },
    { path: 'salamaservices', component: _salamaservices_salamaservices_component__WEBPACK_IMPORTED_MODULE_20__["SalamaservicesComponent"] },
    { path: 'supplier-register', component: _supplier_register_supplier_register_component__WEBPACK_IMPORTED_MODULE_31__["SupplierRegisterComponent"] },
    { path: 'sitemap', component: _sitemap_sitemap_component__WEBPACK_IMPORTED_MODULE_32__["SitemapComponent"] },
    { path: 'privacy', component: _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_35__["PrivacyComponent"] },
    { path: 'sitemap-arabic', component: _sitemap_arabic_sitemap_arabic_component__WEBPACK_IMPORTED_MODULE_34__["SitemapArabicComponent"] },
    { path: 'login-arbic', component: _login_arbic_login_arbic_component__WEBPACK_IMPORTED_MODULE_25__["LoginArbicComponent"] },
    { path: 'register-form-arabic', component: _register_form_arabic_register_form_arabic_component__WEBPACK_IMPORTED_MODULE_26__["RegisterFormArabicComponent"] },
    { path: 'salamaservices-arabic', component: _salamaservices_arabic_salamaservices_arabic_component__WEBPACK_IMPORTED_MODULE_27__["SalamaservicesArabicComponent"] },
    { path: 'amanservices-arabic', component: _amanservices_arabic_amanservices_arabic_component__WEBPACK_IMPORTED_MODULE_28__["AmanservicesArabicComponent"] },
    { path: 'aboutus-arabic', component: _aboutus_arabic_aboutus_arabic_component__WEBPACK_IMPORTED_MODULE_29__["AboutusArabicComponent"] },
    { path: 'contactus-arabic', component: _contactus_arabic_contactus_arabic_component__WEBPACK_IMPORTED_MODULE_30__["ContactusArabicComponent"] },
    { path: 'supplier-register-arabic', component: _supplier_register_arabic_supplier_register_arabic_component__WEBPACK_IMPORTED_MODULE_33__["SupplierRegisterArabicComponent"] },
    { path: 'privacy-arabic', component: _privacy_arabic_privacy_arabic_component__WEBPACK_IMPORTED_MODULE_36__["PrivacyArabicComponent"] },
    { path: 'navbararabic', component: _navbararabic_navbararabic_component__WEBPACK_IMPORTED_MODULE_37__["NavbararabicComponent"] },
    { path: 'navbararabic', component: _navbararabic_navbararabic_component__WEBPACK_IMPORTED_MODULE_37__["NavbararabicComponent"] },
    { path: 'commingsoon', component: _commingsoon_commingsoon_component__WEBPACK_IMPORTED_MODULE_40__["CommingsoonComponent"] },
];
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_13__["TranslateHttpLoader"](http);
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                ng_recaptcha__WEBPACK_IMPORTED_MODULE_7__["RecaptchaModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                ng2_datepicker__WEBPACK_IMPORTED_MODULE_18__["NgDatepickerModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"].forRoot(routes),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__["BsDatepickerModule"].forRoot(),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
                    }
                })
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _register_form_register_form_component__WEBPACK_IMPORTED_MODULE_5__["RegisterFormComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_8__["AboutUsComponent"],
                _facilitymanagement_facilitymanagement_component__WEBPACK_IMPORTED_MODULE_9__["facilitymanagementComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"],
                _recaptcha_directive__WEBPACK_IMPORTED_MODULE_16__["RecaptchaDirective"],
                _loginv2_loginv2_component__WEBPACK_IMPORTED_MODULE_17__["Loginv2Component"],
                _amanservices_amanservices_component__WEBPACK_IMPORTED_MODULE_19__["AmanservicesComponent"],
                _salamaservices_salamaservices_component__WEBPACK_IMPORTED_MODULE_20__["SalamaservicesComponent"],
                _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_21__["ContactusComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_22__["ContactComponent"],
                _confirmpassvalidator_directive__WEBPACK_IMPORTED_MODULE_23__["confirmvalidatorDirective"],
                _login_arbic_login_arbic_component__WEBPACK_IMPORTED_MODULE_25__["LoginArbicComponent"],
                _register_form_arabic_register_form_arabic_component__WEBPACK_IMPORTED_MODULE_26__["RegisterFormArabicComponent"],
                _salamaservices_arabic_salamaservices_arabic_component__WEBPACK_IMPORTED_MODULE_27__["SalamaservicesArabicComponent"],
                _amanservices_arabic_amanservices_arabic_component__WEBPACK_IMPORTED_MODULE_28__["AmanservicesArabicComponent"],
                _aboutus_arabic_aboutus_arabic_component__WEBPACK_IMPORTED_MODULE_29__["AboutusArabicComponent"],
                _contactus_arabic_contactus_arabic_component__WEBPACK_IMPORTED_MODULE_30__["ContactusArabicComponent"],
                _supplier_register_supplier_register_component__WEBPACK_IMPORTED_MODULE_31__["SupplierRegisterComponent"],
                _sitemap_sitemap_component__WEBPACK_IMPORTED_MODULE_32__["SitemapComponent"],
                _supplier_register_arabic_supplier_register_arabic_component__WEBPACK_IMPORTED_MODULE_33__["SupplierRegisterArabicComponent"],
                _sitemap_arabic_sitemap_arabic_component__WEBPACK_IMPORTED_MODULE_34__["SitemapArabicComponent"],
                _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_35__["PrivacyComponent"],
                _privacy_arabic_privacy_arabic_component__WEBPACK_IMPORTED_MODULE_36__["PrivacyArabicComponent"],
                _navbararabic_navbararabic_component__WEBPACK_IMPORTED_MODULE_37__["NavbararabicComponent"],
                _facilityarabic_facilityarabic_component__WEBPACK_IMPORTED_MODULE_38__["FacilityarabicComponent"],
                _commingsoon_commingsoon_component__WEBPACK_IMPORTED_MODULE_40__["CommingsoonComponent"],
                _nav_bg_nav_bg_component__WEBPACK_IMPORTED_MODULE_41__["NavBgComponent"],
                _nav_bg_ar_nav_bg_ar_component__WEBPACK_IMPORTED_MODULE_42__["NavBgArComponent"],
            ],
            providers: [
                {
                    provide: ng_recaptcha__WEBPACK_IMPORTED_MODULE_7__["RECAPTCHA_SETTINGS"],
                    useValue: {
                        siteKey: '6LfQqIQUAAAAABL8W6ckQ5_jVY-flsBo8RHrI9Vx',
                    },
                },
                {
                    provide: ng_recaptcha__WEBPACK_IMPORTED_MODULE_7__["RECAPTCHA_LANGUAGE"],
                    useValue: 'En',
                },
                { provide: ng2_simple_global__WEBPACK_IMPORTED_MODULE_24__["SimpleGlobal"] },
                //routing page while refreshing
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_39__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_39__["HashLocationStrategy"] }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/commingsoon/commingsoon.component.css":
/*!*******************************************************!*\
  !*** ./src/app/commingsoon/commingsoon.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.Coming-Soon {\n    font-family: Roboto;\n    font-size: 48px;\n    font-weight: bold;\n    color: #ff0000;\n    \n  }\n\n  .Coming-Soon-ar{\n    font-family: GeezaPro;\n    font-size: 48px;\n    font-weight: bold;\n    color: #ff0000;\n  }\n\n  .foot1{\n    font-family: GeezaPro;\n    font-weight: bold;\n    font-size: 16px;\n    text-align: center;\n    color: #ffffff;\n    margin: 0px;\n  }\n\n  .foot2{\n    font-family: GeezaPro;\n    font-size: 16px;\n    text-align: center;\n    color: #EAE7E7;\n    margin: 0px;\n    font-weight: 300;\n  }\n\n  /* .foot3{\n    font-family: Roboto;\n  font-weight: 300;\n    font-size: 16px;\n    text-align: center;\n    color: #ffffff;\n    margin: 0px;\n  } */\n\n  /* .foot4{\n    font-family: Roboto;\n  font-weight: 300;\n    font-size: 18px;\n    text-align: center;\n    color: #ffffff;\n    margin: 0px;\n  } */\n\n  .Company-Address-Tow {\n    font-family: Roboto;\n    font-size: 16px;\n    font-weight: 600;\n    text-align: center;\n    color: #ffffff;\n    margin: 0px;\n  }\n\n  .Company-Address {\n    font-family: Roboto;\n    font-size: 16px;\n    text-align: center;\n    color: #D3CFCF;\n    margin: 0px;\n  }\n\n  .hr-white{\n    display: block;\n    height: 1px;\n    border: 0;\n    border-top: 1px solid #979797;\n    margin: 1em 0;\n    padding: 0; \n  }\n\n  .hr-black{\n    display: block;\n    height: 1px;\n    border: 0;\n    border-top: 1px solid gray;\n    width: 500px;\n    margin: 1em 0;\n    padding: 0; \n  }\n\n  .img-set{\n    width: 80%;\n    height: auto;\n  }\n\n  .bg-img {\n    background: url(\"/assets/rectangle-2.png\")no-repeat center center;\n    /* height: 500px; */\n   }\n\n  .img-bg{\n     width: 100%;\n     height: auto;\n   }\n\n  .img-on-text {\n    position: relative;\n    text-align: center;\n    /* color: white; */\n  }\n\n  .pos1{\n      position: absolute;\n      top: 20%;\n      left: 50%;\n      -webkit-transform: translate(-50%, -20%);\n              transform: translate(-50%, -20%);\n  }\n\n  .pos2{\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n}\n\n  .pos3{\n  position: absolute;\n  width: 100%;\n  top: 70%;\n  left: 70%;\n  -webkit-transform: translate(-70%, -57%);\n          transform: translate(-70%, -57%);\n}\n\n  @media (max-width: 575.98px) {\n\n  .img-set{\n    width: 65%;\n    height: auto;\n  }\n\n  .hr-black{\n    display: block;\n    height: 1px;\n    border: 0;\n    border-top: 1px solid gray;\n    width: 230px;\n    margin: 1em 0;\n    padding: 0; \n  }\n\n  .Coming-Soon {\n    font-family: Roboto;\n    font-size: 27px;\n    font-weight: bold;\n    color: #ff0000;\n  }\n\n  .Coming-Soon-ar{\n    font-family: GeezaPro;\n    font-size: 27px;\n    font-weight: bold;\n    color: #ff0000;\n  }\n\n  .pos1{  \n    position: absolute;\n    top: 20%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -20%);\n            transform: translate(-50%, -20%);\n}\n\n.pos2{\n  position: absolute;\n  top: 60%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n\n.pos3{\nposition: absolute;\nwidth: 100%;\ntop: 85%;\nleft: 70%;\n-webkit-transform: translate(-70%, -57%);\n        transform: translate(-70%, -57%);\n}\n\n.foot1{\n  font-family: GeezaPro;\n  font-weight: bold;\n  font-size: 12px;\n  text-align: center;\n  color: #ffffff;\n  margin: 0px;\n}\n\n.foot2{\n  font-family: GeezaPro;\n  font-size: 12px;\n  text-align: center;\n  color: #EAE7E7;\n  margin: 0px;\n  font-weight: 300;\n}\n\n.Company-Address-Tow {\n  font-family: Roboto;\n  font-size: 12px;\n  font-weight: 600;\n  text-align: center;\n  color: #ffffff;\n  margin: 0px;\n}\n\n.Company-Address {\n  font-family: Roboto;\n  font-size: 12px;\n  text-align: center;\n  color: #D3CFCF;\n  margin: 0px;\n}\n\n\n}\n\n  /* ipad */\n\n  @media (min-width: 768px) and (max-width: 991.98px) {\n\n  .pos1{  \n    position: absolute;\n    top: 20%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -20%);\n            transform: translate(-50%, -20%);\n}\n\n.pos2{\n  position: absolute;\n  top: 60%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n\n.pos3{\nposition: absolute;\nwidth: 100%;\ntop: 85%;\nleft: 70%;\n-webkit-transform: translate(-70%, -57%);\n        transform: translate(-70%, -57%);\n}\n\n}\n\n  /****   ipone 5   ***/\n\n  @media screen and (device-aspect-ratio: 40/71) {}"

/***/ }),

/***/ "./src/app/commingsoon/commingsoon.component.html":
/*!********************************************************!*\
  !*** ./src/app/commingsoon/commingsoon.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js\"></script>\n<script src=\"//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n<link href=\"https://fonts.googleapis.com/css?family=Roboto\" rel=\"stylesheet\">\n\n\n<div class=\"\">\n\n\n  <div class=\"img-on-text\">\n    <img class=\"img-bg\" src=\"./assets/rectangle-2.png\" />\n\n    <div class=\"pos1\">\n      <img class=\"img-set\" src=\"./assets/E76BA54B.png\" />\n    </div>\n\n    <div class=\"pos2\">\n      <hr class=\"hr-black\" />\n    </div>\n\n    <div class=\"pos3\" >\n      <!-- <p> <span class=\"Coming-Soon\"> Coming Soon </span> <span class=\"Coming-Soon-ar\"></span> </p> -->\n\n      <p> <span class=\"Coming-Soon mr-3 mr-sm-5\">Coming Soon</span>\n        <span class=\"Coming-Soon-ar ml-3 ml-sm-5\">قريبا</span>\n      </p>\n    </div>\n\n  </div>\n\n\n  <div class=\"text-center py-sm-5 py-4\" style=\"background-color: #000000;\">\n    <div class=\"container\">\n\n      <div dir=\"rtl\">\n        <p class=\"foot1\">عنوان الشركة:</p>\n        <p class=\"foot2\"> برج 400 ، الطابق 18 ، طريق المينا ، الشارقة ، ص.ب. 4648 الشارقة - الإمارات العربية المتحدة هاتف:  6555 506 6 971+ |         \n          </p>  \n          <p class=\"foot2\">  فاكس: 2331 572 6 971+| البريد الالكتروني: www.saned.ae  |  helpdesk@saned.ae </p>\n      </div>\n\n      <hr class=\"hr-white\" />\n\n      <div>\n        <p class=\"Company-Address-Tow\">Company Address: </p>\n        <p class=\"Company-Address\">Tower 400, 18th Floor, Mina Road, Sharjah, PO Box 4648 Sharjah - UAE Tel: +971 6 506 6555 | </p>\n        <p class=\"Company-Address\">Fax: +971 6 572 2331 | Email: helpdesk@saned.ae | www.saned.ae</p>\n      </div>\n\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/commingsoon/commingsoon.component.ts":
/*!******************************************************!*\
  !*** ./src/app/commingsoon/commingsoon.component.ts ***!
  \******************************************************/
/*! exports provided: CommingsoonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommingsoonComponent", function() { return CommingsoonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CommingsoonComponent = /** @class */ (function () {
    function CommingsoonComponent() {
    }
    CommingsoonComponent.prototype.ngOnInit = function () {
    };
    CommingsoonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-commingsoon',
            template: __webpack_require__(/*! ./commingsoon.component.html */ "./src/app/commingsoon/commingsoon.component.html"),
            styles: [__webpack_require__(/*! ./commingsoon.component.css */ "./src/app/commingsoon/commingsoon.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CommingsoonComponent);
    return CommingsoonComponent;
}());



/***/ }),

/***/ "./src/app/confirmpassvalidator.directive.ts":
/*!***************************************************!*\
  !*** ./src/app/confirmpassvalidator.directive.ts ***!
  \***************************************************/
/*! exports provided: confirmvalidatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "confirmvalidatorDirective", function() { return confirmvalidatorDirective; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var confirmvalidatorDirective = /** @class */ (function () {
    function confirmvalidatorDirective() {
    }
    confirmvalidatorDirective_1 = confirmvalidatorDirective;
    confirmvalidatorDirective.prototype.validate = function (control) {
        var controlToCompare = control.parent.get(this.passvalidator);
        if (controlToCompare && controlToCompare.value !== control.value) {
            return { 'notequal': true };
        }
        return null;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", String)
    ], confirmvalidatorDirective.prototype, "passvalidator", void 0);
    confirmvalidatorDirective = confirmvalidatorDirective_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[passvalidator]',
            providers: [{
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NG_VALIDATORS"],
                    useExisting: confirmvalidatorDirective_1,
                    multi: true
                }]
        })
    ], confirmvalidatorDirective);
    return confirmvalidatorDirective;
    var confirmvalidatorDirective_1;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg_img {\n  background: url(\"/assets/newChkBg.png\")no-repeat center center;\n  background-size: cover;\n  width:100%;\n  height: 100vh;\n}\n\n.bg_img1 {\n  background: url(\"/assets/newChkBg.png\")no-repeat center center;\n  background-size: cover;\n  width:100%;\n  height: 50vh;\n}\n\n.head{\n  font-family: Roboto;\nfont-size: 45px;\ncolor: #ffffff;\nline-height: normal;\n}\n\n.font-center{\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 100%;\n  text-align: center;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n\n/* only for iphone 5s */\n\n/* @media only screen and (max-width: 320px) {\n\n} */\n\n@media screen and (min-device-width: 320px) and (max-device-width: 760px){\n  .head{\n    font-family: Roboto;\n    font-size: 50px;\n    color: #ffffff;\n    \n    }\n\n    .font-center{\n      position: absolute;\n      top: 60%;\n      left: 50%;\n      width: 100%;\n      text-align: center;\n      -webkit-transform: translate(-50%, -50%);\n              transform: translate(-50%, -50%);\n    }\n}\n"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [class]='bg' style=\"margin-bottom: -50px; position: relative;\">\n    <div class=\"container-fluid\">\n\n        <div class=\"row\">\n            <div class=\"col-md-4 col-sm-4 p-0 text-left\">\n                <img class=\"img-fluid\" src=\"./assets/newChk.png\">\n            </div>\n\n            <div class=\"col-md-4 col-sm-4\"> </div>\n\n            <div class=\"col-md-4 col-sm-4 text-right\">\n                <div class=\"mt-sm-5 mr-sm-5 mt-md-5 mr-md-5 mt-0 mr-0\">\n\n                    <font class=\"mr-2\" style=\"color:#F90E35\">English</font>\n                    <input type=\"radio\" checked>\n\n                    <font class=\"ml-3 mr-1\" color=\"white\"> عربى </font>\n                    <input name=\"Lang\" [(ngModel)]=\"Lang\" type=\"radio\" [value]=\"true\" routerLink={{nav_arabic}}\n                        [checked]=\"Lang\" />\n\n                </div>\n            </div>\n\n        </div>\n\n        <div class=\"font-center\">\n            <font class=\"head\"> {{ head }} </font>\n        </div>\n\n    </div>\n\n</div>\n\n<app-navbar style=\"position:relative; bottom: 30px;\"></app-navbar>\n\n\n\n<div>\n    <h1>some contant</h1>\n    <h1>some contant</h1>  <h1>some contant</h1>  <h1>some contant</h1>  <h1>some contant</h1>  <h1>some contant</h1>  <h1>some contant</h1>\n    <h1>some contant</h1>  <h1>some contant</h1>  <h1>some contant</h1>  <h1>some contant</h1>  <h1>some contant</h1>\n    <h1>some contant</h1>  <h1>some contant</h1>  <h1>some contant</h1>  <h1>some contant</h1>  <h1>some contant</h1>  <h1>some contant</h1>\n    <h1>some contant</h1>  <h1>some contant</h1>  <h1>some contant</h1>  <h1>some contant</h1>  <h1>some contant</h1>\n    \n</div>"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { Props } from '../props';
var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
        this.head = "Integrated Facility Management";
        this.bg = "bg_img";
        this.nav_arabic = "/supplier-register-arabic";
        this.Lang = {};
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/contactus-arabic/contactus-arabic.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/contactus-arabic/contactus-arabic.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');\n \n\n.intro-2{\n  background: url(/assets/hero_image1.png)no-repeat center center;\n  background-size: cover;\n  /* height: 635px; */\n}\n \n\nbody {\n  font-family: Arial, Helvetica, sans-serif;\n}\n \n\nnav {\n  width: 100%;\n  height: 50px;\n  background: rgba(0, 0, 0, .8);\n  border-top: 1px solid rgba(255, 255);\n  border-bottom: 1px solid rgba(255, 255);\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0px;\n  z-index: 99;\n}\n \n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: sans-serif;\n  /* background: #000; */\n}\n \n\nheader {\n  padding: 10px 100px;\n  box-sizing: border-box;\n}\n \n\nsection {\n  width: 100%;\n  height: 100vh;\n}\n \n\n.dropdown {\n  float: left;\n  overflow: hidden;\n}\n \n\n.dropdown .dropbtn {\n  font-size: 16px;\n  border: none;\n  outline: none;\n  color: white;\n  padding: 14px 16px;\n  background-color: inherit;\n  font-family: inherit;\n  margin: 0;\n}\n \n\n.navbar a:hover,\n.dropdown:hover .dropbtn {\n  /* background-color: red; */\n}\n \n\n.dropdown-content {\n  display: block;\n  position: absolute;\n  background-color: red;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n}\n \n\n.dropdown-content a {\n  float: none;\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n  text-align: left;\n}\n \n\n.dropdown-content a:hover {\n  background-color: #ddd;\n}\n \n\nul {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n \n\nul li a {\n  text-decoration: none;\n  color: #e74c3c;\n  font-family: Tahoma, Arial;\n}\n \n\n.navigation {\n  background-color: #35353500;\n  width: 100%;\n  margin: 20px auto;\n  min-height: 50px;\n}\n \n\n.navigation>li {\n  float: left;\n  padding: 0 20px;\n}\n \n\n.navigation>li>a {\n  line-height: 50px;\n  color: #FFF;\n}\n \n\n.navigation .menu {\n  position: relative\n}\n \n\n.navigation .menu .submenu {\n  position: absolute;\n  /* width: 200px; */\n  box-shadow: 0px 1px 1px #CCC;\n  display: none;\n  transition: all .5s ease-in-out;\n}\n \n\n.navigation .menu:hover .submenu {\n  display: block\n}\n \n\n.navigation .menu .submenu:before {\n  content: \"\";\n  position: absolute;\n  display: block;\n  border-width: 0 6px 6px 6px;\n  border-style: solid;\n  border-color: #FFF transparent;\n  top: -6px;\n  left: 5px\n}\n \n\n.navigation .menu .submenu li {\n  padding: 5px 10px;\n  transition: all .5s ease-in-out;\n}\n \n\n.navigation .menu .submenu li:hover {\n  background-color: #e74c3c;\n}\n \n\n.navigation .menu .submenu li:hover a {\n  color: #FFF;\n  /* padding: 0 11px; */\n}\n \n\n.dropdown:hover .dropdown-content {\n  display: block;\n}\n \n\nnav {\n  width: 100%;\n  height: 50px;\n  background: rgba(0, 0, 0, .8);\n  border-top: 1px solid rgba(255, 255);\n  border-bottom: 1px solid rgba(255, 255);\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0px;\n  z-index: 99\n}\n \n\nnav ul {\n  display: flex;\n  margin: 0px;\n  padding: 0px;\n  float: right;\n}\n \n\nnav ul li {\n  list-style: none;\n}\n \n\nnav ul {\n  display: flex;\n\n  padding: 0px;\n  /* float: ; */\n}\n \n\nnav ul li a {\n  display: block;\n  color: #fff;\n  padding: 1 21px !important;\n  text-decoration: none;\n  text-transform: uppercase;\n  font-weight: bold;\n  line-height: 50px;\n}\n \n\n/* ==============footer style start ========= */\n \n\n.footer {\n  /* position: fixed; */\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background-color: black;\n  color: white;\n  text-align: center;\n  /* height: 75px; */\n}\n \n\n.container1 {\n  background: black;\n  color: white\n}\n \n\n.social:hover {\n  -webkit-transform: scale(1.1);\n  -moz-transform: scale(1.1);\n  -o-transform: scale(1.1);\n}\n \n\n.social {\n  -webkit-transform: scale(0.8);\n  /* Browser Variations: */\n\n  -moz-transform: scale(0.8);\n  -o-transform: scale(0.8);\n  -webkit-transition-duration: 0.5s;\n  -moz-transition-duration: 0.5s;\n  -o-transition-duration: 0.5s;\n}\n \n\n.fa {\n  padding: 20px;\n  font-size: 30px;\n  width: 30px;\n  text-align: center;\n  text-decoration: none;\n  border-radius: 50%;\n}\n \n\n.img-thumbnail {\n  background: black;\n  border-color: black\n}\n \n\n.home {\n  font-family: \"GeezaPro\";\n  font-size: 16px;\n  line-height: 14px;\n  letter-spacing: 0;\n}\n \n\n.about {\n  font-family: \"GeezaPro\";\n  font-size: 13px;\n  line-height: 15px;\n  letter-spacing: 0;\n}\n \n\n/* ============Navbar start======= */\n \n\n.homeservice{\n    width: 174px;\n    height: 52px;\n    font-family: GeezaPro;\n    font-size: 18px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #ffffff;\n  }\n \n\n.about-us1{\n    \n      width: 143px;\n      height: 52px;\n      font-family: GeezaPro;\n      font-size: 18px;\n      font-weight: normal;\n      font-style: normal;\n      font-stretch: normal;\n      line-height: normal;\n      letter-spacing: normal;\n      color: #ffffff;\n    \n  }\n \n\n.services{\n    width: 70px;\n    height: 49px;\n    font-family: GeezaPro;\n    font-size: 18px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #ffffff;\n  }\n \n\n.supplier{\n    width: 100px;\n    height: 25px;\n    font-family: GeezaPro;\n    font-size: 18px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #ffffff;\n  }\n \n\n.contactus{\n  width: 102px;\n  height: 76px;\n  font-family: GeezaPro;\n  font-size: 18px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #ffffff;\n}\n \n\n.Rectangle-2 {\n  width: 123px;\n  height: 41px;\n  border-radius: 5px;\n  background-color: #ff0000;\n}\n \n\n/* ========== navabar end=========== */\n \n\n/* ===Mobile navbar start=========== */\n \n\n@media screen and (min-width: 320px) and (max-width: 767px){\n  .nav-bg {\n    background-color: rgba(0, 0, 0, 0.65) !important;\n  }\n\n\n\n  \n  .pt-120{\n    position: relative !important;\n    left: 256px !important;\n\n  }\n  .mt-414{\n    margin-top: 3px !important;\n  }\n\n  .mr-5, .mx-5 {\n    margin-right: 4rem!important;\n}\n\n.pad_12{\n  padding: 0 12px;\n}\n\n}\n \n\n@media screen and (max-width: 768px){\n  .nav-bg {\n    /* background-color: rgba(0, 0, 0, 0.65) !important; */\n  }\n\n  .navbar-expand-md .navbar-nav .nav-link {\n    padding-right: .0rem !important;\n    padding-left: .0rem !important;\n}\n\n  .pt-120{\n    position: relative !important;\n    left: 232px \n\n  }\n  .mt-414{\n    margin-top: 3px !important;\n  }\n\n  .mr-5, .mx-5 {\n    margin-right: 5rem!important;\n}\n\n\n\n\nli[_ngcontent-c1] {\n  float: left;\n  padding: 0 12px !important;\n}\n\n\n}\n \n\n@media screen and (max-width: 1024px){\n  .nav-bg {\n    /* background-color: rgba(0, 0, 0, 0.65) !important; */\n  }\n\n\n\n  .pt-120{\n    position: relative !important;\n    left: 249px \n\n  }\n  .mt-414{\n    margin-top: 3px !important;\n  }\n\n  .mr-5, .mx-5 {\n    margin-right: 5rem!important;\n}\n\n\n\n\nli[_ngcontent-c1] {\n  float: left;\n  padding: 0 12px !important;\n}\n\n\n}\n \n\n/* =========Mobile navbar End========== */\n \n\n/* ===========HEADING STYLE=========== */\n \n\n.saned_para{\n  font-size:16px;\n  color: #333; \n  font-family: GeezaPro;\n}\n \n\n.saned_heading{\n  font-size: 28px;\n  font-family: GeezaPro;\n\n}\n \n\n/* ==============HEADING STYLE========== */"

/***/ }),

/***/ "./src/app/contactus-arabic/contactus-arabic.component.html":
/*!******************************************************************!*\
  !*** ./src/app/contactus-arabic/contactus-arabic.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\n  section.sec1 {\n  background: url(natures-temples.png);\n  background-size: cover;\n}\n\nsection.banner {\n  background: url(Group.png);\n  background-size: cover;\n  margin-left: 15px;\n}\n\nsection.sec2 {\n  padding: 100px;\n  box-sizing: border-box;\n}\n\n  /* ===========================footer style end================ */\n</style>\n\n\n\n<app-nav-bg [head]=\"head\" [bg]=\"bg\" [nav_arabic]=\"nav_arabic\" ></app-nav-bg>\n<!-- =======arabic -->\n<div>\n  \n  <div class=\"container\">\n    <br>\n   \n    <div class=\"container\">\n\n      <div class=\"row\" dir=\"rtl\">\n        <!-- <div class=\"col-md-1\"></div> -->\n        <div class=\"col-md-5 text-justify\">\n          <br><br>\n          <a class=\"saned_heading\">عنوان الشركة:</a>\n\n          <p class=\"saned_para\">\n            برج 400 ،18 الطابق ،<br>\n            طريق الميناء ، الشارقة ،<br>\n            ص.ب 4648 الشارقة - الإمارات العربية المتحدة\n            <br>\n            <font color=\"\" dir=\"rtl\"> رقم الهاتف: 6555 506 6 971+ </font>\n            <br>\n            <font color=\"\" dir=\"rtl\"> الفاكس: 2331 572 6 971+ </font>\n            <br>\n            البريد الإلكتروني: helpdesk@saned.ae<br>\n            <a routerLink=\"login-arbic\">www.saned.ae</a>\n          </p>\n        </div>\n        <div class=\"col-md-1\"></div>\n        <div class=\"col-md-6\">\n          <br>\n          <a target=\"_blank\"\n            href=\"http://maps.google.com/?q=Tower 400,18th Floor,Mina Road Sharjah,PO Box 4648 Sharjah - UAE \">\n            <img src=\"./assets/SHARJAHmap.png\" class=\"img-thumbnail\">\n          </a>\n        </div>\n      </div>\n      <br><br>\n    </div>\n\n  </div>\n  <!-- =============footer arabic start====== -->\n  <app-footer></app-footer>\n\n  <!-- ========footer arabic end====== -->\n</div>"

/***/ }),

/***/ "./src/app/contactus-arabic/contactus-arabic.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/contactus-arabic/contactus-arabic.component.ts ***!
  \****************************************************************/
/*! exports provided: ContactusArabicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusArabicComponent", function() { return ContactusArabicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ng2_simple_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-simple-global */ "./node_modules/ng2-simple-global/index.js");
/* harmony import */ var ng2_simple_global__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_simple_global__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContactusArabicComponent = /** @class */ (function () {
    function ContactusArabicComponent(apiService, router, sg) {
        this.apiService = apiService;
        this.router = router;
        this.sg = sg;
        this.navbarOpen = false;
        this.head = "اتصل بنا";
        this.bg = "bg_img";
        this.nav_arabic = "/contactus";
        this.model = {};
        this.data = {};
        this.Lang = {};
    }
    ContactusArabicComponent.prototype.toggleNavbar = function () {
        this.navbarOpen = !this.navbarOpen;
    };
    ContactusArabicComponent.prototype.ngOnInit = function () {
    };
    ContactusArabicComponent.prototype.newsletter = function (model) {
        var _this = this;
        this.apiService.newsletter(model).subscribe(function (response) {
            _this.data = response;
            console.log(_this.data);
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()(_this.data.Message + "<br>" + "اشتركت بنجاح في النشرة الإخبارية");
        });
    };
    ;
    ContactusArabicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contactus-arabic',
            template: __webpack_require__(/*! ./contactus-arabic.component.html */ "./src/app/contactus-arabic/contactus-arabic.component.html"),
            styles: [__webpack_require__(/*! ./contactus-arabic.component.css */ "./src/app/contactus-arabic/contactus-arabic.component.css")]
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["APIService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ng2_simple_global__WEBPACK_IMPORTED_MODULE_4__["SimpleGlobal"]])
    ], ContactusArabicComponent);
    return ContactusArabicComponent;
}());



/***/ }),

/***/ "./src/app/contactus/contactus.component.css":
/*!***************************************************!*\
  !*** ./src/app/contactus/contactus.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');\n\n/* ===========navbar start========= */\n\n.Rectangle-2 {\n  width: 123px;\n  height: 41px;\n  border-radius: 5px;\n  background-color: #ff0000;\n}\n\n.Contact-Us {\n  width: 90px;\n  height: 24px;\n  font-family: Roboto;\n  font-size: 18px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #ffffff;\n}\n\n.Suppliers {\n  width: 77px;\n  height: 24px;\n  font-family: Roboto;\n  font-size: 18px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #ffffff;\n}\n\n.Services {\n  width: 70px;\n  height: 24px;\n  font-family: Roboto;\n  font-size: 18px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #ffffff;\n}\n\n.About-Us-Copy {\n  width: 75px;\n  height: 24px;\n  font-family: Roboto;\n  font-size: 18px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #ffffff;\n}\n\n.Home-Copy {\n  width: 49px;\n  height: 24px;\n  font-family: Roboto;\n  font-size: 18px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #ffffff;\n}\n\n.WHAT-IS-Aman- {\n  width: 400px;\nheight: 53px;\nfont-family: Roboto;\nfont-size: 31px;\nfont-weight: normal;\nfont-style: normal;\nfont-stretch: normal;\nline-height: 1.18;\nletter-spacing: normal;\ncolor: var(--black);\n}\n\n.Sharjah-Asset-Manage {\n  /* width: 535px; */\n  /* height: 283px; */\n  font-family: Roboto;\n  font-size: 16px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  /* color: black */\n}\n\n/* ======navbar end===== */\n\n/* ====================responsive================= */\n\n.mt_20{\n  margin-top: 0px;\n}\n\n.wt_237{\nwidth: 237px;\n}\n\n.wt-con{\nwidth: 232px;\n}\n\n.wt_140{\nwidth: 140% !important;\n}\n\n/* mobile media query */\n\n@media screen and (min-device-width: 320px) and (max-device-width: 760px){\n.nav-bg {\n  background-color: rgba(0, 0, 0, 0.65) !important;\n}\n\n.pt-120{\n  position: relative;\n  right: 153px;\n}\n.mt-414{\n  margin-top: 0px !important;\n}\n.ft_18 {\n  font-size: 18px;\n}\n\n\n\n}\n\n/* css for ipad */\n\n@media screen and (min-device-width: 768px) and (max-device-width: 1022px){\n.nav-bg {\n  /* background-color: rgba(0, 0, 0, 0.65) !important; */\n}\n.maxwt_19{\n  max-width: 19%;\n}\n.wt_135{\nwidth: 135px !important;\n}\n.map_wt{\n  width: 175px !important;\n}\n.ml_135{\n  margin-left: 0px !important;\n}\n.ml_16{\n  margin-left: -16px !important;\n}\n.logo_wt{\nwidth: 109px;\n}\n.col-sm-2{\n  width : 0% ! important;\n}\n\n.mt_20{\n  \n    margin-top: 4px !important; \n  \n  shape-margin: 0px !important;\n}\n\n.ht_80{\n  height:54px !important\n}\n\n.pt-120{\n  position: relative;\n  right: 79px;\n}\n.mt-414{\n  margin-top:0px !important;\n}\n\n.ml-5, .mx-5 {\n  margin-left: 2.2rem !important;\n}\n\n.pad_0{\npadding:0 0px !important;\n}\n.ft_18 {\n  font-size: 30px;\n}\n\n.wt_106{\n  width: 106% !important;\n}\n\n\n}\n\n@media screen and (max-device-width: 1024px){\n.nav-bg {\n  /* background-color: rgba(0, 0, 0, 0.65) !important; */\n}\n.maxwt_19{\n  max-width: 19%;\n}\n.wt_135{\nwidth: 135px !important;\n}\n.map_wt{\n  width: 175px !important;\n}\n.ml_135{\n  margin-left: 0px !important;\n}\n/* .ml_16{\n  margin-left: -16px !important;\n} */\n.logo_wt{\nwidth: 109px;\n}\n.col-sm-2{\n  /* width : 0% ! important; */\n}\n\n.mt_20{\n  \n    margin-top: 4px !important; \n  \n  shape-margin: 0px !important;\n}\n\n/* .ht_80{\n  height:54px !important\n} */\n\n.pt-120{\n  position: relative;\n  /* right: 79px; */\n}\n.mt-414{\n  margin-top:0px !important;\n}\n\n.ml-5, .mx-5 {\n  margin-left: 2.2rem !important;\n}\n\n.pad_0{\npadding:0 0px !important;\n}\n.ft_18 {\n  font-size: 30px;\n}\n\n.wt_106{\n  width: 106% !important;\n}\n\n\n}\n\n/* ============mobile============ */\n\nbody {\n  font-family: Arial, Helvetica, sans-serif;\n}\n\nnav {\n  width: 100%;\n  height: 50px;\n  background: rgba(0, 0, 0, .8);\n  border-top: 1px solid rgba(255, 255);\n  border-bottom: 1px solid rgba(255, 255);\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0px;\n  z-index: 99;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: sans-serif;\n  /* background: #000; */\n}\n\nheader {\n  padding: 10px 100px;\n  box-sizing: border-box;\n}\n\nsection {\n  width: 100%;\n  height: 100vh;\n}\n\n.dropdown {\n  float: left;\n  overflow: hidden;\n}\n\n.dropdown .dropbtn {\n  font-size: 16px;\n  border: none;\n  outline: none;\n  color: white;\n  padding: 14px 16px;\n  background-color: inherit;\n  font-family: inherit;\n  margin: 0;\n}\n\n.navbar a:hover,\n.dropdown:hover .dropbtn {\n  /* background-color: red; */\n}\n\n.dropdown-content {\n  display: block;\n  position: absolute;\n  background-color: red;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n}\n\n.dropdown-content a {\n  float: none;\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n  text-align: left;\n}\n\n.dropdown-content a:hover {\n  background-color: #ddd;\n}\n\nul {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n\nul li a {\n  text-decoration: none;\n  color: #e74c3c;\n  font-family: Tahoma, Arial;\n}\n\n.navigation {\n  background-color: #35353500;\n  width: 75%;\n  margin: 20px auto;\n  min-height: 50px;\n}\n\n.navigation>li {\n  float: left;\n  padding: 0 20px;\n}\n\n.navigation>li>a {\n  line-height: 50px;\n  color: #FFF;\n}\n\n.navigation .menu {\n  position: relative\n}\n\n.navigation .menu .submenu {\n  position: absolute;\n  /* width: 200px; */\n  box-shadow: 0px 1px 1px #CCC;\n  display: none;\n  transition: all .5s ease-in-out;\n}\n\n.navigation .menu:hover .submenu {\n  display: block\n}\n\n.navigation .menu .submenu:before {\n  content: \"\";\n  position: absolute;\n  display: block;\n  border-width: 0 6px 6px 6px;\n  border-style: solid;\n  border-color: #FFF transparent;\n  top: -6px;\n  left: 5px\n}\n\n.navigation .menu .submenu li {\n  padding: 5px 10px;\n  transition: all .5s ease-in-out;\n}\n\n.navigation .menu .submenu li:hover {\n  background-color: #e74c3c;\n}\n\n.navigation .menu .submenu li:hover a {\n  color: #FFF;\n  /* padding: 0 11px; */\n}\n\n.dropdown:hover .dropdown-content {\n  display: block;\n}\n\nnav {\n  width: 100%;\n  height: 50px;\n  background: rgba(0, 0, 0, .8);\n  border-top: 1px solid rgba(255, 255);\n  border-bottom: 1px solid rgba(255, 255);\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0px;\n  z-index: 99\n}\n\nnav ul {\n  display: flex;\n  margin: 0px;\n  padding: 0px;\n  float: right;\n}\n\nnav ul li {\n  list-style: none;\n}\n\nnav ul {\n  display: flex;\n\n  padding: 0px;\n  /* float: ; */\n}\n\nnav ul li a {\n  display: block;\n  color: #fff;\n  padding: 0 20px;\n  text-decoration: none;\n  text-transform: uppercase;\n  font-family: Roboto;\n  font-weight: bold;\n  line-height: 50px;\n}\n\n/* ==============footer style start ========= */\n\n.footer {\n  /* position: fixed; */\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background-color: black;\n  color: white;\n  text-align: center;\n  /* height: 75px; */\n}\n\n.container1 {\n  background: black;\n  color: white\n}\n\n.social:hover {\n  -webkit-transform: scale(1.1);\n  -moz-transform: scale(1.1);\n  -o-transform: scale(1.1);\n}\n\n.social {\n  -webkit-transform: scale(0.8);\n  /* Browser Variations: */\n\n  -moz-transform: scale(0.8);\n  -o-transform: scale(0.8);\n  -webkit-transition-duration: 0.5s;\n  -moz-transition-duration: 0.5s;\n  -o-transition-duration: 0.5s;\n}\n\n.fa {\n  padding: 20px;\n  font-size: 30px;\n  width: 30px;\n  text-align: center;\n  text-decoration: none;\n  border-radius: 50%;\n}\n\n.img-thumbnail {\n  background: black;\n  border-color: black\n}\n\n.home {\n  font-family: Roboto-Bold;\n  font-size: 16px;\n  line-height: 14px;\n  letter-spacing: 0;\n}\n\n.about {\n  font-family: Roboto;\n  font-size: 13px;\n  line-height: 15px;\n  letter-spacing: 0;\n}\n\n.intro-2 {\n  background: url(\"/assets/hero_image.png\")no-repeat center center;\n  background-size: cover;\n  height: 623px;\n}"

/***/ }),

/***/ "./src/app/contactus/contactus.component.html":
/*!****************************************************!*\
  !*** ./src/app/contactus/contactus.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-nav-bg-ar [head]=\"head\" [bg]=\"bg\" [nav_arabic]=\"nav_arabic\" ></app-nav-bg-ar>\n\n\n\n<div class=\"container\">\n  <br>\n  <!-- <h3 class=\"text-center\"><b>Contact Us</b></h3> -->\n  <div class=\"container\">\n\n    <div class=\"row\">\n      <!-- <div class=\"col-md-1\"></div> -->\n      <div class=\"col-md-5\">\n        <br><br>\n        <a class=\"WHAT-IS-Aman-\">Company Address:</a>\n\n        <p class=\"Sharjah-Asset-Manage\">\n          Tower 400, 18th Floor,<br>\n          Mina Road, Sharjah, <br>\n          PO Box 4648 Sharjah - UAE, <br>\n          Phone: +971 6 506 6555,<br>\n          Fax: +971 6 572 2331,<br>\n          Email: helpdesk@saned.ae<br>\n          <a routerLink=\"login\">www.saned.ae</a>\n        </p>\n\n      </div>\n      <div class=\"col-md-1\"></div>\n      <div class=\"col-md-6\">\n        <br>\n        <a target=\"_blank\"\n          href=\"http://maps.google.com/?q=Tower 400,18th Floor,Mina Road Sharjah,PO Box 4648 Sharjah - UAE \">\n          <img src=\"./assets/SHARJAHmap.png\" class=\"img-thumbnail\">\n        </a>\n      </div>\n    </div>\n    <br>\n  </div>\n</div>\n<!--=====footer english start==-->\n<app-loginv2></app-loginv2>\n<!-- ================footer  english end== -->\n\n<!-- =======arabic -->"

/***/ }),

/***/ "./src/app/contactus/contactus.component.ts":
/*!**************************************************!*\
  !*** ./src/app/contactus/contactus.component.ts ***!
  \**************************************************/
/*! exports provided: ContactusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusComponent", function() { return ContactusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ng2_simple_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-simple-global */ "./node_modules/ng2-simple-global/index.js");
/* harmony import */ var ng2_simple_global__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_simple_global__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContactusComponent = /** @class */ (function () {
    function ContactusComponent(apiService, router, sg) {
        this.apiService = apiService;
        this.router = router;
        this.sg = sg;
        this.navbarOpen = false;
        this.head = "Contact Us";
        this.bg = "bg_img";
        this.nav_arabic = "/contactus-arabic";
        this.Lang = {};
        this.model = {};
        this.data = {};
    }
    ContactusComponent.prototype.toggleNavbar = function () {
        this.navbarOpen = !this.navbarOpen;
    };
    ContactusComponent.prototype.ngOnInit = function () {
    };
    ContactusComponent.prototype.newsletter = function (model) {
        var _this = this;
        this.apiService.newsletter(model).subscribe(function (response) {
            _this.data = response;
            console.log(_this.data);
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()(_this.data.Message + "<br>" + "اشتركت بنجاح في النشرة الإخبارية");
        });
    };
    ;
    ContactusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contactus',
            template: __webpack_require__(/*! ./contactus.component.html */ "./src/app/contactus/contactus.component.html"),
            styles: [__webpack_require__(/*! ./contactus.component.css */ "./src/app/contactus/contactus.component.css")]
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["APIService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ng2_simple_global__WEBPACK_IMPORTED_MODULE_4__["SimpleGlobal"]])
    ], ContactusComponent);
    return ContactusComponent;
}());



/***/ }),

/***/ "./src/app/facilityarabic/facilityarabic.component.css":
/*!*************************************************************!*\
  !*** ./src/app/facilityarabic/facilityarabic.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".head{\n  font-size: 40px;\n    font-family: GeezaPro;\n    font-weight: 500;\n  \n}\n\n.contant{\n  font-size: 16px;\n  color: #333;\n  font-family: GeezaPro;\n \n}\n\n.subhead{\n  font-size: 26px;\n  font-family: GeezaPro;\n  font-weight: bold;\n  text-decoration: underline;\n}\n\n.subhead-unbold{\n  font-size: 26px;\n  font-family: GeezaPro;\n  font-weight: 500;\n\n}\n\n.sticky {\n  position: -webkit-sticky;\n  position: sticky;\n  width: 80%;\n  height: auto;\n  top:50px;\n  /* background-color: yellow; */\n  /* padding: 50px; */\n  /* margin-top: 200px; */\n  padding-top: 30px;\n  font-size: 20px;\n}\n\n.cardCr{\n  border: 2px solid gray;\n}"

/***/ }),

/***/ "./src/app/facilityarabic/facilityarabic.component.html":
/*!**************************************************************!*\
  !*** ./src/app/facilityarabic/facilityarabic.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-bg [head]=\"head\" [bg]=\"bg\" [nav_arabic]=\"nav_arabic\"></app-nav-bg>\n\n<div class=\"container-fluid\" dir=\"rtl\">\n\n    <div class=\"card my-4\">\n\n        <div class=\"row text-justify my-4\">\n\n            <div class=\"col-sm-7 col-md-7\">\n                <div class=\"mx-3\">\n                    <div>\n                        <h1 class=\"head mt-4\">المقدمة</h1>\n                        <p class=\"contant\"> تقدم شركة ساند أفضل الخدمات في فئتها في جميع الصناعات والمواقع المتعددة التي\n                            تتميز بنموذج تقديم خدمة ذات جودة عالية، يقوم مبدأ عمل الشركة على أن يكون مكملا للأهداف\n                            الإستراتيجية والتشغيلية لأي مؤسسة. وعليه فإننا في ساند نقوم بدمج الوظائف الأساسية مثل\n                            العمليات والتقنيات مع الأفراد لضمان المرونة والتكامل المستقبلي ودعمها من خلال أحدث الأنظمة\n                            الحاسوبية. تقوم ساند بالمشاركة مع العملاء بتحديث وتطوير مستوى الخدمة بشكل مستمر وزيادة\n                            الكفاءة التشغيلية للأنظمة المراد صيانتها، مما ينتج عنه تقليل الوقت اللازم للصيانة وزيادة\n                            الإيرادات بخفض تكاليف التشغيل، والقضاء على الازدواجية بين العميل وشركة التشغيل.</p>\n\n                        <h1 class=\"head mt-5\">الخدمات الأساسية</h1>\n                        <h2 class=\"subhead mt-2\">1.خدمات إدارة المرافق</h2>\n\n                        <ul class=\"contant\">\n                            <li>الخدمات التقنية والفنية التخصصية</li>\n                            <li>خدمات غير التقنية</li>\n                            <li>خدمات العملاء</li>\n                            <li>خدمات إدارة وتوفير استهلاك الطاقة</li>\n                        </ul>\n\n                        <h2 class=\"subhead mt-4\">2.الخدمات الإستشارية</h2>\n\n                        <ul class=\"contant\">\n                            <li>التصميم والاستشارات</li>\n                            <li>إدارة المشارويع</li>\n                            <li>الأعمال الداخلية والديكور</li>\n                            <li>إدارة مشتريات</li>\n                        </ul>\n\n                        <h2 class=\"subhead mt-4\">3. خدمات الصيانة الصناعية</h2>\n\n                        <ul class=\"contant\">\n                            <li>خدمات دعم الإنتاج عبر الإنترنت</li>\n                            <li>خدمات دعم الإنتاج دون اتصال</li>\n                            <li>إدارة المستودعات</li>\n                        </ul>\n\n                    </div>\n\n                    <div class=\"mr-4 mr-md-5 mr-sm-5\">\n\n                        <h2 class=\"subhead mt-4\">خدمات إدارة المرافق</h2>\n                        <!-- <h4 class=\"subhead-unbold\">الخدمات التقنية والفنية التخصصية</h4> -->\n                        <ul class=\"contant\">\n                            <li>الخدمات التقنية والفنية التخصصية</li>\n                            <li>الصيانة الميكانيكية والكهربائية</li>\n                            <li>إدارة أنظمة المباني</li>\n                            <li>صيانة المحطات</li>\n                            <li>نظام التبريد (التشغيل والصيانة)</li>\n\n                            <li>السباكة وإدارة المياه</li>\n\n                            <li>إدارة الطاقة</li>\n\n                            <li>تنظيف واجهة المباني</li>\n                            <li>تنظيف السجاد والتنجيد</li>\n                            <li>تنظيف و بلورة الرخام</li>\n                            <li>إدارة الطاقة</li>\n                        </ul>\n\n                        <h2 class=\"subhead-unbold mt-4\">خدمات غير تخصصية</h2>\n\n                        <ul class=\"contant\">\n                            <li>خدمات النظافة</li>\n                            <li>خدمات الحراسة</li>\n                            <li>عمليات البستنة وصياننتها</li>\n                            <li>مكافحة الحشرات</li>\n                            <li>توريد العمالة</li>\n\n                        </ul>\n\n                        <p class=\"contant\">ويتم تفصيل هذه الخدمات لملاءمة كل عميل كل حسب حاجته</p>\n\n                        <h2 class=\"subhead mt-4\">الخدمات الإستشارية</h2>\n\n                        <p class=\"contant\">تقدم شركة ساند شراكات مع مالكي المباني والمستخدمين لتسهيل الانتقال الفعال،\n                            وتحقيق أقصى عائد بخفض تكاليف التشغيل مع الحفاظ على مستويات خدمة عالية.</p>\n\n\n\n                        <p class=\"contant\">بالإضافة إلى توفير خدمات إدارة المرافق الأساسية ، فإن ساند تقدم حلولًا\n                            لعملائنا حول:</p>\n\n                        <ul class=\"contant\">\n                            <li>الحسابات والإدارة</li>\n                            <li>صيانة كاملة للممتلكات</li>\n                            <li>الاتصال والعلاقات العامة مع الوكالات الحكومية</li>\n                            <li>الإشراف المدني</li>\n\n                            <li>إدارة المقاولين</li>\n\n                            <li>الصحة والسلامة والأمن والبيئة</li>\n                            <li>الأمور القانونية والتراخيص</li>\n                            <li>الأمور القانونية والتراخيص</li>\n                            <li>إدارة الإتصال والتعامل مع العملاء</li>\n                            <li>إدارة الزوار</li>\n                            <li>إدارة مواقف السيارات</li>\n\n                        </ul>\n\n                        <h2 class=\"subhead\">الخدمات الصناعية</h2>\n\n                        <p class=\"contant\">تقدم شركة ساند خدمات صناعية ذات مستوى عالمي مع خبرة لا مثيل لها ونتائج تشمل\n                            جميع الأنشطة ذات الصلة في الصناعات المختلفة ، ومشاريع البنية التحتية ، ومحطات التبريد\n                            العملاقة، والمحلات بما في ذلك التجميع والتعبئة والتخزين والدعم اللوجستي وخدمات الإرسال. يتم\n                            توسيع خدماتنا لتشمل العديد من وحدات التصنيع الرائدة ومجموعة من الصناعات مثل\n\n                            السيارات، الزجاج ، الفولاذ ، المكونات الكهربائية والإلكترونية ، الآلات الثقيلة ، المسابك ،\n                            الإطارات ، الكيماويات المتخصصة ، البنزين بالمنتجات الخ...\n                        </p>\n\n                        <p class=\"contant\">بدعم من مجموعة كبيرة من الموارد مع مجموعات متنوعة من المهارات لتتناسب مع\n                            متطلبات وحدات التصنيع ، نستطيع زيادة أو خفض الأنشطة بفعالية، في إطار زمني محدد، مع تطوير\n                            وصيانة قاعدة بيانات من القوى العاملة المدربة كإجراء احترازي لجميع الأوقات.\n                        </p>\n\n                        <p class=\"contant\">يتم تقديم نماذج عقود مختلفة مثل نماذج التوظيف المخصصة أو نماذج تقديم الخدمات\n                            على أساس الإنتاج.\n                        </p>\n\n                        <p class=\"contant\">إن التزامنا تجاه الأشخاص والعمليات والجودة المتسقة هي أهم ثلاثة جوانب من\n                            أعمالنا.</p>\n\n\n\n                        <h4 class=\"subhead-unbold\">عمليات الجودة لدينا</h4>\n\n                        <ul class=\"contant\">\n                            <li>تحقيق أعلى مستوى من الجودة</li>\n                            <li>تعزيز رضا العملاء برفع الأداء والتحسين المستمر في معايير الجودة</li>\n                            <li>المساهمة في الصناعة مع الابتكارات المستمرة والتحسينات على الجودة والعمليات في أنظمة\n                                إدارة الجودة لدينا</li>\n                        </ul>\n\n                        <h2 class=\"subhead-unbold\">الكادر الفني والعملي</h2>\n\n                        <p class=\"contant\">إن خدماتنا تتمحور حول العاملين ولذلك نولي أهمية كبيرة لتعزيز المهارات المهنية\n                            المبرمجة للقوى العاملة. ولضمان ذلك نولي أهمية كبيرة للتدريب المستمر والمشاركة في المعرفة\n                            التميز في إنتاج العمل في جميع المجالات\n\n                        </p>\n\n                        <h2 class=\"subhead-unbold\">العمليات</h2>\n\n                        <p class=\"contant\">تضمن خدمات المراقبة المجدولة الدورية والجودة مع التحسين المستمر تدفق العملية\n                            مما يؤدي إلى ثقافة مكان أفضل للعمل عبر مرافق التصنيع الخاصة بالعملاء.\n\n                        </p>\n\n                        <p class=\"contant\">تدرك شركة ساند مدى حساسية جميع الأعمال التجارية وسريتها ، كما أن خدماتنا\n                            مصممة لدعم أعمال العملاء وتمكين موظفيهم من العمل في المستويات المثلى. من الضروري أن تعمل\n                            المرافق بسلاسة لضمان هدر أقل للوقت\n\n                        </p>\n                    </div>\n                </div>\n            </div>\n\n\n            <div class=\"col-sm-5 col-md-5 text-center\">\n\n                <img src=\"./assets/facility_image1.png\" srcset=\"./assets/facility_image1@2x.png 2x,\n                ./assets/facility_image1@3x.png 3x\" class=\"img-fluid sticky\">\n\n            </div>\n\n        </div>\n    </div>\n</div>\n\n<app-footer></app-footer>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/facilityarabic/facilityarabic.component.ts":
/*!************************************************************!*\
  !*** ./src/app/facilityarabic/facilityarabic.component.ts ***!
  \************************************************************/
/*! exports provided: FacilityarabicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacilityarabicComponent", function() { return FacilityarabicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FacilityarabicComponent = /** @class */ (function () {
    function FacilityarabicComponent() {
        this.head = "إدارة المرافق المتكاملة";
        this.bg = "bg_img";
        this.nav_arabic = "/facilitymanagement";
        this.Lang = {};
    }
    FacilityarabicComponent.prototype.ngOnInit = function () {
    };
    FacilityarabicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-facilityarabic',
            template: __webpack_require__(/*! ./facilityarabic.component.html */ "./src/app/facilityarabic/facilityarabic.component.html"),
            styles: [__webpack_require__(/*! ./facilityarabic.component.css */ "./src/app/facilityarabic/facilityarabic.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FacilityarabicComponent);
    return FacilityarabicComponent;
}());



/***/ }),

/***/ "./src/app/facilitymanagement/facilitymanagement.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/facilitymanagement/facilitymanagement.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');\n.sticky {\n  position: -webkit-sticky;\n  position: sticky;\n  top:50px;\n  /* background-color: yellow; */\n  /* padding: 50px; */\n  font-size: 20px;\n  width: 80%; \n  height: auto;\n}\n.intro-2 {\n    background: url(\"/assets/hero_image.png\")no-repeat center center;\n    background-size: cover;\n    height: 635px;\n }\n.aboutus {\n    background: url(\"/assets/group-4.png\")no-repeat center center;\n    /* background-size: cover; */\n    height: 330px;\n    border-radius: 18px;\n    \n }\n/* ===========aliign start============ */\n/* ====================responsive================= */\n.mt_20{\n  margin-top: 0px;\n}\n.wt_237{\nwidth: 237px;\n}\n.wt-con{\nwidth: 232px;\n}\n.wt_140{\nwidth: 140% !important;\n}\n/* mobile media query */\n@media screen and (min-device-width: 320px) and (max-device-width: 760px){\n\n  \n\n  .img{\n    \n    width: \"100%\"!important;\n    height:\"100%\" !important\n   \n  }\n  \n.nav-bg {\n  background-color: rgba(0, 0, 0, 0.65) !important;\n}\n\n.pt-120{\n  position: relative;\n  right: 153px;\n}\n.mt-414{\n  margin-top: 0px !important;\n}\n.ft_18 {\n  font-size: 18px;\n}\n\n\n\n}\n/* css for ipad */\n@media screen and (min-device-width: 768px) and (max-device-width: 1022px){\n.nav-bg {\n  /* background-color: rgba(0, 0, 0, 0.65) !important; */\n}\n.maxwt_19{\n  max-width: 19%;\n}\n.wt_135{\nwidth: 135px !important;\n}\n.map_wt{\n  width: 175px !important;\n}\n.ml_135{\n  margin-left: 0px !important;\n}\n.ml_16{\n  margin-left: -16px !important;\n}\n.logo_wt{\nwidth: 109px;\n}\n.col-sm-2{\n  width : 0% ! important;\n}\n\n.mt_20{\n  \n    margin-top: 4px !important; \n  \n  shape-margin: 0px !important;\n}\n\n.ht_80{\n  height:54px !important\n}\n\n.pt-120{\n  position: relative;\n  right: 79px;\n}\n.mt-414{\n  margin-top:0px !important;\n}\n\n.ml-5, .mx-5 {\n  margin-left: 2.2rem !important;\n}\n\n.pad_0{\npadding:0 0px !important;\n}\n.ft_18 {\n  font-size: 30px;\n}\n\n.wt_106{\n  width: 106% !important;\n}\n\n\n}\n@media screen and (max-device-width: 1024px){\n.nav-bg {\n  /* background-color: rgba(0, 0, 0, 0.65) !important; */\n}\n.maxwt_19{\n  max-width: 19%;\n}\n.wt_135{\nwidth: 135px !important;\n}\n.map_wt{\n  width: 175px !important;\n}\n.ml_135{\n  margin-left: 0px !important;\n}\n/* .ml_16{\n  margin-left: -16px !important;\n} */\n.logo_wt{\nwidth: 109px;\n}\n.col-sm-2{\n  /* width : 0% ! important; */\n}\n\n.mt_20{\n  \n    margin-top: 4px !important; \n  \n  shape-margin: 0px !important;\n}\n\n/* .ht_80{\n  height:54px !important\n} */\n\n.pt-120{\n  position: relative;\n  /* right: 79px; */\n}\n.mt-414{\n  margin-top:0px !important;\n}\n\n.ml-5, .mx-5 {\n  margin-left: 2.2rem !important;\n}\n\n.pad_0{\npadding:0 0px !important;\n}\n.ft_18 {\n  font-size: 30px;\n}\n\n.wt_106{\n  width: 106% !important;\n}\n\n\n}\n/* =============mobile============ */\n.Sign-In {\n  width: 57px;\n  height: 24px;\n  font-family: Roboto;\n  font-size: 15px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #ffffff;\n}\n.Rectangle-2-Copy-2 {\n  width: 1440px;\n  height: 311px;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);\n  background-image: linear-gradient(65deg, var(--black), var(--black));\n}\n.Subscribe {\n  width: 54px;\n  height: 14px;\n  opacity: 0.82;\n  font-family: Roboto;\n  font-size: 12px;\n  font-weight: 500;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #ff0000;\n}\n.Enter-your-mail-id {\n  width: 92px;\n  height: 14px;\n  opacity: 0.82;\n  font-family: Roboto;\n  font-size: 12px;\n  font-weight: 300;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #ffffff;\n}\n.Shape {\n  width: 17px;\n  height: 17px;\n  background-color: #ffffff;\n}\n.arabic{\n  width: 28px;\n  height: 49px;\n  font-family: GeezaPro;\n  font-size: 12px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #ffffff;\n}\n.Oval {\n  width: 9px;\n  height: 9px;\n  background-color: #ff1100;\n}\n.English {\n  width: 40px;\n  height: 28px;\n  font-family: Roboto;\n  font-size: 12px;\n  font-weight: 500;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #ff1100;\n}\n/* ===========navbar start========= */\n.Rectangle-2 {\n  height: 35px;\n    width: 100px;\n    padding: 0;\n  border-radius: 5px;\n  background-color: #ff0000;\n}\n.Contact-Us {\n  width: 90px;\n  height: 24px;\n  font-family: Roboto;\n  font-size: 18px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #ffffff;\n}\n.Suppliers {\n  width: 77px;\n  height: 24px;\n  font-family: Roboto;\n  font-size: 18px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #ffffff;\n}\n.Services {\n  width: 70px;\n  height: 24px;\n  font-family: Roboto;\n  font-size: 18px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #ffffff;\n}\n.About-Us-Copy {\n  width: 75px;\n  height: 24px;\n  font-family: Roboto;\n  font-size: 18px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #ffffff;\n}\n.Home-Copy {\n  width: 49px;\n  height: 24px;\n  font-family: Roboto;\n  font-size: 18px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #ffffff;\n}\n/* ======navbar end===== */\n.Rectangle-5-Copy {\n  width: 239px;\n  height: 59px;\n  border-radius: 8px;\n  background-color: #f34235;\n}\n.Mission {\n  width: 79px;\n  height: 48px;\n  font-family: Roboto;\n  font-size: 18px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 2.22;\n  letter-spacing: normal;\n  color: var(--black);\n}\n.Utilizing-the-latest {\n  /* width: 518px; */\n  height: 100px;\n  font-family: Roboto;\n  font-size: 16px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: var(--black);\n}\n.To-be-among-the-best {\n  /* width: 519px; */\n  height: 81px;\n  font-family: Roboto;\n  font-size: 16px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: var(--black);\n}\n.Vision {\n  width: 65px;\n  height: 40px;\n  font-family: Roboto;\n  font-size: 18px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 2.22;\n  letter-spacing: normal;\n  color: var(--black);\n}\n/* //====================text font size */\n.WHAT-IS-Aman-2 {\n  width: 600px;\nheight: 53px;\nfont-family: Roboto;\nfont-size: 22px;\nfont-weight: normal;\nfont-style: normal;\nfont-stretch: normal;\nline-height: 1.18;\nletter-spacing: normal;\ncolor: var(--black);\n}\n.WHAT-IS-Aman-1 {\n  width: 800px;\nheight: 53px;\nfont-family: Roboto;\nfont-size: 23px;\nfont-weight: normal;\nfont-style: normal;\nfont-stretch: normal;\nline-height: 1.18;\nletter-spacing: normal;\ncolor: var(--black);\n}\n.WHAT-IS-Aman- {\n  width: 400px;\nheight: 53px;\nfont-family: Roboto;\nfont-size: 38px;\nfont-weight: normal;\nfont-style: normal;\nfont-stretch: normal;\nline-height: 1.18;\nletter-spacing: normal;\ncolor: var(--black);\n}\n.Sharjah-Asset-Manage {\n  /* width: 535px; */\n  /* height: 283px; */\n  font-family: Roboto;\n  font-size: 16px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  /* color: black */\n}\n/* //====================text font size */\n.reg{\n  background-color: #ff0000; \n  width: -webkit-min-content; \n  width: -moz-min-content; \n  width: min-content;\n  padding: 8px 20px;\n          margin-left:14px;\n          margin-top: -10px;\n          width:123px;\n          height: 41px;\n          border-radius: 5px;\n}\n/* ===========align end============== */\n.spacer {\n  height: 100px;\n}\n.Who-We-Are-Aman-is-a {\n    /* width: 733px; */\n    height: 459px;\n    font-family: Roboto;\n    font-size: 16px;\n    text-align: justify;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: var(--black);\n  }\n.Who-We-Are-Aman-is-a .text-style-1 {\n    font-size: 24px;\n  }\n/* ==============footer style start ========= */\n.container1 {\n    background: black;\n    color: white\n  }\n.footer {\n    /* position: fixed; */\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    background-color: black;\n    color: white;\n    text-align: center;\n    /* height: 75px; */\n  }\n.container {\n    background: black;\n    color: white\n  }\n.social:hover {\n    -webkit-transform: scale(1.1);\n    -moz-transform: scale(1.1);\n    -o-transform: scale(1.1);\n  }\n.social {\n    -webkit-transform: scale(0.8);\n    /* Browser Variations: */\n    -moz-transform: scale(0.8);\n    -o-transform: scale(0.8);\n    -webkit-transition-duration: 0.5s;\n    -moz-transition-duration: 0.5s;\n    -o-transition-duration: 0.5s;\n  }\n.fa {\n    padding: 20px;\n    font-size: 30px;\n    width: 30px;\n    text-align: center;\n    text-decoration: none;\n    border-radius: 50%;\n  }\n.img-thumbnail {\n    background: black;\n    border-color: black\n  }\n.home {\n    font-family: Roboto-Bold;\n    font-size: 16px;\n    line-height: 14px;\n    letter-spacing: 0;\n  }\n.about {\n    font-family: Roboto;\n    font-size: 13px;\n    line-height: 15px;\n    letter-spacing: 0;\n  }\n/* ===========================footer style end================ */\nnav {\n    width: 100%;\n    height: 50px;\n    background: rgba(0, 0, 0, .8);\n    border-top: 1px solid rgba(255, 255);\n    border-bottom: 1px solid rgba(255, 255);\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0px;\n    z-index: 99;\n  }\nbody {\n    margin: 0;\n    padding: 0;\n    font-family: sans-serif;\n    /* background: #000; */\n  }\nheader {\n    padding: 10px 100px;\n    box-sizing: border-box;\n  }\nsection {\n    width: 100%;\n    height: 100vh;\n  }\n.dropdown {\n    float: left;\n    overflow: hidden;\n  }\n.dropdown .dropbtn {\n    font-size: 16px;\n    border: none;\n    outline: none;\n    color: white;\n    padding: 14px 16px;\n    background-color: inherit;\n    font-family: Roboto;\n    margin: 0;\n  }\n.navbar a:hover,\n  .dropdown:hover .dropbtn {\n    /* background-color: red; */\n  }\n.dropdown-content {\n    display: block;\n    position: absolute;\n    background-color: red;\n    min-width: 160px;\n    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n    z-index: 1;\n  }\n.dropdown-content a {\n    float: none;\n    color: black;\n    padding: 12px 16px;\n    text-decoration: none;\n    display: block;\n    text-align: left;\n  }\n.dropdown-content a:hover {\n    background-color: #ddd;\n  }\nul {\n    padding: 0;\n    margin: 0;\n  }\nul li a {\n    text-decoration: none;\n    color: #e74c3c;\n    font-family: Roboto;\n    /* font-size: 18px; */\n  }\n.navigation {\n    background-color: #35353500;\n    width: 75%;\n    margin: 20px auto;\n    min-height: 50px;\n  }\n.navigation>li {\n    float: left;\n    padding: 0 20px;\n  }\n.navigation>li>a {\n    line-height: 50px;\n    color: #FFF;\n  }\n.navigation .menu {\n    position: relative\n  }\n.navigation .menu .submenu {\n    position: absolute;\n    /* width: 200px; */\n    box-shadow: 0px 1px 1px #CCC;\n    display: none;\n    transition: all .5s ease-in-out;\n  }\n.navigation .menu:hover .submenu {\n    display: block;\n  }\n.navigation .menu .submenu:before {\n    content: \"\";\n    position: absolute;\n    display: block;\n    border-width: 0 6px 6px 6px;\n    border-style: solid;\n    border-color: #FFF transparent;\n    top: -6px;\n    right: 5px;\n  }\n.dropdown:hover .dropdown-content {\n    display: block;\n  }\nnav {\n    width: 100%;\n    height: 50px;\n    background: rgba(0, 0, 0, .8);\n    border-top: 1px solid rgba(255, 255);\n    border-bottom: 1px solid rgba(255, 255);\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0px;\n    z-index: 99\n  }\nnav ul {\n    display: flex;\n    margin: 0px;\n    padding: 0px;\n    float: right;\n  }\nnav ul li {\n    list-style: none;\n  }\nnav ul {\n    display: flex;\n    padding: 0px;\n    /* float: ; */\n  }\nnav ul li a {\n    display: block;\n    color: #fff;\n    padding: 0 20px;\n    text-decoration: none;\n    text-transform: uppercase;\n    font-weight: bold;\n    line-height: 50px;\n  }"

/***/ }),

/***/ "./src/app/facilitymanagement/facilitymanagement.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/facilitymanagement/facilitymanagement.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-bg-ar [head]=\"head\" [bg]=\"bg\" [nav_arabic]=\"nav_arabic\" ></app-nav-bg-ar>\n\n\n\n<div class=\"container-fluid\">\n <br>\n  <div class=\"card\" style=\"border-radius: 18px; background: white;\">\n \n    <div class=\"mx-3 mx-md-1 mx-sm-3\">\n    <div class=\"row\">\n      <div class=\"col-md-7\">\n\n        <div class=\"col-md-12\">\n        \n          <br>\n          <a class=\"WHAT-IS-Aman-\">Introduction</a>\n\n       \n          <br>\n          <p class=\"Sharjah-Asset-Manage text-justify mt-2\">SANED offers the best in\n            class\n            services across all industries and multiple sites with a\n            robust and systematic\n            service delivery model, designed to complement the strategic and operational objectives of an organization.\n            Integrating key functions like processes and technologies with people to ensure flexibility for future\n            integration and supported by the latest CAFM (computer aided facilities management) systems and platforms\n            and\n            Integrated packages in Microsoft for all backend business processes - SANED has partnered with clients to\n            deliver and maintain consistently high service levels, operational efficiency and continuous improvement.\n            Reduced down time, maximizing revenues with lower operating costs, eliminating duplications are some of our\n            key\n            result areas (KRA’s).</p>\n        </div>\n\n\n\n        <div class=\"col-md-10\">\n          <a class=\"WHAT-IS-Aman-\">Our Core services:</a>\n          <br>\n          <a class=\"WHAT-IS-Aman-1\" style=\"text-decoration: underline;\"><b>1. Facilities Management Services</b></a>\n\n          <div class=\"Sharjah-Asset-Manage mt-2 ml-5\">\n            <ul>\n\n              <li>Hard Services</li>\n\n              <li>Soft Services</li>\n\n              <li>Help Desk Management Services</li>\n\n              <li>Energy Management Services</li>\n            </ul>\n          </div>\n        </div>\n        <br>\n\n        <div class=\"col-md-10\">\n          <a class=\"WHAT-IS-Aman-1\" style=\"text-decoration: underline;\"><b>2. FM Consulting Services</b></a>\n          <br>\n          <div class=\"Sharjah-Asset-Manage mt-2 ml-5\">\n            <ul>\n\n              <li>Design and Consultancy</li>\n\n              <li>Project Management</li>\n\n              <li>Fit out works</li>\n\n              <li>Vendor Management</li>\n              <li>Help Desk Management Services</li>\n            </ul>\n          </div>\n        </div>\n\n        <br>\n\n        <div class=\"col-md-10\">\n          <a class=\"WHAT-IS-Aman-1\" style=\"text-decoration: underline;\"><b>3. Industrial Maintenance Services</b></a>\n\n          <div class=\"Sharjah-Asset-Manage text-justify mt-2 ml-5\">\n            <ul>\n              <li>Online Production Support Services</li>\n\n              <li>Offline Production Support Services</li>\n\n              <li>Warehouse Management</li>\n\n            </ul>\n          </div>\n        </div>\n\n        <br>\n\n        <div class=\"col-md-10 ml-0 ml-sm-3\">\n          <a class=\"WHAT-IS-Aman-1\" style=\"text-decoration: underline;\"><b>Facilities Management Services</b></a>\n\n          <br>\n\n          <div class=\"ml-0 ml-sm-3\">\n            <a class=\"WHAT-IS-Aman-2\">Hard Services</a>\n\n            <div  class=\"Sharjah-Asset-Manage mt-2 ml-5\">\n              <ul>\n\n                <li >Mechanical and Electrical Maintenance</li>\n\n                <li>BMS Operation</li>\n\n                <li>Plant Maintenance</li>\n                <li>HVAC (Operation & Maintenance)</li>\n                <li>Plumbing & Water Management</li>\n\n              </ul>\n            </div>\n\n            <br>\n            <a class=\"WHAT-IS-Aman-2\">Soft Services</a>\n\n            <div class=\"Sharjah-Asset-Manage text-justify mt-2 ml-5\">\n              <ul>\n\n                <li>Housekeeping & Janitorial Services</li>\n\n                <li>Garden and Lawn Maintenance</li>\n\n                <li> Specialized Services</li>\n\n                <li>Events & Selective unique contracts</li>\n\n                <li>Facade Cleaning</li>\n\n                <li>Carpet & Upholstery</li>\n\n                <li>Marble Crystallization</li>\n\n                <li>Energy Management</li>\n\n                <li>Security Services</li>\n\n                <li>Guarding and Patrolling</li>\n\n                <li>Electronic Surveillance</li>\n\n                <li>Business Support Services</li>\n\n                <li>Staffing</li>\n\n                <li>Payroll Management</li>\n\n                <li>Office Administration</li>\n\n                <li>Mail Room Management</li>\n\n                <li>Food and Beverage Vending</li>\n\n              </ul>\n            </div>\n          </div>\n        </div>\n        <div  class=\"Sharjah-Asset-Manage text-justify mt-2 ml-4\">\n          <p class=\"ml-0 ml-sm-3\">These services are offered as bundled services (two or more services) or fully\n            integrated and tailored to\n            each\n            customer’s unique requirements.</p>\n        </div>\n\n        <div class=\"Sharjah-Asset-Manage text-justify mt-2 ml-4\">\n          <div class=\"ml-0 ml-sm-3\">\n            <a class=\"WHAT-IS-Aman-1\" style=\"text-decoration: underline;\">\n              <b>FM Consulting Services</b>\n            </a>\n\n            <p class=\"Sharjah-Asset-Manage text-justify mt-2 \">SANED offers partnerships with building owners and\n              users for facilitation of an efficient transition,\n              maximizing revenues with lower operating costs while maintaining high service levels.\n              <br>\n              In addition to providing core Facilities Management Services our FMCS provides solutions to our clients\n              on:\n            </p>\n\n\n\n\n\n\n            <div class=\"Sharjah-Asset-Manage text-justify mt-2 ml-5\">\n              <ul>\n                <li>Accounts and Administration</li>\n\n                <li> Occupant Management</li>\n\n                <li> Complete maintenance of property including common area maintenance (CAM)</li>\n\n                <li> Liaison and PR with Government Agencies</li>\n\n                <li> Civil Supervision</li>\n\n                <li> Vendor Management</li>\n\n                <li> Health, Safety, Security and Environment</li>\n\n                <li> Space Management</li>\n\n                <li> Statutory / Legal Compliances and licenses</li>\n\n                <li> Help Desk Management</li>\n\n                <li> Visitor Management</li>\n\n                <li> Parking Management</li>\n              </ul>\n            </div>\n            <br>\n            <p class=\"Sharjah-Asset-Manage text-justify mt-2 ml-4\">In addition to providing core FMCS will provide\n              solutions to our clients on:</p>\n            <div class=\"Sharjah-Asset-Manage text-justify mt-2 ml-5\">\n              <ul>\n                <li>Property and Services takeover for complete maintenance and management</li>\n                <li> Liaise with Public Utility Agencies, Government Bodies and relevant authorities for timely payment\n                  of\n                  all\n                  dues and taxes</li>\n\n                <li> Maintain and assist in updating NOC’s, permits, renewals , insurance coverage , claims etc.</li>\n\n                <li> Vendor management / Maintain 3rd party contracts</li>\n\n                <li> Life Safety and Security Systems Management</li>\n\n                <li> Procurement of consumables and inventory management</li>\n\n                <li> Maintain PPM schedules of all equipment’s and installations - routine, annual and breakdown\n                  maintenance\n                </li>\n\n                <li> 24 X 7 Central Help Desk services - record, track, execute and report all work orders and\n                  complaints,\n                  MIS’s\n                  – daily, monthly and quarterly and annual</li>\n\n                <li> Complete Tenant relationship management - Represent Client for compliance of SLA’s / lease\n                  agreements\n                  /\n                  Terms and Conditions of occupants /Timely submission of bills, follow up and collection of rents and\n                  payments\n                  from occupants</li>\n\n                <li> Coordination and inspection of any work initiated within the premises until completion</li>\n              </ul>\n            </div>\n            <br>\n\n            <a class=\"WHAT-IS-Aman-2\">Pre-Occupancy Management:</a>\n\n            <div class=\"Sharjah-Asset-Manage text-justify mt-2 ml-5\">\n              <ul>\n                <li>CAM Estimations and Budgeting</li>\n\n                <li> Transition Phase Management</li>\n\n                <li>Property Take Over</li>\n              </ul>\n            </div>\n            <br>\n            <a class=\"WHAT-IS-Aman-2\">Post Occupancy Management:</a>\n\n            <div>\n              <div class=\"Sharjah-Asset-Manage text-justify mt-2 ml-5\">\n                <ul>\n                  <li>Tenant Relationship Management</li>\n\n                  <li> Operations and Maintenance</li>\n\n                  <li> Set Up Budgets - Revenue / Operations\n                  </li>\n                  <li> Client Relationship Management</li>\n\n                  <li> Risk Mitigation and Management</li>\n\n                  <li> Traffic Management</li>\n\n                  <li> Liaise with Government Bodies</li>\n\n                  <li> New Tenant Move-In Management</li>\n\n                  <li> Rent Collection</li>\n                </ul>\n              </div>\n              <p class=\"Sharjah-Asset-Manage text-justify mt-2 \">CAFM software ensures Helpdesk and Resource Planning\n                and Allocation, Service tracker, Asset maintenance,\n                Inventory management, Conference room bookings, Guest house bookings, Lease management, Invoice\n                tracker,\n                Visitor\n                management, Material movement management and Staff management.</p>\n            </div>\n\n            <div class=\"Sharjah-Asset-Manage  mt-2 \">\n              <a class=\"WHAT-IS-Aman-1\" style=\"text-decoration: underline;\"><b>Industrial Services</b></a>\n\n              <br>\n              <a class=\"WHAT-IS-Aman-2\">Our Quality Processes:</a>\n\n              <div style=\"\" class=\"Sharjah-Asset-Manage mt-2 ml-5\">\n                <ul>\n\n                  <li> Achieve highest level of quality through process-driven service delivery methods</li>\n\n                  <li> Enhance customer satisfaction by outperforming and with continuous improvement in quality\n                    standards\n                  </li>\n\n                  <li> Contribute to industry with continuous innovations and improvements on quality and processes in\n                    our\n                    Quality Management Systems</li>\n                </ul>\n              </div>\n\n\n              <br>\n              <a class=\"WHAT-IS-Aman-2\">People:</a>\n\n              <p class=\"Sharjah-Asset-Manage text-justify mt-2 \">Our industry is people oriented and we have a\n                professional skills enhancement programmed for the workforce.\n                Continuous training and knowledge sharing ensure excellence in work output at all areas</p>\n              <a class=\"WHAT-IS-Aman-2\">Processes:</a>\n\n              <p class=\"Sharjah-Asset-Manage text-justify mt-2 \">Regular scheduled monitoring and quality customized\n                services with continuous improvement ensures process\n                flow\n                resulting in a 'Great Place to Work’ culture across our clients manufacturing facilities.</p>\n\n              <p class=\"Sharjah-Asset-Manage text-justify mt-2\">SANED is aware of the sensitivity and confidential\n                nature of all businesses and our services are designed\n                to\n                support your business, enabling your staff to function at optimum levels. It is essential that\n                facilities\n                operate smoothly to ensure 'zero' down time.</p>\n\n              <p class=\"Sharjah-Asset-Manage text-justify mt-2 \">\n                From pharmaceutical laboratories and large-scale car manufacturing plants, to District Cooling Plants-\n                SANED\n                has\n                the expertise needed to support your businesses with all non-core support services needs like PPE.\n                equipment’s,\n                waste & power management systems etc.\n              </p>\n            </div>\n\n\n            \n          </div>\n        </div>\n\n      </div>\n\n\n      <div class=\"col-md-5 text-center\">\n          <img src=\"./assets/facility_image1.png\" srcset=\"./assets/facility_image1@2x.png 2x,\n          ./assets/facility_image1@3x.png 3x\"\n          class=\"img-fluid sticky py-4\">\n      \n\n      </div>\n\n      <br>\n    </div>\n    </div>\n  </div>\n</div>\n  <br>\n \n  <!--=====footer english start==-->\n  <app-loginv2></app-loginv2>\n  <!-- ================footer  english end== -->\n\n  <router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/facilitymanagement/facilitymanagement.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/facilitymanagement/facilitymanagement.component.ts ***!
  \********************************************************************/
/*! exports provided: facilitymanagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "facilitymanagementComponent", function() { return facilitymanagementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var facilitymanagementComponent = /** @class */ (function () {
    function facilitymanagementComponent() {
        this.navbarOpen = false;
        this.head = "Integrated Facility Management";
        this.bg = "bg_img";
        this.nav_arabic = "/facilityarabic";
        this.Lang = {};
        this.model = {};
        this.pow = {};
    }
    facilitymanagementComponent.prototype.toggleNavbar = function () {
        this.navbarOpen = !this.navbarOpen;
    };
    facilitymanagementComponent.prototype.ngOnInit = function () {
    };
    facilitymanagementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'facilitymanagement',
            template: __webpack_require__(/*! ./facilitymanagement.component.html */ "./src/app/facilitymanagement/facilitymanagement.component.html"),
            styles: [__webpack_require__(/*! ./facilitymanagement.component.css */ "./src/app/facilitymanagement/facilitymanagement.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], facilitymanagementComponent);
    return facilitymanagementComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');\n\n.naviagaion{\n    font-family: \"GeezaPro\";\n    font-size: 13px;\n  letter-spacing: 0;\n  cursor: pointer;\n  \n  }\n\n.address{\n    font-family: Roboto;\n    font-size: 13px;\n  letter-spacing: 0;\n  }\n\n.home{\n    font-family: GeezaPro-Bold;\n    font-size: 18px;\n    line-height: 14px;\n    font-weight: 800;\n  letter-spacing: 0;\n  }\n\n.mailInput{\n    background: black;\n    border-color: #6c757d;\n    vertical-align:9px;\n    color:#bbb;\n    font-family: Roboto;\n  }\n\n.followUs{\n    color:white;\n     font-family: Roboto;\n    font-size: 14px;\n    margin: 0px;\n  }\n\n.condition{\n    font-family: Roboto;\n    text-align: center;\n    color: white;\n    font-size: 12px;\n  }\n\n.website{\n      color: white;\n      font-weight: 500;\n      text-align: center;\n      font-size:16px;\n  }\n\n.social:hover {\n      cursor: pointer;\n    -webkit-transform: scale(1.1);\n    -moz-transform: scale(1.1);\n    -o-transform: scale(1.1);\n  }\n\n.social {\n      margin-right: 12px;\n    -webkit-transform: scale(0.8);\n    -moz-transform: scale(0.8);\n    -o-transform: scale(0.8);\n    -webkit-transition-duration: 0.5s;\n    -moz-transition-duration: 0.5s;\n    -o-transition-duration: 0.5s;\n  }"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div dir=\"rtl\" style=\"background-color: #000;\">\n    <div class=\"pt-5 pb-4\">\n        <div class=\"d-flex flex-wrap mx-3 flex-column flex-sm-row flex-md-row justify-content-between\">\n\n            <div class=\"text-right\">\n                <img src=\"./assets/footersanedlogo.png\" srcset=\"./assets/footersanedlogo@2x.png 2x,\n        ./assets/footersanedlogo@3x.png 3x\"\n                    class=\"img-fluid\">\n            </div>\n\n            <div class=\"mt-3 mt-md-0 text-right\">\n                <ul class=\"list-unstyled quick-links text-right p-0\">\n                    <li>\n                            <h1 class=\"home\" style=\"color:white;font-family: Roboto;\">الملاحة</h1>\n                    </li>\n                    <li ><a routerLink=\"/aboutus-arabic\" (click)=\"goToTop()\" class=\"naviagaion\">\n                            <font style=\"text-align: right;\" color=\"white\">معلومات عنا</font>\n                        </a></li>\n                    <li><a routerLink=\"/amanservices-arabic\" (click)=\"goToTop()\" class=\"naviagaion\">\n                            <font color=\"white\">خدمات</font>\n                        </a></li>\n                    <li><a routerLink=\"/sitemap-arabic\" (click)=\"goToTop()\" class=\"naviagaion\">\n                            <font color=\"white\">خريطة الموقع</font>\n                        </a></li>\n                    <li><a routerLink=\"/contactus-arabic\" (click)=\"goToTop()\" class=\"naviagaion\">\n                            <font color=\"white\">اتصل بنا</font>\n                        </a></li>\n                    <li><a routerLink=\"/privacy-arabic\" (click)=\"goToTop()\" class=\"naviagaion\">\n                            <font color=\"white\">سياسة خاصة</font>\n                        </a></li>\n                </ul>\n            </div>\n\n\n            <div class=\"text-right\">\n               \n                <ul class=\"list-unstyled quick-links p-0\">\n                    <li>\n                            <h5 class=\"home\" style=\"color:white;font-family: Roboto;\">عنوان الشركة:</h5>\n                    </li>\n                    <li>\n                        <p class=\"address d-flex flex-column\">\n                            <font color=\"white\">برج 400 ، الطابق 18 ،</font>\n                            \n                            <font color=\"white\"> طريق الميناء الشارقة ،</font>\n                           \n                            <font color=\"white\"> صندوق بريد 4648 الشارقة - الإمارات  </font>\n                            <font color=\"white\"> العربية المتحدة </font>\n                            <font color=\"white\">رقم الهاتف: 6555 506 6 971+ </font>\n                           \n                            <font color=\"white\">الفاكس: 2331 572 6 971+ </font>\n                           \n                            <font color=\"white\">البريد الإلكتروني: helpdesk@saned.ae</font>\n                          \n                            <a routerLink=\"login\">\n                                <font color=\"white\">Website: www.saned.ae</font>\n                            </a>\n                        </p>\n                    </li>\n                </ul>\n            </div>\n\n\n            <div class=\"text-right\">\n                <a target=\"_blank\" href=\"http://www.google.com/maps/place/25.351879,55.385486\">\n                    <img src=\"./assets/map.png\" srcset=\"./assets/map@2x.png 2x,\n                    ./assets/map@3x.png 3x\"\n                        class=\"img-fluid\">\n                </a>\n            </div>\n\n\n            <div class=\"mt-3 mt-md-0 d-flex align-items-end\">\n                <div>\n                    <div class=\"d-flex flex-row\">\n                        <div class=\" d-flex justify-content-center align-items-center\">\n                            <p class=\"followUs mr-3\">تابعنا </p>\n                        </div>\n                        <div class=\"\">\n                            <a><i class=\"fa fa-linkedin-square fa-2x social\" style=\"color:#007bb5;\"></i></a>\n                            <a><i class=\"fa fa-twitter-square fa-2x social\" style=\"color:#55ACEE\"></i></a>\n                            <a><i class=\"fa fa-facebook-square fa-2x social\" style=\"color:#3B5998\"></i></a>\n                            <a><i class=\"fa fa-instagram square fa-2x social\" style=\"color:#55ACEE\"></i></a>\n                        </div>\n                    </div>\n\n                    <p class=\"followUs mt-4 text-right\">اشترك في صحيفتنا الإخبارية</p>\n\n\n                    <div class=\"input-group mt-2 mb-3\">\n\n                        <input type=\"email\" name=\"email_id\" [(ngModel)]=\"model_value.email\" #name=\"ngModel\" id=\"email_id\"\n                            class=\"form-control mailInput\" placeholder=\"أدخل معرف البريد الخاص بك\" aria-label=\"Recipient's username\"\n                            aria-describedby=\"basic-addon2\">\n\n                        <div class=\"input-group-append\">\n\n                            <button class=\"btn btn-outline-secondary\" type=\"button\">\n                                <font style=\"color:#ff0000;font-family: Roboto\" (click)=\"Subscribe(model_value)\">الاشتراك</font>\n                            </button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n\n        </div>\n\n        <h4 class=\"website mt-2\">الموقع في وضع البناء</h4>\n        <hr style=\"background:white; width:98%; text-align: center;\">\n        <p class=\"condition\">من خلال الاستمرار عبر هذه الصفحة ، فإنك توافق على بنود الخدمة وسياسة ملفات تعريف الارتباط وسياسة الخصوصية وسياسات المحتوى الخاصة بنا. © 2019.</p>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.model = {};
        this.model_value = {};
        this.Subscribe = {};
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.prototype.goToTop = function () {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/login-arbic/login-arbic.component.css":
/*!*******************************************************!*\
  !*** ./src/app/login-arbic/login-arbic.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".intro-2 {\n    background: url(\"/assets/Group.png\")no-repeat center center;\n    background-size: cover;\n  \n  }\n  \n  .logov2 {\n    background: url(\"/assets/loginv2-2.png\")no-repeat center center;\n    background-size: cover;\n  \n  }\n  \n  .intro-4 {\n    background: url(\"/assets/uae-sharjah-february-1-2016-al-qasba-canal-and-ferris-wheel-in-sharjah-city-united-arab-emirates-sharjah-third-largest-and-third-most-populous-city-in-uae-and-capital-of-emirate-of-sharjah-si-8-s-adm-f-0000@3x.png\") center center;\n    background-size: cover;\n  \n  }\n  \n  .intro-3 {\n    \n    background-size: cover;\n  \n  }\n  \n  .Line-2{\n    width: 97px;\n  height: 0.1px;\n  }\n  \n  .New-to-Aman-Registe {\n    width: 0;\n    height: 0;\n    font-family: ProximaNova;\n    font-size: 16px;\n    font-weight: 200;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 3.25;\n    letter-spacing: normal;\n    color: #f34235;\n  }\n  \n  /* ======login form start========= */\n  \n  /* Full-width input fields */\n  \n  input[type=text], input[type=password] {\n    width: 100%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    display: inline-block;\n    border: 1px solid #ccc;\n    box-sizing: border-box;\n  }\n  \n  /* Set a style for all buttons */\n  \n  /* button {\n    background-color:#f34235;\n    color: white;\n    padding: 14px 20px;\n    margin: 8px 0;\n    border: none;\n    cursor: pointer;\n    width: 100%;\n  } */\n  \n  button:hover {\n    opacity: 0.8;\n  }\n  \n  /* Extra styles for the cancel button */\n  \n  .cancelbtn {\n    width: auto;\n    padding: 10px 18px;\n    background-color: #f44336;\n  }\n  \n  /* Center the image and position the close button */\n  \n  .imgcontainer {\n    text-align: center;\n    margin: 24px 0 12px 0;\n    position: relative;\n  }\n  \n  img.avatar {\n    width: 40%;\n    border-radius: 50%;\n  }\n  \n  .container {\n    padding: 16px;\n  }\n  \n  span.psw {\n    float: right;\n    padding-top: 16px;\n  }\n  \n  /* The Modal (background) */\n  \n  .modal {\n    display: none; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n    padding-top: 60px;\n  }\n  \n  /* Modal Content/Box */\n  \n  .modal-content {\n    background-color: #fefefe;\n    margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */\n    border: 1px solid #888;\n    width: 80%; /* Could be more or less, depending on screen size */\n  }\n  \n  /* The Close Button (x) */\n  \n  .close {\n    position: absolute;\n    right: 25px;\n    top: 0;\n    color: #000;\n    font-size: 35px;\n    font-weight: bold;\n  }\n  \n  .close:hover,\n  .close:focus {\n    color: red;\n    cursor: pointer;\n  }\n  \n  /* Add Zoom Animation */\n  \n  .animate {\n    -webkit-animation: animatezoom 0.6s;\n    animation: animatezoom 0.6s\n  }\n  \n  @-webkit-keyframes animatezoom {\n    from {-webkit-transform: scale(0)} \n    to {-webkit-transform: scale(1)}\n  }\n  \n  @keyframes animatezoom {\n    from {-webkit-transform: scale(0);transform: scale(0)} \n    to {-webkit-transform: scale(1);transform: scale(1)}\n  }\n  \n  /* Change styles for span and cancel button on extra small screens */\n  \n  /* @media screen and (max-width: 300px) {\n    span.psw {\n       display: block;\n       float: none;\n    }\n    .cancelbtn {\n       width: 100%;\n    }\n  } */\n  \n  /* ========login form end====== */\n  \n  .intro-3{\n    background: url(\"/assets/loginsaned1.png\")no-repeat center center;\n    background-size: cover;\n    /* width: 1440px;\n  height: 380px; */\n  -o-object-fit: contain;\n     object-fit: contain;\n  \n  }\n  \n  .Delivering-your-divi {\n    width: 699px;\n    height: 168px;\n    font-family: Roboto;\n    font-size: 30px;\n    font-weight: 500;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #ffffff;\n  }\n  \n  .Its-about-more-than {\n    width: 588px;\n    height: 90px;\n    font-family: Roboto;\n    font-size: 18.8px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.6;\n    letter-spacing: normal;\n    color: #ffffff;\n  }\n  \n  .Know-More-Copy-2 {\n    width: 92px;\n    height: 24px;\n    font-family: Roboto;\n    font-size: 18px;\n    margin-left: -11px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #f34235;\n  }\n  \n  .tail-left-copy-3 {\n    width: 63px;\n    height: 10px;\n    margin-top: 8px;\n    -o-object-fit: contain;\n       object-fit: contain;\n  }\n  \n  .WHAT-IS-Aman- {\n    width: 313px;\n  height: 53px;\n  font-family: Roboto;\n  font-size: 38px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.18;\n  letter-spacing: normal;\n  color: var(--black);\n  margin-left: 181px;\n  }\n  \n  .A-cutting-edge-build {\n    width: 416px;\n    height: 142px;\n    font-family: Roboto;\n    font-size: 18px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #282828;\n  }\n  \n  .Know-More {\n    width: 92px;\n    height: 24px;\n    font-family: Roboto;\n    font-size: 18px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color:red;\n  }\n  \n  .benefits {\n    width: 313px;\n    height: 53px;\n    font-family: Roboto;\n    font-size: 38px;\n    font-weight: normal;\n    font-style: normal; \n    font-stretch: normal;\n    line-height: 1.18;\n    letter-spacing: normal;\n    color: var(--black);\n    margin-left: 432px\n  }\n  \n  .Reduce-the-impact-of {\n    width: 502px;\n    height: 118px;\n    font-family: Roboto;\n    font-size: 18px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 2.06;\n    letter-spacing: normal;\n    color: #282828;\n  }\n  \n  .Know-More-Copy {\n    width: 92px;\n    height: 24px;\n    font-family: Roboto;\n    font-size: 18px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #f34235;\n  }\n  \n  .tail-left-copy-2 {\n    width: 39px;\n    height: 11px;\n    margin-left: 12px;\n    -o-object-fit: contain;\n       object-fit: contain;\n  }\n  \n  .Remember-Me {\n    width: 119px;\n    height: 59px;\n    font-family: ProximaNova;\n    font-size: 16px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 3.25;\n    letter-spacing: normal;\n    color: #4a4a4a;\n  }\n  \n  .Sign-in {\n    width: 104px;\n    height: 30px;\n    font-family: ProximaNova;\n    font-size: 24px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.25;\n    letter-spacing: 0.5px;\n    text-align: center;\n    color: #ffffff;\n  }\n  \n  .Rectangle-5 {\n    width: 331px;\n    height: 59px;\n    border-radius: 2px;\n    background-color: #f34235;\n  }\n  \n  .Rectangle-4 {\n    width: 12px;\n    height: 12px;\n    border-radius: 2px;\n  }\n  \n  .Welcome-To-Aman {\n    width: 262px;\n    height: 40px;\n    /* margin-left: 80px; */\n    font-family: Roboto;\n    font-size: 24px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.25;\n    letter-spacing: normal;\n    color: var(--black);\n  }\n  \n  .Line-2 {\n    width: 97px;\n    height: 0.1px;\n  }\n  \n  .Mask {\n    width: 399px;\n    height: 440px;\n    border-radius: 8px;\n    /* box-shadow: 0 8px 9px 0 rgba(0, 0, 0, 0.14);\n    background-color:#f34235; */\n  }\n  \n  .loginc {\n    width: 262px;\n    height: 40px;\n    font-family: Roboto;\n    font-size: 18px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.25;\n    letter-spacing: normal;\n    color: var(--black);\n  }\n  \n  .input{\n      width:331px\n  }\n  \n  .home{\n    font-family: Roboto-Bold;\n    font-size: 16px;\n    line-height: 14px;\n  letter-spacing: 0;\n  }\n  \n  .about{\n    font-family: Roboto-Regular;\n    font-size: 13px;\n    line-height: 15px;\n  letter-spacing: 0;\n  }\n  \n  .letstalk {\n    width: 674px;\n    height: 75px;\n    margin-top:-250px;\n    font-family: Roboto;\n    font-size: 64px;\n    font-weight: 500;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 0.58;\n    letter-spacing: normal;\n    text-align: center;\n    color: #ffffff;\n  }\n  \n  .Know-More-Copy-3 {\n    width: 92px;\n    height: 24px;\n    font-family: Roboto;\n    font-size: 18px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #f34235;\n  }\n  \n  .uae-sharjah-february-1-2016-al-qasba-canal-and-ferris-wheel-in-sharjah-city-united-arab-emirates-sharjah-third-largest-and-third-most-populous-city-in-uae-and-capital-of-emirate-of-sharjah_si8s-adm__F0000 {\n    width: 1440px;\n    height: 380px;\n    -o-object-fit: contain;\n       object-fit: contain;\n  }\n  \n  .btn .fa {\n    margin-left: 3px;\n  }\n  \n  .top-nav-collapse {\n    background-color: #424f95 !important;\n  }\n  \n  .navbar:not(.top-nav-collapse) {\n    /* background: transparent !important; */\n  }\n  \n  h6 {\n    line-height: 1.7;\n  }\n  \n  .hm-gradient .full-bg-img {\n    background: linear-gradient(to 45deg, rgba(42, 27, 161, 0.6), rgba(29, 210, 177, 0.6) 100%);\n  }\n  \n  @media (max-width: 450px) {\n    .margins {\n        margin-right: 1rem;\n        margin-left: 1rem;\n    }\n  }\n  \n  @media (max-width: 740px) {\n    .full-height,\n    .full-height body,\n    .full-height header,\n    .full-height header .view {\n        height: 1040px;\n    }\n  }\n  \n  /* \n  ===== */\n  \n  .row.heading h2 {\n    color: #fff;\n    font-size: 52.52px;\n    line-height: 95px;\n    font-weight: 400;\n    text-align: center;\n    margin: 0 0 40px;\n    padding-bottom: 20px;\n    text-transform: uppercase;\n  }\n  \n  ul{\n  margin:0;\n  padding:0;\n  list-style:none;\n  }\n  \n  .heading.heading-icon {\n    display: block;\n  }\n  \n  .padding-lg {\n  display: block;\n  padding-top: 60px;\n  padding-bottom: 60px;\n  }\n  \n  .practice-area.padding-lg {\n    padding-bottom: 55px;\n    padding-top: 55px;\n  }\n  \n  .practice-area .inner{ \n     border:1px solid #999999; \n   text-align:center; \n   margin-bottom:28px; \n   padding:40px 25px;\n  }\n  \n  .our-webcoderskull .cnt-block:hover {\n    box-shadow: 0px 0px 10px rgba(0,0,0,0.3);\n    border: 0;\n  }\n  \n  .practice-area .inner h3{ \n    color:#3c3c3c; \n  font-size:24px; \n  font-weight:500;\n  font-family: 'Poppins', sans-serif;\n  padding: 10px 0;\n  }\n  \n  .practice-area .inner p{ \n    font-size:14px; \n  line-height:22px; \n  font-weight:400;\n  }\n  \n  .practice-area .inner img{\n  display:inline-block;\n  }\n  \n  .buttonrreg {\n    background-color: #f3423500;\n    color: #fd3325;\n    /* padding: -4px 20px; */\n    margin: 8px 14;\n    border: none;\n    cursor: pointer;\n    width: 100px;\n  }\n  \n  /* .our-webcoderskull{\n  background: url(\"http://www.webcoderskull.com/img/right-sider-banner.png\") no-repeat center top / cover;\n  \n  } */\n  \n  .our-webcoderskull .cnt-block{ \n   float:left; \n   width:100%; \n   background:#fff; \n   padding:30px 20px; \n   text-align:center; \n   border:2px solid #d5d5d5;\n   margin: 0 0 28px;\n  }\n  \n  .our-webcoderskull .cnt-block figure{\n   width:148px; \n   height:148px; \n   border-radius:100%; \n   display:inline-block;\n   margin-bottom: 15px;\n  }\n  \n  .our-webcoderskull .cnt-block img{ \n   width:148px; \n   height:148px; \n   border-radius:100%; \n  }\n  \n  .our-webcoderskull .cnt-block h3{ \n   color:#2a2a2a; \n   font-size:20px; \n   font-weight:500; \n   padding:6px 0;\n   text-transform:uppercase;\n  }\n  \n  .our-webcoderskull .cnt-block h3 a{\n  text-decoration:none;\n  color:#2a2a2a;\n  }\n  \n  .our-webcoderskull .cnt-block h3 a:hover{\n  color:#337ab7;\n  }\n  \n  .our-webcoderskull .cnt-block p{ \n   color:#2a2a2a; \n   font-size:13px; \n   line-height:20px; \n   font-weight:400;\n  }\n  \n  .our-webcoderskull .cnt-block .follow-us{\n  margin:20px 0 0;\n  }\n  \n  .our-webcoderskull .cnt-block .follow-us li{ \n    display:inline-block; \n  width:auto; \n  margin:0 5px;\n  }\n  \n  .our-webcoderskull .cnt-block .follow-us li .fa{ \n   font-size:24px; \n   color:#767676;\n  }\n  \n  .our-webcoderskull .cnt-block .follow-us li .fa:hover{ \n   color:#025a8e;\n  }\n  \n  /* section{\n    padding: 100px 0;\n  } */\n  \n  /* .details-card {\n  background: #ecf0f1;\n  } */\n  \n  .card-content {\n  background: #ffffff;\n  border: 4px;\n  box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);\n  }\n  \n  .card-img {\n  position: relative;\n  overflow: hidden;\n  border-radius: 0;\n  z-index: 1;\n  }\n  \n  .card-img img {\n  width: 100%;\n  height: auto;\n  display: block;\n  }\n  \n  .card-img span {\n  position: absolute;\n    top: 15%;\n    left: 12%;\n    background: #1ABC9C;\n    padding: 6px;\n    color: #fff;\n    font-size: 12px;\n    border-radius: 4px;\n    -webkit-border-radius: 4px;\n    -moz-border-radius: 4px;\n    -ms-border-radius: 4px;\n    -o-border-radius: 4px;\n    -webkit-transform: translate(-50%,-50%);\n            transform: translate(-50%,-50%);\n  }\n  \n  span.blog{\n   color:  #f5a623\n  \n  }\n  \n  .card-img span h4{\n        font-size: 12px;\n        margin:0;\n        padding:10px 15px;\n         line-height: 0;\n  }\n  \n  .card-desc {\n  padding: 1.25rem;\n  }\n  \n  .card-desc h3 {\n  color: #000000;\n    font-weight: 600;\n    font-size: 1.5em;\n    line-height: 1.3em;\n    margin-top: 0;\n    margin-bottom: 5px;\n    padding: 0;\n  }\n  \n  .card-desc p {\n  color: #747373;\n    font-size: 14px;\n  font-weight: 400;\n  font-size: 1em;\n  line-height: 1.5;\n  margin: 0px;\n  margin-bottom: 20px;\n  padding: 0;\n  font-family: 'Raleway', sans-serif;\n  }\n  \n  .btn-card1{\n    background-color: #f5a623;\n    color: #fff;\n  box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);\n    padding: .84rem 2.14rem;\n    font-size: .81rem;\n    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n    margin: 0;\n    border: 0;\n    border-radius: .125rem;\n    cursor: pointer;\n    text-transform: uppercase;\n    white-space: normal;\n    word-wrap: break-word;\n    color: #fff;\n  }\n  \n  .btn-card3{\n    background-color: #4a90e2;\n    color: #fff;\n  box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);\n    padding: .84rem 2.14rem;\n    font-size: .81rem;\n    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n    margin: 0;\n    border: 0;\n    border-radius: .125rem;\n    cursor: pointer;\n    text-transform: uppercase;\n    white-space: normal;\n    word-wrap: break-word;\n    color: #fff;\n  }\n  \n  .btn-card2{\n    background-color: #bd10e0;\n    color: #fff;\n  box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);\n    padding: .84rem 2.14rem;\n    font-size: .81rem;\n    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n    margin: 0;\n    border: 0;\n    border-radius: .125rem;\n    cursor: pointer;\n    text-transform: uppercase;\n    white-space: normal;\n    word-wrap: break-word;\n    color: #fff;\n  }\n  \n  .btn-card{\n  background-color: #1ABC9C;\n  color: #fff;\n  box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);\n    padding: .84rem 2.14rem;\n    font-size: .81rem;\n    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n    margin: 0;\n    border: 0;\n    border-radius: .125rem;\n    cursor: pointer;\n    text-transform: uppercase;\n    white-space: normal;\n    word-wrap: break-word;\n    color: #fff;\n  }\n  \n  .btn-card:hover {\n    background: orange;\n  }\n  \n  a.btn-card {\n    text-decoration: none;\n    color: #fff;\n  }\n  \n  .bb{\n    background: url(\"/assets/bb.png\")no-repeat center center;\n    background-size: cover;\n    \n    }\n  \n  /* ============Navbar start======= */\n  \n  .homeservice{\n    width: 174px;\n    height: 52px;\n    font-family: GeezaPro;\n    font-size: 18px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #ffffff;\n  }\n  \n  .about-us1{\n    \n      width: 143px;\n      height: 52px;\n      font-family: GeezaPro;\n      font-size: 18px;\n      font-weight: normal;\n      font-style: normal;\n      font-stretch: normal;\n      line-height: normal;\n      letter-spacing: normal;\n      color: #ffffff;\n    \n  }\n  \n  .services{\n    width: 70px;\n    height: 49px;\n    font-family: GeezaPro;\n    font-size: 18px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #ffffff;\n  }\n  \n  .supplier{\n    width: 100px;\n    height: 25px;\n    font-family: GeezaPro;\n    font-size: 18px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #ffffff;\n  }\n  \n  .contactus{\n  width: 102px;\n  height: 76px;\n  font-family: GeezaPro;\n  font-size: 18px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #ffffff;\n}\n  \n  .Rectangle-2 {\n  width: 123px;\n  height: 41px;\n  border-radius: 5px;\n  background-color: #ff0000;\n}\n  \n  .mr-5{\n  margin-right: 3rem !important;\n}\n  \n  /* ========== navabar end=========== */\n  \n  /* ===Mobile navbar start=========== */\n  \n  @media (max-width: 575.98px) { \n  .nav-bg {\n    background-color: rgba(0, 0, 0, 0.65) !important;\n  }\n\n.ft_22{\n  font-size: 22px;\n  /* background-color: black; */\n}\n\n.pt-120{\n    position: relative !important;\n    left: 143px !important;\n\n  }\n  .mt-414{\n    margin-top: 2px !important;\n  }\n\n  .mr-5, .mx-5 {\n    margin-right: 4rem!important;\n}\n\n.pad_12{\n  padding: 0 12px;\n}\n\n.width-90{\n  width: 90%;\n}\n\n}\n  \n  @media (width: 320px) {\n  .width-90{\n    width: 100%;\n    margin-top: -40px;\n  }\n\n  .ft_22{\n    font-size: 17px;\n  }\n}\n  \n  @media (width: 568px) {\n\n  .nav-bg {\n    background-color: rgba(0, 0, 0, 0.65) !important;\n  }\n\n.ft_22{\n  font-size: 18px;\n  /* background-color: black; */\n}\n\n.pt-120{\n    position: relative !important;\n    left: 143px !important;\n\n  }\n  .mt-414{\n    margin-top: 2px !important;\n  }\n\n  .mr-5, .mx-5 {\n    margin-right: 4rem!important;\n}\n\n.pad_12{\n  padding: 0 12px;\n}\n\n.width-90{\n  width: 68%;\n  margin-top: -130px;\n}\n\n }\n  \n  /* Extra small devices (portrait phones, less than 576px) */\n  \n  @media (min-width: 576px) and (max-width: 767.98px) {\n\n  .nav-bg {\n    background-color: rgba(0, 0, 0, 0.65) !important;\n  }\n\n.ft_22{\n  font-size: 18px;\n  /* background-color: green; */\n}\n\n.pt-120{\n    position: relative !important;\n    left: 143px !important;\n\n  }\n  .mt-414{\n    margin-top: 2px !important;\n  }\n\n  .mr-5, .mx-5 {\n    margin-right: 4rem!important;\n  }\n\n.pad_12{\n  padding: 0 12px;\n}\n\n.width-90{\n  margin-top: -110px;\n}\n\n}\n  \n  @media screen and (min-device-width: 768px) and (max-device-width: 1022px){\n  .nav-bg {\n    /* background-color: rgba(0, 0, 0, 0.65) !important; */\n  }\n  .mt-5, .my-5 {\n    margin-top: 2rem!important;\n}\n\n.width-90{\n  margin-top: -15px;\n}\n\n.ft_22{\n  font-size: 22px;\n  /* background-color: green; */\n}\n\n\n  .pt-120{\n    position: relative !important;\n    left: 211px \n\n  }\n  .mt-414{\n    margin-top: 3px !important;\n  }\n\n  .mr-5, .mx-5 {\n    margin-right: 4rem!important;\n}\n\nli[_ngcontent-c1] {\n  float: left;\n  padding: 0 12px !important;\n}\n\n\n}\n  \n  /* =========Mobile navbar End========== */\n  \n  /* ===========HEADING STYLE=========== */\n  \n  .saned_para{\n  font-size:16px;\n  color: #333; \n  font-family: GeezaPro;\n}\n  \n  .saned_heading{\n  font-size: 30px;\n  font-family: GeezaPro;\n\n}\n  \n  /* ==============HEADING STYLE========== */"

/***/ }),

/***/ "./src/app/login-arbic/login-arbic.component.html":
/*!********************************************************!*\
  !*** ./src/app/login-arbic/login-arbic.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <button (click)=\"switchLanguage('arabic')\">Arabic</button>\n\n\n<!-- <input type=\"radio\" class=\"btn ml-2\"  name=\"arabic\"> <font color=\"white\"> <span><a routerLink=\"loginarabic\">عربى</a></span> </font>\n      \n<input type=\"radio\" class=\"btn ml-2\" routerLink=\"login\" name=\"arabic\"> <font color=\"white\"> English</font>\n         -->\n<style>\n  @import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');\n\n  body {\n    margin: 0;\n    margin-top: -58px;\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"GeezaPro\", \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-size: 1rem;\n    margin-top: -20px;\n    font-weight: 400;\n    line-height: 1.5;\n    color: #212529;\n    text-align: right;\n    background-color: #fff;\n  }\n\n  body {\n    font-family: Arial, Helvetica, sans-serif;\n  }\n\n  nav {\n    width: 100%;\n    height: 50px;\n    background: rgba(0, 0, 0, .8);\n    border-top: 1px solid rgba(255, 255);\n    border-bottom: 1px solid rgba(255, 255);\n    position: sticky;\n    top: 0px;\n    z-index: 99;\n  }\n\n  header {\n    padding: 10px 100px;\n    box-sizing: border-box;\n  }\n\n  section.card {\n    width: 100%;\n    height: 100vh;\n  }\n\n  .dropdown {\n    float: left;\n    overflow: hidden;\n  }\n\n  .dropdown .dropbtn {\n    font-size: 16px;\n    border: none;\n    outline: none;\n    color: white;\n    padding: 14px 16px;\n    background-color: inherit;\n    font-family: inherit;\n    margin: 0;\n  }\n\n  .navbar a:hover,\n  .dropdown:hover .dropbtn {\n    /* background-color: red; */\n  }\n\n  .dropdown-content {\n    display: block;\n    position: absolute;\n    background-color: red;\n    min-width: 160px;\n    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n    z-index: 1;\n  }\n\n  .dropdown-content a {\n    float: none;\n    color: black;\n    padding: 12px 16px;\n    text-decoration: none;\n    display: block;\n    text-align: left;\n  }\n\n  .dropdown-content a:hover {\n    background-color: #ddd;\n  }\n\n  ul {\n    padding: 0;\n    margin: 0;\n    list-style: none;\n  }\n\n  ul li a {\n    text-decoration: none;\n    color: #e74c3c;\n    font-family: Tahoma, Arial;\n  }\n\n  .navigation {\n    background-color: #35353500;\n    /* width: 75%; */\n    margin: 20px auto;\n    min-height: 50px;\n  }\n\n  .navigation>li {\n    float: left;\n    padding: 0 20px;\n  }\n\n  .navigation>li>a {\n    line-height: 50px;\n    color: #FFF;\n  }\n\n  .navigation .menu {\n    position: relative\n  }\n\n  .navigation .menu .submenu {\n    position: absolute;\n    /* width: 200px; */\n    -webkit-box-shadow: 0px 1px 1px #CCC;\n    box-shadow: 0px 1px 1px #CCC;\n    display: none;\n    -webkit-transition: all .5s ease-in-out;\n    -moz-transition: all .5s ease-in-out;\n    transition: all .5s ease-in-out;\n  }\n\n  .navigation .menu:hover .submenu {\n    display: block\n  }\n\n  .navigation .menu .submenu:before {\n    content: \"\";\n    position: absolute;\n    display: block;\n    border-width: 0 6px 6px 6px;\n    border-style: solid;\n    border-color: #FFF transparent;\n    top: -6px;\n    left: 5px\n  }\n\n  .navigation .menu .submenu li {\n    padding: 5px 10px;\n    -webkit-transition: all .5s ease-in-out;\n    -moz-transition: all .5s ease-in-out;\n    transition: all .5s ease-in-out;\n  }\n\n  .navigation .menu .submenu li:hover {\n    background-color: #e74c3c;\n  }\n\n  .navigation .menu .submenu li:hover a {\n    color: #FFF;\n    /* padding: 0 11px; */\n  }\n\n\n  .dropdown:hover .dropdown-content {\n    display: block;\n  }\n\n  section.sec1 {\n    background: url(natures-temples.png);\n    background-size: cover;\n  }\n\n  section.banner {\n    background: url(Group.png);\n    background-size: cover;\n    margin-left: 15px;\n  }\n\n  section.sec2 {\n    padding: 100px;\n    box-sizing: border-box;\n  }\n\n  nav {\n    width: 100%;\n    height: 50px;\n    background: rgba(0, 0, 0, .8);\n    border-top: 1px solid rgba(255, 255);\n    border-bottom: 1px solid rgba(255, 255);\n    position: sticky;\n    top: 0px;\n    z-index: 99\n  }\n\n  nav ul {\n    display: flex;\n    margin: 0px;\n    padding: 0px;\n    float: left;\n  }\n\n  nav ul li {\n    list-style: none;\n  }\n\n\n  nav ul {\n    display: flex;\n\n    padding: 0px;\n    /* float: ; */\n  }\n\n  nav ul li a {\n    display: block;\n    color: #fff;\n    padding: 0 3px;\n    text-decoration: none;\n    text-transform: uppercase;\n    font-weight: bold;\n    line-height: 50px;\n\n  }\n\n  /* ==============footer style start ========= */\n  .footer {\n    /* position: fixed; */\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    background-color: black;\n    color: white;\n    text-align: center;\n    /* height: 75px; */\n  }\n\n  .container1 {\n    background: black;\n    /* color: white */\n  }\n\n  .social:hover {\n    -webkit-transform: scale(1.1);\n    -moz-transform: scale(1.1);\n    -o-transform: scale(1.1);\n  }\n\n  .social {\n    -webkit-transform: scale(0.8);\n    /* Browser Variations: */\n\n    -moz-transform: scale(0.8);\n    -o-transform: scale(0.8);\n    -webkit-transition-duration: 0.5s;\n    -moz-transition-duration: 0.5s;\n    -o-transition-duration: 0.5s;\n  }\n\n  .fa {\n    padding: 20px;\n    font-size: 30px;\n    width: 30px;\n    text-align: center;\n    text-decoration: none;\n    border-radius: 50%;\n  }\n\n  .img-thumbnail {\n    background: black;\n    border-color: black\n  }\n\n  .home {\n    font-family: \"GeezaPro\";\n    font-size: 16px;\n    line-height: 14px;\n    letter-spacing: 0;\n  }\n\n  .about {\n    font-family: \"GeezaPro\";\n    font-size: 13px;\n    line-height: 15px;\n    letter-spacing: 0;\n  }\n\n  /* ===========================footer style end================ */\n</style>\n\n\n\n<!-- ==================Arabic -->\n\n\n<!--Navbar-->\n\n\n<!--Intro Section-->\n<section dir=\"rtl\" class=\" bb hm-gradient\" style=\"width: 100%;\nheight: 100vh;\">\n\n  <div class=\"container-fluid\">\n    <div dir=\"rtl\" class=\"row\">\n      <div class=\"col-md-1 p-0 text-right\">\n        <img src=\"./assets/group.png\" class=\"img-responsive\">\n\n      </div>\n      <div class=\"col-md-4\"></div>\n      <div class=\"col-md-6 mt-5\" dir=\"ltr\">\n        &nbsp; &nbsp;\n\n        <font style=\"color:white\">English</font>&nbsp;\n\n        <input name=\"Lang\" style=\"color:#ff0000;\" [(ngModel)]=\"Lang\" type=\"radio\" [value]=\"true\" routerLink=\"/login\"\n          [checked]=\"Lang\" />&nbsp;\n\n        <font color=\"#F90E35\"> عربى </font>\n        <input type=\"radio\" checked>&nbsp;\n\n\n      </div>\n    </div>\n  </div>\n\n\n\n  <div class=\"container-fluid\">\n\n    <div class=\"row ml-4 mt-5 mt-md-5 mt-xl-5 mt-lg-5\">\n      <div class=\"col-sm-7\">\n        <div class=\"width-90\">\n          <div class=\" white-text mt-2 text-justify\">\n            <a class=\"h1-responsive Delivering-your-divi ft_22 ft_11\" data-wow-delay=\"0.3s\">\n              <font color=\"white\">مرحبا بكم في موقع شركة ساند – خبراء في إدارة المرافق المتكاملة.</font>\n            </a>\n          </div>\n        </div>\n      </div>\n      <br>\n      <hr style=\"color:red;\">\n    </div>\n\n  </div>\n\n\n</section>\n\n\n\n\n<app-navbararabic style=\"position: relative; bottom:80px;\"></app-navbararabic>\n\n\n<div class=\"container-fluid\" dir=\"rtl\">\n  <div class=\"card col-md-12\" style=\"border-radius: 18px;margin-top: -28px;\n                          background: white;\">\n    <div class=\"\">\n      <div class=\"row\" dir=\"rtl\">\n        <div class=\"col-sm-6\">\n          <br>\n          <div class=\"col-sm-8 \">\n\n\n            <div class=\"text-right\">\n              <a class=\"text-justify ml-3 saned_heading\">ما هو أمان؟</a>\n            </div>\n          </div>\n\n          <p class=\"col-sm-9 text-justify saned_para\">لضمان الاستجابة السريعة لحالات الطوارئ الناجمة عن الحرائق ، أطلقت\n            هيئة الوقاية والسلامى بالشراكة مع شركة ساند مشروع \"أمان\". ويهدف أمان لحماية الأرواح والممتلكات من خلال إنشاء\n            اتصال آمن وموثوق بين جميع أنظمة مكافحة الحرائق في جميع الأصول في الشارقة مع محطة المراقبة المركزية التي يتم\n            مراقبتها باستمرار لتحديد حالات الطوارئ والاستجابة لها على الفور عن طريق الدفاع المدني.<br>\n            <br>\n\n          </p>\n        </div>\n        <br>\n\n        <div class=\"col-md-6\">\n          <br>\n          <div class=\"text-right\">\n            <a class=\"col-md-8  text-justify saned_heading\" dir=\"rtl\">ما هو السلام؟</a>\n          </div>\n\n          <p class=\"text-justify saned_para\"> لضمان الاستجابة السريعة لحالات الطوارئ الناجمة عن الحرائق ، أطلقت هيئة\n            الوقاية والسلامى بالشراكة مع شركة ساند مشروع \"أمان\". ويهدف أمان لحماية الأرواح والممتلكات من خلال إنشاء\n            اتصال آمن وموثوق بين جميع أنظمة مكافحة الحرائق في جميع الأصول في الشارقة مع محطة المراقبة المركزية التي يتم\n            مراقبتها باستمرار لتحديد حالات الطوارئ والاستجابة لها على الفور عن طريق الدفاع المدني.\n            <br>\n            <br>\n\n          </p>\n\n        </div>\n\n        <div class=\"col-sm-6\">\n          <br><br>\n          <div class=\"col-sm-8 \">\n\n\n            <div class=\"text-right\">\n              <a class=\" text-right col-md-12 saned_heading\">إدارة المرافق المتكاملة</a>\n            </div>\n          </div>\n\n          <p class=\"col-sm-9 text-justify saned_para mr-2\">\n            تقدم شركة ساند أفضل الخدمات في فئتها في جميع الصناعات والمواقع المتعددة التي تتميز بنموذج تقديم خدمة ذات\n            جودة عالية، يقوم مبدأ عمل الشركة على أن يكون مكملا للأهداف الإستراتيجية والتشغيلية لأي مؤسسة. وعليه فإننا\n            في ساند نقوم بدمج الوظائف الأساسية مثل العمليات والتقنيات مع الأفراد لضمان المرونة والتكامل المستقبلي\n            ودعمها من خلال أحدث الأنظمة الحاسوبية. تقوم ساند بالمشاركة مع العملاء بتحديث وتطوير مستوى الخدمة بشكل\n            مستمر وزيادة الكفاءة التشغيلية للأنظمة المراد صيانتها، مما ينتج عنه تقليل الوقت اللازم للصيانة وزيادة\n            الإيرادات بخفض تكاليف التشغيل، والقضاء على الازدواجية بين العميل وشركة التشغيل.\n\n            <br>\n            <br>\n\n          </p>\n        </div>\n\n\n\n\n      </div>\n    </div>\n    <br>\n\n\n    <section class=\"\">\n      <div class=\"\">\n        <div class=\"row \">\n\n\n          <div class=\"col-md-7\">\n\n            <img src=\"./assets/home1.png\" srcset=\"./assets/home1@2x.png 2x,\n              ./assets/home1@3x.png 3x\" style=\"width:100%; height:95%;\">\n\n          </div>\n\n          <div class=\"col-md-1\"></div>\n          <div class=\"col-md-3 mr-2\">\n            <div class=\"card-content\">\n\n\n              <div class=\"card-desc text-justify mt-2\">\n                <h4>أخبار</h4>\n                <br>\n                <br>\n                <br>\n                <br>\n                <h4>قريبا...</h4>\n                <br>\n                <br>\n                <br>\n                <br>\n                <br>\n                <br>\n\n              </div>\n\n            </div>\n            <br>\n\n          </div>\n\n        </div>\n      </div>\n    </section>\n  </div>\n</div>\n<br>\n\n\n\n<app-footer></app-footer>\n\n\n\n<script>\n  // Get the modal\n  var modal = document.getElementById('id02');\n\n  // When the user clicks anywhere outside of the modal, close it\n  window.onclick = function (event) {\n    if (event.target == modal) {\n      modal.style.display = \"none\";\n    }\n  }\n</script>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/login-arbic/login-arbic.component.ts":
/*!******************************************************!*\
  !*** ./src/app/login-arbic/login-arbic.component.ts ***!
  \******************************************************/
/*! exports provided: LoginArbicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginArbicComponent", function() { return LoginArbicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ng2_simple_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-simple-global */ "./node_modules/ng2-simple-global/index.js");
/* harmony import */ var ng2_simple_global__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_simple_global__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginArbicComponent = /** @class */ (function () {
    function LoginArbicComponent(apiService, router, sg) {
        this.apiService = apiService;
        this.router = router;
        this.sg = sg;
        this.navbarOpen = false;
        // powers = ['Really Smart', 'Super Flexible',
        //           'Super Hot', 'Weather Changer'];
        // model = new RegisterForm(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
        this.model = {};
        this.data = {};
        this.Lang = {};
        this.user = {};
    }
    LoginArbicComponent.prototype.toggleNavbar = function () {
        this.navbarOpen = !this.navbarOpen;
    };
    LoginArbicComponent.prototype.ngOnInit = function () {
    };
    LoginArbicComponent.prototype.login = function (model) {
        var _this = this;
        this.apiService.login(model).subscribe(function (response) {
            _this.data = response;
            if (_this.data.Message == "Login Successfull") {
                console.log("data=====>", _this.data);
                //   alert('Login Successful' );
                document.getElementById('login').style.display = 'none';
                document.getElementById('id01').style.display = 'none';
                document.getElementById('logout').style.display = 'block';
                _this.router.navigate(['/login-arbic']);
            }
            else if (_this.data.Message == "Invalid User name") {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()("Invalid User name");
            }
            else if (_this.data.Message == "Password is Incorrect") {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()("Password is Incorrect");
            }
            else if (_this.data.Message == "One Time Password is not verified.Please register Again") {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()("One Time Password is not verified.Please register Again");
            }
        });
    };
    ;
    LoginArbicComponent.prototype.newsletter = function (model) {
        var _this = this;
        this.apiService.newsletter(model).subscribe(function (response) {
            _this.data = response;
            console.log(_this.data);
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()(_this.data.Message + "<br>" + "اشتركت بنجاح في النشرة الإخبارية");
        });
    };
    ;
    LoginArbicComponent.prototype.forgetotpverification = function (model) {
        var _this = this;
        console.log("enter in to otp login ts service", this.model.otp);
        this.apiService.forgetotpverification(model).subscribe(function (response) {
            _this.data = response;
            if (_this.data.status == "true") {
                console.log("data=====>", _this.data);
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()('Password updated successfully' + "<br>" + "التسجيل ناجح");
                _this.router.navigate(['/login']);
            }
            else if (_this.data.message == "Invalid one time password") {
                console.log("kavitha");
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()('Invalid one time password' + "<br>" + "كلمة مرور غير صالحة مرة واحدة");
            }
        });
    };
    ;
    LoginArbicComponent.prototype.forgetpassword = function (model) {
        var _this = this;
        this.apiService.forgetpassword(model).subscribe(function (response) {
            _this.data = response;
            if (_this.data.Message == "Password should not be a previously used one") {
                document.getElementById('id03').style.display = 'none';
                console.log("data=====>", _this.data);
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()(_this.data.Message + "<br>" + "كلمة المرور لا يجب أن تكون كلمة مرور سبق استخدامها");
            }
            else if (_this.data.Message == "password is updated") {
                document.getElementById('id03').style.display = 'block';
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()(_this.data.Message + "<br>" + "");
            }
            else if (_this.data.Message == "password doesn't match") {
                document.getElementById('id03').style.display = 'none';
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()(_this.data.Message + "<br>" + "");
            }
            else if (_this.data.Message == "Invalid User Name") {
                document.getElementById('id03').style.display = 'none';
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()(_this.data.Message + "<br>" + "");
            }
            else if (_this.data.Message == "Please fill all the details") {
                document.getElementById('id03').style.display = 'none';
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()(_this.data.Message + "<br>" + "");
            }
        });
    };
    ;
    LoginArbicComponent.prototype.onSubmit = function () {
        // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
    };
    LoginArbicComponent.prototype.resolved = function (captchaResponse) {
        console.log("Resolved captcha with response " + captchaResponse + ":");
    };
    LoginArbicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-arbic',
            template: __webpack_require__(/*! ./login-arbic.component.html */ "./src/app/login-arbic/login-arbic.component.html"),
            styles: [__webpack_require__(/*! ./login-arbic.component.css */ "./src/app/login-arbic/login-arbic.component.css")]
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["APIService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ng2_simple_global__WEBPACK_IMPORTED_MODULE_4__["SimpleGlobal"]])
    ], LoginArbicComponent);
    return LoginArbicComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n/* desktop  css */\n  .intro-2 {\n    background: url(\"/assets/Group_home.png\")no-repeat center center;\n    background-size: cover;\n  \n  }\n  .logov2 {\n    background: url(\"/assets/loginv2-2.png\")no-repeat center center;\n    background-size: cover;\n  \n  }\n  .intro-4 {\n    background: url(\"/assets/uae-sharjah-february-1-2016-al-qasba-canal-and-ferris-wheel-in-sharjah-city-united-arab-emirates-sharjah-third-largest-and-third-most-populous-city-in-uae-and-capital-of-emirate-of-sharjah-si-8-s-adm-f-0000@3x.png\") center center;\n    background-size: cover;\n  \n  }\n  .intro-3 {\n    \n    background-size: cover;\n  \n  }\n  .Line-2{\n    width: 97px;\n  height: 0.1px;\n  }\n  .New-to-Aman-Registe {\n    width: 0;\n    height: 0;\n    font-family: ProximaNova;\n    font-size: 16px;\n    font-weight: 200;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 3.25;\n    letter-spacing: normal;\n    color: #f34235;\n  }\n  /* ======login form start========= */\n  /* Full-width input fields */\n  input[type=text], input[type=password] {\n    width: 100%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    display: inline-block;\n    border: 1px solid #ccc;\n    box-sizing: border-box;\n  }\n  /* Set a style for all buttons */\n  /* button {\n    background-color:#f34235;\n    color: white;\n    padding: 14px 20px;\n    margin: 8px 0;\n    border: none;\n    cursor: pointer;\n    width: 100%;\n  } */\n  button:hover {\n    opacity: 0.8;\n  }\n  /* Extra styles for the cancel button */\n  .cancelbtn {\n    width: auto;\n    padding: 10px 18px;\n    background-color: #f44336;\n  }\n  /* Center the image and position the close button */\n  .imgcontainer {\n    text-align: center;\n    margin: 24px 0 12px 0;\n    position: relative;\n  }\n  img.avatar {\n    width: 40%;\n    border-radius: 50%;\n  }\n  .container {\n    padding: 16px;\n  }\n  span.psw {\n    float: right;\n    padding-top: 16px;\n  }\n  /* The Modal (background) */\n  .modal {\n    display: none; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n    padding-top: 60px;\n  }\n  /* Modal Content/Box */\n  .modal-content {\n    background-color: #fefefe;\n    margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */\n    border: 1px solid #888;\n    width: 80%; /* Could be more or less, depending on screen size */\n  }\n  /* The Close Button (x) */\n  .close {\n    position: absolute;\n    right: 25px;\n    top: 0;\n    color: #000;\n    font-size: 35px;\n    font-weight: bold;\n  }\n  .close:hover,\n  .close:focus {\n    color: red;\n    cursor: pointer;\n  }\n  /* Add Zoom Animation */\n  .animate {\n    -webkit-animation: animatezoom 0.6s;\n    animation: animatezoom 0.6s\n  }\n  @-webkit-keyframes animatezoom {\n    from {-webkit-transform: scale(0)} \n    to {-webkit-transform: scale(1)}\n  }\n  @keyframes animatezoom {\n    from {-webkit-transform: scale(0);transform: scale(0)} \n    to {-webkit-transform: scale(1);transform: scale(1)}\n  }\n  /* ===Mobile navbar start=========== */\n  /* =========Mobile navbar End========== */\n  /* ========login form end====== */\n  .intro-3{\n    background: url(\"/assets/loginsaned1.png\")no-repeat center center;\n    background-size: cover;\n    /* width: 1440px;\n  height: 380px; */\n  -o-object-fit: contain;\n     object-fit: contain;\n  \n  }\n  .Delivering-your-divi {\n    /* width: 699px;\n    height: 168px; */\n    font-family: Roboto;\n    font-size: 30px;\n    font-weight: 500;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #ffffff;\n  }\n  .Its-about-more-than {\n    width: 588px;\n    height: 90px;\n    font-family: Roboto;\n    font-size: 18.8px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.6;\n    letter-spacing: normal;\n    color: #ffffff;\n  }\n  .Know-More-Copy-2 {\n    width: 92px;\n    height: 24px;\n    font-family: Roboto;\n    font-size: 18px;\n    margin-left: -11px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #f34235;\n  }\n  .tail-left-copy-3 {\n    width: 63px;\n    height: 10px;\n    margin-top: 8px;\n    -o-object-fit: contain;\n       object-fit: contain;\n  }\n  /* //====================text font size */\n  .WHAT-IS-Aman- {\n    width: 313px;\n  height: 53px;\n  font-family: Roboto;\n  font-size: 33px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.18;\n  letter-spacing: normal;\n  color: var(--black);\n  }\n  .Sharjah-Asset-Manage {\n    /* width: 535px; */\n    /* height: 283px; */\n    font-family: Roboto;\n    font-size: 16px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    /* color: black */\n  }\n  /* //====================text font size */\n  .A-cutting-edge-build {\n    width: 416px;\n    height: 142px;\n    font-family: Roboto;\n    font-size: 18px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #282828;\n  }\n  .Know-More {\n    width: 92px;\n    height: 24px;\n    font-family: Roboto;\n    font-size: 18px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color:red;\n  }\n  .benefits {\n    width: 313px;\n    height: 53px;\n    font-family: Roboto;\n    font-size: 35px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.18;\n    letter-spacing: normal;\n    color: var(--black);\n  }\n  .Reduce-the-impact-of {\n    width: 502px;\n    height: 118px;\n    font-family: Roboto;\n    font-size: 18px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 2.06;\n    letter-spacing: normal;\n    color: #282828;\n  }\n  .Know-More-Copy {\n    width: 92px;\n    height: 24px;\n    font-family: Roboto;\n    font-size: 18px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #f34235;\n  }\n  .tail-left-copy-2 {\n    width: 39px;\n    height: 11px;\n    margin-left: 12px;\n    -o-object-fit: contain;\n       object-fit: contain;\n  }\n  .Remember-Me {\n    width: 119px;\n    height: 59px;\n    font-family: ProximaNova;\n    font-size: 16px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 3.25;\n    letter-spacing: normal;\n    color: #4a4a4a;\n  }\n  .Sign-in {\n    width: 104px;\n    height: 30px;\n    font-family: ProximaNova;\n    font-size: 24px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.25;\n    letter-spacing: 0.5px;\n    text-align: center;\n    color: #ffffff;\n  }\n  .Rectangle-5 {\n    width: 331px;\n    height: 59px;\n    border-radius: 2px;\n    background-color: #f34235;\n  }\n  .Rectangle-4 {\n    width: 12px;\n    height: 12px;\n    border-radius: 2px;\n  }\n  .Welcome-To-Aman {\n    width: 262px;\n    height: 40px;\n    /* margin-left: 80px; */\n    font-family: Roboto;\n    font-size: 19px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.25;\n    letter-spacing: normal;\n    color: var(--black);\n  }\n  .Line-2 {\n    width: 97px;\n    height: 0.1px;\n  }\n  .Mask {\n    width: 399px;\n    height: 440px;\n    border-radius: 8px;\n    /* box-shadow: 0 8px 9px 0 rgba(0, 0, 0, 0.14);\n    background-color:#f34235; */\n  }\n  .loginc {\n    width: 262px;\n    height: 40px;\n    font-family: Roboto;\n    font-size: 18px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.25;\n    letter-spacing: normal;\n    color: var(--black);\n  }\n  .input{\n      width:331px\n  }\n  .home{\n    font-family: Roboto-Bold;\n    font-size: 16px;\n    line-height: 14px;\n  letter-spacing: 0;\n  }\n  .about{\n    font-family: Roboto;\n    font-size: 13px;\n    line-height: 15px;\n  letter-spacing: 0;\n  }\n  .letstalk {\n    width: 674px;\n    height: 75px;\n    margin-top:-250px;\n    font-family: Roboto;\n    font-size: 64px;\n    font-weight: 500;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 0.58;\n    letter-spacing: normal;\n    text-align: center;\n    color: #ffffff;\n  }\n  .Know-More-Copy-3 {\n    width: 92px;\n    height: 24px;\n    font-family: Roboto;\n    font-size: 18px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #f34235;\n  }\n  .uae-sharjah-february-1-2016-al-qasba-canal-and-ferris-wheel-in-sharjah-city-united-arab-emirates-sharjah-third-largest-and-third-most-populous-city-in-uae-and-capital-of-emirate-of-sharjah_si8s-adm__F0000 {\n    width: 1440px;\n    height: 380px;\n    -o-object-fit: contain;\n       object-fit: contain;\n  }\n  .btn .fa {\n    margin-left: 3px;\n  }\n  .top-nav-collapse {\n    /* background-color: #402f2fad !important; */\n  }\n  .navbar:not(.top-nav-collapse) {\n    /* background: #402f2fad !important; */\n  }\n  /* @media (max-width: 768px) {\n    .navbar:not(.top-nav-collapse) {\n        background: #402f2fad !important;\n    }\n  } */\n  @media only screen and (max-width: 600px) {\n    .navbar:not(.top-nav-collapse) {\n      background-color: green;\n    }\n  }\n  h6 {\n    line-height: 1.7;\n  }\n  .hm-gradient .full-bg-img {\n    background: linear-gradient(to 45deg, rgba(42, 27, 161, 0.6), rgba(29, 210, 177, 0.6) 100%);\n  }\n  @media (max-width: 450px) {\n    .margins {\n        margin-right: 1rem;\n        margin-left: 1rem;\n    }\n  }\n  @media (max-width: 740px) {\n    .full-height,\n    .full-height body,\n    .full-height header,\n    .full-height header .view {\n        height: 1040px;\n    }\n  }\n  /* \n  ===== */\n  .row.heading h2 {\n    color: #fff;\n    font-size: 52.52px;\n    line-height: 95px;\n    font-weight: 400;\n    text-align: center;\n    margin: 0 0 40px;\n    padding-bottom: 20px;\n    text-transform: uppercase;\n  }\n  ul{\n  margin:0;\n  padding:0;\n  list-style:none;\n  }\n  .heading.heading-icon {\n    display: block;\n  }\n  .padding-lg {\n  display: block;\n  padding-top: 60px;\n  padding-bottom: 60px;\n  }\n  .practice-area.padding-lg {\n    padding-bottom: 55px;\n    padding-top: 55px;\n  }\n  .practice-area .inner{ \n     border:1px solid #999999; \n   text-align:center; \n   margin-bottom:28px; \n   padding:40px 25px;\n  }\n  .our-webcoderskull .cnt-block:hover {\n    box-shadow: 0px 0px 10px rgba(0,0,0,0.3);\n    border: 0;\n  }\n  .practice-area .inner h3{ \n    color:#3c3c3c; \n  font-size:24px; \n  font-weight:500;\n  font-family: 'Poppins', sans-serif;\n  padding: 10px 0;\n  }\n  .practice-area .inner p{ \n    font-size:14px; \n  line-height:22px; \n  font-weight:400;\n  }\n  .practice-area .inner img{\n  display:inline-block;\n  }\n  .buttonrreg {\n    background-color: #f3423500;\n    color: #fd3325;\n    /* padding: -4px 20px; */\n    margin: 8px 14;\n    border: none;\n    cursor: pointer;\n    width: 100px;\n  }\n  /* .our-webcoderskull{\n  background: url(\"http://www.webcoderskull.com/img/right-sider-banner.png\") no-repeat center top / cover;\n  \n  } */\n  .our-webcoderskull .cnt-block{ \n   float:left; \n   width:100%; \n   background:#fff; \n   padding:30px 20px; \n   text-align:center; \n   border:2px solid #d5d5d5;\n   margin: 0 0 28px;\n  }\n  .our-webcoderskull .cnt-block figure{\n   width:148px; \n   height:148px; \n   border-radius:100%; \n   display:inline-block;\n   margin-bottom: 15px;\n  }\n  .our-webcoderskull .cnt-block img{ \n   width:148px; \n   height:148px; \n   border-radius:100%; \n  }\n  .our-webcoderskull .cnt-block h3{ \n   color:#2a2a2a; \n   font-size:20px; \n   font-weight:500; \n   padding:6px 0;\n   text-transform:uppercase;\n  }\n  .our-webcoderskull .cnt-block h3 a{\n  text-decoration:none;\n  color:#2a2a2a;\n  }\n  .our-webcoderskull .cnt-block h3 a:hover{\n  color:#337ab7;\n  }\n  .our-webcoderskull .cnt-block p{ \n   color:#2a2a2a; \n   font-size:13px; \n   line-height:20px; \n   font-weight:400;\n  }\n  .our-webcoderskull .cnt-block .follow-us{\n  margin:20px 0 0;\n  }\n  .our-webcoderskull .cnt-block .follow-us li{ \n    display:inline-block; \n  width:auto; \n  margin:0 5px;\n  }\n  .our-webcoderskull .cnt-block .follow-us li .fa{ \n   font-size:24px; \n   color:#767676;\n  }\n  .our-webcoderskull .cnt-block .follow-us li .fa:hover{ \n   color:#025a8e;\n  }\n  /* section{\n    padding: 100px 0;\n  } */\n  /* .details-card {\n  background: #ecf0f1;\n  } */\n  .card-content {\n  background: #ffffff;\n  border: 4px;\n  box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);\n  }\n  .card-img {\n  position: relative;\n  overflow: hidden;\n  border-radius: 0;\n  z-index: 1;\n  }\n  .card-img img {\n  width: 100%;\n  height: auto;\n  display: block;\n  }\n  .card-img span {\n  position: absolute;\n    top: 15%;\n    left: 12%;\n    background: #1ABC9C;\n    padding: 6px;\n    color: #fff;\n    font-size: 12px;\n    border-radius: 4px;\n    -webkit-border-radius: 4px;\n    -moz-border-radius: 4px;\n    -ms-border-radius: 4px;\n    -o-border-radius: 4px;\n    -webkit-transform: translate(-50%,-50%);\n            transform: translate(-50%,-50%);\n  }\n  span.blog{\n   color:  #f5a623\n  \n  }\n  .card-img span h4{\n        font-size: 12px;\n        margin:0;\n        padding:10px 15px;\n         line-height: 0;\n  }\n  .card-desc {\n  padding: 1.25rem;\n  }\n  .card-desc h3 {\n  color: #000000;\n    font-weight: 600;\n    font-size: 1.5em;\n    line-height: 1.3em;\n    margin-top: 0;\n    margin-bottom: 5px;\n    padding: 0;\n  }\n  .card-desc p {\n  color: #747373;\n    font-size: 14px;\n  font-weight: 400;\n  font-size: 1em;\n  line-height: 1.5;\n  margin: 0px;\n  margin-bottom: 20px;\n  padding: 0;\n  font-family: 'Raleway', sans-serif;\n  }\n  .btn-card1{\n    background-color: #f5a623;\n    color: #fff;\n  box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);\n    padding: .84rem 2.14rem;\n    font-size: .81rem;\n    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n    margin: 0;\n    border: 0;\n    border-radius: .125rem;\n    cursor: pointer;\n    text-transform: uppercase;\n    white-space: normal;\n    word-wrap: break-word;\n    color: #fff;\n  }\n  .btn-card3{\n    background-color: #4a90e2;\n    color: #fff;\n  box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);\n    padding: .84rem 2.14rem;\n    font-size: .81rem;\n    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n    margin: 0;\n    border: 0;\n    border-radius: .125rem;\n    cursor: pointer;\n    text-transform: uppercase;\n    white-space: normal;\n    word-wrap: break-word;\n    color: #fff;\n  }\n  .btn-card2{\n    background-color: #bd10e0;\n    color: #fff;\n  box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);\n    padding: .84rem 2.14rem;\n    font-size: .81rem;\n    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n    margin: 0;\n    border: 0;\n    border-radius: .125rem;\n    cursor: pointer;\n    text-transform: uppercase;\n    white-space: normal;\n    word-wrap: break-word;\n    color: #fff;\n  }\n  .btn-card{\n  background-color: #1ABC9C;\n  color: #fff;\n  box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);\n    padding: .84rem 2.14rem;\n    font-size: .81rem;\n    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n    margin: 0;\n    border: 0;\n    border-radius: .125rem;\n    cursor: pointer;\n    text-transform: uppercase;\n    white-space: normal;\n    word-wrap: break-word;\n    color: #fff;\n  }\n  .btn-card:hover {\n    background: orange;\n  }\n  a.btn-card {\n    text-decoration: none;\n    color: #fff;\n  }\n  .bb{\n    background: url(\"/assets/bb.png\")no-repeat center center;\n    background-size: cover;\n    \n    }\n  /* ====================responsive================= */\n  .mt_20{\n    margin-top: 0px;\n  }\n  .wt_237{\n  width: 237px;\n}\n  .wt-con{\n  width: 232px;\n}\n  .wt_140{\n  width: 140% !important;\n}\n  /* .ft_18 {\n    font-size: 30px !important;\n} */\n  /* mobile media query */\n  /* Extra small devices (portrait phones, less than 576px) */\n  @media (min-width: 576px) and (max-width: 767.98px) {\n\n  .nav-bg {\n    background-color: rgba(0, 0, 0, 0.65) !important;\n  }\n  .ml_mr{\n    margin-right: 61px !important;\n    margin-left: -22px !important;\n  }\n  .mt-2, .my-2 {\n    margin-top: -1.5rem!important;\n}\n  .pt-120{\n    position: relative;\n    right: 90px;\n  }\n  .mt-414{\n    margin-top: 0px !important;\n  }\n  .ft_18 {\n    font-size: 17px !important;\n}\n.ml_33{\n  /* margin-left: -20px !important; */\n  margin-top: -15px;\n\n  /* width: 90%; */\n \n }\n   \n}\n  /* Extra small devices (portrait phones, less than 576px) */\n  @media (max-width: 575.98px) { \n  .nav-bg {\n    background-color: rgba(0, 0, 0, 0.65) !important;\n  }\n  .ml_mr{\n    margin-right: 61px !important;\n    margin-left: -22px !important;\n  }\n  .mt-2, .my-2 {\n    margin-top: -1.5rem!important;\n}\n  .pt-120{\n    position: relative;\n    right: 90px;\n  }\n  .mt-414{\n    margin-top: 0px !important;\n  }\n  .ft_18 {\n    font-size: 20px !important;\n}\n.ml_33{\n  margin-left: -20px !important;\n  width: 90%;\n  /* background: #000; */\n }\n}\n  /* only for iphone 5s */\n  @media (width: 568px) { \n  .nav-bg {\n    background-color: rgba(0, 0, 0, 0.65) !important;\n  }\n  .ml_mr{\n    margin-right: 61px !important;\n    margin-left: -22px !important;\n  }\n  .mt-2, .my-2 {\n    margin-top: -1.5rem!important;\n}\n  .pt-120{\n    position: relative;\n    right: 90px;\n  }\n  .mt-414{\n    margin-top: 0px !important;\n  }\n  .ft_18 {\n    font-size: 14px !important;\n}\n.ml_33{\n  margin-left: -20px !important;\n  margin-top: -70px;\n  width: 67%;\n  /* background:green; */\n }\n}\n  /* @media screen and (min-device-width: 320px) and (max-device-width: 760px){\n  .nav-bg {\n    background-color: rgba(0, 0, 0, 0.65) !important;\n  }\n  .ml_mr{\n    margin-right: 61px !important;\n    margin-left: -22px !important;\n  }\n  .mt-2, .my-2 {\n    margin-top: -1.5rem!important;\n}\n  .pt-120{\n    position: relative;\n    right: 90px;\n  }\n  .mt-414{\n    margin-top: 0px !important;\n  }\n  .ft_18 {\n    font-size: 17px !important;\n}\n.ml_33{\n  margin-left: -20px !important;\n  width: 90%;\n}\n} */\n  /* css for ipad */\n  @media screen and (min-device-width: 768px) and (max-device-width: 1022px){\n  .nav-bg {\n    /* background-color: rgba(0, 0, 0, 0.65) !important; */\n  }\n  .maxwt_19{\n    max-width: 19%;\n  }\n  .wt_135{\nwidth: 135px !important;\n  }\n  .map_wt{\n    width: 175px !important;\n  }\n  .ml_135{\n    margin-left: 0px !important;\n  }\n  .ml_16{\n    margin-left: -16px !important;\n  }\n.logo_wt{\n  width: 109px;\n}\n  .col-sm-2{\n    width : 0% ! important;\n  }\n\n  .mt_20{\n    margin-top: 4px !important; \n    shape-margin: 0px !important;\n  }\n\n  .ht_80{\n    height:54px !important\n  }\n\n  .pt-120{\n    position: relative;\n    right: 79px;\n  }\n  .mt-414{\n    margin-top:0px !important;\n  }\n\n  .ml-5, .mx-5 {\n    margin-left: 2.2rem !important;\n}\n\n.pad_0{\npadding:0 0px !important;\n}\n  .ft_18 {\n    font-size: 20px;\n  }\n\n  .wt_106{\n    width: 106% !important;\n  }\n\n  .ml_33{\n    margin-left: -20px !important;\n    margin-top: -30px;\n    /* width: 90%; */\n   }\n\n}\n  @media screen and (min-device-width: 1023px) and (max-device-width: 1024px){\n  .nav-bg {\n    /* background-color: rgba(0, 0, 0, 0.65) !important; */\n  }\n  .maxwt_19{\n    max-width: 19%;\n  }\n \n  .wt_135{\nwidth: 135px !important;\n  }\n  .map_wt{\n    width: 175px !important;\n  }\n  .ml_135{\n    margin-left: 0px !important;\n  }\n    /* .ml_16{\n      margin-left: -16px !important;\n    } */\n.logo_wt{\n  width: 109px;\n}\n  .col-sm-2{\n    /* width : 0% ! important; */\n  }\n\n  .mt_20{\n    \n      margin-top: 4px !important; \n    \n    shape-margin: 0px !important;\n  }\n\n  /* .ht_80{\n    height:54px !important\n  } */\n\n  .pt-120{\n    position: relative;\n    /* right: 79px; */\n  }\n  .mt-414{\n    margin-top:0px !important;\n  }\n\n  .ml-5, .mx-5 {\n    margin-left: 2.2rem !important;\n}\n\n.pad_0{\npadding:0 0px !important;\n}\n  .ft_18 {\n    font-size: 30px;\n  \n  }\n\n  .wt_106{\n    width: 106% !important;\n  }\n.img_res{\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: relative;\n}\n\n}\n  body {\n  margin: 0;\n  margin-top: -58px;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 1rem;\n  margin-top: -20px;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  text-align: right;\n  background-color: #fff;\n}\n  body {\n  font-family: Arial, Helvetica, sans-serif;\n}\n  nav {\n  width: 100%;\n  height: 50px;\n  background: rgba(0, 0, 0, .8);\n  border-top: 1px solid rgba(255, 255);\n  border-bottom: 1px solid rgba(255, 255);\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0px;\n  z-index: 99;\n}\n  header {\n  padding: 10px 100px;\n  box-sizing: border-box;\n}\n  section.card {\n  width: 100%;\n  height: 100vh;\n}\n  .dropdown {\n  float: left;\n  overflow: hidden;\n}\n  .dropdown .dropbtn {\n  font-size: 16px;\n  border: none;\n  outline: none;\n  color: white;\n  padding: 14px 16px;\n  background-color: inherit;\n  font-family: inherit;\n  margin: 0;\n}\n  .mt_200 {\n  /* margin: 220px !important; */\n}\n  .navbar a:hover,\n.dropdown:hover .dropbtn {\n  /* background-color: red; */\n}\n  .dropdown-content {\n  display: block;\n  position: absolute;\n  background-color: red;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n}\n  .dropdown-content a {\n  float: none;\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n  text-align: left;\n}\n  .dropdown-content a:hover {\n  background-color: #ddd;\n}\n  ul {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n  ul li a {\n  text-decoration: none;\n  color: #e74c3c;\n  font-family: Tahoma, Arial;\n}\n  .navigation {\n  background-color: #35353500;\n  /* width: 62%; */\n  margin: 20px auto;\n  min-height: 50px;\n\n}\n  .navigation>li {\n  float: left;\n  padding: 0 20px;\n}\n  .navigation>li>a {\n  line-height: 50px;\n  color: #FFF;\n}\n  .navigation .menu {\n  position: relative\n}\n  .navigation .menu .submenu {\n  position: absolute;\n  /* width: 200px; */\n  box-shadow: 0px 1px 1px #CCC;\n  display: none;\n  transition: all .5s ease-in-out;\n}\n  .navigation .menu:hover .submenu {\n  display: block\n}\n  .navigation .menu .submenu:before {\n  content: \"\";\n  position: absolute;\n  display: block;\n  border-width: 0 6px 6px 6px;\n  border-style: solid;\n  border-color: #FFF transparent;\n  top: -6px;\n  left: 5px\n}\n  .navigation .menu .submenu li {\n  padding: 5px 10px;\n  transition: all .5s ease-in-out;\n}\n  .navigation .menu .submenu li:hover {\n  background-color: #e74c3c;\n}\n  .navigation .menu .submenu li:hover a {\n  color: #FFF;\n  /* padding: 0 11px; */\n}\n  .dropdown:hover .dropdown-content {\n  display: block;\n}\n  nav {\n  width: 100%;\n  height: 50px;\n  background: rgba(0, 0, 0, .8);\n  border-top: 1px solid rgba(255, 255);\n  border-bottom: 1px solid rgba(255, 255);\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0px;\n  z-index: 99\n}\n  nav ul {\n  display: flex;\n  margin: 0px;\n  padding: 0px;\n  float: right;\n}\n  nav ul li {\n  list-style: none;\n}\n  nav ul {\n  display: flex;\n\n  padding: 0px;\n  /* float: ; */\n}\n  nav ul li a {\n  display: block;\n  color: #fff;\n  padding: 0 20px;\n  text-decoration: none;\n  text-transform: uppercase;\n  font-weight: bold;\n  line-height: 50px;\n\n}\n  /* ==============footer style start ========= */\n  .footer {\n  /* position: fixed; */\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background-color: black;\n  color: white;\n  text-align: center;\n  /* height: 75px; */\n}\n  .container1 {\n  background: black;\n  /* color: white */\n}\n  .social:hover {\n  -webkit-transform: scale(1.1);\n  -moz-transform: scale(1.1);\n  -o-transform: scale(1.1);\n}\n  .social {\n  -webkit-transform: scale(0.8);\n  /* Browser Variations: */\n\n  -moz-transform: scale(0.8);\n  -o-transform: scale(0.8);\n  -webkit-transition-duration: 0.5s;\n  -moz-transition-duration: 0.5s;\n  -o-transition-duration: 0.5s;\n}\n  .fa {\n  padding: 20px;\n  font-size: 30px;\n  width: 30px;\n  text-align: center;\n  text-decoration: none;\n  border-radius: 50%;\n}\n  .img-thumbnail {\n  background: black;\n  border-color: black\n}\n  .home {\n  font-family: sans-serif;\n  font-size: 14px;\n  line-height: 14px;\n  letter-spacing: 0;\n}\n  .about {\n  font-family: sans-serif;\n  font-size: 13px;\n  line-height: 15px;\n  letter-spacing: 0;\n}\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'>\n<style>\n  @import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');\n</style>\n\n\n<!--Intro Section-->\n<section class=\"view intro-2 hm-gradient container-fluid\" style=\"width: 100%; height: 100vh;\" dir=\"\">\n\n  <div class=\"row\">\n    <div class=\"col-md-5 p-0\">\n      <img src=\"./assets/group.png\" class=\"img-fluid\">\n    </div>\n\n    <div class=\"col-md-6 mt-0 mt-md-5 text-right\">\n      &nbsp; &nbsp;\n\n      <font style=\"color:#F90E35\">English</font>&nbsp;\n      <input type=\"radio\" checked>&nbsp;\n\n\n\n      <font color=\"white\"> عربى </font>\n      <input name=\"Lang\" style=\"color:#ff0000;\" checked [(ngModel)]=\"Lang\" type=\"radio\" [value]=\"true\"\n        routerLink=\"/login-arbic\" [checked]=\"Lang\" />&nbsp;\n\n    </div>\n  </div>\n  <div class=\"col-md-6\">\n\n\n    <div id=\"logout\" style=\"display:none\">\n      <br><br>\n      <input type=\"radio\" routerLink=\"/login-arbic\" />\n      <font color=\"white\">عربى</font>\n\n     \n      &nbsp; &nbsp; <input type=\"radio\" checked />\n      <font style=\"color:#F90E35\">English</font> &nbsp; &nbsp; &nbsp;\n\n    </div>\n\n\n    <div id=\"id01\" class=\"modal\">\n\n      <form class=\"col-md-4 modal-content animate\">\n        <div class=\"imgcontainer\">\n          <span onclick=\"document.getElementById('id01').style.display='none'\" class=\"close\"\n            title=\"Close Modal\">&times;</span>\n          <br>\n          <a class=\"Welcome-To-Aman\">{{'Welcome to SANED'| translate:user}}</a>\n        </div>\n\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <label class=\"col-md text-left\"><b>Email ID</b></label>\n              <input type=\"text\" class=\"w3-input\" id=\"email\" required [(ngModel)]=\"model.email\" name=\"name\"\n                #name=\"ngModel\">\n\n              <label class=\"col-md text-left\"><b>Password</b> </label>\n              <input type=\"password\" class=\"w3-input\" id=\"password\" required [(ngModel)]=\"model.password\"\n                name=\"password\" #password=\"ngModel\">\n\n              <label class=\"col-md text-left\">\n                <input type=\"checkbox\" class=\"Rectangle-4 \"> Remember me\n\n                <a onclick=\"document.getElementById('id02').style.display='block'\" class=\"ml-5\">Forgot\n                  password?</a></label>\n              <button class=\"w3-btn w3-red col-md-12\" (click)=\"login(model)\" style=\"background: red;\n                                   color: white;\n                                   height: 47px;\"><a class=\"\">Submit</a></button>\n              <p>New to Saned?<a routerLink=\"/register-form\" class=\"Mask ml-2\">\n                  <font color=\"#f34235\">Register Here</font>\n                </a></p>\n            </div>\n          </div>\n\n        </div>\n\n\n      </form>\n    </div>\n    <div id=\"id02\" style=\"display:none\" class=\"modal\">\n\n      <form class=\"col-md-4 modal-content animate\">\n        <div class=\"imgcontainer\">\n          <span onclick=\"document.getElementById('id02').style.display='none'\" class=\"close\"\n            title=\"Close Modal\">&times;</span>\n          <br>\n          <a class=\"Welcome-To-Aman\">{{'Forgot password'| translate:user}}</a>\n        </div>\n        <br>\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <label class=\"col-md text-left\"><b>Email</b></label>\n              <input type=\"text\" class=\"w3-input\" id=\"contact_email\" required [(ngModel)]=\"model.email\" name=\"email\"\n                #name=\"ngModel\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$\">\n              <div [hidden]=\"name.email || name.pristine\" class=\"alert\" style=\"color: #f54b5e;\">\n                Invalid Email Address\n              </div>\n\n\n              <label class=\"col-md text-left\"><b>New Password</b> </label>\n              <input type=\"password\" class=\"w3-input\" id=\"new_password\" required [(ngModel)]=\"model.password\"\n                name=\"password\" #password=\"ngModel\">\n\n              <label class=\"col-md text-left\"><b>Confirm Password</b></label>\n              <input type=\"password\" class=\"w3-input\" id=\"confirmpassword\" required [(ngModel)]=\"model.confirmpassword\"\n                name=\"name\" #name=\"ngModel\">\n\n              <button class=\"w3-btn w3-red col-md-12\" onclick=\"document.getElementById('id03').style.display='block'\"\n                (click)=\"forgetpassword(model)\" style=\"background: red;\n                                   color: white;\n                                   height: 47px;\"><a class=\"\">Submit</a></button>\n\n            </div>\n          </div>\n        </div>\n\n\n      </form>\n    </div>\n    <!-- ===========otp start========= -->\n    <div id=\"id03\" class=\"modal\">\n\n      <form class=\"modal-content animate col-md-4\" action=\"/action_page.php\">\n        <div class=\"imgcontainer\">\n          <span onclick=\"document.getElementById('id03').style.display='none'\" class=\"close\"\n            title=\"close\">&times;</span>\n          <!-- <img src=\"/assets/otp.png\" alt=\"\" class=\"avatar\"> -->\n          <h4>Enter One Time Password</h4>\n        </div>\n\n        <div class=\"\">\n          <p for=\"uname\" style=\"font-size: 18px;text-align:justify\" class=\"text-center\">One Time Password\n            has\n            been sent to your email address and mobile number</p>\n\n          <input type=\"text\" class=\"form-control col-md-12 inline\" id=\"otp\" required [(ngModel)]=\"model.otp\" name=\"name\"\n            #name=\"ngModel\">\n\n\n          <button style=\"background-color: #ff0000;height: 47px;\n                                   color: white;\" class=\"w3-btn w3-red col-md-12\"\n            (click)=\"forgetotpverification(model)\" type=\"submit\">Submit</button>\n\n        </div>\n        <br><br><br>\n\n      </form>\n    </div>\n    <!-- ======otp end========== -->\n\n  </div>\n\n  <div class=\"container-fluid\">\n    <div class=\"row mt-5 mt-sm-0 mt-md-5\">\n      <div class=\"col-md-7 col-sm-7 \">\n        <!-- <h1>hai</h1> -->\n        <div class=\"ml_33\">\n          <a class=\"h1-responsive Delivering-your-divi ft_18\" data-wow-delay=\"0.3s\">\n            <font color=\"white\"><b>Welcome to SANED</b> - We manage and run\n              your real estate and technical facilities and\n              support you in your core business with our\n              wide range of services.</font>\n          </a>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n</section>\n\n\n\n<app-navbar style=\"position: relative; bottom:80px;\"></app-navbar>\n\n<br>\n\n<div class=\"container-fluid\">\n\n\n  <div class=\"card\" style=\"border-radius: 18px; margin-top: -44px;\n                          background: white;\">\n\n    <div class=\"row mx-3\">\n\n\n\n      <div class=\"col-md-6\">\n\n        <br>\n        <a class=\"WHAT-IS-Aman-\">WHAT IS AMAN ?</a>\n\n        <br>\n        <br>\n\n        <p class=\"Sharjah-Asset-Manage text-justify\">\n\n          To ensure fast response to fire emergencies, SPSA partnered with SANED have initiated “AMAN” project. AMAN,\n          aims\n          to protect lives and properties by establishing a safe and reliable connection between all firefighting\n          systems\n          in all properties in Sharjah, with the central monitoring station that is continuously monitored to identify\n          and\n          respond to emergencies instantly ensuring the safety of people and assets.\n          <br>\n          <br>\n\n        </p>\n      </div>\n\n      <br>\n\n      <div class=\"col-md-6\">\n        <br>\n\n        <a class=\"WHAT-IS-Aman-\">WHAT IS SALAMA ?</a>\n        <br>\n        <br>\n        <p class=\"Sharjah-Asset-Manage text-justify\">\n          SALAMA is a high-level training center established as a collaboration between Sharjah Prevention and Safety\n          Authority (SPSA) and SANED, to serve the various sectors in the Emirate of Sharjah, providing specialized\n          training programs in the prevention and safety of workers within the private and public sectors.\n\n          <br>\n\n        </p>\n        <!-- </div> -->\n      </div>\n\n      <div class=\"col-md-6\">\n        <br>\n        <br>\n        <a class=\"WHAT-IS-Aman-\">INTEGRATED FACILITY MANAGEMENT</a>\n        <br>\n        <br>\n        <p class=\"Sharjah-Asset-Manage text-justify\">\n          SANED offers the best in class services across all industries and multiple sites with a robust and systematic\n          service delivery model, designed to complement the strategic and operational objectives of an organization.\n          Integrating key functions like processes and technologies with people to ensure flexibility for future\n          integration and supported by the latest CAFM (computer aided facilities management) systems and platforms and\n          Integrated packages in Microsoft for all backend business processes - SANED has partnered with clients to\n          deliver and maintain consistently high service levels, operational efficiency and continuous improvement.\n          Reduced down time, maximizing revenues with lower operating costs, eliminating duplications are some of our\n          key\n          result areas (KRA’s).\n\n\n          <br>\n\n        </p>\n\n      </div>\n\n\n\n\n\n\n\n    </div>\n\n    <br>\n    <br>\n\n\n\n    <section class=\"\">\n      <div class=\"\">\n        <div class=\"row \">\n\n          <!-- <div class=\"col-md-2\"></div> -->\n          <div class=\"col-md-7\">\n\n            <img src=\"./assets/home1.png\" srcset=\"./assets/home1@2x.png 2x,\n                      ./assets/home1@3x.png 3x\" class=\"img-responsive\" width=\"100%\" height=\"95%\">\n            <br>\n            <!-- <p>hello moto</p> -->\n          </div>\n          <!-- <div class=\"col-md-4\">\n          <h3>News</h3>\n          <br>\n          <br>\n          <br>\n\n          <br>\n          <br>\n\n          <h4>Coming Soon...</h4>\n\n\n        </div> -->\n          <div class=\"col-md-1\"></div>\n\n          <div class=\"col-md-3\">\n            <div class=\"card-content\">\n              <!-- <div class=\"card-img\">\n\n              <a href=\"#\" class=\"\">News</a>\n\n            </div> -->\n\n\n              <div class=\"card-desc text-justify mt-2\">\n                <h4>News</h4>\n                <br>\n                <br>\n                <br>\n                <br>\n\n                <h4>Coming Soon...</h4>\n                <br>\n                <br>\n                <br>\n                <br>\n                <br>\n                <br>\n                <br>\n                <br>\n\n\n\n\n\n              </div>\n\n            </div>\n\n\n          </div>\n\n        </div>\n      </div>\n    </section>\n  </div>\n</div>\n<br>\n\n\n<!--=====footer english start==-->\n<app-loginv2></app-loginv2>\n<!-- ================footer  english end== -->\n\n\n\n\n\n\n<script>\n  // Get the modal\n  var modal = document.getElementById('id02');\n\n  // When the user clicks anywhere outside of the modal, close it\n  window.onclick = function (event) {\n    if (event.target == modal) {\n      modal.style.display = \"none\";\n    }\n  }\n</script>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ng2_simple_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-simple-global */ "./node_modules/ng2-simple-global/index.js");
/* harmony import */ var ng2_simple_global__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_simple_global__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(apiService, router, sg) {
        this.apiService = apiService;
        this.router = router;
        this.sg = sg;
        this.navbarOpen = false;
        this.Lang = {};
        // powers = ['Really Smart', 'Super Flexible',
        //           'Super Hot', 'Weather Changer'];
        // model = new RegisterForm(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
        this.model = {};
        this.data = {};
        this.user = {};
    }
    LoginComponent.prototype.toggleNavbar = function () {
        this.navbarOpen = !this.navbarOpen;
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    // logout(model){
    //     document.getElementById('logout').style.display='none'
    //     this.router.navigate(['/login']);
    // }
    LoginComponent.prototype.login = function (model) {
        var _this = this;
        console.log("Enter in to the login-UI");
        this.apiService.login(model).subscribe(function (response) {
            _this.data = response;
            if (_this.data.Message == "Login Successfull") {
                console.log("data=====>", _this.data);
                //   alert('Login Successful' );
                document.getElementById('login').style.display = 'none';
                document.getElementById('id01').style.display = 'none';
                document.getElementById('logout').style.display = 'block';
                _this.router.navigate(['/login']);
            }
            else if (_this.data.Message == "Invalid User name") {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()("Invalid User name");
            }
            else if (_this.data.Message == "Password is Incorrect") {
                console.log("hello");
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()("Password is Incorrect");
            }
            else if (_this.data.Message == "One Time Password is not verified.Please register Again") {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()("One Time Password is not verified.Please register Again");
            }
        });
    };
    ;
    LoginComponent.prototype.newsletter = function (model) {
        var _this = this;
        this.apiService.newsletter(model).subscribe(function (response) {
            _this.data = response;
            console.log(_this.data);
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()(_this.data.Message + "<br>" + "اشتركت بنجاح في النشرة الإخبارية");
        });
    };
    ;
    LoginComponent.prototype.forgetotpverification = function (model) {
        var _this = this;
        console.log("enter in to otp login ts service", this.model.otp);
        this.apiService.forgetotpverification(model).subscribe(function (response) {
            _this.data = response;
            if (_this.data.status == "true") {
                console.log("data=====>", _this.data);
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()('Password updated successfully' + "<br>" + "التسجيل ناجح");
                _this.router.navigate(['/login']);
            }
            else if (_this.data.message == "Invalid one time password") {
                console.log("kavitha");
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()('Invalid one time password' + "<br>" + "كلمة مرور غير صالحة مرة واحدة");
            }
        });
    };
    ;
    LoginComponent.prototype.forgetpassword = function (model) {
        var _this = this;
        this.apiService.forgetpassword(model).subscribe(function (response) {
            _this.data = response;
            if (_this.data.Message == "Password should not be a previously used one") {
                document.getElementById('id03').style.display = 'none';
                console.log("data=====>", _this.data);
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()(_this.data.Message + "<br>" + "كلمة المرور لا يجب أن تكون كلمة مرور سبق استخدامها");
            }
            else if (_this.data.Message == "password is updated") {
                document.getElementById('id03').style.display = 'block';
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()(_this.data.Message + "<br>" + "");
            }
            else if (_this.data.Message == "password doesn't match") {
                document.getElementById('id03').style.display = 'none';
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()(_this.data.Message + "<br>" + "");
            }
            else if (_this.data.Message == "Invalid User Name") {
                document.getElementById('id03').style.display = 'none';
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()(_this.data.Message + "<br>" + "");
            }
            else if (_this.data.Message == "Please fill all the details") {
                document.getElementById('id03').style.display = 'none';
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()(_this.data.Message + "<br>" + "");
            }
        });
    };
    ;
    LoginComponent.prototype.onSubmit = function () {
        // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
    };
    LoginComponent.prototype.resolved = function (captchaResponse) {
        console.log("Resolved captcha with response " + captchaResponse + ":");
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["APIService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ng2_simple_global__WEBPACK_IMPORTED_MODULE_4__["SimpleGlobal"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/loginv2/loginv2.component.css":
/*!***********************************************!*\
  !*** ./src/app/loginv2/loginv2.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');\n\n.naviagaion{\n    font-family: Roboto;\n    font-size: 13px;\n  letter-spacing: 0;\n  cursor: pointer;\n  }\n\n.address{\n    font-family: Roboto;\n    font-size: 13px;\n  letter-spacing: 0;\n  }\n\n.home{\n    font-family: Roboto-Bold;\n    font-size: 16px;\n    line-height: 14px;\n  letter-spacing: 0;\n  }\n\n.mailInput{\n    background: black;\n    border-color: #6c757d;\n    vertical-align:9px;\n    color:#bbb;\n    font-family: Roboto;\n  }\n\n.followUs{\n    color:white;\n     font-family: Roboto;\n    font-size: 14px;\n    margin: 0px;\n  }\n\n.condition{\n    font-family: Roboto;\n    text-align: center;\n    color: white;\n    font-size: 12px;\n  }\n\n.website{\n      color: white;\n      font-weight: 500;\n      text-align: center;\n      font-size:16px;\n  }\n\n.social:hover {\n      cursor: pointer;\n    -webkit-transform: scale(1.1);\n    -moz-transform: scale(1.1);\n    -o-transform: scale(1.1);\n  }\n\n.social {\n      margin-right: 12px;\n    -webkit-transform: scale(0.8);\n    -moz-transform: scale(0.8);\n    -o-transform: scale(0.8);\n    -webkit-transition-duration: 0.5s;\n    -moz-transition-duration: 0.5s;\n    -o-transition-duration: 0.5s;\n  }"

/***/ }),

/***/ "./src/app/loginv2/loginv2.component.html":
/*!************************************************!*\
  !*** ./src/app/loginv2/loginv2.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background-color: #000;\">\n    <div class=\"pt-5 pb-4\">\n        <div class=\"d-flex flex-wrap mx-3 flex-column flex-sm-row flex-md-row justify-content-between\">\n\n            <div>\n                <img src=\"./assets/footersanedlogo.png\" srcset=\"./assets/footersanedlogo@2x.png 2x,\n        ./assets/footersanedlogo@3x.png 3x\"\n                    class=\"img-fluid\">\n            </div>\n\n            <div class=\"mt-3 mt-md-0\">\n                <h5 class=\"home\" style=\"color:white;font-family: Roboto;\">Navigations</h5>\n                <ul class=\"list-unstyled quick-links\">\n\n                    <li><a routerLink=\"/about-us\" (click)=\"goToTop()\" class=\"naviagaion\">\n                            <font color=\"white\">About Us</font>\n                        </a></li>\n                    <li><a routerLink=\"/amanservices\" (click)=\"goToTop()\" class=\"naviagaion\">\n                            <font color=\"white\">Services</font>\n                        </a></li>\n                    <li><a routerLink=\"/sitemap\" (click)=\"goToTop()\" class=\"naviagaion\">\n                            <font color=\"white\">Site map</font>\n                        </a></li>\n                    <li><a routerLink=\"/contactus\" (click)=\"goToTop()\" class=\"naviagaion\">\n                            <font color=\"white\">Contact Us</font>\n                        </a></li>\n                    <li><a routerLink=\"/privacy\" (click)=\"goToTop()\" class=\"naviagaion\">\n                            <font color=\"white\">Privacy Policy</font>\n                        </a></li>\n                </ul>\n            </div>\n\n\n            <div>\n                <h5 class=\"home\" style=\"color:white;font-family: Roboto;\">Company Address:</h5>\n                <ul class=\"list-unstyled quick-links\">\n                    <li>\n                        <p class=\"address d-flex flex-column\">\n                            <font color=\"white\">Tower 400, 18th Floor,</font>\n                            \n                            <font color=\"white\"> Mina Road Sharjah,</font>\n                           \n                            <font color=\"white\"> PO Box 4648 Sharjah - UAE </font>\n                         \n                            <font color=\"white\">Phone: +971 6 506 6555</font>\n                           \n                            <font color=\"white\">Fax: +971 6 572 2331</font>\n                           \n                            <font color=\"white\">Email: helpdesk@saned.ae</font>\n                          \n                            <a routerLink=\"login\">\n                                <font color=\"white\">Website: www.saned.ae</font>\n                            </a>\n                        </p>\n                    </li>\n                </ul>\n            </div>\n\n\n            <div class=\"\">\n                <a target=\"_blank\" href=\"http://www.google.com/maps/place/25.351879,55.385486\">\n                    <img src=\"./assets/map.png\" srcset=\"./assets/map@2x.png 2x,\n                    ./assets/map@3x.png 3x\"\n                        class=\"img-fluid\">\n                </a>\n            </div>\n\n\n            <div class=\"mt-3 mt-md-0 d-flex align-items-end\">\n                <div>\n                    <div class=\"d-flex flex-row\">\n                        <div class=\" d-flex justify-content-center align-items-center\">\n                            <p class=\"followUs mr-3\">Follow us</p>\n                        </div>\n                        <div class=\"\">\n                            <a><i class=\"fa fa-linkedin-square fa-2x social\" style=\"color:#007bb5;\"></i></a>\n                            <a><i class=\"fa fa-twitter-square fa-2x social\" style=\"color:#55ACEE\"></i></a>\n                            <a><i class=\"fa fa-facebook-square fa-2x social\" style=\"color:#3B5998\"></i></a>\n                            <a><i class=\"fa fa-instagram square fa-2x social\" style=\"color:#55ACEE\"></i></a>\n                        </div>\n                    </div>\n\n                    <p class=\"followUs mt-4\">Subscribe to Our Newsletter</p>\n\n\n                    <div class=\"input-group mt-2 mb-3\">\n\n                        <input type=\"email\" name=\"email_id\" [(ngModel)]=\"model_value.email\" #name=\"ngModel\" id=\"email_id\"\n                            class=\"form-control mailInput\" placeholder=\"Enter your mail id\" aria-label=\"Recipient's username\"\n                            aria-describedby=\"basic-addon2\">\n\n                        <div class=\"input-group-append\">\n\n                            <button class=\"btn btn-outline-secondary\" type=\"button\">\n                                <font style=\"color:#ff0000;font-family: Roboto\" (click)=\"Subscribe(model_value)\">Subscribe</font>\n                            </button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n\n        </div>\n\n        <h4 class=\"website mt-2\">Website in construction mode</h4>\n        <hr style=\"background:white; width:98%; text-align: center;\">\n        <p class=\"condition\">By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy\n            Policy and Content Policies. © 2019.</p>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/loginv2/loginv2.component.ts":
/*!**********************************************!*\
  !*** ./src/app/loginv2/loginv2.component.ts ***!
  \**********************************************/
/*! exports provided: Loginv2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loginv2Component", function() { return Loginv2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Loginv2Component = /** @class */ (function () {
    function Loginv2Component(apiService, router) {
        this.apiService = apiService;
        this.router = router;
        this.email = {};
        this.password = {};
        this.data = {};
        this.user = {};
        this.login = {};
        this.model = {};
        this.email_id = {};
        this.model_value = {};
    }
    Loginv2Component.prototype.ngOnInit = function () {
    };
    Loginv2Component.prototype.goToTop = function () {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    };
    Loginv2Component.prototype.Subscribe = function (model_value) {
        var _this = this;
        console.log("hello", this.email_id);
        this.apiService.Subscribe(model_value).subscribe(function (response) {
            console.log("response", response);
            console.log("Checking", _this.data = response);
            _this.data = response;
            var res_data = _this.data.data;
            console.log("res_data", res_data);
            // console.log("this.data ", this.data)
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()(res_data);
            window.location.reload();
            //this.router.navigate(['/login']);
            // if (this.data.Message == "User Already Registered") {
            //   console.log("data=====>", this.data);
            //   swal(this.data.Message + "<br>" + "مستخدم مسجل بالفعل");
            // }
            // else if (this.data.message == "Please provide an Emailid") {
            //   console.log("email")
            //   swal("Please fill the Mandatory fields")
            // }
            // else if (this.data.Message == "please check your email for one time password") {
            //   swal("please check your email for one time password")
            //   document.getElementById('id01').style.display = 'block'
            // }
            // // this.router.navigate(['/login']);
        });
    };
    ;
    Loginv2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loginv2',
            template: __webpack_require__(/*! ./loginv2.component.html */ "./src/app/loginv2/loginv2.component.html"),
            styles: [__webpack_require__(/*! ./loginv2.component.css */ "./src/app/loginv2/loginv2.component.css")]
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], Loginv2Component);
    return Loginv2Component;
}());



/***/ }),

/***/ "./src/app/nav-bg-ar/nav-bg-ar.component.css":
/*!***************************************************!*\
  !*** ./src/app/nav-bg-ar/nav-bg-ar.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg_img {\n  background: url(\"/assets/bulding_img.png\")no-repeat center center;\n    background-size: cover;\n    width:100%;\n    height: 100vh;\n  }\n\n  .bg_img1 {\n    background: url(\"/assets/newChkBg.png\")no-repeat center center;\n    background-size: cover;\n    width:100%;\n    height: 100vh;\n  }\n\n  .head{\n    font-family: Roboto;\n  font-size: 45px;\n  color: #ffffff;\n  line-height: normal;\n  }\n\n  .font-center{\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    width: 100%;\n    text-align: center;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n  }\n\n  /* only for iphone 5s */\n\n  /* @media only screen and (max-width: 320px) {\n  \n  } */\n\n  @media screen and (min-device-width: 320px) and (max-device-width: 760px){\n    .head{\n      font-family: Roboto;\n      font-size: 50px;\n      color: #ffffff;\n      \n      }\n  \n      .font-center{\n        position: absolute;\n        top: 60%;\n        left: 50%;\n        width: 100%;\n        text-align: center;\n        -webkit-transform: translate(-50%, -50%);\n                transform: translate(-50%, -50%);\n      }\n  }\n\n  /* only for iphoe 5s */\n\n  @media screen and (min-device-width: 560px) and (max-device-width: 570px){\n\n    .img-size{\n      width: 30%;\n      height: auto;\n    }\n\n    .head{\n      font-family: Roboto;\n    font-size: 30px;\n    color: #ffffff;\n    line-height: normal;\n    }\n  }"

/***/ }),

/***/ "./src/app/nav-bg-ar/nav-bg-ar.component.html":
/*!****************************************************!*\
  !*** ./src/app/nav-bg-ar/nav-bg-ar.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [class]='bg' style=\"margin-bottom: -50px; position: relative;\">\n    <div class=\"container-fluid\">\n\n        <div class=\"row\">\n            <div class=\"col-md-4 col-sm-4 p-0 text-left\">\n                <img class=\"img-fluid img-size\" src=\"./assets/newChk.png\">\n            </div>\n\n            <div class=\"col-md-4 col-sm-4\"> </div>\n\n            <div class=\"col-md-4 col-sm-4 text-right\">\n                <div class=\"mt-sm-5 mr-sm-4 mt-md-5 mr-md-5 mt-0 mr-0\">\n\n                    <font class=\"mr-2\" style=\"color:#F90E35\">English</font>\n                    <input type=\"radio\" checked>\n\n                    <font class=\"ml-3 mr-1\" color=\"white\"> عربى </font>\n                    <input name=\"Lang\" [(ngModel)]=\"Lang\" type=\"radio\" [value]=\"true\" routerLink={{nav_arabic}}\n                        [checked]=\"Lang\" />\n\n                </div>\n            </div>\n\n        </div>\n\n        <div class=\"font-center\">\n            <font class=\"head\"> {{ head }} </font>\n        </div>\n\n    </div>\n\n</div>\n\n<app-navbar style=\"position:relative; bottom: 30px;\"></app-navbar>\n\n\n\n"

/***/ }),

/***/ "./src/app/nav-bg-ar/nav-bg-ar.component.ts":
/*!**************************************************!*\
  !*** ./src/app/nav-bg-ar/nav-bg-ar.component.ts ***!
  \**************************************************/
/*! exports provided: NavBgArComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBgArComponent", function() { return NavBgArComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavBgArComponent = /** @class */ (function () {
    function NavBgArComponent() {
        this.Lang = {};
    }
    NavBgArComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NavBgArComponent.prototype, "head", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NavBgArComponent.prototype, "bg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NavBgArComponent.prototype, "nav_arabic", void 0);
    NavBgArComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-bg-ar',
            template: __webpack_require__(/*! ./nav-bg-ar.component.html */ "./src/app/nav-bg-ar/nav-bg-ar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bg-ar.component.css */ "./src/app/nav-bg-ar/nav-bg-ar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavBgArComponent);
    return NavBgArComponent;
}());



/***/ }),

/***/ "./src/app/nav-bg/nav-bg.component.css":
/*!*********************************************!*\
  !*** ./src/app/nav-bg/nav-bg.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg_img1 {\n    background: url('newChkBg.png')no-repeat center center;\n    background-size: cover;\n    width:100%;\n    height: 100vh;\n  }\n \n\n  .bg_img{\n    background: url('bulding_img.png')no-repeat center center;\n    background-size: cover;\n    width:100%;\n    height: 100vh;\n  }\n \n\n  .head{\n    font-family: GeezaPro;\n  font-size: 60px;\n  color: #ffffff;\n  \n  }\n \n\n  .font-center{\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    width: 100%;\n    text-align: center;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n  }\n \n\n  /* only for iphone 5s */\n \n\n  /* @media only screen and (max-width: 320px) {\n \n  } */\n \n\n  @media screen and (min-device-width: 320px) and (max-device-width: 760px){\n    .head{\n      font-family: GeezaPro;\n      font-size: 50px;\n      color: #ffffff;\n      \n      }\n  \n      .font-center{\n        position: absolute;\n        top: 60%;\n        left: 50%;\n        width: 100%;\n        text-align: center;\n        -webkit-transform: translate(-50%, -50%);\n                transform: translate(-50%, -50%);\n      }\n  }\n"

/***/ }),

/***/ "./src/app/nav-bg/nav-bg.component.html":
/*!**********************************************!*\
  !*** ./src/app/nav-bg/nav-bg.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [class]='bg' style=\"margin-bottom: -50px; position: relative;\">\n    <div class=\"container-fluid\">\n\n        <div dir=\"rtl\" class=\"row\">\n            <div class=\"col-md-4 col-sm-4 p-0 text-right\">\n                <img class=\"img-fluid\" src=\"./assets/logo_ar.png\">\n            </div>\n\n            <div class=\"col-md-4 col-sm-4\"> </div>\n\n            <div class=\"col-md-4 col-sm-4\">\n                <div class=\"mt-sm-5 ml-sm-5 mt-md-5 ml-md-5 mt-0 ml-0\">\n\n                    <input type=\"radio\" checked>\n                    <font class=\"ml-3 mr-1\" color=\"#F90E35\"> عربى </font>\n\n                    <input name=\"Lang\" style=\"color:#ff0000;\" [(ngModel)]=\"Lang\" type=\"radio\" [value]=\"true\"\n                        routerLink={{nav_arabic}} [checked]=\"Lang\" />\n                    <font class=\"mr-1\" style=\"color:white\">English</font>\n\n                </div>\n            </div>\n\n        </div>\n\n        <div class=\"font-center\">\n            <font class=\"head\"> {{ head }} </font>\n        </div>\n    </div>\n\n</div>\n\n<app-navbararabic style=\"position:relative; bottom: 30px;\"></app-navbararabic>"

/***/ }),

/***/ "./src/app/nav-bg/nav-bg.component.ts":
/*!********************************************!*\
  !*** ./src/app/nav-bg/nav-bg.component.ts ***!
  \********************************************/
/*! exports provided: NavBgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBgComponent", function() { return NavBgComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavBgComponent = /** @class */ (function () {
    function NavBgComponent() {
        this.Lang = {};
    }
    NavBgComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NavBgComponent.prototype, "head", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NavBgComponent.prototype, "bg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NavBgComponent.prototype, "nav_arabic", void 0);
    NavBgComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-bg',
            template: __webpack_require__(/*! ./nav-bg.component.html */ "./src/app/nav-bg/nav-bg.component.html"),
            styles: [__webpack_require__(/*! ./nav-bg.component.css */ "./src/app/nav-bg/nav-bg.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavBgComponent);
    return NavBgComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\nnav{\n  width: 100%;\n  height: 50px;\n  background: rgba(0, 0, 0, 0.50); \n  border: 1px solid rgba(0,0,0,.80);\n  /* border-top: 1px solid rgba(255,255);\n  border-bottom: 1px solid rgba(255,255); */\n  position: -webkit-sticky;\n  position: sticky;\n  top:0px;\n  z-index: 99;\n}\n\n\n  .dropdown-menu {\n    position: relative;\n    top: 100%;\n    right: 0;\n    z-index: 1000;\n    display: none;\n    float: left;\n    left: 10px;\n    min-width: 18rem;\n    padding: .5rem 0;\n    margin: .125rem 0 0;\n    font-size: 1rem;\n    color: #212529;\n    text-align: left;\n    list-style: none;\n    background-color:  rgba(0,0,0,.70);\n    background-clip: padding-box;\n    border: 1px solid rgba(0,0,0,.80);\n    border-radius: .25rem;\n  }\n\n\n  .show-on-hover:hover > ul.dropdown-menu {\n    display: block;    \n  }\n\n\n  .dropdown:hover>.dropdown-menu {\n    display: block;\n  }\n\n\n  .dropdown-item:focus, .dropdown-item:hover {\n    color: #16181b;\n    text-decoration: none;\n    background-color:#8080808c !important\n  }\n\n\n  .dropdown>.dropdown-toggle:active {\n    /*Without this, clicking will make it sticky*/\n      pointer-events: none;\n  }\n\n\n  .dropdown-item {\n    display: block;\n    width: 100%;\n    padding: .25rem 1.5rem;\n    clear: both;\n    font-weight: 400;\n    color: #212529;\n    text-align: inherit;\n    white-space: nowrap;\n    background-color: transparent;\n    border: 0;\n  }\n\n\n  .nav-text{\n    margin: 0px 25px;\n    color: #fff!important;\n    font-family: Roboto;\n    font-size: 18px;\n    font-weight: 700;\n  }\n\n\n  .nav-drop-text{\n    font-size: 16px;\n    font-weight: 500;\n    font-family: Roboto;\n    color: #fff;\n  }\n\n\n  .ml-manual{\n    margin-left: 100px;  \n  }\n\n\n  @media screen and (min-device-width: 320px) and (max-device-width: 760px){\n  .mobile-bg{\n    background: rgba(0, 0, 0, 0.70);\n     border: 1px solid rgba(0,0,0,.80);\n  }\n\n  .ml-manual{\n    margin-left: 0px;\n  }\n}\n\n\n  @media (min-width: 768px) and (max-width: 991.98px){\n  .ml-manual{\n    margin-left: 0px;\n  }\n}\n\n\n  /* mediaquery */\n\n\n  /* style=\"background: rgba(0, 0, 0, 0.27); border: 1px solid rgba(0,0,0,.80); */\n\n\n  /* .navigation .menu {\n  position: relative\n} */\n\n\n  .navigation .menu .submenu {\n  position: absolute;\n  /* width: 200px; */\n  /* -webkit-box-shadow: 0px 1px 1px #CCC; */\n  /* box-shadow: 0px 1px 1px #CCC; */\n  display: none;\n  transition: all .5s ease-in-out;\n\n}\n\n\n  .navigation .menu:hover .submenu {\n  display: block;\n \n}\n\n\n  .navigation .menu .submenu:before {\n  content: \"\";\n  position: absolute;\n  display: block;\n  border-width: 0 6px 6px 6px;\n  border-style: solid;\n  border-color: #FFF transparent;\n  top: -6px;\n  right: 5px;\n\n}\n\n\n  .nav ul li {\ncolor: white !important;\ndisplay: none\n}\n\n\n  .color_white{\n  color: white !important;\n}\n\n\n  /* ===========navbar start========= */\n\n\n  .Rectangle-2 {\n  width: 137px;\n  height: 41px;\n  border-radius: 5px;\n  color:white !important;\n  font-family: Roboto !important;\n  font-size: 18px;\n  font-weight: bold !important;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n}\n\n\n  .contact_navbar {\n  margin-right: 5px;\n  width: 76px;\n  height: 41px;\n  border-radius: 5px;\n  color:white !important;\n  font-family: Roboto !important;\n  font-size: 18px;\n  font-weight: bold !important;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n}\n\n\n  .supplier_navbar {\n  width: 94px;\n  height: 41px;\n  border-radius: 5px;\n  color:white !important;\n  font-family: Roboto !important;\n  font-size: 18px;\n  font-weight: bold !important;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n}\n\n\n  .Home_navbar{\n  width: 151px;\n  height: 41px;\n  border-radius: 5px;\n  color:white !important;\n  font-family: Roboto !important;\n  font-size: 18px;\n  font-weight: bold !important;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n}\n\n\n  .Contact-Us {\n  width: 90px;\n  height: 24px;\n  font-family: Roboto;\n  font-size: 18px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #ffffff;\n}\n\n\n  .Suppliers {\n  width: 77px;\n  height: 24px;\n  font-family: Roboto;\n  font-size: 18px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #ffffff;\n}\n\n\n  .Services {\n  width: 70px;\n  height: 24px;\n  font-family: Roboto;\n  font-size: 18px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #ffffff;\n}\n\n\n  .About-Us-Copy {\n  width: 75px;\n  height: 24px;\n  font-family: Roboto;\n  font-size: 18px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #ffffff;\n}\n\n\n  .Home-Copy {\n  width: 49px;\n  height: 24px;\n  font-family: Roboto;\n  font-size: 18px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #ffffff;\n}\n\n\n  /* ====================responsive================= */\n\n\n  .mt_20{\n  margin-top: 0px;\n}\n\n\n  .wt_237{\nwidth: 237px;\n}\n\n\n  .wt_220{\n  width: 81px;\n}\n\n\n  .wt-con{\nwidth: 232px;\n}\n\n\n  .wt_140{\nwidth: 140% !important;\n}\n\n\n  /* mobile media query */\n\n\n  @media screen and (min-device-width: 320px) and (max-device-width: 760px){\n.nav-bg {\n  background-color: rgba(0, 0, 0, 0.65) !important;\n}\n.ml_mr{\n  margin-right: 35px !important;\n  margin-left: -22px !important;\n}\n.wt_237{\n\n  width: 99px;\n  }\n  .ml-5{\n    margin-left: 4.2rem !important;\n  }\n.pt-120{\n  position: relative;\n  left: 111px;\n}\n.mt-414{\n  margin-top: 0px !important;\n}\n.ft_18 {\n  font-size: 17px !important;\n}\n.ml_33{\n/* margin-left: -27px !important; */\n}\n\n\n}\n\n\n  /* css for ipad */\n\n\n  @media screen and (min-device-width: 768px) and (max-device-width: 1022px){\n.nav-bg {\n  /* background-color: rgba(0, 0, 0, 0.65) !important; */\n}\n.maxwt_19{\n  max-width: 19%;\n}\n.wt_135{\nwidth: 135px !important;\n}\n.map_wt{\n  width: 175px !important;\n}\n.ml_135{\n  margin-left: 0px !important;\n}\n.ml_16{\n  margin-left: -16px !important;\n}\n.logo_wt{\nwidth: 109px;\n}\n.col-sm-2{\n  width : 0% ! important;\n}\n\n.mt_20{\n  \n    margin-top: 4px !important; \n  \n  shape-margin: 0px !important;\n}\n\n.ht_80{\n  height:54px !important\n}\n\n.pt-120{\n  position: relative;\n  left: 136px;\n}\n.mt-414{\n  margin-top:0px !important;\n}\n\n.ml-5, .mx-5 {\n  margin-left: -1.8rem !important;\n}\n\n.pad_0{\npadding:1 22px !important;\n}\n.ft_18 {\n  font-size: 30px;\n}\n\n.wt_106{\n  width: 106% !important;\n}\n\n\n}\n\n\n  @media screen and (max-device-width: 1024px){\n.nav-bg {\n  /* background-color: rgba(0, 0, 0, 0.65) !important; */\n}\n.maxwt_19{\n  max-width: 19%;\n}\n\n.wt_135{\nwidth: 135px !important;\n}\n.map_wt{\n  width: 175px !important;\n}\n.ml_135{\n  margin-left: 0px !important;\n}\n  /* .ml_16{\n    margin-left: -16px !important;\n  } */\n.logo_wt{\nwidth: 109px;\n}\n.col-sm-2{\n  /* width : 0% ! important; */\n}\n\n.mt_20{\n  \n    margin-top: 4px !important; \n  \n  shape-margin: 0px !important;\n}\n\n/* .ht_80{\n  height:54px !important\n} */\n\n.pt-120{\n  position: relative;\n  /* right: 79px; */\n}\n.mt-414{\n  margin-top:0px !important;\n}\n\n/* \n\n*/\n\n.pad_0{\npadding:1 22px !important;\n}\n.ft_18 {\n  font-size: 30px;\n}\n\n.wt_106{\n  width: 106% !important;\n}\n\n\n}\n\n\n  /* css for ipad pro*/\n\n\n  /* ======navbar end===== */\n\n\n  /* \n============dropdown style start============= */\n\n\n  /* \n============dropdown style End============= */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md  navbar-dark\">\n\n\n  <button class=\"navbar-toggler\" type=\"button\" (click)=\"toggleNavbar()\" data-toggle=\"collapse\"\n    data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\"\n    aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n\n  <div class=\"collapse navbar-collapse mobile-bg ml-manual\" id=\"navbarNavDropdown\" [ngClass]=\"{ 'show': navbarOpen }\">\n\n\n\n    <ul class=\"navbar-nav p-0 m-0\">\n      <li (click)=\"toggleNavbar()\" class=\"nav-item\">\n        <a routerLink=\"/login\" class=\"nav-link nav-text\">Home</a>\n      </li>\n      <li (click)=\"toggleNavbar()\" class=\"nav-item\">\n        <a routerLink=\"/about-us\" class=\"nav-link nav-text\">About Us</a>\n\n      </li>\n\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle nav-text\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\"\n          aria-haspopup=\"true\" aria-expanded=\"false\">\n          Services\n        </a>\n        <div class=\"dropdown-menu\">\n          <a (click)=\"toggleNavbar()\" routerLink=\"/amanservices\" class=\"dropdown-item nav-drop-text text-white\">Aman</a>\n          <a (click)=\"toggleNavbar()\" routerLink=\"/salamaservices\"\n            class=\"dropdown-item nav-drop-text text-white\">Salama</a>\n          <a (click)=\"toggleNavbar()\" routerLink=\"/facilitymanagement\"\n            class=\"dropdown-item nav-drop-text text-white\">Integrated Facility Management</a>\n        </div>\n      </li>\n\n      <li (click)=\"toggleNavbar()\" class=\"nav-item\">\n        <a routerLink=\"/supplier-register\" class=\"nav-link nav-text\">Suppliers</a>\n      </li>\n      <li (click)=\"toggleNavbar()\" class=\"nav-item\">\n        <a routerLink=\"/contactus\" class=\"nav-link nav-text\">Contact Us</a>\n      </li>\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import router from "@angular/router";
//import { DOCUMENT } from '@angular/common';
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.navbarOpen = false;
    }
    NavbarComponent.prototype.toggleNavbar = function () {
        this.navbarOpen = !this.navbarOpen;
    };
    // @Inject(DOCUMENT)
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/navbararabic/navbararabic.component.css":
/*!*********************************************************!*\
  !*** ./src/app/navbararabic/navbararabic.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\nnav{\n  width: 100%;\n  height: 50px;\n  background: rgba(0, 0, 0, 0.50); \n  border: 1px solid rgba(0,0,0,.80);\n  position: -webkit-sticky;\n  position: sticky;\n  top:0px;\n  z-index: 99;\n}\n\n\n  .dropdown-menu {\n    position: relative;\n    top: 100%;\n    right: 0;\n    z-index: 1000;\n    display: none;\n    float: right;\n    min-width: 12rem;\n    padding: .5rem 0;\n    margin: .125rem 0 0;\n    font-size: 1rem;\n    color: #212529;\n    text-align: left;\n    list-style: none;\n    background-color:  rgba(0,0,0,.70);\n    background-clip: padding-box;\n    border: 1px solid rgba(0,0,0,.80);\n    border-radius: .25rem;\n  }\n\n\n  .show-on-hover:hover > ul.dropdown-menu {\n    display: block;    \n  }\n\n\n  .dropdown:hover>.dropdown-menu {\n    display: block;\n  }\n\n\n  .dropdown-item:focus, .dropdown-item:hover {\n    color: #16181b;\n    text-decoration: none;\n    background-color:#8080808c !important\n  }\n\n\n  .dropdown>.dropdown-toggle:active {\n    /*Without this, clicking will make it sticky*/\n      pointer-events: none;\n  }\n\n\n  .dropdown-item {\n    display: block;\n    width: 100%;\n    padding: .25rem 1.5rem;\n    clear: both;\n    font-weight: 400;\n    color: #212529;\n    text-align: inherit;\n    white-space: nowrap;\n    background-color: transparent;\n    border: 0;\n  }\n\n\n  .nav-text{\n    margin: 0px 20px;\n    color: #fff!important;\n    font-family: Roboto;\n    font-size: 18px;\n    font-weight: 700;\n  }\n\n\n  .nav-drop-text{\n    font-size: 16px;\n    font-weight: 500;\n    font-family: Roboto;\n    color: #fff;\n  }\n\n\n  .ml-manual{\n    margin-right: 100px;\n  }\n\n\n  @media screen and (min-device-width: 320px) and (max-device-width: 760px){\n  .mobile-bg{\n    background: rgba(0, 0, 0, 0.70);\n    border: 1px solid rgba(0,0,0,.80);\n  }\n\n  .ml-manual{\n    margin-right: 0px;\n  }\n}\n\n\n  @media (min-width: 768px) and (max-width: 991.98px){\n  .ml-manual{\n    margin-right: 0px;\n  }\n}\n\n\n  /* mediaquery */\n\n\n  /* style=\"background: rgba(0, 0, 0, 0.27); border: 1px solid rgba(0,0,0,.80); */\n\n\n  /* .navigation .menu {\n  position: relative\n} */\n\n\n  .navigation .menu .submenu {\n  position: absolute;\n  /* width: 200px; */\n  /* -webkit-box-shadow: 0px 1px 1px #CCC; */\n  /* box-shadow: 0px 1px 1px #CCC; */\n  display: none;\n  transition: all .5s ease-in-out;\n\n}\n\n\n  .navigation .menu:hover .submenu {\n  display: block;\n \n}\n\n\n  .navigation .menu .submenu:before {\n  content: \"\";\n  position: absolute;\n  display: block;\n  border-width: 0 6px 6px 6px;\n  border-style: solid;\n  border-color: #FFF transparent;\n  top: -6px;\n  right: 5px;\n\n}\n\n\n  .nav ul li {\ncolor: white !important;\ndisplay: none\n}\n\n\n  .color_white{\n  color: white !important;\n}\n\n\n  /* ===========navbar start========= */\n\n\n  .Rectangle-2 {\n  width: 137px;\n  height: 41px;\n  border-radius: 5px;\n  color:white !important;\n  font-family: Roboto !important;\n  font-size: 18px;\n  font-weight: bold !important;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n}\n\n\n  .contact_navbar {\n  margin-right: 5px;\n  width: 76px;\n  height: 41px;\n  border-radius: 5px;\n  color:white !important;\n  font-family: Roboto !important;\n  font-size: 18px;\n  font-weight: bold !important;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n}\n\n\n  .supplier_navbar {\n  width: 94px;\n  height: 41px;\n  border-radius: 5px;\n  color:white !important;\n  font-family: Roboto !important;\n  font-size: 18px;\n  font-weight: bold !important;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n}\n\n\n  .Home_navbar{\n  width: 151px;\n  height: 41px;\n  border-radius: 5px;\n  color:white !important;\n  font-family: Roboto !important;\n  font-size: 18px;\n  font-weight: bold !important;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n}\n\n\n  .Contact-Us {\n  width: 90px;\n  height: 24px;\n  font-family: Roboto;\n  font-size: 18px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #ffffff;\n}\n\n\n  .Suppliers {\n  width: 77px;\n  height: 24px;\n  font-family: Roboto;\n  font-size: 18px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #ffffff;\n}\n\n\n  .Services {\n  width: 70px;\n  height: 24px;\n  font-family: Roboto;\n  font-size: 18px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #ffffff;\n}\n\n\n  .About-Us-Copy {\n  width: 75px;\n  height: 24px;\n  font-family: Roboto;\n  font-size: 18px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #ffffff;\n}\n\n\n  .Home-Copy {\n  width: 49px;\n  height: 24px;\n  font-family: Roboto;\n  font-size: 18px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #ffffff;\n}\n\n\n  /* ====================responsive================= */\n\n\n  .mt_20{\n  margin-top: 0px;\n}\n\n\n  .wt_237{\nwidth: 237px;\n}\n\n\n  .wt_220{\n  width: 81px;\n}\n\n\n  .wt-con{\nwidth: 232px;\n}\n\n\n  .wt_140{\nwidth: 140% !important;\n}\n\n\n  /* mobile media query */\n\n\n  @media screen and (min-device-width: 320px) and (max-device-width: 760px){\n.nav-bg {\n  background-color: rgba(0, 0, 0, 0.65) !important;\n}\n.ml_mr{\n  margin-right: 35px !important;\n  margin-left: -22px !important;\n}\n.wt_237{\n\n  width: 99px;\n  }\n  .ml-5{\n    margin-left: 4.2rem !important;\n  }\n.pt-120{\n  position: relative;\n  left: 111px;\n}\n.mt-414{\n  margin-top: 0px !important;\n}\n.ft_18 {\n  font-size: 17px !important;\n}\n.ml_33{\n/* margin-left: -27px !important; */\n}\n\n\n}\n\n\n  /* css for ipad */\n\n\n  @media screen and (min-device-width: 768px) and (max-device-width: 1022px){\n.nav-bg {\n  /* background-color: rgba(0, 0, 0, 0.65) !important; */\n}\n.maxwt_19{\n  max-width: 19%;\n}\n.wt_135{\nwidth: 135px !important;\n}\n.map_wt{\n  width: 175px !important;\n}\n.ml_135{\n  margin-left: 0px !important;\n}\n.ml_16{\n  margin-left: -16px !important;\n}\n.logo_wt{\nwidth: 109px;\n}\n.col-sm-2{\n  width : 0% ! important;\n}\n\n.mt_20{\n  \n    margin-top: 4px !important; \n  \n  shape-margin: 0px !important;\n}\n\n.ht_80{\n  height:54px !important\n}\n\n.pt-120{\n  position: relative;\n  left: 136px;\n}\n.mt-414{\n  margin-top:0px !important;\n}\n\n.ml-5, .mx-5 {\n  margin-left: -1.8rem !important;\n}\n\n.pad_0{\npadding:1 22px !important;\n}\n.ft_18 {\n  font-size: 30px;\n}\n\n.wt_106{\n  width: 106% !important;\n}\n\n\n}\n\n\n  @media screen and (max-device-width: 1024px){\n.nav-bg {\n  /* background-color: rgba(0, 0, 0, 0.65) !important; */\n}\n.maxwt_19{\n  max-width: 19%;\n}\n\n.wt_135{\nwidth: 135px !important;\n}\n.map_wt{\n  width: 175px !important;\n}\n.ml_135{\n  margin-left: 0px !important;\n}\n  /* .ml_16{\n    margin-left: -16px !important;\n  } */\n.logo_wt{\nwidth: 109px;\n}\n.col-sm-2{\n  /* width : 0% ! important; */\n}\n\n.mt_20{\n  \n    margin-top: 4px !important; \n  \n  shape-margin: 0px !important;\n}\n\n/* .ht_80{\n  height:54px !important\n} */\n\n.pt-120{\n  position: relative;\n  /* right: 79px; */\n}\n.mt-414{\n  margin-top:0px !important;\n}\n\n/* \n\n*/\n\n.pad_0{\npadding:1 22px !important;\n}\n.ft_18 {\n  font-size: 30px;\n}\n\n.wt_106{\n  width: 106% !important;\n}\n\n\n}\n\n\n  /* css for ipad pro*/\n\n\n  /* ======navbar end===== */\n\n\n  /* \n============dropdown style start============= */\n\n\n  /* \n============dropdown style End============= */"

/***/ }),

/***/ "./src/app/navbararabic/navbararabic.component.html":
/*!**********************************************************!*\
  !*** ./src/app/navbararabic/navbararabic.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<nav dir=\"rtl\" class=\"navbar navbar-expand-md  navbar-dark\">\n\n\n  <button class=\"navbar-toggler\" type=\"button\" (click)=\"toggleNavbar()\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n\n  <div class=\"collapse navbar-collapse text-right mobile-bg ml-manual\" \n   id=\"navbarNavDropdown\" [ngClass]=\"{ 'show': navbarOpen }\">\n   \n   \n  \n    <ul class=\"navbar-nav p-0 m-0\">\n      <li (click)=\"toggleNavbar()\" class=\"nav-item\">\n        <a class=\"nav-link nav-text\" routerLink=\"/login-arbic\">الصفحة الرئيسية</a>\n      </li>\n      <li (click)=\"toggleNavbar()\" class=\"nav-item\">\n        <a routerLink=\"/aboutus-arabic\" class=\"nav-link nav-text\" >معلومات عنا</a>\n      </li>\n\n      <li class=\"nav-item dropdown\">\n          <a class=\"nav-link dropdown-toggle nav-text\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n              خدمات\n          </a>\n          <div class=\"dropdown-menu text-right\">\n            <a (click)=\"toggleNavbar()\" routerLink=\"/amanservices-arabic\" class=\"dropdown-item nav-drop-text text-white\" >أمـــــان</a>\n            <a (click)=\"toggleNavbar()\" routerLink=\"/salamaservices-arabic\" class=\"dropdown-item nav-drop-text text-white\" >سلامة</a>\n            <a (click)=\"toggleNavbar()\" routerLink=\"/facilityarabic\" class=\"dropdown-item nav-drop-text text-white\" >إدارة المرافق المتكاملة</a>\n          </div>\n        </li>\n\n      <li (click)=\"toggleNavbar()\" class=\"nav-item\">\n        <a routerLink=\"/supplier-register-arabic\" class=\"nav-link nav-text\" href=\"#\">الموردين</a>\n      </li>\n      <li (click)=\"toggleNavbar()\" class=\"nav-item\">\n          <a routerLink=\"/contactus-arabic\" class=\"nav-link nav-text\" href=\"#\">اتصل بنا</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n\n"

/***/ }),

/***/ "./src/app/navbararabic/navbararabic.component.ts":
/*!********************************************************!*\
  !*** ./src/app/navbararabic/navbararabic.component.ts ***!
  \********************************************************/
/*! exports provided: NavbararabicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbararabicComponent", function() { return NavbararabicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbararabicComponent = /** @class */ (function () {
    function NavbararabicComponent() {
        this.navbarOpen = false;
    }
    NavbararabicComponent.prototype.toggleNavbar = function () {
        this.navbarOpen = !this.navbarOpen;
    };
    NavbararabicComponent.prototype.ngOnInit = function () {
    };
    NavbararabicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbararabic',
            template: __webpack_require__(/*! ./navbararabic.component.html */ "./src/app/navbararabic/navbararabic.component.html"),
            styles: [__webpack_require__(/*! ./navbararabic.component.css */ "./src/app/navbararabic/navbararabic.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbararabicComponent);
    return NavbararabicComponent;
}());



/***/ }),

/***/ "./src/app/privacy-arabic/privacy-arabic.component.css":
/*!*************************************************************!*\
  !*** ./src/app/privacy-arabic/privacy-arabic.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".intro-2 {\n  background: url(\"/assets/hero_image1.png\")no-repeat center center;\n  background-size: cover;\n  /* height: 635px; */\n}\n\n.aboutus {\n  background: url(\"/assets/group-4.png\")no-repeat center center;\n  /* background-size: cover; */\n  height: 330px;\n  border-radius: 18px;\n  \n}\n\nbody {\n  font-family: Arial, Helvetica, sans-serif;\n}\n\nnav {\n  width: 100%;\n  height: 50px;\n  background: rgba(0, 0, 0, .8);\n  border-top: 1px solid rgba(255, 255);\n  border-bottom: 1px solid rgba(255, 255);\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0px;\n  z-index: 99;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: sans-serif;\n  /* background: #000; */\n}\n\nheader {\n  padding: 10px 100px;\n  box-sizing: border-box;\n}\n\nsection {\n  width: 100%;\n  height: 100vh;\n}\n\n.dropdown {\n  float: left;\n  overflow: hidden;\n}\n\n.dropdown .dropbtn {\n  font-size: 16px;\n  border: none;\n  outline: none;\n  color: white;\n  padding: 14px 16px;\n  background-color: inherit;\n  font-family: inherit;\n  margin: 0;\n}\n\n.navbar a:hover,\n.dropdown:hover .dropbtn {\n  /* background-color: red; */\n}\n\n.a {\n  color: inherit !important;\n  text-decoration: none !important;\n}\n\n.dropdown-content {\n  display: block;\n  position: absolute;\n  background-color: red;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n}\n\n.dropdown-content a {\n  float: none;\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n  text-align: left;\n}\n\n.dropdown-content a:hover {\n  background-color: #ddd;\n}\n\nul {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n\nul li a {\n  text-decoration: none;\n  color: #e74c3c;\n  font-family: Tahoma, Arial;\n}\n\n.navigation {\n  background-color: #35353500;\n  width: 100%;\n  margin: 20px auto;\n  min-height: 50px;\n}\n\n.navigation>li {\n  float: left;\n  padding: 0 20px;\n}\n\n.navigation>li>a {\n  line-height: 50px;\n  color: #FFF;\n}\n\n.navigation .menu {\n  position: relative\n}\n\n.navigation .menu .submenu {\n  position: absolute;\n  /* width: 200px; */\n  box-shadow: 0px 1px 1px #CCC;\n  display: none;\n  transition: all .5s ease-in-out;\n}\n\n.navigation .menu:hover .submenu {\n  display: block\n}\n\n.navigation .menu .submenu:before {\n  content: \"\";\n  position: absolute;\n  display: block;\n  border-width: 0 6px 6px 6px;\n  border-style: solid;\n  border-color: #FFF transparent;\n  top: -6px;\n  left: 5px\n}\n\n.navigation .menu .submenu li {\n  padding: 5px 10px;\n  transition: all .5s ease-in-out;\n}\n\n.navigation .menu .submenu li:hover {\n  background-color: #e74c3c;\n}\n\n.navigation .menu .submenu li:hover a {\n  color: #FFF;\n  /* padding: 0 11px; */\n}\n\n.dropdown:hover .dropdown-content {\n  display: block;\n}\n\nnav {\n  width: 100%;\n  height: 50px;\n  background: rgba(0, 0, 0, .8);\n  border-top: 1px solid rgba(255, 255);\n  border-bottom: 1px solid rgba(255, 255);\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0px;\n  z-index: 99\n}\n\nnav ul {\n  display: flex;\n  margin: 0px;\n  padding: 0px;\n  float: right;\n}\n\nnav ul li {\n  list-style: none;\n}\n\nnav ul {\n  display: flex;\n\n  padding: 0px;\n  /* float: ; */\n}\n\nnav ul li a {\n  display: block;\n  color: #fff;\n  padding: 0 5px;\n  text-decoration: none;\n  text-transform: uppercase;\n  font-weight: bold;\n  line-height: 50px;\n\n}\n\n/* .switch{\nmargin-top: 0;\nmargin-bottom: -5rem;\nmargin-left: 83%;\ncolor: red;\noverflow: hidden;\n}\n.switch1{\nmargin-top: 0;\nmargin-bottom: -2rem;\nmargin-left: 0%;\ncolor: red;\n} */\n\n/* ==============footer style start ========= */\n\n.footer {\n  /* position: fixed; */\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background-color: black;\n  color: white;\n  text-align: center;\n  /* height: 75px; */\n}\n\n.container1 {\n  background: black;\n  color: white\n}\n\n.container {\n  /* background: black; */\n  color: white\n}\n\n.social:hover {\n  -webkit-transform: scale(1.1);\n  -moz-transform: scale(1.1);\n  -o-transform: scale(1.1);\n}\n\n.social {\n  -webkit-transform: scale(0.8);\n  /* Browser Variations: */\n\n  -moz-transform: scale(0.8);\n  -o-transform: scale(0.8);\n  -webkit-transition-duration: 0.5s;\n  -moz-transition-duration: 0.5s;\n  -o-transition-duration: 0.5s;\n}\n\n.fa {\n  padding: 20px;\n  font-size: 30px;\n  width: 30px;\n  text-align: center;\n  text-decoration: none;\n  border-radius: 50%;\n}\n\n.img-thumbnail {\n  background: black;\n  border-color: black\n}\n\n.home {\n  font-family: Roboto-Bold;\n  font-size: 16px;\n  line-height: 14px;\n  letter-spacing: 0;\n}\n\n.about {\n  font-family: Roboto-Regular;\n  font-size: 13px;\n  line-height: 15px;\n  letter-spacing: 0;\n}\n\n.spacer {\nheight: 100px;\n}\n\n.Who-We-Are-Aman-is-a {\n  \n  height: 459px;\n  font-family: Roboto;\n  font-size: 18px;\n  text-align: justify;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: var(--black);\n}\n\n.Who-We-Are-Aman-is-a .text-style-1 {\n  font-size: 24px;\n}\n\n.An-overview-of-da {\n  \n  height: 100%;\n  font-family: Roboto;\n  font-size: 18px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: var(--black);\n\n}\n\n/* ===Mobile navbar start=========== */\n\n@media screen and (min-width: 320px) and (max-width: 767px){\n  .nav-bg {\n    background-color: rgba(0, 0, 0, 0.65) !important;\n  }\n\n\n\n  \n  .pt-120{\n    position: relative !important;\n    left: 207px !important;\n\n  }\n  .mt-414{\n    margin-top: 3px !important;\n  }\n\n  .mr-5, .mx-5 {\n    margin-right: 4rem!important;\n}\n\n.pad_12{\n  padding: 0 12px;\n}\n\n}\n\n@media screen and (max-width: 768px){\n  .nav-bg {\n    /* background-color: rgba(0, 0, 0, 0.65) !important; */\n  }\n\n\n\n  .pt-120{\n    position: relative !important;\n    left: 232px \n\n  }\n  .mt-414{\n    margin-top: 3px !important;\n  }\n\n  .mr-5, .mx-5 {\n    margin-right: 5rem!important;\n}\n\n\n\n\nli[_ngcontent-c1] {\n  float: left;\n  padding: 0 12px !important;\n}\n\n\n}\n\n@media screen and (max-width: 1024px){\n  .nav-bg {\n    /* background-color: rgba(0, 0, 0, 0.65) !important; */\n  }\n\n\n\n  .pt-120{\n    position: relative !important;\n    left: 232px \n\n  }\n  .mt-414{\n    margin-top: 3px !important;\n  }\n\n  .mr-5, .mx-5 {\n    margin-right: 4rem!important;\n}\n\n\n\n\nli[_ngcontent-c1] {\n  float: left;\n  padding: 0 12px !important;\n}\n\n\n}\n\n/* =========Mobile navbar End========== */\n\n/* ===========HEADING STYLE=========== */\n\n.saned_para{\n  font-size:16px;\n  color: #333; \n  font-family: GeezaPro;\n}\n\n.saned_heading{\n  font-size: 26px;\n  font-family: GeezaPro;\n  color: #212529 !important;\n\n}\n\n.saned_heading-1{\n  font-size: 20px;\n  font-family: GeezaPro;\n  color: #212529 !important;\n\n}\n\n/* ==============HEADING STYLE========== */"

/***/ }),

/***/ "./src/app/privacy-arabic/privacy-arabic.component.html":
/*!**************************************************************!*\
  !*** ./src/app/privacy-arabic/privacy-arabic.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js\"></script>\n<script src=\"//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n<script src='https://www.google.com/recaptcha/api.js'></script>\n\n\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <style>\n   section.sec1 {\n  background: url(natures-temples.png);\n  background-size: cover;\n}\n\nsection.banner {\n  background: url(Group.png);\n  background-size: cover;\n  margin-left: 15px;\n}\n\nsection.sec2 {\n  padding: 100px;\n  box-sizing: border-box;\n}\n  </style>\n\n\n<app-nav-bg [head]=\"head\" [bg]=\"bg\" [nav_arabic]=\"nav_arabic\" ></app-nav-bg>\n\n<div class=\"container-fluid\">\n <br>\n  <div class=\"card\" style=\"border-radius: 18px;\n   background: white;color:#494949;\" dir=\"rtl\">\n    <br>\n    <br>\n\n\n    <br>\n\n    <div class=\"An-overview-of-da \" dir=\"rtl\">\n\n      <div class=\"col-sm-12 text-justify\">\n        <a class=\"saned_heading\">سياسة خاصة</a>\n\n        <div class=\"col-sm-12\">\n          <a class=\"saned_heading\">1. نظرة عامة على حماية البيانات</a>\n\n          <br>\n          <a class=\"saned_heading\">جنرال لواء</a>\n          <br>\n          <br>\n          <p class=\"saned_para\">يقدم ما يلي نظرة عامة بسيطة على ما يحدث\n            لمعلوماتك الشخصية عند زيارتك لموقعنا. المعلومات الشخصية هي أي\n            بيانات يمكنك تحديد هويتك بها. يمكن العثور على معلومات تفصيلية حول موضوع حماية البيانات في سياسة الخصوصية\n            الخاصة بنا الموجودة أدناه.</p>\n        </div>\n\n\n        <div class=\"col-sm-12\">\n          <a class=\"saned_heading\">جمع البيانات على موقعنا</a>\n          <br>\n          <br>\n          <p class=\"saned_para\">من المسؤول عن جمع البيانات على هذا الموقع؟</p>\n          <p class=\"saned_para\">تتم معالجة البيانات التي تم جمعها على هذا\n            الموقع من قبل مشغل الموقع. يمكن العثور على تفاصيل الاتصال الخاصة\n            بالمشغل في الإشعار القانوني المطلوب في الموقع الإلكتروني.</p>\n        </div>\n\n        <div class=\"col-sm-12\">\n          <a class=\"saned_heading\"> كيف نجمع بياناتك؟</a>\n          <br>\n          <br>\n          <p class=\"saned_para\">Sيتم جمع البيانات عند تقديمها لنا. يمكن أن\n            يكون هذا ، على سبيل المثال ، بيانات تقوم بإدخالها في نموذج جهة\n            اتصال.</p>\n          <p class=\"saned_para\"> يتم جمع البيانات الأخرى تلقائيًا من خلال\n            أنظمة تكنولوجيا المعلومات لدينا عند زيارة الموقع. هذه البيانات\n            هي بيانات تقنية في المقام الأول مثل المتصفح ونظام التشغيل الذي تستخدمه أو عند الوصول إلى الصفحة. يتم جمع\n            هذه البيانات تلقائيا بمجرد دخولك موقعنا.</p>\n        </div>\n\n        <div class=\"col-sm-12\">\n          <a class=\"saned_heading\"> ما الذي نستخدمه لبياناتك؟</a>\n          <br>\n          <br>\n          <p class=\"saned_para\">يتم جمع جزء من البيانات لضمان حسن سير عمل\n            الموقع. يمكن استخدام بيانات أخرى لتحليل كيفية استخدام الزائرين\n            للموقع.</p>\n        </div>\n\n        <div class=\"col-sm-12\">\n          <p class=\"saned_para\">يحق لك دائمًا طلب معلومات حول بياناتك المخزنة\n            ، وأصلها ، ومستلموها ، والغرض من جمعها دون مقابل. لديك أيضًا\n            الحق في طلب تصحيحه أو حظره أو حذفه. يمكنك الاتصال بنا في أي وقت باستخدام العنوان الوارد في الإشعار القانوني\n            إذا كان لديك المزيد من الأسئلة حول مسألة الخصوصية وحماية البيانات. يمكنك أيضًا ، بالطبع ، تقديم شكوى إلى\n            السلطات التنظيمية المختصة.</p>\n        </div>\n\n        <div class=\"col-sm-12\">\n          <a class=\"saned_heading\">التحليلات وأدوات الطرف الثالث</a>\n          <br>\n          <br>\n          <p class=\"saned_para\">عند زيارة موقعنا على الإنترنت ، قد يتم إجراء\n            التحليلات الإحصائية لسلوكك في ركوب الأمواج. هذا يحدث في\n            المقام الأول باستخدام ملفات تعريف الارتباط والتحليلات. عادةً ما يكون تحليل سلوك تصفح الإنترنت الخاص بك\n            مجهولاً ، بمعنى أننا لن نتمكن من التعرف عليك من هذه البيانات. يمكنك الاعتراض على هذا التحليل أو منعه عن\n            طريق عدم استخدام أدوات معينة. يمكن العثور على معلومات تفصيلية في سياسة الخصوصية التالية.</p>\n          <p class=\"saned_para\"> يمكنك الاعتراض على هذا التحليل. سوف نعلمك\n            أدناه حول كيفية ممارسة الخيارات المتاحة أمامك في هذا الصدد.</p>\n        </div>\n\n\n        <div class=\"col-sm-12\">\n          <a class=\"saned_heading\"> 2. معلومات عامة ومعلومات إلزامية</a>\n          <br>\n          <br>\n          <a class=\"saned_heading\">حماية البيانات</a>\n          <br>\n          <br>\n          <p class=\"saned_para\">يأخذ مشغلي هذا الموقع حماية بياناتك الشخصية\n            على محمل الجد. نتعامل مع بياناتك الشخصية بسرية ووفقًا للوائح\n            القانونية لحماية البيانات وسياسة الخصوصية هذه.</p>\n          <p class=\"saned_para\"> إذا كنت تستخدم هذا الموقع ، فسيتم جمع العديد\n            من البيانات الشخصية. المعلومات الشخصية هي أي بيانات يمكنك\n            تحديد هويتك بها. سياسة الخصوصية هذه تشرح المعلومات التي نجمعها وما نستخدمها من أجلها. كما يشرح كيف ولأي غرض\n            يحدث هذا.</p>\n          <p class=\"saned_para\">يرجى ملاحظة أن البيانات التي يتم نقلها عبر\n            الإنترنت (على سبيل المثال عبر البريد الإلكتروني) قد تكون عرضة\n            لخروقات أمنية. الحماية الكاملة لبياناتك من الوصول إلى طرف ثالث غير ممكن.</p>\n          <p class=\"saned_para\"> إشعار يتعلق بالطرف المسؤول عن هذا الموقع</p>\n          <p class=\"saned_para\"> الطرف المسؤول عن معالجة البيانات على هذا\n            الموقع هو:</p>\n          <p class=\"saned_para\">\n            <font color=\"#333\">برج 400 ,18 أرضية,</font>\n            <br>\n            <font color=\"#333;\"> طريق الميناء الشارقة,</font>\n            <br>\n            <font color=\"#333;\">صندوق بريد 4648 الشارقة - الإمارات العربية المتحدة</font>\n            <br>\n\n            <font color=\"#333;\" dir=\"rtl\"> رقم الهاتف: 6555 506 6 971+ </font>\n            <br>\n            <font color=\"#333;\" dir=\"rtl\"> الفاكس: 2331 572 6 971+ </font>\n            <br>\n            <font color=\"#333;\">البريد الإلكتروني: helpdesk@saned.ae</font>\n            <br>\n            <a routerLink=\"login-arabic\">\n              <font color=\"black\">www.saned.ae</font>\n            </a>\n          </p>\n          <p class=\"saned_para\">الطرف المسؤول هو الشخص الطبيعي أو الاعتباري\n            الذي يقرر وحده أو بالاشتراك مع آخرين أغراض ووسائل معالجة\n            البيانات الشخصية (الأسماء وعناوين البريد الإلكتروني وما إلى ذلك).</p>\n        </div>\n\n\n        <div class=\"col-sm-12\">\n          <a class=\"saned_heading\"> إلغاء موافقتك على معالجة بياناتك</a>\n          <br>\n          <br>\n          <p class=\"saned_para\"> لا يمكن إجراء العديد من عمليات معالجة\n            البيانات إلا بموافقتك الصريحة. يمكنك إلغاء موافقتك في أي وقت مع\n            التأثير المستقبلي. البريد الإلكتروني غير الرسمي الذي يجعل هذا الطلب كافياً. قد تتم معالجة البيانات التي تتم\n            معالجتها قبل استلام طلبك.</p>\n          <p class=\"saned_para\"> الحق في تقديم الشكاوى مع السلطات التنظيمية</p>\n          <p class=\"saned_para\"> إذا كان هناك انتهاك لتشريع حماية البيانات ،\n            يمكن للشخص المتضرر تقديم شكوى إلى السلطات التنظيمية المختصة.\n            السلطة التنظيمية المختصة للمسائل المتعلقة بتشريعات حماية البيانات هي مسؤول حماية البيانات في الدولة\n            الألمانية التي يوجد مقر الشركة فيها. يمكن العثور على قائمة بمسؤولي حماية البيانات وتفاصيل الاتصال بهم على\n            الرابط التالي: https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html.</p>\n        </div>\n\n        <div class=\"col-sm-12\">\n          <a class=\"saned_heading\"> تشفير SSL أو TLS</a>\n          <br>\n          <br>\n          <p class=\"saned_para\">يستخدم هذا الموقع تشفير SSL أو TLS لأسباب\n            أمنية ولحماية نقل المحتوى السري ، مثل الاستفسارات التي ترسلها\n            إلينا كمشغل الموقع. يمكنك التعرف على اتصال مشفر في سطر العنوان بالمتصفح & الخاص بك عندما يتغير من & quot؛\n            http: // & quot؛ إلى & quot؛ https: // & quot؛ ويتم عرض رمز القفل في شريط عناوين المتصفح.</p>\n          <p class=\"saned_para\">إذا تم تنشيط تشفير SSL أو TLS ، فإن البيانات\n            التي تنقلها إلينا لا يمكن قراءتها بواسطة أطراف ثالثة.</p>\n        </div>\n\n        <div class=\"col-sm-12\">\n          <a class=\"saned_heading\">المعلومات ، الحظر ، الحذف</a>\n          <br>\n          <br>\n          <p class=\"saned_para\"> وفقًا لما يسمح به القانون ، لديك الحق في أن\n            يتم تقديمك في أي وقت بمعلومات مجانية عن أي من بياناتك الشخصية\n            المخزنة وكذلك أصلها والمتلقي والغرض الذي تمت معالجته من أجله. لديك أيضًا الحق في تصحيح هذه البيانات أو\n            حظرها أو حذفها. يمكنك الاتصال بنا في أي وقت باستخدام العنوان الوارد في إشعارنا القانوني إذا كان لديك المزيد\n            من الأسئلة حول موضوع البيانات الشخصية.</p>\n        </div>\n\n        <div class=\"col-sm-12\">\n          <a class=\"saned_heading\"> 3. مسؤول حماية البيانات</a>\n          <br>\n          <br>\n          <a class=\"saned_heading\">موظف حماية البيانات القانوني</a>\n          <br>\n          <br>\n          <p class=\"saned_para\"> لقد قمنا بتعيين موظف حماية بيانات لشركتنا.</p>\n          <p class=\"saned_para\">\n            <font color=\"black\">برج 400 18 أرضية,</font>\n            <br>\n            <font color=\"black\"> طريق الميناء الشارقة,</font>\n            <br>\n            <font color=\"black\">صندوق بريد 4648 الشارقة - الإمارات العربية المتحدة</font>\n            <br>\n\n            <font color=\"black\" dir=\"rtl\"> رقم الهاتف: 6555 506 6 971+ </font>\n            <br>\n            <font color=\"black\" dir=\"rtl\"> الفاكس: 2331 572 6 971+ </font>\n            <br>\n            <font color=\"black\">البريد الإلكتروني: helpdesk@saned.ae</font>\n            <br>\n            <a routerLink=\"login-arabic\">\n              <font color=\"black\">www.saned.ae</font>\n            </a>\n          </p>\n        </div>\n        <div class=\"col-sm-12\">\n          <a class=\"saned_heading\">\n            4. جمع البيانات على موقعنا على الانترنت الكوكيز\n          </a>\n          <br>\n          <br>\n          <p class=\"saned_para\">\n            تستخدم بعض صفحات الويب ملفات تعريف الارتباط. ملفات تعريف الارتباط لا تضر جهاز الكمبيوتر الخاص بك ولا تحتوي\n            على أي فيروسات. تساعد ملفات تعريف الارتباط في جعل موقعنا الإلكتروني أكثر سهولة في الاستخدام وكفاءة وأمانًا.\n            ملفات تعريف الارتباط عبارة عن ملفات نصية صغيرة يتم تخزينها على جهاز الكمبيوتر الخاص بك ويتم حفظها بواسطة\n            المستعرض الخاص بك.\n          </p>\n          <p class=\"saned_para\">\n            معظم ملفات تعريف الارتباط التي نستخدمها تُعرف باسم & quot؛ ملفات تعريف ارتباط الجلسة. & quot؛ يتم حذفها\n            تلقائيا بعد زيارتك. تبقى ملفات تعريف الارتباط الأخرى موجودة في ذاكرة جهازك ورسائلك حتى تقوم بحذفها. تتيح\n            ملفات تعريف الارتباط هذه التعرف على متصفحك عند زيارتك للموقع في المرة القادمة.\n          </p>\n          <p class=\"saned_para\">\n            يمكنك تكوين المستعرض الخاص بك لإخبارك حول استخدام ملفات تعريف الارتباط بحيث يمكنك أن تقرر على أساس حالة\n            بحالة قبول أو رفض ملف تعريف الارتباط. بدلاً من ذلك ، يمكن تكوين المستعرض الخاص بك لقبول ملفات تعريف\n            الارتباط تلقائيًا في ظل شروط معينة أو رفضها دائمًا ، أو حذف ملفات تعريف الارتباط تلقائيًا عند إغلاق\n            المتصفح. تعطيل ملفات تعريف الارتباط قد يحد من وظائف هذا الموقع.\n          </p>\n          <p class=\"saned_para\">\n            يتم تخزين ملفات تعريف الارتباط الضرورية للسماح بالاتصالات الإلكترونية أو لتوفير وظائف معينة ترغب في\n            استخدامها (مثل عربة التسوق) وفقًا للفنون. 6 الفقرة 1 ، حرف و من DSGVO. لدى مشغل موقع الويب مصلحة مشروعة في\n            تخزين ملفات تعريف الارتباط لضمان توفير خدمة محسَّنة وخالية من الأخطاء الفنية. إذا تم تخزين ملفات تعريف\n            الارتباط الأخرى (مثل تلك المستخدمة لتحليل سلوك تصفح الإنترنت الخاص بك) ، فسيتم التعامل معها بشكل منفصل في\n            سياسة الخصوصية هذه.\n          </p>\n        </div>\n\n\n\n        <div class=\"col-sm-12\">\n          <a class=\"saned_heading\"> ملفات سجل الخادم</a>\n          <br>\n          <br>\n          <p class=\"saned_para\">\n            يقوم موفر الموقع الإلكتروني تلقائيًا بتجميع وتخزين المعلومات التي يرسلها المتصفح إليك تلقائيًا في & quot؛\n            ملفات سجل الخادم & quot ؛. هؤلاء هم:</p>\n          <p class=\"saned_para\">\n            نوع المتصفح وإصدار المستعرض<br>\n            نظام التشغيل المستخدم <br>\n            عنوان الإحالة <br>\n            اسم المضيف للكمبيوتر الوصول <br>\n            وقت طلب الخادم <br>\n            عنوان IP <br>\n            لن يتم دمج هذه البيانات مع بيانات من مصادر أخرى.\n          </p>\n          <p class=\"saned_para\">أساس معالجة البيانات هو الفن. 6 (1) (و) DSGVO\n            ، الذي يسمح بمعالجة البيانات للوفاء بعقد أو للتدابير الأولية\n            للعقد.</p>\n        </div>\n        <div class=\"col-sm-12\">\n          <a class=\"saned_heading\">نموذج الاتصال</a>\n          <br>\n          <br>\n          <p class=\"saned_para\"> إذا أرسلت إلينا أسئلة عبر نموذج الاتصال ،\n            فسوف نجمع البيانات التي تم إدخالها في النموذج ، بما في ذلك\n            تفاصيل الاتصال التي تقدمها ، للإجابة عن سؤالك وأي أسئلة تتعلق بالمتابعة. نحن لا نشارك هذه المعلومات دون\n            إذنك.</p>\n          <p class=\"saned_para\"> ولذلك ، سنقوم بمعالجة أي بيانات تقوم بإدخالها\n            في نموذج الاتصال فقط بموافقتك على كل مادة. 6 (1) (أ) DSGVO.\n            يمكنك إلغاء موافقتك في أي وقت. البريد الإلكتروني غير الرسمي الذي يجعل هذا الطلب كافياً. قد تتم معالجة\n            البيانات التي تتم معالجتها قبل استلام طلبك.</p>\n          <p class=\"saned_para\">سنحتفظ بالبيانات التي تقدمها في نموذج الاتصال\n            إلى أن تطلب حذفها ، أو تلغي موافقتك على تخزينها ، أو لم يعد\n            الغرض من سعتها التخزينية (على سبيل المثال بعد تلبية طلبك). أي أحكام قانونية إلزامية ، لا سيما تلك المتعلقة\n            بفترات الاحتفاظ الإلزامي للبيانات ، تظل غير متأثرة بهذا الحكم.</p>\n        </div>\n\n        <div class=\"col-sm-12\">\n          <a class=\"saned_heading\"> 5. وسائل الاعلام الاجتماعية</a>\n          <br>\n          <br>\n          <a class=\"saned_heading\">ملحقات Facebook (مثل & amp؛ أزرار المشاركة)</a>\n          <br>\n          <br>\n          <p class=\"saned_para\">\n            يتضمن موقعنا الإلكتروني مكونات إضافية للشبكة الاجتماعية Facebook ، Facebook Inc. ، 1 Hacker Way ، Menlo\n            Park ، كاليفورنيا 94025 ، الولايات المتحدة الأمريكية. يمكن التعرف على ملحقات Facebook من خلال شعار Facebook\n            أو زر Like على موقعنا. للحصول على نظرة عامة على مكونات Facebook الإضافية ، راجع\n            developers.facebook.com/docs/plugins/.\n          </p>\n          <p class=\"saned_para\">\n            عند زيارتك لموقعنا ، يتم إنشاء اتصال مباشر بين متصفحك وخادم Facebook عبر المكون الإضافي. يتيح ذلك لـ\n            Facebook تلقي المعلومات التي قمت بزيارتها من عنوان IP الخاص بك. إذا نقرت على زر & quot؛ أعجبني & quot؛\n            أثناء تسجيل الدخول إلى حسابك على Facebook ، يمكنك ربط محتوى موقعنا بملفك الشخصي على Facebook. يسمح هذا لـ\n            Facebook بربط زيارات موقعنا بحساب المستخدم الخاص بك. يرجى ملاحظة أنه كمشغل لهذا الموقع ، ليس لدينا أي معرفة\n            بمحتوى البيانات المرسلة إلى Facebook أو كيفية استخدام Facebook لهذه البيانات. لمزيد من المعلومات ، يرجى\n            الاطلاع على سياسة الخصوصية الخاصة بـ Facebook & apos؛ s على https://www.facebook.com/about/privacy/update.\n          </p>\n          <p class=\"saned_para\">\n            إذا كنت لا ترغب في ربط Facebook بزيارتك لموقعنا باستخدام حساب Facebook الخاص بك ، فالرجاء تسجيل الخروج من\n            حساب Facebook الخاص بك.\n          </p>\n        </div>\n\n\n        <div class=\"col-sm-12\">\n          <a class=\"saned_heading\">البرنامج المساعد تويتر</a>\n          <br>\n          <br>\n          <p class=\"saned_para\">\n            تم دمج وظائف خدمة Twitter في موقعنا على الويب وتطبيقنا. يتم تقديم هذه الميزات بواسطة Twitter Inc.، 1355\n            Market Street، Suite 900، San Francisco، CA 94103، USA. عندما تستخدم Twitter ووظيفة \"Retweet\" ، فإن مواقع\n            الويب التي تقوم بزيارتها مرتبطة بحساب Twitter الخاص بك ومعروفة للمستخدمين الآخرين. عند القيام بذلك ، سيتم\n            أيضًا نقل البيانات إلى Twitter. نود أن نشير إلى أنه ، بصفتنا مزود هذه الصفحات ، ليس لدينا أي معرفة بمحتوى\n            البيانات المرسلة أو كيف سيتم استخدامها من قبل Twitter. لمزيد من المعلومات حول سياسة الخصوصية في Twitter &\n            apos؛ s ، يرجى الانتقال إلى https://twitter.com/privacy.\n          </p>\n          <p class=\"saned_para\">\n            يمكن تعديل تفضيلات الخصوصية الخاصة بك مع Twitter في إعدادات حسابك على https://twitter.com/account/setting.\n          </p>\n        </div>\n\n        <div class=\"col-sm-12\">\n          <a class=\"saned_heading\">\n            مكوّن + Google الإضافي\n          </a>\n          <br>\n          <br>\n          <p class=\"saned_para\">\n            تستخدم صفحاتنا وظائف + Google. يتم تشغيله بواسطة Google Inc. ، 1600 Amphitheatre Parkway، Mountain View، CA\n            94043، USA.\n          </p>\n          <p class=\"saned_para\">\n            جمع المعلومات والكشف عنها: يتيح لك استخدام الزر 1+ Google نشر المعلومات في جميع أنحاء العالم. من خلال زر\n            Google+ ، يمكنك أنت والمستخدمين الآخرين تلقي محتوى مخصص من Google وشركائنا. تخزن Google كلاً من حقيقة أن\n            لديك 1+ & apos؛ d جزء من المحتوى ومعلومات عن الصفحة التي كنت تشاهدها عندما نقرت على 1+. يمكن عرض +1 مع اسم\n            ملفك الشخصي وصورتك في خدمات Google ، على سبيل المثال في نتائج البحث أو في ملفك الشخصي في Google ، أو في\n            أماكن أخرى على مواقع الويب والإعلانات على الإنترنت.\n          </p>\n          <p class=\"saned_para\">\n            تسجل Google معلومات حول أنشطة 1+ لتحسين خدمات Google لك ولآخرين. لاستخدام الزر Google + ، تحتاج إلى ملف\n            شخصي عام مرئي بشكل عام على Google ويجب أن يحتوي على الأقل على الاسم المختار للملف الشخصي. يتم استخدام هذا\n            الاسم بواسطة جميع خدمات Google. في بعض الحالات ، قد يستبدل هذا الاسم أيضًا اسمًا مختلفًا استخدمته لمشاركة\n            المحتوى عبر حساب Google الخاص بك. يمكن عرض هوية ملفك الشخصي في Google للمستخدمين الذين يعرفون عنوان بريدك\n            الإلكتروني أو معلومات أخرى يمكنها التعرف عليك.\n          </p>\n          <p class=\"saned_para\">\n            استخدام البيانات المجمعة: بالإضافة إلى الاستخدامات المذكورة أعلاه ، يتم استخدام المعلومات التي تقدمها وفقًا\n            لسياسات حماية البيانات المعمول بها في Google. قد تنشر Google إحصاءات مختصرة حول المستخدمين & apos؛ نشاط 1+\n            أو مشاركته مع المستخدمين والشركاء ، مثل الناشرين أو المعلنين أو مواقع الويب التابعة.\n          </p>\n        </div>\n\n\n        <div class=\"col-sm-12\">\n          <a class=\"saned_heading\">\n            المساعد LinkedIn\n          </a>\n          <br>\n          <br>\n          <p class=\"saned_para\">\n            يستخدم موقعنا وظائف من شبكة LinkedIn. الخدمة مقدمة من شركة LinkedIn Corporation ، 2029 Stierlin Court،\n            Mountain View، CA 94043، USA.\n          </p>\n          <p class=\"saned_para\">\n            في كل مرة يتم الوصول إلى أحد صفحاتنا التي تحتوي على ميزات LinkedIn ، يقوم متصفحك بإنشاء اتصال مباشر بخوادم\n            LinkedIn. يتم إعلام LinkedIn بأنك قمت بزيارة صفحات الويب الخاصة بنا من عنوان IP الخاص بك. إذا كنت تستخدم زر\n            ينكدين \"التوصية\" وقمت بتسجيل الدخول إلى حساب LinkedIn الخاص بك ، فمن الممكن لينكدين لربط زيارتك لموقعنا على\n            شبكة الإنترنت لحساب المستخدم الخاص بك. نود أن نشير إلى أنه ، بصفتنا مزود هذه الصفحات ، ليس لدينا أي معرفة\n            بمحتوى البيانات المنقولة أو كيف سيتم استخدامها من قبل LinkedIn.\n          </p>\n          <p class=\"saned_para\">\n            يمكن العثور على مزيد من المعلومات في سياسة خصوصية LinkedIn على\n            https://www.linkedin.com/legal/privacy-policy.\n          </p>\n        </div>\n\n        <div class=\"col-sm-12\">\n          <a class=\"saned_heading\">\n            شينغ البرنامج المساعد\n          </a>\n          <br>\n          <br>\n          <p class=\"saned_para\">يستخدم موقعنا الإلكتروني الميزات التي توفرها\n            شبكة XING. المزود هو XING AG، Dammtorstraße 29-32، 20354\n            Hamburg، Germany.</p>\n          <p class=\"saned_para\">\n            في كل مرة يتم الوصول إلى إحدى صفحاتنا التي تحتوي على ميزات XING ، يقوم متصفحك بإنشاء اتصال مباشر بخوادم\n            XING. على حد علمنا ، لا يتم تخزين أي بيانات شخصية في هذه العملية. على وجه الخصوص ، لا يتم تخزين أي عناوين\n            IP ولا يتم تقييم سلوك الاستخدام.\n          </p>\n          <p class=\"saned_para\">\n            لمزيد من المعلومات حول حماية البيانات وزر مشاركة XING ، يرجى الاطلاع على سياسة خصوصية XING على\n            https://www.xing.com/app/share؟op=data_protection.\n          </p>\n        </div>\n\n        <div class=\"col-sm-12\">\n          <a class=\"saned_heading\">\n            6. التحليلات والإعلانات\n          </a>\n          <br>\n          <br>\n          <p style=\"font-size: 18px;font-family: GeezaPro;color: black;\">\n            ماتومو (سابقًا Piwik)\n          </p>\n\n\n          <p class=\"saned_para\">\n            يستخدم موقع الويب هذا خدمة تحليل الويب مفتوحة المصدر Matomo. يستخدم Matomo ما يسمى & quot؛ ملفات تعريف\n            الارتباط & quot ؛. هذه هي ملفات نصية مخزنة على جهاز الكمبيوتر الخاص بك والتي تسمح بتحليل استخدام الموقع من\n            قبلك. لهذا الغرض ، يتم تخزين المعلومات التي تم إنشاؤها بواسطة ملف تعريف الارتباط حول استخدام هذا الموقع على\n            الخادم الخاص بنا. عنوان IP مجهولة الهوية قبل تخزينها.\n          </p>\n          <p class=\"saned_para\">\n            تظل ملفات تعريف الارتباط Matomo على جهازك إلى أن تحذفها.\n          </p>\n          <p class=\"saned_para\">\n            ويستند تخزين ملفات تعريف الارتباط Matomo على الفن. 6 (1) (و) DSGVO. لدى مشغل موقع الويب مصلحة مشروعة في\n            تحليل سلوك المستخدم من أجل تحسين كل من موقعه على الويب وإعلانه.\n          </p>\n          <p class=\"saned_para\">\n            لن يتم الكشف عن المعلومات التي تم إنشاؤها بواسطة ملفات تعريف الارتباط حول استخدامك لهذا الموقع إلى أطراف\n            ثالثة. يمكنك منع تخزين ملفات تعريف الارتباط هذه عن طريق تحديد الإعدادات المناسبة في متصفحك. ومع ذلك ، نود\n            أن نشير إلى أن القيام بذلك قد يعني أنك لن تتمكن من التمتع بالوظائف الكاملة لهذا الموقع.\n          </p>\n          <p class=\"saned_para\">\n            إذا كنت لا توافق على تخزين واستخدام بياناتك ، فيمكنك تعطيل هذه الميزة هنا. في هذه الحالة ، سيتم تخزين ملف\n            تعريف ارتباط إلغاء الاشتراك في المستعرض الخاص بك لمنع Matomo من تخزين بيانات الاستخدام الخاصة بك. إذا قمت\n            بحذف ملفات تعريف الارتباط الخاصة بك ، فسيعني ذلك أيضًا حذف ملف تعريف ارتباط إلغاء الاشتراك. ستحتاج بعد ذلك\n            إلى إعادة تنشيطه عند العودة إلى موقعنا إذا كنت ترغب في عدم تتبع نشاطك.\n          </p>\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n  <br>\n\n</div>\n\n<app-footer></app-footer>\n<!-- ====Arabic -->\n\n\n\n<!------ Include the above in your HEAD tag ---------->\n\n\n\n\n\n\n<router-outlet></router-outlet>\n\n<!-- </div> -->"

/***/ }),

/***/ "./src/app/privacy-arabic/privacy-arabic.component.ts":
/*!************************************************************!*\
  !*** ./src/app/privacy-arabic/privacy-arabic.component.ts ***!
  \************************************************************/
/*! exports provided: PrivacyArabicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyArabicComponent", function() { return PrivacyArabicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PrivacyArabicComponent = /** @class */ (function () {
    function PrivacyArabicComponent() {
        this.navbarOpen = false;
        this.head = "سياسة خاصة";
        this.bg = "bg_img";
        this.nav_arabic = "/privacy";
        this.Lang = {};
        this.model = {};
    }
    PrivacyArabicComponent.prototype.toggleNavbar = function () {
        this.navbarOpen = !this.navbarOpen;
    };
    PrivacyArabicComponent.prototype.ngOnInit = function () {
    };
    PrivacyArabicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-privacy-arabic',
            template: __webpack_require__(/*! ./privacy-arabic.component.html */ "./src/app/privacy-arabic/privacy-arabic.component.html"),
            styles: [__webpack_require__(/*! ./privacy-arabic.component.css */ "./src/app/privacy-arabic/privacy-arabic.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PrivacyArabicComponent);
    return PrivacyArabicComponent;
}());



/***/ }),

/***/ "./src/app/privacy/privacy.component.css":
/*!***********************************************!*\
  !*** ./src/app/privacy/privacy.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".intro-2 {\n    background: url(\"/assets/hero_image.png\")no-repeat center center;\n    background-size: cover;\n    /* height: 635px; */\n }\n \n .aboutus {\n    background: url(\"/assets/group-4.png\")no-repeat center center;\n    /* background-size: cover; */\n    height: 330px;\n    border-radius: 18px;\n    \n }\n \n .spacer {\n  height: 100px;\n}\n \n .Who-We-Are-Aman-is-a {\n    width: 733px;\n    height: 459px;\n    font-family: Roboto;\n    font-size: 18px;\n    text-align: justify;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: var(--black);\n  }\n \n .Who-We-Are-Aman-is-a .text-style-1 {\n    font-size: 24px;\n  }\n \n .An-overview-of-da {\n    /* width: 1188px; */\n    height: 100%;\n    font-family: Roboto;\n    font-size: 18px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: var(--black);\n  }\n \n /* ===========navbar start========= */\n \n .WHAT-IS-Aman-1 {\n    width: 300px;\n  height: 53px;\n  font-family: Roboto;\n  font-size: 25px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.18;\n  letter-spacing: normal;\n  color: #212529;\n  }\n \n .WHAT-IS-Aman- {\n    width: 400px;\n  height: 53px;\n  font-family: Roboto;\n  font-size: 50px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.18;\n  letter-spacing: normal;\n  color: var(--black);\n  }\n \n .Sharjah-Asset-Manage {\n    /* width: 535px; */\n    /* height: 283px; */\n    font-family: Roboto;\n    font-size: 16px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    /* color: black */\n  }\n \n /* ===Mobile navbar start=========== */\n \n /* ====================responsive================= */\n \n .mt_20{\n  margin-top: 0px;\n}\n \n .wt_237{\nwidth: 237px;\n}\n \n .wt-con{\nwidth: 232px;\n}\n \n .wt_140{\nwidth: 140% !important;\n}\n \n /* mobile media query */\n \n @media screen and (min-device-width: 320px) and (max-device-width: 760px){\n.nav-bg {\n  background-color: rgba(0, 0, 0, 0.65) !important;\n}\n\n.pt-120{\n  position: relative;\n  right: 136px;\n}\n.mt-414{\n  margin-top: 0px !important;\n}\n.ft_18 {\n  font-size: 18px;\n}\n\n\n\n}\n \n /* css for ipad */\n \n @media screen and (min-device-width: 768px) and (max-device-width: 1022px){\n.nav-bg {\n  /* background-color: rgba(0, 0, 0, 0.65) !important; */\n}\n.maxwt_19{\n  max-width: 19%;\n}\n.wt_135{\nwidth: 135px !important;\n}\n.map_wt{\n  width: 175px !important;\n}\n.logo_wt{\nwidth: 109px;\n}\n.col-sm-2{\n  width : 0% ! important;\n}\n\n.mt_20{\n  \n    margin-top: 4px !important; \n  \n  shape-margin: 0px !important;\n}\n\n.ht_80{\n  height:54px !important\n}\n\n.pt-120{\n  position: relative;\n  right: 79px;\n}\n.mt-414{\n  margin-top:0px !important;\n}\n\n.ml-5, .mx-5 {\n  margin-left: 2.2rem !important;\n}\n\n.pad_0{\npadding:0 0px !important;\n}\n.ft_18 {\n  font-size: 30px;\n}\n\n.wt_106{\n  width: 106% !important;\n}\n\n\n}\n \n @media screen and (max-device-width: 1024px){\n  .nav-bg {\n    /* background-color: rgba(0, 0, 0, 0.65) !important; */\n  }\n  .maxwt_19{\n    max-width: 19%;\n  }\n  .wt_135{\nwidth: 135px !important;\n  }\n  .map_wt{\n    width: 175px !important;\n  }\n  .ml_135{\n    margin-left: 0px !important;\n  }\n  /* .ml_16{\n    margin-left: -16px !important;\n  } */\n.logo_wt{\n  width: 109px;\n}\n  .col-sm-2{\n    /* width : 0% ! important; */\n  }\n\n  .mt_20{\n    \n      margin-top: 4px !important; \n    \n    shape-margin: 0px !important;\n  }\n\n  .ht_80{\n    height:54px !important\n  }\n\n  .pt-120{\n    position: relative;\n    /* right: 79px; */\n  }\n  .mt-414{\n    margin-top:0px !important;\n  }\n\n  .ml-5, .mx-5 {\n    margin-left: 2.2rem !important;\n}\n\n.pad_0{\npadding:0 0px !important;\n}\n  .ft_18 {\n    font-size: 30px;\n  }\n\n  .wt_106{\n    width: 106% !important;\n  }\n\n\n}\n \n /* =========Mobile navbar End========== */\n \n .Rectangle-2 {    \n  width: 123px;\n  height: 41px;\n  border-radius: 5px;\n  background-color: #ff0000;\n}\n \n .Contact-Us {\n  width: 90px;\n  height: 24px;\n  font-family: Roboto;\n  font-size: 18px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #ffffff;\n}\n \n .Suppliers {\n  width: 77px;\n  height: 24px;\n  font-family: Roboto;\n  font-size: 18px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #ffffff;\n}\n \n .Services {\n  width: 70px;\n  height: 24px;\n  font-family: Roboto;\n  font-size: 18px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #ffffff;\n}\n \n .About-Us-Copy {\n  width: 75px;\n  height: 24px;\n  font-family: Roboto;\n  font-size: 18px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #ffffff;\n}\n \n .Home-Copy {\n  width: 49px;\n  height: 24px;\n  font-family: Roboto;\n  font-size: 18px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #ffffff;\n}\n \n /* ======navbar end===== */\n \n body {\n  font-family: Arial, Helvetica, sans-serif;\n}\n \n nav {\n  width: 100%;\n  height: 50px;\n  background: rgba(0, 0, 0, .8);\n  border-top: 1px solid rgba(255, 255);\n  border-bottom: 1px solid rgba(255, 255);\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0px;\n  z-index: 99;\n}\n \n body {\n  margin: 0;\n  padding: 0;\n  font-family: sans-serif;\n  /* background: #000; */\n}\n \n header {\n  padding: 10px 100px;\n  box-sizing: border-box;\n}\n \n section {\n  width: 100%;\n  height: 100vh;\n}\n \n .dropdown {\n  float: left;\n  overflow: hidden;\n}\n \n .dropdown .dropbtn {\n  font-size: 16px;\n  border: none;\n  outline: none;\n  color: white;\n  padding: 14px 16px;\n  background-color: inherit;\n  font-family: inherit;\n  margin: 0;\n}\n \n .navbar a:hover,\n.dropdown:hover .dropbtn {\n  /* background-color: red; */\n}\n \n .dropdown-content {\n  display: block;\n  position: absolute;\n  background-color: red;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n}\n \n .dropdown-content a {\n  float: none;\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n  text-align: left;\n}\n \n .dropdown-content a:hover {\n  background-color: #ddd;\n}\n \n ul {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n \n ul li a {\n  text-decoration: none;\n  color: #e74c3c;\n  font-family: Tahoma, Arial;\n}\n \n .navigation {\n  background-color: #35353500;\n  width: 75%;\n  margin: 20px auto;\n  min-height: 50px;\n}\n \n .navigation>li {\n  float: left;\n  padding: 0 20px;\n}\n \n .navigation>li>a {\n  line-height: 50px;\n  color: #FFF;\n}\n \n .navigation .menu {\n  position: relative\n}\n \n .navigation .menu .submenu {\n  position: absolute;\n  /* width: 200px; */\n  box-shadow: 0px 1px 1px #CCC;\n  display: none;\n  transition: all .5s ease-in-out;\n}\n \n .navigation .menu:hover .submenu {\n  display: block\n}\n \n .navigation .menu .submenu:before {\n  content: \"\";\n  position: absolute;\n  display: block;\n  border-width: 0 6px 6px 6px;\n  border-style: solid;\n  border-color: #FFF transparent;\n  top: -6px;\n  left: 5px\n}\n \n .navigation .menu .submenu li {\n  padding: 5px 10px;\n  transition: all .5s ease-in-out;\n}\n \n .navigation .menu .submenu li:hover {\n  background-color: #e74c3c;\n}\n \n .navigation .menu .submenu li:hover a {\n  color: #FFF;\n  /* padding: 0 12px; */\n}\n \n .dropdown:hover .dropdown-content {\n  display: block;\n}\n \n nav {\n  width: 100%;\n  height: 50px;\n  background: rgba(0, 0, 0, .8);\n  border-top: 1px solid rgba(255, 255);\n  border-bottom: 1px solid rgba(255, 255);\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0px;\n  z-index: 99\n}\n \n nav ul {\n  display: flex;\n  margin: 0px;\n  padding: 0px;\n  float: right;\n}\n \n nav ul li {\n  list-style: none;\n}\n \n nav ul {\n  display: flex;\n\n  padding: 0px;\n  /* float: ; */\n}\n \n nav ul li a {\n  display: block;\n  color: #fff;\n  padding: 0 20px;\n  text-decoration: none;\n  text-transform: uppercase;\n  font-weight: bold;\n  line-height: 50px;\n\n}\n \n /* .switch{\nmargin-top: 0;\nmargin-bottom: -5rem;\nmargin-left: 83%;\ncolor: red;\noverflow: hidden;\n}\n.switch1{\nmargin-top: 0;\nmargin-bottom: -2rem;\nmargin-left: 0%;\ncolor: red;\n} */\n \n /* ==============footer style start ========= */\n \n .footer {\n  /* position: fixed; */\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background-color: black;\n  color: white;\n  text-align: center;\n  /* height: 75px; */\n}\n \n .container1 {\n  background: black;\n  color: white\n}\n \n .container {\n  /* background: black; */\n  color: white\n}\n \n .social:hover {\n  -webkit-transform: scale(1.1);\n  -moz-transform: scale(1.1);\n  -o-transform: scale(1.1);\n}\n \n .social {\n  -webkit-transform: scale(0.8);\n  /* Browser Variations: */\n\n  -moz-transform: scale(0.8);\n  -o-transform: scale(0.8);\n  -webkit-transition-duration: 0.5s;\n  -moz-transition-duration: 0.5s;\n  -o-transition-duration: 0.5s;\n}\n \n .fa {\n  padding: 20px;\n  font-size: 30px;\n  width: 30px;\n  text-align: center;\n  text-decoration: none;\n  border-radius: 50%;\n}\n \n .img-thumbnail {\n  background: black;\n  border-color: black\n}\n \n .intro-2 {\n  background: url(\"/assets/hero_image.png\")no-repeat center center;\n  background-size: cover;\n  height: 623px;\n}\n \n .home {\n  font-family: Roboto-Bold;\n  font-size: 16px;\n  line-height: 14px;\n  letter-spacing: 0;\n}\n \n .about {\n  font-family: Roboto-Regular;\n  font-size: 13px;\n  line-height: 15px;\n  letter-spacing: 0;\n}\n"

/***/ }),

/***/ "./src/app/privacy/privacy.component.html":
/*!************************************************!*\
  !*** ./src/app/privacy/privacy.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-bg-ar [head]=\"head\" [bg]=\"bg\" [nav_arabic]=\"nav_arabic\" ></app-nav-bg-ar>\n\n\n<div class=\"container-fluid\">\n    <br>\n  <div class=\"card col-md-12\" style=\"border-radius: 18px;\n   background: white;color:#212529;\">\n    <br>\n   \n    <p class=\"WHAT-IS-Aman-1\">Privacy Policy</p>\n\n   \n\n    <div class=\"Sharjah-Asset-Manage  text-justify\">\n      <div class=\"col-sm-12 text-justify\">\n\n        <div class=\"col-md-12\">\n          <a class=\"WHAT-IS-Aman-1 mt-2\">1.An overview of data protection</a>\n\n          <a class=\"WHAT-IS-Aman-1 mt-2\">General</a>\n\n          <br>\n\n          <p class=\"Sharjah-Asset-Manage text-justify mt-2\">The following gives a simple overview of what\n            happens to your personal information when you visit our\n            website. Personal information is any data with which you could be personally identified. Detailed\n            information on the subject of data protection can be found in our privacy policy found below.</p>\n        </div>\n\n\n        <div class=\"col-sm-12\">\n          <a class=\"WHAT-IS-Aman-1\">Data collection on our website</a>\n\n          <br>\n\n          <p class=\"Sharjah-Asset-Manage text-justify mt-2\">Who is responsible for the data collection on\n            this website?</p>\n          <p class=\"Sharjah-Asset-Manage text-justify mt-2\">The data collected on this website are processed\n            by the website operator. The operator&apos;s contact\n            details can be found in the website&apos;s required legal notice.</p>\n        </div>\n\n        <div class=\"col-sm-12\">\n          <a class=\"WHAT-IS-Aman-1\">How do we collect your data?</a>\n          <p class=\"Sharjah-Asset-Manage text-justify mt-2\">Some data are collected when you provide it to\n            us. This could, for example, be data you enter on a contact\n            form.</p>\n          <p class=\"Sharjah-Asset-Manage text-justify mt-2\"> Other data are collected automatically by our\n            IT systems when you visit the website. These data are\n            primarily technical data such as the browser and operating system you are using or when you accessed the\n            page. These data are collected automatically as soon as you enter our website.</p>\n        </div>\n\n        <div class=\"col-sm-12\">\n          <b class=\"WHAT-IS-Aman-1\"> What do we use your data for?</b>\n\n          <p class=\"Sharjah-Asset-Manage text-justify mt-2\">Part of the data is collected to ensure the\n            proper functioning of the website. Other data can be used to\n            analyze how visitors use the site.</p>\n        </div>\n\n        <div class=\"col-sm-12\">\n          <p class=\"Sharjah-Asset-Manage text-justify mt-2\">You always have the right to request information\n            about your stored data, its origin, its recipients, and\n            the purpose of its collection at no charge. You also have the right to request that it be corrected,\n            blocked, or deleted. You can contact us at any time using the address given in the legal notice if you have\n            further questions about the issue of privacy and data protection. You may also, of course, file a complaint\n            with the competent regulatory authorities.</p>\n        </div>\n\n        <div class=\"col-sm-12\">\n          <b class=\"WHAT-IS-Aman-1\">Analytics and third-party tools</b>\n\n          <p class=\"Sharjah-Asset-Manage text-justify mt-2\">When visiting our website, statistical analyses\n            may be made of your surfing behavior. This happens\n            primarily using cookies and analytics. The analysis of your surfing behavior is usually anonymous, i.e. we\n            will not be able to identify you from this data. You can object to this analysis or prevent it by not using\n            certain tools. Detailed information can be found in the following privacy policy.</p>\n          <p class=\"Sharjah-Asset-Manage text-justify mt-2\"> You can object to this analysis. We will inform\n            you below about how to exercise your options in this\n            regard.</p>\n        </div>\n\n\n        <div class=\"col-sm-12\">\n          <b class=\"WHAT-IS-Aman-1\"> 2. General information and mandatory\n            information</b>\n          <br>\n\n          <b class=\"Sharjah-Asset-Manage text-justify mt-2\">Data protection</b>\n\n          <p class=\"Sharjah-Asset-Manage text-justify mt-2\">The operators of this website take the\n            protection of your personal data very seriously. We treat your\n            personal data as confidential and in accordance with the statutory data protection regulations and this\n            privacy policy.</p>\n          <p class=\"Sharjah-Asset-Manage text-justify mt-2\"> If you use this website, various pieces of\n            personal data will be collected. Personal information is any\n            data with which you could be personally identified. This privacy policy explains what information we\n            collect and what we use it for. It also explains how and for what purpose this happens.</p>\n          <p class=\"Sharjah-Asset-Manage text-justify mt-2\">Please note that data transmitted via the\n            internet (e.g. via email communication) may be subject to\n            security breaches. Complete protection of your data from third-party access is not possible.</p>\n          <p class=\"Sharjah-Asset-Manage text-justify mt-2\"> Notice concerning the party responsible for\n            this website</p>\n          <p class=\"Sharjah-Asset-Manage text-justify mt-2\"> The party responsible for processing data on\n            this website is:</p>\n          <p class=\"Sharjah-Asset-Manage text-justify mt-2\">\n            Tower 400, 18th Floor,<br>\n            Mina Road, Sharjah, <br>\n            PO Box 4648 Sharjah - UAE, <br>\n            Phone: +971 6 506 6555,<br>\n            Fax: +971 6 572 2331,<br>\n            Email: helpdesk@saned.ae<br>\n            <a routerLink=\"login\">www.saned.ae</a>\n          </p>\n          <p class=\"Sharjah-Asset-Manage text-justify mt-2\">The responsible party is the natural or legal\n            person who alone or jointly with others decides on the\n            purposes and means of processing personal data (names, email addresses, etc.).</p>\n        </div>\n\n\n        <div class=\"col-sm-12\">\n          <b class=\"WHAT-IS-Aman-1\"> Revocation of your consent to the processing of\n            your data</b>\n\n          <p class=\"Sharjah-Asset-Manage text-justify mt-2\"> Many data processing operations are only\n            possible with your express consent. You may revoke your consent\n            at any time with future effect. An informal email making this request is sufficient. The data processed\n            before we receive your request may still be legally processed.</p>\n          <p class=\"Sharjah-Asset-Manage text-justify mt-2\"> Right to file complaints with regulatory\n            authorities</p>\n          <p class=\"Sharjah-Asset-Manage text-justify mt-2\"> If there has been a breach of data protection\n            legislation, the person affected may file a complaint with\n            the competent regulatory authorities. The competent regulatory authority for matters related to data\n            protection legislation is the data protection officer of the German state in which our company is\n            headquartered. A list of data protection officers and their contact details can be found at the following\n            link: https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html.</p>\n        </div>\n\n        <div class=\"col-sm-12\">\n          <b class=\"WHAT-IS-Aman-1\"> SSL or TLS encryption</b>\n          <p class=\"Sharjah-Asset-Manage text-justify mt-2\">This site uses SSL or TLS encryption for\n            security reasons and for the protection of the transmission of\n            confidential content, such as the inquiries you send to us as the site operator. You can recognize an\n            encrypted connection in your browser&apos;s address line when it changes from &quot;http://&quot; to\n            &quot;https://&quot; and the lock icon is displayed in your browser&apos;s address bar.</p>\n          <p class=\"Sharjah-Asset-Manage text-justify mt-2\">If SSL or TLS encryption is activated, the data\n            you transfer to us cannot be read by third parties.</p>\n        </div>\n\n        <div class=\"col-sm-12\">\n          <b class=\"WHAT-IS-Aman-1\">Information, blocking, deletion</b>\n\n          <p class=\"Sharjah-Asset-Manage text-justify mt-2\"> As permitted by law, you have the right to be\n            provided at any time with information free of charge about\n            any of your personal data that is stored as well as its origin, the recipient and the purpose for which it\n            has been processed. You also have the right to have this data corrected, blocked or deleted. You can\n            contact us at any time using the address given in our legal notice if you have further questions on the\n            topic of personal data.</p>\n        </div>\n\n        <div class=\"col-sm-12\">\n          <b class=\"WHAT-IS-Aman-1\"> 3. Data protection officer</b>\n\n          <b class=\"WHAT-IS-Aman-1\">Statutory data protection officer</b>\n\n          <p class=\"Sharjah-Asset-Manage text-justify mt-2\"> We have appointed a data protection officer for\n            our company.</p>\n          <p class=\"Sharjah-Asset-Manage text-justify mt-2\">\n            Tower 400, 18th Floor,<br>\n            Mina Road, Sharjah, <br>\n            PO Box 4648 Sharjah - UAE, <br>\n            Phone: +971 6 506 6555,<br>\n            Fax: +971 6 572 2331,<br>\n            Email: helpdesk@saned.ae<br>\n            <a routerLink=\"login\">www.saned.ae</a>\n          </p>\n        </div>\n        <div class=\"col-sm-12\">\n          <b class=\"WHAT-IS-Aman-1\">\n            4.Data collection on our website Cookies\n          </b>\n\n          <p class=\"Sharjah-Asset-Manage text-justify mt-2\">\n            Some of our web pages use cookies. Cookies do not harm your computer and do not contain any viruses.\n            Cookies help make our website more user-friendly, efficient, and secure. Cookies are small text files that\n            are stored on your computer and saved by your browser.\n          </p>\n          <p class=\"Sharjah-Asset-Manage text-justify mt-2\">\n            Most of the cookies we use are so-called &quot;session cookies.&quot; They are automatically deleted after\n            your visit. Other cookies remain in your device&apos;s memory until you delete them. These cookies make it\n            possible to recognize your browser when you next visit the site.\n          </p>\n          <p class=\"Sharjah-Asset-Manage text-justify mt-2\">\n            You can configure your browser to inform you about the use of cookies so that you can decide on a\n            case-by-case basis whether to accept or reject a cookie. Alternatively, your browser can be configured to\n            automatically accept cookies under certain conditions or to always reject them, or to automatically delete\n            cookies when closing your browser. Disabling cookies may limit the functionality of this website.\n          </p>\n          <p class=\"Sharjah-Asset-Manage text-justify mt-2\">\n            Cookies which are necessary to allow electronic communications or to provide certain functions you wish to\n            use (such as the shopping cart) are stored pursuant to Art. 6 paragraph 1, letter f of DSGVO. The website\n            operator has a legitimate interest in the storage of cookies to ensure an optimized service provided free\n            of technical errors. If other cookies (such as those used to analyze your surfing behavior) are also\n            stored, they will be treated separately in this privacy policy.\n          </p>\n        </div>\n\n\n\n        <div class=\"col-sm-12\">\n          <b class=\"WHAT-IS-Aman-1\"> Server log files</b>\n          <p class=\"Sharjah-Asset-Manage text-justify mt-2\">\n            The website provider automatically collects and stores information that your browser automatically\n            transmits to us in &quot;server log files&quot;. These are:</p>\n          <p class=\"Sharjah-Asset-Manage text-justify mt-2\">\n            Browser type and browser version<br>\n            Operating system used <br>\n            Referrer URL <br>\n            Host name of the accessing computer <br>\n            Time of the server request <br>\n            IP address <br>\n            These data will not be combined with data from other sources.\n          </p>\n          <p class=\"Sharjah-Asset-Manage text-justify mt-2\">The basis for data processing is Art. 6 (1) (f)\n            DSGVO, which allows the processing of data to fulfill a\n            contract or for measures preliminary to a contract.</p>\n        </div>\n        <div class=\"col-sm-12\">\n          <b class=\"WHAT-IS-Aman-1\">Contact form</b>\n\n          <p class=\"Sharjah-Asset-Manage text-justify mt-2\"> Should you send us questions via the contact\n            form, we will collect the data entered on the form,\n            including the contact details you provide, to answer your question and any follow-up questions. We do not\n            share this information without your permission.</p>\n          <p class=\"Sharjah-Asset-Manage text-justify mt-2\"> We will, therefore, process any data you enter\n            onto the contact form only with your consent per Art. 6\n            (1)(a) DSGVO. You may revoke your consent at any time. An informal email making this request is sufficient.\n            The data processed before we receive your request may still be legally processed.</p>\n          <p class=\"Sharjah-Asset-Manage text-justify mt-2\">We will retain the data you provide on the\n            contact form until you request its deletion, revoke your\n            consent for its storage, or the purpose for its storage no longer pertains (e.g. after fulfilling your\n            request). Any mandatory statutory provisions, especially those regarding mandatory data retention periods,\n            remain unaffected by this provision.</p>\n        </div>\n\n        <div class=\"col-sm-12\">\n          <b class=\"WHAT-IS-Aman-1\"> 5. Social media</b>\n\n          <b class=\"WHAT-IS-Aman-1\">Facebook plugins (Like &amp; Share buttons)</b>\n\n          <p class=\"Sharjah-Asset-Manage text-justify mt-2\">\n            Our website includes plugins for the social network Facebook, Facebook Inc., 1 Hacker Way, Menlo Park,\n            California 94025, USA. The Facebook plugins can be recognized by the Facebook logo or the Like button on\n            our site. For an overview of Facebook plugins, see developers.facebook.com/docs/plugins/.\n          </p>\n          <p class=\"Sharjah-Asset-Manage text-justify mt-2\">\n            When you visit our site, a direct connection between your browser and the Facebook server is established\n            via the plugin. This enables Facebook to receive information that you have visited our site from your IP\n            address. If you click on the Facebook &quot;Like button&quot; while you are logged into your Facebook\n            account, you can link the content of our site to your Facebook profile. This allows Facebook to associate\n            visits to our site with your user account. Please note that, as the operator of this site, we have no\n            knowledge of the content of the data transmitted to Facebook or of how Facebook uses these data. For more\n            information, please see Facebook&apos;s privacy policy at https://www.facebook.com/about/privacy/update.\n          </p>\n          <p class=\"Sharjah-Asset-Manage text-justify mt-2\">\n            If you do not want Facebook to associate your visit to our site with your Facebook account, please log out\n            of your Facebook account.\n          </p>\n        </div>\n\n\n        <div class=\"col-sm-12\">\n          <b class=\"WHAT-IS-Aman-1\">Twitter plugin</b>\n\n          <p class=\"Sharjah-Asset-Manage text-justify mt-2\">\n            Functions of the Twitter service have been integrated into our website and app. These features are offered\n            by Twitter Inc., 1355 Market Street, Suite 900, San Francisco, CA 94103, USA. When you use Twitter and the\n            “Retweet” function, the websites you visit are connected to your Twitter account and made known to other\n            users. In doing so, data will also be transferred to Twitter. We would like to point out that, as the\n            provider of these pages, we have no knowledge of the content of the data transmitted or how it will be used\n            by Twitter. For more information on Twitter&apos;s privacy policy, please go to\n            https://twitter.com/privacy.\n          </p>\n          <p class=\"Sharjah-Asset-Manage text-justify mt-2\">\n            Your privacy preferences with Twitter can be modified in your account settings at\n            https://twitter.com/account/setting.\n          </p>\n        </div>\n\n        <div class=\"col-sm-12\">\n          <b class=\"WHAT-IS-Aman-1\">\n            Google+ plugin\n          </b>\n\n          <p class=\"Sharjah-Asset-Manage text-justify mt-2\">\n            Our pages use Google+ functions. It is operated by Google Inc., 1600 Amphitheatre Parkway, Mountain View,\n            CA 94043, USA.\n          </p>\n          <p class=\"Sharjah-Asset-Manage text-justify mt-2\">\n            Collection and disclosure of information: Using the Google +1 button allows you to publish information\n            worldwide. By means of the Google+ button, you and other users can receive custom content from Google and\n            our partners. Google stores both the fact that you have +1&apos;d a piece of content and information about\n            the page you were viewing when you clicked +1. Your +1 can be displayed together with your profile name and\n            photo in Google services, for example in search results or in your Google profile, or in other places on\n            websites and advertisements on the Internet.\n          </p>\n          <p class=\"Sharjah-Asset-Manage text-justify mt-2\">\n            Google records information about your +1 activities to improve Google services for you and others. To use\n            the Google + button, you need a globally visible, public Google profile that must contain at least the name\n            chosen for the profile. This name is used by all Google services. In some cases, this name may also replace\n            a different name that you have used to share content via your Google account. The identity of your Google\n            profile can be shown to users who know your email address or other information that can identify you.\n          </p>\n          <p class=\"Sharjah-Asset-Manage text-justify mt-2\">\n            Use of collected data: In addition to the uses mentioned above, the information you provide is used in\n            accordance with the applicable Google data protection policies. Google may publish summary statistics about\n            users&apos; +1 activity or share it with users and partners, such as publishers, advertisers, or affiliate\n            websites.\n          </p>\n        </div>\n\n\n        <div class=\"col-sm-12\">\n          <b class=\"WHAT-IS-Aman-1\">\n            LinkedIn plugin\n          </b>\n\n          <p class=\"Sharjah-Asset-Manage text-justify mt-2\">\n            Our site uses functions from the LinkedIn network. The service is provided by LinkedIn Corporation, 2029\n            Stierlin Court, Mountain View, CA 94043, USA.\n          </p>\n          <p class=\"Sharjah-Asset-Manage text-justify mt-2\">\n            Each time one of our pages containing LinkedIn features is accessed, your browser establishes a direct\n            connection to the LinkedIn servers. LinkedIn is informed that you have visited our web pages from your IP\n            address. If you use the LinkedIn “Recommend” button and are logged into your LinkedIn account, it is\n            possible for LinkedIn to associate your visit to our website to your user account. We would like to point\n            out that, as the provider of these pages, we have no knowledge of the content of the data transmitted or\n            how it will be used by LinkedIn.\n          </p>\n          <p class=\"Sharjah-Asset-Manage text-justify mt-2\">\n            More information can be found in the LinkedIn privacy policy at\n            https://www.linkedin.com/legal/privacy-policy.\n          </p>\n        </div>\n\n        <div class=\"col-sm-12\">\n          <b class=\"WHAT-IS-Aman-1\">\n            XING Plugin\n          </b>\n\n          <p class=\"Sharjah-Asset-Manage text-justify mt-2\">Our website uses features provided by the XING\n            network. The provider is XING AG, Dammtorstraße 29-32,\n            20354 Hamburg, Germany.</p>\n          <p class=\"Sharjah-Asset-Manage text-justify mt-2\">\n            Each time one of our pages containing XING features is accessed, your browser establishes a direct\n            connection to the XING servers. To the best of our knowledge, no personal data is stored in the process. In\n            particular, no IP addresses are stored nor is usage behavior evaluated.\n          </p>\n          <p class=\"Sharjah-Asset-Manage text-justify mt-2\">\n            For more information about data protection and the XING Share button, please see the XING privacy policy at\n            https://www.xing.com/app/share?op=data_protection.\n          </p>\n        </div>\n\n        <div class=\"col-sm-12\">\n          <b class=\"WHAT-IS-Aman-1\">\n            6. Analytics and advertising\n          </b>\n\n          <p class=\"Sharjah-Asset-Manage text-justify mt-2\">\n            Matomo (formerly Piwik)\n          </p>\n\n\n          <p class=\"Sharjah-Asset-Manage text-justify mt-2\">\n            This website uses the open source web analytics service Matomo. Matomo uses so-called &quot;cookies&quot;.\n            These are text files that are stored on your computer and that allow an analysis of the use of the website\n            by you. For this purpose, the information generated by the cookie about the use of this website is stored\n            on our server. The IP address is anonymized before it is stored.\n          </p>\n          <p class=\"Sharjah-Asset-Manage text-justify mt-2\">\n            Matomo cookies remain on your device until you delete them.\n          </p>\n          <p class=\"Sharjah-Asset-Manage text-justify mt-2\">\n            The storage of Matomo cookies is based on Art. 6 (1) (f) DSGVO. The website operator has a legitimate\n            interest in analyzing user behavior in order to optimize both its website and its advertising.\n          </p>\n          <p class=\"Sharjah-Asset-Manage text-justify mt-2\">\n            The information generated by the cookies about your use of this website will not be disclosed to third\n            parties. You can prevent these cookies being stored by selecting the appropriate settings in your browser.\n            However, we wish to point out that doing so may mean you will not be able to enjoy the full functionality\n            of this website.\n          </p>\n          <p class=\"Sharjah-Asset-Manage text-justify mt-2\">\n            If you do not agree with the storage and use of your data, you can disable this feature here. In this case,\n            an opt-out cookie will be stored in your browser to prevent Matomo from storing your usage data. If you\n            delete your cookies, this will mean that the opt-out cookie will also be deleted. You will then need to\n            reactivate it when you return to our site if you wish your activity not to be tracked.\n          </p>\n        </div>\n        <br>\n      </div>\n    </div>\n  </div>\n  <br>\n\n\n</div>\n\n\n<app-loginv2></app-loginv2>\n\n<router-outlet></router-outlet>\n\n<!-- </div> -->"

/***/ }),

/***/ "./src/app/privacy/privacy.component.ts":
/*!**********************************************!*\
  !*** ./src/app/privacy/privacy.component.ts ***!
  \**********************************************/
/*! exports provided: PrivacyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyComponent", function() { return PrivacyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PrivacyComponent = /** @class */ (function () {
    function PrivacyComponent() {
        this.navbarOpen = false;
        this.head = "Privacy Policy";
        this.bg = "bg_img";
        this.nav_arabic = "/privacy-arabic";
        this.model = {};
        this.Lang = {};
    }
    PrivacyComponent.prototype.toggleNavbar = function () {
        this.navbarOpen = !this.navbarOpen;
    };
    PrivacyComponent.prototype.ngOnInit = function () {
    };
    PrivacyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-privacy',
            template: __webpack_require__(/*! ./privacy.component.html */ "./src/app/privacy/privacy.component.html"),
            styles: [__webpack_require__(/*! ./privacy.component.css */ "./src/app/privacy/privacy.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PrivacyComponent);
    return PrivacyComponent;
}());



/***/ }),

/***/ "./src/app/recaptcha.directive.ts":
/*!****************************************!*\
  !*** ./src/app/recaptcha.directive.ts ***!
  \****************************************/
/*! exports provided: RecaptchaDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecaptchaDirective", function() { return RecaptchaDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RecaptchaDirective = /** @class */ (function () {
    function RecaptchaDirective() {
    }
    RecaptchaDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appRecaptcha]'
        }),
        __metadata("design:paramtypes", [])
    ], RecaptchaDirective);
    return RecaptchaDirective;
}());



/***/ }),

/***/ "./src/app/register-form-arabic/register-form-arabic.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/register-form-arabic/register-form-arabic.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".intro-2 {\n    background: url(\"/assets/hero_image.png\")no-repeat center center;\n    background-size: cover;\n    height: 330px;\n \n }\n \n\n/* Full-width input fields */\n \n\ninput[type=text], input[type=password] {\n  width: 100%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  box-sizing: border-box;\n}\n \n\n/* Set a style for all buttons */\n \n\nbutton {\n  /* background-color: #ff0000; */\n  color: white;\n  padding: 8px 20px;\n  margin: 8px 0;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n}\n \n\nbutton:hover {\n  opacity: 0.8;\n}\n \n\n/* Extra styles for the cancel button */\n \n\n.cancelbtn {\n  width: auto;\n  padding: 10px 18px;\n  background-color: #f44336;\n}\n \n\n/* Center the image and position the close button */\n \n\n.imgcontainer {\n  text-align: center;\n  margin: 24px 0 12px 0;\n  position: relative;\n}\n \n\nimg.avatar {\n  width: 40%;\n  border-radius: 50%;\n}\n \n\n.container {\n  padding: 16px;\n}\n \n\nspan.psw {\n  float: right;\n  padding-top: 16px;\n}\n \n\n/* The Modal (background) */\n \n\n.modal {\n  display: none; /* Hidden by default */\n  /* position: fixed; Stay in place */\n  z-index: 1; /* Sit on top */\n  left: 0;\n  top: 0;\n  vertical-align: middle;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgb(0,0,0); /* Fallback color */\n  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n  padding-top: 60px;\n  \n}\n \n\n/* Modal Content/Box */\n \n\n.modal-content {\n  background-color: #fefefe;\n  margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */\n  border: 1px solid #888;\n  width: 80%; /* Could be more or less, depending on screen size */\n}\n \n\n/* The Close Button (x) */\n \n\n.close {\n  position: absolute;\n  right: 25px;\n  top: 0;\n  color: #000;\n  font-size: 35px;\n  font-weight: bold;\n \n}\n \n\n.close:hover,\n.close:focus {\n  color: red;\n  cursor: pointer;\n}\n \n\n/* Add Zoom Animation */\n \n\n.animate {\n  -webkit-animation: animatezoom 0.6s;\n  animation: animatezoom 0.6s\n}\n \n\n@-webkit-keyframes animatezoom {\n  from {-webkit-transform: scale(0)} \n  to {-webkit-transform: scale(1)}\n}\n \n\n@keyframes animatezoom {\n  from {-webkit-transform: scale(0);transform: scale(0)} \n  to {-webkit-transform: scale(1);transform: scale(1)}\n}\n \n\n/* Change styles for span and cancel button on extra small screens */\n \n\n@media screen and (max-width: 300px) {\n  span.psw {\n     display: block;\n     float: none;\n  }\n  .cancelbtn {\n     width: 100%;\n  }\n}\n \n\n/* =====align start-=========== */\n \n\n/* ===========navbar start========= */\n \n\n.Contact-Us {\n    width: 90px;\n    height: 24px;\n    font-family: Roboto;\n    font-size: 18px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #ffffff;\n  }\n \n\n.Suppliers {\n    width: 77px;\n    height: 24px;\n    font-family: Roboto;\n    font-size: 18px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #ffffff;\n  }\n \n\n.Services {\n    width: 70px;\n    height: 24px;\n    font-family: Roboto;\n    font-size: 18px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #ffffff;\n  }\n \n\n.About-Us-Copy {\n    width: 75px;\n    height: 24px;\n    font-family: Roboto;\n    font-size: 18px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #ffffff;\n  }\n \n\n.Home-Copy {\n    width: 49px;\n    height: 24px;\n    font-family: Roboto;\n    font-size: 18px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #ffffff;\n  }\n \n\n/* ======navbar end===== */\n \n\n/* =============allign end============= */\n\n"

/***/ }),

/***/ "./src/app/register-form-arabic/register-form-arabic.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/register-form-arabic/register-form-arabic.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js\"></script>\n<script src=\"//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n<script src='https://www.google.com/recaptcha/api.js'></script>\n\n<head>\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <style>\n    @import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');\n    body {font-family: Arial, Helvetica, sans-serif;}\n    nav{\n        width: 100%;\n        height: 50px;\n        background:rgba(0,0,0,.8);\n        border-top: 1px solid rgba(255,255);\n        border-bottom: 1px solid rgba(255,255);\n        position: sticky;\n        top:0px;\n        z-index: 99;\n    }\n    body{\n        margin: 0;\n        padding: 0;\n        font-family: sans-serif;\n        /* background: #000; */\n    }\n    header{\n        padding: 10px 100px;\n        box-sizing: border-box;\n    }\n    section{\n        width: 100%;\n        height: 100vh;\n    }\n    .dropdown {\n      float: left;\n      overflow: hidden;\n    }\n    \n    .dropdown .dropbtn {\n      font-size: 16px;  \n      border: none;\n      outline: none;\n      color: white;\n      padding: 14px 16px;\n      background-color: inherit;\n      font-family: inherit;\n      margin: 0;\n    }\n    \n    .navbar a:hover, .dropdown:hover .dropbtn {\n      background-color: red;\n    }\n    \n    .dropdown-content {\n      display: block;\n      position: absolute;\n      background-color: red;\n      min-width: 160px;\n      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n      z-index: 1;\n    }\n    \n    .dropdown-content a {\n      float: none;\n      color: black;\n      padding: 12px 16px;\n      text-decoration: none;\n      display: block;\n      text-align: left;\n    }\n    \n    .dropdown-content a:hover {\n      background-color: #ddd;\n    }\n    ul {\n      padding: 0;\n      margin: 0;\n      list-style: none;\n    }\n    ul li a {\n      text-decoration: none;\n      color: #e74c3c;\n      font-family: Tahoma, Arial;\n    }\n    .navigation {\n      background-color: #35353500;\n      width: 75%;\n      margin: 20px auto;\n      min-height: 50px;\n    }\n    .navigation > li {\n      float: left;\n      padding: 0 20px;\n    }\n    .navigation > li > a {\n      line-height: 50px;\n      color: #FFF;\n    }\n    .navigation .menu {\n      position: relative\n    }\n    .navigation .menu .submenu {\n      position: absolute;\n      /* width: 200px; */\n      -webkit-box-shadow: 0px 1px 1px #CCC;\n      box-shadow: 0px 1px 1px #CCC;\n      display: none;\n      -webkit-transition: all .5s ease-in-out;\n      -moz-transition: all .5s ease-in-out;\n      transition: all .5s ease-in-out;\n    }\n    .navigation .menu:hover .submenu {\n      display: block\n    }\n    .navigation .menu .submenu:before {\n      content: \"\";\n      position: absolute;\n      display: block;\n      border-width: 0 6px 6px 6px;\n      border-style: solid;\n      border-color: #FFF transparent;\n      top: -6px;\n      left: 5px\n    }\n    .navigation .menu .submenu li {\n      padding: 5px 10px;\n      -webkit-transition: all .5s ease-in-out;\n      -moz-transition: all .5s ease-in-out;\n      transition: all .5s ease-in-out;\n    }\n    .navigation .menu .submenu li:hover {\n      background-color: #e74c3c;\n    }\n    .navigation .menu .submenu li:hover a {\n      color: #FFF;\n      /* padding: 0 11px; */\n    }\n    \n    \n    .dropdown:hover .dropdown-content {\n      display: block;\n    }\n    section.sec1{\n        background: url(natures-temples.png);\n        background-size: cover;\n    }\n    section.banner{\n        background: url(Group.png);\n        background-size: cover;\n        margin-left: 15px;\n    }\n    section.sec2{\n       padding: 100px;\n       box-sizing: border-box;\n    }\n    nav{\n        width: 100%;\n        height: 50px;\n         background:rgba(0,0,0,.8); \n        border-top: 1px solid rgba(255,255);\n        border-bottom: 1px solid rgba(255,255);\n        position: sticky;\n        top:0px;\n        z-index: 99\n    }\n    nav ul{\n        display: flex;\n        margin: 0px;\n        padding: 0px;\n        float: right;\n    }\n    nav ul li{\n        list-style: none;\n    }\n    \n    \n    nav ul{\n        display: flex;\n       \n        padding: 0px;\n        /* float: ; */\n    }\n    \n    nav ul li a{\n        display:block;\n        color: #fff;\n        padding: 0 20px;\n        text-decoration: none;\n        text-transform: uppercase;\n        font-weight: bold;\n        line-height: 50px;\n    \n    }\n    /* .switch{\n    margin-top: 0;\n    margin-bottom: -5rem;\n    margin-left: 83%;\n    color: red;\n    overflow: hidden;\n}\n.switch1{\n    margin-top: 0;\n    margin-bottom: -2rem;\n    margin-left: 0%;\n    color: red;\n} */\n /* ==============footer style start ========= */\n .footer {\n    /* position: fixed; */\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    background-color: black;\n    color: white;\n    text-align: center;\n    /* height: 75px; */\n }\n .container1{\n   background: black;\n   color: white\n }\n .container{\n   /* background: black; */\n   color: white\n }\n .social:hover {\n  -webkit-transform: scale(1.1);\n  -moz-transform: scale(1.1);\n  -o-transform: scale(1.1);\n}\n.social {\n  -webkit-transform: scale(0.8);\n  /* Browser Variations: */\n  \n  -moz-transform: scale(0.8);\n  -o-transform: scale(0.8);\n  -webkit-transition-duration: 0.5s;\n  -moz-transition-duration: 0.5s;\n  -o-transition-duration: 0.5s;\n}\n.fa {\n  padding: 20px;\n  font-size: 30px;\n  width: 30px;\n  text-align: center;\n  text-decoration: none;\n  border-radius: 50%;\n}\n.img-thumbnail{\n  background: black;\n  border-color: black\n}\n\n .home{\n    font-family: Roboto-Bold;\n    font-size: 16px;\n    line-height: 14px;\n  letter-spacing: 0;\n  }\n  .about{\n    font-family: Roboto-Regular;\n    font-size: 13px;\n    line-height: 15px;\n  letter-spacing: 0;\n  }\n\n    /* ===========================footer style end================ */\n    </style>\n\n</head>\n<!-- <div> -->\n\n<!-- <div class = \"switch\" id=\"en\" >\n      <label><input #arabic type=\"radio\" id= \"ar1\" name=\"size\" (change)=\"0\" >عربى</label>\n      <label><input #english type=\"radio\" id= \"ar1\" name=\"size\" (change)=\"0\" checked>English</label>\n  </div> -->\n\n<div class=\"\">\n\n\n\n\n  <!-- ====Arabic -->\n\n  <div>\n\n\n    <!------ Include the above in your HEAD tag ---------->\n    <div dir=\"rtl\" class=\"view intro-2 hm-gradient\" style=\"background: url(/assets/hero_image1.png);height: 635px;\">\n      <!-- <img href=\"#\" data-toggle=\"modal\" data-target=\"#myModal\" src=\"assests/lawyer-today-1.png\" srcset=\"assests/lawyer-today-1@2x.png 2x,\n      assests/lawyer-today-1@3x.png 3x\"\n  class=\"NEM mt-3\"> -->\n\n      <div dir=\"rtl\" class=\"\">\n\n        <div class=\"col-md-1\">\n\n          <!-- <img src=\"./assets/logv2-2.png\" class=\"img-responsive\"> -->\n          <img src=\"./assets/group.png\" srcset=\"./assets/group@2x.png 2x,\n                                                   ./assets/group@3x.png 3x\"\n            class=\"img-responsive\">\n\n\n\n        </div>\n        <div style=\"margin-top: -150px\">\n          <br><br>\n          <font style=\"color:#F90E35\">English</font>\n          <input name=\"Lang\" style=\"color:white;\" type=\"radio\" [value]=\"true\" routerLink=\"/register-form\" />\n          &nbsp; &nbsp;\n          <font color=\"white\"> عربى\n          </font>\n          <input name=\"Lang\" type=\"radio\" [value]=\"false\" checked=\"checked\" />\n          &nbsp; &nbsp;\n        </div>\n      </div>\n      <!-- <div class=\"full-bg-img\"> -->\n      <!-- <div class=\"container flex-center\"> -->\n      <!-- <div class=\"row flex-center pt-5 mt-3\"> -->\n      <!-- <div class=\"col-md-6 text-center\"> -->\n      <br><br><br><br><br><br><br><br>\n      <div class=\"text-center\">\n        <h1>\n          <font color=\"white\" style=\"font-size: 50px;\">تسجيل حساب جديد</font>\n        </h1>\n\n      </div>\n      <!-- </div> -->\n\n\n      <!-- </div> -->\n      <!-- </div> -->\n      <!-- </div> -->\n    </div>\n\n    <nav style=\"    margin-top: -201px;background: rgba(0, 0, 0, 0.20); \">\n      <ul class=\"navigation\" style=\"margin-right: 200px;\" dir=\"rtl\">\n        <li><a routerLink=\"/login-arbic\">الصفحة الرئيسية</a></li>\n        <li><a routerLink=\"/aboutus-arabic\">معلومات عنا</a></li>\n        <li class=\"menu\">\n          <a>خدمات</a>\n          <ul class=\"submenu\">\n            <li style=\"background:  #252323;;\"><a routerLink=\"/amanservices-arabic\">تأمين </a></li>\n            <li style=\"background:  #252323;;\"><a routerLink=\"/salamaservices-arabic\">سلامة </a></li>\n            <!-- <li style=\"background: red;\"><a href=\"#\">Link 3</a></li>\n                <li style=\"background: red;\"><a href=\"#\">Link 4</a></li> -->\n          </ul>\n        </li>\n        <li><a routerLink=\"supplier-register-arabic\">الموردين</a></li>\n        <li><a routerLink=\"/contactus-arabic\">اتصل بنا</a></li>\n        <!-- <li><a class=\"row\" routerLink=\"/sitemap-arabic\">خريطة الموقع</a></li> -->\n        <li>\n          <font style=\"color:white\"><i class=\"fa fa-search\" style=\"margin-top: -9px;\n              margin-right: -46px;\"></i></font>\n        </li>\n      </ul>\n    </nav>\n    <br><br><br><br><br><br><br><br><br><br><br>\n    <div id=\"id01\" class=\"modal\">\n\n      <form class=\"modal-content animate col-md-4\" action=\"/action_page.php\">\n        <div class=\"imgcontainer\">\n          <span onclick=\"document.getElementById('id01').style.display='none'\" class=\"close\" title=\"close\">&times;</span>\n          <!-- <img src=\"/assets/otp.png\" alt=\"\" class=\"avatar\"> -->\n          <h4>أدخل مرة واحدة <br>كلمه السر</h4>\n        </div>\n\n        <div class=\"container\">\n          <p for=\"uname\" style=\"font-size: 18px;text-align:justify\" class=\"text-center\">تم إرسال كلمة السر لمرة واحدة\n            إلى عنوان بريدك الإلكتروني ورقم هاتفك المحمول</p>\n          <!-- <input type=\"password\" class=\"w3-input\" placeholder=\"Enter otp\" name=\"uname\" required> -->\n          <!-- <input type=\"password\" class=\"col-md-6 \" placeholder=\"\" maxlength=\"4\" style=\"margin-left: 92px;border:white\" /> -->\n          <input type=\"text\" class=\"form-control col-md-4 inline\" id=\"otp\" required [(ngModel)]=\"model.otp\" name=\"name\"\n            #name=\"ngModel\">\n\n          <!-- <button type=\"submit\" style=\"background-color: #ff0000;width: 94px;padding: 8px 10px;\" onclick=\"document.getElementById('id03').style.display='block'\" class=\"btn Rectangle-5-Copy inline\" (click)=\"sendotp(model)\">Send OTP</button>        -->\n\n          <div [hidden]=\"name.valid || name.pristine\" class=\"alert\" style=\"color: #f54b5e;\">\n            كلمة المرور مرة واحدة مطلوبة\n          </div>\n\n\n          <button style=\"background-color: #ff0000;\" (click)=\"emailotpverification(model)\" type=\"submit\">خضع</button>\n\n        </div>\n\n\n      </form>\n    </div>\n    <div dir=\"rtl\" class=\"container col-md-12\">\n\n\n      <div class=\"card col-md-12\" style=\"border-radius: 18px;\n      background: white;color:#494949;margin-top: -201px;\">\n        <br>\n        <div class=\"row mr-5\">\n          <div class=\"col-md-12 Who-We-Are-Aman-is-a\">\n            <!-- <h4><b>Who We Are</b></h4> -->\n            <h3 class=\"col-sm-12 Welcome-to-Aman-port\"><b>مرحبًا بك في بوابة الخدمة</b></h3>\n            <br>\n            <br>\n            <div class=\"col-md-10 mr-4\">\n\n              <div [hidden]=\"submitted\">\n                <form name=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" novalidate>\n                  <div class=\"row col-md-12 mr-5\">\n                    <div class=\"form-group col-md-6\" style=\"text-align: left\">\n                      <label class=\"Name1\" for=\"name\" style=\"text-align: right\">اسم<span class=\"req\" style=\"color: #f54b5e;\">*\n                        </span></label>\n                      <input type=\"text\" class=\"form-control col-md-8\" name=\"name\" [(ngModel)]=\"model.name\" #name=\"ngModel\"\n                        [ngClass]=\"{ 'is-invalid': f.submitted && name.invalid }\" required style=\"margin-left: 143px;\" />\n                      <!-- <div [hidden]=\"name.valid || name.pristine\"\n                   class=\"alert\" style=\"color: #f54b5e;\">\n                Name is required\n              </div> -->\n                      <div *ngIf=\"f.submitted && name.invalid\" class=\"invalid-feedback\">\n                        <div *ngIf=\"name.errors.required\" style=\"text-align: right\">مطلوب اسم</div>\n                      </div>\n\n\n                    </div>\n\n                    <div class=\"form-group col-md-6\">\n                      <label class=\"Name1\" for=\"name\" style=\"text-align: right\">شركة</label>\n                      <input type=\"text\" class=\"form-control col-md-8\" id=\"company\" required [(ngModel)]=\"model.company\"\n                        name=\"company\" #company=\"ngModel\" style=\"margin-left: 143px;\">\n\n                    </div>\n\n                    <div class=\"form-group col-md-6\">\n                      <label class=\"Name1\" for=\"name\" style=\"text-align: right\">جنسية</label>\n                      <input type=\"text\" class=\"form-control col-md-8\" id=\"nationality\" required [(ngModel)]=\"model.nationality\"\n                        name=\"nationality\" #nationality=\"ngModel\" style=\"margin-left: 143px;\">\n\n                    </div>\n\n                    <div class=\"form-group col-md-6\">\n                      <label class=\"Name1\" for=\"phonenumber\" style=\"text-align: right\">رقم الهاتف</label>\n                      <input type=\"number\" class=\"form-control col-md-8\" id=\"phonenumber\" required [(ngModel)]=\"model.phonenumber\"\n                        name=\"phonenumber\" #phonenumber=\"ngModel\" style=\"margin-left: 143px;\">\n\n                    </div>\n\n                    <div class=\"form-group col-md-6\">\n                      <label class=\"Name1\" for=\"address\" style=\"text-align: right\">عنوان</label>\n                      <input type=\"text\" class=\"form-control col-md-8\" id=\"address\" required [(ngModel)]=\"model.address\"\n                        name=\"address\" #address=\"ngModel\" style=\"margin-left: 143px;\">\n\n                    </div>\n\n                    <div class=\"form-group col-md-6\">\n                      <label class=\"Name1\" for=\"pobox\" style=\"text-align: right\">صندوق بريد</label>\n                      <input type=\"text\" class=\"form-control col-md-8\" id=\"pobox\" required [(ngModel)]=\"model.pobox\"\n                        name=\"pobox\" #pobox=\"ngModel\" style=\"margin-left: 143px;\">\n\n                    </div>\n\n                    <div class=\"form-group col-md-6\">\n                      <label class=\"Name1\" for=\"mobile\" dir=\"rtl\" style=\"text-align: right\">التليفون المحمول<span class=\"req\"\n                          style=\"color: #f54b5e;\">*\n                        </span></label>\n                      <!-- <input type=\"text\" class=\"form-control col-md-8\" id=\"mobile\"\n                                    required\n                                    [(ngModel)]=\"model.mobile\" name=\"mobile\"\n                                    #mobile=\"ngModel\">\n                             <div [hidden]=\"mobile.valid || mobile.pristine\"\n                                  class=\"alert\" style=\"color: #f54b5e;\" dir=\"rtl\">\n                                  رقم الجوال مطلوب\n                             </div> -->\n                      <input type=\"number\" class=\"form-control col-md-8\" name=\"mobile\" [(ngModel)]=\"model.mobile\"\n                        #mobile=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && mobile.invalid }\" required style=\"margin-left: 143px;\" />\n\n                      <div *ngIf=\"f.submitted && mobile.invalid\" class=\"invalid-feedback\">\n                        <div *ngIf=\"mobile.errors.required\" style=\"text-align: right\" style=\"text-align: right\">الرجاء\n                          إدخال رقم الهاتف النقال</div>\n                      </div>\n                    </div>\n\n                    <div class=\"form-group col-md-6\">\n                      <label class=\"Name1\" for=\"email\" style=\"text-align: right\" style=\"text-align: right\">البريد\n                        الإلكتروني<span class=\"req\" style=\"color: #f54b5e;\">*\n                        </span></label>\n                      <!-- <input type=\"text\" class=\"form-control col-md-8\" id=\"email\"\n                                      required\n                                      [(ngModel)]=\"model.email\" name=\"email\"\n                                      #email=\"ngModel\">\n                               <div [hidden]=\"email.valid || email.pristine\"\n                                    class=\"alert\" style=\"color: #f54b5e;\">\n                                    البريد الالكتروني مطلوب\n                               </div> -->\n\n                      <input type=\"text\" class=\"form-control col-md-8\" name=\"email\" [(ngModel)]=\"model.email\" #email=\"ngModel\"\n                        [ngClass]=\"{ 'is-invalid': f.submitted && email.invalid }\" required style=\"margin-left: 143px;\" />\n                      <div *ngIf=\"f.submitted && email.invalid\" class=\"invalid-feedback\">\n                        <div *ngIf=\"email.errors.required\" style=\"text-align: right\">يرجى إدخال معرف البريد الإلكتروني</div>\n                      </div>\n                    </div>\n                    <div class=\"form-group col-md-6\">\n                      <label class=\"Name1\" for=\"password\" style=\"text-align: right\">كلمه السر<span class=\"req\" style=\"color: #f54b5e;\">*\n                        </span></label>\n                      <!-- <input type=\"password\" class=\"form-control col-md-8\" id=\"password\"\n                                      required\n                                      [(ngModel)]=\"model.password\" name=\"password\"\n                                      #password=\"ngModel\">\n                               <div [hidden]=\"password.valid || password.pristine\"\n                                    class=\"alert\" style=\"color: #f54b5e;\">\n                                    كلمة المرور مطلوبة\n                               </div> -->\n                      <input type=\"text\" class=\"form-control col-md-8\" name=\"password\" [(ngModel)]=\"model.password\"\n                        #password=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && password.invalid }\" required\n                        style=\"margin-left: 143px;\" />\n                      <div *ngIf=\"f.submitted && password.invalid\" class=\"invalid-feedback\">\n                        <div *ngIf=\"password.errors.required\" style=\"text-align: right\">يرجى إدخال كلمة مرور</div>\n                      </div>\n\n\n\n\n                    </div>\n\n                    <div class=\"form-group col-md-6\">\n                      <label class=\"Name1\" for=\"confirmpassword\" style=\"text-align: right\">تأكيد كلمة المرور<span class=\"req\"\n                          style=\"color: #f54b5e;\">*\n                        </span></label>\n                      <!-- <input type=\"password\" class=\"form-control col-md-8\" id=\"confirmpassword\" passvalidator=\"password\"\n                                        required\n                                        [(ngModel)]=\"model.confirmpassword\" name=\"confirmpassword\" \n                                        #confirmpassword=\"ngModel\" pattern=\"(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}\">\n                                 <div [hidden]=\"confirmpassword.valid || confirmpassword.pristine\"\n                                      class=\"alert\" style=\"color: #f54b5e;\">\n                                     \n                                      كلمة المرور غير متطابقة\n                                 </div> -->\n                      <input type=\"text\" class=\"form-control col-md-8\" name=\"confirmpassword\" [(ngModel)]=\"model.confirmpassword\"\n                        #confirmpassword=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && confirmpassword.invalid }\"\n                        required style=\"margin-left: 143px;\" />\n                      <div *ngIf=\"f.submitted && confirmpassword.invalid\" class=\"invalid-feedback\" style=\"text-align: right\">\n                        <div *ngIf=\"confirmpassword.errors.required\" style=\"text-align: right\">يرجى إدخال كلمة المرور\n                          المؤكدة</div>\n                      </div>\n\n\n\n                      <div [hidden]=\"confirmpassword.touched && confirmpassword.errors?.notequal\" class=\"alert\" style=\"color: #f54b5e;\"\n                        style=\"text-align: right\">\n\n                        <!-- s -->\n                      </div>\n                    </div>\n\n                    <div class=\"form-group col-md-6\" style=\"text-align: right\">\n                      <label class=\"Name1\">ابق على اتصال</label>\n\n                      <div style=\"font-family:Roboto-Regular;font-size:14.3px;color: black;\">\n                        <input type=\"checkbox\" id=\"myRadio\" value=\"yes\" [(ngModel)]=\"model.stayconnect\" name=\"stayconnect\">اشترك\n                        في نشرتنا الإخبارية\n                      </div>\n\n                    </div>\n\n                    <div class=\"form-group col-md-6\" style=\"text-align:right\">\n                      <label class=\"Name1\">اختر الخدمة</label>\n\n                      <div>\n                        <label style=\"font-family:Roboto-Regular;font-size:14.3px;color: black;\">\n                          <input type=\"checkbox\" value=\"amanservices\" [(ngModel)]=\"model.amanservices\" name=\"services\">تأمين\n                        </label>\n                        <label style=\"margin-left:10px;font-family:Roboto-Regular;font-size:14.3px;color: black;\">\n                          <input type=\"checkbox\" value=\"salamaservices\" [(ngModel)]=\"model.salamaservices\" name=\"services\">سلامة\n                        </label>\n                      </div>\n\n                    </div>\n                    <div class=\"form-group col-md-2\">\n                      <re-captcha class=\"g-recaptcha\" (resolved)=\"resolved($event)\" siteKey=\"6LfQqIQUAAAAABL8W6ckQ5_jVY-flsBo8RHrI9Vx\"></re-captcha>\n                    </div>\n                    <br>\n                    <br>\n                    <br>\n                    <br>\n                    <br>\n\n                    <div class=\"form-group col-md-4\">\n                      <!-- <button onclick=\"document.getElementById('id01').style.display='block'\" style=\"width:auto;\">Login</button> -->\n                      <button type=\"submit\" style=\"background-color: #ff0000;padding: 8px 20px;margin-top: 102px;\n               margin-right: 154px; \"\n                        class=\"btn Rectangle-5-Copy\" (click)=\"createContact(model)\">إنشاء حساب</button>\n                      <!-- <button type=\"button\" class=\"btn btn-default\" (click)=\"newHero(); heroForm.reset()\">Reset</button> -->\n                    </div>\n                  </div>\n                </form>\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n    <br><br><br>\n    <!-- =============footer arabic start====== -->\n    <div class=\"container1 col-md-12\" dir=\"rtl\">\n      <br><br>\n      <div class=\"row\">\n\n        <div class=\"col-sm-2\">\n          <img src=\"./assets/logo-1-copy.png\" srcset=\"./assests/logo-1-copy@2x.png 2x,\n             ./assests/logo-1-copy@3x.png 3x\"\n            class=\"img-thumbnail\">\n        </div>\n\n        <div class=\"col-md-2\">\n          <h5 class=\"navfooter\" style=\"color:white\">الملاحة</h5>\n          <ul class=\"list-unstyled quick-links footer1\">\n\n            <li><a routerLink=\"/aboutus-arabic\" class=\"about\">\n                <font color=\"white\">معلومات عنا</font>\n              </a></li>\n            <li><a routerLink=\"/amanservices-arabic\">\n                <font color=\"white\">خدمات</font>\n              </a></li>\n            <li><a routerLink=\"/sitemap-arabic\">\n                <font color=\"white\">خريطة الموقع</font>\n              </a></li>\n            <li><a routerLink=\"/contactus-arabic\">\n                <font color=\"white\">اتصل بنا</font>\n              </a></li>\n            <li><a routerLink=\"/privacy-arabic\">\n                <font color=\"white\">سياسة خاصة</font>\n              </a></li>\n          </ul>\n        </div>\n\n        <!-- <div class=\"col-sm-3\">\n               <h5 class=\"home\">Support</h5>\n               <ul class=\"list-unstyled quick-links\">\n                 <li><a class=\"about\"><font color=\"white\">Privacy Policy</font></a></li>\n                 <li><a class=\"about\"><font color=\"white\">Disclaimer</font></a></li>\n                 <li><a class=\"about\"><font color=\"white\">Terms and Condition</font></a></li>\n                 <li><a class=\"about\"><font color=\"white\">Protecting Lives and Property</font></a></li>\n    \n               </ul>\n             </div> -->\n        <div class=\"col-md-3\">\n          <h5 class=\"\" style=\"color:white;font-family: GeezaPro;\">عنوان الشركة:</h5>\n          <ul class=\"list-unstyled quick-links footer2\">\n            <li>\n              <p class=\"about\">\n                <font color=\"white\">برج 400 18 أرضية,</font>\n                <br>\n                <font color=\"white\"> طريق الميناء الشارقة,</font>\n                <br>\n                <font color=\"white\">صندوق بريد 4638 الشارقة - الإمارات العربية المتحدة</font>\n                <br>\n\n                <font color=\"white\" dir=\"rtl\"> الهاتف: 544443 600 971+ </font>\n                <br>\n                <font color=\"white\" dir=\"rtl\"> الفاكس: 2331 572 6 971+ </font>\n                <br>\n                <font color=\"white\">البريد الإلكتروني: helpdesk@saned.ae.com</font>\n                <br>\n                <a routerLink=\"login-arabic\">\n                  <font color=\"white\">www.saned.ae</font>\n                </a>\n              </p>\n            </li>\n          </ul>\n        </div>\n        <div class=\"col-sm-2\">\n          <img src=\"./assets/screen-shot-2018-12-18-at-12-04-00-pm.png\" srcset=\"./assests/screen-shot-2018-12-18-at-12-04-00-pm@2x.png 2x,\n                 ./assests/screen-shot-2018-12-18-at-12-04-00-pm@3x.png 3x\"\n            class=\"img-thumbnail\">\n        </div>\n        <div class=\"col-sm-3\">\n          <p style=\"color:white;font-family: GeezaPro;\">تابعنا\n            <a><i class=\"fa fa-linkedin-square fa-3x social\" style=\"color:#007bb5\"></i></a>\n            <a><i class=\"fa fa-twitter-square fa-3x social\" style=\"color:#55ACEE\"></i></a>\n            <a><i class=\"fa fa-facebook-square fa-3x social\" style=\"color:#3B5998\"></i></a>\n            <a><i class=\"fa fa-instagram square fa-3x social\" style=\"color:#55ACEE\"></i></a>\n            <h6 style=\"color:white;font-family: GeezaPro;text-align: right;\">اشترك في صحيفتنا الإخبارية</h6>\n            <div class=\"input-group mb-3\">\n\n              <input type=\"email\" name=\"email_id\" [(ngModel)]=\"model.email_id\" #name=\"ngModel\" id=\"email_id\" style=\"background: black;\n                  border-color: #6c757d;vertical-align:9px;color:#bbb;font-family: GeezaPro;\"\n                class=\"form-control\" required placeholder=\"أدخل معرف البريد الخاص بك\" aria-label=\"Recipient's username\"\n                aria-describedby=\"basic-addon2\">\n              <div class=\"input-group-append\">\n\n                <button class=\"btn btn-outline\" style=\"border-color: white;\" type=\"button\">\n                  <font style=\"color:#ff0000;\">الاشتراك</font>\n                </button>\n              </div>\n            </div>\n        </div>\n        <div class=\"col-md-14\" style=\"margin-right: 574px;\">الموقع في وضع البناء</div>\n        <hr class=\"col-md-8\" style=\"background:white;font-family: GeezaPro;\">\n      </div>\n\n\n      <div class=\"lastfoot text-center\">\n        <div>\n          <p style=\"font-family: GeezaPro;color: #ffffff;\" class=\"text-center\">من خلال الاستمرار عبر هذه الصفحة ،\n            فإنك توافق على\n            بنود الخدمة وسياسة\n            ملفات تعريف الارتباط وسياسة\n            الخصوصية\n            وسياسات المحتوى الخاصة بنا. © 2019.</p>\n        </div>\n\n      </div>\n      <br>\n    </div>\n    <!-- ========footer arabic end====== -->\n\n    <script>\n      // Get the modal\n      var modal = document.getElementById('id01');\n\n      // When the user clicks anywhere outside of the modal, close it\n      window.onclick = function (event) {\n        if (event.target == modal) {\n          modal.style.display = \"none\";\n        }\n      }\n    </script>\n\n\n\n    <router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/register-form-arabic/register-form-arabic.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/register-form-arabic/register-form-arabic.component.ts ***!
  \************************************************************************/
/*! exports provided: RegisterFormArabicComponent, AppModalContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterFormArabicComponent", function() { return RegisterFormArabicComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModalContentComponent", function() { return AppModalContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterFormArabicComponent = /** @class */ (function () {
    function RegisterFormArabicComponent(apiService, router) {
        this.apiService = apiService;
        this.router = router;
        this.model = {};
        this.data = {};
        this.submitted = {};
        this.onSubmit = {};
    }
    RegisterFormArabicComponent.prototype.ngOnInit = function () {
    };
    RegisterFormArabicComponent.prototype.createContact = function (model) {
        var _this = this;
        this.apiService.createContact(model).subscribe(function (response) {
            _this.data = response;
            if (_this.data.Message == "User Already Registered") {
                console.log("data=====>", _this.data);
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()(_this.data.Message + "<br>" + "مستخدم مسجل بالفعل");
            }
            else if (_this.data.Message == "please check your email for one time password") {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()(_this.data.Message);
                document.getElementById('id01').style.display = 'block';
            }
            else if (_this.data.Message == "Please provide Mandatory fields") {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()("Please fill the Mandatory fields" + "<br>" + "يرجى ملء الحقول الإلزامية");
            }
            // this.router.navigate(['/login']);
        });
    };
    ;
    RegisterFormArabicComponent.prototype.newsletter = function (model) {
        var _this = this;
        this.apiService.newsletter(model).subscribe(function (response) {
            _this.data = response;
            console.log(_this.data);
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()(_this.data.Message + "<br>" + "اشتركت بنجاح في النشرة الإخبارية");
        });
    };
    ;
    RegisterFormArabicComponent.prototype.emailotpverification = function (model) {
        var _this = this;
        this.apiService.emailotpverification(model).subscribe(function (response) {
            _this.data = response;
            console.log("data=====>", _this.data.message);
            if (_this.data.message == "You are successfully registered") {
                console.log("data=====>", _this.data);
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()("Registration Successful" + "<br>" + "التسجيل ناجح");
                _this.router.navigate(['/login']);
            }
            else if (_this.data.message == "Invalid one time password") {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()("Invalid one time password" + "<br>" + "كلمة مرور غير صالحة مرة واحدة");
            }
        });
    };
    ;
    RegisterFormArabicComponent.prototype.sendotp = function (model) {
        var _this = this;
        this.apiService.sendotp(model).subscribe(function (response) {
            _this.data = response;
            if (_this.data.code = '200') {
                console.log("data=====>", _this.data);
                //   alert('OTP sent to email' );
            }
            // this.router.navigate(['/login']);
        });
    };
    ;
    RegisterFormArabicComponent.prototype.backhome = function () {
        this.router.navigate(['/login']);
    };
    RegisterFormArabicComponent.prototype.resolved = function (captchaResponse) {
        console.log("Resolved captcha with response " + captchaResponse + ":");
    };
    RegisterFormArabicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register-form-arabic',
            template: __webpack_require__(/*! ./register-form-arabic.component.html */ "./src/app/register-form-arabic/register-form-arabic.component.html"),
            styles: [__webpack_require__(/*! ./register-form-arabic.component.css */ "./src/app/register-form-arabic/register-form-arabic.component.css")]
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["APIService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RegisterFormArabicComponent);
    return RegisterFormArabicComponent;
}());

var AppModalContentComponent = /** @class */ (function () {
    function AppModalContentComponent() {
    }
    return AppModalContentComponent;
}());



/***/ }),

/***/ "./src/app/register-form/register-form.component.css":
/*!***********************************************************!*\
  !*** ./src/app/register-form/register-form.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".intro-2 {\n    background: url(\"/assets/hero_image.png\")no-repeat center center;\n    background-size: cover;\n    height: 330px;\n \n }\n \n\n/* Full-width input fields */\n \n\ninput[type=text], input[type=password] {\n  width: 100%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  box-sizing: border-box;\n}\n \n\n/* Set a style for all buttons */\n \n\nbutton {\n  background-color: #ff0000;\n  color: white;\n  padding: 8px 20px;\n  margin: 8px 0;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n}\n \n\nbutton:hover {\n  opacity: 0.8;\n}\n \n\n/* Extra styles for the cancel button */\n \n\n.cancelbtn {\n  width: auto;\n  padding: 10px 18px;\n  background-color: #f44336;\n}\n \n\n/* Center the image and position the close button */\n \n\n.imgcontainer {\n  text-align: center;\n  margin: 24px 0 12px 0;\n  position: relative;\n}\n \n\nimg.avatar {\n  width: 40%;\n  border-radius: 50%;\n}\n \n\n.container {\n  padding: 16px;\n}\n \n\nspan.psw {\n  float: right;\n  padding-top: 16px;\n}\n \n\n/* ======login form start========= */\n \n\n/* Full-width input fields */\n \n\ninput[type=text], input[type=password] {\n  width: 100%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  box-sizing: border-box;\n}\n \n\n/* Set a style for all buttons */\n \n\n/* button {\n  background-color:#f34235;\n  color: white;\n  padding: 14px 20px;\n  margin: 8px 0;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n} */\n \n\nbutton:hover {\n  opacity: 0.8;\n}\n \n\n/* Extra styles for the cancel button */\n \n\n.cancelbtn {\n  width: auto;\n  padding: 10px 18px;\n  background-color: #f44336;\n}\n \n\n/* Center the image and position the close button */\n \n\n.imgcontainer {\n  text-align: center;\n  margin: 24px 0 12px 0;\n  position: relative;\n}\n \n\nimg.avatar {\n  width: 40%;\n  border-radius: 50%;\n}\n \n\n.container {\n  padding: 16px;\n}\n \n\nspan.psw {\n  float: right;\n  padding-top: 16px;\n}\n \n\n/* The Modal (background) */\n \n\n.modal {\n  display: none; /* Hidden by default */\n  position: fixed; /* Stay in place */\n  z-index: 1; /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgb(0,0,0); /* Fallback color */\n  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n  padding-top: 60px;\n}\n \n\n/* Modal Content/Box */\n \n\n.modal-content {\n  background-color: #fefefe;\n  margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */\n  border: 1px solid #888;\n  width: 80%; /* Could be more or less, depending on screen size */\n}\n \n\n/* The Close Button (x) */\n \n\n.close {\n  position: absolute;\n  right: 25px;\n  top: 0;\n  color: #000;\n  font-size: 35px;\n  font-weight: bold;\n}\n \n\n.close:hover,\n.close:focus {\n  color: red;\n  cursor: pointer;\n}\n \n\n/* Add Zoom Animation */\n \n\n.animate {\n  -webkit-animation: animatezoom 0.6s;\n  animation: animatezoom 0.6s\n}\n \n\n@-webkit-keyframes animatezoom {\n  from {-webkit-transform: scale(0)} \n  to {-webkit-transform: scale(1)}\n}\n \n\n@keyframes animatezoom {\n  from {-webkit-transform: scale(0);transform: scale(0)} \n  to {-webkit-transform: scale(1);transform: scale(1)}\n}\n \n\n/* Change styles for span and cancel button on extra small screens */\n \n\n@media screen and (max-width: 300px) {\n  span.psw {\n     display: block;\n     float: none;\n  }\n  .cancelbtn {\n     width: 100%;\n  }\n}\n \n\n/* ========login form end====== */\n \n\n/* The Modal (background) */\n \n\n.modal {\n  display: none; /* Hidden by default */\n  /* position: fixed; Stay in place */\n  z-index: 1; /* Sit on top */\n  left: 0;\n  top: 0;\n  vertical-align: middle;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgb(0,0,0); /* Fallback color */\n  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n  padding-top: 60px;\n  \n}\n \n\n/* Modal Content/Box */\n \n\n.modal-content {\n  background-color: #fefefe;\n  margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */\n  border: 1px solid #888;\n  width: 80%; /* Could be more or less, depending on screen size */\n}\n \n\n/* The Close Button (x) */\n \n\n.close {\n  position: absolute;\n  right: 25px;\n  top: 0;\n  color: #000;\n  font-size: 35px;\n  font-weight: bold;\n \n}\n \n\n.close:hover,\n.close:focus {\n  color: red;\n  cursor: pointer;\n}\n \n\n/* Add Zoom Animation */\n \n\n.animate {\n  -webkit-animation: animatezoom 0.6s;\n  animation: animatezoom 0.6s\n}\n \n\n@-webkit-keyframes animatezoom {\n  from {-webkit-transform: scale(0)} \n  to {-webkit-transform: scale(1)}\n}\n \n\n@keyframes animatezoom {\n  from {-webkit-transform: scale(0);transform: scale(0)} \n  to {-webkit-transform: scale(1);transform: scale(1)}\n}\n \n\n/* Change styles for span and cancel button on extra small screens */\n \n\n@media screen and (max-width: 300px) {\n  span.psw {\n     display: block;\n     float: none;\n  }\n  .cancelbtn {\n     width: 100%;\n  }\n}\n \n\n/* ===========navbar start========= */\n \n\n.Rectangle-2 {\n  width: 123px;\n  height: 41px;\n  border-radius: 5px;\n  background-color: #ff0000;\n}\n \n\n.Contact-Us {\n  width: 90px;\n  height: 24px;\n  font-family: Roboto;\n  font-size: 18px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #ffffff;\n}\n \n\n.Suppliers {\n  width: 77px;\n  height: 24px;\n  font-family: Roboto;\n  font-size: 18px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #ffffff;\n}\n \n\n.Services {\n  width: 70px;\n  height: 24px;\n  font-family: Roboto;\n  font-size: 18px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #ffffff;\n}\n \n\n.About-Us-Copy {\n  width: 75px;\n  height: 24px;\n  font-family: Roboto;\n  font-size: 18px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #ffffff;\n}\n \n\n.Home-Copy {\n  width: 49px;\n  height: 24px;\n  font-family: Roboto;\n  font-size: 18px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #ffffff;\n}\n \n\n/* ======navbar end===== */"

/***/ }),

/***/ "./src/app/register-form/register-form.component.html":
/*!************************************************************!*\
  !*** ./src/app/register-form/register-form.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js\"></script>\n<script src=\"//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n<script src='https://www.google.com/recaptcha/api.js'></script>\n\n<head>\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <script src=\"https://code.angularjs.org/1.2.1/angular.min.js\"></script>\n  <style>\n    @import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');\n    body {font-family: Arial, Helvetica, sans-serif;}\n    nav{\n        width: 100%;\n        height: 50px;\n        background:rgba(0,0,0,.8);\n        border-top: 1px solid rgba(255,255);\n        border-bottom: 1px solid rgba(255,255);\n        position: sticky;\n        top:0px;\n        z-index: 99;\n    }\n    body{\n        margin: 0;\n        padding: 0;\n        font-family: sans-serif;\n        /* background: #000; */\n    }\n    header{\n        padding: 10px 100px;\n        box-sizing: border-box;\n    }\n    section{\n        width: 100%;\n        height: 100vh;\n    }\n    .dropdown {\n      float: left;\n      overflow: hidden;\n    }\n    \n    .dropdown .dropbtn {\n      font-size: 16px;  \n      border: none;\n      outline: none;\n      color: white;\n      padding: 14px 16px;\n      background-color: inherit;\n      font-family: inherit;\n      margin: 0;\n    }\n    /* ======login form start========= */\n/* Full-width input fields */\ninput[type=text], input[type=password] {\n  width: 100%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  box-sizing: border-box;\n}\n\n/* Set a style for all buttons */\n/* button {\n  background-color:#f34235;\n  color: white;\n  padding: 14px 20px;\n  margin: 8px 0;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n} */\n\nbutton:hover {\n  opacity: 0.8;\n}\n\n/* Extra styles for the cancel button */\n.cancelbtn {\n  width: auto;\n  padding: 10px 18px;\n  background-color: #f44336;\n}\n\n/* Center the image and position the close button */\n.imgcontainer {\n  text-align: center;\n  margin: 24px 0 12px 0;\n  position: relative;\n}\n\nimg.avatar {\n  width: 40%;\n  border-radius: 50%;\n}\n\n.container {\n  padding: 16px;\n}\n\nspan.psw {\n  float: right;\n  padding-top: 16px;\n}\n\n/* The Modal (background) */\n.modal {\n  display: none; /* Hidden by default */\n  position: fixed; /* Stay in place */\n  z-index: 1; /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgb(0,0,0); /* Fallback color */\n  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n  padding-top: 60px;\n}\n\n/* Modal Content/Box */\n.modal-content {\n  background-color: #fefefe;\n  margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */\n  border: 1px solid #888;\n  width: 80%; /* Could be more or less, depending on screen size */\n}\n\n/* The Close Button (x) */\n.close {\n  position: absolute;\n  right: 25px;\n  top: 0;\n  color: #000;\n  font-size: 35px;\n  font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n  color: red;\n  cursor: pointer;\n}\n\n/* Add Zoom Animation */\n.animate {\n  -webkit-animation: animatezoom 0.6s;\n  animation: animatezoom 0.6s\n}\n\n@-webkit-keyframes animatezoom {\n  from {-webkit-transform: scale(0)} \n  to {-webkit-transform: scale(1)}\n}\n  \n@keyframes animatezoom {\n  from {transform: scale(0)} \n  to {transform: scale(1)}\n}\n\n/* Change styles for span and cancel button on extra small screens */\n@media screen and (max-width: 300px) {\n  span.psw {\n     display: block;\n     float: none;\n  }\n  .cancelbtn {\n     width: 100%;\n  }\n}\n/* ========login form end====== */\n    .navbar a:hover, .dropdown:hover .dropbtn {\n      background-color: red;\n    }\n    \n    .dropdown-content {\n      display: block;\n      position: absolute;\n      background-color: red;\n      min-width: 160px;\n      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n      z-index: 1;\n    }\n    \n    .dropdown-content a {\n      float: none;\n      color: black;\n      padding: 12px 16px;\n      text-decoration: none;\n      display: block;\n      text-align: left;\n    }\n    \n    .dropdown-content a:hover {\n      background-color: #ddd;\n    }\n    ul {\n      padding: 0;\n      margin: 0;\n      list-style: none;\n    }\n    ul li a {\n      text-decoration: none;\n      color: #e74c3c;\n      font-family: Tahoma, Arial;\n    }\n    .navigation {\n      background-color: #35353500;\n      width: 75%;\n      margin: 20px auto;\n      min-height: 50px;\n    }\n    .navigation > li {\n      float: left;\n      padding: 0 20px;\n    }\n    .navigation > li > a {\n      line-height: 50px;\n      color: #FFF;\n    }\n    .navigation .menu {\n      position: relative\n    }\n    .navigation .menu .submenu {\n      position: absolute;\n      /* width: 200px; */\n      -webkit-box-shadow: 0px 1px 1px #CCC;\n      box-shadow: 0px 1px 1px #CCC;\n      display: none;\n      -webkit-transition: all .5s ease-in-out;\n      -moz-transition: all .5s ease-in-out;\n      transition: all .5s ease-in-out;\n    }\n    .navigation .menu:hover .submenu {\n      display: block\n    }\n    .navigation .menu .submenu:before {\n      content: \"\";\n      position: absolute;\n      display: block;\n      border-width: 0 6px 6px 6px;\n      border-style: solid;\n      border-color: #FFF transparent;\n      top: -6px;\n      left: 5px\n    }\n    .navigation .menu .submenu li {\n      padding: 5px 10px;\n      -webkit-transition: all .5s ease-in-out;\n      -moz-transition: all .5s ease-in-out;\n      transition: all .5s ease-in-out;\n    }\n    .navigation .menu .submenu li:hover {\n      background-color: #e74c3c;\n    }\n    .navigation .menu .submenu li:hover a {\n      color: #FFF;\n      /* padding: 0 11px; */\n    }\n    \n    \n    .dropdown:hover .dropdown-content {\n      display: block;\n    }\n    section.sec1{\n        background: url(natures-temples.png);\n        background-size: cover;\n    }\n    section.banner{\n        background: url(Group.png);\n        background-size: cover;\n        margin-left: 15px;\n    }\n    section.sec2{\n       padding: 100px;\n       box-sizing: border-box;\n    }\n    nav{\n        width: 100%;\n        height: 50px;\n         background:rgba(0,0,0,.8); \n        border-top: 1px solid rgba(255,255);\n        border-bottom: 1px solid rgba(255,255);\n        position: sticky;\n        top:0px;\n        z-index: 99\n    }\n    nav ul{\n        display: flex;\n        margin: 0px;\n        padding: 0px;\n        float: right;\n    }\n    nav ul li{\n        list-style: none;\n    }\n    \n    \n    nav ul{\n        display: flex;\n       \n        padding: 0px;\n        /* float: ; */\n    }\n    \n    nav ul li a{\n        display:block;\n        color: #fff;\n        padding: 0 20px;\n        text-decoration: none;\n        text-transform: uppercase;\n        font-weight: bold;\n        line-height: 50px;\n    \n    }\n    /* .switch{\n    margin-top: 0;\n    margin-bottom: -5rem;\n    margin-left: 83%;\n    color: red;\n    overflow: hidden;\n}\n\n/* Set a style for all buttons */\n/* button {\n  background-color:#f34235;\n  color: white;\n  padding: 14px 20px;\n  margin: 8px 0;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n} */\n /* ==============footer style start ========= */\n .footer {\n    /* position: fixed; */\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    background-color: black;\n    color: white;\n    text-align: center;\n    /* height: 75px; */\n }\n .container1{\n   background: black;\n   color: white\n }\n .container{\n   /* background: black; */\n   color: white\n }\n .social:hover {\n  -webkit-transform: scale(1.1);\n  -moz-transform: scale(1.1);\n  -o-transform: scale(1.1);\n}\n.social {\n  -webkit-transform: scale(0.8);\n  /* Browser Variations: */\n  \n  -moz-transform: scale(0.8);\n  -o-transform: scale(0.8);\n  -webkit-transition-duration: 0.5s;\n  -moz-transition-duration: 0.5s;\n  -o-transition-duration: 0.5s;\n}\n.fa {\n  padding: 20px;\n  font-size: 30px;\n  width: 30px;\n  text-align: center;\n  text-decoration: none;\n  border-radius: 50%;\n}\n.img-thumbnail{\n  background: black;\n  border-color: black\n}\n\n .home{\n    font-family: \"Roboto\";\n    font-size: 16px;\n    line-height: 14px;\n  letter-spacing: 0;\n  }\n  .about{\n    font-family: \"Roboto\";\n    font-size: 13px;\n    line-height: 15px;\n  letter-spacing: 0;\n  }\n\n    /* ===========================footer style end================ */\n    .intro-2 {\n   background: url(\"/assets/hero_image.png\")no-repeat center center;\n   background-size: cover;\n   height: 623px;\n\n}\n    </style>\n\n</head>\n<!-- <div> -->\n\n<!-- <div class = \"switch\" id=\"en\" >\n      <label><input #arabic type=\"radio\" id= \"ar1\" name=\"size\" (change)=\"0\" >عربى</label>\n      <label><input #english type=\"radio\" id= \"ar1\" name=\"size\" (change)=\"0\" checked>English</label>\n  </div> -->\n\n\n\n<div>\n  <!------ Include the above in your HEAD tag ---------->\n  <section class=\"view intro-2 hm-gradient\">\n\n    <div class=\"\">\n      <div class=\"col-md-1\">\n        <!-- <img src=\"./assets/logv2-2.png\" class=\"img-responsive\"> -->\n        <img src=\"./assets/group.png\" srcset=\"./assets/group@2x.png 2x,\n                                                 ./assets/group@3x.png 3x\"\n          class=\"img-responsive\">\n\n\n\n      </div>\n      <div style=\"margin-left: 1100px;margin-top: -150px\">\n        <br><br>\n        <input style=\"color:#ff0000;\" type=\"radio\" [value]=\"true\" checked=\"checked\" />\n        <font style=\"color:#F90E35\">English</font> &nbsp; &nbsp;\n        <input type=\"radio\" [value]=\"false\" routerLink=\"/register-form-arabic\" />\n        <font color=\"white\"> عربى\n        </font>\n        &nbsp; &nbsp; &nbsp;\n      </div>\n    </div>\n    <!-- <div class=\"full-bg-img\"> -->\n    <!-- <div class=\"container flex-center\"> -->\n    <!-- <div class=\"row flex-center pt-5 mt-3\"> -->\n    <!-- <div class=\"col-md-6 text-center\"> -->\n    <br><br><br><br><br><br><br><br><br>\n    <div class=\"text-center\">\n      <h1>\n        <font color=\"white\" style=\"font-family:Roboto;font-size:50px\">Register </font>\n      </h1>\n\n    </div>\n    <!-- </div> -->\n\n\n    <!-- </div> -->\n    <!-- </div> -->\n    <!-- </div> -->\n  </section>\n\n\n\n  <nav style=\"    margin-top: -150px;background: rgba(0, 0, 0, 0.20); \">\n    <ul class=\"navigation\" style=\"margin-right: 79px;\">\n      <li><a routerLink=\"/login\">H<font style=\"text-transform: lowercase;\">ome</font></a></li>\n      <li><a routerLink=\"/about-us\">A<font style=\"text-transform: lowercase;\">bout Us</font></a></li>\n      <li class=\"menu\">\n        <a>S<font style=\"text-transform: lowercase;\">ervices</font></a>\n        <ul class=\"submenu\">\n          <li style=\"background:  #252323;\"><a routerLink=\"/amanservices\">A<font style=\"text-transform: lowercase;\">man\n              </font></a></li>\n          <li style=\"background:  #252323;\"><a routerLink=\"/salamaservices\">S<font style=\"text-transform: lowercase;\">alama</font>\n            </a></li>\n          <!-- <li style=\"background: red;\"><a href=\"#\">Link 3</a></li>\n                  <li style=\"background: red;\"><a href=\"#\">Link 4</a></li> -->\n        </ul>\n      </li>\n      <li><a routerLink=\"supplier-register\">S<font style=\"text-transform: lowercase;\">uppliers</font></a></li>\n      <li><a routerLink=\"/contactus\">C<font style=\"text-transform: lowercase;\">ontact Us</font></a></li>\n      <!-- <li><a routerLink=\"/sitemap\">S<font style=\"text-transform: lowercase;\">itemap</font></a></li> -->\n      <li>\n        <font style=\"color:white\"><i class=\"fa fa-search\" style=\"margin-top: -9px;\n                margin-left: -43px;\"></i></font>\n      </li>\n\n\n    </ul>\n  </nav>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br><br>\n  <br>\n  <div id=\"id01\" class=\"modal\">\n\n    <form class=\"modal-content animate col-md-4\" action=\"/action_page.php\">\n      <div class=\"imgcontainer\">\n        <span onclick=\"document.getElementById('id01').style.display='none'\" class=\"close\" title=\"close\">&times;</span>\n        <!-- <img src=\"/assets/otp.png\" alt=\"\" class=\"avatar\"> -->\n        <h4>Enter One Time Password</h4>\n      </div>\n\n      <!-- <div class=\"container\"> -->\n      <p for=\"uname\" style=\"font-size: 18px;text-align:justify\" class=\"text-center\">One Time Password has been sent to\n        your email address and mobile number</p>\n      <!-- <input type=\"password\" class=\"w3-input\" placeholder=\"Enter otp\" name=\"uname\" required> -->\n      <!-- <input type=\"password\" class=\"col-md-6 \" placeholder=\"\" maxlength=\"4\" style=\"margin-left: 92px;border:white\" /> -->\n      <input type=\"text\" class=\"form-control col-md-4 inline\" id=\"otp\" style=\"margin-left:130px\" required [(ngModel)]=\"model.otp\"\n        name=\"name\" #name=\"ngModel\">\n\n      <!-- <button type=\"submit\" style=\"background-color: #ff0000;width: 94px;padding: 8px 10px;\" onclick=\"document.getElementById('id03').style.display='block'\" class=\"btn Rectangle-5-Copy inline\" (click)=\"sendotp(model)\">Send OTP</button>        -->\n\n      <div [hidden]=\"name.valid || name.pristine\" class=\"alert\" style=\"color: #f54b5e;\">\n        One Time Password is required\n      </div>\n      <!-- <input type=\"text\" class=\" partitioned\" placeholder=\"0\" maxlength=\"1\" />\n        <input type=\"text\" class=\" partitioned\" placeholder=\"0\" maxlength=\"1\" />\n        <input type=\"text\" class=\" partitioned\" placeholder=\"0\" maxlength=\"1\" /> -->\n      <!-- <label for=\"psw\"><b>Password</b></label>\n        <input type=\"password\" placeholder=\"Enter Password\" name=\"psw\" required> -->\n\n      <button style=\"background-color: #ff0000;margin-left:57px;color: white\" class=\"btn Rectangle-5-Copy\" (click)=\"emailotpverification(model)\"\n        type=\"submit\">Submit</button>\n\n      <br><br>\n      <!-- <label>\n          <input type=\"checkbox\" checked=\"checked\" name=\"remember\"> Remember me\n        </label> -->\n      <!-- </div> -->\n\n      <!-- <div class=\"container\" style=\"background-color:#f1f1f1\">\n        <button type=\"button\" onclick=\"document.getElementById('id01').style.display='none'\" class=\"cancelbtn\">Cancel</button>\n        <span class=\"psw\">Forgot <a href=\"#\">password?</a></span>\n      </div> -->\n    </form>\n  </div>\n\n  <div class=\"container col-md-12\">\n    <!-- <h3 class=\"col-sm-12 Welcome-to-Aman-port\"><b>“Caring for the nation by helping protect lives and property from fire and life safety events is our primary goal.“</b></h3> -->\n\n    <div class=\"card col-md-12\" style=\"border-radius: 18px;\n   background: white;color:#494949;margin-top: -170px;\">\n      <br>\n      <div class=\"row ml-5\">\n        <div class=\"col-md-12 Who-We-Are-Aman-is-a\">\n          <!-- <h4><b>Who We Are</b></h4> -->\n          <h3 class=\"col-sm-12 Welcome-to-Aman-port\" style=\"font-family:Roboto;font-size:20px\"><b>Welcome to services\n              portal</b></h3>\n          <br>\n          <br>\n          <div class=\"col-md-12\">\n\n            <div [hidden]=\"submitted\">\n              <form name=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" novalidate>\n                <div class=\"row col-md-12 ml-5\">\n                  <div class=\"form-group col-md-6\">\n                    <label class=\"Name\" for=\"name\" style=\"font-family:Roboto;font-size:14px\"><b>Name</b><span class=\"req\"\n                        style=\"color: #f54b5e;\">* </span></label>\n\n                    <input type=\"text\" class=\"form-control col-md-8\" name=\"name\" [(ngModel)]=\"model.name\" #name=\"ngModel\"\n                      [ngClass]=\"{ 'is-invalid': f.submitted && name.invalid }\" required />\n\n                    <div *ngIf=\"f.submitted && name.invalid\" class=\"invalid-feedback\">\n                      <div *ngIf=\"name.errors.required\">Name is required</div>\n                    </div>\n\n                  </div>\n                  <!-- <div class=\"form-group\">\n              <label for=\"firstName\">First Name</label>\n              <input type=\"text\" class=\"form-control\" name=\"firstName\" [(ngModel)]=\"model.firstname\" #firstName=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && firstName.invalid }\" required />\n              <div [hidden]=\"firstName.valid || firstName.pristine\"\n                   class=\"alert\" style=\"color: #f54b5e;\">\n                Name is required\n                </div>\n              <div *ngIf=\"f.submitted && firstName.invalid\" class=\"invalid-feedback\">\n                <div *ngIf=\"firstName.errors.required\">First Name is required</div>\n              </div>\n            </div> -->\n\n                  <div class=\"form-group col-md-6\">\n                    <label class=\"Name\" for=\"name\">Company</label>\n                    <input type=\"text\" class=\"form-control col-md-8\" id=\"company\" required [(ngModel)]=\"model.company\"\n                      name=\"company\" #company=\"ngModel\">\n\n                    <!-- <div [hidden]=\"name.valid || name.pristine\"\n                     class=\"alert alert-danger\">\n                  Name is required\n                </div> -->\n                  </div>\n\n                  <div class=\"form-group col-md-6\">\n                    <label class=\"Name\" for=\"name\">Nationality</label>\n                    <input type=\"text\" class=\"form-control col-md-8\" id=\"nationality\" required [(ngModel)]=\"model.nationality\"\n                      name=\"nationality\" #nationality=\"ngModel\">\n                    <!-- <div [hidden]=\"name.valid || name.pristine\"\n                       class=\"alert alert-danger\">\n                    Name is required\n                  </div> -->\n                  </div>\n\n                  <div class=\"form-group col-md-6\">\n                    <label class=\"Name\" for=\"phonenumber\">Phone Number</label>\n                    <input type=\"number\" class=\"form-control col-md-8\" id=\"phonenumber\" required [(ngModel)]=\"model.phonenumber\"\n                      name=\"phonenumber\" #phonenumber=\"ngModel\">\n                    <!-- <div [hidden]=\"name.valid || name.pristine\"\n                         class=\"alert alert-danger\">\n                      Name is required\n                    </div> -->\n                  </div>\n\n                  <div class=\"form-group col-md-6\">\n                    <label class=\"Name\" for=\"address\">Address</label>\n                    <input type=\"text\" class=\"form-control col-md-8\" id=\"address\" required [(ngModel)]=\"model.address\"\n                      name=\"address\" #address=\"ngModel\">\n                    <!-- <div [hidden]=\"name.valid || name.pristine\"\n                           class=\"alert alert-danger\">\n                        Name is required\n                      </div> -->\n                  </div>\n\n                  <div class=\"form-group col-md-6\">\n                    <label class=\"Name\" for=\"pobox\">PO Box</label>\n                    <input type=\"text\" class=\"form-control col-md-8\" id=\"pobox\" required [(ngModel)]=\"model.pobox\" name=\"pobox\"\n                      #pobox=\"ngModel\">\n                    <!-- <div [hidden]=\"name.valid || name.pristine\"\n                             class=\"alert alert-danger\">\n                          Name is required\n                        </div> -->\n                  </div>\n\n                  <div class=\"form-group col-md-6\">\n                    <label class=\"Name\" for=\"mobile\">Mobile<span class=\"req\" style=\"color: #f54b5e;\">* </span></label>\n                    <!-- <input type=\"text\" class=\"form-control col-md-8\" id=\"mobile\"\n                                 required\n                                 [(ngModel)]=\"model.mobile\" name=\"mobile\"\n                                 #mobile=\"ngModel\">\n                          <div [hidden]=\"mobile.valid || mobile.pristine\"\n                               class=\"alert\" style=\"color: #f54b5e;\">\n                            Mobile number is required\n                          </div> -->\n\n\n\n\n                    <!-- <input type=\"text\" class=\"form-control col-md-8\" name=\"mobile\" [(ngModel)]=\"model.mobile\" #mobile=\"ngModel\"\n                      [ngClass]=\"{ 'is-invalid': f.submitted && mobile.invalid }\" required />\n\n                    <div *ngIf=\"f.submitted && mobile.invalid\" class=\"invalid-feedback\">\n                      <div *ngIf=\"mobile.errors.required\">Please enter a mobile number</div>\n                    </div> -->\n                    <!-- \n                    <input type=\"number\" class=\"form-control\" ng-minlength=\"10\" ng-maxlength=\"10\" id=\"mobile\" name=\"mobile\"\n                      placeholder=\"mobile\" ng-model=\"user.phone\" ng-required=\"true\" [(ngModel)]=\"model.mobile\">\n                    <span class=\"help-block\" ng-show=\"model.mobile.$error.required || \n                                     model.phone.$error.number\">\n                      Valid phone number is required\n                    </span>\n                    <span class=\"help-block\" ng-show=\"((model.mobile.$error.minlength ||\n                                     model.phone.$error.maxlength) && \n                                     model.phone.$dirty) \">\n                      phone number should be 10 digits\n                    </span> -->\n\n                    <!-- (keypress)=\"keyPress($event)\" -->\n                    <!-- <input type=\"number\" (keypress)=\"keyPress($event)\" class=\"form-control col-md-8\" id=\"mobile\"\n                      required [(ngModel)]=\"model.mobile\" name=\"mobile\" #mobile=\"ngModel\"> -->\n\n                    <input type=\"number\" class=\"form-control col-md-8\" name=\"mobile\" [(ngModel)]=\"model.mobile\" #mobile=\"ngModel\"\n                      [ngClass]=\"{ 'is-invalid': f.submitted && mobile.invalid }\" required maxlength=\"10\" minlength=\"10\" />\n\n                    <div *ngIf=\"f.submitted && mobile.invalid\" class=\"invalid-feedback\">\n                      <div *ngIf=\"mobile.errors.required\">Please enter a mobile number</div>\n                    </div>\n                    <!-- <input type=\"text\" (keypress)=\"keyPress($event)\" ng-control=\"form\" minlength=10 maxlength=10 id=\"mobile\"\n                      [(ngModel)]=\"model.mobile\" name=\"mobile\" [ngClass]=\"{ 'is-invalid': f.submitted && mobile.invalid }\"\n                      required #mobile=\"ngModel\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$\"> -->\n\n                    <!-- <div [hidden]=\"mobile.valid || mobile.pristine\" class=\"alert\" style=\"color: #f54b5e;\">\n                      Invalid mobile id\n                    </div>\n\n                    <div *ngIf=\"f.submitted && mobile.invalid\" class=\"invalid-feedback\">\n                      <div *ngIf=\"mobile.errors.required\">Please enter a mobile number</div>\n                    </div> -->\n                    <!-- <div class=\"form-group\">\n                      <input name=\"contact\" ng-model=\"contact\" id=\"c_num\" type=\"text\" ng-required=\"true\" ng-pattern=\"ph_numbr\"\n                        autocomplete=\"off\" placeholder=\"Contact Number\" class=\"form-control\">\n\n                      <span class=\"red-text\" ng-if=\"inquiryForm.contact.$error.required && inquiryForm.contact.$dirty\">Contact\n                        number is a required field</span>\n                      <span class=\"red-text\" ng-show=\"inquiryForm.contact.$error.pattern\">Please enter a 10 digit\n                        number</span>\n\n                    </div> -->\n\n\n                    <!-- <div class=\"form-group\">\n                      <input name=\"contact\" ng-model=\"contact\" id=\"c_num\" type=\"text\" ng-required=\"true\" ng-pattern=\"ph_numbr\"\n                        autocomplete=\"off\" placeholder=\"Contact Number\" class=\"form-control\">\n\n                      <span class=\"red-text\" ng-if=\"inquiryForm.contact.$error.required && inquiryForm.contact.$dirty\">Contact\n                        number is a required field</span>\n                      <span class=\"red-text\" ng-show=\"inquiryForm.contact.$error.pattern\">Please enter a 10 digit\n                        number</span>\n\n                    </div> -->\n                    <!-- <input type=\"number\" name=\"number\" [(ngModel)]=\"model.number\" required ng-minlength=\"10\"\n                      ng-maxlength=\"10\" ng-init=\"number_error_show=0\" ng-focus=\"number_error_show=1\" ng-change=\"number_error_show = number_error_show + 1;\">\n                    <div>\n                      <p style=\"color:#ff0000\" ng-show=\"number_error_show > 0  && form.number.$error.required || form.number.$error.number\">please\n                        enter your valid Mobile no</p>\n                      <p style=\"color:#ff0000\" ng-show=\"number_error_show > 0  && ((form.number.$error.minlength || form.number.$error.maxlength)registration.number.$dirty)\">\n                        Please enter a 10 digit number</p>\n                    </div> -->\n\n\n\n                  </div>\n\n                  <div class=\"form-group col-md-6\">\n                    <label class=\"Name\" for=\"email\">Email<span class=\"req\" style=\"color: #f54b5e;\">* </span></label>\n                    <input type=\"text\" class=\"form-control col-md-8\" id=\"email\" required [(ngModel)]=\"model.email\" name=\"email\"\n                      [ngClass]=\"{ 'is-invalid': f.submitted && email.invalid }\" #email=\"ngModel\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$\">\n                    <div [hidden]=\"email.valid || email.pristine\" class=\"alert\" style=\"color: #f54b5e;\">\n                      Invalid Email Address\n                    </div>\n\n\n                    <!-- <input type=\"text\" class=\"form-control col-md-8\" name=\"email\" [(ngModel)]=\"model.email\" #email=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && email.invalid }\" required /> -->\n                    <div *ngIf=\"f.submitted && email.invalid\" class=\"invalid-feedback\">\n                      <div *ngIf=\"email.errors.required\">Please enter a Email ID</div>\n                    </div>\n\n                  </div>\n                  <div class=\"form-group col-md-6\">\n                    <label class=\"Name\" for=\"password\">Password<span class=\"req\" style=\"color: #f54b5e;\">* </span></label>\n                    <input type=\"password\" class=\"form-control col-md-8\" id=\"password\" required [(ngModel)]=\"model.password\"\n                      name=\"password\" #password=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && password.invalid }\"\n                      pattern=\"(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}\">\n\n                    <div [hidden]=\"password.valid || password.pristine\" class=\"alert\" style=\"color: #f54b5e;\">\n                      Password Should contain atleast one Uppercase,one number Min 8 characters\n                    </div>\n                    <span id=\"strength_message\"></span>\n\n                    <!-- <input type=\"text\" class=\"form-control col-md-8\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && password.invalid }\" required /> -->\n                    <div *ngIf=\"f.submitted && password.invalid\" class=\"invalid-feedback\">\n                      <div *ngIf=\"password.errors.required\">Please enter a password</div>\n                    </div>\n\n\n                  </div>\n                  <div class=\"form-group col-md-6\">\n                    <label class=\"Name\" for=\"confirmpassword\">Confirm Password<span class=\"req\" style=\"color: #f54b5e;\">*\n                      </span></label>\n                    <input type=\"password\" class=\"form-control col-md-8\" id=\"confirmpassword\" passvalidator=\"password\"\n                      required [(ngModel)]=\"model.confirmpassword\" [ngClass]=\"{ 'is-invalid': f.submitted && confirmpassword.invalid }\"\n                      name=\"confirmpassword\" #confirmpassword=\"ngModel\" pattern=\"(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}\">\n                    <div [hidden]=\"confirmpassword.valid || confirmpassword.pristine\" class=\"alert\" style=\"color: #f54b5e;\">\n                      Password doesn't match\n                    </div>\n                    <div [hidden]=\"confirmpassword.touched && confirmpassword.errors?.notequal\" class=\"alert\" style=\"color: #f54b5e;\">\n\n\n                    </div>\n                    <!-- <input type=\"text\" class=\"form-control col-md-8\" name=\"confirmpassword\" [(ngModel)]=\"model.confirmpassword\" #confirmpassword=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && confirmpassword.invalid }\" required /> -->\n                    <div *ngIf=\"f.submitted && confirmpassword.invalid\" class=\"invalid-feedback\">\n                      <div *ngIf=\"confirmpassword.errors.required\">Please confirm your password</div>\n                    </div>\n\n\n\n\n                  </div>\n\n                  <div class=\"form-group col-md-6\">\n                    <label class=\"Name\" style=\"color:black\">Stay Connected</label>\n                    <!-- <input type=\"radio\" id=\"myRadio\" name=\"test\" required>\n                                -->\n                    <div style=\"font-family:Roboto;font-size:14.3px;color: black;\">\n                      <input type=\"checkbox\" id=\"myRadio\" value=\"yes\" [(ngModel)]=\"model.stayconnect\" name=\"stayconnect\">Subscribe\n                      to our Newsletter\n                    </div>\n                    <!-- <div [hidden]=\"stayconnect.valid || stayconnect.pristine\"\n                                     class=\"alert\" style=\"color: #f54b5e;\">\n                                  Confirm your password\n                                </div> -->\n                  </div>\n\n                  <div class=\"form-group col-md-6\">\n                    <label class=\"Name\">Choose Service</label>\n                    <!-- <input type=\"radio\" id=\"myRadio\" name=\"test\" >\n                                  -->\n                    <div>\n                      <label style=\"font-family:Roboto;font-size:14.3px;color: black;\">\n                        <input type=\"checkbox\" value=\"amanservices\" [(ngModel)]=\"model.amanservices\" name=\"services\">Aman\n                      </label>\n                      <label style=\"margin-left:10px;font-family:Roboto;font-size:14.3px;color: black;\">\n                        <input type=\"checkbox\" value=\"salamaservices\" [(ngModel)]=\"model.salamaservices\" name=\"services\">Salama\n                      </label>\n                    </div>\n                    <!-- <div [hidden]=\"confirmpassword.valid || confirmpassword.pristine\"\n                                       class=\"alert\" style=\"color: #f54b5e;\">\n                                    Confirm your password\n                                  </div> -->\n                  </div>\n                  <div class=\"form-group col-md-12\">\n                    <re-captcha class=\"g-recaptcha\" (resolved)=\"resolved($event)\" siteKey=\"6LfQqIQUAAAAABL8W6ckQ5_jVY-flsBo8RHrI9Vx\"></re-captcha>\n                  </div>\n\n\n                  <div class=\" form-group col-md-12\">\n\n                    <!-- <button onclick=\"document.getElementById('id01').style.display='block'\" style=\"width:auto;\">Login</button> -->\n                    <!-- <button type=\"submit\" style=\"background-color: #ff0000;padding: 8px 20px;margin-left: 319px;\"\n                      onclick=\"document.getElementById('id01').style.display='none'\" class=\"btn Rectangle-5-Copy\"\n                      (click)=\"createContact(model)\">\n                      <font color=\"white\">Create Account</font>\n                    </button> -->\n                    <button type=\"submit\" style=\"background-color: #ff0000;padding: 8px 20px;margin-left: 319px;\" class=\"btn Rectangle-5-Copy\"\n                      (click)=\"createContact(model)\">\n                      <font color=\"white\">Create Account</font>\n                    </button>\n                    <!-- <button type=\"button\" class=\"btn btn-default\" (click)=\"newHero(); heroForm.reset()\">Reset</button> -->\n                  </div>\n                </div>\n              </form>\n              <br>\n            </div>\n          </div>\n\n        </div>\n\n      </div>\n    </div>\n  </div>\n  <script>\n    // Get the modal\n    var modal = document.getElementById('id01');\n\n    // When the user clicks anywhere outside of the modal, close it\n    window.onclick = function (event) {\n      if (event.target == modal) {\n        modal.style.display = \"none\";\n      }\n    }\n  </script>\n  <!--=====footer english start==-->\n  <div class=\"container1 col-md-12\">\n    <br><br>\n    <div class=\"row\">\n\n      <div class=\"col-sm-2\">\n        <img src=\"./assets/footersanedlogo.png\" srcset=\"./assets/footersanedlogo@2x.png 2x,\n              ./assets/footersanedlogo@3x.png 3x\"\n          class=\"img-responsive\">\n\n      </div>\n\n      <div class=\"col-md-2\">\n        <h5 class=\"home\" style=\"color:white;font-family: Roboto;\">Navigations</h5>\n        <ul class=\"list-unstyled quick-links\">\n\n          <li><a routerLink=\"/about-us\" class=\"about\">\n              <font color=\"white\">AboutUs</font>\n            </a></li>\n          <li><a routerLink=\"/amanservices\" class=\"about\">\n              <font color=\"white\">Services</font>\n            </a></li>\n          <li><a routerLink=\"/sitemap\" class=\"about\">\n              <font color=\"white\">Sitemap</font>\n            </a></li>\n          <li><a routerLink=\"/contactus\" class=\"about\">\n              <font color=\"white\">ContactUs</font>\n            </a></li>\n          <li><a routerLink=\"/privacy\" class=\"about\">\n              <font color=\"white\">Privacy Policy</font>\n            </a></li>\n        </ul>\n      </div>\n\n      <!-- <div class=\"col-sm-3\">\n                                     <h5 class=\"home\">Support</h5>\n                                     <ul class=\"list-unstyled quick-links\">\n                                       <li><a class=\"about\"><font color=\"white\">Privacy Policy</font></a></li>\n                                       <li><a class=\"about\"><font color=\"white\">Disclaimer</font></a></li>\n                                       <li><a class=\"about\"><font color=\"white\">Terms and Condition</font></a></li>\n                                       <li><a class=\"about\"><font color=\"white\">Protecting Lives and Property</font></a></li>\n                          \n                                     </ul>\n                                   </div> -->\n      <div class=\"col-sm-2\">\n        <h5 class=\"home\" style=\"color:white;font-family: Roboto;\">Company Address:</h5>\n        <ul class=\"list-unstyled quick-links\">\n          <li>\n            <p class=\"about\">\n              <font color=\"white\">Tower 400 18th Floor,</font>\n              <br>\n              <font color=\"white\"> Mina Road Sharjah,</font>\n              <br>\n              <font color=\"white\"> PO Box 4648 Sharjah - UAE </font>\n              <br>\n              <font color=\"white\">Phone: +971 6 506 6555</font>\n              <br>\n              <font color=\"white\">Fax: +971 6 572 2331</font>\n              <br>\n              <font color=\"white\">Email:helpdesk@saned.ae</font>\n              <br>\n              <a routerLink=\"login\">\n                <font color=\"white\">Website:www.saned.ae</font>\n              </a>\n            </p>\n          </li>\n        </ul>\n      </div>\n      <div class=\"col-sm-3 \">\n        <img src=\"./assets/map.png\" srcset=\"./assets/map@2x.png 2x,\n      ./assets/map@3x.png 3x\" class=\"img-responsive\">\n      </div>\n      <div class=\"col-sm-3 col-sm-2\">\n        <p style=\"color:white; font-family: Roboto;\n                                  font-size: 14px;\">Follow us\n          <a><i class=\"fa fa-linkedin-square fa-3x social\" style=\"color:#007bb5\"></i></a>\n          <a><i class=\"fa fa-twitter-square fa-3x social\" style=\"color:#55ACEE\"></i></a>\n          <a><i class=\"fa fa-facebook-square fa-3x social\" style=\"color:#3B5998\"></i></a>\n          <a><i class=\"fa fa-instagram square fa-3x social\" style=\"color:#55ACEE\"></i></a>\n          <h6 style=\"color:white;font-family: Roboto;\n                                    font-size: 14px;\">Subscribe\n            to\n            Our\n            Newsletter</h6>\n          <div class=\"input-group mb-3\">\n\n            <input type=\"email\" name=\"email_id\" [(ngModel)]=\"model.email_id\" #name=\"ngModel\" id=\"email_id\" style=\"background: black;\n                                        border-color: #6c757d;vertical-align:9px;color:#bbb;font-family: Roboto\"\n              class=\"form-control\" required placeholder=\"Enter your mail id\" aria-label=\"Recipient's username\"\n              aria-describedby=\"basic-addon2\">\n\n            <div class=\"input-group-append\">\n\n              <button class=\"btn btn-outline-secondary\" type=\"button\">\n                <font style=\"color:#ff0000;font-family: Roboto\">Subscribe</font>\n              </button>\n            </div>\n          </div>\n          <div class=\"col-md-14\" style=\"margin-left: -462px;color: white\">Website in construction mode</div>\n      </div>\n      <!-- <div class=\"col-md-2\"></div> -->\n\n      <hr class=\"col-md-8\" style=\"background:white\">\n    </div>\n\n\n    <div class=\"footer\">\n      <div>\n        <p style=\" font-family: Roboto;\n                                  font-size: 12px;\">By continuing past this\n          page,\n          you\n          agree\n          to our\n          Terms of Service, Cookie Policy, Privacy Policy and\n          Content Policies. © 2019.</p>\n      </div>\n\n    </div>\n    <br>\n  </div>\n  <!-- ================footer  english end== -->\n\n</div>\n\n\n<!-- ====Arabic -->\n\n\n\n<!------ Include the above in your HEAD tag ---------->\n\n\n<!-- <div class=\"col\">\n  <script>\n    keyPress(event: any) {\n      const pattern = /[0-9\\+\\-\\ ]/;\n\n      let inputChar = String.fromCharCode(event.charCode);\n      if (event.keyCode != 8 && !pattern.test(inputChar)) {\n        event.preventDefault();\n      }\n    }\n    </script>\n</div> -->\n<script>\n  var app = angular.module(\"myApp\", []);\n  app.controller(\"formCtrl\", ['$scope', function ($scope) {\n    $scope.ph_numbr = /^\\+?\\d{10}$/;\n    $scope.eml_add = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$/;\n  }]);\n</script>\n\n\n<router-outlet></router-outlet>\n\n<!-- </div> -->"

/***/ }),

/***/ "./src/app/register-form/register-form.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/register-form/register-form.component.ts ***!
  \**********************************************************/
/*! exports provided: RegisterFormComponent, AppModalContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterFormComponent", function() { return RegisterFormComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModalContentComponent", function() { return AppModalContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { getMaxListeners } from 'cluster';
var RegisterFormComponent = /** @class */ (function () {
    function RegisterFormComponent(apiService, router) {
        this.apiService = apiService;
        this.router = router;
        // en public;
        // powers = ['Really Smart', 'Super Flexible',
        //           'Super Hot', 'Weather Changer'];
        // model = new RegisterForm(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
        this.model = {};
        this.data = {};
        this.submitted = {};
        this.onSubmit = {};
    }
    RegisterFormComponent.prototype.ngOnInit = function () {
    };
    RegisterFormComponent.prototype.keyPress = function (event) {
        var pattern = /[0-9\+\-\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    RegisterFormComponent.prototype.createContact = function (model) {
        var _this = this;
        this.apiService.createContact(model).subscribe(function (response) {
            _this.data = response;
            if (_this.data.Message == "User Already Registered") {
                console.log("data=====>", _this.data);
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()(_this.data.Message + "<br>" + "مستخدم مسجل بالفعل");
            }
            else if (_this.data.Message == "please check your email for one time password") {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()(_this.data.Message);
                document.getElementById('id01').style.display = 'block';
            }
            else if (_this.data.Message == "Please provide Mandatory fields") {
                // swal("Please fill the Mandatory fields" + "<br>" + "يرجى ملء الحقول الإلزامية")
            }
            // this.router.navigate(['/login']);
        });
    };
    ;
    RegisterFormComponent.prototype.newsletter = function (model) {
        var _this = this;
        this.apiService.newsletter(model).subscribe(function (response) {
            _this.data = response;
            console.log(_this.data);
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()(_this.data.Message + "<br>" + "اشتركت بنجاح في النشرة الإخبارية");
        });
    };
    ;
    RegisterFormComponent.prototype.emailotpverification = function (model) {
        var _this = this;
        this.apiService.emailotpverification(model).subscribe(function (response) {
            _this.data = response;
            console.log("data=====>", _this.data.message);
            if (_this.data.message == "You are successfully registered") {
                console.log("data=====>", _this.data);
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()("Registration Successful" + "<br>" + "التسجيل ناجح");
                _this.router.navigate(['/login']);
            }
            else if (_this.data.message == "Invalid one time password") {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()("Invalid one time password" + "<br>" + "كلمة مرور غير صالحة مرة واحدة");
            }
        });
    };
    ;
    RegisterFormComponent.prototype.sendotp = function (model) {
        var _this = this;
        this.apiService.sendotp(model).subscribe(function (response) {
            _this.data = response;
            if (_this.data.code = '200') {
                console.log("data=====>", _this.data);
                //   alert('OTP sent to email' );
            }
            // this.router.navigate(['/login']);
        });
    };
    ;
    RegisterFormComponent.prototype.backhome = function () {
        this.router.navigate(['/login']);
    };
    RegisterFormComponent.prototype.resolved = function (captchaResponse) {
        console.log("Resolved captcha with response " + captchaResponse + ":");
    };
    RegisterFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register-form',
            template: __webpack_require__(/*! ./register-form.component.html */ "./src/app/register-form/register-form.component.html"),
            styles: [__webpack_require__(/*! ./register-form.component.css */ "./src/app/register-form/register-form.component.css")],
            styles: ["\n      .error { color: crimson; }\n      .success { color: green; }\n  "],
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["APIService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RegisterFormComponent);
    return RegisterFormComponent;
}());

var AppModalContentComponent = /** @class */ (function () {
    function AppModalContentComponent() {
    }
    return AppModalContentComponent;
}());



/***/ }),

/***/ "./src/app/salamaservices-arabic/salamaservices-arabic.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/salamaservices-arabic/salamaservices-arabic.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".intro-2 {\n  background: url(\"/assets/hero_image1.png\")no-repeat center center;\n  background-size: cover;\n  height: 635px;\n}\n\n.container1 {\n  background: black;\n  color: white\n}\n\n.footer {\n  /* position: fixed; */\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background-color: black;\n  color: white;\n  text-align: center;\n  /* height: 75px; */\n}\n\n.container {\n  background: black;\n  color: white\n}\n\n.social:hover {\n  -webkit-transform: scale(1.1);\n  -moz-transform: scale(1.1);\n  -o-transform: scale(1.1);\n}\n\n.social {\n  -webkit-transform: scale(0.8);\n  /* Browser Variations: */\n\n  -moz-transform: scale(0.8);\n  -o-transform: scale(0.8);\n  -webkit-transition-duration: 0.5s;\n  -moz-transition-duration: 0.5s;\n  -o-transition-duration: 0.5s;\n}\n\n.fa {\n  padding: 20px;\n  font-size: 30px;\n  width: 30px;\n  text-align: center;\n  text-decoration: none;\n  border-radius: 50%;\n}\n\n.img-thumbnail {\n  background: black;\n  border-color: black\n}\n\n.home {\n  font-family: Roboto-Bold;\n  font-size: 16px;\n  line-height: 14px;\n  letter-spacing: 0;\n}\n\n.about {\n  font-family: Roboto;\n  font-size: 13px;\n  line-height: 15px;\n  letter-spacing: 0;\n}\n\n/* ===========================footer style end================ */\n\nnav {\n  width: 100%;\n  height: 50px;\n  background: rgba(0, 0, 0, .8);\n  border-top: 1px solid rgba(255, 255);\n  border-bottom: 1px solid rgba(255, 255);\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0px;\n  z-index: 99;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: sans-serif;\n  /* background: #000; */\n}\n\nheader {\n  padding: 10px 100px;\n  box-sizing: border-box;\n}\n\nsection {\n  width: 100%;\n  height: 100vh;\n}\n\n.dropdown {\n  float: left;\n  overflow: hidden;\n}\n\n.dropdown .dropbtn {\n  font-size: 16px;\n  border: none;\n  outline: none;\n  color: white;\n  padding: 14px 16px;\n  background-color: inherit;\n  font-family: Roboto;\n  margin: 0;\n}\n\n.navbar a:hover,\n.dropdown:hover .dropbtn {\n  /* background-color: red; */\n}\n\n.dropdown-content {\n  display: block;\n  position: absolute;\n  background-color: red;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n}\n\n.dropdown-content a {\n  float: none;\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n  text-align: left;\n}\n\n.dropdown-content a:hover {\n  background-color: #ddd;\n}\n\nul {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n\nul li a {\n  text-decoration: none;\n  color: #e74c3c;\n  font-family: Roboto;\n  /* font-size: 18px; */\n}\n\n.navigation {\n  background-color: #35353500;\n  /* width: 75%; */\n  margin: 20px auto;\n  min-height: 50px;\n}\n\n.navigation>li {\n  float: left;\n  padding: 4 10px;\n}\n\n.navigation>li>a {\n  line-height: 50px;\n  color: #FFF;\n}\n\n.navigation .menu {\n  position: relative\n}\n\n.navigation .menu .submenu {\n  position: absolute;\n  /* width: 200px; */\n  box-shadow: 0px 1px 1px #CCC;\n  display: none;\n  transition: all .5s ease-in-out;\n}\n\n.navigation .menu:hover .submenu {\n  display: block\n}\n\n.navigation .menu .submenu:before {\n  content: \"\";\n  position: absolute;\n  display: block;\n  border-width: 0 6px 6px 6px;\n  border-style: solid;\n  border-color: #FFF transparent;\n  top: -6px;\n  left: 5px\n}\n\n.navigation .menu .submenu li {\n  padding: 5px 10px;\n  transition: all .5s ease-in-out;\n}\n\n.navigation .menu .submenu li:hover {\n  background-color: #e74c3c;\n}\n\n.navigation .menu .submenu li:hover a {\n  color: #FFF;\n  /* padding: 0 11px; */\n}\n\n.dropdown:hover .dropdown-content {\n  display: block;\n}\n\nnav {\n  width: 100%;\n  height: 50px;\n  background: rgba(0, 0, 0, .8);\n  border-top: 1px solid rgba(255, 255);\n  border-bottom: 1px solid rgba(255, 255);\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0px;\n  z-index: 99\n}\n\nnav ul {\n  display: flex;\n  margin: 0px;\n  padding: 0px;\n  float: right;\n}\n\nnav ul li {\n  list-style: none;\n}\n\nnav ul {\n  display: flex;\n\n  padding: 0px;\n  /* float: ; */\n}\n\nnav ul li a {\n  display: block;\n  color: #fff;\n  padding: 0 35px;\n  text-decoration: none;\n  text-transform: uppercase;\n  font-weight: bold;\n  line-height: 50px;\n\n}\n\n.aboutus {\n  background: url(\"/assets/group-4.png\")no-repeat center center;\n  /* background-size: cover; */\n  height: 330px;\n  border-radius: 18px;\n  \n}\n\n.Sharjah-Asset-Manage {\n/* width: 535px; */\n/* height: 283px; */\nfont-family: GeezaPro;\nfont-size: 16px;\nfont-weight: normal;\nfont-style: normal;\nfont-stretch: normal;\nline-height: normal;\nletter-spacing: normal;\ncolor: #333\n\n}\n\n.spacer {\nheight: 100px;\n}\n\n.Who-We-Are-Aman-is-a {\n  width: 733px;\n  height: 459px;\n  font-family: GeezaPro;\n  font-size: 18px;\n  text-align: justify;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: var(--black);\n}\n\n.Who-We-Are-Aman-is-a .text-style-1 {\n  font-size: 24px;\n}\n\n/* ===align= start=========== */\n\n.about-us{\n  width: 280px;\n  height: 100px;\n  font-family: GeezaPro;\n  font-size: 60px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #ffffff;\n}\n\n/* ============Navbar start======= */\n\n.homeservice{\n  width: 220px;\n  height: 52px;\n  font-family: GeezaPro;\n  font-size: 18px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #ffffff;\n}\n\n.about-us1{\n  \n    width: 143px;\n    height: 52px;\n    font-family: GeezaPro;\n    font-size: 18px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #ffffff;\n    margin-right: -39px;\n  \n}\n\n.services{\n  width: 70px;\n  height: 49px;\n  font-family: GeezaPro;\n  font-size: 18px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #ffffff;\n}\n\n.supplier{\n  width: 100px;\n  height: 25px;\n  font-family: GeezaPro;\n  font-size: 18px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #ffffff;\n}\n\n.contactus{\nwidth: 224px;\nheight: 76px;\nfont-family: GeezaPro;\nfont-size: 18px;\nfont-weight: normal;\nfont-style: normal;\nfont-stretch: normal;\nline-height: normal;\nletter-spacing: normal;\ncolor: #ffffff;\nmargin-right: -137px\n}\n\n.Rectangle-2 {\nheight: 35px;\n  width: 100px;\nborder-radius: 5px;\nbackground-color: #ff0000;\n}\n\n/* ========== navabar end=========== */\n\n.content{\n/* width: 535px; */\n/* height: 127px; */\nfont-family: GeezaPro;\nfont-size: 18px;\nfont-weight: normal;\nfont-style: normal;\nfont-stretch: normal;\nline-height: normal;\nletter-spacing: normal;\ntext-align: right;\ncolor: var(--black);\n}\n\n.vision{\n/* width: 535px; */\n/* height: 26px; */\nfont-family: GeezaPro;\nfont-size: 18px;\nfont-weight: bold;\nfont-style: normal;\nfont-stretch: normal;\nline-height: normal;\nletter-spacing: normal;\ntext-align: right;\n/* color: var(--black); */\n}\n\n.vision-content{\n/* width: 519px; */\n/* height: 61px; */\nfont-family: GeezaPro;\nfont-size: 18px;\nfont-weight: normal;\nfont-style: normal;\nfont-stretch: normal;\nline-height: normal;\nletter-spacing: normal;\ntext-align: right;\n/* color: var(--black); */\n}\n\n.mission {\n/* width: 56px; */\nheight: 40px;\nfont-family: GeezaPro;\nfont-size: 18px;\nfont-weight: bold;\nfont-style: normal;\nfont-stretch: normal;\nline-height: 2.22;\nletter-spacing: normal;\ntext-align: right;\ncolor: var(--black);\n}\n\n.mission-content{\n/* width: 561px; */\nheight: 130px;\nfont-family: GeezaPro;\nfont-size: 18px;\nfont-weight: normal;\nfont-style: normal;\nfont-stretch: normal;\nline-height: normal;\nletter-spacing: normal;\ntext-align: right;\ncolor: var(--black);\n}\n\n.Rectangle-5-Copy {\nwidth: 292px;\nheight: 59px;\nborder-radius: 8px;\nbackground-color: #f34235;\n}\n\n/* =footer start== */\n\n.footer1{\nwidth: 90px;\nheight: 190px;\nfont-family: GeezaPro;\nfont-size: 12px;\nfont-weight: bold;\nfont-style: normal;\nfont-stretch: normal;\nline-height: 1.67;\nletter-spacing: normal;\ncolor: #ffffff;\n}\n\n.navfooter{\nwidth: 63px;\nheight: 9px;\nfont-family: GeezaPro;\nfont-size: 12px;\nfont-weight: bold;\nfont-style: normal;\nfont-stretch: normal;\nline-height: 1.67;\nletter-spacing: normal;\ncolor: #ffffff;\nmargin-right: 25px;\n}\n\n.footer2{\nwidth: 281px;\nheight: 164px;\nfont-family: GeezaPro;\nfont-size: 12px;\nfont-weight: bold;\nfont-style: normal;\nfont-stretch: normal;\nline-height: 2.25;\nletter-spacing: normal;\ncolor: #ffffff;\n}\n\n.subscribe{\nwidth: 144px;\nheight: 29px;\nfont-family: GeezaPro;\nfont-size: 12px;\nfont-weight: bold;\nfont-style: normal;\nfont-stretch: normal;\nline-height: normal;\nletter-spacing: normal;\ncolor: #ffffff;\n}\n\n.lastfoot{\nwidth: 1209px;\nheight: 30px;\nfont-family: GeezaPro;\nfont-size: 12px;\nfont-weight: bold;\nfont-style: normal;\nfont-stretch: normal;\nline-height: normal;\nletter-spacing: normal;\ncolor: #9b9b9b;\n}\n\n/* =foter end== */\n\n/* ===Mobile navbar start=========== */\n\n@media screen and (min-width: 320px) and (max-width: 767px){\n.nav-bg {\n  background-color: rgba(0, 0, 0, 0.65) !important;\n}\n\n.Rectangle-5-Copy {\n  width: 150px;\n  height: 59px;\n  border-radius: 8px;\n  background-color: #f34235;\n  }\n\n\n.pt-120{\n  position: relative !important;\n  left: 306px !important;\n\n}\n.mt-414{\n  margin-top: 3px !important;\n}\n\n.mr-5, .mx-5 {\n  margin-right: 4rem!important;\n}\n\n.pad_12{\npadding: 0 12px;\n}\n\n}\n\n@media screen and (max-width: 768px){\n.nav-bg {\n  /* background-color: rgba(0, 0, 0, 0.65) !important; */\n}\n\n.navbar-expand-md .navbar-nav .nav-link {\n  padding-right: .0rem !important;\n  padding-left: .0rem !important;\n}\n\n.pt-120{\n  position: relative !important;\n  left: 232px \n\n}\n.mt-414{\n  margin-top: 3px !important;\n}\n\n.mr-5, .mx-5 {\n  margin-right: 5rem!important;\n}\n\n\n\n\nli[_ngcontent-c1] {\nfloat: left;\npadding: 0 12px !important;\n}\n\n\n}\n\n@media screen and (max-width: 1024px){\n.nav-bg {\n  /* background-color: rgba(0, 0, 0, 0.65) !important; */\n}\n\n\n\n.pt-120{\n  position: relative !important;\n  left: 302px \n\n}\n.mt-414{\n  margin-top: 3px !important;\n}\n\n.mr-5, .mx-5 {\n  margin-right: 6rem!important;\n}\n\n\n\n\nli[_ngcontent-c1] {\nfloat: left;\npadding: 0 12px !important;\n}\n\n\n}\n\n/* =========Mobile navbar End========== */\n\n/* ===========HEADING STYLE=========== */\n\n.saned_para{\n  font-size:16px;\n  color: #333; \n  font-family: GeezaPro;\n}\n\n.saned_heading{\n  font-size: 28px;\n  font-family: GeezaPro;\n\n}\n\n/* ==============HEADING STYLE========== */\n\n/* ======= align end======= */"

/***/ }),

/***/ "./src/app/salamaservices-arabic/salamaservices-arabic.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/salamaservices-arabic/salamaservices-arabic.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <button (click)=\"switchLanguage('arabic')\">Arabic</button>\n<button (click)=\"switchLanguage('en')\">English</button> -->\n\n<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js\"></script>\n<script src=\"//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n<link href=\"https://fonts.googleapis.com/css?family=Roboto\" rel=\"stylesheet\">\n<style>\n  @import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');\n\n  /* ==============footer style start ========= */\n  section.sec1 {\n    background: url(natures-temples.png);\n    background-size: cover;\n  }\n\n  section.banner {\n    background: url(Group.png);\n    background-size: cover;\n    margin-left: 15px;\n  }\n\n  section.sec2 {\n    padding: 100px;\n    box-sizing: border-box;\n  }\n</style>\n\n\n<app-nav-bg [head]=\"head\" [bg]=\"bg\" [nav_arabic]=\"nav_arabic\"></app-nav-bg>\n\n<div class=\"container-fluid\">\n\n\n  <div class=\" col-md-14 my-4\" dir=\"rtl\">\n    <!-- <h3 class=\"col-sm-12 Welcome-to-Aman-port\"><b>“Caring for the nation by helping protect lives and property from fire and life safety events is our primary goal.“</b></h3> -->\n\n    <div class=\"card col-md-12\" style=\"border-radius: 18px;\n    background: white;\" dir=\"rtl\">\n      <br> <br>\n      <div class=\"row\" dir=\"rtl\">\n        <div class=\"row\" dir=\"rtl\">\n          <div class=\"col-md-1\" dir=\"rtl\">\n            <!-- <img src=\"/assets/1.png\" srcset=\"/assets/1@2x.png 2x,\n                  /assets/1@3x.png 3x\" class=\"layer\"> -->\n            <img src=\"/assets/noun-connection-657013.png\" srcset=\"/assets/noun-connection-657013@2x.png 2x,\n                  /assets/noun-connection-657013@3x.png 3x\" class=\"layer\">\n          </div>\n          <div class=\"col-md-4 ml-3\">\n\n\n            <div class=\"text-right\">\n              <a class=\"saned_heading text-justify\">نبذة عن سلامة\n\n              </a>\n            </div>\n            <p class=\"saned_para text-justify  \">\n              سلامة هو عبارة عن مركز تدريب عالي المستوى تم تأسيسه بالتعاون بين هيئة الوقاية والسلامة في إمارة الشارقة\n              وشركة ساند لخدمة القطاعات المختلفة في الإمارة، حيث تقدم برامج تدريب متخصصة في مجال الوقاية والسلامة\n              للعاملين\n              داخل القطاع الخاص والقطاع العام. وﺳيقوم المرﻛﺰ بتدرﻳﺐ الكادر الفني على ﺗﻠﻘﻲ ومعالجة وإدارة الأمور المتعلقة\n              بالصحة والسلامة المهنية وﺗﻘﺪﻳﻢ ﺗﻘﺎرﻳﺮ عند الحاجة.\n\n\n\n            </p>\n          </div>\n          <div class=\"col-md-1\"></div>\n          <div class=\"col-md-1\">\n            <img src=\"/assets/2.png\" srcset=\"/assets/2@2x.png 2x,\n                    /assets/2@3x.png 3x\" class=\"layer\">\n          </div>\n          <div class=\"col-md-4\">\n            <div class=\"text-right\">\n              <a class=\"saned_heading text-justify\">الأهداف المرجوة من سلامة\n\n              </a>\n            </div>\n            <p class=\"saned_para text-justify \">من الأهداف المرجوة من سلامة هو تعزيز نوعية الحياة في إمارة الشارقة من\n              خلال\n              تثقيف\n              القوى العاملة بأعلى معايير الحماية والسلامة المعترف بها دولياً في مكان العمل. وتقليل مخاطر الإصابة\n              والحوادث\n              أثناء العمل.\n\n\n\n          </div>\n        </div>\n        <!-- </div> -->\n\n\n        <!-- ====test======== -->\n\n        <div class=\"row\" dir=\"rtl\">\n          <div class=\"col-md-1\">\n            <img src=\"./assets/3.png\" srcset=\"./assets/3@2x.png 2x,\n                ./assets/3@3x.png 3x\" class=\"img-responsive\">\n          </div>\n          <div class=\"col-md-4 ml-3\">\n\n            <div class=\"text-right\">\n\n              <a class=\"saned_heading text-justify\">المعلومات التقنية عن سلامة\n\n              </a>\n            </div>\n            <p class=\"saned_para text-justify\">يسهّل تطبيق سلامة الإلكتروني التابع لهيئة الوقاية والسلامة على إدارات\n              الموارد\n              البشرية بالشركات تسجيل شركاتهم وموظفيهم الذين يرغبون في تدريبهم ، وتتبع نتائجهم وشهاداتهم.\n\n              يمكن التواصل مع الجهات المعنية عن طريق الاتصال التابع لنا على مدار اليوم طوال أيام الأسبوع والإجابة عن أي\n              استفسارات على الرقم التالي: 600351513\n              <br>\n              <br>\n              الموقع الإلكتروني و تطبيق الجوال قيد التنفيذ وسيتم إنجازها قريبا.\n            </p>\n          </div>\n          <div class=\"col-md-1\"></div>\n          <div class=\"col-md-1\">\n            <img src=\"/assets/4.png\" srcset=\"/assets/4@2x.png 2x,\n                /assets/4@3x.png 3x\" class=\"img-responsive\">\n          </div>\n          <div class=\"col-md-4\">\n            <div class=\"text-right\">\n\n              <a class=\"saned_para saned_heading text-justify\">الرسوم</a>\n            </div>\n            <p class=\"text-justify \">مقابل رسوم ثابتة ، سوف يتلقى الموظف تدريباً شخصياً لمدة يوم واحد يتم تدريسه من قبل\n              مدرب معتمد من قبل هيئة الوقاية والسلامة. سوف يحصلون على شهادة إتمام عند اجتياز الامتحان الذي سيتم بعد\n              التدريب.\n\n\n            </p>\n\n          </div>\n\n\n\n\n        </div>\n      </div>\n      <div class=\"my-3 text-center\">\n        <a href=\"http://eservices.spsa.ae/register_ar\" target=\"_blank\">\n          <button type=\"submit\" class=\"Rectangle-5-Copy\" routerLink=\"register-form-arabic\">سجل هنا</button>\n        </a>\n\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<app-footer></app-footer>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/salamaservices-arabic/salamaservices-arabic.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/salamaservices-arabic/salamaservices-arabic.component.ts ***!
  \**************************************************************************/
/*! exports provided: SalamaservicesArabicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalamaservicesArabicComponent", function() { return SalamaservicesArabicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SalamaservicesArabicComponent = /** @class */ (function () {
    function SalamaservicesArabicComponent(apiService, router) {
        this.apiService = apiService;
        this.router = router;
        this.navbarOpen = false;
        this.head = "سلامة";
        this.bg = "bg_img";
        this.nav_arabic = "/salamaservices";
        this.model = {};
        this.data = {};
        this.Lang = {};
    }
    SalamaservicesArabicComponent.prototype.toggleNavbar = function () {
        this.navbarOpen = !this.navbarOpen;
    };
    SalamaservicesArabicComponent.prototype.ngOnInit = function () {
    };
    SalamaservicesArabicComponent.prototype.newsletter = function (model) {
        var _this = this;
        this.apiService.newsletter(model).subscribe(function (response) {
            _this.data = response;
            console.log(_this.data);
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()(_this.data.Message + "<br>" + "اشتركت بنجاح في النشرة الإخبارية");
        });
    };
    ;
    SalamaservicesArabicComponent.prototype.supplierregister = function (model) {
        var _this = this;
        this.apiService.supplierregister(model).subscribe(function (response) {
            _this.data = response;
            if (_this.data.Message == "User Already Registered") {
                console.log("data=====>", _this.data);
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()(_this.data.Message + "<br>" + "مستخدم مسجل بالفعل");
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()("Please check your email");
                document.getElementById('id01').style.display = 'block';
            }
            // this.router.navigate(['/login']);
        });
    };
    ;
    SalamaservicesArabicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-salamaservices-arabic',
            template: __webpack_require__(/*! ./salamaservices-arabic.component.html */ "./src/app/salamaservices-arabic/salamaservices-arabic.component.html"),
            styles: [__webpack_require__(/*! ./salamaservices-arabic.component.css */ "./src/app/salamaservices-arabic/salamaservices-arabic.component.css")]
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["APIService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SalamaservicesArabicComponent);
    return SalamaservicesArabicComponent;
}());



/***/ }),

/***/ "./src/app/salamaservices/salamaservices.component.css":
/*!*************************************************************!*\
  !*** ./src/app/salamaservices/salamaservices.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');\n\n/* ==============footer style start ========= */\n\n.container1 {\n  background: black;\n  color: white\n}\n\n.footer {\n  /* position: fixed; */\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background-color: black;\n  color: white;\n  text-align: center;\n  /* height: 75px; */\n}\n\n.container {\n  background: black;\n  color: white\n}\n\n.social:hover {\n  -webkit-transform: scale(1.1);\n  -moz-transform: scale(1.1);\n  -o-transform: scale(1.1);\n}\n\n.social {\n  -webkit-transform: scale(0.8);\n  /* Browser Variations: */\n\n  -moz-transform: scale(0.8);\n  -o-transform: scale(0.8);\n  -webkit-transition-duration: 0.5s;\n  -moz-transition-duration: 0.5s;\n  -o-transition-duration: 0.5s;\n}\n\n.fa {\n  padding: 20px;\n  font-size: 30px;\n  width: 30px;\n  text-align: center;\n  text-decoration: none;\n  border-radius: 50%;\n}\n\n.img-thumbnail {\n  background: black;\n  border-color: black\n}\n\n.home {\n  font-family: Roboto-Bold;\n  font-size: 16px;\n  line-height: 14px;\n  letter-spacing: 0;\n}\n\n.about {\n  font-family: Roboto;\n  font-size: 13px;\n  line-height: 15px;\n  letter-spacing: 0;\n}\n\n/* ===========================footer style end================ */\n\nnav {\n  width: 100%;\n  height: 50px;\n  background: rgba(0, 0, 0, .8);\n  border-top: 1px solid rgba(255, 255);\n  border-bottom: 1px solid rgba(255, 255);\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0px;\n  z-index: 99;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: sans-serif;\n  /* background: #000; */\n}\n\nheader {\n  padding: 10px 100px;\n  box-sizing: border-box;\n}\n\nsection {\n  width: 100%;\n  height: 100vh;\n}\n\n.dropdown {\n  float: left;\n  overflow: hidden;\n}\n\n.dropdown .dropbtn {\n  font-size: 16px;\n  border: none;\n  outline: none;\n  color: white;\n  padding: 14px 16px;\n  background-color: inherit;\n  font-family: Roboto;\n  margin: 0;\n}\n\n.navbar a:hover,\n.dropdown:hover .dropbtn {\n  /* background-color: red; */\n}\n\n.dropdown-content {\n  display: block;\n  position: absolute;\n  background-color: red;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n}\n\n.dropdown-content a {\n  float: none;\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n  text-align: left;\n}\n\n.dropdown-content a:hover {\n  background-color: #ddd;\n}\n\nul {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n\nul li a {\n  text-decoration: none;\n  color: #e74c3c;\n  font-family: Roboto;\n  /* font-size: 18px; */\n}\n\n.navigation {\n  background-color: #35353500;\n  width: 75%;\n  margin: 20px auto;\n  min-height: 50px;\n}\n\n.navigation>li {\n  float: left;\n  padding: 0 20px;\n}\n\n.navigation>li>a {\n  line-height: 50px;\n  color: #FFF;\n}\n\n.navigation .menu {\n  position: relative\n}\n\n.navigation .menu .submenu {\n  position: absolute;\n  /* width: 200px; */\n  box-shadow: 0px 1px 1px #CCC;\n  display: none;\n  transition: all .5s ease-in-out;\n\n}\n\n.navigation .menu:hover .submenu {\n  display: block;\n\n}\n\n.navigation .menu .submenu:before {\n  content: \"\";\n  position: absolute;\n  display: block;\n  border-width: 0 6px 6px 6px;\n  border-style: solid;\n  border-color: #FFF transparent;\n  top: -6px;\n  right: 5px;\n\n}\n\n.dropdown:hover .dropdown-content {\n  display: block;\n}\n\nnav {\n  width: 100%;\n  height: 50px;\n  background: rgba(0, 0, 0, .8);\n  border-top: 1px solid rgba(255, 255);\n  border-bottom: 1px solid rgba(255, 255);\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0px;\n  z-index: 99\n}\n\nnav ul {\n  display: flex;\n  margin: 0px;\n  padding: 0px;\n  float: right;\n}\n\nnav ul li {\n  list-style: none;\n}\n\nnav ul {\n  display: flex;\n\n  padding: 0px;\n  /* float: ; */\n}\n\nnav ul li a {\n  display: block;\n  color: #fff;\n  padding: 0 20px;\n  text-decoration: none;\n  text-transform: uppercase;\n  font-weight: bold;\n  line-height: 50px;\n\n}\n\n.intro-2 {\n  background: url(\"/assets/hero_image.png\")no-repeat center center;\n  background-size: cover;\n  height: 635px;\n}\n\n.aboutus {\n  background: url(\"/assets/group-4.png\")no-repeat center center;\n  /* background-size: cover; */\n  height: 330px;\n  border-radius: 18px;\n  \n}\n\n/* ===========aliign start============ */\n\n/* ====================responsive================= */\n\n.mt_20{\nmargin-top: 0px;\n}\n\n.wt_237{\nwidth: 237px;\n}\n\n.wt-con{\nwidth: 232px;\n}\n\n.wt_140{\nwidth: 140% !important;\n}\n\n/* mobile media query */\n\n@media screen and (min-device-width: 320px) and (max-device-width: 760px){\n.nav-bg {\nbackground-color: rgba(0, 0, 0, 0.65) !important;\n}\n\n.pt-120{\nposition: relative;\nright: 153px;\n}\n.mt-414{\nmargin-top: 0px !important;\n}\n.ft_18 {\nfont-size: 18px;\n}\n\n\n\n}\n\n/* css for ipad */\n\n@media screen and (min-device-width: 768px) and (max-device-width: 1022px){\n.nav-bg {\n/* background-color: rgba(0, 0, 0, 0.65) !important; */\n}\n.maxwt_19{\nmax-width: 19%;\n}\n.wt_135{\nwidth: 135px !important;\n}\n.map_wt{\nwidth: 175px !important;\n}\n.ml_135{\nmargin-left: 0px !important;\n}\n.ml_16{\nmargin-left: -16px !important;\n}\n.logo_wt{\nwidth: 109px;\n}\n.col-sm-2{\nwidth : 0% ! important;\n}\n\n.mt_20{\n\n  margin-top: 4px !important; \n\nshape-margin: 0px !important;\n}\n\n.ht_80{\nheight:54px !important\n}\n\n.pt-120{\nposition: relative;\nright: 79px;\n}\n.mt-414{\nmargin-top:0px !important;\n}\n\n.ml-5, .mx-5 {\nmargin-left: 2.2rem !important;\n}\n\n.pad_0{\npadding:0 0px !important;\n}\n.ft_18 {\n\n\nfont-size: 30px;\n}\n\n.wt_106{\nwidth: 106% !important;\n}\n\n\n}\n\n@media screen and (max-device-width: 1024px){\n.nav-bg {\n/* background-color: rgba(0, 0, 0, 0.65) !important; */\n}\n.maxwt_19{\nmax-width: 19%;\n}\n.wt_135{\nwidth: 135px !important;\n}\n.map_wt{\nwidth: 175px !important;\n}\n.ml_135{\nmargin-left: 0px !important;\n}\n/* .ml_16{\nmargin-left: -16px !important;\n} */\n.logo_wt{\nwidth: 109px;\n}\n.col-sm-2{\n/* width : 0% ! important; */\n}\n\n.mt_20{\n\n  margin-top: 4px !important; \n\nshape-margin: 0px !important;\n}\n\n/* .ht_80{\nheight:54px !important\n} */\n\n.pt-120{\nposition: relative;\n/* right: 79px; */\n}\n.mt-414{\nmargin-top:0px !important;\n}\n\n.ml-5, .mx-5 {\nmargin-left: 2.2rem !important;\n}\n\n.pad_0{\npadding:0 0px !important;\n}\n.ft_18 {\nfont-size: 30px;\n}\n\n.wt_106{\nwidth: 106% !important;\n}\n\n\n}\n\n/* =============mobile============ */\n\n.Sign-In {\nwidth: 57px;\nheight: 24px;\nfont-family: Roboto;\nfont-size: 15px;\nfont-weight: normal;\nfont-style: normal;\nfont-stretch: normal;\nline-height: normal;\nletter-spacing: normal;\ncolor: #ffffff;\n}\n\n.Rectangle-2-Copy-2 {\nwidth: 1440px;\nheight: 311px;\nbox-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);\nbackground-image: linear-gradient(65deg, var(--black), var(--black));\n}\n\n.Subscribe {\nwidth: 54px;\nheight: 14px;\nopacity: 0.82;\nfont-family: Roboto;\nfont-size: 12px;\nfont-weight: 500;\nfont-style: normal;\nfont-stretch: normal;\nline-height: normal;\nletter-spacing: normal;\ncolor: #ff0000;\n}\n\n.Enter-your-mail-id {\nwidth: 92px;\nheight: 14px;\nopacity: 0.82;\nfont-family: Roboto;\nfont-size: 12px;\nfont-weight: 300;\nfont-style: normal;\nfont-stretch: normal;\nline-height: normal;\nletter-spacing: normal;\ncolor: #ffffff;\n}\n\n.Shape {\nwidth: 17px;\nheight: 17px;\nbackground-color: #ffffff;\n}\n\n.arabic{\nwidth: 28px;\nheight: 49px;\nfont-family: GeezaPro;\nfont-size: 12px;\nfont-weight: normal;\nfont-style: normal;\nfont-stretch: normal;\nline-height: normal;\nletter-spacing: normal;\ncolor: #ffffff;\n}\n\n.Oval {\nwidth: 9px;\nheight: 9px;\nbackground-color: #ff1100;\n}\n\n.English {\nwidth: 40px;\nheight: 28px;\nfont-family: Roboto;\nfont-size: 12px;\nfont-weight: 500;\nfont-style: normal;\nfont-stretch: normal;\nline-height: normal;\nletter-spacing: normal;\ncolor: #ff1100;\n}\n\n/* ===========navbar start========= */\n\n/* .Rectangle-2 {\nheight: 35px;\n  width: 100px;\n  padding: 0;\nborder-radius: 5px;\nbackground-color: #ff0000;\n}\n.Contact-Us {\nwidth: 90px;\nheight: 24px;\nfont-family: Roboto;\nfont-size: 18px;\nfont-weight: normal;\nfont-style: normal;\nfont-stretch: normal;\nline-height: normal;\nletter-spacing: normal;\ncolor: #ffffff;\n}\n.Suppliers {\nwidth: 77px;\nheight: 24px;\nfont-family: Roboto;\nfont-size: 18px;\nfont-weight: normal;\nfont-style: normal;\nfont-stretch: normal;\nline-height: normal;\nletter-spacing: normal;\ncolor: #ffffff;\n}\n.Services {\nwidth: 70px;\nheight: 24px;\nfont-family: Roboto;\nfont-size: 18px;\nfont-weight: normal;\nfont-style: normal;\nfont-stretch: normal;\nline-height: normal;\nletter-spacing: normal;\ncolor: #ffffff;\n}\n.About-Us-Copy {\nwidth: 75px;\nheight: 24px;\nfont-family: Roboto;\nfont-size: 18px;\nfont-weight: normal;\nfont-style: normal;\nfont-stretch: normal;\nline-height: normal;\nletter-spacing: normal;\ncolor: #ffffff;\n}\n.Home-Copy {\nwidth: 49px;\nheight: 24px;\nfont-family: Roboto;\nfont-size: 18px;\nfont-weight: normal;\nfont-style: normal;\nfont-stretch: normal;\nline-height: normal;\nletter-spacing: normal;\ncolor: #ffffff;\n} */\n\n/* ======navbar end===== */\n\n.Rectangle-5-Copy {\nwidth: 239px;\nheight: 59px;\nborder-radius: 8px;\nbackground-color: #f34235;\n}\n\n.Mission {\nwidth: 79px;\nheight: 48px;\nfont-family: Roboto;\nfont-size: 18px;\nfont-weight: bold;\nfont-style: normal;\nfont-stretch: normal;\nline-height: 2.22;\nletter-spacing: normal;\ncolor: var(--black);\n}\n\n.Utilizing-the-latest {\n/* width: 518px; */\nheight: 100px;\nfont-family: Roboto;\nfont-size: 16px;\nfont-weight: normal;\nfont-style: normal;\nfont-stretch: normal;\nline-height: normal;\nletter-spacing: normal;\ncolor: var(--black);\n}\n\n.To-be-among-the-best {\n/* width: 519px; */\n/* height: 81px; */\nfont-family: Roboto;\nfont-size: 16px;\nfont-weight: normal;\nfont-style: normal;\nfont-stretch: normal;\nline-height: normal;\nletter-spacing: normal;\ncolor: var(--black);\n}\n\n.Vision {\nwidth: 65px;\nheight: 40px;\nfont-family: Roboto;\nfont-size: 18px;\nfont-weight: bold;\nfont-style: normal;\nfont-stretch: normal;\nline-height: 2.22;\nletter-spacing: normal;\ncolor: var(--black);\n}\n\n.Sharjah-Asset-Manage {\n/* width: 535px; */\n/* height: 283px; */\nfont-family: Roboto;\nfont-size: 16px;\nfont-weight: normal;\nfont-style: normal;\nfont-stretch: normal;\nline-height: normal;\nletter-spacing: normal;\n/* color: black */\n}\n\n.reg{\nbackground-color: #ff0000; \nwidth: -webkit-min-content; \nwidth: -moz-min-content; \nwidth: min-content;\npadding: 8px 20px;\n        margin-left:14px;\n        margin-top: -10px;\n        width:123px;\n        height: 41px;\n        border-radius: 5px;\n}\n\n/* ===========align end============== */\n\n.spacer {\nheight: 100px;\n}\n\n.Who-We-Are-Aman-is-a {\n  /* width: 733px; */\n  height: 459px;\n  font-family: Roboto;\n  font-size: 16px;\n  text-align: justify;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: var(--black);\n}\n\n.Who-We-Are-Aman-is-a .text-style-1 {\n  font-size: 24px;\n}\n\n/* //====================text font size */\n\n.WHAT-IS-Aman- {\n  width: 313px;\nheight: 53px;\nfont-family: Roboto;\nfont-size: 33px;\nfont-weight: normal;\nfont-style: normal;\nfont-stretch: normal;\nline-height: 1.18;\nletter-spacing: normal;\ncolor: var(--black);\n}\n\n.Sharjah-Asset-Manage {\n  /* width: 535px; */\n  /* height: 283px; */\n  font-family: Roboto;\n  font-size: 16px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  /* color: black */\n}\n\n/* //====================text font size */"

/***/ }),

/***/ "./src/app/salamaservices/salamaservices.component.html":
/*!**************************************************************!*\
  !*** ./src/app/salamaservices/salamaservices.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-bg-ar [head]=\"head\" [bg]=\"bg\" [nav_arabic]=\"nav_arabic\"></app-nav-bg-ar>\n\n\n<div class=\"container-fluid\">\n\n  <div class=\"\">\n    <br>\n    <div class=\"card\" style=\"border-radius: 18px;background: white;\">\n      <br>\n      <div class=\"row mx-2\">\n        <div class=\"col-md-1\">\n          <!-- <img src=\"/assets/1.png\" srcset=\"/assets/1@2x.png 2x,\n              /assets/1@3x.png 3x\" class=\"layer\"> -->\n          <img src=\"/assets/noun-connection-657013.png\" srcset=\"/assets/noun-connection-657013@2x.png 2x,\n              /assets/noun-connection-657013@3x.png 3x\" class=\"layer\">\n        </div>\n        <div class=\"col-md-5 \">\n\n\n          <a class=\"WHAT-IS-Aman-\">Description</a>\n\n          <p class=\"Sharjah-Asset-Manage text-justify mt-2 ml-1\">SALAMA is a high-level training center established as a\n            collaboration between Sharjah Prevention and Safety Authority (SPSA) and SANED, to serve the various sectors\n            in the Emirate of Sharjah, providing specialized training programs in the prevention and safety of workers\n            within the private and public sectors.\n            <br>\n            <br>\n            The training center will enable citizens to centrally receive, process, manage and report on <b>“labor\n              training on prevention and safety”.</b> </p>\n        </div>\n        <!-- <div class=\"col-md-1\"></div> -->\n        <div class=\"ml-4\"></div>\n        <div class=\"col-md-1\">\n          <img src=\"/assets/2.png\" srcset=\"/assets/2@2x.png 2x,\n                /assets/2@3x.png 3x\" class=\"layer\">\n\n        </div>\n        <div class=\"col-md-4 \">\n          <a class=\"WHAT-IS-Aman-\">Objectives</a>\n\n\n          <p class=\"Sharjah-Asset-Manage text-justify mt-2 ml-1\">\n            Enhance the quality of life in the Emirate of Sharjah by educating the labor force on the highest\n            internationally recognized standards of protection and safety in the workplace. The mission is a <b>Zero\n              Harm Environment.</b>\n          </p>\n\n        </div>\n      </div>\n      <div class=\"row ml-2\">\n        <div class=\"row col-md-12\">\n          <div class=\"col-md-1\">\n            <img src=\"./assets/3.png\" srcset=\"./assets/3@2x.png 2x,\n                ./assets/3@3x.png 3x\" class=\"img-responsive\">\n          </div>\n          <div class=\"col-md-5\">\n\n\n            <a class=\"WHAT-IS-Aman-\">Technical Information</a>\n\n            <p class=\"Sharjah-Asset-Manage text-justify mt-2 ml-1\">The user friendly SPSA Mobile App and SALAMA online\n              registration\n              portal make it easy for the Company Human Resources departments to register their companies, enlist the\n              employees they wish to train, and track their company compliance.\n              <br>\n              <br>\n              Our 24x7 call centre is happy to answer any questions: 600 515153\n\n              <br>\n              <br>\n\n              <i>Website and Mobile App coming soon.</i> </p>\n          </div>\n          <!-- <div class=\"col-md-1\"></div> -->\n          <div class=\"ml-4\"></div>\n          <div class=\"ml-4\"></div>\n          <div class=\"col-md-1\">\n            <img src=\"/assets/4.png\" srcset=\"/assets/4@2x.png 2x,\n                /assets/4@3x.png 3x\" class=\"img-responsive\">\n\n          </div>\n\n          <div class=\"col-md-4 \">\n            <a class=\"WHAT-IS-Aman-\">Commercial Information</a>\n\n\n\n            <p class=\"Sharjah-Asset-Manage text-justify mt-2 ml-1\">\n              For a fixed fee, the employee will receive a one-day, in-person training taught by an instructor that is\n              accredited by the Government of Sharjah Prevention and Safety Authority (SPSA). They will receive a\n              certificate of completion upon passing the exam which will be administered the day of the training.\n            </p>\n\n          </div>\n        </div>\n\n\n      </div>\n      <div class=\"row ml-4\">\n\n\n      </div>\n\n\n      <div class=\"my-3 text-center center\">\n\n        <a href=\"http://eservices.spsa.ae/register_en\" target=\"_blank\">\n          <button type=\"submit\" href=\"\" class=\"Rectangle-5-Copy\" routerLink=\"/http://eservices.spsa.ae\">\n            <font color=\"white\">Register\n              Here</font>\n          </button></a>\n      </div>\n\n    </div>\n\n  </div>\n\n\n\n</div>\n<br>\n\n<!--=====footer english start==-->\n<app-loginv2></app-loginv2>\n<!-- ================footer  english end== -->\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/salamaservices/salamaservices.component.ts":
/*!************************************************************!*\
  !*** ./src/app/salamaservices/salamaservices.component.ts ***!
  \************************************************************/
/*! exports provided: SalamaservicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalamaservicesComponent", function() { return SalamaservicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ng2_simple_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-simple-global */ "./node_modules/ng2-simple-global/index.js");
/* harmony import */ var ng2_simple_global__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_simple_global__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SalamaservicesComponent = /** @class */ (function () {
    function SalamaservicesComponent(apiService, router, sg) {
        this.apiService = apiService;
        this.router = router;
        this.sg = sg;
        this.navbarOpen = false;
        this.head = "Salama";
        this.bg = "bg_img";
        this.nav_arabic = "/salamaservices-arabic";
        this.Lang = {};
        this.model = {};
        this.data = {};
    }
    SalamaservicesComponent.prototype.toggleNavbar = function () {
        this.navbarOpen = !this.navbarOpen;
    };
    SalamaservicesComponent.prototype.ngOnInit = function () {
    };
    SalamaservicesComponent.prototype.newsletter = function (model) {
        var _this = this;
        this.apiService.newsletter(model).subscribe(function (response) {
            _this.data = response;
            console.log(_this.data);
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()(_this.data.Message + "<br>" + "اشتركت بنجاح في النشرة الإخبارية");
        });
    };
    ;
    SalamaservicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-salamaservices',
            template: __webpack_require__(/*! ./salamaservices.component.html */ "./src/app/salamaservices/salamaservices.component.html"),
            styles: [__webpack_require__(/*! ./salamaservices.component.css */ "./src/app/salamaservices/salamaservices.component.css")]
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["APIService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ng2_simple_global__WEBPACK_IMPORTED_MODULE_4__["SimpleGlobal"]])
    ], SalamaservicesComponent);
    return SalamaservicesComponent;
}());



/***/ }),

/***/ "./src/app/sitemap-arabic/sitemap-arabic.component.css":
/*!*************************************************************!*\
  !*** ./src/app/sitemap-arabic/sitemap-arabic.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".intro-2 {\n  background: url(\"/assets/hero_image1.png\")no-repeat center center;\n  background-size: cover;\n  height: 635px;\n}\n\n.aboutus {\n  background: url(\"/assets/group-4.png\")no-repeat center center;\n  /* background-size: cover; */\n  height: 330px;\n  border-radius: 18px;\n  \n}\n\n/* ==============footer style start ========= */\n\n.container1 {\n  background: black;\n  color: white\n}\n\n.footer {\n  /* position: fixed; */\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background-color: black;\n  color: white;\n  text-align: center;\n  /* height: 75px; */\n}\n\n.container {\n  background: black;\n  color: white\n}\n\n.social:hover {\n  -webkit-transform: scale(1.1);\n  -moz-transform: scale(1.1);\n  -o-transform: scale(1.1);\n}\n\n.social {\n  -webkit-transform: scale(0.8);\n  /* Browser Variations: */\n\n  -moz-transform: scale(0.8);\n  -o-transform: scale(0.8);\n  -webkit-transition-duration: 0.5s;\n  -moz-transition-duration: 0.5s;\n  -o-transition-duration: 0.5s;\n}\n\n.fa {\n  padding: 20px;\n  font-size: 30px;\n  width: 30px;\n  text-align: center;\n  text-decoration: none;\n  border-radius: 50%;\n}\n\n.img-thumbnail {\n  background: black;\n  border-color: black\n}\n\n.home {\n  font-family: Roboto-Bold;\n  font-size: 16px;\n  line-height: 14px;\n  letter-spacing: 0;\n}\n\n.about {\n  font-family: Roboto;\n  font-size: 13px;\n  line-height: 15px;\n  letter-spacing: 0;\n}\n\n/* ===========================footer style end================ */\n\nnav {\n  width: 100%;\n  height: 50px;\n  background: rgba(0, 0, 0, .8);\n  border-top: 1px solid rgba(255, 255);\n  border-bottom: 1px solid rgba(255, 255);\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0px;\n  z-index: 99;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: sans-serif;\n  /* background: #000; */\n}\n\nheader {\n  padding: 10px 100px;\n  box-sizing: border-box;\n}\n\nsection {\n  width: 100%;\n  height: 100vh;\n}\n\n.dropdown {\n  float: left;\n  overflow: hidden;\n}\n\n.dropdown .dropbtn {\n  font-size: 16px;\n  border: none;\n  outline: none;\n  color: white;\n  padding: 14px 16px;\n  background-color: inherit;\n  font-family: Roboto;\n  margin: 0;\n}\n\n.navbar a:hover,\n.dropdown:hover .dropbtn {\n  /* background-color: red; */\n}\n\n.dropdown-content {\n  display: block;\n  position: absolute;\n  background-color: red;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n}\n\n.dropdown-content a {\n  float: none;\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n  text-align: left;\n}\n\n.dropdown-content a:hover {\n  background-color: #ddd;\n}\n\nul {\n  padding: 0;\n  margin: 0;\n  /* list-style: none; */\n}\n\nul li a {\n  text-decoration: none;\n  color: #e74c3c;\n  font-family: Roboto;\n  /* font-size: 18px; */\n}\n\n.navigation {\n  background-color: #35353500;\n  width: 100%;\n  margin: 20px auto;\n  min-height: 50px;\n}\n\n.navigation>li {\n  float: left;\n  padding: 0 20px;\n}\n\n.navigation>li>a {\n  line-height: 50px;\n  color: #FFF;\n}\n\n.navigation .menu {\n  position: relative\n}\n\n.navigation .menu .submenu {\n  position: absolute;\n  /* width: 200px; */\n  box-shadow: 0px 1px 1px #CCC;\n  display: none;\n  transition: all .5s ease-in-out;\n}\n\n.navigation .menu:hover .submenu {\n  display: block\n}\n\n.navigation .menu .submenu:before {\n  content: \"\";\n  position: absolute;\n  display: block;\n  border-width: 0 6px 6px 6px;\n  border-style: solid;\n  border-color: #FFF transparent;\n  top: -6px;\n  left: 5px\n}\n\n.navigation .menu .submenu li {\n  padding: 5px 10px;\n  transition: all .5s ease-in-out;\n}\n\n.navigation .menu .submenu li:hover {\n  background-color: #e74c3c;\n}\n\n.navigation .menu .submenu li:hover a {\n  color: #FFF;\n  /* padding: 0 11px; */\n}\n\n.dropdown:hover .dropdown-content {\n  display: block;\n}\n\nnav {\n  width: 100%;\n  height: 50px;\n  background: rgba(0, 0, 0, .8);\n  border-top: 1px solid rgba(255, 255);\n  border-bottom: 1px solid rgba(255, 255);\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0px;\n  z-index: 99\n}\n\nnav ul {\n  display: flex;\n  margin: 0px;\n  padding: 0px;\n  float: right;\n}\n\nnav ul li {\n  list-style: none;\n}\n\nnav ul {\n  display: flex;\n\n  padding: 22px;\n  /* float: ; */\n}\n\nnav ul li a {\n  display: block;\n  color: #fff;\n  padding: 0 0px;\n  text-decoration: none;\n  text-transform: uppercase;\n  font-weight: bold;\n  line-height: 50px;\n\n}\n\n/* ===========aliign start============ */\n\n/* ====================responsive================= */\n\n.mt_20{\nmargin-top: 0px;\n}\n\n.wt_237{\nwidth: 237px;\n}\n\n.wt-con{\nwidth: 232px;\n}\n\n.wt_140{\nwidth: 140% !important;\n}\n\n/* mobile media query */\n\n@media screen and (min-device-width: 320px) and (max-device-width: 760px){\n.nav-bg {\nbackground-color: rgba(0, 0, 0, 0.65) !important;\n}\n\n.pt-120{\nposition: relative;\nleft: 158px;\n}\n.mt-414{\nmargin-top: 0px !important;\n}\n.ft_18 {\nfont-size: 18px;\n}\n\n\n\n}\n\n/* css for ipad */\n\n@media screen and (min-device-width: 768px) and (max-device-width: 1022px){\n.nav-bg {\n/* background-color: rgba(0, 0, 0, 0.65) !important; */\n}\n.maxwt_19{\nmax-width: 19%;\n}\n.wt_135{\nwidth: 135px !important;\n}\n.map_wt{\nwidth: 175px !important;\n}\n.logo_wt{\nwidth: 109px;\n}\n.col-sm-2{\nwidth : 0% ! important;\n}\n\n.mt_20{\n\n  margin-top: 4px !important; \n\nshape-margin: 0px !important;\n}\n\n.ht_80{\nheight:54px !important\n}\n\n.pt-120{\nposition: relative;\nleft: 185px\n}\n.mt-414{\nmargin-top:0px !important;\n}\n.mr-5 {\n  margin-left: 3rem !important;\n}\n\n.ml-5, .mx-5 {\nmargin-left: 2.2rem !important;\n}\n\n.pad_0{\npadding:0 0px !important;\n}\n.ft_18 {\nfont-size: 30px;\n}\n\n.wt_106{\nwidth: 106% !important;\n}\n\n\n}\n\n.Sign-In {\nwidth: 57px;\nheight: 24px;\nfont-family: Roboto;\nfont-size: 15px;\nfont-weight: normal;\nfont-style: normal;\nfont-stretch: normal;\nline-height: normal;\nletter-spacing: normal;\ncolor: #ffffff;\n}\n\n.Rectangle-2-Copy-2 {\nwidth: 1440px;\nheight: 311px;\nbox-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);\nbackground-image: linear-gradient(65deg, var(--black), var(--black));\n}\n\n.Subscribe {\nwidth: 54px;\nheight: 14px;\nopacity: 0.82;\nfont-family: Roboto;\nfont-size: 12px;\nfont-weight: 500;\nfont-style: normal;\nfont-stretch: normal;\nline-height: normal;\nletter-spacing: normal;\ncolor: #ff0000;\n}\n\n.Enter-your-mail-id {\nwidth: 92px;\nheight: 14px;\nopacity: 0.82;\nfont-family: Roboto;\nfont-size: 12px;\nfont-weight: 300;\nfont-style: normal;\nfont-stretch: normal;\nline-height: normal;\nletter-spacing: normal;\ncolor: #ffffff;\n}\n\n.Shape {\nwidth: 17px;\nheight: 17px;\nbackground-color: #ffffff;\n}\n\n.arabic{\nwidth: 28px;\nheight: 49px;\nfont-family: GeezaPro;\nfont-size: 12px;\nfont-weight: normal;\nfont-style: normal;\nfont-stretch: normal;\nline-height: normal;\nletter-spacing: normal;\ncolor: #ffffff;\n}\n\n.Oval {\nwidth: 9px;\nheight: 9px;\nbackground-color: #ff1100;\n}\n\n.English {\nwidth: 40px;\nheight: 28px;\nfont-family: Roboto;\nfont-size: 12px;\nfont-weight: 500;\nfont-style: normal;\nfont-stretch: normal;\nline-height: normal;\nletter-spacing: normal;\ncolor: #ff1100;\n}\n\n/* ===========navbar start========= */\n\n.Rectangle-2 {\nheight: 35px;\n  width: 100px;\n  padding: 0;\nborder-radius: 5px;\nbackground-color: #ff0000;\n}\n\n.Contact-Us {\nwidth: 90px;\nheight: 24px;\nfont-family: Roboto;\nfont-size: 18px;\nfont-weight: normal;\nfont-style: normal;\nfont-stretch: normal;\nline-height: normal;\nletter-spacing: normal;\ncolor: #ffffff;\n}\n\n.Suppliers {\nwidth: 77px;\nheight: 24px;\nfont-family: Roboto;\nfont-size: 18px;\nfont-weight: normal;\nfont-style: normal;\nfont-stretch: normal;\nline-height: normal;\nletter-spacing: normal;\ncolor: #ffffff;\n}\n\n.Services {\nwidth: 70px;\nheight: 24px;\nfont-family: Roboto;\nfont-size: 18px;\nfont-weight: normal;\nfont-style: normal;\nfont-stretch: normal;\nline-height: normal;\nletter-spacing: normal;\ncolor: #ffffff;\n}\n\n.About-Us-Copy {\nwidth: 75px;\nheight: 24px;\nfont-family: Roboto;\nfont-size: 18px;\nfont-weight: normal;\nfont-style: normal;\nfont-stretch: normal;\nline-height: normal;\nletter-spacing: normal;\ncolor: #ffffff;\n}\n\n.Home-Copy {\nwidth: 49px;\nheight: 24px;\nfont-family: Roboto;\nfont-size: 18px;\nfont-weight: normal;\nfont-style: normal;\nfont-stretch: normal;\nline-height: normal;\nletter-spacing: normal;\ncolor: #ffffff;\n}\n\n/* ======navbar end===== */\n\n.Rectangle-5-Copy {\nwidth: 292px;\nheight: 59px;\nborder-radius: 8px;\nbackground-color: #f34235;\n}\n\n.Mission {\nwidth: 79px;\nheight: 48px;\nfont-family: Roboto;\nfont-size: 18px;\nfont-weight: bold;\nfont-style: normal;\nfont-stretch: normal;\nline-height: 2.22;\nletter-spacing: normal;\ncolor: var(--black);\n}\n\n.Utilizing-the-latest {\n/* width: 518px; */\nheight: 100px;\nfont-family: Roboto;\nfont-size: 16px;\nfont-weight: normal;\nfont-style: normal;\nfont-stretch: normal;\nline-height: normal;\nletter-spacing: normal;\ncolor: var(--black);\n}\n\n.To-be-among-the-best {\n/* width: 519px; */\nheight: 81px;\nfont-family: Roboto;\nfont-size: 16px;\nfont-weight: normal;\nfont-style: normal;\nfont-stretch: normal;\nline-height: normal;\nletter-spacing: normal;\ncolor: var(--black);\n}\n\n.Vision {\nwidth: 65px;\nheight: 40px;\nfont-family: Roboto;\nfont-size: 18px;\nfont-weight: bold;\nfont-style: normal;\nfont-stretch: normal;\nline-height: 2.22;\nletter-spacing: normal;\ncolor: var(--black);\n}\n\n.Sharjah-Asset-Manage {\n/* width: 535px; */\n/* height: 283px; */\nfont-family: Roboto;\nfont-size: 16px;\nfont-weight: normal;\nfont-style: normal;\nfont-stretch: normal;\nline-height: normal;\nletter-spacing: normal;\n/* color: black */\n}\n\n.reg{\nbackground-color: #ff0000; \nwidth: -webkit-min-content; \nwidth: -moz-min-content; \nwidth: min-content;\npadding: 8px 20px;\n        margin-left:14px;\n        margin-top: -10px;\n        width:123px;\n        height: 41px;\n        border-radius: 5px;\n}\n\n/* ===========align end============== */\n\n.spacer {\nheight: 100px;\n}\n\n.Who-We-Are-Aman-is-a {\n  /* width: 733px; */\n  height: 459px;\n  font-family: Roboto;\n  font-size: 16px;\n  text-align: justify;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: var(--black);\n}\n\n.Who-We-Are-Aman-is-a .text-style-1 {\n  font-size: 24px;\n}\n\n.bb_3{\n  border-bottom: 3px solid transparent;\n}\n\n.saned_para{\n  font-size:16px;\n  color: #333; \n  font-family: GeezaPro;\n}\n\n.saned_heading{\n  font-size: 28px;\n  font-family: GeezaPro;\n\n}\n\n.Sharjah-Asset-Manage {\n  /* width: 535px; */\n  /* height: 283px; */\n  font-family: GeezaPro;\n  font-size: 17px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  /* color: black */\n}"

/***/ }),

/***/ "./src/app/sitemap-arabic/sitemap-arabic.component.html":
/*!**************************************************************!*\
  !*** ./src/app/sitemap-arabic/sitemap-arabic.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <button (click)=\"switchLanguage('arabic')\">Arabic</button>\n<button (click)=\"switchLanguage('en')\">English</button> -->\n\n<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js\"></script>\n<script src=\"//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n<link href=\"https://fonts.googleapis.com/css?family=Roboto\" rel=\"stylesheet\">\n<style>\n  @import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');\n\n  section.sec1 {\n  background: url(natures-temples.png);\n  background-size: cover;\n}\n\nsection.banner {\n  background: url(Group.png);\n  background-size: cover;\n  margin-left: 15px;\n}\n\nsection.sec2 {\n  padding: 100px;\n  box-sizing: border-box;\n}\n</style>\n\n\n\n<app-nav-bg [head]=\"head\" [bg]=\"bg\" [nav_arabic]=\"nav_arabic\" ></app-nav-bg>\n\n<div class=\"container-fluid\">\n <br>\n<div class=\"card\" style=\"border-radius: 18px;\" dir=\"rtl\">\n\n  <br>\n  \n    <div dir=\"rtl\" class=\"mr-5\">\n      <ul class=\"Sharjah-Asset-Manage\">\n        <li style=\"cursor:pointer;\" class=\"text-right\" routerLink=\"/login-arbic\">الصفحة\n          الرئيسية</li><br>\n        <li style=\"cursor:pointer\" class=\"text-right\" routerLink=\"/aboutus-arabic\">معلومات\n          عنا</li><br>\n        <li style=\"cursor:pointer\" class=\"text-right\" routerLink=\"/supplier-register-arabic\">المورد</li><br>\n        <li style=\"cursor:pointer\" class=\"text-right\" routerLink=\"/contactus-arabic\">اتصل\n          بنا</li><br>\n        <li class=\"text-right\">خدمات</li><br>\n       \n        <ul class=\"Sharjah-Asset-Manage\">\n          <li style=\"cursor:pointer\" class=\"text-right  mr-5\" routerLink=\"/amanservices-arabic\">رجل</li><br>\n          <li style=\"cursor:pointer\" class=\"text-right  mr-5\" routerLink=\"/salamaservices-arabic\">سلامة</li><br>\n          <li style=\"cursor:pointer\" class=\"text-right  mr-5\" routerLink=\"/facilityarabic\">إدارة المرافق المتكاملة</li>\n        </ul>\n      </ul> \n    </div>\n    \n    <br>\n  \n  </div>\n</div>\n<br>\n\n<!-- =============footer arabic start====== -->\n<app-footer></app-footer>\n\n<!-- ========footer arabic end====== -->\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/sitemap-arabic/sitemap-arabic.component.ts":
/*!************************************************************!*\
  !*** ./src/app/sitemap-arabic/sitemap-arabic.component.ts ***!
  \************************************************************/
/*! exports provided: SitemapArabicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SitemapArabicComponent", function() { return SitemapArabicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ng2_simple_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-simple-global */ "./node_modules/ng2-simple-global/index.js");
/* harmony import */ var ng2_simple_global__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_simple_global__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SitemapArabicComponent = /** @class */ (function () {
    function SitemapArabicComponent(apiService, router, sg) {
        this.apiService = apiService;
        this.router = router;
        this.sg = sg;
        this.navbarOpen = false;
        this.head = "خريطة الموقع";
        this.bg = "bg_img";
        this.nav_arabic = "/sitemap";
        this.model = {};
        this.data = {};
        this.Lang = {};
    }
    SitemapArabicComponent.prototype.toggleNavbar = function () {
        this.navbarOpen = !this.navbarOpen;
    };
    SitemapArabicComponent.prototype.ngOnInit = function () {
    };
    SitemapArabicComponent.prototype.newsletter = function (model) {
        var _this = this;
        this.apiService.newsletter(model).subscribe(function (response) {
            _this.data = response;
            console.log(_this.data);
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()(_this.data.Message + "<br>" + "اشتركت بنجاح في النشرة الإخبارية");
        });
    };
    ;
    SitemapArabicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sitemap-arabic',
            template: __webpack_require__(/*! ./sitemap-arabic.component.html */ "./src/app/sitemap-arabic/sitemap-arabic.component.html"),
            styles: [__webpack_require__(/*! ./sitemap-arabic.component.css */ "./src/app/sitemap-arabic/sitemap-arabic.component.css")]
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["APIService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ng2_simple_global__WEBPACK_IMPORTED_MODULE_4__["SimpleGlobal"]])
    ], SitemapArabicComponent);
    return SitemapArabicComponent;
}());



/***/ }),

/***/ "./src/app/sitemap/sitemap.component.css":
/*!***********************************************!*\
  !*** ./src/app/sitemap/sitemap.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contant{\n  font-family: Roboto;\n  font-size: 17px;\n  font-weight: 400;\n  cursor:pointer;\n  margin-bottom: 20px;\n}\n"

/***/ }),

/***/ "./src/app/sitemap/sitemap.component.html":
/*!************************************************!*\
  !*** ./src/app/sitemap/sitemap.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-bg-ar [head]=\"head\" [bg]=\"bg\" [nav_arabic]=\"nav_arabic\" ></app-nav-bg-ar>\n\n\n<div>\n    <div class=\"container-fluid\">\n      <br>\n        <div class=\"card\" style=\"border-radius: 18px;\">\n         \n          <ul class=\"mt-4\">\n            <li class=\"contant\" routerLink=\"/login\">Home</li>\n          \n            <li class=\"contant\" routerLink=\"/about-us\">About Us</li>\n         \n            <li class=\"contant\" routerLink=\"/supplier-register\">Suppliers</li>\n         \n            <li class=\"contant\" routerLink=\"/contactus\">Contact Us</li>\n          \n            <li class=\"contant\">Services</li>\n           \n            <ul>\n              <li class=\"contant\"  routerLink=\"/amanservices\">Aman</li>\n              <li class=\"contant\" routerLink=\"/salamaservices\">Salama</li>\n            \n              <li class=\"contant\" routerLink=\"/facilitymanagement\">Integrated\n                Facility Management</li>\n        \n            </ul>\n          </ul>\n        \n        </div>\n        <br>\n    </div>\n</div>\n\n\n<app-loginv2></app-loginv2>"

/***/ }),

/***/ "./src/app/sitemap/sitemap.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sitemap/sitemap.component.ts ***!
  \**********************************************/
/*! exports provided: SitemapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SitemapComponent", function() { return SitemapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ng2_simple_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-simple-global */ "./node_modules/ng2-simple-global/index.js");
/* harmony import */ var ng2_simple_global__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_simple_global__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SitemapComponent = /** @class */ (function () {
    function SitemapComponent(apiService, router, sg) {
        this.apiService = apiService;
        this.router = router;
        this.sg = sg;
        this.navbarOpen = false;
        this.head = "Site map";
        this.bg = "bg_img";
        this.nav_arabic = "/sitemap-arabic";
        this.Lang = {};
        this.model = {};
        this.data = {};
    }
    SitemapComponent.prototype.toggleNavbar = function () {
        this.navbarOpen = !this.navbarOpen;
    };
    SitemapComponent.prototype.ngOnInit = function () {
    };
    SitemapComponent.prototype.newsletter = function (model) {
        var _this = this;
        this.apiService.newsletter(model).subscribe(function (response) {
            _this.data = response;
            console.log(_this.data);
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()(_this.data.Message + "<br>" + "اشتركت بنجاح في النشرة الإخبارية");
        });
    };
    ;
    SitemapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sitemap',
            template: __webpack_require__(/*! ./sitemap.component.html */ "./src/app/sitemap/sitemap.component.html"),
            styles: [__webpack_require__(/*! ./sitemap.component.css */ "./src/app/sitemap/sitemap.component.css")]
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["APIService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ng2_simple_global__WEBPACK_IMPORTED_MODULE_4__["SimpleGlobal"]])
    ], SitemapComponent);
    return SitemapComponent;
}());



/***/ }),

/***/ "./src/app/supplier-register-arabic/supplier-register-arabic.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/supplier-register-arabic/supplier-register-arabic.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');\n\n.intro-2{\n  background: url(/assets/hero_image1.png)no-repeat center center;\n  background-size: cover;\n}\n\nbody {\n  font-family: Arial, Helvetica, sans-serif;\n}\n\nnav {\n  width: 100%;\n  height: 50px;\n  background: rgba(0, 0, 0, .8);\n  border-top: 1px solid rgba(255, 255);\n  border-bottom: 1px solid rgba(255, 255);\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0px;\n  z-index: 99;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: sans-serif;\n  /* background: #000; */\n}\n\nheader {\n  padding: 10px 100px;\n  box-sizing: border-box;\n}\n\nsection {\n  width: 100%;\n  height: 100vh;\n}\n\n.dropdown {\n  float: left;\n  overflow: hidden;\n}\n\n.dropdown .dropbtn {\n  font-size: 16px;\n  border: none;\n  outline: none;\n  color: white;\n  padding: 14px 16px;\n  background-color: inherit;\n  font-family: inherit;\n  margin: 0;\n}\n\n.navbar a:hover,\n.dropdown:hover .dropbtn {\n  /* background-color: red; */\n}\n\n.dropdown-content {\n  display: block;\n  position: absolute;\n  background-color: red;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n}\n\n.dropdown-content a {\n  float: none;\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n  text-align: left;\n}\n\n.dropdown-content a:hover {\n  background-color: #ddd;\n}\n\nul {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n\nul li a {\n  text-decoration: none;\n  color: #e74c3c;\n  font-family: Tahoma, Arial;\n}\n\n.navigation {\n  background-color: #35353500;\n  width: 100%;\n  margin: 20px auto;\n  min-height: 50px;\n}\n\n.navigation>li {\n  float: left;\n  padding: 0 20px;\n}\n\n.navigation>li>a {\n  line-height: 50px;\n  color: #FFF;\n}\n\n.navigation .menu {\n  position: relative\n}\n\n.navigation .menu .submenu {\n  position: absolute;\n  /* width: 200px; */\n  box-shadow: 0px 1px 1px #CCC;\n  display: none;\n  transition: all .5s ease-in-out;\n}\n\n.navigation .menu:hover .submenu {\n  display: block\n}\n\n.navigation .menu .submenu:before {\n  content: \"\";\n  position: absolute;\n  display: block;\n  border-width: 0 6px 6px 6px;\n  border-style: solid;\n  border-color: #FFF transparent;\n  top: -6px;\n  left: 5px\n}\n\n.navigation .menu .submenu li {\n  padding: 5px 10px;\n  transition: all .5s ease-in-out;\n}\n\n.navigation .menu .submenu li:hover {\n  background-color: #e74c3c;\n}\n\n.navigation .menu .submenu li:hover a {\n  color: #FFF;\n  /* padding: 0 11px; */\n}\n\n.dropdown:hover .dropdown-content {\n  display: block;\n}\n\nnav {\n  width: 100%;\n  height: 50px;\n  background: rgba(0, 0, 0, .8);\n  border-top: 1px solid rgba(255, 255);\n  border-bottom: 1px solid rgba(255, 255);\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0px;\n  z-index: 99\n}\n\nnav ul {\n  display: flex;\n  margin: 0px;\n  padding: 0px;\n  float: right;\n}\n\nnav ul li {\n  list-style: none;\n}\n\nnav ul {\n  display: flex;\n\n  padding: 0px;\n  /* float: ; */\n}\n\nnav ul li a {\n  display: block;\n  color: #fff;\n  padding: 0 13px;\n  text-decoration: none;\n  text-transform: uppercase;\n  font-weight: bold;\n  line-height: 50px;\n\n}\n\n/* .switch{\n  margin-top: 0;\n  margin-bottom: -5rem;\n  margin-left: 83%;\n  color: red;\n  overflow: hidden;\n}\n.switch1{\n  margin-top: 0;\n  margin-bottom: -2rem;\n  margin-left: 0%;\n  color: red;\n} */\n\n/* ==============footer style start ========= */\n\n.footer {\n  /* position: fixed; */\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background-color: black;\n  color: white;\n  text-align: center;\n  /* height: 75px; */\n}\n\n.container {\n  /* background: black; */\n  color: white\n}\n\n.social:hover {\n  -webkit-transform: scale(1.1);\n  -moz-transform: scale(1.1);\n  -o-transform: scale(1.1);\n}\n\n.social {\n  -webkit-transform: scale(0.8);\n  /* Browser Variations: */\n\n  -moz-transform: scale(0.8);\n  -o-transform: scale(0.8);\n  -webkit-transition-duration: 0.5s;\n  -moz-transition-duration: 0.5s;\n  -o-transition-duration: 0.5s;\n}\n\n.fa {\n  padding: 20px;\n  font-size: 30px;\n  width: 30px;\n  text-align: center;\n  text-decoration: none;\n  border-radius: 50%;\n}\n\n.img-thumbnail {\n  background: black;\n  border-color: black\n}\n\n.home {\n  font-family: Roboto-Bold;\n  font-size: 16px;\n  line-height: 14px;\n  letter-spacing: 0;\n}\n\n.about {\n  font-family: Roboto-Regular;\n  font-size: 13px;\n  line-height: 15px;\n  letter-spacing: 0;\n}\n\n.container1 {\n  background: black;\n  color: white\n}\n\n/* ============Navbar start======= */\n\n.homeservice{\n  width: 174px;\n  height: 52px;\n  font-family: GeezaPro;\n  font-size: 18px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #ffffff;\n}\n\n.about-us1{\n  \n    width: 143px;\n    height: 52px;\n    font-family: GeezaPro;\n    font-size: 18px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #ffffff;\n  \n}\n\n.services{\n  width: 70px;\n  height: 49px;\n  font-family: GeezaPro;\n  font-size: 18px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #ffffff;\n}\n\n.supplier{\n  width: 100px;\n  height: 25px;\n  font-family: GeezaPro;\n  font-size: 18px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #ffffff;\n}\n\n.contactus{\nwidth: 102px;\nheight: 76px;\nfont-family: GeezaPro;\nfont-size: 18px;\nfont-weight: normal;\nfont-style: normal;\nfont-stretch: normal;\nline-height: normal;\nletter-spacing: normal;\ncolor: #ffffff;\n}\n\n.Rectangle-2 {\nwidth: 123px;\nheight: 41px;\nborder-radius: 5px;\nbackground-color: #ff0000;\n}\n\n/* ========== navabar end=========== */\n\n/* ===========HEADING STYLE=========== */\n\n.saned_para-1{\n  font-size:16px;\n  color: #333; \n  font-family: GeezaPro;\n  color: red\n}\n\n.saned_para{\n  font-size:16px;\n  color: #333; \n  font-family: GeezaPro;\n}\n\n.saned_heading{\n  font-size: 28px;\n  font-family: GeezaPro;\n\n}\n\n/* ==============HEADING STYLE========== */\n\n/* ====================responsive================= */\n\n@media screen and (min-width: 320px) and (max-width: 767px){\n  .nav-bg {\n    background-color: rgba(0, 0, 0, 0.65) !important;\n  }\n\n  .Rectangle-5-Copy{\n    font-family: Roboto;\n    font-size: 16px;\n    \n    width: 211px !important;\n  height: 39px !important;\n  }\n\n\n  \n  .pt-120{\n    position: relative !important;\n    left: 276px !important;\n\n  }\n  .mt-414{\n    margin-top: 3px !important;\n  }\n\n  .mr-5, .mx-5 {\n    margin-right: 4rem!important;\n}\n\n.pad_12{\n  padding: 0 12px;\n}\n\n}\n\n@media screen and (max-width: 768px){\n  .nav-bg {\n    /* background-color: rgba(0, 0, 0, 0.65) !important; */\n  }\n\n  .navbar-expand-md .navbar-nav .nav-link {\n    padding-right: .0rem !important;\n    padding-left: .0rem !important;\n}\n\n  .pt-120{\n    position: relative !important;\n    left: 232px \n\n  }\n  .mt-414{\n    margin-top: 3px !important;\n  }\n\n  .mr-5, .mx-5 {\n    margin-right: 5rem!important;\n}\n\n\n\n\nli[_ngcontent-c1] {\n  float: left;\n  padding: 0 12px !important;\n}\n\n\n}\n\n@media screen and (max-width: 1024px){\n  .nav-bg {\n    /* background-color: rgba(0, 0, 0, 0.65) !important; */\n  }\n\n\n\n  .pt-120{\n    position: relative !important;\n    left: 260px \n\n  }\n  .mt-414{\n    margin-top: 3px !important;\n  }\n\n  .mr-5, .mx-5 {\n    margin-right: 5rem!important;\n}\n\n\n\n\nli[_ngcontent-c1] {\n  float: left;\n  padding: 0 12px !important;\n}\n\n\n}"

/***/ }),

/***/ "./src/app/supplier-register-arabic/supplier-register-arabic.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/supplier-register-arabic/supplier-register-arabic.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n\n<style>\n  section.sec1 {\n  background: url(natures-temples.png);\n  background-size: cover;\n}\n\nsection.banner {\n  background: url(Group.png);\n  background-size: cover;\n  margin-left: 15px;\n}\n\nsection.sec2 {\n  padding: 100px;\n  box-sizing: border-box;\n}\n  /* ===========================footer style end================ */\n</style>\n\n\n\n<app-nav-bg [head]=\"head\" [bg]=\"bg\" [nav_arabic]=\"nav_arabic\"></app-nav-bg>\n<div class=\"\">\n\n\n  <div>\n    <!------ Include the above in your HEAD tag ---------->\n\n\n\n\n\n    <div id=\"id01\" class=\"modal bg-danger\" dir=\"rtl\">\n\n      <form class=\"modal-content animate col-md-4\">\n        <div class=\"imgcontainer\">\n          <span onclick=\"document.getElementById('id01').style.display='none'\" class=\"close\" title=\"close\">&times;</span>\n\n          <!-- <img src=\"/assets/otp.png\" alt=\"\" class=\"avatar\"> -->\n          <h4>أدخل كلمة المرور مرة واحدة</h4>\n        </div>\n\n        <div class=\"\">\n          <p for=\"uname\" style=\"font-size: 18px;text-align:justify\" class=\"text-center\">تم إرسال كلمة السر لمرة واحدة\n            إلى عنوان بريدك الإلكتروني ورقم هاتفك المحمول</p>\n          <!-- <input type=\"password\" class=\"w3-input\" placeholder=\"Enter otp\" name=\"uname\" required> -->\n          <!-- <input type=\"password\" class=\"col-md-6 \" placeholder=\"\" maxlength=\"4\" style=\"margin-left: 92px;border:white\" /> -->\n          <input type=\"text\" class=\"form-control col-md-4 inline\" id=\"otp\" required [(ngModel)]=\"model.otp\" name=\"name\"\n            #name=\"ngModel\">\n\n          <!-- <button type=\"submit\" style=\"background-color: #ff0000;width: 94px;padding: 8px 10px;\" onclick=\"document.getElementById('id03').style.display='block'\" class=\"btn Rectangle-5-Copy inline\" (click)=\"sendotp(model)\">Send OTP</button>        -->\n\n          <div [hidden]=\"name.valid || name.pristine\" class=\"alert\" style=\"color: #f54b5e;\">\n            كلمة المرور مرة واحدة مطلوبة\n          </div>\n          <!-- <input type=\"text\" class=\" partitioned\" placeholder=\"0\" maxlength=\"1\" />\n        <input type=\"text\" class=\" partitioned\" placeholder=\"0\" maxlength=\"1\" />\n        <input type=\"text\" class=\" partitioned\" placeholder=\"0\" maxlength=\"1\" /> -->\n          <!-- <label for=\"psw\"><b>Password</b></label>\n        <input type=\"password\" placeholder=\"Enter Password\" name=\"psw\" required> -->\n\n          <button style=\"background-color: #ff0000;\" (click)=\"emailotpverification(model)\" type=\"submit\">Submit</button>\n          <!-- <label>\n          <input type=\"checkbox\" checked=\"checked\" name=\"remember\"> Remember me\n        </label> -->\n        </div>\n\n        <!-- <div class=\"container\" style=\"background-color:#f1f1f1\">\n        <button type=\"button\" onclick=\"document.getElementById('id01').style.display='none'\" class=\"cancelbtn\">Cancel</button>\n        <span class=\"psw\">Forgot <a href=\"#\">password?</a></span>\n      </div> -->\n      </form>\n    </div>\n    <br>\n\n\n    <div class=\" col-md-12\">\n\n\n      <div class=\"card col-md-12\" style=\"border-radius: 18px;\n    background: white;color:#494949;\" dir=\"rtl\">\n        <br>\n        <div class=\"row\" dir=\"rtl\">\n          <div class=\"col-md-1\"></div>\n          <div class=\"col-md-12 Who-We-Are-Aman-is-a\">\n            <!-- <h4><b>Who We Are</b></h4> -->\n            <div class=\"text-right\">\n              <a class=\"saned_heading\">مرحبا بكم في بوابة الموردين\n              </a>\n            </div>\n\n\n            <br>\n            <br>\n            <div class=\"ml-4\" dir=\"rtl\">\n\n\n\n              <div id=\"submitted\">\n                <form name=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" novalidate>\n                  <div class=\"row col-md-12\" dir=\"rtl\">\n\n\n                    <div class=\"form-group col-md-6  text-right\" dir=\"rtl\">\n                      <label class=\"saned_para\" for=\"name\">رقم الرخصة التجارية الإماراتية <span class=\"req\" style=\"color: #f54b5e;\">*\n                        </span></label>\n\n                      <input type=\"text\" (keyup)=\"tradeLicenceNO()\" autocomplete=\"off\" pattern=[\\s\\S]* maxlength=\"30\" class=\"form-control col-md-8 text-right\" name=\"uae_trade_license_no\"\n                        [(ngModel)]=\"model.trade_license_no\"  #trade_license_no=\"ngModel\"\n                         [ngClass]=\"{ 'is-invalid': f.submitted && trade_license_no.invalid }\"\n                        required />\n\n                        <!-- <div [hidden]=\"!model.trade_license_no\" style=\"color:red\">\n                            <div *ngIf=\"!trade_license_no.errors.minlength\">Only 20 characters are allowed</div>\n                        </div> -->\n\n                      <div *ngIf=\"f.submitted && trade_license_no.invalid\" class=\"saned_para-1\">\n                        <div *ngIf=\"trade_license_no.errors.required\">يرجى إدخال رقم الترخيص</div>\n                      </div>\n\n                    </div>\n\n\n                    <div class=\"form-group col-md-6 text-right\">\n                      <label class=\"saned_para\" for=\"name\">تاريخ صلاحية الرخصة التجارية<span class=\"req\" style=\"color: #f54b5e;\">*\n                        </span></label>\n                      \n                      <input type=\"text\" autocomplete=\"off\" [(bsValue)]=\"newVar\" class=\"form-control col-md-8\" required\n                        [(ngModel)]=\"model.trade_license_vdate\" name=\"trade_license_vdate\" #trade_license_vdate=\"ngModel\"\n                        bsDatepicker [ngClass]=\"{ 'is-invalid': f.submitted && trade_license_vdate.invalid }\" [minDate]=\"minDate\">\n\n                      <div *ngIf=\"f.submitted && trade_license_vdate.invalid\" class=\"saned_para-1\">\n                        <div *ngIf=\"trade_license_vdate.errors.required\">يرجى إدخال اسم الشخص المسؤول</div>\n                      </div>\n\n                    </div>\n\n                    <div class=\"form-group col-md-6 text-right\">\n                      <label class=\"saned_para\" for=\"name\">اسم الشركة<span class=\"req\" style=\"color: #f54b5e;\">*\n                        </span></label>\n\n                      <input type=\"text\" autocomplete=\"off\" maxlength=\"30\" pattern=[\\s\\S]* class=\"form-control col-md-8 text-right\" name=\"company_name\"\n                        [(ngModel)]=\"model.company_name\" #company_name=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && company_name.invalid }\"\n                        required />\n\n                        <!-- <div [hidden]=\"!model.company_name\" style=\"color:red\">\n                            <div *ngIf=\"!company_name.errors.minlength\">يُسمح بـ 20 حرفًا فقط</div>\n                        </div> -->\n\n                      <div *ngIf=\"f.submitted && company_name.invalid\" class=\"saned_para-1\">\n                        <div *ngIf=\"company_name.errors.required\">يرجى إدخال اسم الشركة</div>\n                      </div>\n                    </div>\n\n                    <div class=\"form-group col-md-6 text-right\">\n                      <label class=\"saned_para\" for=\"phonenumber\">قائمة الخدمات والمنتجات المعتمدة من الإدارة\n                        الاقتصادية<span class=\"req\" style=\"color: #f54b5e;\">*\n                        </span></label>\n                      <textarea type=\"text\" autocomplete=\"off\" maxlength=\"500\" pattern=[\\s\\S]* class=\"form-control col-md-8 text-right\" style=\"height: 90px;\"\n                        id=\"listofservices\" required [(ngModel)]=\"model.services_list\" name=\"services_list\"\n                        #services_list=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && services_list.invalid }\"></textarea>\n                     \n                        <!-- <div [hidden]=\"!model.services_list\" style=\"color:red\">\n                            <div *ngIf=\"!services_list.errors.minlength\">يُسمح بـ 500 حرفًا فقط</div>\n                        </div> -->\n\n                        <div *ngIf=\"f.submitted && services_list.invalid\" class=\"saned_para-1\">\n                        <div *ngIf=\"services_list.errors.required\">يرجى إدخال قائمة الخدمات</div>\n                      </div>\n\n                    </div>\n\n\n                    <div class=\"form-group col-md-6 text-right\">\n                      <label class=\"saned_para\" for=\"address\">العنوان المسجل للمكتب</label>\n                      <input type=\"text\" autocomplete=\"off\" maxlength=\"30\" class=\"form-control col-md-8 text-right\" id=\"reg_office_add\"\n                        required [(ngModel)]=\"model.reg_off_add\" name=\"reg_office_add\" pattern=\"[\\s\\S]*\"\n                         #reg_off_add=\"ngModel\">\n                    \n                        <!-- <div [hidden]=\"!model.reg_off_add\" style=\"color:red\">\n                            <div *ngIf=\"!reg_off_add.errors.minlength\">يُسمح بـ 20 حرفًا فقط</div>\n                        </div> -->\n      \n                    </div>\n\n                    <div class=\"form-group col-md-6 text-right\">\n                      <label class=\"saned_para\" for=\"pobox\">اسم شخص الاتصال<span class=\"req\" style=\"color: #f54b5e;\">*\n                        </span></label>\n\n                      <input type=\"text\" autocomplete=\"off\" maxlength=\"30\" pattern=\"[\\s\\S]*\" class=\"form-control col-md-8 text-right\" name=\"contact_name\"\n                        [(ngModel)]=\"model.contact_name\" #contact_name=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && contact_name.invalid }\"\n                        required />\n\n                        <!-- <div [hidden]=\"!model.contact_name\" style=\"color:red\">\n                            <div *ngIf=\"!contact_name.errors.minlength\">يُسمح بـ 20 حرفًا فقط</div>\n                        </div> -->\n\n                      <div *ngIf=\"f.submitted && contact_name.invalid\" class=\"saned_para-1\">\n                        <div *ngIf=\"contact_name.errors.required\">يرجى إدخال اسم الشخص المسؤول</div>\n                      </div>\n                    </div>\n\n                    <div class=\"form-group col-md-6 text-right\">\n                      <label class=\"saned_para\" for=\"mobile\">رقم الاتصال</label>\n\n                      <input type=\"text\" autocomplete=\"off\" class=\"form-control col-md-8 text-right\" id=\"contact_no\"\n                      pattern=\"^[6-9]\\d{9}$\" (keyup)=\"contactNo_no()\"\n                        required [(ngModel)]=\"model.contact_no\" name=\"contact_no\" #contact_no=\"ngModel\">\n\n                        <div [hidden]=\"!model.contact_no\" style=\"color:red\">\n                            <div *ngIf=\"!contact_no.valid\">الرجاء إدخال اسم صالح</div>\n                          </div>\n                     \n                    </div>\n\n                    <div class=\"form-group col-md-6 text-right\">\n\n                      <label class=\"saned_para\" for=\"contactpersonposition\">جهة الاتصال</label>\n\n                      <input type=\"text\" autocomplete=\"off\" maxlength=\"30\"\n                      class=\"form-control col-md-8 text-right\" id=\"contact_position\"\n                        required [(ngModel)]=\"model.contact_desig\" name=\"contact_position\" #contact_desig=\"ngModel\"\n                        pattern=\"[\\s\\S]*\">\n\n                        <!-- <div [hidden]=\"!model.contact_desig\" style=\"color:red\">\n                            <div *ngIf=\"!contact_desig.errors.minlength\">يُسمح بـ 20 حرفًا فقط</div>\n                        </div> -->\n                    \n                    </div>\n\n                    <div class=\"form-group col-md-6 text-right\">\n                      <label class=\"saned_para\" for=\"password\">فاكس</label>\n                      <input type=\"text\" autocomplete=\"off\" class=\"form-control col-md-8 text-right\" id=\"fax_no\" maxlenght=\"30\"\n                        required [(ngModel)]=\"model.contact_fax\" name=\"contact_fax\" #contact_fax=\"ngModel\">\n\n\n                    </div>\n                    <div class=\"form-group col-md-6 text-right\">\n                      <label class=\"saned_para\" for=\"confirmpassword\">رقم الاتصال (المحمول)<span class=\"req\" style=\"color: #f54b5e;\">*\n                        </span></label>\n\n                      <input type=\"text\" autocomplete=\"off\" class=\"form-control col-md-8 text-right\" name=\"contact_no_mobile\"\n                        [(ngModel)]=\"model.contant_mobile\" #contant_mobile=\"ngModel\" pattern=\"^[6-9]\\d{9}$\"\n                         [ngClass]=\"{ 'is-invalid': f.submitted && contant_mobile.invalid }\"\n                        required (keyup)=\"contactNo_mobile()\" />\n\n                        <div [hidden]=\"!model.contant_mobile\" style=\"color:red\">\n                            <div *ngIf=\"!contant_mobile.valid\">الرجاء إدخال اسم صالح</div>\n                          </div>\n\n                      <div *ngIf=\"f.submitted && contant_mobile.invalid\" class=\"saned_para-1\">\n                        <div *ngIf=\"contant_mobile.errors.required\">الرجاء إدخال رقم الهاتف النقال</div>\n                      </div>\n                    </div>\n\n                    <div class=\"form-group col-md-6 text-right\">\n                      <label class=\"saned_para\" for=\"confirmpassword\">عنوان البريد الإلكتروني للشركة</label> \n                      <input type=\"email\" autocomplete=\"off\" class=\"form-control col-md-8 text-right\" id=\"company_email_id\"\n                        passvalidator=\"password\" required [(ngModel)]=\"model.company_email\" name=\"company_email_id\"\n                        maxlength=\"30\"\n                        #company_email=\"ngModel\"  pattern=\"[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$\" >\n\n                        <div [hidden]=\"company_email.valid || !model.company_email\" class=\"saned_para-1\"\n                        style=\"color: #f54b5e;\">\n                        عنوان البريد الإلكتروني غير صالح\n                      </div>\n\n                    \n\n                    </div>\n\n                    <div class=\"form-group col-md-6 text-right\">\n                      <label class=\"saned_para\" for=\"confirmpassword\">عنوان البريد الإلكتروني لشخص الاتصال<span class=\"req\"\n                          style=\"color: #f54b5e;\">*\n                        </span></label>\n\n                      <input type=\"email\" autocomplete=\"off\" pattern=\"[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$\" class=\"form-control col-md-8 text-right\"\n                        name=\"contact_email\" [(ngModel)]=\"model.contact_email\" #contact_email=\"ngModel\" maxlength=\"30\"\n                         [ngClass]=\"{ 'is-invalid': f.submitted && contact_email.invalid }\"\n                        required />\n\n\n                      <div [hidden]=\"contact_email.valid || !model.contact_email\" class=\"saned_para-1\" style=\"color: #f54b5e;\">\n                        عنوان البريد الإلكتروني غير صالح\n                      </div>\n\n\n\n                      <div *ngIf=\"f.submitted && contact_email.invalid\" class=\"saned_para-1\">\n                        <div *ngIf=\"contact_email.errors.required\">الرجاء إدخال البريد الإلكتروني لجهة الاتصال</div>\n                      </div>\n\n                    </div>\n\n\n                    <div class=\"form-group col-md-6 text-right\">\n                      <label class=\"saned_para\" for=\"confirmpassword\">عنوان موقع ويب</label>\n                      <input type=\"email\" autocomplete=\"off\" class=\"form-control col-md-8\" id=\"website_add\" required \n                        [(ngModel)]=\"model.website_add\" maxlength=\"30\" name=\"website_add\" #website_add=\"ngModel\" pattern=\"[wW]{3}\\.[a-z0-9.-]{3,}\\.[a-z]{2,}$\" >\n\n                      <div [hidden]=\"!model.website_add\" style=\"color:red\">\n                        <div *ngIf=\"!website_add.valid\">الرجاء إدخال عنوان ويب صالح </div>\n                      </div>\n                    </div>\n\n                    <br><br>\n\n                  </div>\n                  <div class=\"container-fluid\">\n\n                    <div class=\"text-center mt-4\">\n\n                      <button type=\"submit\" style=\"background-color: #ff0000;padding: 8px 20px;\" onclick=\"document.getElementById('id01').style.display='none'\"\n                        class=\"btn Rectangle-5-Copy\" (click)=\"supplierregister(model)\">\n                        <font color=\"white\">خضع</font>\n                      </button>\n\n                    </div>\n\n                  </div>\n                </form>\n                <br>\n              </div>\n\n\n\n\n            </div>\n\n          </div>\n\n        </div>\n      </div>\n\n\n\n\n    </div>\n    <br>\n\n\n    <!-- =============footer arabic start====== -->\n    <app-footer></app-footer>\n\n    <!-- ========footer arabic end====== -->\n    <!-- ===arabic -->\n  </div>\n\n  <!-- ====Arabic -->\n\n  <!-- ========footer arabic end====== -->\n\n\n\n\n  <!-- </div> -->"

/***/ }),

/***/ "./src/app/supplier-register-arabic/supplier-register-arabic.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/supplier-register-arabic/supplier-register-arabic.component.ts ***!
  \********************************************************************************/
/*! exports provided: SupplierRegisterArabicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierRegisterArabicComponent", function() { return SupplierRegisterArabicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { mobiscroll, MbscCalendarOptions, MbscFormOptions } from '@mobiscroll/angular';
var SupplierRegisterArabicComponent = /** @class */ (function () {
    function SupplierRegisterArabicComponent(apiService, router, calendar) {
        this.apiService = apiService;
        this.router = router;
        this.calendar = calendar;
        this.navbarOpen = false;
        this.head = "سجل الموردين";
        this.bg = "bg_img";
        this.nav_arabic = "/supplier-register";
        this.model = {};
        this.data = {};
        this.dateNow = {};
        this.submitted = {};
        this.newVar = {};
        this.minDate = {};
        this.emailotpverification = {};
        this.onSubmit = {};
        this.Lang = {};
        this.minDate = new Date();
        this.minDate.setDate(this.minDate.getDate() - 1);
    }
    SupplierRegisterArabicComponent.prototype.toggleNavbar = function () {
        this.navbarOpen = !this.navbarOpen;
    };
    SupplierRegisterArabicComponent.prototype.ngOnInit = function () {
    };
    SupplierRegisterArabicComponent.prototype.selectToday = function () {
        this.model = this.calendar.getToday();
    };
    SupplierRegisterArabicComponent.prototype.newsletter = function (model) {
        var _this = this;
        this.apiService.newsletter(model).subscribe(function (response) {
            _this.data = response;
            console.log(_this.data);
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()(_this.data.Message + "<br>" + "اشتركت بنجاح في النشرة الإخبارية");
        });
    };
    ;
    // rtlSettings: MbscCalendarOptions = {
    //   rtl: true
    // };
    SupplierRegisterArabicComponent.prototype.contactNo_mobile = function () {
        var getdata = this.model.contant_mobile;
        (getdata == undefined) ? (getdata = "") :
            (getdata.length > 10) ? (this.model.contant_mobile = getdata.substring(0, 10)) :
                this.model.contant_mobile = getdata.replace(/\D/g, ""); //getdata.replace(/\D/g, "");
        console.log(this.model.contant_mobile);
    };
    SupplierRegisterArabicComponent.prototype.contactNo_no = function () {
        var getdata = this.model.contact_no;
        (getdata == undefined) ? (getdata = "") :
            (getdata.length > 10) ? (this.model.contact_no = getdata.substring(0, 10)) :
                this.model.contact_no = getdata.replace(/\D/g, "");
    };
    SupplierRegisterArabicComponent.prototype.tradeLicenceNO = function () {
        var getdata = this.model.trade_license_no;
        (getdata == undefined) ? (getdata = "") :
            // (getdata.length > 10) ? ( this.model.trade_license_no = getdata.substring(0,10)) :
            this.model.trade_license_no = getdata.replace(/\D/g, "");
    };
    SupplierRegisterArabicComponent.prototype.supplieremailotpverification = function (model) {
        var _this = this;
        this.apiService.supplieremailotpverification(model).subscribe(function (response) {
            _this.data = response;
            console.log("data=====>", _this.data.message);
            if (_this.data.message == "You are successfully registered") {
                console.log("data=====>", _this.data);
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()("Registration Successful" + "<br>" + "التسجيل ناجح");
                _this.router.navigate(['/login']);
            }
            else if (_this.data.message == "Invalid one time password") {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()("Invalid one time password");
            }
        });
    };
    SupplierRegisterArabicComponent.prototype.supplierregister = function (model) {
        var _this = this;
        console.log("hello", this.dateNow);
        this.apiService.supplierregister(model).subscribe(function (response) {
            console.log("response", response);
            console.log("Checking", _this.data = response);
            _this.data = response;
            var res_data = _this.data.data;
            console.log("res_data", res_data);
            // console.log("this.data ", this.data)
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()("شكرا لتقديم البيانات الخاصة بك");
            _this.router.navigate(['/login-arbic']);
            // if (this.data.Message == "User Already Registered") {
            //   console.log("data=====>", this.data);
            //   swal(this.data.Message + "<br>" + "مستخدم مسجل بالفعل");
            // }
            // else if (this.data.message == "Please provide an Emailid") {
            //   console.log("email")
            //   swal("Please fill the Mandatory fields")
            // }
            // else if (this.data.Message == "please check your email for one time password") {
            //   swal("please check your email for one time password")
            //   document.getElementById('id01').style.display = 'block'
            // }
            // // this.router.navigate(['/login']);
        });
    };
    ;
    SupplierRegisterArabicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-supplier-register-arabic',
            template: __webpack_require__(/*! ./supplier-register-arabic.component.html */ "./src/app/supplier-register-arabic/supplier-register-arabic.component.html"),
            styles: [__webpack_require__(/*! ./supplier-register-arabic.component.css */ "./src/app/supplier-register-arabic/supplier-register-arabic.component.css")]
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["APIService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbCalendar"]])
    ], SupplierRegisterArabicComponent);
    return SupplierRegisterArabicComponent;
}());



/***/ }),

/***/ "./src/app/supplier-register/supplier-register.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/supplier-register/supplier-register.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');\n \n /* ===========navbar start========= */\n \n .Rectangle-2 {\n    width: 123px;\n    height: 41px;\n    border-radius: 5px;\n    background-color: #ff0000;\n  }\n \n .Contact-Us {\n    width: 90px;\n    height: 24px;\n    font-family: Roboto;\n    font-size: 18px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #ffffff;\n  }\n \n .Rectangle-5-Copy{\n    width: 211px !important;\n    height: 39px !important;\n  }\n \n .Rectangle-5-otp{\n    width: 189px !important;\n    height: 39px !important;\n   \n  }\n \n .ml_35{\n    margin-left: 4.0 !important\n  }\n \n .Suppliers {\n    width: 77px;\n    height: 24px;\n    font-family: Roboto;\n    font-size: 18px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #ffffff;\n  }\n \n .Services {\n    width: 70px;\n    height: 24px;\n    font-family: Roboto;\n    font-size: 18px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #ffffff;\n  }\n \n .About-Us-Copy {\n    width: 75px;\n    height: 24px;\n    font-family: Roboto;\n    font-size: 18px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #ffffff;\n  }\n \n .Home-Copy {\n    width: 49px;\n    height: 24px;\n    font-family: Roboto;\n    font-size: 18px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #ffffff;\n  }\n \n /* ======navbar end===== */\n \n /* ====================responsive================= */\n \n .mt_20{\n  margin-top: 0px;\n}\n \n .wt_237{\nwidth: 237px;\n}\n \n .wt-con{\nwidth: 232px;\n}\n \n .wt_140{\nwidth: 140% !important;\n}\n \n /* mobile media query */\n \n @media screen and (min-device-width: 320px) and (max-device-width: 760px){\n.nav-bg {\n  background-color: rgba(0, 0, 0, 0.65) !important;\n}\n\n.pt-120{\n  position: relative;\n  right: 153px;\n}\n.mt-414{\n  margin-top: 0px !important;\n}\n.ft_18 {\n  font-size: 18px;\n}\n\n\n\n}\n \n /* css for ipad */\n \n @media screen and (min-device-width: 768px) and (max-device-width: 1022px){\n.nav-bg {\n  /* background-color: rgba(0, 0, 0, 0.65) !important; */\n}\n.maxwt_19{\n  max-width: 19%;\n}\n.wt_135{\nwidth: 135px !important;\n}\n.map_wt{\n  width: 175px !important;\n}\n.ml_135{\n  margin-left: 0px !important;\n}\n.ml_16{\n  margin-left: -16px !important;\n}\n.logo_wt{\nwidth: 109px;\n}\n.col-sm-2{\n  width : 0% ! important;\n}\n\n.mt_20{\n  \n    margin-top: 4px !important; \n  \n  shape-margin: 0px !important;\n}\n\n.ht_80{\n  height:54px !important\n}\n\n.pt-120{\n  position: relative;\n  right: 79px;\n}\n.mt-414{\n  margin-top:0px !important;\n}\n\n.ml-5, .mx-5 {\n  margin-left: 2.2rem !important;\n}\n\n.pad_0{\npadding:0 0px !important;\n}\n.ft_18 {\n  font-size: 30px;\n}\n\n.wt_106{\n  width: 106% !important;\n}\n\n\n}\n \n @media screen and (max-device-width: 1024px){\n.nav-bg {\n  /* background-color: rgba(0, 0, 0, 0.65) !important; */\n}\n.maxwt_19{\n  max-width: 19%;\n}\n.wt_135{\nwidth: 135px !important;\n}\n.map_wt{\n  width: 175px !important;\n}\n.ml_135{\n  margin-left: 0px !important;\n}\n/* .ml_16{\n  margin-left: -16px !important;\n} */\n.logo_wt{\nwidth: 109px;\n}\n.col-sm-2{\n  /* width : 0% ! important; */\n}\n\n.mt_20{\n  \n    margin-top: 4px !important; \n  \n  shape-margin: 0px !important;\n}\n\n/* .ht_80{\n  height:54px !important\n} */\n\n.pt-120{\n  position: relative;\n  /* right: 79px; */\n}\n.mt-414{\n  margin-top:0px !important;\n}\n\n.ml-5, .mx-5 {\n  margin-left: 2.2rem !important;\n}\n\n.pad_0{\npadding:0 0px !important;\n}\n.ft_18 {\n  font-size: 30px;\n}\n\n.wt_106{\n  width: 106% !important;\n}\n\n\n}\n \n /* =============mobile============ */\n \n .WHAT-IS-Aman- {\n  width: 300px;\nheight: 53px;\nfont-family: Roboto;\nfont-size: 31px;\nfont-weight: normal;\nfont-style: normal;\nfont-stretch: normal;\nline-height: 1.18;\nletter-spacing: normal;\ncolor: var(--black);\n}\n \n .Sharjah-Asset-Manage {\n  /* width: 535px; */\n  /* height: 283px; */\n  font-family: Roboto;\n  font-size: 16px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  /* color: black */\n}\n \n .Sharjah-Asset-Manage-1 {\n  /* width: 535px; */\n  /* height: 283px; */\n  font-family: Roboto;\n  font-size: 16px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: red\n}\n \n .Sharjah-Asset-Manage-submit {\n  /* width: 535px; */\n  /* height: 283px; */\n  font-family: Roboto;\n  font-size: 16px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: red;\n  width: 211px !important;\nheight: 39px !important;\n}\n \n /* //====================text font size */\n \n body {\n  font-family: Arial, Helvetica, sans-serif;\n}\n \n nav {\n  width: 100%;\n  height: 50px;\n  background: rgba(0, 0, 0, .8);\n  border-top: 1px solid rgba(255, 255);\n  border-bottom: 1px solid rgba(255, 255);\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0px;\n  z-index: 99;\n}\n \n /* ======login form start========= */\n \n /* Full-width input fields */\n \n input[type=text],\ninput[type=password] {\n  width: 100%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  box-sizing: border-box;\n}\n \n /* Set a style for all buttons */\n \n /* button {\nbackground-color:#f34235;\ncolor: white;\npadding: 14px 20px;\nmargin: 8px 0;\nborder: none;\ncursor: pointer;\nwidth: 100%;\n} */\n \n button:hover {\n  opacity: 0.8;\n}\n \n /* Extra styles for the cancel button */\n \n .cancelbtn {\n  width: auto;\n  padding: 10px 18px;\n  background-color: #f44336;\n}\n \n /* Center the image and position the close button */\n \n .imgcontainer {\n  text-align: center;\n  margin: 24px 0 12px 0;\n  position: relative;\n}\n \n img.avatar {\n  width: 40%;\n  border-radius: 50%;\n}\n \n .container {\n  padding: 16px;\n}\n \n span.psw {\n  float: right;\n  padding-top: 16px;\n}\n \n /* The Modal (background) */\n \n .modal {\n  display: none;\n  /* Hidden by default */\n  position: fixed;\n  /* Stay in place */\n  z-index: 1;\n  /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%;\n  /* Full width */\n  height: 100%;\n  /* Full height */\n  overflow: auto;\n  /* Enable scroll if needed */\n  background-color: rgb(0, 0, 0);\n  /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.4);\n  /* Black w/ opacity */\n  padding-top: 60px;\n}\n \n /* Modal Content/Box */\n \n .modal-content {\n  background-color: #fefefe;\n  margin: 5% auto 15% auto;\n  /* 5% from the top, 15% from the bottom and centered */\n  border: 1px solid #888;\n  width: 80%;\n  /* Could be more or less, depending on screen size */\n}\n \n /* The Close Button (x) */\n \n .close {\n  position: absolute;\n  right: 25px;\n  top: 0;\n  color: #000;\n  font-size: 35px;\n  font-weight: bold;\n}\n \n .close:hover,\n.close:focus {\n  color: red;\n  cursor: pointer;\n}\n \n /* Add Zoom Animation */\n \n .animate {\n  -webkit-animation: animatezoom 0.6s;\n  animation: animatezoom 0.6s\n}\n \n @-webkit-keyframes animatezoom {\n  from {\n    -webkit-transform: scale(0)\n  }\n\n  to {\n    -webkit-transform: scale(1)\n  }\n}\n \n @keyframes animatezoom {\n  from {\n    -webkit-transform: scale(0);\n            transform: scale(0)\n  }\n\n  to {\n    -webkit-transform: scale(1);\n            transform: scale(1)\n  }\n}\n \n /* Change styles for span and cancel button on extra small screens */\n \n /* ========login form end====== */\n \n body {\n  margin: 0;\n  padding: 0;\n  font-family: sans-serif;\n  /* background: #000; */\n}\n \n header {\n  padding: 10px 100px;\n  box-sizing: border-box;\n}\n \n section {\n  width: 100%;\n  height: 100vh;\n}\n \n .dropdown {\n  float: left;\n  overflow: hidden;\n}\n \n .dropdown .dropbtn {\n  font-size: 16px;\n  border: none;\n  outline: none;\n  color: white;\n  padding: 14px 16px;\n  background-color: inherit;\n  font-family: inherit;\n  margin: 0;\n}\n \n .navbar a:hover,\n.dropdown:hover .dropbtn {\n  /* background-color: red; */\n}\n \n .dropdown-content {\n  display: block;\n  position: absolute;\n  background-color: red;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n}\n \n .dropdown-content a {\n  float: none;\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n  text-align: left;\n}\n \n .dropdown-content a:hover {\n  background-color: #ddd;\n}\n \n ul {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n \n ul li a {\n  text-decoration: none;\n  color: #e74c3c;\n  font-family: Tahoma, Arial;\n}\n \n .navigation {\n  background-color: #35353500;\n  width: 75%;\n  margin: 20px auto;\n  min-height: 50px;\n}\n \n .navigation>li {\n  float: left;\n  padding: 0 20px;\n}\n \n .navigation>li>a {\n  line-height: 50px;\n  color: #FFF;\n}\n \n .navigation .menu {\n  position: relative\n}\n \n .navigation .menu .submenu {\n  position: absolute;\n  /* width: 200px; */\n  box-shadow: 0px 1px 1px #CCC;\n  display: none;\n  transition: all .5s ease-in-out;\n}\n \n .navigation .menu:hover .submenu {\n  display: block\n}\n \n .navigation .menu .submenu:before {\n  content: \"\";\n  position: absolute;\n  display: block;\n  border-width: 0 6px 6px 6px;\n  border-style: solid;\n  border-color: #FFF transparent;\n  top: -6px;\n  left: 5px\n}\n \n .navigation .menu .submenu li {\n  padding: 5px 10px;\n  transition: all .5s ease-in-out;\n}\n \n .navigation .menu .submenu li:hover {\n  background-color: #e74c3c;\n}\n \n .navigation .menu .submenu li:hover a {\n  color: #FFF;\n  /* padding: 0 11px; */\n}\n \n .dropdown:hover .dropdown-content {\n  display: block;\n}\n \n nav {\n  width: 100%;\n  height: 50px;\n  background: rgba(0, 0, 0, .8);\n  border-top: 1px solid rgba(255, 255);\n  border-bottom: 1px solid rgba(255, 255);\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0px;\n  z-index: 99\n}\n \n nav ul {\n  display: flex;\n  margin: 0px;\n  padding: 0px;\n  float: right;\n}\n \n nav ul li {\n  list-style: none;\n}\n \n nav ul {\n  display: flex;\n\n  padding: 0px;\n  /* float: ; */\n}\n \n nav ul li a {\n  display: block;\n  color: #fff;\n  padding: 0 20px;\n  text-decoration: none;\n  text-transform: uppercase;\n  font-weight: bold;\n  line-height: 50px;\n\n}\n \n /* .switch{\n  margin-top: 0;\n  margin-bottom: -5rem;\n  margin-left: 83%;\n  color: red;\n  overflow: hidden;\n}\n.switch1{\n  margin-top: 0;\n  margin-bottom: -2rem;\n  margin-left: 0%;\n  color: red;\n} */\n \n /* ==============footer style start ========= */\n \n .footer {\n  /* position: fixed; */\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background-color: black;\n  color: white;\n  text-align: center;\n  /* height: 75px; */\n}\n \n .container {\n  /* background: black; */\n  color: white\n}\n \n .social:hover {\n  -webkit-transform: scale(1.1);\n  -moz-transform: scale(1.1);\n  -o-transform: scale(1.1);\n}\n \n .social {\n  -webkit-transform: scale(0.8);\n  /* Browser Variations: */\n\n  -moz-transform: scale(0.8);\n  -o-transform: scale(0.8);\n  -webkit-transition-duration: 0.5s;\n  -moz-transition-duration: 0.5s;\n  -o-transition-duration: 0.5s;\n}\n \n .fa {\n  padding: 20px;\n  font-size: 30px;\n  width: 30px;\n  text-align: center;\n  text-decoration: none;\n  border-radius: 50%;\n}\n \n .img-thumbnail {\n  background: black;\n  border-color: black\n}\n \n .home {\n  font-family: Roboto-Bold;\n  font-size: 16px;\n  line-height: 14px;\n  letter-spacing: 0;\n}\n \n .about {\n  font-family: Roboto-Regular;\n  font-size: 13px;\n  line-height: 15px;\n  letter-spacing: 0;\n}\n \n .container1 {\n  background: black;\n  color: white\n}\n \n .intro-2 {\n  background: url(\"/assets/hero_image.png\")no-repeat center center;\n  background-size: cover;\n  height: 623px;\n}\n"

/***/ }),

/***/ "./src/app/supplier-register/supplier-register.component.html":
/*!********************************************************************!*\
  !*** ./src/app/supplier-register/supplier-register.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n\n\n  <div>\n\n    <div id=\"id01\" class=\"modal mt-5\">\n\n      <form class=\"modal-content animate col-md-4\" action=\"/action_page.php\">\n        <div class=\"imgcontainer\">\n          <span onclick=\"document.getElementById('id01').style.display='none'\" class=\"close\" title=\"close\">&times;</span>\n          <br>\n          <br>\n          <h4>Enter One Time Password</h4>\n        </div>\n\n\n\n\n        <div class=\"\">\n          <p for=\"uname\" style=\"font-size: 18px;text-align:justify\" class=\"text-center\">One Time Password has been sent\n            to your email address and mobile number</p>\n          <input type=\"text\" class=\"form-control col-md-12 inline\" id=\"otp\" required [(ngModel)]=\"model.otp\" name=\"name\"\n            #name=\"ngModel\">\n\n\n          <div [hidden]=\"name.valid || name.pristine\" class=\"alert\" style=\"color: #f54b5e;\">\n            One Time Password is required\n          </div>\n\n          <div class=\"ml-3\">\n            <button style=\"background-color: #ff0000;color: white\" class=\"btn Rectangle-5-otp ml-5 center\" (click)=\"supplieremailotpverification(model)\"\n              type=\"submit\">Submit</button>\n          </div>\n\n          <br><br>\n        </div>\n\n      </form>\n    </div>\n\n\n\n\n\n\n\n    <!-- <div>\n      <div class=\"container-fluid\">\n\n        <h2>Welcome to Suppliers portal</h2>\n        <div id=\"submitted\">\n          <form name=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" novalidate>\n            <div class=\"row\">\n\n              <div class=\"col-sm-6\">\n\n              </div>\n\n\n              \n\n              <div class=\"col-sm-6\">\n\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div> -->\n\n\n\n    <app-nav-bg-ar [head]=\"head\" [bg]=\"bg\" [nav_arabic]=\"nav_arabic\"></app-nav-bg-ar>\n\n\n\n\n\n\n\n\n    <div class=\"container-fluid\">\n      <br>\n      <div class=\"card\" style=\"border-radius: 18px;\n    background: white;color:#494949;\">\n        <br>\n        <div class=\"row \">\n          <div class=\"col-md-1\"></div>\n          <div class=\"col-md-12\">\n\n            <div class=\"col-md-12\">\n              <a class=\"WHAT-IS-Aman-\">Welcome to Suppliers portal</a>\n\n            </div>\n\n            <br>\n\n            <div class=\"Sharjah-Asset-Manage ml-4\">\n\n\n\n              <div id=\"submitted\">\n                <form name=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" novalidate>\n                  <div class=\"row col-md-12\">\n                    <div class=\"form-group col-md-6\">\n                      <label class=\"Sharjah-Asset-Manage\" for=\"name\">UAE Trade License Number <span class=\"req\" style=\"color: #f54b5e;\">*\n                        </span></label>\n                        <br>\n\n                      <input type=\"text\" (keyup)=\"tradeLicenceNO()\" class=\"form-control col-md-8\" autocomplete=\"off\" name=\"uae_trade_license_no\"\n                        [(ngModel)]=\"model.trade_license_no\" #trade_license_no=\"ngModel\" pattern=\"^[0-9]*$\"\n                        maxlength=\"30\"  [ngClass]=\"{ 'is-invalid': f.submitted && trade_license_no.invalid }\" required />\n\n                        \n\n                      <!-- <div [hidden]=\"!model.trade_license_no\" style=\"color:red\">\n                        <div *ngIf=\"trade_license_no.errors.maxlength\">Only 20 characters are allowed</div>\n                      </div> -->\n\n                      <div *ngIf=\"f.submitted && trade_license_no.invalid\" class=\"Sharjah-Asset-Manage-1\">\n                        <div *ngIf=\"trade_license_no.errors.required\" class=\"\">Please enter a License number</div>\n                      </div>\n\n                    </div>\n\n\n                    <div class=\"form-group col-md-6\">\n                      <label class=\"Sharjah-Asset-Manage\" for=\"name\">Trade License Validity Date<span class=\"req\" style=\"color: #f54b5e;\">*\n                        </span></label>\n                        <br>\n\n                      <input type=\"text\" autocomplete=\"off\" [(bsValue)]=\"newVar\" class=\"form-control col-md-8\" \n                        [(ngModel)]=\"model.trade_license_vdate\" required name=\"trade_license_vdate\" #trade_license_vdate=\"ngModel\"\n                        bsDatepicker [ngClass]=\"{ 'is-invalid': f.submitted && trade_license_vdate.invalid }\" [minDate]=\"minDate\">\n\n\n                      <div *ngIf=\"f.submitted && trade_license_vdate.invalid\" class=\"Sharjah-Asset-Manage-1\">\n                        <div *ngIf=\"trade_license_vdate.errors.required\">Select the Trade License Validity Date</div>\n                      </div>\n\n\n                    </div>\n\n                    <div class=\"form-group col-md-6\">\n                      <label class=\"Sharjah-Asset-Manage\" for=\"name\">Company Name<span class=\"req\" style=\"color: #f54b5e;\">*\n                        </span></label>\n                      <br>\n\n                      <input type=\"text\" class=\"form-control col-md-8\" name=\"company_name\" [(ngModel)]=\"model.company_name\"\n                        maxlength=\"30\" #company_name=\"ngModel\" pattern=\"[\\s\\S]*\" autocomplete=\"off\" [ngClass]=\"{ 'is-invalid': f.submitted && company_name.invalid }\"\n                        required />\n\n                      <!-- <div [hidden]=\"!model.company_name\" style=\"color:red\">\n                        <div *ngIf=\"!company_name.errors.minlength\">Only 20 characters are allowed</div>\n                      </div> -->\n\n                      <div *ngIf=\"f.submitted && company_name.invalid\" class=\"Sharjah-Asset-Manage-1\">\n                        <div *ngIf=\"company_name.errors.required\">Please enter a Company Name</div>\n                      </div>\n                    </div>\n\n                    <div class=\"form-group col-md-6\">\n                      <label class=\"Sharjah-Asset-Manage\" for=\"phonenumber\">List of services and products as\n                        approved by the economic department<span class=\"req\" style=\"color: #f54b5e;\">*\n                        </span></label>\n\n                      <textarea type=\"text\" class=\"form-control col-md-8\" maxlength=\"500\" pattern=\"[\\s\\S]*\" style=\"height: 90px;\"\n                        id=\"listofservices\" required [(ngModel)]=\"model.services_list\" name=\"services_list\"\n                        #services_list=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && services_list.invalid }\"></textarea>\n\n                      <!-- <div [hidden]=\"!model.services_list\" style=\"color:red\">\n                        <div *ngIf=\"!services_list.errors.minlength\">Only 500 characters are allowed</div>\n                      </div> -->\n\n                      <div *ngIf=\"f.submitted && services_list.invalid\" class=\"Sharjah-Asset-Manage-1\">\n                        <div *ngIf=\"services_list.errors.required\">Please enter list of services</div>\n                      </div>\n                    </div>\n\n\n                    <div class=\"form-group col-md-6\">\n                      <label class=\"Sharjah-Asset-Manage\" for=\"address\">Registered Office Address:</label>\n                      <br>\n                      <input type=\"text\" class=\"form-control col-md-8\" autocomplete=\"off\" id=\"reg_office_add\" required\n                        [(ngModel)]=\"model.reg_off_add\" pattern=\"[a-zA-z0-9]\" name=\"reg_office_add\" #reg_off_add=\"ngModel\"\n                        maxlength=\"30\">\n\n                        <!-- <div [hidden]=\"!model.reg_off_add\" style=\"color:red\">\n                            <div *ngIf=\"!reg_off_add.errors.minlength\">Only 20 characters are allowed</div>\n                          </div> -->\n                    </div>\n\n                    \n                    <div class=\"form-group col-md-6\">\n                      <label class=\"Sharjah-Asset-Manage\" for=\"pobox\">Contact Person Name<span class=\"req\" style=\"color: #f54b5e;\">*\n                        </span></label>\n                      <br>\n\n                      <input type=\"text\" class=\"form-control col-md-8\" name=\"contact_name\" [(ngModel)]=\"model.contact_name\"\n                        #contact_name=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && contact_name.invalid }\"\n                        pattern=\"[\\s\\S]*\" required autocomplete=\"off\" maxlength=\"30\" />\n\n                      <!-- <div [hidden]=\"!model.contact_name\" style=\"color:red\">\n                        <div *ngIf=\"!contact_name.errors.minlength\">Only 20 characters are allowed</div>\n                      </div> -->\n\n                      <div *ngIf=\"f.submitted && contact_name.invalid\" class=\"Sharjah-Asset-Manage-1\">\n                        <div *ngIf=\"contact_name.errors.required\">Please enter a Contact Person Name</div>\n                      </div>\n                    </div>\n\n                    <div class=\"form-group col-md-6\">\n                      <label class=\"Sharjah-Asset-Manage\" for=\"mobile\">Contact No</label>\n                      <br>\n                      <input type=\"text\" autocomplete=\"off\" class=\"form-control col-md-8\" pattern=\"^[6-9]\\d{9}$\" id=\"contact_no\"\n                        required [(ngModel)]=\"model.contact_no\" (keyup)=\"contactNo_no()\" name=\"contact_no\" #contact_no=\"ngModel\">\n\n                      <div [hidden]=\"!model.contact_no\" style=\"color:red\">\n                        <div *ngIf=\"!contact_no.valid\">Please enter valid Contact NO </div>\n                      </div>\n\n                    </div>\n\n\n\n\n                    <div class=\"form-group col-md-6\">\n                      <label class=\"Sharjah-Asset-Manage\" for=\"contactpersonposition\">Contact Person Position</label>\n                      <br>\n                      <input type=\"text\" class=\"form-control col-md-8\" id=\"contact_position\" required [(ngModel)]=\"model.contact_desig\"\n                        autocomplete=\"off\" maxlength=\"30\" name=\"contact_position\" #contact_desig=\"ngModel\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$\">\n\n                      <!-- <div [hidden]=\"!model.contact_desig\" style=\"color:red\">\n                        <div *ngIf=\"!contact_desig.errors.minlength\">Only 20 characters are allowed</div>\n                      </div> -->\n\n                    </div>\n\n                    <div class=\"form-group col-md-6\">\n                      <label class=\"Sharjah-Asset-Manage\" for=\"password\">Fax</label>\n                      <br>\n                      <input type=\"text\" class=\"form-control col-md-8\" id=\"fax_no\" autocomplete=\"off\" required\n                        [(ngModel)]=\"model.contact_fax\" pattern=\"/^\\+?[0-9]+$/\" name=\"contact_fax\" #contact_fax=\"ngModel\">\n\n\n                    </div>\n\n                    <div class=\"form-group col-md-6\">\n                      <label class=\"Sharjah-Asset-Manage\" for=\"confirmpassword\">Contact No. (mobile)<span class=\"req\"\n                          style=\"color: #f54b5e;\">*\n                        </span></label>\n                        <br>\n\n                      <input type=\"text\" class=\"form-control col-md-8\" \n                     \n                        required name=\"contact_no_mobile\" autocomplete=\"off\" [(ngModel)]=\"model.contant_mobile\"\n                        #contant_mobile=\"ngModel\" pattern=\"^[6-9]\\d{9}$\" [ngClass]=\"{ 'is-invalid': f.submitted && contant_mobile.invalid }\" />\n\n\n                      <div [hidden]=\"!model.contant_mobile\" style=\"color:red\">\n                        <div *ngIf=\"!contant_mobile.valid\">Please enter valid Contact NO </div>\n                      </div>\n\n                      <div *ngIf=\"f.submitted && contant_mobile.invalid\" class=\"Sharjah-Asset-Manage-1\">\n                        <div *ngIf=\"contant_mobile.errors.required\">Please enter a Mobile number</div>\n                      </div>\n                    </div>\n\n                    <div class=\"form-group col-md-6\">\n                      <label class=\"Sharjah-Asset-Manage\" for=\"confirmpassword\">Company Email Address</label>\n                      <input type=\"email\" class=\"form-control col-md-8\" id=\"company_email_id\" passvalidator=\"password\"\n                        required [(ngModel)]=\"model.company_email\" name=\"company_email_id\" #company_email=\"ngModel\"\n                        pattern=\"[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$\">\n\n                      <div [hidden]=\"company_email.valid ||!model.company_email\" class=\"Sharjah-Asset-Manage-1\" style=\"color: #f54b5e;\">\n                        Please enter valid Email Address\n                      </div>\n\n                    </div>\n\n                    <div class=\"form-group col-md-6\">\n                      <label class=\"Sharjah-Asset-Manage\" for=\"confirmpassword\">Email address of Contact Person<span\n                          class=\"req\" style=\"color: #f54b5e;\">*\n                        </span></label>\n\n                      <input type=\"email\" pattern=\"[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$\" class=\"form-control col-md-8\"\n                        name=\"contact_email\" [(ngModel)]=\"model.contact_email\" autocomplete=\"off\" #contact_email=\"ngModel\"\n                        [ngClass]=\"{ 'is-invalid': f.submitted && contact_email.invalid }\" required />\n\n                      <div [hidden]=\"contact_email.valid ||!model.contact_email\" class=\"Sharjah-Asset-Manage-1\" style=\"color: #f54b5e;\">\n                        Please enter valid Email Address\n                      </div>\n\n                      <div *ngIf=\"f.submitted && contact_email.invalid\" class=\"Sharjah-Asset-Manage-1\">\n                        <div *ngIf=\"contact_email.errors.required\">Please enter a Contact Person Email</div>\n                      </div>\n\n                    </div>\n\n\n\n                    <div class=\"form-group col-md-6\">\n                      <label class=\"Sharjah-Asset-Manage\" for=\"confirmpassword\">Website Address</label>\n                      <input type=\"email\" class=\"form-control col-md-8\" id=\"website_add\" required [(ngModel)]=\"model.website_add\"\n                      maxlength=\"30\" name=\"website_add\" #website_add=\"ngModel\" autocomplete=\"off\" pattern=\"[wW]{3}\\.[a-z0-9.-]{3,}\\.[a-z]{2,}$\">\n\n                      <div [hidden]=\"!model.website_add\" style=\"color:red\">\n                        <div *ngIf=\"!website_add.valid\">Please enter valid Web Address </div>\n\n                      </div>\n                    </div>\n\n                    <br><br>\n\n\n\n                  </div>\n                  <div class=\"container-fluid text-center mt-4\">\n\n                    <div>\n\n                      <button type=\"submit\" style=\"background-color: #ff0000;padding: 8px 20px;\" onclick=\"document.getElementById('id01').style.display='none'\"\n                        class=\"btn Sharjah-Asset-Manage-submit\" (click)=\"supplierregister(model)\">\n                        <font color=\"white\">Submit</font>\n                      </button>\n\n                    </div>\n\n\n                  </div>\n                </form>\n                <br>\n              </div>\n\n\n\n\n            </div>\n\n          </div>\n\n        </div>\n      </div>\n    </div>\n    <br>\n\n    <!--=====footer english start==-->\n    <app-loginv2></app-loginv2>\n    <!-- ================footer  english end== -->"

/***/ }),

/***/ "./src/app/supplier-register/supplier-register.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/supplier-register/supplier-register.component.ts ***!
  \******************************************************************/
/*! exports provided: SupplierRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierRegisterComponent", function() { return SupplierRegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { RegisterForm }    from '../register-form';

var SupplierRegisterComponent = /** @class */ (function () {
    function SupplierRegisterComponent(apiService, router, calendar) {
        this.apiService = apiService;
        this.router = router;
        this.calendar = calendar;
        this.navbarOpen = false;
        this.model = {};
        this.Lang = {};
        this.data = {};
        this.dateNow = {};
        this.submitted = {};
        this.newVar = {};
        this.onSubmit = {};
        this.trade_license_vdate = {};
        this.keyup = '';
        this.formatsDateTest = [
            'yyyy/MM/dd',
        ];
        this.head = "Supplier Registration";
        this.bg = "bg_img";
        this.nav_arabic = "/supplier-register-arabic";
        this.minDate = new Date();
        this.minDate.setDate(this.minDate.getDate() - 1);
    }
    SupplierRegisterComponent.prototype.toggleNavbar = function () {
        this.navbarOpen = !this.navbarOpen;
    };
    SupplierRegisterComponent.prototype.ngOnInit = function () {
    };
    SupplierRegisterComponent.prototype.selectToday = function () {
        this.model = this.calendar.getToday();
    };
    SupplierRegisterComponent.prototype.newsletter = function (model) {
        var _this = this;
        this.apiService.newsletter(model).subscribe(function (response) {
            _this.data = response;
            console.log(_this.data);
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()(_this.data.Message + "<br>" + "اشتركت بنجاح في النشرة الإخبارية");
        });
    };
    ;
    SupplierRegisterComponent.prototype.supplieremailotpverification = function (model) {
        var _this = this;
        this.apiService.supplieremailotpverification(model).subscribe(function (response) {
            _this.data = response;
            console.log("data=====>", _this.data.message);
            if (_this.data.message == "You are successfully registered") {
                console.log("data=====>", _this.data);
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()("Registration Successful" + "<br>" + "التسجيل ناجح");
                _this.router.navigate(['/login']);
            }
            else if (_this.data.message == "Invalid one time password") {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()("Invalid one time password");
            }
        });
    };
    SupplierRegisterComponent.prototype.supplierregister = function (model) {
        var _this = this;
        console.log("hello", this.trade_license_vdate);
        this.apiService.supplierregister(model).subscribe(function (response) {
            console.log("response", response);
            console.log("Checking", _this.data = response);
            _this.data = response;
            var res_data = _this.data.data;
            console.log("res_data", res_data);
            // console.log("this.data ", this.data)
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()(res_data);
            _this.router.navigate(['/login']);
        });
    };
    ;
    SupplierRegisterComponent.prototype.contactNo_mobile = function () {
        var getdata = this.model.contant_mobile;
        (getdata == undefined) ? (getdata = "") :
            (getdata.length > 10) ? (this.model.contant_mobile = getdata.substring(0, 10)) :
                this.model.contant_mobile = getdata.replace(/\D/g, ""); //getdata.replace(/\D/g, "");
        console.log(this.model.contant_mobile);
    };
    SupplierRegisterComponent.prototype.contactNo_no = function () {
        var getdata = this.model.contact_no;
        (getdata == undefined) ? (getdata = "") :
            (getdata.length > 10) ? (this.model.contact_no = getdata.substring(0, 10)) :
                this.model.contact_no = getdata.replace(/\D/g, "");
    };
    SupplierRegisterComponent.prototype.tradeLicenceNO = function () {
        var getdata = this.model.trade_license_no;
        (getdata == undefined) ? (getdata = "") :
            // (getdata.length > 10) ? ( this.model.trade_license_no = getdata.substring(0,10)) :
            this.model.trade_license_no = getdata.replace(/\D/g, "");
    };
    SupplierRegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-supplier-register',
            template: __webpack_require__(/*! ./supplier-register.component.html */ "./src/app/supplier-register/supplier-register.component.html"),
            styles: [__webpack_require__(/*! ./supplier-register.component.css */ "./src/app/supplier-register/supplier-register.component.css")]
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["APIService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCalendar"]])
    ], SupplierRegisterComponent);
    return SupplierRegisterComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/rpqb-desk-003/Documents/arjun/project2019/saned_website/version_02/saned-website_ui/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
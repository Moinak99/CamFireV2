(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-dashboard-dashboard-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.page.html":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesDashboardDashboardPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n        <ion-icon name=\"menu-outline\" size=\"large\" (click)='dashboardMenu()'></ion-icon> \n     </ion-toolbar>\n    </ion-header>\n      <ion-menu side=\"start\" menuId=\"2\" contentId=\"main\" class=\"my-custom-menu\">\n          <ion-toolbar>\n            <div class = \"menu-header-bg\">\n              <div class=\"header-content\">\n           <ion-title>Welcome</ion-title> </div></div>\n         </ion-toolbar> \n       <!-- </ion-header> -->\n       <ion-content>\n         <ion-list>\n            <ion-item [routerLink]=\"['/dashboard']\"><ion-icon name=\"home-outline\"></ion-icon> &nbsp; Home</ion-item>\n            <ion-item [routerLink]=\"['/user-profile']\"><ion-icon name=\"person-circle-outline\"></ion-icon> &nbsp; Profile</ion-item>\n\n            <!-- <ion-item (click)=\"showImage()\"><ion-icon name=\"images-outline\"></ion-icon>&nbsp;Gallery</ion-item>\n            <ion-item [routerLink]=\"['/search-date']\"><ion-icon name=\"calendar-outline\"></ion-icon>&nbsp;Search Image by Date</ion-item> -->\n\n            <ion-item (click)=\"presentAlertConfirm()\"><ion-icon name=\"log-out-outline\"></ion-icon> &nbsp;Logout</ion-item>  \n  \n           </ion-list>\n        </ion-content>\n      </ion-menu>\n      <ion-router-outlet id=\"main\"></ion-router-outlet>\n\n<ion-content>\n\n\n  <!-- <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button>\n      <ion-icon name=\"camera-outline\" (click)=\"presentLoading()\"></ion-icon>\n\n    </ion-fab-button>\n\n    <ion-fab-button>\n      <ion-icon name=\"camera-outline\" (click)=\"presentLoading()\"></ion-icon>\n\n    </ion-fab-button>\n    \n  </ion-fab> -->\n\n\n\n<ion-button  class=\"ion-padding\"  color=\"primary\" size=\"large\" (click)=\"presentLoading()\"><ion-icon name=\"camera-outline\"></ion-icon>Camera</ion-button>\n<ion-button  class=\"ion-padding\" color=\"secondary\" size=\"large\" (click)=\"presentLoadingz()\"><ion-icon name=\"cloud-upload-outline\"></ion-icon> Gallery</ion-button>\n\n\n<div *ngIf=\"cardopen\">\n<ion-card>\n  <ion-card-content>\n    <img src=\"{{takephoto}}\">  \n  </ion-card-content>\n  <ion-button (click)=\"uploadImageCloud()\">Upload to cloud</ion-button>\n\n</ion-card>\n</div>\n\n</ion-content>\n<!-- <ion-footer>\n  <ion-toolbar>\n    <ion-title>Welcome</ion-title>\n  </ion-toolbar>\n</ion-footer> -->\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-tabs>\n\n        \n  \n      <ion-tab-bar slot=\"bottom\">\n        <ion-tab-button tab=\"gallery\" (click)=\"gallery()\">\n          <ion-label>Gallery</ion-label>\n          <ion-icon name=\"images-outline\"></ion-icon>\n            </ion-tab-button>\n        <ion-tab-button tab=\"search\" (click)=\"search()\">\n          <ion-label>Search image</ion-label>\n          <ion-icon name=\"search-outline\"></ion-icon>\n        </ion-tab-button>\n      </ion-tab-bar>\n    </ion-tabs> \n  </ion-toolbar>\n</ion-footer>\n";
      /***/
    },

    /***/
    "./src/app/pages/dashboard/dashboard-routing.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/pages/dashboard/dashboard-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: DashboardPageRoutingModule */

    /***/
    function srcAppPagesDashboardDashboardRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardPageRoutingModule", function () {
        return DashboardPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _dashboard_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./dashboard.page */
      "./src/app/pages/dashboard/dashboard.page.ts");

      var routes = [{
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_3__["DashboardPage"]
      }];

      var DashboardPageRoutingModule = function DashboardPageRoutingModule() {
        _classCallCheck(this, DashboardPageRoutingModule);
      };

      DashboardPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DashboardPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/dashboard/dashboard.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/pages/dashboard/dashboard.module.ts ***!
      \*****************************************************/

    /*! exports provided: DashboardPageModule */

    /***/
    function srcAppPagesDashboardDashboardModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function () {
        return DashboardPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./dashboard-routing.module */
      "./src/app/pages/dashboard/dashboard-routing.module.ts");
      /* harmony import */


      var _dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./dashboard.page */
      "./src/app/pages/dashboard/dashboard.page.ts");

      var DashboardPageModule = function DashboardPageModule() {
        _classCallCheck(this, DashboardPageModule);
      };

      DashboardPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__["DashboardPageRoutingModule"]],
        declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"]]
      })], DashboardPageModule);
      /***/
    },

    /***/
    "./src/app/pages/dashboard/dashboard.page.scss":
    /*!*****************************************************!*\
      !*** ./src/app/pages/dashboard/dashboard.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesDashboardDashboardPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "* {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n\n.menu-header-bg {\n  height: 180px;\n  width: 350px;\n  background-color: #7590d6;\n  background: linear-gradient(90deg, #7590d6 0%, #4d71d7 100%);\n  box-shadow: 0px 1px 10px rgba(98, 140, 255, 0.5);\n  transform: rotate(-15deg);\n  border-radius: 10px 10px 10px 50px;\n  margin-left: -18px;\n  margin-top: -50px;\n  margin-bottom: 60px;\n}\n\n.header-content {\n  position: absolute;\n  top: 80px;\n  left: 15px;\n  display: flex;\n  align-items: center;\n  align-content: center;\n  transform: rotate(15deg);\n}\n\n.large-button {\n  width: 150px !important;\n  height: 5 0px !important;\n}\n\nion-button {\n  --border-radius: 9px;\n  --border-shadow: none;\n  text-transform: initial;\n  font-size: 12px;\n  width: 48%;\n  padding-left: 30px;\n  --background: #fff;\n  --color: #3b3beb;\n  --border-style:solid;\n  --border-color: #eeeeee;\n  --border-width:0.5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3SUFBQTtBQUNKOztBQUVFO0VBRUUsYUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLDREQUFBO0VBQ0EsZ0RBQUE7RUFDQSx5QkFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBR0U7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtBQUFKOztBQWVBO0VBQ0UsdUJBQUE7RUFDQSx3QkFBQTtBQVpGOztBQWVBO0VBQ0Usb0JBQUE7RUFDRixxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDRSxrQkFBQTtFQUNGLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7QUFaQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcclxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG4gIFxyXG4gIC5tZW51LWhlYWRlci1iZyAgXHJcbiAge1xyXG4gICAgaGVpZ2h0OiAxODBweDtcclxuICAgIHdpZHRoOiAzNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3NTkwZDY7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM3NTkwZDYgMCUsICM0ZDcxZDcgMTAwJSk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDEwcHggcmdiYSg5OCwxNDAsMjU1LDAuNSk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTVkZWcpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggNTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMThweDtcclxuICAgIG1hcmdpbi10b3A6IC01MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNjBweDtcclxuICB9XHJcbiAgXHJcbiAgLmhlYWRlci1jb250ZW50e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA4MHB4O1xyXG4gICAgbGVmdDogMTVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTVkZWcpO1xyXG4gIH0gXHJcblxyXG4gIC8vIGlvbi1jYXJke1xyXG4gIC8vICAgZGlzcGxheTogZmxleDtcclxuICAvLyAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgLy8gICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIC8vICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgLy8gfVxyXG5cclxuLy8gICBpb24tY2FyZHtcclxuLy8gICAgIGhlaWdodDogNTAwcHg7XHJcbi8vICAgICB3aWR0aDogMTAwJTtcclxuLy8gfVxyXG5cclxuLmxhcmdlLWJ1dHRvbiB7XHJcbiAgd2lkdGg6IDE1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiA1IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tYnV0dG9ue1xyXG4gIC0tYm9yZGVyLXJhZGl1czogOXB4O1xyXG4tLWJvcmRlci1zaGFkb3c6IG5vbmU7XHJcbnRleHQtdHJhbnNmb3JtOiBpbml0aWFsO1xyXG5mb250LXNpemU6IDEycHg7XHJcbndpZHRoOiA0OCU7XHJcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4tLWJhY2tncm91bmQ6ICNmZmY7XHJcbi0tY29sb3I6ICMzYjNiZWI7XHJcbi0tYm9yZGVyLXN0eWxlOnNvbGlkO1xyXG4tLWJvcmRlci1jb2xvcjogI2VlZWVlZTtcclxuLS1ib3JkZXItd2lkdGg6MC41cHg7XHJcblxyXG59Il19 */";
      /***/
    },

    /***/
    "./src/app/pages/dashboard/dashboard.page.ts":
    /*!***************************************************!*\
      !*** ./src/app/pages/dashboard/dashboard.page.ts ***!
      \***************************************************/

    /*! exports provided: DashboardPage */

    /***/
    function srcAppPagesDashboardDashboardPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardPage", function () {
        return DashboardPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! firebase */
      "./node_modules/firebase/dist/index.esm.js");
      /* harmony import */


      var src_app_services_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/service.service */
      "./src/app/services/service.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/crop/ngx */
      "./node_modules/@ionic-native/crop/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      ;

      var DashboardPage = /*#__PURE__*/function () {
        // tslint:disable-next-line: max-line-length
        function DashboardPage(camera, crop, datePipe, service, alertController, loadingController, menu, router) {
          _classCallCheck(this, DashboardPage);

          this.camera = camera;
          this.crop = crop;
          this.datePipe = datePipe;
          this.service = service;
          this.alertController = alertController;
          this.loadingController = loadingController;
          this.menu = menu;
          this.router = router;
          this.cardopen = false;
          this.takephoto = '';
          var id = localStorage.getItem('userid');

          if (id != null) {
            console.log('m', id);
            this.userid = id;
          } else {
            this.router.navigate(['/login']);
          }
        }

        _createClass(DashboardPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {} // taking the pictures and saving it into base 64 string format

        }, {
          key: "takePicture",
          value: function takePicture() {
            var _this = this;

            var options = {
              quality: 30,
              destinationType: this.camera.DestinationType.DATA_URL,
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE,
              allowEdit: true,
              sourceType: 1,
              saveToPhotoAlbum: false
            };
            this.camera.getPicture(options).then(function (imageData) {
              _this.cardopen = !_this.cardopen;
              _this.takephoto = 'data:image/jpeg;base64,' + imageData;
              console.log(_this.takephoto);
            }, function (err) {
              console.log(err);
            });
          } // it will work when user choose upload from gallery

        }, {
          key: "getImage",
          value: function getImage() {
            var _this2 = this;

            var options = {
              quality: 20,
              destinationType: this.camera.DestinationType.DATA_URL,
              encodingType: this.camera.EncodingType.JPEG,
              sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
              saveToPhotoAlbum: false,
              allowEdit: true
            };
            console.log(JSON.stringify(options));
            this.camera.getPicture(options).then(function (imageData) {
              _this2.cardopen = !_this2.cardopen;
              _this2.takephoto = 'data:image/jpeg;base64,' + imageData;
              console.log('Gallery', _this2.takephoto);
            }, function (err) {});
          } // loading

        }, {
          key: "presentLoading",
          value: function presentLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var loading, _yield$loading$onDidD, role, data;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.loadingController.create({
                        cssClass: 'my-custom-class',
                        message: 'Please wait...',
                        duration: 2000
                      });

                    case 2:
                      loading = _context.sent;
                      _context.next = 5;
                      return loading.present();

                    case 5:
                      _context.next = 7;
                      return loading.onDidDismiss();

                    case 7:
                      _yield$loading$onDidD = _context.sent;
                      role = _yield$loading$onDidD.role;
                      data = _yield$loading$onDidD.data;
                      console.log('Loading dismissed!');
                      this.takePicture();

                    case 12:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          } // loading2

        }, {
          key: "presentLoadingz",
          value: function presentLoadingz() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var loading, _yield$loading$onDidD2, role, data;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.loadingController.create({
                        cssClass: 'my-custom-class',
                        message: 'Please wait...',
                        duration: 1000
                      });

                    case 2:
                      loading = _context2.sent;
                      _context2.next = 5;
                      return loading.present();

                    case 5:
                      _context2.next = 7;
                      return loading.onDidDismiss();

                    case 7:
                      _yield$loading$onDidD2 = _context2.sent;
                      role = _yield$loading$onDidD2.role;
                      data = _yield$loading$onDidD2.data;
                      console.log('Loading dismissed!');
                      this.getImage();

                    case 12:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          } // After getting link, by calling this method the base 64 link will be send to service

        }, {
          key: "uploadImageCloud",
          value: function uploadImageCloud() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this3 = this;

              var loading, date, uploaddate, today1, date1, time1, dateTime1, mergedatewithuserid, messageurl, storageref;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      loading = this.loadingController.create({
                        cssClass: 'my-custom-class',
                        message: 'Please wait...',
                        duration: 5000
                      });
                      _context5.next = 3;
                      return loading;

                    case 3:
                      _context5.sent.present();

                      // tslint:disable-next-line: prefer-const
                      date = new Date();
                      uploaddate = this.datePipe.transform(date, 'yyyy-MM-dd');
                      console.log(uploaddate);
                      today1 = new Date();
                      date1 = today1.getFullYear() + '-' + (today1.getMonth() + 1) + '-' + today1.getDate();
                      time1 = today1.getHours() + ':' + today1.getMinutes() + ':' + today1.getSeconds() + ':' + today1.getMilliseconds();
                      dateTime1 = date1 + 'and' + time1; // -------

                      mergedatewithuserid = this.userid + dateTime1;
                      messageurl = this.takephoto; // const a = messageurl.

                      storageref = firebase__WEBPACK_IMPORTED_MODULE_3__["default"].storage().ref();
                      storageref.child('images' + '/' + this.userid + dateTime1).putString(messageurl, 'data_url').then(function (snapshot) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                          var downloadurl;
                          return regeneratorRuntime.wrap(function _callee3$(_context3) {
                            while (1) {
                              switch (_context3.prev = _context3.next) {
                                case 0:
                                  console.log('success');
                                  _context3.next = 3;
                                  return snapshot.ref.getDownloadURL();

                                case 3:
                                  downloadurl = _context3.sent;
                                  this.imagestr = downloadurl; // const a = storageref.getDownloadURL();

                                  console.log('Download Url', downloadurl);

                                case 6:
                                case "end":
                                  return _context3.stop();
                              }
                            }
                          }, _callee3, this);
                        }));
                      }).then(function () {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                          var savedetails, a;
                          return regeneratorRuntime.wrap(function _callee4$(_context4) {
                            while (1) {
                              switch (_context4.prev = _context4.next) {
                                case 0:
                                  savedetails = {
                                    userid: this.userid,
                                    imageurl: this.imagestr,
                                    date: uploaddate,
                                    storagedel: mergedatewithuserid
                                  };
                                  _context4.next = 3;
                                  return this.service.saveImage(savedetails);

                                case 3:
                                  a = _context4.sent;
                                  console.log('Mercy', a);
                                  this.presentAlert();
                                  this.cardopen = !this.cardopen;

                                case 7:
                                case "end":
                                  return _context4.stop();
                              }
                            }
                          }, _callee4, this);
                        }));
                      })["catch"](function () {
                        console.log('bye');
                      });

                    case 15:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          } // loading 3
          //  async presentLoading1() {
          //   const { role, data } = await (await loading).onDidDismiss();
          //   console.log('Loading dismissed!');
          //   this.presentAlert();
          //   this.cardopen = !this.cardopen;
          // }
          // alert

        }, {
          key: "presentAlert",
          value: function presentAlert() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var alert;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        // header: 'Alert',
                        // subHeader: 'Subtitle',
                        message: 'Successfully Added',
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context6.sent;
                      _context6.next = 5;
                      return alert.present();

                    case 5:
                      this.takephoto = '';

                    case 6:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          } // show image

        }, {
          key: "showImage",
          value: function showImage() {
            this.router.navigate(['/show-images']);
          } // menu

        }, {
          key: "search",
          value: function search() {
            this.router.navigate(['/search-date']);
          }
        }, {
          key: "gallery",
          value: function gallery() {
            this.router.navigate(['/show-images']);
          }
        }, {
          key: "dashboardMenu",
          value: function dashboardMenu() {
            this.menu.enable(true, '2');
            this.menu.open('2');
          } // alert with choice

        }, {
          key: "presentAlertConfirm",
          value: function presentAlertConfirm() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var _this4 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Are You Sure!',
                        message: 'Confirm <strong>Logout</strong>!',
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {
                            console.log('Confirm Cancel: blah');
                          }
                        }, {
                          text: 'Okay',
                          handler: function handler() {
                            console.log('Confirm Okay');

                            _this4.logout();
                          }
                        }]
                      });

                    case 2:
                      alert = _context7.sent;
                      _context7.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          } // logout and clearing localstorage

        }, {
          key: "logout",
          value: function logout() {
            localStorage.clear();
            this.router.navigate(['/login']);
          }
        }]);

        return DashboardPage;
      }();

      DashboardPage.ctorParameters = function () {
        return [{
          type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"]
        }, {
          type: _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_7__["Crop"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]
        }, {
          type: src_app_services_service_service__WEBPACK_IMPORTED_MODULE_4__["ServiceService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }];
      };

      DashboardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./dashboard.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./dashboard.page.scss */
        "./src/app/pages/dashboard/dashboard.page.scss"))["default"]]
      })], DashboardPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-dashboard-dashboard-module-es5.js.map
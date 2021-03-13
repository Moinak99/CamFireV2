(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-search-date-search-date-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search-date/search-date.page.html":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search-date/search-date.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesSearchDateSearchDatePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n        <ion-icon name=\"menu-outline\" size=\"large\" (click)='searchdatemenu()'></ion-icon> \n     </ion-toolbar>\n    </ion-header>\n      <ion-menu side=\"start\" menuId=\"8\" contentId=\"main\" class=\"my-custom-menu\">\n          <ion-toolbar>\n            <div class = \"menu-header-bg\">\n              <div class=\"header-content\">\n           <ion-title>Search by Date</ion-title> </div></div>\n         </ion-toolbar> \n       <!-- </ion-header> -->\n       <ion-content>\n         <ion-list>\n            <ion-item [routerLink]=\"['/dashboard']\"><ion-icon name=\"home-outline\"></ion-icon> &nbsp; Home</ion-item>\n            <ion-item [routerLink]=\"['/user-profile']\"><ion-icon name=\"person-circle-outline\"></ion-icon> &nbsp; Profile</ion-item>\n            <ion-item [routerLink]=\"['/show-images']\"><ion-icon name=\"images-outline\"></ion-icon> &nbsp; Gallery</ion-item>\n            <ion-item (click)=\"presentAlertConfirm()\"><ion-icon name=\"log-out-outline\"></ion-icon> &nbsp;Logout</ion-item>  \n\n           </ion-list>\n        </ion-content>\n      </ion-menu>\n      <ion-router-outlet id=\"main\"></ion-router-outlet>\n<ion-content>\n\n  <ion-item>\n    <ion-label position=\"floating\">Select Date:</ion-label>\n    <ion-input type=\"date\" [(ngModel)]=\"searchdt\" required></ion-input>\n</ion-item>\n\n<ion-button class=\"ion-padding\"  color=\"tertiary\"  (click)=\"presentLoading()\" expand=\"full\">\n  search\n</ion-button> \n\n<hr>\n\n<div *ngFor=\"let item of userreq\">\n  <ion-card>\n     <ion-card-header>\n      <ion-card-title>{{item.uploadDate}}</ion-card-title>\n    </ion-card-header> \n  \n    <ion-card-content>\n     <img src=\"{{item.picture}}\" (click)=\"presentActionSheet(item.delid,item.userid,item.uploadDate,item.storageid,item.picture)\">\n    </ion-card-content>\n  </ion-card>\n</div>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-tabs>\n\n        \n  \n      <ion-tab-bar slot=\"bottom\">\n        <ion-tab-button tab=\"dashboard\" (click)=\"dashboard()\">\n          <ion-label>Upload</ion-label>\n          <ion-icon name=\"cloud-upload-outline\"></ion-icon>\n            </ion-tab-button>\n        <ion-tab-button tab=\"gallery\" (click)=\"gallery()\">\n          <ion-label>Gallery</ion-label>\n          <ion-icon name=\"images-outline\"></ion-icon>\n        </ion-tab-button>\n      </ion-tab-bar>\n    </ion-tabs> \n  </ion-toolbar>\n</ion-footer>\n";
      /***/
    },

    /***/
    "./src/app/pages/search-date/search-date-routing.module.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/search-date/search-date-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: SearchDatePageRoutingModule */

    /***/
    function srcAppPagesSearchDateSearchDateRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchDatePageRoutingModule", function () {
        return SearchDatePageRoutingModule;
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


      var _search_date_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./search-date.page */
      "./src/app/pages/search-date/search-date.page.ts");

      var routes = [{
        path: '',
        component: _search_date_page__WEBPACK_IMPORTED_MODULE_3__["SearchDatePage"]
      }];

      var SearchDatePageRoutingModule = function SearchDatePageRoutingModule() {
        _classCallCheck(this, SearchDatePageRoutingModule);
      };

      SearchDatePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SearchDatePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/search-date/search-date.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/pages/search-date/search-date.module.ts ***!
      \*********************************************************/

    /*! exports provided: SearchDatePageModule */

    /***/
    function srcAppPagesSearchDateSearchDateModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchDatePageModule", function () {
        return SearchDatePageModule;
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


      var _search_date_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./search-date-routing.module */
      "./src/app/pages/search-date/search-date-routing.module.ts");
      /* harmony import */


      var _search_date_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./search-date.page */
      "./src/app/pages/search-date/search-date.page.ts");

      var SearchDatePageModule = function SearchDatePageModule() {
        _classCallCheck(this, SearchDatePageModule);
      };

      SearchDatePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _search_date_routing_module__WEBPACK_IMPORTED_MODULE_5__["SearchDatePageRoutingModule"]],
        declarations: [_search_date_page__WEBPACK_IMPORTED_MODULE_6__["SearchDatePage"]]
      })], SearchDatePageModule);
      /***/
    },

    /***/
    "./src/app/pages/search-date/search-date.page.scss":
    /*!*********************************************************!*\
      !*** ./src/app/pages/search-date/search-date.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesSearchDateSearchDatePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "* {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n\n.menu-header-bg {\n  height: 180px;\n  width: 350px;\n  background-color: #7590d6;\n  background: linear-gradient(90deg, #7590d6 0%, #4d71d7 100%);\n  box-shadow: 0px 1px 10px rgba(98, 140, 255, 0.5);\n  transform: rotate(-15deg);\n  border-radius: 10px 10px 10px 50px;\n  margin-left: -18px;\n  margin-top: -50px;\n  margin-bottom: 60px;\n}\n\n.header-content {\n  position: absolute;\n  top: 80px;\n  left: 15px;\n  display: flex;\n  align-items: center;\n  align-content: center;\n  transform: rotate(15deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2VhcmNoLWRhdGUvc2VhcmNoLWRhdGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0lBQUE7QUFDSjs7QUFFRTtFQUVFLGFBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSw0REFBQTtFQUNBLGdEQUFBO0VBQ0EseUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUdFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7QUFBSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlYXJjaC1kYXRlL3NlYXJjaC1kYXRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XHJcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICBcclxuICAubWVudS1oZWFkZXItYmcgIFxyXG4gIHtcclxuICAgIGhlaWdodDogMTgwcHg7XHJcbiAgICB3aWR0aDogMzUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzU5MGQ2O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjNzU5MGQ2IDAlLCAjNGQ3MWQ3IDEwMCUpO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCAxMHB4IHJnYmEoOTgsMTQwLDI1NSwwLjUpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTE1ZGVnKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDUwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTE4cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtNTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5oZWFkZXItY29udGVudHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogODBweDtcclxuICAgIGxlZnQ6IDE1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE1ZGVnKTtcclxuICB9IFxyXG5cclxuICAvLyBpb24tY2FyZHtcclxuICAvLyAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgLy8gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIC8vICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAvLyAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gIC8vIH1cclxuXHJcbi8vICAgaW9uLWNhcmR7XHJcbi8vICAgICBoZWlnaHQ6IDUwMHB4O1xyXG4vLyAgICAgd2lkdGg6IDEwMCU7XHJcbi8vIH0iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/search-date/search-date.page.ts":
    /*!*******************************************************!*\
      !*** ./src/app/pages/search-date/search-date.page.ts ***!
      \*******************************************************/

    /*! exports provided: SearchDatePage */

    /***/
    function srcAppPagesSearchDateSearchDatePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchDatePage", function () {
        return SearchDatePage;
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


      var src_app_services_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/service.service */
      "./src/app/services/service.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! firebase */
      "./node_modules/firebase/dist/index.esm.js");
      /* harmony import */


      var _ionic_native_downloader_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/downloader/ngx */
      "./node_modules/@ionic-native/downloader/__ivy_ngcc__/ngx/index.js");

      var SearchDatePage = /*#__PURE__*/function () {
        // tslint:disable-next-line: max-line-length
        function SearchDatePage(downloader, service, loadingController, menu, router, alertController, actionSheetController, toastController) {
          _classCallCheck(this, SearchDatePage);

          this.downloader = downloader;
          this.service = service;
          this.loadingController = loadingController;
          this.menu = menu;
          this.router = router;
          this.alertController = alertController;
          this.actionSheetController = actionSheetController;
          this.toastController = toastController;
          var userid = localStorage.getItem('userid');
          console.log('zzp', userid);
          this.id = userid;
        }

        _createClass(SearchDatePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "presentLoading",
          value: function presentLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var loading, _yield$loading$onDidD, role, data;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      console.log(typeof this.searchdt); // tslint:disable-next-line: triple-equals

                      if (!(typeof this.searchdt != 'undefined')) {
                        _context.next = 5;
                        break;
                      }

                      this.search();
                      _context.next = 7;
                      break;

                    case 5:
                      alert('Please Select Date');
                      return _context.abrupt("return");

                    case 7:
                      _context.next = 9;
                      return this.loadingController.create({
                        cssClass: 'my-custom-class',
                        message: 'Please wait...',
                        duration: 2000
                      });

                    case 9:
                      loading = _context.sent;
                      _context.next = 12;
                      return loading.present();

                    case 12:
                      _context.next = 14;
                      return loading.onDidDismiss();

                    case 14:
                      _yield$loading$onDidD = _context.sent;
                      role = _yield$loading$onDidD.role;
                      data = _yield$loading$onDidD.data;
                      console.log('Loading dismissed!');

                    case 18:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          } // search by id and date

        }, {
          key: "search",
          value: function search() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var searchbydt, data, toast;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      searchbydt = {
                        userid: this.id,
                        date: this.searchdt
                      };
                      console.log(searchbydt.date);
                      _context2.next = 4;
                      return this.service.searchbydate(searchbydt);

                    case 4:
                      data = _context2.sent;
                      console.log('b', data);
                      this.userreq = data;

                      if (!(this.userreq.length === 0)) {
                        _context2.next = 12;
                        break;
                      }

                      _context2.next = 10;
                      return this.toastController.create({
                        message: 'No Saved Image Found',
                        duration: 2000
                      });

                    case 10:
                      toast = _context2.sent;
                      toast.present();

                    case 12:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "dashboard",
          value: function dashboard() {
            this.router.navigate(['/dashboard']);
          }
        }, {
          key: "gallery",
          value: function gallery() {
            this.router.navigate(['/show-images']);
          }
        }, {
          key: "presentActionSheet",
          value: function presentActionSheet(delid, userid, uploaddate, storageid, picture) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this = this;

              var actionSheet;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.actionSheetController.create({
                        header: 'Albums',
                        cssClass: 'my-custom-class',
                        buttons: [{
                          text: 'Delete',
                          role: 'destructive',
                          icon: 'trash',
                          handler: function handler() {
                            console.log('Delete clicked');

                            _this.presentAlertConfirm1(delid, userid, uploaddate, storageid);
                          }
                        }, {
                          text: 'download',
                          icon: 'download',
                          handler: function handler() {
                            console.log('download clicked');

                            _this.download(picture);
                          }
                        }, {
                          text: 'Cancel',
                          icon: 'close',
                          role: 'cancel',
                          handler: function handler() {
                            console.log('Cancel clicked');
                          }
                        }]
                      });

                    case 2:
                      actionSheet = _context3.sent;
                      _context3.next = 5;
                      return actionSheet.present();

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "presentAlertConfirm1",
          value: function presentAlertConfirm1(delid, id, uploaddate, storageid) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this2 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Delete!',
                        message: 'Are You Sure to <strong>delete</strong>?',
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

                            _this2.DeletePicture(delid, id, uploaddate, storageid);
                          }
                        }]
                      });

                    case 2:
                      alert = _context4.sent;
                      _context4.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          } // delete picture

        }, {
          key: "DeletePicture",
          value: function DeletePicture(delid, id, uploaddate, storageid) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this3 = this;

              var a, storageref, desertRef;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      console.log('momo', delid);
                      _context6.next = 3;
                      return this.service.del(delid);

                    case 3:
                      a = _context6.sent;
                      console.log(a);
                      storageref = firebase__WEBPACK_IMPORTED_MODULE_5__["default"].storage().ref();
                      desertRef = storageref.child('images' + '/' + storageid);
                      desertRef["delete"]().then(function () {
                        console.log('deleted from storage'); //
                      })["catch"](function () {
                        console.log('Del Failed'); //
                      }).then(function () {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                          var searchbydt, data, toast;
                          return regeneratorRuntime.wrap(function _callee5$(_context5) {
                            while (1) {
                              switch (_context5.prev = _context5.next) {
                                case 0:
                                  searchbydt = {
                                    userid: id,
                                    date: uploaddate
                                  };
                                  _context5.next = 3;
                                  return this.service.searchbydate(searchbydt);

                                case 3:
                                  data = _context5.sent;
                                  console.log('nmnmnmm', data);
                                  this.userreq = data;

                                  if (!(this.userreq.length === 0)) {
                                    _context5.next = 11;
                                    break;
                                  }

                                  _context5.next = 9;
                                  return this.toastController.create({
                                    message: 'No Saved Image Found',
                                    duration: 2000
                                  });

                                case 9:
                                  toast = _context5.sent;
                                  toast.present();

                                case 11:
                                case "end":
                                  return _context5.stop();
                              }
                            }
                          }, _callee5, this);
                        }));
                      });

                    case 8:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "searchdatemenu",
          value: function searchdatemenu() {
            this.menu.enable(true, '8');
            this.menu.open('8');
          }
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
          } // log out

        }, {
          key: "logout",
          value: function logout() {
            localStorage.clear();
            this.router.navigate(['/login']);
          }
        }, {
          key: "download",
          value: function download(picture) {
            var request = {
              uri: picture,
              title: 'MyDownload',
              description: '',
              mimeType: '',
              visibleInDownloadsUi: true,
              notificationVisibility: _ionic_native_downloader_ngx__WEBPACK_IMPORTED_MODULE_6__["NotificationVisibility"].VisibleNotifyCompleted,
              destinationInExternalFilesDir: {
                dirType: 'Downloads',
                subPath: 'MyFile.apk'
              }
            };
            this.downloader.download(request).then(function (location) {
              alert('Downloaded');
            })["catch"](function (error) {
              return console.error(error);
            });
          }
        }]);

        return SearchDatePage;
      }();

      SearchDatePage.ctorParameters = function () {
        return [{
          type: _ionic_native_downloader_ngx__WEBPACK_IMPORTED_MODULE_6__["Downloader"]
        }, {
          type: src_app_services_service_service__WEBPACK_IMPORTED_MODULE_2__["ServiceService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
        }];
      };

      SearchDatePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search-date',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./search-date.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search-date/search-date.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./search-date.page.scss */
        "./src/app/pages/search-date/search-date.page.scss"))["default"]]
      })], SearchDatePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-search-date-search-date-module-es5.js.map
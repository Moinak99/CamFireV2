(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-search-date-search-date-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search-date/search-date.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search-date/search-date.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n        <ion-icon name=\"menu-outline\" size=\"large\" (click)='searchdatemenu()'></ion-icon> \n     </ion-toolbar>\n    </ion-header>\n      <ion-menu side=\"start\" menuId=\"8\" contentId=\"main\" class=\"my-custom-menu\">\n          <ion-toolbar>\n            <div class = \"menu-header-bg\">\n              <div class=\"header-content\">\n           <ion-title>Search by Date</ion-title> </div></div>\n         </ion-toolbar> \n       <!-- </ion-header> -->\n       <ion-content>\n         <ion-list>\n            <ion-item [routerLink]=\"['/dashboard']\"><ion-icon name=\"home-outline\"></ion-icon> &nbsp; Home</ion-item>\n            <ion-item [routerLink]=\"['/user-profile']\"><ion-icon name=\"person-circle-outline\"></ion-icon> &nbsp; Profile</ion-item>\n            <ion-item [routerLink]=\"['/show-images']\"><ion-icon name=\"images-outline\"></ion-icon> &nbsp; Gallery</ion-item>\n            <ion-item (click)=\"presentAlertConfirm()\"><ion-icon name=\"log-out-outline\"></ion-icon> &nbsp;Logout</ion-item>  \n\n           </ion-list>\n        </ion-content>\n      </ion-menu>\n      <ion-router-outlet id=\"main\"></ion-router-outlet>\n<ion-content>\n\n  <ion-item>\n    <ion-label position=\"floating\">Select Date:</ion-label>\n    <ion-input type=\"date\" [(ngModel)]=\"searchdt\" required></ion-input>\n</ion-item>\n\n<ion-button class=\"ion-padding\"  color=\"tertiary\"  (click)=\"presentLoading()\" expand=\"full\">\n  search\n</ion-button> \n\n<hr>\n\n<div *ngFor=\"let item of userreq\">\n  <ion-card>\n     <ion-card-header>\n      <ion-card-title>{{item.uploadDate}}</ion-card-title>\n    </ion-card-header> \n  \n    <ion-card-content>\n     <img src=\"{{item.picture}}\" (click)=\"presentActionSheet(item.delid,item.userid,item.uploadDate,item.storageid,item.picture)\">\n    </ion-card-content>\n  </ion-card>\n</div>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-tabs>\n\n        \n  \n      <ion-tab-bar slot=\"bottom\">\n        <ion-tab-button tab=\"dashboard\" (click)=\"dashboard()\">\n          <ion-label>Upload</ion-label>\n          <ion-icon name=\"cloud-upload-outline\"></ion-icon>\n            </ion-tab-button>\n        <ion-tab-button tab=\"gallery\" (click)=\"gallery()\">\n          <ion-label>Gallery</ion-label>\n          <ion-icon name=\"images-outline\"></ion-icon>\n        </ion-tab-button>\n      </ion-tab-bar>\n    </ion-tabs> \n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "./src/app/pages/search-date/search-date-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/search-date/search-date-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: SearchDatePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchDatePageRoutingModule", function() { return SearchDatePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _search_date_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search-date.page */ "./src/app/pages/search-date/search-date.page.ts");




const routes = [
    {
        path: '',
        component: _search_date_page__WEBPACK_IMPORTED_MODULE_3__["SearchDatePage"]
    }
];
let SearchDatePageRoutingModule = class SearchDatePageRoutingModule {
};
SearchDatePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SearchDatePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/search-date/search-date.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/search-date/search-date.module.ts ***!
  \*********************************************************/
/*! exports provided: SearchDatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchDatePageModule", function() { return SearchDatePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _search_date_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search-date-routing.module */ "./src/app/pages/search-date/search-date-routing.module.ts");
/* harmony import */ var _search_date_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search-date.page */ "./src/app/pages/search-date/search-date.page.ts");







let SearchDatePageModule = class SearchDatePageModule {
};
SearchDatePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _search_date_routing_module__WEBPACK_IMPORTED_MODULE_5__["SearchDatePageRoutingModule"]
        ],
        declarations: [_search_date_page__WEBPACK_IMPORTED_MODULE_6__["SearchDatePage"]]
    })
], SearchDatePageModule);



/***/ }),

/***/ "./src/app/pages/search-date/search-date.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/search-date/search-date.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n\n.menu-header-bg {\n  height: 180px;\n  width: 350px;\n  background-color: #7590d6;\n  background: linear-gradient(90deg, #7590d6 0%, #4d71d7 100%);\n  box-shadow: 0px 1px 10px rgba(98, 140, 255, 0.5);\n  transform: rotate(-15deg);\n  border-radius: 10px 10px 10px 50px;\n  margin-left: -18px;\n  margin-top: -50px;\n  margin-bottom: 60px;\n}\n\n.header-content {\n  position: absolute;\n  top: 80px;\n  left: 15px;\n  display: flex;\n  align-items: center;\n  align-content: center;\n  transform: rotate(15deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2VhcmNoLWRhdGUvc2VhcmNoLWRhdGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0lBQUE7QUFDSjs7QUFFRTtFQUVFLGFBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSw0REFBQTtFQUNBLGdEQUFBO0VBQ0EseUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUdFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7QUFBSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlYXJjaC1kYXRlL3NlYXJjaC1kYXRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XHJcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICBcclxuICAubWVudS1oZWFkZXItYmcgIFxyXG4gIHtcclxuICAgIGhlaWdodDogMTgwcHg7XHJcbiAgICB3aWR0aDogMzUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzU5MGQ2O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjNzU5MGQ2IDAlLCAjNGQ3MWQ3IDEwMCUpO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCAxMHB4IHJnYmEoOTgsMTQwLDI1NSwwLjUpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTE1ZGVnKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDUwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTE4cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtNTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5oZWFkZXItY29udGVudHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogODBweDtcclxuICAgIGxlZnQ6IDE1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE1ZGVnKTtcclxuICB9IFxyXG5cclxuICAvLyBpb24tY2FyZHtcclxuICAvLyAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgLy8gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIC8vICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAvLyAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gIC8vIH1cclxuXHJcbi8vICAgaW9uLWNhcmR7XHJcbi8vICAgICBoZWlnaHQ6IDUwMHB4O1xyXG4vLyAgICAgd2lkdGg6IDEwMCU7XHJcbi8vIH0iXX0= */");

/***/ }),

/***/ "./src/app/pages/search-date/search-date.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/search-date/search-date.page.ts ***!
  \*******************************************************/
/*! exports provided: SearchDatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchDatePage", function() { return SearchDatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/service.service */ "./src/app/services/service.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.esm.js");
/* harmony import */ var _ionic_native_downloader_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/downloader/ngx */ "./node_modules/@ionic-native/downloader/__ivy_ngcc__/ngx/index.js");







let SearchDatePage = class SearchDatePage {
    // tslint:disable-next-line: max-line-length
    constructor(downloader, service, loadingController, menu, router, alertController, actionSheetController, toastController) {
        this.downloader = downloader;
        this.service = service;
        this.loadingController = loadingController;
        this.menu = menu;
        this.router = router;
        this.alertController = alertController;
        this.actionSheetController = actionSheetController;
        this.toastController = toastController;
        const userid = localStorage.getItem('userid');
        console.log('zzp', userid);
        this.id = userid;
    }
    ngOnInit() {
    }
    presentLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(typeof (this.searchdt));
            // tslint:disable-next-line: triple-equals
            if (typeof (this.searchdt) != 'undefined') {
                this.search();
            }
            else {
                alert('Please Select Date');
                return;
            }
            //
            const loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                duration: 2000
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
            console.log('Loading dismissed!');
        });
    }
    // search by id and date
    search() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const searchbydt = {
                userid: this.id,
                date: this.searchdt,
            };
            console.log(searchbydt.date);
            const data = yield this.service.searchbydate(searchbydt);
            console.log('b', data);
            this.userreq = data;
            if (this.userreq.length === 0) {
                const toast = yield this.toastController.create({
                    message: 'No Saved Image Found',
                    duration: 2000
                });
                toast.present();
            }
        });
    }
    dashboard() {
        this.router.navigate(['/dashboard']);
    }
    gallery() {
        this.router.navigate(['/show-images']);
    }
    presentActionSheet(delid, userid, uploaddate, storageid, picture) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'Albums',
                cssClass: 'my-custom-class',
                buttons: [{
                        text: 'Delete',
                        role: 'destructive',
                        icon: 'trash',
                        handler: () => {
                            console.log('Delete clicked');
                            this.presentAlertConfirm1(delid, userid, uploaddate, storageid);
                        }
                    }, {
                        text: 'download',
                        icon: 'download',
                        handler: () => {
                            console.log('download clicked');
                            this.download(picture);
                        }
                    }, {
                        text: 'Cancel',
                        icon: 'close',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    }]
            });
            yield actionSheet.present();
        });
    }
    presentAlertConfirm1(delid, id, uploaddate, storageid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Delete!',
                message: 'Are You Sure to <strong>delete</strong>?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Okay',
                        handler: () => {
                            console.log('Confirm Okay');
                            this.DeletePicture(delid, id, uploaddate, storageid);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    // delete picture
    DeletePicture(delid, id, uploaddate, storageid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('momo', delid);
            const a = yield this.service.del(delid);
            console.log(a);
            const storageref = firebase__WEBPACK_IMPORTED_MODULE_5__["default"].storage().ref();
            const desertRef = storageref.child('images' + '/' + storageid);
            desertRef.delete().then(() => {
                console.log('deleted from storage'); //
            }).catch(() => {
                console.log('Del Failed'); //
            }).then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const searchbydt = {
                    userid: id,
                    date: uploaddate,
                };
                const data = yield this.service.searchbydate(searchbydt);
                console.log('nmnmnmm', data);
                this.userreq = data;
                if (this.userreq.length === 0) {
                    const toast = yield this.toastController.create({
                        message: 'No Saved Image Found',
                        duration: 2000
                    });
                    toast.present();
                }
            }));
        });
    }
    searchdatemenu() {
        this.menu.enable(true, '8');
        this.menu.open('8');
    }
    presentAlertConfirm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Are You Sure!',
                message: 'Confirm <strong>Logout</strong>!',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Okay',
                        handler: () => {
                            console.log('Confirm Okay');
                            this.logout();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    // log out
    logout() {
        localStorage.clear();
        this.router.navigate(['/login']);
    }
    download(picture) {
        const request = {
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
        this.downloader.download(request)
            .then((location) => {
            alert('Downloaded');
        })
            .catch((error) => console.error(error));
    }
};
SearchDatePage.ctorParameters = () => [
    { type: _ionic_native_downloader_ngx__WEBPACK_IMPORTED_MODULE_6__["Downloader"] },
    { type: src_app_services_service_service__WEBPACK_IMPORTED_MODULE_2__["ServiceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] }
];
SearchDatePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search-date',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./search-date.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search-date/search-date.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./search-date.page.scss */ "./src/app/pages/search-date/search-date.page.scss")).default]
    })
], SearchDatePage);



/***/ })

}]);
//# sourceMappingURL=pages-search-date-search-date-module-es2015.js.map
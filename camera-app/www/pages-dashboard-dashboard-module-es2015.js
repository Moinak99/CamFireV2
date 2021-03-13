(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-dashboard-dashboard-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n        <ion-icon name=\"menu-outline\" size=\"large\" (click)='dashboardMenu()'></ion-icon> \n     </ion-toolbar>\n    </ion-header>\n      <ion-menu side=\"start\" menuId=\"2\" contentId=\"main\" class=\"my-custom-menu\">\n          <ion-toolbar>\n            <div class = \"menu-header-bg\">\n              <div class=\"header-content\">\n           <ion-title>Welcome</ion-title> </div></div>\n         </ion-toolbar> \n       <!-- </ion-header> -->\n       <ion-content>\n         <ion-list>\n            <ion-item [routerLink]=\"['/dashboard']\"><ion-icon name=\"home-outline\"></ion-icon> &nbsp; Home</ion-item>\n            <ion-item [routerLink]=\"['/user-profile']\"><ion-icon name=\"person-circle-outline\"></ion-icon> &nbsp; Profile</ion-item>\n\n            <!-- <ion-item (click)=\"showImage()\"><ion-icon name=\"images-outline\"></ion-icon>&nbsp;Gallery</ion-item>\n            <ion-item [routerLink]=\"['/search-date']\"><ion-icon name=\"calendar-outline\"></ion-icon>&nbsp;Search Image by Date</ion-item> -->\n\n            <ion-item (click)=\"presentAlertConfirm()\"><ion-icon name=\"log-out-outline\"></ion-icon> &nbsp;Logout</ion-item>  \n  \n           </ion-list>\n        </ion-content>\n      </ion-menu>\n      <ion-router-outlet id=\"main\"></ion-router-outlet>\n\n<ion-content>\n\n\n  <!-- <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button>\n      <ion-icon name=\"camera-outline\" (click)=\"presentLoading()\"></ion-icon>\n\n    </ion-fab-button>\n\n    <ion-fab-button>\n      <ion-icon name=\"camera-outline\" (click)=\"presentLoading()\"></ion-icon>\n\n    </ion-fab-button>\n    \n  </ion-fab> -->\n\n\n\n<ion-button  class=\"ion-padding\"  color=\"primary\" size=\"large\" (click)=\"presentLoading()\"><ion-icon name=\"camera-outline\"></ion-icon>Camera</ion-button>\n<ion-button  class=\"ion-padding\" color=\"secondary\" size=\"large\" (click)=\"presentLoadingz()\"><ion-icon name=\"cloud-upload-outline\"></ion-icon> Gallery</ion-button>\n\n\n<div *ngIf=\"cardopen\">\n<ion-card>\n  <ion-card-content>\n    <img src=\"{{takephoto}}\">  \n  </ion-card-content>\n  <ion-button (click)=\"uploadImageCloud()\">Upload to cloud</ion-button>\n\n</ion-card>\n</div>\n\n</ion-content>\n<!-- <ion-footer>\n  <ion-toolbar>\n    <ion-title>Welcome</ion-title>\n  </ion-toolbar>\n</ion-footer> -->\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-tabs>\n\n        \n  \n      <ion-tab-bar slot=\"bottom\">\n        <ion-tab-button tab=\"gallery\" (click)=\"gallery()\">\n          <ion-label>Gallery</ion-label>\n          <ion-icon name=\"images-outline\"></ion-icon>\n            </ion-tab-button>\n        <ion-tab-button tab=\"search\" (click)=\"search()\">\n          <ion-label>Search image</ion-label>\n          <ion-icon name=\"search-outline\"></ion-icon>\n        </ion-tab-button>\n      </ion-tab-bar>\n    </ion-tabs> \n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: DashboardPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageRoutingModule", function() { return DashboardPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.page */ "./src/app/pages/dashboard/dashboard.page.ts");




const routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_3__["DashboardPage"]
    }
];
let DashboardPageRoutingModule = class DashboardPageRoutingModule {
};
DashboardPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DashboardPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/*! exports provided: DashboardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/pages/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard.page */ "./src/app/pages/dashboard/dashboard.page.ts");







let DashboardPageModule = class DashboardPageModule {
};
DashboardPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__["DashboardPageRoutingModule"]
        ],
        declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"]]
    })
], DashboardPageModule);



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n\n.menu-header-bg {\n  height: 180px;\n  width: 350px;\n  background-color: #7590d6;\n  background: linear-gradient(90deg, #7590d6 0%, #4d71d7 100%);\n  box-shadow: 0px 1px 10px rgba(98, 140, 255, 0.5);\n  transform: rotate(-15deg);\n  border-radius: 10px 10px 10px 50px;\n  margin-left: -18px;\n  margin-top: -50px;\n  margin-bottom: 60px;\n}\n\n.header-content {\n  position: absolute;\n  top: 80px;\n  left: 15px;\n  display: flex;\n  align-items: center;\n  align-content: center;\n  transform: rotate(15deg);\n}\n\n.large-button {\n  width: 150px !important;\n  height: 5 0px !important;\n}\n\nion-button {\n  --border-radius: 9px;\n  --border-shadow: none;\n  text-transform: initial;\n  font-size: 12px;\n  width: 48%;\n  padding-left: 30px;\n  --background: #fff;\n  --color: #3b3beb;\n  --border-style:solid;\n  --border-color: #eeeeee;\n  --border-width:0.5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3SUFBQTtBQUNKOztBQUVFO0VBRUUsYUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLDREQUFBO0VBQ0EsZ0RBQUE7RUFDQSx5QkFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBR0U7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtBQUFKOztBQWVBO0VBQ0UsdUJBQUE7RUFDQSx3QkFBQTtBQVpGOztBQWVBO0VBQ0Usb0JBQUE7RUFDRixxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDRSxrQkFBQTtFQUNGLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7QUFaQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcclxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG4gIFxyXG4gIC5tZW51LWhlYWRlci1iZyAgXHJcbiAge1xyXG4gICAgaGVpZ2h0OiAxODBweDtcclxuICAgIHdpZHRoOiAzNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3NTkwZDY7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM3NTkwZDYgMCUsICM0ZDcxZDcgMTAwJSk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDEwcHggcmdiYSg5OCwxNDAsMjU1LDAuNSk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTVkZWcpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggNTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMThweDtcclxuICAgIG1hcmdpbi10b3A6IC01MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNjBweDtcclxuICB9XHJcbiAgXHJcbiAgLmhlYWRlci1jb250ZW50e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA4MHB4O1xyXG4gICAgbGVmdDogMTVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTVkZWcpO1xyXG4gIH0gXHJcblxyXG4gIC8vIGlvbi1jYXJke1xyXG4gIC8vICAgZGlzcGxheTogZmxleDtcclxuICAvLyAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgLy8gICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIC8vICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgLy8gfVxyXG5cclxuLy8gICBpb24tY2FyZHtcclxuLy8gICAgIGhlaWdodDogNTAwcHg7XHJcbi8vICAgICB3aWR0aDogMTAwJTtcclxuLy8gfVxyXG5cclxuLmxhcmdlLWJ1dHRvbiB7XHJcbiAgd2lkdGg6IDE1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiA1IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tYnV0dG9ue1xyXG4gIC0tYm9yZGVyLXJhZGl1czogOXB4O1xyXG4tLWJvcmRlci1zaGFkb3c6IG5vbmU7XHJcbnRleHQtdHJhbnNmb3JtOiBpbml0aWFsO1xyXG5mb250LXNpemU6IDEycHg7XHJcbndpZHRoOiA0OCU7XHJcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4tLWJhY2tncm91bmQ6ICNmZmY7XHJcbi0tY29sb3I6ICMzYjNiZWI7XHJcbi0tYm9yZGVyLXN0eWxlOnNvbGlkO1xyXG4tLWJvcmRlci1jb2xvcjogI2VlZWVlZTtcclxuLS1ib3JkZXItd2lkdGg6MC41cHg7XHJcblxyXG59Il19 */");

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.page.ts ***!
  \***************************************************/
/*! exports provided: DashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPage", function() { return DashboardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.esm.js");
/* harmony import */ var src_app_services_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/service.service */ "./src/app/services/service.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/crop/ngx */ "./node_modules/@ionic-native/crop/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




;





let DashboardPage = class DashboardPage {
    // tslint:disable-next-line: max-line-length
    constructor(camera, crop, datePipe, service, alertController, loadingController, menu, router) {
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
        const id = localStorage.getItem('userid');
        if (id != null) {
            console.log('m', id);
            this.userid = id;
        }
        else {
            this.router.navigate(['/login']);
        }
    }
    ngOnInit() {
    }
    // taking the pictures and saving it into base 64 string format
    takePicture() {
        const options = {
            quality: 30,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            allowEdit: true,
            sourceType: 1,
            saveToPhotoAlbum: false,
        };
        this.camera.getPicture(options).then((imageData) => {
            this.cardopen = !this.cardopen;
            this.takephoto = 'data:image/jpeg;base64,' + imageData;
            console.log(this.takephoto);
        }, (err) => {
            console.log(err);
        });
    }
    // it will work when user choose upload from gallery
    getImage() {
        const options = {
            quality: 20,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            saveToPhotoAlbum: false,
            allowEdit: true
        };
        console.log(JSON.stringify(options));
        this.camera.getPicture(options).then((imageData) => {
            this.cardopen = !this.cardopen;
            this.takephoto = 'data:image/jpeg;base64,' + imageData;
            console.log('Gallery', this.takephoto);
        }, (err) => {
        });
    }
    // loading
    presentLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                duration: 2000
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
            console.log('Loading dismissed!');
            this.takePicture();
        });
    }
    // loading2
    presentLoadingz() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                duration: 1000
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
            console.log('Loading dismissed!');
            this.getImage();
        });
    }
    // After getting link, by calling this method the base 64 link will be send to service
    uploadImageCloud() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = this.loadingController.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                duration: 5000
            });
            (yield loading).present();
            // tslint:disable-next-line: prefer-const
            let date = new Date();
            const uploaddate = this.datePipe.transform(date, 'yyyy-MM-dd');
            console.log(uploaddate);
            const today1 = new Date();
            const date1 = today1.getFullYear() + '-' + (today1.getMonth() + 1) + '-' + today1.getDate();
            const time1 = today1.getHours() + ':' + today1.getMinutes() + ':' + today1.getSeconds() + ':' + today1.getMilliseconds();
            const dateTime1 = date1 + 'and' + time1; // -------
            const mergedatewithuserid = this.userid + dateTime1;
            const messageurl = this.takephoto;
            // const a = messageurl.
            const storageref = firebase__WEBPACK_IMPORTED_MODULE_3__["default"].storage().ref();
            storageref.child('images' + '/' + this.userid + dateTime1).putString(messageurl, 'data_url').then((snapshot) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log('success');
                const downloadurl = yield snapshot.ref.getDownloadURL();
                this.imagestr = downloadurl;
                // const a = storageref.getDownloadURL();
                console.log('Download Url', downloadurl);
            })).then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const savedetails = {
                    userid: this.userid,
                    imageurl: this.imagestr,
                    date: uploaddate,
                    storagedel: mergedatewithuserid
                };
                const a = yield this.service.saveImage(savedetails);
                console.log('Mercy', a);
                this.presentAlert();
                this.cardopen = !this.cardopen;
            })).catch(() => {
                console.log('bye');
            });
        });
    }
    // loading 3
    //  async presentLoading1() {
    //   const { role, data } = await (await loading).onDidDismiss();
    //   console.log('Loading dismissed!');
    //   this.presentAlert();
    //   this.cardopen = !this.cardopen;
    // }
    // alert
    presentAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                // header: 'Alert',
                // subHeader: 'Subtitle',
                message: 'Successfully Added',
                buttons: ['OK']
            });
            yield alert.present();
            this.takephoto = '';
        });
    }
    // show image
    showImage() {
        this.router.navigate(['/show-images']);
    }
    // menu
    search() {
        this.router.navigate(['/search-date']);
    }
    gallery() {
        this.router.navigate(['/show-images']);
    }
    dashboardMenu() {
        this.menu.enable(true, '2');
        this.menu.open('2');
    }
    // alert with choice
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
    // logout and clearing localstorage
    logout() {
        localStorage.clear();
        this.router.navigate(['/login']);
    }
};
DashboardPage.ctorParameters = () => [
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"] },
    { type: _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_7__["Crop"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"] },
    { type: src_app_services_service_service__WEBPACK_IMPORTED_MODULE_4__["ServiceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
DashboardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./dashboard.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./dashboard.page.scss */ "./src/app/pages/dashboard/dashboard.page.scss")).default]
    })
], DashboardPage);



/***/ })

}]);
//# sourceMappingURL=pages-dashboard-dashboard-module-es2015.js.map
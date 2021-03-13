(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-show-images-show-images-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/show-images/show-images.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/show-images/show-images.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n        <ion-icon name=\"menu-outline\" size=\"large\" (click)='showMenu()'></ion-icon> \n     </ion-toolbar>\n    </ion-header>\n      <ion-menu side=\"start\" menuId=\"3\" contentId=\"main\" class=\"my-custom-menu\">\n          <ion-toolbar>\n            <div class = \"menu-header-bg\">\n              <div class=\"header-content\">\n           <ion-title>Show Images</ion-title> </div></div>\n         </ion-toolbar> \n       <!-- </ion-header> -->\n       <ion-content>\n         <ion-list>\n            <ion-item [routerLink]=\"['/dashboard']\"><ion-icon name=\"home-outline\"></ion-icon>&nbsp;Dashboard</ion-item>\n            <!-- <ion-item (click)=\"merchantLogout()\">Logout</ion-item> -->\n            <!-- <ion-item [routerLink]=\"['/register']\">Register</ion-item> -->\n            <ion-item [routerLink]=\"['/user-profile']\"><ion-icon name=\"person-circle-outline\"></ion-icon>&nbsp;Profile</ion-item>\n\n            <!-- <ion-item [routerLink]=\"['/search-date']\"><ion-icon name=\"calendar-outline\"></ion-icon>&nbsp;Search Image by Date</ion-item> -->\n            <ion-item (click)=\"logout()\"><ion-icon name=\"log-out-outline\"></ion-icon>&nbsp;Logout</ion-item>\n\n\n            <!-- <ion-item [routerLink]=\"['/merchant-reg']\">Register</ion-item> -->\n    \n           </ion-list>\n        </ion-content>\n      </ion-menu>\n      <ion-router-outlet id=\"main\"></ion-router-outlet>\n\n<ion-content>\n  <h3>Gallery</h3>\n  <div *ngFor=\"let item of userreq\">\n  <ion-card>\n     <ion-card-header>\n      <ion-card-title>{{item.uploadDate}}</ion-card-title>\n    </ion-card-header> \n  \n    <ion-card-content>\n     <img src=\"{{item.picture}}\" (click)=\"presentActionSheet(item.delid,item.storageid,item.picture)\">\n    </ion-card-content>\n  </ion-card>\n</div>\n\n\n\n\n\n<!-- <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\">\n  <ion-fab-button color=\"dark\" size=\"large\">\n    <ion-icon md=\"caret-up\" ios=\"chevron-up-circle-outline\" size=\"large\"></ion-icon>\n  </ion-fab-button>\n  <ion-fab-list side=\"top\">\n\n    <ion-fab-button color=\"light\"(click)=\"dashboard()\">\n      <ion-icon name=\"cloud-upload-outline\" ></ion-icon>\n        </ion-fab-button>\n    <ion-fab-button color=\"light\" (click)=\"search()\">\n      <ion-icon name=\"search\"></ion-icon>\n    </ion-fab-button>\n    \n  </ion-fab-list>\n</ion-fab> -->\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-tabs>\n\n        \n  \n      <ion-tab-bar slot=\"bottom\">\n        <ion-tab-button tab=\"dashboard\" (click)=\"dashboard()\">\n          <ion-label>Upload</ion-label>\n          <ion-icon name=\"cloud-upload-outline\"></ion-icon>\n            </ion-tab-button>\n        <ion-tab-button tab=\"search\" (click)=\"search()\">\n          <ion-label>Search image</ion-label>\n          <ion-icon name=\"search-outline\"></ion-icon>\n        </ion-tab-button>\n      </ion-tab-bar>\n    </ion-tabs> \n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "./src/app/pages/show-images/show-images-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/show-images/show-images-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ShowImagesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowImagesPageRoutingModule", function() { return ShowImagesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _show_images_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./show-images.page */ "./src/app/pages/show-images/show-images.page.ts");




const routes = [
    {
        path: '',
        component: _show_images_page__WEBPACK_IMPORTED_MODULE_3__["ShowImagesPage"]
    }
];
let ShowImagesPageRoutingModule = class ShowImagesPageRoutingModule {
};
ShowImagesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ShowImagesPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/show-images/show-images.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/show-images/show-images.module.ts ***!
  \*********************************************************/
/*! exports provided: ShowImagesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowImagesPageModule", function() { return ShowImagesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _show_images_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./show-images-routing.module */ "./src/app/pages/show-images/show-images-routing.module.ts");
/* harmony import */ var _show_images_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./show-images.page */ "./src/app/pages/show-images/show-images.page.ts");







let ShowImagesPageModule = class ShowImagesPageModule {
};
ShowImagesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _show_images_routing_module__WEBPACK_IMPORTED_MODULE_5__["ShowImagesPageRoutingModule"]
        ],
        declarations: [_show_images_page__WEBPACK_IMPORTED_MODULE_6__["ShowImagesPage"]]
    })
], ShowImagesPageModule);



/***/ }),

/***/ "./src/app/pages/show-images/show-images.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/show-images/show-images.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n\n.menu-header-bg {\n  height: 180px;\n  width: 350px;\n  background-color: #7590d6;\n  background: linear-gradient(90deg, #7590d6 0%, #4d71d7 100%);\n  box-shadow: 0px 1px 10px rgba(98, 140, 255, 0.5);\n  transform: rotate(-15deg);\n  border-radius: 10px 10px 10px 50px;\n  margin-left: -18px;\n  margin-top: -50px;\n  margin-bottom: 60px;\n}\n\nh3 {\n  text-align: center;\n}\n\n.header-content {\n  position: absolute;\n  top: 80px;\n  left: 15px;\n  display: flex;\n  align-items: center;\n  align-content: center;\n  transform: rotate(15deg);\n}\n\n.ion-fab {\n  size: 200;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2hvdy1pbWFnZXMvc2hvdy1pbWFnZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0lBQUE7QUFDSjs7QUFFRTtFQUVFLGFBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSw0REFBQTtFQUNBLGdEQUFBO0VBQ0EseUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUVFO0VBQ0Usa0JBQUE7QUFDSjs7QUFFRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0FBQ0o7O0FBRUU7RUFFRSxTQUFBO0FBQUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zaG93LWltYWdlcy9zaG93LWltYWdlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xyXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxuICB9XHJcbiAgXHJcbiAgLm1lbnUtaGVhZGVyLWJnICBcclxuICB7XHJcbiAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc1OTBkNjtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzc1OTBkNiAwJSwgIzRkNzFkNyAxMDAlKTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggMTBweCByZ2JhKDk4LDE0MCwyNTUsMC41KTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xNWRlZyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCA1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xOHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTUwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xyXG4gIH1cclxuICBoM3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmhlYWRlci1jb250ZW50e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA4MHB4O1xyXG4gICAgbGVmdDogMTVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTVkZWcpO1xyXG4gIH0gXHJcblxyXG4gIC5pb24tZmFiXHJcbiAge1xyXG4gICAgc2l6ZTogMjAwO1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/pages/show-images/show-images.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/show-images/show-images.page.ts ***!
  \*******************************************************/
/*! exports provided: ShowImagesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowImagesPage", function() { return ShowImagesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.esm.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/service.service */ "./src/app/services/service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_native_base64_to_gallery_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/base64-to-gallery/ngx */ "./node_modules/@ionic-native/base64-to-gallery/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_downloader_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/downloader/ngx */ "./node_modules/@ionic-native/downloader/__ivy_ngcc__/ngx/index.js");








let ShowImagesPage = class ShowImagesPage {
    // tslint:disable-next-line: max-line-length
    constructor(downloader, loadingController, actionSheetController, base64ToGallery, toastController, alertController, router, service, menu) {
        this.downloader = downloader;
        this.loadingController = loadingController;
        this.actionSheetController = actionSheetController;
        this.base64ToGallery = base64ToGallery;
        this.toastController = toastController;
        this.alertController = alertController;
        this.router = router;
        this.service = service;
        this.menu = menu;
        const userid = localStorage.getItem('userid');
        console.log('zzp', userid);
        const database = firebase__WEBPACK_IMPORTED_MODULE_2__["default"].firestore();
        const data = database.collection('userUploads').where('Userid', '==', userid);
        try {
            data.onSnapshot((querySnapshot) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const myarr = []; // empty array create korlam
                querySnapshot.forEach((doc) => {
                    console.log(doc.id);
                    const h = {
                        delid: doc.id,
                        userid: doc.data().Userid,
                        picture: doc.data().ImageUrl,
                        uploadDate: doc.data().uploadDate,
                        storageid: doc.data().storageid
                    };
                    myarr.push(h); // array push
                });
                this.userreq = myarr;
                console.log('ArrayofObj', this.userreq); // print
                if (this.userreq.length === 0) {
                    const toast = yield this.toastController.create({
                        message: 'No Saved Image Found',
                        duration: 2000,
                        position: 'middle',
                    });
                    toast.present();
                }
            }));
        }
        catch (e) {
            console.log('error');
        }
    }
    ngOnInit() {
    }
    logout() {
        localStorage.clear();
        this.router.navigate(['/login']);
    }
    presentActionSheet(delid, storageid, picture) {
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
                            this.presentAlertConfirm(delid, storageid);
                        }
                    },
                    {
                        text: 'download',
                        icon: 'download',
                        handler: () => {
                            console.log('download clicked');
                            this.download(picture);
                        }
                    },
                    {
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
    presentAlertConfirm(delid, storageid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Delete!',
                message: 'Are you <strong>Sure</strong>?',
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
                            this.DeletePicture(delid, storageid);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    // delete
    DeletePicture(delid, storageid) {
        console.log('momo', delid);
        const a = this.service.del(delid);
        console.log(a);
        const storageref = firebase__WEBPACK_IMPORTED_MODULE_2__["default"].storage().ref();
        const desertRef = storageref.child('images' + '/' + storageid);
        desertRef.delete().then(() => {
            console.log('deleted from storage'); //
        }).catch(() => {
            console.log('Del Failed'); //
        });
    }
    dashboard() {
        this.router.navigate(['/dashboard']);
    }
    search() {
        this.router.navigate(['/search-date']);
    }
    showMenu() {
        this.menu.enable(true, '3');
        this.menu.open('3');
    }
    // saveDevice(picture: string)
    // {
    //   const base64option: Base64ToGalleryOptions =
    //   {
    //     prefix: 'img',
    //     mediaScanner: true,
    //   };
    //   // const todecode = atob(picture);
    //   // console.log(todecode);
    //   this.base64ToGallery.base64ToGallery(picture, base64option).then(
    //     res => alert('Saved image to gallery ' + JSON.stringify(res)),
    //     err => alert('Error saving image to gallery ' + JSON.stringify(err)),
    //   ).catch((e) => {
    //     alert(e);
    //   });
    // }
    presentToasct() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Your settings have been saved.',
                duration: 2000
            });
            toast.present();
        });
    }
    download(picture) {
        const request = {
            uri: picture,
            title: 'MyDownload',
            description: '',
            mimeType: '',
            visibleInDownloadsUi: true,
            notificationVisibility: _ionic_native_downloader_ngx__WEBPACK_IMPORTED_MODULE_7__["NotificationVisibility"].VisibleNotifyCompleted,
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
ShowImagesPage.ctorParameters = () => [
    { type: _ionic_native_downloader_ngx__WEBPACK_IMPORTED_MODULE_7__["Downloader"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] },
    { type: _ionic_native_base64_to_gallery_ngx__WEBPACK_IMPORTED_MODULE_6__["Base64ToGallery"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_services_service_service__WEBPACK_IMPORTED_MODULE_4__["ServiceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] }
];
ShowImagesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-show-images',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./show-images.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/show-images/show-images.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./show-images.page.scss */ "./src/app/pages/show-images/show-images.page.scss")).default]
    })
], ShowImagesPage);



/***/ })

}]);
//# sourceMappingURL=pages-show-images-show-images-module-es2015.js.map
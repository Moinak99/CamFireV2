(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-profile-user-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-profile/user-profile.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-profile/user-profile.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n        <ion-icon name=\"menu-outline\" size=\"large\" (click)='userprof()'></ion-icon> \n     </ion-toolbar>\n    </ion-header>\n      <ion-menu side=\"start\" menuId=\"6\" contentId=\"main\" class=\"my-custom-menu\">\n          <ion-toolbar>\n            <div class = \"menu-header-bg\">\n              <div class=\"header-content\">\n           <ion-title>Profile</ion-title> </div></div>\n         </ion-toolbar> \n       <!-- </ion-header> -->\n       <ion-content>\n         <ion-list>\n            <ion-item [routerLink]=\"['/dashboard']\"><ion-icon name=\"home-outline\"></ion-icon> &nbsp; Home</ion-item>\n            <ion-item [routerLink]=\"['/user-profile']\"><ion-icon name=\"person-circle-outline\"></ion-icon> &nbsp; Profile</ion-item>\n            <ion-item (click)=\"showImage()\"><ion-icon name=\"images-outline\"></ion-icon>&nbsp;Gallery</ion-item>\n            <ion-item (click)=\"presentAlertConfirm()\"><ion-icon name=\"log-out-outline\"></ion-icon> &nbsp;Logout</ion-item>  \n  \n           </ion-list>\n        </ion-content>\n      </ion-menu>\n      <ion-router-outlet id=\"main\"></ion-router-outlet>\n<ion-content>\n\n\n\n  <ion-card>\n    <ion-img></ion-img>\n    <ion-item>\n      <ion-avatar item start>\n        <ion-img src=\"assets\\user-male.jpg\"></ion-img>\n      </ion-avatar>\n\n    </ion-item>\n    <div *ngFor=\"let item of userdata\">\n    <ion-card-content>\n      <ion-card-title>\n        {{item.Name}}\n      </ion-card-title>\n    </ion-card-content>\n\n    <ion-card-content>\n      <h4>Email:</h4>  {{item.Email}}\n    </ion-card-content>\n\n    <ion-card-content>\n      <h4>Date of Birth:</h4>   {{item.DateofBirth}}\n    </ion-card-content>\n\n    <ion-card-content>\n     <h4>Contact:</h4> {{item.Contact}}\n  </ion-card-content>\n\n\n  <ion-card-content>\n    <ion-button color=\"secondary\" (click)=\"openModal()\">update</ion-button>\n </ion-card-content>\n</div>\n  </ion-card>\n\n\n\n\n\n\n\n\n\n\n\n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/user-profile/user-profile-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/user-profile/user-profile-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: UserProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfilePageRoutingModule", function() { return UserProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _user_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-profile.page */ "./src/app/user-profile/user-profile.page.ts");




const routes = [
    {
        path: '',
        component: _user_profile_page__WEBPACK_IMPORTED_MODULE_3__["UserProfilePage"]
    }
];
let UserProfilePageRoutingModule = class UserProfilePageRoutingModule {
};
UserProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UserProfilePageRoutingModule);



/***/ }),

/***/ "./src/app/user-profile/user-profile.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/user-profile/user-profile.module.ts ***!
  \*****************************************************/
/*! exports provided: UserProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfilePageModule", function() { return UserProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _user_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-profile-routing.module */ "./src/app/user-profile/user-profile-routing.module.ts");
/* harmony import */ var _user_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-profile.page */ "./src/app/user-profile/user-profile.page.ts");







let UserProfilePageModule = class UserProfilePageModule {
};
UserProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _user_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserProfilePageRoutingModule"]
        ],
        declarations: [_user_profile_page__WEBPACK_IMPORTED_MODULE_6__["UserProfilePage"]]
    })
], UserProfilePageModule);



/***/ }),

/***/ "./src/app/user-profile/user-profile.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/user-profile/user-profile.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n\n.menu-header-bg {\n  height: 180px;\n  width: 350px;\n  background-color: #7590d6;\n  background: linear-gradient(90deg, #7590d6 0%, #4d71d7 100%);\n  box-shadow: 0px 1px 10px rgba(98, 140, 255, 0.5);\n  transform: rotate(-15deg);\n  border-radius: 10px 10px 10px 50px;\n  margin-left: -18px;\n  margin-top: -50px;\n  margin-bottom: 60px;\n}\n\n.header-content {\n  position: absolute;\n  top: 80px;\n  left: 15px;\n  display: flex;\n  align-items: center;\n  align-content: center;\n  transform: rotate(15deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3SUFBQTtBQUNKOztBQUVFO0VBRUUsYUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLDREQUFBO0VBQ0EsZ0RBQUE7RUFDQSx5QkFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBR0U7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtBQUFKIiwiZmlsZSI6InNyYy9hcHAvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xyXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxuICB9XHJcbiAgXHJcbiAgLm1lbnUtaGVhZGVyLWJnICBcclxuICB7XHJcbiAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc1OTBkNjtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzc1OTBkNiAwJSwgIzRkNzFkNyAxMDAlKTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggMTBweCByZ2JhKDk4LDE0MCwyNTUsMC41KTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xNWRlZyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCA1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xOHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTUwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xyXG4gIH1cclxuICBcclxuICAuaGVhZGVyLWNvbnRlbnR7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDgwcHg7XHJcbiAgICBsZWZ0OiAxNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxNWRlZyk7XHJcbiAgfSBcclxuXHJcbiAgLy8gaW9uLWNhcmR7XHJcbiAgLy8gICBkaXNwbGF5OiBmbGV4O1xyXG4gIC8vICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAvLyAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgLy8gICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAvLyB9XHJcblxyXG4vLyAgIGlvbi1jYXJke1xyXG4vLyAgICAgaGVpZ2h0OiA1MDBweDtcclxuLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4vLyB9Il19 */");

/***/ }),

/***/ "./src/app/user-profile/user-profile.page.ts":
/*!***************************************************!*\
  !*** ./src/app/user-profile/user-profile.page.ts ***!
  \***************************************************/
/*! exports provided: UserProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfilePage", function() { return UserProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.esm.js");
/* harmony import */ var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/modal/modal.component */ "./src/app/components/modal/modal.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");






let UserProfilePage = class UserProfilePage {
    // tslint:disable-next-line: max-line-length
    constructor(router, modal, menu, alertController, actionSheetController) {
        this.router = router;
        this.modal = modal;
        this.menu = menu;
        this.alertController = alertController;
        this.actionSheetController = actionSheetController;
        const id = localStorage.getItem('userid');
        if (id != null) {
            console.log('m', id);
            const database = firebase__WEBPACK_IMPORTED_MODULE_3__["default"].firestore();
            const data = database.collection('userRegDetails').doc(id);
            try {
                data.onSnapshot((doc) => {
                    const myarr = [];
                    const h = {
                        id: doc.id,
                        Name: doc.data().Name,
                        Contact: doc.data().Contact,
                        Email: doc.data().Email,
                        DateofBirth: doc.data().DateofBirth
                    };
                    console.log('user profile', h);
                    myarr.push(h);
                    this.userdata = myarr;
                    console.log(this.userdata);
                });
            }
            catch (e) {
                console.log('error');
            }
        }
        else {
            this.router.navigate(['/login']);
        }
    }
    ngOnInit() {
    }
    openModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // console.log('XXX');
            const mymodal = yield this.modal.create({
                component: _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_4__["ModalComponent"],
                cssClass: '',
                componentProps: {},
            });
            mymodal.present();
        });
    }
    userprof() {
        this.menu.enable(true, '6');
        this.menu.open('6');
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
    showImage() {
        this.router.navigate(['/show-images']);
    }
    logout() {
        localStorage.clear();
        this.router.navigate(['/login']);
    }
};
UserProfilePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"] }
];
UserProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./user-profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-profile/user-profile.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./user-profile.page.scss */ "./src/app/user-profile/user-profile.page.scss")).default]
    })
], UserProfilePage);



/***/ })

}]);
//# sourceMappingURL=user-profile-user-profile-module-es2015.js.map
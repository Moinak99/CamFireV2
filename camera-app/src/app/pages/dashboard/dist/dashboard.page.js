"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.DashboardPage = void 0;
var core_1 = require("@angular/core");
var firebase = require("firebase");
var DashboardPage = /** @class */ (function () {
    // tslint:disable-next-line: max-line-length
    function DashboardPage(camera, crop, datePipe, service, alertController, loadingController, menu, router) {
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
        }
        else {
            this.router.navigate(['/login']);
        }
    }
    DashboardPage.prototype.ngOnInit = function () {
    };
    // taking the pictures and saving it into base 64 string format
    DashboardPage.prototype.takePicture = function () {
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
    };
    // it will work when user choose upload from gallery
    DashboardPage.prototype.getImage = function () {
        var _this = this;
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
            _this.cardopen = !_this.cardopen;
            _this.takephoto = 'data:image/jpeg;base64,' + imageData;
            console.log('Gallery', _this.takephoto);
        }, function (err) {
        });
    };
    // loading
    DashboardPage.prototype.presentLoading = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading, _a, role, data;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            cssClass: 'my-custom-class',
                            message: 'Please wait...',
                            duration: 2000
                        })];
                    case 1:
                        loading = _b.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, loading.onDidDismiss()];
                    case 3:
                        _a = _b.sent(), role = _a.role, data = _a.data;
                        console.log('Loading dismissed!');
                        this.takePicture();
                        return [2 /*return*/];
                }
            });
        });
    };
    // loading2
    DashboardPage.prototype.presentLoadingz = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading, _a, role, data;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            cssClass: 'my-custom-class',
                            message: 'Please wait...',
                            duration: 1000
                        })];
                    case 1:
                        loading = _b.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, loading.onDidDismiss()];
                    case 3:
                        _a = _b.sent(), role = _a.role, data = _a.data;
                        console.log('Loading dismissed!');
                        this.getImage();
                        return [2 /*return*/];
                }
            });
        });
    };
    // After getting link, by calling this method the base 64 link will be send to service
    DashboardPage.prototype.uploadImageCloud = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading, date, uploaddate, today1, date1, time1, dateTime1, mergedatewithuserid, messageurl, storageref;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        loading = this.loadingController.create({
                            cssClass: 'my-custom-class',
                            message: 'Please wait...',
                            duration: 5000
                        });
                        return [4 /*yield*/, loading];
                    case 1:
                        (_a.sent()).present();
                        date = new Date();
                        uploaddate = this.datePipe.transform(date, 'yyyy-MM-dd');
                        console.log(uploaddate);
                        today1 = new Date();
                        date1 = today1.getFullYear() + '-' + (today1.getMonth() + 1) + '-' + today1.getDate();
                        time1 = today1.getHours() + ':' + today1.getMinutes() + ':' + today1.getSeconds() + ':' + today1.getMilliseconds();
                        dateTime1 = date1 + 'and' + time1;
                        mergedatewithuserid = this.userid + dateTime1;
                        messageurl = this.takephoto;
                        storageref = firebase.storage().ref();
                        storageref.child('images' + '/' + this.userid + dateTime1).putString(messageurl, 'data_url').then(function (snapshot) { return __awaiter(_this, void 0, void 0, function () {
                            var downloadurl;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        console.log('success');
                                        return [4 /*yield*/, snapshot.ref.getDownloadURL()];
                                    case 1:
                                        downloadurl = _a.sent();
                                        this.imagestr = downloadurl;
                                        // const a = storageref.getDownloadURL();
                                        console.log('Download Url', downloadurl);
                                        return [2 /*return*/];
                                }
                            });
                        }); }).then(function () { return __awaiter(_this, void 0, void 0, function () {
                            var savedetails, a;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        savedetails = {
                                            userid: this.userid,
                                            imageurl: this.imagestr,
                                            date: uploaddate,
                                            storagedel: mergedatewithuserid
                                        };
                                        return [4 /*yield*/, this.service.saveImage(savedetails)];
                                    case 1:
                                        a = _a.sent();
                                        console.log('Mercy', a);
                                        this.presentAlert();
                                        this.cardopen = !this.cardopen;
                                        return [2 /*return*/];
                                }
                            });
                        }); })["catch"](function () {
                            console.log('bye');
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    // loading 3
    //  async presentLoading1() {
    //   const { role, data } = await (await loading).onDidDismiss();
    //   console.log('Loading dismissed!');
    //   this.presentAlert();
    //   this.cardopen = !this.cardopen;
    // }
    // alert
    DashboardPage.prototype.presentAlert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            cssClass: 'my-custom-class',
                            // header: 'Alert',
                            // subHeader: 'Subtitle',
                            message: 'Successfully Added',
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        this.takephoto = '';
                        return [2 /*return*/];
                }
            });
        });
    };
    // show image
    DashboardPage.prototype.showImage = function () {
        this.router.navigate(['/show-images']);
    };
    // menu
    DashboardPage.prototype.dashboardMenu = function () {
        this.menu.enable(true, '2');
        this.menu.open('2');
    };
    // alert with choice
    DashboardPage.prototype.presentAlertConfirm = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            cssClass: 'my-custom-class',
                            header: 'Are You Sure!',
                            message: 'Confirm <strong>Logout</strong>!',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: 'Okay',
                                    handler: function () {
                                        console.log('Confirm Okay');
                                        _this.logout();
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // logout and clearing localstorage
    DashboardPage.prototype.logout = function () {
        localStorage.clear();
        this.router.navigate(['/login']);
    };
    DashboardPage = __decorate([
        core_1.Component({
            selector: 'app-dashboard',
            templateUrl: './dashboard.page.html',
            styleUrls: ['./dashboard.page.scss']
        })
    ], DashboardPage);
    return DashboardPage;
}());
exports.DashboardPage = DashboardPage;

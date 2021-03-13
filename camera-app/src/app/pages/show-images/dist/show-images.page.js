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
exports.ShowImagesPage = void 0;
var core_1 = require("@angular/core");
var firebase = require("firebase");
var ShowImagesPage = /** @class */ (function () {
    // tslint:disable-next-line: max-line-length
    function ShowImagesPage(actionSheetController, base64ToGallery, toastController, alertController, router, service, menu) {
        var _this = this;
        this.actionSheetController = actionSheetController;
        this.base64ToGallery = base64ToGallery;
        this.toastController = toastController;
        this.alertController = alertController;
        this.router = router;
        this.service = service;
        this.menu = menu;
        var userid = localStorage.getItem('userid');
        console.log('zzp', userid);
        var database = firebase.firestore();
        var data = database.collection('userUploads').where('Userid', '==', userid);
        try {
            data.onSnapshot(function (querySnapshot) { return __awaiter(_this, void 0, void 0, function () {
                var myarr, toast;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            myarr = [];
                            querySnapshot.forEach(function (doc) {
                                console.log(doc.id);
                                var h = {
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
                            if (!(this.userreq.length === 0)) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.toastController.create({
                                    message: 'No Saved Image Found',
                                    duration: 2000
                                })];
                        case 1:
                            toast = _a.sent();
                            toast.present();
                            _a.label = 2;
                        case 2: return [2 /*return*/];
                    }
                });
            }); });
        }
        catch (e) {
            console.log('error');
        }
    }
    ShowImagesPage.prototype.ngOnInit = function () {
    };
    ShowImagesPage.prototype.logout = function () {
        localStorage.clear();
        this.router.navigate(['/login']);
    };
    ShowImagesPage.prototype.presentActionSheet = function (delid, storageid) {
        return __awaiter(this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'Albums',
                            cssClass: 'my-custom-class',
                            buttons: [{
                                    text: 'Delete',
                                    role: 'destructive',
                                    icon: 'trash',
                                    handler: function () {
                                        console.log('Delete clicked');
                                        _this.presentAlertConfirm(delid, storageid);
                                    }
                                },
                                //  {
                                //    text: 'download',
                                //    icon: 'download',
                                //    handler: () => {
                                //      console.log('download clicked');
                                //      this.saveDevice(picture);
                                //    }},
                                {
                                    text: 'Cancel',
                                    icon: 'close',
                                    role: 'cancel',
                                    handler: function () {
                                        console.log('Cancel clicked');
                                    }
                                }]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ShowImagesPage.prototype.presentAlertConfirm = function (delid, storageid) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            cssClass: 'my-custom-class',
                            header: 'Delete!',
                            message: 'Are you <strong>Sure</strong>?',
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
                                        _this.DeletePicture(delid, storageid);
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
    // delete
    ShowImagesPage.prototype.DeletePicture = function (delid, storageid) {
        console.log('momo', delid);
        var a = this.service.del(delid);
        console.log(a);
        var storageref = firebase.storage().ref();
        var desertRef = storageref.child('images' + '/' + storageid);
        desertRef["delete"]().then(function () {
            console.log('deleted from storage'); //
        })["catch"](function () {
            console.log('Del Failed'); //
        });
    };
    ShowImagesPage.prototype.showMenu = function () {
        this.menu.enable(true, '3');
        this.menu.open('3');
    };
    ShowImagesPage.prototype.saveDevice = function (picture) {
        var base64option = {
            prefix: 'img',
            mediaScanner: true
        };
        // const todecode = atob(picture);
        // console.log(todecode);
        this.base64ToGallery.base64ToGallery(picture, base64option).then(function (res) { return alert('Saved image to gallery ' + JSON.stringify(res)); }, function (err) { return alert('Error saving image to gallery ' + JSON.stringify(err)); })["catch"](function (e) {
            alert(e);
        });
    };
    ShowImagesPage.prototype.presentToasct = function () {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'Your settings have been saved.',
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ShowImagesPage = __decorate([
        core_1.Component({
            selector: 'app-show-images',
            templateUrl: './show-images.page.html',
            styleUrls: ['./show-images.page.scss']
        })
    ], ShowImagesPage);
    return ShowImagesPage;
}());
exports.ShowImagesPage = ShowImagesPage;

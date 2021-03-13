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
exports.SearchDatePage = void 0;
var core_1 = require("@angular/core");
var firebase = require("firebase");
var SearchDatePage = /** @class */ (function () {
    // tslint:disable-next-line: max-line-length
    function SearchDatePage(service, loadingController, menu, router, alertController, actionSheetController, toastController) {
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
    SearchDatePage.prototype.ngOnInit = function () {
    };
    SearchDatePage.prototype.presentLoading = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading, _a, role, data;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.search();
                        return [4 /*yield*/, this.loadingController.create({
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
                        return [2 /*return*/];
                }
            });
        });
    };
    // search by id and date
    SearchDatePage.prototype.search = function () {
        return __awaiter(this, void 0, void 0, function () {
            var searchbydt, data, toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        searchbydt = {
                            userid: this.id,
                            date: this.searchdt
                        };
                        console.log(searchbydt.date);
                        return [4 /*yield*/, this.service.searchbydate(searchbydt)];
                    case 1:
                        data = _a.sent();
                        console.log('b', data);
                        this.userreq = data;
                        if (!(this.userreq.length === 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.toastController.create({
                                message: 'No Saved Image Found',
                                duration: 2000
                            })];
                    case 2:
                        toast = _a.sent();
                        toast.present();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SearchDatePage.prototype.presentActionSheet = function (delid, userid, uploaddate, storageid) {
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
                                        _this.DeletePicture(delid, userid, uploaddate, storageid);
                                    }
                                }, {
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
    // delete picture
    SearchDatePage.prototype.DeletePicture = function (delid, id, uploaddate, storageid) {
        return __awaiter(this, void 0, void 0, function () {
            var a, storageref, desertRef;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('momo', delid);
                        return [4 /*yield*/, this.service.del(delid)];
                    case 1:
                        a = _a.sent();
                        console.log(a);
                        storageref = firebase.storage().ref();
                        desertRef = storageref.child('images' + '/' + storageid);
                        desertRef["delete"]().then(function () {
                            console.log('deleted from storage'); //
                        })["catch"](function () {
                            console.log('Del Failed'); //
                        }).then(function () { return __awaiter(_this, void 0, void 0, function () {
                            var searchbydt, data, toast;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        searchbydt = {
                                            userid: id,
                                            date: uploaddate
                                        };
                                        return [4 /*yield*/, this.service.searchbydate(searchbydt)];
                                    case 1:
                                        data = _a.sent();
                                        console.log('nmnmnmm', data);
                                        this.userreq = data;
                                        if (!(this.userreq.length === 0)) return [3 /*break*/, 3];
                                        return [4 /*yield*/, this.toastController.create({
                                                message: 'No Saved Image Found',
                                                duration: 2000
                                            })];
                                    case 2:
                                        toast = _a.sent();
                                        toast.present();
                                        _a.label = 3;
                                    case 3: return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    SearchDatePage.prototype.searchdatemenu = function () {
        this.menu.enable(true, '8');
        this.menu.open('8');
    };
    SearchDatePage.prototype.presentAlertConfirm = function () {
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
    // log out
    SearchDatePage.prototype.logout = function () {
        localStorage.clear();
        this.router.navigate(['/login']);
    };
    SearchDatePage = __decorate([
        core_1.Component({
            selector: 'app-search-date',
            templateUrl: './search-date.page.html',
            styleUrls: ['./search-date.page.scss']
        })
    ], SearchDatePage);
    return SearchDatePage;
}());
exports.SearchDatePage = SearchDatePage;

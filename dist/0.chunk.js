webpackJsonp([0],{

/***/ "../../../../../src/app/_modules/user/followers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_index__ = __webpack_require__("../../../../../src/app/_models/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_alerts_services__ = __webpack_require__("../../../../../src/app/_modules/alerts/_services/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FollowersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FollowersComponent = /** @class */ (function () {
    function FollowersComponent(userService, alertsService, authenticationService, route) {
        var _this = this;
        this.userService = userService;
        this.alertsService = alertsService;
        this.authenticationService = authenticationService;
        this.route = route;
        this.followers = new Array();
        this.userLogged = new __WEBPACK_IMPORTED_MODULE_3__models_index__["a" /* User */];
        this.authenticationService.whoAmI()
            .subscribe(function (r) {
            _this.userLogged = r;
            // console.log(this.userLogged);
        });
    }
    FollowersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            // console.log(params); // (+) converts string 'id' to a number
            _this.userService.getFollowersList(params.user)
                .subscribe(function (data) {
                // set success message and pass true paramater to persist the message after redirecting to the login page
                // console.log(data.user);
                _this.followers = data.user.followers;
            }, function (error) {
                console.error(error);
                try {
                    if (error.status !== 0) {
                        var response = JSON.parse(error._body);
                    }
                    else {
                        _this.alertsService.error('No hay conexión con el servicio API RESTFull');
                    }
                }
                catch (e) {
                    _this.alertsService.error('Unexpected error!');
                }
            });
        });
    };
    FollowersComponent.prototype.follow = function (userId) {
        var _this = this;
        this.userService.followUser(userId)
            .subscribe(function (data) {
            // set success message and pass true paramater to persist the message
            _this.userLogged.friends = data.user.friends;
            _this.userLogged.counter.friends++;
        }, function (error) {
            console.error(error);
            try {
                if (error.status !== 0) {
                    var response = JSON.parse(error._body);
                    _this.alertsService.error(response.message);
                }
                else {
                    _this.alertsService.error('No hay conexión con el servicio API RESTFull');
                }
            }
            catch (e) {
                _this.alertsService.error('Unexpected error!');
            }
        });
    };
    FollowersComponent.prototype.unFollow = function (userId) {
        var _this = this;
        this.userService.unFollowUser(userId)
            .subscribe(function (data) {
            // set success message and pass true paramater to persist the message
            _this.userLogged.friends = data.user.friends;
            _this.userLogged.counter.friends--;
        }, function (error) {
            console.error(error);
            try {
                if (error.status !== 0) {
                    var response = JSON.parse(error._body);
                    _this.alertsService.error(response.message);
                }
                else {
                    _this.alertsService.error('No hay conexión con el servicio API RESTFull');
                }
            }
            catch (e) {
                _this.alertsService.error('Unexpected error!');
            }
        });
    };
    FollowersComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-followers',
            template: __webpack_require__("../../../../../src/app/layout/default/followers.component.html"),
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["b" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index__["b" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__modules_alerts_services__["a" /* AlertsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__modules_alerts_services__["a" /* AlertsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index__["a" /* AuthenticationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
    ], FollowersComponent);
    return FollowersComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=followers.component.js.map

/***/ }),

/***/ "../../../../../src/app/_modules/user/friends.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_index__ = __webpack_require__("../../../../../src/app/_models/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_alerts_services__ = __webpack_require__("../../../../../src/app/_modules/alerts/_services/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FriendsComponent = /** @class */ (function () {
    function FriendsComponent(userService, alertsService, authenticationService, route) {
        var _this = this;
        this.userService = userService;
        this.alertsService = alertsService;
        this.authenticationService = authenticationService;
        this.route = route;
        this.friends = new Array();
        this.userLogged = new __WEBPACK_IMPORTED_MODULE_3__models_index__["a" /* User */];
        this.authenticationService.whoAmI()
            .subscribe(function (r) {
            _this.userLogged = r;
            // console.log(this.userLogged);
        });
    }
    FriendsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            // console.log(params); // (+) converts string 'id' to a number
            _this.userService.getFriendsList(params.user)
                .subscribe(function (data) {
                // set success message and pass true paramater to persist the message after redirecting to the login page
                // console.log(data.user);
                _this.friends = data.user.friends;
            }, function (error) {
                console.error(error);
                try {
                    if (error.status !== 0) {
                        var response = JSON.parse(error._body);
                    }
                    else {
                        _this.alertsService.error('No hay conexión con el servicio API RESTFull');
                    }
                }
                catch (e) {
                    _this.alertsService.error('Unexpected error!');
                }
            });
        });
    };
    FriendsComponent.prototype.follow = function (userId) {
        var _this = this;
        this.userService.followUser(userId)
            .subscribe(function (data) {
            // set success message and pass true paramater to persist the message
            _this.userLogged.friends = data.user.friends;
            _this.userLogged.counter.friends++;
        }, function (error) {
            console.error(error);
            try {
                if (error.status !== 0) {
                    var response = JSON.parse(error._body);
                    _this.alertsService.error(response.message);
                }
                else {
                    _this.alertsService.error('No hay conexión con el servicio API RESTFull');
                }
            }
            catch (e) {
                _this.alertsService.error('Unexpected error!');
            }
        });
    };
    FriendsComponent.prototype.unFollow = function (userId) {
        var _this = this;
        this.userService.unFollowUser(userId)
            .subscribe(function (data) {
            // set success message and pass true paramater to persist the message
            _this.userLogged.friends = data.user.friends;
            _this.userLogged.counter.friends--;
        }, function (error) {
            console.error(error);
            try {
                if (error.status !== 0) {
                    var response = JSON.parse(error._body);
                    _this.alertsService.error(response.message);
                }
                else {
                    _this.alertsService.error('No hay conexión con el servicio API RESTFull');
                }
            }
            catch (e) {
                _this.alertsService.error('Unexpected error!');
            }
        });
    };
    FriendsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-friends',
            template: __webpack_require__("../../../../../src/app/layout/default/friends.component.html"),
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["b" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index__["b" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__modules_alerts_services__["a" /* AlertsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__modules_alerts_services__["a" /* AlertsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index__["a" /* AuthenticationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
    ], FriendsComponent);
    return FriendsComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=friends.component.js.map

/***/ }),

/***/ "../../../../../src/app/_modules/user/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_alerts_services__ = __webpack_require__("../../../../../src/app/_modules/alerts/_services/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(route, router, authenticationService, alertsService, _http) {
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertsService = alertsService;
        this._http = _http;
        this.loading = false;
        this.model = {};
        this.error = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
        // this.authenticationService.logout();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.authenticationService.login(this.model.userName, this.model.password)
            .subscribe(function (result) {
            if (result === true) {
                _this.router.navigate(['/']);
            }
            else {
                console.error('Incorrecto');
                _this.error = 'Username or password is incorrect';
                _this.loading = false;
            }
        }, function (err) {
            var response = JSON.parse(err._body);
            // console.log('DATA: ', response.message);
            _this.alertsService.error(response.message);
            _this.error = response.message;
            _this.loading = false;
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/layout/default/login.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_index__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_index__["a" /* AuthenticationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__modules_alerts_services__["a" /* AlertsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__modules_alerts_services__["a" /* AlertsService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */]) === "function" && _e || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/_modules/user/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_alerts_services__ = __webpack_require__("../../../../../src/app/_modules/alerts/_services/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, userService, titleService, alertsService) {
        this.router = router;
        this.userService = userService;
        this.titleService = titleService;
        this.alertsService = alertsService;
        this.model = {};
        this.loading = false;
        this.title = 'Tecnual - Register';
    }
    RegisterComponent.prototype.ngOnInit = function () {
        // reset login status
        this.titleService.setTitle(this.title);
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        if (this.model.password !== this.model.repassword) {
            this.alertsService.error('Las contraseñas no coinciden', true);
            return false;
        }
        // this.alertsService.success('ok', true);
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(function (data) {
            // set success message and pass true paramater to persist the message after redirecting to the login page
            _this.alertsService.success('Registration successful', true);
            _this.loading = false;
            _this.router.navigate(['/user/login']);
        }, function (error) {
            // console.log(error.status);
            console.error(error);
            try {
                if (error.status !== 0) {
                    var response = JSON.parse(error._body);
                    _this.alertsService.error(response.message);
                }
                else {
                    _this.alertsService.error('No hay conexión con el servicio API RESTFull');
                }
            }
            catch (e) {
                _this.alertsService.error('Unexpected error!');
            }
            _this.loading = false;
        });
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/layout/default/register.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_index__["b" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_index__["b" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__modules_alerts_services__["a" /* AlertsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__modules_alerts_services__["a" /* AlertsService */]) === "function" && _d || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/_modules/user/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_upload_service__ = __webpack_require__("../../../../../src/app/_modules/shared/upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_alerts_services__ = __webpack_require__("../../../../../src/app/_modules/alerts/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_index__ = __webpack_require__("../../../../../src/app/_models/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var URL = 'http://192.168.1.150:3000/upload';
var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(router, userService, titleService, authenticationService, alertsService, uploadService, sanitizer, toastr) {
        var _this = this;
        this.router = router;
        this.userService = userService;
        this.titleService = titleService;
        this.authenticationService = authenticationService;
        this.alertsService = alertsService;
        this.uploadService = uploadService;
        this.sanitizer = sanitizer;
        this.toastr = toastr;
        this.loading = false;
        this.title = 'Tecnual - Settings';
        this.user = new __WEBPACK_IMPORTED_MODULE_8__models_index__["a" /* User */];
        this.filesList = new Array();
        this.authenticationService.whoAmI()
            .subscribe(function (r) {
            _this.user = r;
            if (_this.user.avatar)
                _this.avatarUrl = 'http://192.168.1.150:3000/img/' + _this.user.avatar.filename;
            else
                _this.avatarUrl = 'http://192.168.1.150:3000/img/beat.svg';
        });
    }
    SettingsComponent.prototype.ngOnInit = function () {
        // reset login status
        this.titleService.setTitle(this.title);
    };
    SettingsComponent.prototype.fileChange = function (event) {
        // console.log(event.target.files[0]);
        this.filesList = [];
        this.filesList.push(event.target.files[0]);
        this.filePreviewPath = this.sanitizer.bypassSecurityTrustUrl((window.URL.createObjectURL(event.target.files[0])));
        this.avatarUrl = this.filePreviewPath;
        // console.log(this.filePreviewPath);
    };
    SettingsComponent.prototype.submitForm = function (form) {
        console.log(this.filesList);
        (this.filesList) ? this.uploadFiles() : this.saveSettings(null);
        form._submitted = false;
    };
    SettingsComponent.prototype.uploadFiles = function () {
        var _this = this;
        console.log('Upload');
        this.queueProgress = 0;
        this.isUploading = true;
        var startTime = Date.now();
        this.uploadService.uploadFiles(this.filesList).subscribe(function (event) {
            switch (event.type) {
                case __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpEventType */].Sent:
                    startTime = Date.now();
                    console.trace('Request sent!');
                    break;
                case __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpEventType */].DownloadProgress:
                case __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpEventType */].UploadProgress:
                    if (event.total) {
                        _this.queueProgress = Math.round(event.loaded / event.total * 100);
                        var timeElapsed = Date.now() - startTime;
                        var uploadSpeed = event.loaded / (timeElapsed / 1000);
                        _this.uploadTimeRemaining = Math.ceil((event.total - event.loaded) / uploadSpeed);
                        _this.uploadTimeElapsed = Math.ceil(timeElapsed / 1000);
                        _this.uploadSpeed = uploadSpeed / 1024 / 1024;
                    }
                    break;
                case __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpEventType */].Response:
                    _this.queueProgress = 100;
                    _this.isUploading = false;
                    console.trace('Done! ResponseBody:', event.body);
                    _this.saveSettings(event.body.filesSaved[0]);
                    break;
            }
        }, function (error) {
            _this.isUploading = false;
            console.error(error);
            error = JSON.parse(error.error);
            _this.toastr.error(error.message, 'Error!', {
                closeButton: true,
                timeOut: 5000
            });
        });
    };
    SettingsComponent.prototype.saveSettings = function (file) {
        var _this = this;
        this.loading = true;
        this.user.avatar = file;
        this.userService.saveSettings(this.user)
            .subscribe(function (data) {
            // set success message and pass true paramater to persist the message after redirecting to the login page
            // console.log(data);
            _this.alertsService.success('Successful changes', true);
            _this.loading = false;
        }, function (error) {
            console.error(error);
            try {
                if (error.status !== 0) {
                    var response = JSON.parse(error._body);
                    _this.alertsService.error(response.message);
                }
                else {
                    _this.alertsService.error('No hay conexión con el servicio API RESTFull');
                }
            }
            catch (e) {
                _this.alertsService.error('Unexpected error!');
            }
            _this.loading = false;
        });
    };
    SettingsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/layout/default/settings.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__services_index__["b" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_index__["b" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__services_index__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_index__["a" /* AuthenticationService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__modules_alerts_services__["a" /* AlertsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__modules_alerts_services__["a" /* AlertsService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__shared_upload_service__["a" /* UploadService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_upload_service__["a" /* UploadService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["b" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["b" /* ToastrService */]) === "function" && _h || Object])
    ], SettingsComponent);
    return SettingsComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());

//# sourceMappingURL=settings.component.js.map

/***/ }),

/***/ "../../../../../src/app/_modules/user/user-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_component__ = __webpack_require__("../../../../../src/app/_modules/user/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_component__ = __webpack_require__("../../../../../src/app/_modules/user/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings_component__ = __webpack_require__("../../../../../src/app/_modules/user/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__followers_component__ = __webpack_require__("../../../../../src/app/_modules/user/followers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__friends_component__ = __webpack_require__("../../../../../src/app/_modules/user/friends.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import { P404Component } from './404.component';
// import { P500Component } from './500.component';





var routes = [
    {
        path: 'followers',
        component: __WEBPACK_IMPORTED_MODULE_5__followers_component__["a" /* FollowersComponent */],
        data: {
            title: 'Followers'
        }
    },
    {
        path: 'friends',
        component: __WEBPACK_IMPORTED_MODULE_6__friends_component__["a" /* FriendsComponent */],
        data: {
            title: 'Friends'
        }
    },
    {
        path: '',
        data: {
            title: 'users'
        },
        children: [
            {
                path: 'login',
                component: __WEBPACK_IMPORTED_MODULE_2__login_component__["a" /* LoginComponent */],
                data: {
                    title: 'Login Page'
                }
            },
            {
                path: 'register',
                component: __WEBPACK_IMPORTED_MODULE_3__register_component__["a" /* RegisterComponent */],
                data: {
                    title: 'Register Page'
                }
            },
            {
                path: 'settings',
                component: __WEBPACK_IMPORTED_MODULE_4__settings_component__["a" /* SettingsComponent */],
                data: {
                    title: 'Settings Page'
                }
            }
        ]
    }
];
var UserRoutingModule = /** @class */ (function () {
    function UserRoutingModule() {
    }
    UserRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], UserRoutingModule);
    return UserRoutingModule;
}());

//# sourceMappingURL=user-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/_modules/user/user.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_component__ = __webpack_require__("../../../../../src/app/_modules/user/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_component__ = __webpack_require__("../../../../../src/app/_modules/user/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__settings_component__ = __webpack_require__("../../../../../src/app/_modules/user/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_routing_module__ = __webpack_require__("../../../../../src/app/_modules/user/user-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__followers_component__ = __webpack_require__("../../../../../src/app/_modules/user/followers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__friends_component__ = __webpack_require__("../../../../../src/app/_modules/user/friends.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__user_routing_module__["a" /* UserRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_4__register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_5__settings_component__["a" /* SettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_7__followers_component__["a" /* FollowersComponent */],
                __WEBPACK_IMPORTED_MODULE_8__friends_component__["a" /* FriendsComponent */]
            ]
        })
    ], UserModule);
    return UserModule;
}());

//# sourceMappingURL=user.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/default/followers.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-4\" *ngFor=\"let follower of followers\">\n    <div class=\"card\">\n      <div class=\"card-block\">\n        <h3 class=\"card-title mb-1\">{{ follower.displayName }}</h3>\n        <p class=\"card-subtitle mb-2 text-muted\">@{{ follower.userName }}</p>\n        <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n        <button class=\"btn btn-primary\">\n         <span (click)=\"follow(follower._id)\" *ngIf=\"!userLogged.friends?.includes(follower._id)\">Follow</span>\n         <span (click)=\"unFollow(follower._id)\" *ngIf=\"userLogged.friends?.includes(follower._id)\"> Unfollow </span>\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/layout/default/friends.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-4\" *ngFor=\"let friend of friends\">\n    <div class=\"card\">\n      <div class=\"card-block\">\n        <h3 class=\"card-title mb-1\">{{ friend.displayName }}</h3>\n        <p class=\"card-subtitle mb-2 text-muted\">@{{ friend.userName }}</p>\n        <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n        <button class=\"btn btn-primary\">\n         <span (click)=\"follow(friend._id)\" *ngIf=\"!userLogged.friends?.includes(friend._id)\">Follow</span>\n         <span (click)=\"unFollow(friend._id)\" *ngIf=\"userLogged.friends?.includes(friend._id)\"> Unfollow </span>\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/layout/default/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app flex-row align-items-center\">\n  <div class=\"container mt-3\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-md-8\">\n        <div class=\"card-group mb-0\">\n          <div class=\"card p-4\">\n            <div class=\"card-body\">\n              <form name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\n              <h1>Login</h1>\n              <p class=\"text-muted\">Sign In to your account</p>\n              <div class=\"input-group mb-3\" [ngClass]=\"{ 'has-error': f.submitted && !userName.valid }\">\n                <span class=\"input-group-addon\"><i class=\"icon-user\"></i></span>\n                <input type=\"text\" class=\"form-control\" placeholder=\"User Name\" name=\"userName\" [(ngModel)]=\"model.userName\" #userName=\"ngModel\" required />\n                <div *ngIf=\"f.submitted && !userName.valid\" class=\"help-block\">User Name is required</div>\n              </div>\n              <div class=\"input-group mb-4\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n                <span class=\"input-group-addon\"><i class=\"icon-lock\"></i></span>\n                <input type=\"password\" class=\"form-control\" placeholder=\"Password\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\n                <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-6\">\n                  <button [disabled]=\"loading\" class=\"btn btn-primary px-4\">Login</button>\n                  <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"\n                  />\n                </div>\n                <div class=\"col-6 text-right\">\n                  <button type=\"button\" class=\"btn btn-link px-0\">Forgot password?</button>\n                </div>\n              </div>\n            </form>\n            </div>\n          </div>\n          <div class=\"card text-white bg-primary py-5\">\n            <div class=\"card-body text-center\">\n              <div>\n                <h2>Sign up</h2>\n                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\n                <button type=\"button\" class=\"btn btn-primary active mt-3\" [routerLink]=\"['/user/register']\">Register Now!</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/layout/default/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app flex-row align-items-center\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-md-6\">\n        <div class=\"card mx-4\">\n          <div class=\"card-body p-4\">\n            <h1>Register</h1>\n            <p class=\"text-muted\">Create your account</p>\n            <form name=\"form\" (ngSubmit)=\"f.form.valid && register()\" #f=\"ngForm\" novalidate>\n              <div class=\"input-group mb-3\" [ngClass]=\"{ 'has-error': f.submitted && !userName.valid }\">\n                <span class=\"input-group-addon\">@</span>\n                <input type=\"text\" class=\"form-control\" placeholder=\"User Name or Alias\" name=\"userName\" [(ngModel)]=\"model.userName\" #userName=\"ngModel\" required />\n                  <div *ngIf=\"f.submitted && !userName.valid\" class=\"help-block\">User Name or alias is required</div>\n              </div>\n              <div class=\"input-group mb-3\" [ngClass]=\"{ 'has-error': f.submitted && !displayName.valid }\">\n                <span class=\"input-group-addon\"><i class=\"icon-user\"></i></span>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Name\" name=\"displayName\" [(ngModel)]=\"model.displayName\" #displayName=\"ngModel\" required />\n                <div *ngIf=\"f.submitted && !displayName.valid\" class=\"help-block\">Name is required</div>\n              </div>\n\n            <div class=\"input-group mb-3\" [ngClass]=\"{ 'has-error': f.submitted && email.valid }\">\n              <span class=\"input-group-addon\"><i class=\"icon-envelope\"></i></span>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Email\" name=\"email\" [(ngModel)]=\"model.email\" #email=\"ngModel\" required />\n              <div *ngIf=\"f.submitted && !email.valid\" class=\"help-block\">Email is required</div>\n            </div>\n\n            <div class=\"input-group mb-3\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n              <span class=\"input-group-addon\"><i class=\"icon-lock\"></i></span>\n              <input type=\"password\" class=\"form-control\" placeholder=\"Password\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\n              <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\n            </div>\n\n            <div class=\"input-group mb-4\" [ngClass]=\"{ 'has-error': f.submitted && !repassword.valid }\">\n              <span class=\"input-group-addon\"><i class=\"icon-lock\"></i></span>\n              <input type=\"password\" class=\"form-control\" placeholder=\"Repeat password\" name=\"repassword\" [(ngModel)]=\"model.repassword\" #repassword=\"ngModel\" />\n              <div *ngIf=\"f.submitted && !repassword.valid || password.value !== repassword.value\" class=\"help-block\">Password must match</div>\n            </div>\n            <div class=\"row\">\n                <button [disabled]=\"loading\" class=\"btn btn-block btn-primary px-4\">Create Account</button>\n                <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"\n                />\n            </div>\n          </form>\n          </div>\n          <div class=\"card-footer p-4\">\n            <div class=\"row\">\n              <div class=\"col-6\">\n                <button class=\"btn btn-block btn-facebook\" type=\"button\"><span>facebook</span></button>\n              </div>\n              <div class=\"col-6\">\n                <button class=\"btn btn-block btn-twitter\" type=\"button\"><span>twitter</span></button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/layout/default/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\n<div class=\"jumbotron\">\n  <div class=\"container\">\n    <h2>Edit Settings</h2>\n    <form name=\"form-horizontal\" (ngSubmit)=\"f.form.valid && submitForm(f)\" #f=\"ngForm\" novalidate>\n      <div class=\"edit-avatar mb-2\">\n        <img [src]=\"avatarUrl\" width=\"150\" />\n        <label class=\"edit-avatar-text\"><input type=\"file\" (change)=\"fileChange($event)\" class=\"form-control\" name=\"screenshot\" hidden>Edit <i class=\"icon-note\"></i></label>\n      </div>\n      <label class=\"sr-only\" for=\"displayName\">Name</label>\n      <div class=\"input-group\" [ngClass]=\"{ 'has-error': f.submitted && !displayName.valid }\">\n        <span class=\"input-group-addon\"><i class=\"icon-user\"></i></span>\n        <span class=\"input-group-addon\">Name</span>\n        <input type=\"text\" class=\"form-control\" placeholder=\"Name\" name=\"displayName\" [(ngModel)]=\"user.displayName\" #displayName=\"ngModel\" required />\n        <div *ngIf=\"f.submitted && !displayName.valid\" class=\"help-block\">Name is required</div>\n      </div>\n      <br>\n      <label class=\"sr-only\" for=\"email\">Email</label>\n      <div class=\"input-group\" [ngClass]=\"{ 'has-error': f.submitted && !email.valid }\">\n        <div class=\"input-group-addon\"><i class=\"icon-envelope\"></i></div>\n        <div class=\"input-group-addon\">Email</div>\n        <input type=\"text\" class=\"form-control\" placeholder=\"Email\" name=\"email\" [(ngModel)]=\"user.email\" #email=\"ngModel\" required />\n        <div *ngIf=\"f.submitted && !email.valid\" class=\"help-block\">Email is required</div>\n      </div>\n      <br>\n      <label class=\"sr-only\" for=\"info\">Info</label>\n      <div class=\"input-group\" [ngClass]=\"{ 'has-error': f.submitted && !info.valid }\">\n        <div class=\"input-group-addon\"><i class=\"icon-info\"></i></div>\n        <textarea type=\"text\" rows=\"5\" class=\"form-control\" placeholder=\"About me...\" name=\"info\" [(ngModel)]=\"user.info\" #info=\"ngModel\"></textarea>\n      </div>\n      <br>\n      <div class=\"form-group\">\n        <button [disabled]=\"loading\" class=\"btn btn-primary\">Save Settings</button>\n        <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"\n        />\n        <a [routerLink]=\"['/']\" class=\"btn btn-outline-secondary\">Cancel</a>\n      </div>\n    </form>\n  </div>\n</div>\n</section>\n"

/***/ })

});
//# sourceMappingURL=0.chunk.js.map
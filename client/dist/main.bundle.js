webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var user_component_1 = __webpack_require__("../../../../../src/app/user/user.component.ts");
var user_new_component_1 = __webpack_require__("../../../../../src/app/user/user-new/user-new.component.ts");
var note_component_1 = __webpack_require__("../../../../../src/app/note/note.component.ts");
var note_list_component_1 = __webpack_require__("../../../../../src/app/note/note-list/note-list.component.ts");
var routes = [
    { path: 'user', component: user_component_1.UserComponent, children: [
            { path: 'new', component: user_new_component_1.UserNewComponent }
        ] },
    { path: 'dashboard', component: note_component_1.NoteComponent, children: [
            { path: '', component: note_list_component_1.NoteListComponent }
        ] },
    { path: '', pathMatch: 'full', component: user_component_1.UserComponent, children: [
            { path: '', component: user_new_component_1.UserNewComponent }
        ] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var user_service_1 = __webpack_require__("../../../../../src/app/user/user.service.ts");
var AppComponent = /** @class */ (function () {
    function AppComponent(_route, _location, _userService) {
        this._route = _route;
        this._location = _location;
        this._userService = _userService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userService.getCurrentUser(function (user) {
            // Decide where to go.... go to dashboard
            if (!user) {
                _this._route.navigateByUrl('/');
                return;
            }
            // this._location.back();
        }, console.log);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            common_1.Location,
            user_service_1.UserService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var app_routing_module_1 = __webpack_require__("../../../../../src/app/app-routing.module.ts");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var user_service_1 = __webpack_require__("../../../../../src/app/user/user.service.ts");
var user_component_1 = __webpack_require__("../../../../../src/app/user/user.component.ts");
var user_new_component_1 = __webpack_require__("../../../../../src/app/user/user-new/user-new.component.ts");
var user_logout_component_1 = __webpack_require__("../../../../../src/app/user/user-logout/user-logout.component.ts");
var note_component_1 = __webpack_require__("../../../../../src/app/note/note.component.ts");
var note_list_component_1 = __webpack_require__("../../../../../src/app/note/note-list/note-list.component.ts");
var note_add_component_1 = __webpack_require__("../../../../../src/app/note/note-add/note-add.component.ts");
var bucket_service_1 = __webpack_require__("../../../../../src/app/note/bucket.service.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                user_component_1.UserComponent,
                user_new_component_1.UserNewComponent,
                note_component_1.NoteComponent,
                note_list_component_1.NoteListComponent,
                user_logout_component_1.UserLogoutComponent,
                note_add_component_1.AddComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                http_1.HttpModule
            ],
            providers: [user_service_1.UserService, bucket_service_1.BucketService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "../../../../../src/app/note/bucket.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var BucketService = /** @class */ (function () {
    function BucketService(_http) {
        this._http = _http;
    }
    BucketService.prototype.getauth = function (callback, errorback) {
        this._http.get('/author').subscribe(function (res) {
            callback(res.json());
        }, function (err) {
            errorback(err);
        });
    };
    BucketService.prototype.getItemId = function (id, callback, errorback) {
        this._http.get('/author/' + id).subscribe(function (res) {
            callback(res.json());
        }, function (err) {
            errorback(err);
        });
    };
    BucketService.prototype.addItem = function (obj, callback, errorback) {
        this._http.post("/author", obj).subscribe(function (res) {
            callback(res.json());
        }, function (err) {
            errorback(err);
        });
    };
    BucketService.prototype.updateItem = function (obj, callback, errorback) {
        this._http.post("/status", obj).subscribe(function (res) {
            callback(res.json());
        }, function (err) {
            errorback(err);
        });
    };
    BucketService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], BucketService);
    return BucketService;
}());
exports.BucketService = BucketService;


/***/ }),

/***/ "../../../../../src/app/note/bucket.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Bucket = /** @class */ (function () {
    function Bucket() {
    }
    return Bucket;
}());
exports.Bucket = Bucket;


/***/ }),

/***/ "../../../../../src/app/note/note-add/note-add.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/note/note-add/note-add.component.html":
/***/ (function(module, exports) {

module.exports = "<form #createBucket='ngForm' (submit)='addBucket(); createBucket.resetForm()'>\n  Name: <input type=\"text\" #n=\"ngModel\" [(ngModel)]=\"newBucket.item\" name=\"name\" required>\n  Description: <input type=\"text\" #d=\"ngModel\" [(ngModel)]=\"newBucket.desc\" name=\"desc\" required>\n  Tag User:\n  <select [(ngModel)]=\"owner2\" name=\"owner\">\n    <option value=\"{{loggedUser._id}}\"></option>\n    <option *ngFor=\"let name of names\" [value]=\"name._id\">\n      {{name.name}}\n    </option>\n  </select>\n  <input type=\"submit\" value=\"Add Bucket List Item\" [disabled]=\"!createBucket.valid\">\n</form>\n\n<table>\n  <thead>\n    <tr>\n      <td colspan=\"5\"><b>Before I die I want to...</b></td>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let bucket of userbuck.buckets, let indx = index\">\n      <td><input type=\"checkbox\" [(ngModel)]=\"bucket.done\" (change)=\"updateCompleted(bucket._id, idx)\"></td>\n      <td><b>{{bucket._creator}}</b>-</td>\n      <td>{{bucket.item}}-</td>\n      <td>{{bucket.desc}}-</td>\n      <td>{{bucket.createdAt | date: 'short'}}</td>\n    </tr>\n  </tbody>\n</table>\n\n<h3>List of other logged users</h3>\n<ul>\n  <li *ngFor=\"let name of names\"><a [routerLink]=\"['/dashboard','list',name._id]\">{{name.name}}</a></li>\n</ul>\n"

/***/ }),

/***/ "../../../../../src/app/note/note-add/note-add.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var bucket_1 = __webpack_require__("../../../../../src/app/note/bucket.ts");
var bucket_service_1 = __webpack_require__("../../../../../src/app/note/bucket.service.ts");
var user_1 = __webpack_require__("../../../../../src/app/user/user.ts");
var user_service_1 = __webpack_require__("../../../../../src/app/user/user.service.ts");
var AddComponent = /** @class */ (function () {
    function AddComponent(_bucketService, _userService, _router) {
        this._bucketService = _bucketService;
        this._userService = _userService;
        this._router = _router;
    }
    AddComponent.prototype.ngOnInit = function () {
        this.loggedUser = this._userService.currentUser;
        this.names = [];
        this.newitem = new bucket_1.Bucket();
        this.newitem._creator = this.loggedUser.name;
        this.owner2 = this.loggedUser._id;
        this.userbuck = new user_1.User();
        this.getBuckets();
        this.getNames();
    };
    AddComponent.prototype.getBuckets = function () {
        var _this = this;
        this._bucketService.getItemId(this._userService.currentUser._id, function (user_buckets) {
            _this.userbuck = user_buckets;
        }, function (error) {
            console.log(error);
        });
    };
    AddComponent.prototype.getNames = function () {
        var _this = this;
        this._bucketService.getauth(function (names) {
            for (var i = 0; i < names.length; i++) {
                if (names[i]._id != _this.loggedUser._id) {
                    _this.names.push(names[i]);
                }
            }
        }, function (error) {
            console.log(error);
        });
    };
    AddComponent.prototype.addBucket = function () {
        var _this = this;
        var obj = { owner: this.owner2, bucket: this.newitem };
        this._bucketService.addItem(obj, function (buckets) {
            _this.newitem = new bucket_1.Bucket();
            _this.userbuck = buckets;
        }, function (error) {
            console.log(error);
        });
    };
    AddComponent.prototype.updateCompleted = function (id, index) {
        var _this = this;
        var obj = { id: id, completed: this.userbuck.buckets[index].done };
        this._bucketService.updateItem(obj, function (buckets) {
            _this.userbuck = buckets;
        }, function (error) {
            console.log(error);
        });
    };
    AddComponent.prototype.viewList = function (id) {
        this._router.navigate(['view', id]);
        this.names = [];
    };
    AddComponent = __decorate([
        core_1.Component({
            selector: 'app-note-add',
            template: __webpack_require__("../../../../../src/app/note/note-add/note-add.component.html"),
            styles: [__webpack_require__("../../../../../src/app/note/note-add/note-add.component.css")]
        }),
        __metadata("design:paramtypes", [bucket_service_1.BucketService, user_service_1.UserService, router_1.Router])
    ], AddComponent);
    return AddComponent;
}());
exports.AddComponent = AddComponent;


/***/ }),

/***/ "../../../../../src/app/note/note-list/note-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/note/note-list/note-list.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>{{userbuck.name}}'s Bucket List</h3>\n<br>\n<h4>Pending Bucket List Items</h4>\n<table>\n  <tr *ngFor=\"let bucket of itempending\">\n    <td><input type=\"checkbox\" [(ngModel)]=\"bucket.done\" disabled></td>\n    <td><b>{{bucket._creator}}</b>-</td>\n    <td>{{bucket.title}}-</td>\n    <td>{{bucket.desc}}-</td>\n    <td>{{bucket.createdAt | date: 'short'}}</td>\n  </tr>\n</table><br>\n<h3>Completed Bucket List Items</h3>\n<table>\n  <tr *ngFor=\"let bucket of item\">\n    <td><input type=\"checkbox\" [(ngModel)]=\"bucket.done\" disabled></td>\n    <td><b>{{bucket._creator}}</b>-</td>\n    <td>{{bucket.item}}-</td>\n    <td>{{bucket.desc}}-</td>\n    <td>{{bucket.createdAt | date: 'short'}}</td>\n  </tr>\n</table>\n<a [routerLink]=\"['/dashboard','add']\"><input type=\"button\" value=\"Back\"></a>\n\n"

/***/ }),

/***/ "../../../../../src/app/note/note-list/note-list.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var router_2 = __webpack_require__("../../../router/esm5/router.js");
var bucket_service_1 = __webpack_require__("../../../../../src/app/note/bucket.service.ts");
var user_1 = __webpack_require__("../../../../../src/app/user/user.ts");
var NoteListComponent = /** @class */ (function () {
    function NoteListComponent(_router, _active, _buckServ) {
        this._router = _router;
        this._active = _active;
        this._buckServ = _buckServ;
    }
    NoteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user_id = '';
        this.userbuck = new user_1.User();
        this.itemcompleted = [];
        this.itempending = [];
        this._active.paramMap.subscribe(function (params) {
            _this.user_id = params.get('id');
        });
        this._buckServ.getItemId(this.user_id, function (user_buckets) {
            for (var i = 0; i < user_buckets.buckets.length; i++) {
                if (user_buckets.buckets[i].completed) {
                    _this.itemcompleted.push(user_buckets.buckets[i]);
                }
                else {
                    _this.itempending.push(user_buckets.buckets[i]);
                }
                _this.userbuck = user_buckets;
            }
        }, function (error) {
            console.log(error);
        });
    };
    NoteListComponent = __decorate([
        core_1.Component({
            selector: 'app-note-list',
            template: __webpack_require__("../../../../../src/app/note/note-list/note-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/note/note-list/note-list.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.Router, router_2.ActivatedRoute, bucket_service_1.BucketService])
    ], NoteListComponent);
    return NoteListComponent;
}());
exports.NoteListComponent = NoteListComponent;


/***/ }),

/***/ "../../../../../src/app/note/note.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/note/note.component.html":
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['/note-list', 'note-add']\" > Dashboard </a>\n<br>\n<app-user-logout></app-user-logout>\n<br>\n<div>\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "../../../../../src/app/note/note.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var user_service_1 = __webpack_require__("../../../../../src/app/user/user.service.ts");
var NoteComponent = /** @class */ (function () {
    function NoteComponent(_userService) {
        this._userService = _userService;
    }
    NoteComponent.prototype.ngOnInit = function () {
        // this.user = new User();
        // this.user = this._userService.currentUser;
        // console.log(this.user);
    };
    NoteComponent = __decorate([
        core_1.Component({
            selector: 'app-note',
            template: __webpack_require__("../../../../../src/app/note/note.component.html"),
            styles: [__webpack_require__("../../../../../src/app/note/note.component.css")]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService])
    ], NoteComponent);
    return NoteComponent;
}());
exports.NoteComponent = NoteComponent;


/***/ }),

/***/ "../../../../../src/app/user/user-logout/user-logout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user-logout/user-logout.component.html":
/***/ (function(module, exports) {

module.exports = "<button\n    (click)=\"logout()\"\n>shit\n</button>\n"

/***/ }),

/***/ "../../../../../src/app/user/user-logout/user-logout.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var user_service_1 = __webpack_require__("../../../../../src/app/user/user.service.ts");
var UserLogoutComponent = /** @class */ (function () {
    function UserLogoutComponent(_route, _userService) {
        this._route = _route;
        this._userService = _userService;
    }
    UserLogoutComponent.prototype.ngOnInit = function () {
    };
    UserLogoutComponent.prototype.logout = function () {
        var _this = this;
        this._userService.logout(function (res) {
            _this._route.navigateByUrl('/');
        }, function (err) {
            console.log(err);
        });
    };
    UserLogoutComponent = __decorate([
        core_1.Component({
            selector: 'app-user-logout',
            template: __webpack_require__("../../../../../src/app/user/user-logout/user-logout.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/user-logout/user-logout.component.css")],
        }),
        __metadata("design:paramtypes", [router_1.Router,
            user_service_1.UserService])
    ], UserLogoutComponent);
    return UserLogoutComponent;
}());
exports.UserLogoutComponent = UserLogoutComponent;


/***/ }),

/***/ "../../../../../src/app/user/user-new/user-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user-new/user-new.component.html":
/***/ (function(module, exports) {

module.exports = "<div\n  class=\"user-new-div\">\n\n    <form \n      (submit)=\"onSubmit(); createUser.resetForm()\"\n      #createForm=\"ngForm\"\n    >\n      <label>Name:</label>\n      <input \n        type=\"text\" \n        name=\"name\" \n        required\n        minlength=\"2\"\n        maxlength=\"30\"\n        [(ngModel)]=\"user.name\"\n        #name=\"ngModel\"\n        />\n        <button\n          class=\"user-new-submit\"\n        >Enter\n        </button>\n    </form>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/user/user-new/user-new.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var user_service_1 = __webpack_require__("../../../../../src/app/user/user.service.ts");
var user_1 = __webpack_require__("../../../../../src/app/user/user.ts");
var UserNewComponent = /** @class */ (function () {
    function UserNewComponent(_route, _userService) {
        this._route = _route;
        this._userService = _userService;
    }
    UserNewComponent.prototype.ngOnInit = function () {
        this.user = new user_1.User();
        if (this._userService.currentUser) {
            this._route.navigateByUrl('/dashboard');
        }
    };
    UserNewComponent.prototype.onSubmit = function () {
        var _this = this;
        this._userService.createUser(this.user, function (user) {
            //Navigate to dashboard
            _this._route.navigateByUrl('/dashboard');
        }, function (err) {
            // Display Errors
            console.log(err);
        });
        this.user = new user_1.User();
    };
    UserNewComponent = __decorate([
        core_1.Component({
            selector: 'app-user-new',
            template: __webpack_require__("../../../../../src/app/user/user-new/user-new.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/user-new/user-new.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            user_service_1.UserService])
    ], UserNewComponent);
    return UserNewComponent;
}());
exports.UserNewComponent = UserNewComponent;


/***/ }),

/***/ "../../../../../src/app/user/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/user/user.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var UserComponent = /** @class */ (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = __decorate([
        core_1.Component({
            selector: 'app-user',
            template: __webpack_require__("../../../../../src/app/user/user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;


/***/ }),

/***/ "../../../../../src/app/user/user.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var UserService = /** @class */ (function () {
    function UserService(_http) {
        this._http = _http;
    }
    UserService.prototype.createUser = function (user, callback, errorback) {
        var _this = this;
        this._http.post('/users', user).subscribe(function (res) {
            var user = res.json();
            _this.currentUser = user;
            callback(_this.currentUser);
        }, function (err) {
            errorback(err);
        });
    };
    UserService.prototype.getCurrentUser = function (callback, errorback) {
        var _this = this;
        this._http.get('/sessions').subscribe(function (res) {
            var user = res.json();
            if (user) {
                _this.currentUser = user;
            }
            callback(user);
        }, function (err) {
            errorback(err);
        });
    };
    UserService.prototype.logout = function (callback, errorback) {
        var _this = this;
        this._http.delete('/sessions').subscribe(function (res) {
            _this.currentUser = null;
            callback(res.json());
        }, function (err) {
            errorback(err);
        });
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;


/***/ }),

/***/ "../../../../../src/app/user/user.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    // createdAt: Date;
    // updatedAt: Date;
    function User() {
        this.name = "";
    }
    return User;
}());
exports.User = User;


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
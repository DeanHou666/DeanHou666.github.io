(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <app-log-form></app-log-form>\n  <app-logs></app-logs>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'devloggerProjectInGit';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_log_form_log_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/log-form/log-form.component */ "./src/app/components/log-form/log-form.component.ts");
/* harmony import */ var _components_logs_logs_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/logs/logs.component */ "./src/app/components/logs/logs.component.ts");
/* harmony import */ var _services_log_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/log.service */ "./src/app/services/log.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                _components_log_form_log_form_component__WEBPACK_IMPORTED_MODULE_6__["LogFormComponent"],
                _components_logs_logs_component__WEBPACK_IMPORTED_MODULE_7__["LogsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]
            ],
            providers: [_services_log_service__WEBPACK_IMPORTED_MODULE_8__["LogService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/log-form/log-form.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/log-form/log-form.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9nLWZvcm0vbG9nLWZvcm0uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/log-form/log-form.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/log-form/log-form.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-body mb-3\">\n  <form (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"add a log..\n      \"\n      name=\"text\" [(ngModel)]=\"text\"\n      >\n    </div>\n    <input type=\"submit\" value=\"Add Log\" class=\"btn btn-light\" [disabled]=\"!this.text\">\n    <button type=\"button\" class=\"btn-warning btn\" [hidden]=\"!this.text\" (click)=\"clearState()\">Clear</button>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/components/log-form/log-form.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/log-form/log-form.component.ts ***!
  \***********************************************************/
/*! exports provided: LogFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogFormComponent", function() { return LogFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_log_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/log.service */ "./src/app/services/log.service.ts");



var LogFormComponent = /** @class */ (function () {
    function LogFormComponent(logService) {
        this.logService = logService;
        this.isNew = true;
        console.log(this.text);
    }
    LogFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.logService.selectedLog.subscribe(function (log) {
            if (log.id !== null) {
                _this.isNew = false;
                _this.id = log.id;
                _this.text = log.text;
                _this.date = log.date;
            }
        });
    };
    LogFormComponent.prototype.onSubmit = function () {
        if (this.isNew) {
            var newLog = {
                id: this.generateID(),
                text: this.text,
                date: new Date()
            };
            this.logService.addLog(newLog);
        }
        else {
            //create  log to be update
            var updLog = {
                id: this.id,
                text: this.text,
                date: new Date()
            };
            this.logService.updateLog(updLog);
        }
        //clear state
        this.clearState();
    };
    LogFormComponent.prototype.generateID = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    LogFormComponent.prototype.clearState = function () {
        this.isNew = true;
        this.id = '';
        this.text = '';
        this.date = '';
        this.logService.clearState();
    };
    LogFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-log-form',
            template: __webpack_require__(/*! ./log-form.component.html */ "./src/app/components/log-form/log-form.component.html"),
            styles: [__webpack_require__(/*! ./log-form.component.css */ "./src/app/components/log-form/log-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_log_service__WEBPACK_IMPORTED_MODULE_2__["LogService"]])
    ], LogFormComponent);
    return LogFormComponent;
}());



/***/ }),

/***/ "./src/app/components/logs/logs.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/logs/logs.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".log-data{\n  color:#777;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dzL2xvZ3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7O0FBRVoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ3MvbG9ncy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZy1kYXRhe1xuICBjb2xvcjojNzc3O1xuICBcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/logs/logs.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/logs/logs.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"list-group\" *ngIf=\"loaded && logs?.length >0\" >\n  <li class=\"list-group-item d-flex justify-content-between align-items-center\" \n  *ngFor=\"let log of logs\" [class.list-group-item-secondary]=\"selectedLog === log\"\n  >\n    <a href=\"#\" (click)=\"onSelect(log)\">{{log.text}}</a>\n    <span class=\"log-date\">{{log.date | date:'short'}}</span>\n    <i class=\"fa fa-remove\" (click)=\"onDelete(log)\"></i>\n  </li>\n</ul>\n\n<div *ngIf=\"loaded && logs?.length ===0\"><h5>there is no logs</h5></div>\n<div *ngIf=\"!loaded\">loading...</div>"

/***/ }),

/***/ "./src/app/components/logs/logs.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/logs/logs.component.ts ***!
  \***************************************************/
/*! exports provided: LogsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogsComponent", function() { return LogsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_log_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/log.service */ "./src/app/services/log.service.ts");



var LogsComponent = /** @class */ (function () {
    function LogsComponent(logService) {
        this.logService = logService;
        this.loaded = false;
    }
    LogsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.logService.stateClear.subscribe(function (clear) {
            if (clear) {
                _this.selectedLog = {
                    id: '', text: '', date: ''
                };
            }
        });
        this.logService.getLogs().subscribe(function (logs) {
            _this.logs = logs;
            _this.loaded = true;
        });
    };
    LogsComponent.prototype.onSelect = function (log) {
        this.logService.setFormLog(log);
        this.selectedLog = log;
    };
    LogsComponent.prototype.onDelete = function (log) {
        if (confirm('sure to delete?')) {
            this.logService.deleteLog(log);
        }
    };
    LogsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-logs',
            template: __webpack_require__(/*! ./logs.component.html */ "./src/app/components/logs/logs.component.html"),
            styles: [__webpack_require__(/*! ./logs.component.css */ "./src/app/components/logs/logs.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_log_service__WEBPACK_IMPORTED_MODULE_2__["LogService"]])
    ], LogsComponent);
    return LogsComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"nav navar bg-dark mb-3\">\n  <div class=\"container\">\n    <a href=\"/\" class=\"navar-brand\">Devlogger</a>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/services/log.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/log.service.ts ***!
  \*****************************************/
/*! exports provided: LogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogService", function() { return LogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var LogService = /** @class */ (function () {
    function LogService() {
        this.logSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({ id: null, text: null, date: null });
        this.selectedLog = this.logSource.asObservable();
        this.stateSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](true);
        this.stateClear = this.stateSource.asObservable();
        this.logs = [
        // {id:'1',text:'Generate Components',date: new Date('12/24/2018 12:23:23')},
        // {id:'2',text:'Add Bootstraps',date: new Date('12/24/2018 12:23:23')},
        // {id:'3',text:'Add Logs Component',date: new Date('12/24/2018 12:23:23')}
        ];
    }
    LogService.prototype.getLogs = function () {
        if (localStorage.getItem('logs') === null) {
            this.logs = [];
        }
        else {
            this.logs = JSON.parse(localStorage.getItem('logs'));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.logs.sort(function (a, b) {
            return b.date = a.date;
        }));
    };
    LogService.prototype.setFormLog = function (log) {
        this.logSource.next(log);
    };
    LogService.prototype.addLog = function (log) {
        this.logs.unshift(log);
        //add to local storage
        localStorage.setItem('logs', JSON.stringify(this.logs));
    };
    LogService.prototype.updateLog = function (log) {
        var _this = this;
        this.logs.forEach(function (cur, index) {
            if (log.id == cur.id) {
                _this.logs.splice(index, 1);
            }
        });
        this.logs.unshift(log);
        //update localstorage
        localStorage.setItem('logs', JSON.stringify(this.logs));
    };
    LogService.prototype.deleteLog = function (log) {
        var _this = this;
        this.logs.forEach(function (cur, index) {
            if (log.id == cur.id) {
                _this.logs.splice(index, 1);
            }
        });
        localStorage.setItem('logs', JSON.stringify(this.logs));
    };
    LogService.prototype.clearState = function () {
        this.stateSource.next(true);
    };
    LogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LogService);
    return LogService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/houbentao/Documents/GitHub/devloggerProjectInGit/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
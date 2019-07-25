(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/chat/chat-box/chat-box.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/chat/chat-box/chat-box.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n  \n      <div class=\"displayBlockMobile\" style=\"position:fixed;width:100%;z-index:1;\">\n  \n        <div class=\"col-sm-12 p-0\">\n  \n          <nav class=\"navbar navbar-expand-md navbar-fixed navbar-dark bg-dark\">\n  \n            <a class=\"navbar-brand text-white\">\n              {{userInfo.firstName}} {{userInfo.lastName}}\n              <i class=\"fa fa-circle online\" *ngIf=\"disconnectedSocket == false\"></i>\n              <i class=\"fa fa-circle offline\" *ngIf=\"disconnectedSocket == true\"></i>\n            </a>\n  \n            <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n              aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n  \n              <span class=\"navbar-toggler-icon\"></span>\n  \n            </button>\n  \n            <div class=\"collapse people-list navbar-collapse\" id=\"navbarSupportedContent\">\n  \n              <ul class=\"list\">\n                <li class=\"p-2 typeOfChats\">\n                  Online Users:\n                </li>\n                <li class=\"clearfix cursorPointer\" [ngClass]=\"{'activeChat': user.chatting == true}\" (click)=\"userSelectedToChat(user.userId, user.name)\"\n                  *ngFor=\"let user of userList\">\n                  <div class=\"userPresence\" *ngIf=\"user.userId != userInfo.userId\">\n                    <user-details [userFirstName]=\"user.name\" [userLastName]=\"''\" [userStatus]=\"'online'\" [messageRead]=\"user.unread\"></user-details>\n                  </div>\n                </li>\n                \n              </ul>\n              <ul class=\"list\">\n                <li class=\"p-2 typeOfChats\">\n                 Unread Message of Offline Users:\n                </li>\n                <li class=\"clearfix cursorPointer\" [ngClass]=\"{'notactiveChat': user.chatting == false}\"\n            *ngFor=\"let user of missedList\" (click)=\"userSelectedToChat(user.userId,user.firstName)\">\n            <div class=\"userPresence\" *ngIf=\"user.userId != userInfo.userId\"  >\n              <user-details [userFirstName]=\"user.firstName\" [userLastName]=\"user.lastName\" [userStatus]=\"'offline'\" [messageRead]=\"user.unread\"></user-details>\n            </div>\n          </li>\n                \n              </ul>\n  \n            </div>\n  \n          </nav>\n  \n        </div>\n  \n      </div>\n  \n      <div class=\"col-12 displayNoneMobile col-sm-4 col-md-4 people-list p-0\" id=\"people-list\">\n  \n        <div class=\"p-3 text-white textCapitalize textCenter\">\n          {{userInfo.firstName}} {{userInfo.lastName}}\n          <i class=\"fa fa-circle online\" *ngIf=\"disconnectedSocket == false\"></i>\n          <i class=\"fa fa-circle offline\" *ngIf=\"disconnectedSocket == true\"></i>\n          <br>\n          <br>\n          <button (click)=\"logout()\" class=\"btn btn-info customButton\">Logout</button>\n        </div>\n  \n        <ul class=\"list\">\n          <li class=\"p-2 typeOfChats\">\n            Online Users:\n          </li>\n          <li class=\"clearfix cursorPointer\"[ngClass]=\"{'notactiveChat':opt>0}\" [ngClass]=\"{'activeChat': user.chatting == true}\"\n            *ngFor=\"let user of userList\" (click)=\"userSelectedToChat(user.userId, user.name)\">\n            <div class=\"userPresence\"  *ngIf=\"user.userId != userInfo.userId\"  >\n              <user-details [userFirstName]=\"user.name\" [userLastName]=\"''\" [userStatus]=\"'online'\" [messageRead]=\"user.unread\"></user-details>\n            </div>\n          </li>\n         \n        </ul>\n        <ul class=\"list\">\n          <li class=\"p-2 typeOfChats\">\n            Unread Message of \n            Offline Users:\n          </li>\n          <li class=\"clearfix cursorPointer\" [ngClass]=\"{'notactiveChat': user.chatting == false}\"\n            *ngFor=\"let user of missedList\" (click)=\"userSelectedToChat(user.userId,user.firstName)\">\n            <div class=\"userPresence\" *ngIf=\"user.userId != userInfo.userId\"  >\n              <user-details [userFirstName]=\"user.firstName\" [userLastName]=\"user.lastName\" [userStatus]=\"'offline'\" [messageRead]=\"user.unread\"></user-details>\n            </div>\n          </li>\n         \n        </ul>\n  \n  \n      </div>\n  \n      <div class=\"col-12 col-sm-8 col-md-8 chat\">\n        <div class=\"chat-header clearfix mobileMenu\" *ngIf=\"receiverName\">\n          <first-char [name]=\"receiverName\" [userBg]=\"'blue'\" [userColor]=\"'white'\" (notify)=\"showUserName($event)\"></first-char>\n  \n          <div class=\"chat-about\">\n            <div class=\"chat-with\">Chat with {{receiverName}}</div>\n          </div>\n        </div>\n        <!-- end chat-header -->\n  \n        <div #scrollMe [scrollTop]=\"(scrollToChatTop)?0:scrollMe.scrollHeight\" class=\"chat-history\" *ngIf=\"receiverName\">\n  \n          <ul>\n            <li class=\"textCenter\" *ngIf=\"receiverName\">\n  \n              <span  class=\"cursorPointer\" (click)=\"loadEarlierPageOfChat()\">Load Previous Chat</span>\n  \n              <br>\n  \n              <span *ngIf=\"loadingPreviousChat == true\">Loading...</span>\n  \n            </li>\n            <li class=\"clearfix\" *ngFor=\"let message of messageList\">\n              <div class=\"message-data\" [ngClass]=\"{'align-right': message.senderId == userInfo.userId}\">\n                <span class=\"message-data-time\">{{message?.createdOn | date: 'medium' }}</span> &nbsp; &nbsp;\n                <span class=\"message-data-name floatLeft\" *ngIf=\"message.senderId != userInfo.userId\">\n                  <i class=\"fa fa-circle online\"></i> {{ message?.senderName }}</span>\n                <span class=\"message-data-name\" *ngIf=\"message.senderId == userInfo.userId\">{{ message?.senderName }}</span>\n                <i class=\"fa fa-circle me\" *ngIf=\"message.senderId == userInfo.userId\"></i>\n  \n              </div>\n              <div class=\"message\" [ngClass]=\"{'float-right other-message': message.senderId == userInfo.userId, 'my-message': message.senderId != userInfo.userId}\">\n                {{message?.message | removeSpecialCharPipe: '#' | removeSpecialCharPipe: '$'}}\n              </div>\n            </li>\n  \n          </ul>\n  \n        </div>\n        <div *ngIf=\"!receiverName\" class=\"col-sm blankContent\">\n          Click on user for start a chat!!!\n        </div>\n        <!-- end chat-history -->\n  \n        <div class=\"chat-message clearfix p-2\" *ngIf=\"receiverName\">\n          <textarea name=\"message-to-send\" id=\"message-to-send\" (keydown)=\"sendMessageUsingKeypress($event)\" [(ngModel)]=\"messageText\"\n            placeholder=\"Type your message\" rows=\"3\"></textarea>\n  \n          <button (click)=\"sendMessage()\">Send</button>\n  \n        </div>\n        <!-- end chat-message -->\n  \n      </div>\n  \n    </div>\n    <!-- end chat -->\n  \n  </div>\n  <!-- end container -->\n  \n  \n  \n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/first-char/first-char.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/first-char/first-char.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div (click)='nameClicked()'  class=\"crop\" [style.color]=\"userColor ? userColor :'white'\" [style.background]=\"userBg ? userBg :'blue'\">\n    {{firstChar}}\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/user-details/user-details.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/user-details/user-details.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"crop\" >\n    {{firstChar}}\n  </div>\n  <div class=\"about\">\n    <div class=\"name\">{{userFirstName}} {{userLastName}}\n      <i *ngIf=\"messageRead\" class=\"fa fa-circle warning\"></i>\n    </div>\n    <div class=\"status\">\n      <i class=\"fa fa-circle\" [ngClass]=\"userStatus\"></i>{{userStatus}}\n    </div>\n  </div>\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/log-in/log-in.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/log-in/log-in.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"im\">\n<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\n\n    <a class=\"navbar-brand\" href=\"/\">My Chat</a>\n  \n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n  \n      <span class=\"navbar-toggler-icon\"></span>\n  \n    </button>\n  \n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n  \n      <ul class=\"navbar-nav\">\n  \n        <li class=\"nav-item\">\n  \n          <a class=\"nav-link\" (click)=\"goToSignUp()\">Sign-Up</a>\n  \n        </li>\n  \n      </ul>\n  \n    </div>\n  \n  </nav>\n  \n  <div class=\"row p-0 m-0 \">\n  \n    <div class=\"col-sm\"></div>\n  \n    <div class=\"col-sm p-5\">\n  \n      <h2 class=\"ii\">Please sign in</h2>\n  \n      <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\n  \n      <input type=\"email\" id=\"inputEmail\" class=\"form-control\" [(ngModel)]=\"email\" placeholder=\"Email address\" required autofocus>\n  \n      <br>\n  \n      <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n  \n      <input type=\"password\" id=\"inputPassword\" class=\"form-control\" [(ngModel)]=\"password\" placeholder=\"Password\" required>\n  \n      <br>\n  \n      <button class=\"btn btn-lg btn-primary btn-block\" type=\"button\" (click)=\"signinFunction()\">Sign in</button>\n  \n    </div>\n  \n    <div class=\"col-sm\"></div>\n  \n  </div>\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/sign-up/sign-up.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/sign-up/sign-up.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\n\n    <a class=\"navbar-brand\" href=\"/\">My Chat</a>\n  \n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n  \n      <span class=\"navbar-toggler-icon\"></span>\n  \n    </button>\n  \n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n  \n      <ul class=\"navbar-nav mr-auto\">\n  \n        <li class=\"nav-item\">\n  \n          <a class=\"nav-link\" (click)=\"goToSignIn()\">Sign-In</a>\n  \n        </li>\n  \n      </ul>\n  \n    </div>\n  \n  </nav>\n  \n  <div class=\"row p-0 m-0 im\" >\n  \n    <div class=\"col-sm\"></div>\n  \n    <div class=\"col-sm p-5\">\n  \n      <h2 class=\"ii\">Sign Up To Start Chat</h2>\n  \n      <br>\n  \n      <span>FirstName: </span>\n  \n      <label for=\"inputFirstName\" class=\"sr-only\">FirstName</label>\n  \n      <input type=\"text\" id=\"inputFirstName\" class=\"form-control\" [(ngModel)]=\"firstName\" placeholder=\"FirstName\" required autofocus>\n  \n      <br>\n  \n      <span>LastName: </span>\n  \n      <label for=\"inputLastName\" class=\"sr-only\">LastName</label>\n  \n      <input type=\"text\" id=\"inputLastName\" class=\"form-control\" [(ngModel)]=\"lastName\" placeholder=\"LastName\" required>\n  \n      <br>\n  \n      <span>Mobile: </span>\n  \n      <label for=\"inputMobile\" class=\"sr-only\">Mobile</label>\n  \n      <input type=\"number\" id=\"inputMobile\" class=\"form-control\" [(ngModel)]=\"mobile\" placeholder=\"Mobile\" required>\n  \n      <br>\n  \n      <span>Email: </span>\n  \n      <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\n  \n      <input type=\"email\" id=\"inputEmail\" class=\"form-control\" [(ngModel)]=\"email\" placeholder=\"Email address\" required>\n  \n      <br>\n  \n      <span>Password: </span>\n  \n      <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n  \n      <input type=\"password\" id=\"inputPassword\" class=\"form-control\" [(ngModel)]=\"password\" placeholder=\"Password\" required>\n  \n      <br>\n  \n  \n  \n\n  \n      <button class=\"btn btn-lg btn-primary btn-block\" type=\"button\" (click)=\"signupFunction()\">Sign Up</button>\n  \n    </div>\n  \n    <div class=\"col-sm\"></div>\n  \n  </div>\n  \n  "

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'chat-app';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _chat_chat_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chat/chat.module */ "./src/app/chat/chat.module.ts");
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user/user.module */ "./src/app/user/user.module.ts");
/* harmony import */ var _user_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user/log-in/log-in.component */ "./src/app/user/log-in/log-in.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");













let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _chat_chat_module__WEBPACK_IMPORTED_MODULE_5__["ChatModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
            _user_user_module__WEBPACK_IMPORTED_MODULE_6__["UserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrModule"].forRoot(),
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot([
                { path: 'login', component: _user_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_7__["LogInComponent"], pathMatch: 'full' },
                { path: '', redirectTo: 'login', pathMatch: 'full' },
                { path: '*', component: _user_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_7__["LogInComponent"] },
                { path: '**', component: _user_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_7__["LogInComponent"] }
            ])
        ],
        providers: [_app_service__WEBPACK_IMPORTED_MODULE_12__["AppService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__);





let AppService = class AppService {
    constructor(http) {
        this.http = http;
        this.url = 'https://chatapi.edwisor.com';
        this.getUserInfoInLocalStorage = () => {
            return JSON.parse(localStorage.getItem('userInfo'));
        };
        this.setUserInfoInLocalStorage = (data) => {
            localStorage.setItem('userInfo', JSON.stringify(data));
        };
    }
    signupFunction(data) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('firstName', data.firstName)
            .set('lastName', data.lastName)
            .set('mobile', data.mobile)
            .set('email', data.email)
            .set('password', data.password)
            .set('apiKey', data.apiKey);
        return this.http.post(`${this.url}/api/v1/users/signup`, params);
    } // end of signupFunction function.
    signinFunction(data) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('email', data.email)
            .set('password', data.password);
        return this.http.post(`${this.url}/api/v1/users/login`, params);
    } // end of signinFunction function.
    logout() {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('authToken', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authtoken'));
        return this.http.post(`${this.url}/api/v1/users/logout`, params);
    } // end logout function
};
AppService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AppService);



/***/ }),

/***/ "./src/app/chat/chat-box/chat-box.component.css":
/*!******************************************************!*\
  !*** ./src/app/chat/chat-box/chat-box.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".online{\r\n\r\n    height: 10px;\r\n    width: 10px;\r\n    background-color:green;\r\n    border-radius: 50%;\r\n    display: inline-block;\r\n  }\r\n  \r\n  .offline{\r\n  \r\n    height: 10px;\r\n    width: 10px;\r\n    background-color:red;\r\n    border-radius: 50%;\r\n    display: inline-block;\r\n  }\r\n  \r\n  .rightSideClass {\r\n      float: right;\r\n      background: #ddd;\r\n      border-radius: 0.5em;\r\n    }\r\n  \r\n  .leftSideClass {\r\n      float: left;\r\n      background: #55C1E7;\r\n      border-radius: 0.5em;\r\n    }\r\n  \r\n  .circle-green:before {\r\n      content: ' \\25CF';\r\n      font-size: 1em;\r\n      color: green;\r\n    }\r\n  \r\n  .circle-red:before {\r\n      content: ' \\25CF';\r\n      font-size: 1em;\r\n      color: red;\r\n    }\r\n  \r\n  .cursorPointer {\r\n      cursor: pointer;\r\n    }\r\n  \r\n  .textCenter {\r\n      text-align: center;\r\n    }\r\n  \r\n  .floatLeft {\r\n      float: left;\r\n    }\r\n  \r\n  *,\r\n    *:before,\r\n    *:after {\r\n      box-sizing: border-box;\r\n    }\r\n  \r\n  body {\r\n      padding: 2.5em 0;\r\n      color: white;\r\n    }\r\n  \r\n  .container {\r\n      margin: 0 auto;\r\n      background: #444753;\r\n      border-radius: 0.3em;\r\n    }\r\n  \r\n  .people-list {\r\n      float: left;\r\n    }\r\n  \r\n  .people-list input {\r\n      border-radius: 0.2em;\r\n      border: none;\r\n      padding: 1em;\r\n      color: white;\r\n      background: #6A6C75;\r\n      width: 90%;\r\n      font-size: 1em;\r\n    }\r\n  \r\n  .people-list .fa-search {\r\n      position: relative;\r\n      left: -1.8em;\r\n    }\r\n  \r\n  .people-list ul {\r\n      padding: 0;\r\n    }\r\n  \r\n  .people-list ul li .userPresence {\r\n      float: left;\r\n      padding: 0.7em 0.2em;\r\n      color: white;\r\n      text-transform: capitalize;\r\n    }\r\n  \r\n  .textCapitalize {\r\n      text-transform: capitalize;\r\n      font-size: 1.2em;\r\n    }\r\n  \r\n  .people-list img {\r\n      float: left;\r\n    }\r\n  \r\n  .people-list .about {\r\n      float: left;\r\n    }\r\n  \r\n  .people-list .about {\r\n      padding-left: 0.4em;\r\n    }\r\n  \r\n  .people-list .status {\r\n      color: #92959E;\r\n    }\r\n  \r\n  .chat {\r\n      height: 100vh;\r\n      float: left;\r\n      background: #F2F5F8;\r\n      border-top-right-radius: 0.3em;\r\n      border-bottom-right-radius: 0.3em;\r\n      color: #434651;\r\n    }\r\n  \r\n  .chat .chat-header {\r\n      padding: 0.2em;\r\n      border-bottom: 0.15em solid white;\r\n    }\r\n  \r\n  .chat .chat-header img {\r\n      float: left;\r\n    }\r\n  \r\n  .chat .chat-header .chat-about {\r\n      float: left;\r\n      padding-left: 0.8em;\r\n      margin-top: 0.4em;\r\n    }\r\n  \r\n  .chat .chat-header .chat-with {\r\n      font-weight: bold;\r\n      font-size: 1.1em;\r\n    }\r\n  \r\n  .chat .chat-header .chat-num-messages {\r\n      color: #92959E;\r\n    }\r\n  \r\n  .chat .chat-header .fa-star {\r\n      float: right;\r\n      color: #D8DADF;\r\n      font-size: 1.42em;\r\n      margin-top: 0.85em;\r\n    }\r\n  \r\n  .chat .chat-history {\r\n      padding: 2em 2em 1.42em;\r\n      border-bottom: 0.15em solid white;\r\n      overflow-y: scroll;\r\n      height: 80vh;\r\n    }\r\n  \r\n  .chat .chat-history .message-data {\r\n      margin-bottom: 1em;\r\n    }\r\n  \r\n  .chat .chat-history .message-data-time {\r\n      color: #a8aab1;\r\n      padding-left: 0.4em;\r\n    }\r\n  \r\n  .chat .chat-history .message {\r\n      color: white;\r\n      padding: 0.5em 1.42em;\r\n      line-height: 1.9em;\r\n      font-size: 1.1em;\r\n      border-radius: 7px;\r\n      margin-bottom: 2em;\r\n      width: 90%;\r\n      position: relative;\r\n    }\r\n  \r\n  .chat .chat-history .message:after {\r\n      bottom: 100%;\r\n      left: 7%;\r\n      border: solid transparent;\r\n      content: \" \";\r\n      height: 0;\r\n      width: 0;\r\n      position: absolute;\r\n      pointer-events: none;\r\n      border-bottom-color: #86BB71;\r\n      border-width: 0.8em;\r\n      margin-left: -0.8em;\r\n    }\r\n  \r\n  .chat .chat-history .my-message {\r\n      background: #86BB71;\r\n    }\r\n  \r\n  .chat .chat-history .other-message {\r\n      background: #94C2ED;\r\n    }\r\n  \r\n  .chat .chat-history .other-message:after {\r\n      border-bottom-color: #94C2ED;\r\n      left: 90%;\r\n    }\r\n  \r\n  .chat .chat-message textarea {\r\n      width: 100%;\r\n      border: none;\r\n      padding: 0.8em 1.42em;\r\n      margin-bottom: 0.8em;\r\n      border-radius: 5px;\r\n      resize: none;\r\n    }\r\n  \r\n  .chat .chat-message .fa-file-o,\r\n    .chat .chat-message .fa-file-image-o {\r\n      font-size: 1.1em;\r\n      color: gray;\r\n      cursor: pointer;\r\n    }\r\n  \r\n  .chat .chat-message button {\r\n      float: right;\r\n      color: #94C2ED;\r\n      font-size: 1.1em;\r\n      text-transform: uppercase;\r\n      border: none;\r\n      cursor: pointer;\r\n      font-weight: bold;\r\n      background: #F2F5F8;\r\n    }\r\n  \r\n  .chat .chat-message button:hover {\r\n      color: #75b1e8;\r\n    }\r\n  \r\n  .online,\r\n    .offline,\r\n    .me,\r\n    .warning {\r\n      margin-right: 3px;\r\n      font-size: 0.8em;\r\n    }\r\n  \r\n  .online {\r\n      color: #86BB71;\r\n    }\r\n  \r\n  .offline {\r\n      color: #E38968;\r\n    }\r\n  \r\n  .me {\r\n      color: #94C2ED;\r\n    }\r\n  \r\n  .warning {\r\n      color: #e78930;\r\n    }\r\n  \r\n  .align-left {\r\n      text-align: left;\r\n    }\r\n  \r\n  .align-right {\r\n      text-align: right;\r\n    }\r\n  \r\n  .float-right {\r\n      float: right;\r\n    }\r\n  \r\n  .clearfix:after {\r\n      visibility: hidden;\r\n      display: block;\r\n      font-size: 0;\r\n      content: \" \";\r\n      clear: both;\r\n      height: 0;\r\n    }\r\n  \r\n  .customButton {\r\n      width: 100%;\r\n    }\r\n  \r\n  .activeChat {\r\n      background: #393a41;\r\n    }\r\n  \r\n  .notactiveChat{\r\n      background: #b32027;\r\n    }\r\n  \r\n  .typeOfChats {\r\n      background: #393a41;\r\n      color: white;\r\n      margin-top: 0.2em;\r\n      margin-bottom: 0.2em;\r\n    }\r\n  \r\n  .blankContent{\r\n      height: 100vh;\r\n      display: -webkit-box;\r\n      display: flex;\r\n      -webkit-box-align: center;\r\n              align-items: center;\r\n      -webkit-box-pack: center;\r\n              justify-content: center;\r\n      font-size: 3rem;\r\n      color: #999;\r\n    }\r\n  \r\n  @media only screen and (max-width:575px) {\r\n      .chat .chat-history {\r\n        height:50vh;\r\n      }\r\n    }\r\n  \r\n  @media only screen and (min-width:576px) and (max-width:768px) {\r\n      .chat .chat-history {\r\n        height:50vh;\r\n      }\r\n    }\r\n  \r\n  @media only screen and (min-width:769px) and (max-width:992px) {\r\n      .chat .chat-history {\r\n        height:65vh;\r\n      }\r\n    }\r\n  \r\n  @media only screen and (min-width:993px) and (max-width:1200  px) {\r\n      .chat .chat-history {\r\n        height:50vh;\r\n      }\r\n    }\r\n  \r\n  /* user list items */\r\n  \r\n  .crop {\r\n    border-radius: 100%;\r\n    line-height: 1em;\r\n    padding: 1em;\r\n    text-align: center;\r\n    margin: 0em;\r\n    width: 3em;\r\n    height: 3em;\r\n    float: left;\r\n    text-transform: uppercase;\r\n  }\r\n  \r\n  .about {\r\n    float: left;\r\n    padding-left: 0.4em;\r\n  }\r\n  \r\n  .online,\r\n  .offline,\r\n  .me,\r\n  .warning {\r\n    margin-right: 3px;\r\n    font-size: 0.8em;\r\n  }\r\n  \r\n  .online {\r\n    color: #86BB71;\r\n  }\r\n  \r\n  .offline {\r\n    color: #E38968;\r\n  }\r\n  \r\n  .me {\r\n    color: #94C2ED;\r\n  }\r\n  \r\n  .warning {\r\n    color: #00c8e7;\r\n  }\r\n  \r\n  .status {\r\n    color: #92959E;\r\n  }\r\n  \r\n  .name {\r\n    float: left;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9jaGF0LWJveC9jaGF0LWJveC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLFlBQVk7SUFDWixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixxQkFBcUI7RUFDdkI7O0VBRUE7O0lBRUUsWUFBWTtJQUNaLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtFQUN2Qjs7RUFHQTtNQUNJLFlBQVk7TUFDWixnQkFBZ0I7TUFDaEIsb0JBQW9CO0lBQ3RCOztFQUVBO01BQ0UsV0FBVztNQUNYLG1CQUFtQjtNQUNuQixvQkFBb0I7SUFDdEI7O0VBRUE7TUFDRSxpQkFBaUI7TUFDakIsY0FBYztNQUNkLFlBQVk7SUFDZDs7RUFFQTtNQUNFLGlCQUFpQjtNQUNqQixjQUFjO01BQ2QsVUFBVTtJQUNaOztFQUVBO01BQ0UsZUFBZTtJQUNqQjs7RUFFQTtNQUNFLGtCQUFrQjtJQUNwQjs7RUFFQTtNQUNFLFdBQVc7SUFDYjs7RUFFQTs7O01BSUUsc0JBQXNCO0lBQ3hCOztFQUVBO01BQ0UsZ0JBQWdCO01BQ2hCLFlBQVk7SUFDZDs7RUFFQTtNQUNFLGNBQWM7TUFDZCxtQkFBbUI7TUFDbkIsb0JBQW9CO0lBQ3RCOztFQUVBO01BQ0UsV0FBVztJQUNiOztFQUVBO01BQ0Usb0JBQW9CO01BQ3BCLFlBQVk7TUFDWixZQUFZO01BQ1osWUFBWTtNQUNaLG1CQUFtQjtNQUNuQixVQUFVO01BQ1YsY0FBYztJQUNoQjs7RUFFQTtNQUNFLGtCQUFrQjtNQUNsQixZQUFZO0lBQ2Q7O0VBRUE7TUFDRSxVQUFVO0lBQ1o7O0VBRUE7TUFDRSxXQUFXO01BQ1gsb0JBQW9CO01BQ3BCLFlBQVk7TUFDWiwwQkFBMEI7SUFDNUI7O0VBRUE7TUFDRSwwQkFBMEI7TUFDMUIsZ0JBQWdCO0lBQ2xCOztFQUVBO01BQ0UsV0FBVztJQUNiOztFQUVBO01BQ0UsV0FBVztJQUNiOztFQUVBO01BQ0UsbUJBQW1CO0lBQ3JCOztFQUVBO01BQ0UsY0FBYztJQUNoQjs7RUFFQTtNQUNFLGFBQWE7TUFDYixXQUFXO01BQ1gsbUJBQW1CO01BQ25CLDhCQUE4QjtNQUM5QixpQ0FBaUM7TUFDakMsY0FBYztJQUNoQjs7RUFFQTtNQUNFLGNBQWM7TUFDZCxpQ0FBaUM7SUFDbkM7O0VBRUE7TUFDRSxXQUFXO0lBQ2I7O0VBRUE7TUFDRSxXQUFXO01BQ1gsbUJBQW1CO01BQ25CLGlCQUFpQjtJQUNuQjs7RUFFQTtNQUNFLGlCQUFpQjtNQUNqQixnQkFBZ0I7SUFDbEI7O0VBRUE7TUFDRSxjQUFjO0lBQ2hCOztFQUVBO01BQ0UsWUFBWTtNQUNaLGNBQWM7TUFDZCxpQkFBaUI7TUFDakIsa0JBQWtCO0lBQ3BCOztFQUVBO01BQ0UsdUJBQXVCO01BQ3ZCLGlDQUFpQztNQUNqQyxrQkFBa0I7TUFDbEIsWUFBWTtJQUNkOztFQUVBO01BQ0Usa0JBQWtCO0lBQ3BCOztFQUVBO01BQ0UsY0FBYztNQUNkLG1CQUFtQjtJQUNyQjs7RUFFQTtNQUNFLFlBQVk7TUFDWixxQkFBcUI7TUFDckIsa0JBQWtCO01BQ2xCLGdCQUFnQjtNQUNoQixrQkFBa0I7TUFDbEIsa0JBQWtCO01BQ2xCLFVBQVU7TUFDVixrQkFBa0I7SUFDcEI7O0VBRUE7TUFDRSxZQUFZO01BQ1osUUFBUTtNQUNSLHlCQUF5QjtNQUN6QixZQUFZO01BQ1osU0FBUztNQUNULFFBQVE7TUFDUixrQkFBa0I7TUFDbEIsb0JBQW9CO01BQ3BCLDRCQUE0QjtNQUM1QixtQkFBbUI7TUFDbkIsbUJBQW1CO0lBQ3JCOztFQUVBO01BQ0UsbUJBQW1CO0lBQ3JCOztFQUVBO01BQ0UsbUJBQW1CO0lBQ3JCOztFQUVBO01BQ0UsNEJBQTRCO01BQzVCLFNBQVM7SUFDWDs7RUFFQTtNQUNFLFdBQVc7TUFDWCxZQUFZO01BQ1oscUJBQXFCO01BQ3JCLG9CQUFvQjtNQUNwQixrQkFBa0I7TUFDbEIsWUFBWTtJQUNkOztFQUVBOztNQUVFLGdCQUFnQjtNQUNoQixXQUFXO01BQ1gsZUFBZTtJQUNqQjs7RUFFQTtNQUNFLFlBQVk7TUFDWixjQUFjO01BQ2QsZ0JBQWdCO01BQ2hCLHlCQUF5QjtNQUN6QixZQUFZO01BQ1osZUFBZTtNQUNmLGlCQUFpQjtNQUNqQixtQkFBbUI7SUFDckI7O0VBRUE7TUFDRSxjQUFjO0lBQ2hCOztFQUVBOzs7O01BSUUsaUJBQWlCO01BQ2pCLGdCQUFnQjtJQUNsQjs7RUFFQTtNQUNFLGNBQWM7SUFDaEI7O0VBRUE7TUFDRSxjQUFjO0lBQ2hCOztFQUVBO01BQ0UsY0FBYztJQUNoQjs7RUFFQTtNQUNFLGNBQWM7SUFDaEI7O0VBRUE7TUFDRSxnQkFBZ0I7SUFDbEI7O0VBRUE7TUFDRSxpQkFBaUI7SUFDbkI7O0VBRUE7TUFDRSxZQUFZO0lBQ2Q7O0VBRUE7TUFDRSxrQkFBa0I7TUFDbEIsY0FBYztNQUNkLFlBQVk7TUFDWixZQUFZO01BQ1osV0FBVztNQUNYLFNBQVM7SUFDWDs7RUFFQTtNQUNFLFdBQVc7SUFDYjs7RUFFQTtNQUNFLG1CQUFtQjtJQUNyQjs7RUFDQTtNQUNFLG1CQUFtQjtJQUNyQjs7RUFFQTtNQUNFLG1CQUFtQjtNQUNuQixZQUFZO01BQ1osaUJBQWlCO01BQ2pCLG9CQUFvQjtJQUN0Qjs7RUFFQTtNQUNFLGFBQWE7TUFDYixvQkFBYTtNQUFiLGFBQWE7TUFDYix5QkFBbUI7Y0FBbkIsbUJBQW1CO01BQ25CLHdCQUF1QjtjQUF2Qix1QkFBdUI7TUFDdkIsZUFBZTtNQUNmLFdBQVc7SUFDYjs7RUFDQTtNQUNFO1FBQ0UsV0FBVztNQUNiO0lBQ0Y7O0VBQ0E7TUFDRTtRQUNFLFdBQVc7TUFDYjtJQUNGOztFQUNBO01BQ0U7UUFDRSxXQUFXO01BQ2I7SUFDRjs7RUFDQTtNQUNFO1FBQ0UsV0FBVztNQUNiO0lBQ0Y7O0VBRUQsb0JBQW9COztFQUVwQjtJQUNDLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsVUFBVTtJQUNWLFdBQVc7SUFDWCxXQUFXO0lBQ1gseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsV0FBVztJQUNYLG1CQUFtQjtFQUNyQjs7RUFFQTs7OztJQUlFLGlCQUFpQjtJQUNqQixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLFdBQVc7RUFDYiIsImZpbGUiOiJzcmMvYXBwL2NoYXQvY2hhdC1ib3gvY2hhdC1ib3guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vbmxpbmV7XHJcblxyXG4gICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgd2lkdGg6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmdyZWVuO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuICBcclxuICAub2ZmbGluZXtcclxuICBcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC5yaWdodFNpZGVDbGFzcyB7XHJcbiAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgYmFja2dyb3VuZDogI2RkZDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMC41ZW07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5sZWZ0U2lkZUNsYXNzIHtcclxuICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgIGJhY2tncm91bmQ6ICM1NUMxRTc7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY2lyY2xlLWdyZWVuOmJlZm9yZSB7XHJcbiAgICAgIGNvbnRlbnQ6ICcgXFwyNUNGJztcclxuICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgIGNvbG9yOiBncmVlbjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNpcmNsZS1yZWQ6YmVmb3JlIHtcclxuICAgICAgY29udGVudDogJyBcXDI1Q0YnO1xyXG4gICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgY29sb3I6IHJlZDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmN1cnNvclBvaW50ZXIge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC50ZXh0Q2VudGVyIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZmxvYXRMZWZ0IHtcclxuICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgICosXHJcbiAgICAqOmJlZm9yZSxcclxuICAgICo6YWZ0ZXIge1xyXG4gICAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGJvZHkge1xyXG4gICAgICBwYWRkaW5nOiAyLjVlbSAwO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgYmFja2dyb3VuZDogIzQ0NDc1MztcclxuICAgICAgYm9yZGVyLXJhZGl1czogMC4zZW07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5wZW9wbGUtbGlzdCB7XHJcbiAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucGVvcGxlLWxpc3QgaW5wdXQge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwLjJlbTtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBwYWRkaW5nOiAxZW07XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgYmFja2dyb3VuZDogIzZBNkM3NTtcclxuICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5wZW9wbGUtbGlzdCAuZmEtc2VhcmNoIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBsZWZ0OiAtMS44ZW07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5wZW9wbGUtbGlzdCB1bCB7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5wZW9wbGUtbGlzdCB1bCBsaSAudXNlclByZXNlbmNlIHtcclxuICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgIHBhZGRpbmc6IDAuN2VtIDAuMmVtO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAudGV4dENhcGl0YWxpemUge1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnBlb3BsZS1saXN0IGltZyB7XHJcbiAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucGVvcGxlLWxpc3QgLmFib3V0IHtcclxuICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5wZW9wbGUtbGlzdCAuYWJvdXQge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDAuNGVtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucGVvcGxlLWxpc3QgLnN0YXR1cyB7XHJcbiAgICAgIGNvbG9yOiAjOTI5NTlFO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY2hhdCB7XHJcbiAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjRjJGNUY4O1xyXG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC4zZW07XHJcbiAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjNlbTtcclxuICAgICAgY29sb3I6ICM0MzQ2NTE7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jaGF0IC5jaGF0LWhlYWRlciB7XHJcbiAgICAgIHBhZGRpbmc6IDAuMmVtO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAwLjE1ZW0gc29saWQgd2hpdGU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jaGF0IC5jaGF0LWhlYWRlciBpbWcge1xyXG4gICAgICBmbG9hdDogbGVmdDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNoYXQgLmNoYXQtaGVhZGVyIC5jaGF0LWFib3V0IHtcclxuICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMC44ZW07XHJcbiAgICAgIG1hcmdpbi10b3A6IDAuNGVtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY2hhdCAuY2hhdC1oZWFkZXIgLmNoYXQtd2l0aCB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXNpemU6IDEuMWVtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY2hhdCAuY2hhdC1oZWFkZXIgLmNoYXQtbnVtLW1lc3NhZ2VzIHtcclxuICAgICAgY29sb3I6ICM5Mjk1OUU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jaGF0IC5jaGF0LWhlYWRlciAuZmEtc3RhciB7XHJcbiAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgY29sb3I6ICNEOERBREY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS40MmVtO1xyXG4gICAgICBtYXJnaW4tdG9wOiAwLjg1ZW07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jaGF0IC5jaGF0LWhpc3Rvcnkge1xyXG4gICAgICBwYWRkaW5nOiAyZW0gMmVtIDEuNDJlbTtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMC4xNWVtIHNvbGlkIHdoaXRlO1xyXG4gICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICAgIGhlaWdodDogODB2aDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNoYXQgLmNoYXQtaGlzdG9yeSAubWVzc2FnZS1kYXRhIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY2hhdCAuY2hhdC1oaXN0b3J5IC5tZXNzYWdlLWRhdGEtdGltZSB7XHJcbiAgICAgIGNvbG9yOiAjYThhYWIxO1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDAuNGVtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY2hhdCAuY2hhdC1oaXN0b3J5IC5tZXNzYWdlIHtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBwYWRkaW5nOiAwLjVlbSAxLjQyZW07XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjllbTtcclxuICAgICAgZm9udC1zaXplOiAxLjFlbTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyZW07XHJcbiAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNoYXQgLmNoYXQtaGlzdG9yeSAubWVzc2FnZTphZnRlciB7XHJcbiAgICAgIGJvdHRvbTogMTAwJTtcclxuICAgICAgbGVmdDogNyU7XHJcbiAgICAgIGJvcmRlcjogc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgIHdpZHRoOiAwO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjODZCQjcxO1xyXG4gICAgICBib3JkZXItd2lkdGg6IDAuOGVtO1xyXG4gICAgICBtYXJnaW4tbGVmdDogLTAuOGVtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY2hhdCAuY2hhdC1oaXN0b3J5IC5teS1tZXNzYWdlIHtcclxuICAgICAgYmFja2dyb3VuZDogIzg2QkI3MTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNoYXQgLmNoYXQtaGlzdG9yeSAub3RoZXItbWVzc2FnZSB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICM5NEMyRUQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jaGF0IC5jaGF0LWhpc3RvcnkgLm90aGVyLW1lc3NhZ2U6YWZ0ZXIge1xyXG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjOTRDMkVEO1xyXG4gICAgICBsZWZ0OiA5MCU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jaGF0IC5jaGF0LW1lc3NhZ2UgdGV4dGFyZWEge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBwYWRkaW5nOiAwLjhlbSAxLjQyZW07XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuOGVtO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIHJlc2l6ZTogbm9uZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNoYXQgLmNoYXQtbWVzc2FnZSAuZmEtZmlsZS1vLFxyXG4gICAgLmNoYXQgLmNoYXQtbWVzc2FnZSAuZmEtZmlsZS1pbWFnZS1vIHtcclxuICAgICAgZm9udC1zaXplOiAxLjFlbTtcclxuICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNoYXQgLmNoYXQtbWVzc2FnZSBidXR0b24ge1xyXG4gICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgIGNvbG9yOiAjOTRDMkVEO1xyXG4gICAgICBmb250LXNpemU6IDEuMWVtO1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNGMkY1Rjg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jaGF0IC5jaGF0LW1lc3NhZ2UgYnV0dG9uOmhvdmVyIHtcclxuICAgICAgY29sb3I6ICM3NWIxZTg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5vbmxpbmUsXHJcbiAgICAub2ZmbGluZSxcclxuICAgIC5tZSxcclxuICAgIC53YXJuaW5nIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAzcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5vbmxpbmUge1xyXG4gICAgICBjb2xvcjogIzg2QkI3MTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLm9mZmxpbmUge1xyXG4gICAgICBjb2xvcjogI0UzODk2ODtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLm1lIHtcclxuICAgICAgY29sb3I6ICM5NEMyRUQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC53YXJuaW5nIHtcclxuICAgICAgY29sb3I6ICNlNzg5MzA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5hbGlnbi1sZWZ0IHtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmFsaWduLXJpZ2h0IHtcclxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5mbG9hdC1yaWdodCB7XHJcbiAgICAgIGZsb2F0OiByaWdodDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNsZWFyZml4OmFmdGVyIHtcclxuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgZm9udC1zaXplOiAwO1xyXG4gICAgICBjb250ZW50OiBcIiBcIjtcclxuICAgICAgY2xlYXI6IGJvdGg7XHJcbiAgICAgIGhlaWdodDogMDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmN1c3RvbUJ1dHRvbiB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYWN0aXZlQ2hhdCB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMzOTNhNDE7XHJcbiAgICB9XHJcbiAgICAubm90YWN0aXZlQ2hhdHtcclxuICAgICAgYmFja2dyb3VuZDogI2IzMjAyNztcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnR5cGVPZkNoYXRzIHtcclxuICAgICAgYmFja2dyb3VuZDogIzM5M2E0MTtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBtYXJnaW4tdG9wOiAwLjJlbTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMC4yZW07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5ibGFua0NvbnRlbnR7XHJcbiAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjU3NXB4KSB7XHJcbiAgICAgIC5jaGF0IC5jaGF0LWhpc3Rvcnkge1xyXG4gICAgICAgIGhlaWdodDo1MHZoO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NTc2cHgpIGFuZCAobWF4LXdpZHRoOjc2OHB4KSB7XHJcbiAgICAgIC5jaGF0IC5jaGF0LWhpc3Rvcnkge1xyXG4gICAgICAgIGhlaWdodDo1MHZoO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY5cHgpIGFuZCAobWF4LXdpZHRoOjk5MnB4KSB7XHJcbiAgICAgIC5jaGF0IC5jaGF0LWhpc3Rvcnkge1xyXG4gICAgICAgIGhlaWdodDo2NXZoO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6OTkzcHgpIGFuZCAobWF4LXdpZHRoOjEyMDAgIHB4KSB7XHJcbiAgICAgIC5jaGF0IC5jaGF0LWhpc3Rvcnkge1xyXG4gICAgICAgIGhlaWdodDo1MHZoO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgIC8qIHVzZXIgbGlzdCBpdGVtcyAqL1xyXG4gIFxyXG4gICAuY3JvcCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDFlbTtcclxuICAgIHBhZGRpbmc6IDFlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMGVtO1xyXG4gICAgd2lkdGg6IDNlbTtcclxuICAgIGhlaWdodDogM2VtO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIH1cclxuICBcclxuICAuYWJvdXQge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNGVtO1xyXG4gIH1cclxuICBcclxuICAub25saW5lLFxyXG4gIC5vZmZsaW5lLFxyXG4gIC5tZSxcclxuICAud2FybmluZyB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDNweDtcclxuICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5vbmxpbmUge1xyXG4gICAgY29sb3I6ICM4NkJCNzE7XHJcbiAgfVxyXG4gIFxyXG4gIC5vZmZsaW5lIHtcclxuICAgIGNvbG9yOiAjRTM4OTY4O1xyXG4gIH1cclxuICBcclxuICAubWUge1xyXG4gICAgY29sb3I6ICM5NEMyRUQ7XHJcbiAgfVxyXG4gIFxyXG4gIC53YXJuaW5nIHtcclxuICAgIGNvbG9yOiAjMDBjOGU3O1xyXG4gIH1cclxuICBcclxuICAuc3RhdHVzIHtcclxuICAgIGNvbG9yOiAjOTI5NTlFO1xyXG4gIH1cclxuICBcclxuICAubmFtZSB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/chat/chat-box/chat-box.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/chat/chat-box/chat-box.component.ts ***!
  \*****************************************************/
/*! exports provided: ChatBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatBoxComponent", function() { return ChatBoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../socket.service */ "./src/app/socket.service.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");







let ChatBoxComponent = class ChatBoxComponent {
    constructor(AppService, SocketService, router, toastr) {
        this.AppService = AppService;
        this.SocketService = SocketService;
        this.router = router;
        this.toastr = toastr;
        this.missedList = [];
        this.userList = [];
        this.messageList = [];
        this.pageValue = 0;
        this.loadingPreviousChat = false;
        this.scrollToChatTop = false;
        this.no = () => {
            this.SocketService.number(this.userInfo.userId, this.receiverId)
                .subscribe((data) => {
                this.opt = (data.data);
                console.log(this.opt);
            });
        };
        this.userSelectedToChat = (id, name) => {
            console.log("setting user as active");
            // setting that user to chatting true   
            this.userList.map((user) => {
                if (user.userId == id) {
                    user.chatting = true;
                }
                else {
                    user.chatting = false;
                }
            });
            ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].set('receiverId', id);
            ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].set('receiverName', name);
            this.receiverName = name;
            this.receiverId = id;
            this.messageList = [];
            this.pageValue = 0;
            let chatDetails = {
                userId: this.userInfo.userId,
                senderId: id
            };
            this.SocketService.markChatAsSeen(chatDetails);
            this.getPreviousChatWithAUser();
        }; // end userBtnClick function
        this.loadEarlierPageOfChat = () => {
            this.loadingPreviousChat = true;
            this.pageValue++;
            this.scrollToChatTop = true;
            this.getPreviousChatWithAUser();
        }; // end loadPreviousChat
        this.getPreviousChatWithAUser = () => {
            let previousData = (this.messageList.length > 0 ? this.messageList.slice() : []);
            this.SocketService.getChat(this.userInfo.userId, this.receiverId, this.pageValue * 10)
                .subscribe((apiResponse) => {
                console.log(apiResponse);
                if (apiResponse.status == 200) {
                    this.messageList = apiResponse.data.concat(previousData);
                }
                else {
                    this.messageList = previousData;
                    this.toastr.warning('No Messages available');
                }
                this.loadingPreviousChat = false;
            }, (err) => {
                this.toastr.error('some error occured');
            });
        };
        this.checkStatus = () => {
            if (ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('authtoken') === undefined || ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('authtoken') === '' || ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('authtoken') === null) {
                this.router.navigate(['/']);
                return false;
            }
            else {
                return true;
            }
        }; // end checkStatus
        this.verifyUserConfirmation = () => {
            this.SocketService.verifyUser()
                .subscribe((data) => {
                this.disconnectedSocket = false;
                this.SocketService.setUser(this.authToken);
                this.getOnlineUserList();
            });
        };
        this.miss = () => {
            this.SocketService.missedChat(this.userInfo.userId).
                subscribe((data) => {
                console.log(data);
                this.missedList = [];
                console.log(data.data);
                for (let x of data["data"]) {
                    console.log(x);
                    this.missedList.push(x);
                }
                console.log(this.missedList);
            });
        };
        this.getOnlineUserList = () => {
            this.SocketService.onlineUserList()
                .subscribe((userList) => {
                this.userList = [];
                for (let x in userList) {
                    let temp = { 'userId': x, 'name': userList[x], 'unread': 0, 'chatting': false };
                    this.userList.push(temp);
                }
            }); // end online-user-list
        };
        // chat related methods 
        this.sendMessageUsingKeypress = (event) => {
            if (event.keyCode === 13) {
                this.sendMessage();
            }
        };
        this.sendMessage = () => {
            if (this.messageText) {
                let data = {
                    senderName: this.userInfo.firstName + " " + this.userInfo.lastName,
                    senderId: this.userInfo.userId,
                    receiverName: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('receiverName'),
                    receiverId: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('receiverId'),
                    message: this.messageText,
                    createdOn: new Date()
                };
                console.log(data);
                this.SocketService.SendChatMessage(data);
                this.pushChatWindow(data);
            }
            else {
                this.toastr.warning('write something');
            }
        };
        this.pushChatWindow = (data) => {
            this.messageText = "";
            this.messageList.push(data);
            this.scrollToChatTop = false;
        };
        this.getMessageFromAUser = () => {
            this.SocketService.chatByUserId(this.userInfo.userId)
                .subscribe((data) => {
                console.log(data);
                (this.receiverId == data.senderId) ? this.messageList.push(data) : '';
                this.toastr.success(`${data.senderName} says : ${data.message}`);
                this.scrollToChatTop = false;
            }); //end subscribe
        }; // end get message from a user 
        this.logout = () => {
            this.AppService.logout()
                .subscribe((apiResponse) => {
                if (apiResponse.status === 200) {
                    console.log("logout called");
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].delete('authtoken');
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].delete('receiverId');
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].delete('receiverName');
                    this.SocketService.exitSocket();
                    this.router.navigate(['/']);
                }
                else {
                    this.toastr.error(apiResponse.message);
                } // end condition
            }, (err) => {
                this.toastr.error('some error occured');
            });
        }; // end logout
        // handle the output from a child component 
        this.showUserName = (name) => {
            this.toastr.success("You are chatting with " + name);
        };
    }
    ngOnInit() {
        this.authToken = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('authtoken');
        this.userInfo = this.AppService.getUserInfoInLocalStorage();
        console.log(this.userInfo);
        this.receiverId = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get("receiverId");
        this.receiverName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('receiverName');
        console.log(this.receiverId, this.receiverName);
        this.checkStatus();
        this.miss();
        this.verifyUserConfirmation();
        this.getOnlineUserList();
        this.getMessageFromAUser();
        this.no();
        if (this.receiverId != null && this.receiverId != undefined && this.receiverId != '') {
            this.userSelectedToChat(this.receiverId, this.receiverName);
        }
    }
};
ChatBoxComponent.ctorParameters = () => [
    { type: _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"] },
    { type: _socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scrollMe', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: false })
], ChatBoxComponent.prototype, "scrollMe", void 0);
ChatBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chat-box',
        template: __webpack_require__(/*! raw-loader!./chat-box.component.html */ "./node_modules/raw-loader/index.js!./src/app/chat/chat-box/chat-box.component.html"),
        providers: [_socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"]],
        styles: [__webpack_require__(/*! ./chat-box.component.css */ "./src/app/chat/chat-box/chat-box.component.css")]
    })
], ChatBoxComponent);



/***/ }),

/***/ "./src/app/chat/chat-route-gaurd.service.ts":
/*!**************************************************!*\
  !*** ./src/app/chat/chat-route-gaurd.service.ts ***!
  \**************************************************/
/*! exports provided: ChatRouteGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatRouteGuardService", function() { return ChatRouteGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__);




let ChatRouteGuardService = class ChatRouteGuardService {
    constructor(router) {
        this.router = router;
    }
    canActivate(route) {
        console.log("in guard service");
        if (ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authtoken') === undefined || ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authtoken') === '' || ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authtoken') === null) {
            this.router.navigate(['/']);
            return false;
        }
        else {
            return true;
        }
    }
};
ChatRouteGuardService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ChatRouteGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ChatRouteGuardService);



/***/ }),

/***/ "./src/app/chat/chat.module.ts":
/*!*************************************!*\
  !*** ./src/app/chat/chat.module.ts ***!
  \*************************************/
/*! exports provided: ChatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatModule", function() { return ChatModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _chat_box_chat_box_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat-box/chat-box.component */ "./src/app/chat/chat-box/chat-box.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _shared_pipe_remove_special_char_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../shared/pipe/remove-special-char.pipe */ "./src/app/shared/pipe/remove-special-char.pipe.ts");
/* harmony import */ var _chat_chat_route_gaurd_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../chat/chat-route-gaurd.service */ "./src/app/chat/chat-route-gaurd.service.ts");










let ChatModule = class ChatModule {
};
ChatModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"].forRoot(),
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                { path: 'chat', component: _chat_box_chat_box_component__WEBPACK_IMPORTED_MODULE_3__["ChatBoxComponent"], canActivate: [_chat_chat_route_gaurd_service__WEBPACK_IMPORTED_MODULE_9__["ChatRouteGuardService"]] }
            ]),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
        ],
        declarations: [_chat_box_chat_box_component__WEBPACK_IMPORTED_MODULE_3__["ChatBoxComponent"], _shared_pipe_remove_special_char_pipe__WEBPACK_IMPORTED_MODULE_8__["RemoveSpecialCharPipe"]],
        providers: [_chat_chat_route_gaurd_service__WEBPACK_IMPORTED_MODULE_9__["ChatRouteGuardService"]]
    })
], ChatModule);



/***/ }),

/***/ "./src/app/shared/first-char/first-char.component.css":
/*!************************************************************!*\
  !*** ./src/app/shared/first-char/first-char.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".crop {\r\n    border-radius: 100%;\r\n    line-height: 1em;\r\n    padding: 1em;\r\n    text-align: center;\r\n    margin: 0em;\r\n    width: 3em;\r\n    height: 3em;\r\n    float: left;\r\n    text-transform: uppercase;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2ZpcnN0LWNoYXIvZmlyc3QtY2hhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsV0FBVztJQUNYLFdBQVc7SUFDWCx5QkFBeUI7RUFDM0IiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvZmlyc3QtY2hhci9maXJzdC1jaGFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3JvcCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDFlbTtcclxuICAgIHBhZGRpbmc6IDFlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMGVtO1xyXG4gICAgd2lkdGg6IDNlbTtcclxuICAgIGhlaWdodDogM2VtO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/shared/first-char/first-char.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/first-char/first-char.component.ts ***!
  \***********************************************************/
/*! exports provided: FirstCharComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstCharComponent", function() { return FirstCharComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FirstCharComponent = class FirstCharComponent {
    constructor() {
        this._name = '';
        this.notify = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this._name = this.name;
        this.firstChar = this._name[0];
    } // end ngOnInit
    ngOnChanges(changes) {
        let name = changes.name;
        this._name = name.currentValue;
        this.firstChar = this._name[0];
    }
    nameClicked() {
        this.notify.emit(this._name);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FirstCharComponent.prototype, "name", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FirstCharComponent.prototype, "userBg", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FirstCharComponent.prototype, "userColor", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], FirstCharComponent.prototype, "notify", void 0);
FirstCharComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'first-char',
        template: __webpack_require__(/*! raw-loader!./first-char.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/first-char/first-char.component.html"),
        styles: [__webpack_require__(/*! ./first-char.component.css */ "./src/app/shared/first-char/first-char.component.css")]
    })
], FirstCharComponent);



/***/ }),

/***/ "./src/app/shared/pipe/remove-special-char.pipe.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/pipe/remove-special-char.pipe.ts ***!
  \*********************************************************/
/*! exports provided: RemoveSpecialCharPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveSpecialCharPipe", function() { return RemoveSpecialCharPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RemoveSpecialCharPipe = class RemoveSpecialCharPipe {
    transform(value, character) {
        return value.replace(character, '');
    }
};
RemoveSpecialCharPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'removeSpecialCharPipe'
    })
], RemoveSpecialCharPipe);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-details/user-details.component */ "./src/app/shared/user-details/user-details.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _first_char_first_char_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./first-char/first-char.component */ "./src/app/shared/first-char/first-char.component.ts");






let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        declarations: [_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_3__["UserDetailsComponent"], _first_char_first_char_component__WEBPACK_IMPORTED_MODULE_5__["FirstCharComponent"]],
        exports: [
            _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_3__["UserDetailsComponent"],
            _first_char_first_char_component__WEBPACK_IMPORTED_MODULE_5__["FirstCharComponent"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
        ]
    })
], SharedModule);



/***/ }),

/***/ "./src/app/shared/user-details/user-details.component.css":
/*!****************************************************************!*\
  !*** ./src/app/shared/user-details/user-details.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".crop {\r\n    border-radius: 100%;\r\n    line-height: 1em;\r\n    padding: 1em;\r\n    text-align: center;\r\n    margin: 0em;\r\n    width: 3em;\r\n    height: 3em;\r\n    float: left;\r\n    text-transform: uppercase;\r\n  }\r\n  \r\n  .about {\r\n    float: left;\r\n    padding-left: 0.4em;\r\n  }\r\n  \r\n  .online,\r\n  .offline,\r\n  .me,\r\n  .warning {\r\n    margin-right: 3px;\r\n    font-size: 0.8em;\r\n  }\r\n  \r\n  .online {\r\n    color: #86BB71;\r\n  }\r\n  \r\n  .offline {\r\n    color: #E38968;\r\n  }\r\n  \r\n  .me {\r\n    color: #94C2ED;\r\n  }\r\n  \r\n  .warning {\r\n    color: #00c8e7;\r\n  }\r\n  \r\n  .status {\r\n    color: #92959E;\r\n  }\r\n  \r\n  .name {\r\n    float: left;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3VzZXItZGV0YWlscy91c2VyLWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsVUFBVTtJQUNWLFdBQVc7SUFDWCxXQUFXO0lBQ1gseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsV0FBVztJQUNYLG1CQUFtQjtFQUNyQjs7RUFFQTs7OztJQUlFLGlCQUFpQjtJQUNqQixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLFdBQVc7RUFDYiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC91c2VyLWRldGFpbHMvdXNlci1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3JvcCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDFlbTtcclxuICAgIHBhZGRpbmc6IDFlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMGVtO1xyXG4gICAgd2lkdGg6IDNlbTtcclxuICAgIGhlaWdodDogM2VtO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIH1cclxuICBcclxuICAuYWJvdXQge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNGVtO1xyXG4gIH1cclxuICBcclxuICAub25saW5lLFxyXG4gIC5vZmZsaW5lLFxyXG4gIC5tZSxcclxuICAud2FybmluZyB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDNweDtcclxuICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5vbmxpbmUge1xyXG4gICAgY29sb3I6ICM4NkJCNzE7XHJcbiAgfVxyXG4gIFxyXG4gIC5vZmZsaW5lIHtcclxuICAgIGNvbG9yOiAjRTM4OTY4O1xyXG4gIH1cclxuICBcclxuICAubWUge1xyXG4gICAgY29sb3I6ICM5NEMyRUQ7XHJcbiAgfVxyXG4gIFxyXG4gIC53YXJuaW5nIHtcclxuICAgIGNvbG9yOiAjMDBjOGU3O1xyXG4gIH1cclxuICBcclxuICAuc3RhdHVzIHtcclxuICAgIGNvbG9yOiAjOTI5NTlFO1xyXG4gIH1cclxuICBcclxuICAubmFtZSB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/shared/user-details/user-details.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/user-details/user-details.component.ts ***!
  \***************************************************************/
/*! exports provided: UserDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsComponent", function() { return UserDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UserDetailsComponent = class UserDetailsComponent {
    ngOnInit() {
        this.firstChar = this.userFirstName[0];
    } // end ngOnInit
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UserDetailsComponent.prototype, "userFirstName", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UserDetailsComponent.prototype, "userLastName", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UserDetailsComponent.prototype, "userStatus", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UserDetailsComponent.prototype, "messageRead", void 0);
UserDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'user-details',
        template: __webpack_require__(/*! raw-loader!./user-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/user-details/user-details.component.html"),
        styles: [__webpack_require__(/*! ./user-details.component.css */ "./src/app/shared/user-details/user-details.component.css")]
    })
], UserDetailsComponent);



/***/ }),

/***/ "./src/app/socket.service.ts":
/*!***********************************!*\
  !*** ./src/app/socket.service.ts ***!
  \***********************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");







let SocketService = class SocketService {
    constructor(http) {
        this.http = http;
        this.url = "https://chatapi.edwisor.com";
        this.missedChat = (userId) => {
            console.log('ready');
            return (this.http.get(`${this.url}/api/v1/chat/unseen/user/list?userId=${userId}&authToken=${ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('authtoken')}`));
        };
        this.number = (userId, senderId) => {
            console.log('ready');
            return (this.http.get(`${this.url}/api/v1/chat/count/unseen?userId=${userId}&senderId=${senderId}&authToken=${ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('authtoken')}`));
        };
        this.verifyUser = () => {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create((observer) => {
                this.socket.on('verifyUser', (data) => {
                    observer.next(data);
                });
            });
        };
        this.onlineUserList = () => {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create((observer) => {
                this.socket.on('online-user-list', (userList) => {
                    observer.next(userList);
                });
            });
        };
        this.chatByUserId = (userId) => {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create((observer) => {
                this.socket.on(userId, (data) => {
                    observer.next(data);
                });
            });
        };
        this.disconnectedSocket = () => {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create((observer) => {
                this.socket.on('disconnectedSocket', () => {
                    observer.next();
                });
            });
        };
        this.setUser = (authToken) => {
            this.socket.emit('set-user', authToken);
        };
        this.SendChatMessage = (data) => {
            this.socket.emit('chat-msg', data);
        };
        this.markChatAsSeen = (userDetails) => {
            this.socket.emit('mark-chat-as-seen', userDetails);
        }; // end markChatAsSeen  
        this.exitSocket = () => {
            this.socket.disconnect();
        }; // end exit socket
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_4__(this.url);
    }
    handleError(err) {
        let errorMessage = '';
        if (err.error instanceof Error) {
            errorMessage = `An error occurred: ${err.error.message}`;
        }
        else {
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        } // end condition *if
        console.error(errorMessage);
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(errorMessage);
    } // END handleError
    getChat(senderId, receiverId, skip) {
        return this.http.get(`${this.url}/api/v1/chat/get/for/user?senderId=${senderId}&receiverId=${receiverId}&skip=${skip}&authToken=${ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('authtoken')}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(data => console.log('Data Received')));
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError);
    }
};
SocketService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
SocketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SocketService);



/***/ }),

/***/ "./src/app/user/log-in/log-in.component.css":
/*!**************************************************!*\
  !*** ./src/app/user/log-in/log-in.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".im{\r\n    background-image: url(\"/assets/images/pic.jpeg\");\r\nheight:auto;\r\nmin-height: 100%;\r\n}\r\n.ii{\r\n    color: antiquewhite;\r\n    text-align: center\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9sb2ctaW4vbG9nLWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnREFBZ0Q7QUFDcEQsV0FBVztBQUNYLGdCQUFnQjtBQUNoQjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC91c2VyL2xvZy1pbi9sb2ctaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbXtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL3BpYy5qcGVnXCIpO1xyXG5oZWlnaHQ6YXV0bztcclxubWluLWhlaWdodDogMTAwJTtcclxufVxyXG4uaWl7XHJcbiAgICBjb2xvcjogYW50aXF1ZXdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/user/log-in/log-in.component.ts":
/*!*************************************************!*\
  !*** ./src/app/user/log-in/log-in.component.ts ***!
  \*************************************************/
/*! exports provided: LogInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogInComponent", function() { return LogInComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");






let LogInComponent = class LogInComponent {
    constructor(appService, router, toastr) {
        this.appService = appService;
        this.router = router;
        this.toastr = toastr;
        this.goToSignUp = () => {
            this.router.navigate(['/signup']);
        }; // end goToSignUp
        this.signinFunction = () => {
            if (!this.email) {
                this.toastr.warning('enter email');
            }
            else if (!this.password) {
                this.toastr.warning('enter password');
            }
            else {
                let data = {
                    email: this.email,
                    password: this.password
                };
                this.appService.signinFunction(data)
                    .subscribe((apiResponse) => {
                    if (apiResponse.status === 200) {
                        console.log(apiResponse);
                        ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].set('authtoken', apiResponse.data.authToken);
                        ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].set('receiverId', apiResponse.data.userDetails.userId);
                        ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].set('receiverName', apiResponse.data.userDetails.firstName + ' ' + apiResponse.data.userDetails.lastName);
                        this.appService.setUserInfoInLocalStorage(apiResponse.data.userDetails);
                        this.router.navigate(['/chat']);
                    }
                    else {
                        this.toastr.error(apiResponse.message);
                    }
                }, (err) => {
                    this.toastr.error('some error occured');
                });
            } // end condition
        }; // end signinFunction
    }
    ngOnInit() {
    }
};
LogInComponent.ctorParameters = () => [
    { type: _app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
];
LogInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-log-in',
        template: __webpack_require__(/*! raw-loader!./log-in.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/log-in/log-in.component.html"),
        styles: [__webpack_require__(/*! ./log-in.component.css */ "./src/app/user/log-in/log-in.component.css")]
    })
], LogInComponent);



/***/ }),

/***/ "./src/app/user/sign-up/sign-up.component.css":
/*!****************************************************!*\
  !*** ./src/app/user/sign-up/sign-up.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".im{\r\n    background-image: url(\"/assets/images/pic.jpeg\")\r\n}\r\n.ii{\r\n    color: antiquewhite;\r\n    text-align: center\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO0FBQ0o7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvdXNlci9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbXtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL3BpYy5qcGVnXCIpXHJcbn1cclxuLmlpe1xyXG4gICAgY29sb3I6IGFudGlxdWV3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlclxyXG59Il19 */"

/***/ }),

/***/ "./src/app/user/sign-up/sign-up.component.ts":
/*!***************************************************!*\
  !*** ./src/app/user/sign-up/sign-up.component.ts ***!
  \***************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");





let SignUpComponent = class SignUpComponent {
    constructor(appService, router, toastr) {
        this.appService = appService;
        this.router = router;
        this.toastr = toastr;
        this.apiKey = 'MjQyZGUxMThjYTIzYTFhODc4NmVkNzQ0ZDI2ZWNkODE4Y2RiNTcxNDdlMjdlNTJkNDE1ZTUxMDM1OGQ2NTI1ZGI5MmYwZWEzOWYxYzI5YmMwOGJlMGMzZWY1NzAxYTk1MzdlZDQ1ZDM0ZTY4ZTliZjUxMGNmY2E4ZjRiMTkyN2RkOQ==';
        this.goToSignIn = () => {
            this.router.navigate(['/login']);
        }; // end goToSignIn
        this.signupFunction = () => {
            if (!this.firstName) {
                this.toastr.warning('enter first name');
            }
            else if (!this.lastName) {
                this.toastr.warning('enter last name');
            }
            else if (!this.mobile) {
                this.toastr.warning('enter mobile');
            }
            else if (!this.email) {
                this.toastr.warning('enter email');
            }
            else if (!this.password) {
                this.toastr.warning('enter password');
            }
            else if (!this.apiKey) {
                this.toastr.warning('Enter your API key');
            }
            else {
                let data = {
                    firstName: this.firstName,
                    lastName: this.lastName,
                    mobile: this.mobile,
                    email: this.email,
                    password: this.password,
                    apiKey: this.apiKey
                };
                console.log(data);
                this.appService.signupFunction(data)
                    .subscribe((apiResponse) => {
                    console.log(apiResponse);
                    if (apiResponse.status === 200) {
                        this.toastr.success('Signup successful');
                        setTimeout(() => {
                            this.goToSignIn();
                        }, 2000);
                    }
                    else {
                        this.toastr.error(apiResponse.message);
                    }
                }, (err) => {
                    this.toastr.error('some error occured');
                });
            } // end condition
        }; // end signupFunction
    }
    ngOnInit() {
    }
};
SignUpComponent.ctorParameters = () => [
    { type: _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
];
SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sign-up',
        template: __webpack_require__(/*! raw-loader!./sign-up.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/sign-up/sign-up.component.html"),
        styles: [__webpack_require__(/*! ./sign-up.component.css */ "./src/app/user/sign-up/sign-up.component.css")]
    })
], SignUpComponent);



/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _log_in_log_in_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./log-in/log-in.component */ "./src/app/user/log-in/log-in.component.ts");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/user/sign-up/sign-up.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");








let UserModule = class UserModule {
};
UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_3__["LogInComponent"], _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__["SignUpComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot(),
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild([
                { path: 'signup', component: _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__["SignUpComponent"], pathMatch: 'full' }
            ])
        ]
    })
], UserModule);



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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\BEJO JEFFRIN G\angular\chat-app\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
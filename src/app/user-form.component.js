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
var core_1 = require("@angular/core");
var user_1 = require("./user");
var user_form_service_1 = require("./user-form.service");
var UserFormComponent = (function () {
    function UserFormComponent(userService) {
        this.userService = userService;
        this.submitted = false;
        this.model = new user_1.User('nidhipurohith@gmail.com', 'Abcd@97', 'Abcd@97', 1234567890);
    }
    UserFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUsers()
            .subscribe(function (user) { return _this.users = user; }, function (error) { return _this.ErrorMessage = error; });
    };
    UserFormComponent.prototype.addUser = function (s1, s2, s3, i) {
        var _this = this;
        this.submitted = true;
        this.user = new user_1.User(s1, s2, s3, i);
        if (!this.user) {
            console.log("nidhi");
            return;
        }
        //console.log(user1.UserName);
        this.userService.create(this.user)
            .subscribe(function (user1) { return _this.users.push(user1); }, function (error) { return _this.ErrorMessage = error; });
    };
    return UserFormComponent;
}());
UserFormComponent = __decorate([
    core_1.Component({
        selector: 'user-form',
        templateUrl: './app/user-form.component.html',
        providers: [user_form_service_1.UserService]
    }),
    __metadata("design:paramtypes", [user_form_service_1.UserService])
], UserFormComponent);
exports.UserFormComponent = UserFormComponent;
//# sourceMappingURL=user-form.component.js.map
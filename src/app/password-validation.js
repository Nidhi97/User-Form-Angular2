"use strict";
var forms_1 = require("@angular/forms");
var PasswordValidation = (function () {
    function PasswordValidation(fb) {
        this.form = fb.group({
            password: ['', forms_1.Validators.required],
            confirmPassword: ['', forms_1.Validators.required]
        }, {
            validator: PasswordValidation.MatchPassword // your validation method
        });
    }
    PasswordValidation.MatchPassword = function (AC) {
        var password = AC.get('password').value; // to get value in input tag
        var confirmPassword = AC.get('confirmPassword').value; // to get value in input tag
        if (password != confirmPassword) {
            console.log('false');
            AC.get('confirmPassword').setErrors({ MatchPassword: true });
        }
        else {
            console.log('true');
            return null;
        }
    };
    return PasswordValidation;
}());
exports.PasswordValidation = PasswordValidation;
//# sourceMappingURL=password-validation.js.map
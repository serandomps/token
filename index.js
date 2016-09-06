var serand = require('serand');
var utils = require('utils');

serand.on('token', 'info', function (id, token, done) {
    if (!done) {
        done = token;
        token = null;
    }
    var options = {
        method: 'GET',
        url: utils.resolve('accounts://apis/v/tokens/' + id),
        dataType: 'json',
        success: function (token) {
            done(false, token);
        },
        error: function () {
            done('permissions error');
        }
    };
    if (token) {
        options.headers = options.headers || {};
        options.headers['Authorization'] = 'Bearer ' + token;
    }
    $.ajax(options);
});

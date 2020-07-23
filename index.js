var utils = require('utils');
var serand = require('serand');

exports.findOne = function (id, token, done) {
    if (!done) {
        done = token;
        token = null;
    }
    serand.cached('page', id, function (did) {
        var options = {
            method: 'GET',
            url: utils.resolve('apis:///v/tokens/' + id),
            dataType: 'json',
            success: function (token) {
                did(null, token);
            },
            error: function (xhr, status, err) {
                did(err || status || xhr);
            }
        };
        if (token) {
            options.headers = options.headers || {};
            options.headers['Authorization'] = 'Bearer ' + token;
        }
        $.ajax(options);
    }, done);
};

var serand = require('serand');

serand.on('token', 'info', function (id, token, done) {
    if (!done) {
        done = token;
        token = null;
    }
    var options = {
        method: 'GET',
        url: 'https://accounts.serandives.com/apis/v/tokens/' + id,
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

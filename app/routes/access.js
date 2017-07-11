module.exports = (app) => {

    app.get('/access', (req, res) => {
        app.app.controllers.access.index(app, req, res);
    });

    app.get('/access/logout', (req, res) => {
        app.app.controllers.access.logout(app, req, res);
    });

    app.post('/access/authenticate', (req, res) => {
        app.app.controllers.access.authenticate(app, req, res);
    });
}
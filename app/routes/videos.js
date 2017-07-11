module.exports = (app) => {

    app.get('/videos', (req, res) => {
        app.app.controllers.videos.index(app, req, res);
    });

    app.post('/videos', (req, res) => {
        app.app.controllers.videos.upload(app, req, res);
    });
}
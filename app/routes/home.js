module.exports = (app) => {

	app.get('/', (req, res) => {
        if(req.session.autorizado) {
            app.app.controllers.home.index(app, req, res);
        } else {
            if(req.session.usuario == undefined)
                return res.render("access/login", {validacao: ""});

            return res.send("Não tem permissão");
        }
    });
}
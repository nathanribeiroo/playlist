module.exports.index = (app, req, res) => {
    res.render("videos/index", {usuario : req.session.usuario});
}

module.exports.upload = (app, req, res) => {
    console.log(req.files);
    res.render("videos/index", {usuario : req.session.usuario});
}
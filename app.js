/* importar as configurações do servidor */
var app = require('./config/server');

/* parametrizar a porta de escuta */
app.listen(app.config.ini.port, () => {
	console.log('[OK] Servidor online');
})


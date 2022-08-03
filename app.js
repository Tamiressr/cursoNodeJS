var app = require('./config/server')
var rotaNoticia = require('./app/routes/noticias')(app)
var rotaFormInclusao = require('./app/routes/formulario_inclusao_noticias')(app)
var rotaFormrotaHomeinclusao = require('./app/routes/home')(app)

app.listen(3000, function () {
  console.log('servidor startado')
})

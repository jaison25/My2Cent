const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const session = require('express-session');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const accountsRouter = require('./routes/accounts');
const incomesRouter = require('./routes/incomes');
const spendingsRouter = require('./routes/spendings');
const incomestypeRouter = require('./routes/incomestype');


//Importar db.manager
const dbManager = require('./database/db.manager');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/accounts', accountsRouter);
app.use('/incomes', incomesRouter);
app.use('/spendings', spendingsRouter);
app.use('/incomestype', incomestypeRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//Se habilitan sesiones
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

//Se incializa base de datos
dbManager.sequelizeCx.authenticate().then(() => {
  console.log('Conexión realizada');
  dbManager.sequelizeCx.sync().then(() => {
    console.log('BD sincronizada');
  });
}).catch(error => {
  console.log(error);
  console.log('Error al conectar BD');
});

module.exports = app;

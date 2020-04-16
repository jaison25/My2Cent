var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var accountsRouter = require('./routes/accounts');
var incomesRouter = require('./routes/incomes');
var spendingsRouter = require('./routes/spendings');


//Importar db.manager
const dbManager = require('./database/db.manager');

var app = express();

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

//Se incializa base de datos
dbManager.sequelizeCx.authenticate().then(() => {
  console.log('Conexión realizada');
  dbManager.sequelizeCx.sync().then(() => {
    console.log('BD sincronizada');
  });
}).catch(error => {
  console.log('Error al conectar BD');
});

module.exports = app;

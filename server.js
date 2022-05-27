const path = require('path');
const express = require('express');
const expHbs = require('express-handlebars');
const session = require('express-session');
const app = express();
const port = process.env.PORT || 3001;
const SequilzeStore = require('connect-session-sequelize')(session.Store); //connects to line 4
const sequelize = require('./config/connection');

// connects log in info to key session for user (kind of like google noticing new device log in)
const exSess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize,
    }),
};

app.use(session(exSess));

const hbs = expHbs.create({
    helpers
});

//boilerplate
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(express.static(path.join(__dirname, 'public')));

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });
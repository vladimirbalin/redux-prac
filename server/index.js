const path = require('path');
const express = require('express');
const { graphqlHTTP } = require('express-graphql');

const schema = require('./schema');

let cors = require('cors');

// use it before all route definitions


//  сохраняет рабочий каталог этого файла, (PWD print working directory)
// 'вывод рабочего каталога'
const {
  port = 8000,
  PWD = __dirname
} = process.env;
const app = express();
app.use(cors({origin: 'http://localhost:3000'}));

// Определяет единый маршрут GraphQL, который будет облсуживать все разновидности данных
app.use('/q', graphqlHTTP((req) => {
  return {
    schema,
    context: req.session
  }
}));


// определяет маршрут для предоставления статический активов с URL-адреса /dist
app.use('/dist',
  express.static(path.resolve(PWD, 'build', 'public'))
);


// предоставляет главную страницу HTML для любых запросов, не относящихся к URL /dist/*
app.use('*', (req, res) => {
  res.sendFile('index.html', {
    root: PWD
  })
});

app.listen(port, () => console.log(`Running server on port ${port}`));
const express = require('express');
const bodyParser = require('body-parser');
const pg = require('pg');

const connString = `postgres://dbuser:dbpassword@db/dbuser`;

module.exports = () => {
  const app = express();

  app.use(bodyParser.json());

  app.post('/todo', (req, res) => {
    const todoData = req.body;
    pg.connect(connString, (err, client, done) => {
      if (err) {
        res.status(500).send({status: 'error'});
        return done(err);
      }

      client.query(`
        INSERT INTO todo
        (
          name
        )

        VALUES (
          '${todoData.name.replace('\'', '')}'
        )

        RETURNING *;
      `, (err, data) => {
        done();
        if (err) {
          return res.status(500).send({status: 'error'});
        }
        res.send(data.rows[0]);
      });
    });

  });

  app.get('/todo', (req, res) => {
    pg.connect(connString, (err, client, done) => {
      if (err) {
        res.status(500).send({status: 'error'});
        return done(err);
      }

      client.query(`SELECT * FROM todo;`, (err, result) => {
        done();
        if (err) {
          return res.status(500).send({status: 'error'});
        }
        return res.send(result.rows);
      })
    });
  });

  app.delete('/todo/:id', (req, res) => {
    pg.connect(connString, (err, client, done) => {
      if (err) {
        res.status(500).send({status: 'error'});
        return done(err);
      }

      // unsafe
      client.query(`DELETE FROM todo WHERE id=${req.params.id};`, (err, result) => {
        done();
        if (err) {
          return res.status(500).send({status: 'error'});
        }
        return res.send({status: 'success'});
      })
    });
  });

  app.listen(80);
}

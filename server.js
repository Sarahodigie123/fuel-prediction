const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();


const mysql = require('mysql');

const connection = mysql.createConnection({ // add the db info later
  host: 'database-host',
  user: 'database-user',
  password: 'database-password',
  database: 'database-name'
});

app.prepare().then(() => {
  const server = express();

  server.use(bodyParser.json());

  server.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    res.json({
      username,
      password,
      success: true,
    });
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.post('/api/fuel-quotes', (req, res) => {
    const username = cookies().get('username') // get a cookie that goes by username
    const query = 'SELECT * FROM fuel_quotes, ' + username + ' ORDER BY deliveryDate';
    connection.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    res.json(results); // respond to the get request with json that fuel_history.jsx will use
  });

  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`Listening on PORT ${port}`);
  });


});


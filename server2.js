// this server file should replace the old server file
// because it contains logic relevant for backend

const app = require('express');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

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

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`Listening on PORT ${port}`);
  });
});

const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'your-database-host',
  user: 'your-database-user',
  password: 'your-database-password',
  database: 'your-database-name'
});

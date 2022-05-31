import 'dotenv/config';
import polka from 'polka';
import cors from 'cors';
import compression from 'compression';
import bodyParser from 'body-parser';
import sirv from 'sirv';
import { Elder } from '@elderjs/elderjs';
const elder = new Elder({ context: 'server' });
const dev = process.env.NODE_ENV === 'development';

const server = polka();
server.use(cors());
server.use(compression({ level: 6 }));
server.use(bodyParser.urlencoded({ extended: false }), bodyParser.json());
server.use(elder.server);
server.use(sirv(elder.settings.distDir, { dev }));

const SERVER_PORT = process.env.SERVER_PORT || 3000;
server.listen(SERVER_PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`> Elder.js running on http://localhost:${SERVER_PORT}`);
});

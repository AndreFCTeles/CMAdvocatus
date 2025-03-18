/*
import next from 'next';
import express from 'express';

const port = parseInt(process.env.PORT || '3000', 10)
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {

   const server = express();

   // Explicitly serve static files from .next and public
   server.use('/_next/static', express.static(path.join(__dirname, '.next/static')));
   server.use('/static', express.static(path.join(__dirname, 'public')));

   // Explicitly handle all other Next.js requests
   server.all('*', (req, res) => handle(req, res));

   server.listen(port, hostname, () => {
      console.log(`Next.js custom server running explicitly on port ${port}`);
   });
})
*/


import next from 'next';
import express from 'express';

const port = parseInt(process.env.PORT || '3000', 10)
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
//const handle = app.getRequestHandler()

app.prepare().then(() => {
   const server = express();

   server.listen(port, err => {
      if (err) throw err;
      console.log(`🐎 => Ready on http://localhost:${port}`);
   });
})

/*
import { createServer } from 'http'
import { parse } from 'url'
import next from 'next'

const port = parseInt(process.env.PORT || '3000', 10)
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
   createServer((req, res) => {
      const parsedUrl = parse(req.url, true)
      handle(req, res, parsedUrl)
   }).listen(port)
   
   console.log(
      `> Server listening at http://localhost:${port} as ${
         dev ? 'development' : process.env.NODE_ENV
      }`
   )
})
  */



/*
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
const port = process.env.PORT || 3000

const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

app.prepare().then(() => {
   createServer(async (req, res) => {
      try {
         const parsedUrl = parse(req.url, true)
         const { pathname, query } = parsedUrl

         if (pathname === '/a') {
            await app.render(req, res, '/a', query)
         } else if (pathname === '/b') {
            await app.render(req, res, '/b', query)
         } else {
            await handle(req, res, parsedUrl)
         }
      } catch (err) {
         console.error('Error occurred handling', req.url, err)
         res.statusCode = 500
         res.end('internal server error')
      }
   }).listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://${hostname}:${port}`)
   })
})

*/
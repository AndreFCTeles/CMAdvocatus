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
*/

/*
import { createServer } from 'http';
import { parse } from 'url';
import next from 'next';
import { join } from "path";
import { existsSync, createReadStream } from "fs";

const port = parseInt(process.env.PORT || '3000', 10);
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const getContentType = (ext) => {
   switch (ext) {
      case ".js":
         return "application/javascript";
      case ".css":
         return "text/css";
      default:
         return "application/octet-stream";
   }
};

app.prepare().then(() => {
   let current = new Date().toLocaleString();
   createServer((req, res) => {
      const parsedUrl = parse(req.url, true);
      const { pathname } = parsedUrl;

      // 🔹 Serve Next.js static assets manually
      if (pathname.startsWith("/_next/static/")) {
         const filePath = join(".next", pathname.replace("/_next", ""));
         if (existsSync(filePath)) {
            const ext = extname(filePath);
            res.writeHead(200, { "Content-Type": getContentType(ext) });
            createReadStream(filePath).pipe(res);
            return;
         } else {
            res.writeHead(404);
            res.end("Not Found");
            return;
         }
      }

      // 🔹 Handle public assets (Optional)
      if (pathname.startsWith("/public/")) {
         const filePath = join("public", pathname.replace("/public/", ""));
         if (existsSync(filePath)) {
            res.writeHead(200);
            createReadStream(filePath).pipe(res);
            return;
         }
      }

      // 🔹 Let Next.js handle everything else
      handle(req, res, parsedUrl);

      // 🔹 Debugging logs
      console.log(`${current} > req.url: ${req.url}`);
      console.log(`${current} > Parsed URL: ${JSON.stringify(parsedUrl)}`);
   }).listen(port, () => {
      console.log(`${current} > Server listening at http://localhost:${port} as ${dev ? "development" : process.env.NODE_ENV} 🐎`);
   });
});
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
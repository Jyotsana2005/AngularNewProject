const http = require('http');
const app = require('./Backend/app');
const debug = require("debug")("node - angular");

const normalizePort = val => {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }
  return false;
};

const onError = error => {
  if (error.syscall !== "listen") {
    throw error;
  }

  const bind = typeof addr === "string" ? "pipe" + addr : "port" + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + "something")
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + "already in use")
      process.exit(1);
      break;
    default:
      throw error;

  }
};


const onListening = () => {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe" + addr : "port" + port;
  debug("Listen on" + bind)
}



const port = normalizePort(process.env.PORT || 3000);
app.set('port', port);

const server = http.createServer(app);
server.on("error", onError);
server.on("listening", onListening);
// const server=http.createServer((req,res)=>{
// res.end("this is my first response")
// });

server.listen(port);
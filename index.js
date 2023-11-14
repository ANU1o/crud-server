// import json-server, cors
const jsonserver = require("json-server");
const cors = require("cors");

//server creation
const crudServer = jsonserver.create();

// JSON type data -> JS data [before request resolve] using Middleware
const middleware = jsonserver.defaults();

//Creating a router
const router = jsonserver.router("db.json");

//Applying in server
crudServer.use(middleware);
crudServer.use(cors());
crudServer.use(router);

//Port selection
const PORT = 5000;

//running the port
crudServer.listen(PORT, () =>
  console.log(`JSON Server initiated at PORT ${PORT}`)
);

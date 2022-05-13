import app from './server.mjs'
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const pkg = require("../package.json");

const port = (process.env.PORT)
    ? process.env.PORT
    : pkg.config.port + 1
app.listen(port ,() => {
    console.log('pid: ', process.pid)
    console.log('listening on http://localhost:'+ port);
});
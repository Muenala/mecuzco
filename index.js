const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const configMensaje = require('./configMensaje');


const app = express();
app.use(bodyParser.json());
app.use(cors())
/* const admin = require("firebase-admin"); */
const path = require('path')
app.use(express.static(path.join(__dirname, 'public')))
app.get('*', function(req, res) {
  res.sendfile('./public/index.html');
});

app.post('/correo', (req, res) => {
  console.log(req.body);
  configMensaje(req.body);
  res.status(200).send();
})
/* const serviceAccount = require("../permiso.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://proyectoreservacion-default-rtdb.firebaseio.com"
});
 */
app.use(cors({ origin: true }));

app.get("/hello-world", (req, res) => {
  return res.status(200).json({ message: "Hello World!" });
});
app.listen(3000, () => {
  console.log('Servidor corriendo')
});
// Routes
/* app.use(require("./routes/reservacion.routes"));
 */
/* exports.app = functions.https.onRequest(app); */
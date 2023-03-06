const nodemailer = require('nodemailer');

module.exports = (formulario) => {
  console.log(formulario);

  let htmlText = `
 <strong>Nombre:</strong> ${formulario.nombre} <br/>
 <strong>Cédula:</strong> ${formulario.Cedula} <br/>
 <strong>Teléfono:</strong> ${formulario.Telefono} <br/>
 <strong>Correo:</strong> ${formulario.Correo} <br/>
 <strong>Tipo de habitación:</strong> ${formulario.TipoHabitacion} <br/>
 <strong>Mensaje:</strong> ${formulario.extra} <br/>
 `
 if (formulario.img != undefined) {
   htmlText = htmlText + `  <strong>Imagen:</strong>       <img    width="200px" src="${formulario.img}" alt="" srcset="">  <br/>`;
 } else {
   htmlText = htmlText + `  <strong>Acción:</strong>       <a  
   style="padding: 8px 12px;
   border: 1px solid #ED2939;
   border-radius: 2px;
   font-family: Helvetica, Arial, sans-serif;
   font-size: 14px;
   color: #ffffff; 
   background: #000; 
   text-decoration: none;
   font-weight: bold;
   display: inline-block;  "
   href="http://localhost:4200/subir/${formulario.id}"
     >Sube el comprobante aquí<a/>`;
 }
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'jenniffer.jg59@gmail.com	', // Cambialo por tu email
      pass: 'qefykrhluamwdbme' // Cambialo por tu password
    }
  });
 
  const mailOptions = {
    from: `espe@espe.edu.ec`,
    to: formulario.Correo, // Cambia esta parte por el destinatario
    subject: formulario.extra,
    html:htmlText
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err)
      console.log(err)
    else
      console.log(info);
  });
}

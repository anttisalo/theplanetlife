const nodemailer = require('nodemailer');

exports.handler = function (event, context, callback) {
  const data = JSON.parse(event.body);

  const interests =
    (data.interests &&
      data.interests.map((interest) => `<p>${interest}</p>`)) ||
    'No interests selected';

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_SERVER_ADDRESS,
    port: process.env.SMTP_SERVER_PORT,
    auth: {
      user: process.env.SMTP_SERVER_USERNAME,
      pass: process.env.SMTP_SERVER_PASSWORD,
    },
  });

  transporter.sendMail(
    {
      from: process.env.SMTP_SENDER_EMAIL,
      to: process.env.SMTP_RECIPIENT_EMAIL,
      subject: 'The Planet life contact form',
      html: `
            <p><strong>Sender:</strong> ${data.fName} ${data.lName}</p>
            <p><strong>Sender email:</strong>  ${data.email}</p>
            <p><strong>Messge:</strong>  ${data.message}</p>
            <p><strong>With interests to:</strong></p>
            ${interests}
            `,
    },
    function (error, info) {
      if (error) {
        callback(error);
      } else {
        callback(null, {
          statusCode: 200,
          body: JSON.stringify({
            result: 'success',
          }),
        });
      }
    }
  );
};

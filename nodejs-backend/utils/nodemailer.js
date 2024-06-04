import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp-relay.gmail.com",
  port: 587, //port for tranfering mails
  secure: true,
  auth: {
    user: process.env.MAIL,
    pass: process.env.MAIL_PASSWORD,
  },
});

// sending mail
export const sendMail = async (to_mail, coin) => {
  try {
    await transporter.sendMail({
      from: process.env.MAIL, // sender address
      to: to_mail, // list of receivers
      subject: `Price Has gone below your threshold`, // Subject line
      text: `${coin} has gone below your specified threshold`, // plain text body
    });
    return true;
  } catch (error) {
    return false;
  }
};

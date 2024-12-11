import nodemailer from "nodemailer";
import cors from "cors";
import express from "express";
import creds from "../../../config";
import { NextRequest, NextResponse } from "next/server";
var router = express.Router();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { name, email, message } = await req.json();
    const mailOptions = {
      from: email,
      to: "theprojecthead@gmail.com",
      subject: name,
      text: message,
    };

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "theprojecthead@gmail.com",
        pass: "dkzazqvktjbalufz",
      },
    });
    const sendMessage = async () => {
      try {
          await transporter.sendMail(mailOptions, async (err, data) => {
            console.log(err);
            console.log(data);
            if (err) {
              return NextResponse.json(
                {
                  message: "fail",
                },
                {
                  status: 400,
                }
              );
            } else {
              //If Success, send Auto Reply email
              await transporter.sendMail(
                {
                  from: "theprojecthead@gmail.com",
                  to: email,
                  subject: "Message received",
                  text: `Hi ${name}!,\nThank you for sending me a message. I will get back to you soon.\n\nBest Regards,\n${creds.YOURNAME}\n${creds.YOURSITE}\n\n\nMessage Details\nName: ${name}\n Email: ${email}\n Message: ${message}`,
                  html: `<p>Hi ${name},<br>Thank you for sending me a message. I will get back to you soon.<br><br>Best Regards,<br>${creds.YOURNAME}<br>${creds.YOURSITE}<br><br><br>Message Details<br>Name: ${name}<br> Email: ${email}<br> Message: ${message}</p>`,
                },
                function (error, info) {
                  if (error) {
                    console.log(error);
                  } else {
                    console.log("Message sent: " + info.response);
                  }
                }
              );
    
              return NextResponse.json(
                {
                  message: "success",
                },
                { status: 200 }
              );
            }
          });
      } catch (error) {
        console.error('Error sending email: ', error)
      }
 
    };
    await sendMessage();
    return NextResponse.json(
      {
        message: "success",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }

  //Deliver message from your portfolio to your email address
}

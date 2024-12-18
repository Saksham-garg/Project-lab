import nodemailer from "nodemailer";
import cors from "cors";
import express from "express";
import creds from "../../../config";
import { NextRequest, NextResponse } from "next/server";
import { CompiledAutoReplyTemplate } from "./CompiledAutoReplyTemplate";
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
      subject: `New Inquiry from ${name}`,
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
    // await new Promise((resolve, reject) => {
    //   transporter.sendMail(mailOptions, async (err, data) => {
    //     console.log(err);
    //     console.log(data);
    //     if (err) {
    //       return NextResponse.json(
    //         {
    //           message: "fail",
    //         },
    //         {
    //           status: 400,
    //         }
    //       );
    //     } else {
    //       //If Success, send Auto Reply email
    //       await new Promise((resolve, reject) => {
    //         transporter.sendMail(
    //           {
    //             from: "theprojecthead@gmail.com",
    //             to: email,
    //             subject: "Message Received - Thank You!",
    //             html: CompiledAutoReplyTemplate(name),
    //           },
    //           function (error, info) {
    //             if (error) {
    //               console.log(error);
    //             } else {
    //               console.log("Message sent: " + info.response);
    //               return NextResponse.json(
    //                 {
    //                   message: "success",
    //                 },
    //                 { status: 200 }
    //               );
    //             }
    //           }
    //         );
    //       });

    //       return NextResponse.json(
    //         {
    //           message: "success",
    //         },
    //         { status: 200 }
    //       );
    //     }
    //   });
    // });
    await transporter.sendMail(mailOptions);

    // Prepare the auto-reply email
    const autoReplyMailOptions = {
      from: "theprojecthead@gmail.com",
      to: email,
      subject: "Message Received - Thank You!",
      html: CompiledAutoReplyTemplate(name), // Ensure this function returns valid HTML
    };

    // Send the auto-reply email
    await transporter.sendMail(autoReplyMailOptions);

    // Return a successful response
    return NextResponse.json(
      { message: "Emails sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to send emails.", error: error },
      { status: 500 }
    );
  }

  //Deliver message from your portfolio to your email address
}

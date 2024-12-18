import React from "react";

type Props = {};

const AutoReply = (props: Props) => {
  return (
    <div className="flex flex-col w-full bg-white items-center p-16">
      <div className="w-3/5">
        <div className="h-20 bg-[#6bbdb8] w-full flex items-center justify-center rounded-tl-md rounded-tr-md">
          <img src="/logo.png" className="w-32 h-10" />
        </div>
        <img src="/emailAuto.png" className="h-[35vh] w-full" />
        <div className="w-full bg-[#f7f0e1] p-16">
          <div className="text-black">
            <div className="">Dear ${},</div>
            <h1 className="">
              Thank you for reaching out to <b>Project Head!</b> We’ve received
              your inquiry, and our team is excited to assist you with your
              project needs.
            </h1>
            <br />
            <ul className="list-disc">
              <p>
                In the meantime, feel free to explore the wide range of services
                we offer at Project Head, including:
              </p>

              <li className="mt-1">Law Project Assistance</li>
              <li>IT and Computer Science Projects</li>
              <li>MBA, MCA, MCom, BCA, and BBM/BBA Academic Support</li>
            </ul>
            <br />
            <h2>
              If you have additional details or questions, don’t hesitate to
              reply to this email or contact us directly at
              <b>+91 93500-43796</b>
            </h2>
            <h2 className="mt-3">
              We’re here to make your project journey smooth and successful.
              <br></br>
              Thank you for choosing us!
            </h2>
            <br />
            <br />
            <p>Best regards, </p>
            <p>Team Project Head!</p>
          </div>
        </div>
        <div className="bg-black p-6 rounded-bl-md rounded-br-md">
          <div className="text-center text-xs mb-2">
            Connect with Us! Latest updates and offers
          </div>
          <div className="flex gap-6 items-center justify-center">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/project-head-0959a8341/"
            >
              <img src="/linkedin.png" className="w-8 h-8" />
            </a>
            <a target="_blank" href="">
              <img src="/social.png" className="w-8 h-8" />
            </a>
            <a target="_blank" href="">
              <img src="/facebook.png" className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoReply;

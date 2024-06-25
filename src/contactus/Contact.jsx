import { IoIosSend } from "react-icons/io";
import  { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export default function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs
        .sendForm("service_51oy65f", "template_owyg79e", form.current, {
          publicKey: "jSFNkrUxU0F-VKblX",
        })
        .then(
          (result) => {
            if (result.text === "OK") {
              form.current.reset();
              Swal.fire({
                title: "Sent",
                text: "The message sent successfully",
                icon: "success",
              });
            }
            console.log("SUCCESS!", result.text);
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    };

  return (
    <div className="bg-gradient-to-t from-amber-100 to-gray-50">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-semibold text-amber-600 text-center pb-5">
          Contact us via Email
        </h1>
        <div className="flex items-center justify-center gap-20">
          <div>
            <img
              className="w-[500px]"
              src="https://i.ibb.co/yRYKKwp/electronic-mail-receiving-sending-e-mails-exchanging-messages-by-electronic-device-internet-connecti.png"
              alt=""
            />
          </div>
          <form className="space-y-3 w-96" ref={form} onSubmit={sendEmail}>
            <div className="">
              <label htmlFor="" className="text-black font-medium ">
                Name
              </label>
              <input
                className="py-2 border-2 outline-none border-amber-600 rounded-lg px-3 block w-full mt-2"
                type="text"
                name="user_name"
                placeholder="Jhon doe"
                id=""
              />
            </div>
            <div>
              <label htmlFor="" className="text-black font-medium ">
                Email
              </label>
              <input
                className="py-2 border-2 outline-none border-amber-600 rounded-lg px-3 block w-full mt-2"
                type="email"
                name="user_email"
                placeholder="user@gmail.com"
                id=""
              />
            </div>
            <div>
              <label htmlFor="" className="text-black font-medium ">
                Message
              </label>
              <textarea
                className="py-2 border-2 outline-none border-amber-600 rounded-lg px-3 block resize-none w-full mt-2"
                type="text"
                name="message"
                placeholder="What's on your mind??!"
                rows={5}
                id=""
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-white py-2 px-6 rounded-lg border-2 border-amber-700 shadow-md transform transition-transform duration-200 hover:scale-110 hover:shadow-lg flex items-center gap-2 text-lg">
                <IoIosSend className="" />
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

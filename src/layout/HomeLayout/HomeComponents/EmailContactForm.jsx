import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "../../../components/Button";

const EmailContactForm = () => {
    const form = useRef();
    const [isSent, setIsSent] = useState(false);
    const [loading, setLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .sendForm(
                "service_bvl5z7u",
                "template_h8b5oij",   // Replace with your EmailJS Template ID
                form.current,
                "uP4xgqD8qjC2hEXEA"     // Replace with your EmailJS Public Key
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setIsSent(true);
                    setLoading(false);
                },
                (error) => {
                    console.log(error.text);
                    setLoading(false);
                }
            );
    };

    return (
        <div className="max-w-screen-md mx-auto p-2 sm:p-6  text-white rounded-lg shadow-lg overflow-hidden">
            <h2 className="text-2xl font-semibold mb-4 text-center sm:text-left">Email Me</h2>
            {isSent &&
                <p className="text-green-400 text-center sm:text-left">Your message has been sent successfully!</p>
            }
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block mb-1">
                        Name:
                    </label>
                    <input
                        type="text"
                        name="user_name"
                        id="name"
                        required
                        className="w-full p-2 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block mb-1">
                        Email:
                    </label>
                    <input
                        type="email"
                        name="user_email"
                        id="email"
                        required
                        className="w-full p-2 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block mb-1">
                        Message:
                    </label>
                    <textarea
                        name="message"
                        id="message"
                        rows="4"
                        required
                        className="w-full p-2 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                </div>
                <div className="flex justify-center sm:justify-start">
                    <button
                        type="submit"
                        className="mt-4 w-full sm:w-auto"
                        disabled={loading}
                    >
                        <Button text={loading ? "Sending..." : "Send"}></Button>
                    </button>
                </div>
                
            </form>

        </div>
    );
};

export default EmailContactForm;

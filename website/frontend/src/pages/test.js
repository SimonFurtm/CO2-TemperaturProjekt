import React, { useEffect,useRef } from "react";
import emailjs,{ init } from '@emailjs/browser';

init("lLUKmWgHA9IfR-zoZ"); //user id

const Test = () => {
    const form = useRef();
    var name;
    var msg;
    var email;

    const sendEmail = (e) => {
    
        emailjs.send("service_18g3pzj","template_y50ygcl",{
            to_name: "CoZwei",
            from_name: name,
            message: "bitte funktionier :) weil des is so vo da website gesendet",
            reply_to: email,
            });

        alert("Email wurde an " + email + " versendet.")

    };

    const sendTestEmail = (e) => {
        emailjs.send("service_18g3pzj","template_y50ygcl",{
            to_name: "simon",
            from_name: "cozwei",
            message: "bitte funktionier :) weil des is so vo da website gesendet",
            reply_to: "cozwei.project@gmail.com",
            });
        alert("Email wurde an " + email + " versendet.")
    }
    useEffect (() => {
            document.title = 'Kontakt';
        }
    );

    return (
        <div>
            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" email="reply_to" />
                <label>Message</label>
                <textarea msg="message" />
                <input type="submit" value="Send" />
            </form>

            <button onClick={sendTestEmail}>Send Test email.</button>
        </div>
    )
}

export default Test;
import React, { useEffect,useRef } from "react";
import emailjs,{ init } from '@emailjs/browser';

init("lLUKmWgHA9IfR-zoZ");

const Test = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_18g3pzj', 'template_y50ygcl', form.current, init)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
        });
    };

        
    useEffect (() => {
            document.title = 'I bin am verzweifeln';
        }
    );

    return (
        <div>
            <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
            </form>
        </div>
    )
}

export default Test;
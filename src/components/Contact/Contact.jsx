import React, { useState } from 'react'
import "./Contact.css";
import ContImage from '../../assets/contact.png'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

function Contact() {

  useGSAP(() => {

    gsap.from(".para", {
      y: 100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".para",
        scroll: "body",
        scrub: 2,
        // markers: true,
        start: "top 60%",
        end: "top 30%"
      }
    })

    gsap.from(".leftCont", {
      x: -100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".leftCont",
        scroll: "body",
        scrub: 2,
        // markers: true,
        start: "top 70%",
        end: "top 20%"
      }
    })

    gsap.from(".rightCont", {
      x: 100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".rightCont",
        scroll: "body",
        scrub: 2,
        start: "top 70%",
        end: "top 20%"
      }
    })

  })


  const [result, setResult] = useState("Send");

  const sendMessage = async (event) => {
    event.preventDefault();
    setResult("Sending..");
    const formData = new FormData(event.target);
    formData.append("access_key", "20a48fcf-c7ca-4ad3-9c44-1810c44a291b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Send");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div className='formContact'>
      <p className='para'>Please don't hesitate to reach out by filling out the form below. I'll respond to your message promptly.</p>
      <div id='contact'>
        <div className="leftCont">
          <img src={ContImage} alt="Contact-Image" />
        </div>

        <div className="rightCont">
          <form 
            onSubmit={sendMessage}>
            <p>GET IN TOUCH</p>
            <input type="text" name='Username' id='Username' placeholder="Name" required={true}/>
            <input type="email" name='Email' id='Email' placeholder="Email" required={true}/>
            <textarea name="Message" placeholder="Message me" id="Message" required={true}></textarea>
            <input type="submit" id='btn' value={ result }  />
          </form>
        </div>

      </div>
    </div>
  )
}

export default Contact








{/* <input type="text" name='Username' id='Username' placeholder="Name" {...register("Username", {required: true, minLength: 3})}/>
            {errors.Username && <span  className='errMsg'>Username must be required</span>}
            <input type="email" name='Email' id='Email' placeholder="Email" {...register("Email", {required: true, minLength: 6})}/>
            {errors.Email && <span  className='errMsg'>Email must be required</span>}
            <textarea name="Message" placeholder="Message me" id="Message" {...register("Message", {required: true, minLength: 6, maxLength: 200})}></textarea>
            {errors.Message && <span className='errMsg'>Message must be required</span>}
            <input type="submit" id='btn' value={ isSubmitting ? "Submitting..." : "Submit" } disabled={isSubmitting} /> */}
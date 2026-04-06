import { form } from "motion/react-client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { m } from "motion/react";
import Alert from "../component/Alert";
import { Particles } from "../component/Particles";
import { mySocials } from "../constants";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isLoading, setisLoading] = useState(false)
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }
  const showAlertMessage = (type, message) => {
    setAlertType(type);
      setAlertMessage(message);
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 5000);
  }
  const handleSubmit = async(e) => {
      e.preventDefault();
      setisLoading(true);
      try {
        console.log("Form sbmitted:", formData);
        await emailjs.send("service_55znj6l","template_tyd7xvw",{
        name: formData.name,
        email: formData.email,
        message: formData.message,
        title: "Portfolio Contact",
      }, "EgFzNZJG5RZ0yL3-o")
      setisLoading(false);
      
      setFormData({
        name: "",
        email: "",
        message: ""
      });
      showAlertMessage("success", "Thank you. I will get back to you as soon as possible.");
      } catch (error) {
        setisLoading(false);
        console.log("Error sending email:", error);
        showAlertMessage("danger", "Ahh, something went wrong. Please try again.");
      }
  }
  return (
    <section id="contact" className="relative flex items-center c-spacing section-spacing">
      <Particles 
        className="absolute inset-0 -z-50"
        qantity={100}
        ease={80}
        color={"#ffffff"}
        refresh/>
      {showAlert && <Alert type={alertType} text={alertMessage}/>}
        <div className="flex flex-col items-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
        <div className="flex flex-col items-start w-full gap-5 mb-10">
            <h2 className="text-heading">Let's Talk</h2>
            <p className="font-normal text-neutral-400">Whether you're looking to build a new app, improve your existing platform, or
                bring a unique project to life, I'm here to help  </p>
            </div>
            <form className="w-full" onSubmit={handleSubmit}>
              <div className="mb-5">
                <label htmlFor="name" className="feild-label">Full Name</label>
                <input id="name" name="name" type="text" className="field-input field-input-focus" 
                placeholder="John Doe"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                required/>
              </div>
              <div className="mb-5">
                <label htmlFor="email" className="feild-label">Email</label>
                <input id="email" name="email" type="email" className="field-input field-input-focus" 
                placeholder="johndoe@email.com"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                required/>
              </div>
              <div className="mb-5">
                <label htmlFor="message" className="feild-label">Message</label>
                <textarea id="message" name="message" type="text"
                rows="4" className="field-input field-input-focus" 
                placeholder="Your message here..."
                autoComplete="name"
                value={formData.message}
                onChange={handleChange}
                required/>
              </div>
              <button type="submit" className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation ">{!isLoading ? "Send" : "Sending..."}</button>
            </form>

            <div className="flex flex-col items-center justify-center w-full gap-4 mt-8 pt-6 border-t border-white/10">
              <p className="text-sm font-medium text-neutral-400">Or find me on</p>
              <div className="flex gap-5">
                {mySocials.map((social) => (
                  <a
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.name}
                    className="flex justify-center items-center w-12 h-12 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
                  >
                    <img src={social.icon} alt={social.name} className="w-6 h-6 opacity-70 hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
            </div>

          </div>
    </section>
  )
}

export default Contact
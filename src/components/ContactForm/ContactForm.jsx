import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="form-container">
      <h1>Send a Message to Us</h1>
      <form>
        <input placeholder="Name" type="text" />
        <input placeholder="Email" type="email" />
        <input placeholder="Subject" type="text" />
        <textarea placeholder="Message" rows="12"></textarea>
        <button className="btnnn">Send</button>
      </form>
    </div>
  );
};

export default ContactForm;

import { useEffect } from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import Hero from '../../components/Hero/Hero';
import './Contact.css'

const Contact = () => {

  useEffect(()=> {
    window.scrollTo(0,0);
  },[])

  return (
    <div>
      <Hero
        cName="hero"
        heroImg="https://images.pexels.com/photos/1416530/pexels-photo-1416530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="Contact Us"
        text="Get in Touch"
      />
      <ContactForm />
    </div>
  );
}

export default Contact
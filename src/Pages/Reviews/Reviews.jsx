import { useEffect } from 'react';
import Hero from '../../components/Hero/Hero';
import Testimonial from '../../components/Testimonial/Testimonial';
import './Reviews.css'

const Reviews = () => {

  useEffect(() => {
    window.scrollTo(0,0);
  }, [])

  return (
    <div className='review'>
      <Hero
        cName="hero"
        heroImg="https://images.pexels.com/photos/9821386/pexels-photo-9821386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="Client Reviews"
        text="Your Feedback is Important"
      />
      <div className='reviewBtn'>
        Write a Review
      </div>
      <Testimonial heading="" subHeading="" />
      <Testimonial heading="" subHeading="" />
      
    </div>
  );
}

export default Reviews
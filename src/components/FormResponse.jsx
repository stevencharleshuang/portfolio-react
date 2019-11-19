import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

export default function FormResponse(props) {
  useEffect(() => {
    const timer = setTimeout(() => <Redirect to='/contact' />, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="form-response">
      {
        props.location.state.formSubmit === "success" ?
          <h2>Thank you for your message! I'll get back to you shortly.</h2> :
          <h2>Something went wrong. Please try submitting again or 
            <a href="mailto:steven.charles.huang@gmail.com">
              email me directly
            </a>
          </h2>
      }
    </div>
  );
}
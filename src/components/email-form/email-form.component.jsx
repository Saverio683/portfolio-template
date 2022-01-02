import { useRef } from 'react';
import emailjs  from 'emailjs-com';

import { EmailInput, TextInput, SubmitButton } from './email-form.styles';

const EmailForm = () => {
    const form = useRef();

    const sendEmail = e => {
        e.preventDefault();
    
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
          .then(() => {
              alert('Email correctly sent!')
          }, (err) => {
              alert('Ops... something went wrong')
              console.error(err);
          });

        e.target.reset();
      };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <EmailInput type='email' placeholder='Email' required autoFocus name='from_email'/>
            <EmailInput type='text' placeholder='Subject' name='subject'/>
            <TextInput type='text' placeholder='Enter your message' required name='message'/>
            <SubmitButton type='submit'>SUBMIT</SubmitButton>
        </form>        
    )// make sure that the 'name' props of the inputs are the same as the enviromen variables in your emailjs template
}

export default EmailForm;
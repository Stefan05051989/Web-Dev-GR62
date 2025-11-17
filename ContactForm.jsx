import './App.css'
import { useState } from 'react'


function ContactForm() {
  // declare variables for contact form and use in state
  const[formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    dateOfBirth:'',
    textMessage: ''
  })


  // when user puts in, handle change. (e = event (input)) / ...formData = varargs
  const handleChange = (e) =>{
    setFormData ({
      ...formData, [e.target.name] : e.target.value
    })
  }
  // verify input.
  const handleSubmit = (e) => {
    e.preventDefault ()
    console.log('Form submitted : ', formData)
  }

   return (
    <div className='contact-form'>
    {/* <div className='contact-form'> */}
      <h1 className='heading'>Contact Form</h1>
      <form onSubmit={handleSubmit}>
        <div className='form-input'>
          <label htmlFor='firstName' className='label'>First Name:</label>
          <input 
            type="text" 
            id='firstName' 
            name='firstName' 
            value={formData.firstName} 
            onChange={handleChange} 
            className='input'
            required 
          />
        </div>

        <div className='form-input'>
          <label htmlFor='lastName' className='label'>Last Name:</label>
          <input 
            type="text" 
            id='lastName' 
            name='lastName' 
            value={formData.lastName} 
            onChange={handleChange} 
            className='input'
            required 
          />
        </div>

        <div className='form-input'>
          <label htmlFor='email'className='label'>Email:</label>
          <input 
            type="email" 
            id='email' 
            name='email' 
            value={formData.email} 
            onChange={handleChange} 
            className='input'
            required 
          />
        </div>

        <div className='form-input'>
          <label htmlFor='dateOfBirth' className='label'>Date of Birth:</label>
          <input 
            type="date" 
            id='dateOfBirth' 
            name='dateOfBirth' 
            value={formData.dateOfBirth} 
            onChange={handleChange} 
            className='input'
            required 
          />
        </div>

        <div className='form-input'>
          <label htmlFor='textMessage'className='label'>Message:</label>
          <textarea 
            id='textMessage' 
            name='textMessage' 
            value={formData.textMessage} 
            onChange={handleChange} 
            className='textarea'
            rows={5}
            required 
          />
        </div>

        <button 
          type='submit' 
          className='button'
          onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}>
          Send Message
        </button>
      </form>
    {/* </div> */}
    </div>
)
}



export default ContactForm

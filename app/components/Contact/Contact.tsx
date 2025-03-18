'use client';
import React, { useState } from 'react';

const Contact: React.FC = () => {
   const [formData, setFormData] = useState({
      formName: '',
      formEmail: '',
      formTel: '',
      //formDate: '',
      formMsg: '',
   });
   const [status, setStatus] = useState<string>('');

   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
   };

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setStatus('Sending...');

      // Use your WordPress URL from env variables
      const formID = "9886ed4"; // Replace with your actual CF7 form ID
      const endpoint = `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/contact-form-7/v1/contact-forms/${formID}/feedback`;

      try {
         const res = await fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            // CF7 expects a JSON payload with keys matching the form fields
            body: JSON.stringify(formData),
         });
         const data = await res.json();
         if (res.ok && data.status === 'mail_sent') {
            setStatus('Message sent successfully!');
            setFormData({ formName: '', formEmail: '', formTel: '', formMsg: '' });
         } else {
            setStatus('Error sending message: ' + (data.message || ''));
         }
      } catch (error) {
         console.error('Submission error:', error);
         setStatus('Error sending message.');
      }
   };

   return (
      <div 
      id="agendar"
      className="
         w-full 
         bg-[url('https://picsum.photos/1920/1080')]
         bg-cover
         bg-fixed
      ">
         <div className="
            w-full 
            px-10 md:px-5
            py-[70px] 
            text-center 
            justify-center 
            justify-items-center
            imgOverlay
         ">
            <h2 className='text-white text-3xl font-semibold'>Contacte-nos</h2>
            <hr className="customDivider my-5" />

            <form className='pt-5 w-full md:w-auto' onSubmit={handleSubmit} >
               <input type='text' name="formName" value={formData.formName} onChange={handleChange} placeholder='Nome' className='p-3 bg-white w-full' required />
               <div className='grid grid-cols-1 md:grid-cols-2 gap-5 pt-5'>
                  {/*<input type='text' name="formName" value={formData.formName} placeholder='Nome Completo' className='p-3 bg-white' required />*/}
                  <input type='email' name="formEmail" value={formData.formEmail} onChange={handleChange} placeholder='E-Mail' className='p-3 bg-white' required />
                  <input type='tel' name="formTel" value={formData.formTel} onChange={handleChange} placeholder='Telefone' className='p-3 bg-white' />
                  {/*<input type='date' name="formDate" value={formData.formDate} className='p-3 bg-white' />*/}
               </div>
               <textarea name="formMsg" value={formData.formMsg} onChange={handleChange} placeholder='A sua mensagem' maxLength={1000} className='p-3 mt-5 w-full resize-y bg-white' required />
               <button type='submit' className='w-full py-2 mt-5 text-white'>Contactar</button>
               {status && <p className="mt-5">{status}</p>}
            </form>
         </div>
      </div>
   )
}

export default Contact
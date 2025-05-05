'use client';
import React, { useState, useEffect } from 'react'; 
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from '@google-recaptcha/react';

const ContactForm: React.FC = () => {
   const [formData, setFormData] = useState({
      formName: '',
      formEmail: '',
      formTel: '',
      formMsg: '',
   });
   
   const { executeV3 } = useGoogleReCaptcha();
   const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
   console.log(siteKey);
   
   const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
   const [recaptchaReady, setRecaptchaReady] = useState(false);

   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
   };

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!executeV3) {
         console.error("reCAPTCHA not yet loaded");
         return;
      }

      try {
         const token = await executeV3("contact_form_submit");

         // Collect form data
         const form = e.currentTarget;
         //const formData = new FormData(form);
         //formData.append("token", token);
         const payload = { ...formData, token };

         // Send data to our API route
         const res = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
         })
         //setStatus('A enviar...');
         if (!res.ok) {            
            const errorData = await res.json().catch(() => ({}));
            throw new Error(errorData.error || "Submission failed");
         }

            setStatus("success");
            // reset form
            form.reset();
            setFormData({ formName: "", formEmail: "", formTel: "", formMsg: "" });

         } catch (err) {
            console.error(err);
            setStatus("error");
         }
      };//, [executeV2Invisible, formData]);


   useEffect(() => {
      if (executeV3) {
         console.log("reCAPTCHA is ready!");
         setRecaptchaReady(true);
      }
   }, [executeV3]);

   return (
      <>
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
                  <input 
                  type='text' 
                  name="formName" 
                  value={formData.formName} 
                  onChange={handleChange} 
                  placeholder='Nome' 
                  className='p-3 bg-white w-full' 
                  required />
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-5 pt-5'>
                     <input 
                     type='email' 
                     name="formEmail" 
                     value={formData.formEmail} 
                     onChange={handleChange} 
                     placeholder='E-Mail' 
                     className='p-3 bg-white' 
                     required />
                     <input 
                     name="formTel" 
                     type='number' 
                     maxLength={9}
                     value={formData.formTel} 
                     onChange={handleChange} 
                     placeholder='Telefone' 
                     className='p-3 bg-white' />
                  </div>
                  <textarea 
                  name="formMsg" 
                  value={formData.formMsg} 
                  onChange={handleChange} 
                  placeholder='A sua mensagem' 
                  maxLength={1000} 
                  className='p-3 mt-5 w-full resize-y bg-white' 
                  required />
                  <button type='submit' className='w-full py-2 mt-5 text-white' disabled={!recaptchaReady}>Contactar</button>
                  {status !== 'idle' && (
                     <p className="mt-5 text-white">
                        {status === 'success' ? "Mensagem enviada com sucesso!" : "Erro ao enviar mensagem. Tente novamente."}
                     </p>
                  )}
               </form>
            </div>
         </div>   
      </>
   )
}

const Contact: React.FC = () => (
   <GoogleReCaptchaProvider
      siteKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
      type="v3"
   >
      <ContactForm />
   </GoogleReCaptchaProvider>
)

export default Contact
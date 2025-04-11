'use client';
import React, { FormEvent, useCallback, useState } from 'react';
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from '@google-recaptcha/react';

const ContactForm: React.FC = () => {
   const [formData, setFormData] = useState({
      formName: '',
      formEmail: '',
      formTel: '',
      formMsg: '',
   });
   const [status, setStatus] = useState<string>('');
   const { executeV2Invisible } = useGoogleReCaptcha(); 

   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
   };

   //const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
   const handleSubmit = useCallback(async (e: FormEvent) => {
      e.preventDefault();
      
      if (!executeV2Invisible) {
         setStatus('Erro ao carregar reCAPTCHA. Tente novamente.')
         return
      }
      setStatus('A verificar reCAPTCHA...')

      try {
         const token = await executeV2Invisible();
         //if (!token) throw new Error("No reCAPTCHA token obtained");

         const res = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...formData, token }),
         })
         setStatus('A enviar...');
         if (!res.ok) {
            const { error } = await res.json();
            throw new Error(error || "Erro na submissão de formulário");
         }
            setFormData({ formName: "", formEmail: "", formTel: "", formMsg: "" }); // reset form
         } catch (error) {
            if (error instanceof Error) {
               setStatus(error.message);
            } else {
               setStatus('Erro inesperado');
            }
         }
      }, [executeV2Invisible, formData]);

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
                  type='tel' 
                  name="formTel" 
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
               <button type='submit' className='w-full py-2 mt-5 text-white'>Contactar</button>
               {status && <p className="mt-5">{status}</p>}
            </form>
         </div>
      </div>
   )
}

const Contact: React.FC = () => (
   <GoogleReCaptchaProvider
      siteKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
      type="v2-invisible">
      <ContactForm />
   </GoogleReCaptchaProvider>
)

export default Contact
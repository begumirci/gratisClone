import React from 'react'
import { useState } from 'react';
import PasswordInput from './Input-Design/password-input';

export default function Register() {
     const [step, setStep] = useState(1);
     const [isTrue, setIsTrue] = useState(false);
     const [formData, setFormData] = useState({
        name: '',
        lastname: '',
        email: '',
        phone: '',
        password: ''
    });

    

    function BackStep() {
        setStep(step - 1);
    }

    function NextStep() {
        setStep(step + 1)
    }

    function handleChange(e){
        const {name, value} = e.target;
        setFormData((prevData) => ({...prevData, [name]: value}));
        
    }


    function saveUser(e) {
        e.preventDefault();
        setIsTrue(true);
        console.log(formData);

    }
    return (
        <>
        <h4 className='login-header container'>Üye Ol</h4>
        
        <form method='post' onSubmit={saveUser} className='login-form'  >
            <div className='form-inputs'>
                {
                    step === 1 &&
                    <div className={isTrue ? 'submitted login-input' : 'login-input'} >
                        <p>Adınız<span>*</span></p>
                        <input type="text" placeholder='Adınızı giriniz' name='name' required value={formData.name} onChange={handleChange} />
                        <span>Bu alan zorunludur</span>
                    </div>

                }
                {
                    step === 2 &&
                    <div className={isTrue ? 'submitted login-input' : 'login-input'}>
                        <p>Soyadınız<span>*</span></p>
                        <input type="text" placeholder='Soyadınızı giriniz' name='lastname' value={formData.lastname} required onChange={handleChange} />
                        <span>Bu alan zorunludur</span>
                    </div>
                }
                {
                    step === 3 &&
                    <div className={isTrue ? 'submitted login-input' : 'login-input'}>
                        <p>E-Posta <span>*</span></p>
                            <input type="email" placeholder='E-Posta adresinizi giriniz' name='email' value={formData.email} required onChange={handleChange} />
                        <span>Bu alan zorunludur</span>
                    </div>
                }
                {
                    step === 4 &&
                    <div className={isTrue ? 'submitted login-input' : 'login-input'}>
                        <p>Cep Telefonu <span>*</span></p>
                            <input type="tel" placeholder='Telefon numaranızı giriniz' name='phone' required value={formData.phone} onChange={handleChange} />
                        <span>Bu alan zorunludur</span>
                    </div>

                }

                {
                    step === 5 &&
                    <div className='login-input'>
                        <p>Şifre <span>*</span></p>
                        <PasswordInput handleChange={handleChange} value={formData.password} />
                        <span>Bu alan zorunludur</span>
                    </div>
                }
                <div className='buttons'>
                    {
                        step < 5 && (<><button type='button' className='btn' onClick={NextStep} >İleri</button></>)
                    }
                    {
                        step > 1 && (<><button type='button' className='btn' onClick={BackStep} >Geri</button></>)
                    }
                    {
                        step >= 5 && (<><button type='submit' className='btn' >Üye Ol</button></>)
                    }
                </div>
            </div>
        </form>
        </>
    )
}

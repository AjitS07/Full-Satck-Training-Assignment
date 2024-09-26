import { zodResolver } from '@hookform/resolvers/zod';
//import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { z } from 'zod';
import { login } from '../Redux/Slices/authSlices';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';



const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const validationSchema = z.object({
        
        "email" : z.string().min(1,"Email is required").email("Invalid Email"),
        "password" : z.string()
                
    })
    const { register , handleSubmit , formState : {errors} } = useForm({
        resolver : zodResolver(validationSchema)
    });
    const { isAuth }= useSelector((state)=>state.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onSubmit =  (data)=>{
        dispatch(login(data));
      

    };
    const PasswordVisibility = () =>{
        setShowPassword(!showPassword);
    };
    useEffect(()=>{
      if(isAuth){
        navigate('/');
      }
    },[isAuth]
  );
    
  return (
    <div className='w-4/5 h-4/5 flex justify-center items-center bg-white shadow-2xl rounded'>
        <div className='w-1/2'>
            <img src="https://static.vecteezy.com/system/resources/previews/003/689/228/original/online-registration-or-sign-up-login-for-account-on-smartphone-app-user-interface-with-secure-password-mobile-application-for-ui-web-banner-access-cartoon-people-illustration-vector.jpg" alt="" className='w-full'/>
        </div>
        <div className='w-1/2 flex flex-col gap-8'>
        <h1 className='text-3xl text-blue-500 font-semibold text-center'>Welcome ! Log-In</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='grid grid-cols-2 gap-3'>
                    
                    <div>
                        <label className='text-blue-500 font-medium'>Email</label>
                        <input type="email" className={`p-2 border   w-[90%] my-2 rounded shadow-xl ${errors.email ? "border-red-500 outline-none" : "border-gray-500 outline-blue-500"}`} {...register("email")} />
                        {errors.email && (
                            <p className='text-xs text-red-500'>{errors.email.message}</p>
                        ) }
                    </div>
                    <div className='relative'>
                        <label className='text-blue-500 font-medium'>Password</label>
                        <input type={showPassword ? "text" : "password"} className={`p-2 border w-[90%] my-2 rounded shadow-xl ${errors.password ? "border-red-500 outline-none" : "border-gray-500 outline-blue-500"}`} {...register("password")} />
                        <button type="button" onClick={PasswordVisibility} className='absolute right-5 top-10 text-blue-500'>
                                {showPassword ? 'hide':'show'}
                            </button>
                        {errors.password && (
                            <p className='text-xs text-red-500'>{errors.password.message}</p>
                        ) }
                    </div>
                    
                </div>
                <button className='bg-blue-500 my-5 text-white font-medium p-2 w-[95%] shadow-xl rounded active:bg-blue-600'>log-Up</button>
            </form>
        </div>
    </div>
)
}

export default Login
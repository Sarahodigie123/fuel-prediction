"use client";
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";
import Link from "next/link"; // Import Link from next/link
import Validation from '../LoginValidation';

function Login() {
    const [values, setValues] = useState({
        username: '',
        password: ''
    });
    const navigate = useRouter();
    const [errors, setErrors] = useState({});
    const [backendError, setBackendError] = useState(null);

    const handleInput = (event) => {
        const { name, value } = event.target;
        setValues(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const err = Validation(values);
        axios.post("http://localhost:3306/login", {
        username: values.username,
        password: values.password,

        }).then((response) => {
            if(response.data.message == 200){
                useRouter('/profile')
                console.log("H111")
            } else{
                setBackendError(response.data.errors); 
        
      }
    })
  }

    useEffect(() => {
        // Reset errors when component mounts
        setErrors({});
        setBackendError(null);
    }, []);

    return (
      <div className="grid place-items-center h-screen">
            <div className="shadow-lg p-5 rounded-lg border-t-4 border-purple-400">
                <h2>Sign-In</h2>
                {backendError && backendError.map(e => (
                    <p key={e.msg} className='text-danger'>{e.msg}</p>
                ))}
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="username"><strong>Username</strong></label>
                        <input
                            type="username"
                            placeholder='Enter Username'
                            name='username'
                            value={values.username}
                            onChange={handleInput}
                            className='form-control rounded-0'
                        />
                        {errors.username && <span className='text-danger'> {errors.username}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input
                            type="password"
                            placeholder='Enter Password'
                            name='password'
                            value={values.password}
                            onChange={handleInput}
                            className='form-control rounded-0'
                        />
                        {errors.password && <span className='text-danger'> {errors.password}</span>}
                    </div>
                    <button type='submit' className="bg-purple-600 text-white font-bold cursor-pointer px-6 py-2"> Log in</button>
                    <p>You agree to our terms and policies</p>
                    <Link href="/register">
            <span className="text-sm mt-3 text-right">
              Don't have an account? Register
            </span>
          </Link>
                </form>
            </div>
        </div>
    );
}

export default Login;

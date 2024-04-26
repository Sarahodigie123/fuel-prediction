'use client'
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from 'axios';

function Register() {
    const [values, setValues] = useState({
        name: '',
        username: '',
        password: ''
    });
    const [errors, setErrors] = useState({
        name: "",
        username: "",
        password: ""
    });

    const router = useRouter();
    
    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    };
  
    const handleSubmit = async (event) => {
       event.preventDefault();
        if (errors.name === "" && errors.username === "" && errors.password === ""){
            axios.post('http://localhost:3306/register', values)
            router.push('/login')
            .then(res => {
                console.log(res);
       
            })
        }
    };

    return (
      <div className="grid place-items-center h-screen">
          <div className="shadow-lg p-5 rounded-lg border-t-4 border-purple-400">
              <h2>Register</h2>
              <form onSubmit={handleSubmit}>
                  <div className='mb-3'>
                      <label htmlFor="name"><strong>Name</strong></label>
                      <input
                          type="text"
                          placeholder='Enter Name'
                          name='name'
                          value={values.name}
                          onChange={handleInput}
                          className='form-control rounded-0'
                      />
                  </div>
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
                  </div>
                  <button type='submit' className="bg-purple-600 text-white font-bold cursor-pointer px-6 py-2">Register</button>
                  <p>You agree to our terms and policies</p>
                  <Link href="/login">
                      <span className="text-sm mt-3 text-right">
                          Already have an account? Sign In
                      </span>
                  </Link>
              </form>
          </div>
      </div>
    ); 
}

export default Register;


'use client'
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from 'axios';
import Validation from "../RegisterValidation";


function Register() {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    });
    const router = useRouter(); // Change useNavigate to useRouter
    const [errors, setErrors] = useState({});

    const handleInput = (event) => {
        const { name, value } = event.target;
        setValues(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const err = Validation(values);
        setErrors(err);
        if (!err.name && !err.email && !err.password) { // Check if all fields are valid
            axios.post('http://localhost:3306/register', values)
                .then(res => {
                    router.push('/'); // Use router.push to navigate
                })
                .catch(err => console.log(err));
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
                        {errors.name && <span className='text-danger'> {errors.name}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="email"><strong>Username</strong></label>
                        <input
                            type="username"
                            placeholder='Enter Username'
                            name='username'
                            value={values.username}
                            onChange={handleInput}
                            className='form-control rounded-0'
                        />
                        {errors.email && <span className='text-danger'> {errors.username}</span>}
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
                    <button type='submit'className="bg-purple-600 text-white font-bold cursor-pointer px-6 py-2"> Register</button>
                    <p>You agree to our terms and policies</p>
                    {/* Use Link from next/link */}
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

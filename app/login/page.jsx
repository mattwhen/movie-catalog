'use client';
import React from 'react';
import { useFormik } from 'formik';
import Heading from '../components/Heading/Heading';

const validate = (values) => {
	const errors = {};
	if (!values.email) {
		errors.email = 'Required';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'Invalid email address';
	}

	return errors;
};

const page = () => {
	// Pass the useFormik() hook initial form values and a submit function that will
	// be called when the form is submitted
	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		// Values: Our form's current values.
		onSubmit: (values) => {
			alert(JSON.stringify(values));
		},
	});

	return (
		<>
        <Heading />
        <section className='bg-dark-blue h-[800px]'>
			<div className='modal-container flex justify-center items-center relative'>
				<div className='modal-content p-5 bg-white rounded-lg absolute max-w-[400px] w-1/3 h-[300px] top-56'>
					<form onSubmit={formik.handleSubmit} className='text-black'>
						<div>
							<h2 className='text-center text-3xl'>Sign in</h2>
						</div>
						<div className='flex flex-col justify-center w-full'>
							<label for='email' className='block'>
								Email:
							</label>
							<input
								id='email'
								name='email'
								className='text-black border rounded-md py-1 px-2'
								type='email'
								onChange={formik.handleChange}
								value={formik.values.email}
							/>
							{formik.errors.email ? <div>Invalid Email Address</div> : null}
							<label for='password' className='block mt-3'>
								Password:
							</label>
							<input
								id='password'
								name='password'
								className='text-black border rounded-md py-1 px-2'
								type='password'
								onChange={formik.handleChange}
								value={formik.values.password}
							/>
						</div>
						<div className='flex flex-col items-center mt-8'>
							<button
								type='submit'
								className='block bg-yellow mb-4 rounded-md w-full h-8 hover:bg-silver'
							>
								Log in
							</button>
                            <a href='#' className='text-dark-blue hover:text-anchor-tags'>Create Account</a>
						</div>
					</form>
				</div>
			</div>
        
        </section>
		</>
	);
};

export default page;

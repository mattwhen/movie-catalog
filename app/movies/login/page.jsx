'use client';
import Link from 'next/link';
import { useFormik } from 'formik';
import Heading from '../../components/Heading/Heading';

const validate = values => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+]{8,}$/;

	const errors = {};
	if (!values.email) {
		errors.email = 'Required';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'Invalid email address';
	}

    if (!values.password) {
        errors.password = 'Required';
    } else if (!regex.test(values.password)) {
        errors.password = 'Must be a length of 8 characters, and contains a combination of letters, numbers, and special characters.'
    }


	return errors;
};

const passwordHandler = () => {
    // Handler function to determine if the checkbox is enabled to show password, otherwise, do nothing. 

    /* 
    if (checkbox is checked) {
        Change password type in the password field to 'text'
    } else {
        Change password type in the password field to 'password'
    }
    */
}

const page = () => {
	// Pass the useFormik() hook initial form values and a submit function that will
	// be called when the form is submitted
	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
        validate,
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
				<div className='modal-content p-5 bg-white rounded-lg absolute max-w-[425px] w-10/12 lg:w-1/3 h-7/8 max-h-[400px] top-56'>
					<form onSubmit={formik.handleSubmit} className='text-black'>
						<div>
							<h2 className='text-center text-2xl lg:text-2xl'>Sign in</h2>
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
							{formik.errors.email ? <div className='text-red'>{formik.errors.email}</div> : null}
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
                            {formik.errors.password ? <div className='text-red'>{formik.errors.password}</div> : null}
						</div>
						<div className='flex flex-col items-center mt-8'>
							<button
								type='submit'
								className='block bg-yellow mb-4 rounded-md w-full h-8 hover:bg-silver'
							>
								Log in
							</button>
							<Link className='mx-4 hvr-fade text-link-blue hover:text-link-blue-hover' href='/signup'>
					Create Account
				</Link>
						</div>
					</form>
				</div>
			</div>
        
        </section>
		</>
	);
};

export default page;

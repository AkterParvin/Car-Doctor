import bg from '../../../assets/images/login/login.svg'
import logo from '../../../assets/logo.svg';
import { FcGoogle, } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';
import { BiLogoLinkedin } from 'react-icons/bi';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';


const Login = () => {
    const { googleSignIn, singIn } = useContext(AuthContext);
    const [loginError, setloginError]=useState('')
    const navigate = useNavigate();
    const location = useLocation();
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        singIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                if (user) {
                    Swal.fire(
                        'Login Successfull',
                        'Please proceed to the page',

                    )
                }
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.log(error.message);
                setloginError(error.message);
            })

    }

    // signin with google 
    const handleGoogleLogin = () => {
        googleSignIn();
        navigate(location?.state ? location.state : '/');
    }
    return (

        <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg  dark:bg-gray-800 lg:max-w-6xl my-10 p-8">

            <div className="hidden  lg:block lg:w-1/2" >
                <img src={bg} alt="" className='object-cover' />
            </div>

            <div className="w-full px-6 py-8 md:px-16 lg:w-[45%] border border-gray-400 rounded-xl shadow-xl">
                <div className="flex justify-center mx-auto">
                    <img className="w-auto h-7 sm:h-12" src={logo} alt="Logo" />
                </div>



                {/* <button href="#" className="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <div className="px-4 py-2">
                        <FcGoogle></FcGoogle>
                        </div>
                        <span className="w-5/6 px-4 py-3 font-bold text-center">Sign in with Google</span>
                </button> */}

                <div className="flex items-center justify-between ">
                    <span className="w-1/5 border-b border-[#FF3811] dark:border-gray-600 lg:w-1/4"></span>
                    <span>
                        <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
                            Welcome back!
                        </p>
                        <p className="mt-3 text-3xl font-semibold text-black text-center  dark:text-gray-200">
                            Login
                        </p>
                    </span>
                    <span className="w-1/5 border-b border-[#FF3811] dark:border-gray-400 lg:w-1/4"></span>
                </div>

                <form onSubmit={handleSubmit}>
                    {
                        loginError && <p className="text-red-700 text-md font-bold mt-2">{loginError}</p>
                    }

                    <div className="mt-4">
                        <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Email Address</label>
                        <input
                            id="LoggingEmailAddress"
                            type="email"
                            name='email'
                            required
                            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"

                        />
                    </div>

                    <div className="mt-4 ">
                        <div className="flex justify-between ">
                            <label htmlFor="loggingPassword" className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Password</label>

                        </div>
                        <input
                            id="loggingPassword"
                            name='password'
                            required
                            type="password"
                            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 mb-10"

                        />
                        <button type='submit' className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#FF3811] rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                            Login
                        </button>
                    </div>
                </form>

                <div className="mt-6 text-center space-y-4">
                    <span className="flex items-center justify-between my-4">
                        <span className="w-1/3 border-b border-[#FF3811] dark:border-gray-600 lg:w-1/4"></span>
                        <p>Or Login with</p>
                        <span className="w-1/3 border-b border-[#FF3811] dark:border-gray-600 lg:w-1/4"></span>
                    </span>


                    <span className='flex items-center justify-center gap-4'>
                        <button onClick={handleGoogleLogin} className='btn btn-circle '><FcGoogle className='text-2xl '></FcGoogle>
                        </button>
                        <button className='btn btn-circle '>
                            <FaFacebookF className='text-2xl text-blue-700'></FaFacebookF>
                        </button>
                        <button className='btn btn-circle '>
                            <BiLogoLinkedin className='text-2xl text-blue-700'></BiLogoLinkedin>
                        </button>
                    </span>
                </div>


                <div className="flex items-center justify-center mt-4">

                    <p className="text-xs text-gray-500 uppercase dark:text-gray-400 ">Have an account ? <Link to="/signup " className='text-[#FF3811] hover:underline font-bold'>Sign Up
                    </Link> </p>

                </div>
            </div>
        </div>

    );
};

export default Login;
import React, { use } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { NavLink, useNavigate } from 'react-router';
import { toast } from 'react-toast';
import { AuthContext } from '../Context/AuthContext';

const Login = () => {


  const {logIn,googleLogin}= use(AuthContext)
  const navigate = useNavigate()
    const handleLogin = (e) =>  {

     e.preventDefault();
   

     const email= e.target.email.value;
     
     const password= e.target.password.value;
     console.log(email,password)
     
     logIn(email,password)
       .then((res) => {
   
    const user = res.user;
    toast.success(user)
    navigate("/")
  })
  .catch((error) => {
 
    if (error.code === "auth/user-not-found") {
          toast.error("User not found!");
        } else if (error.code === "auth/wrong-password") {
          toast.error("Incorrect password!");
        } else {
          toast.error("Login failed. Try again!");
        }
  });

 }

       const handleGoogleLogin = () => {
       googleLogin()
       .then(result=>{
        toast.success(result.user)
        navigate('/');
       })
       .catch((error) => {
          toast.error(error)
       })
    }
    return (

 

        <div>
            <div className=" bg-[url('/carRentLogin.jpg')]  bg-center hero 
            min-h-screen bg-no-repeat">
         
  <div className="hero-content flex-col ml-10 ">
    <div className="text-center ">
      <h1 className="text-5xl primary-font font-bold text-purple-600">Login now!</h1>
     
    </div>
    <div className="card bg-transparent w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
       <form onSubmit={handleLogin}>
         <fieldset className="fieldset">
            {/* email */}
          <label className="label font-bold">Email</label>
          <input 
          name="email"
          type="email" 
          className="input" 
          placeholder="Email" 
          required/>


          {/* Password */}
          <label className="label font-bold">Password</label>
          <input 
          name="password"
          type="password" 
          className="input" 
          placeholder="Password" 
          required/>

          <div><a className="link link-hover">Forgot password?</a></div>


          <button className="btn btn-neutral mt-4 thm-btn">Login</button>
  <div className="flex items-center my-2">
  <hr className="flex-grow border-gray-400" />
  <span className="px-2 text-black bg-transparent text-xl">or</span>
  <hr className="flex-grow border-gray-400" />
</div>

<button onClick={handleGoogleLogin} className="btn bg-transparent hover:bg-amber-400"><FcGoogle  size={26}/>Continue with Google</button>
<p className='secondary-font text-xm mt-2'>Don't  have an account?<NavLink to="/register" className='text-blue-800 cursor-pointer font-bold'>Register</NavLink></p>
        </fieldset>
       </form>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;
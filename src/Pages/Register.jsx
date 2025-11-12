import React, { use } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { NavLink, useNavigate } from 'react-router';
import { toast } from 'react-toast';
import { AuthContext } from '../Context/AuthContext';

const Register = () => {

        const {createUser,googleLogin}=use(AuthContext)
    const navigate = useNavigate();

    const handleRegister = (e) =>  {

     e.preventDefault();
   
     const name= e.target.name.value;
     const email= e.target.email.value;
     const photo= e.target.photo.value;
     const password= e.target.password.value;
     console.log(name,email,photo,password)
     

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

if (!passwordRegex.test(password)) {
  toast.error("❌ Invalid password. Must be at least 6 characters, include uppercase and lowercase letters.");
  return;
}

 createUser(email,password)
       .then((res) => {
   
    const user = res.user;
    toast.success(user);
    
    navigate("/")
  })
  .catch((error) => {
    const errorMessage = error.message;
    toast.error(errorMessage)
  })
  .catch((error) => {
 console.error("Firebase Error:", error.code, error.message);
  const errorCode = error.code;

  if (errorCode === "auth/email-already-in-use") {
    toast.error("This email is already registered!");
  } 
  else if (errorCode === "auth/invalid-email") {
    toast.error("Invalid email address!");
  } 
  else if (errorCode === "auth/weak-password") {
    toast.error("Password must be at least 6 characters!");
  } 
  else if (errorCode === "auth/missing-password") {
    toast.error("Please enter a password!");
  } 
  else if (errorCode === "auth/internal-error") {
    toast.error("Internal error occurred. Try again!");
  } 
  else {
    toast.error("Something went wrong. Try again later!");
    console.error("Register error:", error);
  }
})


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
                  <h1 className="text-5xl primary-font font-bold">Register Now!</h1>
                 
                </div>
                <div className="card bg-transparent w-full max-w-sm shrink-0 shadow-2xl">
                  <div className="card-body">
                   <form onSubmit={handleRegister}>
                     <fieldset className="fieldset">
                        {/* name */}
                      <label className="label font-bold">Name</label>
                      <input 
                      name="name"
                      type="text" 
                      className="input" 
                      placeholder="Your Namee" 
                      required/>

                        {/*Photo */}
                      <label className="label font-bold">Photo URL</label>
                      <input 
                      name="photo"
                      type="text" 
                      className="input" 
                      placeholder="photo Url" 
                      required/>

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
                      type="text" 
                      className="input" 
                      placeholder="Password" 
                      required/>
            
                 
            
                      <button className="btn btn-neutral mt-4 thm-btn">Register</button>
              <div className="flex items-center my-2">
              <hr className="flex-grow border-gray-400" />
              <span className="px-2 text-black bg-transparent text-xl">or</span>
              <hr className="flex-grow border-gray-400" />
            </div>
            
            <button onClick={handleGoogleLogin} className="btn bg-transparent hover:bg-amber-400"><FcGoogle size={26}/>Continue with Google</button>
            <p className='secondary-font text-xm mt-2'>Already have an account?<NavLink to="/login" className='text-blue-800 cursor-pointer font-bold'></NavLink></p>
                    </fieldset>
                   </form>
                  </div>
                </div>
              </div>
            </div>
        </div>
    );
};

export default Register;
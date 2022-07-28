import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/Logo.png';

const SignupBox = ()=>{
	return(
	<div className="h-fit w-4/5 md:w-1/3 bg-slate-500 flex flex-col items-center p-2 px-6 pb-8">
		<img src={logo} className="h-40"/>
		<form className="flex flex-col w-full">
			<input className="mt-4 p-2" type="text" placeholder="Firstname" />
			<input className="mt-4 p-2" type="text" placeholder="Lastname" />
			<input className="mt-4 p-2" type="text" placeholder="Username" />
			<input className="mt-4 p-2" type="email" placeholder="Email" />
			<input className="mt-4 p-2" type="password" placeholder="Password" />
			<input className="mt-4 p-2" type="password" placeholder="Confirm Password" />
			<input type="submit" className="cursor-pointer p-2 bg-slate-900 mt-4 text-white" value="Signup"/>
			<Link to={"/Login"} className="flex justify-center w-full text-slate-900 mt-2 cursor-pointer">Login</Link>
		</form>
	</div>);
}

const Signup = ()=>{
	return(
	<div className="bg-gray-900 h-screen width-full flex justify-center items-center">
		<SignupBox />
	</div>);
}


export default Signup;
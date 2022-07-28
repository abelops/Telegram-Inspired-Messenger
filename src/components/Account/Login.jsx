import React from 'react';
import logo from '../../assets/Logo.png';
import {Link} from 'react-router-dom';
import { useContext } from 'react';
import {NotificationList} from '../Utils/NotificationList';
import { NotificationProvider, NotificationContext } from '../Utils/NotContext';
import { v4 as uuid } from 'uuid';
import Loading from '../Utils/Loading';


const LoginBox = ()=>{
	return(
	<div className="h-4/6 w-4/5 md:w-1/3 bg-slate-500 flex flex-col items-center p-2 px-6">
		<img src={logo} className="h-40"/>
		<form className="flex flex-col w-full">
			<input className="mt-4 p-2" type="text" placeholder="Username" />
			<input className="mt-4 p-2" type="password" placeholder="Password" />
			<input type="submit" className="cursor-pointer p-2 bg-slate-900 mt-4 text-white" value="Login"/>
			<Link to={"/Signup"} className="flex justify-center w-full text-slate-900 mt-2 cursor-pointer"><p>Signup</p></Link>
		</form>
	</div>);
}

const Login = ()=>{
	const NotPop = ()=>{
		const {Notifications, setNotifications} = useContext(NotificationContext);
		console.log(Notifications)
		const addNot = (typea)=>{
			setNotifications([...Notifications, 
				{
					nid: uuid(),
					type: typea,
					title: typea,
					message: "Success happened and there is nothing you can do about it!",
					stat: true,
				}
			])
		}
		return(
			<div>
				<button className="text-white mx-2 p-2 bg-slate-700" onClick={()=> addNot("success")}>Success</button>
				<button className="text-white mx-2 p-2 bg-slate-700" onClick={()=> addNot("info")}>Info</button>
				<button className="text-white mx-2 p-2 bg-slate-700" onClick={()=> addNot("warning")}>Warning</button>
				<button className="text-white mx-2 p-2 bg-slate-700" onClick={()=> addNot("error")}>Error</button>

			</div>
			)
	}
	return(
	<NotificationProvider>
		<div className="bg-gray-900 h-screen width-full flex justify-center items-center">
			<NotificationList />
			<LoginBox />
		</div>
	</NotificationProvider>
	);
}


export default Login;
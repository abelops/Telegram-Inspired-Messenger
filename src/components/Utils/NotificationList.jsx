import { MinusCircleIcon as CloseIcon } from '@heroicons/react/solid';
import { useState, useContext, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import {NotificationContext, NotificationProvider} from './NotContext';


const getColorNot = (type)=>{
	const colors = ["green", "sky", "yellow", "rose"];
	switch(type){
		case "success":
			return colors[0];
			break;
		case "info":
			return colors[1];
			break;
		case "warning":
			return colors[2];
			break;
		case "error":
			return colors[3];
			break;
		default:
			return colors[1];
			break
	}
}


export const NotificationList = ()=>{
	const {Notifications, setNotifications} = useContext(NotificationContext);
	console.log(Notifications)

	const removeNotState = ()=>{
		setNotifications(Notifications.filter(nots => nots.stat));
	}
	useEffect(()=>{
		const interval = setInterval(()=>{
			if(Notifications.length){
				removeNot(Notifications[0].nid)
			}
		}, 2000);
		return ()=>{
			clearInterval(interval)
		}
	},[Notifications]);

	const removeNot = (nid)=>{
		var newNots = Notifications.map(nots =>{
			if(nots.nid==nid){
				nots.stat = false
			}
			return nots
		})
		setNotifications(newNots);
		setTimeout(()=>{
			removeNotState();
		}, 300)
	}

	const Notification = (type, title, message, nid, stat)=>{
		var color = getColorNot(type);
		return(
			<div key={nid} className={`border-${color}-800 border-l-4 ${stat? 'animate-waving-hand': 'animate-waving-hand1'} mt-4 ease-linear text-${color}-100 px-3 py-3 pt-2 w-80 h-28 bg-slate-700`}>
				<CloseIcon className={`h-5 absolute cursor-pointer right-4`} onClick={()=> removeNot(nid)}/>
				<h2 className="text-lg">{title}</h2>
				<p className="text-xs mt-[3px]">{message}</p>
			</div>);

	}

	const allNots = Notifications.map((nots)=>{
		return Notification(nots.type, nots.title, nots.message, nots.nid, nots.stat);
	})
	return(
		<NotificationProvider>
			<div className="absolute top-0 right-2">
				{allNots}
			</div>
		</NotificationProvider>
	)
}
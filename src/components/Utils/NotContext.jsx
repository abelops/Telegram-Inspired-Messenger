import { createContext, useState } from 'react';
import { v4 as uuid } from 'uuid';

export const NotificationContext = createContext([]);

export const NotificationProvider = ({children})=> {
	const [Notifications, setNotifications] = useState([]);
	return(
	<NotificationContext.Provider value={{Notifications, setNotifications}}>
	  {children}
	</NotificationContext.Provider>
	);
};



import {MenuIcon, ChatIcon} from '@heroicons/react/solid';
const LeftIcons = ()=>{
	return(
		<div className="relative bg-slate-900 text-slate-200 h-full w-[80px] flex flex-col">
			<div className="h-12 w-12 mt-2 ml-2 rounded-full bg-slate-600"></div>
			<div className="mt-4 flex flex-col">
				<ChatIcon className="h-10 mt-2"/>
				<ChatIcon className="h-10 mt-2"/>
				<ChatIcon className="h-10 mt-2"/>
				<ChatIcon className="h-10 mt-2"/>
				<ChatIcon className="h-10 mt-2"/>
				<ChatIcon className="h-10 mt-2"/>
			</div>
		</div>
		);
}


export default LeftIcons;
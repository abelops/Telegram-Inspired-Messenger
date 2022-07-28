import LeftBar from './Leftbar/LeftBar';
import RightBar from './Rightbar/RightBar';
import {MenuIcon, DotsVerticalIcon, PaperClipIcon} from '@heroicons/react/solid';

const UserInfoContainer = ()=>{
	return(
	<div className="bg-slate-800 border-l-2 border-slate-900 w-full flex justify-between items-center pl-4 cursor-pointer h-[60px]"> 
		<div className="flex">
			<div className="h-12 w-12 rounded-full bg-slate-600"></div>
			<div className="flex flex-col ml-2">
				<h2 className="text-slate-200">Username</h2>
				<p className="text-xs ml-2">online</p>
			</div>
		</div>
		<DotsVerticalIcon className="w-6 mr-2"/>
	</div>);
}

const BottomSection = ()=>{
	return(<div className="bg-slate-800 h-12 w-full fixed bottom-0">
		<PaperClipIcon />
	 </div>)
}

const ChatMain = ()=>{
	return(
		<div className="bg-slate-900 absolute bottom-0 top-[60px] w-full overflow-y-scroll ">
		
		</div>);
}

const ChatContainer = ()=>{
	return(
		<div className="h-full relative flex flex-col hidden w-[50%]  sm:block md:w-[40%]">
			<UserInfoContainer />
			<ChatMain />
			<BottomSection />
		</div>);
}

const Home = ()=>{
	return(
		<div className="bg-gray-900 h-screen w-full text-white flex">
			<LeftBar />
			<ChatContainer />
			<RightBar />			
		</div>
	);
}

export default Home;
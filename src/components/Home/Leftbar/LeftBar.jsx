import {MenuIcon, ChatIcon} from '@heroicons/react/solid';
import LeftIcons from './LeftIcons';
import FeedList from './FeedList';



const LeftBar = ()=>{
	return(
		<div className="bg-slate-700 relative h-screen fixed flex left-0 w-full sm:w-[60%] md:w-[35%] text-white">
			<LeftIcons />
			<FeedList />
		</div>
	);
}

export default LeftBar;
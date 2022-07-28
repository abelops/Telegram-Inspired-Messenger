import Bage from '../../Utils/Bage'; 

const IndFeed = ({mess})=>{
	var messLen = mess.split("");
	var newMess = "";
	if(messLen.length>80){
		for(var i=0; i<80; i++){
			newMess+=messLen[i];
		}
		newMess+="....";
	}
	else {newMess=mess;}
	return(
		<div className="h-24 w-full flex items-center content-start pl-2 shadow-sm">
			<div className="w-[3em] h-[3em] rounded-full bg-slate-200"></div>
			<div className="absolute left-[3em] right-0 w-[80%] ml-2 border-b-[1px] border-slate-400 h-16">
				<div className="flex justify-between">
					<h1 className="ml-2 text-sm">Username</h1>
					<h1 className="text-xs">Yesterday</h1>
				</div>
				<div className="flex justify-between">
					<p className="text-xs font-thin ml-2">{newMess}</p>
					<Bage content={"10"}/>
				</div>
			</div>
		</div>
		)
}

const UserContainer = ()=>{
	return(
		<div className="bg-slate-800 relative overflow-y-scroll scrollbar-thumb-gray-700 scrollbar-track-gray-900 h-full w-full">
			<IndFeed mess={"Hello this is a trial message Hello this is a trial message message message message message"}/>
			<IndFeed mess={"Hello this is a trial message Hello this is a trial message message message message message"}/>
			<IndFeed mess={"Hello this is a trial message Hello this is a trial message message message message message"}/>
			<IndFeed mess={"Hello this is a trial message Hello this is a trial message message message message message"}/>
			<IndFeed mess={"Hello this is a trial message Hello this is a trial message message message message message"}/>
			<IndFeed mess={"Hello this is a trial message Hello this is a trial message message message message message"}/>
			<IndFeed mess={"Hello this is a trial message Hello this is a trial message message message message message"}/>
			<IndFeed mess={"Hello this is a trial message Hello this is a trial message message message message message"}/>
			<IndFeed mess={"Hello this is a trial message Hello this is a trial message message message message message"}/>
			<IndFeed mess={"Hello this is a trial message Hello this is a trial message message message message message"}/>
			<IndFeed mess={"Hello this is a trial message Hello this is a trial message message message message message"}/>
		</div>);
}


const SearchBox = ()=>{
	return(<div className="bg-slate-800 h-[65px] flex justify-center items-center px-3 pr-8">
			<input type="text" placeholder="Search" className="bg-slate-700 pl-2 text-sm rounded-sm h-8 w-full" />
		</div>);
}



const FeedList = ()=>{
	return(
		<div className="relative flex flex-col right-0 w-full">
			<SearchBox />
			<UserContainer />
		</div>
		);
}

export default FeedList;
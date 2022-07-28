import { Player, Controls } from '@lottiefiles/react-lottie-player';

const Loading = ()=>{
	return(
		<div className="absolute h-full w-full flex items-center justify-center bg-slate-900/75">
			<div className="h-20 w-80 flex place-content-evenly items-center">
				<Player
			        autoplay={true}
			        loop={true}
			        src="https://assets2.lottiefiles.com/packages/lf20_t9gkkhz4.json"
			        style={{ height: '100%', width: '100%' }}
			      ></Player>
			</div>
		</div>
		);
}

export default Loading;
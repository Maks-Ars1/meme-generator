import Draggable from 'react-draggable';

export default function MemeImg({ memeData, text1, text2, text3, text4, text5 }) {
	const allTexts = [text1,text2,text3,text4,text5];
	return (
		<div id='meme' className='relative flex-1'>
			<img
				src={memeData.url}
				alt={memeData.name}
				className='w-full aspect-square'
			/>
			{allTexts.slice(0,memeData.box_count).map((text)=>(
				<Draggable bounds='parent'>
					<div className='bottom-80 left-1/3 cursor-grab meme-text text-4xl font-mono text-white w-fit relative'>
						{text}
					</div>
				</Draggable>
			))}
		</div>
	);
}

export default function RandomImg({ memes, setCurrMeme }) {
	function getRandomMeme() {
		setCurrMeme(memes[Math.floor(Math.random() * memes.length + 1)]);
	}

	return (
		<button
			onClick={getRandomMeme}
			className='active:scale-95 hover:scale-105 focus-within:scale-105 transition-transform p-8 text-4xl lg:text-xl lg:py-4 lg:px-6 text-algae bg-transparent border-2 border-l-algae border-t-algae border-r-grass border-b-grass shadow-2xl rounded-2xl dark:text-white lg:rounded-lg'
		>
			Random Meme
		</button>
	);
}

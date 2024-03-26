export default function InputBox({ placeholder, text, setText }) {
	function handleChange(e) {
		setText(e.target.value);
	}

	return (
		<input
			className='p-8 text-4xl text-black placeholder:text-zinc-400 dark:text-white bg-transparent border-zinc-400 dark:border-white border-4 rounded-2xl dark:placeholder:text-white flex-1 lg:text-xl lg:border-2 lg:py-4 lg:px-6 lg:rounded-lg'
			type='text'
			placeholder={placeholder}
			value={text}
			onChange={handleChange}
		/>
	);
}

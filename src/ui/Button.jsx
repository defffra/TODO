const Button = ({ text, click }) => {
	return (
		<button
			className='outline-none border-none bg-white p-2 rounded-lg text-xl font-bold shadow-lg duration-300 hover:bg-hover'
			type='submit'
			onClick={click}
		>
			{text}
		</button>
	)
}

export default Button
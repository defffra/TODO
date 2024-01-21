import { useState } from 'react'
import Button from '../ui/Button'
import { BASE_URL, BASE_USER } from '../utils/consts'

const TaskForm = () => {
	const [task, setTask] = useState({
		title: '',
		description: '',
		username: BASE_USER,
	})

	const addTask = async (e) => {
		e.preventDefault()
		await fetch(`${BASE_URL}/create_task/`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			  },
			body: JSON.stringify({
				title: task.title,
				description: task.description,
				username: task.username
			})
		})
		history.go(0)
	}

	return (
		<form className='flex flex-col gap-y-5 '>
			<div className='flex flex-col gap-y-5'>
				<label htmlFor='title' className='text-xl font-bold'>
					Задача
				</label>
				<input
					type='text'
					name='title'
					id='title'
					className='bg-main shadow-lg border-none outline-none p-2 rounded-xl font-semibold'
					onChange={e => setTask({ ...task, [e.target.name]: e.target.value })}
				/>
			</div>
			<div className='flex flex-col gap-y-2'>
				<label htmlFor='description' className='text-xl font-bold'>
					Описание
				</label>
				<textarea
					type='text'
					name='description'
					id='description'
					className='bg-main shadow-lg border-none outline-none p-2 rounded-xl font-semibold'
					onChange={e => setTask({ ...task, [e.target.name]: e.target.value })}
				/>
			</div>
			<Button text={'Добавить'} click={addTask} />
		</form>
	)
}

export default TaskForm
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import DeleteIcon from '@mui/icons-material/Delete'
import axios from 'axios'
import { BASE_URL } from '../utils/consts'

const Task = ({ username, title, description, isFinished, id }, key) => {
	const deleteTask = async e => {
		e.preventDefault()
		await axios.delete(`${BASE_URL}/delete_task?task_id=${id}`)
		history.go(0)
	}

	const finished = async e => {
		e.preventDefault()
		await axios.patch(`${BASE_URL}/update_task?task_id=${id}`, {
			is_finished: true,
		})
		history.go(0)
	}

	return (
		<div className='bg-main p-2 mt-2 rounded-lg' key={key}>
			<div className='flex justify-between'>
				<p className='text-xl font-bold'>
					[{username}] {title.charAt(0).toUpperCase() + title.slice(1)}:
				</p>
				<div className='flex gap-x-1'>
					{isFinished == true ? (
						<>
							<CheckBoxIcon
								sx={{ fontSize: 35 }}
								className='rounded-full p-1 hover:bg-black/20'
							/>
							<button type='submit' onClick={deleteTask}>
								<DeleteIcon
									sx={{ fontSize: 35 }}
									className='rounded-full p-1 hover:bg-black/20'
								/>
							</button>
						</>
					) : (
						<button type='submit' onClick={finished}>
							<CheckBoxOutlineBlankIcon
								sx={{ fontSize: 35 }}
								className='rounded-full p-1 hover:bg-black/20'
							/>
						</button>
					)}
				</div>
			</div>
			<p
				className={`text-lg font-semibold ${
					isFinished == true ? 'line-through text-black/20' : ''
				}`}
			>
				{description}
			</p>
		</div>
	)
}

export default Task
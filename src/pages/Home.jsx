import { useState, useEffect } from 'react'
import Task from '../components/Task'
import TaskForm from '../components/TaskForm'
import axios from 'axios'
import { BASE_URL } from '../utils/consts'
import Loading from '../components/Loading'

const Home = () => {
	const [data, setData] = useState()
	const [loading, setLoading] = useState(true)
	useEffect(() => {
		const axiosData = async () => {
			try {
				await axios.get(`${BASE_URL}/get_all_tasks`).then(res => {
					setData(res.data)
				})
			} catch (error) {
				console.log(error)
			} finally {
				setLoading(false)
			}
		}

		axiosData()
	}, [])
	return (
		<>
			<TaskForm />
			<hr className='border-1 text-black rounded-lg mt-5' />

			{loading ? (
				<Loading />
			) : (
				data.map(task => (
					<Task
						id={task.id}
						username={task.username}
						title={task.title}
						description={task.description}
						isFinished={task.is_finished}
						key={task.id}
					/>
				))
			)}
		</>
	)
}

export default Home
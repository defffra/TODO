import GlobalWrapper from './components/GlobalWrapper'
import Header from './components/Header'
import Home from './pages/Home'

function App() {
	return (
		<>
			<GlobalWrapper>
				<Header />
				<Home />
			</GlobalWrapper>
		</>
	)
}

export default App
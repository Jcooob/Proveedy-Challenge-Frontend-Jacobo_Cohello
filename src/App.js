import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PageOne from './Views/PageOne';
import PageTwo from './Views/PageTwo';
import './App.css';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<PageOne/>} />
				<Route path="/generate" element={<PageTwo/>}/>
			</Routes>
		</Router>
	);
}

export default App;

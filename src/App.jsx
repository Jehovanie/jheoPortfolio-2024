import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./Page/Home";
import ProjectDetail from "./Page/ProjectDetail";
import ScrollManager from "./components/scrollManager/ScrollManager";

function App() {
	return (
		<BrowserRouter>
			<ScrollManager />
			<div className="content_home_page">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/projets/:slug" element={<ProjectDetail />} />
					<Route path="*" element={<Navigate to="/" replace />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;

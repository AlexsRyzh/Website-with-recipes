import "./reset.scss";
import "./fonts/fonts.scss";
import { BrowserRouter } from "react-router-dom";
import RootRouter from "./router/RootRouter";

function App() {
	return (
		<BrowserRouter>
			<RootRouter />
		</BrowserRouter>
	);
}

export default App;

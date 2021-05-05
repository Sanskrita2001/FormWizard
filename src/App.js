import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Result from './Result';
import Header from './Components/Header';

function App() {
	return (
		<>
			<Router>
				<Header />
				<Switch>
					<Route exact path='/' component={Step1}></Route>
					<Route exact path='/step2' component={Step2}></Route>
					<Route exact path='/step3' component={Step3}></Route>
					<Route exact path='/result' component={Result}></Route>
				</Switch>
			</Router>
		</>
	);
}

export default App;

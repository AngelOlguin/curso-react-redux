import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link }  from 'react-router-dom';



class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			gists: null
		}
	}
	componentDidMount() {
		fetch('https://api.github.com/gists')
		.then(res => res.json())
		.then(gists => this.setState({
			gists
		}));
	}
	render () {
		const styleSidebar = {
			width: '300px',
			backgroundColor: 'yellow',
			float: 'left',
			borderRadius: '40px'
		}
		const styleContent = {
			width: '500px',
			float: 'left',
			backgroundColor: 'blue'
		}
		const { gists } = this.state;
		return (
			<Router>
				<div>
					<div style={styleSidebar}> 
						<h1> Lista de Gits </h1>
						<ul>
							{ gists ? gists.map((x ,i) => (
								<li key={i}> 
									<Link to={`/g/${x.id}`}>
										{x.description || '[ no hay description]'} 
									</Link>
								</li>) 
							) : (<p> loading ... </p>)
							}
						</ul>
					</div>
					<div style={styleContent}>
						<h1> Detalle </h1>
						<Route path="/g/:gistId" render={({match}) => {
							let item = gists.find(g => g.id === match.params.gistId)
							return<div> <h1> {item.id} </h1>	<h2> {item.created_at} </h2></div>
						}} />
					</div>
				</div>
			</Router>
		)
	}
}
ReactDOM.render(<App />, document.getElementById('root'))


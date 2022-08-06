import React,{ useState } from "react"
import ReactDOM from "react-dom"
import Resume from "./components/Resume"
class App extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        value: '',
        resumes:[
            {
                id: '1',
                name: 'Sentayhu gulema',
                experince: 'I  have good Experinace on React',
                skills1: [
                    { id: '1', skill: 'Angular'},
                    { id: '2', skill: 'PHP'},
                    { id: '3', skill: 'ASP.Net'}
                ]
            },
            {
                id: '2',
                name: 'Zelalem Mogus',
                experince: 'I  have good Experinace on Vue',
                skills1: [
                    { id: '1', skill: 'Ruby'},
                    { id: '2', skill: 'Java'},
                    { id: '3', skill: 'C#'}
                ]
            }
            ],
        
        };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});   
    }

    handleSubmit(event) {
        //this.setState({ resumes: [...this.state.resumes, this.state.value] })
        event.preventDefault();
    }
    render() {
        
        return (
                <>
                <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.value} onChange={this.handleChange}/>
                <input type="submit" value="Submit" />
                </form>
                <Resume skills1={this.state.resumes}/>
                </>
            )
    }
}

ReactDOM.render(<App/>, document.getElementById("root"))
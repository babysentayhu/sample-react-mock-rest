import React from "react"

class Resume1 extends React.Component {
    render() {

        return (
            <>
                <div>
                    <div >
                    {this.props.skills1.map((item) => <div key={item.id}>
                    <h3>{item.name}</h3>
                    {item.experince}
                    <ul>
                    
                    {item.skills1.map((skill) =><li key={skill.id}>{skill.skill}</li>)}
                    
                    </ul>
                    </div>)}
                    
                    </div>
                </div>
            </>
        )
    }
}

export default Resume1
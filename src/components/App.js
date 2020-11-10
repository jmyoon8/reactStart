import React from 'react';

class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:""
        }
        this.click=this.click.bind(this);
    }

    click(){
        this.setState({
            name:"yoondn"
        });
    }
    render(){
        return(
            <div>
                <button onClick={this.click}>눌러바</button>
                <h1>Hello!!!!!!!!!{this.state.name}</h1>
            </div>
        );
    }
}

export default App;
//module.export = App; 와 같다.

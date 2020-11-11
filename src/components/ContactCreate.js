import React from 'react';

export default class ContactCreate extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:"",
            phone:""
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleClick=this.handleClick.bind(this)
        this.handleKeyPress=this.handleKeyPress.bind(this)
    }
    
    handleChange(e){
        let nextState={};
        nextState[e.target.name]=e.target.value;
        this.setState(nextState)
    }
    handleClick(){
        const contact={
            name : this.state.name,
            phone : this.state.phone
        }
        //이후에 이 콤포넌트를 render한 콤포넌트에서 props를 정해준다(매소드형식으로)또한 파라미터도 자동으로 전달한다
        this.props.onCreate(contact)
        this.setState({
            name:"",
            phone :""
        })
    }
    handleKeyPress(e){
        if(e.charCode===13){
            this.handleClick();
        }
    }
    render(){
        return(
        <div>
            <h2>Create Contact</h2>
            <p>
                <input type="text" name="name" placeholder="name" value={this.state.name} onChange={this.handleChange}/>
                <input type="text" name="phone" placeholder="phone" value={this.state.phone} onChange={this.handleChange} onKeyPress={this.handleKeyPress}/>
            </p>
            <button onClick={this.handleClick}>Create</button>
        </div>
        )
    }

}


import React from 'react';

export default class ContactDetails extends React.Component{
   constructor(props){
        super(props)
        this.state={
            isEdit : false,
            name:"",
            phone:""
        }
        this.handleTogge=this.handleTogge.bind(this)
        this.handleOnchange=this.handleOnchange.bind(this)
        this.handleEdit=this.handleEdit.bind(this)
        this.handleKeyPress=this.handleKeyPress.bind(this)
   }
    handleTogge(){
        if(!this.state.isEdit){
            this.setState({
                name:this.props.contact.name,
                phone:this.props.contact.phone
            })
            console.log(this.state.isEdit)
        }else{
            this.handleEdit();

            console.log(this.state.isEdit)
        }
       this.setState({
           isEdit:!this.state.isEdit
       })
   }
   handleOnchange(e){
        let change={}
        change[e.target.name]=e.target.value
        this.setState(change);
   }

   handleEdit(){
       this.props.onEdit(this.state.name,this.state.phone);
   }
   handleKeyPress(e){
        if(e.charCode===13){
            this.handleTogge()
        }
   }
    render(){
        
        const details =(

            <div>
                <h2>details</h2>
                <p>{this.props.contact.name}</p>
                <p>{this.props.contact.phone}</p>
            </div>
        
        );
        
        const edit = (<div>
                        <input type="text" name="name" placeholder="name" value={this.state.name} onChange={this.handleOnchange}/>
                        <br/>
                        <input type="text" name="phone" placeholder="phone" value={this.state.phone} onChange={this.handleOnchange} onKeyPress={this.handleKeyPress}/> 
                    </div>
                    );
        const view = this.state.isEdit ? edit: details
        const blank = (<div>Not Selected</div>);
        return(
            <div>
                {this.props.isSelected != -1 ? view : blank}
                <button onClick={this.handleTogge}>{this.state.isEdit? 'OK':'Edit'}</button>
                <button onClick={this.props.onRemove}>Remove</button>
            </div>
        )
    }

}

ContactDetails.defaultProps={
    contact : {
        name : "",
        phone : ""
    },
    onRemove : ()=>{console.log("onRemove is not defined")},
    onEdit : ()=>{console.log("onEdit is not defined")}
};
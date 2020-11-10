import React from 'react';

export default class ContactDetails extends React.Component{
   
    render(){
        const details =(

            <div>
                <h2>details</h2>
                <p>{this.props.contact.name}</p>
                <p>{this.props.contact.phone}</p>
            </div>
        
        );

        const blank = (<div>Not Selected</div>);
        return(
            <div>
                {this.props.isSelected != -1 ? details : blank}
            </div>
        )
    }

}
ContactDetails.defaultProps={
    contact : {
        name : "",
        phone : ""
    }
};
import React from 'react'

export default class CntactInfo extends React.Component{
    render(){
        return(
            //온클릭 매소드를 전달한다.
            <div onClick={this.props.onClick}>
                {this.props.contact.name}
            </div>
        )
    }
    
}

import React from 'react'
import ContactInfo from'./ContactInfo';
import ContactDetails from'./ContactDetails';
import ContactCreate from'./ContactCreate';
import update from'react-addons-update';

export default class Contact extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            selectedKey:-1,
            keyword:'',
            contactData: [{
                name: 'Abet',
                phone: '010-0000-0001'
            }, {
                name: 'Betty',
                phone: '010-0000-0002'
            }, {
                name: 'Charlie',
                phone: '010-0000-0003'
            }, {
                name: 'David',
                phone: '010-0000-0004'
            }]
        };
        this.handleChange=this.handleChange.bind(this);
        this.handleClick=this.handleClick.bind(this)
        this.handleCreate=this.handleCreate.bind(this)
        this.handleRemove=this.handleRemove.bind(this)
        this.handleEdit=this.handleEdit.bind(this)
    }
    
    handleChange(e){
        this.setState({
            //e는 event의 약자로써 e.target은 이벤트가 일어난 element를 지칭한다.
            keyword : e.target.value
        })
    }
    handleClick(key){
        this.setState({
            selectedKey : key
        });
        console.log(key)
    }
    //업데이트는 수정된 배열을 반환한다.
    handleCreate(contact){
        this.setState({
            contactData : update(this.state.contactData,{$push:[contact]})
        })
    }
    handleRemove(){
        if(this.state.selectedKey<0){
            return;
        }
        this.setState({
            contactData: update(this.state.contactData,{$splice:[[this.state.selectedKey,1]]}),
            selectedKey : -1
        });
    }
    handleEdit(name,phone){
        this.setState({
            contactData:update(this.state.contactData,{
                [this.state.selectedKey]:{
                    name:{$set:name},
                    phone:{$set:phone}
                }
            })
        })
    }
    render() {
        const mapToComponents = (data) => {
            //DATA가 입력되기전에 한번 필터링시켜준다.

            data.sort();//글자 오름차순/내림차순 파라미터로 ()=>{return -1}을 입력
                        //숫자 오름차훈/내림차순 파라미터로 (a,b)=>{return a-b}/(a,b)=>{return (a-b)*-1}울 준다.
            data=data.filter(
                //인덱스오브 : 어떠한 값이 들어있으면 0 아니면 -1 DATA안에 CONTACT라는 값이 다음과 같은 조건일 경우 리턴 아닐경우 리턴 X
                (contact)=>{return contact.name.toLowerCase().indexOf(this.state.keyword.toLowerCase()) ==0;}

                )
            return data.map((contact, i) => {
                //불러온 콤포넌트에 직접적으로 이벤트를 주는건 불가능 콤포넌트에 직접적으로 props을 전달해야한다 contactInfo.js참고

                return (<ContactInfo contact={contact} key={i} onClick={()=>{this.handleClick(i)}}/>);
                                                                //
            });
        };
        
        return (
            <div>
                <h1>Contacts</h1>
                <input name="keyword"
                       value={this.state.keyword}
                       onChange={this.handleChange}
                       placeholder="Search"></input>

                <div>{mapToComponents(this.state.contactData)}</div>
                <br/>
                <ContactDetails
                contact={this.state.contactData[this.state.selectedKey]}
                isSelected={this.state.selectedKey}
                onRemove={this.handleRemove}
                onEdit={this.handleEdit}
                />
                <ContactCreate 
                    onCreate={this.handleCreate}
                />
            </div>
        );
    }
}
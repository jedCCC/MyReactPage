import React from 'react';
import {Button, message} from 'antd';

class App extends React.Component{
    handleClick=()=>{
        message.success("success")
    }

    render(){
        return <Button type="primary" onClick={this.handleClick}> primary</Button>

    }
}

export default App;
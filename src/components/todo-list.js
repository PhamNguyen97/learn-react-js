import React, { Component } from 'react';
import classNames from 'classnames';
import {ListGroup} from 'react-bootstrap';

class TodoList  extends Component{
    constructor(){
        super();
        this.data = ['eat','run','sleep'];
    }
    // {this.data.map((item)=> <li className={classNames('list','list-item')}>{item}</li>)}
    render(){
    
        return (
                <ListGroup className={classNames('list')}>
                    {this.data.map((item)=><ListGroup.Item className={classNames('list', 'list-item')}>{item}</ListGroup.Item>)}
                </ListGroup>                  
        );
    }

}

export default TodoList;
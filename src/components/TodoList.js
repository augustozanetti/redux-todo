import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import * as todoActions from '../actions/todos';

class TodoList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            text: ''
        }

        this.addNewTodo = this.addNewTodo.bind(this);
    }
    
    addNewTodo() {
        this.props.addTodo(this.state.text);
        this.setState({text: ''});
    }

    render() {
        return (
            <div>
                <ul>
                    {this.props.todos.map(item => (
                       <li key={item.id}>{item.text}</li> 
                    ))}
                </ul>    
                <input type="text" value={this.state.text} onChange={e => this.setState({text: e.target.value})}/>
                <button onClick={this.addNewTodo}>Adicionar todo</button>
            </div>
            
        )
    }
}

const mapStateToProps = state => ({
    todos: state.todos
})

const mapDispatchToProps = dispatch => bindActionCreators(todoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
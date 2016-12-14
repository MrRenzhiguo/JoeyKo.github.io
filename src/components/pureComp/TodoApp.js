/**
 * TodoList组件
 * Created by John on 2016/11/28.
 */

import React from 'react';

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {items: [], text: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div className="Todo">
                <h2>todoApp</h2>
                <form onSubmit={this.handleSubmit}>
                    <input className="input-todo" onChange={this.handleChange} placeholder="待处理事件" value={this.state.text}/>
                    <button className="btn btn-todo">添加</button>
                </form>
                <TodoList items={this.state.items}/>
            </div>
        );
    }

    handleChange(e) {
        this.setState({text: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        let newItem = {
            text: this.state.text,
            id: Date.now()
        };
        newItem.text && this.setState((prevState) => ({
            items: prevState.items.concat(newItem),
            text: ''
        }))
    }

}

class TodoList extends React.Component {
    render() {
        return (
            <ul>{this.props.items.map(item => (
                <li key={item.id}>
                    <input type="checkbox" id={"checkboxTodo-" + item.id} value={item.text}/>
                    <label className="control-checkbox" htmlFor={"checkboxTodo-" + item.id}>
                        {item.text}
                    </label>
                </li>
            ))}
            </ul>
        );
    }
}

export default TodoApp;
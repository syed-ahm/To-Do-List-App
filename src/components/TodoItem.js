import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hello : 1
        }
    }

    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? "line-through" : 'none'
        }
    }

    render() {
        const { id, title } = this.props.todo;

        return(
            <div style = {this.getStyle()}>
                <p>
                    <input type='checkbox' onChange = {this.props.markComplete.bind(this, id)}/> {''}
                    { title }
                    <button style = {btnStyle} onClick = {this.props.delTodo.bind(this, id)}>x</button>
                </p>
            </div>
        )
    }
}

// PropTypes
TodoItem.propTypes = {
    todos: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired
}

// Styles
const btnStyle = {
    background : "#FF0000",
    color: '#fff',
    border: 'none',
    padding: '5px 8px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}


export default TodoItem
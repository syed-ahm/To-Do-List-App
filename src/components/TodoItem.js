import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {

    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? "line-through" : 'none'
        }
    }

    render() {
        return(
            <div style = {this.getStyle()}>
                <p>{ this.props.todo.title }</p>
            </div>
        )
    }
}

// PropTypes
TodoItem.propTypes = {
    todos: PropTypes.object.isRequired
}


export default TodoItem
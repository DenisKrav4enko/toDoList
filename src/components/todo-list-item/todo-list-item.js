import React, { Component } from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {

    render() {

        const { label, onDeleted,
            onToggleImportant, onToggleDone,
            important, done } = this.props;

        let classNames = 'todo-list-item';
        if (done) {
            classNames += ' done';
        }

        if (important) {
            classNames += ' important';
        }

        return (
            <span className={classNames}>
              <span
                  className="todo-list-item-label"
                  onClick={ onToggleDone }>
                { label }
              </ span>

            <span className="buttons">
                <button type="button"
                        className="btn margin-item btn-outline-success" onClick={onToggleImportant}>
                        <i className="bi bi-exclamation" />
                </ button>

                <button type="button"
                        className="btn margin-item btn-outline-success" onClick={onDeleted}>
                    <i className="bi bi-trash" />
                </ button>
            </span>

        </ span>
        );
    }
}

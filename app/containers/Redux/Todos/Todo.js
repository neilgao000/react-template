import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.css';

export const Todo = ({ TodoList }) => (
    <ul className={styles.list}>
        {
            TodoList.map((item, index) => (
                <li key={`${item.id} ${index.toString()}`}>
                    <a href={`${item.link}`} target="_blank">{item.text}</a>
                </li>
            ))
        }
    </ul>
);

Todo.propTypes = {
    TodoList: PropTypes.array,
};

import React, { useEffect, useRef, useState } from 'react';
import Alert from './Alert';
import './GroceryBud.css';
import List from './List';

const getLocalStorage = () => {
    let list = localStorage.getItem('list');
    if (list) {
        return (list = JSON.parse(localStorage.getItem('list')));
    } else {
        return [];
    }
}

export default function GroceryBud() {
    const [name, setName] = useState('');
    const [list, setList] = useState(getLocalStorage());
    const [editID, setEditID] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [alert, setAlert] = useState({ show: false, type: '', msg: '' });
    const inputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name) {
            showAlert(true, 'danger', 'Please enter a value');
        } else if (name && isEditing) {
            setList(list.map(item => {
                if (item.id === editID) {
                    return { ...item, title: name }
                }
                return item;
            }));
            setName('');
            setIsEditing(false);
            setEditID(null);
            showAlert(true, 'success', 'Value changed');
        } else {
            let newItem = { id: new Date().getTime().toString(), title: name };
            setList([...list, newItem]);
            setName('');
            showAlert(true, 'success', 'item added to list');
        }
    }

    const showAlert = (show = false, type = '', msg = '') => {
        setAlert({ show, type, msg });
    }

    const clearList = () => {
        setList([]);
        showAlert(true, 'danger', 'list cleared');
    }

    const editItem = (id) => {
        const specificItem = list.find(item => item.id === id);
        setIsEditing(true);
        setEditID(id);
        setName(specificItem.title);
        inputRef.current.focus();
    }

    const removeItem = (id) => {
        showAlert(true, 'danger', 'item removed');
        setList(list.filter(item => item.id !== id));
    }

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list));
    }, [list]);

    return (
        <section className='section-center'>
            <form className='grocery-form' onSubmit={handleSubmit}>
                {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
                <h3>grocery bud</h3>
                <div className='form-control'>
                    <input type='text' ref={inputRef} className='grocery' placeholder='e.g. eggs'
                        value={name} onChange={(e) => setName(e.target.value)} />
                    <button type='submit' className='submit-btn'>
                        {isEditing ? 'edit' : 'submit'}
                    </button>
                </div>
            </form>
            {list.length > 0 && <div className='grocery-container'>
                <List items={list} editItem={editItem} removeItem={removeItem} />
                <button className='clear-btn' onClick={clearList}>
                    clear items
                </button>
            </div>}
        </section>
    )
}
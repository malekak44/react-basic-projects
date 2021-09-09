import React, { useEffect, useState } from 'react';
import './GroceryBud.css';
import Alert from './Alert';
import List from './List';

const getLocalStorage = () => {
    let list = localStorage.getItem("list");
    if (list) {
        return (list = JSON.parse(localStorage.getItem("list")));
    } else {
        return [];
    }
}

export default function GroceryBud() {
    const [name, setName] = useState('');
    const [list, setList] = useState(getLocalStorage());
    const [isEditing, setIsEditing] = useState(false);
    const [editID, setEditID] = useState(null);
    const [alert, setAlert] = useState({ show: false, msg: '', type: '' });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name) {
            showAlert(true, "danger", "Please enter a value");
        } else if (name && isEditing) {
            setList(list.map(item => {
                if (item.id === editID) {
                    return { ...item, title: name };
                }
                return item;
            }));

            setName('');
            setEditID(null);
            setIsEditing(false);
            showAlert(true, "success", "value changed");
        } else {
            showAlert(true, 'success', 'item added to the list');
            const newItem = { id: new Date().getTime().toString(), title: name };
            setList([...list, newItem]);
            setName('');
        }
    }

    const showAlert = (show = false, type = '', msg = '') => {
        setAlert({ show, type, msg });
    };

    const editItem = (id) => {
        const element = list.find(item => item.id === id);
        setEditID(id);
        setIsEditing(true);
        setName(element.title);
    }

    const removeItem = (id) => {
        showAlert(true, "danger", "item removed from list");
        setList(list.filter(item => item.id !== id));
    }

    const clearList = () => {
        showAlert(true, 'danger', 'empty list');
        setList([]);
    }

    useEffect(() => {
        localStorage.setItem("list", JSON.stringify(list));
    }, [list]);

    return (
        <section className='section-center'>
            <form className='grocery-form' onSubmit={handleSubmit}>
                {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}

                <h3>grocery bud</h3>
                <div className='form-control'>
                    <input
                        type='text'
                        className='grocery'
                        placeholder='e.g. eggs'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <button type='submit' className='submit-btn'>
                        {isEditing ? 'edit' : 'submit'}
                    </button>
                </div>
            </form>
            {list.length > 0 && (
                <div className='grocery-container'>
                    <List items={list} removeItem={removeItem} editItem={editItem} />
                    <button className='clear-btn' onClick={clearList}>
                        clear items
                    </button>
                </div>
            )}
        </section>
    )
}
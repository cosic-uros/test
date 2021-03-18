import { useState, useEffect } from 'react';
import axios from 'axios';

import { Edit, Delete } from './Delete';

import Input from './Input';

const Home = () => {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const fetchData = async (url) => {
        const { data } = await axios.get(url);
        setData(data);
    }

    const handleDel = async (id) => {
        try {
            const res = await fetch(`http://localhost:5000/api/${id}`, {
                method: 'DELETE'
            });

            if(res) {
                setData(data.filter(item => item._id !== id));
            }

        } catch (err) {
            console.error(err.message);
        }
    } 

    const handleEdit = async () => {

    }

    useEffect(() => {
        fetchData('http://localhost:5000/api');
        setLoading(false);
    }, []);

    useEffect(() => {
        fetchData('http://localhost:5000/api');
        setLoading(false);
    }, [data]);

    return (
        <div className = 'container'>
            {
                loading ? 'Loading...' :
                <div>
                    <ul className = 'list-group mt-5'>
                        {
                            data.map(item => (
                                <li key = { item._id } className = 'list-group-item d-flex justify-content-between'>
                                    { item.description }
                                    <div>
                                        <Delete id = { item._id } handleDel = { handleDel } />
                                        <Edit id = { item._id } handleEdit = { handleEdit } />
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                    <Input />
                </div>
            }
        </div>
    )
}

export default Home

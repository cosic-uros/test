import { useState } from 'react';

const Input = () => {

    const [description, setDescription] = useState('');

    const handleInputChange = (e) => {
        setDescription(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const body = { description };
            const res = await fetch('http://localhost:5000/api', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            });

            if(res) {
                setDescription('');
            }
        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <div className = 'container'>
            <h1 className = 'text-center mt-5'>MERN TODO</h1>
            <form className = 'd-flex mt-5' onSubmit = { handleSubmit }>
                <input 
                    type = "text" 
                    className = 'form-control'
                    value = { description }
                    onChange = { handleInputChange }
                />
                <button className = 'btn btn-success'>Add</button>
            </form>
        </div>
    )
}

export default Input;

import { useState } from 'react'

export default function AddBlog({ onSubmit }) {

    const [title, setTitle] = useState('')

    function articleSubmit(e, f) {
        e.preventDefault();
        if (title === '') return;
        setTitle('');
        f(title);
    }


    return (
        <div className='container'>
            <form className='form' onSubmit={(event) => articleSubmit(event, onSubmit)}>
                <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} placeholder={`Titolo dell'articolo`} />
                <button type='submit'>Aggiungi</button>
            </form>
        </div>
    )
}
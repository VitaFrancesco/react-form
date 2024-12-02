import { useState } from 'react'
import style from './AddBlog.module.css'

export default function AddBlog({ onSubmit, lastId }) {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [image, setImage] = useState('../img/placeholder')
    const [published, setPublished] = useState(true)
    const [tags, setTags] = useState([]);


    function articleSubmit(e, f) {
        e.preventDefault();
        if (title === '') return;
        const newPost = {
            id: lastId,
            title: title,
            image: image,
            content: content,
            tags: [],
            published: published,
        }
        console.log(newPost)
        setTitle('');
        setContent('');
        setImage('../img/placeholder');
        setPublished(true)
        f(newPost);
    }


    return (
        <div className='container'>
            <form className='form' onSubmit={(event) => articleSubmit(event, onSubmit)}>
                <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} placeholder={`Titolo dell'articolo`} />
                <select value={image} onChange={(e) => setImage(e.target.value)}>
                    <option value="../img/post2">Koeniggseg</option>
                    <option value="../img/post4">Panorama</option>
                    <option value="../img/post3">Romani</option>
                </select>
                <label htmlFor="select-image">Seleziona l'immagine</label>
                <textarea className={style.textarea} placeholder='Scrivi il contenuto del post qui...' onChange={(e) => setContent(e.target.value)} value={content} ></textarea>
                <div className={style.dFlex}>
                    <div className={style.tags}>
                        <div>
                            <input type="checkbox" id='html' value='html' onChange={(e) => setTags([...tags, e.target.value])} />
                            <label htmlFor="html">html</label>
                        </div>
                        <div>
                            <input type="checkbox" id='css' value='css' onChange={(e) => setTags([...tags, e.target.value])} />
                            <label htmlFor="css">css</label>
                        </div>
                        <div>
                            <input type="checkbox" id='js' value='js' onChange={(e) => setTags([...tags, e.target.value])} />
                            <label htmlFor="js">js</label>
                        </div>
                        <div>
                            <input type="checkbox" id='php' value='php' onChange={(e) => setTags([...tags, e.target.value])} />
                            <label htmlFor="php">php</label>
                        </div>
                    </div>
                    <div>
                        <input type="radio" id="published-true" value={true} checked={published === true} onChange={() => setPublished(true)} />
                        <label htmlFor="published-true">Pubblico</label>
                    </div>
                    <div>
                        <input type="radio" id="published-false" value={false} checked={published === false} onChange={() => setPublished(false)} />
                        <label htmlFor="published-false">Privato</label>
                    </div>
                    <button type='submit'>Aggiungi</button>
                </div>
            </form>
        </div>
    )
}
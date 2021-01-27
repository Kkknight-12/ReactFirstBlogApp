import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
    const [ title, setTitle ] = useState('');
    const [ body, setBody ] = useState('');
    const [ author, setAuthor ] = useState('knight');
    const [ isPending, setIsPending ] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author }

        setIsPending(true)
        
        fetch('http://localhost:8000/blogs/', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('New Blog Added')

            setIsPending(false);

            // history.go(-1);
            history.push('/ReactFirstBlogApp/')
        })
    }
    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit = {handleSubmit}>
                {/* title */}
                <label>Blog Title</label>
                <input type="text" required
                value= {title} 
                onChange = { (e) => setTitle( e.target.value ) }/>
                {/* body */}
                <label>Blog Body</label>
                <textarea required
                value = {body}
                onChange={ (e) => setBody( e.target.value ) }
                ></textarea>
                {/* author */}
                <label>Blog Author</label>
                <select
                value = { author }
                onChange = { (e) => setAuthor(e.target.value )}>
                    <option value="Knight">Knight</option>
                    <option value="Luffy">Lufffy</option>
                </select>
               { !isPending  && <button>Add Blog</button> } 
               { isPending  && <button disabled>Adding blog...</button> } 
            </form>
        </div>
     );
}
 
export default Create;
import { useState } from 'react'
import React from 'react'

const Editblog = ({oncreate}) => {
    const [title,setTitle] = useState("")
    const [author,setAuthor] = useState("")
    const [body,setBody] = useState("")

    const onsubmit = (e) =>{
        e.preventDefault();

        if(!title || !author || !body){
            return alert("please input data")
        }

        const data = new Date()
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let date = `${months[data.getMonth()]} ${data.getFullYear()}`;
        oncreate({title,author,body,date})
        setAuthor('')
        setBody('')
        setTitle('')
    }

  return (
    <form className="form" >
        <div className="formcontrol">
            <label >Title</label>
            <input value={title} onChange={(e)=>setTitle(e.target.value)} className="text" type="text" placeholder='input the title' />
        </div>
        <div className="formcontrol">
            <label >author</label>
            <input value={author} onChange={(e)=>setAuthor(e.target.value)} className="text" type="text" placeholder='input your name'/>
        </div>
        <div className="formcontrol">
            <label >body</label>
            <textarea value={body} onChange={(e)=>setBody(e.target.value)} placeholder='write your blogs here' cols="30" rows="20"></textarea>
        </div>
        <button onClick={onsubmit} className='btn-block'>Submit</button>
    </form>
  )
}

export default Editblog
import React from 'react'
import { Link } from 'react-router-dom'
import {FaTrash} from "react-icons/fa"

const Blogpreview = ({blogs, ondelete}) => {
  return (
    <div className='blog-preview'>
        {
            blogs.map(blog => (
                <div className="blogs" key={blog.id}>
                    <div className='del-icon'>
                    <Link to={`/blog/${blog.id}`}><h1>{blog.title}</h1></Link>
                    <FaTrash onClick={()=>ondelete(blog.id)} style={{
                      color: "red",
                      cursor: "pointer"
                    }} />
                    </div>
                    <p className='body'>{blog.body}</p>
                    <p className='author'>created by {blog.author}</p>
                </div>
            ))
        }
    </div>
  )
}

export default Blogpreview
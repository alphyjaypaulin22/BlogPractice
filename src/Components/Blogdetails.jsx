import {useParams} from "react-router-dom"
import React from 'react'


const Blogdetails = ({ blog}) => {
  const {id} = useParams()
  return (
    <>
      {
        blog.filter(blo => blo.id === Number(id)).map(b => (
          <div className="blog" key={b.id}>
            <h1 className="title">{b.title}</h1>
            <h3 className="author">Created by {b.author} in {b.date}</h3>
            <p className="body">{b.body}</p>
          </div>
        ))
      }
    </>
  )
}

export default Blogdetails
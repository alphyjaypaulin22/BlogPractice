import { useState,useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'
import Blogpreview from './Blogpreview'
import Createblog from './Createblog'
import Blogdetails from './Blogdetails'
import Navbar from './Navbar'


const Homepage = () => {
  const [blogs,setBlogs] = useState([])

  useEffect(()=>{
    const retrieve = async () =>{
      const retData = await getData()
      setBlogs(retData)
    }
    retrieve()
  },[blogs])
  const getData = async () =>{
    try{
      const res = await fetch("http://localhost:5000/posts")
      const data = await res.json()
      return data
    }catch(err){
      console.log(err.message())
    }
  }
  const createBlog = async (object) =>{
    const res = await fetch("http://localhost:5000/posts",{
      method: "POST",
      headers:{
        "content-type":"application/json"
      },
      body: JSON.stringify(object)
    })
    const data = res.json()

    setBlogs([...blogs,{data}])
  }
  const Deleteblogs = async (id) =>{
    await fetch(`http://localhost:5000/posts/${id}`,{
      method: "DELETE"
    })
    
    setBlogs(blogs.filter(blog => blog.id !== id ))
  }
  return (
    <div>
        <Router>
          <Navbar/>
          <Routes>
            <Route path='' element={<Blogpreview ondelete={Deleteblogs} blogs={blogs}/>}/>
            <Route path='/Create' element={<Createblog oncreate={createBlog}/>}/>
            <Route path='/blog/:id' element={<Blogdetails blog={blogs}/>}/>
          </Routes>
        </Router>
       
    </div>
  )
}

export default Homepage
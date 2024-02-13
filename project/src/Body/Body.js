import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
// import data from '../../public/apidata.json'

const Body = () => {

const [images, setImages] = useState([])

useEffect(()=> {
  const fetchImage = async() =>{
    try{
      const response = await fetch("/apidata.json")
      const data = await response.json()
      console.log(data)
      setImages(data)
    }catch(err){
      console.error(err)
    }
  } 
  fetchImage()
},[])

    
  return (
    <div>
      {images.map((image) => (
        <div key={image.id}>
          <Card image={image.image} name={image.name}/>
        </div>
      ))}
      </div>
  )
}

export default Body
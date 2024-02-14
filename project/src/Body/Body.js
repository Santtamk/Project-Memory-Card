import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import './bodystyles.css'

const Body = () => {

const [images, setImages] = useState([])
const [click, setClicked] = useState(false)

useEffect(()=> {
  const fetchImage = async() =>{
    try{
      const response = await fetch("/apidata.json")
      const data = await response.json()
      // console.log(data)
      setImages(data)
    }catch(err){
      console.error(err)
    }
  } 
  fetchImage()
},[])

// const recorderdClick = () => {
//   setClicked(true);
// }

useEffect(() => {
  const shuffleCard = () => {
    // when we click on card it runs Math.random the map so that the alignment changes.
      // let id = 0 + Math.floor(Math.random()*(10 - 0 + 1))
      setImages(data(0 + Math.floor(Math.random()*(10 - 0 + 1))))
    }
},[])

    
  return (
    <div className='body'>
      {images.map((image) => (
          <div key={image.id}>
            <Card image={image.src} name={image.name}/>
        </div>
      ))}
      </div>
  )
}

export default Body

// on click of the card that it rearranges randomly 
import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./bodystyles.css";
import Header from "../Header/Header";


const Body = () => {
  const [images, setImages] = useState([]);
  const [score, setScore] = useState([])
  const [currentScore, setCurrentScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch("/apidata.json");
        const data = await response.json();
        // console.log(data)
        setImages(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchImage();
  }, []);


  const shuffleCard = (clickedId) => {
    // when we click on card it runs Math.random so that the card shuffles
    //using the Fisher-Yates shuffle algorithm
    const shuffleImages = [...images];
    // console.log('before:' + shuffleImages)
    for (let i = shuffleImages.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffleImages[i], shuffleImages[j]] = [
        shuffleImages[j],
        shuffleImages[i],
      ];
    }
    setImages([...shuffleImages]);

    if (score.includes(clickedId)) {
      setScore([]);
      setCurrentScore(0);
    } else if (!score.includes(clickedId) || score.length === 0) {
      setScore((prevScore)=>[...prevScore, clickedId]);
      setCurrentScore((prevCurrentScore)=> prevCurrentScore + 1);
      setBestScore((prevBestScore) => Math.max(bestScore, currentScore))
    }
  };
  console.log("score: " + currentScore);
  console.log("bestScore: " + bestScore);

  return (
    <div>
      <Header currentScore={currentScore} bestScore={bestScore}/>
    <div className="body">
      {images.map((image) => (
        <div
        key={image.id}
        onClick={() => shuffleCard(image.id)}
        value={image.id}
        >
          <Card image={image.src} name={image.name} />
        </div>
      ))}
    </div>
      </div>
  );
};

export default Body;

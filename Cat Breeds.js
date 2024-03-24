import React from 'react'

export default function CatBreeds() {
  return (
    <div>
      {
        Array.from(Array(10).keys()).map((index) => {
          return (
             <img 
             key = {`CatBreeds-${index}`}
             src = { require(`../images/${index}.jpg`)} 
             alt={`CatBreeds - ${ index }`} 
             width={400} 
             height={300}
             />
          );
        })}
    </div>
  );
}

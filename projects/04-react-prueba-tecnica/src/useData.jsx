import React, { useEffect, useState } from 'react'
import { getFact } from './utils'

export const useData = () => {
  const [randomFact, setRandomFact] = useState('')
  // const [firstWord, setFirstWord] = useState('')
  const [urlCatImage, setUrlCatImage] = useState('')

  // // fact
  const updateFact = async () => {
    const factData = await getFact()
    setRandomFact(factData)
  }

  const getCatImage = async () => {
    // word
    const words = randomFact.split(' ')
    const word = words[0].toLowerCase()
    setFirstWord(word)
    // image
    const img = await fetch(`https://cataas.com/cat/says/${word}?fontSize=50&fontColor=red`)
    setUrlCatImage(img.url)
  }

  const getNewFact = async () => {
    const newFact = await updateFact()
    return newFact
  }

  useEffect(() => {
    if (!randomFact) return
    getCatImage()

  }, [randomFact])

  // useEffect(() => {
  //   updateFact()
  // }, [])

  // return (
  //   <>
  //     <h1>Technical test: Cat's app</h1>
  //     <div style={{ display: 'flex', gap: '40px' }}>
  //       <section>
  //         <h2>Random fact</h2>
  //         <p>{randomFact}</p>
  //         <h2>First word</h2>
  //         <p style={{ fontWeight: 'bold' }}>{firstWord}</p>
  //         <button onClick={getNewFact}>Other fact</button>
  //       </section>
  //       <section>
  //         <h2>Image</h2>
  //         <img src={urlCatImage} alt={`image-${firstWord}`} height={500} />
  //       </section>
  //     </div>
  //   </>
  // )
  return { randomFact, getNewFact, urlCatImage }
}

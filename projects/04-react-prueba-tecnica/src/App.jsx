import React, { useEffect, useState } from 'react'

export const App = () => {
  const [randomFact, setRandomFact] = useState('')
  const [firstWord, setFirstWord] = useState('')
  const [srcImage, setSrcImage] = useState('')

  const newFact = async () => {
    // fact
    const fact = await fetch('https://catfact.ninja/fact')
    const data = await fact.json()
    const factData = data.fact
    setRandomFact(factData)
    // word
    const words = factData.split(' ')
    const word = words[0].toLowerCase()
    setFirstWord(word)
    // image
    const img = await fetch(`https://cataas.com/cat/says/${word}?fontSize=50&fontColor=red`)
    setSrcImage(img.url)
  }

  const otherFact = () => {
    newFact()
  }

  useEffect(() => {
    newFact()
  }, [])

  return (
    <>
      <h1>Technical test: Cat's app</h1>
      <div style={{ display: 'flex', gap: '40px' }}>
        <section>
          <h2>Random fact</h2>
          <p>{randomFact}</p>
          <h2>First word</h2>
          <p style={{ fontWeight: 'bold' }}>{firstWord}</p>
          <button onClick={otherFact}>Other fact</button>
        </section>
        <section>
          <h2>Image</h2>
          <img src={srcImage} alt={`image-${firstWord}`} height={500} />
        </section>
      </div>
    </>
  )
}

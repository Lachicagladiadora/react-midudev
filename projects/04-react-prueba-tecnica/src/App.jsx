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
    console.log({ data })
    console.log({ factData })
    // word
    const words = factData.split(' ')
    console.log({ words })
    const word = words[0].toLowerCase()
    console.log({ word })
    setFirstWord(word)
    // image
    const img = await fetch(`https://cataas.com/cat/says/${word}?fontSize=50&fontColor=red`)
    console.log({ img })
    // const image = await img.json()
    // console.log({ image })
    setSrcImage(img.url)
    // console.log({ srcImage })
  }


  useEffect(() => {
    newFact()

  }, [])




  return (
    <>
      <h1>Prueba tecnica</h1>
      <section>
        <h2>hecho aleatorio</h2>
        <p>{randomFact}</p>
      </section>
      <section>
        <h2>first word del hecho aleatorio</h2>
        <p>{firstWord}</p>
      </section>
      <section>
        <h2>gato con la first word del hecho aleatorio</h2>
        <p>{srcImage}</p>
        <img src={srcImage} alt={`image-${firstWord}`} />
      </section>
    </>
  )
}

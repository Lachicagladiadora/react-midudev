import React, { useEffect, useState } from 'react'
import { getFact } from './utils'

export const useData = () => {
  const [randomFact, setRandomFact] = useState('')
  const [urlCatImage, setUrlCatImage] = useState('')

  // fact
  const updateFact = async () => {
    const factData = await getFact()
    setRandomFact(factData)
  }

  const getCatImage = async () => {
    try {
      // word
      const words = randomFact.split(' ')
      const word = words[0].toLowerCase()
      // image
      const img = await fetch(`https://cataas.com/cat/says/${word}?fontSize=50&fontColor=red`)
      setUrlCatImage(img.url)

    } catch (error) {
      console.log(error.message)
    }
  }

  const getNewFact = async () => {
    const newFact = await updateFact()
    return newFact
  }

  useEffect(() => {
    updateFact()
  }, [])

  useEffect(() => {
    if (!randomFact) return
    getCatImage()
  }, [randomFact])

  return { randomFact, getNewFact, urlCatImage }
}

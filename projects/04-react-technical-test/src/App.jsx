import React from 'react'
import { useData } from './useData'

export const App = () => {
  const { randomFact, getNewFact, urlCatImage } = useData()

  console.log({ randomFact }, { getNewFact }, { urlCatImage })

  return (
    <>
      <h1>Technical test: Cat's app</h1>
      <div style={{ display: 'flex', gap: '40px' }}>
        <section style={{ width: '200px' }}>
          <h2>Random fact</h2>
          <p>{randomFact}</p>
          <button onClick={getNewFact}>Get new fact</button>
        </section>
        <section>
          <h2>Image</h2>
          <img src={urlCatImage} alt={`image-`} height={500} />
        </section>
      </div>
    </>
  )
}

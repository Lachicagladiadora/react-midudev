import React from 'react'
import { useData } from './useData'

export const App = () => {

  const { randomFact, urlCatImage } = useData()

  console.log({ randomFact })
  console.log({ urlCatImage })

  return (
    <>
      <h1>Technical test: Cat's app</h1>
      <div style={{ display: 'flex', gap: '40px' }}>
        <section>
          <h2>Random fact</h2>
          <p>{randomFact}</p>
          <h2>First word</h2>
        </section>
        <section>
          <h2>Image</h2>
          <img src={urlCatImage} alt={`image-`} height={500} />
        </section>
      </div>
    </>
  )
}

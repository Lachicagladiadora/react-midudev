const URI = 'https://catfact.ninja/fact'

export const getFact = async () => {
  try {
    const fact = await fetch(URI)
    const data = await fact.json()
    const factData = data.fact
    return factData
    
  } catch (error) {
    console.log(error.message)
  }
}
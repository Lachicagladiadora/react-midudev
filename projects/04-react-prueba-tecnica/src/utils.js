export const URI = 'https://catfact.ninja/fact'

export const getFact = async () => {
  const fact = await fetch()
  const data = await fact.json()
  const factData = data.fact
  return factData
}
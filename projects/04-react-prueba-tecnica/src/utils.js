export const getFact = async () => {
  const fact = await fetch('https://catfact.ninja/fact')
  const data = await fact.json()
  const factData = data.fact
  return factData
}
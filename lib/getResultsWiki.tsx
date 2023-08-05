export default async function getResultsWiki(){

	const response = await fetch(`https://en.wikipedia.org/w/api.php?$wiki`)
  
  	return response.json()
}
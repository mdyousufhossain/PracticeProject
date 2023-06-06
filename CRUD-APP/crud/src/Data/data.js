/**
 * fetching data from the server 
 * 
 */


const fetch =  async function() {
   const  data = await fetch("http://localhost:3030/datas")

   return data
}


const response  = fetch

export default response 



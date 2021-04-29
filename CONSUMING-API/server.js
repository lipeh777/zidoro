const cool = require('cool-ascii-faces');
const cors = require('cors');
const express = require('express');
const axios = require('axios')
const app = express();

app.use(cors())

app.get('/cool', (req, res) => res.send(cool()))
app.get('/', async(req, res)=>{

try{
	const {data} = await axios('https://api.github.com/search/repositories?q=user%3Atakenet%20language%3Ac%23?per_page=100')
	
	const ber = []
	data.items.forEach(({full_name, description, created_at})=>{
		ber.push({"full_name": full_name, "description": description})
		console.log(ber)
		// console.log(full_name," --- ", description)
	})
	return res.json(ber.sort().slice(0,5))

	// console.log(res.json(data.items.name))
}catch(error){
	console.error(error)
}

})

app.listen(process.env.PORT || 3600);
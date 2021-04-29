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

		let ber = []
		data.items.forEach(({full_name, description, created_at, id})=>{
			ber.push({"full_name": full_name, "description": description, "created_at": Number(new Date(created_at).getTime()), "id": id})
			
	})
		
		ber = ber.sort(function(a, b){
			if(a.created_at < b.created_at){
				return -1
			}if(b.created_at < a.created_at){
				return 1
			}
			return 0
		}).slice(0,5)

		// ber.forEach((data)=>{
		// 	delete data.created_at
		// })

		return res.json(ber)
}catch(error){
	console.error(error)
}

})

app.get('/id=13864228', async(req, res)=>{
	try{
		const {data} = await axios('https://api.github.com/search/repositories?q=user%3Atakenet%20language%3Ac%23?per_page=100')

		let ber = []
		data.items.forEach(({full_name, description, created_at, id})=>{
			ber.push({"full_name": full_name, "description": description, "created_at": Number(new Date(created_at).getTime()), "id": id})
			
		})
		
		ber = ber.sort(function(a, b){
			if(a.created_at < b.created_at){
				return -1
			}if(b.created_at < a.created_at){
				return 1
			}
			return 0
		}).slice(0,5)
		let a = []

		ber.forEach((data)=>{
			if (data.id == 13864228) {
				a.push({"full_name": data.full_name, "description": data.description})
			}
			delete data.created_at
		})

		return res.json(a)
	}catch(error){
		console.error(error)
	}
})

app.get('/id=18225451', async(req, res)=>{
	try{
		const {data} = await axios('https://api.github.com/search/repositories?q=user%3Atakenet%20language%3Ac%23?per_page=100')

		let ber = []
		data.items.forEach(({full_name, description, created_at, id})=>{
			ber.push({"full_name": full_name, "description": description, "created_at": Number(new Date(created_at).getTime()), "id": id})
			
		})
		
		ber = ber.sort(function(a, b){
			if(a.created_at < b.created_at){
				return -1
			}if(b.created_at < a.created_at){
				return 1
			}
			return 0
		}).slice(0,5)
		let a = []

		ber.forEach((data)=>{
			if (data.id == 18225451) {
				a.push({"full_name": data.full_name, "description": data.description})
			}
			delete data.created_at
		})

		return res.json(a)
	}catch(error){
		console.error(error)
	}
})

app.get('/id=29748747', async(req, res)=>{
	try{
		const {data} = await axios('https://api.github.com/search/repositories?q=user%3Atakenet%20language%3Ac%23?per_page=100')

		let ber = []
		data.items.forEach(({full_name, description, created_at, id})=>{
			ber.push({"full_name": full_name, "description": description, "created_at": Number(new Date(created_at).getTime()), "id": id})
			
		})
		
		ber = ber.sort(function(a, b){
			if(a.created_at < b.created_at){
				return -1
			}if(b.created_at < a.created_at){
				return 1
			}
			return 0
		}).slice(0,5)
		let a = []

		ber.forEach((data)=>{
			if (data.id == 29748747) {
				a.push({"full_name": data.full_name, "description": data.description})
			}
			delete data.created_at
		})

		return res.json(a)
	}catch(error){
		console.error(error)
	}
})

app.get('/id=29869246', async(req, res)=>{
	try{
		const {data} = await axios('https://api.github.com/search/repositories?q=user%3Atakenet%20language%3Ac%23?per_page=100')

		let ber = []
		data.items.forEach(({full_name, description, created_at, id})=>{
			ber.push({"full_name": full_name, "description": description, "created_at": Number(new Date(created_at).getTime()), "id": id})
			
		})
		
		ber = ber.sort(function(a, b){
			if(a.created_at < b.created_at){
				return -1
			}if(b.created_at < a.created_at){
				return 1
			}
			return 0
		}).slice(0,5)
		let a = []

		ber.forEach((data)=>{
			if (data.id == 29869246) {
				a.push({"full_name": data.full_name, "description": data.description})
			}
			delete data.created_at
		})

		return res.json(a)
	}catch(error){
		console.error(error)
	}
})

app.get('/id=32214523', async(req, res)=>{
	try{
		const {data} = await axios('https://api.github.com/search/repositories?q=user%3Atakenet%20language%3Ac%23?per_page=100')

		let ber = []
		data.items.forEach(({full_name, description, created_at, id})=>{
			ber.push({"full_name": full_name, "description": description, "created_at": Number(new Date(created_at).getTime()), "id": id})
			
		})
		
		ber = ber.sort(function(a, b){
			if(a.created_at < b.created_at){
				return -1
			}if(b.created_at < a.created_at){
				return 1
			}
			return 0
		}).slice(0,5)
		let a = []

		ber.forEach((data)=>{
			if (data.id == 32214523) {
				a.push({"full_name": data.full_name, "description": data.description})
			}
			delete data.created_at
		})

		return res.json(a)
	}catch(error){
		console.error(error)
	}
})

app.listen(process.env.PORT || 3600);
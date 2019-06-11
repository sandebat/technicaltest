const express = require('express');
const app = express()
Git('https://github.com/sandebat/technicaltest.git')
Git.getHead((err, sha) => {
    console.log('The hash is: ' + sha)
})

app.get('/status',function(req,res){
	res.json([{ApplicationVersion: '1.0'},{lastcommitsha : 'abc57858585'},{description : 'pre-interview technical test'}])

})

app.listen(4000, () => {
	console.log('API running on port 4000');
})

const express = require('express');
const app = express()
app.get('/status',function(req,res){
	res.json([{ApplicationVersion: '1.0'},{lastcommitsha :"abcd3456" },{description : 'pre-interview technical test'}])

})
app.listen(4000, () => {
	console.log('API running on port 4000');
	
require('child_process').exec('git rev-parse HEAD', function(err, stdout) {
console.log('Last commit hash on this branch is:', stdout);
});
})

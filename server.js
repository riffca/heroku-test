"use strict";
let express = require('express')
	, http = require('http')
	, path = require('path')
	, bodyParser = require('body-parser')
	, logger = require('morgan')
	, methodOverride = require('method-override')
	, cors = require('cors')
	, axios = require('axios')

let app = express();

let clientPath = (location)=>{
	return path.resolve(__dirname, 'client', 'dist')
}

app.use(cors())
app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.use(express.static(clientPath('client/build')));


function axiosReq(urlName, response){
	console.log('request forks -->', urlName)
	axios({
		type: 'get',
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Headers": "X-Requested-With"
		},
		crossdomain: true,
		url: urlName}).then(res=>{
			response.send(res.data)
		}).catch(err=>{
			console.warn('api error')
			response.send(err)
		})
}


app.use('/test',(req,response)=>{
	response.send("<h1>Hello</h1>")
})

app.use('/github/search',(req,response)=>{

	let  { q } = req.query

	let urlName = 'https://api.github.com/search/repositories?q='+ q
	axiosReq(urlName, response)

})

app.use('/github/forks',(req,response)=> {

	let {
		page,
		per_page,
		owner,
		repoName
	} = req.query
	//let urlName = 'https://api.github.com/repos/vuejs/vue/forks'
	let urlName = 'https://api.github.com/repos/'
	urlName+= owner + '/'
	urlName+= repoName + '/'
	urlName+= 'forks'

	if(page) {
		urlName +='?page=' + page
	}	

	if(per_page) {
		urlName +='&per_page=' + per_page
	}

	console.log(urlName)

	axiosReq(urlName, response)

})


if (app.get('env') == 'development') {
	app.locals.pretty = true;
}

app.get('*', (req, res) => {
	res.sendFile(clientPath('client/dist/index.html'));
});


http.createServer(app).listen(app.get('port'), function(){
	console.log("Express server listening on port " + app.get('port'));
});
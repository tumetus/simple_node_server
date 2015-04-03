/*

*/


var http = require('http');
var url = require('url');
var knex = require('knex')({
	client: 'pg',
	connection: {
		host: '127.0.0.1',
		user: 'postgres',
		password: 'postgres',
		database: 'node',
		charset: 'utf8'
	}
});
var bookshelf = require('bookshelf')(knex);
var User = bookshelf.Model.extend({
	tableName: 'node.user'
});

http.createServer(function (request, response) {
	
	home_route(request, response);
	write_route(request, response);

}).listen(4747, '127.0.0.1');
console.log('Server running at http://127.0.0.1:4747/');


function home_route(request, response) {
	
	if (request.url === '/') {
		response.writeHead(200, {'Content-Type': 'text/plain'});
		response.write('index page\n');
		response.end();
	} 

}

// POST - /write?name=[name]&age=[age]
// Creates a user to database.
function write_route(request, response) {
	
	if (request.url.indexOf('/write') == 0 && request.method == "POST") {		
		try {
			var urlData = url.parse(request.url, true);
			var queryData = urlData.query;

			if (isDefined(queryData.name) && isDefined(queryData.age)) {
					
				User.forge({name: queryData.name, age: queryData.age}).save().then(function(usrObj){
					response.writeHead(200, {'Content-Type': 'text/plain'});

					var usrJson = usrObj.toJSON();
					response.write('Successfully created a user to db:\n');
					response.write('Id:' + usrJson.id + '\n');
					response.write('Name: ' + usrJson.name + '\n');
					response.write('Age: ' + usrJson.age + '\n');
					response.end();
				});

			} else {
				throw 'Name and Age required';
			}
		
		} catch (error) {
			response.writeHead(400, {'Content-Type': 'text/plain'});
			response.write(error);
			response.end();
		}
		
	}
}


function isDefined(value) {
	if (value !== null && typeof value !== 'undefined') {
		return true;
	} else {
		return false;
	}
}















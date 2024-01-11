const LineConnect = require('./connect');
let line = require('./main.js');
let LINE = new line();

const auth = {
  authToken: 'pqyKwTqygsQP9iY09jkOsgCpqCDxBAewFVk9H39lYVexRliPmf09qZfsk1O6Ax+sirwsfoUarTU3LfEQfWnRJnmbR+blfUCgWo9mfeDCTKqbOXyeOnilkpskm2haWikX11d5EKetaZjEOBUu5YRMbAdB04t89/1O/w1cDnyilFU=',
  certificate: '80b1ac07fa8de24a8e54816e54779443'
}
//let client =  new LineConnect(auth);
   let client =  new LineConnect();

client.startx().then(async (res) => {
	
	while(true) {
		try {
			ops = await client.fetchOps(res.operation.revision);
		} catch(error) {
			console.log('error',error)
		}
		for (let op in ops) {
			if(ops[op].revision.toString() != -1){
				res.operation.revision = ops[op].revision;
				LINE.poll(ops[op])
			}
		}
	}
});

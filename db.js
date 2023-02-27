const Pool = require('pg').Pool
const pool = new Pool({
  user: 'bhoo',
  host: '127.0.0.1',
  database: 'bank_det',
  password: 'root',
  port: 5432,
})

const getBranch = (request, response) => {

	const q = request.query.q;
	const limit = request.query.limit;
	const offset = request.query.offset;
	
	pool.query('SELECT * FROM bank_branches where branch ILIKE $1 ORDER BY ifsc ASC LIMIT $2 OFFSET $3',[q, limit,offset],  (error, results) => {
	  if (error) {
		throw error
	  }
	  response.status(200).json(results.rows)
	})
  }

const SearchbyValue = (request, response) => {
	const q = request.query.q;
	const limit = request.query.limit;
	const offset = request.query.offset;
	pool.query('SELECT * FROM bank_branches WHERE ifsc ILIKE $1 or bank_id ILIKE $1 or branch ILIKE $1 or address ILIKE $1 or city ILIKE $1 or district ILIKE $1 or state ILIKE $1 or bank_name ILIKE $1  ORDER BY ifsc DESC LIMIT $2 OFFSET $3 ', ['%'+q+'%', limit,offset ], (error, results) => {
	if (error) {
	throw error
	}
	results = '"branches": ['+json(results.rows)+'] }';
	response.status(200).json.parse(results)
})
}

module.exports = {
getBranch,
SearchbyValue,
}
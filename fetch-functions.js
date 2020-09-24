//https://www.youtube.com/watch?v=mHXhuPHiDj8
/* 
	test function, mocking - not to make real http calls
*/

async function convert(base, destination) {
	try {
		const result = await fetch(
			`https://api.exchangeratesapi.io/latest?base=${base}`
		);
		const data = await result.json();
		
		return data.rates[destination];
	}
	catch(e) {
		return null;
	}
}

//export { convert };
module.exports = convert;
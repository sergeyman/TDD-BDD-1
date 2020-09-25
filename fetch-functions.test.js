//import {convert} from './fetch-functions';		//Jest encountered an unexpected token
const convert = require('./fetch-functions');

//mock fetch()  mock .function  (override the global fetch to creae a mock version)
global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve({ 
			rates: { CAD: 1.42 } 
		}),
    })
);

// between. Start from scratch every time 
beforeEach(() => {
	fetch.mockClear();
});

it('converts USD to CAD', async () => {
    const rate = await convert("USD", "CAD");

    expect(rate).toEqual(1.42);
    expect(fetch).toHaveBeenCalledTimes(1);
});

//mock the rejection (test the failure path)
it('handles exception with null', async () => {
	fetch.mockImplementationOnce(() => Promise.reject('API failure'));
	
	const rate = await convert("USD", "CAD");
	
	expect(rate).toEqual(null);
	expect(fetch).toHaveBeenCalledWith(
		`https://api.exchangeratesapi.io/latest?base=USD`
	);
});
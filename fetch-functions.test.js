//import {convert} from './fetch-functions';		//Jest encountered an unexpected token
const convert = require('./fetch-functions');

//mock fetch()  mock .function
global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve({ rates: { CAD: 1.42 } }),
    })
);

it('converts USD to CAD', async() => {
    const rate = await convert("USD", "CAD");

    expect(rate).toEqual(1.42);

    expect(fetch).toHaveBeenCalledTimes(1);
});
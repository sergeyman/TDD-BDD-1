const sum = require('./sum');

test('Jest/CLI: adds 1 + 2 to equal 3', () => {
	expect(sum(1, 2)).toBe(3);
});

//Matchers (сопоставления) для тест. знечений разными способами
test('Jest: 2 + 2 = 4', () => {
	expect(2 + 2).toBe(4);			//exact equality
});

test('Jest: Присваивание объекту', () => {
	const data = {один: 1};
	data['два'] = 2;
	expect(data).toEqual({один: 1, два: 2});	//check value of an object recursevly
});

test('Jest: Сложение положительных чисел не равно нулю', () => {
	for(let a=1; a<10; a++) {
		for(let b=1; b<10; b++) {
			expect(a + b).not.toBe(0);
		}
	}
});

//Testing Asynchronous Code
// Don't do this!
/*
test('the data is peanut butter', () => {
  function callback(data) {
    expect(data).toBe('peanut butter');
  }

  //fetchData(callback);
  fetch('https://restcountries.eu/rest/v1/all');
});
*/


/*
https://jestjs.io/docs/ru/asynchronous


*/

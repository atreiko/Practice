

// Фунция возвращает другую функию
const gen = (n, w) => (num) => num % n === 0 ? w : '';
// Делаем генератор для Fizz и Buzz
// Где числа 3 и 5 замыкаются на n
// А строки 'Fizz' 'Buzz' замыкаются в w
const fizz = gen(3, 'Fizz');
const buzz = gen(5, 'Buzz');
// Сначала проверяем делимость на 3, а потом делимость на 5

// num % n === 0 ? w : ''
// Если делиться на 3 и 5, тогда w
[...Array(99).keys()].map(i => i + 1).forEach( i => console.log(fizz(i)+buzz(i) || i));





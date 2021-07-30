import '../scss/index.scss';
import caesar13 from './caesar';

const input = document.querySelector('.main__input');
const output = document.querySelector('.main__output');

input.addEventListener('keyup', () => {
    if(input.value != '') output.value = caesar13(input.value);
    else output.value = '';
});

console.log(caesar13('PRZEPROGRAMOWANI'));
import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

import 'intl-tel-input/build/css/intlTelInput.css';
import 'intl-tel-input/build/js/utils';
import intlTelInput from 'intl-tel-input';
const { isPossibleNumber } = window.intlTelInputUtils;

let data = {
	phone: ''
}

document.querySelector('#app').innerHTML = `
  <div>
   <input id="phone" />
  </div>
`

const input = document.querySelector("#phone");
const iti = intlTelInput(input);
// iti.setNumber('3407785717')

input.addEventListener('keyup', e => {
	let num = iti.getNumber();
	let country = iti.getSelectedCountryData();
	let mightBeValid = isPossibleNumber(num, country.iso2);
	console.log(mightBeValid);

	if (mightBeValid) {
		iti.setNumber(iti.getNumber())
		console.log(iti.getNumber())
	}

})

setupCounter(document.querySelector('#counter'))

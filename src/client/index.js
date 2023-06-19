import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'

// console.log(checkForName);

alert("I EXIST")
console.log("CHANGE!!");

import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'


window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    document.querySelector('form').addEventListener('submit', handleSubmit)
});
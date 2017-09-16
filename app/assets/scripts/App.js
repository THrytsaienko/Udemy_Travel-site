import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';

var mobileMenu = new MobileMenu();
new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonial"), "60%");







// var $ = require('jquery');
// /*var Person = require('./modules/Person'); ES5 */
// import Person from './modules/Person';

// /*alert("ABC"); */

// class Adult extends Person {
//     payTaxes() {
//         console.log(this.name + " now owes $0 in taxes.");
//     }
// }

// var john = new Person("John Doe", 'blue');
// john.greet();

// var jane = new Adult("Jane Smith", "orange");
// jane.greet();
// jane.payTaxes();
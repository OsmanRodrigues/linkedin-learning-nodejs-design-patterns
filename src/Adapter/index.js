/** The Adapter pattern allow us to make incompatible classes 
 * become compatilble, when we take an object, keep its interface, 
 * but adapt it to a new environment or solution. It's useful to 
 * keep your code base adptable, compatible and reusable. 
 **/
const localStorage = require('./LocalStorage');

const runExample = () => {

  console.log('Local storage length: ', localStorage.length);

  const uid = localStorage.getItem('userId');
  console.log('userId: ', uid);

  if (uid) {
    console.log('User Id found.', uid);
    console.log('Clearing the User ID...');
    localStorage.clear();
  } else {
    console.log('User ID not found. Setting the user id  and token...');
    localStorage.setItem('token', 'a1E2b3C4f5N7');
    localStorage.setItem('userId', '12345');
  }

}

module.exports = { runExample };
const string = prompt('Enter a string: ');

const changeEverySecobndLetter = (string) => {
  const lettersArray = string.split('');
  for (let i = 0; i < string.length; i += 1) {
    if (i % 2 === 0) {
      lettersArray[i] = lettersArray[i].toLowerCase();
    } else {
      lettersArray[i] = lettersArray[i].toUpperCase();
    }
  }
  return lettersArray.join('');
};

console.log(changeEverySecobndLetter(string));

function firstWord(s) {
	 const words = s.split(' ');

  // Return the first word or the entire string if there are no spaces
  return words.length > 0 ? words[0] : s;
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));

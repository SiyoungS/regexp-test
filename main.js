const str = `
010-1234-5678
tiger4464@naver.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
d`;

// const regexp = new RegExp("the", "gi");
// const regexp = /the/gi;
// console.log(str.match(regexp));

// console.log(regexp.text(str));
// console.log(str.replace(regexp, "AAA"));

// console.log(str.match(/d$/gm));

// console.log(str.match(/d{2,3}/)); // d가 2개 연속 일치 되는것을 찾아라
console.log(str.match(/\b\w{2,3}\b/g)); // \w 숫자를 포함한영어 단어

const h = `  the hello  world   !

`;

console.log(h.replace(/\s/g, ""));

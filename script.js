// hw12
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(length, content) {
  let resultKey = [];
  let contentLength = content.length;
  for (let i = 1; i <= length; i++) {
    resultKey.push(characters[Math.floor(Math.random() * characters.length)]);
  }
  return (resultKey);
}

console.log(generateKey(16, characters));


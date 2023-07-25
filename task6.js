// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

const generatePassword=(length)=>{
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const specialCharacters = "@#$%&()^*-_!=+[]{}<>|?;:,.";

  const allCharacters = upperCase + lowerCase + numbers + specialCharacters;
  let password = "";

  for (let i = 0; i < length; i++) {
    const random = Math.floor(Math.random() * allCharacters.length);
    password = password + allCharacters.charAt(random);
  }

  return password;
}

console.log("The random password is:", generatePassword(8));


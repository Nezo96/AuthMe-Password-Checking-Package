import saltedSha256 from "salted-sha256";

const checkPassword = (password, dbPassword) => {
  const getSaltFromPassword = (password) => {
    const salt = password.split("$");
    return salt[2];
  };

  const generateNewPassword = (salt, password) => {
    const firstHash = saltedSha256(password);
    const secondHash = saltedSha256(firstHash, salt);
    const finalPassword = "$SHA$" + salt + "$" + secondHash;
    return finalPassword;
  };

  const checkPassword = (givenPassword, dbPassword) => {
    const saltFromPw = getSaltFromPassword(dbPassword);
    const genNewPw = generateNewPassword(saltFromPw, givenPassword);
    if (genNewPw === dbPassword) {
      return true;
    } else {
      return false;
    }
  };
  return checkPassword(password, dbPassword);
};

export default checkPassword;

import checkPassword from "./index.js";

const dbPass =
  "$SHA$dc991e87ddb674f1$9c27ce343ccee87be3dca9c1f7aac79abe2f71abd7cb2825006f0a64bafdd361";
const pass = "test";

const passss = checkPassword(pass, dbPass);
console.log(passss);

import capitalize from "../src/capitalize.js";

if (capitalize("hello") !== "Hello") {
  throw new Error("The function does not work properly");
}

if (capitalize("") !== "") {
  throw new Error("The function does not work properly");
}

console.log('All tests passed');

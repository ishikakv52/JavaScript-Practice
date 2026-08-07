// node basics/strings.js

const name = "Ishika"
const repoCount=50
console.log(name + repoCount)

const gameName = new String("IshikaRathi")
console.log(gameName[0])
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.toLowerCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf("I"))
console.log(gameName.slice(0,4))
console.log(gameName.slice(-11,6))
const name1="  Rathi  "
console.log(name1)
console.log(name1.trim())

const email="ishikakv5@gmail.com"
console.log(email.replace("5","26"))

console.log(email.includes("kv"))
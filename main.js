

// Refaktorisera = städa, omorganisera kod UTAN att ändra funktionalitet
function caesarEncrypt(msg) {

    // 1. Översätta varje tecken till ett nummer
    const charCodes = []
    for (let i = 0; i < msg.length; i++) {
        charCodes.push(msg[i].charCodeAt(0))
    }

    // 2. shifta det numret
    for (let i = 0; i < charCodes.length; i++) {
        charCodes[i] = charCodes[i] + 1

    }

    // 3. översätt tillbaka från charCode till string
    let result = ""
    for (let i = 0; i < charCodes.length; i++) {
        result = result + String.fromCharCode(charCodes[i])
    }

    return result
}

const secretMessage = "RETREATTOMORROW"
const encryptedMessage = caesarEncrypt(secretMessage)

console.log(secretMessage, encryptedMessage)

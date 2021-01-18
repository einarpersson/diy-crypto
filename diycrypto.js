
export function caesarEncrypt(msg, shift) {
    const charCodes = []
    for (let i = 0; i < msg.length; i++) {
        charCodes.push(msg[i].charCodeAt(0))
    }

    for (let i = 0; i < charCodes.length; i++) {
        charCodes[i] = charCodes[i] + shift
    }

    let result = ""
    for (let i = 0; i < charCodes.length; i++) {
        result = result + String.fromCharCode(charCodes[i])
    }

    return result
}

// Läxa att implementera denna funktion
export function caesarDecrypt(encryptedMsg, shift) {
    // 1. Gå från tecken (chars) till tal (charCodes)

    // 2. Skifta åt andra hållet (minus istället för plus)

    // 3. Gå från tal (charCodes) till tecken (chars)

    // returna resultatet
}

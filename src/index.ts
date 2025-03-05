

import * as character from "./components/characters"
import * as calc from "./components/math_functions"
import inquirer from "inquirer"

(async function main() {
    console.log("🏁 Escolha o primeiro personagem para a corrida 🏁\n")
    character.chooseCharacter(-1)
    let resposta = await inquirer.prompt({
        type: "input",
        name: "chosenChar",
        message: "\n🏆 Digite o escolhido: "
    })
    let player1 = await character.chooseCharacter(resposta.chosenChar)

    character.chooseCharacter(-1)
    console.log("🏁 Escolha o segundo personagem para a corrida 🏁\n")
    resposta = await inquirer.prompt({
        type: "input",
        name: "chosenChar",
        message: "\n🏆 Digite o escolhido: "
    })
    let player2 = await character.chooseCharacter(resposta.chosenChar)


    for (let i: number = 0; i < 5; i++) {
        
    }
})()
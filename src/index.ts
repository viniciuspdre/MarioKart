

import * as character from "./components/characters"
import * as calc from "./components/math_functions"
import * as track from "./components/track"
import inquirer from "inquirer"

async function whoWinRound(sp1: number, sp2: number, player1: character.Character, player2: character.Character) {
    if (sp1 > sp2) {
        console.log(`O vencedor foi: ${player1.name}!`)
        player1.score++
    } else if (sp2 > sp1) {
        console.log(`O vencedor foi: ${player2.name}!`)
        player2.score++
    } else {
        console.log("Empate, ninguém ganhou pontos.")
    }
}

async function playRaceEngine(player1: character.Character, player2: character.Character) {
    for (let i: number = 0; i < 5; i++) {
        console.log(`\n🚦 Preparem-se para o confronto de número ${i+1} 🚦\n`)
        let currentTrack = await track.raffleTrack()

        if (currentTrack == 0) {
            console.log(track.straight.type + ": o que vale aqui é a VELOCIDADE")
            let sp1: number = player1.speed + await calc.rollDice()
            let sp2: number = player2.speed + await calc.rollDice()
            console.log(`Velocidade do ${player1.name}: ${sp1}`)
            console.log(`Velocidade do ${player2.name}: ${sp2}`)
            
            await whoWinRound(sp1, sp2, player1, player2)

        } else if (currentTrack == 1) {
            console.log(track.curve.type + ": o que vale aqui é a MANOBRABILIDADE")
            let sp1: number = player1.maneuverability + await calc.rollDice()
            let sp2: number = player2.maneuverability + await calc.rollDice()
            console.log(`Manobrabilidade do ${player1.name}: ${sp1}`)
            console.log(`Manobrabilidade do ${player2.name}: ${sp2}`)

            await whoWinRound(sp1, sp2, player1, player2)
            
        } else {
            console.log(track.battle.type + ": o que vale aqui é o PODER")
            let sp1: number = player1.power + await calc.rollDice()
            let sp2: number = player2.power + await calc.rollDice()
            console.log(`Poder do ${player1.name}: ${sp1}`)
            console.log(`Poder do ${player2.name}: ${sp2}`)
            
            await whoWinRound(sp1, sp2, player1, player2)
            
        }
    }
}

(async function main() {
    console.log("🏁 Escolha o primeiro personagem para a corrida 🏁\n")
    character.chooseCharacter(-1)
    let resposta = await inquirer.prompt({
        type: "input",
        name: "chosenChar",
        message: "\n🏆 Digite o escolhido: "
    })
    let player1 = await character.chooseCharacter(resposta.chosenChar)

    console.log("\n🏁 Escolha o segundo personagem para a corrida 🏁\n")
    character.chooseCharacter(-1)
    resposta = await inquirer.prompt({
        type: "input",
        name: "chosenChar",
        message: "\n🏆 Digite o escolhido: "
    })
    let player2 = await character.chooseCharacter(resposta.chosenChar)

    if (player1 != null && player2 != null) {
        await playRaceEngine(player1, player2)
        if (player1.score > player2.score) console.log(`🏆 O vencedor foi: ${player1.name} 🏆`)
        else if (player2.score > player1.score) console.log(`🏆 O vencedor foi: ${player2.name} 🏆`)
        else console.log("Houve um empate. 🏳️")
    } 

    else console.log("Algum valor foi selecionado errado.")

})()
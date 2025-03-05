"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const character = __importStar(require("./components/characters"));
const calc = __importStar(require("./components/math_functions"));
const track = __importStar(require("./components/track"));
const inquirer_1 = __importDefault(require("inquirer"));
function whoWinRound(sp1, sp2, player1, player2) {
    return __awaiter(this, void 0, void 0, function* () {
        if (sp1 > sp2) {
            console.log(`O vencedor foi: ${player1.name}!`);
            player1.score++;
        }
        else if (sp2 > sp1) {
            console.log(`O vencedor foi: ${player2.name}!`);
            player2.score++;
        }
        else {
            console.log("Empate, ninguém ganhou pontos.");
        }
    });
}
function playRaceEngine(player1, player2) {
    return __awaiter(this, void 0, void 0, function* () {
        for (let i = 0; i < 5; i++) {
            console.log(`\n🚦 Preparem-se para o confronto de número ${i + 1} 🚦\n`);
            let currentTrack = yield track.raffleTrack();
            if (currentTrack == 0) {
                console.log(track.straight.type + ": o que vale aqui é a VELOCIDADE");
                let sp1 = player1.speed + (yield calc.rollDice());
                let sp2 = player2.speed + (yield calc.rollDice());
                console.log(`Velocidade do ${player1.name}: ${sp1}`);
                console.log(`Velocidade do ${player2.name}: ${sp2}`);
                yield whoWinRound(sp1, sp2, player1, player2);
            }
            else if (currentTrack == 1) {
                console.log(track.curve.type + ": o que vale aqui é a MANOBRABILIDADE");
                let sp1 = player1.maneuverability + (yield calc.rollDice());
                let sp2 = player2.maneuverability + (yield calc.rollDice());
                console.log(`Manobrabilidade do ${player1.name}: ${sp1}`);
                console.log(`Manobrabilidade do ${player2.name}: ${sp2}`);
                yield whoWinRound(sp1, sp2, player1, player2);
            }
            else {
                console.log(track.battle.type + ": o que vale aqui é o PODER");
                let sp1 = player1.power + (yield calc.rollDice());
                let sp2 = player2.power + (yield calc.rollDice());
                console.log(`Poder do ${player1.name}: ${sp1}`);
                console.log(`Poder do ${player2.name}: ${sp2}`);
                yield whoWinRound(sp1, sp2, player1, player2);
            }
        }
    });
}
(function main() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("🏁 Escolha o primeiro personagem para a corrida 🏁\n");
        character.chooseCharacter(-1);
        let resposta = yield inquirer_1.default.prompt({
            type: "input",
            name: "chosenChar",
            message: "\n🏆 Digite o escolhido: "
        });
        let player1 = yield character.chooseCharacter(resposta.chosenChar);
        console.log("🏁 Escolha o segundo personagem para a corrida 🏁\n");
        character.chooseCharacter(-1);
        resposta = yield inquirer_1.default.prompt({
            type: "input",
            name: "chosenChar",
            message: "\n🏆 Digite o escolhido: "
        });
        let player2 = yield character.chooseCharacter(resposta.chosenChar);
        if (player1 != null && player2 != null) {
            yield playRaceEngine(player1, player2);
            if (player1.score > player2.score)
                console.log(`🏆 O vencedor foi: ${player1.name} 🏆`);
            else if (player2.score > player1.score)
                console.log(`🏆 O vencedor foi: ${player2.name} 🏆`);
            else
                console.log("Houve um empate. 🏳️");
        }
        else
            console.log("Algum valor foi selecionado errado.");
    });
})();

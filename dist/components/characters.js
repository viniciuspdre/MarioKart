"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BOWSER = exports.DONKEY = exports.YOSHI = exports.PEACH = exports.LUIGI = exports.MARIO = void 0;
exports.chooseCharacter = chooseCharacter;
exports.MARIO = {
    name: "Mario",
    speed: 4,
    maneuverability: 3,
    power: 3,
    score: 0,
    id: 0
};
exports.LUIGI = {
    name: "Luigi",
    speed: 3,
    maneuverability: 4,
    power: 4,
    score: 0,
    id: 1
};
exports.PEACH = {
    name: "Peach",
    speed: 3,
    maneuverability: 4,
    power: 2,
    score: 0,
    id: 2
};
exports.YOSHI = {
    name: "Yoshi",
    speed: 2,
    maneuverability: 4,
    power: 3,
    score: 0,
    id: 3
};
exports.DONKEY = {
    name: "Donkey Kong",
    speed: 2,
    maneuverability: 2,
    power: 3,
    score: 0,
    id: 4
};
exports.BOWSER = {
    name: "Bowser",
    speed: 5,
    maneuverability: 2,
    power: 5,
    score: 0,
    id: 5
};
let characters = [exports.MARIO, exports.LUIGI, exports.PEACH, exports.YOSHI, exports.DONKEY, exports.BOWSER];
function chooseCharacter(chosen) {
    return __awaiter(this, void 0, void 0, function* () {
        if (chosen == -1) {
            characters.forEach(element => {
                console.log(element.id + " - " + element.name);
            });
            return null;
        }
        let perso = characters.find(element => element.id == chosen);
        characters = characters.filter((item) => item.id != chosen);
        if (perso != undefined)
            return perso;
        return null;
    });
}

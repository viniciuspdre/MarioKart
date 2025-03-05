

export interface Character {
    name: string
    speed: number
    maneuverability: number
    power: number
    score: number
    id: number
}

export const MARIO: Character  = {
    name: "Mario",
    speed: 4,
    maneuverability: 3,
    power: 3,
    score: 0,
    id: 0
}

export const LUIGI: Character  = {
    name: "Luigi",
    speed: 3,
    maneuverability: 4,
    power: 4,
    score: 0,
    id: 1
}

export const PEACH: Character  = {
    name: "Peach",
    speed: 3,
    maneuverability: 4,
    power: 2,
    score: 0,
    id: 2
}

export const YOSHI: Character  = {
    name: "Yoshi",
    speed: 2,
    maneuverability: 4,
    power: 3,
    score: 0,
    id: 3
}

export const DONKEY: Character  = {
    name: "Donkey Kong",
    speed: 2,
    maneuverability: 2,
    power: 3,
    score: 0,
    id: 4
}

export const BOWSER: Character  = {
    name: "Bowser",
    speed: 5,
    maneuverability: 2,
    power: 5,
    score: 0,
    id: 5
}

let characters: Character[] = [MARIO, LUIGI, PEACH, YOSHI, DONKEY, BOWSER];

export async function chooseCharacter(chosen: number): Promise<Character | null> {
    if (chosen == -1) {
        characters.forEach(element => {
            console.log(element.id + " - " + element.name)
        })

        return null
    }

    let perso = characters.find(element => element.id == chosen)
    characters = characters.filter((item) => item.id != chosen)

    if (perso != undefined) return perso
    return null
}
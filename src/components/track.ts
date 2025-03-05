export interface Track {
    type: string,
    id: number
}

export const straight: Track = {
    type: "Reta",
    id: 0
}

export const curve: Track =  {
    type: "Curva",
    id: 1
}

export const battle: Track =  {
    type: "Confronto",
    id: 2
}

export async function raffleTrack(): Promise<number> {
    return Math.floor(Math.random() * 3)
}

export let tracks: Track[] = [curve, straight, battle]
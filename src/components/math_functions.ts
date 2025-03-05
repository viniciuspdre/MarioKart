

export async function rollDice(): Promise<number> {
    return Math.floor(Math.random() * 6) + 1
} 
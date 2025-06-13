import type { State } from "./state.js";

export async function commandHelp(state: State): Promise<void> {
    console.log("Welcome to the Pokedex!\nUsage:\n");
    for (const command of Object.values(state.commands)) {
        console.log(`${command.name}: ${command.description}`);
    }
    console.log();
}

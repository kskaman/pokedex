import { State } from "./state";

export async function commandExit(state: State): Promise<void> {
    console.log("Closing the Pokedex... Goodbye!");
    state.readline.close();
    state.pokeAPI.closeCache();
    process.exit(0);
}
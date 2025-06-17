import type { State } from "./state.js";

export async function commandPokedex(state: State): Promise<void> {
    const names = Object.keys(state.caughtPokemon);

    if (names.length === 0) {
        console.log("Your Pokedex is empty - go catch something!");
        return;
    }

    console.log("Your Pokedex:");
    names.forEach((name) => console.log(` - ${name}`));
}

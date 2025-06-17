import type { State } from "./state.js";

export async function commandCatch(
    state: State,
    pokemonName?: string,
): Promise<void> {

    if (!pokemonName) {
        console.log("Usage: catch <pokemon-name>");
        return;
    }

    pokemonName = pokemonName.toLowerCase();

    // already caught?
    if (state.caughtPokemon[pokemonName]) {
        console.log(`${pokemonName} is already in your Pokédex!`);
        return;
    }

    console.log(`Throwing a Pokeball at ${pokemonName}...`);

    try {
        const pokemon = await state.pokeAPI.fetchPokemon(pokemonName);

        // --- catch-chance formula ---
        // base_experience ranges ~15-600.  Lower exp = easier.
        // We'll cap chance between 10% (hard) and 90% (easy).
        const exp = pokemon.base_experience ?? 100;
        const difficulty = Math.min(exp, 600) / 600;    // 0–1
        const catchChance = 0.9 - difficulty * 0.8;      // 0.9→0.1

        if (Math.random() < catchChance) {
            console.log(`${pokemonName} was caught!`);
            console.log("You may now inspect it with the inspect command.");
            state.caughtPokemon[pokemonName] = pokemon;
        } else {
            console.log(`${pokemonName} escaped!`);
        }
    } catch (err) {
        console.error(
            `Could not catch '${pokemonName}': ${(err as Error).message}`,
        );
    }
}

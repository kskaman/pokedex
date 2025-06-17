import { Pokemon } from "./pokeapi.js";
import type { State } from "./state.js";

export async function commandInspect(
    state: State,
    pokemonName?: string,
): Promise<void> {
    if (!pokemonName) {
        console.log("Usage: inspect <pokemon-name>");
        return;
    }

    pokemonName = pokemonName.toLowerCase();

    const pokemon: Pokemon | undefined = state.caughtPokemon[pokemonName];

    if (pokemon === undefined) {
        console.log("you have not caught that pokemon");
        return;
    }

    // Basic info
    console.log(`Name: ${pokemon.name}`);
    console.log(`Height: ${pokemon.height}`);
    console.log(`Weight: ${pokemon.weight}`);

    // Stats
    console.log("Stats:");
    pokemon.stats.forEach(({ stat, base_stat }) =>
        console.log(`  -${stat.name}: ${base_stat}`),
    );

    // Types
    console.log("Types:");
    pokemon.types
        .sort((a, b) => a.slot - b.slot)           // 1 = primary, 2 = secondary
        .forEach(({ type }) => console.log(`  - ${type.name}`));
}

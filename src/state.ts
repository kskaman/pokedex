import { createInterface, Interface } from "readline";
import { getCommands } from "./commands.js";
import { PokeApi } from "./pokeapi.js";
import { devNull } from "os";

export type CLICommand = {
    name: string;
    description: string;
    callback: (state: State) => Promise<void>;
};

export type State = {
    readline: Interface;
    commands: Record<string, CLICommand>;
    pokeApi: PokeApi;
    nextLocationsURL: string | null;
    prevLocationsURL: string | null;
};

export function initState() {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "pokedex > ",
    });

    const pokeApi = new PokeApi();

    return {
        readline: rl,
        commands: getCommands(),
        pokeApi: pokeApi,
        nextLocationsURL: null,
        prevLocationsURL: null,
    }
}
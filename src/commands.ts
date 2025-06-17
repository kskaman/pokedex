import { commandHelp } from "./command_help.js";
import { commandExit } from "./command_exit.js";

import type { CLICommand } from "./state.js";
import { commandMap, commandMapBack } from "./command_map.js";
import { commandExplore } from "./commandExplore.js";
import { commandCatch } from "./commandCatch.js";
import { commandInspect } from "./command_inspect.js";

export function getCommands(): Record<string, CLICommand> {
    return {
        help: {
            name: "help",
            description: "Displays a help message",
            callback: commandHelp,
        },
        exit: {
            name: "exit",
            description: "Exit the Pokedex",
            callback: commandExit,
        },
        map: {
            name: "map",
            description: "Show next 20 location areas",
            callback: commandMap,
        },
        mapb: {
            name: "mapb",
            description: "Show previous 20 location areas",
            callback: commandMapBack,
        },
        explore: {
            name: "explore <location_name>",
            description: "Explore a location",
            callback: commandExplore,
        },
        catch: {
            name: "catch <pokemon_name>",
            description: "Attempt to catch a pokemon",
            callback: commandCatch,
        },
        inspect: {
            name: "inspect <pokemon_name>",
            description: "View details about a caught pokemon",
            callback: commandInspect,
        }
    };
}

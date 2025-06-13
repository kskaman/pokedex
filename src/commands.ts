import { commandHelp } from "./command_help.js";
import { commandExit } from "./command_exit.js";

import type { CLICommand } from "./state.js";
import { commandMap, commandMapBack } from "./command_map.js";

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
    };
}

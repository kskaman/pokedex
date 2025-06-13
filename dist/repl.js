export function startREPL(state) {
    state.readline.prompt();
    state.readline.on("line", async (input) => {
        const words = cleanInput(input);
        if (words.length === 0) {
            state.readline.prompt();
            return;
        }
        const commandName = words[0];
        const cmd = state.commands[commandName];
        if (cmd) {
            try {
                cmd.callback(state.commands);
            }
            catch (error) {
                console.error(`Error executing command '${commandName}':`, error);
            }
        }
        else {
            console.log("Unknown command");
        }
        state.readline.prompt();
    });
}
export function cleanInput(input) {
    return input
        .toLowerCase()
        .trim()
        .split(" ")
        .filter((word) => word !== "");
}

import { State } from "./state.js";

export async function commandMap(state: State): Promise<void> {
    const data = await state.pokeAPI.fetchLocations(state.nextLocationsURL ?? undefined);

    data.results.forEach((loc) => console.log(loc.name));

    state.nextLocationsURL = data.next;
    state.prevLocationsURL = data.previous;
}


export async function commandMapBack(state: State): Promise<void> {
    if (!state.prevLocationsURL) {
        console.log("you're on the first page");
        return;
    }

    const data = await state.pokeAPI.fetchLocations(state.prevLocationsURL);

    data.results.forEach((loc) => console.log(loc.name));

    state.nextLocationsURL = data.next;
    state.prevLocationsURL = data.previous;
}

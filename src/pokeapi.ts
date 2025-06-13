export class PokeApi {
    private static readonly baseUrl = "https://pokeapi.co/api/v2";

    async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
        const url = pageURL || `${PokeApi.baseUrl}/location-area?limit=20`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch locations: ${response.statusText}`);
        }

        return await response.json();
    }

    async fetchLocation(locationName: string): Promise<Location> {
        const url = `${PokeApi.baseUrl}/location/${locationName}`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch location: ${response.statusText}`);
        }

        return await response.json();
    }
}

export type ShallowLocations = {
    count: number;
    results: { name: string; url: string }[];
    next: string | null;
    previous: string | null;
};

export type Location = {
    id: number;
    name: string;
}
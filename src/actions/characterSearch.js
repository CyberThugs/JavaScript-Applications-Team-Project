export const CHARACTER_SEARCH = "CHARACTER_SEARCH";

export function handleCharacterSearch(payload){
    return {
        type: CHARACTER_SEARCH,
        payload
    }
}
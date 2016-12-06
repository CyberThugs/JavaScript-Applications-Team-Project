export const CHARACTERS = "CHARACTERS";

export function handleCharacters(payload){
    return {
        type: CHARACTERS,
        payload
    }
}
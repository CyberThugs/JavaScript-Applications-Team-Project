export const COMICS = "COMICS";

export function handleComics(payload){
    return {
        type: COMICS,
        payload
    }
}
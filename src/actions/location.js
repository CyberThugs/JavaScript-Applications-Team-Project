export const LOCATION = "LOCATION";

export function handleLocation(payload){
    return {
        type:LOCATION,
        payload
    }
}
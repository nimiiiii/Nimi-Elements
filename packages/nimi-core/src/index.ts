export const toLower = (input: string) => input.normalize("NFD").replace(/[\u0300-\u036f ]/g, "").toLowerCase()
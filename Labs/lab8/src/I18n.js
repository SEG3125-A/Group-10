// This file is for translation of the app

export function translate(key, language) {
    return STRINGS[key][language];

}

const STRINGS = {
    services: {
        en: "Services",
        fr: "Services",
    },
    professionals: {
        en: "Professionals",
        fr: "Professionnels",
    },
}
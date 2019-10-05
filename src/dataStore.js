import { writable } from "svelte/store"

const a = [
    {
        title: "Lavere Co2 utslipp",
        desc: "Hvor mye Co2 produktene slipper ut gjennom prosessen av å lage og resirkulere varen",
        checked: false
    },
    {
        title: "Dyrevelferd",
        desc: "At dyrene brukt til å produsere denne varer levde et verdig og godt liv, og døde av naturlige årsaker.",
        checked: false
    },
    {
        title: "Arbeidsvilkår",
        desc: "At arbeiderene som var med på å lage dette produktet var behandlet rettferdig, og i varetatt",
        checked: false
    },
    {
        title: "Kortreiste varer",
        desc: "Varen er produsert lokart",
        checked: false
    }
];
const b = [
    {
        title: "Glutenfritt",
        desck: "Check this if you're allergic to gluten, or avoid eating it for other reasons.",
        checked: false
    },
    {
        title: "laktosefri",
        desck: "Check this if you're intolerant to lactose, or avoid eating it for other reasons.",
        checked: false
    },
    {
        title: "Vegetar",
        desck: "Check this if you're a vegetarian",
        checked: false
    },
    {
        title: "Vegan",
        desck: "Check this if you're a vegan",
        checked: false
    }
];

export const climates = writable(a);
export const allergies = writable(b);

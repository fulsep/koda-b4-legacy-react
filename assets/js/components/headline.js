import { createElement } from "react";

export default function(){
    const list = [
        "Israel’s isolation deepens",
        "Trump’s war on the arts",
        "Prince William",
        "Versace’s new era",
        "Tekken",
        "Female cabbies in Mexico City",
        "Selena Gomez weds Benny Blanco"
    ].map(item=>createElement("li", {
        key: `${String(item)}`,
        className: ""
    }, item))
    return createElement("ul", {
        className: "flex md:flex-row flex-col gap-5 md:gap-0 justify-between p-5 md:px-0 md:py-10 ",
    }, list)
}
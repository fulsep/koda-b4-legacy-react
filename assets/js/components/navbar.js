import { createElement } from "react";

export default function(){
    const listMenu = [
        "CNN", "US", "World",
        "Politics", "Business", "Health",
        "Entertainment", "Style", "Travel",
        "Sports"
    ].map(item => ({title: item})).map(item=>createElement("li",{key: `${item.title.toLowerCase()}`}, item.title))
    const listAddOn = [
        "Watch", "Listen", "Live TV"
    ].map(item => ({title: item})).map(item=>createElement("li",{key: `${item.title.toLowerCase()}`}, item.title))
    const menu = createElement("ul", {
        className: "flex md:flex-row flex-col gap-5 md:gap-10 font-bold w-full"
    }, listMenu)
    const addOn = createElement("ul", {
        className: "flex md:flex-row flex-col gap-5 md:gap-10 font-bold w-full"
    }, listAddOn)
    return createElement("nav", {
        className: "md:sticky md:top-0 md:left-0 w-full bg-white shadow-sm flex md:flex-row flex-col justify-between gap-5 md:gap-20 px-5 md:px-0 py-5"
    }, [menu, addOn])
}
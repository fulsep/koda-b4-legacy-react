import { createElement } from "react";
import navbar from "./components/navbar";
import landing from "./pages/landing";
import headline from "./components/headline";

export default function(){
    return [
        navbar(),
        createElement("div", {
            className: "h-[0.5px] bg-black w-full"
        }),
        headline(),
        landing()
    ]
}
import { createElement } from "react";

const leftNews = [
    {
        title: "How the mass shooting and devastating fire unfolded at a Michigan church",
        picture: "https://images.pexels.com/photos/33728147/pexels-photo-33728147.jpeg",
        subItem: [
            "Who was Thomas Sanford, the Michigan shooting suspect?",
            "What we know about deadly shooting and fire at Michigan church"
        ]
    },
    {
        title: "Trump’s Gaza plan gives Netanyahu a tough choice. Which way will he go?",
        picture: "https://images.pexels.com/photos/6009651/pexels-photo-6009651.jpeg",
        subItem: [
            "From diplomacy to soccer, Israel is becoming a pariah on the global stage"
        ]
    }
]

const centerNews = [
    {
        title: "From celebrated mathematicians to AI experts, the list of research talent leaving the US to work in China is glittering – and growing",
        picture: "https://images.pexels.com/photos/33626041/pexels-photo-33626041.jpeg"
    },
    {
        title: "How Trump’s visa hike could hurt US jobs",
        picture: "https://images.pexels.com/photos/33249105/pexels-photo-33249105.jpeg"
    },
    {
        title: "For China’s electric car makers, the boom has become a bloodbath",
        picture: "https://images.pexels.com/photos/33314882/pexels-photo-33314882.jpeg"
    },
    {
        title: "Silicon Valley’s seniors get a crash course in AI",
        picture: "https://images.pexels.com/photos/9641267/pexels-photo-9641267.jpeg"
    }
]

const rightNews = [
    {
        title: "Catch up on today’s global news",
        picture: "https://images.pexels.com/photos/32847638/pexels-photo-32847638.jpeg"
    },
    {
        title: "Married at 14, divorced at 15. A former child bride says she faced daily intimidation and abuse – and she's not alone",
        picture: "https://images.pexels.com/photos/20050653/pexels-photo-20050653.jpeg"
    },
    {
        title: "Personal essay Can the party drug ketamine be a mental health breakthrough? It was for me",
        picture: "https://images.pexels.com/photos/32859501/pexels-photo-32859501.jpeg"
    },
    {
        title: "Bad Bunny to headline Super Bowl LX halftime show",
        picture: "https://images.pexels.com/photos/13119589/pexels-photo-13119589.jpeg"
    }
]

const pict = (src="")=>createElement("img", {
    className: "bg-black aspect-3/2 object-cover rounded min-w-12 w-full h-auto",
    src
})

const lists = (arr=[])=>{
    const list = arr.map(item => createElement("li", {}, item))
    return createElement("ul", {
        className: "list-disc pl-10"
    }, list)
}

const leftSide = createElement("section",{
    className: "flex flex-col gap-5"
}, leftNews.map(item=>createElement("div", {
    className: "flex flex-col gap-3"
},pict(item.picture),item.title, lists(item.subItem))))

const bigCenter = (arr)=>createElement("div", {
    className: "flex flex-col gap-3 md:font-bold md:text-2xl"
}, pict(arr[0].picture),arr[0].title)

const verticalContainer = (el)=>createElement("div", {
    className: "flex flex-row gap-3 text-sm"
}, el)

const centerVertical = (arr)=>arr.map(item => createElement("div", {
    className: "flex-1 flex flex-col gap-3"
}, pict(item.picture), item.title)).filter((o,i)=>i!==0)

const center = createElement("section", {
    className: "md:col-span-2 grid gap-3 md:grid-rows-2"
}, [
    bigCenter(centerNews),
    verticalContainer(centerVertical(centerNews))
])

const firstTwo = rightNews.filter((o,i)=>i<2).map(item => createElement("div", {
    className: "flex flex-col gap-3"
}, pict(item.picture) ,item.title))
const lastTwo = rightNews.filter((o,i)=>i>=2).map(item => createElement("div", {
    className: "flex md:flex-row flex-col gap-3 [&>*]:flex-1"
}, pict(item.picture) ,createElement("div",{},item.title)))

const rightSide = createElement("section", {
    className: "flex flex-col gap-5",
},[firstTwo, lastTwo])

export default function(){
    return createElement("main", {
        className: "grid grid-cols-1 md:grid-cols-4 gap-5 p-5 md:p-10"
    }, [
        leftSide,
        center,
        rightSide,
    ])
}
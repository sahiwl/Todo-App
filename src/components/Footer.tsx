import React from "react"
export const Footer = () => {
    return (

        <footer className="flex px-4 absolute bottom-0 py-4 justify-between w-full border-t-[1px] dark:border-cyan-400 backdrop-blur-xl shadow-xl border-[#4e201c]" >
            <span className="text-zinc-500 font-semibold font-exo2">
               made by sahil 😉
            </span>
            <span className="flex space-x-5 text-zinc-500 font-exo2 font-semibold">
                <a href="https://sahiwl.vercel.app/links" target="_blank" className="hover:underline">connect with me!!</a>                   
            </span>
        </footer>
    )
}
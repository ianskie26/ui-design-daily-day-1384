import React from "react"

export default function Filters() {
    return (
        <div className="filters--wrapper">
            <div className="left--filter">
                <a href="#" className="latest">Latest</a>
                <a href="#" className="popular">Popular</a>
            </div>
            <div className="center--filter">
                <a href="#" className="all-filter">All</a>
                <a href="#" className="unfocus-filter">Web</a>
                <a href="#" className="unfocus-filter">Mobile</a>
                <a href="#" className="unfocus-filter">UI Kit</a>
                <a href="#" className="unfocus-filter">Coded</a>
            </div>
            <div className="right--filter">
                <a>
                    <img src="./images/figma.svg"></img>
                </a>
                <a className="with-border">
                    <img src="./images/sketch.svg"></img>
                </a>
                <a>
                    <img src="./images/studio.svg"></img>
                </a>
                <a>
                    <img src="./images/adobe-xd.svg"></img>
                </a>
                <a>
                    <img src="./images/adobe-ps.svg"></img>
                </a>
            </div>
        </div>
    )
}
import React from "react"

export default function Banner() {
    return (
        <div className="banner">
            <div className="banner--text">
                <h1>Free UI resources for everyone</h1>
                <p>The largest database of 100% free UI components and designs available in the formats popular by UI designers.</p>
                <div className="bar">
                    <div className="dropdown">
                    Free designs <i class="fa fa-solid fa-angle-down"></i>
                    </div>
                    <form>
                    <i class="fas fa-search"></i>
                    <input type="search" placeholder="Search" className="search--input"></input>
                    </form>
                </div>
            </div>
        </div>
    )
}
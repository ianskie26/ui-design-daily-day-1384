import React from "react"

export default function Cards(props) {

    return (
        <div className="cards">
            <img src={`../images/${props.item.coverImg}`} className="card--image" />
            <div className="card--stats">
                <div className="user-info">
                    <img src="../images/dp.png" className="thumbnail" />
                    <p>by <b>Jenny Molla</b></p>
                </div>
                <div className="cards-num">
                    <p><i class="fas fa-code"></i> 25</p>
                </div>
            </div>
        </div>
    )
}
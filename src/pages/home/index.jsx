import React from "react";
import Comics from "../../components/comics";
import Banner from "../../components/banner";

export default function Home () {
    return (
        <div className="pages">
            <Banner/>
            <h2 className="title">Buy Now!</h2>
            <Comics amountOfComics={8}/>
        </div>
    )
}
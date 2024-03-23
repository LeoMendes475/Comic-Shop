import React from "react";
import Comics from "../../components/comics";

export default function ComicsPage () {
    return (
        <div className="pages page__content">
            <h1 class="page__title">Comics</h1>
            <Comics amountOfComics={18}/>
        </div>
    )
}
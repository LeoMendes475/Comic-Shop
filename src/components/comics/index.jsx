import React, { useEffect, useState }  from "react";
import api from "../../services/api";
import './comics.css'

function Comics (props) {

    const [comics, setComics] = useState([])

    useEffect(() => {
        api.get('/comics')
        .then(response => {
            setComics(response.data.data.results)
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <div className="comic-content">
            {comics.slice(2, props.amountOfComics).map(character => {
                return (
                    <div key={character.id} className="comic-card">
                        <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.title} title={character.title} />
                        <div className="comic-details">
                            <h2 className="name">{character.title}</h2>
                            <div>
                                <p>Marvel</p>
                                <p>2015</p>
                                <p>{character.pageCount ? character.pageCount : '40'} pages</p>
                                <p>7,48 x 11,02 cm</p>
                            </div>
                            <a href="#"><i class='bx bx-cart'></i> ${character.prices[0].price ? character.prices[0].price : '5.99'}</a>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Comics
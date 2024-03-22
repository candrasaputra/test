import React, { useState, useEffect } from "react"
import { createRoot } from "react-dom/client"
import axios from "axios"

function ColorSelector() {
    const [planet, setPlanet] = useState('')
    const onChange = e => setPlanet(e.target.value)

    const [planets, setPlanets] = useState([]);

    useEffect(() => {
      axios.get(`https://swapi.dev/api/planets`)
        .then(res => {
          setPlanets(res.data.results);
        })
    }, []);

    return (
        <>
            <select onChange={onChange} value={planet}>
              <option key="opt-0">{`-- Select Planet --`}</option>
              {planets.map(
                    (payload, index) => (
                        <option key={`opt-${index + 1}`} value={payload.name}>{payload.name}</option>
                    )
                )}
            </select>
            {planet && <p>{`You have selected: ${planet}`}</p>}
        </>
    )
}

const root = createRoot(document.getElementById("root"))
root.render(<ColorSelector />)
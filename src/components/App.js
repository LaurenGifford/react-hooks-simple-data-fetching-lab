import React, {useState, useEffect} from "react"

function App() {
    const [isLoaded, setIsLoaded] = useState(false)
    const [dogImage, setDogImage] = useState("")

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setIsLoaded(true)
            setDogImage(() => data.message)
        })
    }, [])

    return (
        <div>
            {!isLoaded ? <p>Loading...</p> : <img src={dogImage} alt="A Random Dog"/>}
        </div>
    )
}

export default App

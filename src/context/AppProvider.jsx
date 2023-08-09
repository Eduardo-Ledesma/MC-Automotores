import { useState, createContext } from "react"

const AppContext = createContext()

const AppProvider = ({ children }) => {

    const [cars, setCars] = useState([ 'Auto1', 'Auto2', 'Auto3', 'Auto4', 'Auto5', 'Auto6', 'Auto7', 'Auto8', 
    'Auto9', 'Auto12', 'Auto13', 'Auto14', 'Auto17', 'Auto18', 'Auto19', 'Auto20', 'Auto21' ])

    const [showGallery, setShowGallery] = useState(false)


    const handleShowGallery = () => {
        setShowGallery(!showGallery)
    }

    return <AppContext.Provider
        value={{
            cars,
            handleShowGallery,
            showGallery
        }}
    >
        {children}
    </AppContext.Provider>
}

export {
    AppProvider
}

export default AppContext
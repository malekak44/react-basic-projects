import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';

const AppContext = createContext();
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";


const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('s');
    const [cocktails, setCocktails] = useState([]);

    const fetchData = useCallback(async () => {
        try {
            const response = await fetch(`${url}${searchTerm}`);
            const data = await response.json(response);

            const { drinks } = data;
            if (drinks) {
                const newCocktails = drinks.map((item) => {
                    const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass, } = item;
                    return {
                        id: idDrink, name: strDrink, image: strDrinkThumb, info: strAlcoholic, glass: strGlass
                    }
                });
                setLoading(false);
                setCocktails(newCocktails);
            }
        } catch (error) {
            console.log(error);
        }
    },
        [searchTerm],
    )

    useEffect(() => {
        fetchData();
    }, [searchTerm, fetchData]);

    return (
        <AppContext.Provider value={{ loading, cocktails, setSearchTerm }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppProvider };
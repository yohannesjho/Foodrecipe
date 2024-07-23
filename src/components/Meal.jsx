import React, { useEffect, useState } from 'react'
import MealItem from './MealItem'
import RecipeIndex from './RecipeIndex'

const Meal = () => {
    const [item, setItem] = useState()
    const [show,setShow] = useState(false)
    const [url, setUrl] = useState('https:/www.themealdb.com/api/json/v1/1/search.php?f=a')
    const [search, setSearch] = useState('')
    useEffect(() => {
        fetch(url).then(response => response.json()).then(
            data => { console.log(data.meals) 
                setItem(data.meals)
                setShow(true)
            }

        )
    }, [url])

    const setIndex = (alpha) =>{
        setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`)
    }

    const searchRecipe = (e)=>{
       if(e.key==="Enter"){
        setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
       }
    }
    return (
        <>
            <div className='main'>
                <div className="heading">
                    <h1>Search your Food Recipe</h1>
                    <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, aperiam. Accusantium numquam laborum quidem quod aperiam magni ipsum voluptates inventore velit quos, repellat provident fugit quibusdam repellendus? Tempora, inventore beatae.</h4>
                </div>
                <div className="searchBox">
                    <input type="text" className="search-bar" onChange={e=>setSearch(e.target.value)} onKeyPress={searchRecipe}/>
                </div>
                <div className="container">
                  
                     {
                        show?  <MealItem data={item}/>:"No data to show"
                     }
                </div>
                <div className="indexContainer">
                    <RecipeIndex alphaIndex={(alpha)=>setIndex(alpha)}/>
                </div>
            </div>
        </>

    )
}

export default Meal
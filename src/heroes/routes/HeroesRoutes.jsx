import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui"
import { DcPage, HeroPage, MarvelPage, SearchHeroPage } from "../pages"

export const HeroesRoutes = () => {
  return (
    <>
        <Navbar/>
        <div className='container-sm'>
            <Routes>
                    <Route path='marvel' element={<MarvelPage/>}/>
                    <Route path='dc' element={<DcPage/>}/>
                    <Route path='search' element={<SearchHeroPage/>}/>
                    <Route path='hero/:id' element={<HeroPage/>}/>
                    <Route path='/' element={<Navigate to="/marvel"/>}/>
            </Routes>
        </div>
        
    </>
  )
}

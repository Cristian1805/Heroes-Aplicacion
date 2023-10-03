import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../../ui';
import { DcPage, HeroPage, MarvelPage, ProductoForm, ProveedorForm, SearchPage} from '../pages';
// import AgregarProducto from '../pages/AgregarProducto';

export const HeroesRoutes = () => {
  return (
    <>
        <Navbar />

        <div className="container">
            <Routes>
                <Route path="marvel" element={<MarvelPage />} />
                <Route path="dc" element={<DcPage />} />

                <Route path="productos" element = {<ProductoForm />} /> 
                
                <Route path="search" element={<SearchPage />} />
                <Route path="hero/:id" element={<HeroPage />} /> 


                <Route path="proveedores" element={<ProveedorForm/>} />
                                

                <Route path="/" element={<Navigate to="/marvel" />} />

            </Routes>
        </div>


    </>
  )
}

import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../../ui';
import { DcPage, HeroPage, MarvelPage, ProductoForm, ProveedorForm, SearchPage, Reportes, InventarioSalida} from '../pages';
// import AgregarProducto from '../pages/AgregarProducto';

export const HeroesRoutes = () => {
  return (
    <>
        <Navbar />

        <div className="container"> 
            <Routes>
                <Route path="tropicales" element={<MarvelPage />} />
                <Route path="importadas" element={<DcPage />} />

                <Route path="productos" element = {<ProductoForm />} /> 
                
                <Route path="search" element={<SearchPage />} />
                <Route path="hero/:id" element={<HeroPage />} /> 


                <Route path="proveedores" element={<ProveedorForm/>} />


                <Route path="salida-frm/:id" element={<InventarioSalida/>} />

                <Route path="reportes" element= {<Reportes /> } />
                                

                <Route path="/" element={<Navigate to="/inicio" />} />

            </Routes>
        </div>


    </>
  )
}

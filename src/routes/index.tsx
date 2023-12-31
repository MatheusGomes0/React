import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/home'
import NotFound from '../pages/not-found'
import Produtos from '../pages/produtos'
import Sobre from '../pages/sobre'
import Tarefas from '../pages/tarefas'
  
const router = createBrowserRouter([
{path: '/', element: <Home />, errorElement: <NotFound />},
{path: '/sobre', element: <Sobre />},
{path: '/produtos', element: <Produtos />},
{path: '/tarefas', element: <Tarefas />}
])

export default router
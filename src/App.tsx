import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Layout from './layout/layout'

// 懒加载页面组件
const Products=lazy(()=>import("./page/products"))


const NotFound = lazy(() => import('./page/404'))

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="p-8 text-lg">Loading...</div>}>

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Products />} />
            <Route path="products" element={<Products />} />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

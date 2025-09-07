import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Layout from './layout/layout'

// 懒加载页面组件
const Product=lazy(()=>import("./page/product"))


const NotFound = lazy(() => import('./page/404'))

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="p-8 text-lg">Loading...</div>}>

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="project" replace/>} />
            <Route path="product" element={<Product />} />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

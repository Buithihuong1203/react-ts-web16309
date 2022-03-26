import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ShowInfo from './components/ShowInfo'

import type { ProductType } from './types/product';
import { add, list, remove, update } from './api/product';
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import AdminLayout from './pages/layouts/AdminLayout';
import WebsiteLayout from './pages/layouts/WebsiteLayout';
import Dashboard from './pages/Dashboard';
import ProductManager from './pages/ProductManager';
import ProductDetail from './pages/ProductDetail';
import ProductAdd from './pages/ProductAdd';
import ProductEdit from './pages/ProductEdit';
import PrivateRouter from './components/PrivateRouter';
import TestShowInfo from './components/TestShowInfo';
import Signin from './pages/Signin';
import { UserType } from './types/user';
import { signin } from './api/user';


//function App() {
//  const [count, setCount] = useState<number>(0)
//  const [info, setInfo] = useState<Product>({
////    name: "Huong",
//    age: 21
//  });

//  return (
//    <div className='App'>
//      <ShowInfo person={info} />
//      {count}<button onClick={() => (setCount((count) => count + 1))}>Click</button>

//    </div>
////  )
//}

//export default App


function App() {
    const [products, setProducts] = useState<ProductType[]>([])
    const [users, setUsers] = useState<UserType[]>([])

    useEffect(() => {
        const getProducts = async () => {
            const { data } = await list();
            setProducts(data);
        }
        getProducts();
    }, []);
    //add product
    const onHandleAdd = async (product: ProductType) => {
        //console.log('app.js', product);
        //api
        const { data } = await add(product);
        console.log(data)
        //reRender 
        setProducts([...products, data]);
    }

    //remove product
    const onHanHandleRemove = async (id: number) => {
        remove(id);
        //render
        setProducts(products.filter(item => item.id !== id));
    }
    //update product
    const onHandleUpdate = async (product: ProductType) => {
        try {
            //api
            const { data } = await update(product);
            //reRender
            //tạo ra 1 vòng lặp , nếu item.id == id sản phẩm vừa cập nhật (data) , thì cập nhật ngược lại giữ nguyên
            setProducts(products.map(item => item.id === data.id ? product : item))
        } catch (error) {

        }
    }
    const onHandleSignin = async (user: UserType) => {

        const data = await signin(user);
        console.log(data)
        //setUsers([...users, data]);


    }


    return (
        <div className="App">
            <header>
                <ul>
                    <li><NavLink to="/">Home Page</NavLink></li>
                    <li><NavLink to="/product">Product</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                </ul>
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<WebsiteLayout />}>
                        <Route index element={<HomePage />} />
                        <Route path="product">
                            <Route index element={<ProductPage />} />
                            <Route path=":id" element={<ProductDetail />} />
                        </Route>
                        <Route path="signin" element={<Signin onSignIn={onHandleSignin} />} />
                    </Route>
                    <Route path="admin" element={<PrivateRouter><AdminLayout /></PrivateRouter>}>
                        <Route index element={<Navigate to="dashboard" />} />
                        <Route path="dashboard" element={<Dashboard />} />
                        <Route path="product">
                            <Route index element={<ProductManager products={products} onRemove={onHanHandleRemove} />} />
                            <Route path="add" element={<ProductAdd onAdd={onHandleAdd} />} />
                            <Route path=":id/edit" element={<ProductEdit onUpdate={onHandleUpdate} />} />
                        </Route>
                        <Route path="login" element={<h1>Login page</h1>} />

                    </Route>
                </Routes>
            </main>
        </div>
    )
}

export default App

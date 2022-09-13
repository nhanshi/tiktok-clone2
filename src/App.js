import './App.css';
import React from 'react';
// ReactDOM sử dụng trong các phiên bản cũ của nodejs
// import ReactDOM from 'react-dom';

// // createRoot sử dụng trong các phiên bản mới của nodejs
// import { createRoot } from 'react-dom/client';

// // import để sử dụng trong phần Forms
import { useState } from 'react';

// // import để sử dụng trong phần Router , cần master page và child page
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// // import Todos là tên function để sử dụng trong React Memo hoặc React useCallback Hook,
// // cần vào file này thay đổi sử dụng function Todos nào tùy theo trường hợp sử dụng
// // import Todos from "./Todos";

// // // import css sử dụng trong React Css
// // import "./example.css";
// // // import Car from './Car.js';

// // // import scss , scss là css do server tạo ra sử dụng trong React Css
// // import './my-sass.scss';

// import useEffect sử dụng trong React Hooks useEffect
import { useEffect } from 'react';

// import createContext để sử dụng trong React Hooks The Solution  >> Create Context
import { createContext } from 'react';

// import createContext để sử dụng trong React Hooks The Solution >> useContext
import { useContext } from 'react';

// import useRef để sử dụng trong React useRef Hooks
import { useRef } from 'react';

// import useReducer để sử dụng trong React useReducer Hooks
import { useReducer } from 'react';

// import useCallback để sử dụng trong React useCallback Hooks
import { useCallback } from 'react';

// import useMemo để sử dụng trong React useMemo Hooks
import { useMemo } from 'react';

// import useMemo để sử dụng trong React useMemo Hooks
import { memo } from 'react';

// import useFetch là tên function import từ File ngoài để sử dụng trong React Custom Hooks
// import useFetch from "./useFetch";

// useRef là hàm nhận 1 đối số initial value

// 1. memo () -> Higher Order Component(HOC)
// 2. useCallback()
//   - Reference types
//   - React memo()
//

// Hooks
// HOC
// Render props
// import function ko sử dụng {} , import param sử dụng {}

// import Content from "./Content";

// Context
// Đơn giản hóa việc truyền dữ liệu từ component cha xuống các component con mà ko cần sử dụng tới props

// Ví dụ Component A => Component B => Component C
// Tạo theme chuyển đổi màu Dark / Light

// 1. Create context
// 2. Provider
// 3. Consumer

// khi ko khai báo gì sau /store thì nó mặc định chạy vào file index.js nằm trong folder /store
// useStore nằm trong file hooks của folder store, actions cũng vậy
// import { useStore, actions } from './store'

import Video from './Videos';

import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';

import { DefaultLayout } from '~/components/Layout';

function App() {
    return (
        <Router>
            <div className="App" style={{ padding: '0px 20px' }}>
                <Routes>
                    {publicRoutes.map((route, index) => {
                        // Component muốn đặt biến dùng JSX thì ta phải viết hoa chữ cái đầu
                        // nếu ko set route.layout thì mắc định set DefaultLayout cho biến layout
                        // nếu route.layout === null (trang upload )thì Layout component lúc này chỉ là thẻ Fragment
                        // là 1 thẻ bọc bên ngoài để React khỏi lỗi chứ nó ko sinh ra thẻ html nào
                        // const Layout = route.layout === null ? Fragment : DefaultLayout;

                        // Có 1 trường hợp nữa là trang Upload có 1 layout riêng chỉ sử dụng lại Header vì vậy
                        // ta viết lại Layout component
                        // đầu tiên cho nó mặc định là DefaultLayout đã
                        const Layout = DefaultLayout;
                        // set điều kiện nếu route đó có đối số layout được khai báo
                        if (route.layout) {
                            Layout = route.layout;
                        } // nếu đối số layout đó === null
                        else if (route.layout === null) {
                            Layout = Fragment;
                        }

                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        {/* Page component lúc này trở thành children của Layout Component(DefaultLayout) */}
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;

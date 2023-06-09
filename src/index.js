import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { Routes, Route, HashRouter } from 'react-router-dom';

import Home from './pages/home';
import Login from './pages/home/components/Login';
import Register from './pages/home/components/Register';
import RecipeList from './pages/recipe/index';
// import Tag from './pages/tag/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <HashRouter>
        <Routes>
            <Route element={<Home />}>
                <Route path='/' element={<RecipeList />} />
                <Route path='login' element={<Login />} />
                <Route path='register' element={<Register />} />
            </Route>
            <Route path='recipe' element={<RecipeList />} />
            {/* <Route path='tag' element={<Tag />} /> */}
        </Routes>
    </HashRouter>
  </div>
);

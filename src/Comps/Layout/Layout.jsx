import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../Nav/Nav2'
import Footer from '../Footer/Footer';
import PortfolioImg from '../Assets/imgsVids/Portfolio.png'
import './Layout.css'

const Layout = () => (
  <div id='layout' className="layout-wrapper">
  <div className="bg-image"  />
  <div className="overlay" />
  <Nav />
  <main className="page-content">
    <Outlet />
  </main>
  <Footer />
</div>

);

export default Layout

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MenuDrawer from './header-drawer'
import HeaderBasket from './header-basket'
import Filter from './filter'
import HeaderLogin from './Input-Design/header-login'
import HeaderSearch from './Input-Design/header-search'
import HeaderNav from './header-nav'


export default function Header() {
    return (
        <header>

            <div className='header'>
                <div className="container header-wrapper">
                    <div className='useful-info'>
                        <img src="/public/truck.png" alt="" />
                        <p>81 ilde mağazadan ÜCRETSİZ TESLİMAT fırsatı!</p>
                    </div>

                    <div className='header-links'>
                        <Link>
                            <img style={{ width: '30px', height: '30px' }} src="/public/jel.png" alt="" />
                            <span>Gratis Beauty</span>
                        </Link>
                        <Link>
                            <img src="/public/header-gift.png" alt="" />
                            <span>Hediye Kart</span>
                        </Link>
                        <Link>
                            <img src="/public/header-help.png" alt="" />
                            <span>Yardım ve Destek</span>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="nav-wrapper">
                <nav className='nav-menu container'>
                    <MenuDrawer />
                    <figure className='header-actions'>
                        <HeaderSearch />
                        <HeaderLogin />
                        <Link>
                            <img src="/public/heart.png" alt="" />
                        </Link>
                        <HeaderBasket />
                        <Link className='header-action count-bell'>
                            <div className='bell'>
                                <img src="/public/bell.png" alt="" />
                                <span>0</span>
                            </div>
                        </Link>
                    </figure>
                </nav>
            </div>
            <div>
                <HeaderNav />
            </div>
        </header>
    )
}

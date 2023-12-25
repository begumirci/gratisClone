import React from 'react'
import { Link } from 'react-router-dom'


export default function HeaderNav() {
  return (
    <div className='header-nav'>
      <div className='container'>
        <ul className='header-nav-list'>
          <li>
            <a href="#">Makyaj</a>
            <span className='tre'></span>
            <div className='mega-menu'>
              <div className='container'>
                <div className='mega-menu-lists'>
                  <div>
                    <h4>Dudak Makyajı</h4>
                    <Link>Ruj</Link>
                    <Link>Likit Ruj</Link>
                  </div>
                  <div>
                    <h4>Yüz Makyajı</h4>
                    <Link>Aydınlatıcı</Link>
                    <Link>Fondöten</Link>
                  </div>
                  <div>
                    <h4>Makyaj Fırçaları</h4>
                  </div>
                </div>
              </div>
            </div> 
          </li>
          <li>
            <a href="#">Cilt Bakım</a>
            <span className='tre'></span>
            <div className='mega-menu'>
              <div className='container'>
                <div className='mega-menu-lists'>
                  <div>
                    <h4>Dudak Makyajı</h4>
                    <Link>Ruj</Link>
                    <Link>Likit Ruj</Link>
                  </div>
                  <div>
                    <h4>Yüz Makyajı</h4>
                    <Link>Aydınlatıcı</Link>
                    <Link>Fondöten</Link>
                  </div>
                  <div>
                    <h4>Makyaj Fırçaları</h4>
                  </div>
                </div>
              </div>
              </div> 
          </li>
          <li>
            <a href="#">Saç Bakım</a>
            <span className='tre'></span>
            <div className='mega-menu'></div> 
          </li>
          <li>
            <a href="#">Parfüm & Deodorant</a>
            <span className='tre'></span>
            <div className='mega-menu'></div> 
          </li>
          <li>
            <a href="#">Erkek Bakım</a>
            <span className='tre'></span>
            <div className='mega-menu'></div> 
          </li>
          <li>
            <a href="#">Kişisel Bakım</a>
            <span className='tre'></span>
            <div className='mega-menu'></div> 
          </li>
          <li>
            <a href="#">Anne & Bebek</a>
            <span className='tre'></span>
            <div className='mega-menu'></div> 
          </li>
          <li>
            <a href="#">Ev & Yaşam</a>
            <span className='tre'></span>
            <div className='mega-menu'></div> 
          </li>
          <li>
            <a href="#">Moda & Aksesuar</a>
            <span className='tre'></span>
            <div className='mega-menu'></div> 
          </li>
          <li>
            <a href="#">Süpermarket</a>
            <span className='tre'></span>
            <div className='mega-menu'></div> 
          </li>
          <li>
            <a href="#">Elektrikli Ürünler</a>
            <div className='mega-menu'></div> 
          </li>
        </ul>
      </div>
    </div>
    
  )
}

import React from 'react'
import { Link } from 'react-router-dom'

export function FooterMainInfo() {
    return(
        <div className='footer-bar'>
            <ul className='footer-bar-list'>
                <Link className='footer-bar-item'>
                    <img src='/public/shopping.svg' alt="" />
                    <span>Mağazalarımız</span>
                    <span className='line'></span>
                </Link>
                <li className='footer-bar-item'>
                    <img src={kamyon} alt="" />
                    <a href="#">Kolay İade</a>
                    <span className='line'></span>
                </li>
                <li className='footer-bar-item'>
                    <img src={help} alt="" />
                    <a href="#">Yardım ve Destek</a>
                    <span className='line'></span>
                </li>
                <li className='footer-bar-item'>
                    <img src={contact} alt="" />
                    <a href="#">İletişim</a>
                </li>
            </ul>
        </div>
    )
}

export default function FooterMobilInfo() {
  return (
    <>
          <div className='useful-bar-mobil'>
              <div className='useful-links container'>
                  <div>
                      <Link href="#">
                          <img src='/public/shopping.svg' alt="" />
                          <span>Mağazalarımız</span>
                      </Link>
                      <Link href="#">
                          <img src='/public/help.svg' alt="" />
                          <span>Yardım ve Destek</span>
                      </Link>
                  </div>
                  <div>
                      <Link href="#">
                          <img src='/public/kamyon.svg' alt="" />
                          <span>Kolay İade</span>
                      </Link>
                      <Link href="#">
                          <img src='/public/iletisim.svg' alt="" />
                          <span>İletişim</span>
                      </Link>
                  </div>
              </div>
          </div> 
          <div className='useful-bar-main'>
              <div className='useful-links container'>
                      <Link href="#">
                          <img src='/public/shopping.svg' alt="" />
                          <span>Mağazalarımız</span>
                          <span className='line'></span>
                      </Link>
                      <Link href="#">
                          <img src='/public/help.svg' alt="" />
                          <span>Yardım ve Destek</span>
                          <span className='line'></span>
                      </Link>
                      <Link href="#">
                          <img src='/public/kamyon.svg' alt="" />
                          <span>Kolay İade</span>
                          <span className='line'></span>
                      </Link>
                      <Link href="#">
                          <img src='/public/iletisim.svg' alt="" />
                          <span>İletişim</span>
                      </Link>
              </div>
          </div> 
    </>
  )
}

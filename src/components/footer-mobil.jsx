import React from 'react'
import { Link } from 'react-router-dom'


export default function FooterMobil() {
  return (
    <div>
        <div className='footer-mobil-bar'>
            <div className='call-us-bar'>
                  <Link>
                      <img src='/public/phone.png' alt="" />
                      0 850 210 69 00
                  </Link>
            </div>
            <div className='navs'>
                <Link>
                    <img src='/public/shop.png' alt="" />
                    <span>Hediye Kart</span>
                </Link>
                <Link>
                    <img src='/public/catalog.png' alt="" />
                    <span>Katalog</span>
                </Link>
            </div>
            <div className='navs nav-links'>
                  <Link><span>Hakkımızda</span></Link>
                  <Link className='kurumsal'><span>Kurumsal Satış</span></Link>
                  <Link><span>Kampanyalar</span></Link>
            </div>
            <div className='navs app-links'>
                <Link>
                    <img src='/public/apple.svg' alt="" />
                     <span>App Store</span>
                </Link>
                <Link>
                    <img src='/public/play.svg' alt="" />
                    <span>Google Play</span>
                </Link>
            </div>
            <div className='social-links'>
                <Link><img src='/public/facebook.svg' alt="" /></Link>
                <Link><img src='/public/instagram.svg' alt="" /></Link>
                <Link><img src='/public/twitter.svg' alt="" /></Link>
                <Link><img src='/public/youtube.svg' alt="" /></Link>
            </div>
            <div className='footer-bottom-bar'>
                <img src="/public/logo-footer.svg" alt="" />
                <span>Copyright © 2015, Gratis A.Ş.</span>
                <div className='bottom-links'>
                    <div>
                        <Link>Gizlilik ve Çerez</Link>
                        <Link>Kullanım Koşulları</Link>
                    </div>
                    <Link>Bilgi Toplumu Hizmetleri</Link>
                </div>
                <Link>Yasal Uyarı ve Aydınlatma Metni</Link>

            </div>
        </div>

        <div className='footer-main-bar'>
            <div className='container'>
                <div className='row'>
                        <div className='footer-links'>
                            <Link><h4>Makyaj</h4></Link>
                            <Link><h4>Cilt Bakım</h4></Link>
                            <Link><h4>Saç Bakım</h4></Link>
                            <Link><h4>Parfüm & Deodorant</h4></Link>
                            <Link><h4>Erkek Bakım</h4></Link>
                            <Link><h4>Kişisel Bakım</h4></Link>
                            <Link><h4>Anne & Bebek</h4></Link>
                            <Link><h4>Ev & Yaşam</h4></Link>
                            <Link><h4>Moda & Aksesuar</h4></Link>
                            <Link><h4>Süpermarket</h4></Link>
                            <Link><h4>Elektrikli Ürünler</h4></Link>
                        </div>
                        <div>
                          <div className='footer-links'>
                              <Link><h4>Kampanyalar</h4></Link>
                              <Link><h4>Markalar</h4></Link>
                          </div>
                          <div className='footer-links-icon font'>
                              <Link><img src="/public/shop.png" alt="" />Mağazalarımız</Link>
                              <Link><img src="/public/shop.png" alt="" />Hediye Kart</Link>
                              <Link><img src="/public/catalog.png" alt="" />Katalog</Link>
                          </div>
                        </div>
                        <div className='next'>
                          <div className='footer-links-icon'>
                              <h4>Gratis</h4>
                              <Link>Hakkımızda</Link>
                              <Link>İletişim</Link>
                              <Link>Kariyer</Link>
                              <Link>Kurumsal Satış</Link>
                              <Link>İş Birliği</Link>
                          </div>
                          <div className='footer-links-icon'>
                              <h4>Yardım ve Destek</h4>
                              <Link>Sipariş Süreci</Link>
                              <Link>Kolay İade</Link>
                              <Link>Üyelik</Link>
                              <Link className='communication'>
                                  <img src='/public/phone.png' alt="" />
                                  <span>0 850 210 69 00</span>
                              </Link>
                          </div>
                        </div>

                        <div className='footer-links-icon'>
                              <h4>Bizi Takip Edin</h4>
                              <Link><img src="/public/facebook.svg" alt="" />Facebook</Link>
                              <Link><img src="/public/instagram.svg" alt="" />İnstagram</Link>
                              <Link><img src="/public/twitter.svg" alt="" />Twitter</Link>
                              <Link><img src="/public/youtube.svg" alt="" />Youtube</Link>
                        </div>
                        <div className='footer-links-icon'>
                            <h4>Uygulamamızı İndirin</h4>
                            <Link><img src="/public/apple.svg" alt="" />App Store</Link>
                            <Link><img src="/public/play.svg" alt="" />Google Play</Link>
                        </div>
                    


                    
                </div>  
                <div className='rel'>
                    <div className='footer-auth'>
                          <span>Gratis'e</span>
                          <div className='auth-group'>
                              <button className='btn btn-'><a href="/login">Giriş Yap</a></button>
                              <button className='btn btn--'><a href="/register">Üye Ol</a></button>
                          </div>
                    </div>
                </div>
            </div>
            <div className='footer-bottom-bar'>
                  <img src="/public/logo-footer.svg" alt="" />
                  <span>Copyright © 2015, Gratis A.Ş.</span>
                  <div className='bottom-links-top'>
                      <div className='bottom-links'>
                          <div>
                              <Link>Gizlilik ve Çerez</Link>
                              <Link>Kullanım Koşulları</Link>
                          </div>
                          <Link className='info'>Bilgi Toplumu Hizmetleri</Link>
                      </div>
                      <Link>Yasal Uyarı ve Aydınlatma Metni</Link>
                  </div>
            </div>
        </div>
    </div>
  )
}

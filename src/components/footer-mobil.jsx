import { Link } from 'react-router-dom';
import facebook from '../../public/facebook.svg';
import instagram from '../../public/instagram.svg';
import twitter from '../../public/twitter.svg';
import youtube from '../../public/youtube.svg';
import phone from '../../public/phone.png';
import shop from '../../public/shop.png';
import catolog from '../../public/catalog.png';
import apple from '../../public/apple.svg';
import googlePlay from '../../public/play.svg';
import logoFooter from '../../public/logo-footer.svg';

export default function FooterMobil() {
  function up() {
    window.scrollTo(0, 0);
  }

  return (
    <div>
      <div className='footer-mobil-bar'>
        <div className='call-us-bar'>
          <Link>
            <img src={phone} alt='' />0 850 210 69 00
          </Link>
        </div>
        <div className='navs'>
          <Link>
            <img src={shop} alt='' />
            <span>Hediye Kart</span>
          </Link>
          <Link>
            <img src={catolog} alt='' />
            <span>Katalog</span>
          </Link>
        </div>
        <div className='navs nav-links'>
          <Link>
            <span>Hakkımızda</span>
          </Link>
          <Link className='kurumsal'>
            <span>Kurumsal Satış</span>
          </Link>
          <Link>
            <span>Kampanyalar</span>
          </Link>
        </div>
        <div className='navs app-links'>
          <Link>
            <img src={apple} alt='' />
            <span>App Store</span>
          </Link>
          <Link>
            <img src={googlePlay} alt='' />
            <span>Google Play</span>
          </Link>
        </div>
        <div className='social-links'>
          <Link>
            <img src={facebook} alt='' />
          </Link>
          <Link>
            <img src={instagram} alt='' />
          </Link>
          <Link>
            <img src={twitter} alt='' />
          </Link>
          <Link>
            <img src={youtube} alt='' />
          </Link>
        </div>
        <div className='footer-bottom-bar'>
          <img src={logoFooter} alt='' />
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
              <Link>
                <h4>Makyaj</h4>
              </Link>
              <Link>
                <h4>Cilt Bakım</h4>
              </Link>
              <Link>
                <h4>Saç Bakım</h4>
              </Link>
              <Link>
                <h4>Parfüm & Deodorant</h4>
              </Link>
              <Link>
                <h4>Erkek Bakım</h4>
              </Link>
              <Link>
                <h4>Kişisel Bakım</h4>
              </Link>
              <Link>
                <h4>Anne & Bebek</h4>
              </Link>
              <Link>
                <h4>Ev & Yaşam</h4>
              </Link>
              <Link>
                <h4>Moda & Aksesuar</h4>
              </Link>
              <Link>
                <h4>Süpermarket</h4>
              </Link>
              <Link>
                <h4>Elektrikli Ürünler</h4>
              </Link>
            </div>
            <div>
              <div className='footer-links'>
                <Link>
                  <h4>Kampanyalar</h4>
                </Link>
                <Link>
                  <h4>Markalar</h4>
                </Link>
              </div>
              <div className='footer-links-icon font'>
                <Link>
                  <img src={shop} alt='' />
                  Mağazalarımız
                </Link>
                <Link>
                  <img src={shop} alt='' />
                  Hediye Kart
                </Link>
                <Link>
                  <img src={catolog} alt='' />
                  Katalog
                </Link>
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
                  <img src={phone} alt='' />
                  <span>0 850 210 69 00</span>
                </Link>
              </div>
            </div>

            <div className='footer-links-icon'>
              <h4>Bizi Takip Edin</h4>
              <Link>
                <img src={facebook} alt='' />
                Facebook
              </Link>
              <Link>
                <img src={instagram} alt='' />
                İnstagram
              </Link>
              <Link>
                <img src={twitter} alt='' />
                Twitter
              </Link>
              <Link>
                <img src={youtube} alt='' />
                Youtube
              </Link>
            </div>
            <div className='footer-links-icon'>
              <h4>Uygulamamızı İndirin</h4>
              <Link>
                <img src={apple} alt='' />
                App Store
              </Link>
              <Link>
                <img src={googlePlay} alt='' />
                Google Play
              </Link>
            </div>
          </div>
          <div className='rel'>
            <div className='footer-auth'>
              <span>Gratis'e</span>
              <div className='auth-group'>
                <Link to='/login' className='btn btn-' onClick={up}>
                  Giriş Yap
                </Link>

                <Link to='/register' className='btn btn-' onClick={up}>
                  Üye Ol
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='footer-bottom-bar'>
          <img src={logoFooter} alt='' />
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
  );
}

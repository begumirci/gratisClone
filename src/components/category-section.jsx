import { Link } from 'react-router-dom';

export default function CategorySection() {
  return (
    <div className='all-categories'>
      <h1>Tüm Kategoriler</h1>
      <div className='categories'>
        <Link>
          <img src='/public/makyaj.png' alt='' />
        </Link>
        <Link>
          <img src='/public/cilt.png' alt='' />
        </Link>
        <Link>
          <img src='/public/sac.png' alt='' />
        </Link>
        <Link>
          <img src='/public/parfum.png' alt='' />
        </Link>
        <Link>
          <img src='/public/erkekbakim.png' alt='' />
        </Link>
        <Link>
          <img src='/public/saglik.png' alt='' />
        </Link>
        <Link>
          <img src='/public/annebebek.png' alt='' />
        </Link>
        <Link>
          <img src='/public/evyasam.png' alt='' />
        </Link>
      </div>
    </div>
  );
}

import { Link } from 'react-router-dom';
import cilt from '../../public/cilt.png';
import makyaj from '../../public/makyaj.png';
import sac from '../../public/sac.png';
import parfum from '../../public/parfum.png';
import erkekbakim from '../../public/erkekbakim.png';
import saglik from '../../public/saglik.png';
import annebebek from '../../public/annebebek.png';
import evyasam from '../../public/evyasam.png';

export default function CategorySection() {
  return (
    <div className='all-categories'>
      <h1>Tüm Kategoriler</h1>
      <div className='categories'>
        <Link>
          <img src={makyaj} alt='' />
        </Link>
        <Link>
          <img src={cilt} alt='' />
        </Link>
        <Link>
          <img src={sac} alt='' />
        </Link>
        <Link>
          <img src={parfum} alt='' />
        </Link>
        <Link>
          <img src={erkekbakim} alt='' />
        </Link>
        <Link>
          <img src={saglik} alt='' />
        </Link>
        <Link>
          <img src={annebebek} alt='' />
        </Link>
        <Link>
          <img src={evyasam} alt='' />
        </Link>
      </div>
    </div>
  );
}

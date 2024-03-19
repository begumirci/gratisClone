import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../routes';

export default function HeaderNav() {
  const [category, setCategories] = useState([]);

  useEffect(() => {
    async function getCategories() {
      let { data: categories } = await supabase.from('categories').select('*');
      setCategories(categories);
    }
    getCategories();
  }, []);

  return (
    <div className='header-nav'>
      <div className='container'>
        <ul className='header-nav-list'>
          {category.map((x) => (
            <li key={x.id}>
              <Link to={`/categories/${x.slug}`}>{x.name}</Link>
              <span className='tre'></span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

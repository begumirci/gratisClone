import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import datas from "../mocks/menu.json";
import { supabase } from '../routes';
import { slugify } from '../helper';

export default function HeaderNav() {
  const [category, setCategories] = useState([]);
  useEffect(() => {
    async function getCategories() {
      let { data: categories, error } = await supabase
        .from('categories')
        .select('*');
      setCategories(categories);
    }
    getCategories();
  }, [])

  return (
    <div className='header-nav'>
      <div className='container'>
        <ul className='header-nav-list'>

          {category.map(x => (
            <li key={x.id}>
              <Link to={`/categories/${x.slug}`} >{x.name}</Link>
              <span className='tre'></span>
              <div className='mega-menu'>
                <div className='container'>
                  {/* <div className='mega-menu-lists'>
                    {x.categories.map(x => (
                      <div>
                        <Link className='title' to={x.title}>{x.title}</Link>
                        {x.subCategories.map(x => (
                          <Link to={x}>{x}</Link>
                        ))}
                      </div>
                    ))}
                  </div> */}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>

  )
}

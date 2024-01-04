import React, { useContext, useEffect } from 'react'
import { supabase } from '../routes'
import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { contexim } from '../layouts/main-layout';


export async function loader({ params }) {

    console.log(params);

    const { data: category, error } = await supabase
        .from('categories')
        .select('id, name, slug')
        .eq('slug', params.category)
        .single();

    if (!error) {
        const { data: products, error } = await supabase
            .from('products')
            .select('id, title, price, description, category_id, brand_id, img_url')
            .eq('category_id', category.id)

        if (!error) {
            const { data: brands, error } = await supabase
                .from('brands')
                .select('id, name');

            if (!error) {
                return {
                    products: products,
                    category: category.name,
                    brands: brands
                };
            }
        }
    } else {
        return [];
    }
}

export default function Category() {
    const { products, brands, category } = useLoaderData();
    const [options, setOptions] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [filterBrands, setFilterBrands] = useState([]);
    const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [openBrand, setOpenBrand] = useState(false);
    const [openPrice, setOpenPrice] = useState(false);

    const { addToCart, search } = useContext(contexim);


    function handlePriceFilter(e) {
        const { name, value } = e.target;
        setPriceRange({ ...priceRange, [name]: Number(value) });
        console.log(priceRange);

    }

    function handleCheckboxChange(brandId, e) {
        const { checked } = e.target;

        if (!options.includes(brandId) && checked) {
            setOptions([...options, brandId]);

        } else {
            const updateOptions = options.filter(x => x !== brandId);
            setOptions(updateOptions);
        }
    }

    function outBrandFilter(id) {
        console.log(id);
        const updatedOptions = options.filter(x => x !== id);
        setOptions(updatedOptions);
    }


    useEffect(() => {
        if (products) {
            let updateProducts = [...products];

            if (options.length > 0) {
                updateProducts = updateProducts.filter(x => options.includes(x.brand_id));
            }
            updateProducts = updateProducts.filter(x => x.price >= priceRange.min && x.price <= priceRange.max);

            updateProducts = updateProducts.filter(x => x.title.toLowerCase().includes(search.toLowerCase()));

            setFilteredProducts(updateProducts);

            const ourBrands = brands.filter(x => options.includes(x.id));
            setSelectedBrands(ourBrands);
        }


    }, [options, products, priceRange, search, brands]);


    useEffect(() => {
        const updateBrands = [];
        for (const product of products) {
            const brand = brands.find(x => x.id == product.brand_id);
            if (!updateBrands.some(x => x.name == brand.name)) {
                updateBrands.push(brand);
            }
        }
        setFilterBrands(updateBrands);
    }, [products]);

    return (
        <div className='container'>
            <div className='filters-page'>
                <div className='filter-side'>
                    <div className='products-filter'>
                        <h1>{category}</h1>
                        <div className='product-filters'>
                            <div className='brand-filters'>
                                <div className='header-filter'>
                                    <h4>Markalar</h4>
                                    <img src="/public/header-arrow.png" alt="" onClick={() => { setOpenBrand(!openBrand) }} />
                                </div>
                                {openBrand && <div className='brands'>
                                    {filterBrands.map(x => (
                                        <div className='product-filter' key={x.id}>
                                            <label>
                                                <input type="checkbox" name={x.name} checked={options.includes(x.id)} value={x.id} onChange={(e) => handleCheckboxChange(x.id, e)} />
                                                <span>{x.name}</span>
                                            </label>
                                        </div>
                                    ))}
                                </div>}

                            </div>

                            <div className='price-filters'>
                                <div className='header-filter'>
                                    <h4>Fiyat</h4>
                                    <img src="/public/header-arrow.png" alt="" onClick={() => setOpenPrice(!openPrice)} />
                                </div>
                                {openPrice && <div className='price-inputs'>
                                    <div>
                                        <span>Min</span>
                                        <input type="number" name='min' value={priceRange.min} placeholder='min' onChange={handlePriceFilter} />
                                    </div>
                                    <div>
                                        <span>Max</span>
                                        <input type="number" name='max' value={priceRange.max} placeholder='max' onChange={handlePriceFilter} />
                                    </div>
                                </div>}

                            </div>

                        </div>
                    </div>
                </div>
                <div>
                    <div className='filters'>
                        <div className='all-filter-place'>
                            {selectedBrands.map(x => (
                                <div onClick={() => { outBrandFilter(x.id) }} key={x.id}>{x.name}</div>
                            ))}
                            <div>
                                <span>{priceRange.min}</span>
                                <span>-</span>
                                <span>{priceRange.max}₺</span>
                            </div>
                        </div>

                    </div>
                    <div className='product-items' >
                        {filteredProducts.map(x => (
                            <div className="product-item" key={x.id}>
                                <Link to={x.title} >
                                    <img src={x.img_url} alt={x.title} />
                                    <h1>{x.title}</h1>
                                    <div className='gradient'></div>
                                    <h2>{x.price}<span>TL</span></h2>
                                </Link>
                                <button className='btn' onClick={() => addToCart(x)}>Sepete Ekle</button>
                            </div>
                        ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}



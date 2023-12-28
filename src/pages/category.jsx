import React, { useEffect } from 'react'
import { supabase } from '../routes'
import { useLoaderData } from 'react-router-dom';
import ProductItems from '../components/Products/product-items';
import { useState } from 'react';

export async function loader({ params }) {

    const { data: category, error } = await supabase
        .from('categories')
        .select('id, name, slug')
        .eq('slug', params.category)
        .single();

    if (!error) {

        const { data: products, error } = await supabase
            .from('products')
            .select('id, title, description, category_id, brand_id')
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
    const [productsFilter, setProductsFilter] = useState(products);

    function handleCheckboxChange(brandId, e) {
        const { checked } = e.target;
        if (!options.includes(brandId) && checked) {
            setOptions([...options, brandId]);

        } else {
            const updateOptions = options.filter(x => x !== brandId);
            setOptions(updateOptions);
        }

        // const { value, checked, name } = e.target;
        // if (!options.includes(Number(value)) && checked) {
        //     setOptions([...options, Number(value)]);
        // } else {
        //     const updateOptions = options.filter(x => x !== Number(value));
        //     setOptions(updateOptions);
        // }


    }

    useEffect(() => {
        if (options.length > 0) {
            const filteredData = products.filter(x => options.includes(x.brand_id));
            setProductsFilter(filteredData);
        }
    }, [options]);



    console.log(productsFilter);
    console.log(options);





    return (
        <div>
            <h1>{category}</h1>
            <div className='products-filter'>
                <div className='header-filter'>
                    <h4>Markalar</h4>
                    <img src="/public/header-arrow.png" alt="" />
                </div>
                {brands.map(x => (
                    <div className='product-filter' key={x.id}>
                        <label>
                            <input type="checkbox" name={x.name} value={x.id} onChange={(e) => handleCheckboxChange(x.id, e)} />
                            {x.name}
                        </label>
                    </div>

                ))}

            </div>
        </div>
    )
}



import React from 'react'
import { supabase } from './routes'


export default function Admin() {
    
    async function addProduct(e){
      e.preventDefault();
      const formData = new FormData(e.target);
      const product = Object.fromEntries(formData);
      console.log(product);
      product.price = Number(product.price);
      product.category_id = Number(product.category_id);
      product.brand_id = Number(product.brand_id);

        const { data, error } = await supabase
            .from('products')
            .insert([
                 product ,
            ]);
    }

    const getProductDetails = async (productId) => {
        // Belirli bir ürünün detaylarını çekmek için sorgu
        const { data: product, error } = await supabase
            .from('products')
            .select('id, title, description, category_id, brand_id')
            .eq('id', productId)
            .single(); // Tek bir sonuç beklediğimizi belirtiyoruz

        if (error) {
            console.error('Hata:', error.message);
            return;
        }
        if (product) {
            const { data: category } = await supabase
                .from('categories')
                .select('*')
                .eq('id', product.category_id)
                .single(); 

            const { data: brand } = await supabase
                .from('brands')
                .select('*')
                .eq('id', product.brand_id)
                .single();

            console.log('Ürün:', product);
            console.log('Ürüne Ait Kategori:', category);
            console.log('Ürüne Ait Marka:', brand);
        } else {
            console.log('Ürün bulunamadı.');
        }
    };

 
    getProductDetails(4);
  


  return (
    <div>
        <h1>Ürün Ekle</h1>
        <form action="" onSubmit={addProduct}>
            <div>
                <input type="text" placeholder='Ürün Adı' name='title' />
            </div>
              <div>
                  <input type="text" placeholder='Fiyat' name='price' />
              </div>
              <div>
                  <input type="text" placeholder='Kategori id' name='category_id'  />
              </div>
              <div>
                  <input type="text" placeholder='Marka id' name='brand_id'/>
              </div>
              <div>
                  <input type="text" placeholder='Açıklama' name='description' />
              </div>
              <div>
                  <input type="text" placeholder='İmg url' name='img_url' />
              </div>
              <button>Ekle</button>
        </form>
    </div>
  )
}

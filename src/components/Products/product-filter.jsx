import React, { useEffect } from 'react'
import { useState } from 'react';



export default function ProductFilter() {
    const [visible, setVisible] = useState(false);
    const [showCheck, setShowCheck] = useState(false);
    const [showCheck2, setShowCheck2] = useState(false);
    const [checkboxes, setCheckboxes] = useState({
        "markalar": [
            { "id": 5, "name": "Marka1", "check": false },
            { "id": 6, "name": "Marka2", "check": false },
            { "id": 7, "name": "Marka3", "check": false },
            { "id": 8, "name": "Marka4", "check": false }
        ],

        "fiyatAraliklari": [
            { "id": 1, "baslangic": 0, "bitis": 500, "check": false },
            { "id": 2, "baslangic": 501, "bitis": 1000, "check": false },
            { "id": 3, "baslangic": 1001, "bitis": 1500, "check": false },
            { "id": 4, "baslangic": 1501, "bitis": 2000, "check": false }
        ]
    });

    function handleCheckboxes(id,category) {
        setCheckboxes(prev => {
            const updatedCategory = prev[category].map(x => {
                if (x.id === id) {
                    return { ...x, check: !x.check };
                } else {
                    return x;
                }
            });
            return { ...prev, [category]: updatedCategory };
        });
    }
   useEffect(() => {
    if(checkboxes.markalar.find(x => x.check) || checkboxes.fiyatAraliklari.find(y => y.check)){
        setVisible(true);
    }else{
        setVisible(false);
    }
   },[checkboxes])

    return (
        <div>
            {visible && <div className='filter-container'>{
                checkboxes.markalar.map(x => (
                    x.check && <div className='filter-item' key={x.id}>
                        <div>
                            <p>Markalar</p>
                            <h1>{x.name}</h1>
                        </div>
                        <span onClick={() => handleCheckboxes(x.id, 'markalar')}>×</span>
                    </div>
                ))}
                {
                    checkboxes.fiyatAraliklari.map(x => (
                        x.check && <div className='filter-item' key={x.id}>
                            <div>
                                <p>Fiyat</p>
                                <h1>{`${x.baslangic}₺ - ${x.bitis}₺`}</h1>
                            </div>
                            <span onClick={() => handleCheckboxes(x.id, 'fiyatAraliklari')}>×</span>
                        </div>

                    ))
                }
            </div>}
            
            <div className='products-filter'>
                <div className='header-filter' onClick={() => setShowCheck(!showCheck)}>
                    <h4>Markalar</h4>
                    <img src="/public/header-arrow.png" alt="" />
                </div>
                {
                    showCheck && (checkboxes.markalar.map((x) => (
                        <div className='product-filter' key={x.id} onClick={() => handleCheckboxes(x.id, 'markalar')}>
                            <div className='product-input'>
                                <input type="checkbox" id={x.id} />
                                {x.check && (
                                    <>
                                        <div className='product-input-before'></div>
                                        <div className='product-input-after'>✔</div>
                                    </>
                                )}
                            </div>
                            <div className='product-brand'>{x.name}</div>
                        </div>
                    )))
                }
            </div>
            <div className='products-filter'>
                <div className='header-filter' onClick={() => setShowCheck2(!showCheck2)}>
                    <h4>Fiyat</h4>
                    <img src="/public/header-arrow.png" alt="" />
                </div>
                {showCheck2 && checkboxes.fiyatAraliklari.map(x => (
                    <div className='product-filter' key={x.id} onClick={() => handleCheckboxes(x.id, 'fiyatAraliklari')}>
                        <div className='product-input'>
                            <input type="checkbox" id={x.id} />
                            {x.check && (
                                <>
                                 <div className='product-input-before'></div>
                                 <div className='product-input-after'>✔</div>
                                </>
                            )}
                        </div>
                        <div className='product-brand'>{`${x.baslangic}₺ - ${x.bitis}₺`}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

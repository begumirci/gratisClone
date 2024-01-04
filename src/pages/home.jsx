
import { useEffect, useState } from "react";
import ProductItems from "../components/Products/product-items";
import BigSlider from "../components/big-slider";
import Slider from "../components/big-slider";
import Carosel from "../components/carosel";
import CategorySection from "../components/category-section";
import SearchInput from "../components/search-input";
import { supabase } from "../routes";
import BasketItem from "../components/basket-item";
import Product from "../components/Products/product";
import Basket from "./basket";
import Category from "./category";
import HeaderBasket from "../components/header-basket";


export default function Home() {

    return (
        <div>
            <BigSlider />
            <Carosel />
            <ProductItems />
            <CategorySection />
        </div>
    )
}

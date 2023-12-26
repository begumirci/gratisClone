import ProductFilter from "../components/Products/product-filter";
import ProductItems from "../components/Products/product-items";
import BigSlider from "../components/big-slider";
import Slider from "../components/big-slider";
import Carosel from "../components/carosel";
import CategorySection from "../components/category-section";
import SearchInput from "../components/search-input";

export default function Home() {
    return (
        <div>
            <SearchInput />
            <BigSlider />
            <Carosel />
            <div className=" container">
                <div>
                    <div>
                        <ProductFilter />
                    </div>
                    <ProductItems />
                </div>
            </div>
            <CategorySection />
        </div>
    )
}

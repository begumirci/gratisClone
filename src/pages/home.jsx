import ProductItems from '../components/Products/product-items';
import BigSlider from '../components/big-slider';

import Carosel from '../components/carosel';
import CategorySection from '../components/category-section';

export default function Home() {
  return (
    <div>
      <BigSlider />
      <Carosel />
      <ProductItems />
      <CategorySection />
    </div>
  );
}

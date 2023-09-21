import Container from "./components/ui/container";
import { Hero } from "./sections/Hero";
import { PopularProducts } from "./sections/PopularProducts";
import { Categories } from "./sections/Categories";
import { Footer } from "./sections/Footer";
import { Deals } from "./sections/Deals";

function App() {
  return (
    <Container>
      <Hero />
      <hr />
      <PopularProducts />
      <hr className="my-9" />
      <Categories />
      <hr className="mt-40" />
      <Deals />
      <hr className="my-9" />

      <Footer />
    </Container>
  );
}

export default App;

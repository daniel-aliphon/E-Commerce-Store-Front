import Container from "./components/ui/container";
import { Hero } from "./sections/Hero";
import { PopularProducts } from "./sections/PopularProducts";
import { Categories } from "./sections/Categories";
import { Footer } from "./sections/Footer";
import { Deals } from "./sections/Deals";
import { Games } from "./sections/Games";

function App() {
  return (
    <Container>
      <Hero />
      <hr />
      <PopularProducts />
      <hr className="my-9" />
      <Deals />
      <hr className="mt-40" />
      <Categories />

      <Games />

      <Footer />
    </Container>
  );
}

export default App;

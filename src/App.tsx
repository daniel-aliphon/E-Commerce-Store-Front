import Container from "./components/ui/container";
import { Hero } from "./sections/Hero";
import { PopularProducts } from "./sections/PopularProducts";
import { Categories } from "./sections/Categories";
import { Footer } from "./sections/Footer";

function App() {
  return (
    <Container>
      <Hero />
      <hr />
      <PopularProducts />
      <hr />
      <Categories />

      <Footer />
    </Container>
  );
}

export default App;

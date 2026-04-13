import SiteHeader from "./components/layout/SiteHeader.jsx";
import HeroFilmSection from "./sections/HeroFilmSection.jsx";
import IngredientStorySection from "./sections/IngredientStorySection.jsx";
import RoutineExplorer from "./sections/RoutineExplorer.jsx";
import FormulaRevealSection from "./sections/FormulaRevealSection.jsx";
import EditorialProofSection from "./sections/EditorialProofSection.jsx";
import FounderManifestoSection from "./sections/FounderManifestoSection.jsx";
import ConversionFooter from "./sections/ConversionFooter.jsx";

const App = () => {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content">
        <HeroFilmSection />
        <IngredientStorySection />
        <RoutineExplorer />
        <FormulaRevealSection />
        <EditorialProofSection />
        <FounderManifestoSection />
        <ConversionFooter />
      </main>
    </>
  );
};

export default App;

import HeroSection from "@/components/heroSection/HeroSection";
import FilmCategories from "@/components/FilmCategories/FilmCategories";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* hero section */}
      <HeroSection />

      {/* recently added and top rated categories */}
      <FilmCategories />
    </div>
  );
}

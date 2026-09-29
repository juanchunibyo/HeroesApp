import type { Hero } from "../types/hero.interface";
import { HeroGridCard } from "./HeroGridCard";

interface props {
  heroes: Hero[];
}

export const HeroGrid = ({ heroes }: props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
      {heroes.map((hero) => (
        <HeroGridCard key={hero.id} hero={hero} />
      ))}

      {/* Hero Card 1 - Superman */}
    </div>
  );
};

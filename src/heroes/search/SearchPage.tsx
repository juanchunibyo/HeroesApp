import { CustomJombotron } from "@/components/custom/CustomJombotron";
import { HeroGrid } from "@/heroes/components/HeroGrid";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "@/heroes/search/ui/SearchControls";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";
import { searchHeroesAction } from "../actions/search-hero.action";

export const SearchPage = () => {
  const [searchParams] = useSearchParams();

  const name = searchParams.get("name") ?? undefined;
  const strength = searchParams.get("strength") ?? undefined;

  const { data: heroes = [] } = useQuery({
    queryKey: ["search", { name, strength }],
    queryFn: () => searchHeroesAction({ name, strength }),
  });

  return (
    <>
      <CustomJombotron
        title="Busqueda De Héroes y Villanos"
        description="Descubre, explora y gestiona tus superhéroes y villanos favoritos"
      />
      {/* Stats Dashboard */}
      <HeroStats />

      {/* Filters and Search */}
      <SearchControls />

      <HeroGrid heroes={heroes} />
    </>
  );
};

export default SearchPage;

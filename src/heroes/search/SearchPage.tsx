import { CustomJombotron } from "@/components/custom/CustomJombotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "@/heroes/search/ui/SearchControls";

export const SearchPage = () => {
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
    </>
  );
};

export default SearchPage;

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CustomJombotron } from "@/components/custom/CustomJombotron";
import { HeroGrid } from "@/heroes/components/HeroGrid";
import { CustomPagination } from "@/components/custom/CustomPagination";
import { CustomBreadcrumb } from "@/components/custom/CustomBreadcrumb";
import { useSearchParams } from "react-router";
import { useContext, useMemo } from "react";
import { HeroStats } from "@/heroes/components/HeroStats";
import { useHeroSummary } from "@/heroes/hooks/useHeroSummary";
import { usePaginatedHero } from "@/heroes/hooks/usePaginatedHero";
import { FavoriteHeroContext } from "@/heroes/context/FavoriteHeroContext";

export const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { favoriteCount, favorites } = useContext(FavoriteHeroContext);

  const activeTab = searchParams.get("tab") ?? "all";
  const page = searchParams.get("page") ?? "1";
  const limit = searchParams.get("limit") ?? "6";
  const category = searchParams.get("category") ?? "all";

  const selectedTab = useMemo(() => {
    const validTabs = ["all", "favorites", "heroes", "villains"];

    return validTabs.includes(activeTab) ? activeTab : "all";
  }, [activeTab]);

  const tabCategory =
    activeTab === "heroes"
      ? "Hero"
      : activeTab === "villains"
        ? "Villain"
        : category;

  const { data: heroesResponse } = usePaginatedHero(+page, +limit, tabCategory);

  const { data: summary } = useHeroSummary();

  return (
    <>
      <>
        {/* Header */}
        <CustomJombotron
          title="Universo De Héroes y Villanos"
          description="Descubre, explora y gestiona tus superhéroes y villanos favoritos"
        />

        <CustomBreadcrumb currentPage="SuperHeroes" />

        {/* Stats Dashboard */}
        <HeroStats />

        {/* Tabs */}
        <Tabs value={selectedTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger
              value="all"
              onClick={() =>
                setSearchParams((prev) => {
                  prev.set("tab", "all");
                  prev.set("category", "all");
                  prev.set("page", "1");
                  return prev;
                })
              }
            >
              All characters ({summary?.totalHeroes})
            </TabsTrigger>

            <TabsTrigger
              value="favorites"
              className="flex items-center gap-2"
              onClick={() =>
                setSearchParams((prev) => {
                  prev.set("tab", "favorites");
                  prev.set("page", "1");
                  return prev;
                })
              }
            >
              Favorites ({favoriteCount})
            </TabsTrigger>
            <TabsTrigger
              value="heroes"
              onClick={() =>
                setSearchParams((prev) => {
                  prev.set("tab", "heroes");
                  prev.set("category", "Hero");
                  prev.set("page", "1");
                  return prev;
                })
              }
            >
              Heroes ({summary?.heroCount})
            </TabsTrigger>
            <TabsTrigger
              value="villains"
              onClick={() =>
                setSearchParams((prev) => {
                  prev.set("tab", "villains");
                  prev.set("category", "Villain");
                  prev.set("page", "1");
                  return prev;
                })
              }
            >
              Villains ({summary?.villainCount})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <HeroGrid heroes={heroesResponse?.heroes ?? []} />
            <h1>Todos los personajes </h1>
          </TabsContent>
          <TabsContent value="favorites">
            {/* Mostrar Favoritos */}
            <HeroGrid heroes={favorites} />

            <h1>Favoritos </h1>
          </TabsContent>

          <TabsContent value="heroes">
            {/* Mostrar Héroes */}
            <HeroGrid heroes={heroesResponse?.heroes ?? []} />

            <h1>Superhéroes </h1>
          </TabsContent>

          <TabsContent value="villains">
            {/* Mostrar Villanos */}
            <HeroGrid heroes={heroesResponse?.heroes ?? []} />

            <h1>Villanos </h1>
          </TabsContent>
        </Tabs>

        {/* Pagination */}

        <CustomPagination totalPages={heroesResponse?.pages ?? 1} />
      </>
    </>
  );
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CustomJombotron } from "@/components/custom/CustomJombotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { HeroGrid } from "@/heroes/components/HeroGrid";
import { useState } from "react";
import { CustomPagination } from "@/components/custom/CustomPagination";
import { CustomBreadcrumb } from "@/components/custom/CustomBreadcrumb";

export const HomePage = () => {
  const [activeTab, setActiveTab] = useState<
    "all" | "favorites" | "heroes" | "villains"
  >("all");
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
        <Tabs value={activeTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all" onClick={() => setActiveTab("all")}>
              All Characters (16)
            </TabsTrigger>

            <TabsTrigger
              value="favorites"
              className="flex items-center gap-2"
              onClick={() => setActiveTab("favorites")}
            >
              Favorites (3)
            </TabsTrigger>
            <TabsTrigger value="heroes" onClick={() => setActiveTab("heroes")}>
              Heroes (12)
            </TabsTrigger>
            <TabsTrigger
              value="villains"
              onClick={() => setActiveTab("villains")}
            >
              Villains (2)
            </TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <HeroGrid />
            <h1>Todos los personajes </h1>
          </TabsContent>
          <TabsContent value="favorites">
            {/* Mostrar Favoritos */}
            <HeroGrid />
            <h1>Favoritos </h1>
          </TabsContent>

          <TabsContent value="heroes">
            {/* Mostrar Héroes */}
            <HeroGrid />
            <h1>Superhéroes </h1>
          </TabsContent>

          <TabsContent value="villains">
            {/* Mostrar Villanos */}
            <HeroGrid />
            <h1>Villanos </h1>
          </TabsContent>
        </Tabs>

        {/* Pagination */}
        <CustomPagination totalPages={5} />
      </>
    </>
  );
};

import { useQuery } from "@tanstack/react-query";
import { getHeroesByPageAction } from "../actions/get-heroes-by-page.actions";

export const usePaginatedHero = (
  page: number,
  limit: number,
  category = "all",
  search = "",
) => {
  return useQuery({
    queryKey: ["heroes", { page, limit, category, search }],
    queryFn: () => getHeroesByPageAction(+page, +limit, category, search),
    staleTime: 1000 * 60 * 5, //5 minutos
  });
};

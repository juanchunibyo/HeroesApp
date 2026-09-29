import { getHeroAction } from "@/heroes/actions/get-hero.action";
import { useQuery } from "@tanstack/react-query";
import {
  Award,
  Brain,
  Gauge,
  Heart,
  Shield,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { Navigate, useParams } from "react-router";

export const HeroPage = () => {
  const [activeTab, setActiveTab] = useState("stats");
  const [isFavorite, setIsFavorite] = useState(false);
  const { idSlug = "" } = useParams();

  const { data: SuperheroData, isError } = useQuery({
    queryKey: ["heroes", idSlug],
    queryFn: () => getHeroAction(idSlug),
  });

  if (isError) {
    return <Navigate to="/" replace />;
  }

  if (!SuperheroData) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50">
        <p className="text-slate-500">Cargando héroe...</p>
      </main>
    );
  }

  const hero = SuperheroData;
  const powerLevel = Math.round(
    ((hero.strength + hero.intelligence + hero.speed + hero.durability) / 40) *
      100,
  );

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-900 px-6 py-10 text-white sm:px-10 lg:px-16">
        <div className="absolute -right-24 -top-32 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="relative mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center">
          <div className="flex shrink-0 justify-center lg:w-44">
            <img
              src={hero.Image}
              alt={hero.name}
              className="h-40 w-40 rounded-full border-4 border-slate-500 object-cover shadow-2xl sm:h-44 sm:w-44"
            />
          </div>

          <div className="flex-1">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <button
                type="button"
                aria-label="Agregar a favoritos"
                onClick={() => setIsFavorite((favorite) => !favorite)}
                className={`rounded-full p-2 text-slate-950 shadow-lg ${isFavorite ? "bg-yellow-300" : "bg-yellow-400"}`}
              >
                <Heart
                  className={`h-5 w-5 ${isFavorite ? "fill-current" : ""}`}
                />
              </button>
              <span className="rounded-full bg-blue-500 px-3 py-1 text-xs font-bold">
                {hero.category}
              </span>
              <span className="rounded-full bg-emerald-500 px-3 py-1 text-xs font-bold">
                {hero.status}
              </span>
              <span className="rounded-full bg-slate-500 px-3 py-1 text-xs font-bold">
                {hero.universe}
              </span>
            </div>
            <h1 className="font-heading text-5xl font-bold tracking-tight sm:text-6xl">
              {hero.name}
            </h1>
            <p className="mt-1 text-xl text-blue-200">{hero.alias}</p>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-200">
              {hero.description}
            </p>
          </div>

          <div className="w-full rounded-xl bg-white/10 p-5 text-center backdrop-blur-sm lg:w-32">
            <p className="text-3xl font-bold text-yellow-300">{powerLevel}%</p>
            <p className="mt-1 text-xs text-slate-300">Nivel de Poder</p>
            <div className="mt-2 flex justify-center gap-0.5 text-yellow-300">
              {[1, 2, 3, 4].map((star) => (
                <Sparkles key={star} className="h-4 w-4 fill-current" />
              ))}
              <Sparkles className="h-4 w-4 text-slate-500" />
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-7 px-5 py-7 sm:px-8">
        <nav className="grid grid-cols-2 rounded-lg bg-white p-1 shadow-sm sm:grid-cols-4">
          <button
            type="button"
            onClick={() => setActiveTab("stats")}
            className={`flex items-center justify-center gap-2 rounded-md px-3 py-2 text-sm ${activeTab === "stats" ? "bg-slate-100 font-semibold text-slate-950" : "text-slate-500"}`}
          >
            <Award className="h-4 w-4" />
            Estadísticas
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("powers")}
            className={`flex items-center justify-center gap-2 rounded-md px-3 py-2 text-sm ${activeTab === "powers" ? "bg-slate-100 font-semibold text-slate-950" : "text-slate-500"}`}
          >
            <Zap className="h-4 w-4" />
            Poderes
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("team")}
            className={`flex items-center justify-center gap-2 rounded-md px-3 py-2 text-sm ${activeTab === "team" ? "bg-slate-100 font-semibold text-slate-950" : "text-slate-500"}`}
          >
            <Users className="h-4 w-4" />
            Equipo
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("info")}
            className={`flex items-center justify-center gap-2 rounded-md px-3 py-2 text-sm ${activeTab === "info" ? "bg-slate-100 font-semibold text-slate-950" : "text-slate-500"}`}
          >
            <Shield className="h-4 w-4" />
            Información
          </button>
        </nav>

        {activeTab === "stats" && (
          <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-500">
                <Zap className="h-6 w-6" />
              </div>
              <h2 className="font-semibold">Fuerza</h2>
              <p className="mt-1 text-3xl font-bold text-red-500">
                {hero.strength}
              </p>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-red-500"
                  style={{ width: `${hero.strength * 10}%` }}
                />
              </div>
            </article>
            <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-violet-100 text-violet-500">
                <Brain className="h-6 w-6" />
              </div>
              <h2 className="font-semibold">Inteligencia</h2>
              <p className="mt-1 text-3xl font-bold text-violet-500">
                {hero.intelligence}
              </p>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-violet-500"
                  style={{ width: `${hero.intelligence * 10}%` }}
                />
              </div>
            </article>
            <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-500">
                <Gauge className="h-6 w-6" />
              </div>
              <h2 className="font-semibold">Velocidad</h2>
              <p className="mt-1 text-3xl font-bold text-amber-500">
                {hero.speed}
              </p>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-amber-500"
                  style={{ width: `${hero.speed * 10}%` }}
                />
              </div>
            </article>
            <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-500">
                <Shield className="h-6 w-6" />
              </div>
              <h2 className="font-semibold">Resistencia</h2>
              <p className="mt-1 text-3xl font-bold text-emerald-500">
                {hero.durability}
              </p>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-emerald-500"
                  style={{ width: `${hero.durability * 10}%` }}
                />
              </div>
            </article>
          </section>
        )}

        {activeTab === "stats" && (
          <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold">Comparación de Habilidades</h2>
            <div className="mt-6 space-y-5">
              <div className="grid grid-cols-[84px_1fr_42px] items-center gap-3 text-sm">
                <span>Fuerza</span>
                <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-red-500"
                    style={{ width: `${hero.strength * 10}%` }}
                  />
                </div>
                <strong>{hero.strength}/10</strong>
              </div>
              <div className="grid grid-cols-[84px_1fr_42px] items-center gap-3 text-sm">
                <span>Inteligencia</span>
                <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-violet-500"
                    style={{ width: `${hero.intelligence * 10}%` }}
                  />
                </div>
                <strong>{hero.intelligence}/10</strong>
              </div>
              <div className="grid grid-cols-[84px_1fr_42px] items-center gap-3 text-sm">
                <span>Velocidad</span>
                <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-amber-500"
                    style={{ width: `${hero.speed * 10}%` }}
                  />
                </div>
                <strong>{hero.speed}/10</strong>
              </div>
              <div className="grid grid-cols-[84px_1fr_42px] items-center gap-3 text-sm">
                <span>Resistencia</span>
                <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-emerald-500"
                    style={{ width: `${hero.durability * 10}%` }}
                  />
                </div>
                <strong>{hero.durability}/10</strong>
              </div>
            </div>
          </section>
        )}

        {activeTab === "powers" && (
          <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold">Poderes y habilidades</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {hero.powers.map((power) => (
                <span
                  key={power}
                  className="rounded-full bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-700"
                >
                  {power}
                </span>
              ))}
            </div>
          </section>
        )}

        {activeTab === "team" && (
          <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold">Equipo</h2>
            <p className="mt-4 text-2xl font-semibold text-blue-700">
              {hero.team}
            </p>
            <p className="mt-2 text-slate-500">
              Aliado y miembro activo de este equipo.
            </p>
          </section>
        )}

        {activeTab === "info" && (
          <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold">Información</h2>
            <dl className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between border-b border-slate-100 pb-2">
                <dt className="text-slate-500">Equipo</dt>
                <dd className="font-semibold">{hero.team}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-slate-500">Primera aparición</dt>
                <dd className="font-semibold">{hero.firstAppearance}</dd>
              </div>
            </dl>
          </section>
        )}
      </div>
    </main>
  );
};

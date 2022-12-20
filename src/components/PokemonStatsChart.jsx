import Chart from "react-apexcharts";

export function PokemonStatsChart({ stats }) {
  const POKEMON_STATS_MAP = {
    stat: "base_stat",
    statName: "stat",
  };

  const chartOptions = {
    chart: {
      background: "#e5e7eb",
    },
    title: {
      text: `Stats`,
      align: "center",
      style: {
        fontSize: "33px",
        fontWeight: "bold",
        fontFamily: "Helvetica, Arial, sans-serif",
        color: "black",
      },
    },
    dataLabels: {
      enabled: true,
    },
    plotOptions: {
      radar: {
        size: undefined,
        offsetX: 0,
        offsetY: 0,
        polygons: {
          strokeColors: "#404040",
          strokeWidth: 1,
          connectorColors: "#334155",
          fill: {
            colors: undefined,
          },
        },
      },
    },

    xaxis: {
      categories: getPokemonStatsArray(POKEMON_STATS_MAP.statName),
      labels: {
        style: {
          colors: ["black", "black", "black", "black", "black", "black"],
          fontSize: "15px",
          fontFamily: "Helvetica, Arial, sans-serif",
          fontWeight: 600,
        },
      },
    },
  };

  const chartSeries = [
    {
      name: "Series 1",
      data: getPokemonStatsArray(POKEMON_STATS_MAP.stat),
    },
  ];

  function getPokemonStatsArray(type) {
    return stats.map((pokemon) =>
      POKEMON_STATS_MAP.stat === type ? pokemon[type] : pokemon[type].name
    );
  }

  return (
    <div className="min-h-min flex justify-center items-center">
      <Chart
        options={chartOptions}
        series={chartSeries}
        type="radar"
        height="330"
        width="500"
      />
    </div>
  );
}

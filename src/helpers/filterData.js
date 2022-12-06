export const filterData = (query, viajes) => {
    if (!query) {
      return viajes;
    } else {
      return viajes.filter((viaje) => viaje.destino.toLowerCase().includes(query.toLowerCase()));
    }
};
  
export function buscarReglas(reglas, pregunta) {
  const texto = pregunta.toLowerCase();

  const coincidencias = reglas.filter((regla) => {
    const coincidePalabras =
      regla.palabras?.some((palabra) =>
        texto.includes(
          palabra.toLowerCase()
        )
      );

    const coincideTitulo =
      regla.titulo
        ?.toLowerCase()
        .includes(texto);

    const coincideRespuesta =
      regla.respuesta
        ?.toLowerCase()
        .includes(texto);

    const coincideDocumento =
      regla.documento
        ?.toLowerCase()
        .includes(texto);

    return (
      coincidePalabras ||
      coincideTitulo ||
      coincideRespuesta ||
      coincideDocumento
    );
  });

  coincidencias.sort(
    (a, b) => b.autoridad - a.autoridad
  );

  return coincidencias;
}

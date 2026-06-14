export function buscarReglas(reglas, pregunta) {
  const texto = pregunta.toLowerCase();

  const coincidencias = reglas.filter((regla) =>
    regla.palabras.some((palabra) =>
      texto.includes(palabra.toLowerCase())
    )
  );

  coincidencias.sort(
    (a, b) => b.autoridad - a.autoridad
  );

  return coincidencias;
}

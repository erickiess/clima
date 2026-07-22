// ============================================================
// CONFIGURACIÓN DE DEPORTES — umbrales para el semáforo
// Editable desde GitHub. El panel táctil de la tablet (⚙ abajo
// a la derecha) puede pisar estos valores localmente.
//
// Cada valor es el límite para que dé ✅ (verde). Pasado el
// límite entra en zona ⚠️ (amarillo, ~35% más) y después ❌.
// ============================================================
window.SPORT_CONFIG_DEFAULTS = {

  // 🎾 TENIS (cancha de cemento, al aire libre)
  tenis: {
    rafagasMax: 28,      // km/h — ráfagas máximas para jugar cómodo
    lluvia3hMax: 0.5,    // mm — lluvia en las 3 h previas (mojada ahora mismo)
    lluvia24hMax: 8,     // mm — lluvia acumulada 24 h (empapada aunque ya haya parado)
    probLluviaMax: 40,   // % — probabilidad de lluvia en esa hora
    tempMin: 8,          // °C — mínima aceptable
    tempMax: 34          // °C — máxima aceptable
  },

  // 🚵 MTB
  mtb: {
    rafagasMax: 45,      // km/h
    lluvia24hMax: 6,     // mm — acumulado 24 h previas (barro en los senderos)
    probLluviaMax: 60,   // %
    tempMin: 3           // °C
  },

  // 🏍 ENDURO (el más permisivo)
  enduro: {
    rafagasMax: 55,      // km/h
    lluviaHoraMax: 1.0,  // mm — lluvia en esa misma hora
    lluvia24hMax: 20,    // mm — con más que esto, demasiado barro hasta para la moto
    tempMin: 3           // °C
  },

  // ✈ AVIACIÓN — VFR con Cessna 150
  // Referencias: viento cruzado máx. demostrado del C150 = 13 kt (~24 km/h) según POH.
  //   Mínimas VFR en Argentina (RAAC Parte 91): visibilidad de vuelo 5 km y techo 1000 ft.
  //   Estos valores son un poco más conservadores que el mínimo legal, porque el 150 es
  //   liviano y el viento lo mueve. Ojo: los datos traen viento TOTAL (no la componente
  //   cruzada respecto a la pista), así que se toma el total como si fuera todo cruzado.
  avion: {
    vientoMax: 22,       // km/h sostenido (~12 kt) — el cruzado demostrado del 150 es 13 kt
    rafagasMax: 28,      // km/h (~15 kt) — las ráfagas complican más a un avión liviano
    nubesBajasMax: 35,   // % nubes bajas (proxy de techo; mínimo VFR legal = 1000 ft)
    visMinKm: 8,         // km de visibilidad (mínimo VFR legal en Argentina = 5 km)
    probLluviaMax: 30    // % — VFR mejor sin precipitación
  }
};

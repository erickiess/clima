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
    lluvia3hMax: 0.5,    // mm — lluvia acumulada en las 3 h previas (cancha mojada)
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

  // ✈ AVIACIÓN (VFR)
  avion: {
    vientoMax: 22,       // km/h — viento sostenido
    rafagasMax: 33,      // km/h
    nubesBajasMax: 35,   // % — cobertura de nubes bajas (proxy de techo)
    visMinKm: 8,         // km — visibilidad mínima
    probLluviaMax: 30    // %
  }
};

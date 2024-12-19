//TODO: Funcion obtencion de dias
function obtenerFechasDeLaSemanaActual() {
  const diasDeLaSemana = [
    "lunes",
    "martes",
    "miércoles",
    "jueves",
    "viernes",
    "sábado",
    "domingo",
  ];
  const hoy = new Date();
  const diaActual = (hoy.getDay() + 6) % 7;

  const semanaOrdenada = [];

  for (let i = 0; i < 7; i++) {
    const fecha = new Date(hoy);
    fecha.setDate(hoy.getDate() - diaActual + i);

    const diaNombre = diasDeLaSemana[i];
    const diaFecha = fecha.toLocaleDateString("es-ES", {
      day: "numeric",
    });
    if (diaActual === i) {
      semanaOrdenada.push({ day: diaNombre, date: diaFecha, selec: true });
    } else {
      semanaOrdenada.push({ day: diaNombre, date: diaFecha, selec: false });
    }
  }

  return semanaOrdenada;
}

// Ejemplo de uso
const semana = obtenerFechasDeLaSemanaActual();
/* console.log(semana); */

//TODO: Crear obtencion de fecha empezando por el dia lunes
/* const createWeek = semana; */
const createWeek = [
  { day: "Lun", date: `${semana[0].date}`, selec: semana[0].selec },
  { day: "Mar", date: `${semana[1].date}`, selec: semana[1].selec },
  { day: "Mie", date: `${semana[2].date}`, selec: semana[2].selec },
  { day: "Jue", date: `${semana[3].date}`, selec: semana[3].selec },
  { day: "Vie", date: `${semana[4].date}`, selec: semana[4].selec },
  { day: "Sab", date: `${semana[5].date}`, selec: semana[5].selec },
  { day: "Dom", date: `${semana[6].date}`, selec: semana[6].selec },
];

export default {
  createWeek,
};
/*Ejemplo array de objetos 
[
  {
    completed: null,
    day: "Lunes",
    id: 3,
    name: "DIps Anillas",
    reps: 12,
    rest: "3:00",
    serie: 4,
    weight: 20,
  },
  {
    completed: "",
    day: "",
    id: 21,
    name: "",
    reps: "",
    rest: "",
    serie: "",
    weight: "",
  },
  {
    completed: undefined,
    day: "",
    id: 22,
    name: "",
    reps: "",
    rest: "",
    serie: "",
    weight: "",
  },
];
 */

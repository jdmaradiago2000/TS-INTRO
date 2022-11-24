/*
  ===== Código de TypeScript =====
*/

interface Reproductor {
  volumen: number;
  segundo: number;
  cancion: string;
  detalles: Detalles;
}

interface Detalles {
  autor: string;
  anio: number;
}

const reproductor: Reproductor = {
  volumen: 90,
  segundo: 36,
  cancion: 'Mess',
  detalles: {
    autor: 'Ed Sheeran',
    anio: 2015,
  },
};

const { volumen, segundo, cancion, detalles } = reproductor;
const { autor, anio } = detalles;

// console.log('El volumen actual es de: ', volumen);
// console.log('El segundo actual es de: ', segundo);
// console.log('La Canción actual es: ', cancion);
// console.log('El autor es: ', autor);
// console.log('El año de la canción es: ', anio);

const dbz: string[] = ['Gokú', 'Vegeta', 'Krillin', 'Picoro', 'Trunks'];
const [p0, p1, p2, p3, p4] = dbz;

console.log('Personaje 1: ', p0);
console.log('Personaje 2: ', p1);
console.log('Personaje 3: ', p2);
console.log('Personaje 3: ', p3);
console.log('Personaje 3: ', p4);

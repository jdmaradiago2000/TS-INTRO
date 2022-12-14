/*
  ===== Código de TypeScript =====
*/

function sumar(a: number, b: number) {
  return a + b;
}

function multiplicar(
  numero1: number,
  numero2?: number,
  base: number = 2
): number {
  return numero1 * base;
}

const resultado = multiplicar(5, 0, 10);

// console.log(resultado);

interface PersonajeLOR {
  nombre: string;
  pv: number;
  mostrarHP: () => void;
}

function curar(personaje: PersonajeLOR, curarX: number): void {
  personaje.pv += curarX;
}

const nuevoPersonaje: PersonajeLOR = {
  nombre: 'Krudan',
  pv: 50,
  mostrarHP() {
    console.log('Puntos de Vida', this.pv);
  },
};

curar(nuevoPersonaje, 20);

nuevoPersonaje.mostrarHP();

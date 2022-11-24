/*
  ===== Código de TypeScript =====
*/

const superHero = {
  nombre: 'Spiderman',
  edad: 30,
  dirección: {
    calle: 'Main st',
    pais: 'USA',
    ciudad: 'New York',
  },
  mostrarDireccion() {
    return (
      this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais
    );
  },
};

const direccion = superHero.mostrarDireccion();
console.log(direccion);

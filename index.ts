/*
  ===== Código de TypeScript =====
*/

const superHeroe = {
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

const direccion = superHeroe.mostrarDireccion();
console.log(direccion);

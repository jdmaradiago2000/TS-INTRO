/*
  ===== Código de TypeScript =====
*/

interface Direccion {
  calle: string;
  pais: string;
  ciudad: string;
}

interface SuperHeroe {
  nombre: string;
  edad: number;
  direccion: Direccion;
  mostrarDireccion();
}

const superHeroe: SuperHeroe = {
  nombre: 'Spiderman',
  edad: 30,
  direccion: {
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

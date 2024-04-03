/*
    ===== Código de TypeScript =====
*/

interface SuperHero {
    name: string;
    age: number;
    address: Address;
    showAddress: () => string;
    showAge: () => number;
    showName: () => string;
    showAllInfo: () => String;
  }
  
  interface Address{
    calle: string;
    pais: string;
    ciudad: string;
  }
  
  const superHeroe: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
      calle: 'Manolo Millares',
      pais: 'España',
      ciudad: 'Arrecife'
    },
    showAddress() {
      return this.address;
    },
    showAge() {
      return this.age;
    },
    showName() {
      return this.name;
    },
    showAllInfo() {
      return 'El heroe se llama ' + this.name + ', el cual vive en ' + this.address.pais + ', ' + this.address.ciudad + ', calle ' + this.address.calle;
    }
  }
  
  
  const address = superHeroe.showAddress();
  console.log( address );
  const age = superHeroe.showAge();
  console.log( age );
  const name = superHeroe.showName();
  console.log( name );
  const AllInfo = superHeroe.showAllInfo();
  console.log( AllInfo );
  
  
  
  export {};
class player {
    constructor(nombre, colorSombrero) {
        this._nombre = nombre;
        this._colorSombrero = colorSombrero;
    }
    saludar() {
        return `hola soy ${this._nombre} y mi sombrero es de color ${this._colorSombrero}`;
    }
}
let jugador1 = new player('Mario', 'rojo');
console.log(jugador1.saludar());


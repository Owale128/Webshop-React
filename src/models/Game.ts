export class Game {
    id:number;
    constructor(
        public name: string, 
        public price: number, 
        public imageUrl: string, 
        public description: string,
        public quantity: number
    ){
        this.id = Date.now()
    }
}
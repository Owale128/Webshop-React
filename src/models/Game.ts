export class Game {
    constructor(
        public id:number,
        public name: string, 
        public price: number, 
        public imageUrl: string, 
        public description: string,
        public quantity: number,
        public onSale: boolean, 
        public discount: number
    ){
        
    }
}
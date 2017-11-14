export class User {
    constructor(
        // public id: number = Math.floor(Math.random()*100),
        public name: string = '',
        public username: string = '',
        public email: string = '',
        public editable: boolean = false
    ){}
}

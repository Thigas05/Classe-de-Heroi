class heroi{
    constructor(name,age,type,attack){
        this.name = name
        this.age = age
        this.type = type
        this.attack = attack
    }
    classe(){
        console.log(`O Heroí ${this.name} da idade ${this.age} é da classe ${this.type}`)
    }
    ataque(){
        console.log(`O Heroi ${this.name} da classe ${this.type} atacou usando ${this.attack}`)
    }
}
let classeMago = new heroi("Thigas", 65, "Mago", "Magia Antiga")
let classeNecromante = new heroi("Thihas", 140, "Necromante", "Magia Negra")
let classeFeitecero = new heroi("Thigas", 25, "Feitecero", "Magia")

classeMago.classe()
classeMago.ataque()
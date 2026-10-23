class Heroi{
    //Define o nome, idade e tipo do herói. Os principais tipos são: mago, guerreiro, monge e ninja
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo
    }
    //método de ataque que, a partir do tipo de herói, define a forma de ataque. Por exemplo, se o herói 
    //for um mago, ele usará magia. Porém, se o tipo do herói não for nenhum dos principais
    //especificados, o método informa que o tipo não possui um ataque definido.
    ataque(){
        let ataque
        switch(this.tipo){
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = null;
                break;
        }
        //se o tipo do herói tiver um ataque, exibe o ataque correspondente ou uma mensagem caso não 
        //exista um ataque definido para o tipo.
        if(ataque !== null) console.log(`O ${this.tipo} atacou usando ${ataque}`);
        else console.log(`O herói de tipo ${this.tipo} não ataca, tente outro.`);
    }
}
//exemplos usando personagens que eu criei
let flora = new Heroi("Flora", 18, "mago");
let elias = new Heroi("Elias", 18, "guerreiro");
let hilda = new Heroi("Hilda", 43, "curandeira");
let herois = [Flora, Elias, Hilda];

for(let i = 0; i < herois.length; i++){
    console.log(herois[i]);
    herois[i].ataque();
}
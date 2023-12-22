class Heroi {
    constructor(nome, idade, tipo, arma) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.arma = arma;
    }

    atacar() {
        const ataque = this.obterAtaque();
        console.log(`O ${this.tipo} de nome ${this.nome} atacou usando ${ataque} ${this.arma}`);
    }

    obterAtaque() {
        switch (this.tipo) {
            case "mago":
                return "magia";
            case "guerreiro":
                return "espada";
            case "monge":
                return "artes marciais";
            case "ninja":
                return "shuriken";
            default:
                return "ataque indefinido";
        }
    }
}

// indentificação dos heróis
{const heroiGurreiro = new Heroi("Ragnar", 53, "guerreiro", "demonic viking");
heroiGurreiro.atacar();
    console.log ("------------------------------------------------------------")
const heroiNinja = new Heroi("Felipão", 1001, "ninja", "stars of destiny");
heroiNinja.atacar();
    console.log ("------------------------------------------------------------")
const heroiMago = new Heroi("Bitelo", 12, "mago" , "little one's fury");
heroiMago.atacar();
}
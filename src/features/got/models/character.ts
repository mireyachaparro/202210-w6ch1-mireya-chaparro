export type ProtoCharacter = {
    name: string;
    family: string;
    age: number;
    state: boolean;
};

export type Character = {
    name: string;
    family: string;
    age: number;
    state: boolean;
};

export class CharacterModel {
    state: boolean;
    constructor(
        public name: string,
        public family: string,
        public age: number
    ) {
        this.state = false;
    }
}

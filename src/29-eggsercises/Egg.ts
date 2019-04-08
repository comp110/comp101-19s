export class Egg {

    isRaw: boolean;
    isCracked: boolean;

    constructor() {
        this.isRaw = true;
        this.isCracked = false;
    }
}

export let boil = (e: Egg): void => {
    e.isRaw = false;
};

export let crack = (e: Egg): void => {
    e.isCracked = true;
};
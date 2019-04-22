import { print } from "introcs";

class Cake {
    kind: string;
    slices: number;
    type: string = "cake";

    constructor(kind: string, slices: number) {
        this.kind = kind;
        this.slices = slices;
    }
}

class Pie {
    kind: string;
    slices: number;
    type: string = "pie";

    constructor(kind: string, slices: number) {
        this.kind = kind;
        this.slices = slices;
    }
}

class Dessert {
    item: Cake | Pie;
    topping: string;

    constructor(item: Cake | Pie, topping: string) {
        this.item = item;
        this.topping = topping;
    }
}

export let main = async () => {
    // TODO #1.2: Construct Cake and Pie objects and call the dessert function with each

    // TODO #2.2: Test that the makeDessert function is working by calling it with and without a second argument

    // TODO #3.2: Call the party function with different arguments and print the result
};

// TODO #1.1 Modify the dessert function to accept both Cake and Pie objects
let dessert = (item: Pie): void => {
    print("You can have " + item.slices + " slices of " + item.kind + " " + item.type + " for dessert!");
};

// TODO #2.1 Write the makeDessert function

// TODO #3.1 Write the the party function

main();
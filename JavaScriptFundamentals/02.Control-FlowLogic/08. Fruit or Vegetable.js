function FruitOrVegetable (product) {
    let productName;
    switch(product) {
        case "banana":
        case "apple":
        case "kiwi":
        case "cherry":
        case "lemon":
        case "grapes":
        case "peach":
            productName="fruit"
            break;
        case "tomato":
        case "cucumber":
        case "pepper":
        case "onion":
        case "garlic":
        case "parsley":
            productName="vegetable"
            break;
        default:
            productName = "unknown"
        }

    console.log(productName);
}

FruitOrVegetable("lainoDeiba")
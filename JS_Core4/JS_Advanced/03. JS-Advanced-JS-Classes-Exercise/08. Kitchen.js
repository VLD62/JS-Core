class Kitchen {
    constructor(budget) {
        this.budget = budget;
        this.menu = {};
        this.productsInStock = {};
        this.actionsHistory = [];
    }

    loadProducts(arrOfString) {
        for (let info of arrOfString) {
            let [product, quantity, price] = info.split(" ");
            if (this.budget >= Number(price)) {
                this.budget -= Number(price);
                if (!this.productsInStock.hasOwnProperty(product)) {
                    this.productsInStock[product] = Number(quantity);
                }
                else {
                    this.productsInStock[product] += Number(quantity);
                }
                this.actionsHistory.push(`Successfully loaded ${quantity} ${product}`);
            }
            else {
                this.actionsHistory.push(`There was not enough money to load ${quantity} ${product}`);
            }
        }
        return this.actionsHistory.join("\n");
    }

    addToMenu(meal, neededProductsArr, price) {
        if (!this.menu.hasOwnProperty(meal)) {
            this.menu[meal] = {};
            this.menu[meal]["price"] = price;
            this.menu[meal]["products"] = neededProductsArr;
            return `Great idea! Now with the ${meal} we have ${Object.entries(this.menu).length} meals in the menu, other ideas?`;
        }
        return `${meal} is already in our menu, try something different.`;
    }

    showTheMenu() {
        let result = "";
        let menu = Object.entries(this.menu);
        if (menu.length == 0) {
            return "Our menu is not ready yet, please come later...";
        }
        menu.forEach(entry => {
            let finalMenuEntry = `${entry[0]} - $ ${entry[1].price}\n`;
            result += finalMenuEntry;
        });
        return result;
    }

    makeTheOrder(meal) {
        if (!this.menu.hasOwnProperty(meal)) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`
        };
    
        let neededProducts = this.menu[meal].products
    
        for (let product of neededProducts) {
            let [productName, quantity] = product.split(" ");
            quantity = Number(quantity);
            if (!this.productsInStock.hasOwnProperty(productName) || Number(this.productsInStock[productName]) < quantity) {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`
            }
        };

        for(let product of neededProducts){
            let [productName, productQuantity] = product.split(" ");
            this.productsInStock[productName] -= Number(productQuantity);
        };

        let price = this.menu[meal].price;
        this.budget += price;
        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${price}.`
    }
}
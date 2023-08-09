class ProductManager {
        constructor ({
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
            products = [],
        }) {
            this.title = title;
            this.description = description;
            this.price = price;
            this.thumbnail = thumbnail;
            this.code = code;
            this.stock = stock;
            this.products = products;
        }
        addProduct(product) {
            this.products.push(product);
        };
    };
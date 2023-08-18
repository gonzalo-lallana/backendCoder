class productManager {
        products;
        static id = 0;

        constructor () {
            this.products = [];
        }

        addProduct (title, description, price, thumbnail, code, stock) {
        const product = {
                id: productManager.id,
                title,
                description,
                price,
                thumbnail,
                code,
                stock
            };
            this.products.push(product);
            productManager.id++;
            return product;
        }

        codeVerification = (code) => {
            const codeExiste = this.products.find((product) => product.code === code)
            if (codeExiste) {
                console.log('la propiedad code ya existe por favor escribe una nueva')
                return;
            } else {
                this.getProducts()
            }
        }

        getProducts () {
            return this.products;
        }

        getProductsById (id) {
            return this.products.find((product) => product.id === id)
        } 
    };

const productos = new productManager('productos')
const producto1 = productos.addProduct('naranja', 'rica', 200, 'http/naranja.jpg', 4, 2)


const productoslala = new productManager('productoslala')
const producto2 = productoslala.addProduct('manzana', 'jeje', 400, 'http/maranja.jpg', 4, 58)


console.log(productoslala.getProductsById(1))
const { createApp } = Vue;

createApp({
    //cards de los cursos
    data() {
        return {
            cursos: [
                { id: 1, titulo: 'Curso de Python', precio: 50000, imagen: 'imagenes/X/Python.png' },
                { id: 2, titulo: 'Curso de JavaScript', precio: 50000, imagen: 'imagenes/X/JS.png' },
                { id: 3, titulo: 'Curso de Java', precio: 45000, imagen: 'imagenes/X/Java.png' },
                { id: 4, titulo: 'Curso de SQL', precio: 55000, imagen: 'imagenes/X/SQL.png' },
                { id: 5, titulo: 'Curso de C', precio: 40000, imagen: 'imagenes/X/C.png' },
                { id: 6, titulo: 'Curso de HTML+CSS', precio: 60000, imagen: 'imagenes/X/Htmlycss.png' }
            ],
            carrito: []
        };
    },
    //suma de los precios agregados
    computed: {
        total() {
            return this.carrito.reduce((sum, curso) => sum + curso.precio, 0);
        }
    },
    //acciones (agregar, comprar o eliminar cursp)

    methods: {
        agregarAlCarrito(curso) {
            this.carrito.push(curso);
        },
        eliminarDelCarrito(curso) {
            const index = this.carrito.indexOf(curso);
            if (index !== -1) {
                this.carrito.splice(index, 1);
            }
        },
        comprar() {
            alert('Compra realizada correctamente. Gracias por tu compra!');
            this.carrito = []; // para limpiar el carrito despues de la compra
        }
    }
}).mount('#app');

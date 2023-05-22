const {createapp} =vue;
createapp({
    data(){
        return{
            correo:"",
            nombre:"",
            mensaje:"",
            clientes:[]
        }
    },
    methods:{
        agregarDatos(){
            this.clientes.push({correo:this.correo, nombre:this.nombre, mensaje:this.mensaje})
        }
    }
}).mount("#formulario")
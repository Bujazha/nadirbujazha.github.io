const {createapp}=vue
createapp({
    data(){
        return{
            nuevoCorreo:"",
            nuevoNombre:"",
            nuevoMensaje:"",
            clientes:[]
        }
    },
    methods:{
        agregarDato(){
            this.clientes.push({correo:this.nuevoCorreo, nombre:this.nuevoNombre, mensaje:this.nuevoMensaje})
        }
    }
}).mount("#formulario")
const app = Vue.createApp({
    data(){
        return {
            contador: 0,
            nombre: '',
            apellido: '',
            nombreCompleto: ''
        }
    }, 
    /*computed: {
        nombreCompleto(){
            console.log("Entra");
            if(this.nombre==""){
                return this.nombre    
            }else{
                return this.nombre + " Triana";
            }            
        }
    },*/
    watch: {
        nombre(value){
            if(value==""){
                this.nombreCompleto = "";
            }else{
                this.nombreCompleto = value + this.apellido;
            }   
        },
        apellido(value){
            if(value==""){
                this.nombreCompleto = "";
            }else{
                this.nombreCompleto = this.nombre + value;
            }  
        }
    },
    methods: {
        adicionar1(){
            this.contador++;            
        },
        disminuir1(){
            this.contador--;
        },
        adicionarN(numero){
            this.contador = this.contador + numero;
        },
        resetName(){
            this.nombre = "";
        }
        
    }
});



app.mount("#variables");
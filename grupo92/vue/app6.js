const app = Vue.createApp({
    data(){
        return {
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false,
        }
    },     
    methods: {   
        boxSeleccionado(letra){
            if(letra=="A"){
                this.boxASelected = !this.boxASelected;
            }else if(letra=="B"){
                this.boxBSelected = !this.boxBSelected;
            }else if(letra=="C"){
                this.boxCSelected = true;
            }
        }
    }
});



app.mount("#estilos");
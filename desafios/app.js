
new Vue({
    el: '#app',
    data:{
        title: 'Matador de Monstros',
        playLife: 100,
        monsterLyfe: 100,
        cura: 0,
        running: false,
        attP: '',
        attM: '',
        btnCura: false,
        logs: []
    },
    computed:{
        hasResult(){
            return this.playLife == 0 || this.monsterLyfe == 0
        },
    },
    methods: {
        iniciarGame(){
            this.running = true
            this.playLife = 100
            this.monsterLyfe = 100
        },
        endGame(){
            this.running = false
            //this.playLife = 100
            //this.monsterLyfe = 100
            this.attP = ''
            this.attM = ''
        },
        atacar(){
            setTimeout(()=>{
                let exp = Math.floor(Math.random() * 5 ) + 1
                this.attP = `Jogador Atacou com [ ${exp} Hits ]`
                this.monsterLyfe -= exp
                if(this.monsterLyfe <= 0){
                    this.monsterLyfe = 0
                    this.endGame()
                }
            }, 2000)

            setTimeout(()=>{
                let exp2 = Math.floor(Math.random() * 5 ) + 1
                this.attM = `Monstro Atacou com [ ${exp2} Hits ]`
                this.playLife -= exp2
                if(this.playLife <= 0){
                    this.playLife = 0
                    this.endGame()
                }
            }, 2000)
        },
        ataqueEspecial(){
            setTimeout(()=>{
                let exp = Math.floor(Math.random() * 15 ) + 5
                this.attP = `Monstro Atacou com [ ${exp} Hits ]`
                this.monsterLyfe -= exp
                
                if(this.monsterLyfe <= 0){
                    this.monsterLyfe = 0
                    this.endGame()
                }
            }, 2000)
            setTimeout(()=>{
                let exp2 = Math.floor(Math.random() * 15 ) + 5
                this.attM = `Ataque Especial [ ${exp2} Hits ]`
                this.playLife -= exp2
                if(this.playLife <= 0){
                    this.playLife = 0
                    this.endGame()
                }
                
            }, 2000)
            
        },
        curar(){
            if(this.playLife <= 40){
               const x = setInterval(()=>{
                       this.cura++ 
                       this.playLife++            
                       if(this.cura == 25){                        
                           clearInterval(x)
                           let exp2 = Math.floor(Math.random() * 15 ) + 5
                           this.attM = `Monstro Atacou com [ ${exp2} Hits ]`
                           this.playLife -= exp2
                        }                        
                   }, 100)
                          
            }else{
                this.attP = `Cura não disponivel - não está em perigo`
            }
        },
        desistir(){
            this.running = false
        },
        registrarLogs(text, cls){
            this.logs.unshift({text, cls})
        }
    },
    watch:{

    },
    mounted() {
        document.title = this.title;
    },
})
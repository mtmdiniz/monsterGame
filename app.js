new Vue({
    el: "#app",
    data: {
        playerLife: 100,
        monsterLife: 100,
        mostrar: true,
        log: []
    },
    computed: {
        hasResult() {
            return this.playerLife == 0 || this.monsterLife == 0
        }

    },
    methods: {
        attack: function(event) {
            var valorPlayer = Math.ceil(Math.random() * 10)
            var valorMonster = Math.ceil(Math.random() * 15)
            this.playerLife = this.playerLife - valorMonster
            this.monsterLife = this.monsterLife - valorPlayer
            if (this.playerLife <= 0) {
                this.playerLife = 0
                this.mostrar = true
            } else if (this.monsterLife <= 0) {
                this.monsterLife = 0
                this.mostrar = true
            }

        },
        special: function(event) {
            var valorMonster2 = Math.ceil(Math.random() * 10)
            var valorPlayer2 = Math.ceil(Math.random() * 15)
            this.playerLife = this.playerLife - valorMonster2
            this.monsterLife = this.monsterLife - valorPlayer2
            if (this.playerLife <= 0) {
                this.playerLife = 0
                this.mostrar = true
            } else if (this.monsterLife <= 0) {
                this.monsterLife = 0
                this.mostrar = true
            }
        },
        quit: function(event) {
            this.playerLife = 100
            this.monsterLife = 100
            this.mostrar = true
        },
        heal: function(event) {
            var heal = Math.ceil(Math.random() * 10)
            var valorMonster3 = Math.ceil(Math.random() * 10)
            this.playerLife = this.playerLife - valorMonster3
            this.playerLife = this.playerLife + heal

        },
        start: function (event) {
            this.playerLife = 100
            this.monsterLife = 100
            this.mostrar = false
        }
    }
})
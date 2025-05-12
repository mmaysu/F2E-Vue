const { createApp } = Vue; 
createApp({
    data() {
        return {
        count: 0,
        };
    },
    methods: {
        add() {
            this.count++;
        },
    },

}).mount(".container"); 
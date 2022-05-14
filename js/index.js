$(window).on("scroll", function() {
    console.log('ola');
    if($(window).scrollTop() > 100) {
        $(".header").addClass("active");
    } else {
    $(".header").removeClass("active");
    }
});

Vue.createApp({
    data() {
        return {
            menu: false,
            contact: {
                name: '',
                telephone: '',
                city: '',
                email: '',
                optionSelect: '',
                amount1: '',
                amount2: '',
            },
            send: false,
        }
    },

    methods: {
        openMenu(){
            this.menu = !this.menu
        },

        sendForm(){
            let URL = '../Controller.php'
            
            axios.post(URL, this.contact).then(response => {
                if (response.status == 200) {
                    this.send = true
                    this.contact = {
                        name: '',
                        telephone: '',
                        email: '',
                        optionSelect: '',
                        amount1: '',
                        amount2: '',
                    }

                    alert('Mensaje enviado')
                }
            }).catch(error => {
                console.log(error)
            })
        }
    }
}).mount('#app')
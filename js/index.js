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
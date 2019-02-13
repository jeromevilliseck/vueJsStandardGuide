var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue !'
    }
});

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'Vous avez affiché cette page le ' + new Date().toLocaleString()
    }
});

var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
});

var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            {text: 'Apprendre JavaScript'},
            {text: 'Apprendre Vue'},
            {text: 'Créer quelque chose de génial'}
        ]
    }
});

var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Hello Vue.js !'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
});

var app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Hello Vue !'
    }
});

Vue.component('todo-item', {
    // Le composant todo-item accepte maintenant une
    // « prop » qui est comme un attribut personnalisé.
    // Cette prop est appelée todo.
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
});

var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            {id: 0, text: 'Légumes'},
            {id: 1, text: 'Fromage'},
            {id: 2, text: 'Tout ce que les humains sont supposés manger'}
        ]
    }
});

//Partie 2 les instances

var obj = {
    foo: 'bar'
};

Object.freeze(obj); //Permet de geler ou non les instances

new Vue({
    el: '#app8',
    data: obj
});


//Propriétés proxifiées
// var prop = { a: 1 };
// var vm = new Vue({
//     el: '#example',
//     data: prop
// });
//
// vm.$data === prop; // => true
// vm.$el === document.getElementById('example') // => true
//
// // $watch est une méthode de l'instance
// vm.$watch('a', function (newVal, oldVal) {
//     // cette fonction de rappel sera appelée quand `vm.a` changera
// });


//Interpolations
var localVar = {a: 'salut'};

var objetG = new Vue({ // Attention on manipule l'objet dans la console vie le nom de l'instance objetI pas via le nom de l'el
    el: '#app10',
    //data: localVar, //On passe l'objet directement dans l'objet data, on ne manipule pas data de l'exterieur, mais les proprietes de localVar
    data: {
        message: 'coucou'
    }
});

//Interprétation du HTML

var objetH = new Vue({
    el: '#app11',
    data: {
        rawHtml: 'Ceci devrait être rouge',
        dynamicId: 'two', //Changer la valeur par one ou two pour modifier la valeur de l'id en html
        isButtonDisabled: undefined //true desactive le button
    }
});

//Utilisation des expressions javascript

var objetI = new Vue({
    el: '#app12',
    data: {
        number: 5,
        ok: '', //si vide retourne oui, sinon retourne non
        message: 'abracadabra magic',
        id: 2
    }
});

//Utilisation des directives argumentées

var objetJ = new Vue({
    el: '#app13',
    data: {
        url: 'https://www.google.fr'
    }
});

//proprietes calculees exemple basique

var objetK = new Vue({
    el: '#app14',
    data: {
        message: 'Bonjour'
    },
    computed: {
        //un accesseur (getter) calculé
        reversedMessage: function () {
            //'this' pointe sur l'instance vm
            return this.message.split('').reverse().join('')
        },
        now: function () {
            return Date.now()
        }
    }
});

//propriétés calculées vs propriétés observées

//Code imperatif calculé
var objetL = new Vue({
    el: '#app15',
    data: {
        firstName: 'Foo',
        lastName: 'Bar',
        fullName: 'Foo Bar'
    },
    watch: {
        firstName: function (val) {
            this.fullName = val + ' ' + this.lastName
        },
        lastName: function (val) {
            this.fullName = this.firstName + ' ' + val
        }
    }
});

//Code répétitif observé
var objetM = new Vue({
    el: '#app16',
    data: {
        firstName: 'Foo',
        lastName: 'Bar'
    },
    computed: {
        fullName: function () {
            return this.firstName + ' ' + this.lastName
        }
    }
});

//Mutateur calculé

var objetN = new Vue({
   el: '#app17',
   data: {
       firstName: 'Jerome',
       lastName: 'Villiseck'
   } ,
    computed: {
       fullName: {
           //accesseur Attention syntaxe spécifique pour les déclarer => nom de fonction > accolade > nom de sous fonction
           get: function() {
               return this.firstName + ' ' + this.lastName
           },
           //mutateur
           set: function (newValue){
               var names = newValue.split(' ');
               this.firstName = names[0];
               this.lastName = names[names.length - 1]
           }
       }
    }
});

var watchExampleVM = new Vue({
    el: '#watch-example',
    data: {
        question: '',
        answer: 'Je ne peux pas vous donner une réponse avant que vous ne posiez une question'
    },
    watch: {
        // à chaque fois que la question change, cette fonction s'exécutera
        question: function (newQuestion, oldQuestion){
            this.answer = "J'attends que vous arrêtiez de taper...";
            this.debouncedGetAnswer()
        }
    },
    created: function () {
        // _.debounce est une fonction fournie par lodash pour limiter la fréquence
        // d'exécution d'une opération particulièrement couteuse.
        this.debouncedGetAnswer = _.debounce(this.getAnswer, 500) //ainsi on appelle getAnswer uniquement toutes les 500 milisecondes pour eviter de trop nombreux appels à l'API, un appel étant couteux
    },
    methods: {
        getAnswer: function() {
            if (this.question.indexOf('?') === -1){ //Si l'attribut question ne contient pas de point d'interrogation
                this.answer = "Les questions contiennent généralement un point d'interrogation. ;-)";
                return
            }
            this.answer = 'Je reflechis...';
            let vm = this;
            axios.get('https://yesno.wtf/api')
                .then(function (response) {
                    vm.answer = _.capitalize(response.data.answer)
                })
                .catch(function (error) {
                    vm.answer = "Erreur ! Impossible d'accéder à l'API." + error
                })
        }
    }
});

//Liaison de classes HTML et permuttation de classes

var objetO = new Vue({
    el: '#app18',
    data: {
        isActive: true,
        hasError: false
    }
});

//Liaison de classe avec variation des classes selon les booléans des variables

var objetP = new Vue({
    el: '#app19',
    data: {
        classObject: {
            active: true,
            'text-danger': false
        }
    }
});

var objetQ = new Vue({
    el: '#app20',
    data: {
        isActive: true,
        error: null
    },
    computed: {
        classObject: function () {
            return {
                active: this.isActive && !this.error,
                'text-danger': this.error && this.error.type === 'fatal'
            }
        }
    }
});

var objetR = new Vue({
    el: '#app21',
    data: {
        isActive: true,
        activeClass: 'elem1tableau',
        errorClass: 'elem3tableau'
    }
});

var objetS = new Vue({
    el: '#app22',
    data: {
        activeColor: 'red',
        fontSize: 30
    }
});

var objetT = new Vue({
    el: '#app23',
    data: {
        styleObject: {
            color: 'blue',
            fontSize: '13px'
        }
    }
});

var objetU = new Vue({
    el: '#app24',
    data: {
        baseStyles: {
            color: 'blue',
            fontSize: '13px'
        },
        overridingStyles: {
            textAlign: 'right'
        }
    }
});

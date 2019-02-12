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
            { text: 'Apprendre JavaScript' },
            { text: 'Apprendre Vue' },
            { text: 'Créer quelque chose de génial' }
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
            { id: 0, text: 'Légumes' },
            { id: 1, text: 'Fromage' },
            { id: 2, text: 'Tout ce que les humains sont supposés manger' }
        ]
    }
});

var dataURL = 'https://jsonplaceholder.typicode.com/users';

var jsonData = [
    {
        "nombre": "Calcetin",
        "precio": "45.45",
        "foto": "1.jpg"
    },
    {
        "nombre": "Mochila",
        "precio": "45.23",
        "foto": "2.jpg"
    },
    {
        "nombre": "Pan",
        "precio": "12",
        "foto": "3.jpg"
    },
    {
        "nombre": "Condones",
        "precio": "45",
        "foto": "4.jpg"
    },
    {
        "nombre": "Collar",
        "precio": "500",
        "foto": "5.jpg"
    },
    {
        "nombre": "Cerdido en mole",
        "precio": "25.2",
        "foto": "6.jpg"
    },
    {
        "nombre": "nuevo pruducto",
        "precio": "100",
        "foto": "7.jpg"
    }
];

new Vue({
  el: '#app',
  data: {
    items: null,
	title: "Catalogo Maggie Store"
  },
  created: function () {
    this.fetchData();
  },
  methods: {
    fetchData: function () {
		var self = this;
        self.items = jsonData;
		/*
        var total;
		$.get(dataURL, function( data ) {
			self.items = data;
		});
        */
    }
  }
});
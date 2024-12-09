const proyectos = [
	{
		titulo: 'Landing page finance course',
		descripcion: 'Landing page for marketing',
		technology: ['HTML', 'CSS', 'JS', 'Tailwind css'],
		url: 'https://lp-finanzas.netlify.app/',		
        imagen: './resources/img/lp-finanzas.webp'
	},
	{
		titulo: 'React Car listing website',
		descripcion: 'Listing website using react.js.',
		technology: ['react.js','CSS', 'HTML', 'JS', 'Tailwind css'],
		url: 'https://omreactcarlisting.netlify.app/',		
        imagen: './resources/img/react-car-listing.webp'
	},
	{
		titulo: 'React tasks app',
		descripcion: 'Basic Task App using react.js.',
		technology: ['react.js','CSS', 'HTML', 'JS', 'Tailwind css'],
		url: 'https://om-react-tasks-app.netlify.app/',		
        imagen: './resources/img/react-tasks-app.webp'
	},
	{
		titulo: 'React E-commerce Cart',
		descripcion: 'Ecommerce cart feature using react.js, you can add, view, update quantities and delete items from the cart.',
		technology: ['react.js','CSS', 'HTML', 'JS', 'Tailwind css', 'local storage'],
		url: 'https://react-cart-ecommerce.netlify.app/',		
        imagen: './resources/img/react-cart-ecommerce.webp'
	},
	{
		titulo: 'CRM with indexedDB',
		descripcion: 'Small CRM where you can manage customer information (CRUD), you can create, read, update and delete customers.',
		technology: ['CSS', 'HTML', 'JS', 'indexedDB'],
		url: 'https://indexeddb-crm.netlify.app/',		
        imagen: './resources/img/project-crm.webp'
	},
	{
		titulo: 'Vet Patients Records',
		descripcion: 'Application to keep track of patient admission to the veterinarian and the owners contact information.',
		technology: ['CSS', 'HTML', 'JS', 'indexedDB'],
		url: 'https://otomerqui.github.io/portfolio/vetPatients/index.html',		
        imagen: './resources/img/vet-patients.webp'
	},
    {
		titulo: 'Multistep Form',
		descripcion: 'Multistep form to select different types of services in each step and with their respective validations.',
		technology: ['CSS', 'HTML', 'JS'],
		url: 'https://otomerqui.github.io/portfolio/multistepForm/index.html',		
        imagen: './resources/img/multistep-form.webp'
	},
	{
		titulo: 'Cooking School',
		descripcion: 'WordPress Theme Website for a cooking school with their respective post types to show the different existing cooking courses and their respective teachers..',
		technology: ['CSS', 'HTML', 'JS', 'PHP', 'WordPress'],
		url: 'https://demo2.digitalizatunegocio.club/',		
        imagen: './resources/img/escuela-de-cocina.webp'
	},
	{
		titulo: 'Susurros del Paraíso',
		descripcion: 'WordPress Theme for Single page for local business that provides clinical coaching service.',
		technology: ['CSS', 'HTML', 'JS', 'PHP', 'WordPress'],
		url: 'https://demo.digitalizatunegocio.club/',		
        imagen: './resources/img/susurros-del-paraiso.webp'
	},
	{
		titulo: 'Weekly Expenses APP',
		descripcion: 'Small application to keep track of weekly expenses and compare them with the budget.',
		technology: ['CSS', 'HTML', 'JS'],
		url: 'https://otomerqui.github.io/portfolio/weeklyExpenses/index.html',		
        imagen: './resources/img/weekly-expenses.webp'
	},
	{
		titulo: 'Car Insurance Calculator',
		descripcion: 'calculator of the amount of money to pay for car insurance depending on the type of car, the year and the type of insurance.',
		technology: ['CSS', 'HTML', 'JS'],
		url: 'https://otomerqui.github.io/portfolio/cotizadorSeguros/cotizador.html',		
        imagen: './resources/img/car-insurance-calculator-img.webp'
	},
	{
		titulo: 'Gym Business',
		descripcion: 'WordPress Theme Website for local gyms with their post types to show the different classes and teachers of each one.',
		technology: ['CSS', 'HTML', 'JS', 'PHP', 'WordPress'],
		url: 'https://wp-theme.digilabonline.com/',		
        imagen: './resources/img/gym-web.webp'
	},
	{
		titulo: 'Car Listing Website',
		descripcion: 'Car sales website with filter to search by car brand, year, minimum price, maximum price, number of doors, transmission type and color.',
		technology: ['CSS', 'HTML', 'JS'],
		url: 'https://otomerqui.github.io/portfolio/carStoreListing/carListing.html',		
        imagen: './resources/img/car-listing-web.webp'
	},
	{
		titulo: 'Ecommerce Website',
		descripcion: 'Ecommerce website home page with shopping cart made with local storage.',
		technology: ['CSS', 'HTML', 'JS'],
		url: 'https://otomerqui.github.io/portfolio/ecommerceWebsite/ecommerceWebsite.html',		
        imagen: './resources/img/ecom-web.webp'
	},
	{
		titulo: 'Notes App',
		descripcion: 'Small notes application where you can add notes, edit them, delete them',
		technology: ['CSS', 'HTML', 'JS'],
		url: 'https://otomerqui.github.io/portfolio/notesApp/index.html',		
        imagen: './resources/img/notes-app.webp'
	},
	{
		titulo: 'Basic Calculator',
		descripcion: 'Basic calculator that allows you to add, subtract, multiply and divide.',
		technology: ['CSS', 'HTML', 'JS'],
		url: 'https://otomerqui.github.io/portfolio/calculator/index.html',		
        imagen: './resources/img/calculator.webp'
	},
	{
		titulo: 'Optin Page',
		descripcion: 'Optin page to register for an online class to learn NLP made with HTML/CSS and some Javascript.',
		technology: ['CSS', 'HTML', 'JS'],
		url: 'https://otomerqui.github.io/portfolio/optinPage/index.html',		
        imagen: './resources/img/optin-ahpnl.webp'
	},
	{
		titulo: 'Contact Validation Form',
		descripcion: 'Small contact form with validations in all its input fields made with HTML/CSS and some Javascript.',
		technology: ['CSS', 'HTML', 'JS'],
		url: 'https://otomerqui.github.io/portfolio/contactFormValidation/form.html',		
        imagen: './resources/img/form validation.webp'
	},
	{
		titulo: 'Corporate Website',
		descripcion: 'Homepage of small corporate website with its service, contact, gallery, etc. sections.',
		technology: ['CSS', 'HTML'],
		url: 'https://otomerqui.github.io/portfolio/corporateWebsite/corporate.html',		
        imagen: './resources/img/corpo-web.webp'
	},
	{
		titulo: 'CoffeShop Website',
		descripcion: 'Homepage of small CoffeShop website with its service, contact, gallery, etc. sections.',
		technology: ['CSS', 'HTML'],
		url: 'https://otomerqui.github.io/portfolio/coffeShopWebsite/coffeShop.html',		
        imagen: './resources/img/coffe-web.webp'
	},
	{
		titulo: 'Photo Camera',
		descripcion: 'Homepage of small Photo camera website with its service, contact, gallery, etc. sections.',
		technology: ['CSS', 'HTML'],
		url: 'https://otomerqui.github.io/portfolio/photographyWebsite/photography.html',		
        imagen: './resources/img/photo-web.webp'
	},
];
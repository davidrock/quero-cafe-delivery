export interface Product {
	name: string;
	imageUrl: string;
	description: string;
	tags: string[];
	price: number;
	quantity: number;
}

export const PRODUCTS: Product[] = [
	{
		name: 'Expresso Tradicional',
		imageUrl: 'products/expresso.png',
		description: 'O tradicional café feito com água quente e grãos moídos',
		tags: ['TRADICIONAL'],
		price: 9.9,
		quantity: 1,
	},
	{
		name: 'Expresso Americano',
		imageUrl: 'products/americano.png',
		description: 'Expresso diluído, menos intenso que o tradicional',
		tags: ['TRADICIONAL'],
		price: 9.9,
		quantity: 1,
	},
	{
		name: 'Expresso Cremoso',
		imageUrl: 'products/expresso-cremoso.png',
		description: 'Café expresso tradicional com espuma cremosa',
		tags: ['TRADICIONAL'],
		price: 9.9,
		quantity: 1,
	},
	{
		name: 'Expresso Gelado',
		imageUrl: 'products/cafe-gelado.png',
		description: 'Bebida preparada com café expresso e cubos de gelo',
		tags: ['TRADICIONAL'],
		price: 9.9,
		quantity: 1,
	},
	{
		name: 'Café com Leite',
		imageUrl: 'products/cafe-com-leite.png',
		description: 'Meio a meio de expresso tradicional com leite vaporizado',
		tags: ['TRADICIONAL'],
		price: 9.9,
		quantity: 1,
	},
	{
		name: 'Latte',
		imageUrl: 'products/latte.png',
		description: '',
		tags: ['TRADICIONAL'],
		price: 9.9,
		quantity: 1,
	},
	{
		name: 'Capuccino',
		imageUrl: 'products/capuccino.png',
		description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
		tags: ['TRADICIONAL'],
		price: 9.9,
		quantity: 1,
	},
	{
		name: 'Macchiato',
		imageUrl: 'products/macchiato.png',
		description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
		tags: ['TRADICIONAL'],
		price: 9.9,
		quantity: 1,
	},
	{
		name: 'Mocaccino',
		imageUrl: 'products/mocaccino.png',
		description: 'Café expresso misturado com um pouco de leite quente e espuma',
		tags: ['TRADICIONAL'],
		price: 9.9,
		quantity: 1,
	},
	{
		name: 'Chocolate Quente',
		imageUrl: 'products/chocolate-quente.png',
		description: 'Café expresso com calda de chocolate, pouco leite e espuma',
		tags: ['TRADICIONAL'],
		price: 9.9,
		quantity: 1,
	},
	{
		name: 'Cubano',
		imageUrl: 'products/cubano.png',
		description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
		tags: ['TRADICIONAL'],
		price: 9.9,
		quantity: 1,
	},
	{
		name: 'Havaiano',
		imageUrl: 'products/havaiano.png',
		description: 'Bebida adocicada preparada com café e leite de coco',
		tags: ['TRADICIONAL'],
		price: 9.9,
		quantity: 1,
	},
	{
		name: 'Árabe',
		imageUrl: 'products/arabe.png',
		description: 'Bebida preparada com grãos de café árabe e especiarias',
		tags: ['TRADICIONAL'],
		price: 9.9,
		quantity: 1,
	},
	{
		name: 'Irlandês',
		imageUrl: 'products/irlandes.png',
		description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
		tags: ['TRADICIONAL'],
		price: 9.9,
		quantity: 1,
	},
];

import { createContext, ReactNode, useState } from 'react';
import { Product } from '../assets/Products';
import { produce } from 'immer';

export interface ShoppingCart {
	name: string;
	imageUrl: string;
	price: number;
	quantity: number;
}

interface ShoppingCartContextType {
	catalogProducts: Product[] | null;
	shoppingCartProducts: ShoppingCart[];
	addShoppingCartProduct: (product: Product) => void;
	removeShoppingCartProduct: (productName: string) => void;
	fillCatalogProducts: (product: Product[]) => void;
	fillShoppingCart: () => void;
}

interface ShoppingCartContextProps {
	children: ReactNode;
}

export const ShoppingCartContext = createContext({} as ShoppingCartContextType);

export function ShoppingCartContextProvider({ children }: ShoppingCartContextProps) {
	const [catalogProducts, setCatalogProducts] = useState<Product[]>([]);
	const [shoppingCartProducts, setShoppingCartProducts] = useState<ShoppingCart[]>([]);

	function addShoppingCartProduct(product: Product) {
		if (product) {
			const filteredProducts = shoppingCartProducts.filter((value) => value.name !== product.name);
			const shoppingCart = produce(filteredProducts, (draft) => {
				draft?.push(product);
			});

			setShoppingCartProducts(shoppingCart);
			localStorage.setItem('quero-cafe:shoppingCart', JSON.stringify(shoppingCart));
		}
	}

	function removeShoppingCartProduct(productName: string) {
		const filteredProducts = shoppingCartProducts.filter((value) => value.name !== productName);
		setShoppingCartProducts(filteredProducts);
		localStorage.setItem('quero-cafe:shoppingCart', JSON.stringify(filteredProducts));
	}

	function fillCatalogProducts(products: Product[]) {
		setCatalogProducts(products);
	}

	function fillShoppingCart() {
		const products = localStorage.getItem('quero-cafe:shoppingCart');
		if (products) {
			setShoppingCartProducts(JSON.parse(products));
		}
	}

	return (
		<ShoppingCartContext.Provider
			value={{
				catalogProducts,
				fillCatalogProducts,
				shoppingCartProducts,
				addShoppingCartProduct,
				removeShoppingCartProduct,
				fillShoppingCart,
			}}
		>
			{children}
		</ShoppingCartContext.Provider>
	);
}

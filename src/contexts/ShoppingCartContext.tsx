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
			const shoppingCart = produce(shoppingCartProducts, (draft) => {
				draft?.push(product);
			});
			setShoppingCartProducts(shoppingCart);
			localStorage.setItem('quero-cafe:shoppingCart', JSON.stringify(shoppingCart));
		}
	}

	function fillCatalogProducts(products: Product[]) {
		setCatalogProducts(products);
	}

	function fillShoppingCart() {
		const products: ShoppingCart[] = JSON.parse(localStorage.getItem('quero-cafe:shoppingCart'));
		setShoppingCartProducts(products ?? []);
	}

	return (
		<ShoppingCartContext.Provider
			value={{
				catalogProducts,
				fillCatalogProducts,
				shoppingCartProducts,
				addShoppingCartProduct,
				fillShoppingCart,
			}}
		>
			{children}
		</ShoppingCartContext.Provider>
	);
}

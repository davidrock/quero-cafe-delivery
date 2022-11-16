import { createContext, ReactNode, useState } from 'react';
import { Product } from '../assets/Products';
import { produce } from 'immer';

export interface ShoppingCart {
	name: string;
	price: number;
}

interface ShoppingCartContextType {
	catalogProducts: Product[] | null;
	shoppingCartProducts: ShoppingCart[];
	addShoppingCartProduct: (product: Product) => void;
	fillCatalogProducts: (product: Product[]) => void;
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
			setCatalogProducts([...catalogProducts, product]);
			// produce(products, (draft) => {
			// 	draft?.push(product);
			// });
		}
	}

	function fillCatalogProducts(products: Product[]) {
		setCatalogProducts(products);
	}

	return (
		<ShoppingCartContext.Provider
			value={{
				catalogProducts,
				fillCatalogProducts,
				shoppingCartProducts,
				addShoppingCartProduct,
			}}
		>
			{children}
		</ShoppingCartContext.Provider>
	);
}

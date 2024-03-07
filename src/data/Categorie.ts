import { Article } from './Article.ts';

export interface Categorie {
	nom: string;
	id: number;
}

const Categories: Categorie[] = [
	{
		nom: "Epicerie",
		id: 0,
	},
	{
		nom: "Cat2",
		id: 1,
	},
	{
		nom: "Pour bébé",
		id: 2,
	},
]

export function getCategorieById(id: number): Categorie {
	return Categories.find((categorie) => categorie.id === id)!;
}

export function getAllCategories(): Categorie[] {
	return Categories;
}
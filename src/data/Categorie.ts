import { Article } from './Article.ts';

export interface Categorie {
	nom: string;
	id: number;
	listeArt: Array<Article>;
}

const Categories: Categorie[] = [
	{
		nom: "Epicerie",
		id: 0,
		listeArt: [
		{
			nom: "Fromage",
			id: 0,
			desc: "Du fromage !",
			prix: 4
		},
		{
			nom: "Jambon",
			id: 1,
			desc: "Du jambon !",
			prix: 5
		},
		{
			nom: "Yaourt",
			id: 2,
			desc: "Du Yaourt !",
			prix: 2
		}]
	},
	{
		nom: "Cat2",
		id: 1,
		listeArt: [
		{
			nom: "Truc",
			id: 0,
			desc: "Du truc !",
			prix: 48
		},
		{
			nom: "Machin",
			id: 1,
			desc: "Du machin !",
			prix: 0
		},
		{
			nom: "Bidule",
			id: 2,
			desc: "Du bidule !",
			prix: -5
		}]
	},
	{
		nom: "Pour bébé",
		id: 2,
		listeArt: [
		{
			nom: "Biberon",
			id: 0,
			desc: "Un Biberon !",
			prix: 12
		},
		{
			nom: "Landeau",
			id: 1,
			desc: "Un landeau !",
			prix: 78
		},
		{
			nom: "Sucette",
			id: 2,
			desc: "Une sucette !",
			prix: 1
		}]
	},
]

export function getCategorieById(id: number): Categorie {
	return Categories.find((categorie) => categorie.id === id)!;
}

export function getAllCategories(): Categorie[] {
	return Categories;
}
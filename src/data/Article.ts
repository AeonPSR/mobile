export interface Article {
	nom: string;
	id: number;
	desc: string;
	prix: number;
	idCat: number;
	idArt: number;
}

const Articles: Article[] = [
	{
		nom: "Fromage",
		id: 0,
		desc: "Du fromage !",
		prix: 4,
		idCat: 0,
		idArt: 0
	},
	{
		nom: "Jambon",
		id: 1,
		desc: "Du jambon !",
		prix: 5,
		idCat: 0,
		idArt: 1
	},
	{
		nom: "Yaourt",
		id: 2,
		desc: "Du Yaourt !",
		prix: 2,
		idCat: 0,
		idArt: 2
	},
	{
		nom: "Truc",
		id: 3,
		desc: "Du truc !",
		prix: 48,
		idCat: 1,
		idArt: 3
	},
	{
		nom: "Machin",
		id: 4,
		desc: "Du machin !",
		prix: 0,
		idCat: 1,
		idArt: 4
	},
	{
		nom: "Bidule",
		id: 5,
		desc: "Du bidule !",
		prix: -5,
		idCat: 1,
		idArt: 5
	},
	{
		nom: "Biberon",
		id: 6,
		desc: "Un Biberon !",
		prix: 12,
		idCat: 2,
		idArt: 6
	},
	{
		nom: "Landeau",
		id: 7,
		desc: "Un landeau !",
		prix: 78,
		idCat: 2,
		idArt: 7
	},
	{
		nom: "Sucette",
		id: 8,
		desc: "Une sucette !",
		prix: 1,
		idCat: 2,
		idArt: 8
	},
]

export function getArticleByCategory(idCat: number): Article[] {
	return Articles.filter((article) => article.idCat === idCat)!;
}

export function getArticleById(id: number): Article {
	return Articles.find((article) => article.id === id)!;
}

export function getArticleByName(name: string): Article {
	return Articles.find((article) => article.nom === name)!;
}

export function getAllArticles(): Article[] {
	return Articles;
}
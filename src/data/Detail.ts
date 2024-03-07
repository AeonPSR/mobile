export interface Detail {
	id: number;
	description: string;
}


const Details: Detail[] = [
	{
		id: 0,
		description: "La première description !",
	},
	{
		id: 1,
		description: "La seconde description !",
	},
	{
		id: 2,
		description: "La troisième description !",
	},
	{
		id: 3,
		description: "La quatrième description !",
	},
	{
		id: 4,
		description: "La cinquième description !",
	},
	{
		id: 5,
		description: "La sixième description !",
	},
	{
		id: 6,
		description: "La septième description !",
	},
	{
		id: 7,
		description: "La huitième description !",
	},
	{
		id: 8,
		description: "La neuvième description !",
	},
]

export function getAllDetails(): Detail[] {
	return Details;
}

export function getDetailById(id: number): Detail {
	return Details.find((detail) => detail.id === id)!;
}
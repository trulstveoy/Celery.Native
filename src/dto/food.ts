interface food{
	name:string,
	id:string,
	waterGrams:number,
	calories:number,
	mainCategory:mainCategory,
	subCategory:subCategory
}

interface mainCategory{
	id:string,
	name:string
}

interface subCategory{
	id:string,
	name:string
}
declare module "french-adjectives" {
	declare function agree(
		adjective: string,
		gender: GendersMF,
		number: Numbers,
		noun?: string,
		isBeforeNoun?: boolean,
		contractsData?: ContractsData
	): string;
}

import type Table from "@/Utils/Cql/DB/Table.ts";

class Finder<Data> {
	public data: Data[];
	
	private pageState: string | Buffer | undefined;
	
	private query: unknown;
	
	private options: unknown;
	
	private table: Table<unknown>;

	public constructor(data: Data[], table: Table<unknown>, query?: unknown, options?: unknown, pageState?: string | Buffer) {
		this.data = data;
		
		this.pageState = pageState;
		
		this.query = query;
		
		this.table = table;
		
		this.options = options;
	}

	[Symbol.iterator]() {
		return this.data[Symbol.iterator]();
	}

	/**
	 * Gets the raw data
	 * @returns The data
	 */
	public toArray() {
		return this.data;
	}

	/**
	 * Gets the length of the data
	 */
	public get length() {
		return this.data.length;
	}

	/**
	 * Gets the first element of data
	 */
	public get first() {
		return this.data[0];
	}

	/**
	 * Maps the data
	 * @param callback The callback to map the data
	 * @returns The mapped data
	 */
	public map<T>(callback: (value: Data, index: number, array: Data[]) => T) {
		return this.data.map(callback);
	}
	
	public async nextPage() {
		// @ts-expect-error
		const data = await this.table.find(this.query, { ...this.options, pageState: this.pageState });
		
		this.data = data.toArray();
		
		this.pageState = data.pageState;
		
		return this;
	}
}

export default Finder;

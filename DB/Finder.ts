class Finder<Data> {
	public data: Data[];

	public constructor(data: Data[]) {
		this.data = data;
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
}

export default Finder;

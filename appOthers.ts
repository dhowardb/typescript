interface Greetable {
	name: string;
}

interface Printable {
	print(): void;
}

//in typescript rewriting classes
class Users implements Greetable, Printable {
	constructor(public name: string, private age: number) {} //converted as properties

	print(): void {
		console.log(this.name);
	}
}

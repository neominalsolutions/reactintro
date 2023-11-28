// let a:number = 0;
// a = 'ali';

function sum(nm1: number, nm2: number): number {
	return nm1 + nm2;
}

//sum(); // invalid
//sum(1); // invalid
// const c:string = sum(1, 4); // invalid
// sum(1,'6'); // invalid
sum(1, 4);

// Diziler
const numbers: Array<number> = [];
numbers.push(1, 2, 3, 4);

// abstract class yapıları ile çalışabiliriz
// generic class ile çalışmayı destekler
export abstract class Entity<T> {
	public name!: string; // string ve undefined tanımlanabilir.
	public key!: T;
	protected isDeleted: boolean = false;
	abstract Do(): void;
	private CheckName(): void {}
	/**
	 *
	 */
	constructor() {
		this.name = '1';
	}

	set Name(value: string) {
		this.name = value;
	}

	get Name() {
		return this.name;
	}

	// constructor over load yok
	// constructor(){}
}

export interface IProfile {
	username: string; // required
	email?: string; // optional değer
}

// single inheritance destekler
class User extends Entity<string> implements IProfile {
	Do(): void {
		throw new Error('Method not implemented.');
	}
	username!: string; // null veya string değer atanabilir. atanacak initial bir değer yoksa ! işareti kullanabiliriz.
	email?: string | undefined; // Union Type, Javascript esnek bir tip olduğu için birden falza tipi desteklen değişkenler tanımlanabilir.
}

const user: User = new User();
user.name = 'ali';
user.key = 'wer324';

// enum ifadeleri ile çalışabiliriz
enum PaymentTypes {
	Cache = 'Nakit',
	Credit = 'Kredi Kartı',
}

// PaymentTypes.Cache;

// kendimiz için custom type oluşturma desteği var
type ButtonColor = 'white' | 'black' | 'orange';
const myButtonColor: ButtonColor = 'white'; // valid
// const myButtonColor1: ButtonColor = 'yellow'; // invalid

type ButtonProps = {
	color: ButtonColor;
	text?: string; // optional bir değer
};

const btnProps: ButtonProps = { color: 'orange', text: 'myButton' };

// type değerlerini genişletme yeni özellikler kazandırma tekniği
// intersect işlemi (bir tipe yeni bir değer ekleme)
type IconButtonProps = ButtonProps & { icon: string };
const iconBtn: IconButtonProps = { color: 'orange', icon: 'home' };

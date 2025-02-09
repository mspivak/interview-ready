// 6. *Animal Shelter*:

import { LinkedList } from "./10_LinkedList";

// An animal shelter, which holds only dogs and cats, operates on a strictly
// "first in, first out" basis. People must adopt either the "oldest"
// (based on arrival time) of all animals at the shelter,
// or they can select whether they would prefer a dog or a cat
// (and will receive the oldest animal of that type).
// They cannot select which specific animal they would like.
// Create the data structures to maintain this system and implement operations
// such as enqueue, dequeueAny, dequeueDog, and dequeueCat.
// You may use the built-in LinkedList data structure.

export type AnimalType = "dog" | "cat";

export class Animal {
	type: AnimalType;
	constructor(type: AnimalType) {
		this.type = type;
	}
}

export default class AnimalShelter {
	list: LinkedList<Animal>;

	constructor() {
		this.list = new LinkedList<Animal>();
	}

	enqueue(type: AnimalType): void {
		this.list.push(new Animal(type));
	}

	dequeueAny(): Animal | undefined {
		return this.list.pop();
	}

	dequeueSpecificType(type: AnimalType): Animal | undefined {
		return this.list.popFirstMatching(
			(a: Animal | undefined) => a?.type === type
		);
	}

	dequeueDog(): Animal | undefined {
		return this.dequeueSpecificType("dog");
	}

	dequeueCat(): Animal | undefined {
		return this.dequeueSpecificType("cat");
	}
}

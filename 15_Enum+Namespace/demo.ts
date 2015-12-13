// Stützli-Wösch

enum CarWash {
	Idle,
	Paid,
	Error
}

namespace CarWash {

	export function start(): CarWash {
		return CarWash.Idle;
	}

	export function next(currentState: CarWash, message: string): CarWash {

		if(currentState === CarWash.Idle && message === "1sfr") {
			return CarWash.Paid;
		}

		if(currentState === CarWash.Paid && message === "water for 1 minute") {
			return CarWash.Idle;
		}

		return CarWash.Error;
	}
}



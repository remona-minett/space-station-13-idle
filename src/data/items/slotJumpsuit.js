export default {
	jumpsuitGrey: {
		name: "Assistants Jumpsuit",
		sellPrice: 1200,
		icon: require("@/assets/art/combat/items/jumpsuit_grey.png"),
		equipmentSlot: "jumpsuit",
		overlay: require("@/assets/art/combat/items/jumpsuit_grey.png"),
		stats: {
			maxHealth: 5,
			evasion: 30,
			protection: 20,
			precision: 10,
			power: 10,
		},
		requires: {
			evasion: 3,
		}
	},
}
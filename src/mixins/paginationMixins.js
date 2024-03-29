export const paginationMixin = {
	watch: {
		page() {
			if (this.$route.name === this.pagination.path_name) {
				this.pagination.load_next_cards
					?
					this.getCards(true)
					:
					this.getCards();

				this.pagination.load_next_cards = false;
			}
		},

		cards: {
			handler: function () {
				this.pagination.cards_list = [...this.cards];
			},
			deep: true,
		},
	},
	computed: {
		page() { return +this.$route.query.page; },
		count() { return this.pagination_data.count; },
		number_of_pages() { return Math.ceil(this.count / this.pagination.cards_in_page); },
	},
	data() {
		return {
			pagination: {
				path_name: this.$route.name,
				cards_in_page: 48,
				cards_list: [],
				load_next_cards: false,
			},
		}
	},
}
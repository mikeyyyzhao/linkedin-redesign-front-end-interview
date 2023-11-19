export const PROFILES = [
	{
		name: "Brad Nelson",
		title: "Senior UX Designer",
		image: "https://st2.depositphotos.com/2931363/6569/i/450/depositphotos_65699901-stock-photo-black-man-keeping-arms-crossed.jpg",
		user_id: "brad_nelson"
	},
	{
		name: "Melissa Hynes",
		title: "Product manager",
		image: "https://st2.depositphotos.com/2931363/6569/i/450/depositphotos_65699901-stock-photo-black-man-keeping-arms-crossed.jpg",
		user_id: "melissa_hynes"
	},
	{
		name: "Brittney Jenning",
		title: "Product marketing",
		image: "https://st2.depositphotos.com/2931363/6569/i/450/depositphotos_65699901-stock-photo-black-man-keeping-arms-crossed.jpg",
		user_id: "brittney_jenning"
	},
	{
		name: "Thersa Neilson",
		title: "Executive coach",
		image: "https://st2.depositphotos.com/2931363/6569/i/450/depositphotos_65699901-stock-photo-black-man-keeping-arms-crossed.jpg",
		user_id: "thersa_neilson"
	},
	{
		name: "Ian Micalief",
		title: "Software engineer",
		image: "https://st2.depositphotos.com/2931363/6569/i/450/depositphotos_65699901-stock-photo-black-man-keeping-arms-crossed.jpg",
		user_id: "ian_micalief"
	}
]

export const POSTS = [
	{
		user_id: "brad_nelson",
		post: "Hey guys! I'm looking to hire a senior UX designer to join my team. If you know anyone who might be a good fit, please send them my way. Thanks!",
		comments: [ // note: comments can be null
			{
				user_id: "melissa_hynes",
				comment: "I know someone who might be interested. I'll send them your way."
			},
			{
				user_id: "brittney_jenning",
				comment: "I think someone I know from my previous job would be a great fit for this role!"
			},
		]
	},
	{
		user_id: "thersa_neilson",
		post: "Wow, I never knew how organic artichokes were grown. I'm going to try to grow some in my garden this year!",
		url: "https://www.youtube.com/watch?v=IQxXHYSzip4", // can be null
		preview_url: "https://www.immerse.education/wp-content/uploads/2022/10/what-are-the-7-different-types-of-architecture.jpg", // can be null
	},
	{
		user_id: "ian_micalief",
		post: "It's time to talk about our tech stack at LinkedIn. We love ember and node.js. What do you guys use?",
	}
]

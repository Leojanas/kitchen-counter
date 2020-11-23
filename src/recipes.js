const Recipes = [
    {
        id: 1, 
        name: 'Sweet Potato Casserole', 
        category: 'Dinner Side', 
        rating: 5,
        ingredients: [
            {name: 'sweet potatoes',
            qty: 2,
            unit: 'ea'},
            {name: 'sour cream',
            qty: 6,
            unit: 'ounces'}
        ],
        instructions: [
            {number: 1,
            content: "This is the first step."},
            {number: 2,
            content: "This is the second step."}
        ]
    },

    {
        id: 2, 
        name: 'Tacos', 
        category: 'Dinner Main', 
        rating: 4,
        ingredients: [
            {name: 'ground beef',
            qty: 1,
            unit: 'lb'},
            {name: 'shredded cheese',
            qty: 6,
            unit: 'ounces'}
        ],
        instructions: [
            {number: 1,
            content: "This is the first step."},
            {number: 2,
            content: "This is the second step."}
        ]
    }
]

export default Recipes;
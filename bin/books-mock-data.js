const books = [
    {
        title: "Gone with the wind",
        description: "no thats a movie",
        genre: "action",
        views: 2000,
        earnedCash: 3,
        coverImage: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTBZE3CEN44zzKQnUxu6hyAIC1RHfR3UQsqLAug1544ZOUhM_gW",
        pages: [],  /* check */
        author: "" /* check */
    }
]

module.exports = books 


/*     
    title: {type: String, required: true},
    description: {type: String, required: true},
    genre: {type: String, required: true},
    views: {type: Number},
    earnedCash: {type: Number},
    coverImage: {type: String, required: true},
    pages: [{type: Schema.Types.ObjectId, ref: "Page"}],
    author: {type: Schema.Types.ObjectId, ref: "User"}  */
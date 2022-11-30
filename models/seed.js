const db = require('./')

const seed_posts = [
    {
        volumeLoad:'13500',
        author:'Kai Oklesson'
    },
    {
        volumeLoad:'10800',
        author:'Kai Oklesson'

    },
    {
        volumeLoad:'11500',
        author:'Kai Oklesson'

    },
    {
        volumeLoad:'9600',
        author:'Kai Oklesson'

    },
    {
        volumeLoad:'11000',
        author:'Kai Oklesson'

    },
    {
        volumeLoad:'13000',
        author:'Kai Oklesson'

    }
]

db.Post.deleteMany({}, (err, posts) => {
    if (err) {
        console.log('Error occured in remove', err)
    } else {
        db.Post.insertMany(seed_posts, (err, posts) => {
            if (err) {
                console.log('Error occured in insertMany', err)
            } else {
                console.log('Created', posts.length, "posts")
            }
        })
    }
})
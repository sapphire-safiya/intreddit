{
  activeUser: uid,

  users: {
    uid: {
      info: {
        name: '',
        uid: '',
        posts:[]
      },
      isAuthenticated: true
    }
  },

  posts: {
    postId: {
      info: {
        title: "",
        description: "",
        time: "",
        postId:""
      }
    }
  },

  userPosts: {
    uid: {
      postIds: [postId, postId]
    }
  },

  upvotes: {
    postId: 0,
    postID: 0
  }
}
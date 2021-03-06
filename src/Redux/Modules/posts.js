const ADD_POST = 'ADD_POST'
const NAVIGATE_POST = 'NAVIGATE_POST'
const UPDATE_VOTES = 'UPDATE_VOTES'
const ADD_COMMENT_ID = 'ADD_COMMENT_ID'

var uuid = require('node-uuid')
var _ = require('lodash')

const initialState = {
  currentPost: '1',  
  posts: {
    1: {
      title: 'Node.js v6 is also LTS version, that means we should move on to it as soon as it become stable ',
      details: 'https://nodejs.org/en/blog/announcements/v6-release/?release',
      time: "Wed Apr 06 2016 17:45:34 GMT-7 (PDT)",
      postId:"1",
      author:"Brian Lai",
      votes:16,
      comments:['1','2', '3', '4']
    },
    2: {
      title: 'I know knex has everyone’s affection, but I thought this looked interesting -- https://github.com/robconery/massive-js',
      details: 'https://github.com/robconery/massive-js',
      time: "Wed Apr 27 2016 16:45:34 GMT-7 (PDT)",
      postId:"2",
      author:"Steve Butt",
      votes:5,
      comments:['5','6']
    },
    3: {
      title: 'If you are interested in going to Samsung Developer Conference 2016 (https://www.samsungdevelopers.com/sdc2016), please let me know. I have a couple of tickets I got from my former colleague.',
      details: 'https://www.samsungdevelopers.com/sdc2016',
      time: "Fri Apr 22 2016 17:45:34 GMT-7 (PDT)",
      postId:"3",
      author:"Nathan Nam",
      votes:2,
      comments:['5','6']
    },
    4: {
      title: 'Anyone have any info on #OSIsoft in the #energy sector?  Do we compliment what they are doing?  Do we compete?  Any info would be appreciated!',
      details: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
      time: "Wed Apr 20 2016 17:45:34 GMT-7 (PDT)",
      postId:"4",
      author:"Courtney Reding",
      votes:10,
      comments:['6','7']
    },
    5: {
      title: 'Visual Studio Code does look interesting. Microsoft is really stepping up their game open sourcing .net, adding Linux bash, and this week porting react native to Windows. ' +
        'I wouldn\'t totally discount them. Still the Nuclide stuff will be interesting to watch since facebook\'s investing heavily but that\'s for UI dev.',
      details: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
      time: "Wed Apr 27 2016 17:45:34 GMT-7 (PDT)",
      postId:"5",
      author:"Yaniv",
      votes:8,
      comments:['6','5']
    }
  }
}

export function addPost (title, detials,time, author) {
  var POST_ID = uuid.v4()
  return {
    type: ADD_POST,
    post: {
      title,
      details,
      time,
      postId: POST_ID,
      author,
      votes:0,
      comments: []
    }
  }
}
    
export function navigatePost (postId) {
  return {
    type: NAVIGATE_POST,
    postId  
  }
} 

export function updateVotes (postId,vote) {
  return {
    type: UPDATE_VOTES,
    postId,
    update: vote  
  }
} 
    
export function addCommentId (postId,commentId) {
  return {
    type: ADD_COMMENT_ID,
    postId,
    commentId  
  }
} 

export default function posts (state = initialState, action = null) {
  switch (action.type) {
    case ADD_POST : {
      var result = _.cloneDeep(state)
      result.posts[action.post.postId] = action.post
      return result
    }     
    case NAVIGATE_POST : {
      var result = _.cloneDeep(state)
      result['currentPost'] = action.postId
      return result
    }
    case UPDATE_VOTES : {
      var result = _.cloneDeep(state)
      var votes = parseInt(result.posts[action.postId].votes)
      if(action.update == "inc")
          result.posts[action.postId].votes = votes+1
      else      
          result.posts[action.postId].votes = votes-1
      return result
    } 
    case ADD_COMMENT_ID : {
      var result = _.cloneDeep(state)
      result.posts[action.postId].comments.push(action.commentId)
      return result
    }
    default :
      return state
  }
}


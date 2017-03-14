const ADD_COMMENT = 'ADD_COMMENT'

var uuid = require('node-uuid')
var _ = require('lodash')

const initialState = {
    1:{
        id:'1',
        text:'It’s recommended to migrate several months from now, October timeframe',
        author:'Chris Mordue',
        time:'Wed Apr 06 2016 17:45:34 GMT-7 (PDT)'   
    },
    2:{
        id:'2',
        text:'I think since very few of our apps were actually utilizing ES6 features (on Node.js), the migration should not be a problem. Though it make sense to wait a few months for it to get stabilized.',
        author:'Brian Lai',
        time:'Wed Apr 06 2016 17:49:34 GMT-7 (PDT)'
    },
    3:{
        id:'3',
        text:'Don\'t wait too long; I suspect that if we want this ready by October, we\'ll need quite some time to validate everything.',
        author:'Noam Ben-Ami',
        time:'Wed Apr 06 2016 17:53:34 GMT-7 (PDT)'
    },
    4:{
        id:'4',
        text:'I would say there’s also not an extreme rush to migrate any of our existing services over to node v6.  node v4 is supported until April 2018.  I think the more ideal way to start incorporating v6 is to adopt it for any new projects starting up.',
        author:'Steven Butt',
        time:'Wed Apr 06 2016 17:57:34 GMT-7 (PDT)'
    },
    5:{
        id:'5',
        text:'awesome',
        author:'anonymous',
        time:'Wed Apr 06 2016 17:45:34 GMT-7 (PDT)'   
    },
    6:{
        id:'6',
        text:'yeah',
        author:'anonymous',
        time:'Wed Apr 06 2016 17:45:34 GMT-7 (PDT)'   
    },
    7:{
        id:'7',
        text:'yo',
        author:'anonymous',
        time:'Wed Apr 06 2016 17:45:34 GMT-7 (PDT)'   
    }
}

export function addComment (id,text,author,time) {
  return {
    type: ADD_COMMENT,
    id,
    text,
    author,
    time  
  }
}


export default function comments (state = initialState, action = null) {
  switch (action.type) {
    case ADD_COMMENT :{
      var result = _.cloneDeep(state)
      result[action.id] = action
      return result
    }
    default :
      return state
  }
}


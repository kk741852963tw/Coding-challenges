
var Twitter = function() {
  // this.list = [];
  // this.relation = {};
  this.folow = new Map();
  this.tweets = new Map()
};

/**
* @param {number} userId
* @param {number} tweetId
* @return {void}
*/
Twitter.prototype.postTweet = function(userId, tweetId) {
  // this.list.push([userId, tweetId]);
  // if (!this.relation[userId]) {
  //     this.relation[userId] = [];
  //     this.relation[userId].push(userId);
  // }
  this.tweets.set(tweetId,userId);
};

/**
* @param {number} userId
* @return {number[]}
*/
Twitter.prototype.getNewsFeed = function(userId) {
  // let result = [];
  // let n = 10;
  // for (let i = this.list.length - 1; i >= 0; i--) {
  //     if (this.relation[userId].includes(this.list[i][0]) && n > 0) {
  //         n--;
  //         result.push(this.list[i][1]);
  //     }
  // }
  // return result;
  let ids = {};
  if (this.folow.has(userId)) {
      ids = this.folow.get(userId);
  }
  let res = [];
  let ar = Array.from(this.tweets);
  while (res.length < 10 && ar.length > 0) {
      let item = ar.pop();
      if (item[1] === userId || ids[item[1]]) {
          res.push(item[0]);
      }
  }
  return res;
};

/**
* @param {number} followerId
* @param {number} followeeId
* @return {void}
*/
Twitter.prototype.follow = function(followerId, followeeId) {
  // if (!this.relation[followerId]) {
  //     this.relation[followerId] = [];
  //     this.relation[followerId].push(followerId);
  // }
  // this.relation[followerId].push(followeeId);
  let ar = {};
  if (this.folow.has(followerId)) {
      ar = this.folow.get(followerId);
  }
  ar[followeeId] = true;
  this.folow.set(followerId, ar);
};

/**
* @param {number} followerId
* @param {number} followeeId
* @return {void}
*/
Twitter.prototype.unfollow = function(followerId, followeeId) {
  // const index = this.relation[followerId].indexOf(followeeId);
  // if (index !== -1) {
  //     this.relation[followerId].splice(index, 1);
  // }
  let ar = {};
  if (this.folow.has(followerId)) {
      ar = this.folow.get(followerId);
  }
  if (ar.hasOwnProperty(followeeId)) {
      delete ar[followeeId];
  }
  this.folow.set(followerId, ar);
};

/**
* Your Twitter object will be instantiated and called as such:
* var obj = new Twitter()
* obj.postTweet(userId,tweetId)
* var param_2 = obj.getNewsFeed(userId)
* obj.follow(followerId,followeeId)
* obj.unfollow(followerId,followeeId)
*/
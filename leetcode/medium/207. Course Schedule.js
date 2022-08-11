/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  const obj = {};
  for (let i = 0; i < prerequisites.length; i++) {
      if (obj[prerequisites[i][1]] === undefined) {
          obj[prerequisites[i][1]] = [];
      }
      if (obj[prerequisites[i][0]] === undefined) {
          obj[prerequisites[i][0]] = [];
      }
      obj[prerequisites[i][1]].push(prerequisites[i][0]);
  }
  let temp = obj;
  let visit = [];
  let check = true;
  let root = [];
  const test = function(course) {
      if (course.length === 0) {
          return;
      }
      for (let i = 0; i < course.length; i++) {
          if (visit.includes(course[i])) {
              check = false;
              return;
          }
          if (root.includes(course[i])) {
              continue;
          }
          root.push(course[i]);
          visit.push(course[i]);
          test(obj[course[i]]);
          visit.pop(course[i]);
      }
  };
  for (let key in obj) {
      if (root.includes(key)) {
          continue;
      }
      root.push(key);
      visit.push(key);
      test(obj[key]);
      if (!check) {
          return false;
      }
      visit.pop(key);
  }
  return true;
};
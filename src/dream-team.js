module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members) || members.length == 0) return false;
  let team = [];
  for(let name of members){
    if(typeof(name) == "string"){
      let firstLetter = name.trim()[0];
      if(/[A-Za-z]/.test(firstLetter))
        team.push(firstLetter.toUpperCase());
    }
  }
  return team.sort().join("");
};
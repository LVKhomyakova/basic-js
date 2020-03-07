const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(typeof(sampleActivity) !== "string") return false;
  let activity = parseFloat(sampleActivity);
  if(!activity || activity <= 0 || activity > 15) return false;

  let result = Math.ceil(Math.log( MODERN_ACTIVITY / activity ) / ( 0.693 / HALF_LIFE_PERIOD ));
  return result;
};

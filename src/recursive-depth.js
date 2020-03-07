module.exports = class DepthCalculator {
    calculateDepth(arr) {
        var depth = 0;
        if(Array.isArray(arr)){
            var itemDepths = [1];
            for(let i = 0; i < arr.length; i++){
                itemDepths.push( this.calculateDepth(arr[i]) + 1);
            }
            return Math.max(...itemDepths);
        }
        return depth;
    }
};
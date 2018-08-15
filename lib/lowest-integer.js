module.exports = array => {
  if (!Array.isArray(array)){
    return 0
  }
  let filtered = array.filter(num => typeof num ==='string') 
   if (filtered.length>0){
    return 0
  }
  filtered = array.filter(num=> num > 0)
  filtered.sort((a, b) => a - b);
  for (i = 0; i<filtered.length;i++){
    if (filtered[0]<=0 || filtered[0]>1){
      return 1
    }
    if (filtered[i+1]-filtered[i]>=2){
      return filtered[i]+1
    } else {
      return filtered[filtered.length-1]+1
    }
  }
};

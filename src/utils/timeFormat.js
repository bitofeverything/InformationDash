export function timeFormat(seconds) {
  const minutes = Math.floor(seconds/60);
  const remainingSeconds = seconds%60;
  const minuteHasS = minutes===1?'':'s'
  const secondHasS = remainingSeconds===1?'':'s'
  if(seconds <= 10){
    return 'Due';
  }

  return `${minutes} minute${minuteHasS} and ${remainingSeconds.toString(10)} second${secondHasS}`
}

// export function  timeDiff(oldTime, currTime) {
//   const diff = oldTime-currTime;
//   let classColor = 'diff-green';
//   if(diff > 0){
//     classColor = 'diff-red'
//   }
//   return oldTime-currTime
// }

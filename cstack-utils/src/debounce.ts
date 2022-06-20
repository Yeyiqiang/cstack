// 防抖函数
type FN = (...args : any[]) => any
export function debounce<T extends FN>(fn : T, limit : number = 300)
:(...any:Parameters<T>)=>ReturnType<T>
{
  let I : any, lastResult : any
  return (...args : any[])=>{
    clearInterval(I)
    I = setTimeout(()=>{
      lastResult = fn(...args)
    },limit)
    return lastResult
  }
}

// const fn = debounce((msg:string)=>{
//   console.log(msg)
//   return msg
// })

// for(let i=0;i<1000;i++){
//   fn(i+"")
// }
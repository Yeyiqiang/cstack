import { defineComponent, reactive } from "vue";
import { CardStack } from "../components/discover/CardStack";
import { Random } from 'mockjs'
import { wait } from '@cstack/utils'

async function mockData(){

  await wait(1000 + Math.floor(Math.random()*1000))

  return [...Array(10)].map(()=>{
    return {
      img : Random.image("300x600")
    }
  })
}

function useCandidates(){
  const data = reactive<any[]>([])
  mockData().then(list=>{
    data.push(...list)
  })
  return data
}

export const DisCoverExample = defineComponent({
  setup(){
    
    const candidates = useCandidates()
    return ()=>{
      return <div>
        <CardStack list={candidates} />
      </div>
    }
  }
})
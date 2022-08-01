import { defineComponent, reactive } from 'vue'
import {ListView} from '../components/listview'

export const ListViewExample = defineComponent({
  setup(){
    const list = reactive<any[]>([])
    async function fetchData(){
      
      return new Promise((resolve)=>{
        setTimeout(()=>{
          [...Array(10)].map((li)=>{
            list.push(li)
          })
          resolve(list)
        },Math.floor(Math.random() * 2000))
      })
    }
    return ()=>{
      return <ListView onBottom={fetchData}>
        {list.map((_,i)=>{
          return <Card />
        })}
      </ListView>
    }
  }
})

const Card = ()=>{
  return <div style={{
    width:'100%',
    height:'200px',
    backgroundColor:'red',
    marginBottom:'10px'
  }}></div>
}
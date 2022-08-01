import { defineComponent,PropType,StyleValue } from "vue"
import classes from './cardstack.module.scss'

type Card = {
  id : number,
  img : string
}
export const CardStack = defineComponent({
  props:{
    list : {
      type : Array as PropType<Card[]>,
      required : true
    }
  },
  setup({list}){
    return ()=>{
      return <div class="card-stack">
        {list.map((card,i)=>{
          return <Card 
            key={card.id} 
            card={card}
            style={{
              zIndex: 1000-i,
              transform: `translate(0px, ${i*10}px) scale(${(1-i/50).toFixed(2)})`
            }}
          ></Card>
        })}
      </div>
    }
  }
})

const Card = defineComponent({
  props:{
    card:{
      type: Object as PropType<Card>,
      required: true
    },
    style:{
      type:Object as PropType<StyleValue>
    }
  },
  setup({card,style}){
    return ()=>{
      return <div class={classes.card} style={style}>
        <img src={card.img}></img>
      </div>
    }
  }
})
import { defineComponent, watch, ref, PropType } from "vue";
import classes from './listview.module.scss'

const _ListView = defineComponent({
  props:{
    onBottom:{
      type: Function as PropType<()=>Promise<unknown>>
    }
  },
  setup({onBottom},ctx){
    const bottomRef = ref<HTMLDivElement | null>(null)
    const loading = ref(false)
    watch(bottomRef,()=>{
      if(!bottomRef.value){
        return
      }
      const options:IntersectionObserverInit={
        root:null,
        threshold:0.5,
        rootMargin:'100px'
      }

      const intersectionHandler:IntersectionObserverCallback = async (entries)=>{
        if(loading.value){
          return
        }
        for(let entry in entries){
          if(onBottom){
            loading.value = true
            try{
              await onBottom()
            }
            finally{
              loading.value = false
            }
          }
        }
      }

      const observer = new IntersectionObserver(intersectionHandler,options)
      observer.observe(bottomRef.value)
    })

    return ()=>{
      return <div class={classes.listview}>
        {ctx.slots.default!()}
        <div ref={bottomRef} class={classes['bottom-bar']}></div>
      </div>
    }
  }
})

export const ListView = _ListView as typeof _ListView
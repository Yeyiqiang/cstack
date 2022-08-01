import { defineComponent,PropType,reactive,ref,Ref,provide,inject } from "vue";
import classes from "./tabs.module.scss";

type ReaderMenuItem = ({isActive}:{isActive:boolean})=>JSX.Element
type TabMenu = {
  reader : ReaderMenuItem
}

const _Tabs = defineComponent({
  props:{
    defaultActiveIndex:{
      type: Number
    },
    scrollBehavior:{
      type : String as PropType<"body" | "inner">,
      default:'body'
    }
  },
  setup(props,context){

    const tabs = reactive<Array<TabMenu>>([])
    const activeIndex = ref(props.defaultActiveIndex || 0)
    
    provide('tabs',tabs)

    return ()=>{
      const defaultSlots = context.slots.default!
      const vNodes = defaultSlots().map((vNode,i)=>{
        if(!vNode.props){
          vNode.props = {}
        }
        if(!vNode.props.style){
          vNode.props.style = {}
        }
        if(props.scrollBehavior==="body"){
          vNode.props.style.overflow = 'unset'
        }else{
          vNode.props.style['overflow-y'] = 'auto'
        }
        vNode.props.index = i
        vNode.props.activeIndex = activeIndex.value
        return vNode
      })
      return <div class={classes.tabs}>
        {vNodes}
        {/* ref的取值需要.value */}
        <TabMenu 
          scrollBehavior={props.scrollBehavior}
          onActiveIndexChanged={(idx)=>{
            activeIndex.value = idx
          }}
          tabs={tabs}
          activeIndex={activeIndex.value}
        />
      </div>
    }
  }
})

const TabMenu = ({tabs,activeIndex,onActiveIndexChanged,scrollBehavior}:{
  tabs:TabMenu[],
  activeIndex:Number,
  onActiveIndexChanged? : (index:number)=> void,
  scrollBehavior: 'body' | 'inner'
})=>{
  return (
    <div 
      style={{
        position:scrollBehavior==='body'?'fixed':'absolute'
      }}
      class={classes.menu}>{tabs.map((tab,i)=>{
      return (
        <div class={classes['menu-item']} onClick={()=>{
            onActiveIndexChanged && ( activeIndex!==i ) && onActiveIndexChanged(i)
          }}>
          {tab.reader({isActive:activeIndex === i})}
        </div>
      )
    })}</div>
  )
}

const Tab = defineComponent({
  props:{
    renderMenu : {
      required:true,
      type : Function as PropType<ReaderMenuItem>
    },
    activeIndex:{
      type:Number,
      // required:true
    },
    index:{
      type:Number,
      // required:true
    },
    style:{
      type:Object
    }
  },

  setup(props,context){
    const tabs = inject("tabs") as TabMenu[]
    tabs.push({
      reader : props.renderMenu
    })
    return ()=>{
      const defaultSlots = context.slots.default!
      const show = props.activeIndex === props.index
      return <div class={classes.tab} style={{display:show?'block':'none',...props.style}}>
        {defaultSlots()}
      </div>
    }
  }
})

_Tabs.Tab = Tab

export const Tabs = _Tabs as typeof _Tabs & {
  Tab : typeof Tab
}
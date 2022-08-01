import { defineComponent, PropType } from "vue";
import classes from './flex.module.scss'

export const Flex = defineComponent({
  props:{
    type:{
      type: String as PropType<'row' | 'column'>,
      default: 'row'
    }
  },
  setup(props,context){
    return (()=>{
      const finalClass = `${classes.flex} ${classes[props.type]}`
      return (
        <div class={finalClass}>
          {context.slots.default!()}
        </div>
      )
    })
  }
})
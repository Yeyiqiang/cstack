import { defineComponent, PropType, ref, Ref } from 'vue'
import { RouteRecordRaw,RouterLink, RouterView } from 'vue-router'
import classes from './app.module.scss'
import "./main.css"

export default defineComponent({
  props:{
    routes:{
      type : Array as PropType<RouteRecordRaw[]>,
      required : true
    }
  },
  setup(props){
    return ()=>{
      return <>
        <Menu routes={props.routes} />
        <div class={classes.container}>
          <RouterView></RouterView>
        </div>
      </>
    }
  }
})

function useToggle():[Ref<boolean>,()=>void]{
  const value = ref(sessionStorage['toggle-value'] !== 'false')

  function toggle(){
    value.value = !value.value
    sessionStorage['toggle-value'] = value.value
  }

  return [value,toggle]
}

const Menu = defineComponent({
  props : {
    routes : {
      type: Array as PropType<RouteRecordRaw[]>,
      required: true
    }
  },
  setup(props){
    const [toggleValue,toggle] = useToggle()
    return ()=>{
      return (
        <div class={classes.menu} style={{
          display : toggleValue.value ? 'block' : 'none'
        }}>
          <ul>{
            props.routes.map(route=>{
              return (
                <li key={route.name} onClick={()=>{ toggle() }}>
                  <RouterLink to={route.path}>{route.name}</RouterLink>
                </li>
              )
            })
          }</ul>
          <button onClick={()=>{ toggle() }} class={classes.toggle}>收起</button>
        </div>
      )
    }
  },
})

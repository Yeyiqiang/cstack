// import { Page } from '../components/Page'
import {Tabs} from '../components/tabs'

const {Tab} = Tabs

const MenuItem = ({isActive,type,title}:{isActive:boolean,type:string,title:string})=>{
  return <>
  <span style={{color:isActive?'blue':'#333'}}>{title}</span>
  </>
}

export const TabsExample01 = ()=>{
  return <div>
    <h2>Tabs示例</h2>
    {/* <Page> */}
      <Tabs scrollBehavior="body">
        <Tab 
          renderMenu={({isActive})=>{
            return <MenuItem isActive={isActive} type="home" title="首页" />
          }}>
            <div>{('content 1'.repeat(200))}</div>
        </Tab>
        <Tab 
          renderMenu={({isActive})=>{
            return <MenuItem isActive={isActive} type="dev" title="发现" />
          }}>
            <div>content 2</div>
        </Tab>
        <Tab 
          renderMenu={({isActive})=>{
            return <MenuItem isActive={isActive} type="me" title="我的" />
          }}>
            <div>content 3</div>
        </Tab>
      </Tabs>
    {/* </Page> */}
  </div>
}
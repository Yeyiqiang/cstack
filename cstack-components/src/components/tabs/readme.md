示例用法
```tsx
const MenuItem = ({isActive,type,title}) => {
  return <>
    <span style={{color:isActive?'blue':'grey'}}>{{title}}</span>
    <Icon type={{type}} style={{color:isActive?'blue':'grey'}} />
  </>
}

<Tabs>
  <Tab 
    renderMenu={(isActive)=>{
      return <MenuItem isActive={isActive} type="home" title="首页" />
    }}>
      <div>content 1</div>
  </Tab>
  <Tab 
    renderMenu={(isActive)=>{
      return <MenuItem isActive={isActive} type="me" title="我的" />
    }}>
      <div>content 2</div>
  </Tab>
  // <Tab renderMenu={(isActive)=>{
  //   return <>
  //     <span style={{color:isActive?'blue':'grey'}}>首页</span>
  //     <Icon type="home" style={{color:isActive?'blue':'grey'}} />
  //   </>
  // }}>
  //   <div>content 3</div>
  // </Tab>
</Tabs>

```
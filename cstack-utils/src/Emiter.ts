// Observer/Subscriber : 观察者
// Observable/Publisher : 发布者
// Topic / EventType : 话题

type EventHandler = (...args : any[]) => void

export class Emiter<EventType extends string | number>{

  private topics = new Map<EventType, EventHandler[]>()

  private getTopic(type : EventType) : EventHandler[] {
    if(!this.topics.has(type)){
      this.topics.set(type, [])
    }
    return this.topics.get(type)!
  }

  on(type : EventType, handler : EventHandler){
    const handlers = this.getTopic(type)
    handlers.push(handler)
    // unsubcribe
    return ()=>{
      this.removeHandler(type,handler)
    }
  }

  private removeHandler(type : EventType, handler : EventHandler){
    if(!this.topics.has(type)){
      return
    }
    const handlers = (this.topics.get(type)!).filter( x => x !== handler)
    this.topics.set(type, handlers)
  }

  emit(type : EventType, ...agrs : any[]){
    const handlers = this.getTopic(type)
    handlers.forEach(handler =>{
      handler(...agrs)
    })
  }
}

enum Topics{
  Login
}
const a = new Emiter<Topics>()

const unsubcribe = a.on(Topics.Login,(msg)=>{
  console.log(msg);
})

a.emit(Topics.Login,"login")

// unsubcribe()

a.emit(Topics.Login,"login twice")
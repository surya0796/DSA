// Notifier, pub/sub, observer pattern;
// const notifier = new Notifier();
// const subscription = notifier.subscribe('eventName', cbFunction);
// const subscription2 = notifier.subscribe('eventName', cbFunction2);
// const subscription3 = notifier.subscribe('event2', cbFunction3);
// notifier.trigger('eventName', 'a','b'); // all cbs for the particular event invoked with these args
// susbscription.remove(); // removes cbFunction 

// const cbFunction = (a, b) => console.log(a, b);

// implement Notifier 

class Notifier {
    constructor() {
        this.event = {}
        this.counter = 0
    }
    
    subscriber(eventName, cbFunc) {
        const uniqueId  = Math.floor(Date.now+(Math.random()*10000)) // this.counter++
        const newObj = new Subscription(this.event[eventName],uniqueId)
        this.event[eventName] =  {...this.event[eventName], uniqueId : cbFunc }
        return newObj
    }

    trigger(eventName, ...args) {
        const objectOfFunction = this.event[eventName] 
        this.event[eventName] === undefined  && Object.keys(objectOfFunction)?.forEach((eachFunc)=>{
            objectOfFunction[eachFunc](...args)
        })
    }
}
class Subscription {
    constructor(obj , id){
        this.obj = obj
        this.id = id
    }
    remove(){
        delete this.obj[this.id]
    }
}
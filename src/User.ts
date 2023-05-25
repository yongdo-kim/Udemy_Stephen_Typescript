interface UserProps {
  name?: string;
  age?: number;
}

//타입 별칭(Type Alias)으로 () => {}를 깔끔하게 만들기 위해 사용, Callback이름은 마음대로 정할 수 있다. 
type Callback = () => {};

export class User {
  
  event:{[key:string]:Callback[]} = {};

  constructor(private data: UserProps) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(update:UserProps):void{
    Object.assign(this.data,update);
  }

  on(eventName:string, callback:Callback){
    
  }
}

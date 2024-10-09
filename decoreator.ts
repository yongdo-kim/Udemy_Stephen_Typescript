class Boat {
    color: string = 'red';
  
    get formattedColor(): string {
      return `This boats color is ${this.color}`;
    }
  
    @logError
    pilot(): void {
      throw new Error();
      console.log('swish');
    }
  }
  
  function logError(a: any, b: string,desc:PropertyDescriptor): void {
    console.log('Target:', a);
    console.log('Key:', b);
    console.log('desc:', desc);
    console.log('desc : value :', desc.value);

    const method = desc.value;
    desc.value = function() {
      try {
        method();
      } catch (error) {
        console.log('e:', 'errrrrror');
      }
    }
  }


new Boat().pilot();
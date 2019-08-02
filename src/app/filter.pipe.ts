import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string=''): any {    
    if (value.length === 0 || filterString === '') {
      return value;
    }
    let propNames:string[]=[];
    const resultArray = [];
    if(propName === '' || propName===undefined || propName==='all+'){
      propNames=Object.keys(value[0]);
    }
    else{
      propNames.push(propName);
    }
    for(let i=0; i<propNames.length; i++ ){
    for (const item of value) {
      if ((item[propNames[i]]).toString().toLowerCase().includes(filterString.toLowerCase())) {
        resultArray.push(item)
      }
    }
  }
    return resultArray;
  }

}

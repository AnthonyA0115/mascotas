import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(arreglo: any[], texto: string): any[] {
    if(texto==''){
      return arreglo;
    }

    texto=texto.toLowerCase();
    return arreglo.filter(item=>{
      if ( item.sch_name.toLowerCase().includes(texto)!="") {
        return item.sch_name.toLowerCase().includes(texto);
      }else if(item.name_venues.toLowerCase().includes(texto)!=""){
        return item.name_venues.toLowerCase().includes(texto);
      }else if(item.name_mun.toLowerCase().includes(texto)!=""){
        return item.name_mun.toLowerCase().includes(texto);
      }else{
        return "";
      }
    })
    
    //return arreglo;
  }

}

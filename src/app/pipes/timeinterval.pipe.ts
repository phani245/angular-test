import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
@Pipe({
  name: 'timeinterval'
})
export class TimeIntervalPipe implements PipeTransform {

  transform(data : string) : string {
    return moment(data).fromNow();
}

}

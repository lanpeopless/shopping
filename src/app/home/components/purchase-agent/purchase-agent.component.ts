import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ImageSlider } from 'src/app/shared';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-purchase-agent',
  templateUrl: './purchase-agent.component.html',
  styleUrls: ['./purchase-agent.component.css']
})
export class PurchaseAgentComponent implements OnInit {
  imageSliders$: Observable<ImageSlider[]>;
  titleFocus: { focus: boolean; date: Date; };

  name = '选择';
  value = new Date();
  goodsNum = 1;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.imageSliders$ = this.http.get<ImageSlider[]>(`${environment.baseUrl}/banners`);
  }
  flag = true;
  index = 1;

  onChange(item) {
    console.log('onChange', item);
  }

  onTabClick(item) {
    console.log('onTabClick', item);
  }

  selectCard(e) {
    console.log(' ', JSON.stringify(e));
  }

  changeIndex() {
    this.index = 0;
  }

  clickTitle() {
    this.titleFocus = {
      focus: true,
      date: new Date()
    };
  }


  currentDateFormat(date, format: string = 'yyyy-mm-dd HH:MM'): any {
    const pad = (n: number): string => (n < 10 ? `0${n}` : n.toString());
    return format
      .replace('yyyy', date.getFullYear())
      .replace('mm', pad(date.getMonth() + 1))
      .replace('dd', pad(date.getDate()))
      .replace('HH', pad(date.getHours()))
      .replace('MM', pad(date.getMinutes()))
      .replace('ss', pad(date.getSeconds()));
  }

  onOk(result: Date) {
    this.name = this.currentDateFormat(result);
    this.value = result;
  }

  formatIt(date: Date, form: string) {
    const pad = (n: number) => (n < 10 ? `0${n}` : n);
    const dateStr = `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
    const timeStr = `${pad(date.getHours())}:${pad(date.getMinutes())}`;
    if (form === 'YYYY-MM-DD') {
      return dateStr;
    }
    if (form === 'HH:mm') {
      return timeStr;
    }
    return `${dateStr} ${timeStr}`;
  }

  change($event) {
    console.log($event, 'change');
  }

}

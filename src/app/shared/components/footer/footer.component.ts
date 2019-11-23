import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';
import { TabItem } from '../../domain';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit {
  @Output() tabSelected = new EventEmitter<TabItem>();
  tabItems: TabItem[] = [
    {
      title: '首页',
      icon: environment.baseHref +'assets/tabs/home.png',
      link: 'home',
      selectedIcon: environment.baseHref + 'assets/tabs/home_selected.png'
    },
    {
      title: '购物车',
      icon: environment.baseHref + 'assets/tabs/cart.png',
      link: 'recommend',
      selectedIcon: environment.baseHref + 'assets/tabs/cart_selected.png'
    },    
    {
      title: '分类',
      icon: environment.baseHref + 'assets/tabs/category.png',
      link: 'category',
      selectedIcon: environment.baseHref + 'assets/tabs/category_selected.png'
    },    
    // {
    //   title: '购物车',
    //   icon: '/assets/tabs/recommend.png',
    //   link: 'recommend',
    //   selectedIcon: '/assets/tabs/recommend_selected.png'
    // },
    {
      title: '聊天',
      icon: environment.baseHref + 'assets/tabs/chat.png',
      link: 'chat',
      selectedIcon: environment.baseHref + 'assets/tabs/chat_selected.png'
    },
    {
      title: '个人中心',
      icon: environment.baseHref + 'assets/tabs/my.png',
      link: 'my',
      selectedIcon: environment.baseHref + 'assets/tabs/my_selected.png'
    }
  ];
  @Input() selectedIndex = 0;
  constructor() {}

  ngOnInit() {
    console.log(environment.baseHref);
    

  }

  toggleSelected(idx: number) {
    this.selectedIndex = idx;
    this.tabSelected.emit(this.tabItems[this.selectedIndex]);
  }
}

import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import { TopMenu } from 'src/app/shared/components';
import { Router, ActivatedRoute } from '@angular/router';
import { HomeService } from '../../services';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeContainerComponent implements OnInit {
  topMenus = [
    {
      "id": 1,
      "title": "商品",
      "link": "hot"
    },
    {
      "id": 2,
      "title": "校园快递",
      "link": "schoolExpress"
    },
    {
      "id": 3,
      "title": "代购",
      "link": "purchaseAgent"
    }
  ];
  constructor(
    private router: Router,
    private service: HomeService,
    private route: ActivatedRoute
  ) {}

  topMenus$: Observable<TopMenu[]>;
  selectedTabLink$: Observable<string>;
  flag = true;
  index = 1;

  ngOnInit(): void {
    this.service.getTabs().subscribe( res => {
      this.topMenus = res.data.table;
      console.log(res);
    });
    this.selectedTabLink$ = this.route.firstChild.paramMap.pipe(
      filter(params => params.has('tabLink')),
      map(params => params.get('tabLink'))
    );
  }

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

  handleTabSelected(topMenu: TopMenu) {
    this.router.navigate(['home', topMenu.link]);
  }
}

import { PurchaseAgentComponent } from './components/purchase-agent/purchase-agent.component';
import { SchoolExpressComponent } from './components/school-express/school-express.component';
import { NgModule, InjectionToken } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared';
import { HomeContainerComponent, HomeDetailComponent } from './components';
import { HomeService, token } from './services';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';
import { MatButtonModule,MatInputModule, MatFormFieldModule } from '@angular/material'

@NgModule({
  declarations: [
    HomeContainerComponent, 
    HomeDetailComponent,
    SchoolExpressComponent,
    PurchaseAgentComponent
  ],
  // 传统写法，如果采用这种写法，就不能在 service 中写 `providedIn`
  providers: [{ provide: token, useValue: 'http://localhost' }],
  imports: [
    SharedModule, 
    HomeRoutingModule, 
    NgZorroAntdMobileModule,
  ]
})
export class HomeModule {}

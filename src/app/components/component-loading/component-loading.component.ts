import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoadingService } from 'src/app/services/service-loading/loading.service';

@Component({
  selector: 'app-component-loading',
  templateUrl: './component-loading.component.html',
  styleUrls: ['./component-loading.component.scss'],
})
export class ComponentLoadingComponent {
  public loading = false;
  clickEventSubscription: Subscription | undefined;

  constructor(private loadingService: LoadingService) {
    this.clickEventSubscription = this.loadingService
      .getClickEvent()
      .subscribe((res) => {
        this.callLoading(res);
      });
  }

  callLoading(value: boolean) {
    this.loading = value;
  }
}

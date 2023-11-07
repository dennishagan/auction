import { Component } from '@angular/core';
import { CountdownComponent } from 'ngx-countdown';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-listings-page',
  templateUrl: './listings-page.component.html',
  styleUrls: ['./listings-page.component.scss']
})
export class ListingsPageComponent {
allListings:any = []
constructor(private api: ApiService) {}

ngOnInit() {
  this.api.getListing().subscribe((data:any) => {
    console.log(data);
    this.allListings = data
  })
}
}

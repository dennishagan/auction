import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { GalleryItem, ImageItem } from 'ng-gallery';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-bid-page',
  templateUrl: './bid-page.component.html',
  styleUrls: ['./bid-page.component.scss']
})
export class BidPageComponent {

  constructor(
    private activatedRoute: ActivatedRoute,
    private api: ApiService,
    public snackbar: MatSnackBar) {}

  itemData:any
  items: GalleryItem[] = [];
  // SAMPLE IMAGE DATA
  /* imageData = [
    {
      srcUrl: 'https://preview.ibb.co/jrsA6R/img12.jpg',
      previewUrl: 'https://preview.ibb.co/jrsA6R/img12.jpg',
    },
    {
      srcUrl: 'https://preview.ibb.co/kPE1D6/clouds.jpg',
      previewUrl: 'https://preview.ibb.co/kPE1D6/clouds.jpg',
    },
    {
      srcUrl: 'https://preview.ibb.co/mwsA6R/img7.jpg',
      previewUrl: 'https://preview.ibb.co/mwsA6R/img7.jpg',
    },
    {
      srcUrl: 'https://preview.ibb.co/kZGsLm/img8.jpg',
      previewUrl: 'https://preview.ibb.co/kZGsLm/img8.jpg',
    },
  ] */

  ngOnInit() {


    this.api.getItem(this.activatedRoute.snapshot.params['id']).subscribe((res:any) => {
      console.log(res)
      this.itemData = res

      this.items = this.itemData.images.map(
        (item:any) => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl })
      );
    })

  }

  submitBid() {
    this.snackbar.open('Bid successfully submitted', 'Close' , {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    })
  }

}

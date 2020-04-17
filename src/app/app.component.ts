import { Component } from '@angular/core';
import {Post} from './posts/post.model'
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//Mean stack project
// OgIOUkZAoyzsZYXZ
export class AppComponent {

  myInput="hello i am your parent";

  getData(value){
    console.log(value)
  }


//   storedPosts:Post[]=[]
//   onPostAdded(post){
// this.storedPosts.push(post)
//   }
}
// export class AppComponent {
//   loadedFeature = 'recipe';

//   onNavigate(feature: string) {
//     this.loadedFeature = feature;
//   }
// }

//Project assignment
// export class AppComponent {
//   title = 'my-first-app hello';
//   username = '';

//   oddNumbers: number[] = [];
//   evenNumbers: number[] = [];

//   onIntervalFired(firedNumber: number) {
//     console.log(firedNumber)
//     if (firedNumber % 2 === 0) {
//       this.evenNumbers.push(firedNumber);
//     }else{
//       this.oddNumbers.push(firedNumber);
//     }
//   }
// }

import { Component } from '@angular/core';

@Component ( {
  selector: 'app-post-create',
  templateUrl: './post-create.component.html'
})
export class PostCreateComponent {
  newPost = 'before post request';


  onAddPost() {
    this.newPost = 'the user\'s post';
  }
}

import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Post } from '../post.model'
import { NgForm } from '@angular/forms';
import { PostsService } from '../posts.service'


@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  enteredContent = ''
  enteredTitle = "hii"
  // @Output() postCreated=new EventEmitter<Post>();
  constructor(public postsService: PostsService) { }

  ngOnInit(): void {
  }
  onAddPost(form: NgForm) {
    // const post: Post = {
    //   // title: form.value.title,
    //   // content: form.value.content

    // }
    if(form.invalid){
      return;
    }
    // this.postCreated.emit(post);
    this.postsService.addPosts(form.value.title, form.value.content)
    form.resetForm()

  }

}

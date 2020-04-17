import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Post } from '../post.model'
import { PostsService } from '../posts.service'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  // posts=[

  //     {title:"first post" , content:'first content'},
  //     {title:"first post" , content:'first content'},
  //     {title:"first post" , content:'first content'}
  // ]
  // @Input()
  posts: Post[] = [];
  private postsSub: Subscription;
  constructor(public postsservice: PostsService) { }

  ngOnInit():void {
   this.postsservice.getPosts();
    this.postsSub = this.postsservice.getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      })
  }

  onDelete(postId:string){
this.postsservice.deletePost(postId)
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }

}

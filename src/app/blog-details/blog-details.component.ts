import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../service/blog.service';
import { Location } from '@angular/common';
import { IBlog } from '../interfacecs/blog.interface';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {
  blog: IBlog;
  constructor(private activatedRoute: ActivatedRoute, private blogService : BlogService, public location: Location) { }

  ngOnInit(): void {
    this.getBlog()
  }

  private getBlog():void{
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.blogService.getOneJSONBlog(id).subscribe( data => {
      this.blog = data;
      console.log(data);
      
    },
    err => {
      console.log(err);
      
    })
  }

}

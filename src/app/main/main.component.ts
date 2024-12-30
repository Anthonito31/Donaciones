import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service';
import { PostComponent } from '.././post/post.component'
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, PostComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit{

  posts: any[];

  constructor(public mainService:MainService, public cdr: ChangeDetectorRef) {
    this.posts = [];
  }



  ngOnInit(): void {
    this.getPosts();
    this.posts = this.mainService.posts;
  }

  getPosts() {
    this.mainService.get().subscribe({
      next: (data)=>{
        this.mainService.posts = data;
        this.cdr.detectChanges();
      },
      error: (e)=>{
        console.log(e);
      }
    })
  }
}

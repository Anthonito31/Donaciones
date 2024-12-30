import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-post',
  standalone: true,
  imports: [],
  templateUrl: './details-post.component.html',
  styleUrl: './details-post.component.css'
})
export class DetailsPostComponent implements OnInit{

  id:string | null = null;

  constructor(private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
  }

  back(){
    this.router.navigate([''])
  }

}

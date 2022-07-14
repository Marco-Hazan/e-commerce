import { Component, Input, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/token-storage.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  
  loggedin:boolean = false;
  constructor(private tokenService: TokenStorageService) {
    if(tokenService.getToken() != null){
      this.loggedin = true;
    }
  }

  logout(){
    this.tokenService.clear();
    this.loggedin = false;
  }


  ngOnInit(): void {
  }

}

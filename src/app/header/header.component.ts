import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() loggedIn = false;
  @Input() btnClass="btn btn-success";
  @Input() logInBtnText = "LogIn";
  constructor(private authService: AuthService) { }

  ngOnInit() {
    
    this.authService.loggedInUpdated
      .subscribe(
        (loggedIN: boolean) => {
          this.loggedIn = loggedIN
          if (this.loggedIn) {
            this.logInBtnText = "LogOut";
            this.btnClass="btn btn-danger";
          }else{
            this.logInBtnText = "LogIn";
            this.btnClass="btn btn-success";
          }
        });
  }

  onAutorize(){
    if(this.loggedIn){
      this.authService.logout();
    }else{
      this.authService.login();
    }
  }
}
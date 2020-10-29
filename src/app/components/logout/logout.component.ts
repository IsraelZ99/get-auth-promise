import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthPrimiseHttpService } from "auth-primise-http";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private authService: AuthPrimiseHttpService, private router: Router) { }

  ngOnInit(): void {
  } 

  onLogout() {
    const url: string = 'http://155.138.216.49:8080/ollin-server/api/auth/logout';
    this.authService.logout(url).then(good => {
      this.router.navigateByUrl('/');
    }).catch(err => {
      this.router.navigateByUrl('/logout');
    })
  }

}

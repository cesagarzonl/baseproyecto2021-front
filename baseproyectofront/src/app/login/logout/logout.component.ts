import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { ChangeloginServiceService } from '../../../service/changelogin-service.service'

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private router:Router,
    private changeloginServiceService:ChangeloginServiceService
    ) { }

  ngOnInit(): void {
    localStorage.clear();
    this.changeloginServiceService.showUserLoggedId()
    this.router.navigate(['/']);
  }

}

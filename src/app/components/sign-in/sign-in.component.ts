import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../shared/services/auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(public authService: AuthService , public router: Router  ) { }

  ngOnInit(): void {
  }

  googleClick() {
    this.authService.GoogleAuth().then((res: any) => {
      console.log(res);
      this.reloadComponent();
    });
  }
  private reloadComponent() {
    // Bit of a hack but the only way I can trigger a reload. We need it to update the view after language change
    this.router
      .navigateByUrl('/', {
        skipLocationChange: true,
      })
      .then(() => this.router.navigate(['/dashboard']));
  }
}

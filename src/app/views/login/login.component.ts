import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BREAKPOINT_VALUE } from 'src/app/enums/breakpoint.enums';
import { SupabaseService } from 'src/app/services/supabase.service';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  email = '';
  password = '';
  passwordCheck = '';

  showsPassword = false;
  invalidPassword = false;
  loginMode = !true;
  showsError = false;
  loading = false;

  viewClass!: string[];
  isMobile!: boolean;
  private sub = new Subscription();
  constructor(
    private readonly supabase: SupabaseService,
    private observer: BreakpointObserver,
    private theme: ThemeService,
  ) { }

  ngOnInit(): void {
    this.viewClass = ['login'];
    this.checkDevice();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  /* ------------------------------ Check DEVICE ------------------------------ */
  private checkDevice() {
    this.sub.add(this.observer.observe([BREAKPOINT_VALUE.mobile]).subscribe((state: BreakpointState) => {
      if (state.breakpoints[BREAKPOINT_VALUE.mobile]) {
        this.isMobile = true;
        this.viewClass.push('mobile');
      } else {
        this.isMobile = false;
        this.viewClass = this.viewClass.filter((e: any) => e !== 'mobile');
      }
    }));

    const theme = this.theme.getInitTheme();
    if (theme == 'dark') { this.viewClass.push('dark'); }
    else if (theme == 'light') { this.viewClass = this.viewClass.filter((e: any) => e !== 'dark'); }
  }

  /* ---------------------------------- AUTH ---------------------------------- */

  checkPasswords() {
    if (this.password && this.passwordCheck) {
      if (this.password !== this.passwordCheck) {
        this.invalidPassword = true;
      } else if (this.password == this.passwordCheck) {
        this.invalidPassword = false;
      }
    } else { this.invalidPassword = false; }
  }

  onSubmit() {
    if (!this.invalidPassword) {
      if (this.loginMode) {
        this.handleLogin();
      } else {
        this.handleRegistration();
      }
    } else if (!this.email || !this.password || !this.passwordCheck) {
      this.invalidPassword = true;
    }
  }

  async handleLogin() {
    try {
      this.loading = true;
      await this.supabase.signIn(this.email);
      alert('Check your email for the login link!');
    }
    catch (error) { console.warn(error); }

    finally { this.loading = false; }
  }

  async handleRegistration() {
    try {
      this.loading = true;
      await this.supabase.signUp(this.email, this.password);
    }
    catch (error) { console.warn(error); }
    finally { this.loading = false; }
  }


}

import { Component, OnDestroy } from '@angular/core';
import { NavItem } from './ui/model/nav-item';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { menu } from './ui/model/menu';
import { filter, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { FactoryService } from 'src/app/services/factory.service';

@Component({
  selector: 'app-side-main',
  templateUrl: './side-main.component.html',
  styleUrls: ['./side-main.component.scss']
})
export class SideMainComponent implements OnDestroy {

  public opened = true;
  private mediaWatcher: Subscription;
  public menu: NavItem[] = menu;

  constructor(
    private media: MediaObserver,
    private router: Router,
    public factory: FactoryService,
    ) {
    this.mediaWatcher = this.media.asObservable().pipe(
      filter((changes: MediaChange[]) => changes.length > 0),
      map((changes: MediaChange[]) => changes[0])
      )
      .subscribe((mediaChange: MediaChange) => {
        this.handleMediaChange(mediaChange);
      });
  }

  private handleMediaChange(mediaChange: MediaChange): void {
    if (this.media.isActive('lt-md')) {
      this.opened = false;
    } else {
      this.opened = true;
    }
  }

  ngOnDestroy(): void {
    this.mediaWatcher.unsubscribe();
  }

  signout() {
    localStorage.clear();
    this.factory.loadUser();
    this.router.navigate(['auth/login']);
  }
}
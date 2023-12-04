import { Component, OnInit, Inject } from '@angular/core';
import { AppUsersService, USER_SERVICE } from './app.users.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { User } from './user';
import { PopupComponent } from './popup.component';
import { SelectedComponent } from './selected.component';
import { UserLogDecoratorService } from './user-log.decorator';
import { AppStateService } from './app-state.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HttpClientModule,
    MatTableModule,
    MatDialogModule,
    SelectedComponent,
  ],
  templateUrl: './app.component.html',
  providers: [UserLogDecoratorService, { provide: USER_SERVICE, useClass: AppUsersService }, AppStateService ]
})

export class AppComponent implements OnInit {
  title = 'Lab_8';

  dataSource: User[] = [];
  displayedColumns: string[] = ['name', 'email', 'login'];

  selected: User[] = [];

  constructor(
    private appService: UserLogDecoratorService, 
    private dialog: MatDialog,
    public appStateService: AppStateService,
    ) { }

  ngOnInit() {
    this.appStateService.setLoading(true);
    this.appService.getUsers().subscribe(users => {
      this.dataSource = users.results;
      this.appStateService.setLoading(false);
    });
  }

  onRowClicked(row: any) {
    const dialogRef = this.dialog.open(PopupComponent, { data: row });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.selected.push(result);
      }
    });
  }
}

import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactDialogComponent } from '../components/contact-dialog/contact-dialog.component';
@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(public dialog: MatDialog) {}

  public openDialog() {
    const dialogRef = this.dialog.open(ContactDialogComponent);
  }
}

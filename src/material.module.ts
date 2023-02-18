import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';

const MODULES = [
  CommonModule,
  FormsModule,
  MatButtonModule,
  MatDialogModule,
  MatInputModule,
  MatToolbarModule,
  ReactiveFormsModule,
];
@NgModule({ declarations: [], imports: MODULES, exports: MODULES })
export class MaterialModule {}

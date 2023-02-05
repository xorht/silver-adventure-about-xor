import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MainModule } from 'src/main.module';
import { MaterialModule } from 'src/material.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, MainModule, MaterialModule],
  exports: [HomeComponent],
})
export class HomeModule {}

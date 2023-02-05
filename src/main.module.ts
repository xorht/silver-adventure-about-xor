import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { HomeComponent } from './app/home/home.component';
import { HomeModule } from './app/home/home.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, MaterialModule, HomeModule],
})
export class MainModule {}

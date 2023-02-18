import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-dialog',
  templateUrl: './contact-dialog.component.html',
  styleUrls: ['./contact-dialog.component.scss'],
})
export class ContactDialogComponent implements OnInit {
  public formControl = this.fb.group(
    {
      name: '',
      message: '',
    },
    [Validators.required]
  );
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  public onContact() {
    console.log(this.formControl.value);
    this.formControl.valid;
  }
}

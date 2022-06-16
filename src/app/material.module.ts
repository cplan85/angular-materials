import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    MatProgressBarModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
  ],
})
export class MaterialModule {}

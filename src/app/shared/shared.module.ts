import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgLetModule, RouterLinkMatchModule } from '@ngx-starter-kit/ngx-utils';
import { MaterialModule } from './material.module';
import { MaterialDateModule } from './material-date.module';
import { AppConfirmModule } from '@ngx-starter-kit/app-confirm';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  imports: [CommonModule, FlexLayoutModule.withConfig({ useColumnBasisZero: false })],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule,
    MaterialDateModule,
    DragDropModule,
    AppConfirmModule,
    NgLetModule,
    RouterLinkMatchModule,
  ],
})
export class SharedModule {}

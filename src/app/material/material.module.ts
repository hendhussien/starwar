import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { DragDropModule } from '@angular/cdk/drag-drop';

const materialComponents = [DragDropModule, MatCardModule];
@NgModule({
  imports: [materialComponents],
  exports: [materialComponents],
})
export class MaterialModule {}

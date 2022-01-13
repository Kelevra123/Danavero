import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';



@Component({
  selector: '.table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TableComponent {
  @Input() public content: any = [];
}

import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';



@Component({
  selector: '.blocks',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class BlocksComponent {
  @Input() public content: any = []
}

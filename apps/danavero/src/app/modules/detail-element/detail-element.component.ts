import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { IUser } from "../types";



@Component({
  selector: '.detail-element',
  templateUrl: './detail-element.component.html',
  styleUrls: ['./detail-element.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailElementComponent {
  @Input() public userInfo: IUser | null = null;
}

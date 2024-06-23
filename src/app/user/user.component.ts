import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from "./user.model";
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  imports: [
    CardComponent
  ],
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  @Output() selectUser = new EventEmitter<string>();

  get imagePath(): string {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser(): void {
    this.selectUser.emit(this.user.id);
  }

}
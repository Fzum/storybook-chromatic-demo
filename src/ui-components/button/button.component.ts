import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'ui-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      type="button"
      (click)="handleClick($event)"
      class="inline-block cursor-pointer rounded-full font-bold leading-none font-sans"
      [class.bg-blue-600]="primary()"
      [class.text-white]="primary()"
      [class.shadow-inner]="!primary()"
      [class.bg-transparent]="!primary()"
      [class.text-gray-800]="!primary()"
      [class.px-4]="size() === 'small'"
      [class.py-2.5]="size() === 'small'"
      [class.text-xs]="size() === 'small'"
      [class.px-5]="size() === 'medium'"
      [class.py-3]="size() === 'medium'"
      [class.text-sm]="size() === 'medium'"
      [class.px-6]="size() === 'large'"
      [class.py-3.5]="size() === 'large'"
      [class.text-base]="size() === 'large'"
      [style.backgroundColor]="backgroundColor()"
    >
      {{ label() }}
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  /** Is this the principal call to action on the page? */
  primary = input(false);

  /** What background color to use */
  backgroundColor = input<string | undefined>(undefined);

  /** How large should the button be? */
  size = input<'small' | 'medium' | 'large'>('medium');

  /** Button contents */
  label = input('Button');

  /** Optional click handler */
  clicked = output<Event>();

  handleClick(event: Event): void {
    this.clicked.emit(event);
  }
}

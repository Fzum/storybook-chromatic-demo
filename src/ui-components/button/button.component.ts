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
      [ngClass]="getButtonClasses()"
      [style.backgroundColor]="backgroundColor()"
    >
      {{ label() }}
    </button>
  `,
  styles: [`
    button {
      display: inline-block;
      cursor: pointer;
      border-radius: 9999px;
      font-weight: bold;
      line-height: 1;
      font-family: sans-serif;
    }

    .primary {
      background-color: #eb00f3;
      color: white;
    }

    .secondary {
      background-color: transparent;
      color: #acff79;
      box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
    }

    .small {
      padding: 0.625rem 1rem;
      font-size: 0.75rem;
    }

    .medium {
      padding: 0.75rem 1.25rem;
      font-size: 0.875rem;
    }

    .large {
      padding: 0.875rem 1.5rem;
      font-size: 1rem;
    }
  `],
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

  getButtonClasses(): { [key: string]: boolean } {
    return {
      'primary': this.primary(),
      'secondary': !this.primary(),
      'small': this.size() === 'small',
      'medium': this.size() === 'medium',
      'large': this.size() === 'large'
    };
  }

  handleClick(event: Event): void {
    this.clicked.emit(event);
  }
}

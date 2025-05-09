import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'ui-badge',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span
      [ngClass]="getBadgeClasses()"
      [style.backgroundColor]="backgroundColor()"
    >
      {{ label() }}
    </span>
  `,
  styles: [`
    span {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 9999px;
      font-weight: 500;
      line-height: 1;
      font-family: sans-serif;
      white-space: nowrap;
    }

    .success {
      background-color: #09a873;
      color: white;
    }

    .warning {
      background-color: #ed430f;
      color: white;
    }

    .error {
      background-color: #b30000;
      color: white;
    }

    .info {
      background-color: #004ddf;
      color: white;
    }

    .default {
      background-color: #9CA3AF;
      color: white;
    }

    .small {
      padding: 0.125rem 0.5rem;
      font-size: 0.625rem;
    }

    .medium {
      padding: 0.25rem 0.75rem;
      font-size: 0.75rem;
    }

    .large {
      padding: 0.375rem 1rem;
      font-size: 0.875rem;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BadgeComponent {
  /** The variant/type of the badge */
  variant = input<'default' | 'success' | 'warning' | 'error' | 'info'>('default');

  /** What background color to use (overrides variant color) */
  backgroundColor = input<string | undefined>(undefined);

  /** How large should the badge be? */
  size = input<'small' | 'medium' | 'large'>('medium');

  /** Badge contents */
  label = input('Badge');

  getBadgeClasses(): { [key: string]: boolean } {
    return {
      'success': this.variant() === 'success',
      'warning': this.variant() === 'warning',
      'error': this.variant() === 'error',
      'info': this.variant() === 'info',
      'default': this.variant() === 'default',
      'small': this.size() === 'small',
      'medium': this.size() === 'medium',
      'large': this.size() === 'large'
    };
  }
}

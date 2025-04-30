# UI Components

This folder contains dumb UI components that are:

- Built with Tailwind CSS classes only (no custom CSS)
- Using OnPush change detection
- Standalone components
- Using signal inputs and outputs (no @Input and @Output decorators)

## Available Components

### Button

A customizable button component with different sizes and styles.

#### Usage

```typescript
import { ButtonComponent } from '@/ui-components';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [ButtonComponent],
  template: `
    <ui-button 
      [primary]="true" 
      [size]="'medium'" 
      [label]="'Click Me'" 
      (clicked)="handleClick($event)">
    </ui-button>
  `
})
export class ExampleComponent {
  handleClick(event: Event): void {
    console.log('Button clicked', event);
  }
}
```

#### Props

- `primary`: boolean - Whether the button is the primary action
- `backgroundColor`: string - Custom background color (overrides primary styling)
- `size`: 'small' | 'medium' | 'large' - Button size
- `label`: string - Button text
- `clicked`: EventEmitter<Event> - Click event handler

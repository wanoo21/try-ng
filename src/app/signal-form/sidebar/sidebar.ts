import { Component, computed, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronDown } from '@ng-icons/lucide';
import { HlmAccordionImports } from '@try-ng/ui/accordion';
import { HlmInput } from '@try-ng/ui/input';
import { HlmSeparator } from '@try-ng/ui/separator';
import { HlmSidebarImports, provideHlmSidebarConfig } from '@try-ng/ui/sidebar';

@Component({
  selector: 'app-sidebar',
  imports: [
    HlmSidebarImports,
    NgIcon,
    HlmAccordionImports,
    HlmInput,
    HlmSeparator,
  ],
  templateUrl: './sidebar.html',
  styles: ``,
  providers: [
    provideHlmSidebarConfig({
      sidebarWidth: '25rem',
    }),
    provideIcons({
      lucideChevronDown,
    }),
  ],
})
export class Sidebar {
  readonly search = signal<string>('');
  readonly validators = signal([
    {
      category: 'Built-in Validators',
      items: [
        {
          name: 'required(path, config?)',
          description: 'Ensures field has a non-empty value.',
          examples: [
            'required(path.name);',
            "required(path.email, { message: 'Email is required' });",
            'required(path.terms, { when: (ctx) => ctx.valueOf(path.needsConsent) });',
          ],
          note: 'Also sets: REQUIRED aggregate property',
        },
        {
          name: 'minLength(path, length, config?)',
          description: 'Validates minimum string/array length.',
          examples: [
            'minLength(path.password, 8);',
            "minLength(path.username, 3, { message: 'Too short' });",
          ],
          note: 'Also sets: MIN_LENGTH aggregate property',
        },
        {
          name: 'maxLength(path, length, config?)',
          description: 'Validates maximum string/array length.',
          examples: ['maxLength(path.bio, 500);'],
          note: 'Also sets: MAX_LENGTH aggregate property',
        },
        {
          name: 'min(path, value, config?)',
          description: 'Validates minimum numeric value.',
          examples: [
            'min(path.age, 18);',
            "min(path.price, 0, { message: 'Price cannot be negative' });",
          ],
          note: 'Also sets: MIN aggregate property',
        },
        {
          name: 'max(path, value, config?)',
          description: 'Validates maximum numeric value.',
          examples: ['max(path.quantity, 100);'],
          note: 'Also sets: MAX aggregate property',
        },
        {
          name: 'pattern(path, regex, config?)',
          description: 'Validates against a regular expression.',
          examples: ['pattern(path.phone, /^\\d{3}-\\d{3}-\\d{4}$/);'],
          note: 'Also sets: PATTERN aggregate property',
        },
        {
          name: 'email(path, config?)',
          description: 'Validates email format.',
          examples: [
            'email(path.email);',
            "email(path.email, { message: 'Invalid email address' });",
          ],
        },
      ],
    },
    {
      category: 'Custom Validation',
      items: [
        {
          name: 'validate(path, validator)',
          description:
            'Adds a custom synchronous validator for a single field.',
          examples: [
            `validate(path.username, (ctx) => {
  const value = ctx.value();
  if (value.includes(' ')) {
    return customError({ 
      kind: 'no_spaces',
      message: 'Username cannot contain spaces' 
    });
  }
  return null; // No error
});`,
          ],
          note: 'Return types: null | undefined | void - No error, ValidationError - Single error, ValidationError[] - Multiple errors',
        },
        {
          name: 'validateTree(path, validator)',
          description: 'Adds a validator that can target multiple fields.',
          examples: [
            `validateTree(path, (ctx) => {
  const from = ctx.field.from().value();
  const to = ctx.field.to().value();
  
  if (from === to) {
    return {
      kind: 'same_location',
      field: ctx.field.from, // Target specific field
      message: 'Departure and arrival cannot be the same'
    };
  }
  return null;
});`,
          ],
        },
        {
          name: 'validateAsync(path, options)',
          description:
            'For validation that requires server calls or time-consuming operations.',
          examples: [
            `validateAsync(path.username, {
  params: (ctx) => ({ username: ctx.value() }),
  factory: (params) => {
    return rxResource({
      request: () => params().username,
      loader: ({ request: username }) => {
        return of(null).pipe(
          delay(1000),
          map(() => checkUsernameAvailability(username))
        );
      }
    });
  },
  errors: (result, ctx) => {
    if (!result.available) {
      return customError({
        kind: 'username_taken',
        message: \`Username "\${ctx.value()}" is already taken\`,
        suggestions: result.suggestions
      });
    }
    return null;
  }
});`,
          ],
        },
        {
          name: 'validateHttp(path, options)',
          description: 'Simplified async validation for HTTP requests.',
          examples: [
            `validateHttp(path.email, {
  request: (ctx) => ({
    url: '/api/validate-email',
    params: { email: ctx.value() }
  }),
  errors: (result, ctx) => {
    if (!result.valid) {
      return customError({
        kind: 'invalid_email_server',
        message: result.message || 'Email validation failed',
        details: result.details
      });
    }
    return null;
  },
  options: {
    reloadOn: ['submitted']  // Only revalidate on form submit
  }
});`,
          ],
        },
      ],
    },
    {
      category: 'Schema Composition',
      items: [
        {
          name: 'apply(path, schema)',
          description: 'Applies a schema to a specific field path.',
          examples: [
            `const addressSchema = schema<Address>((path) => {
  required(path.street);
  required(path.city);
});

form(data, (path) => {
  apply(path.address, addressSchema);
});`,
          ],
        },
        {
          name: 'applyEach(path, schema)',
          description: 'Applies a schema to each item in an array.',
          examples: [
            `const itemSchema = schema<Item>((path) => {
  required(path.name);
  min(path.quantity, 1);
});

form(data, (path) => {
  applyEach(path.items, itemSchema);
});`,
          ],
        },
        {
          name: 'applyWhen(path, condition, schema)',
          description: 'Conditionally applies a schema based on form state.',
          examples: [
            `applyWhen(
  path.shippingAddress,
  (ctx) => !ctx.valueOf(path.sameAsBilling),
  addressSchema
);`,
          ],
        },
        {
          name: 'applyWhenValue(path, predicate, schema)',
          description: 'Conditionally applies a schema based on field value.',
          examples: [
            `applyWhenValue(
  path.payment,
  (payment): payment is Extract<PaymentMethod, { type: 'card' }> => 
    payment.type === 'card',
  (cardPath) => {
    required(cardPath.cardNumber);
    minLength(cardPath.cardNumber, 16);
    maxLength(cardPath.cardNumber, 16);
    required(cardPath.cvv);
    pattern(cardPath.cvv, /^\\d{3,4}$/);
  }
);`,
          ],
        },
      ],
    },
    {
      category: 'Field State Logic',
      items: [
        {
          name: 'disabled(path, logic?)',
          description: 'Makes a field disabled.',
          examples: [
            'disabled(path.endDate, (ctx) => !ctx.valueOf(path.hasEndDate));',
          ],
        },
        {
          name: 'readonly(path, logic?)',
          description: 'Makes a field readonly.',
          examples: [
            'readonly(path.id); // Always readonly',
            'readonly(path.price, (ctx) => ctx.valueOf(path.isLocked));',
          ],
        },
        {
          name: 'hidden(path, logic)',
          description: 'Hides a field from display and validation.',
          examples: [
            'hidden(path.optionalDetails, (ctx) => !ctx.valueOf(path.showDetails));',
          ],
        },
      ],
    },
    {
      category: 'Form Submission',
      items: [
        {
          name: 'submit(form, action)',
          description:
            'Handles form submission with automatic validation and error handling.',
          examples: [
            `const onSubmit = submit(myForm, async (form) => {
  try {
    await saveData(form().value());
    return null; // Success
  } catch (error) {
    return [{
      kind: 'save_error',
      message: 'Failed to save',
      field: form
    }];
  }
});`,
          ],
          note: 'Template usage: <form (ngSubmit)="onSubmit()"><!-- form fields --></form>',
        },
      ],
    },
    {
      category: 'Validation Errors',
      items: [
        {
          name: 'Creating Errors',
          description:
            'Signal Forms provides type-safe error creation functions.',
          examples: [
            `// Built-in errors
requiredError({ message: 'This field is required' })
minError(10, { message: 'Must be at least 10' })
maxError(100, { message: 'Cannot exceed 100' })
minLengthError(5, { message: 'Too short' })
maxLengthError(50, { message: 'Too long' })
patternError(/\\d+/, { message: 'Must contain numbers' })
emailError({ message: 'Invalid email format' })

// Custom errors
customError({ 
  kind: 'my_validation',
  message: 'Custom validation failed',
  additionalData: 'any value'
})`,
          ],
        },
        {
          name: 'Error Types',
          description: 'Interface definitions for validation errors.',
          examples: [
            `interface ValidationError {
  kind: string;              // Error identifier
  field: Field<unknown>;     // Target field
  message?: string;          // User-facing message
}

// Check error type
if (error instanceof NgValidationError) {
  switch (error.kind) {
    case 'required': /* ... */
    case 'min': /* ... */
  }
}`,
          ],
        },
      ],
    },
  ]);

  readonly filteredValidators = computed(() => {
    const searchTerm = this.search().trim();

    // Filter by name only if search term is provided
    if (searchTerm) {
      return this.validators().filter((validator) => {
        return validator.items.some((item) => {
          return item.name.toLowerCase().includes(searchTerm.toLowerCase());
        });
      });
    }
    // Otherwise, return all validators
    return this.validators();
  });
}

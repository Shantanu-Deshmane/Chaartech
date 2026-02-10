import { forwardRef, useId } from 'react';
import { cn } from '../../../utils/helpers';
import './Textarea.css';

/**
 * Reusable Textarea component
 */
const Textarea = forwardRef(({
    label,
    placeholder,
    value,
    onChange,
    onBlur,
    error,
    helperText,
    disabled = false,
    required = false,
    fullWidth = true,
    rows = 4,
    maxLength,
    className = '',
    id,
    name,
    ...props
}, ref) => {
    const generatedId = useId();
    const textareaId = id || generatedId;

    const wrapperClasses = cn(
        'textarea-wrapper',
        { 'textarea-error': error },
        { 'textarea-disabled': disabled },
        { 'textarea-full': fullWidth },
        className
    );

    return (
        <div className={wrapperClasses}>
            {label && (
                <label htmlFor={textareaId} className="textarea-label">
                    {label}
                    {required && <span className="textarea-required">*</span>}
                </label>
            )}
            <div className="textarea-container">
                <textarea
                    ref={ref}
                    id={textareaId}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    disabled={disabled}
                    required={required}
                    rows={rows}
                    maxLength={maxLength}
                    className="textarea-field"
                    aria-invalid={error ? 'true' : 'false'}
                    aria-describedby={error ? `${textareaId}-error` : undefined}
                    {...props}
                />
                {maxLength && (
                    <span className="textarea-counter">
                        {value?.length || 0}/{maxLength}
                    </span>
                )}
            </div>
            {(error || helperText) && (
                <span
                    id={`${textareaId}-error`}
                    className={cn('textarea-helper', { 'textarea-helper-error': error })}
                >
                    {error || helperText}
                </span>
            )}
        </div>
    );
});

Textarea.displayName = 'Textarea';

export default Textarea;

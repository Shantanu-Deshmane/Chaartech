import { forwardRef, useState, useId } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { cn } from '../../../utils/helpers';
import './Input.css';

/**
 * Reusable Input component with validation and icons
 */
const Input = forwardRef(({
    type = 'text',
    label,
    placeholder,
    value,
    onChange,
    onBlur,
    error,
    helperText,
    leftIcon,
    rightIcon,
    disabled = false,
    required = false,
    fullWidth = true,
    className = '',
    id,
    name,
    ...props
}, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const generatedId = useId();
    const inputId = id || generatedId;

    const isPassword = type === 'password';
    const inputType = isPassword && showPassword ? 'text' : type;

    const inputClasses = cn(
        'input-wrapper',
        { 'input-error': error },
        { 'input-disabled': disabled },
        { 'input-full': fullWidth },
        { 'has-left-icon': leftIcon },
        { 'has-right-icon': rightIcon || isPassword },
        className
    );

    return (
        <div className={inputClasses}>
            {label && (
                <label htmlFor={inputId} className="input-label">
                    {label}
                    {required && <span className="input-required">*</span>}
                </label>
            )}
            <div className="input-container">
                {leftIcon && <span className="input-icon input-icon-left">{leftIcon}</span>}
                <input
                    ref={ref}
                    id={inputId}
                    name={name}
                    type={inputType}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    disabled={disabled}
                    required={required}
                    className="input-field"
                    aria-invalid={error ? 'true' : 'false'}
                    aria-describedby={error ? `${inputId}-error` : undefined}
                    {...props}
                />
                {isPassword && (
                    <button
                        type="button"
                        className="input-icon input-icon-right input-password-toggle"
                        onClick={() => setShowPassword(!showPassword)}
                        tabIndex={-1}
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                    >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                )}
                {!isPassword && rightIcon && (
                    <span className="input-icon input-icon-right">{rightIcon}</span>
                )}
            </div>
            {(error || helperText) && (
                <span
                    id={`${inputId}-error`}
                    className={cn('input-helper', { 'input-helper-error': error })}
                >
                    {error || helperText}
                </span>
            )}
        </div>
    );
});

Input.displayName = 'Input';

export default Input;

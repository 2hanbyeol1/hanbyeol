import { ComponentProps } from 'react';

interface CheckboxProps extends Omit<ComponentProps<'input'>, 'size'> {
  text: string;
  size: 'sm' | 'lg';
}

function Checkbox({
  className,
  checked,
  onChange,
  text,
  size = 'sm',
}: CheckboxProps) {
  const inputVariantBySize = {
    sm: '',
    lg: '',
  };
  const inputVariantByChecked = {
    checked: 'bg-primary/90',
    unchecked: 'bg-primary/20 group-hover:bg-primary/25',
  };
  const labelVariant = {
    sm: 'text-sm',
    lg: 'text-lg',
  };

  return (
    <label className={`group flex cursor-pointer items-center ${className}`}>
      <input
        className={`absolute -z-50 opacity-0`}
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <div
        className={`relative mr-2 h-5 w-5 rounded-[4px] ${inputVariantBySize[size]} ${checked ? inputVariantByChecked.checked : inputVariantByChecked.unchecked}`}
      >
        {checked && (
          <span className="absolute left-1 top-1 z-10 h-2 w-3 -rotate-45 border-b-[3px] border-l-[3px] border-white"></span>
        )}
      </div>
      <span className={`${labelVariant[size]}`}>{text}</span>
    </label>
  );
}
export default Checkbox;

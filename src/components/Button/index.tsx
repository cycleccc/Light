import { FC, useCallback } from 'react';
import { Button as TButton } from '@taroify/core';
import type { ButtonProps } from '@taroify/core/button';
import type { ITouchEvent } from '@tarojs/components';

export interface IButtonProps extends ButtonProps {
  vibrate?: boolean;
}

const Button: FC<IButtonProps> = ({
  children,
  vibrate = true,
  onClick,
  ...props
}) => {
  const handleClick = useCallback(
    ($event: ITouchEvent) => {
      if (onClick) {
        onClick($event);
      }
    },
    [onClick],
  );
  return (
    <TButton {...props} onClick={handleClick}>
      {children}
    </TButton>
  );
};

export default Button;

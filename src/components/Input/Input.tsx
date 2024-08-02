import { InputProps } from './Input.props';
import styles from './Input.module.scss';
import cn from 'classnames';
import { ForwardedRef, forwardRef } from 'react';

export const InputComponent = forwardRef(({type, className, error, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
	return (
		<div className={cn(className, styles["input-wrapper"])}>
			<input type={type} className={cn(styles["input"], {
				[styles["input__text"]]: type === "text",
				[styles["input__tel"]]: type === "tel",
				[styles["input__checkbox"]]: type === "checkbox",
				[styles["error"]]: error
			})} ref={ref} {...props} />
			{error && <span className={styles["error-message"]}>{error.message}</span>}
		</div>
	);
});
import React from "react";
import { Container, Icon, Color } from "./input-color.styled";

export const InputColor: React.FC<{
	icon: string;
	value: string;
	setValue: (e:string) => any;
}> = ({ icon, setValue, value }) => {
	const ref = React.useRef<HTMLInputElement | null>(null);
	return (
		<Container
			style={{ backgroundColor: value }}
			onClick={() => ref.current!.click()}
		>
			<Color
				onChange={(e) => setValue(e.target.value)}
				value={value}
				ref={ref}
				type="color"
			/>
			<Icon>{icon}</Icon>
		</Container>
	);
};

import React from "react";
import {Body} from '../events/events.styled'
import { Container, Left, Right, Section } from "./settings.styled";
import { ISections } from "./settings.types";
const sections = ["Customization", "Time", "Holidays", "Language"];
export const Settings = () => {
	const [selectedSection, setSelectedSection] =
		React.useState<ISections | null>(null);
	const right = React.useMemo(() => {
		switch (selectedSection) {
			// case "customization": {

			// }
			default:
				return <></>;
		}
	}, [selectedSection]);
	return (
		<Container>
			<Body>
				<Left>
					{sections.map((s) => {
						return <Section>{s}</Section>;
					})}
				</Left>
				<Right>{right}</Right>
			</Body>
		</Container>
	);
};

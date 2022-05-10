import React from "react";
import { Body } from "../events/events.styled";
import {
	Container,
	EventIcon,
	Left,
	Right,
	Section,
	SectionOptions,
	Line,
	Text,
} from "./settings.styled";
import { ISections } from "./settings.types";
import { Label } from "../events/components/modals/info-modal/info-modal.styled";
import { InputColor } from "./input-color/input-color";
const sections = ["Customization", "Time", "Holidays", "Language"];
export const Settings = () => {
	const [selectedSection, setSelectedSection] =
		React.useState<ISections | null>(null);
	const [colorMyEvent, setColorMyEvent] = React.useState("#16d346");
	const [colorHoliday, setColorHoliday] = React.useState("#ecb11c");
	const [colorWeekend, setColorWeekend] = React.useState("#e11111");
	console.log(colorMyEvent)
	const right = React.useMemo(() => {
		switch (selectedSection) {
			case "customization": {
				return (
					<SectionOptions>
						<Label>Event icon customization</Label>
						<Line>
							<Text>My event</Text>
							<InputColor
								value={colorMyEvent}
								setValue={setColorMyEvent}
								icon="E"
							/>
						</Line>
						<Line>
							<Text>Holidays</Text>
							<InputColor
								value={colorHoliday}
								setValue={setColorHoliday}
								icon="H"
							/>
						</Line>
						<Line>
							<Text>Weekend</Text>
							<InputColor
								value={colorWeekend}
								setValue={setColorWeekend}
								icon="W"
							/>
						</Line>
					</SectionOptions>
				);
			}
			default:
				return <></>;
		}
	}, [selectedSection]);
	return (
		<Container>
			<Body>
				<Left>
					{sections.map((s) => {
						return (
							<Section onClick={() => setSelectedSection("customization")}>
								{s}
							</Section>
						);
					})}
				</Left>
				<Right>{right}</Right>
			</Body>
		</Container>
	);
};

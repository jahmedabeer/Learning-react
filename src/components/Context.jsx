import Heading from "./propdrilling/Heading";
import Section from "./propdrilling/Section";

export default function Context() {
    return (
        <>
            <Section>
                <Heading level={1}>Title</Heading>
                <Section level={3}>
                    <Heading>Heading</Heading>
                    <Heading>Heading</Heading>
                    <Heading>Heading</Heading>
                    <Section>
                        <Heading level={3}>Sub-heading</Heading>
                        <Heading level={3}>Sub-heading</Heading>
                        <Heading level={3}>Sub-heading</Heading>
                        <Section>
                            <Heading level={4}>Sub-sub-heading</Heading>
                            <Heading level={4}>Sub-sub-heading</Heading>
                            <Heading level={4}>Sub-sub-heading</Heading>
                        </Section>
                    </Section>
                </Section>
            </Section>
        </>
    );
}
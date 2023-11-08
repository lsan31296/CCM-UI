/**
 * Responsible for defining the template for group renderings header in DevExtreme's List component
 */

export const LandingPageGroupTemplate = (data) => {
    return (
        <p> {data.key} | {data.overallCount} Links </p>
    );
};
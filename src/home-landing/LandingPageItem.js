/**
 * Responsible for the list template of how the items will be rendered in the list.
 */
export const LandingPageItem = (data) => {
    return (
        <a href={data.link}>{data.name}</a>
    )
};
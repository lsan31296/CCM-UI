import { Tooltip } from "devextreme-react";

/**
 * Responsible for the list template of how the items will be rendered in the list.
 * This also may need to be the home of the ToolTip component from DevExtreme. Must be
 * binded by the id of the anchor tag with the target property of ToolTip.
 */
export const LandingPageItem = (data) => {
    const handleBrowserButtonClick = () => {
        window.location.replace(data.link);
    }
    
    if(data.link.startsWith('https://')) {
        console.log("True");
        return (
            <>
                <a id={data.id.slice(1)} onClick={handleBrowserButtonClick}>{data.name}</a>
                {/*<button onClick={handleBrowserButtonClick}>{data.name}</button>*/}
                <Tooltip target={data.id} showEvent="mouseenter" hideEvent="mouseleave" position="right" hideOnOutsideClick={false}>
                    {data.description}
                </Tooltip>
            </>
        )
    } else {
        return (
            <>
                <a id={data.id.slice(1)} href={data.link}>{data.name}</a>
                <Tooltip target={data.id} showEvent="mouseenter" hideEvent="mouseleave" position="right" hideOnOutsideClick={false}>
                    {data.description}
                </Tooltip>
            </>
        )
    }
};
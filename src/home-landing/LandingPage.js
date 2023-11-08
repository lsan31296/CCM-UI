/**
 * This page will be responsible for displaying the landing page with all of the links that
 * internal users will have access to and use on a daily basis
 */
import "./LandingPage.css";
import { List } from "devextreme-react";
import { landingPageLinksData1, landingPageLinksData2, landingPageLinksData3, landingPageLinksData4 } from "../utils/helperFunctions";
import { LandingPageGroupTemplate } from "./LandingPageGroupTemplate";
import { LandingPageItem } from "./LandingPageItem";

export default function LandingPage({...props}) {
    const { previousBD } = props;
    const linksData1 = landingPageLinksData1(previousBD);
    const linksData2 = landingPageLinksData2(previousBD);
    const linksData3 = landingPageLinksData3(previousBD);
    const linksData4 = landingPageLinksData4(previousBD);
    return (
        <div id="landing-page-container">
            <h1>Landing Page</h1>
            <div id="grouped-list-grid-container">
                <div className="row">

                    <div className="col">
                        <List
                            dataSource={linksData1}
                            height="100%"
                            grouped={true}
                            collapsibleGroups={true}
                            itemRender={LandingPageItem}
                            groupRender={LandingPageGroupTemplate} />
                    </div>

                    <div className="col">
                        <List
                            dataSource={linksData2}
                            height="100%"
                            grouped={true}
                            collapsibleGroups={true}
                            itemRender={LandingPageItem}
                            groupRender={LandingPageGroupTemplate} />
                    </div>

                </div>
                <div className="row">

                    <div className="col">
                        <List
                            dataSource={linksData3}
                            height="100%"
                            grouped={true}
                            collapsibleGroups={true}
                            itemRender={LandingPageItem}
                            groupRender={LandingPageGroupTemplate} />
                    </div>

                    <div className="col">
                        <List
                            dataSource={linksData4}
                            height="100%"
                            grouped={true}
                            collapsibleGroups={true}
                            itemRender={LandingPageItem}
                            groupRender={LandingPageGroupTemplate} />
                    </div>

                </div>
            </div>
        </div>
    );
}
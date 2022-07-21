const Tabs = (props) => {
    const { allTabs, currentTabIndex, setCurrentTabIndex } = props;

    const tabStyle = (index) => {
        if ( index === currentTabIndex) {
            return "selectedTab";
        }
        else {
            return "noneSelectedTab";
        }
    }

    const setSelectedTab = (index) => {
        setCurrentTabIndex(index);
    }

    return (
        <div style={{justifyContent: "center", textAlign: "left", display: "flex", padding: "10px"}}>
            {
                allTabs.map((item, index)=> (
                    <div className={'tab ${ tabStyle(index) }'} onClick = {(e) => setSelectedTab(index) }>
                        { item.label}
                    </div>
                ))
            }
        </div>
    )
}

export default Tabs;
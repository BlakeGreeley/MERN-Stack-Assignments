const Message = (props) => {
    const { allTabs, currentTabIndex} = props;

    return (
        <div className="messages">
            { allTabs[currentTabIndex].content }
        </div>
    )
}

export default Message;
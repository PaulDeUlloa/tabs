import React, { useState } from 'react';


const Tabs = (props) => {
    const { selectionsArr } = props;

    const [content, setContent] = useState(selectionsArr[0].content);

    const changeTabs = (value) => {
        setContent(value.content);
    }

    return (
        <div className="container">
            <div className="header">
                {selectionsArr.map((selections, Idx) => {
                    return <div key={Idx} className="btn-group">
                        <button className="btn btn-info" onClick={(e) => changeTabs(selections)}>
                            {selections.tab}
                        </button>
                    </div>
                })
                }
            </div>
            <div className="content">
                {content}
            </div>
        </div>
    );
}

export default Tabs;

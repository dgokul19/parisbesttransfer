import { Fragment, useMemo, useState } from "react";

// CSS
import classes from "./page.module.scss";

export default function AccorionContent({ contentList }) {
    const list = useMemo(() => {
        return contentList?.map(li => {
            li.isExpanded = false;
            return li;
        });
    },[]);
    const [accordContent, setAccordionContent] = useState(list);
    
    const toggleContent = (faqIdx) => {
        let updateContent = [...accordContent].map((ele, idx) => {
            if (faqIdx === idx) {
                ele.isExpanded = ele.isExpanded ? false : true;
            } else {
                ele.isExpanded = false;
            }
            return ele;
        })
        setAccordionContent(updateContent);
    };

    return (
        <Fragment>
            <div className={classes.accordionWrapper}>
                {
                    accordContent?.map((faq, idx) => (
                        <div key={idx} className={classes.accordBox}>
                            <div className={classes.questnElem} onClick={() => toggleContent(idx)}>
                                {faq.question}
                                {faq.isExpanded ? <i className="fa fa-angle-down"></i> : <i className="fa fa-angle-right"></i>}
                            </div>
                            <div className={`${classes.answerElem} ` + `${faq.isExpanded && classes["activeElem"]} `}>{faq.answer}</div>
                        </div>
                    ))
                }
            </div>
        </Fragment>
    )
}

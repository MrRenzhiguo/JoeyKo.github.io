/**
 * Created by Ko on 2016/12/11.
 */
import React from 'react';
import QueueAnim from 'rc-queue-anim';

export default class approach extends React.Component {
    render() {
        return(
            <QueueAnim delay={300} className="queue-simple">
                <div key="a" className="queue">依次进场</div>
                <div key="b" className="queue">依次进场</div>
                <div key="c" className="queue">依次进场</div>
                <div key="d" className="queue">依次进场</div>
            </QueueAnim>
        )
    }

}
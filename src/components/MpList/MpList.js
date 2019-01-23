import React from 'react';
import MpListItem from "./MpListItem";
import './MpList.css'

const MpList = ({MPs, emptyListMessage}) => {
    return (
        <div className='MpList'>
            {MPs.length > 0 ? MPs.map((MP, i) => <MpListItem key={i} MP={MP}/>) : emptyListMessage}
        </div>
    )
};

export default MpList;
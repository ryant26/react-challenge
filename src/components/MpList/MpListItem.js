import React from 'react';
import './MpListItem.css'

const MpListItem = ({MP}) => {
    return (
        <div className='MpListItem'>
            <img src={MP.photo_url} alt='MP'/>
            <table>
                <tr>
                    <td className='key'>Name:</td>
                    <td className='value'>{MP.name}</td>
                </tr>
                <tr>
                    <td className='key'>Email:</td>
                    <td className='value'>{MP.email}</td>
                </tr>
                <tr>
                    <td className='key'>Website:</td>
                    <td className='value'><a href={MP.url}>{MP.url}</a></td>
                </tr>
            </table>
        </div>
    )
};

export default MpListItem;
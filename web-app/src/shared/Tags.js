import style from './Tags.module.css';
import PropTypes from 'prop-types';
import React from 'react';

export const Tags = (props) => {

    return <React.Fragment>
            <h5 className={style.title}>{props.label}</h5>
            <ul className={style.tags}>
              { props.tags.map((requisito, index) =>
                    (<li className={style.tags__item} key={index}>{requisito}</li>)
              )} 
            </ul>   
           </React.Fragment>
}

Tags.propTypes = {
    tags: [],
    label: 'Tags'
}

Tags.propTypes = {
    requisitos: PropTypes.array
}




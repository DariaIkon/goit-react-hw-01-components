import React from 'react';
import propTypes from 'prop-types'
import css from './Statistics.module.css'
function Statistics({stats, title}) {
    const component = stats.map(({id, label, percentage}) => {
        return (<li key={id} className={css.item}>
                <span className={css.label}>{label}</span>
            <span className={css.percentage}>{ percentage}</span>
            </li>)
    })
    return (
        <section className={css.statistics}>
            <h2 className={css.title}>{ title}</h2>

        <ul className={css.stat_list}>
            {component}
  </ul>
</section>
    )
    
}

Statistics.propTypes = {
    stats: propTypes.arrayOf(
        propTypes.exact({
            id: propTypes.string.isRequired,
            label: propTypes.string.isRequired,
            percentage: propTypes.string.isRequired,
       })
   )
}

export default Statistics;
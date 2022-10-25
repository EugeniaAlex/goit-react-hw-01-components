import css from './Statistics.module.css';
import PropTypes from 'prop-types';
export default function Statistics({ title, stats }) {
    return (<section className={css.statistics}>
        {title ? <h2 className={css.title}>{title}</h2> : null}
  

        <ul className={css.statList}>{stats.map(item => (
            <li key={item.id}>
                <span className={css.label}>{item.label}</span>
                <span className={css.percentage}>{item.percentage}%</span>
            </li>
        ))}
        </ul>
        </section>)
        };

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }),),
}
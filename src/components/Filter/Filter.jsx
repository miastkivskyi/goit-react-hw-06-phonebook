import { setFilter } from '../../redux/filter';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersFilter } from '../../redux/selectors';

import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getUsersFilter);

  const onFilterChange = query => {
    dispatch(setFilter(query.toLowerCase()));
  };

  return (
    <>
      <label htmlFor="findInputId" className={css.container}>
        <h3 className={css.titleFind}>Find contacts by name:</h3>
        <input
          type="text"
          name="filterContact"
          id="findInputId"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
          value={filter}
          onChange={e => onFilterChange(e.target.value)}
          className={css.inputFind}
        ></input>
      </label>
    </>
  );
};

export default Filter;

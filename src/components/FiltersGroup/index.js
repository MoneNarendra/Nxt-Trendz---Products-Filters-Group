import {IoSearch} from 'react-icons/io5'

import './index.css'

const FiltersGroup = props => {
  const {
    categoryOptions,
    ratingsList,
    onClickCatagory,
    onClickRating,
    titleSearch,
    onChangingTitleSearch,
    onClearButton,
  } = props

  const renderCatagoryItems = eachCatagory => {
    const {categoryId, name} = eachCatagory
    const selectCatagory = () => {
      onClickCatagory(categoryId)
    }
    return (
      <li key={categoryId}>
        <button type="button" className="filter-items" onClick={selectCatagory}>
          <p className="filter-name">{name}</p>
        </button>
      </li>
    )
  }

  const rnderRatingsItems = eachRating => {
    const {ratingId, imageUrl} = eachRating
    const selectRating = () => {
      onClickRating(ratingId)
    }

    return (
      <li key={ratingId}>
        <button type="button" className="filter-items" onClick={selectRating}>
          <img
            src={imageUrl}
            alt={`rating ${ratingId}`}
            className="rating-img"
          />
          <p className="filter-name">& upto</p>
        </button>
      </li>
    )
  }

  const userInput = event => {
    onChangingTitleSearch(event.target.value)
  }

  const onClear = () => {
    onClearButton()
  }

  return (
    <div className="filters-group-container">
      <div className="search-container">
        <input
          type="search"
          className="seach-ele"
          placeholder="Search"
          onChange={userInput}
          value={titleSearch}
        />
        <IoSearch className="seach-icon" />
      </div>
      <h1 className="filters-headings">Category</h1>
      <ul className="filters-list-containers">
        {categoryOptions.map(eachCatagory => renderCatagoryItems(eachCatagory))}
      </ul>
      <h1 className="filters-headings">Rating</h1>
      <ul className="filters-list-containers">
        {ratingsList.map(eachRating => rnderRatingsItems(eachRating))}
      </ul>
      <button type="button" className="clear-button" onClick={onClear}>
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup

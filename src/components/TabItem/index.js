import './index.css'

const TabItem = props => {
  const {eachTabDetails, onclickTabItem, isActive} = props
  const {tabId, displayText} = eachTabDetails
  const onChangeActiveTabId = isActive ? 'add-color' : ''
  const changeActiveTabId = () => {
    onclickTabItem(tabId)
  }
  return (
    <li className="tabitem-li">
      <button
        className={`btn ${onChangeActiveTabId}`}
        type="button"
        onClick={changeActiveTabId}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem

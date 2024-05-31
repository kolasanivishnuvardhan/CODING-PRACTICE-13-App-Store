import './index.css'

const AppItem = props => {
  const {eachAppDetails} = props
  const {appId, appName, imageUrl, category} = eachAppDetails
  return (
    <li className="appitem-li">
      <img src={imageUrl} alt={appName} className="img" />
      <p className="img-name">{appName}</p>
    </li>
  )
}

export default AppItem

import ReactSelect from "react-select"

const Settings = ({showSettings, previousPageSize, pageSizeChanged}) => {

    const options  = [
        { value: 5, label: 5 },
        { value: 6, label: 6 },
        { value: 10, label: 10 },
        { value: 20, label: 20 },
      ];

     const prevSizeIndex = options.findIndex(option=>option.value===previousPageSize) 

  return (
    <div className="card rounded shadow m-5 p-3">
      <h2>Settings</h2>
      <div className="d-flex justify-content-md-around">
        <span>Items per page </span>
        <ReactSelect
                  options={options}
                  defaultValue={options[prevSizeIndex]}
                  onChange={pageSizeChanged}
                />
        </div>
        <div>
            <button className="btn btn-info my-2" onClick={showSettings}>Save & Return Back</button>
      </div>
    </div>
  )
}

export default Settings

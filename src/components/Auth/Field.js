import React from 'react'
const Field = ({
  fieldContainerClass,
  placeholder,
  type,
  handleChange,
  value,
  name,
  error
}) => {
  return fieldContainerClass === 'sm' ? (
    <div className="col col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12">
      <div className="form-group label-floating">
        <label className="control-label">{placeholder}</label>
        <input
          className="form-control"
          placeholder=""
          type={type}
          onChange={handleChange}
          value={value}
          name={name}
        />
        {error && <span className="material-input-error">{error}</span>}
      </div>
    </div>
  ) : (
    <div className="form-group label-floating">
      <label className="control-label">{placeholder}</label>
      <input
        className="form-control"
        placeholder=""
        type={type}
        onChange={handleChange}
        value={value}
        name={name}
      />
      {error && <span className="material-input-error">{error}</span>}
    </div>
  )
}

export default Field

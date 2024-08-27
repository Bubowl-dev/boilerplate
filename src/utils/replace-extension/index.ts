const replaceExtension = (value: string, type: string, onlyProduction = true) => {
  const ext = value.slice(value.lastIndexOf('.'));

  if (onlyProduction && process.env.NODE_ENV !== 'production') {
    return [value, ext] as const;
  }

  return [value.replace(new RegExp(`${ext}$`), `.${type}`), ext] as const;
};

export default replaceExtension;

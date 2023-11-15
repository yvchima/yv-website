export default function (value, options, key = null) {
  let map = {};
  //console.log(value)
  if (Array.isArray(options)) {
    for (let option of options) {
      map[option.value || option.id || option] = option;
    }
  } else {
    map = options;
  }

  //console.log(map)
  const selectedValue = map[value];
  //console.log(map)
  if (!key) {
    return selectedValue;
  }
  return selectedValue && selectedValue[key];
}

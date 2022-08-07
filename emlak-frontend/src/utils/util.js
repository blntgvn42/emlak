export function doItemPropertiesEqualEveryBoundSelectedOption(item) {
    return Object
        // create key value pairs from the `this` bound selected options.
        .entries(this)
        // skip/ignore selected option entries where `value` equals `null`.
        .filter(([key, value]) => value !== null)
        // execute item specific selected option validation via `every`.
        .every(([key, value]) => item[key] === value);
}

export const getChangedValues = (values, initialValues) => {
    return Object
        .entries(values)
        .reduce((acc, [key, value]) => {
            const hasChanged = initialValues[key] !== value
            if (hasChanged) {
                acc[key] = value
            }

            return acc
        }, {})
}
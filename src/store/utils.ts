export const excludeObjectProps = <TObject extends object, TKeys extends Array<keyof TObject>>(
  object: TObject,
  targetKeys: TKeys
): Omit<TObject, TKeys[number]> => {
  const newObject = { ...object };

  targetKeys.forEach((key) => {
    delete newObject[key];
  });

  return newObject;
};

// This is not a safe solution for generating IDs.
// Consider using UUID in a prodution app.
export const generateId = () => {
  return Math.random() * 1_000;
};

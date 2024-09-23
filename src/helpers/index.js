export const getSortedImagesList = (data) => {
  const sortedList = data.sort((a, b) => {
    // Split the strings to get the date and the number
    const [dateA, numA] = a.match(/(.*?)-(\d+)\.png$/).slice(1);
    const [dateB, numB] = b.match(/(.*?)-(\d+)\.png$/).slice(1);

    // Compare dates
    const dateComparison = dateA.localeCompare(dateB);
    if (dateComparison !== 0) {
        return dateComparison;
    }

    // Compare numbers as integers
    return +numA - +numB;
  });

  return sortedList;
};
